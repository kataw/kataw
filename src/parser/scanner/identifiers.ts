import { ParserState } from '../common';
import { NodeFlags, SyntaxKind } from '../../ast/syntax-node';
import { Char } from './char';
import { AsciiCharFlags, AsciiCharTypes } from './asciiChar';
import { isIdentifierPart, toHex, fromCodePoint } from './common';
import { DiagnosticCode, diagnosticMap } from '../../diagnostic/diagnostic-code';
import { DiagnosticSource } from '../../diagnostic/diagnostic';

// Intentionally negative
const enum Escape {
  Failure = -1
}

// Normal object is much faster than Object.create(null), even with typeof check to avoid Object.prototype interference
export const descKeywordTable: { [key: string]: SyntaxKind | null } = {
  __proto__: null,
  this: SyntaxKind.ThisKeyword,
  function: SyntaxKind.FunctionKeyword,
  if: SyntaxKind.IfKeyword,
  return: SyntaxKind.ReturnKeyword,
  var: SyntaxKind.VarKeyword,
  else: SyntaxKind.ElseKeyword,
  for: SyntaxKind.ForKeyword,
  new: SyntaxKind.NewKeyword,
  in: SyntaxKind.InKeyword,
  typeof: SyntaxKind.TypeofKeyword,
  while: SyntaxKind.WhileKeyword,
  case: SyntaxKind.CaseKeyword,
  break: SyntaxKind.BreakKeyword,
  try: SyntaxKind.TryKeyword,
  catch: SyntaxKind.CatchKeyword,
  delete: SyntaxKind.DeleteKeyword,
  throw: SyntaxKind.ThrowKeyword,
  switch: SyntaxKind.SwitchKeyword,
  continue: SyntaxKind.ContinueKeyword,
  default: SyntaxKind.DefaultKeyword,
  instanceof: SyntaxKind.InstanceofKeyword,
  do: SyntaxKind.DoKeyword,
  void: SyntaxKind.VoidKeyword,
  finally: SyntaxKind.FinallyKeyword,
  async: SyntaxKind.AsyncKeyword,
  await: SyntaxKind.AwaitKeyword,
  class: SyntaxKind.ClassKeyword,
  const: SyntaxKind.ConstKeyword,
  constructor: SyntaxKind.ConstructorKeyword,
  debugger: SyntaxKind.DebuggerKeyword,
  export: SyntaxKind.ExportKeyword,
  extends: SyntaxKind.ExtendsKeyword,
  false: SyntaxKind.FalseKeyword,
  from: SyntaxKind.FromKeyword,
  get: SyntaxKind.GetKeyword,
  implements: SyntaxKind.ImplementsKeyword,
  import: SyntaxKind.ImportKeyword,
  let: SyntaxKind.LetKeyword,
  null: SyntaxKind.NullKeyword,
  of: SyntaxKind.OfKeyword,
  package: SyntaxKind.PackageKeyword,
  private: SyntaxKind.PrivateKeyword,
  protected: SyntaxKind.ProtectedKeyword,
  public: SyntaxKind.PublicKeyword,
  set: SyntaxKind.SetKeyword,
  static: SyntaxKind.StaticKeyword,
  super: SyntaxKind.SuperKeyword,
  true: SyntaxKind.TrueKeyword,
  with: SyntaxKind.WithKeyword,
  yield: SyntaxKind.YieldKeyword,
  //enum: SyntaxKind.EnumKeyword,
  // eval: SyntaxKind.Eval,
  as: SyntaxKind.AsKeyword,
  //arguments: SyntaxKind.Arguments,
  //target: SyntaxKind.Target,
  //meta: SyntaxKind.Meta,
  string: SyntaxKind.StringKeyword,
  number: SyntaxKind.NumberKeyword,
  boolean: SyntaxKind.BooleanKeyword,
  symbol: SyntaxKind.SymbolKeyword,
  any: SyntaxKind.AnyKeyword,
  declare: SyntaxKind.DeclareKeyword,
  type: SyntaxKind.TypeKeyword,
  //readonly: SyntaxKind.ReadonlyKeyword,
  //infer: SyntaxKind.InferKeyword,
  //is: SyntaxKind.IsKeyword,
  //keyof: SyntaxKind.KeyOfKeyword,
  //intrinsic: SyntaxKind.IntrinsicKeyword,
  //unique: SyntaxKind.UniqueKeyword,
  //asserts: SyntaxKind.AssertsKeyword,
  never: SyntaxKind.NeverKeyword,
  unknown: SyntaxKind.UnknownKeyword,
  object: SyntaxKind.ObjectKeyword,
  //bigint: SyntaxKind.BigIntKeyword,
  undefined: SyntaxKind.UndefinedKeyword,
  //abstract: SyntaxKind.AbstractKeyword,
  //require: SyntaxKind.RequireKeyword,
  //namespace: SyntaxKind.NamespaceKeyword }
  opaque: SyntaxKind.OpaqueKeyword
};

// Scan identifer and keyword and do a lookup for keywords
export function scanIdentifierOrKeyword(parser: ParserState, cp: number, source: string): SyntaxKind {
  while (AsciiCharTypes[cp] & AsciiCharFlags.IdentifierPart) {
    cp = source.charCodeAt(++parser.pos);
  }

  parser.tokenValue = source.substring(parser.tokenPos, parser.pos);

  if (cp === Char.Backslash || cp > 128) {
    parser.tokenValue += scanIdentifierParts(parser, source);
    parser.tokenRaw = source.substring(parser.tokenPos, parser.pos);
    const keyword = descKeywordTable[parser.tokenValue];
    if (keyword != undefined) {
      parser.nodeFlags |= NodeFlags.EscapedKeywordOrIdentifier;
      return keyword;
    }
    return SyntaxKind.Identifier;
  }

  parser.tokenRaw = source.substring(parser.tokenPos, parser.pos);

  const keyword = descKeywordTable[parser.tokenValue];
  if (keyword != undefined) return keyword;
  return SyntaxKind.Identifier;
}

// Scan identifier - no keyword lookup
export function scanIdentifier(parser: ParserState, cp: number, source: string): SyntaxKind {
  while (AsciiCharTypes[cp] & AsciiCharFlags.IdentifierPart) {
    cp = source.charCodeAt(++parser.pos);
  }

  parser.tokenValue = source.substring(parser.tokenPos, parser.pos);

  if (cp === Char.Backslash || cp > 128) {
    parser.tokenValue += scanIdentifierParts(parser, source);
  }
  parser.tokenRaw = source.substring(parser.tokenPos, parser.pos);
  return SyntaxKind.Identifier;
}

export function scanIdentifierParts(parser: ParserState, source: string): string {
  let result = '';
  let start = parser.pos;
  let code!: number | null;
  let cp = source.charCodeAt(parser.pos);
  do {
    if (isIdentifierPart(cp)) {
      parser.pos++;
    } else if (cp === Char.Backslash) {
      result += source.slice(start, parser.pos);
      code = scanIdentifierEscape(parser);
      // We intentionally check for '-1' so we can break out of the loop
      // if we have encountered an error, and avoid double diagnostics
      if (code < 0) break;
      result += fromCodePoint(code);
      start = parser.pos;
    }
    // Check for lead surrogate (U+d800..U+dbff)
    else {
      if ((cp & 0xfc00) !== 0xd800) break;
      // trail surrogate (U+dc00..U+dfff)
      const trail = source.charCodeAt(parser.pos + 1);
      // 10.1.3 Static Semantics: UTF16SurrogatePairToCodePoint ( lead, trail )
      cp = 0x10000 + ((cp & 0x3ff) << 10) + (trail & 0x3ff);
      if ((trail & 0xfc00) !== 0xdc00 || !isIdentifierPart(cp)) {
        parser.onError(
          DiagnosticSource.Parser,
          diagnosticMap[DiagnosticCode.Invalid_astral_character],
          parser.curPos,
          parser.pos
        );
      }
      parser.pos += 2;
    }
    cp = source.charCodeAt(parser.pos);
  } while (parser.pos < parser.end);

  result += source.substring(start, parser.pos);
  return result;
}

export function scanIdentifierEscape(parser: ParserState): number {
  let pos = parser.pos;

  if (parser.source.charCodeAt(pos + 1) !== Char.LowerU) {
    parser.onError(
      DiagnosticSource.Parser,
      diagnosticMap[DiagnosticCode.Invalid_hexadecimal_escape_sequence],
      parser.curPos,
      parser.pos
    );
    return Escape.Failure;
  }

  pos += 2; // skips '\\', 'u'

  let cp = parser.source.charCodeAt(pos);

  // Accept both \uxxxx and \u{xxxxxx}. In the latter case, the number of
  // hex digits between { } is arbitrary. \ and u have already been scanned.
  if (cp === Char.LeftBrace) {
    pos++; // skips '{'

    // Mark this as extended unicode escapes in identifiers, per es6 spec
    parser.nodeFlags |= NodeFlags.ExtendedUnicodeEscape;

    let digit = toHex(parser.source.charCodeAt(pos));

    let code = 0;

    while (digit >= 0) {
      code = (code << 4) | digit;
      if (code > Char.LastUnicodeChar) {
        parser.onError(
          DiagnosticSource.Parser,
          diagnosticMap[DiagnosticCode.Unicode_codepoint_must_not_be_greater_than_0x10FFFF],
          parser.curPos,
          parser.pos
        );
        return Escape.Failure;
      }

      cp = parser.source.charCodeAt(++pos);

      digit = toHex(cp);
    }

    // At least 4 characters have to be read
    if (0 < digit || cp !== Char.RightBrace) {
      // The 'pos' value can't be set if we have a missing '}', so that we can report an nice error message
      // when parsing out cases like 'x\u{0 foo' where '}'.
      parser.onError(
        DiagnosticSource.Parser,
        diagnosticMap[DiagnosticCode.Invalid_hexadecimal_escape_sequence],
        parser.curPos,
        parser.pos
      );
      return Escape.Failure;
    }

    parser.pos = pos + 1; // consumes '}'

    return code;
  }

  // \uNNNN

  let code = 0;

  parser.nodeFlags |= NodeFlags.UnicodeEscape;

  for (let i = 0; i < 4; i++) {
    const digit = toHex(cp);

    if (digit < 0) {
      parser.onError(
        DiagnosticSource.Parser,
        diagnosticMap[DiagnosticCode.Invalid_hexadecimal_escape_sequence],
        parser.curPos,
        parser.pos
      );
      return Escape.Failure;
    }
    code = (code << 4) | digit;
    cp = parser.source.charCodeAt(++pos);
  }

  parser.pos = pos;

  return code;
}
