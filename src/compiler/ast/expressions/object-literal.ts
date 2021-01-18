import { CoverInitializedName } from './cover-initialized-name';
import { IdentifierReference } from './identifier-reference';
import { MethodDefinition } from './method-definition';
import { SpreadProperty } from './spread-property';
import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../../visitor/common';

import { PropertyDefinitionList } from './property-definition-list';
/**
 * ObjectLiteral.
 *
 * https://tc39.es/ecma262/#prod-PropertyDefinition
 */

export type Properties =
  | IdentifierReference
  | CoverInitializedName // *recovery mode*
  | MethodDefinition
  | SpreadProperty; // [MODIFIED]

export interface ObjectLiteral extends Node {
  readonly propertyDefinitionList: PropertyDefinitionList;
}

export function createObjectLiteral(
  propertyDefinitionList: PropertyDefinitionList,
  flags: NodeFlags,
  start: number,
  end: number
): ObjectLiteral {
  return {
    kind: NodeKind.ObjectLiteral,
    propertyDefinitionList,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateObjectLiteral(
  node: ObjectLiteral,
  propertyDefinitionList: PropertyDefinitionList
): ObjectLiteral {
  return node.propertyDefinitionList !== propertyDefinitionList
    ? updateNode(createObjectLiteral(propertyDefinitionList, node.flags, node.start, node.end), node)
    : node;
}
