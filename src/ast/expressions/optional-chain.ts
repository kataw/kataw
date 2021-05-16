import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { CallChain } from './call-chain';
import { MemberAccessChain } from './member-access-chain';
import { IndexExpressionChain } from './index-expr-chain';
import { TaggedTemplate } from './tagged-template';
import { PrivateIdentifier } from './private-identifier';

/**
 * Optional chain
 */

export type ChainMembers =
  | MemberAccessChain
  | /* error recovery */ TaggedTemplate
  | PrivateIdentifier
  | IndexExpressionChain
  | CallChain;

export interface OptionalChain extends SyntaxNode {
  readonly chain: ChainMembers | null;
}

export function createOptionalChain(chain: ChainMembers | null, start: number, end: number): OptionalChain {
  return {
    kind: SyntaxKind.OptionalChain,
    chain,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
