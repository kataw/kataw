import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';

export interface NullLiteral extends SyntaxNode {
  kind: SyntaxKind.NullLiteral;
  value: null;
}

export function createNullLiteral(start: number, end: number): NullLiteral {
  return {
    kind: SyntaxKind.NullLiteral,
    value: null,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.ExpressionNode | NodeFlags.ChildLess,
    start,
    end
  };
}
