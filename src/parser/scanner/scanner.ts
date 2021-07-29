import { ParserState, Context } from '../common';
import { Char, isIdentifierStart, latinCharacters } from './char';
import { SyntaxKind, NodeFlags, descKeywordTable } from '../../ast/syntax-node';
import { scanNumber } from './number';
import { scanString } from './string';
import { scanTemplateSpan } from './template';
import { scanRegularExpression } from './regexp';
import { isWhiteSpaceSlow, fromCodePoint, isLineTerminator } from './common';
import { skipMultilineComment, skipSingleLineComment, skipHTMLComment } from './comments';
import { DiagnosticCode, diagnosticMap } from '../../diagnostic/diagnostic-code';
import { DiagnosticSource, DiagnosticKind } from '../../diagnostic/diagnostic';
import {
  scanIdentifierEscape,
  scanIdentifierOrKeyword,
  scanIdentifierParts,
  scanPrivateIdentifier
} from './identifiers';

export function nextToken(parser: ParserState, context: Context): void {
  parser.nodeFlags = NodeFlags.None;
  parser.curPos = parser.pos;
  parser.token = scan(parser, context);
}

export function scan(parser: ParserState, context: Context): SyntaxKind {
  const source = parser.source;
  let cp = source.charCodeAt(parser.pos);

  while (parser.pos < parser.end) {
    parser.tokenPos = parser.pos;

    const token = latinCharacters[cp];

    switch (token) {
      // Look for an unambiguous single-char token
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

      //  general whitespace
      case SyntaxKind.Whitespace:
        parser.pos++;
        break;

      // `a`...`z`
      case SyntaxKind.IsKeyword:
        return scanIdentifierOrKeyword(parser, cp, source, /* isPossibleKeyword */ true);

      // `A`...`Z`, `_var`, `$var`
      case SyntaxKind.Identifier:
        return scanIdentifierOrKeyword(parser, cp, source, /* isPossibleKeyword */ false);

      // `1`...`9`
      case SyntaxKind.NumericLiteral:
        return scanNumber(parser, context, cp, source, /* isDecimal */ true);

      // `'string'`, `"string"`
      case SyntaxKind.StringLiteral:
        return scanString(parser, context, cp, source);

      // ``string``
      case SyntaxKind.TemplateTail:
        return scanTemplateSpan(parser, context, source);

      // `.`, `...`, `.123` (numeric literal)
      case SyntaxKind.Period:
        cp = source.charCodeAt(parser.pos + 1);

        // Dot with a digit after it
        if (cp >= Char.Zero && cp <= Char.Nine) {
          return scanNumber(parser, context, cp, source, /* isDecimal */ false);
        }

        // `...`
        if (cp === Char.Period && parser.pos < parser.end && source.charCodeAt(parser.pos + 2) === Char.Period) {
          parser.pos += 3;
          return SyntaxKind.Ellipsis;
        }

        // "."
        parser.pos++;
        return SyntaxKind.Period;

      // `=`, `==`, `===`, `=>`
      case SyntaxKind.Assign:
        parser.pos++;

        cp = source.charCodeAt(parser.pos);

        if (cp === Char.GreaterThan) {
          parser.pos++;
          return SyntaxKind.Arrow;
        }

        if (cp === Char.EqualSign) {
          parser.pos++;
          if (source.charCodeAt(parser.pos) === Char.EqualSign) {
            parser.pos++;
            return SyntaxKind.StrictEqual;
          }
          return SyntaxKind.LooseEqual;
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

      // `?`, `?.`, `??`, `??=`,
      case SyntaxKind.QuestionMark:
        parser.pos++;
        cp = source.charCodeAt(parser.pos);

        if (cp === Char.Period) {
          // Do a lookahead to see if the code unit is followed by a number, for example
          // it has the following form `?.a` or `?.5` then it should be treated as a
          // ternary rather than as an optional chain
          cp = source.charCodeAt(parser.pos + 1);
          // `?.`
          if (cp < Char.Zero || cp > Char.Nine) {
            parser.pos++;
            return SyntaxKind.QuestionMarkPeriod;
          }
        }

        if (cp !== Char.QuestionMark) return SyntaxKind.QuestionMark;

        parser.pos++;

        if (source.charCodeAt(parser.pos) === Char.EqualSign) {
          parser.pos++;
          return SyntaxKind.CoalesceAssign;
        }
        return SyntaxKind.QuestionMarkQuestionMark;

      case SyntaxKind.CarriageReturn:
      case SyntaxKind.LineFeed:
        parser.nodeFlags |= NodeFlags.NewLine;
        parser.pos++;
        break;

      // `!`, `!=`, `!==`
      case SyntaxKind.Negate:
        parser.pos++;
        if (source.charCodeAt(parser.pos) === Char.EqualSign) {
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
        parser.pos++;
        cp = source.charCodeAt(parser.pos);
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
        parser.pos++;

        cp = source.charCodeAt(parser.pos);

        if (cp === Char.Slash) {
          skipSingleLineComment(parser, cp, source);
          break;
        }

        if (cp === Char.Asterisk) {
          skipMultilineComment(parser, cp, source);
          break;
        }

        if (context & Context.AllowRegExp) {
          return scanRegularExpression(parser, context, source);
        }

        if (cp === Char.EqualSign) {
          parser.pos++;
          return SyntaxKind.DivideAssign;
        }

        return SyntaxKind.Divide;

      // `-`, `--`, `-=`, `-->`
      case SyntaxKind.Subtract:
        parser.pos++;

        cp = source.charCodeAt(parser.pos);

        if (cp === Char.Hyphen) {
          if (parser.nodeFlags & NodeFlags.NewLine && source.charCodeAt(parser.pos + 1) === Char.GreaterThan) {
            // Return '-' rather than throwing, so we can report it as an unexpected token
            // instead.
            if (context & 0b00000000000100000000000000000100) return SyntaxKind.Subtract;
            cp = skipHTMLComment(parser, cp, source);
            continue;
          }
          parser.pos++;
          return SyntaxKind.Decrement;
        }

        if (cp === Char.EqualSign) {
          parser.pos++;
          return SyntaxKind.SubtractAssign;
        }
        return SyntaxKind.Subtract;

      // `<`, `<=`, `<<`, `<<=`, `<!--`
      case SyntaxKind.LessThan:
        parser.pos++;

        // The 'InTypeParameterInstantiation' bit is only set when parsing out a 'TypeParameterInstantiation'.
        // It solves edge cases like `type x = z<<q>(r) => s>` where the lexer normally
        // returns a `<<` token.
        // Checking for this bitwise mask returns `<` and prevents further scanning.
        // This is faster than a re-scan.
        if (context & Context.InTypeParameterInstantiation) return SyntaxKind.LessThan;

        switch (source.charCodeAt(parser.pos)) {
          case Char.EqualSign:
            parser.pos++;
            return SyntaxKind.LessThanOrEqual;

          case Char.LessThan:
            parser.pos++;
            if (source.charCodeAt(parser.pos) === Char.EqualSign) {
              parser.pos++;
              return SyntaxKind.ShiftLeftAssign;
            }
            return SyntaxKind.ShiftLeft;

          case Char.Exclamation:
            if (context & 0b00000000000100000000000000000100 || source.charCodeAt(parser.pos + 2) !== Char.Hyphen) {
              // In module contexts, `a <!-- b` is functionally equivalent to `a < !(--b)`. This
              // is because whitespace is terminated by non-whitespace, and `<!--` in module code
              // is not considered a comment start (and thus not whitespace). Thus, we just return
              // the '<' token.
              //
              // See: https://tc39.github.io/ecma262/#sec-html-like-comments
              return SyntaxKind.LessThan;
            }
            if (source.charCodeAt(parser.pos + 1) == Char.Hyphen) {
              cp = skipHTMLComment(parser, cp, source);
              continue;
            }
          default:
            return SyntaxKind.LessThan;
        }

      // `&`, `&&`, `&=`, `&&=`
      case SyntaxKind.BitwiseAnd:
        parser.pos++;
        cp = source.charCodeAt(parser.pos);
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
        parser.pos++;

        // The 'InTypeParameterInstantiation' bit is only set when parsing out a 'TypeParameterInstantiation'.
        // It solves edge cases like `let x: A.B<X.Y<Z<T>>>=2;` where the lexer normally
        // returns a `>>` token.
        // Checking for this bitwise mask returns `>` and prevents further scanning.
        // This is faster than a re-scan.
        if (context & Context.InTypeParameterInstantiation) return SyntaxKind.GreaterThan;

        cp = source.charCodeAt(parser.pos);

        if (cp === Char.EqualSign) {
          parser.pos++;
          return SyntaxKind.GreaterThanOrEqual;
        }

        if (cp !== Char.GreaterThan) return SyntaxKind.GreaterThan;

        parser.pos++;

        cp = source.charCodeAt(parser.pos);

        if (cp === Char.GreaterThan) {
          parser.pos++;
          if (source.charCodeAt(parser.pos) === Char.EqualSign) {
            parser.pos++;
            return SyntaxKind.LogicalShiftRightAssign;
          }
          return SyntaxKind.LogicalShiftRight;
        }

        if (cp === Char.EqualSign) {
          parser.pos++;
          return SyntaxKind.ShiftRightAssign;
        }
        return SyntaxKind.ShiftRight;

      // `|`, `||`, `|=`
      case SyntaxKind.BitwiseOr:
        parser.pos++;
        cp = source.charCodeAt(parser.pos);
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
        parser.pos++;
        if (source.charCodeAt(parser.pos) === Char.EqualSign) {
          parser.pos++;
          return SyntaxKind.ModuloAssign;
        }
        return SyntaxKind.Modulo;

      // `^`, `^=`
      case SyntaxKind.BitwiseXor:
        parser.pos++;
        if (source.charCodeAt(parser.pos) === Char.EqualSign) {
          parser.pos++;
          return SyntaxKind.BitwiseXorAssign;
        }
        return SyntaxKind.BitwiseXor;

      case SyntaxKind.PrivateIdentifier:
        return scanPrivateIdentifier(parser, cp, source);

      case SyntaxKind.EscapedKeyword:
        const escaped = scanIdentifierEscape(parser);
        if (escaped > 0) {
          parser.tokenValue = fromCodePoint(escaped) + scanIdentifierParts(parser, source);
          parser.tokenRaw = source.slice(parser.tokenPos, parser.pos);
          return descKeywordTable[parser.tokenValue] || SyntaxKind.Identifier;
        }
        if (source.charCodeAt(parser.pos) === Char.Backslash) parser.pos++;
        parser.tokenValue = '';
        parser.tokenRaw = source.slice(parser.tokenPos, parser.pos);
        return SyntaxKind.UnknownToken;

      default:
        if (isIdentifierStart(cp) || (cp & 0xfc00) === 0xd800) {
          parser.tokenValue = scanIdentifierParts(parser, source);
          parser.tokenRaw = source.slice(parser.curPos, parser.pos);
          return SyntaxKind.Identifier;
        }
        parser.pos++;

        // '\u2028', '\u2029'
        if ((cp & ~1) === Char.LineSeparator) {
          parser.nodeFlags |= NodeFlags.NewLine;
          continue;
        }

        // Check for unusual whitespace characters
        if (isWhiteSpaceSlow(cp)) {
          continue;
        }

        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.Invalid_character],
          parser.curPos,
          parser.pos
        );

        return SyntaxKind.UnknownToken;
    }
    cp = source.charCodeAt(parser.pos);
  }
  return SyntaxKind.EndOfFileToken;
}
