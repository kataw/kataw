import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { TypeNode } from '.';

export interface TypeAnnotation extends SyntaxNode {
  kind: SyntaxKind.TypeAnnotation;
  type: TypeNode;
}

export function createTypeAnnotation(type: TypeNode, start: number, end: number): TypeAnnotation {
  return {
    kind: SyntaxKind.TypeAnnotation,
    type,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.None,
    start,
    end
  };
}
