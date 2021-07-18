import { SyntaxKind, TransformFlags, tokenToString } from '../ast/syntax-node';
import { concat, group, hardline, indent, line } from '../formatter/index';
import { skipWhitespace } from '../parser/scanner/common';
import {
	collectLeadingComments,
	collectTrailingComments,
} from '../parser/scanner/comments';

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
	detachedCommentsInfo: any;
	consumedCommentRanges: any[];
	containerPos: number;
	containerEnd: number;
	declarationListContainerEnd: number;
}

export function createPrinter(
	source: string,
	flags: PrinterFlags,
	space: string,
): Printer {
	return {
		source,
		flags,
		space,
		detachedCommentsInfo: undefined,
		containerPos: -1,
		containerEnd: -1,
		declarationListContainerEnd: -1,
		consumedCommentRanges: [],
	};
}

export function printAssignmentRight(
	left: any,
	right: any,
	printedRight: any,
): any {
	return ((left.kind === SyntaxKind.Identifier ||
		left.kind === SyntaxKind.StringLiteral ||
		left.kind === SyntaxKind.ComputedPropertyName ||
		left.kind === SyntaxKind.NumericLiteral ||
		left.kind === SyntaxKind.BigIntLiteral ||
		left.kind === SyntaxKind.IndexedAccessType ||
		left.kind === SyntaxKind.MemberAccessExpression) &&
		(right.kind === SyntaxKind.StringLiteral ||
			right.kind === SyntaxKind.OptionalExpression)) ||
		(right.kind === SyntaxKind.ClassExpression &&
			right.decorators &&
			right.decorators.node.elements.length) ||
		(right.kind === SyntaxKind.ConditionalExpression &&
			right.kind === SyntaxKind.BinaryExpression &&
			((right.right.transformFlags & TransformFlags.ArrayOrObjectLiteral) ===
				0 ||
				(right.right.kind === SyntaxKind.ArrayLiteral &&
					right.right.elementList.elements.length > 0) ||
				(right.right.kind === SyntaxKind.ObjectLiteral &&
					right.right.propertyList.properties.length > 0))) ||
		right.kind === SyntaxKind.CommaOperator ||
		right.kind === SyntaxKind.ParenthesizedExpression ||
		left.kind === SyntaxKind.StringLiteral
		? group(indent(concat([line, printedRight])), {})
		: concat([' ', printedRight]);
}

export function printKeywordNoSpace(printer: any, keyword: any): any {
	if (keyword) {
		return tokenToString(keyword.kind);
	}
}

export function printKeyword(
	printer: any,
	keyword: any,
	parent: any,
	addSpace: boolean,
): any {
	if (keyword) {
    let parts: any = []
        if (keyword.start !== -1 && parent.start !== keyword.start) {
          parts.push(emitLeadingComments(printer, keyword.start));
        }
    parts.push(addSpace
      ? concat([tokenToString(keyword.kind), ' '])
      : tokenToString(keyword.kind));
        if (parent.end !== keyword.end) {
          parts.push(printTrailingCommentsOfPosition(printer, keyword.end));
        }
        return concat(parts);
      }
      return '';
}

export function printPunctuator(punctuator: string, printer: any, pos: number, parent: any): any {
  const startPos = pos;
  let parts: any = []
  pos = skipWhitespace(printer.source, pos);

  if (startPos !== -1 && parent.start !== pos) {
    parts.push(emitLeadingComments(printer, startPos));
  }

  parts.push(punctuator);

  if (parent.end !== pos + 1) {
    parts.push(printTrailingCommentsOfPosition(printer, pos + 1));
  }
  return concat(parts);
}

export function shouldprintWhitespaceBeforeOperand(node: any): boolean {
	const { operand, operandToken } = node;

	return (
		operandToken.kind === SyntaxKind.VoidKeyword ||
		operandToken.kind === SyntaxKind.DeleteKeyword ||
		operandToken.kind === SyntaxKind.InKeyword ||
		operandToken.kind === SyntaxKind.TypeofKeyword ||
		((operand.kind === SyntaxKind.PrefixUpdateExpression ||
			operand.kind === SyntaxKind.UnaryExpression) &&
			((operandToken.kind === SyntaxKind.Add &&
				(operand.operandToken.kind === SyntaxKind.Add ||
					operand.operandToken.kind === SyntaxKind.Increment)) ||
				(operandToken.kind === SyntaxKind.Subtract &&
					(operand.operandToken.kind === SyntaxKind.Subtract ||
						operand.operandToken.kind === SyntaxKind.Decrement))))
	);
}

export function makeString(rawContent: any, enclosingQuote: any): any {
	const otherQuote = enclosingQuote === '"' ? "'" : '"';
	const regex = /\\([\S\s])|(["'])/g;
	const newContent = rawContent.replace(
		regex,
		(_match: any, escaped: any, quote: any) => {
			if (escaped === otherQuote) {
				return escaped;
			}

			if (quote === enclosingQuote) {
				return '\\' + quote;
			}

			if (quote) {
				return quote;
			}
			return /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(escaped)
				? escaped
				: '\\' + escaped;
		},
	);

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
		: true;
}

export function toggleSemicolon(printer: Printer): string {
	return (printer.flags & PrinterFlags.UseSemicolon) !==
		PrinterFlags.UseSemicolon && printer.flags & PrinterFlags.DisallowSemicolon
		? ''
		: ';';
}

export function positionIsSynthesized(pos: number): boolean {
	return !(pos >= 0);
}

export function lastOrUndefined<T>(array: readonly T[]): any {
	return array.length === 0 ? undefined : array[array.length - 1];
}

function hasDetachedComments(printer: Printer, pos: number) {
	return (
		printer.detachedCommentsInfo !== undefined &&
		printer.detachedCommentsInfo.nodePos === pos
	);
}

function getLeadingCommentsWithoutDetachedComments(printer: Printer) {
	// get the leading comments from detachedPos
	const pos = lastOrUndefined(
		printer.detachedCommentsInfo,
	).detachedCommentEndPos;
	const leadingComments = collectLeadingComments(
		printer.source,
		pos,
		printer.consumedCommentRanges,
	);

	if (printer.detachedCommentsInfo.length - 1) {
		printer.detachedCommentsInfo.pop();
	} else {
		printer.detachedCommentsInfo = undefined;
	}

	return leadingComments;
}

export function emitLeadingComments(printer: Printer, range: any) {
	let comments = getLeadingCommentsToEmit(printer, range);
	//emitNewLineBeforeLeadingComments(printer.lineMap, writer, range, comments);

	// Leading comments are emitted at /*leading comment1 */space/*leading comment*/space
	return printComments(
		printer,
		comments,
		/*leadingSeparator*/ false,
		/*trailingSeparator*/ true,
	);
}

function getLeadingCommentsToEmit(printer: Printer, pos: number) {
	if (printer.containerPos === -1 || pos !== printer.containerPos) {
		return hasDetachedComments(printer, pos)
			? getLeadingCommentsWithoutDetachedComments(printer)
			: collectLeadingComments(
					printer.source,
					pos,
					printer.consumedCommentRanges,
			  );
	}
	return '';
}

export function emitTrailingComments(printer: Printer, range: any) {
	const trailingComments = getTrailingCommentsToEmit(printer, range);
	// trailing comments are emitted at space/*trailing comment1 */space/*trailing comment*/
	return printComments(
		printer,
		trailingComments,
		/*leadingSeparator*/ true,
		/*trailingSeparator*/ false,
	);
}

export function printComments(
	printer: Printer,
	comments: any,
	leadingSeparator: boolean,
	trailingSeparator: boolean,
): any {
	if (comments && comments.length > 0) {
		let parts: any = [];
		if (leadingSeparator) {
			parts.push(' ');
		}
		let emitInterveningSeparator = false;

		for (const comment of comments) {
			if (emitInterveningSeparator) {
				parts.push(' ');
				emitInterveningSeparator = false;
			}
			parts.push(printer, printer.source.substring(comment.pos, comment.end));

			if (comment.kind === SyntaxKind.MultiLineComment) {
				if (comment.hasTrailingNewLine) {
					parts.push(concat([line]));
				} else {
					emitInterveningSeparator = true;
				}
			} else {
				parts.push(hardline);
			}
		}

		if (emitInterveningSeparator && trailingSeparator) {
			parts.push(' ');
		}
		return concat(parts);
	}
	return '';
}

export function printLeadingDetachedCommentsAndUpdateCommentsInfo(
	printer: Printer,
	node: any,
	removeComments: boolean,
) {
	let leadingComments: any;
	let currentDetachedCommentInfo: any;
	leadingComments = collectLeadingComments(printer.source, node.start);
//
	if (leadingComments) {
		const detachedComments: any = [];

		for (const comment of leadingComments) {
			detachedComments.push(comment);
		}

    if (detachedComments.length) {
			leadingComments = printComments(
				printer,
				detachedComments,
				/*leadingSeparator*/ false,
				/*trailingSeparator*/ true,
			);
			currentDetachedCommentInfo = {
				nodePos: node.start,
				detachedCommentEndPos: lastOrUndefined(detachedComments).end,
			};
		}
	}

	if (currentDetachedCommentInfo) {
		if (printer.detachedCommentsInfo) {
			printer.detachedCommentsInfo.push(currentDetachedCommentInfo);
		} else {
			printer.detachedCommentsInfo = [currentDetachedCommentInfo];
		}

		return leadingComments;
	}
	return '';
}

function getTrailingCommentsToEmit(printer: Printer, end: number) {
	// Emit the trailing comments only if the container's end doesn't match because the container should take care of emitting these comments
	if (
		printer.containerEnd === -1 ||
		(end !== printer.containerEnd &&
			end !== printer.declarationListContainerEnd)
	) {
		return collectTrailingComments(printer.source, end);
	}
	return '';
}

export function printTrailingCommentsOfPosition(printer: Printer, pos: number) {
	const trailingComments = getTrailingCommentsToEmit(printer, pos);
	// trailing comments of a position are emitted at /*trailing comment1 */space/*trailing comment*/space
	return printComments(
		printer,
		trailingComments,
		/*leadingSeparator*/ false,
		/*trailingSeparator*/ true,
	);
}

export function printNodeWithComments(
	printer: Printer,
	node: any,
	lineMap: number[],
	parentNode: any, emitCallback: any) {

  if (node) {
      const { start, end } = node;
      if ((start < 0 && end < 0) || (start === end)) {
          // Both pos and end are synthesized, so just emit the node without comments.
          return emitCallback(printer, node, lineMap, parentNode);
      }
          const skipLeadingComments = start < 0;
          const skipTrailingComments = end < 0;

          let parts = [];

          // Emit leading comments if the position is not synthesized and the node
          // has not opted out from emitting leading comments.
          if (!skipLeadingComments) {
            parts.push(emitLeadingComments(printer, start))
          }

          // Save current container state on the stack.
          const savedContainerPos = printer.containerPos;
          const savedContainerEnd = printer.containerEnd;
          const savedDeclarationListContainerEnd = printer.declarationListContainerEnd;

          if (!skipLeadingComments) {
            printer.containerPos = start;
          }

          if (!skipTrailingComments) {
            printer.containerEnd = end;

              // To avoid invalid comment emit in a down-level binding pattern, we
              // keep track of the last declaration list container's end
              if (node.kind === SyntaxKind.VariableDeclarationList) {
                printer.declarationListContainerEnd = end;
              }
          }

          parts.push(emitCallback(printer, node, lineMap, parentNode));

          // Restore previous container state.
          printer.containerPos = savedContainerPos;
          printer.containerEnd = savedContainerEnd;
          printer.declarationListContainerEnd = savedDeclarationListContainerEnd;

          // Emit trailing comments if the position is not synthesized and the node
          // has not opted out from emitting leading comments and is an emitted node.
          if (!skipTrailingComments) {
              parts.push(emitTrailingComments(printer, end))
          }

          return concat(parts);
      }
}


export function emitBodyWithDetachedComments(printer: Printer, detachedRange: any, lineMap: any, parentNode: any, emitCallback: any) {
  const { pos, end } = detachedRange;
  const skipLeadingComments = pos < 0;
  const skipTrailingComments = end < 0;
let parts: any = []
  if (!skipLeadingComments) {
    parts.push(printLeadingDetachedCommentsAndUpdateCommentsInfo(printer, detachedRange, false));
  }

  parts.push(emitCallback(printer, detachedRange, lineMap, parentNode));

  if (!skipTrailingComments) {
      parts.push(emitLeadingComments(printer, detachedRange.end));
  }
  return concat(parts);
}

export function nodeIsSynthesized(node: any): boolean {
  return positionIsSynthesized(node.start) || positionIsSynthesized(node.end);
}
