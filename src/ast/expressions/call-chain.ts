import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
import { IndexExpressionChain } from './index-expr-chain';
import { MemberAccessChain } from './member-access-chain';
import { ArgumentList } from './argument-list';
import { TypeParameterInstantiation } from '../types/type-parameter-instantiation';

/**
 * Call chain expression.
 */
export interface CallChain extends SyntaxNode {
  readonly chain: MemberAccessChain | IndexExpressionChain | CallChain | null;
  readonly typeArguments: TypeParameterInstantiation | null;
  readonly argumentList: ArgumentList | null;
}

export function createCallChain(
  chain: MemberAccessChain | IndexExpressionChain | CallChain | null,
  typeArguments: TypeParameterInstantiation | null,
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
    transformFlags: TransformFlags.CallExpression,
    start,
    end
  };
}
