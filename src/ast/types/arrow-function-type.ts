import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { TypeParameterList } from './type-parameter-list';

export interface ArrowFunctionType extends SyntaxNode {
  readonly arrowToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly parameters: any;
  readonly returnType: any;
  readonly typeParameters: TypeParameterList | null;
}

export function createArrowFunctionType(
  arrowToken: SyntaxToken<TokenSyntaxKind> | null,
  parameters: any,
  returnType: any,
  typeParameters: TypeParameterList | null,
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
