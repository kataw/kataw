import { Node, NodeKind, TransformFlags, NodeFlags } from '../node';
import { updateNode } from '../../../visitor/common';
import { NamedImports } from './named-imports';
import { BindingIdentifier } from '../expressions/binding-identifier';
import { ImportDeclaration } from './import-declaration';

export interface ImportClause extends Node {
  readonly defaultBinding: BindingIdentifier | null;
  readonly nameSpaceImport: BindingIdentifier | null;
  readonly namedImports: NamedImports | null;
  /* @internal */
  readonly parent: ImportDeclaration | null;
}

export function createImportClause(
  defaultBinding: BindingIdentifier | null,
  nameSpaceImport: BindingIdentifier | null,
  namedImports: NamedImports | null,
  flags: NodeFlags,
  start: number,
  end: number
): ImportClause {
  return {
    kind: NodeKind.ImportClause,
    defaultBinding,
    nameSpaceImport,
    namedImports,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateImportClause(node: ImportClause, defaultBinding: BindingIdentifier | null,
  nameSpaceImport: BindingIdentifier | null,
  namedImports: NamedImports | null): ImportClause {
  return node.defaultBinding !== defaultBinding || node.nameSpaceImport !== nameSpaceImport || node.namedImports !== namedImports
    ? updateNode(createImportClause(defaultBinding, nameSpaceImport, namedImports, node.flags, node.start, node.end), node)
    : node;
}
