import { DiagnosticSource, DiagnosticKind } from '../diagnostic';
import { getDiagnosticType, ColorCodes } from './common';

export function eslint(
  diagnosticSource: DiagnosticSource,
  kind: DiagnosticKind,
  message: string,
  start: number,
  end: number,
  source: string
) {
  const lnSpacing = '_'.repeat(90);
  process.stdout.write(`${lnSpacing}\n\n`);
  process.stdout.write(
    `${ColorCodes.Cyan + start}:${end + ColorCodes.Reset}${getDiagnosticType(kind)}${
      ColorCodes.White + message + ColorCodes.Reset
    }\n`
  );
}
