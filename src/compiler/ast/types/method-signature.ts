import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { PropertyName } from '../expressions';
import { TypeNode } from './';
import { TypeParameters } from './type-parameter-list';
import { Parameters } from './parameters';
import { AccessModifier } from './access-modifier';

/**
 * Method signature
 */

export interface MethodSignature extends Node {
  readonly name: PropertyName;
  readonly optional: boolean;
  readonly readonly: boolean;
  readonly accessModifier: AccessModifier | null;
  readonly typeParameters: TypeParameters | null;
  readonly parameters: Parameters;
  readonly returnType: TypeNode | null;
}

export function createMethodSignature(
  name: PropertyName,
  optional: boolean,
  readonly: boolean,
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
    readonly,
    optional,
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
  accessModifier: AccessModifier | null,
  node: MethodSignature,
  name: PropertyName,
  typeParameters: TypeParameters | null,
  parameters: Parameters,
  returnType: TypeNode | null
): MethodSignature {
  return node.name !== name ||
    node.typeParameters !== typeParameters ||
    node.parameters !== parameters ||
    node.returnType !== returnType ||
    node.accessModifier !== accessModifier
    ? updateNode(
        createMethodSignature(
          name,
          node.optional,
          node.readonly,
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
