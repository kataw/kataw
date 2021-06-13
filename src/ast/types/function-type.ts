import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { TypeParameterDeclaration } from './type-parameter-declaration';
import { TypeNode } from './';

export interface FunctionType extends SyntaxNode {
  readonly parameters: any;
  readonly returnType: TypeNode;
  readonly typeParameters: TypeParameterDeclaration | null;
}

export function createFunctionType(
  parameters: any,
  returnType: TypeNode,
  typeParameters: TypeParameterDeclaration | null,
  start: number,
  end: number
): FunctionType {
  return {
    kind: SyntaxKind.FunctionType,
    parameters,
    returnType,
    typeParameters,
    flags: NodeFlags.IsTypeNode,
    start,
    end
  };
}
