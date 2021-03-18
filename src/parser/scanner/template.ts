import { ParserState } from '../../types';
import { Token } from '../../ast/token';
import { Char } from './char';
import { NodeFlags } from '../../ast/node';
import { DiagnosticKind, DiagnosticSource, error } from '../../diagnostics/diagnostic';
import { DiagnosticCode } from '../../diagnostics/diagnosticMessages.generated';
import { scanEscapeSequence } from './string';
import { fromCodePoint } from './common';
import { Context } from '../common';

export function scanTemplate(parser: ParserState, context: Context, source: string): Token {
  parser.pos++;

  const start = parser.pos;
  let ret = '';
  let cp = parser.source.charCodeAt(parser.pos);

  while (parser.pos < parser.end) {
    // '`'
    if (cp === Char.Backtick) {
      parser.tokenValue = ret;
      parser.pos++; // Consume '`'
      parser.templateRaw = parser.source.slice(start, parser.pos - 1);
      return Token.TemplateTail;
    }

    // '${'
    if (cp === Char.Dollar) {
      if (parser.source.charCodeAt(parser.pos + 1) === Char.LeftBrace) {
        parser.templateRaw = parser.source.slice(start, parser.pos);
        parser.pos += 2; // Consume '$' and '{'
        parser.tokenValue = ret;
        return Token.TemplateSpan;
      }
      ret += '$';
    }

    // Escape character
    if (cp === Char.Backslash) {
      ret += scanEscapeSequence(parser, (context & Context.TaggedTemplate) !== 0, source);
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

  parser.diagnostics.push(
    error(DiagnosticKind.Error, DiagnosticSource.Lexer, DiagnosticCode.Unterminated_template_literal, parser.pos, 1)
  );

  parser.nodeFlags |= NodeFlags.Unterminated;

  parser.tokenValue = ret;

  return Token.TemplateTail;
}

export function scanTemplateTail(parser: ParserState, context: Context): Token {
  parser.pos--;
  parser.token = scanTemplate(parser, context, parser.source);
  return parser.token;
}
