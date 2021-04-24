import { ParserState, Context } from '../common';
import { Char } from './char';
import { SyntaxKind, NodeFlags } from '../ast/syntax-node';
import { scanNumber, parseFloatingPointLiteral } from './number';
import { scanString } from './string';
import { scanTemplate } from './template';
import { scanRegularExpression } from './regexp';
import { isIdentifierStart, isIdentifierPart, isWhiteSpaceSlow, fromCodePoint, isLineTerminator } from './common';
import { DiagnosticCode, diagnosticMap } from '../diagnostic/diagnostic-code';
import { DiagnosticSource } from '../diagnostic/diagnostic-source';
import {
  scanIdentifier,
  descKeywordTable,
  scanIdentifierEscape,
  scanIdentifierOrKeyword,
  scanIdentifierParts
} from './identifiers';

export const firstCharKinds = [
  /*   0 - Null               */ SyntaxKind.UnknownToken,
  /*   1 - Start of Heading   */ SyntaxKind.UnknownToken,
  /*   2 - Start of Text      */ SyntaxKind.UnknownToken,
  /*   3 - End of Text        */ SyntaxKind.UnknownToken,
  /*   4 - End of Transm.     */ SyntaxKind.UnknownToken,
  /*   5 - Enquiry            */ SyntaxKind.UnknownToken,
  /*   6 - Acknowledgment     */ SyntaxKind.UnknownToken,
  /*   7 - Bell               */ SyntaxKind.UnknownToken,
  /*   8 - Backspace          */ SyntaxKind.UnknownToken,
  /*   9 - Horizontal Tab     */ SyntaxKind.Whitespace,
  /*  10 - Line Feed          */ SyntaxKind.LineFeed,
  /*  11 - Vertical Tab       */ SyntaxKind.Whitespace,
  /*  12 - Form Feed          */ SyntaxKind.Whitespace,
  /*  13 - Carriage Return    */ SyntaxKind.CarriageReturn,
  /*  14 - Shift Out          */ SyntaxKind.UnknownToken,
  /*  15 - Shift In           */ SyntaxKind.UnknownToken,
  /*  16 - Data Line Escape   */ SyntaxKind.UnknownToken,
  /*  17 - Device Control 1   */ SyntaxKind.UnknownToken,
  /*  18 - Device Control 2   */ SyntaxKind.UnknownToken,
  /*  19 - Device Control 3   */ SyntaxKind.UnknownToken,
  /*  20 - Device Control 4   */ SyntaxKind.UnknownToken,
  /*  21 - Negative Ack.      */ SyntaxKind.UnknownToken,
  /*  22 - Synchronous Idle   */ SyntaxKind.UnknownToken,
  /*  23 - End of Transmit    */ SyntaxKind.UnknownToken,
  /*  24 - Cancel             */ SyntaxKind.UnknownToken,
  /*  25 - End of Medium      */ SyntaxKind.UnknownToken,
  /*  26 - Substitute         */ SyntaxKind.UnknownToken,
  /*  27 - Escape             */ SyntaxKind.UnknownToken,
  /*  28 - File Separator     */ SyntaxKind.UnknownToken,
  /*  29 - Group Separator    */ SyntaxKind.UnknownToken,
  /*  30 - Record Separator   */ SyntaxKind.UnknownToken,
  /*  31 - Unit Separator     */ SyntaxKind.UnknownToken,
  /*  32 - Space              */ SyntaxKind.Whitespace,
  /*  33 - !                  */ SyntaxKind.Negate,
  /*  34 - "                  */ SyntaxKind.StringLiteral,
  /*  35 - #                  */ SyntaxKind.PrivateIdentifier,
  /*  36 - $                  */ SyntaxKind.Identifier,
  /*  37 - %                  */ SyntaxKind.Modulo,
  /*  38 - &                  */ SyntaxKind.BitwiseAnd,
  /*  39 - '                  */ SyntaxKind.StringLiteral,
  /*  40 - (                  */ SyntaxKind.LeftParen,
  /*  41 - )                  */ SyntaxKind.RightParen,
  /*  42 - *                  */ SyntaxKind.Multiply,
  /*  43 - +                  */ SyntaxKind.Add,
  /*  44 - ,                  */ SyntaxKind.Comma,
  /*  45 - -                  */ SyntaxKind.Subtract,
  /*  46 - .                  */ SyntaxKind.Period,
  /*  47 - /                  */ SyntaxKind.Divide,
  /*  48 - 0                  */ SyntaxKind.NumericLiteral,
  /*  49 - 1                  */ SyntaxKind.NumericLiteral,
  /*  50 - 2                  */ SyntaxKind.NumericLiteral,
  /*  51 - 3                  */ SyntaxKind.NumericLiteral,
  /*  52 - 4                  */ SyntaxKind.NumericLiteral,
  /*  53 - 5                  */ SyntaxKind.NumericLiteral,
  /*  54 - 6                  */ SyntaxKind.NumericLiteral,
  /*  55 - 7                  */ SyntaxKind.NumericLiteral,
  /*  56 - 8                  */ SyntaxKind.NumericLiteral,
  /*  57 - 9                  */ SyntaxKind.NumericLiteral,
  /*  58 - :                  */ SyntaxKind.Colon,
  /*  59 - ;                  */ SyntaxKind.Semicolon,
  /*  60 - <                  */ SyntaxKind.LessThan,
  /*  61 - =                  */ SyntaxKind.Assign,
  /*  62 - >                  */ SyntaxKind.GreaterThan,
  /*  63 - ?                  */ SyntaxKind.QuestionMark,
  /*  64 - @                  */ SyntaxKind.Decorator,
  /*  65 - A                  */ SyntaxKind.Identifier,
  /*  66 - B                  */ SyntaxKind.Identifier,
  /*  67 - C                  */ SyntaxKind.Identifier,
  /*  68 - D                  */ SyntaxKind.Identifier,
  /*  69 - E                  */ SyntaxKind.Identifier,
  /*  70 - F                  */ SyntaxKind.Identifier,
  /*  71 - G                  */ SyntaxKind.Identifier,
  /*  72 - H                  */ SyntaxKind.Identifier,
  /*  73 - I                  */ SyntaxKind.Identifier,
  /*  74 - J                  */ SyntaxKind.Identifier,
  /*  75 - K                  */ SyntaxKind.Identifier,
  /*  76 - L                  */ SyntaxKind.Identifier,
  /*  77 - M                  */ SyntaxKind.Identifier,
  /*  78 - N                  */ SyntaxKind.Identifier,
  /*  79 - O                  */ SyntaxKind.Identifier,
  /*  80 - P                  */ SyntaxKind.Identifier,
  /*  81 - Q                  */ SyntaxKind.Identifier,
  /*  82 - R                  */ SyntaxKind.Identifier,
  /*  83 - S                  */ SyntaxKind.Identifier,
  /*  84 - T                  */ SyntaxKind.Identifier,
  /*  85 - U                  */ SyntaxKind.Identifier,
  /*  86 - V                  */ SyntaxKind.Identifier,
  /*  87 - W                  */ SyntaxKind.Identifier,
  /*  88 - X                  */ SyntaxKind.Identifier,
  /*  89 - Y                  */ SyntaxKind.Identifier,
  /*  90 - Z                  */ SyntaxKind.Identifier,
  /*  91 - [                  */ SyntaxKind.LeftBracket,
  /*  92 - \                  */ SyntaxKind.EscapedKeyword,
  /*  93 - ]                  */ SyntaxKind.RightBracket,
  /*  94 - ^                  */ SyntaxKind.BitwiseXor,
  /*  95 - _                  */ SyntaxKind.Identifier,
  /*  96 - `                  */ SyntaxKind.TemplateTail,
  /*  97 - a                  */ SyntaxKind.IsKeyword,
  /*  98 - b                  */ SyntaxKind.IsKeyword,
  /*  99 - c                  */ SyntaxKind.IsKeyword,
  /* 100 - d                  */ SyntaxKind.IsKeyword,
  /* 101 - e                  */ SyntaxKind.IsKeyword,
  /* 102 - f                  */ SyntaxKind.IsKeyword,
  /* 103 - g                  */ SyntaxKind.IsKeyword,
  /* 104 - h                  */ SyntaxKind.IsKeyword,
  /* 105 - i                  */ SyntaxKind.IsKeyword,
  /* 106 - j                  */ SyntaxKind.IsKeyword,
  /* 107 - k                  */ SyntaxKind.IsKeyword,
  /* 108 - l                  */ SyntaxKind.IsKeyword,
  /* 109 - m                  */ SyntaxKind.IsKeyword,
  /* 110 - n                  */ SyntaxKind.IsKeyword,
  /* 111 - o                  */ SyntaxKind.IsKeyword,
  /* 112 - p                  */ SyntaxKind.IsKeyword,
  /* 113 - q                  */ SyntaxKind.IsKeyword,
  /* 114 - r                  */ SyntaxKind.IsKeyword,
  /* 115 - s                  */ SyntaxKind.IsKeyword,
  /* 116 - t                  */ SyntaxKind.IsKeyword,
  /* 117 - u                  */ SyntaxKind.IsKeyword,
  /* 118 - v                  */ SyntaxKind.IsKeyword,
  /* 119 - w                  */ SyntaxKind.IsKeyword,
  /* 120 - x                  */ SyntaxKind.IsKeyword,
  /* 121 - y                  */ SyntaxKind.IsKeyword,
  /* 122 - z                  */ SyntaxKind.IsKeyword,
  /* 123 - {                  */ SyntaxKind.LeftBrace,
  /* 124 - |                  */ SyntaxKind.BitwiseOr,
  /* 125 - }                  */ SyntaxKind.RightBrace,
  /* 126 - ~                  */ SyntaxKind.Complement
];

export function nextToken(parser: ParserState, context: Context): void {
  parser.nodeFlags = NodeFlags.None; //context & Context.Strict ? NodeFlags.Strict : NodeFlags.None;
  parser.curPos = parser.pos;
  (parser.token as any) = scan(parser, context);
}

export function scan(parser: ParserState, context: Context): SyntaxKind {
  const source = parser.source;
  let cp = source.charCodeAt(parser.pos);

  while (parser.pos < parser.end) {
    parser.tokenPos = parser.pos;

    const token = firstCharKinds[cp];

    switch (token) {
      case SyntaxKind.RightBrace:
      case SyntaxKind.LeftBrace:
      case SyntaxKind.Comma:
      case SyntaxKind.Colon:
      case SyntaxKind.Complement:
      case SyntaxKind.LeftParen:
      case SyntaxKind.RightParen:
      case SyntaxKind.Semicolon:
      case SyntaxKind.LeftBracket:
      case SyntaxKind.RightBracket:
      case SyntaxKind.Decorator:
        parser.pos++;
        return token;

      // Look for an keyword (a-z)
      case SyntaxKind.IsKeyword:
        return scanIdentifierOrKeyword(parser, cp, source);

      // Look for an identifier -(A-Z, $, _).
      case SyntaxKind.Identifier:
        return scanIdentifier(parser, cp, source);

      case SyntaxKind.NumericLiteral:
        return scanNumber(parser, cp, source);

      case SyntaxKind.CarriageReturn:
      case SyntaxKind.LineFeed:
        parser.nodeFlags |= NodeFlags.NewLine;
      case SyntaxKind.Whitespace:
        parser.pos++;
        break;

      // `'string'`, `"string"`
      case SyntaxKind.StringLiteral:
        return scanString(parser, context, cp, source);

      // `.`, `...`, `.123` (numeric literal)
      case SyntaxKind.Period:
        let index = parser.pos + 1;

        cp = source.charCodeAt(index);

        if (cp >= Char.Zero && cp <= Char.Nine) {
          return parseFloatingPointLiteral(parser, cp, source);
        }

        if (cp === Char.Period) {
          index++;
          if (index < parser.end && source.charCodeAt(index) === Char.Period) {
            parser.pos = index + 1;
            return SyntaxKind.Ellipsis;
          }
        }
        parser.pos++;
        return SyntaxKind.Period;

      // `=`, `==`, `===`, `=>`
      case SyntaxKind.Assign:
        parser.pos++;
        cp = source.charCodeAt(parser.pos);
        if (cp === Char.EqualSign) {
          parser.pos++;
          if (source.charCodeAt(parser.pos) === Char.EqualSign) {
            parser.pos++;
            return SyntaxKind.StrictEqual;
          }
          return SyntaxKind.LooseEqual;
        }
        if (cp === Char.GreaterThan) {
          parser.pos++;
          return SyntaxKind.Arrow;
        }
        return SyntaxKind.Assign;

      // `+`, `++`, `+=`
      case SyntaxKind.Add:
        cp = source.charCodeAt(++parser.pos);

        if (cp === Char.Plus) {
          parser.pos++;
          return SyntaxKind.Increment;
        }
        if (cp === Char.EqualSign) {
          parser.pos++;
          return SyntaxKind.AddAssign;
        }
        return SyntaxKind.Add;

      // ``string``
      case SyntaxKind.TemplateTail:
        return scanTemplate(parser, context, /* isTaggedTemplate */ false, source);

      // `?`, `?.`, `??`, `??=`,
      case SyntaxKind.QuestionMark:
        cp = source.charCodeAt(++parser.pos);
        if (context & Context.InTypes) return SyntaxKind.QuestionMark;
        if (cp === Char.Period) {
          cp = source.charCodeAt(++parser.pos);
          if (cp >= Char.Zero && cp <= Char.Nine) {
            // if the code unit is followed by a number, for example it has the
            // following form `?.a` or `?.5` then it should be treated as a
            // ternary rather than as an optional chain
            return SyntaxKind.QuestionMark;
          }

          return SyntaxKind.QuestionMarkPeriod;
        }

        if (cp === Char.QuestionMark) {
          parser.pos++;
          if (source.charCodeAt(parser.pos) === Char.EqualSign) {
            parser.pos++;
            return SyntaxKind.CoalesceAssign;
          }
          return SyntaxKind.QuestionMarkQuestionMark;
        }

        return SyntaxKind.QuestionMark;

      // `!`, `!=`, `!==`
      case SyntaxKind.Negate:
        cp = source.charCodeAt(++parser.pos);
        if (cp === Char.EqualSign) {
          parser.pos++;
          if (source.charCodeAt(parser.pos) === Char.EqualSign) {
            parser.pos++;
            return SyntaxKind.StrictNotEqual;
          }
          return SyntaxKind.LooseNotEqual;
        }
        return SyntaxKind.Negate;

      // `*`, `**`, `*=`, `**=`
      case SyntaxKind.Multiply:
        cp = source.charCodeAt(++parser.pos);
        if (cp === Char.EqualSign) {
          parser.pos++;
          return SyntaxKind.MultiplyAssign;
        }
        if (cp === Char.Asterisk) {
          parser.pos++;
          if (source.charCodeAt(parser.pos) === Char.EqualSign) {
            parser.pos++;
            return SyntaxKind.ExponentiateAssign;
          }
          return SyntaxKind.Exponentiate;
        }
        return SyntaxKind.Multiply;

      // `/`, `/=`, `/>`, '/*..*/'
      case SyntaxKind.Divide:
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

            if (isLineTerminator(cp)) parser.nodeFlags |= NodeFlags.NewLine;

            parser.pos++;
            cp = source.charCodeAt(parser.pos);
          } while (parser.pos < parser.end);

          if (!commentClosed) {
            parser.onError(
              DiagnosticSource.Parser,
              diagnosticMap[DiagnosticCode.Unexpected_token],
              parser.curPos,
              parser.pos
            );
          }
          break;
        }
        if (context & Context.AllowRegExp) return scanRegularExpression(parser, source);

        cp = source.charCodeAt(parser.pos);

        if (cp === Char.EqualSign) {
          parser.pos++;
          return SyntaxKind.DivideAssign;
        }

        return SyntaxKind.Divide;

      // `-`, `--`, `-=`, `-->`
      case SyntaxKind.Subtract:
        cp = source.charCodeAt(++parser.pos);

        if (cp === Char.Hyphen) {
          parser.pos++;
          // treat HTML end-comment after possible whitespace
          // after line start as comment-until-eol
          if (source.charCodeAt(parser.pos) === Char.GreaterThan && parser.nodeFlags & NodeFlags.NewLine) {
            parser.pos++;
            while (parser.pos < parser.end && !isLineTerminator(source.charCodeAt(parser.pos))) {
              parser.pos++;
            }
            continue;
          }
          return SyntaxKind.Decrement;
        }

        if (cp === Char.EqualSign) {
          parser.pos++;
          return SyntaxKind.SubtractAssign;
        }
        return SyntaxKind.Subtract;

      // `<`, `<=`, `<<`, `<<=`, `</`, `<!--`
      case SyntaxKind.LessThan:
        cp = source.charCodeAt(++parser.pos);
        if (cp === Char.EqualSign) {
          parser.pos++;
          return SyntaxKind.LessThanOrEqual;
        }
        if (cp === Char.LessThan) {
          parser.pos++;
          if (source.charCodeAt(parser.pos) === Char.EqualSign) {
            parser.pos++;
            return SyntaxKind.ShiftLeftAssign;
          }
          return SyntaxKind.ShiftLeft;
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
        return SyntaxKind.LessThan;

      // `&`, `&&`, `&=`, `&&=`
      case SyntaxKind.BitwiseAnd:
        cp = source.charCodeAt(++parser.pos);
        if (cp === Char.Ampersand) {
          parser.pos++;
          if (source.charCodeAt(parser.pos) === Char.EqualSign) {
            parser.pos++;
            return SyntaxKind.LogicalAndAssign;
          }
          return SyntaxKind.LogicalAnd;
        }
        if (cp === Char.EqualSign) {
          parser.pos++;
          return SyntaxKind.BitwiseAndAssign;
        }
        return SyntaxKind.BitwiseAnd;

      // `>`, `>=`, `>>`, `>>>`, `>>=`, `>>>=`
      case SyntaxKind.GreaterThan:
        cp = source.charCodeAt(++parser.pos);

        if (context & Context.InTypes) return SyntaxKind.GreaterThan;

        if (cp === Char.EqualSign) {
          parser.pos++;
          return SyntaxKind.GreaterThanOrEqual;
        }

        if (cp === Char.GreaterThan) {
          parser.pos++;
          if (source.charCodeAt(parser.pos) === Char.GreaterThan) {
            parser.pos++;
            if (source.charCodeAt(parser.pos) === Char.EqualSign) {
              parser.pos++;
              return SyntaxKind.LogicalShiftRightAssign;
            }
            return SyntaxKind.LogicalShiftRight;
          }
          if (source.charCodeAt(parser.pos) === Char.EqualSign) {
            parser.pos++;
            return SyntaxKind.ShiftRightAssign;
          }
          return SyntaxKind.ShiftRight;
        }
        return SyntaxKind.GreaterThan;

      // `|`, `||`, `|=`
      case SyntaxKind.BitwiseOr:
        cp = source.charCodeAt(++parser.pos);
        if (cp === Char.VerticalBar) {
          parser.pos++;
          if (source.charCodeAt(parser.pos) === Char.EqualSign) {
            parser.pos++;
            return SyntaxKind.LogicalOrAssign;
          }
          return SyntaxKind.LogicalOr;
        }
        if (cp === Char.EqualSign) {
          parser.pos++;
          return SyntaxKind.BitwiseOrAssign;
        }

        return SyntaxKind.BitwiseOr;

      // `%`, `%=`
      case SyntaxKind.Modulo:
        cp = source.charCodeAt(++parser.pos);
        if (cp === Char.EqualSign) {
          parser.pos++;
          return SyntaxKind.ModuloAssign;
        }
        return SyntaxKind.Modulo;

      // `^`, `^=`
      case SyntaxKind.BitwiseXor:
        cp = source.charCodeAt(++parser.pos);
        if (cp === Char.EqualSign) {
          parser.pos++;
          return SyntaxKind.BitwiseXorAssign;
        }
        return SyntaxKind.BitwiseXor;
      case SyntaxKind.EscapedKeyword:
        const cooked = scanIdentifierEscape(parser);
        if (cooked > 0) {
          parser.tokenValue = fromCodePoint(cooked) + scanIdentifierParts(parser, source);
          //parser.raw = source.slice(parser.curPos, parser.pos);
          const keyword = descKeywordTable[parser.tokenValue];
          if (keyword != undefined) return keyword as any;
          return SyntaxKind.Identifier;
        }
        if (source.charCodeAt(parser.pos) === Char.Backslash) parser.pos++;
        parser.tokenValue = fromCodePoint(cooked);
        //parser.raw = source.slice(parser.curPos, parser.pos);
        return SyntaxKind.UnknownToken;

      case SyntaxKind.PrivateIdentifier:
        if (parser.pos !== 0 && source.charCodeAt(parser.pos + 1) === Char.Exclamation) {
          parser.onError(
            DiagnosticSource.Parser,
            diagnosticMap[DiagnosticCode.Unexpected_token],
            parser.curPos,
            parser.pos
          );
          parser.pos++;
          return SyntaxKind.UnknownToken;
        }

        parser.pos++;

        if (isIdentifierStart(source.charCodeAt(parser.pos))) {
          let pos = parser.pos + 1;
          while (pos < parser.end && isIdentifierPart((cp = source.charCodeAt(pos)))) ++pos;
          parser.tokenValue = source.substring(parser.tokenPos, pos);
          if (cp === Char.Backslash) {
            parser.tokenValue += scanIdentifierParts(parser, source);
          }
          // // parser.raw = source.substring(parser.tokenPos, pos);
          parser.pos = pos;
        } else {
          parser.tokenValue = '#';
          parser.onError(
            DiagnosticSource.Parser,
            diagnosticMap[DiagnosticCode.Unexpected_token],
            parser.curPos,
            parser.pos
          );
        }
        return SyntaxKind.PrivateIdentifier;

      default:
        if ((cp & ~1) === Char.LineSeparator) {
          parser.nodeFlags |= NodeFlags.NewLine;
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
            parser.onError(
              DiagnosticSource.Parser,
              diagnosticMap[DiagnosticCode.Unexpected_token],
              parser.curPos,
              parser.pos
            );
          }

          parser.tokenValue = scanIdentifierParts(parser, source);
          // // parser.raw = source.slice(parser.curPos, parser.pos);
          return SyntaxKind.Identifier;
        }

        parser.onError(
          DiagnosticSource.Parser,
          diagnosticMap[DiagnosticCode.Unexpected_token],
          parser.curPos,
          parser.pos
        );

        // Increment the index so we can stay on track and avoid infinity loops
        parser.pos++;

        return SyntaxKind.UnknownToken;
    }
    cp = source.charCodeAt(parser.pos);
  }
  return SyntaxKind.EndOfFileToken;
}
