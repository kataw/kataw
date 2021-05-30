import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { BindingElement } from './binding-element';
import { Identifier } from './identifier-expr';
import { ArrayBindingPattern } from './array-binding-pattern';
import { ObjectBindingPattern } from './object-binding-pattern';
import { DummyIdentifier } from '../internal/dummy-identifier';

export type FormalParameter =
  | BindingElement
  | DummyIdentifier
  | Identifier
  | ArrayBindingPattern
  | ObjectBindingPattern;

export interface FormalParameterList extends SyntaxNode {
  readonly formalParameterList: readonly FormalParameter[];
  readonly trailingComma: boolean;
}

export function createFormalParameterList(
  formalParameterList: readonly FormalParameter[],
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
