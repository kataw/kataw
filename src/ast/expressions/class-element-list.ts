import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { ClassElement } from '../expressions/class-element';
import { FieldDefinition } from './field-definition';
import { SemicolonClassElement } from './semicolon-class-element';
import { ExpressionNode } from '.';

export type ClassElements = SemicolonClassElement | ClassElement | FieldDefinition;

/**
 * ClassTail
 */
export interface ClassTail extends SyntaxNode {
  readonly classHeritage: ExpressionNode | null;
  readonly elements: ClassElements[];
}

export function createClassTail(
  classHeritage: ExpressionNode | null,
  elements: ClassElements[],
  start: number,
  end: number
): ClassTail {
  return {
    kind: SyntaxKind.ClassTail,
    classHeritage,
    elements,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
