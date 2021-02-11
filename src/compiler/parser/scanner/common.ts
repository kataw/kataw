import { Char } from './char';
import { isUnicodeIdentifierStart, isUnicodeIdentifierPart } from './unicode';
import { AsciiCharFlags, AsciiCharTypes } from './asciiChar';
import { ParserState } from '../../types';
import { Context } from '../common';

// ES#sec-white-space White Space
// gC=Zs, U+0009, U+000B, U+000C, U+FEFF
export function isWhiteSpaceSlow(cp: number): boolean {
  // Note: nextLine is in the Zs space, and should be considered to be a whitespace.
  // It is explicitly not a line-break as it isn't in the exact set specified by EcmaScript.
  return (
    cp == Char.NonBreakingSpace ||
    cp == Char.NextLine ||
    cp == Char.Ogham ||
    (cp >= Char.EnQuad && cp <= Char.ZeroWidthSpace) ||
    cp == Char.NarrowNoBreakSpace ||
    cp == Char.MathematicalSpace ||
    cp == Char.IdeographicSpace ||
    cp == Char.ByteOrderMark
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

function speculationHelper(
  parser: ParserState,
  context: Context,
  callback: (parser: ParserState, context: Context) => any,
  alwaysResetState: boolean
): any {
  const { pos, startPos, tokenPos, raw, token, tokenValue, nodeFlags } = parser;
  const diagnostics = parser.diagnostics;
  const result = callback(parser, context);

  // If our callback returned something 'falsy' or we're just looking ahead,
  // then unconditionally restore us to where we were.
  if (!result || alwaysResetState) {
    parser.pos = pos;
    parser.startPos = startPos;
    parser.tokenPos = tokenPos;
    parser.token = token;
    parser.tokenValue = tokenValue;
    parser.nodeFlags = nodeFlags;
    parser.raw = raw;
    parser.diagnostics = []; // diagnostics;
  }
  return result;
}

export function lookAhead<T>(
  parser: ParserState,
  context: Context,
  callback: (parser: ParserState, context: Context) => T
): T {
  return speculationHelper(parser, context, callback, /*alwaysResetState:*/ true);
}

export function tryParse<T>(
  parser: ParserState,
  context: Context,
  callback: (parser: ParserState, context: Context) => T
): T {
  return speculationHelper(parser, context, callback, /*isLookahead:*/ false);
}
