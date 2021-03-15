import { Context } from '../common';
import { ParserState } from '../../types';
import { Token } from '../../ast/token';
import { Char } from './char';
import { isIdentifierPart, isWhiteSpaceSlow, isLineTerminator } from './common';
import { scanString } from './string';
import { nextToken } from './scan';
import { DiagnosticKind, DiagnosticSource, error } from '../../diagnostics/diagnostic';
import { DiagnosticCode } from '../../diagnostics/diagnosticMessages.generated';
import { AsciiCharFlags, AsciiCharTypes } from './asciiChar';

export function reScanJsxToken(parser: ParserState): Token {
  parser.pos = parser.tokenPos = parser.curPos;
  parser.token = scanJsxToken(parser);
  return parser.token;
}

export function scanJsxToken(parser: ParserState): Token {
  parser.curPos = parser.tokenPos = parser.pos;

  if (parser.pos >= parser.end) return Token.EndOfSource;

  let char = parser.source.charCodeAt(parser.pos);

  if (char === Char.LessThan) {
    parser.pos++;
    if (parser.source.charCodeAt(parser.pos) === Char.Slash) {
      parser.pos++;
      return Token.JSXClose;
    }
    return Token.LessThan;
  }

  if (char === Char.LeftBrace) {
    parser.pos++;
    return Token.LeftBrace;
  }

  // First non-whitespace character on this line.
  let firstNonWhitespace = 0;
  let lastNonWhitespace = -1;

  while (parser.pos < parser.end) {
    char = parser.source.charCodeAt(parser.pos);

    if (char === Char.LeftBrace) {
      break;
    }
    if (char === Char.LessThan) {
      break;
    }

    if (char === Char.RightBrace) {
      parser.diagnostics.push(
        error(DiagnosticKind.Error, DiagnosticSource.Lexer, DiagnosticCode.Invalid_character, parser.pos, /* length*/ 0)
      );
    }

    if (lastNonWhitespace > 0) lastNonWhitespace++;

    if (isLineTerminator(char) && firstNonWhitespace === 0) {
      firstNonWhitespace = -1;
    } else if ((AsciiCharTypes[char] & AsciiCharFlags.IsWhiteSpace) === 0 && !isWhiteSpaceSlow(char)) {
      firstNonWhitespace = parser.pos;
    }
    parser.pos++;
  }

  parser.tokenValue = parser.source.slice(parser.curPos, lastNonWhitespace === -1 ? parser.pos : lastNonWhitespace);

  return Token.JsxText;
}

export function scanIdentifierParts(parser: ParserState, source: string): string {
  const start = parser.pos;
  let cp = source.charCodeAt(parser.pos);
  const code: number | null = null;

  while (parser.pos < parser.end) {
    if (isIdentifierPart(cp)) {
      parser.pos++;
    } else {
      // Check for lead surrogate (U+d800..U+dbff)
      if ((cp & 0xfffffc00) !== 0xd800) break;
      parser.pos++;
      const trail = source.charCodeAt(parser.pos);
      // trail surrogate (U+dc00..U+dfff)
      if ((trail & 0xfffffc00) === 0xdc00) {
        // https://tc39.es/ecma262/#sec-utf16decodesurrogatepair
        cp = ((cp & 0x3ff) << 10) + (trail & 0x3ff) + 0x10000;
        // Check if this is a valid surrogate pair
        if (!isIdentifierPart(cp)) {
          // TODO: Throw
        }
        parser.pos++;
      }
    }

    cp = source.charCodeAt(parser.pos);
  }

  return source.slice(start, parser.pos);
}

// Scans a JSX identifier; these differ from normal identifiers in that
// they allow dashes
export function scanJsxIdentifier(parser: ParserState): void {
  if (parser.token & (Token.IsIdentifier | Token.Keyword | Token.FutureReserved)) {
    let namespaceSeparator = false;
    const firstCharPosition = parser.pos;
    while (parser.pos < parser.end) {
      const ch = parser.source.charCodeAt(parser.pos);
      if (ch === Char.Hyphen) {
        parser.tokenValue += '-';
        parser.pos++;
        continue;
      } else if (ch === Char.Colon && !namespaceSeparator) {
        parser.tokenValue += ':';
        parser.pos++;
        namespaceSeparator = true;
        continue;
      }
      const oldPos = parser.pos;
      parser.tokenValue += scanIdentifierParts(parser, parser.source);
      if (parser.pos === oldPos) {
        break;
      }
    }
    // Do not include a trailing namespace separator in the token, since this is against the spec.
    if (parser.tokenValue.slice(-1) === ':') {
      parser.tokenValue = parser.tokenValue.slice(0, -1);
      parser.pos--;
    }
    return;
  }
}

export function scanJsxAttributeValue(parser: ParserState, context: Context): Token {
  parser.curPos = parser.pos;
  switch (parser.source.charCodeAt(parser.pos)) {
    case Char.DoubleQuote:
    case Char.SingleQuote:
      return scanString(parser, parser.source.charCodeAt(parser.pos), parser.source);
    default:
      // If this scans anything other than `{`, it's a parse error.
      nextToken(parser, context);
      return parser.token;
  }
}
