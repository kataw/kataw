import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { CallChain } from './call-chain';
import { MemberAccessChain } from './member-access-chain';
import { IndexExpressionChain } from './index-expr-chain';

/**
 * Optional chain
 */

export interface OptionalChain extends SyntaxNode {
  readonly chain: MemberAccessChain | IndexExpressionChain | CallChain | null;
}

export function createOptionalChain(
  chain: MemberAccessChain | IndexExpressionChain | CallChain | null,
  start: number,
  end: number
): OptionalChain {
  return {
    kind: SyntaxKind.OptionalChain,
    chain,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
