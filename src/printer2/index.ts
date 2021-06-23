import { SyntaxKind, NodeFlags } from '../ast/syntax-node';
import { RootNode } from '../ast/rootNode';
import {
  Printer,
  lastOrUndefined,
  printDetachedComments,
  printLeadingComments,
  printTrailingComments,
} from './common';
import { toString, concat, hardline } from './formatter';

/**
 * Create a new printer instance.
 */
function createPrinter(source: string) {
  return {
    source,
    containerPos: 0,
    containerEnd: 0,
    declarationListContainerEnd: 0,
    lineMap: [],
    detachedCommentsInfo: undefined,
  };
}

export function printSource(root: RootNode): any {
  // save `source` on the new printer instance
  const printer = createPrinter(root.source);
  // extract `start` and `end` from the `RootNode`
  const { start, end, statements } = root;
  return toString(
    concat([
      start >= 0
        ? printDetachedComments(
            printer,
            root,
            /* sameIndent */ true,
            /* newline */ ''
          )
        : '',
      printStatement(root, printer),
      end >= 0
        ? printLeadingComments(
            printer,
            // In terms of performance, there is not much to gain from creating a new 'CST node
            // just to retieve the 'end' value of the last statement in the array, so we
            // take a shortcut...
            statements.length !== 0 ? lastOrUndefined(statements).end : end
          )
        : '',
    ]),
    { printWidth: 80 }
  );
}

// Prints CST nodes on statement level with comment attachment
export function printStatementWithComment(node: any, printer: Printer): any {
  if (node) {
    const { start, end } = node;
    if ((start < 0 && end < 0) || start === end) {
      return printStatement(node, printer);
    }

    let parts = [];

    if (start >= 0) {
      parts.push(printLeadingComments(printer, start));
    }

    const { containerPos, containerEnd, declarationListContainerEnd } = printer;

    if (start >= 0) {
      printer.containerPos = start;
    }

    if (end >= 0) {
      printer.containerEnd = end;

      if (node.kind === SyntaxKind.VariableDeclarationList) {
        printer.declarationListContainerEnd = end;
      }
    }

    parts.push(printStatement(node, printer));

    // Restore previous container state.
    printer.containerPos = containerPos;
    printer.containerEnd = containerEnd;
    printer.declarationListContainerEnd = declarationListContainerEnd;

    if (end >= 0) {
      parts.push(printTrailingComments(printer, end));
    }

    return concat(parts);
  }
  return '';
}

// Prints CST nodes on statement level without comments
export function printStatement(node: any, printer: Printer): any {
  switch (node.kind) {
    case SyntaxKind.RootNode:
      return printRootNode(node, printer);
    case SyntaxKind.ExpressionStatement:
      return printExpressionStatement(node, printer);
    default:
      node.flags & NodeFlags.ExpressionNode
        ? printExpression(node, printer)
        : '';
  }
}

// Prints CST expresion nodes with comment attachment
export function printExpressionWithComment(node: any, printer: Printer): any {
  if (node) {
    const { start, end } = node;
    if ((start < 0 && end < 0) || start === end) {
      return printExpression(node, printer);
    }

    let parts = [];

    if (start >= 0) {
      parts.push(printLeadingComments(printer, start));
    }

    const { containerPos, containerEnd, declarationListContainerEnd } = printer;

    if (start >= 0) {
      printer.containerPos = start;
    }

    if (end >= 0) {
      printer.containerEnd = end;

      if (node.kind === SyntaxKind.VariableDeclarationList) {
        printer.declarationListContainerEnd = end;
      }
    }

    parts.push(printExpression(node, printer));

    // Restore previous container state.
    printer.containerPos = containerPos;
    printer.containerEnd = containerEnd;
    printer.declarationListContainerEnd = declarationListContainerEnd;

    if (end >= 0) {
      parts.push(printTrailingComments(printer, end));
    }

    return concat(parts);
  }
  return '';
}

export function printExpression(node: any, printer: Printer): any {
  switch (node.kind) {
    case SyntaxKind.Identifier:
      return printIdentifier(node, printer);
    default:
      return '';
  }
}

export function printExpressionStatement(node: any, printer: Printer): any {
  return concat([printExpression(node.expression, printer), ';']);
}

export function printIdentifier(node: any, printer: Printer): any {
  return node.text;
}

export function printRootNode(node: any, printer: Printer): any {
  // TODO: Directives
  return concat([
    hardline,
    printList(
      printer,
      node,
      node.statements,
      /* delimiter */ '',
      printStatement
    ),
  ]);
}

export function printList(
  printer: Printer,
  node: any,
  children: any,
  delimiter: string,
  print: (node: any, printer: any) => string
): any {
  const elements: any = [];
  const count = children.length;

  let previousSibling: any;

  for (let i = 0; i < count; i++) {
    const child = children[i];
    if (previousSibling) {
      elements.push(delimiter);
    }
    // print this child.
    elements.push(print(child, printer));
    previousSibling = child;
  }
  return concat(elements);
}
