import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { TypeParameters } from '../types/type-parameter-list';
import { FunctionBody } from './function-body';
import { Expression } from './';
import { ArrowParameters } from './arrow-parameters';

export interface ArrowFunction extends Node {
  readonly typeParameters: TypeParameters | null;
  readonly arrowParameters: ArrowParameters;
  readonly contents: Expression | FunctionBody;
}

export function createArrowFunction(
  typeParameters: TypeParameters | null,
  arrowParameters: ArrowParameters,
  contents: Expression | FunctionBody,
  isAsync: boolean,
  isParenthesized: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): ArrowFunction {
  if (isParenthesized) flags |= NodeFlags.ParenthesizedArrow;
  return {
    kind: isAsync
      ? // https://tc39.es/ecma262/#prod-AsyncArrowFunction
        NodeKind.AsyncArrowFunction
      : // https://tc39.es/ecma262/#prod-ArrowFunction
        NodeKind.ArrowFunction,
    typeParameters,
    arrowParameters,
    contents,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}

export function updateArrowFunction(
  node: ArrowFunction,
  isAsync: boolean,
  isParenthesized: boolean,
  arrowParameters: ArrowParameters,
  contents: Expression | FunctionBody
): ArrowFunction {
  return node.arrowParameters !== arrowParameters || node.contents !== contents
    ? updateNode(
        createArrowFunction(
          node.typeParameters,
          arrowParameters,
          contents,
          isAsync,
          isParenthesized,
          node.flags,
          node.start,
          node.end
        ),
        node
      )
    : node;
}
