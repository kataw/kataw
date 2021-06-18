import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';

/**
 * Dummy identifier
 */
export interface DummyIdentifier extends SyntaxNode {
  readonly text: string;
}

export function createDummyIdentifier(start: number, end: number): DummyIdentifier {
  return {
    kind: SyntaxKind.DummyIdentifier,
    text: '',
    flags: NodeFlags.ChildLess,
    start,
    end
  };
}
