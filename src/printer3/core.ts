import { SyntaxNode, SyntaxKind, NodeFlags, tokenToString } from '../ast/syntax-node';
import { concat } from '../formatter/index';

export interface Printer {
  source: string;
}

export function createPrinter(source: string): Printer {
  return {
    source
  };
}
export function canBreakAssignment(left: any, right: any): boolean {
  switch (right.kind) {
    case SyntaxKind.StringType:
    case SyntaxKind.CommaOperator:
    case SyntaxKind.BinaryExpression:
      return true;
    case SyntaxKind.ConditionalExpression: {
      const { shortCircuit } = right;
      return (
        shortCircuit.kind === SyntaxKind.BinaryExpression &&
        ((shortCircuit.right.kind !== SyntaxKind.ArrayLiteral &&
          shortCircuit.right.kind !== SyntaxKind.ObjectLiteral) ||
          (shortCircuit.right.kind === SyntaxKind.ArrayLiteral && shortCircuit.right.elementList.elements.length > 0) ||
          (shortCircuit.right.kind === SyntaxKind.ObjectLiteral &&
            shortCircuit.right.propertyList.properties.length > 0))
      );
    }
    case SyntaxKind.ClassExpression:
      return right.decorators && right.decorators.node.elements.length;
  }

  if (
    left.kind & SyntaxKind.IsIdentifier ||
    left.flags & NodeFlags.IsMemberExpression ||
    left.kind === SyntaxKind.PrivateIdentifier ||
    left.kind === SyntaxKind.StringLiteral
  ) {
    let node = right;
    while (node && node.kind === SyntaxKind.UnaryExpression) {
      node = node.operand;
    }
    if ((node && node.kind === SyntaxKind.StringKeyword) || node.flags & NodeFlags.IsMemberExpression) {
      return true;
    }
  }

  return false;
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
