import { softline } from './../formatter/index';
import { SyntaxKind, TransformFlags, tokenToString } from '../ast/syntax-node';
import { concat, group, hardline, indent, line } from '../formatter/index';
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
  NoComments = 1 << 16,
}

export interface Printer {
  source: string;
  space: string;
  flags: PrinterFlags;
  detachedCommentsInfo: any,
  consumedCommentRanges: any[];
  leadingCommentRangePositions: any[];
  trailingCommentRangePositions: any[];
}

export function createPrinter(source: string, flags: PrinterFlags, space: string): Printer {
  return {
    source,
    flags,
    space,
    detachedCommentsInfo: undefined,
    consumedCommentRanges: [],
    leadingCommentRangePositions: [],
    trailingCommentRangePositions: []
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

export function positionIsSynthesized(pos: number): boolean {
  return !(pos >= 0);
}


export function getTrailingComments(printer: Printer, range: any) {
  let comments = getTrailingCommentsOfPosition(printer, range.end);
  return comments;
}

export function getTrailingCommentsOfPosition(printer: Printer, pos: number) {
  if (printer.flags & PrinterFlags.NoComments || positionIsSynthesized(pos) || printer.trailingCommentRangePositions[pos]) {
      return '';
  }

  printer.trailingCommentRangePositions[pos] = true;
  const comments = collectTrailingComments(printer.source, pos);
  return consumeCommentRanges(printer, comments);
}

function hasConsumedCommentRange(printer: Printer, comment: any) {
  return comment.end === printer.consumedCommentRanges[comment.pos];
}


function consumeCommentRange(printer: Printer, comment: any) {
  if (!hasConsumedCommentRange(printer, comment)) {
      printer.consumedCommentRanges[comment.pos] = comment.end;
      return true;
  }

  return false;
}

function consumeCommentRanges(printer: Printer, comments: any[]) {
  let consumed: any;
  if (comments) {
      let commentsSkipped = 0;
      let commentsConsumed = 0;
      for (let i = 0; i < comments.length; i++) {
          const comment = comments[i];
          if (consumeCommentRange(printer, comment)) {
              commentsConsumed++;
              if (commentsSkipped !== 0) {
                  if (consumed === undefined) {
                      consumed = [comment];
                  }
                  else {
                      consumed.push(comment);
                  }
              }
          }
          else {
              commentsSkipped++;
              if (commentsConsumed !== 0 && consumed === undefined) {
                  consumed = comments.slice(0, i);
              }
          }
      }

      if (commentsConsumed) {
          return consumed || comments;
      }
  }

  //return [];
}

function lastOrUndefined<T>(array: readonly T[]): any {
  return array.length === 0 ? undefined : array[array.length - 1];
}

function hasDetachedComments(printer: Printer, pos: number) {
  return printer.detachedCommentsInfo !== undefined && (printer.detachedCommentsInfo).nodePos === pos;
}


export function getLeadingComments(printer: Printer, range: any) {
  let comments = getLeadingCommentsOfPosition(printer, range.start);
  return comments;
}

function getLeadingCommentsWithoutDetachedComments(printer: Printer) {
  // get the leading comments from detachedPos
  const pos = lastOrUndefined(printer.detachedCommentsInfo).detachedCommentEndPos;
  const leadingComments = collectLeadingComments(printer.source, pos);
  if (printer.detachedCommentsInfo.length - 1) {
    printer.detachedCommentsInfo.pop();
  }
  else {
    printer.detachedCommentsInfo = undefined;
  }

  return leadingComments;
}

function getLeadingCommentsOfPosition(printer: Printer, pos: number) {
  if (positionIsSynthesized(pos) || printer.leadingCommentRangePositions[pos]) {
      return undefined;
  }
  printer.leadingCommentRangePositions[pos] = true;
  const comments = hasDetachedComments(printer, pos)
      ? getLeadingCommentsWithoutDetachedComments(printer)
      : collectLeadingComments(printer.source, pos);
  return consumeCommentRanges(printer, comments);
}



export function emitLeadingComments(printer: Printer, range: any, comments = getLeadingComments(printer, range)) {
  //emitNewLineBeforeLeadingComments(printer.lineMap, writer, range, comments);

  // Leading comments are emitted at /*leading comment1 */space/*leading comment*/space
  return printComments(printer, comments, /*leadingSeparator*/ false, /*trailingSeparator*/ true);
}

export function emitTrailingComments(printer: Printer,range: any, comments = getTrailingComments(printer, range)) {
  // trailing comments are emitted at space/*trailing comment1 */space/*trailing comment*/
  return printComments(printer, comments, /*leadingSeparator*/ true, /*trailingSeparator*/ false);
}

export function printComments(printer: Printer, comments: any, leadingSeparator: boolean, trailingSeparator: boolean): any {
  if (comments && comments.length > 0) {
    let pussy: any = [];
    if (leadingSeparator) {
    pussy.push(' ');
    }
    let emitInterveningSeparator = false;
    for (const comment of comments) {
        if (emitInterveningSeparator) {
          pussy.push(' ');
            emitInterveningSeparator = false;
        }
        pussy.push(printer, printer.source.substring(comment.pos, comment.end));

        if (comment.hasTrailingNewLine) {
          pussy.push(softline);
        }
        else {
            emitInterveningSeparator = true;
        }
    }

    if (emitInterveningSeparator && trailingSeparator) {
      pussy.push(' ');
    }
return concat(pussy);
}
return '';
}

//writeCommentRange(printertext, lineMap, writer, comment, newLine);
