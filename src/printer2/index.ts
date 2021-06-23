import { RootNode } from "../ast/rootNode";
import {
  Printer,
  lastOrUndefined,
  printDetachedComments,
  printLeadingComments,
} from "./common";
import { toString, concat } from "./formatter";

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
            /* newline */ ""
          )
        : "",
      printStatement(root, printer),
      end >= 0
        ? printLeadingComments(
            printer,
            // In terms of performance, there is not much to gain from creating a new 'CST node
            // just to retieve the 'end' value of the last statement in the array, so we
            // take a shortcut...
            statements.length !== 0 ? lastOrUndefined(statements).end : end
          )
        : "",
    ]),
    { printWidth: 80 }
  );
}

// Prints CST nodes on statement level with comment attachment
export function printStatementWithComment(
  root: RootNode,
  printer: Printer
): any {}

// Prints CST nodes on statement level without comments
export function printStatement(root: RootNode, printer: Printer): any {}
