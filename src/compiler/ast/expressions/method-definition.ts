import { Node, NodeKind, NodeFlags, TransformFlags, AccessModifiers } from '../node';
import { updateNode } from '../../utils';
import { ObjectLiteral } from './object-literal';
import { ObjectBindingPattern } from './object-binding-pattern';
import { ClassDeclaration } from './../declarations/class-declaration';
import { ClassExpression } from './class-expr';
import { MethodName } from '.';
import { FormalParameter } from './formal-parameter';
import { FunctionBody } from './function-body';
import { PropertyKind } from '../../parser/common';
import { FormalParameterList } from './formal-parameter-list';
import { TypeParameters } from '../types/type-parameter-list';
import { TypeNode } from '../types';

/**
 * Method definition.
 */
export interface MethodDefinition extends Node {
  readonly propertySetParameterList: FormalParameter | null;
  readonly uniqueFormalParameters: FormalParameterList | null;
  readonly name: MethodName;
  readonly isGetter: boolean;
  readonly isSetter: boolean;
  readonly contents: FunctionBody | null;
  readonly accessModifiers: AccessModifiers;
  readonly typeParameters: TypeParameters;
  readonly type: TypeNode | null;
  /* @internal*/
  readonly parent: ClassExpression | ClassDeclaration | ObjectBindingPattern | ObjectLiteral | null;
}

export function createMethodDefinition(
  flags: NodeFlags,
  propertyKind: PropertyKind,
  propertySetParameterList: FormalParameter | null,
  uniqueFormalParameters: FormalParameterList | null,
  name: MethodName,
  accessModifiers: AccessModifiers,
  typeParameters: TypeParameters,
  type: TypeNode | null,
  contents: FunctionBody | null,
  start: number,
  end: number
): MethodDefinition {
  let transformFlags = TransformFlags.None;

  if (accessModifiers) transformFlags |= TransformFlags.TypeScript;

  if (typeParameters) transformFlags |= TransformFlags.TypeScript;

  if (propertyKind & PropertyKind.Async) {
    transformFlags |= propertyKind & PropertyKind.Generator ? TransformFlags.ES2018 : TransformFlags.ES2017;
  }

  if (propertyKind & PropertyKind.Generator) transformFlags |= TransformFlags.TypeScript;

  return {
    kind:
      propertyKind & PropertyKind.Async && propertyKind & PropertyKind.Generator
        ? // https://tc39.es/ecma262/#prod-AsyncGeneratorMethod
          NodeKind.AsyncGeneratorMethod
        : propertyKind & PropertyKind.Async
        ? // https://tc39.es/ecma262/#prod-AsyncMethod
          NodeKind.AsyncMethod
        : propertyKind & PropertyKind.Generator
        ? // https://tc39.es/ecma262/#prod-GeneratorMethod
          NodeKind.GeneratorMethod
        : // https://tc39.es/ecma262/#prod-MethodDefinition
          NodeKind.MethodDefinition,
    name,
    propertySetParameterList,
    uniqueFormalParameters,
    isSetter: (propertyKind & PropertyKind.Setter) !== 0,
    isGetter: (propertyKind & PropertyKind.Getter) !== 0,
    contents,
    type,
    accessModifiers,
    typeParameters,
    flags,
    intersects: false,
    transformFlags,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateMethodDefinition(
  node: MethodDefinition,
  isGenerator: boolean,
  isAsync: boolean,
  propertySetParameterList: FormalParameter | null,
  uniqueFormalParameters: FormalParameterList | null,
  name: MethodName,
  typeParameters: TypeParameters,
  type: TypeNode | null,
  contents: FunctionBody | null
): MethodDefinition {
  let propertyKind = PropertyKind.None;
  if (isGenerator) propertyKind |= PropertyKind.Generator;
  if (isAsync) propertyKind |= PropertyKind.Async;
  return node.propertySetParameterList !== propertySetParameterList ||
    node.uniqueFormalParameters !== uniqueFormalParameters ||
    node.name !== name ||
    node.typeParameters !== typeParameters ||
    node.type !== type ||
    node.contents !== contents
    ? updateNode(
        createMethodDefinition(
          NodeFlags.None,
          propertyKind,
          propertySetParameterList,
          uniqueFormalParameters,
          name,
          node.accessModifiers,
          typeParameters,
          type,
          contents,
          node.start,
          node.end
        ),
        node
      )
    : node;
}
