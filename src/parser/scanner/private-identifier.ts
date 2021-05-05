import { ParserState, Context } from '../common';
import { Char } from './char';
import { SyntaxKind } from '../../ast/syntax-node';
import { isIdentifierStart, isIdentifierPart } from './common';
import { DiagnosticCode, diagnosticMap } from '../../diagnostic/diagnostic-code';
import { DiagnosticSource, DiagnosticKind } from '../../diagnostic/diagnostic';
import { scanIdentifierParts } from './identifiers';

export function scanPrivateIdentifier(parser: ParserState, context: Context, cp: number, source: string): SyntaxKind {
  if (parser.pos !== 0 && source.charCodeAt(parser.pos + 1) === Char.Exclamation) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
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
    if (parser.tokenValue === '#constructor') {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode._constructor_is_a_reserved_word],
        parser.curPos,
        parser.pos
      );
    }
    if (cp === Char.Backslash) {
      parser.tokenValue += scanIdentifierParts(parser, source);
    }
    parser.tokenRaw = source.substring(parser.tokenPos, pos);
    parser.pos = pos;
  } else {
    parser.tokenValue = '#';
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Invalid_character],
      parser.curPos,
      parser.pos
    );
  }
  return SyntaxKind.PrivateIdentifier;
}
