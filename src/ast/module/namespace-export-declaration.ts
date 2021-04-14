import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { Identifier } from './../expressions/identifier-expr';

export interface NamespaceExportDeclaration extends SyntaxNode {
  readonly name: Identifier;
}

export function createNamespaceExportDeclaration(
  name: Identifier,
  flags: NodeFlags,
  start: number,
  end: number
): NamespaceExportDeclaration {
  return {
    kind: SyntaxKind.NamespaceExportDeclaration,
    name,
    autofix: AutoFix.NotFixable,
    flags,
    start,
    end
  };
}
