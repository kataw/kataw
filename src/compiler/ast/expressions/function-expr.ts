import { BindingIdentifier } from './binding-identifier';
import { FunctionBody } from './function-body';
import { FormalParameterList } from './formal-parameter-list';
import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';

import { TypeParameters } from '../types/type-parameter-list';
import { TypeNode } from '../types';

/**
 * Function expression.
 */
export interface FunctionExpression extends Node {
  readonly name: BindingIdentifier | null;
  readonly formalParameters: FormalParameterList;
  readonly contents: FunctionBody;
  readonly typeParameters: TypeParameters | null;
  readonly type: TypeNode | null;
}

export function createFunctionExpression(
  name: BindingIdentifier | null,
  isGenerator: number,
  isAsync: number,
  formalParameters: FormalParameterList,
  contents: FunctionBody,
  typeParameters: TypeParameters | null,
  type: TypeNode | null,
  flags: NodeFlags,
  start: number,
  end: number
): FunctionExpression {
  let transformFlags = TransformFlags.None;

  if (isAsync) {
    transformFlags |= isGenerator ? TransformFlags.ES2018 : TransformFlags.ES2017;
  } else if (isGenerator) {
    transformFlags |= TransformFlags.Generator;
  }

  return {
    kind:
      isAsync && isGenerator
        ? // https://tc39.es/ecma262/#prod-AsyncGeneratorExpression
          NodeKind.AsyncGeneratorExpression
        : isAsync
        ? // https://tc39.es/ecma262/#prod-AsyncFunctionExpression
          NodeKind.AsyncFunctionExpression
        : isGenerator
        ? // https://tc39.es/ecma262/#prod-GeneratorExpression
          NodeKind.GeneratorExpression
        : // https://tc39.es/ecma262/#prod-FunctionExpression
          NodeKind.FunctionExpression,
    name,
    formalParameters,
    contents,
    typeParameters,
    type,
    flags,
    intersects: false,
    transformFlags,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateFunctionExpression(
  node: FunctionExpression,
  name: BindingIdentifier | null,
  isGenerator: number,
  isAsync: number,
  formalParameters: FormalParameterList,
  contents: FunctionBody,
  typeParameters: TypeParameters | null,
  type: TypeNode | null
): FunctionExpression {
  return node.name !== name ||
    node.formalParameters !== formalParameters ||
    node.contents !== contents ||
    node.typeParameters !== typeParameters ||
    node.type !== type
    ? updateNode(
        createFunctionExpression(
          name,
          isGenerator,
          isAsync,
          formalParameters,
          contents,
          typeParameters,
          type,
          node.flags,
          node.start,
          node.end
        ),
        node
      )
    : node;
}
