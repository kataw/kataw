import { TransformFlags } from '../../ast/node';
import { visitEachChild } from '../../visitor';

export function transformESNext(context: any): any {
  return transformSourceFile;

  function transformSourceFile(root: any) {
    return visitEachChild(root, visitor, context);
  }

  function visitor(node: any): any {
    if ((node.transformFlags & TransformFlags.ESNext) === 0) {
      return node;
    }
    switch (node.kind) {
      default:
        return visitEachChild(node, visitor, context);
    }
  }
}
