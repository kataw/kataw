import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { Identifier } from './identifier-expr';
import { ExpressionNode } from './';
import { TypeNode } from '../types';
import { DecoratorList } from './decorator-list';

/**
 * FieldDefinition
 */
export interface FieldDefinition extends SyntaxNode {
  readonly decorators: DecoratorList | null;
  readonly declaredToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly staticKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly asyncKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly key: ExpressionNode | Identifier;
  readonly optionalToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly type: TypeNode | null;
  readonly initializer: ExpressionNode | null;
}

export function createFieldDefinition(
  decorators: DecoratorList | null,
  declaredToken: SyntaxToken<TokenSyntaxKind> | null,
  staticKeyword: SyntaxToken<TokenSyntaxKind> | null,
  asyncKeyword: SyntaxToken<TokenSyntaxKind> | null,
  key: ExpressionNode | Identifier,
  optionalToken: SyntaxToken<TokenSyntaxKind> | null,
  type: TypeNode | null,
  initializer: ExpressionNode | null,
  start: number,
  end: number
): FieldDefinition {
  return {
    kind: SyntaxKind.FieldDefinition,
    decorators,
    declaredToken,
    staticKeyword,
    asyncKeyword,
    key,
    optionalToken,
    type,
    initializer,
    flags: NodeFlags.ExpressionNode,
    transformFlags: TransformFlags.ShouldIndentIfInlining,
    start,
    end
  };
}
