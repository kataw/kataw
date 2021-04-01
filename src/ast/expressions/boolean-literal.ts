import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';

export interface BooleanLiteral extends SyntaxNode {
  kind: SyntaxKind.BooleanLiteral;
  value: boolean;
}

export function createBooleanLiteral(value: boolean, start: number, end: number): BooleanLiteral {
  return {
    kind: SyntaxKind.BooleanLiteral,
    value,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.ExpressionNode | NodeFlags.ChildLess,
    start,
    end
  };
}
