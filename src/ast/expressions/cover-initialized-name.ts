import { SyntaxNode, SyntaxKind, NodeFlags , TransformFlags} from '../syntax-node';
import { ExpressionNode } from './';
import { Identifier } from './identifier-expr';

/**
 * Cover initialized name
 */
export interface CoverInitializedName extends SyntaxNode {
  readonly left: Identifier;
  readonly right: ExpressionNode;
}

export function createCoverInitializedName(
  left: Identifier,
  right: ExpressionNode,
  start: number,
  end: number
): CoverInitializedName {
  return {
    kind: SyntaxKind.CoverInitializedName,
    left,
    right,
    flags: NodeFlags.ExpressionNode,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
