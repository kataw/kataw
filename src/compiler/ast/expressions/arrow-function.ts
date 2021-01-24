import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';

import { FunctionBody } from './function-body';
import { Expression } from './';
import { ArrowParameters } from './arrow-parameters';

export interface ArrowFunction extends Node {
  readonly arrowParameters: ArrowParameters;
  readonly contents: Expression | FunctionBody;
  readonly isParenthesized: boolean;
}

export function createArrowFunction(
  arrowParameters: ArrowParameters,
  contents: Expression | FunctionBody,
  isAsync: boolean,
  isParenthesized: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): ArrowFunction {
  return {
    kind: isAsync
      ? // https://tc39.es/ecma262/#prod-AsyncArrowFunction
        NodeKind.AsyncArrowFunction
      : // https://tc39.es/ecma262/#prod-ArrowFunction
        NodeKind.ArrowFunction,
    arrowParameters,
    isParenthesized,
    contents,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateArrowFunction(
  node: ArrowFunction,
  isAsync: boolean,
  arrowParameters: ArrowParameters,
  contents: Expression | FunctionBody
): ArrowFunction {
  return node.arrowParameters !== arrowParameters || node.contents !== contents
    ? updateNode(
        createArrowFunction(arrowParameters, contents, isAsync, node.isParenthesized, node.flags, node.start, node.end),
        node
      )
    : node;
}
