import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';

export interface NullLiteral extends SyntaxNode {
  readonly text: null;
}

export function createNullLiteral(start: number, end: number): NullLiteral {
  return {
    kind: SyntaxKind.NullLiteral,
    text: null,
    flags: NodeFlags.ExpressionNode | NodeFlags.ChildLess,
    start,
    end
  };
}
