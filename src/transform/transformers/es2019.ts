import { visitNode, visitEachChild } from '../../visitor';
import { NodeKind, NodeFlags } from '../../ast/node';
import { updateCatch } from '../../ast/statements/catch-stmt';
import { createCatchParameter } from '../../ast/statements/catch-parameter';
import { addUniqueIdentifier } from '../common';

export function transformES2019(context: any): any {
  return transformSourceFile;

  function transformSourceFile(root: any) {
    return visitEachChild(root, visitor, context);
  }

  function visitor(node: any): any {
    if (node.kind === NodeKind.Catch && !node.catchParameter) {
      return updateCatch(
        node,
        createCatchParameter(addUniqueIdentifier(false) as any, null, null, NodeFlags.None, -1, -1),
        visitNode(node.block, visitor)
      );
    }
    return visitEachChild(node, visitor, context);
  }
}
