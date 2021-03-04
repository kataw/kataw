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
  readonly isReadOnly: boolean;
  readonly plus: boolean;
  readonly minus: boolean;
  readonly isOptional: boolean;
  readonly type: TypeNode | null;
}

export function createMappedType(
  typeParameter: TypeParameter,
  nameType: TypeNode | null,
  isReadOnly: boolean,
  plus: boolean,
  minus: boolean,
  isOptional: boolean,
  type: TypeNode | null,
  flags: NodeFlags,
  start: number,
  end: number
): MappedType {
  return {
    kind: NodeKind.MappedType,
    typeParameter,
    nameType,
    isReadOnly,
    plus,
    minus,
    isOptional,
    type,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    start,
    end
  };
}

export function updateMappedType(
  node: MappedType,
  typeParameter: TypeParameter,
  nameType: TypeNode | null,
  isReadOnly: boolean,
  plus: boolean,
  minus: boolean,
  isOptional: boolean,
  type: TypeNode | null
): MappedType {
  return node.typeParameter !== typeParameter ||
    node.nameType !== nameType ||
    node.isReadOnly !== isReadOnly ||
    node.plus !== plus ||
    node.minus !== minus ||
    node.isOptional !== isOptional
    ? updateNode(
        createMappedType(
          typeParameter,
          nameType,
          isReadOnly,
          plus,
          minus,
          isOptional,
          type,
          node.flags,
          node.start,
          node.end
        ),
        node
      )
    : node;
}
