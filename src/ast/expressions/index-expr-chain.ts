import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
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
    kind: SyntaxKind.IndexExpressionChain,
    chain,
    expression,
    flags: NodeFlags.ExpressionNode,
    transformFlags: TransformFlags.IndexExpression,
    start,
    end
  };
}
