import { DiagnosticSource, DiagnosticKind } from '../diagnostic/diagnostic';

export const enum ColorCodes {
  Gray = '\x1b[37;1m',
  aWhite = '\u001b[32;1m',
  White = '\x1b[37m',
  Cyan = '\x1b[36m',
  Blue = '\x1b[34m',
  Blink = '\x1b[;5;1m',
  Yellow = '\x1b[33m',
  Red = '\x1b[31m',
  Green = '\x1b[32m',
  Reset = '\x1b[0m'
}

export function getLine(src: string, pos: number, end: number): string {
  const lastLine = src.lastIndexOf('\n', pos) + 1; // cut off the \n
  const nextLine = src.indexOf('\n', end);
  return src.slice(lastLine, nextLine);
}

export function getLinePos(src: string, pos: number, end: number): any {
  const lastLine = src.lastIndexOf('\n', pos) + 1; // cut off the \n
  return {
    pos: pos - lastLine,
    end: end - lastLine
  };
}

export function getLineNumber(src: string, pos: number) {
  let lineCount = 1;
  let currentIdx = 0;
  while (true) {
    const next = src.indexOf('\n', currentIdx + 1);
    if (next === -1) {
      return lineCount + 1;
    }
    if (pos >= currentIdx && pos <= next) {
      return lineCount;
    }
    lineCount++;
    currentIdx = next;
  }
}

export function diagnosticColor(kind: DiagnosticKind): any {
  switch (kind) {
    case DiagnosticKind.Hint:
    case DiagnosticKind.Lint:
      return ColorCodes.Green;
    case DiagnosticKind.Error:
      return ColorCodes.Red;
    case DiagnosticKind.Message:
      return ColorCodes.Red;
    case DiagnosticKind.Warning:
      return ColorCodes.Yellow;
  }
}
