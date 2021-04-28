import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { TypeNode } from './';

export interface ObjectTypeSpreadProperty extends SyntaxNode {
  readonly ellipsisToken: SyntaxToken<TokenSyntaxKind>;
  readonly kind: SyntaxKind.ObjectTypeSpreadProperty;
  readonly type: TypeNode;
  readonly staticToken: SyntaxToken<TokenSyntaxKind> | null;
}

export function createObjectTypeSpreadProperty(
  ellipsisToken: SyntaxToken<TokenSyntaxKind>,
  type: TypeNode,
  staticToken: SyntaxToken<TokenSyntaxKind> | null,
  start: number,
  end: number
): ObjectTypeSpreadProperty {
  return {
    kind: SyntaxKind.ObjectTypeSpreadProperty,
    ellipsisToken,
    type,
    staticToken,
    flags: NodeFlags.None,
    start,
    end
  };
}
