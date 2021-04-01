import { Identifier } from '../expressions/identifier-expr';
import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { TypeNode } from '.';
import { TypeParameter } from './type-parameter';

export interface TypeAlias extends SyntaxNode {
  kind: SyntaxKind.TypeAlias;
  name: Identifier;
  typeParameters: TypeParameter | null;
  type: TypeNode;
}

export function createTypeAlias(
  name: Identifier,
  typeParameters: TypeParameter | null,
  type: TypeNode,
  start: number,
  end: number
): TypeAlias {
  return {
    kind: SyntaxKind.TypeAlias,
    name,
    typeParameters,
    type,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.None,
    start,
    end
  };
}
