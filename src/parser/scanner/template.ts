import { ParserState, Context } from '../common';
import { NodeFlags, SyntaxKind } from '../../ast/syntax-node';
import { Char } from './char';
import { fromCodePoint } from './common';
import { DiagnosticCode, diagnosticMap } from '../../diagnostic/diagnostic-code';
import { DiagnosticSource, DiagnosticKind } from '../../diagnostic/diagnostic';
import { scanEscapeSequence } from './string';

export function scanTemplate(
  parser: ParserState,
  context: Context,
  isTaggedTemplate: boolean,
  source: string
): SyntaxKind {
  parser.pos++;

  const start = parser.pos;
  let ret = '';
  let cp = parser.source.charCodeAt(parser.pos);

  while (parser.pos < parser.end) {
    // '`'
    if (cp === Char.Backtick) {
      parser.tokenValue = ret;
      parser.pos++; // Consume '`'
      parser.tokenRaw = parser.source.slice(start, parser.pos - 1);
      return SyntaxKind.TemplateTail;
    }

    // '${'
    if (cp === Char.Dollar) {
      if (parser.source.charCodeAt(parser.pos + 1) === Char.LeftBrace) {
        parser.tokenRaw = parser.source.slice(start, parser.pos);
        parser.pos += 2; // Consume '$' and '{'
        parser.tokenValue = ret;
        return SyntaxKind.TemplateCont;
      }
      ret += '$';
    }

    // Escape character
    if (cp === Char.Backslash) {
      ret += scanEscapeSequence(parser, context | Context.Strict, isTaggedTemplate, source, /* isTemplate */ true);
    } else {
      parser.pos++;
      // The TRV of LineTerminatorSequence :: <CR> is the CV 0x000A.
      // The TRV of LineTerminatorSequence :: <CR><LF> is the sequence
      // consisting of the CV 0x000A.
      if (cp === Char.CarriageReturn && source.charCodeAt(parser.pos) === Char.LineFeed) {
        // Consume '\n'
        parser.pos++;
      }
      if (ret != null) ret += fromCodePoint(cp);
    }
    cp = parser.source.charCodeAt(parser.pos);
  }

  parser.onError(
    DiagnosticSource.Lexer,
    DiagnosticKind.Error,
    diagnosticMap[DiagnosticCode.Unterminated_template_literal],
    parser.curPos,
    parser.pos
  );

  parser.nodeFlags |= NodeFlags.Unterminated;

  parser.tokenValue = ret;

  return SyntaxKind.TemplateTail;
}

export function scanTemplateTail(parser: ParserState, context: Context, isTaggedTemplate: boolean): SyntaxKind {
  parser.pos--;
  (parser.token as SyntaxKind) = scanTemplate(parser, context, isTaggedTemplate, parser.source);
  return parser.token;
}
