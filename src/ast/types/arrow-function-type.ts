import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { TypeParameterDeclaration } from './type-parameter-declaration';

export interface ArrowFunctionType extends SyntaxNode {
  readonly arrowToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly parameters: any;
  readonly returnType: any;
  readonly typeParameters: TypeParameterDeclaration | null;
}

export function createArrowFunctionType(
  arrowToken: SyntaxToken<TokenSyntaxKind> | null,
  parameters: any,
  returnType: any,
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
    flags: NodeFlags.None,
    start,
    end
  };
}
