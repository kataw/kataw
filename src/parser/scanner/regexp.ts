import { ParserState } from '../common';
import { NodeFlags, SyntaxKind } from '../../ast/syntax-node';
import { Char } from './char';
import { isIdentifierPart } from './common';
import { DiagnosticCode, diagnosticMap } from '../../diagnostic/diagnostic-code';
import { DiagnosticSource, DiagnosticKind } from '../../diagnostic/diagnostic';

export function scanRegularExpression(parser: ParserState, source: string): SyntaxKind {
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
          parser.onError(
            DiagnosticSource.Lexer,
            DiagnosticKind.Error,
            diagnosticMap[DiagnosticCode.Unterminated_regular_expression],
            parser.curPos,
            parser.pos
          );
          break loop;
      }
    }
    pos++;

    // If we reach the end of a file, or hit a newline, then this is an unterminated
    // regex.
    if (pos >= parser.end) {
      parser.nodeFlags |= NodeFlags.Unterminated;
      parser.onError(
        DiagnosticSource.Lexer,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.Unterminated_regular_expression],
        parser.curPos,
        parser.pos
      );
      break loop;
    }

    cp = source.charCodeAt(pos);
  }

  cp = source.charCodeAt(pos);

  let flags = 0;

  if (pos < parser.end) {
    while (isIdentifierPart(cp)) {
      // make sure each supported flag is unique
      switch (cp) {
        case Char.LowerG:
        case Char.LowerI:
        case Char.LowerM:
        case Char.LowerS:
        case Char.LowerU:
        case Char.LowerY:
          let flag = 1 << (cp - Char.LowerA);
          if ((flag & flags) !== 0) {
            parser.onError(
              DiagnosticSource.Lexer,
              DiagnosticKind.Error,
              diagnosticMap[DiagnosticCode.Duplicate_regular_expression_flag],
              parser.curPos,
              parser.pos
            );
          } else {
            flags |= flag;
          }
          break;
        default:
          parser.onError(
            DiagnosticSource.Lexer,
            DiagnosticKind.Error,
            diagnosticMap[DiagnosticCode.Unknown_regular_expression_flag],
            parser.curPos,
            parser.pos
          );
      }

      cp = source.charCodeAt(++pos);
    }
  }
  parser.tokenValue = source.substring(parser.tokenPos, pos);
  parser.pos = pos;

  return SyntaxKind.RegularExpression;
}
