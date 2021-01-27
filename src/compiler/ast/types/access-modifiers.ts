import { Node, NodeFlags, NodeKind, TransformFlags, AccessModifiers1, AccessModifierTypes } from '../node';
import { updateNode } from '../../utils';

/**
 * AccessModifiers
 */

export type AccessModifiers = Node;

export function createAccessModifiers(accessModifiers: AccessModifiers1, start: number, end: number): any {
  return {
    kind: AccessModifierTypes[accessModifiers],
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
