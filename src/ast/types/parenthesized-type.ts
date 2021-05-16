import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { TypeNode } from './';

export interface ParenthesizedType extends SyntaxNode {
  readonly type: TypeNode;
}

export function createParenthesizedType(type: any, start: number, end: number): ParenthesizedType {
  return {
    kind: SyntaxKind.ParenthesizedType,
    type,
    flags: NodeFlags.None,
    start,
    end
  };
}
