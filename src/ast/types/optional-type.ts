import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { TypeNode } from '.';

/**
 * OptionalType
 */

export interface OptionalType extends SyntaxNode {
  readonly type: TypeNode;
  readonly optionalToken: SyntaxToken<TokenSyntaxKind>;
}

export function createOptionalType(
  optionalToken: SyntaxToken<TokenSyntaxKind>,
  type: TypeNode,
  start: number,
  end: number
): OptionalType {
  return {
    kind: SyntaxKind.OptionalType,
    type,
    optionalToken,
    flags: NodeFlags.IsTypeNode,
    start,
    end
  };
}
