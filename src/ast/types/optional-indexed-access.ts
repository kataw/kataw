import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { TypeNode } from './';

export interface OptionalIndexedAccess extends SyntaxNode {
  readonly optionalIndexedToken: SyntaxToken<TokenSyntaxKind>;
  readonly objectType: TypeNode;
  readonly indexType: TypeNode;
}

export function createOptionalIndexedAccess(
  optionalIndexedToken: SyntaxToken<TokenSyntaxKind>,
  objectType: TypeNode,
  indexType: TypeNode,
  start: number,
  end: number
): OptionalIndexedAccess {
  return {
    kind: SyntaxKind.OptionalIndexedAccess,
    optionalIndexedToken,
    objectType,
    indexType,
    flags: NodeFlags.IsTypeNode,
    start,
    end
  };
}
