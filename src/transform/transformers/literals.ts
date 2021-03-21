import { visitEachChild } from '../../visitor';
import { Node, NodeKind, NodeFlags } from '../../ast/node';

// Compile ES2015 unicode string and number literals to ES5
export function transformLiterals(context: any): any {
  return transformSourceFile;

  function transformSourceFile(root: any) {
    return visitEachChild(root, visitor, context);
  }

  function visitor(node: any): any {
    switch(node.kind) {
      case NodeKind.NumericLiteral:
        // number octal like 0b10 or 0o70
        if (node.rawText && /^0[ob]/i.test(node.rawText)) {
          node.rawText = null;
          return node;
        }
      case NodeKind.StringLiteral:
        // number octal like 0b10 or 0o70
        if (node.rawText && /\\[u]/gi.test(node.rawText)) {
          node.rawText = null;
          return node;
        }
    }
    return visitEachChild(node, visitor, context);
  }
}
