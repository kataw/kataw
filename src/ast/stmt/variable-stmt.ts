import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { VariableDeclarationList } from './variable-declarationList';

/**
 * Variable statement and variable declaration
 */
export interface VariableStatement extends SyntaxNode {
  readonly varKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly declarationList: VariableDeclarationList;
}

export function createVariableStatement(
  varKeyword: SyntaxToken<TokenSyntaxKind>,
  declarationList: VariableDeclarationList,
  start: number,
  end: number
): VariableStatement {
  return {
    kind: SyntaxKind.VariableStatement,
    varKeyword,
    declarationList,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
