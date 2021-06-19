import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { TypeNode } from '.';

/**
 * OptionalType
 */

export interface OptionalType extends SyntaxNode {
  readonly optionalToken: SyntaxToken<TokenSyntaxKind>;
  readonly type: TypeNode;
}

export function createOptionalType(
  optionalToken: SyntaxToken<TokenSyntaxKind>,
  type: TypeNode,
  start: number,
  end: number
): OptionalType {
  return {
    kind: SyntaxKind.OptionalType,
    optionalToken,
    type,
    flags: NodeFlags.IsTypeNode,
    start,
    end
  };
}
