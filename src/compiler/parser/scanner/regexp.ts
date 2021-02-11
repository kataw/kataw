import { ParserState } from '../../types';
import { Token } from '../../ast/token';
import { Char } from './char';
import { NodeFlags } from '../../ast/node';
import { isIdentifierPart } from './common';
import { DiagnosticKind, DiagnosticSource, error } from '../../diagnostics/diagnostic';
import { DiagnosticCode } from '../../diagnostics/diagnosticMessages.generated';

export function scanRegularExpression(parser: ParserState, source: string): Token {
  let pos = parser.tokenPos + 1;

  // prettier-ignore
  const enum Preparse {
    Empty        = 0b000000,
    Escape       = 0b000001,
    InCharClass  = 0b000010
  }
  let cp = source.charCodeAt(pos);

  // We *know* this can't be a `*`, because comments are tested first. Thus, we don't need to
  // check for it.
  let preparseState = Preparse.Empty;

  loop: while (true) {
    if (preparseState & Preparse.Escape) {
      // Parsing an escape character;
      // reset the flag and just advance to the next char.
      preparseState = (preparseState | Preparse.Escape) ^ Preparse.Escape;
    } else {
      switch (cp) {
        case Char.Slash:
          if (preparseState) break;
          // A slash within a character class is permissible,
          // but in general it signals the end of the regexp literal.
          pos++;
          break loop;
        case Char.LeftBracket:
          preparseState |= Preparse.InCharClass;
          break;
        case Char.Backslash:
          preparseState |= Preparse.Escape;
          break;
        case Char.RightBracket:
          preparseState = (preparseState | Preparse.InCharClass) ^ Preparse.InCharClass;
          break;
        case Char.CarriageReturn:
        case Char.LineFeed:
        case Char.LineSeparator:
        case Char.ParagraphSeparator:
          parser.nodeFlags |= NodeFlags.Unterminated;
          parser.diagnostics.push(
            error(
              DiagnosticKind.Error,
              DiagnosticSource.Lexer,
              DiagnosticCode.Unterminated_regular_expression_literal,
              pos,
              1
            )
          );
          break loop;
      }
    }
    pos++;

    // If we reach the end of a file, or hit a newline, then this is an unterminated
    // regex.
    if (pos >= parser.end) {
      parser.nodeFlags |= NodeFlags.Unterminated;
      parser.diagnostics.push(
        error(
          DiagnosticKind.Error,
          DiagnosticSource.Lexer,
          DiagnosticCode.Unterminated_regular_expression_literal,
          pos,
          1
        )
      );
      break loop;
    }

    cp = source.charCodeAt(pos);
  }

  // prettier-ignore
  const enum RegExpFlags {
    NoFlags     = 0b000000,
    IgnoreCase  = 0b000001,
    Global      = 0b000010,
    Multiline   = 0b000100,
    Sticky      = 0b001000,
    Unicode     = 0b010000,
    DotAll      = 0b100000
  }

  cp = source.charCodeAt(pos);

  let flag = RegExpFlags.NoFlags;

  if (pos < parser.end) {
    while (isIdentifierPart(cp)) {
      // make sure each supported flag is unique
      switch (cp) {
        case Char.LowerG: {
          if (flag & RegExpFlags.Global) {
            parser.diagnostics.push(
              error(
                DiagnosticKind.Error,
                DiagnosticSource.Lexer,
                DiagnosticCode.Duplicate_regular_expression_flag,
                pos,
                1
              )
            );
          }
          flag = RegExpFlags.Global;
          break;
        }
        case Char.LowerI: {
          if (flag & RegExpFlags.IgnoreCase) {
            parser.diagnostics.push(
              error(
                DiagnosticKind.Error,
                DiagnosticSource.Lexer,
                DiagnosticCode.Duplicate_regular_expression_flag,
                pos,
                1
              )
            );
          }
          flag = RegExpFlags.IgnoreCase;
          break;
        }
        case Char.LowerM: {
          if (flag & RegExpFlags.Multiline) {
            parser.diagnostics.push(
              error(
                DiagnosticKind.Error,
                DiagnosticSource.Lexer,
                DiagnosticCode.Duplicate_regular_expression_flag,
                pos,
                1
              )
            );
          }
          flag = RegExpFlags.Multiline;
          break;
        }
        case Char.LowerS: {
          if (flag & RegExpFlags.DotAll) {
            parser.diagnostics.push(
              error(
                DiagnosticKind.Error,
                DiagnosticSource.Lexer,
                DiagnosticCode.Duplicate_regular_expression_flag,
                pos,
                1
              )
            );
          }
          flag = RegExpFlags.DotAll;
          break;
        }
        case Char.LowerU: {
          if (flag & RegExpFlags.Unicode) {
            parser.diagnostics.push(
              error(
                DiagnosticKind.Error,
                DiagnosticSource.Lexer,
                DiagnosticCode.Duplicate_regular_expression_flag,
                pos,
                1
              )
            );
          }
          flag = RegExpFlags.Unicode;
          break;
        }
        case Char.LowerY: {
          if (flag & RegExpFlags.Sticky) {
            parser.diagnostics.push(
              error(
                DiagnosticKind.Error,
                DiagnosticSource.Lexer,
                DiagnosticCode.Duplicate_regular_expression_flag,
                pos,
                1
              )
            );
          }
          flag = RegExpFlags.Sticky;
          break;
        }
        default:
          parser.diagnostics.push(
            error(DiagnosticKind.Error, DiagnosticSource.Lexer, DiagnosticCode.Unknown_regular_expression_flag, pos, 1)
          );
      }

      cp = source.charCodeAt(++pos);
    }
  }
  parser.tokenValue = source.substring(parser.tokenPos, pos);
  parser.pos = pos;

  return Token.RegularExpression;
}
