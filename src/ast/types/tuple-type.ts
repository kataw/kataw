import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { TypeNode } from '.';

/**
 * TupleType
 */

export interface TupleType extends SyntaxNode {
  readonly elementTypes: TypeNode[];
  readonly trailingComma: boolean;
}

export function createTupleType(
  elementTypes: TypeNode[],
  trailingComma: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): TupleType {
  return {
    kind: SyntaxKind.TupleType,
    elementTypes,
    trailingComma,
    flags,
    start,
    end
  };
}
