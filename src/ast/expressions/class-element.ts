import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { MethodDefinition } from './method-definition';
import { DecoratorList } from './decorator-list';

/**
 * Class element.
 */
export interface ClassElement extends SyntaxNode {
  readonly decorators: DecoratorList | null;
  readonly staticToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly method: MethodDefinition;
}

export function createClassElement(
  decorators: DecoratorList | null,
  staticToken: SyntaxToken<TokenSyntaxKind> | null,
  method: MethodDefinition,
  start: number,
  end: number
): ClassElement {
  return {
    kind: SyntaxKind.ClassElement,
    decorators,
    staticToken,
    method,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
