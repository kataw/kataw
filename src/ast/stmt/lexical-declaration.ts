import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { BindingList } from './binding-list';

/**
 * Lexical declaration statement
 */
export interface LexicalDeclaration extends SyntaxNode {
  readonly binding: BindingList;
}

export function createLexicalDeclaration(binding: BindingList, start: number, end: number): LexicalDeclaration {
  return {
    kind: SyntaxKind.LexicalDeclaration,
    binding,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
