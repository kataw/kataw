import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { TypeParameterDeclaration } from './type-parameter-declaration';
import { ArrowTypeParameterList } from './arrow-type-parameter-list';
import { TypeNode } from './';

export interface ArrowFunctionType extends SyntaxNode {
  readonly arrowTypeParameterList: ArrowTypeParameterList;
  readonly arrowToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly returnType: TypeNode;
  readonly typeParameters: TypeParameterDeclaration | null;
}

export function createArrowFunctionType(
  arrowTypeParameterList: ArrowTypeParameterList,
  arrowToken: SyntaxToken<TokenSyntaxKind> | null,
  returnType: TypeNode,
  typeParameters: TypeParameterDeclaration | null,
  start: number,
  end: number
): ArrowFunctionType {
  return {
    kind: SyntaxKind.ArrowFunctionType,
    typeParameters,
    arrowTypeParameterList,
    arrowToken,
    returnType,
    flags: NodeFlags.IsTypeNode,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
