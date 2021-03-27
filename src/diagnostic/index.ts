import { DiagnosticError } from './diagnostic-error';
import { DiagnosticHint } from './diagnostic-hint';
import { DiagnosticMessage } from './diagnostic-message';
import { DiagnosticWarning } from './diagnostic-warning';

/**
 * The set of all diagnostic types.
 */
export type DiagnosticType = DiagnosticMessage | DiagnosticWarning | DiagnosticError | DiagnosticHint;
