import { ParserState } from '../common';
import { Char } from './char';
import { SyntaxKind } from '../../ast/syntax-node';
import { isIdentifierStart, isIdentifierPart } from './common';
import { DiagnosticCode, diagnosticMap } from '../../diagnostic/diagnostic-code';
import { DiagnosticSource, DiagnosticKind } from '../../diagnostic/diagnostic';
import { scanIdentifierParts } from './identifiers';

export function scanPrivateIdentifier(parser: ParserState, cp: number, source: string): SyntaxKind {
  parser.pos++;

  // '!'
  if (source.charCodeAt(parser.pos) === Char.Exclamation) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Unexpected_token],
      parser.tokenPos,
      parser.pos
    );
    return SyntaxKind.UnknownToken;
  }

  if (isIdentifierStart(source.charCodeAt(parser.pos))) {
    let pos = parser.pos + 1;
    let tokenValue = '';
    while (pos < parser.end && isIdentifierPart((cp = source.charCodeAt(pos)))) ++pos;
    tokenValue = source.substring(parser.tokenPos, pos);
    if (tokenValue === '#constructor') {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode._constructor_is_a_reserved_word],
        parser.curPos,
        parser.pos
      );
    }

    if (cp === Char.Backslash) tokenValue += scanIdentifierParts(parser, source);

    parser.tokenRaw = source.substring(parser.tokenPos, pos);
    parser.pos = pos;
    parser.tokenValue = tokenValue;
    return SyntaxKind.PrivateIdentifier;
  }

  parser.onError(
    DiagnosticSource.Parser,
    DiagnosticKind.Error,
    diagnosticMap[DiagnosticCode.Invalid_character],
    parser.tokenPos,
    parser.pos
  );

  parser.tokenValue = '#';
  return SyntaxKind.PrivateIdentifier;
}
