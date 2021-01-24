import { BindingIdentifier } from './binding-identifier';
import { ArrayBindingPattern } from './array-binding-pattern';
import { ObjectBindingPattern } from './object-binding-pattern';
import { Node, NodeKind, NodeFlags, TransformFlags, AccessModifiers } from '../node';
import { updateNode } from '../../utils';
import { TypeParameters } from '../types/type-parameter-list';
import { TypeNode } from '../types';

export type ArrowFormals = BindingIdentifier | ArrayBindingPattern | ObjectBindingPattern;

export interface ArrowParameters extends Node {
  readonly typeParameters: TypeParameters;
  readonly elements: readonly ArrowFormals[];
  readonly type: TypeNode | null;
  readonly accessModifiers: AccessModifiers;
  readonly trailingComma: boolean;
}

export function createArrowParameters(
  typeParameters: TypeParameters,
  elements: readonly ArrowFormals[],
  type: TypeNode | null,
  accessModifiers: AccessModifiers,
  trailingComma: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): ArrowParameters {
  return {
    kind: NodeKind.ArrowParameters,
    typeParameters,
    elements,
    type,
    accessModifiers,
    trailingComma,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateArrowParameters(
  node: ArrowParameters,
  typeParameters: any,
  elements: readonly ArrowFormals[],
  type: TypeNode | null
): ArrowParameters {
  return node.typeParameters !== typeParameters || node.elements !== elements || node.type !== type
    ? updateNode(
        createArrowParameters(
          typeParameters,
          elements,
          type,
          node.accessModifiers,
          node.trailingComma,
          node.flags,
          node.start,
          node.end
        ),
        node
      )
    : node;
}
