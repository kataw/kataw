import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { ExpressionNode } from '.';
import { Identifier } from './identifier-expr';
import { CallChain } from './call-chain';
import { MemberAccessChain } from './member-access-chain';

/**
 * Member chain expression.
 */
export interface IndexExpressionChain extends SyntaxNode {
  readonly chain: MemberAccessChain | IndexExpressionChain | CallChain | null;
  readonly expression: ExpressionNode | Identifier | null;
}

export function createIndexExpressionChain(
  chain: MemberAccessChain | IndexExpressionChain | CallChain | null,
  expression: ExpressionNode | Identifier | null,
  start: number,
  end: number
): IndexExpressionChain {
  return {
    kind: SyntaxKind.IndexExpressionChain,
    chain,
    expression,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
