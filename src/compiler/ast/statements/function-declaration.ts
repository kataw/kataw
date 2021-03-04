import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { BindingIdentifier } from '../expressions/binding-identifier';
import { FunctionBody } from '../expressions/function-body';
import { FormalParameterList } from '../expressions/formal-parameter-list';
import { TypeParameters } from '../types/type-parameter-list';
import { TypeNode } from '../types';
import { updateNode } from '../../utils';

/**
 * Function declaration.
 */
export interface FunctionDeclaration extends Node {
  readonly name: BindingIdentifier | null;
  readonly formalParameters: FormalParameterList;
  readonly contents: FunctionBody | null;
  readonly typeParameters: TypeParameters | null;
  readonly type: TypeNode | null;
}

export function createFunctionDeclaration(
  name: BindingIdentifier | null,
  isGenerator: number,
  isAsync: number,
  formalParameters: FormalParameterList,
  contents: FunctionBody | null,
  typeParameters: TypeParameters | null,
  type: TypeNode | null,
  flags: NodeFlags,
  start: number,
  end: number
): FunctionDeclaration {
  let transformFlags = TransformFlags.None;
  if (!contents) {
    transformFlags |= TransformFlags.TypeScript;
  } else {
    transformFlags |= TransformFlags.HoistedDeclarationOrCompletion;
    if (isAsync) {
      transformFlags |= isGenerator ? TransformFlags.ES2018 : TransformFlags.ES2017;
    } else if (isGenerator) {
      transformFlags |= TransformFlags.Generator;
    }
  }

  return {
    kind:
      isAsync && isGenerator
        ? // https://tc39.es/ecma262/#prod-AsyncGeneratorDeclaration
          NodeKind.AsyncGeneratorDeclaration
        : isAsync
        ? // https://tc39.es/ecma262/#prod-AsyncFunctionDeclaration
          NodeKind.AsyncFunctionDeclaration
        : isGenerator
        ? // https://tc39.es/ecma262/#prod-GeneratorDeclaration
          NodeKind.GeneratorDeclaration
        : // https://tc39.es/ecma262/#prod-FunctionDeclaration
          NodeKind.FunctionDeclaration,
    name,
    formalParameters,
    type,
    contents,
    typeParameters,
    flags,
    intersects: false,
    transformFlags,
    start,
    end
  };
}

export function updateFunctionDeclaration(
  node: FunctionDeclaration,
  isGenerator: number,
  isAsync: number,
  name: BindingIdentifier | null,
  formalParameters: FormalParameterList,
  contents: FunctionBody | null,
  typeParameters: TypeParameters | null,
  type: TypeNode | null
): FunctionDeclaration {
  return (node.kind !== NodeKind.AsyncGeneratorDeclaration && isGenerator && isAsync) ||
    (node.kind !== NodeKind.GeneratorDeclaration && isGenerator) ||
    (node.kind !== NodeKind.AsyncFunctionDeclaration && isAsync) ||
    node.name !== name ||
    node.name !== name ||
    node.name !== name ||
    node.formalParameters !== formalParameters ||
    node.contents !== contents ||
    node.typeParameters !== typeParameters ||
    node.type !== type
    ? updateNode(
        createFunctionDeclaration(
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
