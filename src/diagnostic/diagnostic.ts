import { DiagnosticCode } from './diagnostic-code';

/**
 * The base type of all types which represent some kind of diagnostic.
 */
export interface Diagnostic {
  kind: DiagnosticKind;
  source: DiagnosticSource;
  code: DiagnosticCode;
  message: string;
  start?: number;
  end?: number;
}

/**
 * Types of diagnostics which can be generated.
 */
export enum DiagnosticKind {
  EarlyError = 1 << 0,
  Runtime = 1 << 1,
  Message = 1 << 2,
  Warning = 1 << 3,
  Error = 1 << 4,
  Hint = 1 << 5,
  Lint = 1 << 6
}

/**
 * Sources of diagnostic messages.
 */
export const enum DiagnosticSource {
  Lexer = 0,
  Parser = 1 << 1
}
