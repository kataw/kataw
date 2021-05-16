import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { Identifier } from './identifier-expr';
import { PrivateIdentifier } from './private-identifier';
import { OptionalChain } from './optional-chain';
import { DummyIdentifier } from '../internal/dummy-identifier';

/**
 * Member chain expression.
 */
export interface IndexExpressionChain extends SyntaxNode {
  readonly chain: OptionalChain | null;
  readonly expression: /* error recovery */ DummyIdentifier | Identifier | PrivateIdentifier | null;
}

export function createIndexExpressionChain(
  chain: OptionalChain | null,
  expression: DummyIdentifier | Identifier | PrivateIdentifier | null,
  start: number,
  end: number
): IndexExpressionChain {
  return {
    kind: SyntaxKind.IndexExpressionChain | NodeFlags.IsMemberExpression,
    chain,
    expression,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
