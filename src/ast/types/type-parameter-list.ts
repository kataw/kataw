import { SyntaxNode, SyntaxKind, NodeFlags , TransformFlags} from '../syntax-node';
import { TypeParameter } from './type-parameter';

export interface TypeParameterList extends SyntaxNode {
  readonly parameters: TypeParameter[];
  readonly trailingComma: boolean;
}

export function createTypeParameterList(
  parameters: TypeParameter[],
  trailingComma: boolean,
  start: number,
  end: number
): TypeParameterList {
  return {
    kind: SyntaxKind.TypeParameterList,
    parameters,
    trailingComma,
    flags: NodeFlags.IsTypeNode,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
