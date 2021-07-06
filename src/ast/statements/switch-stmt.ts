import { SyntaxNode, SyntaxKind, NodeFlags , TransformFlags} from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { CaseBlock } from './case-block';
import { ExpressionNode } from '../expressions/index';

/**
 * Switch statements.
 */
export interface SwitchStatement extends SyntaxNode {
  readonly switchKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly expression: ExpressionNode;
  readonly caseBlock: CaseBlock;
}

export function createSwitchStatement(
  switchKeyword: SyntaxToken<TokenSyntaxKind>,
  expression: ExpressionNode,
  caseBlock: CaseBlock,
  flags: NodeFlags,
  start: number,
  end: number
): SwitchStatement {
  return {
    kind: SyntaxKind.SwitchStatement,
    switchKeyword,
    expression,
    caseBlock,
    flags,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
