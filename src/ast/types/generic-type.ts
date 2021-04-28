import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { TypeParameter } from './type-parameter';

export interface GenericType extends SyntaxNode {
  readonly id: any;
  readonly typeParameters: TypeParameter | null;
}

export function createGenericType(
  id: any,
  typeParameters: TypeParameter | null,
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
