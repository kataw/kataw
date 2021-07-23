import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
import { TypeParameter } from './type-parameter';

export interface TypeParameterDeclaration extends SyntaxNode {
  readonly declarations: TypeParameter[];
  readonly trailingComma: boolean;
}

export function createTypeParameterDeclaration(
  declarations: TypeParameter[],
  trailingComma: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): TypeParameterDeclaration {
  return {
    kind: SyntaxKind.TypeParameterDeclaration,
    declarations,
    trailingComma,
    flags,
    transformFlags: TransformFlags.TypeParameter,
    start,
    end
  };
}
