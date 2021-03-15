import { IfStatement } from './ast/statements/if-stmt';
import { Block } from './ast/statements/block';
import { ParenthesizedExpression } from './ast/expressions/parenthesized-expr';
import { BinaryExpression } from './ast/expressions/binary-expr';
import { Node, NodeKind, NodeFlags } from './ast/node';
import { Diagnostic } from './diagnostics/diagnostic';

/**
 * Types of symbols which can appear in the AST.
 */
export enum SymbolKind {
  Variable,
  Function,
  Parameter
}

/**
 * The base type of all types which represent some kind of symbol.
 */
interface Symbol {
  kind: SymbolKind;
  name: string;
  firstMention: NodeKind;
  references: NodeKind[];
}

/**
 * A symbol which refers to a variable.
 */
export interface VariableSymbol extends Symbol {
  kind: SymbolKind.Variable;
  isConst: boolean;
}

/**
 * A symbol which refers to a function.
 */
export interface FunctionSymbol extends Symbol {
  kind: SymbolKind.Function;
  parameters: ParameterSymbol[];
}

/**
 * A symbol which refers to the parameter of a function.
 */
export interface ParameterSymbol extends Symbol {
  kind: SymbolKind.Parameter;
}

/**
 * The set of all symbol types.
 */
export type SymbolType = VariableSymbol | FunctionSymbol | ParameterSymbol;

type SymbolTable = Map<string, SymbolType>;

export interface Binder {
  symbolTables: SymbolTable[];
  diagnostics: Diagnostic[];
}

function createBinder() {
  return {
    symbolTables: [new Map()]
  };
}

function pushScope(binder: Binder) {
  binder.symbolTables.unshift(new Map());
}

function popScope(binder: Binder) {
  binder.symbolTables.shift();
}

function findSymbol(name: string, binder: Binder): SymbolType | undefined {
  for (const table of binder.symbolTables) {
    if (table.has(name)) {
      return table.get(name)!;
    }
  }
  return undefined;
}

function addSymbol(binder: Binder, symbol: SymbolType) {
  binder.symbolTables[0].set(symbol.name, symbol);
}

function bindChildren(nodes: any[], binder: Binder) {
  for (const node of nodes) {
    bind(node, binder);
  }
}

function bind(node: any, binder: Binder) {
  let kind = node;
  if (kind & NodeKind.IsIdentifier) {
    return bindIdentifierLiteral(node, binder);
  }
  switch (node.kind) {
    case NodeKind.BinaryExpression:
      return bindBinaryExpression(node, binder);
    case NodeKind.ParenthesizedExpression:
      return bindParenthesizedExpression(node, binder);
    case NodeKind.Block:
      return bindBlock(node, binder);
  }
}

function bindBinaryExpression(node: BinaryExpression, binder: Binder) {
  bind(node.left, binder);
  bind(node.right, binder);
}

function bindParenthesizedExpression(node: ParenthesizedExpression, binder: Binder) {
  bind(node.expression, binder);
  node.symbol = node.expression.symbol;
}

function bindIdentifierLiteral(node: any, binder: Binder) {
  const varSymbol = findSymbol(node.text, binder);
  if (varSymbol !== undefined) {
    varSymbol.references.push(node);
    node.symbol = varSymbol;
  } else {
    node.flags |= NodeFlags.HasErrors;
  }
}

function bindBlock(node: Block, binder: Binder) {
  pushScope(binder);
  bindChildren(node.statements, binder);
  popScope(binder);
}
