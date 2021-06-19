import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';

export interface Identifier extends SyntaxNode {
  readonly text: string;
  readonly rawText: string;
}

export function createIdentifier(text: string, rawText: string, start: number, end: number): Identifier {
  return {
    kind: SyntaxKind.Identifier,
    text,
    rawText,
    flags: NodeFlags.ExpressionNode | NodeFlags.NoChildren,
    start,
    end
  };
}
