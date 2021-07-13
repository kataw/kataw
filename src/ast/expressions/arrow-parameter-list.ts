import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
import { BindingElement } from './binding-element';
import { Identifier } from './identifier-expr';

/**
 * ArrowPatameterList
 */

export interface ArrowPatameterList extends SyntaxNode {
  readonly parameters: Identifier | BindingElement[];
  readonly trailingComma: boolean;
}

export function createArrowPatameterList(
  parameters: Identifier | BindingElement[],
  trailingComma: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): ArrowPatameterList {
  return {
    kind: SyntaxKind.ArrowPatameterList,
    parameters,
    trailingComma,
    flags,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
