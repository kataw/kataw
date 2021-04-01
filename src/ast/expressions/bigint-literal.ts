import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';

export interface BigIntLiteral extends SyntaxNode {
  kind: SyntaxKind.BigIntLiteral;
  value: string;
}

export function createBigIntLiteral(value: string, start: number, end: number): BigIntLiteral {
  return {
    kind: SyntaxKind.BigIntLiteral,
    value,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.ExpressionNode | NodeFlags.ChildLess,
    start,
    end
  };
}
