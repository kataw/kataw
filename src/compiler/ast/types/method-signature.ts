import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { PropertyName } from '../expressions';
import { TypeNode } from './';
import { TypeParameters } from './type-parameter-list';
import { Parameters } from './parameters';
import { AccessModifier } from './access-modifier';
import { PropertyKind } from '../../parser/common';

/**
 * Method signature
 */

export interface MethodSignature extends Node {
  readonly name: PropertyName;
  readonly isOptional: boolean;
  readonly isReadOnly: boolean;
  readonly isStatic: boolean;
  readonly accessModifier: AccessModifier | null;
  readonly typeParameters: TypeParameters | null;
  readonly parameters: Parameters;
  readonly returnType: TypeNode | null;
}

export function createMethodSignature(
  name: PropertyName,
  isOptional: boolean,
  isReadOnly: boolean,
  isStatic: boolean,
  accessModifier: AccessModifier | null,
  typeParameters: TypeParameters | null,
  parameters: Parameters,
  returnType: TypeNode | null,
  flags: NodeFlags,
  start: number,
  end: number
): MethodSignature {
  return {
    kind: NodeKind.MethodSignature,
    name,
    isStatic,
    isReadOnly,
    isOptional,
    accessModifier,
    typeParameters,
    parameters,
    returnType,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateMethodSignature(
  node: MethodSignature,
  accessModifier: AccessModifier | null,
  name: PropertyName,
  isOptional: boolean,
  isReadOnly: boolean,
  typeParameters: TypeParameters | null,
  parameters: Parameters,
  returnType: TypeNode | null
): MethodSignature {
  return node.name !== name ||
    node.typeParameters !== typeParameters ||
    node.isOptional !== isOptional ||
    node.isReadOnly !== isReadOnly ||
    node.parameters !== parameters ||
    node.returnType !== returnType ||
    node.accessModifier !== accessModifier
    ? updateNode(
        createMethodSignature(
          name,
          isOptional,
          isReadOnly,
          node.isOptional,
          accessModifier,
          typeParameters,
          parameters,
          returnType,
          node.flags,
          node.start,
          node.end
        ),
        node
      )
    : node;
}
