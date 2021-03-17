import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { TypeParameters } from '../types/type-parameter-list';
import { FunctionBody } from './function-body';
import { Expression } from './';
import { ArrowParameters } from './arrow-parameters';
import { BindingIdentifier } from './binding-identifier';

export interface ArrowFunction extends Node {
  readonly typeParameters: TypeParameters | null;
  readonly parameters: BindingIdentifier | ArrowParameters;
  readonly contents: Expression | FunctionBody;
}

export function createArrowFunction(
  typeParameters: TypeParameters | null,
  parameters: BindingIdentifier | ArrowParameters,
  contents: Expression | FunctionBody,
  isAsync: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): ArrowFunction {
  if (parameters.kind & NodeKind.IsIdentifier) flags |= NodeFlags.NoParenthesizedArrow;

  return {
    kind: isAsync
      ? // https://tc39.es/ecma262/#prod-AsyncArrowFunction
        NodeKind.AsyncArrowFunction
      : // https://tc39.es/ecma262/#prod-ArrowFunction
        NodeKind.ArrowFunction,
    typeParameters,
    parameters,
    contents,
    flags,
    symbol: null,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}

export function updateArrowFunction(
  node: ArrowFunction,
  isAsync: boolean,
  parameters: BindingIdentifier | ArrowParameters,
  contents: Expression | FunctionBody
): ArrowFunction {
  return node.parameters !== parameters || node.contents !== contents
    ? updateNode(
        createArrowFunction(node.typeParameters, parameters, contents, isAsync, node.flags, node.start, node.end),
        node
      )
    : node;
}
