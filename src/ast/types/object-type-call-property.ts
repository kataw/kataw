import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';

export interface ObjectTypeCallProperty extends SyntaxNode {
  readonly kind: SyntaxKind.ObjectTypeCallProperty;
  readonly value: any;
  readonly staticToken: SyntaxToken<TokenSyntaxKind> | null;
}

export function createObjectTypeCallProperty(
  value: any,
  staticToken: SyntaxToken<TokenSyntaxKind> | null,
  start: number,
  end: number
): ObjectTypeCallProperty {
  return {
    kind: SyntaxKind.ObjectTypeCallProperty,
    value,
    staticToken,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.None,
    start,
    end
  };
}
