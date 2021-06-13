import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';

export interface SubtractionType extends SyntaxNode {
  readonly subtractionToken: SyntaxToken<TokenSyntaxKind>;
  readonly value: number;
}

export function createSubtractionType(
  subtractionToken: SyntaxToken<TokenSyntaxKind>,
  value: number,
  start: number,
  end: number
): SubtractionType {
  return {
    kind: SyntaxKind.SubtractionType,
    subtractionToken,
    value,
    flags: NodeFlags.ChildLess | NodeFlags.IsTypeNode,
    start,
    end
  };
}
