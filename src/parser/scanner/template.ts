import { ParserState, Context } from '../common';
import { NodeFlags, SyntaxKind } from '../../ast/syntax-node';
import { AsciiCharFlags, AsciiCharTypes } from './asciiChar';
import { Char } from './char';
import { toHex, fromCodePoint } from './common';
import { DiagnosticCode, diagnosticMap } from '../../diagnostic/diagnostic-code';
import { DiagnosticSource, DiagnosticKind } from '../../diagnostic/diagnostic';

export function scanTemplate(parser: ParserState, context: Context, source: string): SyntaxKind {
  parser.pos++;

  let start = parser.pos;
  let ret = '';
  let cp = parser.source.charCodeAt(parser.pos);

  while (parser.pos < parser.end) {
    // '`'
    if (cp === Char.Backtick) {
      parser.tokenValue = ret;
      parser.pos++; // Consume '`'
      parser.tokenRaw = parser.source.slice(start, parser.pos - 1);
      return SyntaxKind.TemplateTail;
    }

    // '${'
    if (cp === Char.Dollar) {
      if (parser.source.charCodeAt(parser.pos + 1) === Char.LeftBrace) {
        parser.tokenRaw = parser.source.slice(start, parser.pos);
        parser.pos += 2; // Consume '$' and '{'
        parser.tokenValue = ret;
        return SyntaxKind.TemplateCont;
      }
      ret += '$';
    }

    // Escape character
    if (cp === Char.Backslash) {
      let start1 = parser.pos;
      const code = scanTemplateEscape(parser, source);
      if (code >= 0) {
        ret += fromCodePoint(code);
      } else if (code !== Escape.Empty && context & Context.TaggedTemplate) {
        ret = '';
        cp = scanBadTemplate(parser, cp);
      } else {
        handleStringError(parser, code, start1);
        ret += parser.source.slice(start + 1, parser.pos);
      }
    } else {
      parser.pos++;
      // The TRV of LineTerminatorSequence :: <CR> is the CV 0x000A.
      // The TRV of LineTerminatorSequence :: <CR><LF> is the sequence
      // consisting of the CV 0x000A.
      if (cp === Char.CarriageReturn && source.charCodeAt(parser.pos) === Char.LineFeed) {
        // Consume '\n'
        cp = parser.source.charCodeAt(++parser.pos);
      }
      ret += fromCodePoint(cp);
    }
    cp = parser.source.charCodeAt(parser.pos);
  }

  parser.onError(
    DiagnosticSource.Lexer,
    DiagnosticKind.Error,
    diagnosticMap[DiagnosticCode.Unterminated_template_literal],
    parser.curPos,
    parser.pos
  );

  parser.tokenValue = ret;

  return SyntaxKind.TemplateTail;
}

export function scanTemplateTail(parser: ParserState, context: Context): SyntaxKind {
  parser.pos--;
  parser.token = scanTemplate(parser, context, parser.source);
  return parser.token;
}

function handleStringError(parser: ParserState, code: Escape, start: number): void {
  let diagnostic!: DiagnosticCode;
  switch (code) {
    case Escape.Empty:
      return;
    case Escape.StrictOctal:
      diagnostic = DiagnosticCode.Octal_escape_sequences_are_not_allowed_in_template_literal;
      break;
    case Escape.EightOrNine:
      diagnostic = DiagnosticCode.Escapes_8_or_9_are_not_syntactically_valid_escapes;
      break;
    case Escape.InvalidHex:
      diagnostic = DiagnosticCode.Invalid_hexadecimal_escape_sequence;
      break;
    case Escape.OutOfRange:
      diagnostic = DiagnosticCode.Unicode_codepoint_must_not_be_greater_than_0x10FFFF;
  }
  parser.onError(DiagnosticSource.Lexer, DiagnosticKind.Error, diagnosticMap[diagnostic], start, parser.pos);
}

const enum Escape {
  Empty = -1,
  StrictOctal = -2,
  EightOrNine = -3,
  InvalidHex = -4,
  OutOfRange = -5
}

export function scanTemplateEscape(parser: ParserState, source: string): number {
  parser.pos++;
  if (parser.pos >= parser.end) {
    return Escape.Empty;
  }
  let ch = source.charCodeAt(parser.pos);
  parser.pos++;
  switch (ch) {
    // https://tc39.github.io/ecma262/#prod-SingleEscapeCharacter
    // one of ' " \ b f n r t v
    case Char.LowerB:
      return Char.Backspace;
    case Char.LowerF:
      return Char.FormFeed;
    case Char.LowerR:
      return Char.CarriageReturn;
    case Char.LowerN:
      return Char.LineFeed;
    case Char.LowerT:
      return Char.Tab;
    case Char.LowerV:
      return Char.VerticalTab;
    case Char.Zero:
      // Verify that it's `\0` and not e.g `\00` or `\05`.
      if ((AsciiCharTypes[source.charCodeAt(parser.pos)] & AsciiCharFlags.Decimal) === 0) {
        return ch - Char.Zero;
      }

    case Char.One:
    case Char.Two:
    case Char.Three:
    case Char.Four:
    case Char.Five:
    case Char.Six:
    case Char.Seven:
      return Escape.StrictOctal;
    // `8`, `9` (invalid escapes)
    case Char.Eight:
    case Char.Nine:
      return Escape.EightOrNine;
    case Char.LowerU:
      // '\u{DDDDDDDD}'

      if (source.charCodeAt(parser.pos) === Char.LeftBrace) {
        parser.pos++;

        // '\u{'
        parser.nodeFlags |= NodeFlags.ExtendedUnicodeEscape;

        // \u{N}
        // The first digit is required, so handle it *out* of the loop.
        let code = toHex(source.charCodeAt(parser.pos));

        if (code < 0) {
          return Escape.InvalidHex;
        }

        ch = source.charCodeAt(++parser.pos);
        let digits = 0;

        while (ch !== Char.RightBrace) {
          const digit = toHex(ch);

          if (digit < 0) {
            return Escape.EightOrNine;
          }
          code = (code << 4) | digit;

          // Check this early to avoid `code` wrapping to a negative on overflow (which is
          // reserved for abnormal conditions).
          if (code > Char.LastUnicodeChar) {
            return Escape.OutOfRange;
          }
          ch = source.charCodeAt(++parser.pos);
          digits++;
        }

        if (digits === 0) return Escape.InvalidHex;

        parser.pos++;
        return code;
      }

      parser.nodeFlags |= NodeFlags.UnicodeEscape;

      // \uNNNN

      let code = toHex(source.charCodeAt(parser.pos));
      if (code < 0) return Escape.InvalidHex;
      let pos = parser.pos;
      for (let i = 0; i < 3; i++) {
        ch = source.charCodeAt(++pos);
        const digit = toHex(ch);
        if (digit < 0) {
          return Escape.EightOrNine;
        }
        code = (code << 4) | digit;
      }
      parser.pos = pos += 1;

      return code;

    case Char.UpperX:
    case Char.LowerX:
      // '\xDD'
      const hi = toHex(source.charCodeAt(parser.pos));
      if (hi < 0) return Escape.InvalidHex;
      parser.pos++;
      const lo = toHex(source.charCodeAt(parser.pos));
      if (lo < 0) return Escape.InvalidHex;
      parser.pos++;
      return (hi << 4) | lo;

    // when encountering a LineContinuation (i.e. a backslash and a line terminator sequence),
    // the line terminator is interpreted to be "the empty code unit sequence".
    case Char.CarriageReturn:
      if (parser.pos < parser.end && source.charCodeAt(parser.pos) === Char.LineFeed) {
        parser.pos++;
      }
    //  falls through
    case Char.LineFeed:
    case Char.LineSeparator:
    case Char.ParagraphSeparator:
      return Escape.Empty;
    default:
      return ch;
  }
}

function scanBadTemplate(parser: ParserState, ch: number): number {
  while (ch !== Char.Backtick) {
    if (ch === Char.Dollar) {
      const pos = parser.pos + 1;
      if (pos < parser.end && parser.source.charCodeAt(pos) === Char.LeftBrace) {
        parser.pos = pos;
        return -ch;
      }
      return ch;
    }
    if (parser.pos >= parser.end) {
      parser.onError(
        DiagnosticSource.Lexer,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.Unexpected_token],
        parser.curPos,
        parser.pos
      );
      return ch;
    }
    parser.pos++;
    ch = parser.source.charCodeAt(parser.pos);
  }

  return ch;
}
