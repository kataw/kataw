import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';

/**
 * PrivateIdentifier
 */
export interface PrivateIdentifier extends SyntaxNode {
  readonly text: string;
}

export function createPrivateIdentifier(text: string, start: number, end: number): PrivateIdentifier {
  return {
    kind: SyntaxKind.PrivateIdentifier,
    text,
    flags: NodeFlags.ChildLess | NodeFlags.ExpressionNode,
    start,
    end
  };
}
