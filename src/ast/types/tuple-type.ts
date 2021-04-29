import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { TypeNode } from '.';

export interface TupleType extends SyntaxNode {
  readonly types: TypeNode[];
  readonly trailingComma: boolean;
}

export function createTupleType(
  types: TypeNode[],
  trailingComma: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): TupleType {
  return {
    kind: SyntaxKind.TupleType,
    types,
    trailingComma,
    flags,
    start,
    end
  };
}
