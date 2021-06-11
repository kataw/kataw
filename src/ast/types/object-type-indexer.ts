import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { Identifier } from '../expressions/identifier-expr';
import { StringLiteral } from '../expressions/string-literal';
import { NumericLiteral } from '../expressions/numeric-literal';
import { DummyIdentifier } from '../internal/dummy-identifier';
import { TypeNode } from '.';

export interface ObjectTypeIndexer extends SyntaxNode {
  readonly kind: SyntaxKind.ObjectTypeIndexer;
  readonly protoKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly name: Identifier | DummyIdentifier | StringLiteral | NumericLiteral | null;
  readonly key: TypeNode;
  readonly value: TypeNode;
  readonly staticToken: SyntaxToken<TokenSyntaxKind> | null;
}

export function createObjectTypeIndexer(
  protoKeyword: SyntaxToken<TokenSyntaxKind> | null,
  name: Identifier | DummyIdentifier | StringLiteral | NumericLiteral | null,
  key: TypeNode,
  value: TypeNode,
  staticToken: SyntaxToken<TokenSyntaxKind> | null,
  start: number,
  end: number
): ObjectTypeIndexer {
  return {
    kind: SyntaxKind.ObjectTypeIndexer,
    protoKeyword,
    name,
    key,
    value,
    staticToken,
    flags: NodeFlags.None,
    start,
    end
  };
}
