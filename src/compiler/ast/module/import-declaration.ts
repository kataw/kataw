import { Node, NodeKind, TransformFlags, NodeFlags } from '../node';
import { StringLiteral } from '../expressions/string-literal';
import { ImportClause } from './import-clause';
import { Script } from '../script';
import { Module } from '../module';

export interface ImportDeclaration extends Node {
  readonly fromClause: StringLiteral | null;
  readonly moduleSpecifier: StringLiteral | null;
  readonly importClause: ImportClause | null;
  /* @internal */
  readonly parent: Script | Module | null;
}

export function createImportDeclaration(
  fromClause: StringLiteral | null,
  moduleSpecifier: StringLiteral | null,
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
