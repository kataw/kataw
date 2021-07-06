import { SyntaxNode, SyntaxKind, NodeFlags , TransformFlags} from '../syntax-node';
import { ExpressionNode } from '../expressions';

export interface ExpressionStatement extends SyntaxNode {
  readonly expression: ExpressionNode;
}

export function createExpressionStatement(expression: ExpressionNode, start: number, end: number): ExpressionStatement {
  return {
    kind: SyntaxKind.ExpressionStatement,
    expression,
    flags: NodeFlags.IsStatement,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
