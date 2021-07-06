import { SyntaxNode, SyntaxKind, NodeFlags , TransformFlags} from '../syntax-node';
import { CoverInitializedName } from './cover-initialized-name';
import { Identifier } from './identifier-expr';
import { MethodDefinition } from './method-definition';
import { SpreadProperty } from './spread-property';
import { PropertyDefinitionList } from './property-definition-list';

/**
 * ObjectLiteral.
 *
 * https://tc39.es/ecma262/#prod-PropertyDefinition
 */

export type Properties = Identifier | CoverInitializedName | MethodDefinition | SpreadProperty;

export interface ObjectLiteral extends SyntaxNode {
  readonly propertyList: PropertyDefinitionList;
}

export function createObjectLiteral(
  propertyList: PropertyDefinitionList,
  flags: NodeFlags,
  start: number,
  end: number
): ObjectLiteral {
  return {
    kind: SyntaxKind.ObjectLiteral,
    propertyList,
    flags,
    transformFlags: TransformFlags.ArrayOrObjectLiteral,
    start,
    end
  };
}
