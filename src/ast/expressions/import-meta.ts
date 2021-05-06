import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';

/**
 * Import Meta
 */
export interface ImportMeta extends SyntaxNode {
  readonly importKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly metaIdentifier: SyntaxToken<TokenSyntaxKind>;
}

export function createImportMeta(
  importKeyword: SyntaxToken<TokenSyntaxKind>,
  metaIdentifier: SyntaxToken<TokenSyntaxKind>,
  flags: NodeFlags,
  start: number,
  end: number
): ImportMeta {
  return {
    kind: SyntaxKind.ImportMeta,
    importKeyword,
    metaIdentifier,
    flags,
    start,
    end
  };
}
