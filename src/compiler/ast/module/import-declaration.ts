import { Node, NodeKind, TransformFlags, NodeFlags } from '../node';
import { StringLiteral } from '../expressions/string-literal';
import { Expression } from '../expressions';
import { ImportClause } from './import-clause';
import { Script } from '../script';
import { Module } from '../module';
import { updateNode } from '../../utils';

export interface ImportDeclaration extends Node {
  readonly fromClause: StringLiteral | Expression;
  readonly moduleSpecifier: Expression | null;
  readonly importClause: ImportClause | null;
  /* @internal */
  readonly parent: Script | Module | null;
}

export function createImportDeclaration(
  /** If this is not a StringLiteral it will be a grammar error. */
  fromClause: StringLiteral | Expression,
  moduleSpecifier: Expression | null,
  importClause: ImportClause | null,
  flags: NodeFlags,
  start: number,
  end: number
): ImportDeclaration {
  return {
    kind: NodeKind.ImportDeclaration,
    fromClause,
    moduleSpecifier,
    importClause,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateImportDeclaration(
  node: ImportDeclaration,
  fromClause: StringLiteral | Expression,
  moduleSpecifier: Expression | null,
  importClause: ImportClause | null
): ImportDeclaration {
  return node.fromClause !== fromClause ||
    node.moduleSpecifier !== moduleSpecifier ||
    node.importClause !== importClause
    ? updateNode(
        createImportDeclaration(fromClause, moduleSpecifier, importClause, node.flags, node.start, node.end),
        node
      )
    : node;
}
