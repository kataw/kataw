import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { ClassElement } from './class-element';
import { FieldDefinition } from './field-definition';
import { SemicolonClassElement } from './semicolon-class-element';
import { ExpressionNode } from '.';

export type ClassElements = SemicolonClassElement | ClassElement | FieldDefinition;

/**
 * ClassBody
 */
export interface ClassBody extends SyntaxNode {
  readonly elements: ClassElements[];
}

export function createClassBody(elements: ClassElements[], start: number, end: number): ClassBody {
  return {
    kind: SyntaxKind.ClassBody,
    elements,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
