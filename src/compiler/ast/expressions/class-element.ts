import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { MethodDefinition } from './method-definition';

/**
 * Class element.
 */
export interface ClassElement extends Node {
  // True if `IsStatic` of ClassElement is true.
  readonly isStatic: boolean;
  readonly method: MethodDefinition;
}

export function createClassElement(
  isStatic: boolean,
  method: MethodDefinition,
  flags: NodeFlags,
  start: number,
  end: number
): ClassElement {
  return {
    kind: NodeKind.ClassElement,
    isStatic,
    method,
    flags,
    intersects: false,
    transformFlags: TransformFlags.ES2015,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateClassElement(node: ClassElement, isStatic: boolean, method: MethodDefinition): ClassElement {
  return node.isStatic !== isStatic || node.method !== method
    ? updateNode(createClassElement(isStatic, method, node.flags, node.start, node.end), node)
    : node;
}
