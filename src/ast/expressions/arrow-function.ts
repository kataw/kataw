import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { TypeParameterDeclaration } from '../types/type-parameter-declaration';
import { Identifier } from './identifier-expr';
import { BindingElement } from './binding-element';
import { TypeNode } from '../types';
import { FunctionBody } from './function-body';
import { ExpressionNode } from './';

export interface ArrowFunction extends SyntaxNode {
  readonly arrowToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly typeParameters: TypeParameterDeclaration | null;
  readonly parameters: Identifier | BindingElement[];
  readonly asyncKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly returnType: TypeNode | null;
  readonly contents: ExpressionNode | FunctionBody;
}

export function createArrowFunction(
  arrowToken: SyntaxToken<TokenSyntaxKind> | null,
  typeParameters: TypeParameterDeclaration | null,
  parameters: Identifier | BindingElement[],
  asyncKeyword: SyntaxToken<TokenSyntaxKind> | null,
  returnType: TypeNode | null,
  contents: ExpressionNode | FunctionBody,
  flags: NodeFlags,
  start: number,
  end: number
): ArrowFunction {
  return {
    kind: SyntaxKind.ArrowFunction,
    arrowToken,
    typeParameters,
    parameters,
    asyncKeyword,
    returnType,
    contents,
    flags,
    start,
    end
  };
}
