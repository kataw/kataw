import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { Identifier } from '../expressions/identifier-expr';
import { TypeNode } from '.';
import { TypeParameter } from './type-parameter';

export interface TypeAlias extends SyntaxNode {
  readonly opaqueToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly typeToken: SyntaxToken<TokenSyntaxKind>;
  readonly name: Identifier;
  readonly opaqueType: TypeNode | null;
  readonly typeParameters: TypeParameter | null;
  readonly type: TypeNode;
}

export function createTypeAlias(
  opaqueToken: SyntaxToken<TokenSyntaxKind> | null,
  typeToken: SyntaxToken<TokenSyntaxKind>,
  name: Identifier,
  opaqueType: TypeNode | null,
  typeParameters: TypeParameter | null,
  type: TypeNode,
  start: number,
  end: number
): TypeAlias {
  return {
    kind: SyntaxKind.TypeAlias,
    opaqueToken,
    typeToken,
    name,
    opaqueType,
    typeParameters,
    type,
    flags: NodeFlags.None,
    start,
    end
  };
}
