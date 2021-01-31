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
  readonly optional: boolean;
  readonly exclamation: boolean;
  readonly right: AssignmentExpression;
  readonly accessModifier: AccessModifier | null;
}

export function createCoverInitializedName(
  left: IdentifierReference,
  optional: boolean,
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
    optional,
    exclamation,
    right,
    accessModifier,
    flags,
    intersects: false,
    transformFlags: TransformFlags.ES2015,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateCoverInitializedName(
  node: CoverInitializedName,
  left: IdentifierReference,
  right: AssignmentExpression,
  accessModifier: AccessModifier | null
): CoverInitializedName {
  return node.left !== left || node.right !== right || node.accessModifier !== accessModifier
    ? updateNode(
        createCoverInitializedName(
          left,
          node.optional,
          node.exclamation,
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
