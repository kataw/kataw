import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { MethodDefinition } from './method-definition';

/**
 * Property method
 */
export interface PropertyMethod extends SyntaxNode {
  readonly generatorToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly asyncKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly getKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly setKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly method: MethodDefinition;
}

export function createPropertyMethod(
  generatorToken: SyntaxToken<TokenSyntaxKind> | null,
  asyncKeyword: SyntaxToken<TokenSyntaxKind> | null,
  getKeyword: SyntaxToken<TokenSyntaxKind> | null,
  setKeyword: SyntaxToken<TokenSyntaxKind> | null,
  method: MethodDefinition,
  start: number,
  end: number
): PropertyMethod {
  return {
    kind: SyntaxKind.PropertyMethod,
    generatorToken,
    asyncKeyword,
    getKeyword,
    setKeyword,
    method,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
