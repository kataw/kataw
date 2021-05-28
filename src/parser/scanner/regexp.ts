import { ParserState } from '../common';
import { NodeFlags, SyntaxKind } from '../../ast/syntax-node';
import { Char } from './char';
import { isIdentifierPart } from './common';
import { AsciiCharFlags, AsciiCharTypes } from './asciiChar';
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

  let preparseState = Preparse.Empty;

  let cp = source.charCodeAt(pos);

  while (true) {
    cp = source.charCodeAt(pos);
    pos++;
    if (preparseState & Preparse.Escape) {
      // Parsing an escape character;
      // reset the flag and just advance to the next char.
      preparseState = (preparseState | Preparse.Escape) ^ Preparse.Escape;
    } else {
      if (cp <= 0x5e) {
        if (cp === Char.Slash) {
          if (!preparseState) break;
           // A slash within a character class is permissible,
          // but in general it signals the end of the regexp literal.
        } else if (cp === Char.Backslash) {
          preparseState |= Preparse.Escape;
        } else if (cp === Char.LeftBracket) {
          preparseState |= Preparse.InCharClass;
        } else if (cp === Char.RightBracket) {
          preparseState &= Preparse.Escape;
        } else if ((AsciiCharTypes[cp] & AsciiCharFlags.LineTerminator) === AsciiCharFlags.LineTerminator) {
          parser.nodeFlags |= NodeFlags.Unterminated;
          parser.onError(
            DiagnosticSource.Lexer,
            DiagnosticKind.Error,
            diagnosticMap[DiagnosticCode.Unterminated_regular_expression],
            parser.curPos,
            pos--
          );
          break;
        }
      } else if ((cp & ~1) === Char.LineSeparator) {
        parser.nodeFlags |= NodeFlags.Unterminated;
          parser.onError(
            DiagnosticSource.Lexer,
            DiagnosticKind.Error,
            diagnosticMap[DiagnosticCode.Unterminated_regular_expression],
            parser.curPos,
            pos--
          );
          break;
      }
    }
    // If we reach the end of a file, or hit a newline, then this is an unterminated
    // regex.
    if (pos >= parser.end) {
      parser.nodeFlags |= NodeFlags.Unterminated;
      parser.onError(
        DiagnosticSource.Lexer,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.Unterminated_regular_expression],
        parser.curPos,
        pos--
      );
      break;
    }
  }

   cp = source.charCodeAt(pos);
  let flags = 0;
  let flag = 0;

  // make sure each supported flag is unique
  while (isIdentifierPart(cp)) {
    if (AsciiCharTypes[cp] & AsciiCharFlags.RegExpFlags) {
      flag = 1 << (cp - Char.LowerA);
      if ((flag & flags) !== 0) {
        parser.onError(
          DiagnosticSource.Lexer,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.Duplicate_regular_expression_flag],
          pos - 1,
          pos
        );
      } else {
        flags |= flag;
      }
    } else {
      parser.onError(
        DiagnosticSource.Lexer,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.Unknown_regular_expression_flag],
        pos - 1, // TODO??
        pos
      );
    }
    cp = source.charCodeAt(++pos);
  }

  parser.tokenValue = source.slice(parser.tokenPos, pos);
  parser.pos = pos;

  return SyntaxKind.RegularExpression;
}
