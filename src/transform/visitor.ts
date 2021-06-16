import { SyntaxKind } from '../ast/syntax-node';
import { Transform, startLexicalEnvironment } from './core';

export function visitEachChild(transform: Transform, node: any, visitor: (node: SyntaxKind) => SyntaxKind): any {
  const kind = node.kind;
  switch (kind) {
    case SyntaxKind.RootNode:
      startLexicalEnvironment(transform);
      return node;
  }
}
