import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { ExpressionNode } from '.';
import { AssignmentExpression } from './assignment-expr';
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
  readonly asteriskToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly left: Identifier | NumericLiteral | BigIntLiteral | StringLiteral | ComputedPropertyName;
  readonly right: AssignmentExpression | Identifier | ExpressionNode;
}

export function createPropertyDefinition(
  asteriskToken: SyntaxToken<TokenSyntaxKind> | null,
  left: Identifier | NumericLiteral | BigIntLiteral | StringLiteral | ComputedPropertyName,
  right: ExpressionNode | Identifier,
  flags: NodeFlags,
  start: number,
  end: number
): PropertyDefinition {
  return {
    kind: SyntaxKind.PropertyDefinition,
    asteriskToken,
    left,
    right,
    flags,
    transformFlags: TransformFlags.ShouldIndentIfInlining,
    start,
    end
  };
}
