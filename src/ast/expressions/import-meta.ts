import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';

/**
 * Import Meta
 */
export type ImportMeta = SyntaxNode;

export function createImportMeta(start: number, end: number): ImportMeta {
  return {
    kind: SyntaxKind.ImportMeta,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.ExpressionNode | NodeFlags.ChildLess,
    start,
    end
  };
}
