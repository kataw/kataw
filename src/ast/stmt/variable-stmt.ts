import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { VariableDeclarationList } from './variable-declarationList';

/**
 * Variable statement and variable declaration
 */
export interface VariableStatement extends SyntaxNode {
  readonly declarationList: VariableDeclarationList;
}

export function createVariableStatement(
  declarationList: VariableDeclarationList,
  start: number,
  end: number
): VariableStatement {
  return {
    kind: SyntaxKind.VariableStatement,
    declarationList,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
