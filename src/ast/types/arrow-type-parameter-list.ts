import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { ArrowTypeParameter } from './arrow-type-parameter';

export interface ArrowTypeParameterList extends SyntaxNode {
  readonly parameters: readonly ArrowTypeParameter[];
  readonly trailingComma: boolean;
}

export function createArrowTypeParameterList(
  parameters: readonly ArrowTypeParameter[],
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
