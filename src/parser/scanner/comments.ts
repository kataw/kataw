import { Char } from './char';
import { SyntaxKind } from '../../ast/syntax-node';
import { isWhiteSpaceSlow, isLineTerminator } from './common';

export function lastOrUndefined<T>(array: readonly T[]): any {
  return array.length === 0 ? undefined : array[array.length - 1];
}

export function extractComments(text: string, pos: number, trailing: boolean): any[] {
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

export function getLeadingComments(text: string, pos: number): any[] {
  return extractComments(text, pos, /*trailing*/ false);
}

export function getTrailingComments(text: string, pos: number): any[] {
  return extractComments(text, pos, /*trailing*/ true);
}

export function collectLeadingComments(text: string, pos: number): any[] {
  return extractComments(text, pos, /*trailing*/ false);
}

export function collectTrailingComments(text: string, pos: number): any[] {
  return extractComments(text, pos, /*trailing*/ true);
}
