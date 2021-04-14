import { ParserState, Context } from '../common';
import { Char } from './char';
import { SyntaxKind, NodeFlags } from '../ast/syntax-node';
import { isIdentifierStart, isIdentifierPart, isWhiteSpaceSlow, fromCodePoint, isLineTerminator } from './common';
import { DiagnosticCode } from '../diagnostic/diagnostic-code';
import { createDiagnosticError } from '../diagnostic/diagnostic-error';
import { DiagnosticSource } from '../diagnostic/diagnostic-source';

export function skipSingleLineComment(parser: ParserState, cp: number, source: string): number {
  while (parser.pos < parser.end && !isLineTerminator(cp)) {
    cp = source.charCodeAt(++parser.pos);
  }
  return cp;
}

export function skipMultilineComment(parser: ParserState, cp: number, source: string): number {
  // is it a /* or /** comment?
  cp = source.charCodeAt(++parser.pos);

  do {
    if (cp === Char.Asterisk && source.charCodeAt(parser.pos + 1) === Char.Slash) {
      parser.pos += 2;
      return cp;
    }

    if (isLineTerminator(cp)) parser.nodeFlags |= NodeFlags.NewLine;

    parser.pos++;
    cp = source.charCodeAt(parser.pos);
  } while (parser.pos < parser.end);

  parser.diagnostics.push(
    createDiagnosticError(
      DiagnosticSource.Parser,
      DiagnosticCode.A_break_statement_can_only_be_used_within_an_enclosing_iteration_or_switch_statement,
      parser.curPos,
      parser.pos
    )
  );
  return cp;
}
