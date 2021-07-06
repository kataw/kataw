import { SyntaxNode, SyntaxKind, NodeFlags , TransformFlags} from '../syntax-node';
import { FunctionBody } from './function-body';
import { FormalParameterList } from './formal-parameter-list';
import { TypeNode } from '../types';
import { TypeParameterDeclaration } from '../types/type-parameter-declaration';
import { ComputedPropertyName } from './computed-property-name';
import { Identifier } from './identifier-expr';
import { StringLiteral } from './string-literal';
import { NumericLiteral } from './numeric-literal';
import { BigIntLiteral } from './big-int-literal';
import { PrivateIdentifier } from './private-identifier';

/**
 * Method definition.
 */

export type MethodName =
  | ComputedPropertyName
  | Identifier
  | StringLiteral
  | BigIntLiteral
  | NumericLiteral
  | PrivateIdentifier;

export interface MethodDefinition extends SyntaxNode {
  readonly typeParameters: TypeParameterDeclaration | null;
  readonly formalParameterList: FormalParameterList;
  readonly name: MethodName;
  readonly contents: FunctionBody;
  readonly returnType: TypeNode | null;
}

export function createMethodDefinition(
  name: MethodName,
  typeParameters: TypeParameterDeclaration | null,
  formalParameterList: FormalParameterList,
  returnType: TypeNode | null,
  contents: FunctionBody,
  flags: NodeFlags,
  start: number,
  end: number
): MethodDefinition {
  return {
    kind: SyntaxKind.MethodDefinition,
    name,
    typeParameters,
    formalParameterList,
    returnType,
    contents,
    flags,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
