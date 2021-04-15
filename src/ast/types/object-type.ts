import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';

export interface ObjectType extends SyntaxNode {
  readonly properties: any[];
  readonly indexers: any[];
  readonly callProperties: any[];
  readonly internalSlots: any[];
}

export function createObjectType(
  properties: any[],
  indexers: any[],
  callProperties: any[],
  internalSlots: any[],
  start: number,
  end: number
): ObjectType {
  return {
    kind: SyntaxKind.ObjectType,
    properties,
    indexers,
    callProperties,
    internalSlots,
    flags: NodeFlags.None,
    start,
    end
  };
}
