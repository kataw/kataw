import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { ExpressionNode } from '.';
import { TypeParameter } from '../types/type-parameter';

/**
 * ClassHeritage
 */
export interface ClassHeritage extends SyntaxNode {
  readonly expression: ExpressionNode;
  readonly typeParameter: TypeParameter | null;
}

export function createClassHeritage(
  expression: ExpressionNode,
  typeParameter: TypeParameter | null,
  start: number,
  end: number
): ClassHeritage {
  return {
    kind: SyntaxKind.ClassHeritage,
    expression,
    typeParameter,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
