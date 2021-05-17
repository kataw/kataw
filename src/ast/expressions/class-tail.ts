import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { ClassElement } from '../expressions/class-element';
import { FieldDefinition } from './field-definition';
import { SemicolonClassElement } from './semicolon-class-element';
import { ClassBody } from './class-body';
import { ExpressionNode } from '.';

export type ClassElements = SemicolonClassElement | ClassElement | FieldDefinition;

/**
 * ClassTail
 */
export interface ClassTail extends SyntaxNode {
  readonly classHeritage: ExpressionNode | null;
  readonly body: ClassBody | null;
}

export function createClassTail(
  classHeritage: ExpressionNode | null,
  body: ClassBody | null,
  start: number,
  end: number
): ClassTail {
  return {
    kind: SyntaxKind.ClassTail,
    classHeritage,
    body,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
