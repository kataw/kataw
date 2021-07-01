import { Char } from './char';
import { isUnicodeIdentifierStart, isUnicodeIdentifierPart } from './unicode';
import { AsciiCharFlags, AsciiCharTypes } from './asciiChar';

// ES#sec-white-space White Space
// gC=Zs, U+0009, U+000B, U+000C, U+FEFF
export function isWhiteSpaceSlow(codePoint: number): boolean {
  // Note: nextLine is in the Zs space, and should be considered to be a whitespace.
  // It is explicitly not a line-break as it isn't in the exact set specified by EcmaScript.
  return (
    codePoint == Char.NextLine ||
    codePoint == Char.ByteOrderMark ||
    codePoint == Char.NonBreakingSpace ||
    codePoint == Char.Ogham ||
    (codePoint >= Char.EnQuad && codePoint <= Char.ZeroWidthSpace) ||
    codePoint == Char.NarrowNoBreakSpace ||
    codePoint == Char.MathematicalSpace ||
    codePoint == Char.IdeographicSpace
  );
}

export function isIdentifierStart(ch: number): boolean {
  // Most code is written in pure ASCII, so create a fast path here.
  return (AsciiCharTypes[ch] & AsciiCharFlags.IdentifierStart) !== 0 || isUnicodeIdentifierStart(ch);
}

export function isIdentifierPart(ch: number): boolean {
  return (
    (AsciiCharTypes[ch] & AsciiCharFlags.IdentifierPart) !== 0 ||
    // Handle non-ASCII characters. This include all characters with
    // the ID_Continue property, plus Zero Width Non-Joiner and Zero Width Joiner.
    isUnicodeIdentifierPart(ch) ||
    ch === Char.ZeroWidthJoiner ||
    ch === Char.ZeroWidthNonJoiner
  );
}

export function isLineTerminator(codePoint: number): boolean {
  return codePoint === Char.LineFeed || codePoint === Char.CarriageReturn || (codePoint & ~1) === Char.LineSeparator;
}

export function fromCodePoint(codePoint: number): string {
  if (codePoint <= 0xffff) return String.fromCharCode(codePoint);
  return String.fromCharCode(codePoint >>> 10) + String.fromCharCode(codePoint & 0x3ff);
}

// Converts an ASCII alphanumeric digit [0-9a-zA-Z] to number as if in base-36.
export function toHex(codePoint: number): number {
  if (codePoint <= Char.Nine) return codePoint - Char.Zero;
  codePoint = codePoint | 32; // lower case code point
  if (codePoint < Char.LowerA) return -1;
  if (codePoint <= Char.LowerF) return codePoint - Char.LowerA + 10;
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
