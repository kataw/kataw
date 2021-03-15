import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { Statement } from '.';
import { Expression } from '../expressions/index';
import { VariableDeclarationList } from '../statements/variable-declarationList';

/**
 * Represents a `for` statement
 */
export interface ForStatement extends Node {
  // Initializer statement, if present. Either a `VariableDeclarationList` or `ExpressionStatement`.
  readonly initializer: Expression | VariableDeclarationList | null;
  // Condition expression, if present.
  readonly condition: Expression | null;
  // Incrementor expression, if present
  readonly incrementor: Expression | null;
  // Set to 'true' if 'Initializer' is a `VariableDeclarationList`
  readonly isVariableDeclarationList: boolean;
  // Statement being looped over
  readonly statement: Statement;
}

export function createForStatement(
  initializer: Expression | VariableDeclarationList | null,
  condition: Expression | null,
  incrementor: Expression | null,
  isVariableDeclarationList: boolean,
  statement: Statement,
  flags: NodeFlags,
  start: number,
  end: number
): ForStatement {
  return {
    kind: NodeKind.ForStatement,
    initializer,
    condition,
    incrementor,
    isVariableDeclarationList,
    statement,
    flags,
    symbol: null,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}

export function updateForStatement(
  node: ForStatement,
  initializer: Expression | VariableDeclarationList | null,
  condition: Expression | null,
  incrementor: Expression | null,
  statement: Statement
): ForStatement {
  return node.initializer !== initializer ||
    node.condition !== condition ||
    node.incrementor !== incrementor ||
    node.statement !== statement
    ? updateNode(
        createForStatement(
          initializer,
          condition,
          incrementor,
          node.isVariableDeclarationList,
          statement,
          node.flags,
          node.start,
          node.end
        ),
        node
      )
    : node;
}
