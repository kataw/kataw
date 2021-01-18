import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { Expression, Binding } from '../expressions/index';
import { TypeNode } from '../types';

import { updateNode } from '../../../visitor/common';

/**
 * Variable declaration
 */

export interface VariableDeclaration extends Node {
  readonly binding: Binding;
  readonly exclamation: boolean;
  readonly type: TypeNode | null;
  readonly initializer: Expression | null;
}

export function createVariableDeclaration(
  binding: Binding,
  exclamation: boolean,
  type: TypeNode | null,
  initializer: Expression | null,
  flags: NodeFlags,
  start: number,
  end: number
): VariableDeclaration {
  return {
    kind: NodeKind.VariableDeclaration,
    binding,
    exclamation,
    type,
    initializer,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateVariableDeclaration(
  node: VariableDeclaration,
  binding: Binding,
  initializer: Expression | null
): VariableDeclaration {
  return node.binding !== binding || node.initializer !== initializer
    ? updateNode(
        createVariableDeclaration(
          binding,
          node.exclamation,
          node.type,
          node.initializer,
          node.flags,
          node.start,
          node.end
        ),
        node
      )
    : node;
}
