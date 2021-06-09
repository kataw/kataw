import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { ElementList } from './element-list';

export interface ArrayLiteral extends SyntaxNode {
  readonly elementList: ElementList;
}

export function createArrayLiteral(elementList: ElementList, flags: NodeFlags, start: number, end: number): ArrayLiteral {
  return {
    kind: SyntaxKind.ArrayLiteral,
    elementList,
    flags,
    start,
    end
  };
}
