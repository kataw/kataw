import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';

export interface ObjectType extends SyntaxNode {
  kind: SyntaxKind.ObjectType;
  properties: any[];
  indexers: any[];
  callProperties: any[];
  internalSlots: any[];
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
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.None,
    start,
    end
  };
}
