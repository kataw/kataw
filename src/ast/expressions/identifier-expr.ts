import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';

export interface Identifier extends SyntaxNode {
  readonly text: string;
  readonly rawText: string;
}

export function createIdentifier(
  text: string,
  rawText: string,
  flags: NodeFlags,
  start: number,
  end: number
): Identifier {
  return {
    kind: SyntaxKind.Identifier,
    text,
    rawText,
    flags,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
