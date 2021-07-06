import { SyntaxNode, SyntaxKind, NodeFlags , TransformFlags} from '../syntax-node';
import { ExpressionNode } from '.';
import { SyntaxToken, TokenSyntaxKind } from '../token';

/**
 * Spread element
 */
export interface SpreadElement extends SyntaxNode {
  readonly ellipsisToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly argument: ExpressionNode;
}

export function createSpreadElement(
  ellipsisToken: SyntaxToken<TokenSyntaxKind> | null,
  argument: ExpressionNode,
  start: number,
  end: number
): SpreadElement {
  return {
    kind: SyntaxKind.SpreadElement,
    ellipsisToken,
    argument,
    flags: NodeFlags.ExpressionNode | NodeFlags.DisallowTrailingComma,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
