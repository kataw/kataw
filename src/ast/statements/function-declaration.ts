import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { Identifier } from '../expressions/identifier-expr';
import { FunctionBody } from '../expressions/function-body';
import { FormalParameterList } from '../expressions/formal-parameter-list';
import { TypeParameterDeclaration } from '../types/type-parameter-declaration';
import { TypeNode } from '../types';

/**
 * Function declaration.
 */
export interface FunctionDeclaration extends SyntaxNode {
  readonly declareKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly asyncKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly functionKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly generatorToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly name: Identifier | null;
  readonly typeParameters: TypeParameterDeclaration | null;
  readonly formalParameterList: FormalParameterList;
  readonly contents: FunctionBody | null;
  readonly returnType: TypeNode | null;
}

export function createFunctionDeclaration(
  declareKeyword: SyntaxToken<TokenSyntaxKind> | null,
  asyncKeyword: SyntaxToken<TokenSyntaxKind> | null,
  functionKeyword: SyntaxToken<TokenSyntaxKind>,
  generatorToken: SyntaxToken<TokenSyntaxKind> | null,
  name: Identifier | null,
  formalParameterList: FormalParameterList,
  contents: FunctionBody | null,
  typeParameters: TypeParameterDeclaration | null,
  returnType: TypeNode | null,
  flags: NodeFlags,
  start: number,
  end: number
): FunctionDeclaration {
  if (declareKeyword) flags |= NodeFlags.Declared;

  if (asyncKeyword) flags |= NodeFlags.Generator;

  if (generatorToken) flags |= NodeFlags.Async;

  return {
    kind: SyntaxKind.FunctionDeclaration,
    declareKeyword,
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
