import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { FunctionBody } from './function-body';
import { FormalParameterList } from './formal-parameter-list';
import { TypeNode } from '../types';
import { TypeParameter } from '../types/type-parameter';

/**
 * Method definition.
 */
export interface MethodDefinition extends SyntaxNode {
  readonly formalParameters: FormalParameterList | null;
  readonly name: any;
  readonly contents: FunctionBody | null;
  readonly typeParameters: TypeParameter | null;
  readonly type: TypeNode | null;
}

export function createMethodDefinition(
  name: any,
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
    autofix: AutoFix.NotFixable,
    flags,
    start,
    end
  };
}
