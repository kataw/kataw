import { visitEachChild } from '../../visitor';

export function transformES2018(context: any): any {
  return transformSourceFile;

  function transformSourceFile(root: any) {
    return visitEachChild(root, visitor, context);
  }

  function visitor(node: any): any {
    return visitEachChild(node, visitor, context);
  }
}
