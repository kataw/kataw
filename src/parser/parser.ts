import { SyntaxKind, NodeFlags, ExportKind } from '../ast/syntax-node';
import { TokenSyntaxKind, createToken, SyntaxToken } from '../ast/token';
import { nextToken } from './scanner/scanner';
import { scanTemplateTail } from './scanner/template';
import { createBlockStatement, BlockStatement } from '../ast/statements/block-stmt';
import { createBlock, Block } from '../ast/statements/block';
import { createLabelledStatement, LabelledStatement } from '../ast/statements/labelled-stmt';
import { createBreakStatement, BreakStatement } from '../ast/statements/break-stmt';
import { createContinueStatement, ContinueStatement } from '../ast/statements/continue-stmt';
import { createLabels } from '../ast/statements/labels';
import { createCaseBlock, CaseBlock } from '../ast/statements/case-block';
import { createCaseClause, CaseClause } from '../ast/statements/case-clause';
import { createCatch, CatchClause } from '../ast/statements/catch-stmt';
import { createDebuggerStatement, DebuggerStatement } from '../ast/statements/debugger-stmt';
import { createTryStatement, TryStatement } from '../ast/statements/try-stmt';
import { createDefaultClause, DefaultClause } from '../ast/statements/default-clause';
import { createDoWhileStatement, DoWhileStatement } from '../ast/statements/do-stmt';
import { createEmptyStatement, EmptyStatement } from '../ast/statements/empty-stmt';
import { createForInStatement, ForInStatement } from '../ast/statements/for-in-stmt';
import { createForOfStatement, ForOfStatement } from '../ast/statements/for-of-stmt';
import { createForStatement, ForStatement } from '../ast/statements/for-stmt';
import { createIfStatement, IfStatement } from '../ast/statements/if-stmt';
import { createReturnStatement, ReturnStatement } from '../ast/statements/return-stmt';
import { createSwitchStatement, SwitchStatement } from '../ast/statements/switch-stmt';
import { createThrowStatement, ThrowStatement } from '../ast/statements/throw-stmt';
import { createWhileStatement, WhileStatement } from '../ast/statements/while-stmt';
import { createWithStatement, WithStatement } from '../ast/statements/with-stmt';
import { StatementNode } from '../ast/statements';
import { ExpressionNode } from '../ast/expressions';
import { createSuper, Super } from '../ast/expressions/super';
import { createIndexExpressionChain } from '../ast/expressions/index-expr-chain';
import { createDecoratorList, DecoratorList } from '../ast/expressions/decorator-list';
import { createDecorator, Decorator } from '../ast/expressions/decorators';
import { createMemberAccessChain, MemberAccessChain } from '../ast/expressions/member-access-chain';
import { createCallChain } from '../ast/expressions/call-chain';
import { createOptionalExpression } from '../ast/expressions/optional-expr';
import { createOptionalChain } from '../ast/expressions/optional-chain';
import { createImportCall } from '../ast/expressions/import-call';
import { createImportMeta } from '../ast/expressions/import-meta';
import { createTemplateExpression, TemplateExpression } from '../ast/expressions/template-expression';
import { createClassElement, ClassElement } from '../ast/expressions/class-element';
import { createStaticBlock, StaticBlock } from '../ast/expressions/static-block';
import { createClassTail, ClassTail } from '../ast/expressions/class-tail';
import { createClassBody, ClassBody } from '../ast/expressions/class-body';
import { createClassExpression, ClassExpression } from '../ast/expressions/class-expr';
import { createFieldDefinition, FieldDefinition } from '../ast/expressions/field-definition';
import { createClassHeritage, ClassHeritage } from '../ast/expressions/class-heritage';
import { createTemplateSpan, TemplateSpan } from '../ast/expressions/template-span';
import { createTemplateTail, TemplateTail } from '../ast/expressions/template-tail';
import { createTaggedTemplate } from '../ast/expressions/tagged-template';
import { createAwaitExpression, AwaitExpression } from '../ast/expressions/await-expr';
import { createObjectLiteral, ObjectLiteral } from '../ast/expressions/object-literal';
import { createPropertyDefinition, PropertyDefinition } from '../ast/expressions/property-definition';
import { createPropertyMethod, PropertyMethod } from '../ast/expressions/property-method';
import { createSpreadProperty, SpreadProperty } from '../ast/expressions/spread-property';
import { createCoverInitializedName, CoverInitializedName } from '../ast/expressions/cover-initialized-name';
import { createMethodDefinition, MethodDefinition } from '../ast/expressions/method-definition';
import { createArrowFunction, ArrowFunction } from '../ast/expressions/arrow-function';
import { createSemicolonClassElement, SemicolonClassElement } from '../ast/expressions/semicolon-class-element';
import { createRegularExpressionLiteral, RegularExpressionLiteral } from '../ast/expressions/regular-expr';
import { ExpressionStatement, createExpressionStatement } from '../ast/statements/expression-stmt';
import { createNameSpaceImport, NameSpaceImport } from '../ast/module/namespace-import';
import { createFromClause, FromClause } from '../ast/module/from-clause';
import { createExportDeclaration, ExportDeclaration } from '../ast/module/export-declaration';
import { createExportDefault, ExportDefault } from '../ast/module/export-default';
import { createExportFromClause, ExportFromClause } from '../ast/module/export-from-clause';
import { createExportSpecifier, ExportSpecifier } from '../ast/module/export-specifier';
import { createExportsList, ExportsList } from '../ast/module/exports-list';
import { createImportClause } from '../ast/module/import-clause';
import { createImportDeclaration, ImportDeclaration } from '../ast/module/import-declaration';
import { createImportsList, ImportsList } from '../ast/module/imports-list';
import { createNamedExports, NamedExports } from '../ast/module/named-exports';
import { createNamedImports, NamedImports } from '../ast/module/named-imports';
import { createImportSpecifier, ImportSpecifier } from '../ast/module/import-specifier';
import { createSpreadElement, SpreadElement } from '../ast/expressions/spread-element';
import { createNewTarget, NewTarget } from '../ast/expressions/new-target';
import { createYieldExpression, YieldExpression } from '../ast/expressions/yield-expr';
import { createNewExpression, NewExpression } from '../ast/expressions/new-expr';
import { createArgumentList, ArgumentList } from '../ast/expressions/argument-list';
import { createFunctionBody, FunctionBody } from '../ast/expressions/function-body';
import { createFunctionExpression, FunctionExpression } from '../ast/expressions/function-expr';
import { createFunctionStatementList, FunctionStatementList } from '../ast/expressions/function-stmt-list';
import { createFormalParameter, FormalParameter } from '../ast/expressions/formal-parameter';
import { createFormalParameterList, FormalParameterList } from '../ast/expressions/formal-parameter-list';
import { createElison, Elison } from '../ast/expressions/elison';
import { createBindingElementList, BindingElementList } from '../ast/expressions/binding-element-list';
import { createArrayBindingElement, ArrayBindingElement } from '../ast/expressions/array-binding-element';
import { createArrayBindingPattern, ArrayBindingPattern } from '../ast/expressions/array-binding-pattern';
import { createElementList, ElementList } from '../ast/expressions/element-list';
import { createBindingProperty, BindingProperty } from '../ast/expressions/binding-property';
import { createBindingPropertyList, BindingPropertyList } from '../ast/expressions/binding-property-list';
import { createObjectBindingPattern, ObjectBindingPattern } from '../ast/expressions/object-binding-pattern';
import { createSingleNameBinding, SingleNameBinding } from '../ast/expressions/singleNameBinding';
import { createRootNode, RootNode } from '../ast/rootNode';
import { createIdentifier, Identifier } from '../ast/expressions/identifier-expr';
import { createComputedPropertyName, ComputedPropertyName } from '../ast/expressions/computed-property-name';
import { createArrayLiteral, ArrayLiteral } from '../ast/expressions/array-literal';
import { createAssignmentExpression, AssignmentExpression } from '../ast/expressions/assignment-expr';
import { createParenthesizedExpression, ParenthesizedExpression } from '../ast/expressions/parenthesized-expr';
import { createUnaryExpression, UnaryExpression } from '../ast/expressions/unary-expr';
import { createPostfixUpdateExpression, PostfixUpdateExpression } from '../ast/expressions/postfix-update-expr';
import { createPrefixUpdateExpression, PrefixUpdateExpression } from '../ast/expressions/prefix-update-expr';
import { createPrivateIdentifier, PrivateIdentifier } from '../ast/expressions/private-identifier';
import { createIndexExpression } from '../ast/expressions/index-expr';
import { createMemberAccessExpression, MemberAccessExpression } from '../ast/expressions/member-access-expr';
import { createCallExpression, CallExpression } from '../ast/expressions/call-expr';
import { createCommaOperator } from '../ast/expressions/comma-operator';
import { createNumericLiteral, NumericLiteral } from '../ast/expressions/numeric-literal';
import { createNullLiteral, NullLiteral } from '../ast/expressions/null-literal';
import { createStringLiteral, StringLiteral } from '../ast/expressions/string-literal';
import { createBooleanLiteral, BooleanLiteral } from '../ast/expressions/boolean-literal';
import { createBigIntLiteral, BigIntLiteral } from '../ast/expressions/big-int-literal';
import { createThisExpression, ThisExpression } from '../ast/expressions/this-expr';
import { createConditionalExpression } from '../ast/expressions/conditional-expr';
import { createBinaryExpression, BinaryExpression } from '../ast/expressions/binary-expr';
import { createSubtractionType, SubtractionType } from '../ast/types/subtraction-type';
import { createBooleanType, BooleanType } from '../ast/types/boolean-type';
import { createIndexedAccessType } from '../ast/types/indexed-access-type';
import { createObjectTypeSpreadProperty, ObjectTypeSpreadProperty } from '../ast/types/object-type-spread-property';
import { createObjectTypeInternalSlot, ObjectTypeInternalSlot } from '../ast/types/object-type-internal-slot';
import { createArrayType } from '../ast/types/array-type';
import { createTypeofType, TypeofType } from '../ast/types/typeof-type';
import { createNullableType } from '../ast/types/nullable-type';
import { createObjectType, ObjectType } from '../ast/types/object-type';
import { createStringType, StringType } from '../ast/types/string-type';
import { createNumberType, NumberType } from '../ast/types/number-type';
import { createObjectTypeCallProperty, ObjectTypeCallProperty } from '../ast/types/object-type-call-property';
import { createObjectTypeIndexer, ObjectTypeIndexer } from '../ast/types/object-type-indexer';
import { createIntersectionType } from '../ast/types/intersection-type';
import { createUnionType } from '../ast/types/union-type';
import { createTypeAnnotation, TypeAnnotation } from '../ast/types/type-annotation';
import { createQualifiedType, QualifiedType } from '../ast/types/qualified-type';
import { createTypeReference, TypeReference } from '../ast/types/type-reference';
import { createTypeParameter, TypeParameter } from '../ast/types/type-parameter';
import { createTupleType, TupleType } from '../ast/types/tuple-type';
import { createArrowFunctionType, ArrowFunctionType } from '../ast/types/arrow-function-type';
import { createParenthesizedType } from '../ast/types/parenthesized-type';
import { createFunctionType, FunctionType } from '../ast/types/function-type';
import { createFunctionTypeParameterList, FunctionTypeParameterList } from '../ast/types/function-type-parameter-list';
import { createFunctionTypeParameters, FunctionTypeParameter } from '../ast/types/function-type-parameter';
import { createTypeParameterDeclaration, TypeParameterDeclaration } from '../ast/types/type-parameter-declaration';
import { createBindingList, BindingList } from '../ast/statements/binding-list';
import { createVariableDeclarationList, VariableDeclarationList } from '../ast/statements/variable-declarationList';
import { createVariableStatement, VariableStatement } from '../ast/statements/variable-stmt';
import { createVariableDeclaration, VariableDeclaration } from '../ast/statements/variable-declaration';
import { createClassDeclaration, ClassDeclaration } from '../ast/statements/class-declaration';
import { createLexicalBinding, LexicalBinding } from '../ast/statements/lexical-binding';
import { createLexicalDeclaration, LexicalDeclaration } from '../ast/statements/lexical-declaration';
import { createTypeAlias, TypeAlias } from '../ast/types/type-alias-declaration';
import { createOpaqueType } from '../ast/types/opaque-type';
import { createObjectTypeProperty, ObjectTypeProperty } from '../ast/types/object-type-property';
import { createFunctionDeclaration, FunctionDeclaration } from '../ast/statements/function-declaration';
import { createDummyIdentifier, DummyIdentifier } from '../ast/internal/dummy-identifier';
import { DiagnosticCode, diagnosticMap } from '../diagnostic/diagnostic-code';
import { DiagnosticSource, DiagnosticKind } from '../diagnostic/diagnostic';
import { TypeNode } from '../ast/types';
import { Char } from './scanner/char';
import { isLineTerminator } from '../parser/scanner/common';
import {
  createTypeParameterInstantiationList,
  TypeParameterInstantiationList
} from '../ast/types/type-parameter-instantiation-list';
import {
  createTypeParameterInstantiation,
  TypeParameterInstantiation
} from '../ast/types/type-parameter-instantiation';
import { createPropertyDefinitionList, PropertyDefinitionList } from '../ast/expressions/property-definition-list';
import {
  ParserState,
  Tristate,
  ParseFunctionFlag,
  LeftHandSide,
  ObjectTypeFlag,
  Context,
  OnError,
  consumeOpt,
  consume,
  consumeOptToken,
  consumeToken,
  parseSemicolon,
  DestructibleKind,
  BindingType,
  speculate,
  isIterationStatement,
  createParentScope,
  ScopeKind,
  canParseSemicolon,
  isValidDirective,
  createScope,
  ScopeState,
  addVarOrBlock,
  addVarName,
  addBlockName,
  ScopeFlags,
  consumeKeywordAndCheckForEscapeSequence
} from './common';

/**
 * The parser options.
 */
export interface Options {
  next?: boolean;
  disableWebCompat?: boolean;
  impliedStrict?: boolean;
  allowTypes?: boolean;
}

/**
 * Create a new parser instance.
 */
export function create(source: string, pos: number, onError: OnError): ParserState {
  return {
    source,
    nodeFlags: NodeFlags.None,
    curPos: 0,
    pos,
    end: source.length,
    token: SyntaxKind.EndOfFileToken,
    tokenPos: 0,
    diagnosticStartPos: 0,
    destructible: DestructibleKind.None,
    assignable: true,
    onError,
    labels: [],
    tokenValue: undefined,
    tokenRaw: '',
    previousErrorPos: 0
  };
}

export function parse(
  source: string,
  filename: string,
  context: Context,
  isModule: boolean,
  options?: Options,
  onError?: OnError
): RootNode {
  if (options != null) {
    if (options.next) context |= Context.OptionsNext;
    if (options.impliedStrict) context |= Context.Strict;
    if (options.allowTypes) context |= Context.OptionsAllowTypes;
    if (options.disableWebCompat) context |= Context.OptionsDisableWebCompat;
  }
  let pos = 0;

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
  if (!isModule && source.charCodeAt(pos) === Char.Hyphen) {
    if (source.charCodeAt(pos + 2) === Char.GreaterThan && source.charCodeAt(pos + 1) === Char.Hyphen) {
      pos = 3;
      while (pos < source.length && !isLineTerminator(source.charCodeAt(pos))) {
        pos++;
      }
    }
  }

  /*eslint-disable */
  const parser = create(source, pos, onError ? onError : function () {});
  /*eslint-enable */

  // Prime the scanner
  nextToken(parser, context | Context.AllowRegExp);

  const moduleOrScript = isModule ? parseModuleItem : parseStatementListItem;

  const statements = [];
  const directives = [];

  const scope: ScopeState = createScope();

  while (parser.token === SyntaxKind.StringLiteral) {
    const start = parser.curPos;
    const expr = parseStringLiteral(parser, context);
    if (isValidDirective(parser) && expr.rawText.length === 12 && expr.text === 'use strict') {
      context |= Context.Strict;
      parseSemicolon(parser, context);
      directives.push(expr);
    } else {
      statements.push(
        parseExpressionStatement(parser, context, parseExpressionRest(parser, context, expr, start), start)
      );
    }
  }

  while (parser.token !== SyntaxKind.EndOfFileToken) {
    if (parser.token & 0b00010000100000011110000000000000) {
      statements.push(moduleOrScript(parser, context, scope));
      continue;
    }

    if (parser.previousErrorPos !== parser.pos) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.Declaration_or_statement_expected],
        parser.curPos,
        parser.pos
      );
    }
    nextToken(parser, context | Context.AllowRegExp);
  }
  return createRootNode(directives, statements, isModule, source, filename);
}

function parseModuleItem(parser: ParserState, context: Context, scope: ScopeState): StatementNode {
  // ecma262/#prod-ModuleItem
  // ModuleItem :
  //    ImportDeclaration
  //    ExportDeclaration
  //    StatementListItem
  const next = parser.token;
  if (next === SyntaxKind.ExportKeyword) {
    return parseExportDeclaration(parser, context, scope);
  }

  if (next === SyntaxKind.ImportKeyword) {
    //  dynamic import expression and import.meta expressions are parsed as part
    // of the import declaration to avoid any lookaheads
    return parseImportDeclaration(parser, context, scope, /* isScript*/ false);
  }
  return parseStatementListItem(parser, context, scope);
}

function parseStatementListItem(parser: ParserState, context: Context, scope: ScopeState): StatementNode {
  switch (parser.token) {
    case SyntaxKind.FunctionKeyword:
    case SyntaxKind.AsyncKeyword:
      return parseFunctionDeclaration(parser, context, scope, /* declareKeyword */ null, ParseFunctionFlag.None);
    case SyntaxKind.Decorator:
    case SyntaxKind.ClassKeyword:
      return parseClassDeclaration(parser, context, scope, /* declareKeyword */ null, /* isDefaultModifier */ false);
    case SyntaxKind.ConstKeyword:
      return parseLexicalDeclaration(
        parser,
        context,
        SyntaxKind.ConstKeyword,
        NodeFlags.Const,
        scope,
        BindingType.Const
      );
    case SyntaxKind.LetKeyword:
      return parseLetAsIdentifierOrLexicalDeclaration(parser, context, scope);
    case SyntaxKind.TypeKeyword:
      return parseTypeAsIdentifierOrTypeAlias(parser, context, /* declareKeyword */ null, scope);
    case SyntaxKind.OpaqueKeyword:
      return parseOpaqueType(parser, context, /* declareKeyword */ null, scope);
    case SyntaxKind.DeclareKeyword:
      return parseDeclareAsIdentifierOrDeclareStatement(parser, context, scope);
    case SyntaxKind.ImportKeyword:
      return parseImportDeclaration(parser, context, scope, /* isScript */ true);
    case SyntaxKind.ExportKeyword:
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.The_export_keyword_can_only_be_used_with_the_module_goal],
        parser.curPos,
        parser.pos
      );
      return parseExportDeclaration(parser, context, scope);
    default:
      return parseStatement(parser, context, /* allowFunction */ true, scope);
  }
}

// Statement :
//   ...
function parseStatement(
  parser: ParserState,
  context: Context,
  allowFunction: boolean,
  scope: ScopeState
): StatementNode {
  switch (parser.token) {
    case SyntaxKind.VarKeyword:
      return parseVariableStatement(parser, context, /* declareKeyword */ null, scope, BindingType.Var);
    case SyntaxKind.LeftBrace:
      return parseBlockStatement(parser, context, scope, /**/ false);
    case SyntaxKind.Semicolon:
      return parseEmptyStatement(parser, context);
    case SyntaxKind.IfKeyword:
      return parseIfStatement(parser, context, scope);
    case SyntaxKind.DoKeyword:
      return parseDoWhileStatement(parser, context, scope);
    case SyntaxKind.WhileKeyword:
      return parseWhileStatement(parser, context, scope);
    case SyntaxKind.ForKeyword:
      return parseForStatement(parser, context, scope);
    case SyntaxKind.ContinueKeyword:
      return parseContinueStatement(parser, context);
    case SyntaxKind.BreakKeyword:
      return parseBreakStatement(parser, context);
    case SyntaxKind.ReturnKeyword:
      return parseReturnStatement(parser, context);
    case SyntaxKind.ThrowKeyword:
      return parseThrowStatement(parser, context);
    case SyntaxKind.FinallyKeyword:
    case SyntaxKind.CatchKeyword:
      // Miscellaneous error cases arguably better caught here than elsewhere.
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode._try_expected],
        parser.curPos,
        parser.pos
      );
    case SyntaxKind.TryKeyword:
      return parseTryStatement(parser, context, scope);
    case SyntaxKind.DebuggerKeyword:
      return parseDebuggerStatement(parser, context);
    case SyntaxKind.SwitchKeyword:
      return parseSwitchStatement(parser, context, scope);
    case SyntaxKind.WithKeyword:
      return parseWithStatement(parser, context, scope);
    case SyntaxKind.AsyncKeyword:
    case SyntaxKind.FunctionKeyword:
      // FunctionDeclaration are only allowed as a StatementListItem and cannot be used in
      // a single-statement context.
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[
          context & Context.Strict
            ? DiagnosticCode.Function_declarations_can_only_be_declared_at_top_level_or_inside_a_block_in_strict_mode
            : DiagnosticCode.Function_declarations_cannot_be_used_in_a_single_statement_context
        ],
        parser.curPos,
        parser.pos
      );
      /* error recovery */
      return parseFunctionDeclaration(parser, context, scope, /* declareKeyword */ null, ParseFunctionFlag.None);
    case SyntaxKind.ClassKeyword:
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.Class_declarations_cannot_be_used_in_a_single_statement_context],
        parser.curPos,
        parser.pos
      );
      /* error recovery */
      return parseClassDeclaration(parser, context, scope, /* declareKeyword */ null, /* isDefaultModifier */ false);
    default:
      return parseExpressionOrLabelledStatement(parser, context, allowFunction, scope);
  }
}

// SwitchStatement :
//   `switch` `(` Expression `)` CaseBlock
function parseSwitchStatement(parser: ParserState, context: Context, scope: ScopeState): SwitchStatement {
  const pos = parser.curPos;
  const switchToken = consumeKeywordAndCheckForEscapeSequence(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.SwitchKeyword,
    pos
  );
  const openParenExists = consume(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.LeftParen,
    DiagnosticCode.Missing_an_opening_parentheses
  );
  const expression = parseExpression(parser, context);
  consume(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.RightParen,
    openParenExists
      ? DiagnosticCode.Expected_a_to_match_the_token_here
      : DiagnosticCode.Declaration_or_statement_expected
  );
  return createSwitchStatement(
    switchToken,
    expression,
    parseCaseBlock(parser, context | Context.InsideSwitch | Context.InBlock, {
      kind: ScopeKind.SwitchStatement,
      scope,
      flags: ScopeFlags.None
    }),
    pos,
    parser.curPos
  );
}

// CaseBlock :
//   `{` CaseClauses? `}`
//   `{` CaseClauses? DefaultClause CaseClauses? `}`
function parseCaseBlock(parser: ParserState, context: Context, scope: ScopeState): CaseBlock {
  const pos = parser.curPos;
  consume(parser, context, SyntaxKind.LeftBrace);
  const clauses = [];
  let hasDefaultCase = false;

  while (isCaseOrDefaultClause(parser.token)) {
    const pos = parser.curPos;
    if (parser.token === SyntaxKind.CaseKeyword) {
      const caseToken = consumeKeywordAndCheckForEscapeSequence(
        parser,
        context | Context.AllowRegExp,
        SyntaxKind.CaseKeyword,
        pos
      );
      const expression = parseExpression(parser, context);
      consume(parser, context | Context.AllowRegExp, SyntaxKind.Colon);
      const statements = [];
      while (parser.token & 0b00010010100000011100000000000000) {
        statements.push(parseStatementListItem(parser, context, scope));
      }
      clauses.push(createCaseClause(caseToken, expression, statements, pos, parser.curPos));
    } else {
      const defaultToken = consumeKeywordAndCheckForEscapeSequence(
        parser,
        context | Context.AllowRegExp,
        SyntaxKind.DefaultKeyword,
        pos
      );
      if (hasDefaultCase) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error | DiagnosticKind.EarlyError,
          diagnosticMap[DiagnosticCode.A_default_clause_cannot_appear_more_than_once_in_a_switch_statement],
          parser.curPos,
          parser.pos
        );
      }
      hasDefaultCase = true;
      consume(parser, context | Context.AllowRegExp, SyntaxKind.Colon);
      const statements = [];
      while (parser.token & 0b00010010100000011100000000000000) {
        statements.push(parseStatementListItem(parser, context, scope));
      }
      clauses.push(createDefaultClause(defaultToken, statements, pos, parser.curPos));
    }
  }
  consume(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.RightBrace,
    DiagnosticCode.The_parser_expected_to_find_a_to_match_the_token_here
  );
  return createCaseBlock(clauses, pos, parser.curPos);
}

function isCaseOrDefaultClause(t: SyntaxKind): boolean {
  return t === SyntaxKind.DefaultKeyword || t === SyntaxKind.CaseKeyword;
}

// TryStatement :
//   `try` Block Catch
//   `try` Block Finally
//   `try` Block Catch Finally
//
// Catch :
//   `catch` `(` CatchParameter `)` Block
//   `catch` Block
//
// Finally :
//   `finally` Block
//
// CatchParameter :
//   BindingIdentifier
//   BindingPattern
function parseTryStatement(parser: ParserState, context: Context, scope: ScopeState): TryStatement {
  const pos = parser.curPos;
  const tryToken = consumeKeywordAndCheckForEscapeSequence(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.TryKeyword,
    pos
  );
  const block = parseBlockStatement(
    parser,
    context,
    {
      kind: ScopeKind.Block,
      scope,
      flags: ScopeFlags.None
    },
    /* isCatchScope */ false
  );
  const catchClause = parser.token === SyntaxKind.CatchKeyword ? parseCatchClause(parser, context, scope) : null;

  // If we don't have a catch clause, then we must have a finally clause. Try to parse
  // one out no matter what.
  let finallyBlock: BlockStatement | null = null;
  let finallyKeyword: SyntaxToken<TokenSyntaxKind> | null = null;
  if (!catchClause || parser.token === SyntaxKind.FinallyKeyword) {
    finallyKeyword = consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.FinallyKeyword);
    finallyBlock = parseBlockStatement(parser, context, scope, /* isCatchScope */ false);
  }
  return createTryStatement(tryToken, block, catchClause, finallyKeyword, finallyBlock, pos, parser.curPos);
}

function parseCatchClause(parser: ParserState, context: Context, scope: ScopeState): CatchClause {
  const pos = parser.curPos;
  const catchToken = consumeKeywordAndCheckForEscapeSequence(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.CatchKeyword,
    pos
  );
  // Keep shape of node to avoid degrading performance.
  let catchParameter = null;
  let initializer = null;
  let catchScope = scope;
  if (consumeOpt(parser, context, SyntaxKind.LeftParen)) {
    // Create a lexical scope node around the whole catch clause, including the head
    scope = createParentScope(scope, ScopeKind.Block);

    if (parser.token === SyntaxKind.LeftBracket) {
      catchParameter = parseArrayBindingPattern(parser, context, scope, BindingType.CatchPattern);
    } else if (parser.token === SyntaxKind.LeftBrace) {
      catchParameter = parseObjectBindingPattern(parser, context, scope, BindingType.CatchPattern);
    } else {
      catchParameter = parseBindingIdentifier(
        parser,
        context,
        scope,
        BindingType.CatchIdentifier,
        DiagnosticCode.Private_identifiers_cannot_be_used_as_parameters,
        true
      );
    }
    if (parser.token === SyntaxKind.Assign) {
      /* error recovery */
      initializer = parseExpression(parser, context);
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error | DiagnosticKind.EarlyError,
        diagnosticMap[DiagnosticCode.Catch_clause_variable_cannot_have_an_initializer],
        parser.curPos,
        parser.pos
      );
    }
    consume(
      parser,
      context | Context.AllowRegExp,
      SyntaxKind.RightParen,
      DiagnosticCode.Expected_a_to_match_the_token_here
    );
    // https://tc39.es/ecma262/#sec-runtime-semantics-catchclauseevaluation
    //
    // Step 8 means that the body of a catch block always has an additional
    // lexical scope.
    catchScope = {
      kind: ScopeKind.CatchBlock,
      scope,
      flags: ScopeFlags.None
    };
  }
  return createCatch(
    catchToken,
    catchParameter as any,
    initializer,
    parseBlockStatement(parser, context, catchScope, /* isCatchScope */ true),
    pos,
    parser.curPos
  );
}

function parseDebuggerStatement(parser: ParserState, context: Context): DebuggerStatement {
  const pos = parser.curPos;
  const debuggerToken = consumeKeywordAndCheckForEscapeSequence(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.DebuggerKeyword,
    pos
  );
  parseSemicolon(parser, context);
  return createDebuggerStatement(debuggerToken, pos, parser.curPos);
}

function parseEmptyStatement(parser: ParserState, context: Context): EmptyStatement {
  const pos = parser.curPos;
  nextToken(parser, context | Context.AllowRegExp);
  return createEmptyStatement(pos, parser.curPos);
}

// BreakStatement :
//   `break` `;`
//   `break` [no LineTerminator here] LabelIdentifier `;`
function parseBreakStatement(parser: ParserState, context: Context): BreakStatement {
  const pos = parser.curPos;
  let label = null;
  const breakToken = consumeKeywordAndCheckForEscapeSequence(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.BreakKeyword,
    pos
  );
  if (canParseSemicolon(parser)) {
    if ((context & (Context.InsideSwitch | Context.InsideLoop)) < 1) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error | DiagnosticKind.EarlyError,
        diagnosticMap[
          DiagnosticCode.A_break_statement_can_only_be_used_within_an_enclosing_iteration_or_switch_statement
        ],
        parser.curPos,
        parser.pos
      );
    }
  } else {
    label = parseIdentifier(parser, context);
    const labelledIdentfier = label.text;
    let hasNoLabel = parser.labels.length === 0;

    for (let i = 0; i < parser.labels.length; i++) {
      if (parser.labels[i].label !== labelledIdentfier) {
        hasNoLabel = true;
      }
    }
    if (hasNoLabel) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error | DiagnosticKind.EarlyError,
        diagnosticMap[DiagnosticCode.Missing_label],
        parser.curPos,
        parser.pos
      );
    }
  }

  parseSemicolon(parser, context | Context.AllowRegExp);
  return createBreakStatement(breakToken, label as Identifier, pos, parser.curPos);
}

// ContinueStatement :
//   `continue` `;`
//   `continue` [no LineTerminator here] LabelIdentifier `;`
function parseContinueStatement(parser: ParserState, context: Context): ContinueStatement {
  const pos = parser.curPos;
  if ((context & Context.InsideLoop) < 1) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error | DiagnosticKind.EarlyError,
      diagnosticMap[DiagnosticCode.A_continue_statement_can_only_be_used_within_an_enclosing_iteration_statement],
      pos,
      parser.pos
    );
  }
  let label = null;
  const continueToken = consumeKeywordAndCheckForEscapeSequence(parser, context, SyntaxKind.ContinueKeyword, pos);
  if (!canParseSemicolon(parser)) {
    label = parseIdentifier(parser, context);
  }
  parseSemicolon(parser, context);
  return createContinueStatement(continueToken, label as Identifier, pos, parser.curPos);
}

// IfStatement :
//  `if` `(` Expression `)` Statement `else` Statement
//  `if` `(` Expression `)` Statement [lookahead != `else`]
function parseIfStatement(parser: ParserState, context: Context, scope: ScopeState): IfStatement {
  const pos = parser.curPos;
  const ifKeyword = consumeKeywordAndCheckForEscapeSequence(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.IfKeyword,
    pos
  );
  const openParenExists = consume(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.LeftParen,
    DiagnosticCode.Missing_an_opening_parentheses
  );
  const expression = parseExpression(parser, context);
  consume(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.RightParen,
    openParenExists
      ? DiagnosticCode.Expected_a_to_match_the_token_here
      : DiagnosticCode.Declaration_or_statement_expected
  );
  const consequent = parseConsequentOrAlternative(parser, context, scope);
  const elseKeyword = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.ElseKeyword);
  const alternate = elseKeyword ? parseConsequentOrAlternative(parser, context, scope) : null;
  return createIfStatement(ifKeyword, expression, consequent, elseKeyword, alternate, pos, parser.curPos);
}

function parseConsequentOrAlternative(parser: ParserState, context: Context, scope: ScopeState): StatementNode {
  // Annex B.3.4 says that unbraced FunctionDeclarations under if/else in
  // non-strict code act as if they were braced: 'if (x) function f() {}'
  // parses as 'if (x) { function f() {} }'.
  if (parser.token === SyntaxKind.FunctionKeyword) {
    if (context & (Context.OptionsDisableWebCompat | Context.Strict)) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error | DiagnosticKind.EarlyError,
        diagnosticMap[
          context & Context.Strict
            ? DiagnosticCode.Function_declarations_inside_if_statements_cannot_be_used_in_strict_mode
            : DiagnosticCode.Without_web_compability_enabled_functtion_declarations_are_disallowed_inside_if_statements
        ],
        parser.curPos,
        parser.pos
      );
    }
    return parseFunctionDeclaration(
      parser,
      context,
      createParentScope(scope, ScopeKind.Block),
      /* declareKeyword */ null,
      ParseFunctionFlag.DisallowGenerator
    );
  }
  return parseStatement(parser, context, /* allowFunction */ false, scope);
}

// `while` `(` Expression `)` Statement
function parseWhileStatement(parser: ParserState, context: Context, scope: ScopeState): WhileStatement {
  const pos = parser.curPos;
  const whileToken = consumeKeywordAndCheckForEscapeSequence(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.WhileKeyword,
    pos
  );
  const openParenExists = consume(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.LeftParen,
    DiagnosticCode.Missing_an_opening_parentheses
  );
  const expression = parseExpression(parser, context);
  consume(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.RightParen,
    openParenExists
      ? DiagnosticCode.Expected_a_to_match_the_token_here
      : DiagnosticCode.Declaration_or_statement_expected
  );
  const statement = parseStatement(
    parser,
    (context | 0b00000000100000000001000010000000) ^ 0b00000000100000000000000010000000,
    /* allowFunction */ false,
    scope
  );
  return createWhileStatement(whileToken, expression, statement, pos, parser.curPos);
}

// `do` Statement `while` `(` Expression `)` `;`
function parseDoWhileStatement(parser: ParserState, context: Context, scope: ScopeState): DoWhileStatement {
  const pos = parser.curPos;
  const doKeyword = consumeKeywordAndCheckForEscapeSequence(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.DoKeyword,
    pos
  );
  const statement = parseStatement(
    parser,
    (context | 0b00000000100000000001000010000000) ^ 0b00000000100000000000000010000000,
    /* allowFunction */ false,
    scope
  );
  const whileKeyword = consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.WhileKeyword);
  const openParenExists = consume(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.LeftParen,
    DiagnosticCode.Missing_an_opening_parentheses
  );
  const expression = parseExpression(parser, context);
  consume(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.RightParen,
    openParenExists
      ? DiagnosticCode.Expected_a_to_match_the_token_here
      : DiagnosticCode.Declaration_or_statement_expected
  );
  consumeOpt(parser, context | Context.AllowRegExp, SyntaxKind.Semicolon);
  return createDoWhileStatement(doKeyword, expression, whileKeyword, statement, pos, parser.curPos);
}

// WithStatement :
//   `with` `(` Expression `)` Statement
function parseWithStatement(parser: ParserState, context: Context, scope: ScopeState): WithStatement {
  const pos = parser.curPos;
  if (context & Context.Strict) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error | DiagnosticKind.EarlyError,
      diagnosticMap[DiagnosticCode._with_statements_are_not_allowed_in_strict_mode],
      pos,
      parser.pos
    );
  }
  const withKeyword = consumeKeywordAndCheckForEscapeSequence(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.WithKeyword,
    pos
  );
  const openParenExists = consume(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.LeftParen,
    DiagnosticCode.Missing_an_opening_parentheses
  );
  const expression = parseExpression(parser, context);
  consume(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.RightParen,
    openParenExists
      ? DiagnosticCode.Expected_a_to_match_the_token_here
      : DiagnosticCode.Declaration_or_statement_expected
  );
  const statement = parseStatement(
    parser,
    (context | 0b00000000100000000001000010000000) ^ 0b00000000100000000000000010000000,
    /* allowFunction */ false,
    scope
  );
  return createWithStatement(withKeyword, expression, statement, pos, parser.curPos);
}

// ThrowStatement :
//   `throw` [no LineTerminator here] Expression `;`
function parseThrowStatement(parser: ParserState, context: Context): ThrowStatement {
  const pos = parser.curPos;
  const throwKeyword = consumeKeywordAndCheckForEscapeSequence(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.ThrowKeyword,
    pos
  );
  if (parser.nodeFlags & NodeFlags.NewLine) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error | DiagnosticKind.EarlyError,
      diagnosticMap[DiagnosticCode.Linebreak_ermitted_after_throw],
      parser.curPos,
      parser.pos
    );
  }
  const expression = parseExpression(parser, context);
  parseSemicolon(parser, context);
  return createThrowStatement(throwKeyword, expression, pos, parser.curPos);
}

// ReturnStatement :
//   `return` `;`
//   `return` [no LineTerminator here] Expression `;`
function parseReturnStatement(parser: ParserState, context: Context): ReturnStatement {
  const pos = parser.curPos;
  if ((context & Context.IsOutsideFnOrArrow) === 0) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error | DiagnosticKind.EarlyError,
      diagnosticMap[DiagnosticCode.A_return_statement_can_only_be_used_within_a_function_body],
      pos,
      parser.pos
    );
  }
  const returnToken = consumeKeywordAndCheckForEscapeSequence(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.ReturnKeyword,
    pos
  );
  const expression = canParseSemicolon(parser) ? null : parseExpression(parser, context);
  parseSemicolon(parser, context);
  return createReturnStatement(returnToken, expression, parser.nodeFlags, pos);
}

export function parseLabelledStatement(
  parser: ParserState,
  context: Context,
  expr: Identifier,
  token: SyntaxKind,
  flags: NodeFlags,
  allowFunction: boolean,
  scope: ScopeState,
  pos: number
): LabelledStatement {
  if (token === SyntaxKind.AwaitKeyword) {
    if (context & (Context.AwaitContext | Context.Module)) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error | DiagnosticKind.EarlyError,
        diagnosticMap[
          flags & 0b00000000000000000110000000000000
            ? DiagnosticCode.Unicode_escapes_at_the_start_of_labels_should_not_allow_keywords
            : DiagnosticCode.Identifier_expected_await_is_a_reserved_word_in_strict_mode_and_module_goal_and_cannot_be_used_as_an_label
        ],
        pos,
        parser.pos
      );
    }
  }
  if (context & (Context.YieldContext | Context.Strict) && token === SyntaxKind.YieldKeyword) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error | DiagnosticKind.EarlyError,
      diagnosticMap[
        flags & 0b00000000000000000110000000000000
          ? DiagnosticCode.Unicode_escapes_at_the_start_of_labels_should_not_allow_keywords
          : DiagnosticCode.Identifier_expected_yield_is_a_reserved_word_in_strict_mode_and_cannot_be_used_as_an_label
      ],
      pos,
      parser.pos
    );
  }

  const labelledIdentfier = expr.text;

  for (let i = 0; i < parser.labels.length; i++) {
    if (parser.labels[i].label === labelledIdentfier) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error | DiagnosticKind.EarlyError,
        diagnosticMap[DiagnosticCode.Duplicate_label],
        pos,
        parser.pos
      );
      flags | NodeFlags.DuplicateLabels;
    }
  }

  parser.labels.push(
    createLabels(
      labelledIdentfier,
      isIterationStatement(parser.token),
      flags | NodeFlags.IsStatement,
      pos,
      parser.curPos
    )
  );

  const colonToken = consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.Colon); // skip: ':'

  return createLabelledStatement(
    expr,
    parser.labels,
    colonToken,
    !allowFunction ||
      // Per 13.13.1 it's a syntax error if LabelledItem: FunctionDeclaration
      // is ever matched. Per Annex B.3.2 that modifies this text, this
      // applies only to strict mode code.
      context & (Context.OptionsDisableWebCompat | Context.Strict) ||
      parser.token !== SyntaxKind.FunctionKeyword
      ? parseStatement(parser, context, allowFunction, scope)
      : parseFunctionDeclaration(
          parser,
          context,
          scope,
          /* declareKeyword */ null,
          ParseFunctionFlag.DisallowGenerator
        ),
    flags | NodeFlags.IsStatement,
    pos,
    parser.curPos
  );
}

// `for` `(` [lookahead != `let` `[`] Expression? `;` Expression? `;` Expression? `)` Statement
// `for` `(` `var` VariableDeclarationList `;` Expression? `;` Expression? `)` Statement
// `for` `(` LexicalDeclaration Expression? `;` Expression? `)` Statement
// `for` `(` [lookahead != `let` `[`] LeftHandSideExpression `in` Expression `)` Statement
// `for` `(` `var` ForBinding `in` Expression `)` Statement
// `for` `(` ForDeclaration `in` Expression `)` Statement
// `for` `(` [lookahead != { `let`, `async` `of` }] LeftHandSideExpression `of` AssignmentExpression `)` Statement
// `for` `(` `var` ForBinding `of` AssignmentExpression `)` Statement
// `for` `(` ForDeclaration `of` AssignmentExpression `)` Statement
// `for` `await` `(` [lookahead != `let`] LeftHandSideExpression `of` AssignmentExpression `)` Statement
// `for` `await` `(` `var` ForBinding `of` AssignmentExpression `)` Statement
// `for` `await` `(` ForDeclaration `of` AssignmentExpression `)` Statement
//
// ForDeclaration : LetOrConst ForBinding
function parseForStatement(
  parser: ParserState,
  context: Context,
  scope: ScopeState
): ForStatement | ForInStatement | ForOfStatement {
  const pos = parser.curPos;
  const forKeyword = consumeKeywordAndCheckForEscapeSequence(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.ForKeyword,
    pos
  );
  let destructible!: DestructibleKind;
  const awaitKeyword = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.AwaitKeyword);

  if (awaitKeyword && (context & (Context.Module | Context.AwaitContext)) === 0) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error | DiagnosticKind.EarlyError,
      diagnosticMap[
        DiagnosticCode.A_for_await_of_statement_is_only_allowed_within_an_async_function_or_async_generator
      ],
      parser.curPos,
      parser.pos
    );
  }

  consume(parser, context | Context.AllowRegExp, SyntaxKind.LeftParen, DiagnosticCode.Missing_an_opening_parentheses);

  let initializer = null;
  let isVarOrLexical = false;

  if (parser.token === SyntaxKind.LetKeyword) {
    const { curPos } = parser;
    initializer = parseIdentifier(parser, context);
    if (parser.token & (SyntaxKind.IsIdentifier | SyntaxKind.IsFutureReserved | SyntaxKind.IsPatternStart)) {
      if ((parser.token as SyntaxKind) === SyntaxKind.InKeyword) {
        if (context & Context.Strict) {
          parser.onError(
            DiagnosticSource.Parser,
            DiagnosticKind.Error | DiagnosticKind.EarlyError,
            diagnosticMap[DiagnosticCode.Identifier_expected_let_is_a_reserved_word_in_strict_mode],
            parser.curPos,
            parser.pos
          );
        }
      } else {
        // The initializer contains lexical declarations,
        // so create an in-between scope.
        scope = createParentScope(scope, ScopeKind.ForStatement);
        initializer = parseBindingList(
          parser,
          context | Context.DisallowInContext | Context.LexicalContext,
          NodeFlags.Const,
          /* inForStatement */ true,
          scope,
          BindingType.Let
        );
      }
      isVarOrLexical = true;
      parser.assignable = true;
    } else if (context & Context.Strict) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error | DiagnosticKind.EarlyError,
        diagnosticMap[DiagnosticCode.Identifier_expected_let_is_a_reserved_word_in_strict_mode],
        parser.curPos,
        parser.pos
      );
    } else {
      parser.assignable = true;

      initializer = parseMemberExpression(parser, context, initializer, /* allowCalls */ true, curPos);

      // In a for-of loop, 'let' that starts the loop head is a 'let' keyword,
      // per the [lookahead ≠ let] restriction on the LeftHandSideExpression
      // variant of such loops, so 'let' are disallowed here.
      if ((parser.token as SyntaxKind) === SyntaxKind.OfKeyword) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error | DiagnosticKind.EarlyError,
          diagnosticMap[DiagnosticCode.Identifier_expected_let_is_a_reserved_word_in_strict_mode],
          parser.curPos,
          parser.pos
        );
      }
    }
  } else if (consumeOpt(parser, context, SyntaxKind.ConstKeyword)) {
    scope = createParentScope(scope, ScopeKind.ForStatement);
    initializer = parseBindingList(
      parser,
      context | Context.DisallowInContext | Context.LexicalContext,
      NodeFlags.Const,
      /* inForStatement */ true,
      scope,
      BindingType.Const
    );
    isVarOrLexical = true;
    parser.assignable = true;
  } else if (consumeOpt(parser, context, SyntaxKind.VarKeyword)) {
    scope = createParentScope(scope, ScopeKind.ForStatement);
    initializer = parseVariableDeclarationList(
      parser,
      context | Context.DisallowInContext,
      /* inForStatement */ true,
      scope,
      BindingType.Var
    );
    parser.assignable = true;
    isVarOrLexical = true;
  } else if (parser.token & SyntaxKind.IsSemicolon) {
    if (awaitKeyword && context & (Context.Module | Context.AwaitContext)) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error | DiagnosticKind.EarlyError,
        diagnosticMap[DiagnosticCode._of_expected],
        parser.curPos,
        parser.pos
      );
    }
  } else if (parser.token & SyntaxKind.IsPatternStart) {
    initializer =
      parser.token === SyntaxKind.LeftBrace
        ? parseObjectLiteralOrAssignmentExpression(parser, context, null, BindingType.Literal)
        : parseArrayLiteralOrAssignmentExpression(parser, context, null, BindingType.Literal);
    if (initializer.flags & NodeFlags.PrototypeField) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.An_object_literal_cannot_have_multiple_properties_with_the_name___proto],
        parser.curPos,
        parser.pos
      );
    }

    destructible = parser.destructible;

    parser.assignable = destructible & DestructibleKind.NotDestructible ? false : true;

    initializer = parseMemberExpression(parser, context, initializer, true, pos);
  } else {
    if (awaitKeyword) context |= Context.InForOfAwait;

    initializer = parseLeftHandSideExpression(parser, context | Context.DisallowInContext, LeftHandSide.ForStatement);
  }

  if (parser.token & SyntaxKind.IsInOrOf || awaitKeyword) {
    if (parser.nodeFlags & 0b00000000000000000110000000000000) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error | DiagnosticKind.EarlyError,
        diagnosticMap[DiagnosticCode.Keywords_cannot_contain_escape_characters],
        parser.curPos,
        parser.pos
      );
    }

    const ofKeyword = awaitKeyword
      ? consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.OfKeyword)
      : consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.OfKeyword);

    if (ofKeyword) {
      if (!parser.assignable) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error | DiagnosticKind.EarlyError,
          diagnosticMap[
            DiagnosticCode.The_left_hand_side_of_a_for_of_statement_must_be_a_variable_or_a_property_access
          ],
          parser.curPos,
          parser.pos
        );
      }
      const expression = parseExpression(parser, context);
      consume(
        parser,
        context | Context.AllowRegExp,
        SyntaxKind.RightParen,
        DiagnosticCode.Expected_a_to_match_the_token_here
      );
      return createForOfStatement(
        forKeyword,
        ofKeyword,
        initializer,
        expression,
        parseStatement(
          parser,
          ((context | 0b00000000100000000000000010000000) ^ 0b00000000100000000000000010000000) | Context.InsideLoop,
          /* allowFunction */ false,
          scope
        ),
        awaitKeyword,
        pos,
        parser.curPos
      );
    }

    const inKeyword = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.InKeyword);

    if (inKeyword) {
      if (!parser.assignable) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error | DiagnosticKind.EarlyError,
          diagnosticMap[
            DiagnosticCode.The_left_hand_side_of_a_for_in_statement_must_be_a_variable_or_a_property_access
          ],
          parser.curPos,
          parser.pos
        );
      }

      const expression = parseExpressions(parser, context);

      consume(
        parser,
        context | Context.AllowRegExp,
        SyntaxKind.RightParen,
        DiagnosticCode.Expected_a_to_match_the_token_here
      );

      return createForInStatement(
        forKeyword,
        inKeyword,
        initializer,
        expression,
        parseStatement(
          parser,
          ((context | 0b00000000100000000000000010000000) ^ 0b00000000100000000000000010000000) | Context.InsideLoop,
          /* allowFunction */ false,
          scope
        ),
        pos,
        parser.curPos
      );
    }
  }

  let condition: ExpressionNode | null = null;
  let incrementor: ExpressionNode | null = null;

  if (!isVarOrLexical) {
    if (destructible & DestructibleKind.MustDestruct && parser.token !== SyntaxKind.Assign) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error | DiagnosticKind.EarlyError,
        diagnosticMap[
          DiagnosticCode
            .Did_you_mean_to_use_a_An_can_only_follow_a_property_name_when_the_containing_object_literal_is_part_of_a_destructuring
        ],
        parser.curPos,
        parser.pos
      );
    }

    initializer = parseCommaOperator(
      parser,
      context,
      parseAssignmentExpression(parser, context, initializer as ExpressionNode, pos),
      pos
    );
  }

  consume(parser, context | Context.AllowRegExp, SyntaxKind.Semicolon);

  if (parser.token !== SyntaxKind.Semicolon) condition = parseExpressions(parser, context);

  consume(parser, context | Context.AllowRegExp, SyntaxKind.Semicolon);

  if (parser.token !== SyntaxKind.RightParen) incrementor = parseExpressions(parser, context);

  consume(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.RightParen,
    DiagnosticCode.Expected_a_to_match_the_token_here
  );

  return createForStatement(
    forKeyword,
    initializer,
    incrementor,
    condition,
    parseStatement(
      parser,
      ((context | 0b00000000100000000000000010000000) ^ 0b00000000100000000000000010000000) | Context.InsideLoop,
      /* allowFunction */ false,
      scope
    ),
    pos,
    parser.curPos
  );
}

export function parseExpressionOrLabelledStatement(
  parser: ParserState,
  context: Context,
  allowFunction: boolean,
  scope: ScopeState
): LabelledStatement | ExpressionStatement {
  const { token, curPos, nodeFlags } = parser;
  const expr = parsePrimaryExpression(parser, context, /* inNewExpression */ false, LeftHandSide.None);
  return token & (SyntaxKind.IsFutureReserved | SyntaxKind.IsIdentifier) && parser.token === SyntaxKind.Colon
    ? parseLabelledStatement(parser, context, expr as Identifier, token, nodeFlags, allowFunction, scope, curPos)
    : parseExpressionStatement(parser, context, parseExpressionRest(parser, context, expr, curPos), curPos);
}

// ExpressionStatement :
//   [lookahead != `{`, `function`, `async` [no LineTerminator here] `function`, `class`, `let` `[` ] Expression `;`
function parseExpressionStatement(
  parser: ParserState,
  context: Context,
  expr: ExpressionNode,
  pos: number
): ExpressionStatement {
  parseSemicolon(parser, context);
  return createExpressionStatement(expr, pos, parser.curPos);
}

function parseBindingIdentifier(
  parser: ParserState,
  context: Context,
  scope: ScopeState,
  type: BindingType,
  diagnosticMessage?: DiagnosticCode,
  allowKeywords?: boolean
): Identifier | DummyIdentifier {
  const { token, curPos, tokenValue, tokenRaw } = parser;
  parser.assignable = true;

  if (
    token &
    (allowKeywords
      ? SyntaxKind.IsKeyword | SyntaxKind.IsFutureReserved | SyntaxKind.IsIdentifier
      : SyntaxKind.IsFutureReserved | SyntaxKind.IsIdentifier)
  ) {
    if (context & (Context.Strict | Context.YieldContext) && token === SyntaxKind.YieldKeyword) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error | DiagnosticKind.EarlyError,
        diagnosticMap[
          context & Context.Parameters
            ? DiagnosticCode._yield_expression_cannot_be_used_in_function_parameters
            : context & Context.Strict
            ? DiagnosticCode.Identifier_expected_yield_is_a_reserved_word_in_strict_mode
            : DiagnosticCode._yield_cannot_be_used_as_an_identifier_here
        ],
        parser.curPos,
        parser.pos
      );
    } else if (context & (Context.Module | Context.AwaitContext) && token === SyntaxKind.AwaitKeyword) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error | DiagnosticKind.EarlyError,
        diagnosticMap[
          context & Context.Parameters
            ? DiagnosticCode._await_expression_cannot_be_used_in_function_parameters
            : context & Context.Module
            ? DiagnosticCode.Identifier_expected_await_is_a_reserved_word_in_strict_mode_and_module_goal
            : parser.nodeFlags & 0b00000000000000000110000000000000
            ? DiagnosticCode._await_keyword_must_not_contain_escaped_characters
            : DiagnosticCode._await_cannot_be_used_as_an_identifier_here
        ],
        parser.curPos,
        parser.pos
      );
    } else if (context & Context.Strict && parser.token & SyntaxKind.IsFutureReserved) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error | DiagnosticKind.EarlyError,
        diagnosticMap[DiagnosticCode.Identifier_expected_Reserved_word_in_strict_mode],
        parser.curPos,
        parser.pos
      );
    }

    // 'let' followed by '[' means a lexical declaration, which should not appear here.
    if (token === SyntaxKind.LetKeyword && (parser.token as SyntaxKind) === SyntaxKind.LeftBracket) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error | DiagnosticKind.EarlyError,
        diagnosticMap[DiagnosticCode._let_is_a_restricted_production_at_the_start_of_a_statement],
        parser.curPos,
        parser.pos
      );
    }
    addVarOrBlock(parser, context, scope, parser.tokenValue, type);
    nextToken(parser, context);
    return createIdentifier(tokenValue, tokenRaw, curPos, parser.curPos);
  }
  if (parser.previousErrorPos !== parser.pos) {
    parser.previousErrorPos = parser.pos;
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[diagnosticMessage ? diagnosticMessage : DiagnosticCode.Expression_expected],
      parser.curPos,
      parser.pos
    );
  }
  return createDummyIdentifier(curPos, curPos);
}

function parseIdentifier(
  parser: ParserState,
  context: Context,
  diagnosticMessage?: DiagnosticCode,
  allowKeywords?: boolean
): Identifier | DummyIdentifier {
  const { token, curPos, tokenValue, tokenRaw, pos } = parser;
  parser.assignable = true;

  if (
    token &
    (allowKeywords
      ? SyntaxKind.IsKeyword | SyntaxKind.IsFutureReserved | SyntaxKind.IsIdentifier
      : SyntaxKind.IsFutureReserved | SyntaxKind.IsIdentifier)
  ) {
    nextToken(parser, context);
    return createIdentifier(tokenValue, tokenRaw, curPos, parser.curPos);
  }

  if (parser.previousErrorPos !== pos) {
    parser.previousErrorPos = pos;
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error | DiagnosticKind.EarlyError,
      diagnosticMap[diagnosticMessage ? diagnosticMessage : DiagnosticCode.Expression_expected],
      curPos,
      pos
    );
  }

  return createDummyIdentifier(curPos, curPos);
}

// BlockStatement : Block
function parseBlockStatement(
  parser: ParserState,
  context: Context,
  scope: ScopeState,
  isCatchScope: boolean
): BlockStatement {
  const pos = parser.curPos;
  if (consume(parser, context | Context.AllowRegExp, SyntaxKind.LeftBrace)) {
    const block = parseBlock(parser, context | Context.InBlock, scope, isCatchScope);
    consume(
      parser,
      context | Context.AllowRegExp,
      SyntaxKind.RightBrace,
      DiagnosticCode.The_parser_expected_to_find_a_to_match_the_token_here
    );
    if (consumeOpt(parser, context, SyntaxKind.Assign)) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error | DiagnosticKind.EarlyError,
        diagnosticMap[
          DiagnosticCode
            .Declaration_or_statement_expected_This_follows_a_block_of_statements_so_if_you_intended_to_write_a_destructuring_assignment_you_might_need_to_wrap_the_whole_assignment_in_parentheses
        ],
        parser.curPos,
        parser.pos
      );
    }
    return createBlockStatement(block, pos, parser.curPos);
  }
  // Empty list
  return createBlockStatement(createBlock([], NodeFlags.IsStatement, pos, parser.curPos), pos, pos);
}

// Block : `{` StatementList `}`
function parseBlock(parser: ParserState, context: Context, scope: ScopeState, isCatchScope: boolean): Block {
  const curPos = parser.curPos;
  const statements: StatementNode[] = [];
  const flags = parser.nodeFlags;
  // We avoid making a a new 'catch scope' while parsing out a "TryStatement" for
  // cases like 'try {} catch(x) {}'. Instead we continue with current scope.
  if (!isCatchScope) scope = createParentScope(scope, ScopeKind.Block);
  while (parser.token & 0b00010000100000011110000000000000) {
    const statement = parseStatementListItem(parser, context, scope);

    if (statement) {
      statements.push(statement);
    }
  }
  return createBlock(statements, flags | NodeFlags.IsStatement, curPos, parser.curPos);
}

// AssignmentExpression :
//   ConditionalExpression
//   [+Yield] YieldExpression
//   ArrowFunction
//   AsyncArrowFunction
//   LeftHandSideExpression `=` AssignmentExpression
//   LeftHandSideExpression AssignmentOperator AssignmentExpression
//   LeftHandSideExpression LogicalAssignmentOperator AssignmentExpression
//
// AssignmentOperator : one of
//   *= /= %= += -= <<= >>= >>>= &= ^= |= **=
//
// LogicalAssignmentOperator : one of
//   &&= ||= ??=
function parseAssignmentExpression(
  parser: ParserState,
  context: Context,
  expr: ExpressionNode,
  pos: number
): ExpressionNode {
  const t = parser.token;
  if ((t & SyntaxKind.IsAssignOp) === SyntaxKind.IsAssignOp) {
    if (!parser.assignable) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error | DiagnosticKind.EarlyError,
        diagnosticMap[
          parser.destructible & DestructibleKind.EvalOrArguments
            ? DiagnosticCode.Cannot_assign_to_eval_and_arguments_because_they_are_not_a_variable
            : DiagnosticCode.The_left_hand_side_of_an_assignment_expression_must_be_a_variable_or_a_property_access
        ],
        parser.curPos,
        parser.pos
      );
    }
    const operatorToken = parseTokenNode(parser, context | Context.AllowRegExp);
    const right = parseExpression(parser, context);
    parser.assignable = false;
    return createAssignmentExpression(expr, operatorToken, right, pos, parser.curPos);
  }

  return parseShortCircuitExpression(parser, context, expr, pos);
}

function parseTokenNode(parser: ParserState, context: Context): SyntaxToken<TokenSyntaxKind> {
  const pos = parser.curPos;
  const kind = parser.token;
  const flags = parser.nodeFlags;
  nextToken(parser, context);
  return createToken(kind, flags | NodeFlags.ChildLess, pos, parser.curPos);
}

// ConditionalExpression :
//   ShortCircuitExpression
//   ShortCircuitExpression `?` AssignmentExpression `:` AssignmentExpression
function parseConditionalExpression(
  parser: ParserState,
  context: Context,
  shortCircuit: ExpressionNode,
  pos: number
): ExpressionNode {
  parser.assignable = false;
  return createConditionalExpression(
    shortCircuit,
    consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.QuestionMark),
    parseExpression(parser, (context | 0b00000000110000000000000010000000) ^ 0b00000000100000000000000010000000),
    consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.Colon),
    parseExpression(parser, (context | Context.InConditionalExpr) ^ Context.InConditionalExpr),
    pos,
    parser.curPos
  );
}

// ShortCircuitExpression :
//   LogicalORExpression
//   CoalesceExpression
//
// CoalesceExpression :
//   CoalesceExpressionHead `??` BitwiseORExpression
//
// CoalesceExpressionHead :
//   CoalesceExpression
//   BitwiseORExpression
function parseShortCircuitExpression(
  parser: ParserState,
  context: Context,
  expr: ExpressionNode,
  pos: number
): ExpressionNode {
  expr = parseBinaryExpression(parser, context, expr as BinaryExpression, /* minPrec */ 4, parser.token, pos);
  return parser.token === SyntaxKind.QuestionMark ? parseConditionalExpression(parser, context, expr, pos) : expr;
}

function parseBinaryExpression(
  parser: ParserState,
  context: Context,
  left: BinaryExpression,
  minPrec: number,
  operator: SyntaxKind,
  pos: number
): BinaryExpression {
  let t: SyntaxKind;
  let prec: number;
  const bit = -((context & Context.DisallowInContext) > 0) & SyntaxKind.InKeyword;

  parser.assignable = false;

  while ((parser.token & SyntaxKind.IsBinaryOp) > 0) {
    t = parser.token;
    prec = t & SyntaxKind.Precedence;

    if (
      prec + ((((t as SyntaxKind) === SyntaxKind.Exponentiate) as any) << 8) - (((bit === t) as any) << 12) <=
      minPrec
    )
      return left;

    if (
      (((t as SyntaxKind) === SyntaxKind.LogicalAnd || (t as SyntaxKind) === SyntaxKind.LogicalOr) &&
        operator === SyntaxKind.QuestionMarkQuestionMark) ||
      (((operator as SyntaxKind) === SyntaxKind.LogicalAnd || (operator as SyntaxKind) === SyntaxKind.LogicalOr) &&
        t === SyntaxKind.QuestionMarkQuestionMark)
    ) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error | DiagnosticKind.EarlyError,
        diagnosticMap[DiagnosticCode._and_operations_cannot_be_mixed_without_parentheses],
        parser.curPos,
        parser.pos
      );
    }
    left = createBinaryExpression(
      left,
      parseTokenNode(parser, context | Context.AllowRegExp),
      parseBinaryExpression(
        parser,
        context,
        parseLeftHandSideExpression(parser, context, LeftHandSide.NotAssignable) as BinaryExpression,
        prec,
        t,
        parser.curPos
      ),
      pos,
      parser.curPos
    );
  }

  return left;
}

// LeftHandSideExpression
function parseLeftHandSideExpression(
  parser: ParserState,
  context: Context,
  LeftHandSideContext: LeftHandSide
): ExpressionNode {
  const pos = parser.curPos;
  const expression = parsePrimaryExpression(parser, context, /* inNewExpression */ false, LeftHandSideContext);
  return parseMemberExpression(parser, context, expression, /* allowCalls */ true, pos);
}

function parseExpression(parser: ParserState, context: Context): ExpressionNode {
  const curPos = parser.curPos;
  let expr = parsePrimaryExpression(parser, context, /* inNewExpression */ false, LeftHandSide.None);
  expr = parseMemberExpression(parser, context, expr, /* allowCalls */ true, curPos);
  expr = parseAssignmentExpression(parser, context, expr, curPos);
  return expr;
}

function parseExpressions(parser: ParserState, context: Context): ExpressionNode {
  const curPos = parser.curPos;
  const property = parseExpression(parser, context);
  return parser.token === SyntaxKind.Comma ? parseCommaOperator(parser, context, property, curPos) : property;
}

function parseMemberExpression(
  parser: ParserState,
  context: Context,
  expr: ExpressionNode,
  allowCalls: boolean,
  pos: number
): ExpressionNode {
  const check = allowCalls ? SyntaxKind.IsPropertyOrCall : SyntaxKind.IsMember;
  while (parser.token & check) {
    switch (parser.token) {
      case SyntaxKind.Increment:
      case SyntaxKind.Decrement:
        return parsePostfixUpdateExpression(parser, context, expr, pos);
      case SyntaxKind.Period:
        expr = parseIndexExpression(parser, context, expr, pos);
        break;
      case SyntaxKind.LeftBracket:
        expr = parseMemberAccessExpression(parser, context, expr, pos);
        break;
      case SyntaxKind.LeftParen:
        expr = parseCallExpression(parser, context, expr, pos);
        break;
      case SyntaxKind.QuestionMarkPeriod:
        expr = createOptionalExpression(
          consumeToken(parser, context, SyntaxKind.QuestionMarkPeriod),
          expr,
          parseOptionalChain(
            parser,
            (context | 0b00000000100000000000000010000000) ^ 0b00000000100000000000000010000000
          ),
          pos,
          parser.curPos
        );
        break;
      default:
        expr = createTaggedTemplate(
          expr,
          parser.token === SyntaxKind.TemplateTail
            ? parseTemplateTail(
                parser,
                context,
                NodeFlags.ExpressionNode | NodeFlags.ChildLess | NodeFlags.TemplateLiteral
              )
            : parseTemplateExpression(parser, context, /* isTaggedTemplate */ true),
          pos,
          parser.curPos
        );
    }
  }
  return expr;
}

function parseOptionalChain(parser: ParserState, context: Context): any {
  let chain = null;
  let pos = parser.curPos;

  if (consumeOpt(parser, context | Context.AllowRegExp, SyntaxKind.LeftBracket)) {
    if (parser.token === SyntaxKind.RightBracket) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error | DiagnosticKind.EarlyError,
        diagnosticMap[DiagnosticCode.An_member_access_expression_should_take_an_argument],
        parser.curPos,
        parser.pos
      );
    } else {
      chain = createMemberAccessChain(chain, parseExpression(parser, context), pos, parser.curPos);
    }

    consumeOpt(parser, context, SyntaxKind.RightBracket);
    if (parser.token & SyntaxKind.IsAssignOp) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error | DiagnosticKind.EarlyError,
        diagnosticMap[
          DiagnosticCode.The_left_hand_side_of_an_assignment_expression_may_not_be_an_optional_property_access
        ],
        pos,
        parser.pos
      );
    }
  } else if (parser.token === SyntaxKind.LeftParen) {
    chain = createCallChain(chain, parseArguments(parser, context), pos, parser.curPos);
  } else if (parser.token & (SyntaxKind.IsFutureReserved | SyntaxKind.IsKeyword | SyntaxKind.IsIdentifier)) {
    chain = createIndexExpressionChain(chain, parsePropertyOrPrivatePropertyName(parser, context), pos, parser.curPos);
    if (parser.token & SyntaxKind.IsAssignOp) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error | DiagnosticKind.EarlyError,
        diagnosticMap[
          DiagnosticCode.The_left_hand_side_of_an_assignment_expression_may_not_be_an_optional_property_access
        ],
        pos,
        parser.pos
      );
    }
  } else if (parser.token === SyntaxKind.PrivateIdentifier) {
    chain = createIndexExpressionChain(chain, parsePropertyOrPrivatePropertyName(parser, context), pos, parser.curPos);
  } else {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error | DiagnosticKind.EarlyError,
      diagnosticMap[DiagnosticCode.Tagged_template_expressions_are_not_permitted_in_an_optional_chain],
      parser.curPos,
      parser.pos
    );

    chain = createTaggedTemplate(
      chain as any,
      (parser.token as SyntaxKind) === SyntaxKind.TemplateTail
        ? parseTemplateTail(parser, context, NodeFlags.ExpressionNode | NodeFlags.ChildLess | NodeFlags.TemplateLiteral)
        : parseTemplateExpression(parser, context, /*isTaggedTemplate*/ true),
      pos,
      parser.curPos
    );
  }

  chain = createOptionalChain(chain, pos, parser.curPos);
  parser.assignable = false;
  while (
    parser.token &
    (SyntaxKind.IsKeyword | SyntaxKind.IsFutureReserved | SyntaxKind.IsIdentifier | SyntaxKind.IsPropertyOrCall)
  ) {
    pos = parser.curPos;
    if (consumeOpt(parser, context | Context.AllowRegExp, SyntaxKind.Period)) {
      chain = createIndexExpressionChain(
        chain as any,
        parsePropertyOrPrivatePropertyName(parser, context),
        pos,
        parser.curPos
      );
    } else if (parser.token === SyntaxKind.LeftParen) {
      chain = createCallChain(chain as any, parseArguments(parser, context), pos, parser.curPos);
    } else if (consumeOpt(parser, context | Context.AllowRegExp, SyntaxKind.LeftBracket)) {
      if (parser.token === SyntaxKind.RightBracket) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error | DiagnosticKind.EarlyError,
          diagnosticMap[DiagnosticCode.An_member_access_expression_should_take_an_argument],
          parser.curPos,
          parser.pos
        );
      } else {
        chain = createMemberAccessChain(chain as any, parseExpression(parser, context), pos, parser.curPos);
      }
      consumeOpt(parser, context, SyntaxKind.RightBracket);
      if (parser.token & SyntaxKind.IsAssignOp) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error | DiagnosticKind.EarlyError,
          diagnosticMap[
            DiagnosticCode.The_left_hand_side_of_an_assignment_expression_may_not_be_an_optional_property_access
          ],
          pos,
          parser.pos
        );
      }
    } else if (parser.token & (SyntaxKind.IsKeyword | SyntaxKind.IsFutureReserved | SyntaxKind.IsIdentifier)) {
      chain = createIndexExpressionChain(
        chain,
        parsePropertyOrPrivatePropertyName(parser, context),
        pos,
        parser.curPos
      );
      if (parser.token & SyntaxKind.IsAssignOp) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error | DiagnosticKind.EarlyError,
          diagnosticMap[
            DiagnosticCode.The_left_hand_side_of_an_assignment_expression_may_not_be_an_optional_property_access
          ],
          pos,
          parser.pos
        );
      }
    } else if (parser.token === SyntaxKind.PrivateIdentifier) {
      chain = createIndexExpressionChain(
        chain,
        parsePropertyOrPrivatePropertyName(parser, context),
        pos,
        parser.curPos
      );
    } else if (parser.token === SyntaxKind.TemplateCont || parser.token === SyntaxKind.TemplateTail) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error | DiagnosticKind.EarlyError,
        diagnosticMap[DiagnosticCode.Tagged_template_expressions_are_not_permitted_in_an_optional_chain],
        parser.curPos,
        parser.pos
      );
      chain = createTaggedTemplate(
        chain,
        parser.token === SyntaxKind.TemplateTail
          ? parseTemplateTail(
              parser,
              context,
              NodeFlags.ExpressionNode | NodeFlags.ChildLess | NodeFlags.TemplateLiteral
            )
          : parseTemplateExpression(parser, context, /*isTaggedTemplate*/ true),
        pos,
        parser.curPos
      );
    }

    parser.assignable = false;
    return chain;
  }
  return chain;
}

function parsePropertyOrPrivatePropertyName(parser: ParserState, context: Context): Identifier | PrivateIdentifier {
  const pos = parser.curPos;
  if (parser.token & (SyntaxKind.IsIdentifier | SyntaxKind.IsKeyword | SyntaxKind.IsFutureReserved)) {
    return parseIdentifier(parser, context, DiagnosticCode.Identifier_expected, /* allowKeywords */ true);
  }

  if (parser.token === SyntaxKind.PrivateIdentifier) {
    return parsePrivateIdentifier(parser, context);
  }

  // For cases like `(foo.)` where we will hit the ')' instead of discovering a property.
  // To avoid consuming the ')' - which will cause the parse of the parentheses to fail - we
  // return an dummy identifier without priming the scanner.

  parser.onError(
    DiagnosticSource.Parser,
    DiagnosticKind.Error | DiagnosticKind.EarlyError,
    diagnosticMap[DiagnosticCode.Dot_property_must_be_an_identifier],
    parser.curPos,
    parser.pos
  );
  return createDummyIdentifier(pos, pos);
}

function parseIndexExpression(
  parser: ParserState,
  context: Context,
  member: ExpressionNode,
  pos: number
): ExpressionNode {
  nextToken(parser, context);
  return createIndexExpression(member, parsePropertyOrPrivatePropertyName(parser, context), pos, parser.curPos);
}

function parseMemberAccessExpression(
  parser: ParserState,
  context: Context,
  member: ExpressionNode,
  pos: number
): MemberAccessExpression {
  nextToken(parser, context | Context.AllowRegExp);
  let expression = null;
  if (parser.token === SyntaxKind.RightBracket) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error | DiagnosticKind.EarlyError,
      diagnosticMap[DiagnosticCode.An_member_access_expression_should_take_an_argument],
      parser.curPos,
      parser.pos
    );
  } else {
    expression = parseExpressions(
      parser,
      (context | 0b00000000100000000000000010000000) ^ 0b00000000100000000000000010000000
    );
  }
  consume(parser, context, SyntaxKind.RightBracket);
  parser.assignable = true;
  return createMemberAccessExpression(member, expression, pos, parser.curPos);
}

function parseCallExpression(parser: ParserState, context: Context, expr: ExpressionNode, pos: number): CallExpression {
  const argumentList = parseArguments(parser, context);
  parser.assignable = false;
  return createCallExpression(expr, argumentList, pos, parser.curPos);
}

function parseArrowFunction(
  parser: ParserState,
  context: Context,
  scope: ScopeState,
  typeParameters: TypeParameterDeclaration | null,
  returnType: TypeNode | null,
  params: any,
  asyncToken: SyntaxToken<TokenSyntaxKind> | null,
  flags: NodeFlags,
  pos: number
): ArrowFunction {
  // Newlines are not allowed before "=>"
  if (parser.nodeFlags & NodeFlags.NewLine) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error | DiagnosticKind.EarlyError,
      diagnosticMap[DiagnosticCode.Line_terminator_not_permitted_before_arrow],
      parser.curPos,
      parser.pos
    );
  }

  const arrowToken = consumeToken(parser, context, SyntaxKind.Arrow);

  parser.assignable = false;
  return createArrowFunction(
    arrowToken,
    typeParameters,
    params,
    asyncToken,
    returnType,
    parseConciseOrFunctionBody(
      parser,
      ((context | 0b00000000010000000101111000001000) ^ 0b00000000010000000101111000001000) |
        (asyncToken ? Context.AwaitContext : Context.None),
      scope,
      (flags & NodeFlags.NoneSimpleParamList) === 0
    ),
    flags | NodeFlags.ExpressionNode,
    pos,
    parser.curPos
  );
}

function parseConciseOrFunctionBody(
  parser: ParserState,
  context: Context,
  scope: ScopeState,
  isSimpleParameterList: boolean
): FunctionBody | ExpressionNode {
  if (scope.flags & ScopeFlags.Error) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Duplicate_arrow_formal_parameter],
      parser.diagnosticStartPos,
      parser.pos
    );
  }

  if (parser.token === SyntaxKind.LeftBrace) {
    const body = parseFunctionBody(
      parser,
      context | Context.IsOutsideFnOrArrow,
      scope,
      /* scopeError*/ (scope.flags & ScopeFlags.Error) !== 0,
      /* isDecl */ true,
      /* isSimpleParameterList */ isSimpleParameterList,
      /* ignoreMissingOpenBrace */ false,
      parser.token
    );

    if (parser.nodeFlags & NodeFlags.NewLine) {
      switch (parser.token as SyntaxKind) {
        case SyntaxKind.Period:
          parser.onError(
            DiagnosticSource.Parser,
            DiagnosticKind.Error,
            diagnosticMap[DiagnosticCode.Block_body_arrows_can_not_be_immediately_accessed_without_a_group],
            parser.curPos,
            parser.pos
          );
          break;
        case SyntaxKind.QuestionMark:
        case SyntaxKind.Exponentiate:
        case SyntaxKind.Multiply:
          parser.onError(
            DiagnosticSource.Parser,
            DiagnosticKind.Error,
            diagnosticMap[DiagnosticCode.An_arrow_function_can_not_be_part_of_an_operator_to_the_right],
            parser.curPos,
            parser.pos
          );
          break;
        default: // ignore
      }
    } else {
      if (parser.token & SyntaxKind.IsBinaryOp) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.An_arrow_function_can_not_be_part_of_an_operator_to_the_right],
          parser.curPos,
          parser.pos
        );
      } else {
        switch (parser.token as SyntaxKind) {
          case SyntaxKind.Period:
            parser.onError(
              DiagnosticSource.Parser,
              DiagnosticKind.Error,
              diagnosticMap[DiagnosticCode.Block_body_arrows_can_not_be_immediately_accessed_without_a_group],
              parser.curPos,
              parser.pos
            );
            break;
          case SyntaxKind.LeftParen:
          case SyntaxKind.LeftBracket:
            parser.onError(
              DiagnosticSource.Parser,
              DiagnosticKind.Error,
              diagnosticMap[DiagnosticCode.Block_body_arrows_can_not_be_immediately_invoked_without_a_group],
              parser.curPos,
              parser.pos
            );
            break;
          case SyntaxKind.TemplateTail:
            parser.onError(
              DiagnosticSource.Parser,
              DiagnosticKind.Error,
              diagnosticMap[DiagnosticCode.Block_body_arrows_can_not_be_immediately_tagged_without_a_group],
              parser.curPos,
              parser.pos
            );
            break;
          case SyntaxKind.QuestionMark:
            parser.onError(
              DiagnosticSource.Parser,
              DiagnosticKind.Error,
              diagnosticMap[DiagnosticCode.An_arrow_function_can_not_be_part_of_an_operator_to_the_right],
              parser.curPos,
              parser.pos
            );

          default: // ignore
        }
      }
    }
    return body;
  }

  if (
    parser.token & SyntaxKind.IsStatementStart &&
    parser.token !== SyntaxKind.Semicolon &&
    parser.token !== SyntaxKind.FunctionKeyword &&
    parser.token !== SyntaxKind.AwaitKeyword &&
    parser.token !== SyntaxKind.ClassKeyword
  ) {
    return parseFunctionBody(
      parser,
      context,
      scope,
      /* scopeError */ (scope.flags & ScopeFlags.Error) !== 0,
      /* isDecl */ true,
      /* isSimpleParameterList */ true,
      /* ignoreMissingOpenBrace */ true,
      /* firstRestricted */ parser.token
    );
  }
  return parseExpression(parser, context);
}

function parseArguments(parser: ParserState, context: Context): ArgumentList {
  const openingParentExists = consume(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.LeftParen,
    DiagnosticCode.Missing_an_opening_parentheses
  );
  const result = parseArgumentList(
    parser,
    (context | 0b00000000100000000000000010000000) ^ 0b00000000100000000000000010000000
  );
  consume(
    parser,
    context,
    SyntaxKind.RightParen,
    openingParentExists ? DiagnosticCode.Expected_a_to_match_the_token_here : DiagnosticCode.Expression_expected
  );
  return result;
}

function parseArgumentList(parser: ParserState, context: Context): ArgumentList {
  const start = parser.curPos;
  const elements: ExpressionNode[] = [];
  let trailingComma = false;
  while (parser.token & 0b00000000101010111100000000000000) {
    elements.push(parseArgumentOrArrayLiteralElement(parser, context));
    if ((parser.token as SyntaxKind) === SyntaxKind.RightParen) break;
    consume(parser, context | Context.AllowRegExp, SyntaxKind.Comma, DiagnosticCode._expected);
    if ((parser.token as SyntaxKind) === SyntaxKind.RightParen) {
      trailingComma = true;
      break;
    }
  }

  return createArgumentList(elements, trailingComma, start, parser.curPos);
}

function parseCommaOperator(
  parser: ParserState,
  context: Context,
  expr: ExpressionNode,
  start: number
): ExpressionNode {
  if (parser.token !== SyntaxKind.Comma) return expr;
  const expressions: ExpressionNode[] = [expr];
  do {
    nextToken(parser, context | Context.AllowRegExp);
    expressions.push(parseExpression(parser, context));
  } while (parser.token === SyntaxKind.Comma);
  return createCommaOperator(expressions, start, parser.curPos);
}

function parseExpressionRest(parser: ParserState, context: Context, expr: ExpressionNode, pos: number): ExpressionNode {
  expr = parseMemberExpression(parser, context, expr, /* allowCalls */ true, pos);
  expr = parseAssignmentExpression(parser, context, expr, pos);
  return parseCommaOperator(parser, context, expr, pos);
}

function parseIdentifierReference(
  parser: ParserState,
  context: Context,
  diagnosticMessage?: DiagnosticCode
): Identifier {
  const { token, curPos, tokenValue, tokenRaw } = parser;
  parser.assignable = true;

  if (token & (SyntaxKind.IsFutureReserved | SyntaxKind.IsIdentifier)) {
    if (parser.previousErrorPos !== parser.pos) {
      if (context & Context.Strict && parser.token & SyntaxKind.IsFutureReserved) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[
            parser.token === SyntaxKind.YieldKeyword
              ? DiagnosticCode.Identifier_expected_yield_is_a_reserved_word_in_strict_mode
              : DiagnosticCode.Identifier_expected_Reserved_word_in_strict_mode
          ],
          curPos,
          parser.pos
        );
      }
    }
    nextToken(parser, context);
    return createIdentifier(tokenValue, tokenRaw, curPos, parser.curPos);
  }

  if (parser.previousErrorPos !== parser.pos) {
    parser.previousErrorPos = parser.pos;
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[diagnosticMessage ? diagnosticMessage : DiagnosticCode.Expression_expected],
      parser.curPos,
      parser.pos
    );
  }

  return createDummyIdentifier(curPos, curPos) as any;
}

// PrimaryExpression :
//   ...
function parsePrimaryExpression(
  parser: ParserState,
  context: Context,
  inNewExpression: boolean,
  LeftHandSideContext: LeftHandSide
): any {
  if (parser.token & SyntaxKind.IsIdentifier) {
    if (parser.token === SyntaxKind.AsyncKeyword) {
      return parseFunctionExpression(parser, context, inNewExpression, LeftHandSideContext);
    }
    if (parser.token === SyntaxKind.ThisKeyword) {
      return parseThisExpression(parser, context);
    }

    if (context & (Context.AwaitContext | Context.Module) && parser.token === SyntaxKind.AwaitKeyword) {
      return parseAwaitExpression(parser, context, inNewExpression, LeftHandSideContext);
    }

    const pos = parser.curPos;
    const token = parser.token;
    const tokenValue = parser.tokenValue;

    const expression = parseIdentifierReference(parser, context);

    // Handle the start of an arrow expression
    if (parser.token === SyntaxKind.Arrow) {
      if (LeftHandSideContext) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[
            LeftHandSideContext & LeftHandSide.ForStatement
              ? DiagnosticCode.The_left_hand_side_of_a_for_in_or_of_statement_must_not_be_an_arrow_function
              : DiagnosticCode.Expected_a
          ],
          parser.curPos,
          parser.pos
        );
      }

      if (inNewExpression) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.Expected_a],
          parser.curPos,
          parser.pos
        );
      }

      const scope = createParentScope(createScope(), ScopeKind.ArrowParams);

      addBlockName(parser, context, scope, tokenValue, BindingType.ArgumentList);

      return parseArrowFunction(
        parser,
        context,
        scope,
        /*typeParameters */ null,
        /* returnType */ null,
        /* params */ expression,
        /* asyncToken */ null,
        /* nodeFlags */ NodeFlags.ExpressionNode,
        pos
      );
    }

    if (context & Context.Strict && (token === SyntaxKind.EvalIdentifier || token === SyntaxKind.ArgumentsIdentifier)) {
      parser.destructible |= DestructibleKind.EvalOrArguments;
      parser.assignable = false;
      return expression;
    }

    parser.assignable = true;
    return expression;
  }
  switch (parser.token) {
    case SyntaxKind.NumericLiteral:
      return parseNumericLiteral(parser, context);
    case SyntaxKind.StringLiteral:
      return parseStringLiteral(parser, context);
    case SyntaxKind.Decrement:
    case SyntaxKind.Increment:
      return parsePrefixUpdateExpression(parser, context, inNewExpression, LeftHandSideContext);
    case SyntaxKind.DeleteKeyword:
    case SyntaxKind.Negate:
    case SyntaxKind.Complement:
    case SyntaxKind.Add:
    case SyntaxKind.Subtract:
    case SyntaxKind.TypeofKeyword:
    case SyntaxKind.VoidKeyword:
      return parseUnaryExpression(parser, context, LeftHandSideContext);
    case SyntaxKind.FunctionKeyword:
      return parseFunctionExpression(parser, context, inNewExpression, LeftHandSideContext);
    case SyntaxKind.Decorator:
    case SyntaxKind.ClassKeyword:
      return parseClassExpression(parser, context);
    case SyntaxKind.NullKeyword:
      return parseNullLiteral(parser, context);
    case SyntaxKind.TrueKeyword:
      return parseBooleanLiteral(parser, context, /* isTruthy */ true);
    case SyntaxKind.FalseKeyword:
      return parseBooleanLiteral(parser, context, /* isTruthy */ false);
    case SyntaxKind.LeftBracket:
      return parseArrayLiteral(parser, context);
    case SyntaxKind.LeftBrace:
      return parseObjectLiteral(parser, context);
    case SyntaxKind.LeftParen:
      return parseCoverParenthesizedExpressionAndArrowParameterList(parser, context, LeftHandSideContext);
    case SyntaxKind.LessThan:
      if (context & Context.OptionsAllowTypes && !speculate(parser, context, nextTokenIsLeftParen, true)) {
        return parseCoverParenthesizedExpressionAndArrowParameterList(parser, context, LeftHandSideContext);
      }
    case SyntaxKind.BigIntLiteral:
      return parseBigIntLiteral(parser, context);
    case SyntaxKind.YieldKeyword:
      return parseYieldIdentifierOrExpression(parser, context, LeftHandSideContext);
    case SyntaxKind.NewKeyword:
      return parseNewExpression(parser, context);
    case SyntaxKind.SuperKeyword:
      return parseSuperExpression(parser, context);
    case SyntaxKind.RegularExpression:
      return parseRegularExpression(parser, context);
    case SyntaxKind.PrivateIdentifier:
      return parsePrivateIdentifier(parser, context);
    case SyntaxKind.TemplateTail:
      return parseTemplateTail(
        parser,
        context,
        NodeFlags.ExpressionNode | NodeFlags.ChildLess | NodeFlags.TemplateLiteral
      );
    case SyntaxKind.TemplateCont:
      return parseTemplateExpression(parser, context, /*isTaggedTemplate*/ false);
    case SyntaxKind.ImportKeyword:
      return parseImportMetaOrCall(parser, context, inNewExpression);
  }

  const { curPos, tokenValue, token } = parser;

  const expr = parseIdentifierReference(parser, context);

  if (token & SyntaxKind.IsFutureReserved) {
    if (parser.token === SyntaxKind.Arrow) {
      if (LeftHandSideContext & (LeftHandSide.NotAssignable | LeftHandSide.DisallowClassExtends)) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.Expected_a],
          curPos,
          parser.pos
        );
      }

      if (inNewExpression) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.Expected_a],
          curPos,
          parser.pos
        );
      }

      const scope = createParentScope(createScope(), ScopeKind.ArrowParams);

      addBlockName(parser, context, scope, tokenValue, BindingType.ArgumentList);

      return parseArrowFunction(
        parser,
        context,
        scope,
        /*typeParameters */ null,
        /* returnType */ null,
        /* params */ expr,
        /* asyncToken */ null,
        /* nodeFlags */ NodeFlags.ExpressionNode,
        curPos
      );
    }
  }

  return expr;
}

// ObjectLiteral :
//   `{` `}`
//   `{` PropertyDefinitionList `}`
//   `{` PropertyDefinitionList `,` `}`
function parseObjectLiteral(parser: ParserState, context: Context): ObjectLiteral | AssignmentExpression {
  const expr = parseObjectLiteralOrAssignmentExpression(parser, context, null, BindingType.Literal);
  if (expr.flags & NodeFlags.PrototypeField) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.An_object_literal_cannot_have_multiple_properties_with_the_name___proto],
      parser.curPos,
      parser.pos
    );
  }
  if (parser.destructible & DestructibleKind.MustDestruct) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[
        parser.destructible & DestructibleKind.CoverInitializedName
          ? DiagnosticCode.Did_you_mean_to_use_a_An_can_only_follow_a_property_name_when_the_containing_object_literal_is_part_of_a_destructuring
          : DiagnosticCode.The_left_hand_side_of_an_assignment_expression_must_be_a_variable_or_a_property_access
      ],
      parser.curPos,
      parser.pos
    );
  }
  return expr;
}

function parseObjectLiteralOrAssignmentExpression(
  parser: ParserState,
  context: Context,
  scope: any,
  type: BindingType
): ObjectLiteral | AssignmentExpression {
  const pos = parser.curPos;
  nextToken(parser, context | Context.AllowRegExp);
  const propertyDefinitionList = parsePropertyDefinitionList(parser, context, scope, type);
  consume(parser, context, SyntaxKind.RightBrace, DiagnosticCode.The_parser_expected_to_find_a_to_match_the_token_here);
  const node = createObjectLiteral(
    propertyDefinitionList,
    propertyDefinitionList.flags | NodeFlags.ExpressionNode,
    pos,
    parser.curPos
  );

  if (parser.token & SyntaxKind.IsAssignOp) {
    if (parser.token !== SyntaxKind.Assign) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[
          DiagnosticCode
            .Expression_exprected_A_compound_assignment_or_an_logical_assignment_cannot_follow_an_object_literal
        ],
        parser.curPos,
        parser.pos
      );
    }
    if (parser.destructible & DestructibleKind.NotDestructible) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.The_left_hand_side_must_be_a_variable_or_a_property_access],
        parser.curPos,
        parser.pos
      );
    }
    const operatorToken = parseTokenNode(parser, context);
    const right = parseExpression(parser, context);
    parser.destructible = (parser.destructible | DestructibleKind.MustDestruct) ^ DestructibleKind.MustDestruct;
    return createAssignmentExpression(node, operatorToken, right, pos, parser.curPos);
  }
  return node;
}

function parsePropertyDefinitionList(
  parser: ParserState,
  context: Context,
  scope: ScopeState,
  type: BindingType
): PropertyDefinitionList {
  const pos = parser.curPos;
  const properties = [];
  let flags = parser.nodeFlags;
  let trailingComma = false;
  let destructible = DestructibleKind.None;
  let prototypeCount = 0;

  // Allow "in" inside object literals
  context = (context | 0b00000000100000000000000010000000) ^ 0b00000000100000000000000010000000;

  while (parser.token & 0b00000100110010000100000000000000) {
    const propertyDefinition = parsePropertyDefinition(parser, context, scope, type);
    properties.push(propertyDefinition);
    if (propertyDefinition.flags & NodeFlags.PrototypeField) {
      prototypeCount++;
    }
    destructible |= parser.destructible;
    if ((parser.token as SyntaxKind) === SyntaxKind.RightBrace) break;
    consume(parser, context | Context.AllowRegExp, SyntaxKind.Comma, DiagnosticCode._expected);
    if ((parser.token as SyntaxKind) === SyntaxKind.RightBrace) {
      trailingComma = true;
      break;
    }
  }
  if (prototypeCount > 1) {
    flags |= NodeFlags.PrototypeField;
  }
  parser.destructible = destructible;
  return createPropertyDefinitionList(properties, trailingComma, flags | NodeFlags.IsStatement, pos, parser.curPos);
}

function validateIdentifier(parser: ParserState, context: Context, t: SyntaxKind): void {
  if (context & Context.Strict) {
    if (t & SyntaxKind.IsFutureReserved) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.Identifier_expected_Reserved_word_in_strict_mode],
        parser.curPos,
        parser.pos
      );
    }
  }
  if ((t & SyntaxKind.IsKeyword) === SyntaxKind.IsKeyword) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Identifier_expected_Reserved_word_in_strict_mode],
      parser.curPos,
      parser.pos
    );
  }
  if (context & (Context.AwaitContext | Context.Module) && t === SyntaxKind.AwaitKeyword) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Identifier_expected_Reserved_word_in_strict_mode],
      parser.curPos,
      parser.pos
    );
  }

  if (context & (Context.YieldContext | Context.Strict) && t === SyntaxKind.YieldKeyword) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Identifier_expected_Reserved_word_in_strict_mode],
      parser.curPos,
      parser.pos
    );
  }
}

function parsePropertyDefinition(
  parser: ParserState,
  context: Context,
  scope: ScopeState,
  type: BindingType
): PropertyDefinition | SpreadProperty | Identifier | CoverInitializedName | PropertyMethod {
  const pos = parser.curPos;

  if (parser.token === SyntaxKind.Ellipsis) {
    const ellipsisToken = consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.Ellipsis);
    return createSpreadProperty(
      ellipsisToken,
      paresSpreadPropertyArgument(parser, context, scope, type),
      pos,
      parser.curPos
    );
  }

  let key!: Identifier | NumericLiteral | BigIntLiteral | StringLiteral | ComputedPropertyName | PrivateIdentifier;

  let generatorToken: SyntaxToken<TokenSyntaxKind> | null = consumeOptToken(parser, context, SyntaxKind.Multiply);
  let asyncKeyword: SyntaxToken<TokenSyntaxKind> | null = null;
  let getKeyword: SyntaxToken<TokenSyntaxKind> | null = null;
  let setKeyword: SyntaxToken<TokenSyntaxKind> | null = null;

  let nodeFlags = generatorToken ? NodeFlags.ExpressionNode | NodeFlags.Generator : NodeFlags.ExpressionNode;
  let destructible = DestructibleKind.None;

  if (parser.token & 0b00000000100000000100000000000000) {
    const token = parser.token;
    const tokenValue = parser.tokenValue;
    if ((context & Context.OptionsDisableWebCompat) === 0 && parser.tokenValue === '__proto__') {
      nodeFlags |= NodeFlags.PrototypeField;
    }
    key = parseIdentifier(parser, context, DiagnosticCode.Identifier_expected, true);

    // Check for a modifier keyword
    if (parser.token & 0b00000100110000000100000000000000) {
      if (token === SyntaxKind.AsyncKeyword) {
        nodeFlags |= NodeFlags.Async;
        asyncKeyword = createToken(SyntaxKind.AsyncKeyword, NodeFlags.ChildLess, pos, parser.curPos);
        generatorToken = consumeOptToken(parser, context, SyntaxKind.Multiply);
        if (generatorToken) {
          nodeFlags |= NodeFlags.Generator;
        }
        key = parsePropertyName(parser, context);
        return createPropertyMethod(
          generatorToken,
          asyncKeyword,
          /* getKeyword */ null,
          /* setKeyword */ null,
          parseMethodDefinition(parser, context, key, nodeFlags | NodeFlags.Async),
          pos,
          parser.curPos
        );
      }

      if (token === SyntaxKind.GetKeyword) {
        getKeyword = createToken(SyntaxKind.GetKeyword, NodeFlags.ChildLess, pos, parser.curPos);
        generatorToken = consumeOptToken(parser, context, SyntaxKind.Multiply);
        key = parsePropertyName(parser, context);
        if (generatorToken) {
          parser.onError(
            DiagnosticSource.Parser,
            DiagnosticKind.Error,
            diagnosticMap[DiagnosticCode.A_get_accessor_cannot_be_a_generator],
            pos,
            parser.curPos
          );
        }
        return createPropertyMethod(
          generatorToken,
          asyncKeyword,
          getKeyword,
          setKeyword,
          parseMethodDefinition(parser, context, key, nodeFlags | NodeFlags.Getter),
          pos,
          parser.curPos
        );
      }

      if (token === SyntaxKind.SetKeyword) {
        setKeyword = createToken(SyntaxKind.SetKeyword, NodeFlags.ChildLess, pos, parser.curPos);
        generatorToken = consumeOptToken(parser, context, SyntaxKind.Multiply);
        key = parsePropertyName(parser, context);
        if (generatorToken) {
          parser.onError(
            DiagnosticSource.Parser,
            DiagnosticKind.Error,
            diagnosticMap[DiagnosticCode.A_set_accessor_cannot_be_a_generator],
            pos,
            parser.curPos
          );
        }

        return createPropertyMethod(
          generatorToken,
          asyncKeyword,
          getKeyword,
          setKeyword,
          parseMethodDefinition(parser, context, key, nodeFlags | NodeFlags.Setter),
          pos,
          parser.curPos
        );
      }
    }

    // `({* ident })`
    if (generatorToken) {
      return createPropertyMethod(
        generatorToken,
        asyncKeyword,
        getKeyword,
        setKeyword,
        parseMethodDefinition(parser, context, key, nodeFlags),
        pos,
        parser.curPos
      );
    }

    // `({ x = y })`
    // `({ x })`
    switch (parser.token) {
      case SyntaxKind.Assign:
      case SyntaxKind.Comma:
      case SyntaxKind.RightBrace:
        if (
          context & Context.Strict &&
          (token === SyntaxKind.EvalIdentifier || token === SyntaxKind.ArgumentsIdentifier)
        ) {
          destructible |= DestructibleKind.NotDestructible;
        } else {
          validateIdentifier(parser, context, token);
        }

        addVarOrBlock(parser, context, scope, tokenValue, type);

        if (consumeOpt(parser, context | Context.AllowRegExp, SyntaxKind.Assign)) {
          const right = parseExpression(parser, context);
          parser.destructible = DestructibleKind.MustDestruct | DestructibleKind.CoverInitializedName;
          return createCoverInitializedName(key as Identifier, right, pos, parser.curPos);
        }

        // Parse a shorthand property
        parser.destructible = destructible;
        return key as Identifier;
    }
  } else {
    key = parsePropertyName(parser, context);
    if ((context & Context.OptionsDisableWebCompat) === 0 && parser.tokenValue === '__proto__') {
      nodeFlags |= NodeFlags.PrototypeField;
    }
  }

  if (parser.token & SyntaxKind.IsLessThanOrLeftParen) {
    return createPropertyMethod(
      generatorToken,
      asyncKeyword,
      getKeyword,
      setKeyword,
      parseMethodDefinition(parser, context, key, nodeFlags),
      pos,
      parser.curPos
    );
  }

  if (consumeOpt(parser, context | Context.AllowRegExp, SyntaxKind.Colon)) {
    let left: any;

    if (parser.token & 0b00000000110000000100000000000000) {
      const colonValue = parser.tokenValue;
      left = parsePrimaryExpression(parser, context, /* inNewExpression */ false, LeftHandSide.None);

      const token = parser.token;

      left = parseMemberExpression(parser, context, left, /* allowCalls */ true, pos);

      if (parser.token === SyntaxKind.RightBrace || parser.token === SyntaxKind.Comma) {
        // '({x : y =', '({x : y,' or '({x : y}'
        if (token === SyntaxKind.RightBrace || token === SyntaxKind.Assign || token === SyntaxKind.Comma) {
          if (!parser.assignable) destructible |= DestructibleKind.NotDestructible;
        } else {
          destructible |= parser.assignable ? DestructibleKind.Assignable : DestructibleKind.NotDestructible;
        }
      } else if (parser.token === SyntaxKind.Assign) {
        if (parser.assignable) {
          addVarOrBlock(parser, context, scope, colonValue, type);
          destructible |= DestructibleKind.None;
        } else {
          destructible |= DestructibleKind.NotDestructible;
        }
        left = parseAssignmentExpression(parser, context, left, pos);
      } else {
        destructible |= DestructibleKind.NotDestructible;
        left = parseAssignmentExpression(parser, context, left, pos);
      }
    } else if (parser.token & SyntaxKind.IsPatternStart) {
      left =
        parser.token === SyntaxKind.LeftBracket
          ? parseArrayLiteralOrAssignmentExpression(parser, context, scope, type)
          : parseObjectLiteralOrAssignmentExpression(parser, context, scope, type);

      destructible = parser.destructible;

      if (parser.token !== SyntaxKind.RightBrace && parser.token !== SyntaxKind.Comma) {
        if (parser.destructible & DestructibleKind.MustDestruct) {
          parser.onError(
            DiagnosticSource.Parser,
            DiagnosticKind.Error,
            diagnosticMap[DiagnosticCode.Invalid_optional_chain_from_new_expression],
            parser.curPos,
            parser.pos
          );
        }
        left = parseMemberExpression(parser, context, left, /* allowCalls */ true, pos);

        destructible = parser.assignable ? DestructibleKind.Assignable : DestructibleKind.NotDestructible;

        left = parseAssignmentExpression(parser, context, left, pos);
      }
    } else {
      const token = parser.token;
      // Check for '__proto__' property and eventually set the 'Destructible.HasProto' bit
      if ((context & Context.OptionsDisableWebCompat) === 0 && parser.tokenValue === '__proto__') {
        nodeFlags |= NodeFlags.PrototypeField;
      }
      left = parseLeftHandSideExpression(parser, context, LeftHandSide.None);

      if (parser.token === SyntaxKind.Comma || parser.token === SyntaxKind.RightBrace) {
        if (token === SyntaxKind.Assign || token === SyntaxKind.RightBrace || token === SyntaxKind.Comma) {
          if (!parser.assignable) {
            destructible |= DestructibleKind.NotDestructible;
          }
        } else {
          destructible |= parser.assignable ? DestructibleKind.Assignable : DestructibleKind.NotDestructible;
        }
      } else if (parser.token === SyntaxKind.Assign) {
        if (!parser.assignable) destructible |= DestructibleKind.NotDestructible;
        left = parseAssignmentExpression(parser, context, left, pos);
      } else {
        destructible |= DestructibleKind.NotDestructible;
        left = parseAssignmentExpression(parser, context, left, pos);
      }
    }
    parser.destructible = destructible;

    return createPropertyDefinition(
      generatorToken,
      key as any,
      left,
      nodeFlags | NodeFlags.ExpressionNode,
      pos,
      parser.curPos
    );
  }

  parser.onError(
    DiagnosticSource.Parser,
    DiagnosticKind.Error,
    diagnosticMap[DiagnosticCode.Property_definition_expected_Did_you_mean_to_use_a],
    parser.curPos,
    parser.pos
  );

  return key as Identifier;
}

function parseMethodDefinition(
  parser: ParserState,
  context: Context,
  key: any,
  nodeFlags: NodeFlags
): MethodDefinition {
  const pos = parser.curPos;
  const typeParameters = parseTypeParameterDeclaration(parser, context);
  if (nodeFlags & NodeFlags.Constructor) {
  } else {
    context = (context | Context.InConstructor | Context.SuperCall) ^ (Context.InConstructor | Context.SuperCall);
  }
  let scope = createParentScope(createScope(), ScopeKind.FunctionParams);
  context |= Context.SuperProperty;

  context =
    ((context | 0b00000000100000000000011010000000) ^ 0b00000000100000000000011010000000) |
    (nodeFlags & NodeFlags.Async ? Context.AwaitContext : Context.None) |
    (nodeFlags & NodeFlags.Generator ? Context.YieldContext : Context.None);

  const methodParameters = parsMethodParameters(parser, context, nodeFlags, scope);

  const returnType = parseTypeAnnotation(parser, context);

  const contents = parseFunctionBody(
    parser,
    context | Context.NewTarget | Context.IsOutsideFnOrArrow,
    scope,
    /* scopeError*/ (scope.flags & ScopeFlags.Error) !== 0,
    /* isDecl */ false,
    /* isSimpleParameterList */ (methodParameters.flags & NodeFlags.NoneSimpleParamList) === 0,
    /* ignoreMissingOpenBrace */ false,
    /* firstRestricted */ null
  );

  parser.destructible = DestructibleKind.NotDestructible;

  return createMethodDefinition(
    key,
    typeParameters,
    methodParameters,
    returnType,
    contents,
    nodeFlags,
    pos,
    parser.curPos
  );
}

function parsMethodParameters(
  parser: ParserState,
  context: Context,
  nodeFlags: NodeFlags,
  scope: ScopeState
): FormalParameterList {
  const parameters = [];
  context = (context | 0b00000000100000000000000010000000) ^ 0b00000000100000000000000010000000;
  const openingParenExists = consume(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.LeftParen,
    DiagnosticCode.Missing_an_opening_parentheses
  );
  if (openingParenExists) {
    if (parser.token === SyntaxKind.RightParen) {
      if (nodeFlags & NodeFlags.Setter && parser.token === SyntaxKind.RightParen) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error | DiagnosticKind.EarlyError,
          diagnosticMap[DiagnosticCode.A_set_accessor_must_have_exactly_one_parameter],
          parser.curPos,
          parser.pos
        );
      }
    } else if (nodeFlags & NodeFlags.Getter) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error | DiagnosticKind.EarlyError,
        diagnosticMap[DiagnosticCode.A_get_accessor_cannot_have_parameters],
        parser.curPos,
        parser.pos
      );
    }
    const curpPos = parser.curPos;
    let trailingComma = false;

    while (parser.token & 0b00010000100010000100000000000000) {
      if (nodeFlags & NodeFlags.Setter) {
        if (parser.token === SyntaxKind.Ellipsis) {
          parser.onError(
            DiagnosticSource.Parser,
            DiagnosticKind.Error | DiagnosticKind.EarlyError,
            diagnosticMap[DiagnosticCode.A_set_accessor_cannot_have_rest_parameter],
            parser.curPos,
            parser.pos
          );
        }
        if (context & Context.OptionsAllowTypes && parser.token === SyntaxKind.ThisKeyword) {
          parser.onError(
            DiagnosticSource.Parser,
            DiagnosticKind.Error | DiagnosticKind.EarlyError,
            diagnosticMap[DiagnosticCode.A_setter_cannot_have_a_this_parameter],
            parser.curPos,
            parser.pos
          );
        }
      }

      const parameter = parseFormalParameter(parser, context | Context.Parameters, scope);

      nodeFlags |= parameter.flags;

      parameters.push(parameter);

      if ((parser.token as SyntaxKind) === SyntaxKind.RightParen) break;
      if (consumeOpt(parser, context | Context.AllowRegExp, SyntaxKind.Comma)) {
        if (nodeFlags & NodeFlags.Setter && parser.token !== SyntaxKind.RightParen) {
          parser.onError(
            DiagnosticSource.Parser,
            DiagnosticKind.Error | DiagnosticKind.EarlyError,
            diagnosticMap[DiagnosticCode.A_set_accessor_must_have_exactly_one_parameter],
            parser.curPos,
            parser.pos
          );
        }

        if ((parser.token as SyntaxKind) === SyntaxKind.RightParen) {
          trailingComma = true;
          break;
        }
        continue;
      }

      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode._expected],
        parser.curPos,
        parser.pos
      );
    }

    // 14.1.2 - 'It is a Syntax Error if BoundNames of FormalParameters contains any duplicate elements.'
    if (scope.flags & ScopeFlags.Error) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.A_formal_parameter_cannot_be_bound_multiple_times_in_the_same_parameter_list],
        parser.diagnosticStartPos,
        parser.pos
      );
    }
    const result = createFormalParameterList(parameters, trailingComma, nodeFlags, curpPos, parser.pos);
    consume(
      parser,
      context,
      SyntaxKind.RightParen,
      openingParenExists ? DiagnosticCode.Expected_a_to_match_the_token_here : DiagnosticCode.Expression_expected
    );
    return result;
  }
  // Empty list
  return createFormalParameterList([], /* trailingComma*/ false, nodeFlags, parser.curPos, parser.curPos);
}

function paresSpreadPropertyArgument(
  parser: ParserState,
  context: Context,
  scope: ScopeState,
  type: BindingType
): SpreadProperty | any {
  const pos = parser.curPos;
  if (parser.token & (SyntaxKind.IsIdentifier | SyntaxKind.IsFutureReserved)) {
    const tokenValue = parser.tokenValue;
    let argument = parsePrimaryExpression(parser, context, /* inNewExpression */ false, LeftHandSide.None);

    // '... )' , '... ]' and '... }'
    if (parser.token === SyntaxKind.RightBrace) {
      parser.destructible = parser.assignable ? DestructibleKind.Destructible : DestructibleKind.NotDestructible;
      return argument;
    }

    // A spread or rest element / property may not have a trailing comma, so we are setting the
    // destructible state to 'NotDestructible' for cases like '..., )',  '..., }'  and '..., ]'.
    if (parser.token === SyntaxKind.Comma) {
      parser.destructible = DestructibleKind.NotDestructible;
      return argument;
    }

    // This is the slow path. We shouldn't care too much about performance
    argument = parseMemberExpression(parser, context, argument, /*allowCalls */ true, pos);

    let destructible = DestructibleKind.None;

    //if ((parser.token as SyntaxKind) !== SyntaxKind.Comma && (parser.token as SyntaxKind) !== SyntaxKind.RightBrace) {
    if (parser.token & (SyntaxKind.IsAssignOp | SyntaxKind.IsBinaryOp)) {
      destructible |= DestructibleKind.NotDestructible;
      argument = parseAssignmentExpression(parser, context, argument, pos);
    } else if (parser.token === SyntaxKind.QuestionMark) {
      argument = parseConditionalExpression(parser, context, argument, pos);
    }

    if (!parser.assignable) {
      destructible |= DestructibleKind.NotDestructible;
    } else if (
      (parser.token as SyntaxKind) === SyntaxKind.Comma ||
      (parser.token as SyntaxKind) === SyntaxKind.RightBrace
    ) {
      addVarOrBlock(parser, context, scope, tokenValue, type);
    } else {
      destructible |= DestructibleKind.Assignable;
    }

    parser.destructible = destructible |= parser.assignable
      ? DestructibleKind.Assignable
      : DestructibleKind.NotDestructible;

    return argument;
  }

  // '{', '['
  if (parser.token & SyntaxKind.IsPatternStart) {
    let argument: any =
      parser.token === SyntaxKind.LeftBracket
        ? parseArrayLiteralOrAssignmentExpression(parser, context, scope, type)
        : parseObjectLiteralOrAssignmentExpression(parser, context, scope, type);

    // '...[ ] )' , '... { } ]' etc.
    if (parser.token === SyntaxKind.RightBrace) {
      parser.destructible |= DestructibleKind.NotDestructible;
      return argument;
    }

    if (parser.token === SyntaxKind.Comma) {
      parser.destructible = DestructibleKind.NotDestructible;
      return argument;
    }

    if (parser.destructible & DestructibleKind.MustDestruct) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode._expected],
        parser.curPos,
        parser.pos
      );
    }

    argument = parseMemberExpression(parser, context, argument, true, pos);

    argument = parseAssignmentExpression(parser, context, argument, pos);

    parser.destructible = parser.assignable ? DestructibleKind.Assignable : DestructibleKind.NotDestructible;

    return argument;
  }

  let argument = parseLeftHandSideExpression(parser, context, LeftHandSide.None);

  if (parser.token & SyntaxKind.IsExpressionStart) {
    argument = parseAssignmentExpression(parser, context, argument, pos);
    parser.destructible |= DestructibleKind.NotDestructible;
    return argument;
  }

  if (parser.token === SyntaxKind.Comma) {
    parser.destructible = DestructibleKind.NotDestructible;
    return argument;
  }
  if (parser.token === SyntaxKind.RightBrace) {
    return argument;
  }
  argument = parseAssignmentExpression(parser, context, argument, pos);

  parser.destructible = parser.assignable ? DestructibleKind.Assignable : DestructibleKind.NotDestructible;

  return argument;
}

// RegularExpressionLiteral :
//   `/` RegularExpressionBody `/` RegularExpressionFlags
function parseRegularExpression(parser: ParserState, context: Context): RegularExpressionLiteral {
  const { curPos, tokenValue } = parser;
  nextToken(parser, context);
  parser.assignable = false;
  return createRegularExpressionLiteral(tokenValue, curPos, parser.curPos);
}

// NumericLiteral
function parseNumericLiteral(parser: ParserState, context: Context): NumericLiteral {
  const { curPos, tokenValue, tokenRaw, nodeFlags } = parser;
  if (context & Context.Strict && nodeFlags & NodeFlags.ImplicitOctal) {
    parser.onError(
      DiagnosticSource.Lexer,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Octal_literals_are_not_allowed_in_strict_mode],
      parser.curPos,
      parser.pos
    );
  }
  nextToken(parser, context);
  parser.assignable = false;
  return createNumericLiteral(
    tokenValue,
    tokenRaw,
    nodeFlags | NodeFlags.ExpressionNode | NodeFlags.ChildLess,
    curPos,
    parser.curPos
  );
}

function parseBigIntLiteral(parser: ParserState, context: Context): BigIntLiteral {
  const { curPos, tokenValue, tokenRaw } = parser;
  nextToken(parser, context);
  parser.assignable = false;
  return createBigIntLiteral(tokenValue, tokenRaw, curPos, parser.curPos);
}

// StringLiteral
function parseStringLiteral(parser: ParserState, context: Context): StringLiteral {
  const { curPos, tokenValue, tokenRaw, nodeFlags } = parser;
  nextToken(parser, context);
  parser.assignable = false;
  return createStringLiteral(
    tokenValue,
    tokenRaw,
    nodeFlags | NodeFlags.ExpressionNode | NodeFlags.ChildLess,
    curPos,
    parser.curPos
  );
}

// NewExpression
function parseNewExpression(parser: ParserState, context: Context): NewTarget | NewExpression {
  const pos = parser.curPos;
  const flags = parser.nodeFlags | NodeFlags.ExpressionNode;
  const newToken = consumeKeywordAndCheckForEscapeSequence(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.NewKeyword,
    pos
  );
  if (consumeOpt(parser, context, SyntaxKind.Period)) {
    const targetKeyword = consumeKeywordAndCheckForEscapeSequence(parser, context, SyntaxKind.Target, parser.curPos);
    if (!targetKeyword) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.The_only_valid_meta_property_for_new_is_new_target],
        pos,
        parser.pos
      );
    }

    if ((context & Context.NewTarget) === 0) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode._new_target_only_allowed_within_functions],
        pos,
        parser.pos
      );
    }

    parser.assignable = false;
    return createNewTarget(newToken, targetKeyword, pos, parser.curPos);
  }
  context = (context | 0b00000000100000000000000010000000) ^ 0b00000000100000000000000010000000;
  const expression = parsePrimaryExpression(parser, context, /* inNewExpression */ true, LeftHandSide.None);
  if (parser.token === SyntaxKind.QuestionMarkPeriod) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Invalid_optional_chain_from_new_expression],
      parser.curPos,
      parser.pos
    );
  }
  parser.assignable = false;
  return createNewExpression(
    newToken,
    parseMemberExpression(parser, context, expression, /* allowCalls */ false, pos),
    (parser.token as SyntaxKind) === SyntaxKind.LeftParen ? parseArguments(parser, context) : null,
    pos,
    parser.curPos
  );
}

function parseNullLiteral(parser: ParserState, context: Context): NullLiteral {
  const curPos = parser.curPos;
  nextToken(parser, context);
  parser.assignable = false;
  return createNullLiteral(curPos, parser.curPos);
}

function parseThisExpression(parser: ParserState, context: Context): ThisExpression {
  const nodeFlags = parser.nodeFlags;
  const curPos = parser.curPos;
  if (nodeFlags & 0b00000000000000000110000000000000) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Keywords_cannot_contain_escape_characters],
      curPos,
      parser.pos
    );
  }
  nextToken(parser, context);
  parser.assignable = false;
  return createThisExpression(curPos, nodeFlags | NodeFlags.ExpressionNode | NodeFlags.ChildLess, parser.curPos);
}

// BooleanLiteral :
//   `true`
//   `false`
function parseBooleanLiteral(parser: ParserState, context: Context, isTruthy: boolean): BooleanLiteral {
  const curPos = parser.curPos;
  const flags = parser.nodeFlags | NodeFlags.ExpressionNode | NodeFlags.ChildLess;
  if (parser.nodeFlags & 0b00000000000000000110000000000000) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Keywords_cannot_contain_escape_characters],
      parser.curPos,
      parser.pos
    );
  }
  nextToken(parser, context);
  parser.assignable = false;
  return createBooleanLiteral(isTruthy ? true : false, flags, curPos, parser.curPos);
}

// UpdateExpression :
//   LeftHandSideExpression
//   LeftHandSideExpression [no LineTerminator here] `++`
//   LeftHandSideExpression [no LineTerminator here] `--`
function parsePostfixUpdateExpression(
  parser: ParserState,
  context: Context,
  expr: ExpressionNode,
  start: number
): PostfixUpdateExpression | ExpressionNode {
  if (parser.nodeFlags & NodeFlags.NewLine) return expr;
  if (!parser.assignable) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[
        DiagnosticCode.The_operand_of_an_increment_or_decrement_operator_must_be_a_variable_or_a_property_access
      ],
      parser.curPos,
      parser.pos
    );
  }
  const operandToken = parseTokenNode(parser, context);
  parser.assignable = false;
  return createPostfixUpdateExpression(operandToken, expr, start, parser.curPos);
}

// UpdateExpression :
//   `++` UnaryExpression
//   `--` UnaryExpression
function parsePrefixUpdateExpression(
  parser: ParserState,
  context: Context,
  inNewExpression: boolean,
  LeftHandSideContext: LeftHandSide
): PrefixUpdateExpression {
  const curPos = parser.curPos;
  const operandToken = parseTokenNode(parser, context | Context.AllowRegExp);
  const operand = parseLeftHandSideExpression(parser, context, LeftHandSide.None);
  if (LeftHandSideContext & LeftHandSide.DisallowClassExtends) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Expected_a],
      parser.curPos,
      parser.pos
    );
  }
  if (!parser.assignable) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[
        DiagnosticCode.The_operand_of_an_increment_or_decrement_operator_must_be_a_variable_or_a_property_access
      ],
      parser.curPos,
      parser.pos
    );
  }
  if (inNewExpression) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Expression_expected],
      parser.curPos,
      parser.pos
    );
  }
  parser.assignable = false;
  return createPrefixUpdateExpression(operandToken, operand, curPos, parser.curPos);
}

/**
 * Checks if the property has any private field key
 *
 * @param parser Parser object
 * @param context  Context masks
 */
export function isPropertyWithPrivateFieldKey(expr: any): boolean {
  return !expr.expression ? false : expr.expression.kind === SyntaxKind.PrivateIdentifier;
}

// UnaryExpression :
//   UpdateExpression
//   `delete` UnaryExpression
//   `void` UnaryExpression
//   `typeof` UnaryExpression
//   `+` UnaryExpression
//   `-` UnaryExpression
//   `~` UnaryExpression
//   `!` UnaryExpression
//   [+Await] AwaitExpression
function parseUnaryExpression(
  parser: ParserState,
  context: Context,
  LeftHandSideContext: LeftHandSide
): UnaryExpression {
  const curPos = parser.curPos;
  const operandToken = parseTokenNode(parser, context | Context.AllowRegExp);
  if (operandToken.flags & 0b00000000000000000110000000000000) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Keywords_cannot_contain_escape_characters],
      parser.curPos,
      parser.pos
    );
  }
  if (LeftHandSideContext & LeftHandSide.DisallowClassExtends) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Expression_expected],
      parser.curPos,
      parser.pos
    );
  }
  if (operandToken.flags & 0b00000000000000000110000000000000) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Keywords_cannot_contain_escape_characters],
      parser.curPos,
      parser.pos
    );
  }
  const expression = parseLeftHandSideExpression(parser, context, LeftHandSide.None);

  if ((parser.token as SyntaxKind) === SyntaxKind.Exponentiate) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[
        DiagnosticCode
          .Unary_expressions_as_the_left_operand_of_an_exponentation_expression_must_be_disambiguated_with_parentheses
      ],
      parser.curPos,
      parser.pos
    );
  }

  if (context & Context.Strict && operandToken.kind === SyntaxKind.DeleteKeyword) {
    if (expression.kind === SyntaxKind.Identifier) {
      // When a delete operator occurs within strict mode code, a SyntaxError is thrown if its
      // UnaryExpression is a direct reference to a variable, function argument, or function name
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode._delete_cannot_be_called_on_an_identifier_in_strict_mode],
        parser.curPos,
        parser.pos
      );
    }

    if (isPropertyWithPrivateFieldKey(expression)) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.Prohibit_delete_of_private_class_elements],
        parser.curPos,
        parser.pos
      );
    }
  }

  parser.assignable = false;
  return createUnaryExpression(operandToken, expression, curPos, parser.curPos);
}

// ArrayLiteral :
//   `[` `]`
//   `[` Elision `]`
//   `[` ElementList `]`
//   `[` ElementList `,` `]`
//   `[` ElementList `,` Elision `]`
function parseArrayLiteral(parser: ParserState, context: Context): ArrayLiteral {
  const expr = parseArrayLiteralOrAssignmentExpression(parser, context, null, BindingType.Literal);
  if (expr.flags & NodeFlags.PrototypeField) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.An_object_literal_cannot_have_multiple_properties_with_the_name___proto],
      parser.curPos,
      parser.pos
    );
  }
  if ((parser.destructible & DestructibleKind.MustDestruct) === DestructibleKind.MustDestruct) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[
        DiagnosticCode.The_left_hand_side_of_an_assignment_expression_must_be_a_variable_or_a_property_access
      ],
      parser.curPos,
      parser.pos
    );
  }
  return expr as any;
}

function parseArrayLiteralOrAssignmentExpression(
  parser: ParserState,
  context: Context,
  scope: any,
  type: BindingType
): ArrayLiteral | AssignmentExpression {
  const curPos = parser.curPos;
  consume(parser, context | Context.AllowRegExp, SyntaxKind.LeftBracket);
  const elementList = parseElementList(parser, context, scope, type);
  consume(parser, context, SyntaxKind.RightBracket, DiagnosticCode.Did_you_forgot_a_to_match_the_token);
  context = (context | 0b00000000100000000000000010000000) ^ 0b00000000100000000000000010000000;
  const node = createArrayLiteral(elementList, curPos, parser.curPos);

  if (parser.token & SyntaxKind.IsAssignOp) {
    if (parser.token !== SyntaxKind.Assign) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[
          DiagnosticCode
            .Expression_exprected_A_compound_assignment_or_an_logical_assignment_cannot_follow_an_array_literal
        ],
        parser.curPos,
        parser.pos
      );
    }
    if (parser.destructible & DestructibleKind.NotDestructible) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.The_left_hand_side_must_be_a_variable_or_a_property_access],
        parser.curPos,
        parser.pos
      );
    }
    const t = parseTokenNode(parser, context | Context.AllowRegExp);

    const right = parseExpression(parser, context);
    parser.destructible = (parser.destructible | DestructibleKind.MustDestruct) ^ DestructibleKind.MustDestruct;
    return createAssignmentExpression(node, t, right, curPos, parser.curPos);
  }

  return node;
}

function parseElementList(parser: ParserState, context: Context, scope: ScopeState, type: BindingType): ElementList {
  const curPos = parser.curPos;
  const elements: ExpressionNode[] = [];
  let trailingComma = false;
  const flags = parser.nodeFlags;
  let destructible = DestructibleKind.None;
  while (parser.token & 0b00010000101011010100000000000000) {
    elements.push(parseArrayLiteralElement(parser, context, scope, type) as any);
    destructible |= parser.destructible;
    if ((parser.token as SyntaxKind) === SyntaxKind.RightBracket) break;
    consume(parser, context | Context.AllowRegExp, SyntaxKind.Comma, DiagnosticCode._expected);
    if ((parser.token as SyntaxKind) === SyntaxKind.RightBracket) {
      trailingComma = true;
      break;
    }
  }

  parser.destructible = destructible;
  return createElementList(elements, trailingComma, flags | NodeFlags.ExpressionNode, curPos, parser.curPos);
}

function parseArrayLiteralElement(
  parser: ParserState,
  context: Context,
  scope: ScopeState,
  type: BindingType
): Elison | SpreadElement | ExpressionNode {
  const pos = parser.curPos;

  // Simple cases: "[a]", "[a,]", "[a = b]", "[a.[b] ...]",  "[a.b ... ]" and "[a.(b) ...]"'
  if (parser.token & (SyntaxKind.IsFutureReserved | SyntaxKind.IsIdentifier)) {
    const tokenValue = parser.tokenValue;
    let left = parsePrimaryExpression(parser, context, /* inNewExpression */ false, LeftHandSide.None);

    // Array with only one identifier followed by an assignment, '[a = ', are destructible unless this is a keyword.
    if (parser.token === SyntaxKind.Assign) {
      return parseAssignmentExpression(parser, context, left, pos);
    }

    // Array with only one identifier, should be 'destructible' except for a few valid identifiers / keywords
    // that can't be assigned to. For example `true` and `typeof`.
    if (parser.token === SyntaxKind.RightBracket || parser.token === SyntaxKind.Comma) {
      if (parser.assignable) {
        addVarOrBlock(parser, context, scope, tokenValue, type);
        parser.destructible = DestructibleKind.None;
      } else {
        parser.destructible = DestructibleKind.NotDestructible;
      }
      return left;
    }

    let destructible =
      type & BindingType.ArgumentList
        ? DestructibleKind.Assignable
        : (type & BindingType.Literal) !== BindingType.Literal
        ? DestructibleKind.NotDestructible
        : DestructibleKind.None;

    left = parseMemberExpression(parser, context, left, /* allowCalls */ true, pos);

    if (
      !parser.assignable ||
      ((parser.token as SyntaxKind) !== SyntaxKind.Assign &&
        (parser.token as SyntaxKind) !== SyntaxKind.Comma &&
        (parser.token as SyntaxKind) !== SyntaxKind.RightBracket)
    ) {
      destructible |= DestructibleKind.NotDestructible;
    }

    // For complex cases like - '[x()]', '[x[y]]', '[x.y]', '[x.y = z]' - the identifier / keyword must be
    // followed by a 'tail' - 'MemberExpression'.
    left = parseAssignmentExpression(parser, context, left, pos);

    parser.destructible = destructible;

    return left;
  }

  // '[[', '[{'
  if (parser.token & SyntaxKind.IsPatternStart) {
    let left: ArrayLiteral | ObjectLiteral | ExpressionNode =
      parser.token === SyntaxKind.LeftBracket
        ? parseArrayLiteralOrAssignmentExpression(parser, context, scope, type)
        : parseObjectLiteralOrAssignmentExpression(parser, context, scope, type);

    let destructible = parser.destructible;

    if (parser.token & (SyntaxKind.IsPropertyOrCall | SyntaxKind.IsExpressionStart)) {
      // '=' can only be used in an object literal property inside a destructuring assignment
      if (destructible & DestructibleKind.MustDestruct) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode._expected],
          parser.curPos,
          parser.pos
        );
      }

      left = parseMemberExpression(parser, context, left as any, /* allowCalls */ true, pos);

      destructible = parser.assignable ? DestructibleKind.None : DestructibleKind.NotDestructible;

      left = parseAssignmentExpression(parser, context, left, pos);

      // ObjectLiteral or ArrayLiteral followed by ConditionalExpression
    } else if (parser.token === SyntaxKind.QuestionMark) {
      left = parseConditionalExpression(parser, context, left as any, pos);
      destructible = DestructibleKind.NotDestructible;
    }

    parser.destructible = destructible;

    return left;
  }

  if (parser.token === SyntaxKind.Ellipsis) {
    const ellipsisToken = consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.Ellipsis);
    return createSpreadElement(
      ellipsisToken,
      parseArraySpreadArgument(parser, context, scope, type),
      pos,
      parser.curPos
    );
  }

  if ((parser.token as SyntaxKind) === SyntaxKind.Comma) {
    return createElison(pos, pos);
  }

  const token = parser.token;

  let destructible = DestructibleKind.None;

  let left = parseLeftHandSideExpression(parser, context, LeftHandSide.None);

  if (parser.token !== SyntaxKind.Comma && parser.token !== SyntaxKind.RightBracket) {
    left = parseAssignmentExpression(parser, context, left, pos);
    if ((BindingType.Literal | BindingType.ArgumentList) === 0 && token === SyntaxKind.LeftParen) {
      destructible |= DestructibleKind.NotDestructible;
    }
  } else if (!parser.assignable) {
    destructible |= DestructibleKind.NotDestructible;
  } else if (token === SyntaxKind.LeftParen) {
    destructible |=
      parser.assignable && BindingType.Literal | BindingType.ArgumentList
        ? DestructibleKind.Assignable
        : DestructibleKind.NotDestructible;
  }

  parser.destructible = destructible;

  return left;
}

function parseArgumentOrArrayLiteralElement(parser: ParserState, context: Context): any {
  return parser.token === SyntaxKind.Ellipsis ? parseSpreadElement(parser, context) : parseExpression(parser, context);
}

function parseArraySpreadArgument(parser: ParserState, context: Context, scope: ScopeState, type: BindingType): any {
  const pos = parser.curPos;

  if (parser.token & (SyntaxKind.IsIdentifier | SyntaxKind.IsFutureReserved)) {
    const tokenValue = parser.tokenValue;
    let argument = parsePrimaryExpression(parser, context, /* inNewExpression */ false, LeftHandSide.None);

    // '... )' , '... ]' and '... }'
    if (parser.token === SyntaxKind.RightBracket) {
      parser.destructible = parser.assignable ? DestructibleKind.Destructible : DestructibleKind.NotDestructible;
      return argument;
    }

    // A spread or rest element / property may not have a trailing comma, so we are setting the
    // destructible state to 'NotDestructible' for cases like '..., )',  '..., }'  and '..., ]'.
    if (parser.token === SyntaxKind.Comma) {
      parser.destructible = DestructibleKind.NotDestructible;
      return argument;
    }

    // This is the slow path. We shouldn't care too much about performance
    argument = parseMemberExpression(parser, context, argument, /*allowCalls */ true, pos);

    let destructible = DestructibleKind.None;

    if ((parser.token as SyntaxKind) !== SyntaxKind.Comma && (parser.token as SyntaxKind) !== SyntaxKind.RightBracket) {
      destructible |= DestructibleKind.NotDestructible;
      argument = parseAssignmentExpression(parser, context, argument, pos);
    }

    if (!parser.assignable) {
      destructible |= DestructibleKind.NotDestructible;
    } else if ((parser.token as SyntaxKind) || (parser.token as SyntaxKind) === SyntaxKind.RightBracket) {
      addVarOrBlock(parser, context, scope, tokenValue, type);
    } else {
      destructible |= DestructibleKind.Assignable;
    }

    parser.destructible = destructible |= parser.assignable
      ? DestructibleKind.Assignable
      : DestructibleKind.NotDestructible;

    return argument;
  }

  // '{', '['
  if (parser.token & SyntaxKind.IsPatternStart) {
    let argument: any =
      parser.token === SyntaxKind.LeftBracket
        ? parseArrayLiteralOrAssignmentExpression(parser, context, null, type)
        : parseObjectLiteralOrAssignmentExpression(parser, context, null, type);

    // '...[ ] )' , '... { } ]' etc.
    if (parser.token === SyntaxKind.RightBracket) {
      //if (isSpread) state.destructible |= DestructibleKind.NotDestructible;
      return argument;
    }

    if (parser.token === SyntaxKind.Comma) {
      parser.destructible = DestructibleKind.NotDestructible;
      return argument;
    }

    if (parser.destructible & DestructibleKind.MustDestruct) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode._expected],
        parser.curPos,
        parser.pos
      );
    }

    argument = parseMemberExpression(parser, context, argument, true, pos);

    argument = parseAssignmentExpression(parser, context, argument, pos);

    parser.destructible = parser.assignable ? DestructibleKind.Assignable : DestructibleKind.NotDestructible;

    return argument;
  }

  let destructible = DestructibleKind.Assignable;

  let argument = parseLeftHandSideExpression(parser, context, LeftHandSide.None);

  const token = parser.token;

  if (token === SyntaxKind.Assign) {
    argument = parseAssignmentExpression(parser, context, argument, pos);
    parser.destructible = destructible |= DestructibleKind.NotDestructible;
    return argument;
  }

  if (token === SyntaxKind.Comma) {
    destructible |= DestructibleKind.NotDestructible;
  } else if (token !== SyntaxKind.RightBracket) {
    argument = parseAssignmentExpression(parser, context, argument, pos);
  }

  parser.destructible = parser.assignable ? DestructibleKind.Assignable : DestructibleKind.NotDestructible;

  return argument;
}

function parseSpreadElement(parser: ParserState, context: Context): SpreadElement {
  const pos = parser.curPos;
  const ellipsisToken = consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.Ellipsis);
  return createSpreadElement(
    ellipsisToken,
    parseExpression(parser, (context | 0b00000000100000000000000010000000) ^ 0b00000000100000000000000010000000),
    pos,
    parser.curPos
  );
}

// CoverParenthesizedExpressionAndArrowParameterList :
//   `(` Expression `)`
//   `(` Expression `,` `)`
//   `(` `)`
//   `(` `...` BindingIdentifier `)`
//   `(` `...` BindingPattern `)`
//   `(` Expression `,` `...` BindingIdentifier `)`
//   `(` Expression `.` `...` BindingPattern `)`
function parseCoverParenthesizedExpressionAndArrowParameterList(
  parser: ParserState,
  context: Context,
  LeftHandSideContext: LeftHandSide
): ParenthesizedExpression | any {
  const curPos = parser.curPos;
  let typeParameters: any = null;
  let state = Tristate.False;
  let flags = NodeFlags.None;

  if (parser.token === SyntaxKind.LessThan) {
    state = Tristate.True;
    typeParameters = parseTypeParameterDeclaration(parser, context);
  }

  const scope = createParentScope(createScope(), ScopeKind.ArrowParams);
  // Allow "in" inside parentheses
  context = (context | 0b00000000100000000000000010000000) ^ 0b00000000100000000000000010000000;

  consume(parser, context | Context.AllowRegExp, SyntaxKind.LeftParen);

  if (consumeOpt(parser, context, SyntaxKind.RightParen)) {
    // Simple cases: "() =>", "(): ", and  "() {".
    // This is an arrow function with no parameters.
    // The last one is not actually an arrow function,
    // but this is probably what the user intended.

    let isType = false;
    if (context & Context.OptionsAllowTypes && parser.token === SyntaxKind.Colon) {
      isType =
        context & Context.InConditionalExpr
          ? isValidReturnType(
              parser,
              context,
              parsePrimaryExpression(parser, context, /* inNewExpression */ false, LeftHandSide.None),
              curPos,
              false
            )
          : true;
    }

    switch (parser.token) {
      case SyntaxKind.Arrow:
      case SyntaxKind.Colon:
      case SyntaxKind.LeftBrace:
        if (LeftHandSideContext & (LeftHandSide.NotAssignable | LeftHandSide.DisallowClassExtends)) {
          parser.onError(
            DiagnosticSource.Parser,
            DiagnosticKind.Error,
            diagnosticMap[
              LeftHandSideContext & LeftHandSide.ForStatement
                ? DiagnosticCode.The_left_hand_side_of_a_for_in_or_of_statement_must_not_be_an_arrow_function
                : DiagnosticCode.Expected_a
            ],
            parser.curPos,
            parser.pos
          );
        }
        return parseArrowFunction(
          parser,
          context,
          scope,
          /*typeParameters */ typeParameters,
          /* returnType */ isType ? parseTypeAnnotation(parser, context | Context.InTypes) : null,
          /* params */ [],
          /* asyncToken */ null,
          /* nodeFlags */ NodeFlags.ExpressionNode,
          curPos
        );
      default:
        parser.previousErrorPos = parser.pos;
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.Expression_expected],
          parser.curPos,
          parser.pos
        );

        return createDummyIdentifier(curPos, curPos);
    }
  }

  let expression: any = [];
  let destructible = DestructibleKind.None;

  if (parser.token & (SyntaxKind.IsIdentifier | SyntaxKind.IsFutureReserved)) {
    addBlockName(parser, context, scope, parser.tokenValue, BindingType.ArgumentList);
    expression = parsePrimaryExpression(parser, context, /* inNewExpression */ false, LeftHandSide.None);

    if (parser.token === SyntaxKind.QuestionMark) {
      const questionMarkToken = consumeOptToken(parser, context, SyntaxKind.QuestionMark);
      if (parser.token & (SyntaxKind.IsFutureReserved | SyntaxKind.IsIdentifier | SyntaxKind.IsStartOfType)) {
        // If we have "(a?b:" then this is part of an conditional expression in an argument list
        const consequent = speculate(
          parser,
          context,
          function () {
            const consequent = parseExpression(
              parser,
              (context | Context.InConditionalExpr | Context.DisallowInContext) ^ Context.DisallowInContext
            );
            return parser.token === SyntaxKind.Colon ? consequent : undefined;
          },
          false
        );

        if (consequent) {
          expression = createConditionalExpression(
            expression,
            questionMarkToken,
            consequent,
            consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.Colon),
            parseExpression(parser, (context | Context.InConditionalExpr) ^ Context.InConditionalExpr),
            curPos,
            parser.curPos
          );
          parser.assignable = false;
        }
      } else {
        // This isn't part of an conditional expression, so this has to be "(a?" or "(a?:"
        state = Tristate.True;

        expression = createFormalParameter(
          /* ellipsisToken */ null,
          /* binding */ expression,
          /* optionalToken */ questionMarkToken,
          /* type */ parseTypeAnnotation(parser, context),
          /* initializer */ parseInitializer(parser, context, false),
          NodeFlags.ExpressionNode,
          curPos,
          parser.curPos
        );
      }
      // If we have "(a:", then we must have a type-annotated parameter in an arrow function expression
    } else if (parser.token === SyntaxKind.Colon) {
      state = Tristate.True;

      expression = createFormalParameter(
        /* ellipsisToken */ null,
        /* binding */ expression,
        /* optionalToken */ null,
        /* type */ parseTypeAnnotation(parser, context),
        /* initializer */ parseInitializer(parser, context, false),
        NodeFlags.ExpressionNode,
        curPos,
        parser.curPos
      );
    } else {
      if (!state) state = Tristate.Unknown;

      // If we have "(a," or "(a=" or "(a" this *could* be an arrow function
      if (parser.token === SyntaxKind.Comma || parser.token === SyntaxKind.RightParen) {
        if (!parser.assignable) {
          destructible |= DestructibleKind.NotDestructible;
          parser.diagnosticStartPos = curPos;
          flags |= NodeFlags.NoneSimpleParamList;
        }
      } else {
        if (parser.token === SyntaxKind.Assign) {
          flags |= NodeFlags.NoneSimpleParamList;
        } else {
          state = Tristate.False;
          destructible |= DestructibleKind.NotDestructible;
        }

        // If we have " (a[x]" then this is definitely not an arrow function
        if (parser.token & SyntaxKind.IsPropertyOrCall) {
          state = Tristate.False;
          expression = parseMemberExpression(parser, context, expression, true, curPos);
        }

        if (
          (parser.token as SyntaxKind) !== SyntaxKind.RightParen &&
          (parser.token as SyntaxKind) !== SyntaxKind.Comma
        ) {
          expression = parseAssignmentExpression(parser, context, expression, curPos);
        }
      }
    }
  } else if (parser.token & SyntaxKind.IsPatternStart) {
    expression =
      parser.token === SyntaxKind.LeftBracket
        ? parseArrayLiteralOrAssignmentExpression(parser, context, scope, BindingType.ArgumentList)
        : parseObjectLiteralOrAssignmentExpression(parser, context, scope, BindingType.ArgumentList);
    if (expression.flags & NodeFlags.PrototypeField) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.An_object_literal_cannot_have_multiple_properties_with_the_name___proto],
        parser.curPos,
        parser.pos
      );
    }
    parser.diagnosticStartPos = curPos;
    flags |= NodeFlags.NoneSimpleParamList;

    if (parser.token === SyntaxKind.QuestionMark) {
      const questionMarkToken = consumeOptToken(parser, context, SyntaxKind.QuestionMark);
      if (parser.token & SyntaxKind.IsIdentifier) {
        // If we have "([a]?b:" then this is part of an conditional expression in an argument list
        const consequent = speculate(
          parser,
          context,
          function () {
            const consequent = parseExpression(
              parser,
              (context | Context.InConditionalExpr | Context.DisallowInContext) ^ Context.DisallowInContext
            );
            return parser.token === SyntaxKind.Colon ? consequent : undefined;
          },
          false
        );

        if (consequent) {
          expression = createConditionalExpression(
            expression,
            questionMarkToken,
            consequent,
            consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.Colon),
            parseExpression(parser, (context | Context.InConditionalExpr) ^ Context.InConditionalExpr),
            curPos,
            parser.curPos
          );
          parser.assignable = false;
        }
      } else {
        // This isn't part of an conditional expression, so this has to be "(a?" or "(a?:"
        state = Tristate.True;

        expression = createFormalParameter(
          /* ellipsisToken */ null,
          /* binding */ expression,
          /* optionalToken */ questionMarkToken,
          /* type */ parseTypeAnnotation(parser, context),
          /* initializer */ parseInitializer(parser, context, false),
          NodeFlags.ExpressionNode,
          curPos,
          parser.curPos
        );
      }
    } else if (parser.token === SyntaxKind.Colon) {
      state = Tristate.True;

      expression = createFormalParameter(
        /* ellipsisToken */ null,
        /* binding */ expression as any,
        /* optionalToken */ null,
        /* type */ parseTypeAnnotation(parser, context),
        /* initializer */ parseInitializer(parser, context, false),
        NodeFlags.ExpressionNode,
        curPos,
        parser.curPos
      );
    } else {
      state = Tristate.Unknown;

      destructible = parser.destructible;

      parser.assignable = false;

      if (parser.token !== SyntaxKind.Comma && parser.token !== SyntaxKind.RightParen) {
        if (destructible & DestructibleKind.MustDestruct) {
          parser.onError(
            DiagnosticSource.Parser,
            DiagnosticKind.Error,
            diagnosticMap[
              destructible & DestructibleKind.CoverInitializedName
                ? DiagnosticCode.Did_you_mean_to_use_a_An_can_only_follow_a_property_name_when_the_containing_object_literal_is_part_of_a_destructuring
                : DiagnosticCode.The_left_hand_side_of_an_assignment_expression_must_be_a_variable_or_a_property_access
            ],
            parser.curPos,
            parser.pos
          );
        }

        if (parser.token & SyntaxKind.IsPropertyOrCall) {
          state = Tristate.False;
          expression = parseMemberExpression(parser, context, expression, true, curPos);
        }

        destructible |= DestructibleKind.NotDestructible;

        if ((parser.token & SyntaxKind.IsAssignOp) > 0) {
          if (!parser.assignable) {
            parser.onError(
              DiagnosticSource.Parser,
              DiagnosticKind.Error,
              diagnosticMap[DiagnosticCode._expected],
              parser.curPos,
              parser.pos
            );
          }
          expression = parseAssignmentExpression(parser, context, expression, curPos);
        } else if ((parser.token & SyntaxKind.IsBinaryOp) > 0) {
          expression = parseBinaryExpression(parser, context, expression, 4, parser.token, curPos);
          if ((parser.token as SyntaxKind) === SyntaxKind.QuestionMark) {
            expression = parseConditionalExpression(parser, context, expression, curPos);
          }
        } else {
          if ((parser.token as SyntaxKind) === SyntaxKind.QuestionMark) {
            expression = parseConditionalExpression(parser, context, expression, curPos);
          } else {
            destructible |= !parser.assignable ? DestructibleKind.NotDestructible : DestructibleKind.Assignable;
          }
        }
      }
    }
  } else if (parser.token === SyntaxKind.Ellipsis) {
    state = Tristate.True;
    expression = parseFormalParameter(parser, context | Context.Parameters, scope);
    // If we have something like "(32" then this is definitely not an arrow function
  } else {
    state = Tristate.False;
    destructible |= DestructibleKind.NotDestructible;

    expression = parseExpression(parser, context);

    expression = parseCommaOperator(parser, context, expression, curPos);
    consume(parser, context, SyntaxKind.RightParen, DiagnosticCode.Expected_a_to_match_the_token_here);
    if (parser.token === SyntaxKind.Arrow) {
      parser.previousErrorPos = parser.pos;
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.Arrow_parameters_can_only_contain_a_binding_pattern_or_an_identifier],
        parser.curPos,
        parser.pos
      );
    }
    parser.destructible = destructible;

    return createParenthesizedExpression(expression, curPos, parser.curPos);
  }

  if (consumeOpt(parser, context, SyntaxKind.RightParen)) {
    if (destructible & DestructibleKind.NotDestructible && destructible & DestructibleKind.MustDestruct) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[
          DiagnosticCode.The_left_hand_side_of_an_assignment_expression_must_be_a_variable_or_a_property_access
        ],
        parser.curPos,
        parser.pos
      );
    }

    if (state) {
      let isType = false;
      if (context & Context.OptionsAllowTypes && parser.token === SyntaxKind.Colon) {
        isType =
          context & Context.InConditionalExpr ? isValidReturnType(parser, context, expression, curPos, true) : true;
      }

      if (parser.token === SyntaxKind.Arrow || isType) {
        if (destructible & (DestructibleKind.Assignable | DestructibleKind.NotDestructible)) {
          parser.onError(
            DiagnosticSource.Parser,
            DiagnosticKind.Error,
            diagnosticMap[DiagnosticCode.The_left_hand_side_of_the_arrow_is_not_destructible],
            parser.curPos,
            parser.pos
          );
        }
        if (LeftHandSideContext & (LeftHandSide.NotAssignable | LeftHandSide.DisallowClassExtends)) {
          parser.onError(
            DiagnosticSource.Parser,
            DiagnosticKind.Error,
            diagnosticMap[DiagnosticCode.Expected_a],
            parser.curPos,
            parser.pos
          );
        }
        return parseArrowFunction(
          parser,
          context,
          scope,
          typeParameters,
          parseTypeAnnotation(parser, context | Context.InTypes),
          [expression],
          null,
          /* nodeFlags */ flags,
          curPos
        );
      }
    }

    if (destructible & DestructibleKind.MustDestruct) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[
          destructible & DestructibleKind.CoverInitializedName
            ? DiagnosticCode.Did_you_mean_to_use_a_An_can_only_follow_a_property_name_when_the_containing_object_literal_is_part_of_a_destructuring
            : DiagnosticCode.The_left_hand_side_of_an_assignment_expression_must_be_a_variable_or_a_property_access
        ],
        parser.curPos,
        parser.pos
      );
    }

    if (state === Tristate.True) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.Expected],
        parser.curPos,
        parser.pos
      );
    }
    return createParenthesizedExpression(expression, curPos, parser.curPos);
  }

  let expressions: any;

  // 12.16 Comma Operator
  if (consumeOpt(parser, context | Context.AllowRegExp, SyntaxKind.Comma)) {
    expressions = [expression];
    if (state) {
      while (parser.token & 0b00010000101010010100000000000000) {
        if (parser.token & (SyntaxKind.IsIdentifier | SyntaxKind.IsFutureReserved)) {
          addBlockName(parser, context, scope, parser.tokenValue, BindingType.ArgumentList);
          expression = parsePrimaryExpression(parser, context, /* inNewExpression */ false, LeftHandSide.None);

          state = Tristate.Unknown;

          if (context & Context.OptionsAllowTypes && parser.token === SyntaxKind.QuestionMark) {
            const questionMarkToken = consumeOptToken(parser, context, SyntaxKind.QuestionMark);
            if (parser.token & (SyntaxKind.IsFutureReserved | SyntaxKind.IsIdentifier)) {
              // If we have "(a?b:" then this is part of an conditional expression in an argument list
              const consequent = speculate(
                parser,
                context,
                function () {
                  const consequent = parseExpression(
                    parser,
                    (context | Context.InConditionalExpr | Context.DisallowInContext) ^ Context.DisallowInContext
                  );
                  return parser.token === SyntaxKind.Colon ? consequent : undefined;
                },
                false
              );

              if (consequent) {
                expression = createConditionalExpression(
                  expression,
                  questionMarkToken,
                  consequent,
                  consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.Colon),
                  parseExpression(parser, (context | Context.InConditionalExpr) ^ Context.InConditionalExpr),
                  curPos,
                  parser.curPos
                );
                parser.assignable = false;
              }
            } else {
              // This isn't part of an conditional expression, so this has to be "(a?" or "(a?:"
              state = Tristate.True;

              expression = createFormalParameter(
                /* ellipsisToken */ null,
                /* binding */ expression,
                /* optionalToken */ questionMarkToken,
                /* type */ parseTypeAnnotation(parser, context),
                /* initializer */ parseInitializer(parser, context, false),
                NodeFlags.ExpressionNode,
                curPos,
                parser.curPos
              );
            }
          } else if (context & Context.OptionsAllowTypes && parser.token === SyntaxKind.Colon) {
            state = Tristate.True;

            expression = createFormalParameter(
              /* ellipsisToken */ null,
              /* binding */ expression,
              /* optionalToken */ null,
              /* type */ parseTypeAnnotation(parser, context),
              /* initializer */ parseInitializer(parser, context, false),
              NodeFlags.ExpressionNode,
              curPos,
              parser.curPos
            );
          } else {
            state = Tristate.Unknown;

            if (parser.token === SyntaxKind.Comma || parser.token === SyntaxKind.RightParen) {
              if (!parser.assignable) {
                destructible |= DestructibleKind.NotDestructible;
                parser.diagnosticStartPos = curPos;
                flags |= NodeFlags.NoneSimpleParamList;
              }
            } else {
              if (parser.token === SyntaxKind.Assign) {
                parser.diagnosticStartPos = curPos;
                flags |= NodeFlags.NoneSimpleParamList;
              } else {
                state = Tristate.False;
                destructible |= DestructibleKind.NotDestructible;
              }

              if (parser.token & SyntaxKind.IsPropertyOrCall) {
                state = Tristate.False;
                expression = parseMemberExpression(parser, context, expression, true, curPos);
              }

              if (
                (parser.token as SyntaxKind) !== SyntaxKind.RightParen &&
                (parser.token as SyntaxKind) !== SyntaxKind.Comma
              ) {
                expression = parseAssignmentExpression(parser, context, expression, curPos);
              }
            }
          }
        } else if (parser.token & SyntaxKind.IsPatternStart) {
          expression =
            parser.token === SyntaxKind.LeftBracket
              ? parseArrayLiteralOrAssignmentExpression(parser, context, scope, BindingType.ArgumentList)
              : parseObjectLiteralOrAssignmentExpression(parser, context, scope, BindingType.ArgumentList);

          if (expression.flags & NodeFlags.PrototypeField) {
            parser.onError(
              DiagnosticSource.Parser,
              DiagnosticKind.Error,
              diagnosticMap[DiagnosticCode.An_object_literal_cannot_have_multiple_properties_with_the_name___proto],
              parser.curPos,
              parser.pos
            );
          }
          parser.diagnosticStartPos = curPos;
          flags |= NodeFlags.NoneSimpleParamList;

          if (context & Context.OptionsAllowTypes && parser.token === SyntaxKind.QuestionMark) {
            const questionMarkToken = consumeOptToken(parser, context, SyntaxKind.QuestionMark);
            if (parser.token & (SyntaxKind.IsFutureReserved | SyntaxKind.IsIdentifier)) {
              // If we have "(a?b:" then this is part of an conditional expression in an argument list
              const consequent = speculate(
                parser,
                context,
                function () {
                  const consequent = parseExpression(
                    parser,
                    (context | Context.InConditionalExpr | Context.DisallowInContext) ^ Context.DisallowInContext
                  );
                  return parser.token === SyntaxKind.Colon ? consequent : undefined;
                },
                false
              );

              if (consequent) {
                expression = createConditionalExpression(
                  expression,
                  questionMarkToken,
                  consequent,
                  consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.Colon),
                  parseExpression(parser, (context | Context.InConditionalExpr) ^ Context.InConditionalExpr),
                  curPos,
                  parser.curPos
                );
                parser.assignable = false;
              }
            } else {
              // This isn't part of an conditional expression, so this has to be "(a?" or "(a?:"
              state = Tristate.True;

              expression = createFormalParameter(
                /* ellipsisToken */ null,
                /* binding */ expression,
                /* optionalToken */ questionMarkToken,
                /* type */ parseTypeAnnotation(parser, context),
                /* initializer */ parseInitializer(parser, context, false),
                NodeFlags.ExpressionNode,
                curPos,
                parser.curPos
              );
            }
          } else if (context & Context.OptionsAllowTypes && parser.token === SyntaxKind.Colon) {
            state = Tristate.True;

            expression = createFormalParameter(
              /* ellipsisToken */ null,
              /* binding */ expression as any,
              /* optionalToken */ null,
              /* type */ parseTypeAnnotation(parser, context),
              /* initializer */ parseInitializer(parser, context, false),
              NodeFlags.ExpressionNode,
              curPos,
              parser.curPos
            );
          } else {
            state = Tristate.Unknown;

            destructible |= parser.destructible;

            parser.assignable = false;

            if (parser.token !== SyntaxKind.Comma && parser.token !== SyntaxKind.RightParen) {
              if (destructible & DestructibleKind.MustDestruct) {
                parser.onError(
                  DiagnosticSource.Parser,
                  DiagnosticKind.Error,
                  diagnosticMap[DiagnosticCode._expected],
                  parser.curPos,
                  parser.pos
                );
              }
              state = Tristate.Unknown;

              if (parser.token & SyntaxKind.IsPropertyOrCall) {
                state = Tristate.False;
                expression = parseMemberExpression(parser, context, expression, true, curPos);
              }

              destructible |= DestructibleKind.NotDestructible;

              if (
                (parser.token as SyntaxKind) !== SyntaxKind.Comma ||
                (parser.token as SyntaxKind) !== SyntaxKind.LeftParen
              ) {
                expression = parseAssignmentExpression(parser, context, expression, curPos);
                destructible |= !parser.assignable ? DestructibleKind.NotDestructible : DestructibleKind.Assignable;
              }
            }
          }
        } else if (parser.token === SyntaxKind.Ellipsis) {
          state = Tristate.True;
          expression = parseFormalParameter(parser, context | Context.Parameters, scope);
        } else {
          state = Tristate.False;
          destructible |= DestructibleKind.NotDestructible;

          expressions.push(parseExpression(parser, context));

          while (consumeOpt(parser, context | Context.AllowRegExp, SyntaxKind.Comma)) {
            expressions.push(parseExpression(parser, context));
          }

          expression = createCommaOperator(expressions, curPos, parser.curPos);

          consume(parser, context, SyntaxKind.RightParen, DiagnosticCode.Expected_a_to_match_the_token_here);

          parser.destructible = destructible;

          return createParenthesizedExpression(expression, curPos, parser.curPos);
        }
        expressions.push(expression);

        if (consumeOpt(parser, context, SyntaxKind.Comma)) continue;
        if (parser.token === SyntaxKind.RightParen) break;
      }
    } else {
      state = Tristate.False;
      destructible |= DestructibleKind.NotDestructible;

      expressions.push(parseExpression(parser, context));

      while (consumeOpt(parser, context | Context.AllowRegExp, SyntaxKind.Comma)) {
        expressions.push(parseExpression(parser, context));
      }

      expression = createCommaOperator(expressions, curPos, parser.curPos);

      consume(parser, context, SyntaxKind.RightParen, DiagnosticCode.Expected_a_to_match_the_token_here);
      if (parser.token === SyntaxKind.Arrow) {
        parser.previousErrorPos = parser.pos;
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.Arrow_parameters_can_only_contain_a_binding_pattern_or_an_identifier],
          curPos,
          parser.pos
        );
      }
      parser.destructible = destructible;

      return createParenthesizedExpression(expression, curPos, parser.curPos);
    }
    parser.assignable = false;
  }

  consume(parser, context, SyntaxKind.RightParen, DiagnosticCode.Expected_a_to_match_the_token_here);

  if (destructible & DestructibleKind.NotDestructible && destructible & DestructibleKind.MustDestruct) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[
        DiagnosticCode.The_left_hand_side_of_an_assignment_expression_must_be_a_variable_or_a_property_access
      ],
      parser.curPos,
      parser.pos
    );
  }

  if (state) {
    let isType = false;
    if (context & Context.OptionsAllowTypes && parser.token === SyntaxKind.Colon) {
      isType =
        context & Context.InConditionalExpr ? isValidReturnType(parser, context, expression, curPos, true) : true;
    }
    if (parser.token === SyntaxKind.Arrow || isType) {
      if (destructible & (DestructibleKind.Assignable | DestructibleKind.NotDestructible)) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.The_left_hand_side_of_the_arrow_is_not_destructible],
          parser.curPos,
          parser.pos
        );
      }
      if (LeftHandSideContext & (LeftHandSide.NotAssignable | LeftHandSide.DisallowClassExtends)) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.Expected_a],
          parser.curPos,
          parser.pos
        );
      }
      return parseArrowFunction(
        parser,
        context,
        scope,
        typeParameters,
        parseTypeAnnotation(parser, context),
        [expressions],
        null,
        flags,
        curPos
      );
    }
  }

  if (state === Tristate.True) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Expected],
      parser.curPos,
      parser.pos
    );
  }

  expression = createCommaOperator(expressions, curPos, parser.curPos);

  if (destructible & DestructibleKind.MustDestruct) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[
        DiagnosticCode.The_left_hand_side_of_an_assignment_expression_must_be_a_variable_or_a_property_access
      ],
      parser.curPos,
      parser.pos
    );
  }

  parser.destructible = destructible;

  return createParenthesizedExpression(expression, curPos, parser.curPos);
}

function isValidReturnType(parser: ParserState, context: Context, _expression1: any, pos: number, _fromp: boolean) {
  return speculate(
    parser,
    context,
    function () {
      nextToken(parser, context); // ':'
      const isIdentifier = parser.token & (SyntaxKind.IsFutureReserved | SyntaxKind.IsIdentifier);
      let expression: any = parsePrimaryExpression(parser, context, /* inNewExpression */ false, LeftHandSide.None);
      if (
        isIdentifier &&
        expression.kind === SyntaxKind.ArrowFunction &&
        (parser.token as SyntaxKind) === SyntaxKind.Colon
      )
        return true;
      expression = parseMemberExpression(parser, context, expression, /* allowCalls */ true, pos);
      expression = parseAssignmentExpression(parser, context, expression, pos);
      return parser.token === SyntaxKind.Arrow;
    },
    /* rollback */ true
  );
}

// PropertyName :
//   LiteralPropertyName
//   ComputedPropertyName
// LiteralPropertyName :
//   IdentifierName
//   StringLiteral
//   NumericLiteral
// ComputedPropertyName :
//   `[` AssignmentExpression `]`
function parsePropertyName(
  parser: ParserState,
  context: Context
): BigIntLiteral | NumericLiteral | StringLiteral | ComputedPropertyName | Identifier | DummyIdentifier {
  switch (parser.token) {
    case SyntaxKind.NumericLiteral:
      return parseNumericLiteral(parser, context);
    case SyntaxKind.BigIntLiteral:
      return parseBigIntLiteral(parser, context);
    case SyntaxKind.StringLiteral:
      return parseStringLiteral(parser, context);
    case SyntaxKind.LeftBracket:
      return parseComputedPropertyName(parser, context);
    case SyntaxKind.PrivateIdentifier:
      return parsePrivateIdentifier(parser, context);
    default:
      return parseIdentifier(parser, context, DiagnosticCode.Identifier_expected, true);
  }
}

function parseIdentifierOrPattern(
  parser: ParserState,
  context: Context,
  scope: ScopeState,
  type: BindingType,
  diagnosticMessage?: DiagnosticCode
): Identifier | ArrayBindingPattern | ObjectBindingPattern | DummyIdentifier | any {
  if (parser.token === SyntaxKind.LeftBracket) return parseArrayBindingPattern(parser, context, scope, type);
  if (parser.token === SyntaxKind.LeftBrace) return parseObjectBindingPattern(parser, context, scope, type);
  if (context & Context.LexicalContext && parser.token === SyntaxKind.LetKeyword) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode._let_is_not_allowed_to_be_used_as_a_name_in_let_or_const_declarations],
      parser.curPos,
      parser.pos
    );
  }
  return parseBindingIdentifier(parser, context, scope, type, diagnosticMessage, true);
}

// ArrayBindingPattern :
//   `[` Elision? BindingRestElement `]`
//   `[` BindingElementList `]`
//   `[` BindingElementList `,` Elision? BindingRestElement `]`
function parseArrayBindingPattern(
  parser: ParserState,
  context: Context,
  scope: ScopeState,
  type: BindingType
): ArrayBindingPattern {
  const pos = parser.curPos;
  const flags = parser.nodeFlags;
  nextToken(parser, context);
  const bindingElementList = parseBindingElementList(parser, context, scope, type);
  consume(parser, context, SyntaxKind.RightBracket, DiagnosticCode.Did_you_forgot_a_to_match_the_token);

  return createArrayBindingPattern(bindingElementList, flags | NodeFlags.ExpressionNode, pos, parser.curPos);
}

function parseBindingElementList(
  parser: ParserState,
  context: Context,
  scope: ScopeState,
  type: BindingType
): BindingElementList {
  const pos = parser.curPos;
  const flags = parser.nodeFlags;
  const elements = [];
  let trailingComma = false;

  while (parser.token & 0b00010000101010000100000000000000) {
    const arrayBindingElement: any = parseArrayBindingElement(parser, context, scope, type);
    elements.push(arrayBindingElement);

    if (parser.token === SyntaxKind.RightBracket) break;
    if (consumeOpt(parser, context, SyntaxKind.Comma)) {
      if (arrayBindingElement.ellipsisToken) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[
            parser.token === SyntaxKind.RightBrace
              ? DiagnosticCode.A_rest_parameter_or_binding_pattern_may_not_have_a_trailing_comma
              : DiagnosticCode.A_rest_element_must_be_last_in_a_destructuring_pattern
          ],
          parser.curPos,
          parser.pos
        );
      }
      if ((parser.token as SyntaxKind) === SyntaxKind.RightBracket) {
        trailingComma = true;
        break;
      }
      continue;
    }

    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode._expected],
      parser.curPos,
      parser.pos
    );
  }
  return createBindingElementList(elements, trailingComma, flags, pos, parser.curPos);
}

function parseArrayBindingElement(
  parser: ParserState,
  context: Context,
  scope: ScopeState,
  type: BindingType
): Elison | ArrayBindingElement {
  const pos = parser.curPos;
  if (parser.token === SyntaxKind.Comma) return createElison(pos, pos);
  const ellipsisToken = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.Ellipsis);

  return createArrayBindingElement(
    ellipsisToken,
    parseIdentifierOrPattern(parser, context, scope, type),
    consumeOptToken(parser, context, SyntaxKind.QuestionMark),
    parseTypeAnnotation(parser, context),
    parseInitializer(parser, context, ellipsisToken ? true : false),
    pos,
    parser.curPos
  );
}

// ObjectBindingPattern :
//   `{` `}`
//   `{` BindingRestProperty `}`
//   `{` BindingPropertyList `}`
//   `{` BindingPropertyList `,` BindingRestProperty? `}`
function parseObjectBindingPattern(
  parser: ParserState,
  context: Context,
  scope: ScopeState,
  type: BindingType
): ObjectBindingPattern {
  const pos = parser.curPos;
  consume(parser, context, SyntaxKind.LeftBrace);
  const bindingPropertyList = parseBindingPropertyList(parser, context, scope, type);
  consume(parser, context, SyntaxKind.RightBrace, DiagnosticCode.The_parser_expected_to_find_a_to_match_the_token_here);
  return createObjectBindingPattern(bindingPropertyList, pos, parser.curPos);
}

function parseBindingPropertyList(
  parser: ParserState,
  context: Context,
  scope: ScopeState,
  type: BindingType
): BindingPropertyList {
  const pos = parser.curPos;
  const properties = [];
  let trailingComma = false;
  const flags = parser.nodeFlags;
  while (parser.token & 0b00010100100010000100000000000000) {
    const bindingProperty = parseBindingProperty(parser, context, scope, type);
    properties.push(bindingProperty);

    if ((parser.token as SyntaxKind) === SyntaxKind.RightBrace) break;
    if (consumeOpt(parser, context, SyntaxKind.Comma)) {
      if (bindingProperty.ellipsisToken) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[
            parser.token === SyntaxKind.RightBrace
              ? DiagnosticCode.A_rest_parameter_or_binding_pattern_may_not_have_a_trailing_comma
              : DiagnosticCode.A_rest_element_must_be_last_in_a_destructuring_pattern
          ],
          parser.curPos,
          parser.pos
        );
      }
      if (parser.token === SyntaxKind.RightBrace) {
        trailingComma = true;
        break;
      }

      continue;
    }

    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode._expected],
      parser.curPos,
      parser.pos
    );
  }
  return createBindingPropertyList(
    properties as any,
    flags | NodeFlags.ExpressionNode,
    trailingComma,
    pos,
    parser.curPos
  );
}

// BindingProperty :
//   SingleNameBinding
//   PropertyName : BindingElement
function parseBindingProperty(
  parser: ParserState,
  context: Context,
  scope: ScopeState,
  type: BindingType
): BindingProperty | SingleNameBinding {
  const pos = parser.curPos;
  const ellipsisToken = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.Ellipsis);

  if (parser.token & (SyntaxKind.IsIdentifier | SyntaxKind.IsFutureReserved)) {
    const tokenValue = parser.tokenValue;
    const key = parseIdentifierReference(parser, context, DiagnosticCode.Binding_identifier_expected);
    if ((parser.token as SyntaxKind) !== SyntaxKind.Colon) {
      addVarOrBlock(parser, context, scope, tokenValue, type);
      return createSingleNameBinding(
        ellipsisToken,
        key,
        parseInitializer(parser, context, ellipsisToken ? true : false),
        pos,
        parser.curPos
      );
    }
    consume(parser, context, SyntaxKind.Colon);

    return createBindingProperty(
      ellipsisToken,
      key,
      parseIdentifierOrPattern(
        parser,
        context,
        scope,
        type,
        ellipsisToken ? DiagnosticCode.Binding_identifier_expected : DiagnosticCode.Object_property_expected
      ),
      parseInitializer(parser, context, false),
      pos,
      parser.curPos
    );
  }
  const key = parsePropertyName(parser, context);

  consume(parser, context, SyntaxKind.Colon);

  return createBindingProperty(
    ellipsisToken,
    key,
    parseIdentifierOrPattern(
      parser,
      context,
      scope,
      type,
      ellipsisToken ? DiagnosticCode.Binding_identifier_expected : DiagnosticCode.Object_property_expected
    ),
    parseInitializer(parser, context, false),
    pos,
    parser.curPos
  );
}

function isArrowAfterTheCurrentToken(parser: ParserState, context: Context): boolean {
  nextToken(parser, context);
  return parser.token !== SyntaxKind.Arrow;
}

function parseFunctionExpression(
  parser: ParserState,
  context: Context,
  inNewExpression: boolean,
  LeftHandSideContext: LeftHandSide
): FunctionExpression | Identifier | ArrowFunction {
  const pos = parser.curPos;
  const asyncToken = consumeOptToken(parser, context, SyntaxKind.AsyncKeyword);

  if (asyncToken) {
    // `async` [no LineTerminator here] `function`
    if (parser.token !== SyntaxKind.FunctionKeyword || parser.nodeFlags & NodeFlags.NewLine) {
      const flags = parser.nodeFlags;
      if ((flags & NodeFlags.NewLine) === 0) {
        // `async` [no LineTerminator here] AsyncArrowBindingIdentifier [no LineTerminator here] => AsyncConciseBody
        if (parser.token & (SyntaxKind.IsIdentifier | SyntaxKind.IsFutureReserved)) {
          // "for (async of" is only an arrow function if the next token is "=>"
          if (parser.token & SyntaxKind.IsInOrOf && speculate(parser, context, isArrowAfterTheCurrentToken, true)) {
            // Do not allow "for (async of []) ;" but do allow "for await (async of []) ;"
            if (
              (asyncToken.flags & 0b00000000000000000110000000000000) === 0 &&
              (context & Context.InForOfAwait) === 0 &&
              parser.token & SyntaxKind.IsInOrOf
            ) {
              parser.onError(
                DiagnosticSource.Parser,
                DiagnosticKind.Error,
                diagnosticMap[DiagnosticCode.The_left_hand_side_of_a_for_of_loop_cannot_contain_an_async_identifier],
                parser.curPos,
                parser.pos
              );
            }
            // Plain 'async' identifier
            parser.assignable = true;
            return createIdentifier('async', 'async', pos, parser.curPos);
          }
          if (LeftHandSideContext & (LeftHandSide.NotAssignable | LeftHandSide.DisallowClassExtends)) {
            parser.onError(
              DiagnosticSource.Parser,
              DiagnosticKind.Error,
              diagnosticMap[DiagnosticCode.Expected_a],
              parser.curPos,
              parser.pos
            );
          }
          if (asyncToken.flags & 0b00000000000000000110000000000000) {
            parser.onError(
              DiagnosticSource.Parser,
              DiagnosticKind.Error,
              diagnosticMap[DiagnosticCode._async_keyword_in_an_async_arrow_must_not_contain_escaped_characters],
              parser.curPos,
              parser.pos
            );
          } else if (context & Context.Strict && parser.token & SyntaxKind.IsFutureReserved) {
            parser.onError(
              DiagnosticSource.Parser,
              DiagnosticKind.Error,
              diagnosticMap[DiagnosticCode.Identifier_expected_Reserved_word_in_strict_mode],
              parser.curPos,
              parser.pos
            );
          }

          const scope = createParentScope(createScope(), ScopeKind.ArrowParams);

          addBlockName(parser, context, scope, parser.tokenValue, BindingType.ArgumentList);

          return parseArrowFunction(
            parser,
            context,
            scope,
            /* typeParameters */ null,
            /* returnType */ null,
            /* params */ parseIdentifierReference(parser, context, DiagnosticCode.Binding_identifier_expected),
            /* asyncToken */ asyncToken,
            /* nodeFlags */ NodeFlags.Async,
            /* pos */ pos
          );
        }
      }

      let expression: any = createIdentifier('async', 'async', pos, parser.curPos);

      // "new async"
      if (inNewExpression) return expression;

      // "async()"
      // "async () => {}"
      // "async<T>()"
      // "async <T>() => {}"
      if (parser.token & SyntaxKind.IsLessThanOrLeftParen) {
        expression = parseCoverCallExpressionAndAsyncArrowHead(
          parser,
          context,
          expression,
          LeftHandSideContext,
          flags,
          pos
        );
      }

      // "async => {}"
      if (parser.token === SyntaxKind.Arrow) {
        const scope = createParentScope(createScope(), ScopeKind.ArrowParams);

        addBlockName(parser, context, scope, 'async', BindingType.ArgumentList);

        return parseArrowFunction(
          parser,
          context,
          /* scope */ scope,
          /* typeParameters */ null,
          /* returnType */ null,
          /* params */ expression,
          /* asyncToken */ asyncToken,
          /* nodeFlags */ NodeFlags.ExpressionNode,
          /* pos */ pos
        );
      }
      parser.assignable = true;

      // "async"
      // "async + 1"
      return expression;
    }
    if (asyncToken.flags & 0b00000000000000000110000000000000) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.Keywords_cannot_contain_escape_characters],
        parser.curPos,
        parser.pos
      );
    }
  }
  const functionToken = consumeToken(parser, context, SyntaxKind.FunctionKeyword);
  const generatorToken = consumeOptToken(parser, context, SyntaxKind.Multiply);

  let name = null;
  let scope = createScope();
  let firstRestricted!: SyntaxKind;

  // The name is optional
  if (parser.token & (SyntaxKind.IsFutureReserved | SyntaxKind.IsIdentifier)) {
    if (asyncToken && parser.token === SyntaxKind.AwaitKeyword) {
      parser.previousErrorPos = parser.pos;
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[
          asyncToken
            ? DiagnosticCode.Cannot_use_await_as_a_name_on_a_async_generator_expression
            : DiagnosticCode.Cannot_use_await_as_a_name_on_a_async_function_expression
        ],
        parser.curPos,
        parser.pos
      );
    }
    if (generatorToken && parser.token === SyntaxKind.YieldKeyword) {
      parser.previousErrorPos = parser.pos;
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.Cannot_use_yield_as_a_name_on_a_generator_function_expression],
        parser.curPos,
        parser.pos
      );
    }
    if (
      context & Context.Strict &&
      (parser.token === SyntaxKind.EvalIdentifier || parser.token === SyntaxKind.ArgumentsIdentifier)
    ) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.Keywords_cannot_contain_escape_characters],
        parser.curPos,
        parser.pos
      );
    }
    firstRestricted = parser.token;
    parser.diagnosticStartPos = parser.curPos;
    addVarName(parser, context, scope, parser.tokenValue, BindingType.Var);
    name = parseIdentifierReference(parser, context, DiagnosticCode.Binding_identifier_expected);
  }

  const typeParameters = parseTypeParameterDeclaration(parser, context);

  context =
    ((context | 0b00001001100000110100011010001000) ^ 0b00001001100000110100011010001000) |
    (asyncToken ? 0b00000000000000000000010000001000 : Context.None) |
    (generatorToken ? Context.YieldContext : Context.None);
  scope = createParentScope(scope, ScopeKind.FunctionParams);
  const formalParameterList = parseFormalParameterList(
    parser,
    context | Context.Parameters | Context.Parameters,
    scope
  );
  const returnType = parseTypeAnnotation(parser, context);
  const contents = parseFunctionBody(
    parser,
    context | Context.NewTarget | Context.IsOutsideFnOrArrow,
    scope,
    /* scopeError*/ (scope.flags & ScopeFlags.Error) !== 0,
    /* isDecl */ false,
    /* isSimpleParameterList */ (formalParameterList.flags & NodeFlags.NoneSimpleParamList) === 0,
    /* ignoreMissingOpenBrace */ false,
    /* firstRestricted */ firstRestricted
  );

  parser.assignable = false;

  return createFunctionExpression(
    asyncToken,
    functionToken,
    generatorToken,
    name,
    formalParameterList,
    contents,
    typeParameters,
    returnType,
    NodeFlags.ExpressionNode,
    pos,
    parser.curPos
  );
}

function parseFunctionDeclaration(
  parser: ParserState,
  context: Context,
  scope: ScopeState,
  declareKeyword: SyntaxToken<TokenSyntaxKind> | null,
  functionFlags: ParseFunctionFlag
): FunctionDeclaration | LabelledStatement | ExpressionStatement {
  const pos = parser.curPos;
  const asyncToken = consumeOptToken(parser, context, SyntaxKind.AsyncKeyword);
  if (asyncToken) {
    if (parser.token !== SyntaxKind.FunctionKeyword || parser.nodeFlags & NodeFlags.NewLine) {
      const flags = parser.nodeFlags;
      if ((flags & NodeFlags.NewLine) === 0) {
        let expression!: ExpressionNode;
        // "async x => {}"
        if (parser.token & (SyntaxKind.IsIdentifier | SyntaxKind.IsFutureReserved)) {
          if (functionFlags & ParseFunctionFlag.DisallowAsyncArrow) {
            parser.onError(
              DiagnosticSource.Parser,
              DiagnosticKind.Error,
              diagnosticMap[DiagnosticCode.An_async_arrow_without_the_default_modifier_can_not_be_exported],
              parser.curPos,
              parser.pos
            );
          }

          if (asyncToken.flags & 0b00000000000000000110000000000000) {
            parser.onError(
              DiagnosticSource.Parser,
              DiagnosticKind.Error,
              diagnosticMap[DiagnosticCode._async_keyword_in_an_async_arrow_must_not_contain_escaped_characters],
              parser.curPos,
              parser.pos
            );
          } else if (context & Context.Strict && parser.token & SyntaxKind.IsFutureReserved) {
            parser.onError(
              DiagnosticSource.Parser,
              DiagnosticKind.Error,
              diagnosticMap[DiagnosticCode.Identifier_expected_Reserved_word_in_strict_mode],
              parser.curPos,
              parser.pos
            );
          }
          if (parser.token === SyntaxKind.AwaitKeyword) {
            parser.onError(
              DiagnosticSource.Parser,
              DiagnosticKind.Error,
              diagnosticMap[DiagnosticCode.Parameter_await_for_async_arrow_not_allowed_here],
              parser.curPos,
              parser.pos
            );
          }

          scope = createParentScope(createScope(), ScopeKind.ArrowParams);

          addBlockName(parser, context, scope, parser.tokenValue, BindingType.ArgumentList);

          expression = parseArrowFunction(
            parser,
            context,
            scope,
            /* typeParameters */ null,
            /* returnType */ null,
            /* params */ parseIdentifier(parser, context),
            /* asyncToken */ asyncToken,
            /* nodeFlags */ NodeFlags.Async,
            /* pos */ pos
          );
          expression = parseCommaOperator(parser, context, expression, pos);
          return parseExpressionStatement(parser, context, expression, pos);
        }
      }

      let expression = createIdentifier(/* text */ 'async', /* rawText */ 'async', pos, parser.curPos);

      // "async()"
      // "async () => {}"
      // "async<T>()"
      // "async <T>() => {}"
      if (parser.token & SyntaxKind.IsLessThanOrLeftParen) {
        if (functionFlags & ParseFunctionFlag.DisallowAsyncArrow) {
          parser.onError(
            DiagnosticSource.Parser,
            DiagnosticKind.Error,
            diagnosticMap[DiagnosticCode.An_async_arrow_without_the_default_modifier_can_not_be_exported],
            parser.curPos,
            parser.pos
          );
        }
        return parseCoverCallExpressionAndAsyncArrowHead(
          parser,
          context,
          expression,
          LeftHandSide.None,
          flags,
          pos
        ) as any;
      }

      if (parser.token === SyntaxKind.Colon) {
        return parseLabelledStatement(
          parser,
          context,
          expression,
          SyntaxKind.AsyncKeyword,
          NodeFlags.IsStatement,
          /* allowFunction */ true,
          scope,
          pos
        );
      }

      // "async => {}"
      if (parser.token === SyntaxKind.Arrow) {
        expression = parseArrowFunction(
          parser,
          context,
          scope,
          /* typeParameters */ null,
          /* returnType */ null,
          /* params */ expression,
          /* asyncToken */ asyncToken,
          /* nodeFlags */ NodeFlags.Async,
          /* pos */ pos
        ) as any;
      }

      // "async"
      // "async + 1"
      parser.assignable = true;
      return parseExpressionStatement(parser, context, parseExpressionRest(parser, context, expression, pos), pos);
    }

    if (asyncToken.flags & 0b00000000000000000110000000000000) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.Keywords_cannot_contain_escape_characters],
        parser.curPos,
        parser.pos
      );
    }
  }

  const functionToken = consumeToken(parser, context, SyntaxKind.FunctionKeyword);
  const generatorToken = consumeOptToken(parser, context, SyntaxKind.Multiply);

  if (functionFlags & ParseFunctionFlag.DisallowGenerator && generatorToken) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Generators_can_only_be_declared_at_the_top_level_or_inside_a_block],
      parser.curPos,
      parser.pos
    );
  }

  let name = null;
  // Create a new function scope
  let innerScope = createScope();
  const firstRestricted = parser.token;

  parser.diagnosticStartPos = parser.curPos;

  if (parser.token & (SyntaxKind.IsIdentifier | SyntaxKind.IsFutureReserved)) {
    if (context & Context.Strict) {
      if (
        (parser.token as SyntaxKind) === SyntaxKind.EvalIdentifier ||
        (parser.token as SyntaxKind) === SyntaxKind.ArgumentsIdentifier
      ) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.Keywords_cannot_contain_escape_characters],
          parser.curPos,
          parser.pos
        );
      }
    }

    if (context & (Context.AwaitContext | Context.Module) && parser.token === SyntaxKind.AwaitKeyword) {
      parser.previousErrorPos = parser.pos;
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[
          generatorToken
            ? DiagnosticCode.Cannot_use_await_as_a_name_on_a_async_generator_declaration
            : DiagnosticCode.Cannot_use_await_as_a_name_on_a_async_function_declaration
        ],
        parser.curPos,
        parser.pos
      );
    }

    if (context & (Context.YieldContext | Context.Strict) && parser.token === SyntaxKind.YieldKeyword) {
      parser.previousErrorPos = parser.pos;
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[
          generatorToken
            ? DiagnosticCode.Cannot_use_yield_as_a_name_on_a_generator_declaration
            : DiagnosticCode.Cannot_use_yield_as_a_name_on_a_async_generator_declaration
        ],
        parser.curPos,
        parser.pos
      );
    }

    if (context & (Context.InBlock | Context.Module)) {
      addBlockName(parser, context, scope, parser.tokenValue, BindingType.FunctionLexical);
    } else {
      addVarName(parser, context, scope, parser.tokenValue, BindingType.Var);
    }

    innerScope = createParentScope(innerScope, ScopeKind.FunctionRoot);
    name = parseIdentifierReference(parser, context, DiagnosticCode.Binding_identifier_expected);
  } else if ((functionFlags & ParseFunctionFlag.IsDefaultModifier) === 0) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Binding_identifier_expected],
      parser.curPos,
      parser.pos
    );
  }

  const typeParameters = parseTypeParameterDeclaration(parser, context);

  context =
    ((context | 0b00001001100000110100011010001000) ^ 0b00001001100000110100011010001000) |
    (asyncToken ? 0b00000000000000000000010000001000 : Context.None) |
    (generatorToken ? Context.YieldContext : Context.None);

  innerScope = createParentScope(innerScope, ScopeKind.FunctionParams);

  const formalParameterList = parseFormalParameterList(parser, context | Context.Parameters, innerScope);

  let returnType = null;

  if (
    declareKeyword
      ? consume(
          parser,
          context | Context.AllowRegExp,
          SyntaxKind.Colon,
          DiagnosticCode.An_implementation_cannot_be_declared_in_ambient_contexts
        )
      : consumeOpt(parser, context | Context.AllowRegExp, SyntaxKind.Colon)
  ) {
    returnType = createTypeAnnotation(parseType(parser, context), pos, parser.curPos);
  }

  const contents =
    parser.token === SyntaxKind.LeftBrace
      ? parseFunctionBody(
          parser,
          context | Context.NewTarget | Context.IsOutsideFnOrArrow,
          innerScope,
          /* scopeError*/ (innerScope.flags & ScopeFlags.Error) !== 0,
          /* isDecl */ declareKeyword ? true : false,
          /* isSimpleParameterList */ (formalParameterList.flags & NodeFlags.NoneSimpleParamList) === 0,
          /* ignoreMissingOpenBrace */ false,
          /* firstRestricted */ firstRestricted
        )
      : !declareKeyword
      ? parseFunctionBody(
          parser,
          context | Context.NewTarget | Context.IsOutsideFnOrArrow,
          innerScope,
          /* scopeError*/ (innerScope.flags & ScopeFlags.Error) !== 0,
          /* isDecl */ declareKeyword ? true : false,
          /* isSimpleParameterList */ (formalParameterList.flags & NodeFlags.NoneSimpleParamList) === 0,
          /* ignoreMissingOpenBrace */ false,
          /* firstRestricted */ firstRestricted
        )
      : null;

  parser.assignable = false;

  return createFunctionDeclaration(
    declareKeyword,
    asyncToken,
    functionToken,
    generatorToken,
    name,
    formalParameterList,
    contents as any,
    typeParameters,
    returnType,
    NodeFlags.IsStatement,
    pos,
    parser.curPos
  );
}

function parseFunctionBody(
  parser: ParserState,
  context: Context,
  scope: ScopeState,
  scopeError: boolean,
  isDecl: boolean,
  isSimpleParameterList: boolean,
  ignoreMissingOpenBrace: boolean,
  firstRestricted: SyntaxKind | null
): FunctionBody {
  const pos = parser.curPos;
  if (
    ignoreMissingOpenBrace ||
    consume(parser, context | Context.AllowRegExp, SyntaxKind.LeftBrace, DiagnosticCode.Missing_an_opening_brace)
  ) {
    const statementList = parseFunctionStatementList(
      parser,
      (context | 0b00000000000000000101100000000000) ^ 0b00000000000000000101100000000000,
      {
        kind: ScopeKind.FunctionBody,
        scope,
        flags: ScopeFlags.None
      },
      scopeError,
      isSimpleParameterList,
      firstRestricted
    );
    consume(
      parser,
      isDecl ? context | Context.AllowRegExp : context,
      SyntaxKind.RightBrace,
      DiagnosticCode.The_parser_expected_to_find_a_to_match_the_token_here
    );
    return createFunctionBody(statementList, pos, parser.curPos);
  }

  parser.onError(
    DiagnosticSource.Parser,
    DiagnosticKind.Error,
    diagnosticMap[DiagnosticCode.Expression_expected],
    parser.curPos,
    parser.pos
  );

  // Empty list
  return createFunctionBody(createFunctionStatementList([], [], NodeFlags.ExpressionNode, pos, pos), pos, pos);
}

function parseFunctionStatementList(
  parser: ParserState,
  context: Context,
  scope: ScopeState,
  scopeError: boolean,
  isSimpleParameterList: boolean,
  firstRestricted: SyntaxKind | null
): FunctionStatementList {
  const pos = parser.curPos;
  const statements = [];
  const directives = [];
  const flags = parser.nodeFlags;
  const isNotPreviousStrict = (context & Context.Strict) === 0;

  while (parser.token === SyntaxKind.StringLiteral) {
    const start = parser.curPos;
    const expr = parseStringLiteral(parser, context);
    if (isValidDirective(parser) && expr.rawText.length === 12 && expr.text === 'use strict') {
      if (firstRestricted) {
        if (firstRestricted & SyntaxKind.IsFutureReserved) {
          parser.onError(
            DiagnosticSource.Parser,
            DiagnosticKind.Error,
            diagnosticMap[DiagnosticCode.Identifier_expected_Reserved_word_in_strict_mode],
            parser.diagnosticStartPos,
            pos
          );
        }
        if (
          (firstRestricted as SyntaxKind) === SyntaxKind.EvalIdentifier ||
          (firstRestricted as SyntaxKind) === SyntaxKind.ArgumentsIdentifier
        ) {
          parser.onError(
            DiagnosticSource.Parser,
            DiagnosticKind.Error,
            diagnosticMap[
              flags & 0b00000000000000000110000000000000
                ? DiagnosticCode._eval_and_arguments_cannot_contain_escape_characters
                : DiagnosticCode._eval_and_arguments_cannot_be_used_as_an_identifier_here
            ],
            parser.diagnosticStartPos,
            pos
          );
        }
      }
      if (!isSimpleParameterList) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode._use_strict_directive_cannot_be_used_with_non_simple_parameter_list],
          parser.diagnosticStartPos,
          parser.pos
        );
      }
      context |= Context.Strict;
      parseSemicolon(parser, context);
      directives.push(expr);
    } else {
      statements.push(
        parseExpressionStatement(parser, context, parseExpressionRest(parser, context, expr, start), start)
      );
    }
  }

  if (context & Context.Strict) {
    if (isNotPreviousStrict && scopeError) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.A_formal_parameter_cannot_be_bound_multiple_times_in_the_same_parameter_list],
        parser.diagnosticStartPos,
        parser.pos
      );
    }
  }

  //scope = createParentScope(scope, ScopeKind.FunctionBody);
  while (parser.token & 0b00010000100000011110000000000000) {
    statements.push(parseStatementListItem(parser, context, scope));
  }
  return createFunctionStatementList(directives, statements, flags | NodeFlags.ExpressionNode, pos, parser.curPos);
}

function parseFormalParameterList(parser: ParserState, context: Context, scope: ScopeState): FormalParameterList {
  const parameters = [];
  context = (context | 0b00000000100000000000000010000000) ^ 0b00000000100000000000000010000000;
  let nodeFlags = NodeFlags.ExpressionNode;
  const curpPos = parser.curPos;
  const openingParenExists = consume(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.LeftParen,
    DiagnosticCode.Missing_an_opening_parentheses
  );
  if (openingParenExists) {
    let trailingComma = false;
    while (parser.token & 0b00010000100010000100000000000000) {
      const param = parseFormalParameter(parser, context, scope);
      nodeFlags |= param.flags;
      parameters.push(param);
      if ((parser.token as SyntaxKind) === SyntaxKind.RightParen) break;
      consume(parser, context | Context.AllowRegExp, SyntaxKind.Comma, DiagnosticCode._expected);
      if ((parser.token as SyntaxKind) === SyntaxKind.RightParen) {
        trailingComma = true;
        break;
      }
    }

    if (nodeFlags & NodeFlags.NoneSimpleParamList || context & Context.Strict) {
      if (scope.flags & ScopeFlags.Error) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.A_formal_parameter_cannot_be_bound_multiple_times_in_the_same_parameter_list],
          parser.diagnosticStartPos,
          parser.pos
        );
      }
    }

    const result = createFormalParameterList(parameters, trailingComma, nodeFlags, curpPos, parser.pos);
    consume(
      parser,
      context,
      SyntaxKind.RightParen,
      openingParenExists ? DiagnosticCode.Expected_a_to_match_the_token_here : DiagnosticCode.Expression_expected
    );
    return result;
  }
  // Empty list
  return createFormalParameterList([], /* trailingComma*/ false, nodeFlags, curpPos, curpPos);
}

function parseFormalParameter(parser: ParserState, context: Context, scope: ScopeState): FormalParameter {
  const pos = parser.curPos;
  let nodeflags = NodeFlags.ExpressionNode;
  const token = parser.token;
  const ellipsisToken = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.Ellipsis);
  const binding = parseIdentifierOrPattern(
    parser,
    context,
    scope,
    ellipsisToken ? BindingType.None : BindingType.ArgumentList
  );

  if (ellipsisToken) {
    nodeflags |= NodeFlags.NoneSimpleParamList;
    parser.diagnosticStartPos = pos;
    if (parser.token === SyntaxKind.Comma) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.A_rest_parameter_must_be_last_in_a_parameter_list],
        parser.curPos,
        parser.pos
      );
    }
  }
  const optionalToken = consumeOptToken(parser, context, SyntaxKind.QuestionMark);

  if (context & Context.OptionsAllowTypes && token === SyntaxKind.ThisKeyword) {
    if (optionalToken) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.The_this_parameter_cannot_be_optional],
        parser.curPos,
        parser.pos
      );
    }
    if (parser.token !== SyntaxKind.Colon) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.A_type_annotation_is_required_for_the_this_parameter],
        parser.curPos,
        parser.pos
      );
    }
  }

  const type = parseTypeAnnotation(parser, context);
  const initializer = parseInitializer(parser, context, ellipsisToken ? true : false);

  if (binding.kind !== SyntaxKind.Identifier || initializer) {
    nodeflags |= NodeFlags.NoneSimpleParamList;
    parser.diagnosticStartPos = pos;
  }

  return createFormalParameter(ellipsisToken, binding, optionalToken, type, initializer, nodeflags, pos, parser.curPos);
}

// ImportDeclaration :
//   `import` ImportClause FromClause `;`
//   `import` ModuleSpecifier `;`
function parseImportDeclaration(
  parser: ParserState,
  context: Context,
  scope: ScopeState,
  isScript: boolean
): ImportDeclaration | ExpressionStatement {
  let moduleSpecifier = null;
  let importClause = null;
  let fromClause: FromClause | null = null;
  const pos = parser.curPos;
  const importToken = consumeKeywordAndCheckForEscapeSequence(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.ImportKeyword,
    pos
  );

  if (parser.token === SyntaxKind.StringLiteral) {
    moduleSpecifier = parseStringLiteral(parser, context);
  } else if (
    parser.token & (SyntaxKind.IsFutureReserved | SyntaxKind.IsIdentifier) || // import id
    parser.token === SyntaxKind.Multiply || // import *
    parser.token === SyntaxKind.LeftBrace // import {
  ) {
    let defaultBinding: Identifier | null = null;
    let namespace: NameSpaceImport | null = null;
    let namedImports: NamedImports | null = null;
    let isCommaSeparated = true;

    if (parser.token & (SyntaxKind.IsFutureReserved | SyntaxKind.IsIdentifier)) {
      defaultBinding = parseIdentifier(parser, context, DiagnosticCode.Binding_identifier_expected) as Identifier;
      isCommaSeparated = !consumeOpt(parser, context, SyntaxKind.Comma);
    }
    if (parser.token === SyntaxKind.Multiply) {
      namespace = parseNameSpaceImport(parser, context, scope);
    } else if (parser.token === SyntaxKind.LeftBrace) {
      namedImports = parseNamedImports(parser, context, scope);
    } else if (!isCommaSeparated) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.Unexpected_token],
        parser.curPos,
        parser.pos
      );
    }

    importClause = createImportClause(defaultBinding, namespace, namedImports, pos, parser.curPos);
    fromClause = parseFromClause(parser, context);
  } else if (parser.token === SyntaxKind.LeftParen) {
    return parseImportCall(parser, context, importToken);
  } else if (parser.token === SyntaxKind.Period) {
    return parseImportMeta(parser, context, importToken);
  } else {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Unexpected_token],
      parser.curPos,
      parser.pos
    );
  }
  if (isScript) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.The_import_keyword_can_only_be_used_with_the_module_goal],
      parser.curPos,
      parser.pos
    );
  }
  parseSemicolon(parser, context);
  return createImportDeclaration(importToken, fromClause as any, moduleSpecifier, importClause, pos, parser.curPos);
}

// NameSpaceImport :
//   `*` `as` ImportedBinding
function parseNameSpaceImport(parser: ParserState, context: Context, scope: ScopeState): NameSpaceImport {
  const pos = parser.curPos;
  const asteriskToken = consumeToken(parser, context, SyntaxKind.Multiply);
  const asKeyword = consumeToken(parser, context, SyntaxKind.AsKeyword);
  return createNameSpaceImport(
    asteriskToken,
    asKeyword,
    parseBindingIdentifier(parser, context, scope, BindingType.Let, DiagnosticCode.Identifier_expected),
    pos,
    parser.curPos
  );
}

// NamedImports :
//   `{` `}`
//   `{` ImportsList `}`
//   `{` ImportsList `,` `}`
function parseNamedImports(parser: ParserState, context: Context, scope: ScopeState): NamedImports {
  const pos = parser.curPos;
  consume(parser, context, SyntaxKind.LeftBrace);
  const importsList = parseImportsList(parser, context, scope);
  consume(parser, context, SyntaxKind.RightBrace, DiagnosticCode.The_parser_expected_to_find_a_to_match_the_token_here);
  return createNamedImports(importsList, pos, parser.curPos);
}

function parseImportsList(parser: ParserState, context: Context, scope: ScopeState): ImportsList {
  const pos = parser.curPos;
  const specifiers = [];

  while (parser.token === SyntaxKind.StringLiteral) {
    const moduleExportName = parseModuleExportName(parser, context);
    const asKeyword = consumeOptToken(parser, context, SyntaxKind.AsKeyword);
    const importedBinding = parseIdentifier(parser, context, DiagnosticCode.Binding_identifier_expected);
    specifiers.push(
      createImportSpecifier(moduleExportName, null, asKeyword, importedBinding as Identifier, pos, parser.curPos)
    );
  }

  while (parser.token & (SyntaxKind.IsIdentifier | SyntaxKind.IsKeyword | SyntaxKind.IsFutureReserved)) {
    specifiers.push(parseImportSpecifier(parser, context, scope));
    if (parser.token === SyntaxKind.RightBrace) break;
    consume(parser, context, SyntaxKind.Comma);
  }
  return createImportsList(specifiers, parser.nodeFlags, pos, parser.curPos);
}

// ImportSpecifier :
//   ImportedBinding
//   Identifier `as` ImportedBinding
function parseImportSpecifier(parser: ParserState, context: Context, scope: ScopeState): ImportSpecifier {
  const pos = parser.curPos;
  const token = parser.token;
  const tokenValue = parser.tokenValue;
  const flags = parser.nodeFlags;
  const Identifier = parseIdentifier(parser, context, DiagnosticCode.Identifier_expected, /* allowKeywords */ true);
  const asKeyword = consumeOptToken(parser, context, SyntaxKind.AsKeyword);

  if (asKeyword) {
    return createImportSpecifier(
      null,
      Identifier as Identifier,
      asKeyword,
      parseBindingIdentifier(
        parser,
        context,
        scope,
        BindingType.Let,
        DiagnosticCode.Binding_identifier_expected,
        /* allowKeywords */ true
      ),
      pos,
      parser.curPos
    );
  }
  if (token === SyntaxKind.EvalIdentifier || token === SyntaxKind.ArgumentsIdentifier) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[
        flags & 0b00000000000000000110000000000000
          ? DiagnosticCode._eval_and_arguments_cannot_contain_escape_characters
          : DiagnosticCode._eval_and_arguments_cannot_be_used_as_an_identifier_here
      ],
      parser.curPos,
      parser.pos
    );
  }

  if (token & SyntaxKind.IsFutureReserved) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Identifier_expected_Reserved_word_in_strict_mode],
      parser.curPos,
      parser.pos
    );
  }
  addVarOrBlock(parser, context, scope, tokenValue, BindingType.Let);

  return createImportSpecifier(asKeyword, null, null, Identifier as Identifier, pos, parser.curPos);
}

// ModulemoduleExportName : StringLiteral
function parseModuleExportName(parser: ParserState, context: Context): StringLiteral {
  return parseStringLiteral(parser, context);
}

// FromClause :
//   `from` ModuleSpecifier
function parseFromClause(parser: ParserState, context: Context): FromClause {
  const { curPos, nodeFlags } = parser;
  const fromKeyword = consumeToken(parser, context, SyntaxKind.FromKeyword);
  return createFromClause(
    fromKeyword,
    parser.token === SyntaxKind.StringLiteral
      ? parseStringLiteral(parser, context)
      : // We allow arbitrary expressions here due to error recovery, even though the grammar only allows string
        // literals.
        parseExpression(parser, context),
    nodeFlags,
    curPos,
    parser.curPos
  );
}

// ExportDeclaration :
//   `export` ExportFromClause FromClause `;`
//   `export` NamedExports `;`
//   `export` VariableStatement
//   `export` Declaration
//   `export` `default` HoistableDeclaration [MODIFIED]
//   `export` `default` ClassDeclaration  [MODIFIED]
//   `export` `default` AssignmentExpression `;`  [MODIFIED]
//
//   NamedExports
function parseExportDeclaration(
  parser: ParserState,
  context: Context,
  scope: ScopeState
): ExportDeclaration | ExportDefault | LabelledStatement | ExpressionStatement {
  const pos = parser.curPos;
  const exportToken = consumeKeywordAndCheckForEscapeSequence(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.ExportKeyword,
    pos
  );
  let declaration: any = null;
  let fromClause: FromClause | null = null;
  let namedExports: NamedExports | null = null;
  let exportFromClause: any | null = null;
  let exportKind = ExportKind.Type;

  switch (parser.token) {
    case SyntaxKind.DefaultKeyword:
      return parseExportDefault(parser, context, scope, exportToken, pos);
    case SyntaxKind.LeftBrace: {
      namedExports = parseNamedExports(parser, context);
      if ((parser.token as SyntaxKind) === SyntaxKind.FromKeyword) fromClause = parseFromClause(parser, context);
      parseSemicolon(parser, context);
      break;
    }
    case SyntaxKind.Multiply: {
      exportFromClause = parseExportFromClause(parser, context, pos);
      fromClause = parseFromClause(parser, context);
      parseSemicolon(parser, context);
      break;
    }
    case SyntaxKind.Decorator:
    case SyntaxKind.ClassKeyword:
      declaration = parseClassDeclaration(
        parser,
        context,
        scope,
        /* declareKeyword */ null,
        /* isDefaultModifier */ false
      );
      break;
    case SyntaxKind.AsyncKeyword:
    case SyntaxKind.FunctionKeyword:
      declaration = parseFunctionDeclaration(
        parser,
        context,
        scope,
        null,
        ParseFunctionFlag.DisallowGenerator | ParseFunctionFlag.DisallowAsyncArrow
      );
      break;
    case SyntaxKind.ConstKeyword:
      declaration = parseLexicalDeclaration(
        parser,
        context,
        SyntaxKind.ConstKeyword,
        NodeFlags.Const,
        scope,
        BindingType.Const
      );
      break;
    case SyntaxKind.LetKeyword:
      declaration = parseLetAsIdentifierOrLexicalDeclaration(parser, context, scope);
      break;
    case SyntaxKind.VarKeyword:
      declaration = parseVariableStatement(parser, context, null, scope, BindingType.Var | BindingType.Export);
      break;
    case SyntaxKind.TypeKeyword:
      const typeAlias = parseTypeAsIdentifierOrTypeAlias(parser, context, null, scope);
      if (typeAlias.kind !== SyntaxKind.OpaqueType) {
        parser.previousErrorPos = parser.pos;
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.Declaration_or_statement_expected],
          parser.curPos,
          parser.pos
        );
      }
      declaration = typeAlias;
      break;
    case SyntaxKind.OpaqueKeyword:
      const opaqueType = parseOpaqueType(parser, context, null, scope);
      if (opaqueType.kind === SyntaxKind.OpaqueType) {
        declaration = opaqueType;
        break;
      }
    default:
      parser.previousErrorPos = parser.pos;
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.Declaration_or_statement_expected],
        parser.curPos,
        parser.pos
      );
  }

  return createExportDeclaration(
    exportToken,
    declaration,
    namedExports,
    fromClause as any,
    exportFromClause,
    exportKind,
    pos,
    parser.curPos
  );
}

// ExportFromClause :
//   `*`
//   `*` as Identifier
//   `*` as ModulemoduleExportName
function parseExportFromClause(parser: ParserState, context: Context, pos: number): ExportFromClause {
  const asteriskToken = consumeToken(parser, context, SyntaxKind.Multiply);
  let moduleExportName: StringLiteral | null = null;
  let namedBinding: Identifier | DummyIdentifier | null = null;
  const flags = parser.nodeFlags;
  const asKeyword = consumeOptToken(parser, context, SyntaxKind.AsKeyword);
  if (asKeyword) {
    if (parser.token === SyntaxKind.StringLiteral) {
      moduleExportName = parseModuleExportName(parser, context);
    } else {
      namedBinding = parseIdentifier(parser, context, DiagnosticCode.Identifier_expected);
    }
  }
  return createExportFromClause(
    asteriskToken,
    asKeyword,
    namedBinding as Identifier,
    moduleExportName,
    flags,
    pos,
    parser.curPos
  );
}

// NamedExports :
//   `{` `}`
//   `{` ExportsList `}`
//   `{` ExportsList `,` `}`
function parseNamedExports(parser: ParserState, context: Context): NamedExports {
  const pos = parser.curPos;
  consume(parser, context, SyntaxKind.LeftBrace);
  const exportsList = parseExportsList(parser, context);
  consume(parser, context, SyntaxKind.RightBrace, DiagnosticCode.The_parser_expected_to_find_a_to_match_the_token_here);
  return createNamedExports(exportsList, parser.nodeFlags, pos, parser.curPos);
}

function parseExportsList(parser: ParserState, context: Context): ExportsList {
  const pos = parser.curPos;
  const specifiers = [];
  while (parser.token & (SyntaxKind.IsIdentifier | SyntaxKind.IsKeyword | SyntaxKind.IsFutureReserved)) {
    specifiers.push(parseExportSpecifier(parser, context));
    if (parser.token === SyntaxKind.RightBrace) break;
    consume(parser, context, SyntaxKind.Comma);
  }
  return createExportsList(specifiers, pos, parser.curPos);
}

// ExportSpecifier :
//   Identifier
//   Identifier `as` Identifier
//   Identifier `as` ModuleExportName
//   ModuleExportName
//   ModuleExportName `as` ModuleExportName
//   ModuleExportName `as` Identifier
function parseExportSpecifier(parser: ParserState, context: Context): ExportSpecifier {
  const pos = parser.curPos;

  let moduleExportName: StringLiteral | null = null;

  const localName =
    parser.token === SyntaxKind.StringLiteral
      ? parseModuleExportName(parser, context)
      : parseIdentifier(parser, context, DiagnosticCode.Identifier_expected, /* allowKeywords */ true);

  let exportedName = null;

  const asKeyword = consumeOptToken(parser, context, SyntaxKind.AsKeyword);

  if (asKeyword) {
    if (parser.token === SyntaxKind.StringLiteral) {
      moduleExportName = parseModuleExportName(parser, context);
    } else {
      exportedName = parseIdentifier(parser, context);
    }
  }
  return createExportSpecifier(moduleExportName, localName, asKeyword, exportedName, pos, parser.curPos);
}

// ExportDefault :
//   `export` `default` HoistableDeclaration [EXTENDED]
//   `export` `default` ClassDeclaration  [EXTENDED]
//   `export` `default` AssignmentExpression `;`  [EXTENDED]
function parseExportDefault(
  parser: ParserState,
  context: Context,
  scope: ScopeState,
  exportToken: SyntaxToken<TokenSyntaxKind>,
  pos: number
): ExportDefault | ExpressionStatement | LabelledStatement {
  const defaultToken = consumeKeywordAndCheckForEscapeSequence(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.DefaultKeyword,
    pos
  );
  let declaration!: StatementNode | ExpressionNode | any;

  switch (parser.token) {
    case SyntaxKind.AsyncKeyword:
    case SyntaxKind.FunctionKeyword:
      declaration = parseFunctionDeclaration(
        parser,
        context,
        scope,
        /* declareKeyword */ null,
        ParseFunctionFlag.IsDefaultModifier
      );
      break;
    case SyntaxKind.Decorator:
    case SyntaxKind.ClassKeyword:
      declaration = parseClassDeclaration(
        parser,
        context,
        scope,
        /* declareKeyword */ null,
        /* isDefaultModifier */ true
      );
      break;
    default:
      // export default {};
      // export default [];
      // export default (1 + 2);
      declaration = parseExpression(parser, context);
      parseSemicolon(parser, context);
  }
  return createExportDefault(exportToken, defaultToken, declaration, pos, parser.curPos);
}

function parseType(parser: ParserState, context: Context): TypeNode {
  return parseUnionType(parser, context);
}

function parseTypeAnnotation(parser: ParserState, context: Context): TypeAnnotation | null {
  const pos = parser.curPos;
  return context & Context.OptionsAllowTypes && consumeOpt(parser, context, SyntaxKind.Colon)
    ? createTypeAnnotation(parseType(parser, context), pos, parser.curPos)
    : null;
}

function parseUnionType(parser: ParserState, context: Context): TypeNode {
  consumeOpt(parser, context, SyntaxKind.BitwiseOr);
  const type = parseIntersectionType(parser, context);
  if (parser.token === SyntaxKind.BitwiseOr) {
    const pos = parser.curPos;
    const types = [type];
    while (consumeOpt(parser, context, SyntaxKind.BitwiseOr)) {
      types.push(parseIntersectionType(parser, context));
    }
    return createUnionType(types, pos, parser.curPos);
  }
  return type;
}

function parseIntersectionType(parser: ParserState, context: Context): TypeNode {
  consumeOpt(parser, context, SyntaxKind.BitwiseAnd);
  const type = parsePostfixType(parser, context);
  if (parser.token === SyntaxKind.BitwiseAnd) {
    const pos = parser.curPos;
    const types = [type];
    while (consumeOpt(parser, context, SyntaxKind.BitwiseAnd)) {
      types.push(parsePostfixType(parser, context));
    }
    return createIntersectionType(types, pos, parser.curPos);
  }
  return type;
}

function parsePostfixType(parser: ParserState, context: Context): TypeNode {
  if (parser.token === SyntaxKind.QuestionMark) {
    const pos = parser.curPos;
    return createNullableType(
      consumeOptToken(parser, context, SyntaxKind.QuestionMark),
      parsePostfixType(parser, context),
      pos,
      parser.curPos
    );
  }
  let type = parsePrimaryType(parser, context);
  while ((parser.nodeFlags & NodeFlags.NewLine) === 0 && consumeOpt(parser, context, SyntaxKind.LeftBracket)) {
    const pos = parser.curPos;
    if (parser.token & 0b00011000100000000100000000000000) {
      const indexType = parseType(parser, context);
      consume(parser, context, SyntaxKind.RightBracket, DiagnosticCode.Type_expected);
      type = createIndexedAccessType(type, indexType, parser.nodeFlags, pos, parser.pos);
    } else {
      consume(parser, context, SyntaxKind.RightBracket, DiagnosticCode.Type_expected);
      type = createArrayType(type, pos, parser.curPos);
    }
  }
  return type;
}

function parsePrimaryType(parser: ParserState, context: Context): TypeNode | SyntaxToken<TokenSyntaxKind> {
  switch (parser.token) {
    case SyntaxKind.Multiply:
    case SyntaxKind.BigIntLiteral:
    case SyntaxKind.ThisKeyword:
    case SyntaxKind.AnyKeyword:
    case SyntaxKind.NullKeyword:
    case SyntaxKind.UnknownKeyword:
    case SyntaxKind.UndefinedKeyword:
    case SyntaxKind.ObjectKeyword:
    case SyntaxKind.NeverKeyword:
    case SyntaxKind.VoidKeyword:
    case SyntaxKind.SymbolKeyword:
    case SyntaxKind.MixedKeyword:
    case SyntaxKind.NumberKeyword:
    case SyntaxKind.StringKeyword:
    case SyntaxKind.BooleanKeyword:
    case SyntaxKind.EmptyKeyword:
      return parseTokenNode(parser, context);
    case SyntaxKind.StringLiteral:
      return parseStringType(parser, context);
    case SyntaxKind.NumericLiteral:
      return parseNumberType(parser, context);
    case SyntaxKind.TrueKeyword:
      return parseBooleanType(parser, context, /* isTruthy */ true);
    case SyntaxKind.TrueKeyword:
      return parseBooleanType(parser, context, /* isTruthy */ false);
    case SyntaxKind.LeftBrace:
      return parseObjectType(parser, context, ObjectTypeFlag.None);
    case SyntaxKind.LeftBracket:
      return parseTupleType(parser, context);
    case SyntaxKind.LessThan:
    case SyntaxKind.LeftParen:
      return parseParenthesizedType(parser, context);
    case SyntaxKind.TypeofKeyword:
      return parseTypeofType(parser, context);
    case SyntaxKind.Subtract:
      return parseSubtractionType(parser, context);
    case SyntaxKind.QuestionMark:
    default:
      return parseTypeReference(parser, context);
  }
}

function parseSubtractionType(parser: ParserState, context: Context): SubtractionType | TypeReference {
  const pos = parser.curPos;
  const subtractionToken = consumeToken(parser, context, SyntaxKind.Subtract);
  if (parser.token === SyntaxKind.NumericLiteral) {
    const value = parser.tokenValue;
    nextToken(parser, context);
    return createSubtractionType(subtractionToken, value, pos, parser.curPos);
  }
  parser.onError(
    DiagnosticSource.Parser,
    DiagnosticKind.Error,
    diagnosticMap[DiagnosticCode.Expected_a_valid_subtraction_operand],
    parser.curPos,
    parser.pos
  );

  return createTypeReference(
    parseEntityName(parser, context, createDummyIdentifier(pos, parser.curPos), /*allowKeywords*/ true, pos),
    null,
    pos,
    parser.curPos
  );
}

function parseTypeofType(parser: ParserState, context: Context): TypeofType {
  const pos = parser.curPos;
  const typeofKeyword = consumeToken(parser, context, SyntaxKind.TypeofKeyword);
  return createTypeofType(typeofKeyword, parsePrimaryType(parser, context), pos, parser.curPos);
}

function parseStringType(parser: ParserState, context: Context): StringType {
  const pos = parser.curPos;
  const value = parser.tokenValue;
  nextToken(parser, context);
  return createStringType(value, pos, parser.curPos);
}

function parseNumberType(parser: ParserState, context: Context): NumberType {
  const pos = parser.curPos;
  const value = parser.tokenValue;
  nextToken(parser, context);
  return createNumberType(value, pos, parser.curPos);
}

function parseBooleanType(parser: ParserState, context: Context, isTruthy: boolean): BooleanType {
  const pos = parser.curPos;
  nextToken(parser, context);
  return createBooleanType(isTruthy ? true : false, pos, parser.curPos);
}

function parseTupleType(parser: ParserState, context: Context): TupleType {
  const pos = parser.curPos;
  let trailingComma = false;
  nextToken(parser, context);
  const flags = parser.nodeFlags;
  const elements: TypeNode[] = [];
  while (parser.token & 0b00111000100000000100000000000000) {
    elements.push(parseType(parser, context));
    if ((parser.token as SyntaxKind) === SyntaxKind.RightBracket) break;
    consume(parser, context | Context.AllowRegExp, SyntaxKind.Comma, DiagnosticCode._expected);
    if ((parser.token as SyntaxKind) === SyntaxKind.RightBracket) {
      trailingComma = true;
      break;
    }
  }
  consume(parser, context, SyntaxKind.RightBracket);

  return createTupleType(elements, trailingComma, flags, pos, parser.curPos);
}

function parseFunctionType(parser: ParserState, context: Context): FunctionType {
  const pos = parser.curPos;
  const typeParameters = parseTypeParameterDeclaration(parser, context);
  const openingParensExists = consume(
    parser,
    context,
    SyntaxKind.LeftParen,
    DiagnosticCode.Missing_an_opening_parentheses
  );
  const params = parseFunctionTypeParameters(parser, context);
  consume(
    parser,
    context,
    SyntaxKind.RightParen,
    openingParensExists ? DiagnosticCode.Expected_a_to_match_the_token_here : DiagnosticCode.Type_expected
  );
  consume(parser, context, SyntaxKind.Colon);
  const returnType = parseType(parser, context);
  return createFunctionType(params, returnType, typeParameters, pos, parser.curPos);
}

function parseFunctionTypeParameters(parser: ParserState, context: Context): FunctionTypeParameterList {
  const pos = parser.curPos;
  const functionTypeParameterList: FunctionTypeParameter[] = [];
  let trailingComma = false;
  while (
    parser.token &
    (SyntaxKind.IsEllipsis | SyntaxKind.IsFutureReserved | SyntaxKind.IsIdentifier | SyntaxKind.IsStartOfType)
  ) {
    functionTypeParameterList.push(parseFunctionTypeParameter(parser, context));
    if (parser.token === SyntaxKind.RightParen) break;
    if ((parser.token as SyntaxKind) === SyntaxKind.RightParen) break;
    if (consumeOpt(parser, context | Context.AllowRegExp, SyntaxKind.Comma)) {
      if ((parser.token as SyntaxKind) === SyntaxKind.RightParen) {
        trailingComma = true;
        break;
      }
      continue;
    }
  }
  return createFunctionTypeParameterList(functionTypeParameterList, trailingComma, pos, parser.curPos);
}

function parseFunctionTypeParameter(parser: ParserState, context: Context): FunctionTypeParameter {
  const pos = parser.curPos;
  if (
    speculate(
      parser,
      context,
      function () {
        if (parser.token === SyntaxKind.Ellipsis) {
          nextToken(parser, context);
        }
        nextToken(parser, context);

        if (parser.token === SyntaxKind.QuestionMark || parser.token === SyntaxKind.Colon) return true;
        return null;
      },
      /* rollback */ true
    )
  ) {
    const ellipsisToken = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.Ellipsis);
    const name = parseIdentifier(parser, context, DiagnosticCode.Type_expected);
    const optionalToken = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.QuestionMark);
    consume(parser, context, SyntaxKind.Colon, DiagnosticCode.Type_expected);
    const type = parseType(parser, context);
    return createFunctionTypeParameters(ellipsisToken, name as Identifier, optionalToken, type, pos, parser.curPos);
  }
  const ellipsisToken = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.Ellipsis);
  const type = parseType(parser, context);
  return createFunctionTypeParameters(ellipsisToken, null as any, /* optionalToken */ null, type, pos, parser.curPos);
}

function parseArrowFunctionType(
  parser: ParserState,
  context: Context,
  typeParameters: any,
  pos: number
): ArrowFunctionType {
  const params = parseFunctionTypeParameters(parser, context);
  consume(parser, context, SyntaxKind.RightParen, DiagnosticCode.Expected_a_to_match_the_token_here);
  return createArrowFunctionType(
    consumeOptToken(parser, context, SyntaxKind.Arrow),
    params,
    parseType(parser, context),
    typeParameters,
    pos,
    parser.curPos
  );
}

function parseParenthesizedType(parser: ParserState, context: Context): any {
  const pos = parser.curPos;

  const typeParameters = parseTypeParameterDeclaration(parser, context);

  nextToken(parser, context);

  if (parser.token === SyntaxKind.RightParen || parser.token === SyntaxKind.Ellipsis) {
    return parseArrowFunctionType(parser, context, typeParameters, pos);
  }

  let isGroupedType = false;

  if (parser.token & (SyntaxKind.IsFutureReserved | SyntaxKind.IsIdentifier)) {
    isGroupedType = speculate(
      parser,
      context,
      function () {
        nextToken(parser, context);
        return parser.token !== SyntaxKind.QuestionMark && parser.token !== SyntaxKind.Colon;
      },
      /* rollback */ true
    );
  } else {
    isGroupedType = true;
  }

  if (isGroupedType) {
    // '('
    if (parser.token === SyntaxKind.LeftParen) {
      nextToken(parser, context);
      let type: any;
      if (consumeOpt(parser, context, SyntaxKind.RightParen)) {
        type = createArrowFunctionType(
          consumeOptToken(parser, context, SyntaxKind.Arrow),
          [],
          parseType(parser, context),
          typeParameters,
          pos,
          parser.curPos
        );
      } else {
        type = parseType(parser, context);
        consume(parser, context, SyntaxKind.RightParen);

        const arrowToken = consumeOptToken(parser, context, SyntaxKind.Arrow);
        if (arrowToken) {
          type = createArrowFunctionType(
            arrowToken,
            [type],
            parseType(parser, context),
            typeParameters,
            pos,
            parser.curPos
          );
        }
      }

      consume(parser, context, SyntaxKind.RightParen);
      return createParenthesizedType(type, pos, parser.curPos);
    }

    const type = parseType(parser, context);

    if (consumeOpt(parser, context, SyntaxKind.RightParen)) {
      if (context & Context.InTypes || parser.token !== SyntaxKind.Arrow) {
        return createParenthesizedType(type, pos, parser.curPos);
      }
      return createArrowFunctionType(
        consumeOptToken(parser, context, SyntaxKind.Arrow),
        [type],
        parseType(parser, context),
        typeParameters,
        pos,
        parser.curPos
      );
    }

    if ((parser.token as SyntaxKind) === SyntaxKind.Comma) {
      const params: any = [type];
      nextToken(parser, context);
      let trailingComma = false;
      while (parser.token & (SyntaxKind.IsEllipsis | SyntaxKind.IsIdentifier)) {
        params.push(parseFunctionTypeParameter(parser, context));
        if ((parser.token as SyntaxKind) === SyntaxKind.RightParen) break;
        if (consumeOpt(parser, context | Context.AllowRegExp, SyntaxKind.Comma)) {
          if ((parser.token as SyntaxKind) === SyntaxKind.RightParen) {
            trailingComma = true;
            break;
          }
          continue;
        }
      }
      consume(parser, context, SyntaxKind.RightParen, DiagnosticCode.Expected_a_to_match_the_token_here);

      return createArrowFunctionType(
        consumeOptToken(parser, context, SyntaxKind.Arrow),
        params,
        parseType(parser, context),
        typeParameters,
        pos,
        parser.curPos
      );
    }

    consume(parser, context, SyntaxKind.RightParen, DiagnosticCode.Expected_a_to_match_the_token_here);

    return createParenthesizedType(type, pos, parser.curPos);
  }

  return parseArrowFunctionType(parser, context, typeParameters, pos);
}

function parseTypeReference(parser: ParserState, context: Context): TypeReference {
  const pos = parser.curPos;
  return createTypeReference(
    parseEntityName(
      parser,
      context,
      parseIdentifier(parser, context, DiagnosticCode.Type_expected, /*allowKeywords*/ true),
      /*allowKeywords*/ true,
      pos
    ),
    parseTypeParameterInstantiationList(parser, context | Context.InTypes),
    pos,
    parser.curPos
  );
}

function parseEntityName(parser: ParserState, context: Context, entity: any, allowKeywords: boolean, pos: number): any {
  while (consumeOpt(parser, context, SyntaxKind.Period)) {
    if (parser.token === SyntaxKind.LessThan) break;
    entity = createQualifiedType(
      entity,
      parseIdentifier(parser, context, DiagnosticCode.Type_expected, allowKeywords),
      pos,
      parser.curPos
    ) as any;
  }
  return entity;
}

function parseTypeParameterDeclaration(parser: ParserState, context: Context): TypeParameterDeclaration | null {
  const pos = parser.curPos;
  if (consumeOpt(parser, context, SyntaxKind.LessThan)) {
    const types = [];
    let requireDefault = false;
    while (parser.token & 0b00111000000000010100000000000000) {
      const type = parseTypeParameter(parser, context, requireDefault);
      types.push(type);
      if (type.defaultType) requireDefault = true;
      if (parser.token !== SyntaxKind.GreaterThan) {
        consume(parser, context, SyntaxKind.Comma);
      }
    }
    consume(parser, context, SyntaxKind.GreaterThan, DiagnosticCode.Expected_to_find_a_to_match_the_token_here);
    return createTypeParameterDeclaration(types, pos, parser.curPos);
  }
  return null;
}

function parseTypeParameterInstantiationList(
  parser: ParserState,
  context: Context
): TypeParameterInstantiationList | null {
  const pos = parser.curPos;
  if (consumeOpt(parser, context, SyntaxKind.LessThan)) {
    const types = [];
    while (parser.token & 0b00111000000000010100000000000000) {
      types.push(parseTypeParameterInstantiation(parser, context));
      if (parser.token !== SyntaxKind.GreaterThan) {
        consume(parser, context, SyntaxKind.Comma);
      }
    }
    consume(parser, context, SyntaxKind.GreaterThan, DiagnosticCode.Expected_to_find_a_to_match_the_token_here);
    return createTypeParameterInstantiationList(types, pos, parser.curPos);
  }
  return null;
}

function parseTypeParameterInstantiation(parser: ParserState, context: Context): TypeParameterInstantiation {
  const start = parser.curPos;
  const type = parseType(parser, context);
  return createTypeParameterInstantiation(type, start, parser.curPos);
}

function parseTypeParameter(parser: ParserState, context: Context, requireInitializer: boolean): TypeParameter {
  const start = parser.curPos;
  let name = parseIdentifier(parser, context);
  const type = parseTypeAnnotation(parser, context);
  const defaultType = consumeOpt(parser, context, SyntaxKind.Assign)
    ? parseType(parser, context | Context.InTypes)
    : null;
  if (requireInitializer && !defaultType && parser.previousErrorPos !== parser.pos) {
    parser.previousErrorPos = parser.pos;
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[
        DiagnosticCode
          .Type_parameter_declaration_needs_a_default_since_a_preceding_type_parameter_declaration_has_a_default
      ],
      parser.curPos,
      parser.pos
    );
  }
  return createTypeParameter(name, type, defaultType, start, parser.curPos);
}

// VariableStatement : `var` VariableDeclarationList `;`
function parseVariableStatement(
  parser: ParserState,
  context: Context,
  declareKeyword: SyntaxToken<TokenSyntaxKind> | null,
  scope: ScopeState,
  type: BindingType
): VariableStatement {
  const pos = parser.curPos;
  const varKeyword = consumeKeywordAndCheckForEscapeSequence(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.VarKeyword,
    pos
  );
  const declarationList = parseVariableDeclarationList(parser, context, /* inForStatement */ false, scope, type);
  parseSemicolon(parser, context);
  return createVariableStatement(
    declareKeyword,
    varKeyword,
    declarationList,
    declareKeyword ? NodeFlags.IsStatement | NodeFlags.Declared : NodeFlags.IsStatement,
    pos,
    parser.curPos
  );
}

// VariableDeclarationList :
//   VariableDeclaration
//   VariableDeclarationList `,` VariableDeclaration
function parseVariableDeclarationList(
  parser: ParserState,
  context: Context,
  inForStatement: boolean,
  scope: ScopeState,
  type: BindingType
): VariableDeclarationList {
  const pos = parser.curPos;
  const declarations = [];

  while (parser.token & (SyntaxKind.IsPatternStart | SyntaxKind.IsFutureReserved | SyntaxKind.IsIdentifier)) {
    declarations.push(parseVariableDeclaration(parser, context, inForStatement, scope, type));
    // If we can consume a semicolon (either explicitly, or with ASI), then consider us done
    // with parsing the list of variable declarators.
    //
    // Same when we're parsing the variable declarator of a 'for-in' statement, we
    // are done if we see an 'in' keyword in front of us. Same with for-of
    if (parser.token & (SyntaxKind.Smi | SyntaxKind.IsInOrOf) || parser.nodeFlags & NodeFlags.NewLine) break;
    if (consumeOpt(parser, context, SyntaxKind.Comma)) {
      if ((parser.token & (SyntaxKind.IsPatternStart | SyntaxKind.IsFutureReserved | SyntaxKind.IsIdentifier)) === 0) {
        parser.previousErrorPos = parser.pos;
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.Trailing_comma_not_allowed],
          parser.curPos,
          parser.pos
        );
      }
      continue;
    }

    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[
        parser.token & SyntaxKind.IsKeyword ? DiagnosticCode.Variable_declaration_expected : DiagnosticCode._expected
      ],
      parser.curPos,
      parser.pos
    );
  }
  if (inForStatement && declarations.length > 1 && parser.token & SyntaxKind.IsInOrOf) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Only_a_single_variable_declaration_is_allowed_in_a_for_of_statement],
      parser.curPos,
      parser.pos
    );
  }

  return createVariableDeclarationList(declarations, pos, parser.curPos);
}

// Initializer : `=` AssignmentExpression
function parseInitializer(parser: ParserState, context: Context, disallowEllipsis: boolean): ExpressionNode | null {
  if (consumeOpt(parser, context | Context.AllowRegExp, SyntaxKind.Assign)) {
    if (disallowEllipsis) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.A_rest_element_cannot_have_an_initializer],
        parser.curPos,
        parser.pos
      );
    }
    const expression = parseExpression(parser, context);
    return expression;
  }
  return null;
}

// VariableDeclaration :
//   BindingIdentifier Initializer?
//   BindingPattern Initializer
function parseVariableDeclaration(
  parser: ParserState,
  context: Context,
  inForStatement: boolean,
  scope: ScopeState,
  type: BindingType
): VariableDeclaration {
  const pos = parser.curPos;
  const requireInitializer = !inForStatement && parser.token & SyntaxKind.IsPatternStart;
  const binding = parseIdentifierOrPattern(parser, context, scope, type, DiagnosticCode.Variable_declaration_expected);
  const optionalToken = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.QuestionMark);
  const typeAnnotation = parseTypeAnnotation(parser, context);
  let initializer = null;

  if (consumeOpt(parser, context | Context.AllowRegExp, SyntaxKind.Assign)) {
    initializer = parseExpression(parser, context);
    if (inForStatement && parser.token & SyntaxKind.IsInOrOf) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.The_variable_declaration_of_a_for_of_in_statement_cannot_have_an_initializer],
        pos,
        parser.curPos
      );
    }
  } else if (requireInitializer) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Missing_initializer_in_destructuring_declaration],
      parser.curPos,
      parser.pos
    );
  }
  return createVariableDeclaration(binding, optionalToken, typeAnnotation, initializer, pos, parser.curPos);
}

function parseDeclareAsIdentifierOrDeclareStatement(
  parser: ParserState,
  context: Context,
  scope: ScopeState
): TypeAlias | LabelledStatement | ExpressionStatement | StatementNode {
  const pos = parser.curPos;
  let expr = parseIdentifier(parser, context, DiagnosticCode.Identifier_expected);
  if (context & Context.OptionsAllowTypes && parser.token & SyntaxKind.IsStatementStart) {
    const declareKeyword = createToken(SyntaxKind.DeclareKeyword, NodeFlags.ChildLess, expr.start, expr.end);
    switch (parser.token) {
      case SyntaxKind.VarKeyword:
        return parseVariableStatement(parser, context, declareKeyword, scope, BindingType.Var);
      case SyntaxKind.TypeKeyword:
        return parseTypeAsIdentifierOrTypeAlias(parser, context, declareKeyword, scope);
      case SyntaxKind.OpaqueKeyword:
        return parseOpaqueType(parser, context, declareKeyword, scope);
      case SyntaxKind.FunctionKeyword:
        return parseFunctionDeclaration(parser, context, scope, declareKeyword, ParseFunctionFlag.None);
      case SyntaxKind.ClassKeyword:
        return parseClassDeclaration(parser, context, null, declareKeyword, /* isDefaultModifier */ false);
    }
  }
  parser.assignable = true;
  if (parser.token === SyntaxKind.Colon) {
    return parseLabelledStatement(
      parser,
      context,
      expr as Identifier,
      SyntaxKind.DeclareKeyword,
      NodeFlags.IsStatement,
      /* allowFunction */ true,
      scope,
      pos
    );
  }
  if (parser.token === SyntaxKind.Arrow) {
    expr = parseArrowFunction(
      parser,
      context,
      scope,
      /*typeParameters */ null,
      /* returnType */ null,
      /* params */ createIdentifier('declare', 'declare', pos, parser.curPos),
      /* asyncToken */ null,
      /* nodeFlags */ NodeFlags.ExpressionNode,
      pos
    ) as any;
  }
  return parseExpressionStatement(parser, context, parseExpressionRest(parser, context, expr, pos), pos);
}

function parseTypeAsIdentifierOrTypeAlias(
  parser: ParserState,
  context: Context,
  declareKeyword: SyntaxToken<TokenSyntaxKind> | null,
  scope: ScopeState
): TypeAlias | LabelledStatement | ExpressionStatement {
  const pos = parser.curPos;
  let expr = parseIdentifier(parser, context, DiagnosticCode.Identifier_expected);
  if (context & Context.OptionsAllowTypes && parser.token & (SyntaxKind.IsFutureReserved | SyntaxKind.IsIdentifier)) {
    expr = parseIdentifier(parser, context, DiagnosticCode.Identifier_expected);
    const typeParameters = parseTypeParameterDeclaration(parser, context);

    let type = null;
    if (consumeOpt(parser, context | Context.InTypes, SyntaxKind.Assign)) {
      type = parseType(parser, context);
    } else {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[
          DiagnosticCode
            .Type_parameter_declaration_needs_a_default_since_a_preceding_type_parameter_declaration_has_a_default
        ],
        parser.curPos,
        parser.pos
      );
    }

    parseSemicolon(parser, context);
    return createTypeAlias(
      declareKeyword,
      createToken(SyntaxKind.TypeKeyword, NodeFlags.ChildLess, pos, expr.end),
      expr as Identifier,
      typeParameters,
      type as any,
      declareKeyword ? NodeFlags.Declared | NodeFlags.IsStatement : NodeFlags.IsStatement,
      pos,
      parser.curPos
    );
  }
  parser.assignable = true;
  if (parser.token === SyntaxKind.Colon) {
    return parseLabelledStatement(
      parser,
      context,
      expr as Identifier,
      SyntaxKind.TypeKeyword,
      NodeFlags.IsStatement,
      /* allowFunction */ true,
      scope,
      pos
    );
  }
  if (parser.token === SyntaxKind.Arrow) {
    expr = parseArrowFunction(
      parser,
      context,
      scope,
      /*typeParameters */ null,
      /* returnType */ null,
      /* params */ createIdentifier('type', 'type', pos, parser.curPos),
      /* asyncToken */ null,
      /* nodeFlags */ NodeFlags.ExpressionNode,
      pos
    ) as any;
  }
  return parseExpressionStatement(parser, context, parseExpressionRest(parser, context, expr, pos), pos);
}

function parseLetAsIdentifierOrLexicalDeclaration(
  parser: ParserState,
  context: Context,
  scope: ScopeState
): LexicalDeclaration | LabelledStatement | ExpressionStatement {
  const pos = parser.curPos;
  const flags = parser.nodeFlags | NodeFlags.IsStatement;
  let expr = parseIdentifier(parser, context, DiagnosticCode.Identifier_expected);
  if (
    parser.token & (SyntaxKind.IsPatternStart | SyntaxKind.IsIdentifier | SyntaxKind.IsFutureReserved) &&
    (flags & 0b00000000000000000110000000000000) === 0
  ) {
    const declarationList = parseBindingList(
      parser,
      context | Context.LexicalContext,
      flags,
      /* isForStatement */ false,
      scope,
      BindingType.Let
    );
    parseSemicolon(parser, context);
    return createLexicalDeclaration(
      createToken(SyntaxKind.LetKeyword, flags | NodeFlags.ChildLess, pos, expr.end),
      declarationList,
      pos,
      parser.curPos
    );
  }
  if (context & Context.Strict) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Identifier_expected_let_is_a_reserved_word_in_strict_mode],
      parser.curPos,
      parser.pos
    );
  }
  parser.assignable = true;
  if (parser.token === SyntaxKind.Colon) {
    return parseLabelledStatement(
      parser,
      context,
      expr as Identifier,
      SyntaxKind.LetKeyword,
      NodeFlags.IsStatement,
      /* allowFunction */ true,
      scope,
      pos
    );
  }
  if (parser.token === SyntaxKind.Arrow) {
    expr = parseArrowFunction(
      parser,
      context,
      scope,
      /*typeParameters */ null,
      /* returnType */ null,
      /* params */ createIdentifier('let', 'let', pos, parser.curPos),
      /* asyncToken */ null,
      /* nodeFlags */ NodeFlags.ExpressionNode,
      pos
    ) as any;
  }
  return parseExpressionStatement(parser, context, parseExpressionRest(parser, context, expr, pos), pos);
}

function parseLexicalDeclaration(
  parser: ParserState,
  context: Context,
  token: TokenSyntaxKind,
  flags: NodeFlags,
  scope: ScopeState,
  type: BindingType
): LexicalDeclaration {
  const pos = parser.curPos;
  const lexicalToken = consumeToken(parser, context, token);
  if (lexicalToken.flags & 0b00000000000000000110000000000000) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Keywords_cannot_contain_escape_characters],
      parser.curPos,
      parser.pos
    );
  }
  const declarationList = parseBindingList(
    parser,
    (context | Context.LexicalContext | Context.InBlock) ^ Context.InBlock,
    flags,
    /* inForStatement */ false,
    scope,
    type
  );
  parseSemicolon(parser, context);
  return createLexicalDeclaration(lexicalToken, declarationList, pos, parser.curPos);
}

function parseBindingList(
  parser: ParserState,
  context: Context,
  flags: NodeFlags,
  inForStatement: boolean,
  scope: ScopeState,
  type: BindingType
): BindingList {
  const pos = parser.curPos;
  const bindinglist = [];

  while (parser.token & (SyntaxKind.IsPatternStart | SyntaxKind.IsFutureReserved | SyntaxKind.IsIdentifier)) {
    bindinglist.push(parseLexicalBinding(parser, context, flags, inForStatement, scope, type));
    // If we can consume a semicolon (either explicitly, or with ASI), then consider us done
    // with parsing the list of lexical bindings.
    //
    // Same when we're parsing the lexical binding of a 'for-in' statement, we
    // are done if we see an 'in' keyword in front of us. Same with for-of
    if (parser.token & (SyntaxKind.Smi | SyntaxKind.IsInOrOf) || parser.nodeFlags & NodeFlags.NewLine) break;

    if (consumeOpt(parser, context, SyntaxKind.Comma)) {
      if ((parser.token & (SyntaxKind.IsPatternStart | SyntaxKind.IsFutureReserved | SyntaxKind.IsIdentifier)) === 0) {
        parser.previousErrorPos = parser.pos;
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.Trailing_comma_not_allowed],
          parser.curPos,
          parser.pos
        );
      }
      continue;
    }

    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[
        parser.token & SyntaxKind.IsKeyword ? DiagnosticCode.Lexical_declaration_expected : DiagnosticCode._expected
      ],
      parser.curPos,
      parser.pos
    );
  }

  if (inForStatement && bindinglist.length > 1 && parser.token & SyntaxKind.IsInOrOf) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Invalid_left_hand_side_Must_have_a_single_binding_in_a_for_of_statement],
      parser.curPos,
      parser.pos
    );
  }
  return createBindingList(bindinglist, flags, pos, parser.curPos);
}

function parseLexicalBinding(
  parser: ParserState,
  context: Context,
  flags: NodeFlags,
  inForStatement: boolean,
  scope: ScopeState,
  type: BindingType
): LexicalBinding {
  const pos = parser.curPos;

  const requireInitializer =
    !inForStatement && ((flags & NodeFlags.Const) !== 0 || parser.token & SyntaxKind.IsPatternStart);

  if (parser.token === SyntaxKind.LetKeyword) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.A_lexical_declaration_can_t_define_a_let_binding],
      parser.curPos,
      parser.pos
    );
  }

  const binding = parseIdentifierOrPattern(parser, context, scope, type, DiagnosticCode.Lexical_declaration_expected);
  const optionalToken = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.QuestionMark);
  const typeAnnotation = parseTypeAnnotation(parser, context);

  let initializer = null;

  if (consumeOpt(parser, context | Context.AllowRegExp, SyntaxKind.Assign)) {
    initializer = parseExpression(parser, context);
    if (inForStatement && parser.token & SyntaxKind.IsInOrOf) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.The_lexical_declaration_of_a_for_in_or_of_statement_cannot_have_an_initializer],
        pos,
        parser.curPos
      );
    }
  } else if (requireInitializer) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[
        flags & NodeFlags.Const
          ? DiagnosticCode.Missing_initializer_in_const_declaration
          : DiagnosticCode.Missing_initializer_in_destructuring_declaration
      ],
      parser.curPos,
      parser.pos
    );
  }

  return createLexicalBinding(binding, optionalToken, typeAnnotation, initializer, pos, parser.curPos);
}

function parseObjectType(parser: ParserState, context: Context, objectTypeFlag: ObjectTypeFlag): ObjectType {
  const pos = parser.curPos;
  const openBraceExists = consume(parser, context, SyntaxKind.LeftBrace, DiagnosticCode.Missing_an_opening_brace);

  const properties = [];
  const indexers = [];
  const callProperties = [];
  const internalSlots = [];
  let protoStart: number | null = null;
  while ((parser.token as SyntaxKind) !== SyntaxKind.RightBrace) {
    const innerPos = parser.curPos;

    if (objectTypeFlag & ObjectTypeFlag.AllowProto && parser.tokenValue === '__proto__') {
      if (
        speculate(
          parser,
          context,
          function () {
            nextToken(parser, context);
            if (parser.token !== SyntaxKind.QuestionMark && parser.token !== SyntaxKind.Colon) {
              return true;
            }
            return null;
          },
          true
        )
      ) {
        protoStart = parser.curPos;
        objectTypeFlag & ~ObjectTypeFlag.AllowStatic;
      }
    }

    let staticKeyword = null;

    if (objectTypeFlag & ObjectTypeFlag.AllowStatic && parser.token === SyntaxKind.StaticKeyword) {
      staticKeyword = consumeToken(parser, context, SyntaxKind.StaticKeyword);
      if (parser.token & SyntaxKind.IsLessThanOrLeftParen) {
        properties.push(
          createObjectTypeProperty(
            /* key  */ createIdentifier('static', 'static', pos, parser.curPos),
            /* value */ parseFunctionType(parser, context),
            /* optionalToken */ null,
            /* staticKeyword */ null,
            pos,
            parser.curPos
          )
        );
      } else if (consumeOpt(parser, context, SyntaxKind.Colon)) {
        properties.push(
          createObjectTypeProperty(
            /* key  */ createIdentifier('static', 'static', pos, parser.curPos),
            /* value */ parseType(parser, context),
            /* optionalToken */ null,
            /* staticKeyword */ null,
            pos,
            parser.curPos
          )
        );
      } else if (consumeOpt(parser, context, SyntaxKind.LeftBracket)) {
        if (protoStart != null) {
          parser.onError(
            DiagnosticSource.Parser,
            DiagnosticKind.Error,
            diagnosticMap[DiagnosticCode.Unexpected_token],
            pos,
            parser.pos
          );
        }
        indexers.push(parseObjectTypeIndexer(parser, context, /* isStatic */ staticKeyword, innerPos));
      }
    } else {
      if (consumeOpt(parser, context, SyntaxKind.LeftBracket)) {
        if (protoStart != null) {
          parser.onError(
            DiagnosticSource.Parser,
            DiagnosticKind.Error,
            diagnosticMap[DiagnosticCode.Unexpected_token],
            pos,
            parser.pos
          );
        }
        if (parser.token === SyntaxKind.LeftBracket) {
          internalSlots.push(parseObjectTypeInternalSlot(parser, context, staticKeyword, innerPos));
        } else {
          indexers.push(parseObjectTypeIndexer(parser, context, staticKeyword, innerPos));
        }
      } else if (parser.token & SyntaxKind.IsLessThanOrLeftParen) {
        if (protoStart != null) {
          parser.onError(
            DiagnosticSource.Parser,
            DiagnosticKind.Error,
            diagnosticMap[DiagnosticCode.Unexpected_token],
            pos,
            parser.pos
          );
        }
        callProperties.push(parseObjectTypeCallProperty(parser, context, staticKeyword, innerPos));
      } else if (parser.token === SyntaxKind.Ellipsis) {
        properties.push(parseObjectTypeSpreadProperty(parser, context, staticKeyword, innerPos));
      } else {
        properties.push(parseObjectTypeProperty(parser, context, staticKeyword, innerPos));
      }
    }

    if (parser.token === SyntaxKind.Semicolon || parser.token === SyntaxKind.Comma) {
      nextToken(parser, context);
    }
  }
  consume(
    parser,
    context,
    SyntaxKind.RightBrace,
    openBraceExists
      ? DiagnosticCode.The_parser_expected_to_find_a_to_match_the_token_here
      : DiagnosticCode.Type_expected
  );
  return createObjectType(properties, indexers, callProperties, internalSlots, pos, parser.curPos);
}

function parseObjectTypeSpreadProperty(
  parser: ParserState,
  context: Context,
  staticKeyword: SyntaxToken<TokenSyntaxKind> | null,
  pos: number
): ObjectTypeSpreadProperty {
  return createObjectTypeSpreadProperty(
    /* ellipsisToken */ consumeToken(parser, context, SyntaxKind.Ellipsis),
    /* type */ parseType(parser, context),
    /* staticKeyword */ staticKeyword,
    pos,
    parser.curPos
  );
}

function parseObjectTypeProperty(
  parser: ParserState,
  context: Context,
  staticKeyword: SyntaxToken<TokenSyntaxKind> | null,
  pos: number
): ObjectTypeProperty {
  let key;
  if (parser.token & SyntaxKind.IsIdentifier) {
    const token = parser.token;

    key = parseIdentifier(parser, context, DiagnosticCode.Identifier_expected);

    if (token === SyntaxKind.GetKeyword) {
      return createObjectTypeProperty(
        /* key */ parseIdentifier(parser, context, DiagnosticCode.Identifier_expected),
        /* value */ parseFunctionType(parser, context),
        /* optionalToken */ null,
        /* staticKeyword */ null,
        pos,
        parser.curPos
      );
    }
    if (token === SyntaxKind.SetKeyword) {
      return createObjectTypeProperty(
        /* key */ parseIdentifier(parser, context, DiagnosticCode.Identifier_expected),
        /* value */ parseFunctionType(parser, context),
        /* optionalToken */ null,
        /* staticKeyword */ null,
        pos,
        parser.curPos
      );
    }
    if (parser.token & SyntaxKind.IsLessThanOrLeftParen) {
      // This is a method property
      return createObjectTypeProperty(
        key,
        parseFunctionType(parser, context),
        /* optionalToken */ null,
        staticKeyword,
        pos,
        parser.curPos
      );
    }
    const optionalToken = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.QuestionMark);
    consume(parser, context, SyntaxKind.Colon);
    const value = parseType(parser, context);

    return createObjectTypeProperty(key, value, optionalToken, staticKeyword, pos, parser.curPos);
  }
  key = parsePropertyName(parser, context);

  if (parser.token & SyntaxKind.IsLessThanOrLeftParen) {
    // This is a method property
    return createObjectTypeProperty(
      key,
      parseFunctionType(parser, context),
      /* optionalToken */ null,
      staticKeyword,
      pos,
      parser.curPos
    );
  }
  const optionalToken = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.QuestionMark);
  consume(parser, context, SyntaxKind.Colon);
  const value = parseType(parser, context);

  return createObjectTypeProperty(key, value, optionalToken, staticKeyword, pos, parser.curPos);
}

function parseObjectTypeCallProperty(
  parser: ParserState,
  context: Context,
  staticKeyword: SyntaxToken<TokenSyntaxKind> | null,
  pos: number
): ObjectTypeCallProperty {
  const typeParameters = parseTypeParameterDeclaration(parser, context);
  const openingParensExists = consume(
    parser,
    context,
    SyntaxKind.LeftParen,
    DiagnosticCode.Missing_an_opening_parentheses
  );
  const params = parseFunctionTypeParameters(parser, context);
  consume(
    parser,
    context,
    SyntaxKind.RightParen,
    openingParensExists ? DiagnosticCode.Expected_a_to_match_the_token_here : DiagnosticCode.Unexpected_token
  );
  consume(parser, context, SyntaxKind.Colon);
  const returnType = parseType(parser, context);
  consumeOpt(parser, context, SyntaxKind.Semicolon);
  return createObjectTypeCallProperty(typeParameters, params, staticKeyword, returnType, pos, parser.curPos);
}

function parseObjectTypeInternalSlot(
  parser: ParserState,
  context: Context,
  staticKeyword: SyntaxToken<TokenSyntaxKind> | null,
  pos: number
): ObjectTypeInternalSlot {
  consume(parser, context, SyntaxKind.LeftBracket);
  const name = parsePropertyName(parser, context);
  consume(parser, context, SyntaxKind.RightBracket, DiagnosticCode.Did_you_forgot_a_to_match_the_token);

  consume(parser, context, SyntaxKind.RightBracket, DiagnosticCode.Did_you_forgot_a_to_match_the_token);

  if (parser.token & SyntaxKind.IsLessThanOrLeftParen) {
    const typeParameters = parseTypeParameterDeclaration(parser, context);
    const openingParensExists = consume(
      parser,
      context,
      SyntaxKind.LeftParen,
      DiagnosticCode.Missing_an_opening_parentheses
    );
    const params = parseFunctionTypeParameters(parser, context);
    consume(
      parser,
      context,
      SyntaxKind.RightParen,
      openingParensExists ? DiagnosticCode.Expected_a_to_match_the_token_here : DiagnosticCode.Unexpected_token
    );
    consume(parser, context, SyntaxKind.Colon);
    const returnType = parseType(parser, context);
    const value = createFunctionType(params, returnType, typeParameters, pos, parser.curPos);
    return createObjectTypeInternalSlot(name, /* optionalToken */ null, staticKeyword, value, pos, parser.curPos);
  }
  const optionalToken = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.QuestionMark);
  consume(parser, context, SyntaxKind.Colon);
  return createObjectTypeInternalSlot(
    name,
    optionalToken,
    staticKeyword,
    parseType(parser, context),
    pos,
    parser.curPos
  );
}

function parseObjectTypeIndexer(
  parser: ParserState,
  context: Context,
  staticKeyword: SyntaxToken<TokenSyntaxKind> | null,
  pos: number
): ObjectTypeIndexer {
  let key: any;
  let name = null;

  if (
    speculate(
      parser,
      context,
      function () {
        nextToken(parser, context);
        return parser.token === SyntaxKind.Colon;
      },
      /* rollback */ true
    )
  ) {
    name = parsePropertyName(parser, context);
    consume(parser, context, SyntaxKind.Colon);
    key = parseType(parser, context);
  } else {
    key = parseType(parser, context);
  }
  consume(parser, context, SyntaxKind.RightBracket, DiagnosticCode.Did_you_forgot_a_to_match_the_token);
  consume(parser, context, SyntaxKind.Colon);
  const value = parseType(parser, context);
  return createObjectTypeIndexer(name, key, value, staticKeyword, pos, parser.curPos);
}

function parseComputedPropertyName(parser: ParserState, context: Context): ComputedPropertyName {
  const pos = parser.curPos;
  consume(parser, context | Context.AllowRegExp, SyntaxKind.LeftBracket);
  const expression = parseExpression(
    parser,
    (context | 0b00000000100000000000000010000000) ^ 0b00000000100000000000000010000000
  );
  consume(parser, context | Context.AllowRegExp, SyntaxKind.RightBracket, DiagnosticCode.Expected_a_computed_property);
  return createComputedPropertyName(expression, pos, parser.curPos);
}

// YieldExpression :
//   `yield`
//   `yield` [no LineTerminator here] AssignmentExpression
//   `yield` [no LineTerminator here] `*` AssignmentExpression
function parseYieldIdentifierOrExpression(
  parser: ParserState,
  context: Context,
  LeftHandSideContext: LeftHandSide
): YieldExpression | ArrowFunction | Identifier | DummyIdentifier {
  const pos = parser.curPos;

  if (context & Context.YieldContext) {
    if (parser.nodeFlags & 0b00000000000000000110000000000000) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode._yield_keyword_must_not_contain_escaped_characters],
        pos,
        parser.curPos
      );
    }

    if (context & Context.Parameters) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode._yield_expression_cannot_be_used_in_function_parameters],
        pos,
        parser.pos
      );
    }

    const yieldKeyword = consumeToken(parser, context, SyntaxKind.YieldKeyword);

    if (LeftHandSideContext) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[
          LeftHandSideContext & LeftHandSide.ForStatement
            ? DiagnosticCode.Cannot_use_the_yield_keyword_on_the_left_hand_side_of_a_for_in_statement_in_a_generator_context
            : DiagnosticCode.Expected_a
        ],
        pos,
        parser.pos
      );
    }

    parser.assignable = false;

    if (parser.token === SyntaxKind.Multiply) {
      // A `\n` after `yield` is illegal for `yield *`, and '*' should therefor be parsed as
      //an binary expr operator in error recovery mode
      if (parser.nodeFlags & NodeFlags.NewLine) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.Expression_expected],
          parser.curPos,
          parser.pos
        );
      }

      return createYieldExpression(
        /* yieldKeyword */ yieldKeyword,
        /* delegate */ true,
        consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.Multiply),
        parseExpression(parser, context),
        pos,
        parser.curPos
      );
    }

    return createYieldExpression(
      /* yieldKeyword */ yieldKeyword,
      /* delegate */ false,
      /* asteriskToken */ null,
      /* expression */ parser.token & SyntaxKind.IsExpressionStart ? parseExpression(parser, context) : null,
      pos,
      parser.curPos
    );
  }
  const expression = parseIdentifier(parser, context, DiagnosticCode.Identifier_expected);

  if (parser.token === SyntaxKind.Arrow) {
    const scope = createParentScope(createScope(), ScopeKind.ArrowParams);

    addBlockName(parser, context, scope, 'yield', BindingType.ArgumentList);

    return parseArrowFunction(
      parser,
      context,
      scope,
      /*typeParameters */ null,
      /* returnType */ null,
      /* params */ expression,
      /* asyncToken */ null,
      /* nodeFlags */ NodeFlags.ExpressionNode,
      pos
    );
  }

  return expression;
}

// AwaitExpression : `await` UnaryExpression
export function parseAwaitExpression(
  parser: ParserState,
  context: Context,
  inNewExpression: boolean,
  LeftHandSideContext: LeftHandSide
): AwaitExpression | DummyIdentifier {
  const pos = parser.curPos;
  if (LeftHandSideContext & LeftHandSide.DisallowClassExtends) return parseIdentifierReference(parser, context);
  if (parser.nodeFlags & 0b00000000000000000110000000000000) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode._await_keyword_must_not_contain_escaped_characters],
      pos,
      parser.curPos
    );
  }
  if (context & Context.Module && (context & Context.TopLevel) == 0) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode._await_is_only_allowed_within_async_functions_and_at_the_top_levels_of_modules],
      pos,
      parser.pos
    );
  }

  if (context & Context.Parameters) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode._await_expression_cannot_be_used_in_function_parameters],
      pos,
      parser.pos
    );
  }
  const awaitKeyword = consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.AwaitKeyword);
  const expression = parseLeftHandSideExpression(parser, context, LeftHandSide.None);
  if ((parser.token as SyntaxKind) === SyntaxKind.Exponentiate) {
    // Unary expressions as the left operand of an exponentation expression must be disambiguated with parentheses
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[
        DiagnosticCode
          .Unary_expressions_as_the_left_operand_of_an_exponentation_expression_must_be_disambiguated_with_parentheses
      ],
      parser.curPos,
      parser.pos
    );
  }
  if (inNewExpression) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Expression_expected],
      parser.curPos,
      parser.pos
    );
  }
  parser.assignable = false;
  return createAwaitExpression(awaitKeyword, expression, pos, parser.curPos);
}

// ImportCall :
//  import
export function parseImportCall(
  parser: ParserState,
  context: Context,
  importKeyword: SyntaxToken<TokenSyntaxKind>
): ExpressionStatement {
  const pos = parser.curPos;
  nextToken(parser, context);
  if (parser.token === SyntaxKind.RightParen) {
    parser.previousErrorPos = parser.pos;
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Import_Call_should_take_at_least_one_argument],
      parser.curPos,
      parser.pos
    );
  }

  const expression = parseExpression(parser, context);

  if (parser.token === SyntaxKind.Comma) {
    parser.previousErrorPos = parser.pos;
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Dynamic_import_must_have_one_specifier_as_an_argument],
      parser.curPos,
      parser.pos
    );
  }

  consume(parser, context, SyntaxKind.RightParen, DiagnosticCode.Expected_a_to_match_the_token_here);
  return parseExpressionStatement(
    parser,
    context,
    parseExpressionRest(parser, context, createImportCall(importKeyword, expression, pos, parser.curPos), pos),
    pos
  );
}

// ImportMeta:
//   import.meta
export function parseImportMeta(
  parser: ParserState,
  context: Context,
  importKeyword: SyntaxToken<TokenSyntaxKind>
): ExpressionStatement {
  const pos = parser.curPos;

  if (parser.nodeFlags & 0b00000000000000000110000000000000) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Escape_sequence_in_keyword_import],
      parser.curPos,
      parser.pos
    );
  }

  consume(parser, context, SyntaxKind.Period);

  const metaKeyword = consumeToken(parser, context, SyntaxKind.Meta);

  if (!metaKeyword) {
    parser.previousErrorPos = parser.pos;
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode._import_meta_is_the_only_valid_meta_property_for_import],
      parser.curPos,
      parser.pos
    );
  }

  if (metaKeyword && metaKeyword.flags & 0b00000000000000000110000000000000) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode._import_meta_must_not_contain_escaped_characters],
      parser.curPos,
      parser.pos
    );
  }

  if ((context & Context.AllowImportMeta) === 0 && parser.previousErrorPos !== parser.pos) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Cannot_use_import_meta_outside_a_module],
      parser.curPos,
      parser.pos
    );
  }
  let expression: any = createImportMeta(
    importKeyword,
    metaKeyword,
    pos,
    parser.nodeFlags | NodeFlags.ExpressionNode | NodeFlags.ChildLess,
    parser.curPos
  );
  parser.assignable = false;
  return parseExpressionStatement(parser, context, parseExpressionRest(parser, context, expression, pos), pos);
}

function parseTemplateExpression(parser: ParserState, context: Context, isTaggedTemplate: boolean): TemplateExpression {
  const pos = parser.curPos;
  const nodeFlags = parser.nodeFlags | NodeFlags.ExpressionNode;
  const templateSpans = [parseTemplateSpan(parser, context)];

  while (scanTemplateTail(parser, context, isTaggedTemplate) === SyntaxKind.TemplateCont) {
    templateSpans.push(parseTemplateSpan(parser, context));
  }
  return createTemplateExpression(
    templateSpans,
    parseTemplateTail(parser, context, nodeFlags | NodeFlags.ChildLess),
    nodeFlags,
    pos,
    parser.curPos
  );
}

function parseTemplateSpan(parser: ParserState, context: Context): TemplateSpan {
  const { curPos, tokenValue, tokenRaw } = parser;
  consume(parser, context | Context.AllowRegExp, SyntaxKind.TemplateCont);
  return createTemplateSpan(
    tokenRaw,
    tokenValue,
    parseExpressions(parser, (context | 0b00000000100000000000000010000000) ^ 0b00000000100000000000000010000000),
    curPos,
    parser.curPos
  );
}

function parseTemplateTail(parser: ParserState, context: Context, flags: NodeFlags): TemplateTail {
  const { curPos, tokenValue, tokenRaw } = parser;
  consume(parser, context | Context.AllowRegExp, SyntaxKind.TemplateTail);
  return createTemplateTail(tokenRaw, tokenValue, flags, curPos, parser.curPos);
}

// #sec-class-definitions
// ClassDeclaration :
//   `class` BindingIdentifier ClassTail
//   [+Default] `class` ClassTail
function parseClassDeclaration(
  parser: ParserState,
  context: Context,
  scope: any,
  declareKeyword: SyntaxToken<TokenSyntaxKind> | null,
  isDefaultModifier: boolean
): ClassDeclaration {
  const pos = parser.curPos;
  const decorator = parseDecorators(parser, context);
  const classToken = consumeKeywordAndCheckForEscapeSequence(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.ClassKeyword,
    pos
  );
  context = (context | Context.InConstructor | Context.Strict) ^ Context.InConstructor;

  let name = null;

  if (parser.token !== SyntaxKind.ExtendsKeyword) {
    if (context & Context.InStaticBlock && parser.token === SyntaxKind.AwaitKeyword) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.BindingIdentifier_may_not_be_await_within_class_static_blocks],
        parser.curPos,
        parser.pos
      );
    }
    if (isDefaultModifier) {
      if (parser.token & (SyntaxKind.IsIdentifier | SyntaxKind.IsFutureReserved)) {
        name = parseBindingIdentifier(
          parser,
          context,
          scope,
          BindingType.Const,
          DiagnosticCode.Binding_identifier_expected
        );
      }
    } else {
      if (parser.token === SyntaxKind.LeftBrace) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.A_class_declaration_without_the_default_modifier_must_have_a_name],
          parser.curPos,
          parser.pos
        );
      } else {
        name = parseBindingIdentifier(
          parser,
          context,
          scope,
          BindingType.Const,
          DiagnosticCode.Binding_identifier_expected
        );
      }
    }
  }

  // "class Foo<T> {}"
  // "class Foo<T = undefined> {}"
  const typeParameters = parseTypeParameterDeclaration(parser, context);

  const classTail = parseClassTail(parser, context | Context.InClassBody, declareKeyword ? true : false, true);

  parser.assignable = false;

  return createClassDeclaration(
    declareKeyword,
    decorator,
    classToken,
    name as any,
    typeParameters,
    classTail,
    pos,
    parser.curPos
  );
}

// #sec-class-definitions
// ClassExpression :
//   `class` BindingIdentifier? ClassTail
function parseClassExpression(parser: ParserState, context: Context): ClassExpression {
  const pos = parser.curPos;
  const decorator = parseDecorators(parser, context);
  const classToken = consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.ClassKeyword);

  let name = null;

  if (
    parser.token & (SyntaxKind.IsIdentifier | SyntaxKind.IsFutureReserved) &&
    parser.token !== SyntaxKind.ExtendsKeyword
  ) {
    if (parser.token & SyntaxKind.IsFutureReserved) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.Identifier_expected_Reserved_word_in_strict_mode],
        parser.curPos,
        parser.pos
      );
    }
    name = parseIdentifierReference(parser, context, DiagnosticCode.Binding_identifier_expected);
  }

  const typeParameters = parseTypeParameterDeclaration(parser, context);

  const classTail = parseClassTail(parser, context | Context.InClassBody, false, true);

  parser.assignable = false;

  return createClassExpression(decorator, classToken, name, typeParameters, classTail, pos, parser.curPos);
}

// ClassTail : ClassHeritage? `{` ClassBody? `}`
// ClassHeritage : `extends` LeftHandSideExpression
// ClassBody : ClassElementList
function parseClassTail(parser: ParserState, context: Context, isDeclared: boolean, isDecl: boolean): ClassTail {
  const pos = parser.curPos;

  let classHeritage: ExpressionNode | null = null;
  let inheritedContext = context;
  let body = null;

  if (parser.token === SyntaxKind.ExtendsKeyword) {
    const extendsToken = consumeKeywordAndCheckForEscapeSequence(
      parser,
      context | Context.AllowRegExp,
      SyntaxKind.ExtendsKeyword,
      pos
    );

    const curPos = parser.curPos;
    classHeritage = createClassHeritage(
      extendsToken,
      parseLeftHandSideExpression(parser, context, LeftHandSide.NotAssignable | LeftHandSide.DisallowClassExtends),
      (parser.token as SyntaxKind) === SyntaxKind.LessThan
        ? parseTypeParameterInstantiationList(parser, context)
        : null,
      curPos,
      parser.curPos
    );
    inheritedContext |= Context.SuperCall;
  } else {
    inheritedContext = (inheritedContext | Context.SuperCall) ^ Context.SuperCall;
  }

  if (isDeclared) {
    // This is a declared class so the class body has to change into 'ObjectType' as part of the type system
    return createClassTail(
      classHeritage,
      parseObjectType(parser, context, ObjectTypeFlag.AllowProto | ObjectTypeFlag.AllowStatic),
      NodeFlags.ExpressionNode | NodeFlags.Declared,
      pos,
      parser.curPos
    );
  }

  const openBraceExists = consume(parser, context, SyntaxKind.LeftBrace, DiagnosticCode.Missing_an_opening_brace);
  body = parseClassBody(parser, inheritedContext, context);
  if (isDecl) context | Context.AllowRegExp;
  consume(
    parser,
    context,
    SyntaxKind.RightBrace,
    openBraceExists
      ? DiagnosticCode.The_parser_expected_to_find_a_to_match_the_token_here
      : DiagnosticCode.Expression_expected
  );
  return createClassTail(classHeritage, body, pos, NodeFlags.ExpressionNode, parser.curPos);
}

export function parseClassBody(parser: ParserState, context: Context, inheritedContext: Context): ClassBody {
  const pos = parser.curPos;
  let hasConstructor = false;
  const elements = [];
  let classElement = null;
  while (parser.token & 0b01000100110000000100000000000000 || parser.token === SyntaxKind.Decorator) {
    classElement = parseClassElement(parser, context, inheritedContext, null, null, null, NodeFlags.None);
    if (classElement.flags & NodeFlags.Constructor) {
      if (hasConstructor) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.Multiple_constructor_implementations_are_not_allowed],
          parser.curPos,
          parser.pos
        );
      }
      hasConstructor = true;
    }

    elements.push(classElement);

    if (parser.token === SyntaxKind.RightBrace) break;
  }
  return createClassBody(elements, pos, parser.curPos);
}

// ClassElement :
//   `static` MethodDefinition
//   MethodDefinition
//   FieldDefinition ;
//   `static` FieldDefinition ;
//   ClassStaticBlock
//   ;
export function parseClassElement(
  parser: ParserState,
  context: Context,
  inheritedContext: Context,
  declareKeyword: SyntaxToken<TokenSyntaxKind> | null,
  staticKeyword: SyntaxToken<TokenSyntaxKind> | null,
  decorators: DecoratorList | null,
  nodeFlags: NodeFlags
): ClassElement | SemicolonClassElement | FieldDefinition {
  const pos = parser.curPos;

  let generatorToken: SyntaxToken<TokenSyntaxKind> | null = null;
  let asyncKeyword: SyntaxToken<TokenSyntaxKind> | null = null;
  let getKeyword: SyntaxToken<TokenSyntaxKind> | null = null;
  let setKeyword: SyntaxToken<TokenSyntaxKind> | null = null;

  if (consumeOpt(parser, context, SyntaxKind.Semicolon)) {
    return createSemicolonClassElement(pos, parser.curPos);
  }

  decorators = parseDecorators(parser, context);

  const token = parser.token;
  const flags = parser.nodeFlags;
  if (token & 0b00000000100000000100000000000000) {
    let key = parseIdentifier(parser, context, DiagnosticCode.Identifier_expected);

    if (
      (parser.token & 0b00000100110000000100000000000000 || parser.token === SyntaxKind.Decorator) &&
      // If a line terminator is permitted before a 'static' 'declare', 'async', 'get', or 'set' modifier, this
      // is an class field

      (parser.nodeFlags & NodeFlags.NewLine) === 0
    ) {
      switch (token) {
        case SyntaxKind.StaticKeyword:
          // avoid 'static static'
          if (flags & 0b00000000000000000110000000000000) {
            parser.onError(
              DiagnosticSource.Parser,
              DiagnosticKind.Error,
              diagnosticMap[DiagnosticCode.Keywords_cannot_contain_escape_characters],
              parser.curPos,
              parser.pos
            );
          }

          if (!staticKeyword) {
            return parseClassElement(
              parser,
              context,
              inheritedContext,
              declareKeyword,
              createToken(SyntaxKind.StaticKeyword, NodeFlags.ChildLess, pos, parser.curPos),
              decorators,
              nodeFlags
            );
          }
          parser.previousErrorPos = parser.pos;
          parser.onError(
            DiagnosticSource.Parser,
            DiagnosticKind.Error,
            diagnosticMap[DiagnosticCode._static_modifier_already_seen],
            pos,
            parser.pos
          );

          break;
        case SyntaxKind.DeclareKeyword:
          if (context & Context.OptionsAllowTypes) {
            if (!declareKeyword) {
              if (staticKeyword) {
                parser.onError(
                  DiagnosticSource.Parser,
                  DiagnosticKind.Error,
                  diagnosticMap[DiagnosticCode.The_declare_modifier_cannot_follow_after_a_static_modifier],
                  parser.curPos,
                  parser.pos
                );
              }
              if (parser.token === SyntaxKind.Decorator) {
                parser.onError(
                  DiagnosticSource.Parser,
                  DiagnosticKind.Error,
                  diagnosticMap[DiagnosticCode.Decorators_cannot_follow_after_a_static_modifier],
                  parser.curPos,
                  parser.pos
                );
              }

              return parseClassElement(
                parser,
                context,
                inheritedContext,
                createToken(SyntaxKind.DeclareKeyword, NodeFlags.ChildLess, pos, parser.curPos),
                staticKeyword,
                decorators,
                nodeFlags
              );
            }
            break;
          }
          break;
        case SyntaxKind.AsyncKeyword:
          if (flags & 0b00000000000000000110000000000000) {
            parser.onError(
              DiagnosticSource.Parser,
              DiagnosticKind.Error,
              diagnosticMap[DiagnosticCode.Keywords_cannot_contain_escape_characters],
              pos,
              parser.pos
            );
          }
          nodeFlags |= NodeFlags.Async;
          asyncKeyword = createToken(SyntaxKind.AsyncKeyword, flags | NodeFlags.ChildLess, pos, parser.curPos);
          generatorToken = consumeOptToken(parser, context, SyntaxKind.Multiply);
          if (generatorToken) nodeFlags |= NodeFlags.Generator;
          break;
        case SyntaxKind.GetKeyword:
          if (flags & 0b00000000000000000110000000000000) {
            parser.onError(
              DiagnosticSource.Parser,
              DiagnosticKind.Error,
              diagnosticMap[DiagnosticCode.Keywords_cannot_contain_escape_characters],
              pos,
              parser.pos
            );
          }
          getKeyword = createToken(SyntaxKind.GetKeyword, flags | NodeFlags.ChildLess, pos, parser.curPos);
          nodeFlags |= NodeFlags.Getter;
          break;

        case SyntaxKind.SetKeyword:
          if (flags & 0b00000000000000000110000000000000) {
            parser.onError(
              DiagnosticSource.Parser,
              DiagnosticKind.Error,
              diagnosticMap[DiagnosticCode.Keywords_cannot_contain_escape_characters],
              pos,
              parser.pos
            );
          }
          setKeyword = createToken(SyntaxKind.SetKeyword, flags | NodeFlags.ChildLess, pos, parser.curPos);
          nodeFlags |= NodeFlags.Setter;
          break;
      }
    } else if (
      context & Context.OptionsNext &&
      token === SyntaxKind.StaticKeyword &&
      parser.token === SyntaxKind.LeftBrace
    ) {
      return parseStaticBlock(
        parser,
        inheritedContext | Context.InStaticBlock,
        decorators,
        declareKeyword,
        staticKeyword,
        pos
      );
    }

    if (nodeFlags & (NodeFlags.Async | NodeFlags.Getter | NodeFlags.Setter)) {
      if (
        token &
        (SyntaxKind.IsIdentifier | SyntaxKind.IsKeyword | SyntaxKind.IsFutureReserved | SyntaxKind.IsProperty)
      ) {
        let t = parser.token;
        key = parsePropertyName(parser, inheritedContext) as Identifier;
        if (
          asyncKeyword &&
          (t === SyntaxKind.SetKeyword || t === SyntaxKind.GetKeyword) &&
          parser.token & 0b00000100110000000100000000000000
        ) {
          parser.onError(
            DiagnosticSource.Parser,
            DiagnosticKind.Error,
            diagnosticMap[DiagnosticCode._async_modifier_cannot_be_used_here],
            parser.curPos,
            parser.pos
          );
        }
      } else {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.Method_definition_expected],
          parser.curPos,
          parser.pos
        );
      }
    }
    if (parser.tokenValue === 'constructor') {
      if (!staticKeyword && parser.token & SyntaxKind.IsLessThanOrLeftParen) {
        if (nodeFlags & (NodeFlags.Async | NodeFlags.Getter | NodeFlags.Setter)) {
          parser.onError(
            DiagnosticSource.Parser,
            DiagnosticKind.Error,
            diagnosticMap[DiagnosticCode.Class_constructor_may_not_be_a_accessor],
            parser.curPos,
            parser.pos
          );
        }
        if ((context & Context.SuperCall) !== Context.SuperCall) {
          nodeFlags |= NodeFlags.Constructor;
        }
        if (decorators) {
          parser.onError(
            DiagnosticSource.Parser,
            DiagnosticKind.Error,
            diagnosticMap[DiagnosticCode.Decorators_are_not_valid_here],
            parser.curPos,
            parser.pos
          );
        }
      } else if ((parser.token & SyntaxKind.IsLessThanOrLeftParen) === 0) {
        if (parser.previousErrorPos !== parser.pos) {
          parser.onError(
            DiagnosticSource.Parser,
            DiagnosticKind.Error,
            diagnosticMap[DiagnosticCode.Constructor_implementation_is_missing],
            parser.curPos,
            parser.pos
          );
        }
      }
    } else if (
      (staticKeyword || nodeFlags & (NodeFlags.Async | NodeFlags.Getter | NodeFlags.Setter)) &&
      parser.tokenValue === 'prototype'
    ) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.Classes_may_not_have_a_static_property_named_prototype],
        parser.curPos,
        parser.pos
      );
    }

    if (parser.token & SyntaxKind.IsLessThanOrLeftParen) {
      if (declareKeyword) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.Class_methods_cannot_have_the_declare_modifier],
          parser.curPos,
          parser.pos
        );
      }

      const method = parseMethodDefinition(parser, context | Context.InClassBody, key, nodeFlags);
      return createClassElement(
        declareKeyword,
        decorators,
        generatorToken,
        staticKeyword,
        asyncKeyword,
        getKeyword,
        setKeyword,
        method,
        nodeFlags,
        pos,
        parser.curPos
      );
    }

    return parseFieldDefinition(
      parser,
      context | Context.InClassBody,
      decorators,
      declareKeyword,
      staticKeyword,
      asyncKeyword,
      key,
      pos
    );
  }

  generatorToken = consumeOptToken(parser, context, SyntaxKind.Multiply);

  const key = parsePropertyName(parser, inheritedContext);
  if (parser.tokenValue === 'constructor') {
    if (
      parser.token & SyntaxKind.IsLessThanOrLeftParen &&
      !staticKeyword &&
      (context & Context.SuperCall) !== Context.SuperCall
    ) {
      nodeFlags |= NodeFlags.Constructor;
    }
  }

  if (generatorToken) nodeFlags | NodeFlags.Generator;

  if (parser.token & SyntaxKind.IsLessThanOrLeftParen) {
    if (declareKeyword) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.Class_methods_cannot_have_the_declare_modifier],
        parser.curPos,
        parser.pos
      );
    }

    const method = parseMethodDefinition(parser, context | Context.InClassBody, key, nodeFlags);
    return createClassElement(
      declareKeyword,
      decorators,
      generatorToken,
      staticKeyword,
      asyncKeyword,
      getKeyword,
      setKeyword,
      method,
      nodeFlags,
      pos,
      parser.curPos
    );
  }

  return parseFieldDefinition(
    parser,
    context | Context.InClassBody,
    decorators,
    declareKeyword,
    staticKeyword,
    asyncKeyword,
    key,
    pos
  );
}

// ClassStaticBlock :
//  `static` { ClassStaticBlockBody }
//   ClassStaticBlockBody :
// ClassStaticBlockStatementList :
//  `StatementList`
export function parseStaticBlock(
  parser: ParserState,
  context: Context,
  decorators: DecoratorList | null,
  declareKeyword: SyntaxToken<TokenSyntaxKind> | null,
  staticKeyword: SyntaxToken<TokenSyntaxKind> | null,
  pos: number
): StaticBlock {
  if (decorators) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error | DiagnosticKind.EarlyError,
      diagnosticMap[DiagnosticCode.A_static_initialization_block_may_not_have_decorator],
      parser.curPos,
      parser.pos
    );
  }
  nextToken(parser, context | Context.AllowRegExp);
  if (parser.token === SyntaxKind.ArgumentsIdentifier) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error | DiagnosticKind.EarlyError,
      diagnosticMap[DiagnosticCode._arguments_is_only_allowed_in_functions_and_class_methods],
      parser.curPos,
      parser.pos
    );
  }
  const block = parseBlock(
    parser,
    (context | 0b01100000000000000111111100000000) ^
      // The "await" and 'yield' parsing context does not apply to the block's statement list in a static block
      // so we unset the bit to trigger an error message
      0b01000000000000000101111100000000,
    createScope(),
    false
  );
  consume(parser, context, SyntaxKind.RightBrace, DiagnosticCode.The_parser_expected_to_find_a_to_match_the_token_here);
  if (consumeOpt(parser, context, SyntaxKind.Assign)) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error | DiagnosticKind.EarlyError,
      diagnosticMap[DiagnosticCode.Expression_expected],
      parser.curPos,
      parser.pos
    );
  }
  return createStaticBlock(
    decorators,
    declareKeyword,
    staticKeyword,
    createBlockStatement(block, pos, parser.curPos),
    pos,
    parser.curPos
  );
}

export function parseFieldDefinition(
  parser: ParserState,
  context: Context,
  decorators: DecoratorList | null,
  declareKeyword: SyntaxToken<TokenSyntaxKind> | null,
  staticKeyword: SyntaxToken<TokenSyntaxKind> | null,
  asyncKeyword: SyntaxToken<TokenSyntaxKind> | null,
  key: any,
  pos: number
) {
  // "class X { foo? }"
  // "class X { foo?: number }"
  const optionalToken =
    context & Context.OptionsAllowTypes ? consumeOptToken(parser, context, SyntaxKind.QuestionMark) : null;

  // "class X { foo: number }"
  const type = parseTypeAnnotation(parser, context);

  let initializer = null;
  if (consumeOpt(parser, context | Context.AllowRegExp, SyntaxKind.Assign)) {
    if (declareKeyword) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.Initializers_are_not_allowed_in_fields_with_the_declare_modifier],
        parser.curPos,
        parser.pos
      );
    }

    if ((parser.token as SyntaxKind) === SyntaxKind.ArgumentsIdentifier) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode._arguments_can_only_be_used_in_functions_and_class_methods],
        parser.curPos,
        parser.pos
      );
    }
    initializer = parseExpression(parser, context);
  }

  return createFieldDefinition(
    decorators,
    declareKeyword,
    staticKeyword,
    asyncKeyword,
    key,
    optionalToken,
    type,
    initializer,
    pos,
    parser.curPos
  );
}

function parsePrivateIdentifier(parser: ParserState, context: Context): PrivateIdentifier {
  const pos = parser.curPos;
  const name = parser.tokenValue;
  if ((context & Context.InClassBody) === 0) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Private_identifiers_are_not_allowed_outside_class_bodies],
      parser.curPos,
      parser.pos
    );
  }
  nextToken(parser, context);
  parser.assignable = true;
  return createPrivateIdentifier(name, pos, parser.curPos);
}

export function parseImportMetaOrCall(parser: ParserState, context: Context, inNewExpression: boolean): ExpressionNode {
  if (inNewExpression) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Cannot_use_new_with_import],
      parser.curPos,
      parser.pos
    );
  }
  const importToken = consumeToken(parser, context, SyntaxKind.ImportKeyword);
  return parser.token === SyntaxKind.Period
    ? parseImportMeta(parser, context, importToken)
    : parseImportCall(parser, context, importToken);
}

function parseSuperExpression(parser: ParserState, context: Context): Super | MemberAccessChain {
  const pos = parser.curPos;
  const superKeyword = consumeToken(parser, context, SyntaxKind.SuperKeyword);
  const expression = createSuper(superKeyword, pos, parser.curPos);

  switch (parser.token) {
    case SyntaxKind.QuestionMarkPeriod:
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[
          superKeyword.flags & 0b00000000000000000110000000000000
            ? DiagnosticCode._super_keyword_must_not_contain_escaped_characters
            : DiagnosticCode._super_must_be_followed_by_an_argument_list_or_member_access
        ],
        parser.curPos,
        parser.pos
      );
    case SyntaxKind.LeftParen:
      if ((context & Context.SuperCall) === 0) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[
            superKeyword.flags & 0b00000000000000000110000000000000
              ? DiagnosticCode._super_keyword_must_not_contain_escaped_characters
              : DiagnosticCode._super_can_only_be_referenced_in_members_of_derived_classes_or_object_literal_expressions
          ],
          parser.curPos,
          parser.pos
        );
      }
      parser.assignable = false;
      return expression;
    case SyntaxKind.LeftBracket:
    case SyntaxKind.Period:
      if ((context & Context.SuperProperty) === 0) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[
            superKeyword.flags & 0b00000000000000000110000000000000
              ? DiagnosticCode._super_keyword_must_not_contain_escaped_characters
              : DiagnosticCode._super_can_only_be_referenced_in_members_of_derived_classes_or_object_literal_expressions
          ],
          parser.curPos,
          parser.pos
        );
      }
      parser.assignable = true;
      return expression;
    default:
      // If we have seen "super" it must be followed by '(' or '.'.
      // If it wasn't then just try to parse out a '.' and report an error.
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[
          superKeyword.flags & 0b00000000000000000110000000000000
            ? DiagnosticCode._super_keyword_must_not_contain_escaped_characters
            : DiagnosticCode._super_must_be_followed_by_an_argument_list_or_member_access
        ],
        parser.curPos,
        parser.pos
      );
  }

  return createMemberAccessChain(
    expression as any,
    parsePropertyOrPrivatePropertyName(parser, context),
    pos,
    parser.curPos
  );
}

function parseDecorators(parser: ParserState, context: Context): DecoratorList | null {
  if (consumeOpt(parser, context, SyntaxKind.Decorator)) {
    const pos = parser.curPos;
    const decorators = [];
    while (parser.token & (SyntaxKind.IsIdentifier | SyntaxKind.IsFutureReserved)) {
      decorators.push(parseDecoratorExpression(parser, context));
      if (!consumeOpt(parser, context, SyntaxKind.Decorator)) break;
    }
    return createDecoratorList(decorators, pos, parser.curPos);
  }
  return null;
}

function parseDecoratorExpression(parser: ParserState, context: Context): Decorator {
  const pos = parser.curPos;
  const expression = parseLeftHandSideExpression(parser, context, LeftHandSide.None);
  return createDecorator(expression, parser.nodeFlags, pos, parser.curPos);
}

function nextTokenIsLeftParen(parser: ParserState, context: Context): boolean {
  parseTypeParameterDeclaration(parser, context);
  return parser.token !== SyntaxKind.LeftParen;
}

// `CoverCallExpressionAndAsyncArrowHead : MemberExpressionArguments`
export function parseCoverCallExpressionAndAsyncArrowHead(
  parser: ParserState,
  context: Context,
  expr: ExpressionNode,
  LeftHandSideContext: LeftHandSide,
  flags: NodeFlags,
  start: number
): ArrowFunction | ExpressionNode {
  let typeParameters: any = null;

  let state = Tristate.False;
  let trailingComma = false;
  const asyncToken = createToken(SyntaxKind.AsyncKeyword, NodeFlags.ChildLess, start, parser.curPos);
  const scope = createParentScope(createScope(), ScopeKind.ArrowParams);
  if (parser.token === SyntaxKind.LessThan) {
    if ((context & Context.OptionsAllowTypes) === 0) return expr;
    if (speculate(parser, context, nextTokenIsLeftParen, true)) {
      return expr;
    }
    state = Tristate.True;
    typeParameters = parseTypeParameterDeclaration(parser, context);
  }

  consume(parser, context | Context.AllowRegExp, SyntaxKind.LeftParen);

  if (consumeOpt(parser, context, SyntaxKind.RightParen)) {
    let isType = false;
    if (context & Context.OptionsAllowTypes && parser.token === SyntaxKind.Colon) {
      isType =
        context & Context.InConditionalExpr
          ? isValidReturnType(
              parser,
              context,
              parsePrimaryExpression(parser, context, /* inNewExpression */ false, LeftHandSide.None),
              1,
              true
            )
          : true;
    }

    if (
      parser.token === SyntaxKind.Arrow ||
      /* Error recovery tweak. */
      isType
    ) {
      if (flags & NodeFlags.NewLine) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.Line_terminator_not_permitted_before_arrow],
          parser.curPos,
          parser.pos
        );
      }

      return parseArrowFunction(
        parser,
        context,
        scope,
        typeParameters,
        parseTypeAnnotation(parser, context),
        [],
        asyncToken,
        /* nodeFlags */ NodeFlags.Async,
        start
      );
    }
    return createCallExpression(expr, createArgumentList([], trailingComma, start, start), start, parser.curPos);
  }

  let destructible = DestructibleKind.None;
  let expression!: ExpressionNode | any;

  const params: ExpressionNode[] = [];

  while (parser.token & 0b00010000101010010100000000000000) {
    const pos = parser.curPos;

    if (parser.token & (SyntaxKind.IsIdentifier | SyntaxKind.IsFutureReserved)) {
      addBlockName(parser, context, scope, parser.tokenValue, BindingType.ArgumentList);

      expression = parsePrimaryExpression(parser, context, /* inNewExpression */ false, LeftHandSide.None);

      if (context & Context.OptionsAllowTypes && parser.token === SyntaxKind.QuestionMark) {
        const questionMarkToken = consumeOptToken(parser, context, SyntaxKind.QuestionMark);
        if (parser.token & (SyntaxKind.IsFutureReserved | SyntaxKind.IsIdentifier)) {
          // If we have "(a?b:" then this is part of an conditional expression in an argument list
          const consequent = speculate(
            parser,
            context,
            function () {
              const consequent = parseExpression(
                parser,
                (context | Context.InConditionalExpr | Context.DisallowInContext) ^ Context.DisallowInContext
              );
              return parser.token === SyntaxKind.Colon ? consequent : undefined;
            },
            false
          );

          if (consequent) {
            expression = createConditionalExpression(
              expression,
              questionMarkToken,
              consequent,
              consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.Colon),
              parseExpression(parser, (context | Context.InConditionalExpr) ^ Context.InConditionalExpr),
              pos,
              parser.curPos
            );
            parser.assignable = false;
          }
        } else {
          // This isn't part of an conditional expression, so this has to be "(a?" or "(a?:"
          state = Tristate.True;

          expression = createFormalParameter(
            /* ellipsisToken */ null,
            /* binding */ expression,
            /* optionalToken */ questionMarkToken,
            /* type */ parseTypeAnnotation(parser, context),
            /* initializer */ parseInitializer(parser, context, false),
            NodeFlags.ExpressionNode,
            pos,
            parser.curPos
          );
        }
      } else if (context & Context.OptionsAllowTypes && parser.token === SyntaxKind.Colon) {
        state = Tristate.True;

        expression = createFormalParameter(
          /* ellipsisToken */ null,
          /* binding */ expression,
          /* optionalToken */ null,
          /* type */ parseTypeAnnotation(parser, context),
          /* initializer */ parseInitializer(parser, context, false),
          NodeFlags.ExpressionNode,
          pos,
          parser.curPos
        );
      } else {
        state = Tristate.Unknown;

        if (parser.token === SyntaxKind.Comma || parser.token === SyntaxKind.RightParen) {
          if (!parser.assignable) {
            destructible |= DestructibleKind.NotDestructible;
          }
        } else {
          if (parser.token === SyntaxKind.Assign) {
            parser.diagnosticStartPos = pos;
            flags |= NodeFlags.NoneSimpleParamList;
          } else {
            state = Tristate.False;
            destructible |= DestructibleKind.NotDestructible;
          }

          if (parser.token & SyntaxKind.IsPropertyOrCall) {
            state = Tristate.False;
            expression = parseMemberExpression(parser, context, expression, true, pos);
          }

          if (
            (parser.token as SyntaxKind) !== SyntaxKind.RightParen &&
            (parser.token as SyntaxKind) !== SyntaxKind.Comma
          ) {
            expression = parseAssignmentExpression(parser, context, expression, pos);
          }
        }
      }
    } else if (parser.token & SyntaxKind.IsPatternStart) {
      expression =
        parser.token === SyntaxKind.LeftBracket
          ? parseArrayLiteralOrAssignmentExpression(parser, context, null, BindingType.ArgumentList)
          : parseObjectLiteralOrAssignmentExpression(parser, context, null, BindingType.ArgumentList);

      parser.diagnosticStartPos = pos;

      flags |= NodeFlags.NoneSimpleParamList;

      if (context & Context.OptionsAllowTypes && parser.token === SyntaxKind.QuestionMark) {
        const questionMarkToken = consumeOptToken(parser, context, SyntaxKind.QuestionMark);
        if (parser.token & (SyntaxKind.IsFutureReserved | SyntaxKind.IsIdentifier)) {
          // If we have "(a?b:" then this is part of an conditional expression in an argument list
          const consequent = speculate(
            parser,
            context,
            function () {
              const consequent = parseExpression(
                parser,
                (context | Context.InConditionalExpr | Context.DisallowInContext) ^ Context.DisallowInContext
              );
              return parser.token === SyntaxKind.Colon ? consequent : undefined;
            },
            false
          );

          if (consequent) {
            expression = createConditionalExpression(
              expression,
              questionMarkToken,
              consequent,
              consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.Colon),
              parseExpression(parser, (context | Context.InConditionalExpr) ^ Context.InConditionalExpr),
              pos,
              parser.curPos
            );
            parser.assignable = false;
          }
        } else {
          // This isn't part of an conditional expression, so this has to be "(a?" or "(a?:"
          state = Tristate.True;

          expression = createFormalParameter(
            /* ellipsisToken */ null,
            /* binding */ expression,
            /* optionalToken */ questionMarkToken,
            /* type */ parseTypeAnnotation(parser, context),
            /* initializer */ parseInitializer(parser, context, false),
            NodeFlags.ExpressionNode,
            pos,
            parser.curPos
          );
        }
      } else if (context & Context.OptionsAllowTypes && parser.token === SyntaxKind.Colon) {
        state = Tristate.True;
        expression = createFormalParameter(
          /* ellipsisToken */ null,
          /* binding */ expression as any,
          /* optionalToken */ null,
          /* type */ parseTypeAnnotation(parser, context),
          /* initializer */ parseInitializer(parser, context, false),
          NodeFlags.ExpressionNode,
          pos,
          parser.curPos
        );
      } else {
        state = Tristate.Unknown;

        destructible = parser.destructible;

        if (parser.token !== SyntaxKind.Comma && parser.token !== SyntaxKind.RightParen) {
          if (destructible & DestructibleKind.MustDestruct) {
            parser.onError(
              DiagnosticSource.Parser,
              DiagnosticKind.Error,
              diagnosticMap[
                DiagnosticCode.The_left_hand_side_of_an_assignment_expression_must_be_a_variable_or_a_property_access
              ],
              parser.curPos,
              parser.pos
            );
          }

          if (parser.token & SyntaxKind.IsPropertyOrCall) {
            state = Tristate.False;
            expression = parseMemberExpression(parser, context, expression, true, pos);
          }

          destructible |= DestructibleKind.NotDestructible;

          if (parser.token & SyntaxKind.IsAssignOp) {
            expression = parseAssignmentExpression(parser, context, expression, pos);
          } else if (parser.token & SyntaxKind.IsBinaryOp) {
            expression = parseBinaryExpression(parser, context, expression, 4, parser.token, pos);
            if ((parser.token as SyntaxKind) === SyntaxKind.QuestionMark) {
              expression = parseConditionalExpression(parser, context, expression, pos);
            }
          } else {
            if (parser.token === SyntaxKind.QuestionMark) {
              expression = parseConditionalExpression(parser, context, expression, pos);
            } else {
              destructible |= !parser.assignable ? DestructibleKind.NotDestructible : DestructibleKind.Assignable;
            }
          }
        }
      }
    } else if (parser.token === SyntaxKind.Ellipsis) {
      state = Tristate.Unknown;
      const ellipsisToken = consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.Ellipsis);
      parser.diagnosticStartPos = pos;
      flags |= NodeFlags.NoneSimpleParamList;

      let argument: any;

      if (parser.token & (SyntaxKind.IsIdentifier | SyntaxKind.IsFutureReserved)) {
        let argument = parsePrimaryExpression(parser, context, /* inNewExpression */ false, LeftHandSide.None);

        if (context & Context.OptionsAllowTypes && (parser.token as SyntaxKind) === SyntaxKind.QuestionMark) {
          const questionMarkToken = consumeOptToken(parser, context, SyntaxKind.QuestionMark);
          if (parser.token & (SyntaxKind.IsFutureReserved | SyntaxKind.IsIdentifier | SyntaxKind.IsStartOfType)) {
            // If we have "(a?b:" then this is part of an conditional expression in an argument list
            const consequent = speculate(
              parser,
              context,
              function () {
                const consequent = parseExpression(
                  parser,
                  (context | Context.InConditionalExpr | Context.DisallowInContext) ^ Context.DisallowInContext
                );
                return parser.token === SyntaxKind.Colon ? consequent : undefined;
              },
              false
            );

            if (consequent) {
              expression = createConditionalExpression(
                expression,
                questionMarkToken,
                consequent,
                consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.Colon),
                parseExpression(parser, (context | Context.InConditionalExpr) ^ Context.InConditionalExpr),
                pos,
                parser.curPos
              );
              parser.assignable = false;
            }
          } else {
            // This isn't part of an conditional expression, so this has to be "(a?" or "(a?:"
            state = Tristate.True;

            expression = createFormalParameter(
              /* ellipsisToken */ ellipsisToken,
              /* binding */ expression,
              /* optionalToken */ questionMarkToken,
              /* type */ parseTypeAnnotation(parser, context),
              /* initializer */ parseInitializer(parser, context, false),
              NodeFlags.ExpressionNode,
              pos,
              parser.curPos
            );
          }
          // If we have "(a:", then we must have a type-annotated parameter in an arrow function expression
        } else if (context & Context.OptionsAllowTypes && (parser.token as SyntaxKind) === SyntaxKind.Colon) {
          state = Tristate.True;

          expression = createFormalParameter(
            /* ellipsisToken */ ellipsisToken,
            /* binding */ expression,
            /* optionalToken */ null,
            /* type */ parseTypeAnnotation(parser, context),
            /* initializer */ parseInitializer(parser, context, false),
            NodeFlags.ExpressionNode,
            pos,
            parser.curPos
          );
        } else {
          // '... )' , '... ]' and '... }'
          if ((parser.token as SyntaxKind) === SyntaxKind.RightParen) {
            destructible |= parser.assignable ? DestructibleKind.Destructible : DestructibleKind.NotDestructible;
          } else if ((parser.token as SyntaxKind) === SyntaxKind.Comma) {
            destructible = DestructibleKind.NotDestructible;
          } else {
            // This is the slow path. We shouldn't care too much about performance
            argument = parseMemberExpression(parser, context, argument, /*allowCalls */ true, pos);

            destructible = DestructibleKind.None;

            if (parser.token & (SyntaxKind.IsAssignOp | SyntaxKind.IsBinaryOp)) {
              destructible |= DestructibleKind.NotDestructible;
              argument = parseAssignmentExpression(parser, context, argument, pos);
            } else if ((parser.token as SyntaxKind) === SyntaxKind.QuestionMark) {
              argument = parseConditionalExpression(parser, context, argument, pos);
            }

            if (!parser.assignable) {
              destructible |= DestructibleKind.NotDestructible;
            } else {
              destructible |= DestructibleKind.Assignable;
            }

            destructible |= parser.assignable ? DestructibleKind.Assignable : DestructibleKind.NotDestructible;
          }
        }
      } else if (parser.token & SyntaxKind.IsPatternStart) {
        argument =
          (parser.token as SyntaxKind) === SyntaxKind.LeftBracket
            ? parseArrayLiteralOrAssignmentExpression(parser, context, null, BindingType.ArgumentList)
            : parseObjectLiteralOrAssignmentExpression(parser, context, null, BindingType.ArgumentList);

        parser.diagnosticStartPos = pos;
        flags |= NodeFlags.NoneSimpleParamList;

        if (context & Context.OptionsAllowTypes && (parser.token as SyntaxKind) === SyntaxKind.QuestionMark) {
          const questionMarkToken = consumeOptToken(parser, context, SyntaxKind.QuestionMark);
          if (parser.token & (SyntaxKind.IsFutureReserved | SyntaxKind.IsIdentifier | SyntaxKind.IsStartOfType)) {
            // If we have "(a?b:" then this is part of an conditional expression in an argument list
            const consequent = speculate(
              parser,
              context,
              function () {
                const consequent = parseExpression(
                  parser,
                  (context | Context.InConditionalExpr | Context.DisallowInContext) ^ Context.DisallowInContext
                );
                return parser.token === SyntaxKind.Colon ? consequent : undefined;
              },
              false
            );

            if (consequent) {
              expression = createConditionalExpression(
                expression,
                questionMarkToken,
                consequent,
                consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.Colon),
                parseExpression(parser, (context | Context.InConditionalExpr) ^ Context.InConditionalExpr),
                pos,
                parser.curPos
              );
              parser.assignable = false;
            }
          } else {
            // This isn't part of an conditional expression, so this has to be "(a?" or "(a?:"
            state = Tristate.True;

            expression = createFormalParameter(
              /* ellipsisToken */ ellipsisToken,
              /* binding */ expression,
              /* optionalToken */ null,
              /* type */ parseTypeAnnotation(parser, context),
              /* initializer */ parseInitializer(parser, context, false),
              NodeFlags.ExpressionNode,
              pos,
              parser.curPos
            );
          }
          // If we have "(a:", then we must have a type-annotated parameter in an arrow function expression
        } else if (context & Context.OptionsAllowTypes && (parser.token as SyntaxKind) === SyntaxKind.Colon) {
          state = Tristate.True;

          expression = createFormalParameter(
            /* ellipsisToken */ ellipsisToken,
            /* binding */ expression,
            /* optionalToken */ null,
            /* type */ parseTypeAnnotation(parser, context),
            /* initializer */ parseInitializer(parser, context, false),
            NodeFlags.ExpressionNode,
            pos,
            parser.curPos
          );
        } else {
          // '...[ ] )' , '... { } ]' etc.
          if ((parser.token as SyntaxKind) === SyntaxKind.LeftParen) {
            destructible |= DestructibleKind.NotDestructible;
          } else if ((parser.token as SyntaxKind) === SyntaxKind.Comma) {
            destructible = DestructibleKind.NotDestructible;
          } else {
            if (parser.destructible & DestructibleKind.MustDestruct) {
              parser.onError(
                DiagnosticSource.Parser,
                DiagnosticKind.Error,
                diagnosticMap[DiagnosticCode._expected],
                parser.curPos,
                parser.pos
              );
            }

            argument = parseMemberExpression(parser, context, argument, true, pos);

            argument = parseAssignmentExpression(parser, context, argument, pos);

            destructible = parser.assignable ? DestructibleKind.Assignable : DestructibleKind.NotDestructible;
          }
        }
      } else {
        let argument = parseLeftHandSideExpression(parser, context, LeftHandSide.None);

        if (parser.token & SyntaxKind.IsExpressionStart) {
          argument = parseAssignmentExpression(parser, context, argument, pos);
          parser.destructible |= DestructibleKind.NotDestructible;
        } else if ((parser.token as SyntaxKind) === SyntaxKind.Comma) {
          parser.destructible = DestructibleKind.NotDestructible;
        } else if ((parser.token as SyntaxKind) === SyntaxKind.RightBrace) {
        } else {
          argument = parseAssignmentExpression(parser, context, argument, pos);

          destructible = parser.assignable ? DestructibleKind.Assignable : DestructibleKind.NotDestructible;
        }
      }
      expression = createSpreadElement(ellipsisToken, argument, pos, parser.curPos);

      destructible |=
        (parser.token as SyntaxKind) === SyntaxKind.RightParen
          ? DestructibleKind.None
          : DestructibleKind.NotDestructible;
    } else {
      state = Tristate.False;
      destructible |= DestructibleKind.NotDestructible;

      let trailingComma = false;

      while (parser.token & 0b00000000101010111100000000000000) {
        params.push(parseArgumentOrArrayLiteralElement(parser, context));
        if ((parser.token as SyntaxKind) === SyntaxKind.RightParen) break;
        if (consumeOpt(parser, context, SyntaxKind.Comma)) {
          if ((parser.token as SyntaxKind) === SyntaxKind.RightParen) {
            trailingComma = true;
            break;
          }
          continue;
        }
        // We didn't get a comma, and the list wasn't terminated, explicitly so give
        // a good error message instead

        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode._expected],
          parser.curPos,
          parser.pos
        );
      }

      const argumentList = createArgumentList(params, trailingComma, start, parser.curPos);
      consume(parser, context, SyntaxKind.RightParen, DiagnosticCode.Expected_a_to_match_the_token_here);
      parser.assignable = false;
      return createCallExpression(expr, argumentList, start, parser.curPos);
    }
    params.push(expression);

    if (consumeOpt(parser, context | Context.AllowRegExp, SyntaxKind.Comma)) {
      if ((parser.token as SyntaxKind) === SyntaxKind.RightParen) {
        trailingComma = true;
        break;
      }
      continue;
    }

    if (parser.token === SyntaxKind.RightParen) break;
  }

  consume(parser, context, SyntaxKind.RightParen);

  if (destructible & DestructibleKind.NotDestructible) {
    parser.assignable = false;
    return createCallExpression(expr, createArgumentList(params, trailingComma, start, start), start, parser.curPos);
  }

  if (state) {
    let isType = false;
    if (context & Context.OptionsAllowTypes && parser.token === SyntaxKind.Colon) {
      isType = context & Context.InConditionalExpr ? isValidReturnType(parser, context, expression, start, true) : true;
    }

    if (parser.token === SyntaxKind.Arrow || isType) {
      if (flags & NodeFlags.NewLine) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.Line_terminator_not_permitted_before_arrow],
          parser.curPos,
          parser.pos
        );
      }
      if (LeftHandSideContext & (LeftHandSide.NotAssignable | LeftHandSide.DisallowClassExtends)) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.Expected_a],
          start,
          parser.pos
        );
      }
      if (destructible & (DestructibleKind.Assignable | DestructibleKind.NotDestructible)) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.The_left_hand_side_of_the_arrow_is_not_destructible],
          start,
          parser.pos
        );
      }

      return parseArrowFunction(
        parser,
        context,
        scope,
        typeParameters,
        parseTypeAnnotation(parser, context),
        params,
        asyncToken,
        /* nodeFlags */ flags | NodeFlags.Async,
        start
      );
    }
  }

  if (destructible & DestructibleKind.MustDestruct) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[
        DiagnosticCode.The_left_hand_side_of_an_assignment_expression_must_be_a_variable_or_a_property_access
      ],
      parser.curPos,
      parser.pos
    );
  }

  parser.assignable = false;
  return createCallExpression(expr, createArgumentList(params, trailingComma, start, start), start, parser.curPos);
}

function parseOpaqueType(
  parser: ParserState,
  context: Context,
  declareKeyword: SyntaxToken<TokenSyntaxKind> | null,
  scope: ScopeState
) {
  const pos = parser.curPos;
  let expr = parseIdentifier(parser, context, DiagnosticCode.Identifier_expected);
  const typeToken = consumeOptToken(parser, context, SyntaxKind.TypeKeyword);
  if (typeToken) {
    const opaqueToken = createToken(SyntaxKind.OpaqueKeyword, NodeFlags.ChildLess, pos, parser.curPos);
    const name = parseIdentifier(parser, context, DiagnosticCode.Identifier_expected);
    const typeParameters = parseTypeParameterDeclaration(parser, context);
    const superType = consumeOpt(parser, context, SyntaxKind.Colon) ? parseType(parser, context) : null;
    const impltype = !declareKeyword && consume(parser, context, SyntaxKind.Assign) ? parseType(parser, context) : null;
    return createOpaqueType(
      declareKeyword,
      opaqueToken,
      typeToken,
      name,
      typeParameters,
      superType,
      impltype,
      pos,
      parser.curPos
    );
  }
  parser.assignable = true;
  if (parser.token === SyntaxKind.Colon) {
    return parseLabelledStatement(
      parser,
      context,
      expr as Identifier,
      SyntaxKind.OpaqueKeyword,
      NodeFlags.IsStatement,
      /* allowFunction */ true,
      scope,
      pos
    );
  }
  if (parser.token === SyntaxKind.Arrow) {
    expr = parseArrowFunction(
      parser,
      context,
      scope,
      /*typeParameters */ null,
      /* returnType */ null,
      /* params */ expr,
      /* asyncToken */ null,
      /* nodeFlags */ NodeFlags.ExpressionNode,
      pos
    ) as any;
  }
  return parseExpressionStatement(parser, context, parseExpressionRest(parser, context, expr, pos), pos);
}
