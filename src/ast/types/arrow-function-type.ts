import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { TypeParameterDeclaration } from './type-parameter-declaration';
import { TypeNode } from './';

export interface ArrowFunctionType extends SyntaxNode {
  readonly arrowToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly parameters: any;
  readonly returnType: TypeNode;
  readonly typeParameters: TypeParameterDeclaration | null;
}

export function createArrowFunctionType(
  arrowToken: SyntaxToken<TokenSyntaxKind> | null,
  parameters: any,
  returnType: TypeNode,
  typeParameters: TypeParameterDeclaration | null,
  start: number,
  end: number
): ArrowFunctionType {
  return {
    kind: SyntaxKind.ArrowFunctionType,
    arrowToken,
    parameters,
    returnType,
    typeParameters,
    flags: NodeFlags.IsTypeNode,
    start,
    end
  };
}
