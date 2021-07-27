import { DiagnosticSource, DiagnosticKind } from '../diagnostic';
import { getDiagnosticType, getLinePos, getLineNumber } from './common';

export function compact(
  diagnosticSource: DiagnosticSource,
  kind: DiagnosticKind,
  message: string,
  start: number,
  end: number,
  source: string
) {
  let output = "";
  const relativePos = getLinePos(source, start, end);
  output += "line " + getLineNumber(source, start).toString();
  output += ", col " + relativePos.pos;
  output += ", " + getDiagnosticType(kind);
  output += " - " + message;
  output += "\n";
  console.log(output);
}
