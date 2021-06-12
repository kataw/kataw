import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';

export interface ObjectType extends SyntaxNode {
  readonly properties: any[];
  readonly trailingComma: boolean;
}

export function createObjectType(
  properties: any[],
  trailingComma: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): ObjectType {
  return {
    kind: SyntaxKind.ObjectType,
    properties,
    trailingComma,
    flags,
    start,
    end
  };
}
