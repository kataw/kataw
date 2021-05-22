import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { ExpressionNode } from '.';
import { TypeParameterInstantiationList } from '../types/type-parameter-instantiation-list';

/**
 * ClassHeritage
 */
export interface ClassHeritage extends SyntaxNode {
  readonly extendsKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly expression: ExpressionNode;
  readonly typeParameter: TypeParameterInstantiationList | null;
}

export function createClassHeritage(
  extendsKeyword: SyntaxToken<TokenSyntaxKind>,
  expression: ExpressionNode,
  typeParameter: TypeParameterInstantiationList | null,
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
