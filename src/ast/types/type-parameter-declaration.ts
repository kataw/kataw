import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { TypeParameterList } from './type-parameter-list';

export interface TypeParameterDeclaration extends SyntaxNode {
  readonly declarations: TypeParameterList;
}

export function createTypeParameterDeclaration(
  declarations: TypeParameterList,
  flags: NodeFlags,
  start: number,
  end: number
): TypeParameterDeclaration {
  return {
    kind: SyntaxKind.TypeParameterDeclaration,
    declarations,
    flags,
    start,
    end
  };
}
