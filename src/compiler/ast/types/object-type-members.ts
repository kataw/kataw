import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { CallSignatureDeclaration } from './call-signature-declaration';
import { ConstructSignatureDeclaration } from './construct-signature-declaration';
import { PropertySignature } from './property-signature';
import { IndexSignature } from './index-signature';

/**
 * ObjectTypeMembers
 */

export type TypeMembers = CallSignatureDeclaration | ConstructSignatureDeclaration | PropertySignature | IndexSignature;

export interface ObjectTypeMembers extends Node {
  readonly members: readonly TypeMembers[];
}

export function createObjectTypeMembers(
  members: readonly TypeMembers[],
  start: number,
  end: number
): ObjectTypeMembers {
  return {
    kind: NodeKind.ObjectTypeMembers,
    members,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
