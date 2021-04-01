import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { ElementList } from './element-list';

export interface ArrayLiteral extends SyntaxNode {
  kind: SyntaxKind.ArrayLiteral;
  elementList: ElementList;
}

export function createArrayLiteral(elementList: ElementList, start: number, end: number): ArrayLiteral {
  return {
    kind: SyntaxKind.ArrayLiteral,
    elementList,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
