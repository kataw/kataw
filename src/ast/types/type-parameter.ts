import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { TypeNode } from '.';
import { Identifier } from '../expressions/identifier-expr';
import { DummyIdentifier } from '../internal/dummy-identifier';

export interface TypeParameter extends SyntaxNode {
  readonly name: Identifier | DummyIdentifier;
  readonly type: TypeNode | null;
  readonly defaultType: TypeNode | null;
}

export function createTypeParameter(
  name: Identifier | DummyIdentifier,
  type: TypeNode | null,
  defaultType: TypeNode | null,
  start: number,
  end: number
): TypeParameter {
  return {
    kind: SyntaxKind.TypeParameter,
    name,
    type,
    defaultType,
    flags: NodeFlags.None,
    start,
    end
  };
}
