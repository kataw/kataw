import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { Statement } from '.';
import { Expression } from '../expressions/index';
import { LexicalDeclaration } from '../statements/lexical-declaration';
import { ForBinding } from './forBinding';

/**
 * For-in statement.
 */
export interface ForInStatement extends Node {
  readonly initializer: LexicalDeclaration | ForBinding | Expression | null;
  readonly expression: Expression;
  readonly statement: Statement;
}

export function createForInStatement(
  initializer: LexicalDeclaration | ForBinding | Expression | null,
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
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateForInStatement(
  node: ForInStatement,
  initializer: LexicalDeclaration | ForBinding | Expression | null,
  expression: Expression,
  statement: Statement
): ForInStatement {
  return node.initializer !== initializer || node.expression !== expression || node.statement !== statement
    ? updateNode(createForInStatement(initializer, expression, statement, node.flags, node.start, node.end), node)
    : node;
}
