import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { TypeNode } from './';
import { TypeParameters } from './type-parameter-list';
import { Parameters } from './parameters';
import { AccessModifier } from './access-modifier';

/**
 * ConstructorType
 */

export interface ConstructorType extends Node {
  readonly accessModifier: AccessModifier | null;
  readonly isAbstract: boolean;
  readonly isReadOnly: boolean;
  readonly typeParameters: TypeParameters | null;
  readonly parameters: Parameters;
  readonly returnType: TypeNode | null;
}

export function createConstructorType(
  isAbstract: boolean,
  isReadOnly: boolean,
  accessModifier: AccessModifier | null,
  typeParameters: TypeParameters | null,
  parameters: Parameters,
  returnType: TypeNode,
  flags: NodeFlags,
  start: number,
  end: number
): ConstructorType {
  return {
    kind: NodeKind.ConstructorType,
    isAbstract,
    isReadOnly,
    accessModifier,
    typeParameters,
    parameters,
    returnType,
    flags,
    symbol: null,
    transformFlags: TransformFlags.TypeScript,
    start,
    end
  };
}

export function updateConstructorType(
  node: ConstructorType,
  isAbstract: boolean,
  isReadOnly: boolean,
  accessModifier: AccessModifier | null,
  typeParameters: TypeParameters | null,
  parameters: Parameters,
  returnType: TypeNode
): ConstructorType {
  return node.isAbstract !== isAbstract ||
    node.isReadOnly !== isReadOnly ||
    node.accessModifier !== accessModifier ||
    node.typeParameters !== typeParameters ||
    node.parameters !== parameters ||
    node.returnType !== returnType
    ? updateNode(
        createConstructorType(
          isAbstract,
          isReadOnly,
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
