import { SynthesizedComment, TextRange, SourceMapRange } from '../types';

export interface EmitNode {
  annotatedNodes?: Node[];
  flags: EmitFlags;
  leadingComments?: SynthesizedComment[];
  trailingComments?: SynthesizedComment[];
  commentRange?: TextRange;
  sourceMapRange?: SourceMapRange;
  tokenSourceMapRanges?: (SourceMapRange | undefined)[];
  constantValue?: string | number;
  startsOnNewLine?: boolean;
}

export const enum EmitFlags {
  None = 0,
  SingleLine = 1 << 0,
  AdviseOnEmitNode = 1 << 1,
  NoSubstitution = 1 << 2,
  CapturesThis = 1 << 3,
  NoLeadingSourceMap = 1 << 4,
  NoTrailingSourceMap = 1 << 5,
  NoSourceMap = NoLeadingSourceMap | NoTrailingSourceMap,
  NoNestedSourceMaps = 1 << 6,
  NoTokenLeadingSourceMaps = 1 << 7,
  NoTokenTrailingSourceMaps = 1 << 8,
  NoTokenSourceMaps = NoTokenLeadingSourceMaps | NoTokenTrailingSourceMaps,
  NoLeadingComments = 1 << 9,
  NoTrailingComments = 1 << 10,
  NoComments = NoLeadingComments | NoTrailingComments,
  NoNestedComments = 1 << 11,
  HelperName = 1 << 12,
  ExportName = 1 << 13,
  LocalName = 1 << 14,
  InternalName = 1 << 15,
  Indented = 1 << 16,
  NoIndentation = 1 << 17,
  AsyncFunctionBody = 1 << 18,
  ReuseTempVariableScope = 1 << 19,
  CustomPrologue = 1 << 20,
  NoHoisting = 1 << 21,
  HasEndOfDeclarationMarker = 1 << 22,
  Iterator = 1 << 23,
  NoAsciiEscaping = 1 << 24
}
