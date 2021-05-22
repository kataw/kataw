import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { Identifier } from './identifier-expr';
import { FunctionBody } from './function-body';
import { FormalParameterList } from './formal-parameter-list';
import { TypeParameterList } from '../types/type-parameter-list';
import { TypeNode } from '../types';

/**
 * Function expression.
 */
export interface FunctionExpression extends SyntaxNode {
  readonly asyncKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly functionKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly generatorToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly name: Identifier | null;
  readonly formalParameters: FormalParameterList;
  readonly contents: FunctionBody;
  readonly typeParameters: TypeParameterList | null;
  readonly returnType: TypeNode | null;
}

export function createFunctionExpression(
  asyncKeyword: SyntaxToken<TokenSyntaxKind> | null,
  functionKeyword: SyntaxToken<TokenSyntaxKind>,
  generatorToken: SyntaxToken<TokenSyntaxKind> | null,
  name: Identifier | null,
  formalParameters: FormalParameterList,
  contents: FunctionBody,
  typeParameters: TypeParameterList | null,
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
    formalParameters,
    contents,
    typeParameters,
    returnType,
    flags,
    start,
    end
  };
}
