import { DiagnosticSource, DiagnosticKind } from '../diagnostic/diagnostic';
import { ColorCodes } from './common';

export function diagnosticColor1(kind: DiagnosticKind): string {
  switch (kind) {
<<<<<<< HEAD
    case DiagnosticKind.Linter:
=======
    case DiagnosticKind.Lint:
>>>>>>> 38ddf5c17d (chore: add linting as public APO)
      return ColorCodes.Green + ' lint ' + ColorCodes.Reset;
    case DiagnosticKind.Error:
      return ColorCodes.Red + ' error ' + ColorCodes.Reset;
    default:
      return ColorCodes.Yellow + ' warning ' + ColorCodes.Reset;
  }
}

export function listing(
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
    `${ColorCodes.Cyan + start}:${end + ColorCodes.Reset}${diagnosticColor1(kind)}${
      ColorCodes.White + message + ColorCodes.Reset
    }\n`
  );
}
