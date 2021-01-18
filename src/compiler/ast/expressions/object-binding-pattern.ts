import { BindingElement } from './binding-element';
import { VariableDeclaration } from '../declarations/variable-declaration';
import { Parameter } from '.';
import { BindingPropertyList } from './binding-property-list';
import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../../visitor/common';

import { ParameterDeclaration } from '../types/parameter-declaration';

/**
 * Object binding pattern.
 */
export interface ObjectBindingPattern extends Node {
  readonly bindingPropertyList: BindingPropertyList;
  /* @internal */
  readonly parent: BindingElement | VariableDeclaration | Parameter | ParameterDeclaration | null;
}

export function createObjectBindingPattern(
  bindingPropertyList: BindingPropertyList,
  flags: NodeFlags | NodeFlags,
  start: number,
  end: number
): ObjectBindingPattern {
  return {
    kind: NodeKind.ObjectBindingPattern,
    bindingPropertyList,
    flags,
    intersects: false,
    transformFlags: TransformFlags.ES2015 | TransformFlags.BindingPattern,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateObjectBindingPattern(
  node: ObjectBindingPattern,
  bindingPropertyList: BindingPropertyList
): ObjectBindingPattern {
  return node.bindingPropertyList !== bindingPropertyList
    ? updateNode(createObjectBindingPattern(bindingPropertyList, node.flags, node.start, node.end), node)
    : node;
}
