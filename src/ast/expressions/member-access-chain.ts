import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { ExpressionNode } from '.';
import { CallChain } from './call-chain';
import { PrivateIdentifier } from './private-identifier';
import { Identifier } from './identifier-expr';
import { IndexExpressionChain } from './index-expr-chain';

/**
 * MemberAccessChain expression.
 */
export interface MemberAccessChain extends SyntaxNode {
  readonly chain: MemberAccessChain | IndexExpressionChain | CallChain | null;
  readonly expression: ExpressionNode | Identifier | PrivateIdentifier | null;
}

export function createMemberAccessChain(
  chain: MemberAccessChain | IndexExpressionChain | CallChain | null,
  expression: ExpressionNode | Identifier | PrivateIdentifier | null,
  start: number,
  end: number
): MemberAccessChain {
  return {
    kind: SyntaxKind.MemberAccessChain,
    chain,
    expression,
    flags: NodeFlags.ExpressionNode | NodeFlags.IsMemberExpression,
    start,
    end
  };
}
