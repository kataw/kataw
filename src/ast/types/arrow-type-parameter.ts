import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { TypeNode } from '.';
import { Identifier } from '../expressions/identifier-expr';

export interface ArrowTypeParameter extends SyntaxNode {
  readonly ellipsisToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly name: Identifier;
  readonly optionalToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly types: TypeNode | null;
}

export function createArrowTypeParameter(
  ellipsisToken: SyntaxToken<TokenSyntaxKind> | null,
  name: Identifier,
  optionalToken: SyntaxToken<TokenSyntaxKind> | null,
  types: TypeNode | null,
  start: number,
  end: number
): ArrowTypeParameter {
  return {
    kind: SyntaxKind.ArrowTypeParameter,
    ellipsisToken,
    name,
    optionalToken,
    types,
    flags: NodeFlags.IsTypeNode,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
