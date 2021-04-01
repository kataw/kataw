import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';

export interface NumericLiteral extends SyntaxNode {
  kind: SyntaxKind.Identifier;
  value: number;
}

export function createNumericLiteral(value: number, start: number, end: number): NumericLiteral {
  return {
    kind: SyntaxKind.Identifier,
    value,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.ExpressionNode | NodeFlags.ChildLess,
    start,
    end
  };
}
