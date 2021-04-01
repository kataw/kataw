import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';

export interface StringType extends SyntaxNode {
  kind: SyntaxKind.StringType;
  value: number;
}

export function createStringType(value: number, start: number, end: number): StringType {
  return {
    kind: SyntaxKind.StringType,
    value,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.None,
    start,
    end
  };
}
