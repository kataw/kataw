import { ParserState } from '../../types';
import { Token } from '../../ast/token';
import { Char } from './char';
import { NodeFlags } from '../../ast/node';
import { toHex } from './common';
import { AsciiCharTypes, AsciiCharFlags } from './asciiChar';
import { DiagnosticKind, DiagnosticSource, error } from '../../diagnostics/diagnostic';
import { DiagnosticCode } from '../../diagnostics/diagnosticMessages.generated';

// prettier-ignore
const enum NumberKind {
  None                   = 0,
  Decimal                = 1 << 0, // e.g. `123456`
  Hex                    = 1 << 1,// e.g. `0x00000000`
  Octal                  = 1 << 2, // e.g. `0o777`
  Binary                 = 1 << 3,// e.g. `0b0110010000000000`
  DecimalWithLeadingZero = 1 << 9, // e.g. `000123`
  ImplicitOctal          = 1 << 10 // e.g. `0777`
}

// prettier-ignore
const enum ZeroDigitKind {
  Unknown               = -1,
  Hexadecimal           = 1 << 0, // `x` or `X`
  Binary                = 1 << 1, // `b` or `B`
  Octal                 = 1 << 2, // `o` or `O`
  LetterB               = 1 << 3,
  LetterO               = 1 << 4,
  LetterX               = 1 << 5,
  BigInt                = 1 << 6, // `n`
  Underscore            = 1 << 7  // `_`
}

// prettier-ignore
const enum SeparatorAndBigIntState {
  None                   = 0,
  AllowSeparator         = 1 << 0,// e.g. `0b1100_0101`
  PreviousTokenSeparator = 1 << 1,
  DisallowBigInt         = 1 << 2,
}

const ZeroDigitLookup = [
  /*   0 - Null               */ ZeroDigitKind.Unknown,
  /*   1 - Start of Heading   */ ZeroDigitKind.Unknown,
  /*   2 - Start of Text      */ ZeroDigitKind.Unknown,
  /*   3 - End of Text        */ ZeroDigitKind.Unknown,
  /*   4 - End of Transm.     */ ZeroDigitKind.Unknown,
  /*   5 - Enquiry            */ ZeroDigitKind.Unknown,
  /*   6 - Acknowledgment     */ ZeroDigitKind.Unknown,
  /*   7 - Bell               */ ZeroDigitKind.Unknown,
  /*   8 - Backspace          */ ZeroDigitKind.Unknown,
  /*   9 - Horizontal Tab     */ ZeroDigitKind.Unknown,
  /*  10 - Line Feed          */ ZeroDigitKind.Unknown,
  /*  11 - Vertical Tab       */ ZeroDigitKind.Unknown,
  /*  12 - Form Feed          */ ZeroDigitKind.Unknown,
  /*  13 - Carriage Return    */ ZeroDigitKind.Unknown,
  /*  14 - Shift Out          */ ZeroDigitKind.Unknown,
  /*  15 - Shift In           */ ZeroDigitKind.Unknown,
  /*  16 - Data Line Escape   */ ZeroDigitKind.Unknown,
  /*  17 - Device Control 1   */ ZeroDigitKind.Unknown,
  /*  18 - Device Control 2   */ ZeroDigitKind.Unknown,
  /*  19 - Device Control 3   */ ZeroDigitKind.Unknown,
  /*  20 - Device Control 4   */ ZeroDigitKind.Unknown,
  /*  21 - Negative Ack.      */ ZeroDigitKind.Unknown,
  /*  22 - Synchronous Idle   */ ZeroDigitKind.Unknown,
  /*  23 - End of Transmit    */ ZeroDigitKind.Unknown,
  /*  24 - Cancel             */ ZeroDigitKind.Unknown,
  /*  25 - End of Medium      */ ZeroDigitKind.Unknown,
  /*  26 - Substitute         */ ZeroDigitKind.Unknown,
  /*  27 - Escape             */ ZeroDigitKind.Unknown,
  /*  28 - File Separator     */ ZeroDigitKind.Unknown,
  /*  29 - Group Separator    */ ZeroDigitKind.Unknown,
  /*  30 - Record Separator   */ ZeroDigitKind.Unknown,
  /*  31 - Unit Separator     */ ZeroDigitKind.Unknown,
  /*  32 - Space              */ ZeroDigitKind.Unknown,
  /*  33 - !                  */ ZeroDigitKind.Unknown,
  /*  34 - "                  */ ZeroDigitKind.Unknown,
  /*  35 - #                  */ ZeroDigitKind.Unknown,
  /*  36 - $                  */ ZeroDigitKind.Unknown,
  /*  37 - %                  */ ZeroDigitKind.Unknown,
  /*  38 - &                  */ ZeroDigitKind.Unknown,
  /*  39 - '                  */ ZeroDigitKind.Unknown,
  /*  40 - (                  */ ZeroDigitKind.Unknown,
  /*  41 - )                  */ ZeroDigitKind.Unknown,
  /*  42 - *                  */ ZeroDigitKind.Unknown,
  /*  43 - +                  */ ZeroDigitKind.Unknown,
  /*  44 - ,                  */ ZeroDigitKind.Unknown,
  /*  45 - -                  */ ZeroDigitKind.Unknown,
  /*  46 - .                  */ ZeroDigitKind.Unknown,
  /*  47 - /                  */ ZeroDigitKind.Unknown,
  /*  48 - 0                  */ ZeroDigitKind.Binary,
  /*  49 - 1                  */ ZeroDigitKind.Binary,
  /*  50 - 2                  */ ZeroDigitKind.Octal | ZeroDigitKind.Hexadecimal,
  /*  51 - 3                  */ ZeroDigitKind.Octal | ZeroDigitKind.Hexadecimal,
  /*  52 - 4                  */ ZeroDigitKind.Octal | ZeroDigitKind.Hexadecimal,
  /*  53 - 5                  */ ZeroDigitKind.Octal | ZeroDigitKind.Hexadecimal,
  /*  54 - 6                  */ ZeroDigitKind.Octal | ZeroDigitKind.Hexadecimal,
  /*  55 - 7                  */ ZeroDigitKind.Octal | ZeroDigitKind.Hexadecimal,
  /*  56 - 8                  */ ZeroDigitKind.Hexadecimal,
  /*  57 - 9                  */ ZeroDigitKind.Hexadecimal,
  /*  58 - :                  */ ZeroDigitKind.Unknown,
  /*  59 - ;                  */ ZeroDigitKind.Unknown,
  /*  60 - <                  */ ZeroDigitKind.Unknown,
  /*  61 - =                  */ ZeroDigitKind.Unknown,
  /*  62 - >                  */ ZeroDigitKind.Unknown,
  /*  63 - ?                  */ ZeroDigitKind.Unknown,
  /*  64 - @                  */ ZeroDigitKind.Unknown,
  /*  65 - A                  */ ZeroDigitKind.Hexadecimal,
  /*  66 - B                  */ ZeroDigitKind.LetterB,
  /*  67 - C                  */ ZeroDigitKind.Hexadecimal,
  /*  68 - D                  */ ZeroDigitKind.Hexadecimal,
  /*  69 - E                  */ ZeroDigitKind.Hexadecimal,
  /*  70 - F                  */ ZeroDigitKind.Hexadecimal,
  /*  71 - G                  */ ZeroDigitKind.Unknown,
  /*  72 - H                  */ ZeroDigitKind.Unknown,
  /*  73 - I                  */ ZeroDigitKind.Unknown,
  /*  74 - J                  */ ZeroDigitKind.Unknown,
  /*  75 - K                  */ ZeroDigitKind.Unknown,
  /*  76 - L                  */ ZeroDigitKind.Unknown,
  /*  77 - M                  */ ZeroDigitKind.Unknown,
  /*  78 - N                  */ ZeroDigitKind.Unknown,
  /*  79 - O                  */ ZeroDigitKind.LetterO,
  /*  80 - P                  */ ZeroDigitKind.Unknown,
  /*  81 - Q                  */ ZeroDigitKind.Unknown,
  /*  82 - R                  */ ZeroDigitKind.Unknown,
  /*  83 - S                  */ ZeroDigitKind.Unknown,
  /*  84 - T                  */ ZeroDigitKind.Unknown,
  /*  85 - U                  */ ZeroDigitKind.Unknown,
  /*  86 - V                  */ ZeroDigitKind.Unknown,
  /*  87 - W                  */ ZeroDigitKind.Unknown,
  /*  88 - X                  */ ZeroDigitKind.LetterX,
  /*  89 - Y                  */ ZeroDigitKind.Unknown,
  /*  90 - Z                  */ ZeroDigitKind.Unknown,
  /*  91 - [                  */ ZeroDigitKind.Unknown,
  /*  92 - \                  */ ZeroDigitKind.Unknown,
  /*  93 - ]                  */ ZeroDigitKind.Unknown,
  /*  94 - ^                  */ ZeroDigitKind.Unknown,
  /*  95 - _                  */ ZeroDigitKind.Underscore,
  /*  96 - `                  */ ZeroDigitKind.Unknown,
  /*  97 - a                  */ ZeroDigitKind.Hexadecimal,
  /*  98 - b                  */ ZeroDigitKind.LetterB,
  /*  99 - c                  */ ZeroDigitKind.Hexadecimal,
  /* 100 - d                  */ ZeroDigitKind.Hexadecimal,
  /* 101 - e                  */ ZeroDigitKind.Hexadecimal,
  /* 102 - f                  */ ZeroDigitKind.Hexadecimal,
  /* 103 - g                  */ ZeroDigitKind.Unknown,
  /* 104 - h                  */ ZeroDigitKind.Unknown,
  /* 105 - i                  */ ZeroDigitKind.Unknown,
  /* 106 - j                  */ ZeroDigitKind.Unknown,
  /* 107 - k                  */ ZeroDigitKind.Unknown,
  /* 108 - l                  */ ZeroDigitKind.Unknown,
  /* 109 - m                  */ ZeroDigitKind.Unknown,
  /* 110 - n                  */ ZeroDigitKind.BigInt,
  /* 111 - o                  */ ZeroDigitKind.LetterO,
  /* 112 - p                  */ ZeroDigitKind.Unknown,
  /* 113 - q                  */ ZeroDigitKind.Unknown,
  /* 114 - r                  */ ZeroDigitKind.Unknown,
  /* 115 - s                  */ ZeroDigitKind.Unknown,
  /* 116 - t                  */ ZeroDigitKind.Unknown,
  /* 117 - u                  */ ZeroDigitKind.Unknown,
  /* 118 - v                  */ ZeroDigitKind.Unknown,
  /* 119 - w                  */ ZeroDigitKind.Unknown,
  /* 120 - x                  */ ZeroDigitKind.LetterX,
  /* 121 - y                  */ ZeroDigitKind.Unknown,
  /* 122 - z                  */ ZeroDigitKind.Unknown,
  /* 123 - {                  */ ZeroDigitKind.Unknown,
  /* 124 - |                  */ ZeroDigitKind.Unknown,
  /* 125 - }                  */ ZeroDigitKind.Unknown,
  /* 126 - ~                  */ ZeroDigitKind.Unknown,
  /* 127 - Delete             */ ZeroDigitKind.Unknown
];

export function scanNumber(parser: ParserState, cp: number, source: string): Token {
  // Optimization: most decimal values fit into 4 bytes.
  let type = NumberKind.Decimal;
  let state = SeparatorAndBigIntState.AllowSeparator;
  let pos = parser.pos;

  parser.raw = '';
  if (cp === Char.Zero) {
    let val = 0;
    pos++; // skips '0'
    cp = source.charCodeAt(pos);
    if (AsciiCharTypes[cp] & AsciiCharFlags.OctHexBin) {
      // This is structured as an optimized finite state machine
      // and does a quick scan for a hexadecimal, binary and octals
      let digits = 0;
      do {
        switch (ZeroDigitLookup[cp]) {
          // `x`, `X`
          case ZeroDigitKind.LetterX:
            if (type & 0b00000000000000000000000000001110) {
              parser.diagnostics.push(
                error(
                  DiagnosticKind.Error,
                  DiagnosticSource.Lexer,
                  DiagnosticCode.An_identifier_or_keyword_cannot_immediately_follow_a_numeric_literal,
                  pos,
                  1
                )
              );
              break;
            }
            parser.nodeFlags |= NodeFlags.HexIntegerLiteral;
            type = NumberKind.Hex;
            break;

          // `b`, `B`
          case ZeroDigitKind.LetterB:
            if (type === NumberKind.Hex) {
              val = val * 0b00000000000000000000000000010000 + toHex(cp);
              break;
            }
            if (type & 0b00000000000000000000000000001100) {
              parser.diagnostics.push(
                error(
                  DiagnosticKind.Error,
                  DiagnosticSource.Lexer,
                  DiagnosticCode.An_identifier_or_keyword_cannot_immediately_follow_a_numeric_literal,
                  pos,
                  1
                )
              );
              break;
            }
            parser.nodeFlags |= NodeFlags.BinaryIntegerLiteral;
            type = NumberKind.Binary;
            break;

          // `o`, `O`
          case ZeroDigitKind.LetterO:
            if (type & 0b00000000000000000000000000001110) {
              parser.diagnostics.push(
                error(
                  DiagnosticKind.Error,
                  DiagnosticSource.Lexer,
                  DiagnosticCode.An_identifier_or_keyword_cannot_immediately_follow_a_numeric_literal,
                  pos,
                  1
                )
              );
              break;
            }
            parser.nodeFlags |= NodeFlags.OctalIntegerLiteral;
            type = NumberKind.Octal;
            break;

          // `0`...`1`
          case ZeroDigitKind.Binary:
            if (type & NumberKind.Binary) {
              val = val * 0b00000000000000000000000000000010 + (cp - Char.Zero);
              break;
            }

          // `2`...`7`
          case ZeroDigitKind.Octal | ZeroDigitKind.Hexadecimal:
            if (type & NumberKind.Octal) {
              val = val * 0b00000000000000000000000000001000 + (cp - Char.Zero);
              break;
            }

          // `8`...`9`, `a-f`...`A-F`
          case ZeroDigitKind.Hexadecimal:
            if (type & NumberKind.Hex) {
              val = val * 0b00000000000000000000000000010000 + toHex(cp);
              break;
            }
            parser.diagnostics.push(
              error(
                DiagnosticKind.Error,
                DiagnosticSource.Lexer,
                type & NumberKind.Binary
                  ? DiagnosticCode.Binary_integer_literal_like_sequence_containing_an_invalid_digit
                  : DiagnosticCode.Octal_integer_literal_like_sequence_containing_an_invalid_digit,
                pos,
                1
              )
            );
            break;

          // `_`
          case ZeroDigitKind.Underscore:
            parser.nodeFlags |= NodeFlags.ContainsSeparator;

            if (state & SeparatorAndBigIntState.AllowSeparator) {
              // We need to consume '__' for cases like '0b1__2' so we can correctly parse out two
              // numeric literal - '1' - and '2'.
              // '0b' and '__' are seen as invalid characters and should only be consumed.

              if (source.charCodeAt(pos + 1) === Char.Underscore) {
                parser.diagnostics.push(
                  error(
                    DiagnosticKind.Error,
                    DiagnosticSource.Lexer,
                    DiagnosticCode.Multiple_consecutive_numeric_separators_are_not_permitted,
                    pos,
                    1
                  )
                );
                parser.pos += 5;
                parser.tokenValue = val;
                return Token.NumericLiteral;
              }
              state = (state | SeparatorAndBigIntState.AllowSeparator) ^ SeparatorAndBigIntState.AllowSeparator;
            } else state |= SeparatorAndBigIntState.AllowSeparator;
            break;

          // `n`
          case ZeroDigitKind.BigInt:
            parser.tokenValue = val;
            parser.pos = ++pos;
            return Token.BigIntLiteral;
        }
        digits++;
        pos++;
        cp = source.charCodeAt(pos);
      } while (AsciiCharTypes[cp] & (AsciiCharFlags.IsSeparator | AsciiCharFlags.Hex | AsciiCharFlags.OctHexBin));

      if (AsciiCharTypes[cp] & 0b00000000000000000000000000000011) {
        parser.diagnostics.push(
          error(
            DiagnosticKind.Error,
            DiagnosticSource.Lexer,
            DiagnosticCode.An_identifier_or_keyword_cannot_immediately_follow_a_numeric_literal,
            pos,
            1
          )
        );
        pos++; // skip invalid chars
      }
      if (type & 0b00000000000000000000000000001110 && digits <= 1) {
        parser.diagnostics.push(
          error(
            DiagnosticKind.Error,
            DiagnosticSource.Lexer,
            type & NumberKind.Binary
              ? // Binary integer literal like sequence without any digits
                DiagnosticCode.Binary_integer_literal_like_sequence_without_any_digits
              : type & NumberKind.Octal
              ? // Octal integer literal like sequence without any digits
                DiagnosticCode.Octal_integer_literal_like_sequence_without_any_digits
              : // Hex integer literal like sequence without any digits
                DiagnosticCode.Hex_integer_literal_like_sequence_without_any_digits,
            parser.pos,
            1
          )
        );
        // We can't avoid this branching if we want to avoid double diagnostics, or
        // we can but it will require use of 2x 'charCodeAt' and some unnecessary
        // property / member access.
      } else if ((state & SeparatorAndBigIntState.AllowSeparator) === 0) {
        parser.diagnostics.push(
          error(
            DiagnosticKind.Error,
            DiagnosticSource.Lexer,
            DiagnosticCode.Numeric_separators_are_not_allowed_at_the_end_of_numeric_literals,
            pos,
            1
          )
        );
      }
      parser.pos = pos;
      parser.tokenValue = val;
      parser.raw = source.slice(parser.tokenPos, parser.pos);
      return Token.NumericLiteral;
    }
    // Scan a implicit octal, or "noctal" (a number starting with '0' that contains '8' or '9' and is
    // treated as decimal) number.
    if (cp >= Char.Zero && cp <= Char.Eight) {
      parser.nodeFlags |= NodeFlags.ImplicitOctal;
      type = NumberKind.ImplicitOctal;
      do {
        val = val * 0b00000000000000000000000000001000 + (cp - Char.Zero);
        cp = source.charCodeAt(++pos);
        if (cp >= Char.Eight) {
          type = NumberKind.DecimalWithLeadingZero;
          break;
        }
      } while (cp >= Char.Zero && cp <= Char.Nine);
      if (cp === Char.Underscore) {
        parser.diagnostics.push(
          error(
            DiagnosticKind.Error,
            DiagnosticSource.Lexer,
            DiagnosticCode.Numeric_separator_can_not_be_used_after_leading_0,
            pos,
            1
          )
        );
      }

      if (cp === Char.LowerN) {
        parser.diagnostics.push(
          error(DiagnosticKind.Error, DiagnosticSource.Lexer, DiagnosticCode.Invalid_BigInt_syntax, pos, 1)
        );
      }
      if (type === NumberKind.ImplicitOctal) {
        parser.pos = pos;
        parser.tokenValue = val;
        parser.raw = source.slice(parser.tokenPos, parser.pos);
        return Token.NumericLiteral;
      }
    }
    // '0' not followed by [XxBbOo0-9_];  scan as a decimal number.
  }
  let ret = 0;
  let digit = 9;

  while (digit >= 0 && cp <= Char.Nine && cp >= Char.Zero) {
    ret = 0b00000000000000000000000000001010 * ret + (cp - Char.Zero);
    cp = source.charCodeAt(++pos);
    --digit;
  }

  // Slow path
  parser.pos = pos;

  if (
    digit >= 0 &&
    (AsciiCharTypes[cp] & 0b00000000000000000000010000000011) === 0 &&
    type !== NumberKind.DecimalWithLeadingZero
  ) {
    parser.tokenValue = ret;
    parser.raw = source.slice(parser.tokenPos, parser.pos);
    return Token.NumericLiteral;
  }

  let value = scanDigitsWithNumericSeparators(parser, parser.tokenPos, cp);

  cp = source.charCodeAt(parser.pos);

  if (cp === Char.Period) {
    state |= SeparatorAndBigIntState.DisallowBigInt;
    cp = source.charCodeAt(++parser.pos); // skips: '.'
    value += '.' + scanDigitsWithNumericSeparators(parser, parser.pos, cp);
    cp = source.charCodeAt(parser.pos);
  }

  const end = parser.pos;

  if (cp === Char.LowerN) {
    if (state & SeparatorAndBigIntState.DisallowBigInt) {
      parser.diagnostics.push(
        error(DiagnosticKind.Error, DiagnosticSource.Lexer, DiagnosticCode.Invalid_BigInt_syntax, parser.pos, 1)
      );
    }
    parser.tokenValue = source.slice(parser.tokenPos, parser.pos);
    parser.raw = source.slice(parser.tokenPos, parser.pos);
    ++parser.pos; // skips: 'n'
    return Token.BigIntLiteral;
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

    if ((AsciiCharTypes[cp] & AsciiCharFlags.Decimal) === 0) {
      parser.diagnostics.push(
        error(
          DiagnosticKind.Error,
          DiagnosticSource.Lexer,
          DiagnosticCode.Non_number_after_exponent_indicator,
          parser.pos,
          1
        )
      );
      // For cases like '1e!', '1e€' etc we do a 'parser.pos + 1' so we can consume the
      // invalid char. If we do it this way, we will avoid parsing out an invalid
      // 'UnaryExpression for cases like '1e!' and for this last case - '1e€', the '€'
      // will be consumed anyway and never seen again.
      parser.pos++;
    }

    // e+<number> or E+<number> or e-<number> or E-<number>
    value += source.substring(end, parser.pos) + scanDigitsWithNumericSeparators(parser, parser.pos, cp);

    cp = source.charCodeAt(parser.pos);
  }
  // https://tc39.github.io/ecma262/#sec-literals-numeric-literals
  // The SourceCharacter immediately following a NumericLiteral must not be an IdentifierStart or DecimalDigit.
  // For example : 3in is an error and not the two input elements 3 and in
  if ((AsciiCharTypes[cp] & 0b00000000000000000000000000000011) > 0) {
    parser.diagnostics.push(
      error(
        DiagnosticKind.Error,
        DiagnosticSource.Lexer,
        DiagnosticCode.An_identifier_or_keyword_cannot_immediately_follow_a_numeric_literal,
        parser.pos,
        1
      )
    );
  }
  parser.raw = source.slice(parser.tokenPos, parser.pos);
  parser.tokenValue = parseFloat(value);
  return Token.NumericLiteral;
}

export function scanDigitsWithNumericSeparators(parser: ParserState, start: number, cp: number): string {
  let ret = '';
  let pos = parser.pos;
  let state = SeparatorAndBigIntState.None;
  const source = parser.source;
  while (AsciiCharTypes[cp] & 0b00000000000000000000000000110000) {
    // '_'
    if (cp === Char.Underscore) {
      parser.nodeFlags |= NodeFlags.ContainsSeparator;
      ret += source.substring(start, pos);
      cp = source.charCodeAt(++pos);

      state |= SeparatorAndBigIntState.AllowSeparator;

      // '__' (invalid)
      if (cp === Char.Underscore) {
        parser.diagnostics.push(
          error(
            DiagnosticKind.Error,
            DiagnosticSource.Lexer,
            DiagnosticCode.Numeric_separators_not_allowed_here,
            pos,
            /* length */ 1
          )
        );
      }
      start = pos;
      continue;
    }
    state = (state | SeparatorAndBigIntState.AllowSeparator) ^ SeparatorAndBigIntState.AllowSeparator;
    cp = source.charCodeAt(++pos);
  }

  if (state & SeparatorAndBigIntState.AllowSeparator) {
    parser.diagnostics.push(
      error(
        DiagnosticKind.Error,
        DiagnosticSource.Lexer,
        DiagnosticCode.Numeric_separators_not_allowed_here,
        pos,
        /* length */ 1
      )
    );
  }
  parser.pos = pos;
  parser.raw = source.slice(parser.tokenPos, parser.pos);
  return ret + source.substring(start, pos);
}

export function parseFloatingPointLiteral(parser: ParserState, cp: number, source: string): Token {
  let ret = scanDigitsWithNumericSeparators(parser, parser.pos, cp);
  let flag = NodeFlags.FloatingPointLiteral;

  // If we see an 'e' or 'E' we should only consume it if its of the form:
  // e<number> or E<number>
  // e+<number>   E+<number>
  // e-<number>   E-<number>
  if ((source.charCodeAt(parser.pos) | 32) === Char.LowerE) {
    const end = parser.pos;

    cp = source.charCodeAt(++parser.pos);

    // e+ or E+ or e- or E-
    if (cp === Char.Plus || cp === Char.Hyphen) cp = source.charCodeAt(++parser.pos);

    if ((AsciiCharTypes[cp] & AsciiCharFlags.Decimal) === 0) {
      parser.diagnostics.push(
        error(
          DiagnosticKind.Error,
          DiagnosticSource.Lexer,
          DiagnosticCode.Non_number_after_exponent_indicator,
          parser.pos,
          1
        )
      );

      // For cases like '1e!', '1e€' etc we do a 'parser.pos + 1' so we can consume the
      // invalid char. If we do it this way, we will avoid parsing out an invalid
      // 'UnaryExpression for cases like '1e!' and for this last case - '1e€', the '€'
      // will be consumed anyway and never seen again.
      parser.pos++;
    }

    // e+<number> or E+<number> or e-<number> or E-<number>
    ret += source.substring(end, parser.pos) + scanDigitsWithNumericSeparators(parser, parser.pos, cp);
  }

  // https://tc39.github.io/ecma262/#sec-literals-numeric-literals
  // The SourceCharacter immediately following a NumericLiteral must not be an IdentifierStart or DecimalDigit.
  // For example : 3in is an error and not the two input elements 3 and in
  if ((AsciiCharTypes[source.charCodeAt(parser.pos)] & 0b00000000000000000000000000000011) > 0) {
    parser.diagnostics.push(
      error(
        DiagnosticKind.Error,
        DiagnosticSource.Lexer,
        DiagnosticCode.An_identifier_or_keyword_cannot_immediately_follow_a_numeric_literal,
        parser.pos,
        1
      )
    );
  }
  parser.nodeFlags |= flag;
  parser.raw = source.slice(parser.tokenPos, parser.pos);
  parser.tokenValue = parseFloat(ret);
  return Token.NumericLiteral;
}
