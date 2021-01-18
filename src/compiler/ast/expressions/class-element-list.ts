import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../../visitor/common';

import { ClassElement } from '../expressions/class-element';
import { FieldDefinition } from '../expressions/field-definition';
import { Semicolon } from '../expressions/semicolon';

export type ClassElements = Semicolon | ClassElement | FieldDefinition;

/**
 * ClassElementList
 */
export interface ClassElementList extends Node {
  readonly elements: ClassElements[];
}

export function createClassElementList(
  elements: ClassElements[],
  flags: NodeFlags,
  start: number,
  end: number
): ClassElementList {
  return {
    kind: NodeKind.ClassElementList,
    elements,
    flags,
    intersects: false,
    transformFlags: TransformFlags.ES2015,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateClassElementList(node: ClassElementList, elements: ClassElements[]): ClassElementList {
  return node.elements !== elements
    ? updateNode(createClassElementList(elements, node.flags, node.start, node.end), node)
    : node;
}
