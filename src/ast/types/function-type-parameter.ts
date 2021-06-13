import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { TypeNode } from '.';
import { Identifier } from '../expressions/identifier-expr';

export interface FunctionTypeParameter extends SyntaxNode {
  readonly ellipsisToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly name: Identifier;
  readonly optionalToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly types: TypeNode | null;
}

export function createFunctionTypeParameters(
  ellipsisToken: SyntaxToken<TokenSyntaxKind> | null,
  name: Identifier,
  optionalToken: SyntaxToken<TokenSyntaxKind> | null,
  types: TypeNode | null,
  start: number,
  end: number
): FunctionTypeParameter {
  return {
    kind: SyntaxKind.FunctionTypeParameter,
    ellipsisToken,
    name,
    optionalToken,
    types,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
