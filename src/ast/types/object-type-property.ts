import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { Identifier } from '../expressions/identifier-expr';
import { StringLiteral } from '../expressions/string-literal';
import { NumericLiteral } from '../expressions/numeric-literal';
import { DummyIdentifier } from '../internal/dummy-identifier';
import { TypeNode } from './';

export interface ObjectTypeProperty extends SyntaxNode {
  readonly kind: SyntaxKind.ObjectTypeProperty;
  readonly getKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly setKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly staticKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly protoKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly key: Identifier | DummyIdentifier | StringLiteral | NumericLiteral;
  readonly optionalToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly type: TypeNode;
}

export function createObjectTypeProperty(
  getKeyword: SyntaxToken<TokenSyntaxKind> | null,
  setKeyword: SyntaxToken<TokenSyntaxKind> | null,
  key: Identifier | DummyIdentifier | StringLiteral | NumericLiteral,
  type: TypeNode,
  optionalToken: SyntaxToken<TokenSyntaxKind> | null,
  staticKeyword: SyntaxToken<TokenSyntaxKind> | null,
  protoKeyword: SyntaxToken<TokenSyntaxKind> | null,
  start: number,
  end: number
): ObjectTypeProperty {
  return {
    kind: SyntaxKind.ObjectTypeProperty,
    protoKeyword,
    staticKeyword,
    getKeyword,
    setKeyword,
    key,
    optionalToken,
    type,
    flags: NodeFlags.IsTypeNode,
    start,
    end
  };
}
