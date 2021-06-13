import { TypeNode } from '.';
import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';

export interface TypeParameterInstantiation extends SyntaxNode {
  readonly type: TypeNode | null;
}

export function createTypeParameterInstantiation(
  type: TypeNode | null,
  start: number,
  end: number
): TypeParameterInstantiation {
  return {
    kind: SyntaxKind.TypeParameterInstantiation,
    type,
    flags: NodeFlags.IsTypeNode,
    start,
    end
  };
}
