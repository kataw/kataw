import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { BindingList } from '../statements/binding-list';

import { updateNode } from '../../../visitor/common';

/**
 * Lexical declaration statement
 */
export interface LexicalDeclaration extends Node {
  readonly bindingList: BindingList;
  readonly isConst: boolean;
  readonly isDeclared: boolean;
}

export function createLexicalDeclaration(
  isConst: boolean,
  bindingList: BindingList,
  isDeclared: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): LexicalDeclaration {
  return {
    kind: NodeKind.LexicalDeclaration,
    isConst,
    bindingList,
    isDeclared,
    flags,
    intersects: false,
    transformFlags:
      TransformFlags.HoistedDeclarationOrCompletion |
      (isDeclared ? TransformFlags.TypeScript : TransformFlags.None) |
      (flags & NodeFlags.BlockScoped ? TransformFlags.ES2015 | TransformFlags.BlockScopedBinding : TransformFlags.None),
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateLexicalDeclaration(
  node: LexicalDeclaration,
  isConst: boolean,
  bindingList: BindingList
): LexicalDeclaration {
  return node.bindingList !== bindingList
    ? updateNode(
        createLexicalDeclaration(isConst, bindingList, node.isDeclared, node.flags, node.start, node.end),
        node
      )
    : node;
}
