import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../../visitor/common';

import { SpreadProperty } from './spread-property';
import { IdentifierReference } from './identifier-reference';
import { CoverInitializedName } from './cover-initialized-name';
import { PropertyDefinition } from './property-definition';

/**
 * PropertyDefinitionList.
 */

export interface PropertyDefinitionList extends Node {
  readonly properties: (SpreadProperty | PropertyDefinition | IdentifierReference | CoverInitializedName)[];
  readonly trailingComma: boolean;
  /* @internal */
  readonly multiline: boolean;
}

export function createPropertyDefinitionList(
  properties: (SpreadProperty | PropertyDefinition | IdentifierReference | CoverInitializedName)[],
  trailingComma: boolean,
  multiline: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): PropertyDefinitionList {
  return {
    kind: NodeKind.PropertyDefinitionList,
    properties,
    trailingComma,
    multiline,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updatePropertyDefinitionList(
  node: PropertyDefinitionList,
  properties: (SpreadProperty | PropertyDefinition | IdentifierReference | CoverInitializedName)[]
): PropertyDefinitionList {
  return node.properties !== properties
    ? updateNode(
        createPropertyDefinitionList(properties, node.trailingComma, node.multiline, node.flags, node.start, node.end),
        node
      )
    : node;
}
