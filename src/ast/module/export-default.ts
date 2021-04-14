import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { ExpressionNode } from '../expressions';
import { FunctionDeclaration } from '../stmt/function-declaration';
import { ClassDeclaration } from '../stmt/class-declaration';

export interface ExportDefault extends SyntaxNode {
  readonly exportKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly defaultKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly declaration: FunctionDeclaration | ClassDeclaration | ExpressionNode;
}

export function createExportDefault(
  exportKeyword: SyntaxToken<TokenSyntaxKind>,
  defaultKeyword: SyntaxToken<TokenSyntaxKind>,
  declaration: FunctionDeclaration | ClassDeclaration | ExpressionNode,
  start: number,
  end: number
): ExportDefault {
  return {
    kind: SyntaxKind.ExportDefault,
    exportKeyword,
    defaultKeyword,
    declaration,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
