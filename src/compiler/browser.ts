import { parseScriptOrModuleBody, parseStatementListItem, parseModuleItemList } from './parser';
import { Context } from './parser/common';
import { createScript, Script } from './ast/script';
import { createModule, Module } from './ast/module';
import { Char } from './parser/scanner/char';
import { Token } from './ast/token';
import { NodeFlags } from './ast/node';
import { ParserState, NodeCursor } from './types';
import { isLineTerminator } from './parser/scanner/common';
import { nextToken } from './parser/scanner/scan';

/**
 * Allows the Kataw parser to be run in a browser environment. Will work like other
 * parsers
 *
 * API:
 *
 * - parseScript(source, OPTIONS?);
 *
 * - parseModule(source, OPTIONS?);
 */

export function createParser(source: string, pos: number, isModule: boolean, nodeCursor?: NodeCursor): ParserState {
  return {
    source,
    // Current position (end position of text of current token)
    pos,
    startPos: pos,
    tokenPos: pos,
    // end of text
    end: source.length,
    token: Token.Unknown,
    tokenValue: undefined!,
    nodeFlags: isModule ? NodeFlags.Module | NodeFlags.Strict : NodeFlags.None,
    uniqueId: 0,
    templateRaw: '',
    raw: '',
    diagnostics: [],
    nodeCursor
  };
}

export function parseScript(
  // Source text of the file, or `null` to indicate not found.
  source: string,
  options?: any,
  // Incremental helper function
  nodeCursor?: NodeCursor
): Script {
  let pos = 0;
  let context = Context.None;
  if (options != null) {
    if (options.next) context |= Context.OptionsNext;
    if (options.jsx) context |= Context.OptionsJSX;
    if (options.module) context |= Context.Module | Context.Strict;
    if (options.disableWebCompat) context |= Context.OptionsDisableWebCompat;
  }
  // Hashbang Grammar
  // https://github.com/tc39/proposal-hashbang
  if (source.charCodeAt(0) === Char.Hash) {
    if (source.charCodeAt(1) === Char.Exclamation) {
      pos = 2; // '#!...'
      while (pos < source.length && !isLineTerminator(source.charCodeAt(pos))) {
        pos++;
      }
    }
  }

  // HTML close
  // https://tc39.es/ecma262/#sec-html-like-comments
  if (source.charCodeAt(0) === Char.Hyphen) {
    if (source.charCodeAt(2) === Char.GreaterThan && source.charCodeAt(1) === Char.Hyphen) {
      pos = 3;
      while (pos < source.length && !isLineTerminator(source.charCodeAt(pos))) {
        pos++;
      }
    }
  }

  const parser = createParser(source, /* pos */ pos, /* isModule */ false, nodeCursor);

  // Prime the scanner
  nextToken(parser, context | Context.AllowRegExp);

  return createScript(
    source,
    '',
    parseScriptOrModuleBody(parser, context, parseStatementListItem),
    (context & Context.OptionsJSX) === Context.OptionsJSX,
    parser.diagnostics
  );
}

// Module : ModuleBody?
export function parseModule(
  // Source text of the file, or `null` to indicate not found.
  source: string,
  options?: any,
  // Incremental helper function
  nodeCursor?: NodeCursor
): Module {
  let pos = 0;
  let context = Context.None;
  if (options != null) {
    if (options.next) context |= Context.OptionsNext;
    if (options.jsx) context |= Context.OptionsJSX;
    if (options.module) context |= Context.Module | Context.Strict;
    if (options.disableWebCompat) context |= Context.OptionsDisableWebCompat;
  }
  // Hashbang Grammar
  // https://github.com/tc39/proposal-hashbang
  if (source.charCodeAt(0) === Char.Hash) {
    if (source.charCodeAt(1) === Char.Exclamation) {
      pos = 2; // '#!...'
      while (pos < source.length && !isLineTerminator(source.charCodeAt(pos))) {
        pos++;
      }
    }
  }

  const parser = createParser(source, /* pos */ pos, /* isModule */ true, nodeCursor);

  // Prime the scanner
  nextToken(parser, context | Context.AllowRegExp);

  return createModule(
    source,
    '',
    parseScriptOrModuleBody(parser, context | Context.Strict | Context.Module, parseModuleItemList),
    (context & Context.OptionsJSX) === Context.OptionsJSX,
    parser.diagnostics
  );
}
