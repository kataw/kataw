import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { TypeParameterDeclaration } from './type-parameter-declaration';

export interface GenericType extends SyntaxNode {
  readonly id: any;
  readonly typeParameters: TypeParameterDeclaration | null;
}

export function createGenericType(
  id: any,
  typeParameters: TypeParameterDeclaration | null,
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
