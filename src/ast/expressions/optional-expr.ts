import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { OptionalChain } from './optional-chain';
import { ExpressionNode } from '.';

/**
 * Optional expression.
 */
export interface OptionalExpression extends SyntaxNode {
  readonly member: ExpressionNode;
  readonly chain: OptionalChain;
}

export function createOptionalExpression(
  member: ExpressionNode,
  chain: OptionalChain,
  start: number,
  end: number
): OptionalExpression {
  return {
    kind: SyntaxKind.OptionalExpression,
    member,
    chain,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
