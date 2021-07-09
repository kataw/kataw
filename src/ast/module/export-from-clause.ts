import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { Identifier } from '../expressions/identifier-expr';
import { StringLiteral } from '../expressions/string-literal';

export interface ExportFromClause extends SyntaxNode {
  readonly asteriskToken: SyntaxToken<TokenSyntaxKind>;
  readonly asKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly moduleExportName: StringLiteral | null;
  readonly namedBinding: Identifier | null;
}

export function createExportFromClause(
  asteriskToken: SyntaxToken<TokenSyntaxKind>,
  asKeyword: SyntaxToken<TokenSyntaxKind>,
  namedBinding: Identifier | null,
  moduleExportName: StringLiteral | null,
  flags: NodeFlags,
  start: number,
  end: number
): ExportFromClause {
  return {
    kind: SyntaxKind.ExportFromClause,
    asteriskToken,
    asKeyword,
    moduleExportName,
    namedBinding,
    flags,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
