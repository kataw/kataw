import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { Identifier } from '../expressions/identifier-expr';
import { StringLiteral } from '../expressions/string-literal';
import { NumericLiteral } from '../expressions/numeric-literal';
import { DummyIdentifier } from '../internal/dummy-identifier';
import { TypeNode } from '.';

export interface ObjectTypeInternalSlot extends SyntaxNode {
  readonly kind: SyntaxKind.ObjectTypeInternalSlot;
  /* error recovery */
  readonly protoKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly name: Identifier | DummyIdentifier | StringLiteral | NumericLiteral;
  readonly value: TypeNode;
  readonly optionalToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly staticToken: SyntaxToken<TokenSyntaxKind> | null;
}

export function createObjectTypeInternalSlot(
  protoKeyword: SyntaxToken<TokenSyntaxKind> | null,
  name: Identifier | DummyIdentifier | StringLiteral | NumericLiteral,
  optionalToken: SyntaxToken<TokenSyntaxKind> | null,
  staticToken: SyntaxToken<TokenSyntaxKind> | null,
  value: TypeNode,
  start: number,
  end: number
): ObjectTypeInternalSlot {
  return {
    kind: SyntaxKind.ObjectTypeInternalSlot,
    protoKeyword,
    name,
    value,
    optionalToken,
    staticToken,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
