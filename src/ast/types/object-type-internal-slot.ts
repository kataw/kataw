import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { TypeNode } from '.';

export interface ObjectTypeInternalSlot extends SyntaxNode {
  readonly kind: SyntaxKind.ObjectTypeInternalSlot;
  /* error recovery */
  readonly protoKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly name: any;
  readonly value: TypeNode;
  readonly optionalToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly staticToken: SyntaxToken<TokenSyntaxKind> | null;
}

export function createObjectTypeInternalSlot(
  protoKeyword: SyntaxToken<TokenSyntaxKind> | null,
  name: any,
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
    flags: NodeFlags.None,
    start,
    end
  };
}
