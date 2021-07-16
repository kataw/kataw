import { ParserState, Context } from '../common';
import { SyntaxKind, NodeFlags } from '../../ast/syntax-node';
import { AsciiCharTypes, AsciiCharFlags } from './asciiChar';
import { Char } from './char';
import { isWhiteSpaceSlow, isLineTerminator } from './common';
import { DiagnosticCode, diagnosticMap } from '../../diagnostic/diagnostic-code';
import { DiagnosticSource, DiagnosticKind } from '../../diagnostic/diagnostic';

export function lastOrUndefined<T>(array: readonly T[]): any {
  return array.length === 0 ? undefined : array[array.length - 1];
}

export function skipSingleLineComment(parser: ParserState, cp: number, source: string): any {
  let pos = parser.pos;
  while (pos < parser.end && !isLineTerminator(cp)) {
    cp = source.charCodeAt(++pos);
    // kataw-ignore
    if (
      cp === Char.LowerK &&
      AsciiCharTypes[source.charCodeAt(pos + 12)] & AsciiCharFlags.LineTerminator &&
      source.charCodeAt(pos + 1) === Char.LowerA &&
      source.charCodeAt(pos + 11) === Char.LowerE &&
      source.charCodeAt(pos + 10) === Char.LowerR &&
      source.charCodeAt(pos + 9) === Char.LowerO &&
      source.charCodeAt(pos + 8) === Char.LowerN &&
      source.charCodeAt(pos + 7) === Char.LowerG &&
      source.charCodeAt(pos + 5) === Char.Hyphen &&
      source.charCodeAt(pos + 6) === Char.LowerI &&
      source.charCodeAt(pos + 2) === Char.LowerT &&
      source.charCodeAt(pos + 3) === Char.LowerA &&
      source.charCodeAt(pos + 4) === Char.LowerW
    ) {
      parser.nodeFlags |= NodeFlags.IgnoreNextNode;
    }

    // global
    if (
      cp === Char.LowerG &&
      AsciiCharTypes[source.charCodeAt(pos + 6)] & AsciiCharFlags.LineTerminator &&
      source.charCodeAt(pos + 5) === Char.LowerL &&
      source.charCodeAt(pos + 4) === Char.LowerA &&
      source.charCodeAt(pos + 3) === Char.LowerB &&
      source.charCodeAt(pos + 2) === Char.LowerO &&
      source.charCodeAt(pos + 1) === Char.LowerL
    ) {
      parser.nodeFlags |= NodeFlags.Globals;
    }
  }
  parser.pos = pos;
}

export function skipMultilineComment(parser: ParserState, cp: number, source: string): number {
  do {
    if (cp === Char.Asterisk && source.charCodeAt(parser.pos + 1) === Char.Slash) {
      parser.pos += 2;
      return cp;
    }

    if (isLineTerminator(cp)) parser.nodeFlags |= NodeFlags.NewLine;
    parser.pos++;
    cp = source.charCodeAt(parser.pos);

    /**
     * Kataw
     */
    if (
      cp === Char.Asterisk &&
      source.charCodeAt(parser.pos + 1) === Char.Asterisk &&
      AsciiCharTypes[source.charCodeAt(parser.pos + 2)] & AsciiCharFlags.LineTerminator &&
      source.charCodeAt(parser.pos + 3) === Char.Asterisk &&
      source.charCodeAt(parser.pos + 4) === Char.Space &&
      source.charCodeAt(parser.pos + 5) === Char.LowerK &&
      source.charCodeAt(parser.pos + 6) === Char.LowerA &&
      source.charCodeAt(parser.pos + 7) === Char.LowerT &&
      source.charCodeAt(parser.pos + 8) === Char.LowerA &&
      source.charCodeAt(parser.pos + 9) === Char.LowerW &&
      AsciiCharTypes[source.charCodeAt(parser.pos + 10)] & AsciiCharFlags.LineTerminator &&
      source.charCodeAt(parser.pos + 11) === Char.Asterisk &&
      source.charCodeAt(parser.pos + 12) === Char.Slash
    ) {
      parser.nodeFlags |= NodeFlags.Pragma;
    }
  } while (parser.pos < parser.end);

  parser.onError(
    DiagnosticSource.Parser,
    DiagnosticKind.Error,
    diagnosticMap[DiagnosticCode.Unexpected_token],
    parser.curPos,
    parser.pos
  );

  return cp;
}

export function extractComments(text: string, pos: number, trailing: boolean, consumedCommentRanges?: any): any[] {
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
          if (collecting && (!consumedCommentRanges || !(startPos in consumedCommentRanges))) {
            if (!result) {
              result = [];
            }

            result.push({ pos: startPos, end: pos, hasTrailingNewLine, kind });
            if (consumedCommentRanges) {
              consumedCommentRanges[startPos] = true;
            }
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

export function getLeadingComments(text: string, pos: number): any[] {
  return extractComments(text, pos, /*trailing*/ false);
}

export function getTrailingComments(text: string, pos: number): any[] {
  return extractComments(text, pos, /*trailing*/ true);
}

export function collectLeadingComments(text: string, pos: number, consumedCommentRanges?: any): any[] {
  return extractComments(text, pos, /*trailing*/ false, consumedCommentRanges);
}

export function collectTrailingComments(text: string, pos: number, consumedCommentRanges?: any): any[] {
  return extractComments(text, pos, /*trailing*/ true, consumedCommentRanges);
}
