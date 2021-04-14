import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { BindingList } from './binding-list';

/**
 * Lexical declaration statement
 */
export interface LexicalDeclaration extends SyntaxNode {
  readonly lexicalKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly binding: BindingList;
}

export function createLexicalDeclaration(
  lexicalKeyword: SyntaxToken<TokenSyntaxKind>,
  binding: BindingList,
  start: number,
  end: number
): LexicalDeclaration {
  return {
    kind: SyntaxKind.LexicalDeclaration,
    lexicalKeyword,
    binding,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
