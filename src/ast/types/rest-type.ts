import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { TypeNode } from './';

/**
 * RestType
 */

export interface RestType extends SyntaxNode {
  readonly ellipsisToken: SyntaxToken<TokenSyntaxKind>;
  readonly type: TypeNode;
}

export function createRestType(
  ellipsisToken: SyntaxToken<TokenSyntaxKind>,
  type: TypeNode,
  start: number,
  end: number
): RestType {
  return {
    kind: SyntaxKind.RestType,
    ellipsisToken,
    type,
    flags: NodeFlags.IsTypeNode | NodeFlags.ChildLess,
    start,
    end
  };
}
