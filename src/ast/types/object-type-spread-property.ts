import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';

export interface ObjectTypeSpreadProperty extends SyntaxNode {
  readonly kind: SyntaxKind.ObjectTypeSpreadProperty;
  readonly key: any;
  readonly argument: any;
  readonly staticToken: SyntaxToken<TokenSyntaxKind> | null;
}

export function createObjectTypeSpreadProperty(
  key: any,
  argument: any,
  staticToken: SyntaxToken<TokenSyntaxKind> | null,
  start: number,
  end: number
): ObjectTypeSpreadProperty {
  return {
    kind: SyntaxKind.ObjectTypeSpreadProperty,
    key,
    argument,
    staticToken,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.None,
    start,
    end
  };
}
