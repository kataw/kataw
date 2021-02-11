import { Token } from './ast/token';
import { NodeFlags } from './ast/node';
import { Diagnostic } from './diagnostics/diagnostic';

/**
 * Kataw options
 */
export interface Options {
  next?: boolean;
  jsx?: boolean;
  minify?: boolean;
  prettify?: boolean;
  lint?: boolean;
  autoCorrect?: boolean;
  disableWebCompat?: boolean;
  module: boolean;
  es2015?: boolean;
  es2016?: boolean;
  es2017?: boolean;
  es2018?: boolean;
  es2019?: boolean;
  es2020?: boolean;
  esNext?: boolean;
}

/**
 * The parser interface.
 */
export interface ParserState {
  source: string;
  pos: number;
  startPos: number;
  tokenPos: number;
  end: number;
  token: Token;
  tokenValue: any;
  raw: any;
  nodeFlags: NodeFlags;
  uniqueId: number;
  templateRaw: string;
  diagnostics: Diagnostic[];
  nodeCursor: any;
}

export type NodeCursor = void | ((pos: number) => any | undefined);

export interface TextRange {
  start: number;
  end: number;
}

export interface TextSpan {
  start: number;
  length: number;
}

export interface TextChangeRange {
  span: TextSpan;
  newLength: number;
}

export interface CommentRange extends TextRange {
  hasTrailingNewLine?: boolean;
  kind: any;
}

export interface SynthesizedComment extends CommentRange {
  text: string;
  pos: -1;
  end: -1;
  hasLeadingNewline?: boolean;
}

export interface SourceMapRange extends TextRange {
  source?: SourceMapSource;
}

export interface SourceMapSource {
  fileName: string;
  text: string;
  /* @internal */ lineMap: readonly number[];
  skipTrivia?: (pos: number) => number;
}
