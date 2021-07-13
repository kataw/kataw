import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { TypeParameterDeclaration } from './type-parameter-declaration';
import { TypeNode } from './';

export interface ObjectTypeCallProperty extends SyntaxNode {
  readonly protoKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly typeParameter: TypeParameterDeclaration | null;
  readonly kind: SyntaxKind.ObjectTypeCallProperty;
  readonly value: TypeNode;
  readonly staticKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly returnType: TypeNode;
}

export function createObjectTypeCallProperty(
  protoKeyword: SyntaxToken<TokenSyntaxKind> | null,
  typeParameter: TypeParameterDeclaration | null,
  value: TypeNode,
  staticKeyword: SyntaxToken<TokenSyntaxKind> | null,
  returnType: TypeNode,
  start: number,
  end: number
): ObjectTypeCallProperty {
  return {
    kind: SyntaxKind.ObjectTypeCallProperty,
    protoKeyword,
    staticKeyword,
    typeParameter,
    value,
    returnType,
    flags: NodeFlags.IsTypeNode,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
