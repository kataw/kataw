import { Char } from './char';
import { isLineTerminator, isWhiteSpaceSlow } from './common';

export function skipWhitespace(
  text: string,
  pos: number,
  stopAfterLineBreak?: boolean,
  stopAtComments = false
): number {
  if (!(pos >= 0)) {
    return pos;
  }

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
