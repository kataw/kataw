import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { VariableDeclarationList } from './variable-declarationList';

/**
 * Variable statement and variable declaration
 */
export interface ForBinding extends SyntaxNode {
  readonly varKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly declarationList: VariableDeclarationList;
}

export function createForBinding(
  varKeyword: SyntaxToken<TokenSyntaxKind>,
  declarationList: VariableDeclarationList,
  start: number,
  end: number
): ForBinding {
  return {
    kind: SyntaxKind.ForBinding,
    varKeyword,
    declarationList,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
