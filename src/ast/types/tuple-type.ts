import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { TypeNode } from '.';

export interface TupleType extends SyntaxNode {
  readonly kind: SyntaxKind.TupleType;
  readonly types: TypeNode[];
  readonly trailingComma: boolean;
}

export function createTupleType(types: TypeNode[], trailingComma: boolean, start: number, end: number): TupleType {
  return {
    kind: SyntaxKind.TupleType,
    types,
    trailingComma,
    flags: NodeFlags.None,
    start,
    end
  };
}
