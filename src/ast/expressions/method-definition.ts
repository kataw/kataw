import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { FunctionBody } from './function-body';
import { FormalParameterList } from './formal-parameter-list';
import { TypeNode } from '../types';
import { TypeParameter } from '../types/type-parameter';
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
  readonly formalParameters: FormalParameterList | null;
  readonly name: MethodName;
  readonly contents: FunctionBody | null;
  readonly typeParameters: TypeParameter | null;
  readonly type: TypeNode | null;
}

export function createMethodDefinition(
  name: MethodName,
  typeParameters: TypeParameter | null,
  formalParameters: FormalParameterList | null,
  type: TypeNode | null,
  contents: FunctionBody | null,
  flags: NodeFlags,
  start: number,
  end: number
): MethodDefinition {
  return {
    kind: SyntaxKind.MethodDefinition,
    name,
    typeParameters,
    formalParameters,
    type,
    contents,
    flags,
    start,
    end
  };
}
