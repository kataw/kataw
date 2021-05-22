import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { TypeNode } from '.';

export interface TypeParameter extends SyntaxNode {
  readonly type: TypeNode;
  readonly initializer: TypeNode | null;
}

export function createTypeParameter(
  type: TypeNode,
  initializer: TypeNode | null,
  start: number,
  end: number
): TypeParameter {
  return {
    kind: SyntaxKind.TypeParameter,
    type,
    initializer,
    flags: NodeFlags.None,
    start,
    end
  };
}
