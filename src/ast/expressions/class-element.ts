import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { MethodDefinition } from './method-definition';

/**
 * Class element.
 */
export interface ClassElement extends Node {
  // True if `IsStatic` of ClassElement is true.
  readonly isStatic: boolean;
  readonly isAbstract: boolean;
  readonly isReadOnly: boolean;
  readonly isOptional: boolean;
  readonly method: MethodDefinition;
}

export function createClassElement(
  isStatic: boolean,
  isAbstract: boolean,
  isReadOnly: boolean,
  isOptional: boolean,
  method: MethodDefinition,
  flags: NodeFlags,
  start: number,
  end: number
): ClassElement {
  return {
    kind: NodeKind.ClassElement,
    isStatic,
    isAbstract,
    isReadOnly,
    isOptional,
    method,
    flags,
    symbol: null,
    transformFlags: TransformFlags.ES2015,
    start,
    end
  };
}

export function updateClassElement(
  node: ClassElement,
  isStatic: boolean,
  isAbstract: boolean,
  isReadOnly: boolean,
  isOptional: boolean,
  method: MethodDefinition
): ClassElement {
  return node.isStatic !== isStatic ||
    node.isStatic !== isAbstract ||
    node.isStatic !== isReadOnly ||
    node.isStatic !== isOptional ||
    node.method !== method
    ? updateNode(
        createClassElement(isStatic, isAbstract, isReadOnly, isOptional, method, node.flags, node.start, node.end),
        node
      )
    : node;
}
