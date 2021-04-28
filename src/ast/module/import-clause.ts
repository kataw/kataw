import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { NamedImports } from './named-imports';
import { Identifier } from '../expressions/identifier-expr';

export interface ImportClause extends SyntaxNode {
  readonly defaultBinding: Identifier | null;
  readonly nameSpaceImport: Identifier | null;
  readonly namedImports: NamedImports | null;
}

export function createImportClause(
  defaultBinding: Identifier | null,
  nameSpaceImport: Identifier | null,
  namedImports: NamedImports | null,
  start: number,
  end: number
): ImportClause {
  return {
    kind: SyntaxKind.ImportClause,
    defaultBinding,
    nameSpaceImport,
    namedImports,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
