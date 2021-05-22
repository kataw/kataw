import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { TypeNode } from '.';

export interface FunctionAnnotation extends SyntaxNode {
  readonly type: TypeNode;
}

export function createFunctionAnnotation(type: TypeNode, start: number, end: number): FunctionAnnotation {
  return {
    kind: SyntaxKind.FunctionAnnotation,
    type,
    flags: NodeFlags.None,
    start,
    end
  };
}
