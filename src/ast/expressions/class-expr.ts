import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { ExpressionNode } from '.';
import { Identifier } from './identifier-expr';
import { ClassElementList } from '../expressions/class-element-list';
import { TypeParameter } from '../types/type-parameter';
import { DecoratorList } from './decorator-list';

/**
 * Class expression.
 */

export interface ClassExpression extends SyntaxNode {
  readonly classKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly decorators: DecoratorList | null;
  readonly name: Identifier | null;
  readonly typeParameters: TypeParameter | null;
  readonly classHeritage: ExpressionNode | null;
  readonly members: ClassElementList;
}

export function createClassExpression(
  decorators: DecoratorList | null,
  classKeyword: SyntaxToken<TokenSyntaxKind>,
  name: Identifier | null,
  typeParameters: TypeParameter | null,
  classHeritage: ExpressionNode | null,
  members: ClassElementList,
  start: number,
  end: number
): ClassExpression {
  return {
    kind: SyntaxKind.ClassExpression,
    decorators,
    classKeyword,
    name,
    typeParameters,
    classHeritage,
    members,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
