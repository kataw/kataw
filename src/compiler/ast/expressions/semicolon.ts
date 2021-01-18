import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';

/**
 * Semicolon
 *
 * See: https://tc39.es/ecma262/#prod-ClassElement
 *
 */

export type Semicolon = Node;

export function createSemicolon(flags: NodeFlags, start: number, end: number): Semicolon {
  return {
    kind: NodeKind.Semicolon,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
