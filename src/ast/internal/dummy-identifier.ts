import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';

/**
 * Dummy identifier
 */
export interface DummyIdentifier extends SyntaxNode {
  readonly text: string;
  readonly rawText: string;
}

export function createDummyIdentifier(start: number, end: number): DummyIdentifier {
  return {
    kind: SyntaxKind.DummyIdentifier,
    text: '',
    rawText: '',
    flags: NodeFlags.NoChildren,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
