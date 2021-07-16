import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
import { ExpressionNode } from '.';
import { OptionalChain } from './optional-chain';

/**
 * MemberAccessChain expression.
 */
export interface MemberAccessChain extends SyntaxNode {
  chain: OptionalChain | null;
  readonly expression: ExpressionNode | null;
}

export function createMemberAccessChain(
  chain: OptionalChain | null,
  expression: ExpressionNode | null,
  start: number,
  end: number
): MemberAccessChain {
  return {
    kind: SyntaxKind.MemberAccessChain,
    chain,
    expression,
    flags: NodeFlags.ExpressionNode,
    transformFlags: TransformFlags.MemberAccessExpression,
    start,
    end
  };
}
