import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
import { ExpressionNode } from '.';
import { SpreadElement } from './spread-element';

export type ArgumentListElement = SpreadElement | ExpressionNode;

/**
 * Argument list
 */

export interface ArgumentList extends SyntaxNode {
  readonly elements: ArgumentListElement[];
  readonly trailingComma: boolean;
}

export function createArgumentList(
  elements: ArgumentListElement[],
  trailingComma: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): ArgumentList {
  return {
    kind: SyntaxKind.ArgumentList,
    elements,
    trailingComma,
    flags,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
