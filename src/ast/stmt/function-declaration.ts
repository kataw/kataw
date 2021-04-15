import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { Identifier } from '../expressions/identifier-expr';
import { FunctionBody } from '../expressions/function-body';
import { FormalParameterList } from '../expressions/formal-parameter-list';
import { TypeParameter } from '../types/type-parameter';
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
  readonly formalParameters: FormalParameterList;
  readonly contents: FunctionBody | null;
  readonly typeParameters: TypeParameter | null;
  readonly returnType: TypeNode | null;
}

export function createFunctionDeclaration(
  declareKeyword: SyntaxToken<TokenSyntaxKind> | null,
  asyncKeyword: SyntaxToken<TokenSyntaxKind> | null,
  functionKeyword: SyntaxToken<TokenSyntaxKind>,
  generatorToken: SyntaxToken<TokenSyntaxKind> | null,
  name: Identifier | null,
  formalParameters: FormalParameterList,
  contents: FunctionBody | null,
  typeParameters: TypeParameter | null,
  returnType: TypeNode | null,
  flags: NodeFlags,
  start: number,
  end: number
): FunctionDeclaration {
  if (declareKeyword) flags | NodeFlags.Declared;

  if (asyncKeyword) flags |= NodeFlags.Generator;

  if (generatorToken) flags |= NodeFlags.Async;

  return {
    kind: SyntaxKind.FunctionDeclaration,
    declareKeyword,
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
