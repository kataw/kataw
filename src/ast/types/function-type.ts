import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { TypeParameter } from './type-parameter';

export interface FunctionType extends SyntaxNode {
  readonly parameters: any;
  readonly returnType: any;
  readonly typeParameters: TypeParameter | null;
}

export function createFunctionType(
  parameters: any,
  returnType: any,
  typeParameters: TypeParameter | null,
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
