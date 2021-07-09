import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { ExpressionNode } from '.';
import { TypeParameterInstantiation } from '../types/type-parameter-instantiation';

/**
 * ClassHeritage
 */
export interface ClassHeritage extends SyntaxNode {
  readonly extendsKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly expression: ExpressionNode;
  readonly typeParameter: TypeParameterInstantiation | null;
}

export function createClassHeritage(
  extendsKeyword: SyntaxToken<TokenSyntaxKind>,
  expression: ExpressionNode,
  typeParameter: TypeParameterInstantiation | null,
  start: number,
  end: number
): ClassHeritage {
  return {
    kind: SyntaxKind.ClassHeritage,
    extendsKeyword,
    expression,
    typeParameter,
    flags: NodeFlags.IsStatement,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
