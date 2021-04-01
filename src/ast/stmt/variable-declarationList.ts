import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { VariableDeclaration } from './variable-declaration';

/**
 * VariableDeclarationList
 */

export interface VariableDeclarationList extends SyntaxNode {
  readonly declarations: VariableDeclaration[];
}

export function createVariableDeclarationList(
  declarations: VariableDeclaration[],
  start: number,
  end: number
): VariableDeclarationList {
  return {
    kind: SyntaxKind.VariableDeclarationList,
    declarations,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
