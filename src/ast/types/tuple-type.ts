import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { TypeNode } from '.';

export interface TupleType extends SyntaxNode {
  readonly types: TypeNode[];
  readonly trailingComma: boolean;
  readonly multiline: boolean;
}

export function createTupleType(
  types: TypeNode[],
  trailingComma: boolean,
  multiline: boolean,
  start: number,
  end: number
): TupleType {
  return {
    kind: SyntaxKind.TupleType,
    types,
    trailingComma,
    multiline,
    flags: NodeFlags.None,
    start,
    end
  };
}
