import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';

export interface NumberType extends SyntaxNode {
  kind: SyntaxKind.NumberType;
  value: number;
}

export function createNumberType(value: number, start: number, end: number): NumberType {
  return {
    kind: SyntaxKind.NumberType,
    value,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.None,
    start,
    end
  };
}
