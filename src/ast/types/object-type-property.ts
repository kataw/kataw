import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { Identifier } from '../expressions/identifier-expr';
import { StringLiteral } from '../expressions/string-literal';
import { BigIntLiteral } from '../expressions/big-int-literal';
import { NumericLiteral } from '../expressions/numeric-literal';
import { ComputedPropertyName } from '../expressions/computed-property-name';
import { DummyIdentifier } from '../internal/dummy-identifier';
import { TypeNode } from './';

export interface ObjectTypeProperty extends SyntaxNode {
  readonly kind: SyntaxKind.ObjectTypeProperty;
  readonly getKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly setKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly key: Identifier | DummyIdentifier | StringLiteral | BigIntLiteral | NumericLiteral | ComputedPropertyName;
  readonly value: TypeNode;
  readonly optionalToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly staticToken: SyntaxToken<TokenSyntaxKind> | null;
}

export function createObjectTypeProperty(
  getKeyword: SyntaxToken<TokenSyntaxKind> | null,
  setKeyword: SyntaxToken<TokenSyntaxKind> | null,
  key: Identifier | DummyIdentifier | StringLiteral | BigIntLiteral | NumericLiteral | ComputedPropertyName,
  value: TypeNode,
  optionalToken: SyntaxToken<TokenSyntaxKind> | null,
  staticToken: SyntaxToken<TokenSyntaxKind> | null,
  start: number,
  end: number
): ObjectTypeProperty {
  return {
    kind: SyntaxKind.ObjectTypeProperty,
    getKeyword,
    setKeyword,
    key,
    value,
    optionalToken,
    staticToken,
    flags: NodeFlags.None,
    start,
    end
  };
}
