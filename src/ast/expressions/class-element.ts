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
  readonly staticToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly method: MethodDefinition;
}

export function createClassElement(
  declareToken: SyntaxToken<TokenSyntaxKind> | null,
  decorators: DecoratorList | null,
  staticToken: SyntaxToken<TokenSyntaxKind> | null,
  method: MethodDefinition,
  start: number,
  end: number
): ClassElement {
  return {
    kind: SyntaxKind.ClassElement,
    declareToken,
    decorators,
    staticToken,
    method,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
