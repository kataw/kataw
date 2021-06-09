import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { TypeParameterInstantiation } from './type-parameter-instantiation';

export interface TypeParameterInstantiationList extends SyntaxNode {
  readonly parameters: readonly TypeParameterInstantiation[];
}

export function createTypeParameterInstantiationList(
  parameters: readonly TypeParameterInstantiation[],
  flags: NodeFlags,
  start: number,
  end: number
): TypeParameterInstantiationList {
  return {
    kind: SyntaxKind.TypeParameterInstantiationList,
    parameters,
    flags,
    start,
    end
  };
}
