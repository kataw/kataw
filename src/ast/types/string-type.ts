import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';

export interface StringType extends SyntaxNode {
  readonly text: string;
  readonly rawText: string;
}

export function createStringType(
  text: string,
  rawText: string,
  flags: NodeFlags,
  start: number,
  end: number
): StringType {
  return {
    kind: SyntaxKind.StringType,
    text,
    rawText,
    flags,
    start,
    end
  };
}
