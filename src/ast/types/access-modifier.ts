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
    symbol: null,
    transformFlags: TransformFlags.TypeScript,
    start,
    end
  };
}
