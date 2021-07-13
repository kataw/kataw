import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';

/**
 * Elison
 */

export type Elison = SyntaxNode;

export function createElison(start: number, end: number): Elison {
  return {
    kind: SyntaxKind.Elison,
    flags: NodeFlags.ExpressionNode | NodeFlags.NoChildren,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
