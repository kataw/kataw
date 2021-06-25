import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';

export interface StringType extends SyntaxNode {
  readonly text: string;
  readonly rawText: string;
}

export function createStringType(text: string, rawText: string, start: number, end: number): StringType {
  return {
    kind: SyntaxKind.StringType,
    text,
    rawText,
    flags: NodeFlags.IsTypeNode | NodeFlags.NoChildren,
    start,
    end
  };
}
