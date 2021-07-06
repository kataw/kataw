import { SyntaxNode, SyntaxKind, NodeFlags , TransformFlags} from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { TypeNode } from '.';

export interface NullableType extends SyntaxNode {
  readonly nullableToken: SyntaxToken<TokenSyntaxKind>;
  readonly type: TypeNode;
}

export function createNullableType(
  nullableToken: SyntaxToken<TokenSyntaxKind>,
  type: TypeNode,
  start: number,
  end: number
): NullableType {
  return {
    kind: SyntaxKind.NullableType,
    nullableToken,
    type,
    flags: NodeFlags.IsTypeNode,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
