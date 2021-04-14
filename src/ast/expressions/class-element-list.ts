import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { ClassElement } from '../expressions/class-element';
import { FieldDefinition } from './field-definition';
import { SemicolonClassElement } from './semicolon-class-element';

export type ClassElements = SemicolonClassElement | ClassElement | FieldDefinition;

/**
 * ClassElementList
 */
export interface ClassElementList extends SyntaxNode {
  readonly elements: ClassElements[];
}

export function createClassElementList(elements: ClassElements[], start: number, end: number): ClassElementList {
  return {
    kind: SyntaxKind.ClassElementList,
    elements,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
