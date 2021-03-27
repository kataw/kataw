/**
 * Sources of diagnostic messages.
 */
export const enum DiagnosticSource {
  Lexer = 0,
  Parser = 1 << 1,
  Binder = 1 << 2,
  Checker = 1 << 3,
  DataFlow = 1 << 4
}
