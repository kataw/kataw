import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { TypeParameterInstantiationList } from './type-parameter-instantiation-list';
import { DummyIdentifier } from '../internal/dummy-identifier';
import { Identifier } from '../expressions/identifier-expr';

export interface TypeReference extends SyntaxNode {
  readonly id: Identifier | DummyIdentifier;
  readonly typeParameters: TypeParameterInstantiationList | null;
}

export function createTypeReference(
  id: Identifier | DummyIdentifier,
  typeParameters: TypeParameterInstantiationList | null,
  start: number,
  end: number
): TypeReference {
  return {
    kind: SyntaxKind.TypeReference,
    id,
    typeParameters,
    flags: NodeFlags.None,
    start,
    end
  };
}
