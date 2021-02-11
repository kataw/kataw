import { ParserState } from '../../types';
import { Context } from '../common';
import { NodeFlags } from '../../ast/node';
import { Token, descKeywordTable } from '../../ast/token';
import { Char } from './char';
import { scanNumber, parseFloatingPointLiteral } from './number';
import { scanString } from './string';
import { scanTemplate } from './template';
import { DiagnosticKind, DiagnosticSource, error } from '../../diagnostics/diagnostic';
import { DiagnosticCode } from '../../diagnostics/diagnosticMessages.generated';
import { scanRegularExpression } from './regexp';
import { isIdentifierStart, isIdentifierPart, isWhiteSpaceSlow, fromCodePoint, isLineTerminator } from './common';
import { scanIdentifier, scanIdentifierOrKeyword, scanIdentifierParts, scanIdentifierEscape } from './identifiers';

export const firstCharKinds = [
  /*   0 - Null               */ Token.Unknown,
  /*   1 - Start of Heading   */ Token.Unknown,
  /*   2 - Start of Text      */ Token.Unknown,
  /*   3 - End of Text        */ Token.Unknown,
  /*   4 - End of Transm.     */ Token.Unknown,
  /*   5 - Enquiry            */ Token.Unknown,
  /*   6 - Acknowledgment     */ Token.Unknown,
  /*   7 - Bell               */ Token.Unknown,
  /*   8 - Backspace          */ Token.Unknown,
  /*   9 - Horizontal Tab     */ Token.Whitespace,
  /*  10 - Line Feed          */ Token.LineFeed,
  /*  11 - Vertical Tab       */ Token.Whitespace,
  /*  12 - Form Feed          */ Token.Whitespace,
  /*  13 - Carriage Return    */ Token.CarriageReturn,
  /*  14 - Shift Out          */ Token.Unknown,
  /*  15 - Shift In           */ Token.Unknown,
  /*  16 - Data Line Escape   */ Token.Unknown,
  /*  17 - Device Control 1   */ Token.Unknown,
  /*  18 - Device Control 2   */ Token.Unknown,
  /*  19 - Device Control 3   */ Token.Unknown,
  /*  20 - Device Control 4   */ Token.Unknown,
  /*  21 - Negative Ack.      */ Token.Unknown,
  /*  22 - Synchronous Idle   */ Token.Unknown,
  /*  23 - End of Transmit    */ Token.Unknown,
  /*  24 - Cancel             */ Token.Unknown,
  /*  25 - End of Medium      */ Token.Unknown,
  /*  26 - Substitute         */ Token.Unknown,
  /*  27 - Escape             */ Token.Unknown,
  /*  28 - File Separator     */ Token.Unknown,
  /*  29 - Group Separator    */ Token.Unknown,
  /*  30 - Record Separator   */ Token.Unknown,
  /*  31 - Unit Separator     */ Token.Unknown,
  /*  32 - Space              */ Token.Whitespace,
  /*  33 - !                  */ Token.Negate,
  /*  34 - "                  */ Token.StringLiteral,
  /*  35 - #                  */ Token.PrivateIdentifier,
  /*  36 - $                  */ Token.Identifier,
  /*  37 - %                  */ Token.Modulo,
  /*  38 - &                  */ Token.BitwiseAnd,
  /*  39 - '                  */ Token.StringLiteral,
  /*  40 - (                  */ Token.LeftParen,
  /*  41 - )                  */ Token.RightParen,
  /*  42 - *                  */ Token.Multiply,
  /*  43 - +                  */ Token.Add,
  /*  44 - ,                  */ Token.Comma,
  /*  45 - -                  */ Token.Subtract,
  /*  46 - .                  */ Token.Period,
  /*  47 - /                  */ Token.Divide,
  /*  48 - 0                  */ Token.NumericLiteral,
  /*  49 - 1                  */ Token.NumericLiteral,
  /*  50 - 2                  */ Token.NumericLiteral,
  /*  51 - 3                  */ Token.NumericLiteral,
  /*  52 - 4                  */ Token.NumericLiteral,
  /*  53 - 5                  */ Token.NumericLiteral,
  /*  54 - 6                  */ Token.NumericLiteral,
  /*  55 - 7                  */ Token.NumericLiteral,
  /*  56 - 8                  */ Token.NumericLiteral,
  /*  57 - 9                  */ Token.NumericLiteral,
  /*  58 - :                  */ Token.Colon,
  /*  59 - ;                  */ Token.Semicolon,
  /*  60 - <                  */ Token.LessThan,
  /*  61 - =                  */ Token.Assign,
  /*  62 - >                  */ Token.GreaterThan,
  /*  63 - ?                  */ Token.QuestionMark,
  /*  64 - @                  */ Token.Decorator,
  /*  65 - A                  */ Token.Identifier,
  /*  66 - B                  */ Token.Identifier,
  /*  67 - C                  */ Token.Identifier,
  /*  68 - D                  */ Token.Identifier,
  /*  69 - E                  */ Token.Identifier,
  /*  70 - F                  */ Token.Identifier,
  /*  71 - G                  */ Token.Identifier,
  /*  72 - H                  */ Token.Identifier,
  /*  73 - I                  */ Token.Identifier,
  /*  74 - J                  */ Token.Identifier,
  /*  75 - K                  */ Token.Identifier,
  /*  76 - L                  */ Token.Identifier,
  /*  77 - M                  */ Token.Identifier,
  /*  78 - N                  */ Token.Identifier,
  /*  79 - O                  */ Token.Identifier,
  /*  80 - P                  */ Token.Identifier,
  /*  81 - Q                  */ Token.Identifier,
  /*  82 - R                  */ Token.Identifier,
  /*  83 - S                  */ Token.Identifier,
  /*  84 - T                  */ Token.Identifier,
  /*  85 - U                  */ Token.Identifier,
  /*  86 - V                  */ Token.Identifier,
  /*  87 - W                  */ Token.Identifier,
  /*  88 - X                  */ Token.Identifier,
  /*  89 - Y                  */ Token.Identifier,
  /*  90 - Z                  */ Token.Identifier,
  /*  91 - [                  */ Token.LeftBracket,
  /*  92 - \                  */ Token.EscapeSequence,
  /*  93 - ]                  */ Token.RightBracket,
  /*  94 - ^                  */ Token.BitwiseXor,
  /*  95 - _                  */ Token.Identifier,
  /*  96 - `                  */ Token.TemplateTail,
  /*  97 - a                  */ Token.Keyword,
  /*  98 - b                  */ Token.Keyword,
  /*  99 - c                  */ Token.Keyword,
  /* 100 - d                  */ Token.Keyword,
  /* 101 - e                  */ Token.Keyword,
  /* 102 - f                  */ Token.Keyword,
  /* 103 - g                  */ Token.Keyword,
  /* 104 - h                  */ Token.Keyword,
  /* 105 - i                  */ Token.Keyword,
  /* 106 - j                  */ Token.Keyword,
  /* 107 - k                  */ Token.Keyword,
  /* 108 - l                  */ Token.Keyword,
  /* 109 - m                  */ Token.Keyword,
  /* 110 - n                  */ Token.Keyword,
  /* 111 - o                  */ Token.Keyword,
  /* 112 - p                  */ Token.Keyword,
  /* 113 - q                  */ Token.Keyword,
  /* 114 - r                  */ Token.Keyword,
  /* 115 - s                  */ Token.Keyword,
  /* 116 - t                  */ Token.Keyword,
  /* 117 - u                  */ Token.Keyword,
  /* 118 - v                  */ Token.Keyword,
  /* 119 - w                  */ Token.Keyword,
  /* 120 - x                  */ Token.Keyword,
  /* 121 - y                  */ Token.Keyword,
  /* 122 - z                  */ Token.Keyword,
  /* 123 - {                  */ Token.LeftBrace,
  /* 124 - |                  */ Token.BitwiseOr,
  /* 125 - }                  */ Token.RightBrace,
  /* 126 - ~                  */ Token.Complement
];

export function nextToken(parser: ParserState, context: Context): void {
  parser.nodeFlags = context & Context.Strict ? NodeFlags.Strict : NodeFlags.None;
  parser.startPos = parser.pos;
  parser.token = scan(parser, context);
}

export function scan(parser: ParserState, context: Context): Token {
  let lastIsCR = false;
  const source = parser.source;
  let cp = source.charCodeAt(parser.pos);

  while (parser.pos < parser.end) {
    parser.tokenPos = parser.pos;

    const token = firstCharKinds[cp];

    switch (token) {
      case Token.RightBrace:
      case Token.LeftBrace:
      case Token.Comma:
      case Token.Colon:
      case Token.Complement:
      case Token.LeftParen:
      case Token.RightParen:
      case Token.Semicolon:
      case Token.LeftBracket:
      case Token.RightBracket:
      case Token.Decorator:
        parser.pos++;
        return token;

      // Skip over non-EOL whitespace chars
      case Token.Whitespace:
        parser.pos++;
        lastIsCR = false;
        break;

      // Look for an keyword (a-z)
      case Token.Keyword:
        return scanIdentifierOrKeyword(parser, cp, source);

      // Look for an identifier -(A-Z, $, _).
      case Token.Identifier:
        return scanIdentifier(parser, cp, source);

      case Token.NumericLiteral:
        return scanNumber(parser, cp, source);

      // `'string'`, `"string"`
      case Token.StringLiteral:
        return scanString(parser, cp, source);

      case Token.CarriageReturn:
        parser.pos++;
        lastIsCR = true;
        parser.nodeFlags |= NodeFlags.PrecedingLineBreak;
        break;

      case Token.LineFeed:
        if (lastIsCR) parser.pos++;
        parser.nodeFlags |= NodeFlags.PrecedingLineBreak;
        parser.pos++;
        lastIsCR = false;
        break;

      // `.`, `...`, `.123` (numeric literal)
      case Token.Period:
        let index = parser.pos + 1;

        cp = source.charCodeAt(index);

        if (cp >= Char.Zero && cp <= Char.Nine) {
          return parseFloatingPointLiteral(parser, cp, source);
        }

        if (cp === Char.Period) {
          index++;
          if (index < parser.end && source.charCodeAt(index) === Char.Period) {
            parser.pos = index + 1;
            return Token.Ellipsis;
          }
        }
        parser.pos++;
        return Token.Period;

      // `=`, `==`, `===`, `=>`
      case Token.Assign:
        parser.pos++;
        cp = source.charCodeAt(parser.pos);
        if (cp === Char.EqualSign) {
          parser.pos++;
          if (source.charCodeAt(parser.pos) === Char.EqualSign) {
            parser.pos++;
            return Token.StrictEqual;
          }
          return Token.LooseEqual;
        }
        if (cp === Char.GreaterThan) {
          parser.pos++;
          return Token.Arrow;
        }
        return Token.Assign;

      // `+`, `++`, `+=`
      case Token.Add:
        cp = source.charCodeAt(++parser.pos);

        if (cp === Char.Plus) {
          parser.pos++;
          return Token.Increment;
        }
        if (cp === Char.EqualSign) {
          parser.pos++;
          return Token.AddAssign;
        }
        return Token.Add;

      // ``string``
      case Token.TemplateTail:
        return scanTemplate(parser, context, source);

      // `?`, `?.`, `??`, `??=`,
      case Token.QuestionMark:
        cp = source.charCodeAt(++parser.pos);

        if (cp === Char.Period) {
          cp = source.charCodeAt(++parser.pos);
          if (cp >= Char.Zero && cp <= Char.Nine) {
            // if the code unit is followed by a number, for example it has the
            // following form `?.a` or `?.5` then it should be treated as a
            // ternary rather than as an optional chain
            return Token.QuestionMark;
          }

          return Token.QuestionMarkPeriod;
        }

        if (cp === Char.QuestionMark) {
          parser.pos++;
          if (source.charCodeAt(parser.pos) === Char.EqualSign) {
            parser.pos++;
            return Token.NullishAssign;
          }
          return Token.Nullish;
        }

        return Token.QuestionMark;

      // `!`, `!=`, `!==`
      case Token.Negate:
        cp = source.charCodeAt(++parser.pos);
        if (cp === Char.EqualSign) {
          parser.pos++;
          if (source.charCodeAt(parser.pos) === Char.EqualSign) {
            parser.pos++;
            return Token.StrictNotEqual;
          }
          return Token.LooseNotEqual;
        }
        return Token.Negate;

      // `*`, `**`, `*=`, `**=`
      case Token.Multiply:
        cp = source.charCodeAt(++parser.pos);
        if (cp === Char.EqualSign) {
          parser.pos++;
          return Token.MultiplyAssign;
        }
        if (cp === Char.Asterisk) {
          parser.pos++;
          if (source.charCodeAt(parser.pos) === Char.EqualSign) {
            parser.pos++;
            return Token.ExponentiateAssign;
          }
          return Token.Exponentiate;
        }
        return Token.Multiply;

      // `/`, `/=`, `/>`, '/*..*/'
      case Token.Divide:
        cp = source.charCodeAt(++parser.pos);
        // is it a // comment?
        if (cp === Char.Slash) {
          while (parser.pos < parser.end && !isLineTerminator(cp)) {
            cp = source.charCodeAt(++parser.pos);
          }
          break;
        }

        // is it a /* or /** comment?
        if (cp === Char.Asterisk) {
          cp = source.charCodeAt(++parser.pos);

          let commentClosed = false;

          do {
            if (cp === Char.Asterisk && source.charCodeAt(parser.pos + 1) === Char.Slash) {
              parser.pos += 2;
              commentClosed = true;
              break;
            }

            if (isLineTerminator(cp)) parser.nodeFlags |= NodeFlags.PrecedingLineBreak;

            parser.pos++;
            cp = source.charCodeAt(parser.pos);
          } while (parser.pos < parser.end);

          if (!commentClosed) {
            parser.diagnostics.push(
              error(DiagnosticKind.Error, DiagnosticSource.Lexer, DiagnosticCode.Unterminated_comment, parser.pos, 0)
            );
          }
          break;
        }
        if (context & Context.AllowRegExp) return scanRegularExpression(parser, source);

        cp = source.charCodeAt(parser.pos);

        if (cp === Char.EqualSign) {
          parser.pos++;
          return Token.DivideAssign;
        }

        return Token.Divide;

      // `-`, `--`, `-=`, `-->`
      case Token.Subtract:
        cp = source.charCodeAt(++parser.pos);

        if (cp === Char.Hyphen) {
          parser.pos++;
          // treat HTML end-comment after possible whitespace
          // after line start as comment-until-eol
          if (source.charCodeAt(parser.pos) === Char.GreaterThan && parser.nodeFlags & NodeFlags.PrecedingLineBreak) {
            parser.pos++;
            while (parser.pos < parser.end && !isLineTerminator(source.charCodeAt(parser.pos))) {
              parser.pos++;
            }
            continue;
          }
          return Token.Decrement;
        }

        if (cp === Char.EqualSign) {
          parser.pos++;
          return Token.SubtractAssign;
        }
        return Token.Subtract;

      // `<`, `<=`, `<<`, `<<=`, `</`, `<!--`
      case Token.LessThan:
        cp = source.charCodeAt(++parser.pos);
        if (cp === Char.EqualSign) {
          parser.pos++;
          return Token.LessThanOrEqual;
        }
        if (cp === Char.LessThan) {
          parser.pos++;
          if (source.charCodeAt(parser.pos) === Char.EqualSign) {
            parser.pos++;
            return Token.ShiftLeftAssign;
          }
          return Token.ShiftLeft;
        }
        // NB: Treat HTML open-comment as comment-till-eol
        if (cp === Char.Exclamation) {
          parser.pos++;
          if (source.charCodeAt(parser.pos + 1) === Char.Hyphen && source.charCodeAt(parser.pos) == Char.Hyphen) {
            while (parser.pos < parser.end && !isLineTerminator(source.charCodeAt(parser.pos))) {
              parser.pos++;
            }
            continue;
          }
        }
        return Token.LessThan;

      // `&`, `&&`, `&=`, `&&=`
      case Token.BitwiseAnd:
        cp = source.charCodeAt(++parser.pos);
        if (cp === Char.Ampersand) {
          parser.pos++;
          if (source.charCodeAt(parser.pos) === Char.EqualSign) {
            parser.pos++;
            return Token.LogicalAndAssign;
          }
          return Token.LogicalAnd;
        }
        if (cp === Char.EqualSign) {
          parser.pos++;
          return Token.BitwiseAndAssign;
        }
        return Token.BitwiseAnd;

      // `>`, `>=`, `>>`, `>>>`, `>>=`, `>>>=`
      case Token.GreaterThan:
        cp = source.charCodeAt(++parser.pos);
        if (context & Context.InTypes) return Token.GreaterThan;
        if (cp === Char.EqualSign) {
          parser.pos++;
          return Token.GreaterThanOrEqual;
        }

        if (cp === Char.GreaterThan) {
          parser.pos++;
          if (source.charCodeAt(parser.pos) === Char.GreaterThan) {
            parser.pos++;
            if (source.charCodeAt(parser.pos) === Char.EqualSign) {
              parser.pos++;
              return Token.LogicalShiftRightAssign;
            }
            return Token.LogicalShiftRight;
          }
          if (source.charCodeAt(parser.pos) === Char.EqualSign) {
            parser.pos++;
            return Token.ShiftRightAssign;
          }
          return Token.ShiftRight;
        }
        return Token.GreaterThan;

      // `|`, `||`, `|=`
      case Token.BitwiseOr:
        cp = source.charCodeAt(++parser.pos);
        if (cp === Char.VerticalBar) {
          parser.pos++;
          if (source.charCodeAt(parser.pos) === Char.EqualSign) {
            parser.pos++;
            return Token.LogicalOrAssign;
          }
          return Token.LogicalOr;
        }
        if (cp === Char.EqualSign) {
          parser.pos++;
          return Token.BitwiseOrAssign;
        }

        return Token.BitwiseOr;

      // `%`, `%=`
      case Token.Modulo:
        cp = source.charCodeAt(++parser.pos);
        if (cp === Char.EqualSign) {
          parser.pos++;
          return Token.ModuloAssign;
        }
        return Token.Modulo;

      // `^`, `^=`
      case Token.BitwiseXor:
        cp = source.charCodeAt(++parser.pos);
        if (cp === Char.EqualSign) {
          parser.pos++;
          return Token.BitwiseXorAssign;
        }
        return Token.BitwiseXor;

      case Token.PrivateIdentifier:
        if (parser.pos !== 0 && source.charCodeAt(parser.pos + 1) === Char.Exclamation) {
          error(
            DiagnosticKind.Error,
            DiagnosticSource.Lexer,
            DiagnosticCode._can_only_be_used_at_the_start_of_a_file,
            parser.pos,
            1
          );
          parser.pos++;
          return Token.Unknown;
        }

        parser.pos++;

        if (isIdentifierStart(source.charCodeAt(parser.pos))) {
          let pos = parser.pos + 1;
          while (pos < parser.end && isIdentifierPart((cp = source.charCodeAt(pos)))) ++pos;
          parser.tokenValue = source.substring(parser.tokenPos, pos);
          if (cp === Char.Backslash) {
            parser.tokenValue += scanIdentifierParts(parser, source);
          }
          parser.raw = source.substring(parser.tokenPos, pos);
          parser.pos = pos;
        } else {
          parser.tokenValue = '#';
          parser.diagnostics.push(
            error(DiagnosticKind.Error, DiagnosticSource.Lexer, DiagnosticCode.Invalid_character, parser.pos, 1)
          );
        }
        return Token.PrivateIdentifier;

      case Token.EscapeSequence:
        const cooked = scanIdentifierEscape(parser);
        if (cooked > 0) {
          parser.tokenValue = fromCodePoint(cooked) + scanIdentifierParts(parser, source);
          parser.raw = source.slice(parser.startPos, parser.pos);
          const keyword = descKeywordTable[parser.tokenValue];
          if (keyword !== undefined) return keyword;
          return Token.Identifier;
        }
        if (source.charCodeAt(parser.pos) === Char.Backslash) parser.pos++;
        parser.tokenValue = fromCodePoint(cooked);
        parser.raw = source.slice(parser.startPos, parser.pos);
        return Token.Unknown;

      default:
        if ((cp & ~1) === Char.LineSeparator) {
          parser.nodeFlags |= NodeFlags.PrecedingLineBreak;
          parser.pos++;
          continue;
        }
        if (isWhiteSpaceSlow(cp)) {
          parser.pos++;
          continue;
        }
        if (isIdentifierStart(cp) || (cp & 0xfc00) === 0xd800) {
          // lead surrogate (U+d800..U+dbff)
          const lead = source.charCodeAt(parser.pos + 1);

          cp = 0x10000 + ((cp & 0x3ff) << 10) + (lead & 0x3ff);
          if ((lead & 0xfc00) !== 0xdc00 || !isIdentifierPart(cp)) {
            parser.diagnostics.push(
              error(DiagnosticKind.Error, DiagnosticSource.Lexer, DiagnosticCode.Invalid_lower_surrogate, parser.pos, 1)
            );
          }

          parser.tokenValue = scanIdentifierParts(parser, source);
          parser.raw = source.slice(parser.startPos, parser.pos);
          return Token.Identifier;
        }

        parser.diagnostics.push(
          error(DiagnosticKind.Error, DiagnosticSource.Lexer, DiagnosticCode.Invalid_character, parser.pos, 1)
        );

        // Increment the index so we can stay on track and avoid infinity loops
        parser.pos++;

        return Token.Unknown;
    }
    cp = source.charCodeAt(parser.pos);
  }
  return Token.EndOfSource;
}
