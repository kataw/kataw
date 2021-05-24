import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { ClassElement } from '../expressions/class-element';
import { FieldDefinition } from './field-definition';
import { SemicolonClassElement } from './semicolon-class-element';
import { ClassBody } from './class-body';
import { ObjectType } from '../types/object-type';
import { ExpressionNode } from '.';

export type ClassElements = SemicolonClassElement | ClassElement | FieldDefinition;

/**
 * ClassTail
 */
export interface ClassTail extends SyntaxNode {
  readonly classHeritage: ExpressionNode | null;
  /* `ObjectType` *only* if the class has been declared */
  readonly body: ClassBody | ObjectType;
}

export function createClassTail(
  classHeritage: ExpressionNode | null,
  body: ClassBody | ObjectType,
  flags: NodeFlags,
  start: number,
  end: number
): ClassTail {
  return {
    kind: SyntaxKind.ClassTail,
    classHeritage,
    body,
    flags,
    start,
    end
  };
}
