import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { TypeArguments } from '../types/type-arguments';
import { Expression } from '.';
import { updateNode } from '../../utils';

/**
 * ClassHeritage
 */
export interface ClassHeritage extends Node {
  readonly expression: Expression;
  readonly typeArguments: TypeArguments | null;
}

export function createClassHeritage(
  expression: Expression,
  typeArguments: TypeArguments | null,
  flags: NodeFlags,
  start: number,
  end: number
): ClassHeritage {
  return {
    kind: NodeKind.ClassHeritage,
    expression,
    typeArguments,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateClassHeritage(
  node: ClassHeritage,
  expression: Expression,
  typeArguments: TypeArguments | null
): ClassHeritage {
  return node.expression !== expression || node.typeArguments !== typeArguments
    ? updateNode(createClassHeritage(expression, typeArguments, node.flags, node.start, node.end), node)
    : node;
}
