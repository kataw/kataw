import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { TypeParameterDeclaration } from './type-parameter-declaration';

export interface FunctionType extends SyntaxNode {
  readonly parameters: any;
  readonly returnType: any;
  readonly typeParameters: TypeParameterDeclaration | null;
}

export function createFunctionType(
  parameters: any,
  returnType: any,
  typeParameters: TypeParameterDeclaration | null,
  start: number,
  end: number
): FunctionType {
  return {
    kind: SyntaxKind.FunctionType,
    parameters,
    returnType,
    typeParameters,
    flags: NodeFlags.None,
    start,
    end
  };
}
