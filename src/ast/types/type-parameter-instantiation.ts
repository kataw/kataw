import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
import { TypeInstantiations } from './type-instantiations';

export interface TypeParameterInstantiation extends SyntaxNode {
  readonly typeInstantiations: TypeInstantiations;
}

export function createTypeParameterInstantiation(
  typeInstantiations: TypeInstantiations,
  flags: NodeFlags,
  start: number,
  end: number
): TypeParameterInstantiation {
  return {
    kind: SyntaxKind.TypeParameterInstantiation,
    typeInstantiations,
    flags,
    transformFlags: TransformFlags.TypeParameter,
    start,
    end
  };
}
