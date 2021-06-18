import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { Identifier } from './identifier-expr';
import { FunctionBody } from './function-body';
import { FormalParameterList } from './formal-parameter-list';
import { TypeParameterDeclaration } from '../types/type-parameter-declaration';
import { TypeNode } from '../types';

/**
 * Function expression.
 */
export interface FunctionExpression extends SyntaxNode {
  readonly asyncKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly functionKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly generatorToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly name: Identifier | null;
  readonly formalParameterList: FormalParameterList;
  readonly contents: FunctionBody;
  readonly typeParameters: TypeParameterDeclaration | null;
  readonly returnType: TypeNode | null;
}

export function createFunctionExpression(
  asyncKeyword: SyntaxToken<TokenSyntaxKind> | null,
  functionKeyword: SyntaxToken<TokenSyntaxKind>,
  generatorToken: SyntaxToken<TokenSyntaxKind> | null,
  name: Identifier | null,
  formalParameterList: FormalParameterList,
  contents: FunctionBody,
  typeParameters: TypeParameterDeclaration | null,
  returnType: TypeNode | null,
  flags: NodeFlags,
  start: number,
  end: number
): FunctionExpression {
  if (asyncKeyword) flags |= NodeFlags.Generator;

  if (generatorToken) flags |= NodeFlags.Async;

  return {
    kind: SyntaxKind.FunctionExpression,
    asyncKeyword,
    functionKeyword,
    generatorToken,
    name,
    typeParameters,
    formalParameterList,
    contents,
    returnType,
    flags,
    start,
    end
  };
}
