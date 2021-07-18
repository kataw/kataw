import { ParserState, Context } from '../common';
import { NodeFlags, SyntaxKind } from '../../ast/syntax-node';
import { Char } from './char';
import { AsciiCharFlags, AsciiCharTypes } from './asciiChar';
import { toHex, fromCodePoint } from './common';
import { DiagnosticCode, diagnosticMap } from '../../diagnostic/diagnostic-code';
import { DiagnosticSource, DiagnosticKind } from '../../diagnostic/diagnostic';

export function scanString(parser: ParserState, context: Context, quote: number, source: string): SyntaxKind {
  if (quote === Char.SingleQuote) parser.nodeFlags |= NodeFlags.SingleQuote;
  parser.pos++;
  let result = '';
  let start = parser.pos;
  let ch = source.charCodeAt(parser.pos);
  while ((AsciiCharTypes[ch] & AsciiCharFlags.LineTerminator) === 0) {
    if (ch === Char.Backslash) {
      // Most common escape sequences first
      result += source.substring(start, parser.pos) + scanStringEscape(parser, context, source);
      start = parser.pos;
    } else {
      if (ch === quote) {
        result += source.substring(start, parser.pos);
        parser.pos++;
        parser.tokenRaw = source.substring(parser.tokenPos, parser.pos);
        parser.tokenValue = result;
        return SyntaxKind.StringLiteral;
      }
      parser.pos++;
    }

    if (parser.pos >= parser.end) break;

    ch = source.charCodeAt(parser.pos);
  }

  parser.onError(
    DiagnosticSource.Lexer,
    DiagnosticKind.Error,
    diagnosticMap[DiagnosticCode.Unterminated_string_literal],
    parser.curPos,
    parser.pos
  );

  parser.tokenValue = result += source.substring(start, parser.pos);
  parser.tokenRaw = source.slice(parser.tokenPos, parser.pos);
  return SyntaxKind.StringLiteral;
}

export function scanStringEscape(parser: ParserState, context: Context, source: string): string {
  const start = parser.pos;
  parser.pos++;
  if (parser.pos >= parser.end) {
    parser.onError(
      DiagnosticSource.Lexer,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Unexpected_token],
      start,
      parser.pos
    );
    return '';
  }
  let ch = source.charCodeAt(parser.pos);
  parser.pos++;
  switch (ch) {
    case Char.LowerB:
      return '\b';
    case Char.LowerT:
      return '\t';
    case Char.LowerN:
      return '\n';
    case Char.LowerV:
      return '\v';
    case Char.LowerF:
      return '\f';
    case Char.LowerR:
      return '\r';
    case Char.SingleQuote:
      return "'";
    case Char.DoubleQuote:
      return '"';
    case Char.Zero:
      if (AsciiCharTypes[source.charCodeAt(parser.pos)] & AsciiCharFlags.Decimal && context & Context.Strict) {
        parser.onError(
          DiagnosticSource.Lexer,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.Octal_escape_sequences_are_not_allowed_in_strict_mode],
          start,
          parser.pos
        );
      }
      return '\0';
    case Char.One:
    case Char.Two:
    case Char.Three:
    case Char.Four:
    case Char.Five:
    case Char.Six:
    case Char.Seven: {
      if (context & Context.Strict) {
        parser.onError(
          DiagnosticSource.Lexer,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.Octal_escape_sequences_are_not_allowed_in_strict_mode],
          start,
          parser.pos
        );
      }

      parser.nodeFlags |= NodeFlags.OctalIntegerLiteral;

      return fromCodePoint(ch);
    }

    // `8`, `9` (invalid escapes)
    case Char.Eight:
    case Char.Nine:
      // \8 \9 are acceptable in web compatibility mode
      if (context & (Context.OptionsDisableWebCompat | Context.Strict)) {
        parser.onError(
          DiagnosticSource.Lexer,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.Escapes_8_or_9_are_not_syntactically_valid_escapes],
          start,
          parser.pos
        );

        parser.nodeFlags |= NodeFlags.ContainsInvalidEscape;
      }
      return fromCodePoint(ch);

    case Char.LowerU:
      // '\u{DDDDDDDD}'

      if (source.charCodeAt(parser.pos) === Char.LeftBrace) {
        parser.pos++;

        // '\u{'

        parser.nodeFlags |= NodeFlags.ExtendedUnicodeEscape;

        // \u{N}
        // The first digit is required, so handle it *out* of the loop.

        ch = source.charCodeAt(parser.pos);

        let code = toHex(ch);

        if (code < 0) {
          parser.onError(
            DiagnosticSource.Lexer,
            DiagnosticKind.Error,
            diagnosticMap[DiagnosticCode.Invalid_hexadecimal_escape_sequence],
            start,
            parser.pos
          );
          return '';
        }

        ch = source.charCodeAt(++parser.pos);
        let digits = 0;

        while (ch !== Char.RightBrace) {
          const digit = toHex(ch);

          if (digit < 0) {
            parser.onError(
              DiagnosticSource.Lexer,
              DiagnosticKind.Error,
              diagnosticMap[DiagnosticCode.Invalid_hexadecimal_escape_sequence],
              start,
              parser.pos
            );
            return '';
          }
          code = (code << 4) | digit;

          // Check this early to avoid `code` wrapping to a negative on overflow (which is
          // reserved for abnormal conditions).
          if (code > Char.LastUnicodeChar) {
            parser.onError(
              DiagnosticSource.Lexer,
              DiagnosticKind.Error,
              diagnosticMap[DiagnosticCode.Unicode_codepoint_must_not_be_greater_than_0x10FFFF],
              start,
              parser.pos
            );
            return '';
          }
          ch = source.charCodeAt(++parser.pos);
          digits++;
        }

        if (digits === 0) return '';

        parser.pos++;
        return fromCodePoint(code);
      }

      parser.nodeFlags |= NodeFlags.UnicodeEscape;

      // \uNNNN
      let pos = parser.pos;

      ch = source.charCodeAt(pos);
      let code = toHex(ch);
      if (code < 0) {
        parser.onError(
          DiagnosticSource.Lexer,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.Invalid_hexadecimal_escape_sequence],
          start,
          parser.pos
        );
        return '';
      }

      for (let i = 0; i < 3; i++) {
        ch = source.charCodeAt(++pos);
        const digit = toHex(ch);
        if (digit < 0) {
          parser.onError(
            DiagnosticSource.Lexer,
            DiagnosticKind.Error,
            diagnosticMap[DiagnosticCode.Invalid_hexadecimal_escape_sequence],
            start,
            parser.pos
          );
          return '';
        }
        code = (code << 4) | digit;
      }
      parser.pos = pos += 1;

      return fromCodePoint(code);

    case Char.LowerX:
    case Char.UpperX:
      // '\xDD'
      const hi = toHex(source.charCodeAt(parser.pos));

      if (hi < 0) {
        parser.onError(
          DiagnosticSource.Lexer,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.Invalid_hexadecimal_escape_sequence],
          start,
          parser.pos
        );
        return '';
      }

      parser.pos++;

      const lo = toHex(source.charCodeAt(parser.pos));

      if (lo < 0) {
        parser.onError(
          DiagnosticSource.Lexer,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.Invalid_hexadecimal_escape_sequence],
          start,
          parser.pos
        );
        return '';
      }

      parser.pos++;

      return fromCodePoint((hi << 4) | lo);

    // when encountering a LineContinuation (i.e. a backslash and a line terminator sequence),
    // the line terminator is interpreted to be "the empty code unit sequence".
    case Char.CarriageReturn:
      if (parser.pos < parser.end && source.charCodeAt(parser.pos) === Char.LineFeed) {
        parser.pos++;
      }
    // falls through
    case Char.LineFeed:
    case Char.LineSeparator:
    case Char.ParagraphSeparator:
      return '';
    default:
      return fromCodePoint(ch);
  }
}
