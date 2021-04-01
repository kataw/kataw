import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';

export interface StringLiteral extends SyntaxNode {
  kind: SyntaxKind.StringLiteral;
  value: string;
}

export function createStringLiteral(value: string, start: number, end: number): StringLiteral {
  return {
    kind: SyntaxKind.StringLiteral,
    value,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.ExpressionNode | NodeFlags.ChildLess,
    start,
    end
  };
}
