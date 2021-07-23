import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
import { TypeNode } from '.';

export interface TypeParameterInstantiation extends SyntaxNode {
  readonly types: TypeNode[];
  readonly trailingComma: boolean;
}

export function createTypeParameterInstantiation(
  types: TypeNode[],
  trailingComma: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): TypeParameterInstantiation {
  return {
    kind: SyntaxKind.TypeParameterInstantiation,
    types,
    trailingComma,
    flags,
    transformFlags: TransformFlags.TypeParameter,
    start,
    end
  };
}
