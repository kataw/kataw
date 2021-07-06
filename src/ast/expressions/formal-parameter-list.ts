import { SyntaxNode, SyntaxKind, NodeFlags , TransformFlags} from '../syntax-node';
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
  readonly formalParameters: readonly FormalParameter[];
  readonly trailingComma: boolean;
}

export function createFormalParameterList(
  formalParameters: readonly FormalParameter[],
  trailingComma: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): FormalParameterList {
  return {
    kind: SyntaxKind.FormalParameterList,
    formalParameters,
    trailingComma,
    flags,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
