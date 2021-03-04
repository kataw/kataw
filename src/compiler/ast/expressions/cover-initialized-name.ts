import { AccessModifier } from '../types/access-modifier';
import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { AssignmentExpression } from './assignment-expr';
import { IdentifierReference } from './identifier-reference';

/**
 * Cover initialized name
 */
export interface CoverInitializedName extends Node {
  readonly left: IdentifierReference;
  readonly isOptional: boolean;
  readonly exclamation: boolean;
  readonly right: AssignmentExpression;
  readonly accessModifier: AccessModifier | null;
}

export function createCoverInitializedName(
  left: IdentifierReference,
  isOptional: boolean,
  exclamation: boolean,
  right: AssignmentExpression,
  accessModifier: AccessModifier | null,
  flags: NodeFlags,
  start: number,
  end: number
): CoverInitializedName {
  return {
    kind: NodeKind.CoverInitializedName,
    left,
    isOptional,
    exclamation,
    right,
    accessModifier,
    flags,
    intersects: false,
    transformFlags: TransformFlags.ES2015,
    start,
    end
  };
}

export function updateCoverInitializedName(
  node: CoverInitializedName,
  left: IdentifierReference,
  right: AssignmentExpression,
  accessModifier: AccessModifier | null,
  isOptional: boolean,
  exclamation: boolean
): CoverInitializedName {
  return node.left !== left ||
    node.right !== right ||
    node.accessModifier !== accessModifier ||
    node.isOptional !== isOptional ||
    node.exclamation !== exclamation
    ? updateNode(
        createCoverInitializedName(
          left,
          isOptional,
          exclamation,
          right,
          accessModifier,
          node.flags,
          node.start,
          node.end
        ),
        node
      )
    : node;
}
