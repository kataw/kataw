import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { VariableDeclarationList } from './variable-declarationList';

/**
 * Variable statement and variable declaration
 */
export interface VariableStatement extends SyntaxNode {
  readonly declareKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly varKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly declarationList: VariableDeclarationList;
}

export function createVariableStatement(
  declareKeyword: SyntaxToken<TokenSyntaxKind> | null,
  varKeyword: SyntaxToken<TokenSyntaxKind>,
  declarationList: VariableDeclarationList,
  flags: NodeFlags,
  start: number,
  end: number
): VariableStatement {
  return {
    kind: SyntaxKind.VariableStatement,
    declareKeyword,
    varKeyword,
    declarationList,
    flags,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
