import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';

/**
 * Labels
 */
export interface Labels extends SyntaxNode {
  readonly label: string;
  readonly iterationStatement: boolean;
}

export function createLabels(
  label: string,
  iterationStatement: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): Labels {
  return {
    kind: SyntaxKind.Labels,
    label,
    iterationStatement,
    flags,
    start,
    end
  };
}
