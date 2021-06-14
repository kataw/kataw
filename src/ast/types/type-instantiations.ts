import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { TypeNode } from '.';

export interface TypeInstantiations extends SyntaxNode {
  readonly types: TypeNode[];
  readonly trailingComma: boolean;
}

export function createTypeInstantiations(
  types: TypeNode[],
  trailingComma: boolean,
  start: number,
  end: number
): TypeInstantiations {
  return {
    kind: SyntaxKind.TypeInstantiations,
    types,
    trailingComma,
    flags: NodeFlags.IsTypeNode,
    start,
    end
  };
}
