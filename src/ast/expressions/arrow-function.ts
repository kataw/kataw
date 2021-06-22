import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { TypeParameterDeclaration } from '../types/type-parameter-declaration';
import { Identifier } from './identifier-expr';
import { BindingElement } from './binding-element';
import { ArrowPatameterList } from './arrow-parameter-list';
import { TypeNode } from '../types';
import { FunctionBody } from './function-body';
import { ExpressionNode } from './';

export interface ArrowFunction extends SyntaxNode {
  readonly arrowToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly typeParameters: TypeParameterDeclaration | null;
  readonly arrowPatameterList: ArrowPatameterList | Identifier;
  readonly asyncKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly returnType: TypeNode | null;
  readonly contents: ExpressionNode | FunctionBody;
}

export function createArrowFunction(
  arrowToken: SyntaxToken<TokenSyntaxKind> | null,
  typeParameters: TypeParameterDeclaration | null,
  arrowPatameterList: ArrowPatameterList | Identifier,
  asyncKeyword: SyntaxToken<TokenSyntaxKind> | null,
  returnType: TypeNode | null,
  contents: ExpressionNode | FunctionBody,
  flags: NodeFlags,
  start: number,
  end: number
): ArrowFunction {
  return {
    kind: SyntaxKind.ArrowFunction,
    asyncKeyword,
    typeParameters,
    arrowPatameterList,
    returnType,
    arrowToken,
    contents,
    flags,
    start,
    end
  };
}
