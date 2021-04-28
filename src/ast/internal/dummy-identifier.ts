import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';

/**
 * Dummy identifier
 */
export interface DummyIdentifier extends SyntaxNode {
  readonly text: string;
  readonly start: number;
  readonly end: number;
}

export function createDummyIdentifier(start: number, end: number): DummyIdentifier {
  return {
    kind: SyntaxKind.DummyIdentifier,
    text: '',
    flags: NodeFlags.HasErrors | NodeFlags.ChildLess,
    start,
    end
  };
}
