import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { TypeParameterInstantiationList } from './type-parameter-instantiation-list';

export interface GenericType extends SyntaxNode {
  readonly id: any;
  readonly typeParameters: TypeParameterInstantiationList | null;
}

export function createGenericType(
  id: any,
  typeParameters: TypeParameterInstantiationList | null,
  start: number,
  end: number
): GenericType {
  return {
    kind: SyntaxKind.GenericType,
    id,
    typeParameters,
    flags: NodeFlags.None,
    start,
    end
  };
}
