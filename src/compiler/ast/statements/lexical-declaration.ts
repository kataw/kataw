import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { BindingList } from '../statements/binding-list';
import { updateNode } from '../../utils';

/**
 * Lexical declaration statement
 */
export interface LexicalDeclaration extends Node {
  readonly binding: BindingList;
  readonly isConst: boolean;
}

export function createLexicalDeclaration(
  isConst: boolean,
  binding: BindingList,
  flags: NodeFlags,
  start: number,
  end: number
): LexicalDeclaration {
  return {
    kind: NodeKind.LexicalDeclaration,
    isConst,
    binding,
    flags,
    intersects: false,
    transformFlags:
      TransformFlags.HoistedDeclarationOrCompletion |
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
  binding: BindingList
): LexicalDeclaration {
  return node.binding !== binding
    ? updateNode(createLexicalDeclaration(isConst, binding, node.flags, node.start, node.end), node)
    : node;
}
