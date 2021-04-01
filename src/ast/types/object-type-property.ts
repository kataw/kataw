import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';

export interface ObjectTypeProperty extends SyntaxNode {
  readonly kind: SyntaxKind.ObjectTypeProperty;
  readonly key: any;
  readonly value: any;
  readonly optionalToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly staticToken: SyntaxToken<TokenSyntaxKind> | null;
}

export function createObjectTypeProperty(
  key: any,
  value: any,
  optionalToken: SyntaxToken<TokenSyntaxKind> | null,
  staticToken: SyntaxToken<TokenSyntaxKind> | null,
  start: number,
  end: number
): ObjectTypeProperty {
  return {
    kind: SyntaxKind.ObjectTypeProperty,
    key,
    value,
    optionalToken,
    staticToken,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.None,
    start,
    end
  };
}
