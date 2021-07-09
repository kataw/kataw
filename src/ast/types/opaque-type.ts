import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { Identifier } from '../expressions/identifier-expr';
import { DummyIdentifier } from '../internal/dummy-identifier';
import { TypeParameterDeclaration } from './type-parameter-declaration';
import { TypeNode } from './';

export interface OpaqueType extends SyntaxNode {
  readonly declareToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly opaqueToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly typeToken: SyntaxToken<TokenSyntaxKind>;
  readonly name: Identifier | DummyIdentifier;
  readonly typeParameters: TypeParameterDeclaration | null;
  readonly superType: TypeNode | null;
  readonly impltype: TypeNode | null;
}

export function createOpaqueType(
  declareToken: SyntaxToken<TokenSyntaxKind> | null,
  opaqueToken: SyntaxToken<TokenSyntaxKind> | null,
  typeToken: SyntaxToken<TokenSyntaxKind>,
  name: Identifier | DummyIdentifier,
  typeParameters: TypeParameterDeclaration | null,
  superType: TypeNode | null,
  impltype: TypeNode | null,
  start: number,
  end: number
): OpaqueType {
  return {
    kind: SyntaxKind.OpaqueType,
    declareToken,
    opaqueToken,
    typeToken,
    name,
    typeParameters,
    superType,
    impltype,
    flags: NodeFlags.IsTypeNode,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
