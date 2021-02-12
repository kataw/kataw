import { Node, NodeKind, TransformFlags, NodeFlags } from '../node';
import { updateNode } from '../../utils';
import { NamedImports } from './named-imports';
import { BindingIdentifier } from '../expressions/binding-identifier';
import { ImportDeclaration } from './import-declaration';

export interface ImportClause extends Node {
  readonly defaultBinding: BindingIdentifier | null;
  readonly nameSpaceImport: BindingIdentifier | null;
  readonly namedImports: NamedImports | null;
  readonly isTypeOnly: boolean;
  /* @internal */
  readonly parent: ImportDeclaration | null;
}

export function createImportClause(
  defaultBinding: BindingIdentifier | null,
  nameSpaceImport: BindingIdentifier | null,
  namedImports: NamedImports | null,
  isTypeOnly: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): ImportClause {
  return {
    kind: NodeKind.ImportClause,
    defaultBinding,
    nameSpaceImport,
    namedImports,
    isTypeOnly,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateImportClause(
  node: ImportClause,
  defaultBinding: BindingIdentifier | null,
  nameSpaceImport: BindingIdentifier | null,
  namedImports: NamedImports | null,
  isTypeOnly: boolean
): ImportClause {
  return node.defaultBinding !== defaultBinding ||
    node.nameSpaceImport !== nameSpaceImport ||
    node.namedImports !== namedImports ||
    node.isTypeOnly !== isTypeOnly
    ? updateNode(
        createImportClause(defaultBinding, nameSpaceImport, namedImports, isTypeOnly, node.flags, node.start, node.end),
        node
      )
    : node;
}
