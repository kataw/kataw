import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { Identifier } from '../expressions/identifier-expr';
import { TypeNode } from '.';
import { TypeParameterDeclaration } from './type-parameter-declaration';

export interface TypeAlias extends SyntaxNode {
  readonly declareToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly typeToken: SyntaxToken<TokenSyntaxKind>;
  readonly name: Identifier;
  readonly typeParameters: TypeParameterDeclaration | null;
  readonly assignToken: SyntaxToken<TokenSyntaxKind>;
  readonly type: TypeNode;
}

export function createTypeAlias(
  declareToken: SyntaxToken<TokenSyntaxKind> | null,
  typeToken: SyntaxToken<TokenSyntaxKind>,
  name: Identifier,
  typeParameters: TypeParameterDeclaration | null,
  assignToken: SyntaxToken<TokenSyntaxKind>,
  type: TypeNode,
  flags: NodeFlags,
  start: number,
  end: number
): TypeAlias {
  return {
    kind: SyntaxKind.TypeAlias,
    declareToken,
    typeToken,
    name,
    typeParameters,
    assignToken,
    type,
    flags,
    start,
    end
  };
}
