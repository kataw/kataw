import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { TypeParameterList } from './type-parameter-list';

export interface FunctionType extends SyntaxNode {
  readonly parameters: any;
  readonly returnType: any;
  readonly typeParameters: TypeParameterList | null;
}

export function createFunctionType(
  parameters: any,
  returnType: any,
  typeParameters: TypeParameterList | null,
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
