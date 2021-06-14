import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { IndexExpressionChain } from './index-expr-chain';
import { MemberAccessChain } from './member-access-chain';
import { ArgumentList } from './argument-list';
import { TypeParameterInstantiationList } from '../types/type-parameter-instantiation-list';

/**
 * Call chain expression.
 */
export interface CallChain extends SyntaxNode {
  readonly chain: MemberAccessChain | IndexExpressionChain | CallChain | null;
  readonly typeArguments: TypeParameterInstantiationList | null;
  readonly argumentList: ArgumentList | null;
}

export function createCallChain(
  chain: MemberAccessChain | IndexExpressionChain | CallChain | null,
  typeArguments: TypeParameterInstantiationList | null,
  argumentList: ArgumentList,
  start: number,
  end: number
): CallChain {
  return {
    kind: SyntaxKind.CallChain,
    chain,
    typeArguments,
    argumentList,
    flags: NodeFlags.ExpressionNode | NodeFlags.IsCallExpression,
    start,
    end
  };
}
