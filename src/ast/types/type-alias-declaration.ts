import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { Identifier } from '../expressions/identifier-expr';
import { TypeNode } from '.';
import { TypeParameter } from './type-parameter';

export interface TypeAlias extends SyntaxNode {
  readonly declareToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly opaqueToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly typeToken: SyntaxToken<TokenSyntaxKind>;
  readonly name: Identifier;
  readonly opaqueType: TypeNode | null;
  readonly typeParameters: TypeParameter | null;
  readonly type: TypeNode;
}

export function createTypeAlias(
  declareToken: SyntaxToken<TokenSyntaxKind> | null,
  opaqueToken: SyntaxToken<TokenSyntaxKind> | null,
  typeToken: SyntaxToken<TokenSyntaxKind>,
  name: Identifier,
  opaqueType: TypeNode | null,
  typeParameters: TypeParameter | null,
  type: TypeNode,
  flags: NodeFlags,
  start: number,
  end: number
): TypeAlias {
  return {
    kind: SyntaxKind.TypeAlias,
    declareToken,
    opaqueToken,
    typeToken,
    name,
    opaqueType,
    typeParameters,
    type,
    flags,
    start,
    end
  };
}
