import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { ObjectLiteral } from './object-literal';
import { ObjectBindingPattern } from './object-binding-pattern';
import { ClassDeclaration } from '../statements/class-declaration';
import { ClassExpression } from './class-expr';
import { MethodName } from '.';
import { FormalParameter } from './formal-parameter';
import { FunctionBody } from './function-body';
import { PropertyKind } from '../../parser/common';
import { FormalParameterList } from './formal-parameter-list';
import { TypeParameters } from '../types/type-parameter-list';
import { TypeNode } from '../types';
import { DecoratorList } from './decorator-list';
import { AccessModifier } from '../types/access-modifier';

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
  readonly decorators: DecoratorList;
  readonly accessModifier: AccessModifier | null;
  readonly typeParameters: TypeParameters | null;
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
  accessModifier: AccessModifier | null,
  typeParameters: TypeParameters | null,
  type: TypeNode | null,
  contents: FunctionBody | null,
  decorators: DecoratorList,
  start: number,
  end: number
): MethodDefinition {
  let transformFlags = TransformFlags.None;

  if (accessModifier) transformFlags |= TransformFlags.TypeScript;

  if (typeParameters) transformFlags |= TransformFlags.TypeScript;

  if (propertyKind & PropertyKind.Async) {
    transformFlags |= propertyKind & PropertyKind.Generator ? TransformFlags.ES2018 : TransformFlags.ES2017;
  }

  if (propertyKind & PropertyKind.Generator) transformFlags |= TransformFlags.TypeScript;

  if (propertyKind & PropertyKind.Abstract) flags |= NodeFlags.Abstract;

  if (propertyKind & PropertyKind.Constructor) flags |= NodeFlags.Constructor;

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
    decorators,
    type,
    accessModifier,
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
  accessModifier: AccessModifier | null,
  typeParameters: TypeParameters | null,
  type: TypeNode | null,
  contents: FunctionBody | null,
  decorators: DecoratorList
): MethodDefinition {
  let propertyKind = PropertyKind.None;
  if (isGenerator) propertyKind |= PropertyKind.Generator;
  if (isAsync) propertyKind |= PropertyKind.Async;
  return node.propertySetParameterList !== propertySetParameterList ||
    node.uniqueFormalParameters !== uniqueFormalParameters ||
    node.name !== name ||
    node.accessModifier !== accessModifier ||
    node.typeParameters !== typeParameters ||
    node.type !== type ||
    node.contents !== contents ||
    node.decorators !== decorators
    ? updateNode(
        createMethodDefinition(
          NodeFlags.None,
          propertyKind,
          propertySetParameterList,
          uniqueFormalParameters,
          name,
          accessModifier,
          typeParameters,
          type,
          contents,
          decorators,
          node.start,
          node.end
        ),
        node
      )
    : node;
}
