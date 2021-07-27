import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { Identifier } from '../expressions/identifier-expr';
import { StringLiteral } from '../expressions/string-literal';
import { NumericLiteral } from '../expressions/numeric-literal';
import { DummyIdentifier } from '../internal/dummy-identifier';
import { TypeNode } from '.';

export interface IndexSignatureDeclaration extends SyntaxNode {
  readonly kind: SyntaxKind.IndexSignatureDeclaration;
  readonly protoKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly key: Identifier | DummyIdentifier | StringLiteral | NumericLiteral | null;
  readonly value: TypeNode | null;
  readonly type: TypeNode;
  readonly staticKeyword: SyntaxToken<TokenSyntaxKind> | null;
}

export function createIndexSignatureDeclaration(
  protoKeyword: SyntaxToken<TokenSyntaxKind> | null,
  staticKeyword: SyntaxToken<TokenSyntaxKind> | null,
  key: Identifier | DummyIdentifier | StringLiteral | NumericLiteral | null,
  value: TypeNode | null,
  type: TypeNode,
  start: number,
  end: number
): IndexSignatureDeclaration {
  return {
    kind: SyntaxKind.IndexSignatureDeclaration,
    protoKeyword,
    staticKeyword,
    key,
    value,
    type,
    flags: NodeFlags.IsTypeNode,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
