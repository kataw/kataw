import { ParserState, Context } from '../common';
import { NodeFlags, SyntaxKind } from '../../ast/syntax-node';
import { AsciiCharFlags, AsciiCharTypes } from './asciiChar';
import { Char } from './char';
import { toHex, fromCodePoint } from './common';
import { DiagnosticCode, diagnosticMap } from '../../diagnostic/diagnostic-code';
import { DiagnosticSource, DiagnosticKind } from '../../diagnostic/diagnostic';

const singleEscape = [
  /*   0 - Null               */ 0,
  /*   1 - Start of Heading   */ 0,
  /*   2 - Start of Text      */ 0,
  /*   3 - End of Text        */ 0,
  /*   4 - End of Transm.     */ 0,
  /*   5 - Enquiry            */ 0,
  /*   6 - Acknowledgment     */ 0,
  /*   7 - Bell               */ 0,
  /*   8 - Back Space         */ 0,
  /*   9 - Horizontal Tab     */ 0,
  /*  10 - Line Feed          */ 0,
  /*  11 - Vertical Tab       */ 0,
  /*  12 - Form Feed          */ 0,
  /*  13 - Carriage Return    */ 0,
  /*  14 - Shift Out          */ 0,
  /*  15 - Shift In           */ 0,
  /*  16 - Data Line Escape   */ 0,
  /*  17 - Device Control 1   */ 0,
  /*  18 - Device Control 2   */ 0,
  /*  19 - Device Control 3   */ 0,
  /*  20 - Device Control 4   */ 0,
  /*  21 - Negative Ack.      */ 0,
  /*  22 - Synchronous Idle   */ 0,
  /*  23 - End of Transmit    */ 0,
  /*  24 - Cancel             */ 0,
  /*  25 - End of Medium      */ 0,
  /*  26 - Substitute         */ 0,
  /*  27 - Escape             */ 0,
  /*  28 - File Separator     */ 0,
  /*  29 - Group Separator    */ 0,
  /*  30 - Record Separator   */ 0,
  /*  31 - Unit Separator     */ 0,
  /*  32 - Space              */ Char.Space,
  /*  33 - !                  */ 0,
  /*  34 - "                  */ Char.DoubleQuote,
  /*  35 - #                  */ 0,
  /*  36 - $                  */ Char.Dollar,
  /*  37 - %                  */ Char.Percent,
  /*  38 - &                  */ 0,
  /*  39 - '                  */ Char.SingleQuote,
  /*  40 - (                  */ Char.LeftParen,
  /*  41 - )                  */ Char.RightParen,
  /*  42 - *                  */ Char.Asterisk,
  /*  43 - +                  */ Char.Plus,
  /*  44 - ,                  */ Char.Comma,
  /*  45 - -                  */ Char.Hyphen,
  /*  46 - .                  */ Char.Period,
  /*  47 - /                  */ 0,
  /*  48 - 0                  */ 0,
  /*  49 - 1                  */ 0,
  /*  50 - 2                  */ 0,
  /*  51 - 3                  */ 0,
  /*  52 - 4                  */ 0,
  /*  53 - 5                  */ 0,
  /*  54 - 6                  */ 0,
  /*  55 - 7                  */ 0,
  /*  56 - 8                  */ 0,
  /*  57 - 9                  */ 0,
  /*  58 - :                  */ Char.Colon,
  /*  59 - ;                  */ Char.Semicolon,
  /*  60 - <                  */ Char.LessThan,
  /*  61 - =                  */ Char.EqualSign,
  /*  62 - >                  */ Char.GreaterThan,
  /*  63 - ?                  */ Char.QuestionMark,
  /*  64 - @                  */ 0,
  /*  65 - A                  */ Char.UpperA,
  /*  66 - B                  */ Char.UpperB,
  /*  67 - C                  */ Char.UpperC,
  /*  68 - D                  */ Char.UpperD,
  /*  69 - E                  */ Char.UpperE,
  /*  70 - F                  */ Char.UpperF,
  /*  71 - G                  */ Char.UpperG,
  /*  72 - H                  */ Char.UpperH,
  /*  73 - I                  */ Char.UpperI,
  /*  74 - J                  */ Char.UpperJ,
  /*  75 - K                  */ Char.UpperK,
  /*  76 - L                  */ Char.UpperL,
  /*  77 - M                  */ Char.UpperM,
  /*  78 - N                  */ Char.UpperN,
  /*  79 - O                  */ Char.UpperO,
  /*  80 - P                  */ Char.UpperP,
  /*  81 - Q                  */ Char.UpperQ,
  /*  82 - R                  */ Char.UpperR,
  /*  83 - S                  */ Char.UpperS,
  /*  84 - T                  */ Char.UpperT,
  /*  85 - U                  */ Char.UpperU,
  /*  86 - V                  */ Char.UpperV,
  /*  87 - W                  */ Char.UpperW,
  /*  88 - X                  */ 0,
  /*  89 - Y                  */ Char.UpperY,
  /*  90 - Z                  */ Char.UpperZ,
  /*  91 - [                  */ Char.LeftBracket,
  /*  92 - \                  */ Char.Backslash,
  /*  93 - ]                  */ Char.RightBracket,
  /*  94 - ^                  */ Char.Tilde,
  /*  95 - _                  */ Char.Underscore,
  /*  96 - `                  */ Char.Backtick,
  /*  97 - a                  */ Char.LowerA,
  /*  98 - b                  */ Char.Backspace,
  /*  99 - c                  */ Char.LowerC,
  /* 100 - d                  */ Char.LowerD,
  /* 101 - e                  */ Char.LowerE,
  /* 102 - f                  */ Char.FormFeed,
  /* 103 - g                  */ Char.LowerG,
  /* 104 - h                  */ Char.LowerH,
  /* 105 - i                  */ Char.LowerI,
  /* 106 - j                  */ Char.LowerJ,
  /* 107 - k                  */ Char.LowerK,
  /* 108 - l                  */ Char.LowerL,
  /* 109 - m                  */ Char.LowerM,
  /* 110 - n                  */ Char.LineFeed,
  /* 111 - o                  */ Char.LowerO,
  /* 112 - p                  */ Char.LowerP,
  /* 113 - q                  */ Char.LowerQ,
  /* 114 - r                  */ Char.CarriageReturn,
  /* 115 - s                  */ Char.LowerS,
  /* 116 - t                  */ Char.Tab,
  /* 117 - u                  */ 0,
  /* 118 - v                  */ Char.VerticalTab,
  /* 119 - w                  */ Char.LowerW,
  /* 120 - x                  */ 0,
  /* 121 - y                  */ Char.LowerY,
  /* 122 - z                  */ Char.LowerZ,
  /* 123 - {                  */ Char.RightBrace,
  /* 124 - |                  */ 0,
  /* 125 - }                  */ Char.LeftBrace,
  /* 126 - ~                  */ Char.Tilde,
  /* 127 - Delete             */ 0
];

export function scanTemplateSpan(parser: ParserState, context: Context, source: string): SyntaxKind {
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
      let diagnosticStart = parser.pos;

      let code;
      parser.pos++;
      if (parser.pos >= parser.end) {
        code = TemplateEscape.Empty;
      } else {
        let ch = source.charCodeAt(parser.pos);
        parser.pos++;
        if (singleEscape[ch]) {
          ret += fromCodePoint(ch);
        } else if (
          AsciiCharTypes[source.charCodeAt(parser.pos)] & AsciiCharFlags.LineTerminator ||
          (ch & ~1) === Char.LineSeparator
        ) {
          // The TV of LineContinuation :: \ LineTerminatorSequence is the empty
          // code unit sequence.
          if (ch === Char.CarriageReturn) {
            // Also skip \n.
            if (parser.source.charCodeAt(parser.pos) === Char.LineFeed) {
              parser.pos++;
            }
          }
        } else {
          if (ch >= 128) {
            ret += fromCodePoint(ch);
          } else {
            code = scanTemplateEscape(parser, source, ch);

            if (code >= 0) {
              ret += fromCodePoint(code);
            } else if (code !== TemplateEscape.Empty && context & Context.TaggedTemplate) {
              ret = '';
              cp = scanBadTemplate(parser, cp);
            } else {
              if (code !== TemplateEscape.Empty) {
                parser.onError(
                  DiagnosticSource.Lexer,
                  DiagnosticKind.Error,
                  diagnosticMap[
                    TemplateEscape.StrictOctal
                      ? DiagnosticCode.Octal_escape_sequences_are_not_allowed_in_template_literal
                      : TemplateEscape.EightOrNine
                      ? DiagnosticCode.Escapes_8_or_9_are_not_syntactically_valid_escapes
                      : TemplateEscape.InvalidHex
                      ? DiagnosticCode.Invalid_hexadecimal_escape_sequence
                      : DiagnosticCode.Unicode_codepoint_must_not_be_greater_than_0x10FFFF
                  ],
                  start,
                  parser.pos
                );
              }
              ret += parser.source.slice(diagnosticStart + 1, parser.pos);
            }
          }
        }
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
  parser.token = scanTemplateSpan(parser, context, parser.source);
  return parser.token;
}

const enum TemplateEscape {
  Empty = -1,
  StrictOctal = -2,
  EightOrNine = -3,
  InvalidHex = -4,
  OutOfRange = -5
}

export function scanTemplateEscape(parser: ParserState, source: string, ch: number): number {
  switch (ch) {
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
      return TemplateEscape.StrictOctal;
    // `8`, `9` (invalid escapes)
    case Char.Eight:
    case Char.Nine:
      return TemplateEscape.EightOrNine;
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
          return TemplateEscape.InvalidHex;
        }

        ch = source.charCodeAt(++parser.pos);
        let digits = 0;

        while (ch !== Char.RightBrace) {
          const digit = toHex(ch);

          if (digit < 0) {
            return TemplateEscape.EightOrNine;
          }
          code = (code << 4) | digit;

          // Check this early to avoid `code` wrapping to a negative on overflow (which is
          // reserved for abnormal conditions).
          if (code > Char.LastUnicodeChar) {
            return TemplateEscape.OutOfRange;
          }
          ch = source.charCodeAt(++parser.pos);
          digits++;
        }

        if (digits === 0) return TemplateEscape.InvalidHex;

        parser.pos++;
        return code;
      }

      parser.nodeFlags |= NodeFlags.UnicodeEscape;

      // \uNNNN

      let code = toHex(source.charCodeAt(parser.pos));
      if (code < 0) return TemplateEscape.InvalidHex;
      let pos = parser.pos;
      for (let i = 0; i < 3; i++) {
        ch = source.charCodeAt(++pos);
        const digit = toHex(ch);
        if (digit < 0) {
          return TemplateEscape.EightOrNine;
        }
        code = (code << 4) | digit;
      }
      parser.pos = pos += 1;

      return code;

    case Char.UpperX:
    case Char.LowerX:
      // '\xDD'
      const hi = toHex(source.charCodeAt(parser.pos));
      if (hi < 0) return TemplateEscape.InvalidHex;
      parser.pos++;
      const lo = toHex(source.charCodeAt(parser.pos));
      if (lo < 0) return TemplateEscape.InvalidHex;
      parser.pos++;
      return (hi << 4) | lo;
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
