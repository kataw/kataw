import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';

export interface ObjectType extends SyntaxNode {
  readonly properties: any[];
}

export function createObjectType(properties: any[], start: number, end: number): ObjectType {
  return {
    kind: SyntaxKind.ObjectType,
    properties,
    flags: NodeFlags.None,
    start,
    end
  };
}
