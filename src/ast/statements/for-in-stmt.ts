import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { Statement } from '.';
import { Expression } from '../expressions/index';
import { VariableDeclarationList } from './variable-declarationList';
import { BindingList } from './binding-list';

/**
 * For-in statement.
 */
export interface ForInStatement extends Node {
  readonly initializer: BindingList | VariableDeclarationList | Expression | null;
  readonly expression: Expression;
  readonly statement: Statement;
}

export function createForInStatement(
  initializer: BindingList | VariableDeclarationList | Expression | null,
  expression: Expression,
  statement: Statement,
  flags: NodeFlags,
  start: number,
  end: number
): ForInStatement {
  return {
    kind: NodeKind.ForInStatement,
    initializer,
    expression,
    statement,
    flags,
    symbol: null,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}

export function updateForInStatement(
  node: ForInStatement,
  initializer: BindingList | VariableDeclarationList | Expression | null,
  expression: Expression,
  statement: Statement
): ForInStatement {
  return node.initializer !== initializer || node.expression !== expression || node.statement !== statement
    ? updateNode(createForInStatement(initializer, expression, statement, node.flags, node.start, node.end), node)
    : node;
}
