import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';

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
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.Synthetic | NodeFlags.HasErrors,
    start,
    end
  };
}
