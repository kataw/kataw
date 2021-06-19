import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { Identifier } from './identifier-expr';
import { PrivateIdentifier } from './private-identifier';
import { DummyIdentifier } from '../internal/dummy-identifier';
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
  readonly asteriskToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly name: Identifier | PrivateIdentifier | DummyIdentifier | null;
  readonly formalParameterList: FormalParameterList;
  readonly contents: FunctionBody;
  readonly typeParameters: TypeParameterDeclaration | null;
  readonly returnType: TypeNode | null;
}

export function createFunctionExpression(
  asyncKeyword: SyntaxToken<TokenSyntaxKind> | null,
  functionKeyword: SyntaxToken<TokenSyntaxKind>,
  asteriskToken: SyntaxToken<TokenSyntaxKind> | null,
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

  if (asteriskToken) flags |= NodeFlags.Async;

  return {
    kind: SyntaxKind.FunctionExpression,
    asyncKeyword,
    functionKeyword,
    asteriskToken,
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
