import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SpreadProperty } from './spread-property';
import { Identifier } from './identifier-expr';
import { CoverInitializedName } from './cover-initialized-name';
import { PropertyDefinition } from './property-definition';
import { MethodDefinition } from './method-definition';

/**
 * PropertyDefinitionList.
 */
export type Properties = SpreadProperty | MethodDefinition | PropertyDefinition | Identifier | CoverInitializedName;

export interface PropertyDefinitionList extends SyntaxNode {
  readonly properties: Properties[];
  readonly trailingComma: boolean;
  readonly multiline: boolean;
}

export function createPropertyDefinitionList(
  properties: Properties[],
  trailingComma: boolean,
  multiline: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): PropertyDefinitionList {
  return {
    kind: SyntaxKind.PropertyDefinitionList,
    properties,
    trailingComma,
    multiline,
    flags,
    start,
    end
  };
}
