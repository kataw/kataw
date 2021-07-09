import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { TypeNode } from './';

export interface ObjectTypeSpreadProperty extends SyntaxNode {
  readonly protoKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly ellipsisToken: SyntaxToken<TokenSyntaxKind>;
  readonly kind: SyntaxKind.ObjectTypeSpreadProperty;
  readonly type: TypeNode;
  readonly staticKeyword: SyntaxToken<TokenSyntaxKind> | null;
}

export function createObjectTypeSpreadProperty(
  protoKeyword: SyntaxToken<TokenSyntaxKind> | null,
  ellipsisToken: SyntaxToken<TokenSyntaxKind>,
  type: TypeNode,
  staticKeyword: SyntaxToken<TokenSyntaxKind> | null,
  start: number,
  end: number
): ObjectTypeSpreadProperty {
  return {
    kind: SyntaxKind.ObjectTypeSpreadProperty,
    protoKeyword,
    staticKeyword,
    ellipsisToken,
    type,
    flags: NodeFlags.IsTypeNode,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
