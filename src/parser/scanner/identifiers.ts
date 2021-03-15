import { ParserState } from '../../types';
import { DiagnosticKind, DiagnosticSource, error } from '../../diagnostics/diagnostic';
import { DiagnosticCode } from '../../diagnostics/diagnosticMessages.generated';
import { NodeFlags } from '../../ast/node';
import { Token, descKeywordTable } from '../../ast/token';
import { Char } from './char';
import { AsciiCharFlags, AsciiCharTypes } from './asciiChar';
import { isIdentifierPart, toHex, fromCodePoint } from './common';

// Intentionally negative
const enum Escape {
  Failure = -1
}

// Scan identifer and keyword and do a lookup for keywords
export function scanIdentifierOrKeyword(parser: ParserState, cp: number, source: string): Token {
  while (AsciiCharTypes[cp] & AsciiCharFlags.IdentifierPart) {
    cp = source.charCodeAt(++parser.pos);
  }

  parser.tokenValue = source.substring(parser.tokenPos, parser.pos);

  if (cp === Char.Backslash || cp > 128) {
    parser.tokenValue += scanIdentifierParts(parser, source);
    parser.raw = source.substring(parser.tokenPos, parser.pos);

    const keyword = descKeywordTable[parser.tokenValue];
    if (keyword !== undefined) {
      parser.nodeFlags |= NodeFlags.EscapedKeywordOrIdentifier;
      return keyword;
    }
    return Token.Identifier;
  }

  parser.raw = source.substring(parser.tokenPos, parser.pos);

  const keyword = descKeywordTable[parser.tokenValue];
  if (keyword !== undefined) return keyword;
  return Token.Identifier;
}

// Scan identifier - no keyword lookup
export function scanIdentifier(parser: ParserState, cp: number, source: string): Token {
  while (AsciiCharTypes[cp] & AsciiCharFlags.IdentifierPart) {
    cp = source.charCodeAt(++parser.pos);
  }

  parser.tokenValue = source.substring(parser.tokenPos, parser.pos);

  if (cp === Char.Backslash || cp > 128) {
    parser.tokenValue += scanIdentifierParts(parser, source);
  }
  parser.raw = source.substring(parser.tokenPos, parser.pos);
  return Token.Identifier;
}

export function scanIdentifierParts(parser: ParserState, source: string): string {
  let result = '';
  let start = parser.pos;
  let code: number | null = Escape.Failure;
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
        parser.diagnostics.push(
          error(DiagnosticKind.Error, DiagnosticSource.Lexer, DiagnosticCode.Invalid_astral_character, parser.pos, 1)
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
    parser.diagnostics.push(
      error(DiagnosticKind.Error, DiagnosticSource.Lexer, DiagnosticCode.Invalid_character, pos, /* length*/ 0)
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
        parser.diagnostics.push(
          error(
            DiagnosticKind.Error,
            DiagnosticSource.Lexer,
            DiagnosticCode.An_extended_Unicode_escape_value_must_be_between_0x0_and_0x10FFFF_inclusive,
            parser.pos,
            1
          )
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
      parser.diagnostics.push(
        error(DiagnosticKind.Error, DiagnosticSource.Lexer, DiagnosticCode.Invalid_character, parser.pos, 0)
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
      parser.diagnostics.push(
        error(DiagnosticKind.Error, DiagnosticSource.Lexer, DiagnosticCode.Invalid_character, parser.pos, 0)
      );
      return Escape.Failure;
    }
    code = (code << 4) | digit;
    cp = parser.source.charCodeAt(++pos);
  }

  parser.pos = pos;

  return code;
}
