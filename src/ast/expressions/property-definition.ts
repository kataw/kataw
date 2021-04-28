import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { ExpressionNode } from '.';
import { AssignmentExpression } from './assignment-expr';
import { BindingElement } from './binding-element';
import { Identifier } from './identifier-expr';
import { NumericLiteral } from './numeric-literal';
import { BigIntLiteral } from './big-int-literal';
import { StringLiteral } from './string-literal';
import { ComputedPropertyName } from './computed-property-name';

export type PropertyKey = Identifier | NumericLiteral | BigIntLiteral | StringLiteral | ComputedPropertyName;

/**
 * Property name
 */
export interface PropertyDefinition extends SyntaxNode {
  readonly asyncKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly getKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly setKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly left: Identifier | NumericLiteral | BigIntLiteral | StringLiteral | ComputedPropertyName;
  readonly right: AssignmentExpression | BindingElement | Identifier | ExpressionNode;
}

export function createPropertyDefinition(
  asyncKeyword: SyntaxToken<TokenSyntaxKind> | null,
  getKeyword: SyntaxToken<TokenSyntaxKind> | null,
  setKeyword: SyntaxToken<TokenSyntaxKind> | null,
  left: Identifier | NumericLiteral | BigIntLiteral | StringLiteral | ComputedPropertyName,
  right: ExpressionNode | BindingElement | Identifier,
  start: number,
  end: number
): PropertyDefinition {
  return {
    kind: SyntaxKind.PropertyDefinition,
    asyncKeyword,
    getKeyword,
    setKeyword,
    left,
    right,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
