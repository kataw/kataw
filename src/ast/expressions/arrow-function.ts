import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { TypeParameter } from '../types/type-parameter';
import { Identifier } from './identifier-expr';
import { FormalParameter } from './formal-parameter';
import { TypeNode } from '../types';
import { FunctionBody } from './function-body';
import { ExpressionNode } from './';

export interface ArrowFunction extends SyntaxNode {
  readonly arrowToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly typeParameters: TypeParameter | null;
  readonly parameters: Identifier | FormalParameter[];
  readonly asyncToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly returnType: TypeNode | null;
  readonly contents: ExpressionNode | FunctionBody;
}

export function createArrowFunction(
  arrowToken: SyntaxToken<TokenSyntaxKind> | null,
  typeParameters: TypeParameter | null,
  parameters: Identifier | FormalParameter[],
  asyncToken: SyntaxToken<TokenSyntaxKind> | null,
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
    asyncToken,
    returnType,
    contents,
    flags,
    start,
    end
  };
}
