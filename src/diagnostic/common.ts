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
  Checker = 1 << 2
}

/**
 * The base type of all types which represent some kind of diagnostic.
 */
interface Diagnostic {
  kind: DiagnosticKind;
  source: DiagnosticSource;
}

/**
 * A diagnostic message, typically just useful information
 * that is not an error or a hint.
 */
export interface DiagnosticMessage extends Diagnostic {
  kind: DiagnosticKind.Message;
  message: string;
  pos: number;
  end: number;
}

/**
 * A diagnostic message about something that is not a problem
 * now but could become one in the future.
 */
export interface DiagnosticWarning extends Diagnostic {
  kind: DiagnosticKind.Warning;
  warning: string;
  pos: number;
  end: number;
}

/**
 * A diagnostic message about something which has gone wrong
 * and from which the system cannot continue.
 */
export interface DiagnosticError extends Diagnostic {
  kind: DiagnosticKind.Warning;
  error: string;
  pos: number;
  end: number;
}

/**
 * A diagnostic message suggesting a change or action to take.
 */
export interface DiagnosticHint extends Diagnostic {
  kind: DiagnosticKind.Hint;
  hint: string;
  pos: number;
  end: number;
}

/**
 * The set of all diagnostic types.
 */
export type DiagnosticType = DiagnosticMessage | DiagnosticWarning | DiagnosticError | DiagnosticHint;
