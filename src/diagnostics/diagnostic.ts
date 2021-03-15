import { DiagnosticCode, diagnosticMap } from './diagnosticMessages.generated';
import { NodeFlags } from '../ast/node';
import { ParserState } from '../types';

/**
 * Types of diagnostics which can be generated.
 */
export enum DiagnosticKind {
  Message,
  Warning,
  Error,
  Hint
}

/**
 * Sources of diagnostic messages.
 */
export const enum DiagnosticSource {
  Lexer = 0,
  Parser = 1 << 1,
  Javascript = 1 << 2,
  Typescript = 1 << 3,
  Binder = 1 << 4,
  Checker = 1 << 5,
  DataFlow = 1 << 6
}

/**
 * The base type of all types which represent some kind of diagnostic.
 */
export interface Diagnostic {
  kind: DiagnosticKind;
  source: DiagnosticSource;
  message: string;
  start: number;
  length: number;
}

export function error(
  kind: DiagnosticKind,
  source: DiagnosticSource,
  code: DiagnosticCode,
  start: number,
  length: number
): Diagnostic {
  return {
    kind,
    source,
    message: diagnosticMap[code],
    start,
    length
  };
}

/**
 * Report an error diagnostic at given position
 */

export function parseErrorAtPosition(
  parser: ParserState,
  kind: DiagnosticKind,
  start: number,
  end: number,
  code: DiagnosticCode,
  ...args: string[]
): void {
  const lastError = parser.diagnostics[parser.diagnostics.length - 1];
  if (!lastError || start !== lastError.start) {
    parser.nodeFlags |= NodeFlags.HasErrors;
    parser.diagnostics.push({
      kind,
      source: DiagnosticSource.Parser,
      message: formatStringFromArgs(diagnosticMap[code], args),
      start,
      length: end
    });
  }
}

export function reportErrorAt(
  parser: ParserState,
  start: number,
  end: number,
  code: DiagnosticCode,
  ...args: string[]
): void {
  parseErrorAtPosition(parser, DiagnosticKind.Error, start, end - start, code, ...args);
}

export function reportWarningDiagnostic(
  parser: ParserState,
  end: number,
  code: DiagnosticCode,
  ...args: string[]
): void {
  const start = parser.tokenPos;
  parseErrorAtPosition(parser, DiagnosticKind.Warning, start, end, code, ...args);
}

export function reportErrorDiagnostic(parser: ParserState, end: number, code: DiagnosticCode, ...args: string[]): void {
  const start = parser.tokenPos;
  parseErrorAtPosition(parser, DiagnosticKind.Error, start, end, code, ...args);
}

function formatStringFromArgs(text: string, args: any): string {
  return text.replace(/{(\d+)}/g, (_match, index: string) => '' + args[+index]);
}
