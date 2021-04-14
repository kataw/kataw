import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { Identifier } from '../expressions/identifier-expr';
import { TypeNode } from '.';
import { TypeParameter } from './type-parameter';

export interface TypeAlias extends SyntaxNode {
  readonly typeToken: SyntaxToken<TokenSyntaxKind>;
  readonly name: Identifier;
  readonly typeParameters: TypeParameter | null;
  readonly type: TypeNode;
}

export function createTypeAlias(
  typeToken: SyntaxToken<TokenSyntaxKind>,
  name: Identifier,
  typeParameters: TypeParameter | null,
  type: TypeNode,
  start: number,
  end: number
): TypeAlias {
  return {
    kind: SyntaxKind.TypeAlias,
    typeToken,
    name,
    typeParameters,
    type,
    flags: NodeFlags.None,
    start,
    end
  };
}
