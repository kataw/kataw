import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { ParameterDeclarations } from './parameter-declarations';

export interface TypeParameterDeclaration extends SyntaxNode {
  readonly declarations: ParameterDeclarations;
}

export function createTypeParameterDeclaration(
  declarations: ParameterDeclarations,
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
