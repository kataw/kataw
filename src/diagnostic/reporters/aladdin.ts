import { DiagnosticSource, DiagnosticKind } from '../diagnostic';
import { ColorCodes, diagnosticColor, getLineNumber, getLine, getLinePos } from './common';

export function aladdin(
  diagnosticSource: DiagnosticSource,
  kind: DiagnosticKind,
  message: string,
  start: number,
  end: number,
  source: any
) {
  const highlightColor = diagnosticColor(kind);
  const lineNumber = getLineNumber(source, start).toString();
  const lnSpacing = ' '.repeat(lineNumber.length);
  const line = getLine(source, start, end);
  const relativePos = getLinePos(source, start, end);
  const errLen = relativePos.end - relativePos.pos;
  let errorMarker = highlightColor + '^' + ColorCodes.Reset.repeat(errLen);
  // if the underline is 2 characters or less, add `--` to make it stand out more.
  if (errLen <= 2) {
    errorMarker += highlightColor + '--' + ColorCodes.Reset;
  }
  process.stdout.write(
    `${lnSpacing}${ColorCodes.Yellow + '-->' + ColorCodes.Reset} in ${
      ColorCodes.Cyan + 'foo.js' + ColorCodes.Reset
    }\n\n`
  );
  process.stdout.write(
    `${highlightColor + lineNumber + ColorCodes.Reset + ColorCodes.White + ' |' + ColorCodes.Reset} ${line}\n`
  );
  process.stdout.write(`${lnSpacing} ${ColorCodes.White + '|' + ColorCodes.Reset}`);
  process.stdout.write(`${' '.repeat(relativePos.pos + 1)}${errorMarker}\n\n`);
  process.stdout.write(`${highlightColor + message + ColorCodes.Reset}\n\n`);
}
