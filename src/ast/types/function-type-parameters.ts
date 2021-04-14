import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { TypeNode } from '.';
import { Identifier } from '../expressions/identifier-expr';

export interface FunctionTypeParameters extends SyntaxNode {
  readonly kind: SyntaxKind.FunctionTypeParameters;
  readonly ellipsisToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly name: Identifier;
  readonly optionalToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly typeAnnotation: TypeNode;
}

export function createFunctionTypeParameters(
  ellipsisToken: SyntaxToken<TokenSyntaxKind> | null,
  name: Identifier,
  optionalToken: SyntaxToken<TokenSyntaxKind> | null,
  typeAnnotation: TypeNode,
  start: number,
  end: number
): FunctionTypeParameters {
  return {
    kind: SyntaxKind.FunctionTypeParameters,
    ellipsisToken,
    name,
    optionalToken,
    typeAnnotation,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.None,
    start,
    end
  };
}
