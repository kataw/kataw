import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { ExpressionNode } from '../expressions/index';
import { TypeNode } from '../types';

/**
 * Variable declaration
 */

export interface VariableDeclaration extends SyntaxNode {
  readonly binding: any;
  readonly optionalToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly type: TypeNode | null; // Optional type annotation
  readonly initializer: ExpressionNode | null; // Optional initializer
}

export function createVariableDeclaration(
  binding: any,
  optionalToken: SyntaxToken<TokenSyntaxKind> | null,
  type: TypeNode | null,
  initializer: ExpressionNode | null,
  start: number,
  end: number
): VariableDeclaration {
  return {
    kind: SyntaxKind.VariableDeclaration,
    binding,
    optionalToken,
    type,
    initializer,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
