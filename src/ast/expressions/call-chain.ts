import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { IndexExpressionChain } from './index-expr-chain';
import { MemberAccessChain } from './member-access-chain';
import { ArgumentList } from './argument-list';

/**
 * Call chain expression.
 */
export interface CallChain extends SyntaxNode {
  readonly chain: MemberAccessChain | IndexExpressionChain | CallChain | null;
  readonly argumentList: ArgumentList | null;
}

export function createCallChain(
  chain: MemberAccessChain | IndexExpressionChain | CallChain | null,
  argumentList: ArgumentList,
  start: number,
  end: number
): CallChain {
  return {
    kind: SyntaxKind.CallChain,
    chain,
    argumentList,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
