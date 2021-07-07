import { SyntaxKind, TransformFlags, tokenToString } from '../ast/syntax-node';
import { concat, group, indent, line } from '../formatter/index';

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

}

export interface Printer {
  source: string;
  space: string;
  flags: PrinterFlags
}

export function createPrinter(source: string, flags: PrinterFlags, space: string): Printer {
  return {
    source,
    flags,
    space
  };
}

export function printAssignmentRight(left: any, right: any, printedRight: any): any {
  return ((left.kind === SyntaxKind.Identifier ||
    left.kind === SyntaxKind.StringLiteral ||
    left.kind === SyntaxKind.IndexedAccessType ||
    left.kind === SyntaxKind.MemberAccessExpression) &&
    (right.kind === SyntaxKind.StringLiteral ||
      right.kind === SyntaxKind.OptionalExpression)) ||
    (right.kind === SyntaxKind.ClassExpression &&
      right.decorators &&
      right.decorators.node.elements.length) ||
    (right.kind === SyntaxKind.ConditionalExpression &&
      right.kind === SyntaxKind.BinaryExpression &&
      ((right.right.transformFlags & TransformFlags.ArrayOrObjectLiteral) === 0 ||
        (right.right.kind === SyntaxKind.ArrayLiteral &&
          right.right.elementList.elements.length > 0) ||
        (right.right.kind === SyntaxKind.ObjectLiteral &&
          right.right.propertyList.properties.length > 0))) ||
    right.kind === SyntaxKind.CommaOperator ||
    left.kind === SyntaxKind.StringLiteral
    ? group(indent(concat([line, printedRight])), {})
    : concat([' ', printedRight]);
}

export function printKeywordNoSpace(printer: any, keyword: any): any {
  if (keyword) {
    return tokenToString(keyword);
  }
  return '';
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
  if (!node.left.operatorToken) return false
  const parentOp = node.operatorToken.kind
  const nodeOp = node.left.operatorToken.kind
  const parentTransformFlags = node.operatorToken.transformFlags
  const nodeTransformFlags = node.left.operatorToken.transformFlags
  // Return 'false' if different precedence value
  return (parentOp & SyntaxKind.Precedence) ^ (nodeOp & SyntaxKind.Precedence)
    ? false
    : parentOp === SyntaxKind.Exponentiate
    ? false
    : (nodeTransformFlags === SyntaxKind.Modulo &&
        parentTransformFlags & TransformFlags.MultiplicativeOperators) ||
      (parentTransformFlags === SyntaxKind.Modulo &&
        nodeTransformFlags & TransformFlags.MultiplicativeOperators)
    ? false
    : nodeOp !== parentOp &&
      parentTransformFlags & TransformFlags.MultiplicativeOperators &&
      nodeTransformFlags & TransformFlags.MultiplicativeOperators
    ? false
    : parentTransformFlags &
        (TransformFlags.BitshiftOperators | TransformFlags.EqualityOperators) &&
      nodeTransformFlags &
        (TransformFlags.BitshiftOperators | TransformFlags.EqualityOperators)
    ? false
    : true
}

export function toggleSemicolon(printer: Printer): string {
  return (printer.flags & PrinterFlags.UseSemicolon) !== PrinterFlags.UseSemicolon && printer.flags & PrinterFlags.DisallowSemicolon
    ? ''
    : ';';
}

