import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { TypeParameter } from '../types/type-parameter';
import { Identifier } from './identifier-expr';
import { FormalParameter } from './formal-parameter';
import { TypeNode } from '../types';
import { FunctionBody } from './function-body';
import { ExpressionNode } from './';

export interface ArrowFunction extends SyntaxNode {
  readonly kind: SyntaxKind.ArrowFunction;
  readonly typeParameters: TypeParameter | null;
  readonly parameters: Identifier | FormalParameter[];
  readonly asyncToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly returnType: TypeNode | null;
  readonly contents: ExpressionNode | FunctionBody;
}

export function createArrowFunction(
  typeParameters: TypeParameter | null,
  parameters: Identifier | FormalParameter[],
  asyncToken: SyntaxToken<TokenSyntaxKind> | null,
  returnType: TypeNode | null,
  contents: ExpressionNode | FunctionBody,
  start: number,
  end: number
): ArrowFunction {
  return {
    kind: SyntaxKind.ArrowFunction,
    typeParameters,
    parameters,
    asyncToken,
    returnType,
    contents,
    autofix: AutoFix.NotFixable,
    flags: asyncToken ? NodeFlags.Async | NodeFlags.ExpressionNode : NodeFlags.ExpressionNode,
    start,
    end
  };
}
