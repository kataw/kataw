import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { TypeNode } from './';
import { Identifier } from '../expressions/identifier-expr';
import { DummyIdentifier } from '../internal/dummy-identifier';

export interface TypeParameter extends SyntaxNode {
  readonly name: Identifier | DummyIdentifier;
  readonly type: TypeNode | null;
  readonly assignToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly defaultType: TypeNode | null;
}

export function createTypeParameter(
  name: Identifier | DummyIdentifier,
  type: TypeNode | null,
  assignToken: SyntaxToken<TokenSyntaxKind> | null,
  defaultType: TypeNode | null,
  start: number,
  end: number
): TypeParameter {
  return {
    kind: SyntaxKind.TypeParameter,
    name,
    type,
    assignToken,
    defaultType,
    flags: NodeFlags.IsTypeNode,
    start,
    end
  };
}
