import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
import { TypeParameterInstantiation } from './type-parameter-instantiation';
import { DummyIdentifier } from '../internal/dummy-identifier';
import { Identifier } from '../expressions/identifier-expr';

export interface TypeReference extends SyntaxNode {
  readonly typeName: Identifier | DummyIdentifier;
  readonly typeParameters: TypeParameterInstantiation | null;
}

export function createTypeReference(
  typeName: Identifier | DummyIdentifier,
  typeParameters: TypeParameterInstantiation | null,
  start: number,
  end: number
): TypeReference {
  return {
    kind: SyntaxKind.TypeReference,
    typeName,
    typeParameters,
    flags: NodeFlags.IsTypeNode,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
