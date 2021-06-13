import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { FunctionTypeParameter } from './function-type-parameter';

export interface ArrowTypeParameterList extends SyntaxNode {
  readonly parameters: readonly FunctionTypeParameter[];
  readonly trailingComma: boolean;
}

export function createArrowTypeParameterList(
  parameters: readonly FunctionTypeParameter[],
  trailingComma: boolean,
  start: number,
  end: number
): ArrowTypeParameterList {
  return {
    kind: SyntaxKind.ArrowTypeParameterList,
    parameters,
    trailingComma,
    flags: NodeFlags.IsTypeNode,
    start,
    end
  };
}
