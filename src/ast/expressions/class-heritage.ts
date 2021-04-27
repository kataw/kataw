import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { ExpressionNode } from '.';
import { TypeParameter } from '../types/type-parameter';

/**
 * ClassHeritage
 */
export interface ClassHeritage extends SyntaxNode {
  readonly extendsKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly expression: ExpressionNode;
  readonly typeParameter: TypeParameter | null;
}

export function createClassHeritage(
  extendsKeyword: SyntaxToken<TokenSyntaxKind>,
  expression: ExpressionNode,
  typeParameter: TypeParameter | null,
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
