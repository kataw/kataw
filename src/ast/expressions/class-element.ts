import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { MethodDefinition } from './method-definition';
import { DecoratorList } from './decorator-list';

/**
 * Class element.
 */
export interface ClassElement extends SyntaxNode {
  readonly declareToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly decorators: DecoratorList | null;
  readonly generatorToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly staticKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly asyncKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly setKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly getKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly method: MethodDefinition;
}

export function createClassElement(
  declareToken: SyntaxToken<TokenSyntaxKind> | null,
  decorators: DecoratorList | null,
  generatorToken: SyntaxToken<TokenSyntaxKind> | null,
  staticKeyword: SyntaxToken<TokenSyntaxKind> | null,
  asyncKeyword: SyntaxToken<TokenSyntaxKind> | null,
  setKeyword: SyntaxToken<TokenSyntaxKind> | null,
  getKeyword: SyntaxToken<TokenSyntaxKind> | null,
  method: MethodDefinition,
  flags: NodeFlags,
  start: number,
  end: number
): ClassElement {
  return {
    kind: SyntaxKind.ClassElement,
    declareToken,
    decorators,
    generatorToken,
    staticKeyword,
    asyncKeyword,
    setKeyword,
    getKeyword,
    method,
    flags,
    start,
    end
  };
}
