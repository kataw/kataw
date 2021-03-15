import { IdentifierName } from './identifier-name';
import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';

/**
 * New target expression.
 */
export interface NewTarget extends Node {
  readonly name: IdentifierName;
}

export function createNewTarget(name: IdentifierName, flags: NodeFlags, start: number, end: number): NewTarget {
  return {
    kind: NodeKind.NewTarget,
    name,
    flags,
    symbol: null,
    transformFlags: TransformFlags.ES2015,
    start,
    end
  };
}
