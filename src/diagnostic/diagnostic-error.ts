import { Diagnostic } from './diagnostic';
import { DiagnosticCode, diagnosticMap } from './diagnostic-code';
import { DiagnosticKind } from './diagnostic-kind';
import { DiagnosticSource } from './diagnostic-source';

/**
 * A diagnostic message about something which has gone wrong
 * and from which the system cannot continue.
 */
export interface DiagnosticError extends Diagnostic {
  kind: DiagnosticKind.Error;
  error: string;
}

export function createDiagnosticError(
  source: DiagnosticSource,
  code: DiagnosticCode,
  start: number,
  end: number
): DiagnosticError {
  return {
    kind: DiagnosticKind.Error,
    source,
    code,
    error: diagnosticMap[code],
    start,
    end
  };
}
