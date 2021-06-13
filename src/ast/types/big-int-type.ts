import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';

export interface BigIntType extends SyntaxNode {
  readonly text: number;
  readonly raw: string;
}

export function createBigIntType(text: number, raw: string, start: number, end: number): BigIntType {
  return {
    kind: SyntaxKind.BigIntType,
    text,
    raw,
    flags: NodeFlags.IsTypeNode | NodeFlags.ChildLess,
    start,
    end
  };
}
