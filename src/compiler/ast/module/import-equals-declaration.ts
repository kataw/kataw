import { Node, NodeKind, TransformFlags, NodeFlags } from '../node';

import { IdentifierReference } from '../expressions/identifier-reference';

export interface ImportEqualsDeclaration extends Node {
  readonly name: IdentifierReference;
  readonly moduleReference: any;
  readonly isTypeOnly: boolean;
}

export function createImportEqualsDeclaration(
  name: IdentifierReference,
  moduleReference: any,
  isTypeOnly: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): ImportEqualsDeclaration {
  return {
    kind: NodeKind.ImportEqualsDeclaration,
    name,
    moduleReference,
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
