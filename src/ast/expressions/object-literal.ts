import { CoverInitializedName } from './cover-initialized-name';
import { IdentifierReference } from './identifier-reference';
import { MethodDefinition } from './method-definition';
import { SpreadProperty } from './spread-property';
import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';

import { PropertyDefinitionList } from './property-definition-list';
/**
 * ObjectLiteral.
 *
 * https://tc39.es/ecma262/#prod-PropertyDefinition
 */

export type Properties = IdentifierReference | CoverInitializedName | MethodDefinition | SpreadProperty; // [MODIFIED]

export interface ObjectLiteral extends Node {
  readonly propertyList: PropertyDefinitionList;
}

export function createObjectLiteral(
  propertyList: PropertyDefinitionList,
  flags: NodeFlags,
  start: number,
  end: number
): ObjectLiteral {
  return {
    kind: NodeKind.ObjectLiteral,
    propertyList,
    flags,
    symbol: null,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}

export function updateObjectLiteral(
  node: ObjectLiteral,
  propertyDefinitionList: PropertyDefinitionList
): ObjectLiteral {
  return node.propertyList !== propertyDefinitionList
    ? updateNode(createObjectLiteral(propertyDefinitionList, node.flags, node.start, node.end), node)
    : node;
}
