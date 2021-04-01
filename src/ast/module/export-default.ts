import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { ExpressionNode } from '../expressions';
import { FunctionDeclaration } from '../stmt/function-declaration';
//import { ClassDeclaration } from '../stmt/class-declaration';

export interface ExportDefault extends SyntaxNode {
  readonly declaration: FunctionDeclaration | ExpressionNode;
}

export function createExportDefault(
  declaration: FunctionDeclaration | ExpressionNode,
  start: number,
  end: number
): ExportDefault {
  return {
    kind: SyntaxKind.ExportDefault,
    declaration,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
