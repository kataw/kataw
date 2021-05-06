import { ParserState, Context } from '../parser/common';
//import { WhitespaceState, isWhiteSpaceSlow } from './common';
import { Char } from '../parser/scanner/char';
import { isLineTerminator, isWhiteSpaceSlow } from '../parser/scanner/common';
//import { error } from '../diagnostic';
//import { DiagnosticSource } from '../diagnostic/diagnostic';
//import { DiagnosticCode } from '../diagnostic/diagnosticMessages.generated';
import { SyntaxKind } from '../ast/syntax-node';

function iterateCommentRanges<T, U>(
  reduce: boolean,
  text: string,
  pos: number,
  trailing: boolean,
  cb: (pos: number, end: number, kind: any, hasTrailingNewLine: boolean, state: T, memo: U) => U,
  state: any,
  initial?: any
): U {
  let pendingPos: any;
  let pendingEnd: any;
  let pendingKind: any;
  let pendingHasTrailingNewLine: any;
  let hasPendingCommentRange = false;
  let collecting = trailing || pos === 0;
  let accumulator: any = initial;
  scan: while (pos >= 0 && pos < text.length) {
    const ch = text.charCodeAt(pos);
    switch (ch) {
      case Char.CarriageReturn:
        if (text.charCodeAt(pos + 1) === Char.LineFeed) {
          pos++;
        }
      case Char.LineFeed:
        pos++;
        if (trailing) {
          break scan;
        }

        collecting = true;
        if (hasPendingCommentRange) {
          pendingHasTrailingNewLine = true;
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
          const startPos = pos;
          let kind!: SyntaxKind;
          pos += 2;
          if (nextChar === Char.Slash) {
            kind = SyntaxKind.SingleLineComment;
            while (pos < text.length) {
              if (isLineTerminator(text.charCodeAt(pos))) {
                hasTrailingNewLine = true;
                break;
              }
              pos++;
            }
          } else {
            kind = SyntaxKind.MultiLineComment;
            while (pos < text.length) {
              if (text.charCodeAt(pos) === Char.Asterisk && text.charCodeAt(pos + 1) === Char.Slash) {
                pos += 2;
                break;
              }
              pos++;
            }
          }

          if (collecting) {
            if (hasPendingCommentRange) {
              accumulator = cb(pendingPos, pendingEnd, pendingKind, pendingHasTrailingNewLine, state, accumulator);
              if (!reduce && accumulator) {
                // If we are not reducing and we have a truthy result, return it.
                return accumulator;
              }

              hasPendingCommentRange = false;
            }

            pendingPos = startPos;
            pendingEnd = pos;
            pendingKind = kind;
            pendingHasTrailingNewLine = hasTrailingNewLine;
            hasPendingCommentRange = true;
          }

          continue;
        }
        break scan;
      default:
        if ((ch & ~1) === Char.LineSeparator) {
          pos++;
          continue;
        }

        if (isWhiteSpaceSlow(ch)) {
          pos++;
          continue;
        }
        break scan;
    }
  }

  if (hasPendingCommentRange) {
    accumulator = cb(pendingPos, pendingEnd, pendingKind, pendingHasTrailingNewLine, state, accumulator);
  }

  return accumulator;
}

export function forEachLeadingCommentRange<T, U>(
  text: string,
  pos: number,
  cb: (pos: number, end: number, kind: SyntaxKind, hasTrailingNewLine: boolean, state: T) => U,
  state?: T
) {
  return iterateCommentRanges(/*reduce*/ false, text, pos, /*trailing*/ false, cb, state);
}

export function forEachTrailingCommentRange<T, U>(
  text: string,
  pos: number,
  cb: (pos: number, end: number, kind: SyntaxKind, hasTrailingNewLine: boolean, state: T) => U,
  state?: T
) {
  return iterateCommentRanges(/*reduce*/ false, text, pos, /*trailing*/ true, cb, state);
}

export function reduceEachLeadingCommentRange<T, U>(
  text: string,
  pos: number,
  cb: (pos: number, end: number, kind: SyntaxKind, hasTrailingNewLine: boolean, state: T, memo: U) => U,
  state: T,
  initial: U
) {
  return iterateCommentRanges(/*reduce*/ true, text, pos, /*trailing*/ false, cb, state, initial);
}

export function reduceEachTrailingCommentRange<T, U>(
  text: string,
  pos: number,
  cb: (pos: number, end: number, kind: SyntaxKind, hasTrailingNewLine: boolean, state: T, memo: U) => U,
  state: T,
  initial: U
) {
  return iterateCommentRanges(/*reduce*/ true, text, pos, /*trailing*/ true, cb, state, initial);
}

function appendCommentRange(
  start: number,
  end: number,
  kind: SyntaxKind,
  hasTrailingNewLine: boolean,
  _state: any,
  comments: any
) {
  if (!comments) {
    comments = [];
  }

  comments.push({ start, end, hasTrailingNewLine, kind });
  return comments;
}

export function getLeadingCommentRanges(text: string, pos: number): any[] {
  return reduceEachLeadingCommentRange(text, pos, appendCommentRange, undefined, undefined);
}

export function getTrailingCommentRanges(text: string, pos: number): any[] {
  return reduceEachTrailingCommentRange(text, pos, appendCommentRange, undefined, undefined);
}

export function skipTrivia(text: string, pos: number, stopAfterLineBreak?: boolean, stopAtComments = false): number {
  if (!(pos >= 0)) {
    return pos;
  }

  // Keep in sync with couldStartTrivia
  while (true) {
    const ch = text.charCodeAt(pos);
    switch (ch) {
      case Char.CarriageReturn:
        if (text.charCodeAt(pos + 1) === Char.LineFeed) {
          pos++;
        }
      // falls through
      case Char.LineFeed:
        pos++;
        if (stopAfterLineBreak) {
          return pos;
        }
        continue;
      case Char.Tab:
      case Char.VerticalTab:
      case Char.FormFeed:
      case Char.Space:
        pos++;
        continue;
      case Char.Slash:
        if (stopAtComments) {
          break;
        }
        if (text.charCodeAt(pos + 1) === Char.Slash) {
          pos += 2;
          while (pos < text.length) {
            if (isLineTerminator(text.charCodeAt(pos))) {
              break;
            }
            pos++;
          }
          continue;
        }
        if (text.charCodeAt(pos + 1) === Char.Asterisk) {
          pos += 2;
          while (pos < text.length) {
            if (text.charCodeAt(pos) === Char.Asterisk && text.charCodeAt(pos + 1) === Char.Slash) {
              pos += 2;
              break;
            }
            pos++;
          }
          continue;
        }
        break;
      /*
          case Char.LessThan:
          case Char.Bar:
          case Char.Assign:
          case Char.greaterThan:
              if (isConflictMarkerTrivia(text, pos)) {
                  pos = scanConflictMarkerTrivia(text, pos);
                  continue;
              }
              break;
          case Char.hash:
              if (pos === 0 && isShebangTrivia(text, pos)) {
                  pos = scanShebangTrivia(text, pos);
                  continue;
              }
              break;
*/
      default:
        if (ch > 127 && isWhiteSpaceSlow(ch)) {
          pos++;
          continue;
        }
        break;
    }
    return pos;
  }
}
