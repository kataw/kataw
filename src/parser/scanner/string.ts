import { ParserState, Context } from '../common';
import { NodeFlags, SyntaxKind } from '../../ast/syntax-node';
import { Char } from './char';
import { AsciiCharFlags, AsciiCharTypes } from './asciiChar';
import { toHex, fromCodePoint } from './common';
import { DiagnosticCode, diagnosticMap } from '../../diagnostic/diagnostic-code';
import { DiagnosticSource } from '../../diagnostic/diagnostic';

const enum EscapeChars {
  // Intentionally negative
  Invalid = -1,
  LowerB,
  LowerT,
  LowerN,
  LowerV,
  LowerF,
  LowerR,
  SingleQuote,
  DoubleQuote,
  Zero,
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eigth,
  Nine,
  Unicode,
  Hex,
  CarriageReturn,
  LineFeed
}

const escapeCharTbl = [
  /*   0 - Null               */ EscapeChars.Invalid,
  /*   1 - Start of Heading   */ EscapeChars.Invalid,
  /*   2 - Start of Text      */ EscapeChars.Invalid,
  /*   3 - End of Text        */ EscapeChars.Invalid,
  /*   4 - End of Transm.     */ EscapeChars.Invalid,
  /*   5 - Enquiry            */ EscapeChars.Invalid,
  /*   6 - Acknowledgment     */ EscapeChars.Invalid,
  /*   7 - Bell               */ EscapeChars.Invalid,
  /*   8 - Backspace          */ EscapeChars.Invalid,
  /*   9 - Horizontal Tab     */ EscapeChars.Invalid,
  /*  10 - Line Feed          */ EscapeChars.LineFeed,
  /*  11 - Vertical Tab       */ EscapeChars.Invalid,
  /*  12 - Form Feed          */ EscapeChars.Invalid,
  /*  13 - Carriage Return    */ EscapeChars.CarriageReturn,
  /*  14 - Shift Out          */ EscapeChars.Invalid,
  /*  15 - Shift In           */ EscapeChars.Invalid,
  /*  16 - Data Line Escape   */ EscapeChars.Invalid,
  /*  17 - Device Control 1   */ EscapeChars.Invalid,
  /*  18 - Device Control 2   */ EscapeChars.Invalid,
  /*  19 - Device Control 3   */ EscapeChars.Invalid,
  /*  20 - Device Control 4   */ EscapeChars.Invalid,
  /*  21 - Negative Ack.      */ EscapeChars.Invalid,
  /*  22 - Synchronous Idle   */ EscapeChars.Invalid,
  /*  23 - End of Transmit    */ EscapeChars.Invalid,
  /*  24 - Cancel             */ EscapeChars.Invalid,
  /*  25 - End of Medium      */ EscapeChars.Invalid,
  /*  26 - Substitute         */ EscapeChars.Invalid,
  /*  27 - Escape             */ EscapeChars.Invalid,
  /*  28 - File Separator     */ EscapeChars.Invalid,
  /*  29 - Group Separator    */ EscapeChars.Invalid,
  /*  30 - Record Separator   */ EscapeChars.Invalid,
  /*  31 - Unit Separator     */ EscapeChars.Invalid,
  /*  32 - Space              */ EscapeChars.Invalid,
  /*  33 - !                  */ EscapeChars.Invalid,
  /*  34 - "                  */ EscapeChars.DoubleQuote,
  /*  35 - #                  */ EscapeChars.Invalid,
  /*  36 - $                  */ EscapeChars.Invalid,
  /*  37 - %                  */ EscapeChars.Invalid,
  /*  38 - &                  */ EscapeChars.Invalid,
  /*  39 - '                  */ EscapeChars.SingleQuote,
  /*  40 - (                  */ EscapeChars.Invalid,
  /*  41 - )                  */ EscapeChars.Invalid,
  /*  42 - *                  */ EscapeChars.Invalid,
  /*  43 - +                  */ EscapeChars.Invalid,
  /*  44 - ,                  */ EscapeChars.Invalid,
  /*  45 - -                  */ EscapeChars.Invalid,
  /*  46 - .                  */ EscapeChars.Invalid,
  /*  47 - /                  */ EscapeChars.Invalid,
  /*  48 - 0                  */ EscapeChars.Zero,
  /*  49 - 1                  */ EscapeChars.One,
  /*  50 - 2                  */ EscapeChars.Two,
  /*  51 - 3                  */ EscapeChars.Three,
  /*  52 - 4                  */ EscapeChars.Four,
  /*  53 - 5                  */ EscapeChars.Five,
  /*  54 - 6                  */ EscapeChars.Six,
  /*  55 - 7                  */ EscapeChars.Seven,
  /*  56 - 8                  */ EscapeChars.Eigth,
  /*  57 - 9                  */ EscapeChars.Nine,
  /*  58 - :                  */ EscapeChars.Invalid,
  /*  59 - ;                  */ EscapeChars.Invalid,
  /*  60 - <                  */ EscapeChars.Invalid,
  /*  61 - =                  */ EscapeChars.Invalid,
  /*  62 - >                  */ EscapeChars.Invalid,
  /*  63 - ?                  */ EscapeChars.Invalid,
  /*  64 - @                  */ EscapeChars.Invalid,
  /*  65 - A                  */ EscapeChars.Invalid,
  /*  66 - B                  */ EscapeChars.Invalid,
  /*  67 - C                  */ EscapeChars.Invalid,
  /*  68 - D                  */ EscapeChars.Invalid,
  /*  69 - E                  */ EscapeChars.Invalid,
  /*  70 - F                  */ EscapeChars.Invalid,
  /*  71 - G                  */ EscapeChars.Invalid,
  /*  72 - H                  */ EscapeChars.Invalid,
  /*  73 - I                  */ EscapeChars.Invalid,
  /*  74 - J                  */ EscapeChars.Invalid,
  /*  75 - K                  */ EscapeChars.Invalid,
  /*  76 - L                  */ EscapeChars.Invalid,
  /*  77 - M                  */ EscapeChars.Invalid,
  /*  78 - N                  */ EscapeChars.Invalid,
  /*  79 - O                  */ EscapeChars.Invalid,
  /*  80 - P                  */ EscapeChars.Invalid,
  /*  81 - Q                  */ EscapeChars.Invalid,
  /*  82 - R                  */ EscapeChars.Invalid,
  /*  83 - S                  */ EscapeChars.Invalid,
  /*  84 - T                  */ EscapeChars.Invalid,
  /*  85 - U                  */ EscapeChars.Invalid,
  /*  86 - V                  */ EscapeChars.Invalid,
  /*  87 - W                  */ EscapeChars.Invalid,
  /*  88 - X                  */ EscapeChars.Invalid,
  /*  89 - Y                  */ EscapeChars.Invalid,
  /*  90 - Z                  */ EscapeChars.Invalid,
  /*  91 - [                  */ EscapeChars.Invalid,
  /*  92 - \                  */ EscapeChars.Invalid,
  /*  93 - ]                  */ EscapeChars.Invalid,
  /*  94 - ^                  */ EscapeChars.Invalid,
  /*  95 - _                  */ EscapeChars.Invalid,
  /*  96 - `                  */ EscapeChars.Invalid,
  /*  97 - a                  */ EscapeChars.Invalid,
  /*  98 - b                  */ EscapeChars.LowerB,
  /*  99 - c                  */ EscapeChars.Invalid,
  /* 100 - d                  */ EscapeChars.Invalid,
  /* 101 - e                  */ EscapeChars.Invalid,
  /* 102 - f                  */ EscapeChars.LowerF,
  /* 103 - g                  */ EscapeChars.Invalid,
  /* 104 - h                  */ EscapeChars.Invalid,
  /* 105 - i                  */ EscapeChars.Invalid,
  /* 106 - j                  */ EscapeChars.Invalid,
  /* 107 - k                  */ EscapeChars.Invalid,
  /* 108 - l                  */ EscapeChars.Invalid,
  /* 109 - m                  */ EscapeChars.Invalid,
  /* 110 - n                  */ EscapeChars.LowerN,
  /* 111 - o                  */ EscapeChars.Invalid,
  /* 112 - p                  */ EscapeChars.Invalid,
  /* 113 - q                  */ EscapeChars.Invalid,
  /* 114 - r                  */ EscapeChars.LowerR,
  /* 115 - s                  */ EscapeChars.Invalid,
  /* 116 - t                  */ EscapeChars.LowerT,
  /* 117 - u                  */ EscapeChars.Unicode,
  /* 118 - v                  */ EscapeChars.LowerV,
  /* 119 - w                  */ EscapeChars.Invalid,
  /* 120 - x                  */ EscapeChars.Hex,
  /* 121 - y                  */ EscapeChars.Invalid,
  /* 122 - z                  */ EscapeChars.Invalid,
  /* 123 - {                  */ EscapeChars.Invalid,
  /* 124 - |                  */ EscapeChars.Invalid,
  /* 125 - }                  */ EscapeChars.Invalid,
  /* 126 - ~                  */ EscapeChars.Invalid
];

export function scanString(parser: ParserState, context: Context, quote: number, source: string): SyntaxKind {
  if (quote === Char.SingleQuote) parser.nodeFlags |= NodeFlags.SingleQuote;
  parser.pos++;
  let result = '';
  let start = parser.pos;
  let ch = source.charCodeAt(parser.pos);
  while ((AsciiCharTypes[ch] & AsciiCharFlags.LineTerminator) === 0) {
    if (ch === Char.Backslash) {
      // Most common escape sequences first
      result += source.substring(start, parser.pos);
      result += scanEscapeSequence(parser, context, /* isTaggedTemplate */ false, source);
      start = parser.pos;
    } else {
      if (ch === quote) {
        result += source.substring(start, parser.pos);
        parser.pos++;
        parser.tokenRaw = source.substring(parser.curPos, parser.pos);
        parser.tokenValue = result;
        return SyntaxKind.StringLiteral;
      }
      parser.pos++;
    }

    if (parser.pos >= parser.end) break;

    ch = source.charCodeAt(parser.pos);
  }

  parser.nodeFlags |= NodeFlags.Unterminated;

  parser.onError(
    DiagnosticSource.Lexer,
    diagnosticMap[DiagnosticCode.Unterminated_string_literal],
    parser.curPos,
    parser.pos
  );

  parser.tokenValue = result += source.substring(start, parser.pos);
  parser.tokenRaw = source.slice(parser.curPos, parser.pos);
  return SyntaxKind.StringLiteral;
}

export function scanEscapeSequence(
  parser: ParserState,
  context: Context,
  isTaggedTemplate: boolean,
  source: string
): string {
  const start = parser.pos;
  parser.pos++;
  if (parser.pos >= parser.end) {
    parser.onError(DiagnosticSource.Lexer, diagnosticMap[DiagnosticCode.Unexpected_token], parser.curPos, parser.pos);
    return '';
  }
  let ch = source.charCodeAt(parser.pos);
  parser.pos++;
  switch (escapeCharTbl[ch]) {
    case EscapeChars.LowerB:
      return '\b';
    case EscapeChars.LowerT:
      return '\t';
    case EscapeChars.LowerN:
      return '\n';
    case EscapeChars.LowerV:
      return '\v';
    case EscapeChars.LowerF:
      return '\f';
    case EscapeChars.LowerR:
      return '\r';
    case EscapeChars.SingleQuote:
      return "'";
    case EscapeChars.DoubleQuote:
      return '"';
    case EscapeChars.Zero:
      // '\01'
      if (
        isTaggedTemplate &&
        parser.pos < parser.end &&
        AsciiCharTypes[source.charCodeAt(parser.pos)] & AsciiCharFlags.Decimal
      ) {
        parser.pos++;
        parser.nodeFlags |= NodeFlags.ContainsInvalidEscape;
        return source.substring(start, parser.pos);
      }

      if (AsciiCharTypes[source.charCodeAt(parser.pos + 1)] & AsciiCharFlags.Decimal && context & Context.Strict) {
        parser.onError(
          DiagnosticSource.Lexer,
          diagnosticMap[DiagnosticCode.Octal_escape_sequences_are_not_allowed_in_strict_mode],
          parser.curPos,
          parser.pos
        );
      }
      return '\0';
    case EscapeChars.One:
    case EscapeChars.Two:
    case EscapeChars.Three:
    case EscapeChars.Four:
    case EscapeChars.Five:
    case EscapeChars.Six:
    case EscapeChars.Seven: {
      if (context & Context.Strict) {
        parser.onError(
          DiagnosticSource.Lexer,
          diagnosticMap[DiagnosticCode.Octal_escape_sequences_are_not_allowed_in_strict_mode],
          parser.curPos,
          parser.pos
        );
      }
      return String.fromCharCode(ch);
    }

    // `8`, `9` (invalid escapes)
    case EscapeChars.Eigth:
    case EscapeChars.Nine:
      parser.onError(
        DiagnosticSource.Lexer,
        diagnosticMap[DiagnosticCode.Escapes_8_or_9_are_not_syntactically_valid_escapes],
        parser.curPos,
        parser.pos
      );
      return String.fromCharCode(ch);

    case EscapeChars.Unicode:
      if (isTaggedTemplate) {
        // '\u' or '\u0' or '\u00' or '\u000'
        for (let escapePos = parser.pos; escapePos < parser.pos + 4; escapePos++) {
          if (
            escapePos < parser.end &&
            (AsciiCharTypes[source.charCodeAt(escapePos)] & AsciiCharFlags.Hex) === 0 &&
            source.charCodeAt(escapePos) !== Char.LeftBrace
          ) {
            parser.pos = escapePos;
            parser.nodeFlags |= NodeFlags.ContainsInvalidEscape;
            return source.substring(start, parser.pos);
          }
        }
      }
      // '\u{DDDDDDDD}'

      if (source.charCodeAt(parser.pos) === Char.LeftBrace) {
        parser.pos++;

        // '\u{'
        if (isTaggedTemplate) {
          if ((AsciiCharTypes[source.charCodeAt(parser.pos)] & AsciiCharFlags.Hex) === 0) {
            parser.nodeFlags |= NodeFlags.ContainsInvalidEscape;
            return source.substring(start, parser.pos);
          }

          const savePos = parser.pos;
          const escapedValue = EscapeChars.Invalid;

          // '\u{Not Code Point' or '\u{CodePoint'
          if (escapedValue > 0x10ffff || source.charCodeAt(parser.pos) !== Char.RightBrace) {
            parser.nodeFlags |= NodeFlags.ContainsInvalidEscape;
            return source.substring(start, parser.pos);
          } else {
            parser.pos = savePos;
          }
        }
        parser.nodeFlags |= NodeFlags.ExtendedUnicodeEscape;

        // \u{N}
        // The first digit is required, so handle it *out* of the loop.

        ch = source.charCodeAt(parser.pos);

        let code = toHex(ch);

        if (code < 0) {
          parser.onError(
            DiagnosticSource.Lexer,
            diagnosticMap[DiagnosticCode.Invalid_hexadecimal_escape_sequence],
            parser.curPos,
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
              diagnosticMap[DiagnosticCode.Invalid_hexadecimal_escape_sequence],
              parser.curPos,
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
              diagnosticMap[DiagnosticCode.Unicode_codepoint_must_not_be_greater_than_0x10FFFF],
              parser.curPos,
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
          diagnosticMap[DiagnosticCode.Invalid_hexadecimal_escape_sequence],
          parser.curPos,
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
            diagnosticMap[DiagnosticCode.Invalid_hexadecimal_escape_sequence],
            parser.curPos,
            parser.pos
          );
          return '';
        }
        code = (code << 4) | digit;
      }
      parser.pos = pos += 1;

      return fromCodePoint(code);

    case EscapeChars.Hex:
      if (isTaggedTemplate) {
        if ((AsciiCharTypes[source.charCodeAt(parser.pos)] & AsciiCharFlags.Decimal) === 0) {
          parser.nodeFlags |= NodeFlags.ContainsInvalidEscape;
          return source.substring(start, parser.pos);
        }

        if ((AsciiCharTypes[source.charCodeAt(parser.pos + 1)] & AsciiCharFlags.Decimal) === 0) {
          parser.pos++;
          parser.nodeFlags |= NodeFlags.ContainsInvalidEscape;
          return source.substring(start, parser.pos);
        }
      }
      // '\xDD'

      const hi = toHex(source.charCodeAt(parser.pos));

      if (hi < 0) {
        parser.onError(
          DiagnosticSource.Lexer,
          diagnosticMap[DiagnosticCode.Invalid_hexadecimal_escape_sequence],
          parser.curPos,
          parser.pos
        );
        return '';
      }

      parser.pos++;

      const lo = toHex(source.charCodeAt(parser.pos));

      if (lo < 0) {
        parser.onError(
          DiagnosticSource.Lexer,
          diagnosticMap[DiagnosticCode.Invalid_hexadecimal_escape_sequence],
          parser.curPos,
          parser.pos
        );
        return '';
      }

      parser.pos++;

      return fromCodePoint((hi << 4) | lo);

    // when encountering a LineContinuation (i.e. a backslash and a line terminator sequence),
    // the line terminator is interpreted to be "the empty code unit sequence".
    case EscapeChars.CarriageReturn:
      if (parser.pos < parser.end && source.charCodeAt(parser.pos) === Char.LineFeed) {
        parser.pos++;
      }
    // falls through
    case EscapeChars.LineFeed:
      return '';
    default:
      return (ch & ~1) === Char.LineSeparator ? '' : String.fromCharCode(ch);
  }
}
