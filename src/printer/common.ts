import { SyntaxKind, NodeFlags, tokenToString } from '../ast/syntax-node';
import { Char } from '../parser/scanner/char';
import { collectLeadingComments, collectTrailingComments } from '../parser/scanner/comments';
import { skipWhitespace } from '../parser/scanner/common';

export const enum PrinterContext {
  None = 0,
  SingleLine = 0,
  MultiLine = 1 << 0,
  PreserveLines = 1 << 1,
  NotDelimited = 0,
  BarDelimited = 1 << 2,
  AmpersandDelimited = 1 << 3,
  CommaDelimited = 1 << 4,
  AllowTrailingComma = 1 << 5,
  Indented = 1 << 6,
  SpaceBetweenBraces = 1 << 7,
  SpaceBetweenSiblings = 1 << 8,
  Braces = 1 << 9,
  Parenthesis = 1 << 10,
  AngleBrackets = 1 << 11,
  SquareBrackets = 1 << 12,
  OptionalIfUndefined = 1 << 13,
  OptionalIfEmpty = 1 << 14,
  PreferNewLine = 1 << 15,
  NoTrailingNewLine = 1 << 16,
  NoInterveningComments = 1 << 17,
  NoSpaceIfEmpty = 1 << 18
}

export function lastOrUndefined<T>(array: readonly T[]): any {
  return array.length === 0 ? undefined : array[array.length - 1];
}

export interface Printer {
  source: string;
  output: string;
  indent: number;
  lineStart: boolean;
  lineCount: number;
  linePos: number;
  containerPos: number;
  containerEnd: number;
  nextListElementPos: number;
  hasWrittenComment: boolean;
  declarationListContainerEnd: number;
  lastSingleLinePos: number;
  detachedCommentsInfo: any;
  lineMap: any;
}

export function createPrinter(source: string): Printer {
  return {
    source,
    output: '',
    indent: 0,
    lineStart: false,
    lineCount: 0,
    linePos: 0,
    hasWrittenComment: false,
    nextListElementPos: 0,
    containerPos: -1,
    containerEnd: -1,
    lastSingleLinePos: -1,
    declarationListContainerEnd: -1,
    lineMap: [],
    detachedCommentsInfo: undefined
  };
}

export function writeLine(printer: Printer) {
  if (!printer.lineStart) {
    printer.output += '\n';
    printer.lineStart = true;
  }
}
function stringRepeat(str: string, num: number) {
  var result = '';
  while (true) {
    if (num & 1) {
      // (1)
      result += str;
    }
    num >>>= 1; // (2)
    if (num <= 0) break;
    str += str;
  }

  return result;
}
export function write(printer: Printer, s: string) {
  if (printer.lineStart) {
    printer.output += stringRepeat(' ', printer.indent * 2);
    printer.lineStart = false;
  }
  printer.output += s;
}

export function printWithComments(node: any, printer: Printer, printCallback: (node: any, printer: Printer) => void) {
  if (node) {
    const { start, end } = node;

    if ((start < 0 && end < 0) || start === end) {
      printCallback(node, printer);
    } else {
      if (start >= 0) printLeadingComments(printer, start);

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

      printCallback(node, printer);

      // Restore previous container state.
      printer.containerPos = containerPos;
      printer.containerEnd = containerEnd;
      printer.declarationListContainerEnd = declarationListContainerEnd;

      if (end >= 0) {
        printTrailingComments(printer, end);
      }
    }
  }
}

function getTrailingCommentRanges(text: string, pos: number): any[] {
  return collectTrailingComments(text, pos);
}

function getTrailingCommentsToEmit(printer: Printer, end: number): any {
  if (printer.containerEnd === -1 || (end !== printer.containerEnd && end !== printer.declarationListContainerEnd)) {
    return getTrailingCommentRanges(printer.source, end);
  }
}

function printTrailingComments(printer: Printer, pos: number) {
  const trailingComments = getTrailingCommentsToEmit(printer, pos);
  if (trailingComments && trailingComments.length > 0) {
    let emitInterveningSeparator = false;
    for (const comment of trailingComments) {
      if (emitInterveningSeparator) {
        write(printer, ' ');
        emitInterveningSeparator = false;
      }
      write(printer, printer.source.substring(comment.pos, comment.end));
      if (comment.hasTrailingNewLine) {
        writeLine(printer);
      } else {
        emitInterveningSeparator = true;
      }
    }
  }
  return '';
}

export function printLeadingCommentsOfPosition(printer: Printer, pos: number) {
  if (pos === -1) {
    return;
  }
  printLeadingComments(printer, pos);
}
function getLeadingCommentsWithoutDetachedComments(printer: Printer) {
  // get the leading comments from detachedPos
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

function hasDetachedComments(printer: Printer, pos: number) {
  return printer.detachedCommentsInfo !== undefined && lastOrUndefined(printer.detachedCommentsInfo).nodePos === pos;
}

export function printLeadingComments(printer: Printer, pos: number) {
  let leadingComments!: any[] | undefined;
  printer.hasWrittenComment = false;
  if (printer.containerPos === -1 || pos !== printer.containerPos) {
    leadingComments = hasDetachedComments(printer, pos)
      ? getLeadingCommentsWithoutDetachedComments(printer)
      : getLeadingCommentRanges(printer.source, pos);
  }

  let trailingSeparator = false;

  if (leadingComments && leadingComments.length > 0) {
    let emitLeadingSpace = !trailingSeparator;
    if (!printer.hasWrittenComment) {
      writeLine(printer);
      printer.hasWrittenComment = true;
    }

    for (const comment of leadingComments) {
      if (emitLeadingSpace) {
        write(printer, ' ');
        emitLeadingSpace = false;
      }

      if (comment.kind === SyntaxKind.MultiLineComment) {
        write(printer, printer.source.substring(comment.pos, comment.end));
        if (comment.hasTrailingNewLine) {
          writeLine(printer);
        } else if (trailingSeparator) {
          write(printer, ' ');
        } else {
          emitLeadingSpace = true;
        }
      } else {
        write(printer, printer.source.substring(comment.pos, comment.end));
        writeLine(printer);
      }
    }
  }
  return '';
}

export function printDetachedCommentsAndUpdateCommentsInfo(node: any, printer: Printer) {
  const currentDetachedCommentInfo = emitDetachedComments(printer, node, '');

  if (currentDetachedCommentInfo) {
    if (printer.detachedCommentsInfo) {
      printer.detachedCommentsInfo.push(currentDetachedCommentInfo);
    } else {
      printer.detachedCommentsInfo = [currentDetachedCommentInfo];
    }
  }
}

export function emitDetachedComments(printer: Printer, node: any, _newLine: string) {
  let currentDetachedCommentInfo: any;
  let leadingComments = getLeadingCommentRanges(printer.source, node.start);

  if (leadingComments) {
    const detachedComments: any[] = [];

    for (const comment of leadingComments) {
      detachedComments.push(comment);
    }

    if (detachedComments.length) {
      emitNewLineBeforeLeadingComments(node, printer, leadingComments);
      if (detachedComments && detachedComments.length > 0) {
        let emitInterveningSeparator = false;
        for (const comment of detachedComments) {
          if (emitInterveningSeparator) {
            write(printer, ' ');
            emitInterveningSeparator = false;
          }
          write(printer, printer.source.substring(comment.pos, comment.end));
          if (comment.hasTrailingNewLine) {
            writeLine(printer);
          } else {
            emitInterveningSeparator = true;
          }
        }
      }
      currentDetachedCommentInfo = {
        nodePos: node.start,
        detachedCommentEndPos: lastOrUndefined(detachedComments).end
      };
    }
  }

  return currentDetachedCommentInfo as any;
}

function emitNewLineBeforeLeadingComments(node: any, printer: Printer, leadingComments: any[]) {
  emitNewLineBeforeLeadingCommentsOfPosition(node.start, printer, leadingComments);
}

function emitNewLineBeforeLeadingCommentsOfPosition(pos: number, printer: Printer, leadingComments: any[]) {
  // If the leading comments start on different line than the start of node, write new line
  if (
    leadingComments &&
    leadingComments.length &&
    pos !== leadingComments[0].pos &&
    getLineOfLocalPositionFromLineMap(printer, pos) !==
      getLineOfLocalPositionFromLineMap(printer, leadingComments[0].pos)
  ) {
    writeLine(printer);
  }
}
export function getLineOfLocalPositionFromLineMap(printer: Printer, pos: number) {
  return computeLineAndCharacterOfPosition(printer.lineMap, pos).line;
}

export function computeLineStarts(text: string): number[] {
  const result: number[] = [];
  let pos = 0;
  let lineStart = 0;
  while (pos < text.length) {
    const ch = text.charCodeAt(pos);
    pos++;
    switch (ch) {
      case Char.CarriageReturn:
        if (text.charCodeAt(pos) === Char.LineFeed) {
          pos++;
        }
      case Char.LineFeed:
        result.push(lineStart);
        lineStart = pos;
        break;
      default:
        if ((ch & ~1) === Char.LineSeparator) {
          result.push(lineStart);
          lineStart = pos;
        }
        break;
    }
  }
  result.push(lineStart);
  return result;
}

export function getLineStarts(printer: any): number[] {
  return printer.lineMap || (printer.lineMap = computeLineStarts(printer.source));
}
export function getLineAndCharacterOfPosition(printer: any, position: number): any {
  return computeLineAndCharacterOfPosition(getLineStarts(printer), position);
}
export function computeLineAndCharacterOfPosition(lineStarts: number[], position: number) {
  let lineNumber = binarySearch(lineStarts, position);

  if (lineNumber < 0) {
    lineNumber = ~lineNumber - 1;
  }
  return {
    line: lineNumber,
    character: position - lineStarts[lineNumber]
  };
}
export function binarySearch(array: number[], value: number): number {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    const middle = low + ((high - low) >> 1);
    const midValue = array[middle];

    if (midValue === value) {
      return middle;
    } else if (midValue > value) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }

  return ~low;
}
export function rangeIsOnSingleLine(range: any, printer: Printer) {
  return rangeStartIsOnSameLineAsRangeEnd(range, range, printer);
}

export function rangeStartPositionsAreOnSameLine(range1: any, range2: any, printer: Printer) {
  return positionsAreOnSameLine(
    getStartPositionOfRange(range1, printer),
    getStartPositionOfRange(range2, printer),
    printer
  );
}
export function rangeStartIsOnSameLineAsRangeEnd(range1: any, range2: any, printer: Printer) {
  return positionsAreOnSameLine(getStartPositionOfRange(range1, printer), range2.end, printer);
}
export function positionsAreOnSameLine(pos1: number, pos2: number, printer: Printer) {
  return pos1 === pos2 || getLineOfLocalPosition(printer, pos1) === getLineOfLocalPosition(printer, pos2);
}
export function getStartPositionOfRange(range: any, printer: Printer) {
  return positionIsSynthesized(range.start) ? -1 : skipWhitespace(printer.source, range.start);
}

export function getLineOfLocalPosition(printer: Printer, pos: number) {
  return getLineAndCharacterOfPosition(printer, pos).line;
}

function synthesizedNodeStartsOnNewLine(node: Node, format: PrinterContext) {
  if (nodeIsSynthesized(node)) {
    return (format & PrinterContext.PreferNewLine) !== 0;
  }

  return (format & PrinterContext.PreferNewLine) !== 0;
}
export function rangeEndPositionsAreOnSameLine(range1: any, range2: any, printer: Printer) {
  return positionsAreOnSameLine(range1.end, range2.end, printer);
}
export function positionIsSynthesized(pos: number): boolean {
  // This is a fast way of testing the following conditions:
  //  pos === undefined || pos === null || isNaN(pos) || pos < 0;
  return !(pos >= 0);
}
export function nodeIsSynthesized(node: any): boolean {
  return positionIsSynthesized(node.start) || positionIsSynthesized(node.end);
}

export function shouldWriteLeadingLineTerminator(
  parentNode: any,
  printer: Printer,
  children: any,
  format: PrinterContext
) {
  if (format & PrinterContext.PreserveLines) {
    if (format & PrinterContext.PreferNewLine) {
      return true;
    }
    const firstChild = children[0];

    if (firstChild === undefined) {
      return parentNode.start === parentNode.end ? 0 : 1;
    }

    //if (firstChild.start === printer.nextListElementPos) return 0;

    if ((format & PrinterContext.PreferNewLine) !== 0) return 1;
  }

  return format & PrinterContext.MultiLine ? true : false;
}

export function rangeEndIsOnSameLineAsRangeStart(range1: any, range2: any, printer: Printer) {
  return positionsAreOnSameLine(range1.end, getStartPositionOfRange(range2, printer), printer);
}

export function shouldWriteSeparatingLineTerminator(
  previousNode: any,
  printer: Printer,
  nextNode: any,
  format: PrinterContext
) {
  if (format & PrinterContext.PreserveLines) {
    if (previousNode === undefined || nextNode === undefined) {
      return 0;
    }

    if (format & PrinterContext.PreferNewLine) {
      return true;
    }

    if (
      !nodeIsSynthesized(previousNode) &&
      !nodeIsSynthesized(nextNode) // &&
      //previousNode.parent === nextNode.parent
    ) {
      return rangeEndIsOnSameLineAsRangeStart(previousNode, nextNode, printer) ? 0 : 1;
    } else if (
      synthesizedNodeStartsOnNewLine(previousNode, format) ||
      synthesizedNodeStartsOnNewLine(nextNode, format)
    ) {
      return 1;
    }
    return rangeEndIsOnSameLineAsRangeStart(previousNode, nextNode, printer) ? 0 : 1;
  }

  return format & PrinterContext.MultiLine ? true : false;
}

export function printTrailingCommentsOfPosition(printer: Printer, pos: number) {
  const trailingComments = getTrailingCommentsToEmit(printer, pos);

  // trailing comments of a position are emitted at /*trailing comment1 */space/*trailing comment*/space
  return emitComments(printer, trailingComments, /*leadingSeparator*/ false, /*trailingSeparator*/ true);
}

export function emitComments(
  printer: Printer,
  comments: any[],
  leadingSeparator: boolean,
  _trailingSeparator: boolean
) {
  let parts = [];

  if (comments && comments.length > 0) {
    if (leadingSeparator) {
      parts.push(' ');
    }

    let emitInterveningSeparator = false;
    for (const comment of comments) {
      if (emitInterveningSeparator) {
        write(printer, ' ');
        emitInterveningSeparator = false;
      }
      write(printer, printer.source.substring(comment.pos, comment.end));
      if (comment.hasTrailingNewLine) {
        writeLine(printer);
      } else {
        emitInterveningSeparator = true;
      }
    }
  }
}

export function shouldWriteClosingLineTerminator(
  parentNode: any,
  printer: Printer,
  children: any,
  format: PrinterContext
) {
  if (format & PrinterContext.PreserveLines) {
    if (format & PrinterContext.PreferNewLine) return 1;

    const lastChild: any = lastOrUndefined(children);

    if (lastChild === undefined) {
      return rangeIsOnSingleLine(parentNode, printer) ? 0 : 1;
    }

    if (
      !positionIsSynthesized(parentNode.start) &&
      !nodeIsSynthesized(lastChild) &&
      (!lastChild.parent || lastChild.parent === parentNode)
    ) {
      /*if (preserveSourceNewlines) {
          const end = isNodeArray(children) && !positionIsSynthesized(children.end) ? children.end : lastChild.end;
          return getEffectiveLines(
              includeComments => getLinesBetweenPositionAndNextNonWhitespaceCharacter(
                  end,
                  parentNode.end,
                  currentSourceFile!,
                  includeComments));
      }*/
      return rangeEndPositionsAreOnSameLine(parentNode, lastChild, printer) ? 0 : 1;
    }
    if (lastChild && synthesizedNodeStartsOnNewLine(lastChild as any, format)) return 1;
  }

  if (format & PrinterContext.MultiLine && !(format & PrinterContext.NoTrailingNewLine)) {
    return true;
  }
  return false;
}

export function printKeyword(t: any, printer: any, parent: any): void {
  if (parent.start !== t.start) {
    printLeadingCommentsOfPosition(printer, t.start);
  }
  write(printer, tokenToString(t));

  if (parent.end !== t.end) {
    printTrailingCommentsOfPosition(printer, t.end);
  }
}

export function printPunctuator1(punctuator: string, printer: any, pos: number, parent: any): number {
  const startPos = pos;

  pos = skipWhitespace(printer.source, pos);

  if (parent.start !== pos) {
    printLeadingCommentsOfPosition(printer, startPos);
  }

  write(printer, punctuator);

  if (parent.end !== pos + 1) {
    printTrailingCommentsOfPosition(printer, 1);
  }
  return pos + 1;
}

export function printPunctuator(punctuator: string, printer: any, pos: number, parent: any): number {
  const startPos = pos;

  pos = skipWhitespace(printer.source, pos);

  if (parent.start !== pos) {
    printLeadingCommentsOfPosition(printer, startPos);
  }
  write(printer, punctuator);

  if (parent.end !== pos + 1) {
    printTrailingCommentsOfPosition(printer, pos + 1);
  }
  return pos + 1;
}

export const brackets = createBracketsMap();

function createBracketsMap() {
  const brackets: string[][] = [];
  brackets[PrinterContext.Braces] = ['{', '}'];
  brackets[PrinterContext.Parenthesis] = ['(', ')'];
  brackets[PrinterContext.AngleBrackets] = ['<', '>'];
  brackets[PrinterContext.SquareBrackets] = ['[', ']'];
  return brackets;
}

export function isEmptyProperties(block: any, printer: any): boolean {
  return (
    (block.properties.length === 0 || block.properties.length === 3) &&
    rangeEndIsOnSameLineAsRangeStart(block, block, printer)
  );
}

export function isEmptyBlock(node: any, parentNode: any, printer: any): boolean {
  return node.statements.length === 0 && rangeEndIsOnSameLineAsRangeStart(parentNode, parentNode, printer);
}

export function shouldprintBlockFunctionBodyOnSingleLine(printer: any, body: any): boolean {
  if (body.flags & NodeFlags.NewLine) return false;

  if (!nodeIsSynthesized(body) && !rangeIsOnSingleLine(body, printer)) {
    return false;
  }

  if (
    shouldWriteLeadingLineTerminator(body, printer, body.statements, PrinterContext.PreserveLines) ||
    shouldWriteClosingLineTerminator(body, printer, body.statements, PrinterContext.PreserveLines)
  ) {
    return false;
  }

  let previousStatement: any;
  for (const statement of body.statements) {
    if (shouldWriteSeparatingLineTerminator(previousStatement, printer, statement, PrinterContext.PreserveLines)) {
      return false;
    }

    previousStatement = statement;
  }

  return true;
}

export function writeDelimiter(printer: Printer, format: PrinterContext) {
  switch (format & (PrinterContext.BarDelimited | PrinterContext.AmpersandDelimited | PrinterContext.CommaDelimited)) {
    case PrinterContext.None:
      break;
    case PrinterContext.CommaDelimited:
      write(printer, ',');
      break;
    case PrinterContext.BarDelimited:
      write(printer, ' ');
      write(printer, '|');
      break;
    case PrinterContext.AmpersandDelimited:
      write(printer, ' ');
      write(printer, '&');
  }
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
