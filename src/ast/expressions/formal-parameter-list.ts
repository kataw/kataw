import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { BindingElement } from './binding-element';

export interface FormalParameterList extends SyntaxNode {
  readonly formalParameterList: readonly BindingElement[];
  readonly trailingComma: boolean;
}

export function createFormalParameterList(
  formalParameterList: readonly BindingElement[],
  trailingComma: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): FormalParameterList {
  return {
    kind: SyntaxKind.FormalParameterList,
    formalParameterList,
    trailingComma,
    flags,
    start,
    end
  };
}
