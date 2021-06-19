import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';

export interface SubtractionType extends SyntaxNode {
  readonly subtractionToken: SyntaxToken<TokenSyntaxKind>;
  readonly text: number;
}

export function createSubtractionType(
  subtractionToken: SyntaxToken<TokenSyntaxKind>,
  text: number,
  start: number,
  end: number
): SubtractionType {
  return {
    kind: SyntaxKind.SubtractionType,
    subtractionToken,
    text,
    flags: NodeFlags.NoChildren | NodeFlags.IsTypeNode,
    start,
    end
  };
}
