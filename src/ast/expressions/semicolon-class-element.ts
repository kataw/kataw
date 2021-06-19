import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';

/**
 * SemicolonClassElement
 *
 * See: https://tc39.es/ecma262/#prod-ClassElement
 *
 */

export type SemicolonClassElement = SyntaxNode;

export function createSemicolonClassElement(start: number, end: number): SemicolonClassElement {
  return {
    kind: SyntaxKind.SemicolonClassElement,
    flags: NodeFlags.ExpressionNode | NodeFlags.NoChildren,
    start,
    end
  };
}
