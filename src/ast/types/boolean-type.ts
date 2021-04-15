import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';

export interface BooleanType extends SyntaxNode {
  readonly text: boolean;
}

export function createBooleanType(text: boolean, start: number, end: number): BooleanType {
  return {
    kind: SyntaxKind.BooleanType,
    text,
    flags: NodeFlags.None,
    start,
    end
  };
}
