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
  readonly type: TypeNode;
  readonly staticKeyword: SyntaxToken<TokenSyntaxKind> | null;
}

export function createObjectTypeIndexer(
  protoKeyword: SyntaxToken<TokenSyntaxKind> | null,
  staticKeyword: SyntaxToken<TokenSyntaxKind> | null,
  name: Identifier | DummyIdentifier | StringLiteral | NumericLiteral | null,
  key: TypeNode,
  type: TypeNode,
  start: number,
  end: number
): ObjectTypeIndexer {
  return {
    kind: SyntaxKind.ObjectTypeIndexer,
    protoKeyword,
    staticKeyword,
    name,
    key,
    type,
    flags: NodeFlags.IsTypeNode,
    start,
    end
  };
}
