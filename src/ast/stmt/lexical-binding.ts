import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { ExpressionNode } from '../expressions/index';
import { TypeNode } from '../types';

/**
 * Lexical binding
 */

export interface LexicalBinding extends SyntaxNode {
  readonly binding: any;
  readonly optionalToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly type: TypeNode | null;
  readonly initializer: ExpressionNode | null;
}

export function createLexicalBinding(
  binding: any,
  optionalToken: SyntaxToken<TokenSyntaxKind> | null,
  type: TypeNode | null,
  initializer: ExpressionNode | null,
  start: number,
  end: number
): LexicalBinding {
  return {
    kind: SyntaxKind.LexicalBinding,
    binding,
    optionalToken,
    type,
    initializer,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
