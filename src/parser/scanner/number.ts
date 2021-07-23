import { ParserState, Context } from '../common';
import { NodeFlags, SyntaxKind } from '../../ast/syntax-node';
import { Char } from './char';
import { AsciiCharFlags, AsciiCharTypes } from './asciiChar';
import { toHex } from './common';
import { DiagnosticCode, diagnosticMap } from '../../diagnostic/diagnostic-code';
import { DiagnosticSource, DiagnosticKind } from '../../diagnostic/diagnostic';

const AsciiDigits = [
  /*   0 - Null               */ -1, /*   1 - Start of Heading   */ -1, /*   2 - Start of Text      */ -1,
  /*   3 - End of Text        */ -1, /*   4 - End of Transm.     */ -1, /*   5 - Enquiry            */ -1,
  /*   6 - Acknowledgment     */ -1, /*   7 - Bell               */ -1, /*   8 - Backspace          */ -1,
  /*   9 - Horizontal Tab     */ -1, /*  10 - Line Feed          */ -1, /*  11 - Vertical Tab       */ -1,
  /*  12 - Form Feed          */ -1, /*  13 - Carriage Return    */ -1, /*  14 - Shift Out          */ -1,
  /*  15 - Shift In           */ -1, /*  16 - Data Line Escape   */ -1, /*  17 - Device Control 1   */ -1,
  /*  18 - Device Control 2   */ -1, /*  19 - Device Control 3   */ -1, /*  20 - Device Control 4   */ -1,
  /*  21 - Negative Ack.      */ -1, /*  22 - Synchronous Idle   */ -1, /*  23 - End of Transmit    */ -1,
  /*  24 - Cancel             */ -1, /*  25 - End of Medium      */ -1, /*  26 - Substitute         */ -1,
  /*  27 - Escape             */ -1, /*  28 - File Separator     */ -1, /*  29 - Group Separator    */ -1,
  /*  30 - Record Separator   */ -1, /*  31 - Unit Separator     */ -1, /*  32 - Space              */ -1,
  /*  33 - !                  */ -1, /*  34 - "                  */ -1, /*  35 - #                  */ -1,
  /*  36 - $                  */ -1, /*  37 - %                  */ -1, /*  38 - &                  */ -1,
  /*  39 - '                  */ -1, /*  40 - (                  */ -1, /*  41 - )                  */ -1,
  /*  42 - *                  */ -1, /*  43 - +                  */ -1, /*  44 - ,                  */ -1,
  /*  45 - -                  */ -1, /*  46 - .                  */ -1, /*  47 - /                  */ -1,
  /*  48 - 0                  */ 2, /*  49 - 1                  */ 2, /*  50 - 2                  */ 5,
  /*  51 - 3                  */ 5, /*  52 - 4                  */ 5, /*  53 - 5                  */ 5,
  /*  54 - 6                  */ 5, /*  55 - 7                  */ 5, /*  56 - 8                  */ 1,
  /*  57 - 9                  */ 1, /*  58 - :                  */ -1, /*  59 - ;                  */ -1,
  /*  60 - <                  */ -1, /*  61 - =                  */ -1, /*  62 - >                  */ -1,
  /*  63 - ?                  */ -1, /*  64 - @                  */ -1, /*  65 - A                  */ 1,
  /*  66 - B                  */ 8, /*  67 - C                  */ 1, /*  68 - D                  */ 1,
  /*  69 - E                  */ 1, /*  70 - F                  */ 1, /*  71 - G                  */ -1,
  /*  72 - H                  */ -1, /*  73 - I                  */ -1, /*  74 - J                  */ -1,
  /*  75 - K                  */ -1, /*  76 - L                  */ -1, /*  77 - M                  */ -1,
  /*  78 - N                  */ -1, /*  79 - O                  */ 16, /*  80 - P                  */ -1,
  /*  81 - Q                  */ -1, /*  82 - R                  */ -1, /*  83 - S                  */ -1,
  /*  84 - T                  */ -1, /*  85 - U                  */ -1, /*  86 - V                  */ -1,
  /*  87 - W                  */ -1, /*  88 - X                  */ 32, /*  89 - Y                  */ -1,
  /*  90 - Z                  */ -1, /*  91 - [                  */ -1, /*  92 - \                  */ -1,
  /*  93 - ]                  */ -1, /*  94 - ^                  */ -1, /*  95 - _                  */ 128,
  /*  96 - `                  */ -1, /*  97 - a                  */ 1, /*  98 - b                  */ 8,
  /*  99 - c                  */ 1, /* 100 - d                  */ 1, /* 101 - e                  */ 1,
  /* 102 - f                  */ 1, /* 103 - g                  */ -1, /* 104 - h                  */ -1,
  /* 105 - i                  */ -1, /* 106 - j                  */ -1, /* 107 - k                  */ -1,
  /* 108 - l                  */ -1, /* 109 - m                  */ -1, /* 110 - n                  */ 64,
  /* 111 - o                  */ 16, /* 112 - p                  */ -1, /* 113 - q                  */ -1,
  /* 114 - r                  */ -1, /* 115 - s                  */ -1, /* 116 - t                  */ -1,
  /* 117 - u                  */ -1, /* 118 - v                  */ -1, /* 119 - w                  */ -1,
  /* 120 - x                  */ 32, /* 121 - y                  */ -1, /* 122 - z                  */ -1,
  /* 123 - {                  */ -1, /* 124 - |                  */ -1, /* 125 - }                  */ -1,
  /* 126 - ~                  */ -1, /* 127 - Delete             */ -1
];

export function scanNumber(
  parser: ParserState,
  context: Context,
  cp: number,
  source: string,
  isDecimal: boolean
): SyntaxKind {
  // Optimization: most decimal values fit into 4 bytes.
  let allowSeparator = true;
  let pos = parser.pos;

  let nodeFlags = NodeFlags.None;
  if (isDecimal) {
    if (cp === Char.Zero) {
      let val = 0;
      pos++; // skips '0'
      cp = source.charCodeAt(pos);
      if (AsciiCharTypes[cp] & AsciiCharFlags.OctHexBin) {
        // This is structured as an optimized finite state machine
        // and does a quick scan for a hexadecimal, binary and octals
        let digits = 0;
        do {
          switch (AsciiDigits[cp]) {
            // `x`, `X`
            case 32:
              // - `0bx0011`
              // - `0O3x45_`
              // - `0xxabcd241x33`
              if (
                nodeFlags &
                (NodeFlags.BinaryIntegerLiteral | NodeFlags.HexIntegerLiteral | NodeFlags.OctalIntegerLiteral)
              ) {
                parser.onError(
                  DiagnosticSource.Parser,
                  DiagnosticKind.Error,
                  diagnosticMap[DiagnosticCode.An_identifier_or_keyword_cannot_immediately_follow_a_numeric_literal],
                  pos,
                  pos + 1
                );
                break;
              }
              nodeFlags |= NodeFlags.HexIntegerLiteral;
              break;

            // `b`, `B`
            case 8:
              if (nodeFlags & NodeFlags.HexIntegerLiteral) {
                val = val * 16 + toHex(cp);
                break;
              }
              // - `0bb0011`
              // - `0Ob345`
              if (nodeFlags & (NodeFlags.BinaryIntegerLiteral | NodeFlags.OctalIntegerLiteral)) {
                parser.onError(
                  DiagnosticSource.Lexer,
                  DiagnosticKind.Error,
                  diagnosticMap[DiagnosticCode.An_identifier_or_keyword_cannot_immediately_follow_a_numeric_literal],
                  pos,
                  pos + 1
                );
                break;
              }
              nodeFlags |= NodeFlags.BinaryIntegerLiteral;
              break;

            // `o`, `O`
            case 16:
              // - `0bo00`
              // - `0Oo34`
              // - `0xaobcd2`
              if (
                nodeFlags &
                (NodeFlags.BinaryIntegerLiteral | NodeFlags.OctalIntegerLiteral | NodeFlags.HexIntegerLiteral)
              ) {
                parser.onError(
                  DiagnosticSource.Lexer,
                  DiagnosticKind.Error,
                  diagnosticMap[DiagnosticCode.An_identifier_or_keyword_cannot_immediately_follow_a_numeric_literal],
                  pos,
                  pos + 1
                );
                break;
              }
              nodeFlags |= NodeFlags.OctalIntegerLiteral;
              break;

            // `0`...`1`
            case 2:
              if (nodeFlags & NodeFlags.BinaryIntegerLiteral) {
                allowSeparator = true;
                val = val * 2 + (cp - Char.Zero);
                break;
              }

            // `2`...`7`
            case 5:
              if (nodeFlags & NodeFlags.OctalIntegerLiteral) {
                allowSeparator = true;
                val = val * 8 + (cp - Char.Zero);
                break;
              }

            // `8`...`9`, `a-f`...`A-F`
            case 1:
              if (nodeFlags & NodeFlags.HexIntegerLiteral) {
                allowSeparator = true;
                val = val * 0b00000000000000000000000000010000 + toHex(cp);
                break;
              }
              parser.onError(
                DiagnosticSource.Lexer,
                DiagnosticKind.Error,
                diagnosticMap[
                  nodeFlags & NodeFlags.BinaryIntegerLiteral
                    ? DiagnosticCode.Binary_integer_literal_like_sequence_containing_an_invalid_digit
                    : DiagnosticCode.Octal_integer_literal_like_sequence_containing_an_invalid_digit
                ],
                pos,
                pos + 1
              );
              break;

            // `_`
            case 128:
              nodeFlags |= NodeFlags.ContainsSeparator;

              if (allowSeparator) {
                // We need to consume '__' for cases like '0b1__2' so we can correctly parse out two
                // numeric literal - '1' - and '2'.
                // '0b' and '__' are seen as invalid characters and should only be consumed.

                if (source.charCodeAt(pos + 1) === Char.Underscore) {
                  parser.onError(
                    DiagnosticSource.Lexer,
                    DiagnosticKind.Error,
                    diagnosticMap[DiagnosticCode.Multiple_consecutive_numeric_separators_are_not_permitted],
                    pos,
                    pos + 1
                  );
                  parser.pos += 5;
                  parser.tokenValue = val;
                  return SyntaxKind.NumericLiteral;
                }
                allowSeparator = false;
              }
              allowSeparator = true;
              break;

            // `n`
            case 64:
              parser.tokenValue = val;
              parser.pos = ++pos;
              parser.tokenRaw = source.slice(parser.tokenPos, parser.pos);
              return SyntaxKind.BigIntLiteral;
          }
          digits++;
          pos++;
          cp = source.charCodeAt(pos);
        } while (AsciiCharTypes[cp] & (AsciiCharFlags.IsSeparator | AsciiCharFlags.Hex | AsciiCharFlags.OctHexBin));

        // - `0b0011_`
        // - `0O345_`
        // - `0xabcd24133_`
        if (AsciiCharTypes[cp] & 0b00000000000000000000000000000011) {
          parser.onError(
            DiagnosticSource.Lexer,
            DiagnosticKind.Error,
            diagnosticMap[DiagnosticCode.An_identifier_or_keyword_cannot_immediately_follow_a_numeric_literal],
            parser.curPos,
            pos
          );
          pos++; // skip invalid chars
        }
        if (
          (nodeFlags & (NodeFlags.BinaryIntegerLiteral | NodeFlags.OctalIntegerLiteral | NodeFlags.HexIntegerLiteral) &&
            digits <= 1) ||
          !allowSeparator
        ) {
          parser.onError(
            DiagnosticSource.Lexer,
            DiagnosticKind.Error,
            diagnosticMap[
              !allowSeparator
                ? DiagnosticCode.Numeric_separators_are_not_allowed_at_the_end_of_numeric_literals
                : nodeFlags & NodeFlags.BinaryIntegerLiteral
                ? // Binary integer literal like sequence without any digits
                  DiagnosticCode.Binary_integer_literal_like_sequence_without_any_digits
                : nodeFlags & NodeFlags.OctalIntegerLiteral
                ? // Octal integer literal like sequence without any digits
                  DiagnosticCode.Octal_integer_literal_like_sequence_without_any_digits
                : // Hex integer literal like sequence without any digits
                  DiagnosticCode.Hex_integer_literal_like_sequence_without_any_digits
            ],
            pos,
            pos + 1
          );
        }

        parser.nodeFlags = nodeFlags;
        parser.pos = pos;
        parser.tokenValue = val;
        parser.tokenRaw = source.slice(parser.tokenPos, pos);

        return SyntaxKind.NumericLiteral;
      }
      // Scan a implicit octal, or "noctal" (a number starting with '0' that contains '8' or '9' and is
      // treated as decimal) number.
      if (cp >= Char.Zero && cp <= Char.Eight) {
        if (context & Context.Strict) {
          parser.onError(
            DiagnosticSource.Lexer,
            DiagnosticKind.Error,
            diagnosticMap[DiagnosticCode.Octal_literals_are_not_allowed_in_strict_mode],
            pos,
            pos + 1
          );
        }
        nodeFlags = NodeFlags.LegacyOctal;
        do {
          val = val * 8 + (cp - Char.Zero);
          cp = source.charCodeAt(++pos);
          if (cp >= Char.Eight) {
            nodeFlags = NodeFlags.OctalIntegerLiteral;
            break;
          }
        } while (cp >= Char.Zero && cp <= Char.Nine);

        if (AsciiCharTypes[cp] & (AsciiCharFlags.BigInt | AsciiCharFlags.IsSeparator)) {
          parser.onError(
            DiagnosticSource.Lexer,
            DiagnosticKind.Error,
            diagnosticMap[
              cp === Char.LowerN
                ? DiagnosticCode.Invalid_BigInt_syntax
                : DiagnosticCode.Numeric_separator_can_not_be_used_after_leading_0
            ],
            parser.curPos,
            parser.pos
          );
        }

        if (nodeFlags === NodeFlags.LegacyOctal) {
          parser.nodeFlags = NodeFlags.LegacyOctal;
          parser.pos = pos;
          parser.tokenValue = val;
          parser.tokenRaw = source.slice(parser.tokenPos, pos);
          return SyntaxKind.NumericLiteral;
        }
      }
      // '0' not followed by [XxBbOo0-9_];  scan as a decimal number.
    }

    // Optimization: most decimal values fit into 4 bytes.
    let ret = 0;
    let digit = 9;

    while (AsciiCharTypes[cp] & AsciiCharFlags.Decimal && digit >= 0) {
      ret = 10 * ret + (cp - Char.Zero);
      cp = source.charCodeAt(++pos);
      --digit;
    }

    if (
      digit >= 0 &&
      // 'n', '.', 'E', 'e', '_' is all forbidden here
      (AsciiCharTypes[cp] & 0b00000000000000000000010000000011) === 0 &&
      (nodeFlags & NodeFlags.OctalIntegerLiteral) === 0
    ) {
      parser.pos = pos;
      parser.tokenValue = ret;
      parser.tokenRaw = source.slice(parser.tokenPos, pos);

      return SyntaxKind.NumericLiteral;
    }
  }
  // Slow path
  parser.pos = pos;

  let value = scanDigitsWithNumericSeparators(parser, parser.tokenPos, cp);

  cp = source.charCodeAt(parser.pos);

  let disallowBigInt = false;

  if (isDecimal && cp === Char.Period) {
    disallowBigInt = true;
    parser.nodeFlags |= NodeFlags.FloatingPointLiteral;

    cp = source.charCodeAt(++parser.pos); // skips: '.'
    value += '.' + scanDigitsWithNumericSeparators(parser, parser.pos, cp);
    cp = source.charCodeAt(parser.pos);
  }

  const end = parser.pos;

  if (cp === Char.LowerN) {
    if (disallowBigInt) {
      parser.onError(
        DiagnosticSource.Lexer,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.Unexpected_token],
        parser.curPos,
        parser.pos
      );
    }

    parser.tokenValue = source.slice(parser.tokenPos, parser.pos);
    ++parser.pos; // skips: 'n'
    parser.tokenRaw = source.slice(parser.tokenPos, parser.pos);
    return SyntaxKind.BigIntLiteral;
  }

  // If we see an 'e' or 'E' we should only consume it if its of the form:
  // e<number> or E<number>
  // e+<number>   E+<number>
  // e-<number>   E-<number>
  if ((cp | 32) === Char.LowerE) {
    cp = source.charCodeAt(++parser.pos);
    // e+ or E+ or e- or E-
    if (cp === Char.Plus || cp === Char.Hyphen) {
      cp = source.charCodeAt(++parser.pos);
    }

    if (AsciiCharTypes[cp] & AsciiCharFlags.Decimal) {
      // e+<number> or E+<number> or e-<number> or E-<number>
      value += source.substring(end, parser.pos) + scanDigitsWithNumericSeparators(parser, parser.pos, cp);
      cp = source.charCodeAt(parser.pos);
    }
  }

  // https://tc39.github.io/ecma262/#sec-literals-numeric-literals
  // The SourceCharacter immediately following a NumericLiteral must not be an IdentifierStart or DecimalDigit.
  // For example : 3in is an error and not the two input elements 3 and in
  if ((AsciiCharTypes[cp] & 0b00000000000000000000000000000011) > 0) {
    parser.onError(
      DiagnosticSource.Lexer,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Unexpected_token],
      parser.curPos,
      parser.pos
    );
  }
  parser.tokenRaw = source.slice(parser.tokenPos, parser.pos);

  parser.tokenValue = parseFloat(value);
  return SyntaxKind.NumericLiteral;
}

export function scanDigitsWithNumericSeparators(parser: ParserState, start: number, cp: number): string {
  let ret = '';
  let pos = parser.pos;
  let allowSeparator = false;
  const source = parser.source;
  while (AsciiCharTypes[cp] & 0b00000000000000000000000000110000) {
    // '_'
    if (cp === Char.Underscore) {
      parser.nodeFlags |= NodeFlags.ContainsSeparator;
      ret += source.substring(start, pos);
      cp = source.charCodeAt(++pos);

      allowSeparator = true;

      // '__' (invalid)
      if (cp === Char.Underscore) {
        parser.onError(
          DiagnosticSource.Lexer,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.Numeric_separators_not_allowed_here],
          parser.curPos,
          parser.pos
        );
      }
      start = pos;
      continue;
    }
    allowSeparator = false;
    cp = source.charCodeAt(++pos);
  }

  if (allowSeparator) {
    parser.onError(
      DiagnosticSource.Lexer,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Numeric_separators_not_allowed_here],
      parser.curPos,
      parser.pos
    );
  }
  parser.pos = pos;
  parser.tokenRaw = source.slice(parser.tokenPos, parser.pos);

  return ret + source.substring(start, pos);
}
