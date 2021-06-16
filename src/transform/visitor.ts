import { SyntaxKind } from '../ast/syntax-node';
import { Transform, createNodeArray, updateNode, startLexicalEnvironment } from './core';
import { createRootNode } from '../ast/rootNode';

export function visitEachChild(transform: Transform, node: any, visitor: (node: SyntaxKind) => SyntaxKind): any {
  const kind = node.kind;
  switch (kind) {
    case SyntaxKind.RootNode:
      startLexicalEnvironment(transform);
      if (node.statements !== visitNodes(node.statements, visitor)) {
        updateNode(createRootNode(node.directives, node.statements, node.isModule, node.source, node.fuleName), node);
      }
      return node;
  }
}

export function visitNodes(nodes: any, visitor: any, start?: number, count?: number): any {
  if (nodes === null || visitor === null) {
    return nodes;
  }

  let updated: any = null;

  // Ensure start and count have valid values
  const length = nodes.length;

  if (start === undefined || start < 0) {
    start = 0;
  }

  if (length === 0) return nodes;

  if (count === undefined || count > length - start) {
    count = length - start;
  }

  if (start > 0 || count < length) {
    updated = [];
  }

  for (let i = 0; i < count; i++) {
    const node = nodes[i + start];

    const visited = node !== null ? visitor(node) : null;
    if (updated !== null || visited === null || visited !== node) {
      if (updated === null) updated = createNodeArray(nodes.slice(0, i));

      if (visited) {
        if (Array.isArray(visited)) {
          for (const visitedNode of visited) {
            updated.push(visitedNode);
          }
        } else {
          updated.push(visited);
        }
      }
    }
  }
  return updated || nodes;
}
