import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { TypeNode } from '.';

export interface TypeParameter extends SyntaxNode {
  readonly types: readonly TypeNode[];
}

export function createTypeParameter(types: readonly TypeNode[], start: number, end: number): TypeParameter {
  return {
    kind: SyntaxKind.TypeParameter,
    types,
    flags: NodeFlags.None,
    start,
    end
  };
}
