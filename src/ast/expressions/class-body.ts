import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { ClassElement } from './class-element';
import { FieldDefinition } from './field-definition';

export type ClassElements = SyntaxToken<TokenSyntaxKind> | ClassElement | FieldDefinition;

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
