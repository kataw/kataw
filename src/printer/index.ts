import { RootNode} from '../ast/rootNode';
import { createPrinter, Printer } from './common';

export interface PrinterOptions {
  // Specify the line length that the printer will wrap on
  printWidth?: number;
  // Specify the number of spaces per indentation-level
  tabWidth?: number;
  // Indent lines with tabs instead of spaces
  useTabs?: boolean;
  // Print semicolons at the ends of statements
  semi?: boolean;
  // Print trailing comma based on code style
  trailingComma?: boolean;
  // Use single quotes instead of double quotes
  singleQuote?: boolean;
  // Print spaces between brackets in object literals
  bracketSpacing?: boolean;
  // Define file endings ('lf', 'crlf', 'cr', 'none')
  endOfLine?: 'lf' | 'crlf' | 'cr' | 'none';
  // Define line endings ('\n', '\n\r'')
  newLine?: 'cr' | 'crlf' | 'cr' | 'none';
  // Removes unnecessary whiteprinter.space, semicolons and line endings
  minify?: boolean;
  // Prins source map
  sourceMap?: boolean;
}

export function printSourceFile(cst: RootNode, _options?: PrinterOptions): string {
  const printer = createPrinter(cst.source);
  return '✖ Soon to be open sourced';
}
