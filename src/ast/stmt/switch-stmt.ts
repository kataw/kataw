import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { CaseBlock } from './case-block';
import { ExpressionNode } from '../expressions/index';

/**
 * Switch statements.
 */
export interface SwitchStatement extends SyntaxNode {
  readonly expression: ExpressionNode;
  readonly caseBlock: CaseBlock;
}

export function createSwitchStatement(
  expression: ExpressionNode,
  caseBlock: CaseBlock,
  start: number,
  end: number
): SwitchStatement {
  return {
    kind: SyntaxKind.SwitchStatement,
    expression,
    caseBlock,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
