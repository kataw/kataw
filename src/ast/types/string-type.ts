import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';

export interface StringType extends SyntaxNode {
  readonly value: number;
}

export function createStringType(value: number, start: number, end: number): StringType {
  return {
    kind: SyntaxKind.StringType,
    value,
    flags: NodeFlags.IsTypeNode | NodeFlags.ChildLess,
    start,
    end
  };
}
