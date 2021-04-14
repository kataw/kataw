import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { TypeParameter } from './type-parameter';

export interface FunctionType extends SyntaxNode {
  kind: SyntaxKind.FunctionType;
  parameters: any;
  returnType: any;
  typeParameters: TypeParameter | null;
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
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.None,
    start,
    end
  };
}
