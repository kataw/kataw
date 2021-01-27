import { Node, NodeFlags, NodeKind, TransformFlags, AccessModifiers, AccessModifierTypes } from '../node';
import { updateNode } from '../../utils';

/**
 * AccessModifier
 */

export type AccessModifier = Node;

export function createAccessModifier(accessModifiers: AccessModifiers, flags: NodeFlags, start: number, end: number): any {
  return {
    kind: AccessModifierTypes[accessModifiers],
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
