import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { Statement } from '.';
import { Expression } from '../expressions/index';
import { LexicalDeclaration } from '../statements/lexical-declaration';
import { ForBinding } from './forBinding';

export interface ForOfStatement extends Node {
  readonly initializer: LexicalDeclaration | ForBinding | Expression | null;
  readonly expression: Expression;
  readonly statement: Statement;
  readonly isAwait: boolean;
}

/**
 * For-of statement.
 */

export function createForOfStatement(
  initializer: LexicalDeclaration | ForBinding | Expression | null,
  expression: Expression,
  statement: Statement,
  isAwait: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): ForOfStatement {
  return {
    kind: NodeKind.ForOfStatement,
    initializer,
    expression,
    statement,
    isAwait,
    flags,
    intersects: false,
    transformFlags: isAwait ? TransformFlags.ES2015 | TransformFlags.ES2018 : TransformFlags.ES2015,
    start,
    end
  };
}

export function updateForOfStatement(
  node: ForOfStatement,
  initializer: LexicalDeclaration | ForBinding | Expression | null,
  expression: Expression,
  statement: Statement
): ForOfStatement {
  return node.initializer !== initializer || node.expression !== expression || node.statement !== statement
    ? updateNode(
        createForOfStatement(initializer, expression, statement, node.isAwait, node.flags, node.start, node.end),
        node
      )
    : node;
}
