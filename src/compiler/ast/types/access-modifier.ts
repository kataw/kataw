import { Node, NodeFlags, TransformFlags, AccessModifiers, AccessModifierTypes } from '../node';

/**
 * AccessModifier
 */

export type AccessModifier = Node;

export function createAccessModifier(
  accessModifier: AccessModifiers,
  flags: NodeFlags,
  start: number,
  end: number
): any {
  return {
    kind: AccessModifierTypes[accessModifier],
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    start,
    end
  };
}
