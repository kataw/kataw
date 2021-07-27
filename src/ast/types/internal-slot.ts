import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { Identifier } from '../expressions/identifier-expr';
import { StringLiteral } from '../expressions/string-literal';
import { NumericLiteral } from '../expressions/numeric-literal';
import { DummyIdentifier } from '../internal/dummy-identifier';
import { TypeNode } from '.';

export interface InternalSlot extends SyntaxNode {
  readonly kind: SyntaxKind.InternalSlot;
  /* error recovery */
  readonly protoKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly name: Identifier | DummyIdentifier | StringLiteral | NumericLiteral;
  readonly type: TypeNode;
  readonly optionalToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly staticKeyword: SyntaxToken<TokenSyntaxKind> | null;
}

export function createInternalSlot(
  protoKeyword: SyntaxToken<TokenSyntaxKind> | null,
  name: Identifier | DummyIdentifier | StringLiteral | NumericLiteral,
  optionalToken: SyntaxToken<TokenSyntaxKind> | null,
  staticKeyword: SyntaxToken<TokenSyntaxKind> | null,
  type: TypeNode,
  start: number,
  end: number
): InternalSlot {
  return {
    kind: SyntaxKind.InternalSlot,
    protoKeyword,
    staticKeyword,
    name,
    optionalToken,
    type,
    flags: NodeFlags.IsTypeNode,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
