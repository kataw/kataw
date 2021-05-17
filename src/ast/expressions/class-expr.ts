import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { Identifier } from './identifier-expr';
import { ClassTail } from '../expressions/class-element-list';
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
  readonly members: ClassTail;
}

export function createClassExpression(
  decorators: DecoratorList | null,
  classKeyword: SyntaxToken<TokenSyntaxKind>,
  name: Identifier | null,
  typeParameters: TypeParameter | null,
  members: ClassTail,
  start: number,
  end: number
): ClassExpression {
  return {
    kind: SyntaxKind.ClassExpression,
    decorators,
    classKeyword,
    name,
    typeParameters,
    members,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
