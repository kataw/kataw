import { visitNode, visitEachChild } from '../../visitor';
import { NodeKind } from '../../ast/node';
import { updateCatch } from '../../ast/statements/catch-stmt';
import { addUniqueIdentifier } from '../common';

export function transformES2019(context: any): any {
  return transformSourceFile;

  function transformSourceFile(root: any) {
    return visitEachChild(root, visitor, context);
  }

  function visitor(node: any): any {
    if (node.kind === NodeKind.Catch && !node.catchParameter) {
      return updateCatch(node, addUniqueIdentifier(false) as any, visitNode(node.block, visitor));
    }
    return visitEachChild(node, visitor, context);
  }
}
