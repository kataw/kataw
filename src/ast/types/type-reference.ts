import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { TypeParameterInstantiation } from './type-parameter-instantiation';
import { DummyIdentifier } from '../internal/dummy-identifier';
import { Identifier } from '../expressions/identifier-expr';

export interface TypeReference extends SyntaxNode {
  readonly id: Identifier | DummyIdentifier;
  readonly typeParameters: TypeParameterInstantiation | null;
}

export function createTypeReference(
  id: Identifier | DummyIdentifier,
  typeParameters: TypeParameterInstantiation | null,
  start: number,
  end: number
): TypeReference {
  return {
    kind: SyntaxKind.TypeReference,
    id,
    typeParameters,
    flags: NodeFlags.IsTypeNode,
    start,
    end
  };
}
