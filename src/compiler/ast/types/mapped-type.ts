import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { TypeNode } from '.';
import { TypeParameter } from './type-parameter';

/**
 * MappedType
 */

export interface MappedType extends Node {
  readonly typeParameter: TypeParameter;
  readonly nameType: TypeNode | null;
  readonly readonly: boolean;
  readonly plus: boolean;
  readonly minus: boolean;
  readonly optional: boolean;
  readonly type: TypeNode | null;
}

export function createMappedType(
  typeParameter: TypeParameter,
  nameType: TypeNode | null,
  readonly: boolean,
  plus: boolean,
  minus: boolean,
  optional: boolean,
  type: TypeNode | null,
  flags: NodeFlags,
  start: number,
  end: number
): MappedType {
  return {
    kind: NodeKind.MappedType,
    typeParameter,
    nameType,
    readonly,
    plus,
    minus,
    optional,
    type,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateMappedType(
  node: MappedType,
  typeParameter: TypeParameter,
  nameType: TypeNode | null,
  type: TypeNode | null
): MappedType {
  return node.typeParameter !== typeParameter || node.nameType !== nameType
    ? updateNode(
        createMappedType(
          typeParameter,
          nameType,
          node.readonly,
          node.plus,
          node.minus,
          node.optional,
          type,
          node.flags,
          node.start,
          node.end
        ),
        node
      )
    : node;
}
