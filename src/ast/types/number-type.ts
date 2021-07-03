import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';

export interface NumberType extends SyntaxNode {
  readonly text: number;
  readonly rawText: string;
}

export function createNumberType(
  text: number,
  rawText: string,
  flags: NodeFlags,
  start: number,
  end: number
): NumberType {
  return {
    kind: SyntaxKind.NumberType,
    text,
    rawText,
    flags,
    start,
    end
  };
}
