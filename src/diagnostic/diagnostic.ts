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
  Parser = 1 << 1
}
