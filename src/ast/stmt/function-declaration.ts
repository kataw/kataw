import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
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
  readonly asyncToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly generatorToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly name: Identifier | null;
  readonly formalParameters: FormalParameterList;
  readonly contents: FunctionBody;
  readonly typeParameters: TypeParameter | null;
  readonly returnType: TypeNode | null;
}

export function createFunctionDeclaration(
  asyncToken: SyntaxToken<TokenSyntaxKind> | null,
  generatorToken: SyntaxToken<TokenSyntaxKind> | null,
  name: Identifier | null,
  formalParameters: FormalParameterList,
  contents: FunctionBody,
  typeParameters: TypeParameter | null,
  returnType: TypeNode | null,
  start: number,
  end: number
): FunctionDeclaration {
  let flags = NodeFlags.ExpressionNode;

  if (asyncToken) flags |= NodeFlags.Generator;

  if (generatorToken) flags |= NodeFlags.Async;

  return {
    kind: SyntaxKind.FunctionDeclaration,
    asyncToken,
    generatorToken,
    name,
    formalParameters,
    contents,
    typeParameters,
    returnType,
    autofix: AutoFix.NotFixable,
    flags,
    start,
    end
  };
}
