import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { TypeNode } from '.';

export interface ObjectTypeIndexer extends SyntaxNode {
  readonly kind: SyntaxKind.ObjectTypeIndexer;
  readonly protoKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly name: any;
  readonly key: TypeNode;
  readonly value: TypeNode;
  readonly staticToken: SyntaxToken<TokenSyntaxKind> | null;
}

export function createObjectTypeIndexer(
  protoKeyword: SyntaxToken<TokenSyntaxKind> | null,
  name: any,
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
