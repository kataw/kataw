import { SyntaxKind } from '../ast/syntax-node';
import { createRootNode } from '../ast/rootNode';
import { createAssignmentExpression } from '../ast/expressions/assignment-expr';
import { createExpressionStatement } from '../ast/statements/expression-stmt';
import { createElementList } from '../ast/expressions/element-list';
import { createArrayLiteral } from '../ast/expressions/array-literal';
import { Transform, createNodeArray, extractSingleNode, updateNode, startLexicalEnvironment } from './core';

export function visitEachChild(transform: Transform, node: any, visitor: (node: SyntaxKind) => SyntaxKind): any {
  const kind = node.kind;
  switch (kind) {
    case SyntaxKind.RootNode:
      startLexicalEnvironment(transform);
      return node.statements !== visitNodes(node.statements, visitor)
        ? updateNode(createRootNode(node.directives, node.statements, node.isModule, node.source, node.fuleName), node)
        : node;
    case SyntaxKind.AssignmentExpression:
      return node.left !== visitNode(node.left, visitor) ||
        node.operatorToken !== visitNode(node.operatorToken, visitor) ||
        node.right !== visitNode(node.right, visitor)
        ? updateNode(createAssignmentExpression(node.left, node.operatorToken, node.right, node.start, node.end), node)
        : node;

    case SyntaxKind.ExpressionStatement:
      return node.expression !== visitNode(node.expression, visitor)
        ? updateNode(createExpressionStatement(node.expression, node.start, node.end), node)
        : node;
    case SyntaxKind.ElementList:
      return node.elements !== visitNode(node.elements, visitor) ||
        node.trailingComma !== visitNode(node.trailingComma, visitor) ||
        node.flags !== visitNode(node.flags, visitor)
        ? createElementList(node.elements, node.trailingComma, node.flags, node.start, node.end)
        : node;
    case SyntaxKind.ArrayLiteral:
      return node.elementList !== visitNode(node.elementList, visitor) || node.flags !== visitNode(node.flags, visitor)
        ? createArrayLiteral(node.elementList, node.flags, node.start, node.end)
        : node;
  }
}

export function visitNode(node: Node, visitor: (node: any) => any, lift?: any): any | undefined {
  if (node === null || visitor === null) {
    return node;
  }

  const visited = visitor(node);

  if (visited === node) return node;

  let visitedNode: any = null;

  if (visited === null) return null;

  if (Array.isArray(visited)) {
    visitedNode = (lift || extractSingleNode)(visited);
  } else {
    visitedNode = visited;
  }

  return visitedNode;
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
