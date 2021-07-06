import { SyntaxNode, SyntaxKind, NodeFlags , TransformFlags} from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { OptionalChain } from './optional-chain';
import { ExpressionNode } from '.';

/**
 * Optional expression.
 */
export interface OptionalExpression extends SyntaxNode {
  readonly chainToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly member: ExpressionNode;
  readonly chain: OptionalChain;
}

export function createOptionalExpression(
  chainToken: SyntaxToken<TokenSyntaxKind> | null,
  member: ExpressionNode,
  chain: OptionalChain,
  start: number,
  end: number
): OptionalExpression {
  return {
    kind: SyntaxKind.OptionalExpression,
    chainToken,
    member,
    chain,
    flags: NodeFlags.ExpressionNode,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
