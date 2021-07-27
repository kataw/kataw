import { DiagnosticSource, DiagnosticKind } from '../diagnostic';
import { getDiagnosticType, getLinePos, getLineNumber } from './common';

export function unix(
  diagnosticSource: DiagnosticSource,
  kind: DiagnosticKind,
  message: string,
  start: number,
  end: number,
  source: string
) {
  let output = "";
  const relativePos = getLinePos(source, start, end);
  output += getLineNumber(source, start).toString() + ":";
  output += relativePos.pos + ":";
  output += " " + message + " ";
  output += "[" + getDiagnosticType(kind) + "]";
  output += "\n";
  console.log(output);
}

