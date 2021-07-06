import { SyntaxNode, SyntaxKind, NodeFlags , TransformFlags} from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { MethodDefinition } from './method-definition';

/**
 * Property method
 */
export interface PropertyMethod extends SyntaxNode {
  readonly asteriskToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly asyncKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly getKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly setKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly method: MethodDefinition;
}

export function createPropertyMethod(
  asteriskToken: SyntaxToken<TokenSyntaxKind> | null,
  asyncKeyword: SyntaxToken<TokenSyntaxKind> | null,
  getKeyword: SyntaxToken<TokenSyntaxKind> | null,
  setKeyword: SyntaxToken<TokenSyntaxKind> | null,
  method: MethodDefinition,
  start: number,
  end: number
): PropertyMethod {
  return {
    kind: SyntaxKind.PropertyMethod,
    asyncKeyword,
    asteriskToken,
    getKeyword,
    setKeyword,
    method,
    flags: NodeFlags.ExpressionNode,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
