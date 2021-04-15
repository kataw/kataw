import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { TypeParameter } from './type-parameter';
import { TypeNode } from './';

export interface ObjectTypeCallProperty extends SyntaxNode {
  readonly typeParameter: TypeParameter | null;
  readonly kind: SyntaxKind.ObjectTypeCallProperty;
  readonly value: any;
  readonly staticToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly returnType: TypeNode;
}

export function createObjectTypeCallProperty(
  typeParameter: TypeParameter | null,
  value: any,
  staticToken: SyntaxToken<TokenSyntaxKind> | null,
  returnType: TypeNode,
  start: number,
  end: number
): ObjectTypeCallProperty {
  return {
    kind: SyntaxKind.ObjectTypeCallProperty,
    typeParameter,
    value,
    staticToken,
    returnType,
    flags: NodeFlags.None,
    start,
    end
  };
}
