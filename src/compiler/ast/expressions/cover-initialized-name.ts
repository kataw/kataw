import { AccessModifiers } from './../types/access-modifiers';
import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { AssignmentExpression } from './assignment-expr';
import { IdentifierReference } from './identifier-reference';

/**
 * Cover initialized name
 */
export interface CoverInitializedName extends Node {
  readonly identifierReference: IdentifierReference;
  readonly optional: boolean;
  readonly exclamation: boolean;
  readonly initializer: AssignmentExpression;
  readonly accessModifiers: AccessModifiers;
}

export function createCoverInitializedName(
  identifierReference: IdentifierReference,
  optional: boolean,
  exclamation: boolean,
  initializer: AssignmentExpression,
  accessModifiers: AccessModifiers,
  flags: NodeFlags,
  start: number,
  end: number
): CoverInitializedName {
  return {
    kind: NodeKind.CoverInitializedName,
    identifierReference,
    optional,
    exclamation,
    initializer,
    accessModifiers,
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
  identifierReference: IdentifierReference,
  initializer: AssignmentExpression
): CoverInitializedName {
  return node.identifierReference !== identifierReference || node.initializer !== initializer
    ? updateNode(
        createCoverInitializedName(
          identifierReference,
          node.optional,
          node.exclamation,
          initializer,
          node.accessModifiers,
          node.flags,
          node.start,
          node.end
        ),
        node
      )
    : node;
}
