import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { TypeNode } from '.';

export interface TypeAnnotation extends SyntaxNode {
  readonly bitwiseOrToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly bitwiseAndToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly type: TypeNode;
}

export function createTypeAnnotation(
  bitwiseOrToken: SyntaxToken<TokenSyntaxKind> | null,
  bitwiseAndToken: SyntaxToken<TokenSyntaxKind> | null,
  type: TypeNode,
  start: number,
  end: number
): TypeAnnotation {
  return {
    kind: SyntaxKind.TypeAnnotation,
    bitwiseOrToken,
    bitwiseAndToken,
    type,
    flags: NodeFlags.IsTypeNode,
    start,
    end
  };
}
