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
  isConst: boolean,
  start: number,
  end: number
): BindingList {
  return {
    kind: SyntaxKind.BindingList,
    bindingList,
    flags: isConst ? NodeFlags.Const | NodeFlags.IsStatement : NodeFlags.IsStatement | NodeFlags.Lexical,
    start,
    end
  };
}
