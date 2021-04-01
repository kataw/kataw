import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { FunctionStatementList } from './function-stmt-list';

export interface FunctionBody extends SyntaxNode {
  readonly functionStatementList: FunctionStatementList;
}

export function createFunctionBody(
  functionStatementList: FunctionStatementList,
  start: number,
  end: number
): FunctionBody {
  return {
    kind: SyntaxKind.FunctionBody,
    functionStatementList,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
