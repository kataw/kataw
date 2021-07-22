import { Char } from './char';

// ES#sec-white-space White Space
// gC=Zs, U+0009, U+000B, U+000C, U+FEFF
export function isWhiteSpaceSlow(cp: number): boolean {
  return (
    cp == Char.NextLine ||
    cp == Char.ByteOrderMark ||
    cp == Char.NonBreakingSpace ||
    cp == Char.Ogham ||
    (cp >= Char.EnQuad && cp <= Char.ZeroWidthSpace) ||
    cp == Char.NarrowNoBreakSpace ||
    cp == Char.ZeroWidthNoBreakSpace ||
    cp == Char.MathematicalSpace ||
    cp == Char.IdeographicSpace
  );
}

export function isLineTerminator(cp: number): boolean {
  return cp === Char.LineFeed || cp === Char.CarriageReturn || (cp & ~1) === Char.LineSeparator;
}

export function fromCodePoint(cp: number): string {
  if (cp <= 0xffff) return String.fromCharCode(cp);
  return String.fromCharCode(cp >>> 10) + String.fromCharCode(cp & 0x3ff);
}

// Converts an ASCII alphanumeric digit [0-9a-zA-Z] to number as if in base-36.
export function toHex(cp: number): number {
  if (cp <= Char.Nine) return cp - Char.Zero;
  cp = cp | 32; // lower case code point
  if (cp < Char.LowerA) return -1;
  if (cp <= Char.LowerF) return cp - Char.LowerA + 10;
  return -1;
}

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
