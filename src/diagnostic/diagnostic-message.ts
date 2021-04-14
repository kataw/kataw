import { Diagnostic } from './diagnostic';
import { DiagnosticCode } from './diagnostic-code';
import { DiagnosticKind } from './diagnostic-kind';
import { DiagnosticSource } from './diagnostic-source';

/**
 * A diagnostic message, typically just useful information
 * that is not an error or a hint.
 */
export interface DiagnosticMessage extends Diagnostic {
  kind: DiagnosticKind.Message;
  message: string;
}

export function createDiagnosticMessage(
  source: DiagnosticSource,
  code: DiagnosticCode,
  message: string,
  start: number,
  end: number
): DiagnosticMessage {
  return {
    kind: DiagnosticKind.Message,
    source,
    code,
    message,
    start,
    end
  };
}
