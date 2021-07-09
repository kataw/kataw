import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { Identifier } from './identifier-expr';
import { ClassTail } from './class-tail';
import { TypeParameterDeclaration } from '../types/type-parameter-declaration';
import { DecoratorList } from './decorator-list';

/**
 * Class expression.
 */

export interface ClassExpression extends SyntaxNode {
  readonly classKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly decorators: DecoratorList | null;
  readonly name: Identifier | null;
  readonly typeParameters: TypeParameterDeclaration | null;
  readonly tail: ClassTail;
}

export function createClassExpression(
  decorators: DecoratorList | null,
  classKeyword: SyntaxToken<TokenSyntaxKind>,
  name: Identifier | null,
  typeParameters: TypeParameterDeclaration | null,
  tail: ClassTail,
  flags: NodeFlags,
  start: number,
  end: number
): ClassExpression {
  return {
    kind: SyntaxKind.ClassExpression,
    decorators,
    classKeyword,
    name,
    typeParameters,
    tail,
    flags,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
