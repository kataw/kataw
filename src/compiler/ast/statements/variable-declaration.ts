import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { Expression, Binding } from '../expressions/index';
import { TypeNode } from '../types';
import { VariableDeclarationList } from './variable-declarationList';
import { updateNode } from '../../utils';

/**
 * Variable declaration
 */

export interface VariableDeclaration extends Node {
  readonly binding: Binding;
  readonly exclamation: boolean; // Optional definite assignment assertion
  readonly type: TypeNode | null; // Optional type annotation
  readonly initializer: Expression | null; // Optional initializer
  readonly parent: VariableDeclarationList | null;
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
  exclamation: boolean,
  type: TypeNode | null,
  initializer: Expression | null
): VariableDeclaration {
  return node.binding !== binding ||
    node.exclamation !== exclamation ||
    node.type !== type ||
    node.initializer !== initializer
    ? updateNode(
        createVariableDeclaration(binding, exclamation, type, initializer, node.flags, node.start, node.end),
        node
      )
    : node;
}
