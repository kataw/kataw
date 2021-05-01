import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';

/**
 * Labels
 */
export interface Labels extends SyntaxNode {
  readonly label: string;
  readonly loop: boolean;
  readonly isDuplicate: boolean;
}

export function createLabels(
  label: string,
  loop: boolean,
  isDuplicate: boolean,
  start: number,
  end: number
): Labels {
  return {
    kind: SyntaxKind.Labels,
    label,
    loop,
    isDuplicate,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
