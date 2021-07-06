import { SyntaxNode, SyntaxKind, NodeFlags , TransformFlags} from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { StatementNode } from '.';
import { Identifier } from '../expressions/identifier-expr';

/**
 * Labelled statement
 */
export interface LabelledStatement extends SyntaxNode {
  readonly label: Identifier;
  readonly colonToken: SyntaxToken<TokenSyntaxKind>;
  readonly statement: StatementNode;
}

export function createLabelledStatement(
  label: Identifier,
  colonToken: SyntaxToken<TokenSyntaxKind>,
  statement: StatementNode,
  flags: NodeFlags,
  start: number,
  end: number
): LabelledStatement {
  return {
    kind: SyntaxKind.LabelledStatement,
    label,
    colonToken,
    statement,
    flags,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
