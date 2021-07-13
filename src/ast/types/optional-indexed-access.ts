import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
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
    objectType,
    optionalIndexedToken,
    indexType,
    flags: NodeFlags.IsTypeNode,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
