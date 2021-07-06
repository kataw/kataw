import { SyntaxNode, SyntaxKind, NodeFlags , TransformFlags} from '../syntax-node';
import { SpreadProperty } from './spread-property';
import { Identifier } from './identifier-expr';
import { CoverInitializedName } from './cover-initialized-name';
import { PropertyDefinition } from './property-definition';
import { PropertyMethod } from './property-method';
/**
 * PropertyDefinitionList.
 */
export type Properties = SpreadProperty | PropertyMethod | PropertyDefinition | Identifier | CoverInitializedName;

export interface PropertyDefinitionList extends SyntaxNode {
  readonly properties: Properties[];
  readonly trailingComma: boolean;
}

export function createPropertyDefinitionList(
  properties: Properties[],
  trailingComma: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): PropertyDefinitionList {
  return {
    kind: SyntaxKind.PropertyDefinitionList,
    properties,
    trailingComma,
    flags,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
