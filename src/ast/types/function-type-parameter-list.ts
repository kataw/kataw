import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { FunctionTypeParameter } from './function-type-parameter';

export interface FunctionTypeParameterList extends SyntaxNode {
  readonly functionTypeParameterList: readonly FunctionTypeParameter[];
  readonly trailingComma: boolean;
}

export function createFunctionTypeParameterList(
  functionTypeParameterList: readonly FunctionTypeParameter[],
  trailingComma: boolean,
  start: number,
  end: number
): FunctionTypeParameterList {
  return {
    kind: SyntaxKind.FunctionTypeParameterList,
    functionTypeParameterList,
    trailingComma,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
