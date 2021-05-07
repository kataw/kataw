import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';

/**
 * Template tail
 */
export interface TemplateTail extends SyntaxNode {
  readonly rawText: string;
  readonly text: string;
}

export function createTemplateTail(
  rawText: string,
  text: string,
  flags: NodeFlags,
  start: number,
  end: number
): TemplateTail {
  return {
    kind: SyntaxKind.TemplateTail,
    text,
    rawText,
    flags,
    start,
    end
  };
}
