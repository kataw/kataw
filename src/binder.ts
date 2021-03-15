import { BlockStatement } from './ast/statements/block-stmt';
import { Block } from './ast/statements/block';
import { ParenthesizedExpression } from './ast/expressions/parenthesized-expr';
import { BinaryExpression } from './ast/expressions/binary-expr';
import { NodeKind, NodeFlags } from './ast/node';
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
    case NodeKind.BlockStatement:
      return bindBlockStatement(node, binder);
    case NodeKind.Block:
      return bindBlock(node, binder);
    case NodeKind.RootNode:
    case NodeKind.FunctionStatementList:
    case NodeKind.FunctionBody:
    case NodeKind.FormalParameterList:
    case NodeKind.AssignmentExpression:
    case NodeKind.ExpressionStatement:
    case NodeKind.ElementList:
    case NodeKind.ArrayLiteral:
    case NodeKind.ParenthesizedExpression:
    case NodeKind.BinaryExpression:
    case NodeKind.ObjectLiteral:
    case NodeKind.PropertyDefinitionList:
    case NodeKind.PropertyDefinition:
    case NodeKind.ArgumentList:
    case NodeKind.FormalParameter:
    case NodeKind.SingleNameBinding:
    case NodeKind.Block:
    case NodeKind.ObjectBindingPattern:
    case NodeKind.BindingElement:
    case NodeKind.CallExpression:
    case NodeKind.BindingElementList:
    case NodeKind.HeritageClause:
    case NodeKind.ImplementClauses:
    case NodeKind.VariableStatement:
    case NodeKind.VariableDeclaration:
    case NodeKind.VariableDeclarationList:
    case NodeKind.LexicalDeclaration:
    case NodeKind.ArrayBindingPattern:
    case NodeKind.LexicalBinding:
    case NodeKind.BindingList:
    case NodeKind.BindingPropertyList:
    case NodeKind.BlockStatement:
    case NodeKind.ArrowParameters:
    case NodeKind.PropertyAccessExpression:
    case NodeKind.ArrowFunction:
    case NodeKind.AwaitExpression:
    case NodeKind.BindingProperty:
    case NodeKind.OptionalExpression:
    case NodeKind.ElementAccessExpression:
    case NodeKind.OptionalChain:
    case NodeKind.ClassHeritage:
    case NodeKind.ClassElement:
    case NodeKind.ClassElementList:
    case NodeKind.ClassDeclaration:
    case NodeKind.CommaOperator:
    case NodeKind.ComputedPropertyName:
    case NodeKind.ConditionalExpression:
    case NodeKind.CoverInitializedName:
    case NodeKind.ReturnStatement:
    case NodeKind.UnaryExpression:
    case NodeKind.PostfixUpdateExpression:
    case NodeKind.PrefixUpdateExpression:
    case NodeKind.NewExpression:
    case NodeKind.SpreadProperty:
    case NodeKind.ForInStatement:
    case NodeKind.ForOfStatement:
    case NodeKind.ForStatement:
    case NodeKind.TaggedTemplate:
    case NodeKind.SpreadElement:
    case NodeKind.TemplateExpression:
    case NodeKind.TemplateSpan:
    case NodeKind.ClassExpression:
    case NodeKind.BreakStatement:
    case NodeKind.ContinueStatement:
    case NodeKind.CaseClause:
    case NodeKind.DefaultClause:
    case NodeKind.Catch:
    case NodeKind.CatchParameter:
    case NodeKind.DoWhileStatement:
    case NodeKind.ForBinding:
    case NodeKind.IfStatement:
    case NodeKind.PropertyAccessChain:
    case NodeKind.LabelledStatement:
    case NodeKind.CaseBlock:
    case NodeKind.SwitchStatement:
    case NodeKind.ThrowStatement:
    case NodeKind.TryStatement:
    case NodeKind.ElementAccessChain:
    case NodeKind.AsyncArrowFunction:
    case NodeKind.FieldDefinition:
    case NodeKind.CallChain:
    case NodeKind.Decorator:
    case NodeKind.DecoratorList:
    case NodeKind.ImportCall:
    case NodeKind.WhileStatement:
    case NodeKind.WithStatement:
    case NodeKind.AsExpression:
    case NodeKind.TypePredicate:
    case NodeKind.TypeReference:
    case NodeKind.FunctionType:
    case NodeKind.ConstructorType:
    case NodeKind.TypeQuery:
    case NodeKind.TypeLiteral:
    case NodeKind.ArrayType:
    case NodeKind.TupleType:
    case NodeKind.OptionalType:
    case NodeKind.RestType:
    case NodeKind.UnionType:
    case NodeKind.IntersectionType:
    case NodeKind.ConditionalType:
    case NodeKind.InferType:
    case NodeKind.ImportType:
    case NodeKind.ParenthesizedType:
    case NodeKind.TypeOperator:
    case NodeKind.IndexedAccessType:
    case NodeKind.MappedType:
    case NodeKind.CallSignature:
    case NodeKind.ConstructSignature:
    case NodeKind.IndexSignature:
    case NodeKind.PropertySignature:
    case NodeKind.MethodSignature:
    case NodeKind.Parameters:
    case NodeKind.TypeAssertionExpression:
    case NodeKind.InterfaceDeclaration:
    case NodeKind.TypeAliasDeclaration:
    case NodeKind.EnumDeclaration:
    case NodeKind.MinusType:
    case NodeKind.NamedTupleMember:
    case NodeKind.ObjectTypeMembers:
    case NodeKind.ParameterDeclaration:
    case NodeKind.TypeArguments:
    case NodeKind.TypeParameter:
    case NodeKind.HeritageClauses:
    case NodeKind.ImplementClause:
    case NodeKind.EnumMembersList:
    case NodeKind.EnumMembers:
    case NodeKind.QualifiedName:
    case NodeKind.JsxAttribute:
    case NodeKind.JsxAttributesList:
    case NodeKind.JsxChildrenList:
    case NodeKind.JsxClosingElement:
    case NodeKind.JsxElement:
    case NodeKind.JsxFragment:
    case NodeKind.JsxMemberExpression:
    case NodeKind.JsxNamespacedName:
    case NodeKind.JsxOpeningElement:
    case NodeKind.JsxSelfClosingElement:
    case NodeKind.ImportClause:
    case NodeKind.ExportAssignment:
    case NodeKind.ExportDefault:
    case NodeKind.ExportDeclaration:
    case NodeKind.ExportFromClause:
    case NodeKind.ExportSpecifier:
    case NodeKind.ExportsList:
    case NodeKind.ExternalModuleReference:
    case NodeKind.ImportDeclaration:
    case NodeKind.ImportEqualsDeclaration:
    case NodeKind.ImportsList:
    case NodeKind.NamedExports:
    case NodeKind.ImportSpecifier:
    case NodeKind.NamespaceDeclaration:
    case NodeKind.NamespaceBlock:
    case NodeKind.NamedImports:
    case NodeKind.JsxSpreadAttribute:
    case NodeKind.JsxTagNamePropertyAccess:
    case NodeKind.HeritageClauses:
    default:
      return node;
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

function bindBlockStatement(node: BlockStatement, binder: Binder) {
  bind(node.block, binder);
}

function bindBlock(node: Block, binder: Binder) {
  pushScope(binder);
  bindChildren(node.statements, binder);
  popScope(binder);
}
