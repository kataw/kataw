import { ParserState, Context } from '../common';
import { Char, isIdentifierStart, latinCharacters } from './char';
import { SyntaxKind, NodeFlags, descKeywordTable } from '../../ast/syntax-node';
import { scanNumber } from './number';
import { scanString } from './string';
import { scanTemplateSpan } from './template';
import { scanRegularExpression } from './regexp';
import { isWhiteSpaceSlow, fromCodePoint, isLineTerminator } from './common';
import { skipMultilineComment, skipSingleLineComment } from './comments';
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
        return scanIdentifierOrKeyword(parser, cp, source, /* isPossibleKeyword */ true);

      // Look for an identifier -(A-Z, $, _).
      case SyntaxKind.Identifier:
        return scanIdentifierOrKeyword(parser, cp, source, /* isPossibleKeyword */ false);

      case SyntaxKind.NumericLiteral:
        return scanNumber(parser, context, cp, source, /* isDecimal */ true);

      case SyntaxKind.Whitespace:
        parser.pos++;
        break;

      // `'string'`, `"string"`
      case SyntaxKind.StringLiteral:
        return scanString(parser, context, cp, source);

      // `.`, `...`, `.123` (numeric literal)
      case SyntaxKind.Period:
        const index = parser.pos + 1;

        cp = source.charCodeAt(index);

        if (cp >= Char.Zero && cp <= Char.Nine) {
          parser.nodeFlags |= NodeFlags.FloatingPointLiteral;
          return scanNumber(parser, context, cp, source, /* isDecimal */ false);
        }

        if (cp === Char.Period) {
          if (index < parser.end && source.charCodeAt(index + 1) === Char.Period) {
            parser.pos += 3;
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
        return scanTemplateSpan(parser, context, source);

      case SyntaxKind.CarriageReturn:
      case SyntaxKind.LineFeed:
        parser.nodeFlags |= NodeFlags.NewLine;
        parser.pos++;
        break;

      // `?`, `?.`, `??`, `??=`,
      case SyntaxKind.QuestionMark:
        cp = source.charCodeAt(++parser.pos);

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
          skipSingleLineComment(parser, cp, source);
          break;
        }

        // is it a /* or /** comment?
        if (cp === Char.Asterisk) {
          skipMultilineComment(parser, cp, source);
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
            const pos = parser.pos;
            parser.pos++;
            while (parser.pos < parser.end && !isLineTerminator(source.charCodeAt(parser.pos))) {
              parser.pos++;
            }
            if (context & (Context.Module | Context.OptionsDisableWebCompat)) {
              parser.onError(
                DiagnosticSource.Parser,
                DiagnosticKind.Error,
                diagnosticMap[
                  context & Context.OptionsDisableWebCompat
                    ? DiagnosticCode.HTML_comments_can_only_be_used_with_web_compatibility_enabled
                    : DiagnosticCode.HTML_comments_can_only_be_used_in_script_mode
                ],
                pos - 1,
                parser.pos
              );
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

      // `<`, `<=`, `<<`, `<<=`, `<!--`
      case SyntaxKind.LessThan:
        cp = source.charCodeAt(++parser.pos);
        if (context & Context.InType) return SyntaxKind.LessThan;
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
            const pos = parser.pos;
            while (parser.pos < parser.end && !isLineTerminator(source.charCodeAt(parser.pos))) {
              parser.pos++;
            }
            if (context & (Context.Module | Context.OptionsDisableWebCompat)) {
              parser.onError(
                DiagnosticSource.Parser,
                DiagnosticKind.Error,
                diagnosticMap[
                  context & Context.OptionsDisableWebCompat
                    ? DiagnosticCode.HTML_comments_can_only_be_used_with_web_compatibility_enabled
                    : DiagnosticCode.HTML_comments_can_only_be_used_in_script_mode
                ],
                pos - 1,
                parser.pos
              );
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
        if (context & Context.InType) return SyntaxKind.GreaterThan;
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

      case SyntaxKind.PrivateIdentifier:
        return scanPrivateIdentifier(parser, cp, source);

      case SyntaxKind.EscapedKeyword:
        const cooked = scanIdentifierEscape(parser);
        if (cooked > 0) {
          parser.tokenValue = fromCodePoint(cooked) + scanIdentifierParts(parser, source);
          parser.tokenRaw = source.slice(parser.tokenPos, parser.pos);
          const keyword = descKeywordTable[parser.tokenValue];
          if (keyword != undefined) return keyword;
          return SyntaxKind.Identifier;
        }
        if (source.charCodeAt(parser.pos) === Char.Backslash) parser.pos++;
        parser.tokenValue = fromCodePoint(cooked);
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
