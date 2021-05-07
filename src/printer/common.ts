import { Char } from '../parser/scanner/char';
import { isLineTerminator, isWhiteSpaceSlow } from '../parser/scanner/common';
import { SyntaxKind, tokenToString } from '../ast/syntax-node';
import { skipWhitespace } from './comments';
import { SyntaxToken, TokenSyntaxKind } from '../ast/token';

export const enum FormatterKind {
  Root = 1,
  Space = 2,
  BreakableParent = 3,
  LineSuffix = 4,
  Line = 5,
  LineOrSpace = 7,
  Group = 8,
  IfBreak = 9,
  Indent = 10,
  Chain = 11,
  String = 12
}

export interface Printer {
  source: string;
  pos: number;
  printWidth: number;
  indent: number;
  trailingComma: boolean;
  space: string;
  tabWidth: number;
  bracketSpacing: boolean;
  containerPos: number;
  containerEnd: number;
  lineMap: any[];
  hasWrittenComment: boolean;
  detachedCommentsInfo: any;
  consumedCommentRanges: number[];
  leadingCommentRangePositions: boolean[];
  trailingCommentRangePositions: boolean[];
  declarationListContainerEnd: number;
}

export function createPrinter(source: string, printWidth: number, tabWidth: number): Printer {
  return {
    source,
    pos: 0,
    printWidth,
    tabWidth,
    space: ' ',
    indent: 0,
    trailingComma: false,
    bracketSpacing: true,
    lineMap: [],
    containerPos: -1,
    containerEnd: -1,
    hasWrittenComment: false,
    declarationListContainerEnd: -1,
    detachedCommentsInfo: undefined,
    consumedCommentRanges: [],
    leadingCommentRangePositions: [],
    trailingCommentRangePositions: []
  };
}

export function shouldprintWhitespaceBeforeOperand(node: any): boolean {
  const { operand, operandToken } = node;
  return (
    operandToken.kind === SyntaxKind.VoidKeyword ||
    operandToken.kind === SyntaxKind.DeleteKeyword ||
    operandToken.kind === SyntaxKind.InKeyword ||
    operandToken.kind === SyntaxKind.TypeofKeyword ||
    (operandToken.kind === SyntaxKind.PrefixUpdateExpression &&
      ((node.operandToken.kind === SyntaxKind.Add &&
        (operand.operandToken.kind === SyntaxKind.Add || operand.operandToken.kind === SyntaxKind.Increment)) ||
        (node.operandToken.kind === SyntaxKind.Subtract &&
          (operand.operandToken.kind === SyntaxKind.Subtract || operand.operandToken.kind === SyntaxKind.Decrement))))
  );
}

export function getPreferredQuote(raw: any, preferredQuote: any) {
  // `rawContent` is the string exactly like it appeared in the input source
  // code, without its enclosing quotes.
  const rawContent = raw.slice(1, -1);

  /** @type {{ quote: '"', regex: RegExp }} */
  const double = { quote: '"', regex: /"/g };
  /** @type {{ quote: "'", regex: RegExp }} */
  const single = { quote: "'", regex: /'/g };

  const preferred = preferredQuote === "'" ? single : double;
  const alternate = preferred === single ? double : single;

  let result = preferred.quote;

  // If `rawContent` contains at least one of the quote preferred for enclosing
  // the string, we might want to enclose with the alternate quote instead, to
  // minimize the number of escaped quotes.
  if (rawContent.includes(preferred.quote) || rawContent.includes(alternate.quote)) {
    const numPreferredQuotes = (rawContent.match(preferred.regex) || []).length;
    const numAlternateQuotes = (rawContent.match(alternate.regex) || []).length;

    result = numPreferredQuotes > numAlternateQuotes ? alternate.quote : preferred.quote;
  }

  return result;
}

export function makeString(rawContent: any, enclosingQuote: any): any {
  const otherQuote = enclosingQuote === '"' ? "'" : '"';

  // Matches _any_ escape and unescaped quotes (both single and double).
  const regex = /\\([\S\s])|(["'])/g;

  // Escape and unescape single and double quotes as needed to be able to
  // enclose `rawContent` with `enclosingQuote`.
  const newContent = rawContent.replace(regex, (_match: any, escaped: any, quote: any) => {
    // If we matched an escape, and the escaped character is a quote of the
    // other type than we intend to enclose the string with, there's no need for
    // it to be escaped, so return it _without_ the backslash.
    if (escaped === otherQuote) {
      return escaped;
    }

    // If we matched an unescaped quote and it is of the _same_ type as we
    // intend to enclose the string with, it must be escaped, so return it with
    // a backslash.
    if (quote === enclosingQuote) {
      return '\\' + quote;
    }

    if (quote) {
      return quote;
    }

    // Unescape any unnecessarily escaped character.
    // Adapted from https://github.com/eslint/eslint/blob/de0b4ad7bd820ade41b1f606008bea68683dc11a/lib/rules/no-useless-escape.js#L27
    return /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(escaped) ? escaped : '\\' + escaped;
  });

  return enclosingQuote + newContent + enclosingQuote;
}

export function lastOrUndefined<T>(array: readonly T[]): any {
  return array.length === 0 ? undefined : array[array.length - 1];
}

export function positionsAreOnSameLine(pos1: number, pos2: number, printer: any) {
  return pos1 === pos2 || getLineOfLocalPosition(printer, pos1) === getLineOfLocalPosition(printer, pos2);
}

export function getLineOfLocalPosition(printer: any, pos: number) {
  return getLineAndCharacterOfPosition(printer, pos).line;
}
export function getLineAndCharacterOfPosition(printer: any, position: number): any {
  return computeLineAndCharacterOfPosition(getLineStarts(printer), position);
}
export function getLineStarts(printer: any): number[] {
  return printer.lineMap || (printer.lineMap = computeLineStarts(printer.source));
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
export function emitNode(
  node: any,
  printer: Printer,
  parentNode: any,
  emitCallback: (node: any, printer: Printer, parentNode: any) => void
) {
  if (node) {
    const { start, end, rawText } = node;

    if (positionIsSynthesized(start) || positionIsSynthesized(end) || start === end) {
      // Both pos and end are synthesized, so just emit the node without comments.
      return emitCallback(node, printer, parentNode);
    } else {
      const skipLeadingComments = start < 0;
      const skipTrailingComments = end < 0;

      let printedLeadingComments = '';
      let printedTrailingComments = '';

      // Emit leading comments if the position is not synthesized and the node
      // has not opted out from emitting leading comments.
      if (!skipLeadingComments) {
        printedLeadingComments = printLeadingComments(printer, start);
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

      const x = emitCallback(node, printer, parentNode);

      // Restore previous container state.
      printer.containerPos = savedContainerPos;
      printer.containerEnd = savedContainerEnd;
      printer.declarationListContainerEnd = savedDeclarationListContainerEnd;

      // Emit trailing comments if the position is not synthesized and the node
      // has not opted out from emitting leading comments and is an emitted node.
      if (!skipTrailingComments) {
        printedTrailingComments = emitTrailingComments(printer, end);
      }

      return chain([printedLeadingComments, x, printedTrailingComments]);
    }
  }
}
function getTrailingCommentsToEmit(printer: Printer, end: number): any {
  // Emit the trailing comments only if the container's end doesn't match because the container should take care of emitting these comments
  if (printer.containerEnd === -1 || (end !== printer.containerEnd && end !== printer.declarationListContainerEnd)) {
    return getTrailingCommentRanges(printer.source, end);
  }
}

export function getTrailingCommentRanges(text: string, pos: number): any[] {
  return getCommentRanges(text, pos, /*trailing*/ true);
}

function emitTrailingComments(printer: Printer, pos: number) {
  const trailingComments = getTrailingCommentsToEmit(printer, pos);

  if (trailingComments && trailingComments.length > 0) {
    const parts: any = [' '];
    let emitInterveningSeparator = false;
    for (const comment of trailingComments) {
      if (emitInterveningSeparator) {
        parts.push(' ');
        emitInterveningSeparator = false;
      }

      parts.push(printer.source.substring(comment.pos, comment.end));
      if (comment.hasTrailingNewLine) {
        parts.push(hardline);
      } else {
        emitInterveningSeparator = true;
      }
    }
    return chain(parts);
  }
  return '';
}

function hasDetachedComments(printer: Printer, pos: number) {
  return printer.detachedCommentsInfo !== undefined && lastOrUndefined(printer.detachedCommentsInfo).nodePos === pos;
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
export function getLeadingCommentRanges(text: string, pos: number): any[] {
  return getCommentRanges(text, pos, /*trailing*/ false);
}

export function printLeadingComments(printer: Printer, pos: number) {
  let leadingComments!: any[] | undefined;
  if (printer.containerPos === -1 || pos !== printer.containerPos) {
    leadingComments = hasDetachedComments(printer, pos)
      ? getLeadingCommentsWithoutDetachedComments(printer)
      : getLeadingCommentRanges(printer.source, pos);
  }

  if (leadingComments && leadingComments.length > 0) {
    const parts: any = [];
    for (const comment of leadingComments) {
      if (comment.kind === SyntaxKind.MultiLineComment) {
        parts.push(
          chain([printer.source.substring(comment.pos, comment.end), comment.hasTrailingNewLine ? hardline : ' '])
        );
      } else {
        parts.push(chain([printer.source.substring(comment.pos, comment.end), hardline]));
      }
    }
    return chain(parts);
  }
  return '';
}

export function positionIsSynthesized(pos: number): boolean {
  // This is a fast way of testing the following conditions:
  //  pos === undefined || pos === null || isNaN(pos) || pos < 0;
  return !(pos >= 0);
}
export const lineSuffixBoundary = { type: 'line-suffix-boundary', kind: FormatterKind.LineSuffix };
export const breakParent = { type: 'break-parent', kind: FormatterKind.BreakableParent };
export const line = { type: 'line', kind: FormatterKind.Line };
export const softline = { type: 'line', soft: true, mode: 'soft' };
export const lineOrSpace: any = {
  type: 'Line',
  mode: 'space',
  kind: FormatterKind.LineOrSpace
};

export const space: any = {
  type: 'Space',
  kind: FormatterKind.Space
};

export const leadingComment: any = {
  type: 'leadingComment',
  kind: FormatterKind.Space
};

export const hardline = {
  type: 'chain',
  kind: FormatterKind.Chain,
  parts: [{ type: 'line', mode: 'hard', hard: true }, breakParent]
};

export function chain(parts: any) {
  if (parts.length === 0) {
    return '';
  }

  if (parts.length === 1) {
    return parts[0];
  }
  return { type: 'chain', kind: FormatterKind.Chain, parts };
}

export function indent(contents: any, force = false) {
  if (contents === '') {
    return '';
  }
  if (force) {
    contents = chain([hardline, contents]);
  }
  return { type: 'indent', kind: FormatterKind.Indent, contents };
}

export function group(contents: any, shouldBreak = false) {
  return {
    type: 'group',
    kind: FormatterKind.Group,
    contents,
    break: !!shouldBreak
  };
}

export function conditionalGroup(states: any, opts?: any) {
  return group(states[0], Object.assign(opts || {}, { expandedStates: states }));
}

export function ifBreak(breakContents: any, flatContents?: any): any {
  return { type: 'if-break', breakContents, flatContents };
}

export function lineSuffix(contents: any): any {
  return { type: 'line-suffix', contents };
}

export function isEmpty(n: any) {
  return typeof n === 'string' && n.length === 0;
}

export function join(sep: any, arr: any): any {
  if (arr.length === 0) {
    return '';
  }

  if (arr.length === 1) {
    return arr[0];
  }
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    if (i > 0) {
      res.push(sep);
    }

    res.push(arr[i]);
  }

  return chain(res);
}

const MODE_BREAK = 1;
const MODE_FLAT = 2;

export function rootIndent() {
  return { value: '', length: 0, queue: [] };
}

function makeIndent(ind: any, printer: any) {
  return generateInd(ind, { type: 'indent' }, printer);
}

function generateInd(ind: any, newPart: any, printer: any): any {
  const queue = newPart.type === 'dedent' ? ind.queue.slice(0, -1) : [...ind.queue, newPart];

  let value = '';
  let length = 0;
  let lastTabs = 0;
  let lastSpaces = 0;

  for (const part of queue) {
    switch (part.type) {
      case 'indent':
        flush();
        if (printer.useTabs) {
          addTabs(1);
        } else {
          addSpaces(printer.tabWidth);
        }
        break;
      /* istanbul ignore next */
      default:
        throw new Error(`Unexpected type '${part.type}'`);
    }
  }

  flushSpaces();

  return { ...ind, value, length, queue };

  function addTabs(count: any) {
    value += '\t'.repeat(count);
    length += printer.tabWidth * count;
  }

  function addSpaces(count: any) {
    value += ' '.repeat(count);
    length += count;
  }

  function flush() {
    if (printer.useTabs) {
      flushTabs();
    } else {
      flushSpaces();
    }
  }

  function flushTabs() {
    if (lastTabs > 0) {
      addTabs(lastTabs);
    }
    resetLast();
  }

  function flushSpaces() {
    if (lastSpaces > 0) {
      addSpaces(lastSpaces);
    }
    resetLast();
  }

  function resetLast() {
    lastTabs = 0;
    lastSpaces = 0;
  }
}

function trim(out: any) {
  if (out.length === 0) {
    return 0;
  }

  let trimCount = 0;

  // Trim whitespace at the end of line
  while (out.length > 0 && typeof out[out.length - 1] === 'string' && /^[\t ]*$/.test(out[out.length - 1])) {
    trimCount += out.pop().length;
  }

  if (out.length > 0 && typeof out[out.length - 1] === 'string') {
    const trimmed = out[out.length - 1].replace(/[\t ]*$/, '');
    trimCount += out[out.length - 1].length - trimmed.length;
    out[out.length - 1] = trimmed;
  }

  return trimCount;
}

export function fits(next: any, restCommands: any, width: any, printer: any): any {
  let restIdx = restCommands.length;
  const cmds = [next];
  const out = [];
  while (width >= 0) {
    if (cmds.length === 0) {
      if (restIdx === 0) {
        return true;
      }
      cmds.push(restCommands[restIdx - 1]);

      restIdx--;

      continue;
    }

    const [ind, mode, doc] = cmds.pop();

    if (typeof doc === 'string') {
      width -= doc.length;
    } else if (doc) {
      switch (doc.type) {
        case 'chain':
          for (let i = doc.parts.length - 1; i >= 0; i--) {
            cmds.push([ind, mode, doc.parts[i]]);
          }

          break;
        case 'indent':
          cmds.push([makeIndent(ind, printer), mode, doc.contents]);

          break;

        case 'group':
          const groupMode = doc.break ? MODE_BREAK : mode;
          cmds.push([
            ind,
            groupMode,
            // The most expanded state takes up the least space on the current line.
            doc.expandedStates && groupMode === MODE_BREAK
              ? doc.expandedStates[doc.expandedStates.length - 1]
              : doc.contents
          ]);

          break;
        case 'if-break':
          if (mode === MODE_BREAK) {
            if (doc.breakContents) {
              cmds.push([ind, mode, doc.breakContents]);
            }
          }
          if (mode === MODE_FLAT) {
            if (doc.flatContents) {
              cmds.push([ind, mode, doc.flatContents]);
            }
          }

          break;
        case 'line':
          switch (mode) {
            // fallthrough
            case MODE_FLAT:
              if (!doc.hard) {
                if (!doc.soft) {
                  out.push(' ');

                  width -= 1;
                }

                break;
              }
              return true;

            case MODE_BREAK:
              return true;
          }
          break;
      }
    } else {
      //throw 'Santa is coming for Christmas this year too!';
    }
  }
  return false;
}

export function toString(doc: any, printer: Printer, newLine: string): any {
  const width = printer.printWidth;
  // cmds is basically a stack. We've turned a recursive call into a
  // while loop which is much faster. The while loop below adds new
  // cmds to the array instead of recursively calling `print`.
  const cmds = [[rootIndent(), MODE_BREAK, doc]];
  const out: any = [];
  let shouldRemeasure = false;
  let lineSuffix: any = [];

  while (cmds.length !== 0) {
    const [ind, mode, doc]: any = cmds.pop();

    if (typeof doc === 'string') {
      out.push(doc);

      printer.pos += doc.length;
    } else if (doc) {
      switch (doc.type) {
        case 'chain':
          for (let i = doc.parts.length - 1; i >= 0; i--) {
            cmds.push([ind, mode, doc.parts[i]]);
          }

          break;
        case 'indent':
          cmds.push([makeIndent(ind, printer), mode, doc.contents]);

          break;

        case 'group':
          switch (mode) {
            case MODE_FLAT:
              if (!shouldRemeasure) {
                cmds.push([ind, doc.break ? MODE_BREAK : MODE_FLAT, doc.contents]);

                break;
              }

            case MODE_BREAK:
              shouldRemeasure = false;

              const next = [ind, MODE_FLAT, doc.contents];
              const rem = width - printer.pos;

              if (!doc.break && fits(next, cmds, rem, printer)) {
                cmds.push(next);
              } else {
                // Expanded states are a rare case where a document
                // can manually provide multiple representations of
                // itself. It provides an array of documents
                // going from the least expanded (most flattened)
                // representation first to the most expanded. If a
                // group has these, we need to manually go through
                // these states and find the first one that fits.
                // these states and find the first one that fits.
                if (doc.expandedStates) {
                  const mostExpanded = doc.expandedStates[doc.expandedStates.length - 1];

                  if (doc.break) {
                    cmds.push([ind, MODE_BREAK, mostExpanded]);

                    break;
                  } else {
                    for (let i = 1; i < doc.expandedStates.length + 1; i++) {
                      if (i >= doc.expandedStates.length) {
                        cmds.push([ind, MODE_BREAK, mostExpanded]);

                        break;
                      } else {
                        const state = doc.expandedStates[i];
                        const cmd = [ind, MODE_FLAT, state];

                        if (fits(cmd, cmds, rem, printer)) {
                          cmds.push(cmd);

                          break;
                        }
                      }
                    }
                  }
                } else {
                  cmds.push([ind, MODE_BREAK, doc.contents]);
                }
              }

              break;
          }
          break;
        case 'if-break':
          if (mode === MODE_BREAK) {
            if (doc.breakContents) {
              cmds.push([ind, mode, doc.breakContents]);
            }
          }
          if (mode === MODE_FLAT) {
            if (doc.flatContents) {
              cmds.push([ind, mode, doc.flatContents]);
            }
          }

          break;
        case 'line-suffix':
          lineSuffix.push([ind, mode, doc.contents]);
          break;
        case 'line-suffix-boundary':
          if (lineSuffix.length > 0) {
            cmds.push([ind, mode, { type: 'line', hard: true }]);
          }
          break;
        case 'line':
          switch (mode) {
            // fallthrough
            case MODE_FLAT:
              if (!doc.hard) {
                if (!doc.soft) {
                  out.push(' ');

                  printer.pos += 1;
                }

                break;
              } else {
                // This line was forced into the output even if we
                // were in flattened mode, so we need to tell the next
                // group that no matter what, it needs to remeasure
                // because the previous measurement didn't accurately
                // capture the entire expression (this is necessary
                // for nested groups)
                shouldRemeasure = true;
              }

            case MODE_BREAK:
              if (lineSuffix.length > 0) {
                cmds.push([ind, mode, doc], ...lineSuffix.reverse());
                lineSuffix = [];
                break;
              }

              if (doc.literal) {
                if (ind.root) {
                  out.push(newLine, ind.root.value);
                  printer.pos = ind.root.length;
                } else {
                  out.push(newLine);
                  printer.pos = 0;
                }
              } else {
                printer.pos -= trim(out);
                out.push(newLine + ind.value);
                printer.pos = ind.length;
              }
              break;
          }
          break;
        default:
      }
    } else {
      //      throw 'Santa is coming for Christmas this year too!';
    }
  }
  return out.join('');
}

function getCommentRanges(text: string, pos: number, trailing: boolean): any {
  let result: any;
  let collecting = trailing || pos === 0;

  while (true) {
    const ch = text.charCodeAt(pos);
    switch (ch) {
      case Char.CarriageReturn:
        if (text.charCodeAt(pos + 1) === Char.LineFeed) {
          pos++;
        }
      case Char.LineFeed:
        pos++;
        if (trailing) {
          return result;
        }
        collecting = true;
        if (result && result.length) {
          lastOrUndefined(result).hasTrailingNewLine = true;
        }
        continue;
      case Char.Tab:
      case Char.VerticalTab:
      case Char.FormFeed:
      case Char.Space:
        pos++;
        continue;
      case Char.Slash:
        const nextChar = text.charCodeAt(pos + 1);
        let hasTrailingNewLine = false;
        if (nextChar === Char.Slash || nextChar === Char.Asterisk) {
          const kind = nextChar === Char.Slash ? SyntaxKind.SingleLineComment : SyntaxKind.MultiLineComment;
          const startPos = pos;
          pos += 2;
          if (nextChar === Char.Slash) {
            while (pos < text.length) {
              if (isLineTerminator(text.charCodeAt(pos))) {
                hasTrailingNewLine = true;
                break;
              }
              pos++;
            }
          } else {
            while (pos < text.length) {
              if (text.charCodeAt(pos) === Char.Asterisk && text.charCodeAt(pos + 1) === Char.Slash) {
                pos += 2;
                break;
              }
              pos++;
            }
          }
          if (collecting) {
            if (!result) {
              result = [];
            }

            result.push({ pos: startPos, end: pos, hasTrailingNewLine, kind });
          }
          continue;
        }
        break;
      default:
        if (ch > 127 && (isWhiteSpaceSlow(ch) || isLineTerminator(ch))) {
          if (result && result.length && isLineTerminator(ch)) {
            lastOrUndefined(result).hasTrailingNewLine = true;
          }
          pos++;
          continue;
        }
        break;
    }
    return result;
  }
}

export function emitTrailingCommentsOfPosition(printer: Printer, pos: number) {
  const trailingComments = getTrailingCommentsToEmit(printer, pos);

  // trailing comments of a position are emitted at /*trailing comment1 */space/*trailing comment*/space
  return emitComments(printer.source, trailingComments, /*leadingSeparator*/ false, /*trailingSeparator*/ true);
}

export function emitComments(text: any, comments: any[], leadingSeparator: boolean, trailingSeparator: boolean) {
  const parts = [];

  if (comments && comments.length > 0) {
    if (leadingSeparator) {
      parts.push(' ');
    }

    let emitInterveningSeparator = false;
    for (const comment of comments) {
      if (emitInterveningSeparator) {
        parts.push(' ');
        emitInterveningSeparator = false;
      }

      parts.push(text.substring(comment.pos, comment.end));
      if (comment.hasTrailingNewLine) {
        parts.push(hardline);
      } else {
        emitInterveningSeparator = true;
      }
    }

    if (emitInterveningSeparator && trailingSeparator) {
      parts.push(' ');
    }

    return chain(parts);
  }
  return '';
}
function printLeadingCommentsOfPosition(printer: Printer, pos: number) {
  if (pos === -1) {
    return;
  }
  printLeadingComments(printer, pos);
}

export function printKeyword(
  t: SyntaxToken<TokenSyntaxKind>,
  printer: Printer,
  startPos: number,
  parentNode: any,
  separator: boolean
) {
  if (!t) return '';
  const text = tokenToString(t);
  if (parentNode.start !== startPos) {
    return chain([text, separator ? ' ' : '', printLeadingCommentsOfPosition(printer, startPos)]);
  }

  if (parentNode.end !== t.end) {
    return chain([text, separator ? ' ' : '', emitTrailingCommentsOfPosition(printer, t.end)]);
  }

  if (separator) return text + ' ';
  return text;
}

export function printPunctuator(text: string, pos: number, parentNode: any) {
  return text;
}

export function printTokenWithComment(
  token: any,
  pos: number,
  printer: Printer,
  parentNode: any,
  leadingspace?: boolean
) {
  const startPos = pos;
  pos = skipWhitespace(printer.source, pos);

  const text = tokenToString(token);

  if (parentNode.start !== startPos) {
    return chain([text, leadingspace ? printer.space : '', printLeadingCommentsOfPosition(printer, startPos)]);
  } else {
    pos = token ? token.end : -12;

    if (parentNode.end !== pos) {
      return chain([text, leadingspace ? printer.space : '', emitTrailingCommentsOfPosition(printer, pos)]);
    }
  }

  return leadingspace ? chain([printer.space, text]) : text;
}

export const PRECEDENCE: any = {
  '||': 2,
  '&&': 3,
  '??': 1,
  '|': 4,
  '^': 5,
  '&': 6,
  '==': 5,
  '===': 7,
  '!=': 7,
  '!==': 7,
  '<': 8,
  '>': 8,
  '<=': 8,
  '>=': 8,
  in: 8,
  instanceof: 8,
  '>>': 9,
  '<<': 9,
  '>>>': 9,
  '+': 10,
  '-': 10,
  '*': 11,
  '/': 11,
  '%': 11,
  '**': 12
};

const equalityOperators: any = {
  '==': true,
  '!=': true,
  '===': true,
  '!==': true
};
const multiplicativeOperators: any = {
  '*': true,
  '/': true,
  '%': true
};
const bitshiftOperators: any = {
  '>>': true,
  '>>>': true,
  '<<': true
};

export function shouldFlatten(parentOp: any, nodeOp: any) {
  if (PRECEDENCE[nodeOp] !== PRECEDENCE[parentOp]) {
    return false;
  }

  // ** is right-associative
  // x ** y ** z --> x ** (y ** z)
  if (parentOp === '**') {
    return false;
  }

  // x == y == z --> (x == y) == z
  if (equalityOperators[parentOp] && equalityOperators[nodeOp]) {
    return false;
  }

  // x * y % z --> (x * y) % z
  if ((nodeOp === '%' && multiplicativeOperators[parentOp]) || (parentOp === '%' && multiplicativeOperators[nodeOp])) {
    return false;
  }

  // x * y / z --> (x * y) / z
  // x / y * z --> (x / y) * z
  if (nodeOp !== parentOp && multiplicativeOperators[nodeOp] && multiplicativeOperators[parentOp]) {
    return false;
  }

  // x << y << z --> (x << y) << z
  if (bitshiftOperators[parentOp] && bitshiftOperators[nodeOp]) {
    return false;
  }

  return true;
}
