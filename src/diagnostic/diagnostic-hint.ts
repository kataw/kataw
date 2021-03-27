import { Diagnostic } from './diagnostic';
import { DiagnosticCode } from './diagnostic-code';
import { DiagnosticKind } from './diagnostic-kind';
import { DiagnosticSource } from './diagnostic-source';

/**
 * A diagnostic message suggesting a change or action to take.
 */
export interface DiagnosticHint extends Diagnostic {
  kind: DiagnosticKind.Hint;
  hint: string;
}

export function createDiagnosticHint(
  source: DiagnosticSource,
  code: DiagnosticCode,
  hint: string,
  start: number,
  end: number
): DiagnosticHint {
  return {
    kind: DiagnosticKind.Hint,
    source,
    code,
    hint,
    start,
    end
  };
}
