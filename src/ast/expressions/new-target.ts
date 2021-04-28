import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { Identifier } from './identifier-expr';

/**
 * New target expression.
 */
export interface NewTarget extends SyntaxNode {
  readonly name: Identifier;
}

export function createNewTarget(name: Identifier, start: number, end: number): NewTarget {
  return {
    kind: SyntaxKind.NewTarget,
    name,
    flags: NodeFlags.ExpressionNode | NodeFlags.ChildLess,
    start,
    end
  };
}
