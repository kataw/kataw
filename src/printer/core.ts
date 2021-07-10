import { SyntaxKind, TransformFlags, tokenToString } from '../ast/syntax-node';
import { hardline, concat, group, indent, line } from '../formatter/index';
import { collectLeadingComments, collectTrailingComments } from '../parser/scanner/comments';

export const enum PrinterFlags {
  None,
  SingleQuote = 1 << 0,
  ObjectCurlySpacing = 1 << 1,
  ArrayBracketSpacing = 1 << 2,
  UseSemicolon = 1 << 3,
  ArrowParens = 1 << 4,
  TrailinComma = 1 << 5,
  DisallowStringEscape = 1 << 6,
  DisallowSemicolon = 1 << 7,
  // Insert space after @ in decorator
  SpaceAfterAt = 1 << 8,
  UnParenthezisedNew = 1 << 9,
  NoWhiteSpace = 1 << 10,
  QuoteProps = 1 << 11,
  CoerceQuoteProps = 1 << 12,
  ArrayBracketNewline = 1 << 13,
  EnforceLineBreaksBetweenArray = 1 << 14,
  ComputedPropertySpacing = 1 << 15,
  PrintComments = 1 << 16,
}

export interface Printer {
  source: string;
  space: string;
  flags: PrinterFlags;
  containerPos: number;
  containerEnd: number;
  nextListElementPos: number;
  declarationListContainerEnd: number;
  lastSingleLinePos: number;
  detachedCommentsInfo: any;
}

export function createPrinter(source: string, flags: PrinterFlags, space: string): Printer {
  return {
    source,
    flags,
    space,
    containerPos: -1,
    containerEnd: -1,
    nextListElementPos: 0,
    lastSingleLinePos: -1,
    declarationListContainerEnd: -1,
    detachedCommentsInfo: undefined
  };
}

export function printAssignmentRight(left: any, right: any, printedRight: any): any {
  return ((left.kind === SyntaxKind.Identifier ||
    left.kind === SyntaxKind.StringLiteral ||
    left.kind === SyntaxKind.ComputedPropertyName ||
    left.kind === SyntaxKind.NumericLiteral ||
    left.kind === SyntaxKind.BigIntLiteral ||
    left.kind === SyntaxKind.IndexedAccessType ||
    left.kind === SyntaxKind.MemberAccessExpression) &&
    (right.kind === SyntaxKind.StringLiteral || right.kind === SyntaxKind.OptionalExpression)) ||
    (right.kind === SyntaxKind.ClassExpression && right.decorators && right.decorators.node.elements.length) ||
    (right.kind === SyntaxKind.ConditionalExpression &&
      right.kind === SyntaxKind.BinaryExpression &&
      ((right.right.transformFlags & TransformFlags.ArrayOrObjectLiteral) === 0 ||
        (right.right.kind === SyntaxKind.ArrayLiteral && right.right.elementList.elements.length > 0) ||
        (right.right.kind === SyntaxKind.ObjectLiteral && right.right.propertyList.properties.length > 0))) ||
    right.kind === SyntaxKind.CommaOperator ||
    right.kind === SyntaxKind.ParenthesizedExpression ||
    left.kind === SyntaxKind.StringLiteral
    ? group(indent(concat([line, printedRight])), {})
    : concat([' ', printedRight]);
}

export function lastOrUndefined<T>(array: readonly T[]): any {
  return array.length === 0 ? undefined : array[array.length - 1];
}

export function printKeywordNoSpace(printer: any, keyword: any): any {
  if (keyword) {
    return tokenToString(keyword);
  }
}

export function printKeyword(printer: any, keyword: any, parent: any, addSpace: boolean): any {
  if (keyword) {
    return addSpace ? concat([tokenToString(keyword), ' ']) : tokenToString(keyword);
  }
  return '';
}

export function shouldprintWhitespaceBeforeOperand(node: any): boolean {
  const { operand, operandToken } = node;

  return (
    operandToken.kind === SyntaxKind.VoidKeyword ||
    operandToken.kind === SyntaxKind.DeleteKeyword ||
    operandToken.kind === SyntaxKind.InKeyword ||
    operandToken.kind === SyntaxKind.TypeofKeyword ||
    ((operand.kind === SyntaxKind.PrefixUpdateExpression || operand.kind === SyntaxKind.UnaryExpression) &&
      ((operandToken.kind === SyntaxKind.Add &&
        (operand.operandToken.kind === SyntaxKind.Add || operand.operandToken.kind === SyntaxKind.Increment)) ||
        (operandToken.kind === SyntaxKind.Subtract &&
          (operand.operandToken.kind === SyntaxKind.Subtract || operand.operandToken.kind === SyntaxKind.Decrement))))
  );
}

export function makeString(rawContent: any, enclosingQuote: any): any {
  const otherQuote = enclosingQuote === '"' ? "'" : '"';
  const regex = /\\([\S\s])|(["'])/g;
  const newContent = rawContent.replace(regex, (_match: any, escaped: any, quote: any) => {
    if (escaped === otherQuote) {
      return escaped;
    }

    if (quote === enclosingQuote) {
      return '\\' + quote;
    }

    if (quote) {
      return quote;
    }
    return /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(escaped) ? escaped : '\\' + escaped;
  });

  return enclosingQuote + newContent + enclosingQuote;
}

export function shouldFlatten(node: any): boolean {
  if (!node.left.operatorToken) return false;
  const parentOp = node.operatorToken.kind;
  const nodeOp = node.left.operatorToken.kind;
  const parentTransformFlags = node.operatorToken.transformFlags;
  const nodeTransformFlags = node.left.operatorToken.transformFlags;
  // Return 'false' if different precedence value
  return (parentOp & SyntaxKind.Precedence) ^ (nodeOp & SyntaxKind.Precedence)
    ? false
    : parentOp === SyntaxKind.Exponentiate
    ? false
    : (nodeTransformFlags === SyntaxKind.Modulo && parentTransformFlags & TransformFlags.MultiplicativeOperators) ||
      (parentTransformFlags === SyntaxKind.Modulo && nodeTransformFlags & TransformFlags.MultiplicativeOperators)
    ? false
    : nodeOp !== parentOp &&
      parentTransformFlags & TransformFlags.MultiplicativeOperators &&
      nodeTransformFlags & TransformFlags.MultiplicativeOperators
    ? false
    : parentTransformFlags & (TransformFlags.BitshiftOperators | TransformFlags.EqualityOperators) &&
      nodeTransformFlags & (TransformFlags.BitshiftOperators | TransformFlags.EqualityOperators)
    ? false
    : true;
}

export function toggleSemicolon(printer: Printer): string {
  return (printer.flags & PrinterFlags.UseSemicolon) !== PrinterFlags.UseSemicolon &&
    printer.flags & PrinterFlags.DisallowSemicolon
    ? ''
    : ';';
}

export function printWithComments(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: any,
  printCallback: any,
): any {
  if (node) {
    const { start, end } = node;

    if ((start < 0 && end < 0) || start === end) {
      return printCallback(printer, node, lineMap, parentNode);
    }

    let leadingComments: any = [];

    if (start >= 0) {
      leadingComments = printLeadingComments(printer, start);
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

    const printed = printCallback(printer, node, lineMap, parentNode);

    // Restore previous container state.
    printer.containerPos = containerPos;
    printer.containerEnd = containerEnd;
    printer.declarationListContainerEnd = declarationListContainerEnd;

    if (end >= 0) {
      // printTrailingComments(printer, end);
    }

    if (leadingComments && leadingComments.length > 0) {
      return concat([
        printComments(printer, leadingComments, true),
        printed
      ])
    }

    return printed;
  }
  return '';
}

function printComments(printer: Printer, comments: any, printLeadingSpace: boolean = false) {
  let parts: any = []
for (const comment of comments) {
  if (printLeadingSpace) {
    parts.push(hardline);
    printLeadingSpace = false;
  }

  if (comment.kind === SyntaxKind.MultiLineComment) {
    parts.push(printer.source.substring(comment.pos, comment.end))
    if (comment.hasTrailingNewLine) {
      parts.push(hardline);
    } else {
      printLeadingSpace = true;
    }
  } else {
    parts.push(concat([printer.source.substring(comment.pos, comment.end), hardline]))
  }
  }
  return concat(parts);
}

function hasDetachedComments(printer: Printer, pos: number) {
  return printer.detachedCommentsInfo !== undefined && lastOrUndefined(printer.detachedCommentsInfo).nodePos === pos;
}

export function printLeadingComments(printer: Printer, pos: number) {
  let leadingComments!: any[] | undefined;
   if (printer.containerPos === -1 || pos !== printer.containerPos) {
    leadingComments = hasDetachedComments(printer, pos)
      ? getLeadingCommentsWithoutDetachedComments(printer)
      : getLeadingCommentRanges(printer.source, pos);
  }
  return leadingComments;
}

function getLeadingCommentsWithoutDetachedComments(printer: Printer) {
  const pos = lastOrUndefined(printer.detachedCommentsInfo).detachedCommentEndPos;
  const leadingComments = getLeadingCommentRanges(printer.source, pos);
  if (printer.detachedCommentsInfo.length - 1) {
    printer.detachedCommentsInfo.pop();
  } else {
    printer.detachedCommentsInfo = undefined;
  }

  return leadingComments;
}

export function getLeadingCommentRanges(text: string, pos: number): any {
  if (pos !== undefined) {
    return collectLeadingComments(text, pos);
  }
}
