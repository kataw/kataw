import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { ExpressionNode } from '.';
import { TypeParameterDeclaration } from '../types/type-parameter-declaration';

/**
 * ClassHeritage
 */
export interface ClassHeritage extends SyntaxNode {
  readonly extendsKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly expression: ExpressionNode;
  readonly typeParameter: TypeParameterDeclaration | null;
}

export function createClassHeritage(
  extendsKeyword: SyntaxToken<TokenSyntaxKind>,
  expression: ExpressionNode,
  typeParameter: TypeParameterDeclaration | null,
  start: number,
  end: number
): ClassHeritage {
  return {
    kind: SyntaxKind.ClassHeritage,
    extendsKeyword,
    expression,
    typeParameter,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
