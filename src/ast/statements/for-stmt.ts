import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { Statement } from '.';
import { Expression } from '../expressions/index';
import { VariableDeclarationList } from './variable-declarationList';
import { BindingList } from './binding-list';

/**
 * Represents a `for` statement
 */
export interface ForStatement extends Node {
  // Initializer statement, if present. Either a `VariableDeclarationList` or `ExpressionStatement`.
  readonly initializer: Expression | VariableDeclarationList | BindingList | null;
  // Condition expression, if present.
  readonly condition: Expression | null;
  // Incrementor expression, if present
  readonly incrementor: Expression | null;
  // Statement being looped over
  readonly statement: Statement;
}

export function createForStatement(
  initializer: Expression | VariableDeclarationList | BindingList | null,
  condition: Expression | null,
  incrementor: Expression | null,
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
  initializer: Expression | BindingList | VariableDeclarationList | null,
  condition: Expression | null,
  incrementor: Expression | null,
  statement: Statement
): ForStatement {
  return node.initializer !== initializer ||
    node.condition !== condition ||
    node.incrementor !== incrementor ||
    node.statement !== statement
    ? updateNode(
        createForStatement(initializer, condition, incrementor, statement, node.flags, node.start, node.end),
        node
      )
    : node;
}
