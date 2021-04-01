import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';

/**
 * An super call expression.
 */
export type Super = SyntaxNode;

export function createSuper(start: number, end: number): Super {
  return {
    kind: SyntaxKind.Super,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.ExpressionNode | NodeFlags.ChildLess,
    start,
    end
  };
}
