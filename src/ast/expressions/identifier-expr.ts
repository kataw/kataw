import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';

export interface Identifier extends SyntaxNode {
  readonly text: string;
  readonly original: string;
  readonly rawText: string;
}

export function createIdentifier(
  text: string,
  original: string,
  rawText: string,
  start: number,
  end: number
): Identifier {
  return {
    kind: SyntaxKind.Identifier,
    original,
    text,
    rawText,
    flags: NodeFlags.ExpressionNode | NodeFlags.ChildLess,
    start,
    end
  };
}
