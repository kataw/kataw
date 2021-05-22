import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { TypeParameter } from './type-parameter';

export interface TypeParameterList extends SyntaxNode {
  readonly typeParameters: readonly TypeParameter[];
}

export function createTypeParameterList(
  typeParameters: readonly TypeParameter[],
  start: number,
  end: number
): TypeParameterList {
  return {
    kind: SyntaxKind.TypeParameterList,
    typeParameters,
    flags: NodeFlags.None,
    start,
    end
  };
}
