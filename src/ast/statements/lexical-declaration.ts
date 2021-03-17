import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { BindingList } from '../statements/binding-list';
import { updateNode } from '../../utils';

/**
 * Lexical declaration statement
 */
export interface LexicalDeclaration extends Node {
  readonly binding: BindingList;
}

export function createLexicalDeclaration(
  binding: BindingList,
  flags: NodeFlags,
  start: number,
  end: number
): LexicalDeclaration {
  return {
    kind: NodeKind.LexicalDeclaration,
    binding,
    flags,
    symbol: null,
    transformFlags:
      TransformFlags.HoistedDeclarationOrCompletion |
      (flags & NodeFlags.BlockScoped ? TransformFlags.ES2015 | TransformFlags.BlockScopedBinding : TransformFlags.None),
    start,
    end
  };
}

export function updateLexicalDeclaration(
  node: LexicalDeclaration,
  binding: BindingList
): LexicalDeclaration {
  return node.binding !== binding
    ? updateNode(createLexicalDeclaration(binding, node.flags, node.start, node.end), node)
    : node;
}
