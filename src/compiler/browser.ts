import { RootNode } from './ast/rootNode';
import { parseRoot } from './parser';

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

export function parseScript(source: string, options?: any): RootNode {
  return parseRoot(source, false, options);
}

export function parseModule(source: string, options?: any): RootNode {
  return parseRoot(source, false, options);
}
