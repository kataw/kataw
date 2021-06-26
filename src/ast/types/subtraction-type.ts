import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';

export interface SubtractionType extends SyntaxNode {
  readonly subtractionToken: SyntaxToken<TokenSyntaxKind>;
  readonly text: number;
  readonly rawText: string;
}

export function createSubtractionType(
  subtractionToken: SyntaxToken<TokenSyntaxKind>,
  text: number,
  rawText: string,
  start: number,
  end: number
): SubtractionType {
  return {
    kind: SyntaxKind.SubtractionType,
    subtractionToken,
    text,
    rawText,
    flags: NodeFlags.NoChildren | NodeFlags.IsTypeNode,
    start,
    end
  };
}
