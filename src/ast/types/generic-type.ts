import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { TypeParameterList } from './type-parameter-list';

export interface GenericType extends SyntaxNode {
  readonly id: any;
  readonly typeParameters: TypeParameterList | null;
}

export function createGenericType(
  id: any,
  typeParameters: TypeParameterList | null,
  start: number,
  end: number
): GenericType {
  return {
    kind: SyntaxKind.GenericType,
    id,
    typeParameters,
    flags: NodeFlags.None,
    start,
    end
  };
}
