import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';

export interface StringType extends SyntaxNode {
  readonly text: string;
}

export function createStringType(text: string, start: number, end: number): StringType {
  return {
    kind: SyntaxKind.StringType,
    text,
    flags: NodeFlags.IsTypeNode | NodeFlags.ChildLess,
    start,
    end
  };
}
