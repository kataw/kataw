import { DiagnosticKind } from './diagnostic-kind';
import { DiagnosticSource } from './diagnostic-source';
import { DiagnosticCode, diagnosticMap } from './diagnostic-code';

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

export function createDiagnostic(
  source: DiagnosticSource,
  code: DiagnosticCode,
  start: number,
  end: number
): Diagnostic {
  return {
    kind: DiagnosticKind.Error,
    source,
    code,
    message: diagnosticMap[code],
    start,
    end
  };
}
