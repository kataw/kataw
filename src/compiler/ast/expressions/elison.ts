import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';

/**
 * Elison
 *
 * - https://tc39.es/ecma262/#prod-ArrayLiteral
 * - https://tc39.es/ecma262/#prod-ArrayAssignmentPattern
 * - https://tc39.es/ecma262/#prod-ArrayBindingPattern
 *
 */

export type Elison = Node;

export function createElison(flags: NodeFlags, start: number, end: number): Elison {
  return {
    kind: NodeKind.Elison,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
