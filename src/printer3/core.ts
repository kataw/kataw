import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags, tokenToString } from '../ast/syntax-node';
import { concat } from '../formatter/index';

export const enum PrinterFlags {
  None,
  SingleQuote = 1 << 0,
  ObjectCurlySpacing = 1 << 1,
  ArrayBracketSpacing = 1 << 2,
  NoSemi = 1 << 2,
}

export interface Printer {
  source: string;
  flags: PrinterFlags
}

export function createPrinter(source: string, flags: PrinterFlags): Printer {
  return {
    source,
    flags
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
        ((shortCircuit.right.transformFlags & TransformFlags.ArrayOrObjectLiteral) === 0 ||
          (shortCircuit.right.kind === SyntaxKind.ArrayLiteral && shortCircuit.right.elementList.elements.length > 0) ||
          (shortCircuit.right.kind === SyntaxKind.ObjectLiteral &&
            shortCircuit.right.propertyList.properties.length > 0))
      );
    }
    case SyntaxKind.ClassExpression:
      return right.decorators && right.decorators.node.elements.length;
  }
  return false;
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



