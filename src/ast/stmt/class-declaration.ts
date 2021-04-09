import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { ExpressionNode } from '../expressions';
import { Identifier } from '../expressions/identifier-expr';
import { ClassElementList } from '../expressions/class-element-list';
import { TypeParameter } from '../types/type-parameter';
import { DecoratorList } from '../expressions/decorator-list';

/**
 * Class declaration.
 */
export interface ClassDeclaration extends SyntaxNode {
  readonly decorators: DecoratorList | null;
  readonly name: Identifier | null;
  readonly typeParameters: TypeParameter | null;
  readonly classHeritage: ExpressionNode | null;
  readonly members: ClassElementList;
}

export function createClassDeclaration(
  decorators: DecoratorList | null,
  name: Identifier | null,
  typeParameters: TypeParameter | null,
  classHeritage: ExpressionNode | null,
  members: ClassElementList,
  start: number,
  end: number
): ClassDeclaration {
  return {
    kind: SyntaxKind.ClassDeclaration,
    decorators,
    name,
    typeParameters,
    classHeritage,
    members,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
