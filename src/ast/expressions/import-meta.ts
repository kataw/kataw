import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';

/**
 * Import Meta
 */
export interface ImportMeta extends SyntaxNode {
  readonly importKeyword: SyntaxToken<TokenSyntaxKind>;
}

export function createImportMeta(importKeyword: SyntaxToken<TokenSyntaxKind>, start: number, end: number): ImportMeta {
  return {
    kind: SyntaxKind.ImportMeta,
    importKeyword,
    flags: NodeFlags.ExpressionNode | NodeFlags.ChildLess,
    start,
    end
  };
}
