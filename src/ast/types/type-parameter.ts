import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { TypeNode } from '.';

export interface TypeParameter extends SyntaxNode {
  kind: SyntaxKind.TypeParameter;
  types: readonly TypeNode[];
}

export function createTypeParameter(types: readonly TypeNode[], start: number, end: number): TypeParameter {
  return {
    kind: SyntaxKind.TypeParameter,
    types,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.None,
    start,
    end
  };
}
