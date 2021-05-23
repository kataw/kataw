import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { LexicalBinding } from './lexical-binding';

/**
 * Binding list
 */

export interface BindingList extends SyntaxNode {
  readonly bindingList: LexicalBinding[];
}

export function createBindingList(
  bindingList: LexicalBinding[],
  flags: NodeFlags,
  start: number,
  end: number
): BindingList {
  return {
    kind: SyntaxKind.BindingList,
    bindingList,
    flags: flags | NodeFlags.IsStatement,
    start,
    end
  };
}
