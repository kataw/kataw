import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
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
    flags,
    start,
    end
  };
}
