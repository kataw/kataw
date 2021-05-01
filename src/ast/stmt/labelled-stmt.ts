import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { StatementNode } from '.';
import { Identifier } from '../expressions/identifier-expr';
import { Labels } from './labelled-identifier';

/**
 * Labelled statement
 */
export interface LabelledStatement extends SyntaxNode {
  readonly label: Identifier;
  readonly labels: Labels[];
  readonly colonToken: SyntaxToken<TokenSyntaxKind>;
  readonly statement: StatementNode;
}

export function createLabelledStatement(
  label: Identifier,
  labels: Labels[],
  colonToken: SyntaxToken<TokenSyntaxKind>,
  statement: StatementNode,
  flags: NodeFlags,
  start: number,
  end: number
): LabelledStatement {
  return {
    kind: SyntaxKind.LabelledStatement,
    label,
    labels,
    colonToken,
    statement,
    flags,
    start,
    end
  };
}
