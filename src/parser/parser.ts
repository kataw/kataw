import { SyntaxKind, NodeFlags, Constants, ExportKind } from '../ast/syntax-node';
import { TokenSyntaxKind, createToken, SyntaxToken } from '../ast/token';
import { nextToken } from './scanner/scanner';
import { scanTemplateTail } from './scanner/template';
import { createBlockStatement, BlockStatement } from '../ast/statements/block-stmt';
import { createBlock, Block } from '../ast/statements/block';
import { createLabelledStatement, LabelledStatement } from '../ast/statements/labelled-stmt';
import { createBreakStatement, BreakStatement } from '../ast/statements/break-stmt';
import { createContinueStatement, ContinueStatement } from '../ast/statements/continue-stmt';
import { createCaseBlock, CaseBlock } from '../ast/statements/case-block';
import { createCaseClause } from '../ast/statements/case-clause';
import { createCatch, CatchClause } from '../ast/statements/catch-stmt';
import { createDebuggerStatement, DebuggerStatement } from '../ast/statements/debugger-stmt';
import { createTryStatement, TryStatement } from '../ast/statements/try-stmt';
import { createDefaultClause } from '../ast/statements/default-clause';
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
import { createMemberAccessChain } from '../ast/expressions/member-access-chain';
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
import { createClassHeritage } from '../ast/expressions/class-heritage';
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
import { createFormalParameterList, FormalParameterList } from '../ast/expressions/formal-parameter-list';
import { createElison, Elison } from '../ast/expressions/elison';
import { createBindingElementList, BindingElementList } from '../ast/expressions/binding-element-list';
import { createBindingElement, BindingElement } from '../ast/expressions/binding-element';
import { createArrayBindingPattern, ArrayBindingPattern } from '../ast/expressions/array-binding-pattern';
import { createElementList, ElementList } from '../ast/expressions/element-list';
import { createBindingProperty, BindingProperty } from '../ast/expressions/binding-property';
import { createBindingPropertyList, BindingPropertyList } from '../ast/expressions/binding-property-list';
import { createObjectBindingPattern, ObjectBindingPattern } from '../ast/expressions/object-binding-pattern';
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
import { createStringLiteral, StringLiteral } from '../ast/expressions/string-literal';
import { createBigIntLiteral, BigIntLiteral } from '../ast/expressions/big-int-literal';
import { createConditionalExpression } from '../ast/expressions/conditional-expr';
import { createBinaryExpression, BinaryExpression } from '../ast/expressions/binary-expr';
import { createSubtractionType, SubtractionType } from '../ast/types/subtraction-type';
import { createIndexedAccessType } from '../ast/types/indexed-access-type';
import { createRestType } from '../ast/types/rest-type';
import { createOptionalType } from '../ast/types/optional-type';
import { createObjectTypeSpreadProperty, ObjectTypeSpreadProperty } from '../ast/types/object-type-spread-property';
import { createObjectTypeInternalSlot, ObjectTypeInternalSlot } from '../ast/types/object-type-internal-slot';
import { createArrayType } from '../ast/types/array-type';
import { createOptionalIndexedAccess } from '../ast/types/optional-indexed-access';
import { createTypeofType, TypeofType } from '../ast/types/typeof-type';
import { createNullableType, NullableType } from '../ast/types/nullable-type';
import { createObjectType, ObjectType } from '../ast/types/object-type';
import { createStringType, StringType } from '../ast/types/string-type';
import { createNumberType, NumberType } from '../ast/types/number-type';
import { createBigIntType, BigIntType } from '../ast/types/big-int-type';
import { createObjectTypeCallProperty, ObjectTypeCallProperty } from '../ast/types/object-type-call-property';
import { createObjectTypeIndexer, ObjectTypeIndexer } from '../ast/types/object-type-indexer';
import { createIntersectionType } from '../ast/types/intersection-type';
import { createUnionType } from '../ast/types/union-type';
import { createTypeAnnotation } from '../ast/types/type-annotation';
import { createQualifiedType } from '../ast/types/qualified-type';
import { createTypeReference, TypeReference } from '../ast/types/type-reference';
import { createTypeParameter, TypeParameter } from '../ast/types/type-parameter';
import { createTypeParameterList, TypeParameterList } from '../ast/types/type-parameter-list';
import { createTypeInstantiations, TypeInstantiations } from '../ast/types/type-instantiations';
import { createTupleType, TupleType } from '../ast/types/tuple-type';
import { createArrowFunctionType, ArrowFunctionType } from '../ast/types/arrow-function-type';
import { createArrowTypeParameter, ArrowTypeParameter } from '../ast/types/arrow-type-parameter';
import { createParenthesizedType } from '../ast/types/parenthesized-type';
import { createFunctionType, FunctionType } from '../ast/types/function-type';
import { createFunctionTypeParameterList, FunctionTypeParameterList } from '../ast/types/function-type-parameter-list';
import { createArrowTypeParameterList, ArrowTypeParameterList } from '../ast/types/arrow-type-parameter-list';
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
  ScopeKind,
  canParseSemicolon,
  isValidDirective,
  ScopeState,
  addVarOrBlock,
  addVarName,
  addBlockName,
  ScopeFlags,
  lookupBreakTarget,
  lookupContinueTarget,
  FunctionTypeFlags,
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
  onError: OnError,
  options?: Options
): RootNode {
  if (options != null) {
    if (options.next) context |= Context.OptionsNext;
    if (options.impliedStrict) context |= Context.Strict;
    if (options.allowTypes) context |= Context.OptionsAllowTypes;
    if (options.disableWebCompat) context |= Context.OptionsDisableWebCompat;
  }
  let pos = 0;

  // "#!/usr/bin/env node"
  if (source.charCodeAt(0) === Char.Hash && source.charCodeAt(1) === Char.Exclamation) {
    pos = 2; // skips: '#!...'
    while (pos < source.length && !isLineTerminator(source.charCodeAt(pos))) {
      pos++;
    }
  }

  // HTML close
  // https://tc39.es/ecma262/#sec-html-like-comments
  if (
    !isModule &&
    source.charCodeAt(0) === Char.Hyphen &&
    source.charCodeAt(pos + 2) === Char.GreaterThan &&
    source.charCodeAt(pos + 1) === Char.Hyphen
  ) {
    pos = 3;
    while (pos < source.length && !isLineTerminator(source.charCodeAt(pos))) {
      pos++;
    }
  }

  const parser = create(source, pos, onError);

  // Prime the scanner
  nextToken(parser, context | Context.AllowRegExp);

  const moduleOrScript = isModule ? parseModuleItem : parseStatementListItem;

  const statements = [];
  const directives = [];

  const scope: ScopeState = {
    kind: ScopeKind.Block,
    scope: null,
    flags: ScopeFlags.None
  };

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
    if (parser.token & Constants.StatementOrExpression) {
      statements.push(moduleOrScript(parser, context, scope, /* labels */ null, /* ownLabels */ null));
    } else {
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
    // dynamic import expression and import.meta expressions are parsed as part
    // of the import declaration to avoid any lookaheads
    return parseImportDeclaration(parser, context, scope, /* isScript*/ false);
  }
  return parseStatementListItem(parser, context, scope, /* labels*/ null, /* ownLabels */ null);
}

function parseStatementListItem(
  parser: ParserState,
  context: Context,
  scope: ScopeState,
  labels: any,
  ownLabels: any
): StatementNode {
  switch (parser.token) {
    case SyntaxKind.FunctionKeyword:
    case SyntaxKind.AsyncKeyword:
      return parseFunctionDeclaration(parser, context, scope, null, ParseFunctionFlag.None, labels);
    case SyntaxKind.DeclareKeyword:
    case SyntaxKind.Decorator:
    case SyntaxKind.ClassKeyword:
      return parseClassDeclaration(parser, context, scope, /* isDefaultModifier */ false, labels);
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
      return parseLetAsIdentifierOrLexicalDeclaration(parser, context, scope, labels, ownLabels);
    case SyntaxKind.TypeKeyword:
      return parseTypeAsIdentifierOrTypeAlias(parser, context, /* declareKeyword */ null, scope, null, null);
    case SyntaxKind.OpaqueKeyword:
      return parseOpaqueType(parser, context, /* declareKeyword */ null, scope, null, null);
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
      return parseStatement(parser, context, /* allowFunction */ true, scope, labels, ownLabels);
  }
}

// Statement :
//   ...
function parseStatement(
  parser: ParserState,
  context: Context,
  allowFunction: boolean,
  scope: ScopeState,
  labels: any,
  ownLabels: any
): StatementNode {
  switch (parser.token) {
    case SyntaxKind.VarKeyword:
      return parseVariableStatement(parser, context, /* declareKeyword */ null, scope, BindingType.Var);
    case SyntaxKind.LeftBrace:
      return parseBlockStatement(
        parser,
        context,
        {
          kind: ScopeKind.Block,
          scope,
          flags: ScopeFlags.None
        },
        labels,
        ownLabels
      );
    case SyntaxKind.Semicolon:
      return parseEmptyStatement(parser, context);
    case SyntaxKind.IfKeyword:
      return parseIfStatement(parser, context, scope, labels);
    case SyntaxKind.DoKeyword:
      return parseDoWhileStatement(parser, context, scope, labels, ownLabels);
    case SyntaxKind.WhileKeyword:
      return parseWhileStatement(parser, context, scope, labels, ownLabels);
    case SyntaxKind.ForKeyword:
      return parseForStatement(parser, context, scope, labels);
    case SyntaxKind.ContinueKeyword:
      return parseContinueStatement(parser, context, labels);
    case SyntaxKind.BreakKeyword:
      return parseBreakStatement(parser, context, labels);
    case SyntaxKind.ReturnKeyword:
      return parseReturnStatement(parser, context);
    case SyntaxKind.SwitchKeyword:
      return parseSwitchStatement(parser, context, scope, labels, ownLabels);
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
      return parseTryStatement(parser, context, scope, labels);
    case SyntaxKind.DebuggerKeyword:
      return parseDebuggerStatement(parser, context);
    case SyntaxKind.WithKeyword:
      return parseWithStatement(parser, context, scope, labels, ownLabels);
    default:
      return parseExpressionOrLabelledStatement(parser, context, allowFunction, scope, labels, ownLabels);
  }
}

// SwitchStatement :
//   `switch` `(` Expression `)` CaseBlock
function parseSwitchStatement(
  parser: ParserState,
  context: Context,
  scope: ScopeState,
  labels: any,
  ownLabels: any
): SwitchStatement {
  const pos = parser.curPos;
  const switchToken = consumeKeywordAndCheckForEscapeSequence(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.SwitchKeyword,
    NodeFlags.IsStatement,
    pos
  );
  const openParenExists = consume(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.LeftParen,
    DiagnosticCode.Missing_an_opening_parentheses
  );
  const expression = parseExpressionCoverGrammar(parser, context);
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
    parseCaseBlock(
      parser,
      context | Context.InsideSwitch | Context.InBlock,
      {
        kind: ScopeKind.SwitchStatement,
        scope,
        flags: ScopeFlags.None
      },
      labels,
      ownLabels
    ),
    (switchToken.flags | Constants.IsEscaped) ^ Constants.IsEscaped,
    pos,
    parser.curPos
  );
}

// CaseBlock :
//   `{` CaseClauses? `}`
//   `{` CaseClauses? DefaultClause CaseClauses? `}`
function parseCaseBlock(
  parser: ParserState,
  context: Context,
  scope: ScopeState,
  labels: any,
  ownLabels: any
): CaseBlock {
  const pos = parser.curPos;
  consume(parser, context, SyntaxKind.LeftBrace);
  const clauses = [];
  let hasDefaultCase = false;
  let caseOrDefaultToken = null;
  while (isCaseOrDefaultClause(parser.token)) {
    const pos = parser.curPos;
    caseOrDefaultToken = consumeKeywordAndCheckForEscapeSequence(
      parser,
      context | Context.AllowRegExp,
      parser.token,
      NodeFlags.IsStatement,
      pos
    );
    const statements = [];
    if (caseOrDefaultToken.kind === SyntaxKind.CaseKeyword) {
      const expression = parseExpressionCoverGrammar(parser, context);
      consume(parser, context | Context.AllowRegExp, SyntaxKind.Colon);
      while (parser.token & 0b00010100100000010110000000000000) {
        statements.push(parseStatementListItem(parser, context, scope, labels, ownLabels));
      }
      clauses.push(createCaseClause(caseOrDefaultToken, expression, statements, pos, parser.curPos));
    } else {
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
      while (parser.token & 0b00010100100000010110000000000000) {
        statements.push(parseStatementListItem(parser, context, scope, labels, ownLabels));
      }
      clauses.push(createDefaultClause(caseOrDefaultToken, statements, pos, parser.curPos));
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
function parseTryStatement(parser: ParserState, context: Context, scope: ScopeState, labels: any): TryStatement {
  const pos = parser.curPos;
  const tryToken = consumeKeywordAndCheckForEscapeSequence(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.TryKeyword,
    NodeFlags.IsStatement,
    pos
  );
  const block = parseBlockStatement(
    parser,
    context,
    {
      kind: ScopeKind.Block,
      scope: {
        kind: ScopeKind.Block,
        scope,
        flags: ScopeFlags.None
      },
      flags: ScopeFlags.None
    },
    labels,
    null
  );
  const catchClause =
    parser.token === SyntaxKind.CatchKeyword ? parseCatchClause(parser, context, scope, labels) : null;

  // If we don't have a catch clause, then we must have a finally clause. Try to parse
  // one out no matter what.
  let finallyBlock = null;
  let finallyKeyword = null;
  if (!catchClause || parser.token === SyntaxKind.FinallyKeyword) {
    finallyKeyword = consumeToken(
      parser,
      context | Context.AllowRegExp,
      SyntaxKind.FinallyKeyword,
      DiagnosticCode.Declaration_or_statement_expected
    );
    finallyBlock = parseBlockStatement(
      parser,
      context,
      {
        kind: ScopeKind.Block,
        scope,
        flags: ScopeFlags.None
      },
      labels,
      null
    );
  }
  return createTryStatement(tryToken, block, catchClause, finallyKeyword, finallyBlock, pos, parser.curPos);
}

function parseCatchClause(parser: ParserState, context: Context, scope: ScopeState, labels: any): CatchClause {
  const pos = parser.curPos;
  const catchToken = consumeKeywordAndCheckForEscapeSequence(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.CatchKeyword,
    NodeFlags.IsStatement,
    pos
  );
  // Keep shape of node to avoid degrading performance.
  let catchParameter = null;

  if (consumeOpt(parser, context, SyntaxKind.LeftParen)) {
    // Create a lexical scope node around the whole catch clause, including the head
    scope = {
      kind: ScopeKind.Block,
      scope,
      flags: ScopeFlags.None
    };
    catchParameter = parseIdentifierOrPattern(
      parser,
      context,
      scope,
      parser.token & Constants.Identifier ? BindingType.CatchIdentifier : BindingType.CatchPattern,
      parser.token === SyntaxKind.PrivateIdentifier
        ? DiagnosticCode.Private_identifiers_cannot_be_used_as_parameters
        : DiagnosticCode.Binding_identifier_expected
    );

    consume(
      parser,
      context | Context.AllowRegExp,
      SyntaxKind.RightParen,
      context & Context.OptionsAllowTypes && parser.token === SyntaxKind.Colon
        ? DiagnosticCode.Catch_clause_variable_cannot_have_an_type_annotation
        : parser.token === SyntaxKind.Assign
        ? DiagnosticCode.Catch_clause_variable_cannot_have_an_initializer
        : DiagnosticCode.Expected_a_to_match_the_token_here
    );
    // https://tc39.es/ecma262/#sec-runtime-semantics-catchclauseevaluation
    //
    // Step 8 means that the body of a catch block always has an additional
    // lexical scope.
    scope = {
      kind: ScopeKind.CatchBlock,
      scope,
      flags: ScopeFlags.None
    };
  }
  return createCatch(
    catchToken,
    catchParameter,
    parseBlockStatement(parser, context, scope, labels, null),
    (catchToken.flags | Constants.IsEscaped) ^ Constants.IsEscaped,
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
    NodeFlags.IsStatement,
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
function parseBreakStatement(parser: ParserState, context: Context, labels: any): BreakStatement {
  const pos = parser.curPos;
  let label = null;
  const breakToken = consumeKeywordAndCheckForEscapeSequence(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.BreakKeyword,
    NodeFlags.IsStatement,
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
    label = parseIdentifier(parser, context, Constants.Identifier);
    if (lookupBreakTarget(labels, label.text)) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error | DiagnosticKind.EarlyError,
        diagnosticMap[DiagnosticCode.A_break_statement_can_only_jump_to_a_label_of_an_enclosing_statement],
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
function parseContinueStatement(parser: ParserState, context: Context, labels: any): ContinueStatement {
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
  const continueToken = consumeKeywordAndCheckForEscapeSequence(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.ContinueKeyword,
    NodeFlags.IsStatement,
    pos
  );
  if (!canParseSemicolon(parser)) {
    label = parseIdentifier(parser, context, Constants.Identifier);
    if (lookupContinueTarget(labels, label.text)) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error | DiagnosticKind.EarlyError,
        diagnosticMap[DiagnosticCode.A_continue_statement_can_only_jump_to_a_label_of_an_enclosing_iteration_statement],
        pos,
        parser.pos
      );
    }
  }
  parseSemicolon(parser, context);
  return createContinueStatement(continueToken, label as Identifier, pos, parser.curPos);
}

// IfStatement :
//  `if` `(` Expression `)` Statement `else` Statement
//  `if` `(` Expression `)` Statement [lookahead != `else`]
function parseIfStatement(parser: ParserState, context: Context, scope: ScopeState, labels: any): IfStatement {
  const pos = parser.curPos;
  const ifKeyword = consumeKeywordAndCheckForEscapeSequence(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.IfKeyword,
    NodeFlags.IsStatement,
    pos
  );
  const openParenExists = consume(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.LeftParen,
    DiagnosticCode.Missing_an_opening_parentheses
  );
  const expression = parseExpressionCoverGrammar(parser, context);
  consume(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.RightParen,
    openParenExists
      ? DiagnosticCode.Expected_a_to_match_the_token_here
      : DiagnosticCode.Declaration_or_statement_expected
  );
  const consequent = parseConsequentOrAlternative(parser, context, scope, labels);
  const elseKeyword = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.ElseKeyword);
  return createIfStatement(
    ifKeyword,
    expression,
    consequent,
    elseKeyword,
    elseKeyword ? parseConsequentOrAlternative(parser, context, scope, labels) : null,
    (ifKeyword.flags | Constants.IsEscaped) ^ Constants.IsEscaped,
    pos,
    parser.curPos
  );
}

function parseConsequentOrAlternative(
  parser: ParserState,
  context: Context,
  scope: ScopeState,
  labels: any
): StatementNode {
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
      {
        kind: ScopeKind.Block,
        scope,
        flags: ScopeFlags.None
      },
      /* declareKeyword */ null,
      ParseFunctionFlag.DisallowGenerator,
      null
    );
  } else if (parser.token === SyntaxKind.AsyncKeyword) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error | DiagnosticKind.EarlyError,
      diagnosticMap[DiagnosticCode.An_async_function_declaration_is_not_allowed_as_if_else_child],
      parser.curPos,
      parser.pos
    );
    /* error recovery */
    return parseFunctionDeclaration(
      parser,
      context,
      scope,
      /* declareKeyword */ null,
      ParseFunctionFlag.DisallowGenerator,
      labels
    );
  } else if (parser.token === SyntaxKind.ClassKeyword) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Class_declarations_cannot_be_used_in_a_single_statement_context],
      parser.curPos,
      parser.pos
    );
    /* error recovery */
    return parseClassDeclaration(parser, context, scope, /* isDefaultModifier */ false, labels);
  }
  return parseStatement(parser, context, /* allowFunction */ false, scope, labels, /* ownLabels */ null);
}

// IterationStatement :
//  `DoWhileStatement`
//  `WhileStatement`
//  `ForStatement`
//  `ForInOfStatement`
//  `ForAwaitOfStatement`
//  `WithStatement`
function parseIterationStatement(
  parser: ParserState,
  context: Context,
  allowFunction: boolean,
  scope: any,
  labels: any,
  ownLabels: any
): any {
  switch (parser.token) {
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
      return parseFunctionDeclaration(
        parser,
        context,
        scope,
        /* declareKeyword */ null,
        ParseFunctionFlag.None,
        labels
      );
    case SyntaxKind.ClassKeyword:
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.Class_declarations_cannot_be_used_in_a_single_statement_context],
        parser.curPos,
        parser.pos
      );
      /* error recovery */
      return parseClassDeclaration(parser, context, scope, /* isDefaultModifier */ false, labels);
    default:
      return parseStatement(parser, context, allowFunction, scope, labels, ownLabels);
  }
}

// `while` `(` Expression `)` Statement
function parseWhileStatement(
  parser: ParserState,
  context: Context,
  scope: ScopeState,
  labels: any,
  ownLabels: any
): WhileStatement {
  const pos = parser.curPos;
  const whileToken = consumeKeywordAndCheckForEscapeSequence(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.WhileKeyword,
    NodeFlags.IsStatement,
    pos
  );
  const openParenExists = consume(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.LeftParen,
    DiagnosticCode.Missing_an_opening_parentheses
  );
  const expression = parseExpressionCoverGrammar(parser, context);
  consume(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.RightParen,
    openParenExists
      ? DiagnosticCode.Expected_a_to_match_the_token_here
      : DiagnosticCode.Declaration_or_statement_expected
  );

  return createWhileStatement(
    whileToken,
    expression,
    parseIterationStatement(
      parser,
      (context | 0b00000000100000000001000010000000) ^ 0b00000000100000000000000010000000,
      /* allowFunction */ false,
      scope,
      labels,
      ownLabels
    ),
    (whileToken.flags | Constants.IsEscaped) ^ Constants.IsEscaped,
    pos,
    parser.curPos
  );
}

// `do` Statement `while` `(` Expression `)` `;`
function parseDoWhileStatement(
  parser: ParserState,
  context: Context,
  scope: ScopeState,
  labels: any,
  ownLabels: any
): DoWhileStatement {
  const pos = parser.curPos;
  const doKeyword = consumeKeywordAndCheckForEscapeSequence(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.DoKeyword,
    NodeFlags.IsStatement,
    pos
  );
  const statement = parseIterationStatement(
    parser,
    (context | 0b00000000100000000001000010000000) ^ 0b00000000100000000000000010000000,
    /* allowFunction */ false,
    scope,
    labels,
    ownLabels
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
  return createDoWhileStatement(
    doKeyword,
    expression,
    whileKeyword,
    statement,
    (doKeyword.flags | Constants.IsEscaped) ^ Constants.IsEscaped,
    pos,
    parser.curPos
  );
}

// WithStatement :
//   `with` `(` Expression `)` Statement
function parseWithStatement(
  parser: ParserState,
  context: Context,
  scope: ScopeState,
  labels: any,
  ownLabels: any
): WithStatement {
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
    NodeFlags.IsStatement,
    pos
  );
  const openParenExists = consume(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.LeftParen,
    DiagnosticCode.Missing_an_opening_parentheses
  );
  const expression = parseExpressionCoverGrammar(parser, context);
  consume(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.RightParen,
    openParenExists
      ? DiagnosticCode.Expected_a_to_match_the_token_here
      : DiagnosticCode.Declaration_or_statement_expected
  );

  return createWithStatement(
    withKeyword,
    expression,
    parseIterationStatement(
      parser,
      (context | 0b00000000100000000001000010000000) ^ 0b00000000100000000000000010000000,
      /* allowFunction */ false,
      scope,
      labels,
      ownLabels
    ),
    (withKeyword.flags | Constants.IsEscaped) ^ Constants.IsEscaped,
    pos,
    parser.curPos
  );
}

// ThrowStatement :
//   `throw` [no LineTerminator here] Expression `;`
function parseThrowStatement(parser: ParserState, context: Context): ThrowStatement {
  const pos = parser.curPos;
  const throwKeyword = consumeKeywordAndCheckForEscapeSequence(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.ThrowKeyword,
    NodeFlags.IsStatement,
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
  const expression = parseExpressionCoverGrammar(parser, context);
  parseSemicolon(parser, context);
  return createThrowStatement(throwKeyword, expression, throwKeyword.flags, pos, parser.curPos);
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
      diagnosticMap[
        context & Context.ClassStaticBlockContext
          ? DiagnosticCode.A_return_statement_cannot_be_used_inside_class_static_block
          : DiagnosticCode.A_return_statement_can_only_be_used_within_a_function_body
      ],
      pos,
      parser.pos
    );
  }
  const returnToken = consumeKeywordAndCheckForEscapeSequence(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.ReturnKeyword,
    NodeFlags.IsStatement,
    pos
  );
  const expression = canParseSemicolon(parser) ? null : parseExpressionCoverGrammar(parser, context);
  parseSemicolon(parser, context);
  return createReturnStatement(returnToken, expression, returnToken.flags, pos, parser.curPos);
}

export function parseLabelledStatement(
  parser: ParserState,
  context: Context,
  expr: Identifier,
  token: SyntaxKind,
  flags: NodeFlags,
  allowFunction: boolean,
  scope: ScopeState,
  labels: any,
  ownLabels: any,
  pos: number
): LabelledStatement {
  if (context & 0b00000000000010000000011000000000) {
    if (token === SyntaxKind.AwaitKeyword) {
      if (context & (Context.AwaitContext | Context.Module)) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error | DiagnosticKind.EarlyError,
          diagnosticMap[
            flags & Constants.IsEscaped
              ? DiagnosticCode.Unicode_escapes_at_the_start_of_labels_should_not_allow_keywords
              : DiagnosticCode.Identifier_expected_await_is_a_reserved_word_in_strict_mode_and_module_goal_and_cannot_be_used_as_an_label
          ],
          pos,
          parser.pos
        );
      }
    }
    if (token === SyntaxKind.YieldKeyword) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error | DiagnosticKind.EarlyError,
        diagnosticMap[
          flags & Constants.IsEscaped
            ? DiagnosticCode.Unicode_escapes_at_the_start_of_labels_should_not_allow_keywords
            : DiagnosticCode.Identifier_expected_yield_is_a_reserved_word_in_strict_mode_and_cannot_be_used_as_an_label
        ],
        pos,
        parser.pos
      );
    }
  }

  const label = expr.text;
  let set = labels;

  while (set) {
    if (set.statements.has(label)) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error | DiagnosticKind.EarlyError,
        diagnosticMap[DiagnosticCode.Duplicate_label],
        pos,
        parser.pos
      );
    }
    set = set.parent;
  }

  const colonToken = consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.Colon); // skip: ':'

  labels = { parent: labels, statements: new Set(), iteration: null };
  labels.statements.add(label);

  if (!ownLabels) ownLabels = new Set();

  ownLabels.add(label);

  if (isIterationStatement(parser.token)) labels.iteration = ownLabels;

  return createLabelledStatement(
    expr,
    colonToken,
    !allowFunction ||
      // Per 13.13.1 it's a syntax error if LabelledItem: FunctionDeclaration
      // is ever matched. Per Annex B.3.2 that modifies this text, this
      // applies only to strict mode code.
      context & (Context.OptionsDisableWebCompat | Context.Strict) ||
      parser.token !== SyntaxKind.FunctionKeyword
      ? parseIterationStatement(parser, context, allowFunction, scope, labels, ownLabels)
      : parseFunctionDeclaration(
          parser,
          context,
          scope,
          /* declareKeyword */ null,
          ParseFunctionFlag.DisallowGenerator,
          null
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
  scope: ScopeState,
  labels: any
): ForStatement | ForInStatement | ForOfStatement {
  const pos = parser.curPos;
  const forKeyword = consumeKeywordAndCheckForEscapeSequence(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.ForKeyword,
    NodeFlags.IsStatement,
    pos
  );
  let destructible!: DestructibleKind;
  const awaitKeyword = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.AwaitKeyword);

  if (
    awaitKeyword &&
    ((context & (Context.Module | Context.AwaitContext)) === 0 || context & Context.ClassStaticBlockContext)
  ) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error | DiagnosticKind.EarlyError,
      diagnosticMap[
        context & Context.ClassStaticBlockContext
          ? DiagnosticCode._For_await_loops_cannot_be_used_inside_class_static_block
          : DiagnosticCode.A_for_await_of_statement_is_only_allowed_within_an_async_function_or_async_generator
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
    initializer = parseIdentifier(parser, context, Constants.Identifier);
    if (parser.token & (Constants.Identifier | SyntaxKind.IsPatternStart)) {
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
        scope = {
          kind: ScopeKind.ForStatement,
          scope,
          flags: ScopeFlags.None
        };

        initializer = parseBindingList(
          parser,
          context | Context.DisallowInContext | Context.LexicalContext,
          NodeFlags.IsStatement,
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

      initializer = parseMemberExpression(parser, context, initializer, SyntaxKind.IsPropertyOrCall, curPos);

      // In a for-of loop, 'let' that starts the loop head is a 'let' keyword,
      // per the [lookahead ≠ let] restriction on the LeftHandSideExpression
      // variant of such loops, so 'let' are disallowed here.
      //
      // - `for (let.prop of [1])`
      if ((parser.token as SyntaxKind) === SyntaxKind.OfKeyword) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.The_left_hand_side_of_a_for_of_loop_cannot_start_with_let],
          parser.curPos,
          parser.pos
        );
      }
    }
  } else if (consumeOpt(parser, context, SyntaxKind.ConstKeyword)) {
    scope = {
      kind: ScopeKind.ForStatement,
      scope,
      flags: ScopeFlags.None
    };

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
    scope = {
      kind: ScopeKind.ForStatement,
      scope,
      flags: ScopeFlags.None
    };
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

    initializer = parseMemberExpression(parser, context, initializer, SyntaxKind.IsPropertyOrCall, pos);
  } else {
    if (awaitKeyword) context |= Context.InForOfAwait;

    initializer = parseLeftHandSideExpression(parser, context | Context.DisallowInContext, LeftHandSide.ForStatement);
  }

  const ofKeyword = awaitKeyword
    ? consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.OfKeyword)
    : consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.OfKeyword);

  if (ofKeyword) {
    if (ofKeyword.flags & Constants.IsEscaped) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.Keywords_cannot_contain_escape_characters],
        parser.curPos,
        parser.pos
      );
    }
    if (!parser.assignable) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.The_left_hand_side_of_a_for_of_statement_must_be_a_variable_or_a_property_access],
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
      parseIterationStatement(
        parser,
        (context | 0b00000000100000000001000010000000) ^ 0b00000000100000000000000010000000,
        /* allowFunction */ false,
        scope,
        labels,
        /* ownLabels */ null
      ),
      awaitKeyword,
      (forKeyword.flags | Constants.IsEscaped) ^ Constants.IsEscaped,
      pos,
      parser.curPos
    );
  }

  const inKeyword = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.InKeyword);

  if (inKeyword) {
    if (inKeyword.flags & Constants.IsEscaped) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.Keywords_cannot_contain_escape_characters],
        parser.curPos,
        parser.pos
      );
    }
    if (!parser.assignable) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error | DiagnosticKind.EarlyError,
        diagnosticMap[DiagnosticCode.The_left_hand_side_of_a_for_in_statement_must_be_a_variable_or_a_property_access],
        parser.curPos,
        parser.pos
      );
    }

    const expression = parseExpressionCoverGrammar(parser, context);

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
      parseIterationStatement(
        parser,
        (context | 0b00000000100000000001000010000000) ^ 0b00000000100000000000000010000000,
        /* allowFunction */ false,
        scope,
        labels,
        /* ownLabels */ null
      ),
      (forKeyword.flags | Constants.IsEscaped) ^ Constants.IsEscaped,
      pos,
      parser.curPos
    );
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

  if (parser.token !== SyntaxKind.Semicolon) condition = parseExpressionCoverGrammar(parser, context);

  consume(parser, context | Context.AllowRegExp, SyntaxKind.Semicolon);

  if (parser.token !== SyntaxKind.RightParen) incrementor = parseExpressionCoverGrammar(parser, context);

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
    parseIterationStatement(
      parser,
      (context | 0b00000000100000000001000010000000) ^ 0b00000000100000000000000010000000,
      /* allowFunction */ false,
      scope,
      labels,
      /* ownLabels */ null
    ),
    (forKeyword.flags | Constants.IsEscaped) ^ Constants.IsEscaped,
    pos,
    parser.curPos
  );
}

export function parseExpressionOrLabelledStatement(
  parser: ParserState,
  context: Context,
  allowFunction: boolean,
  scope: ScopeState,
  labels: any,
  ownLabels: any
): LabelledStatement | ExpressionStatement {
  const { token, curPos, nodeFlags } = parser;
  const expr: any = parsePrimaryExpression(parser, context, LeftHandSide.None);

  // 'let' followed by '[' means a lexical declaration, which should not appear here.
  if (token === SyntaxKind.LetKeyword && parser.token === SyntaxKind.LeftBracket) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode._let_is_a_restricted_production_at_the_start_of_a_statement],
      curPos,
      parser.curPos
    );
  }

  // - `() => {}
  //    () => {}`
  if (
    parser.nodeFlags & NodeFlags.NewLine &&
    expr.kind === SyntaxKind.ArrowFunction &&
    parser.token === SyntaxKind.LeftParen
  ) {
    return parseExpressionStatement(parser, context, expr, curPos);
  }

  return token & Constants.Identifier && parser.token === SyntaxKind.Colon
    ? parseLabelledStatement(
        parser,
        context,
        expr as Identifier,
        token,
        nodeFlags,
        allowFunction,
        scope,
        labels,
        ownLabels,
        curPos
      )
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

// BindingIdentifier :
//   Identifier
//   `yield`
//   `await`
function parseBindingIdentifier(
  parser: ParserState,
  context: Context,
  scope: ScopeState,
  type: BindingType,
  diagnosticMessage?: DiagnosticCode
): Identifier | DummyIdentifier {
  const { token, curPos, pos, tokenValue, tokenRaw } = parser;

  if (token & Constants.Identifier) {
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
        curPos,
        parser.pos
      );
    } else if (
      context & (Context.Module | Context.ClassStaticBlockContext | Context.AwaitContext) &&
      token === SyntaxKind.AwaitKeyword
    ) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error | DiagnosticKind.EarlyError,
        diagnosticMap[
          context & Context.ClassStaticBlockContext
            ? DiagnosticCode.Await_expression_cannot_be_used_inside_class_static_block
            : context & Context.Parameters
            ? DiagnosticCode._await_expression_cannot_be_used_in_function_parameters
            : context & Context.Module
            ? DiagnosticCode.Identifier_expected_await_is_a_reserved_word_in_module_goal
            : DiagnosticCode._await_cannot_be_used_as_an_identifier_here
        ],
        curPos,
        pos
      );
    } else if (context & Context.Strict && token & SyntaxKind.IsFutureReserved) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error | DiagnosticKind.EarlyError,
        diagnosticMap[DiagnosticCode.Identifier_expected_Reserved_word_in_strict_mode],
        curPos,
        pos
      );
    } else if (token === SyntaxKind.PrivateIdentifier) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[
          diagnosticMessage
            ? diagnosticMessage
            : DiagnosticCode.Private_identifiers_are_not_allowed_outside_class_bodies
        ],
        curPos,
        pos
      );
    }

    parser.assignable = true;

    addVarOrBlock(parser, context, scope, parser.tokenValue, type);
    nextToken(parser, context);
    return createIdentifier(tokenValue, tokenRaw, curPos, parser.curPos);
  }

  if (parser.previousErrorPos !== pos) {
    parser.previousErrorPos = pos;
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[diagnosticMessage ? diagnosticMessage : DiagnosticCode.Binding_identifier_expected],
      curPos,
      pos
    );
  }
  return createDummyIdentifier(curPos, curPos);
}

// IdentifierReference :
//   Identifier
//   [~Yield] `yield`
//   [~Await] `await`
function parseIdentifierReference(
  parser: ParserState,
  context: Context,
  diagnosticMessage?: DiagnosticCode
): Identifier | DummyIdentifier {
  const { curPos, tokenValue, tokenRaw, pos } = parser;

  if (parser.token & Constants.Identifier) {
    parser.assignable = true;
    if (context & (Context.Strict | Context.YieldContext) && parser.token === SyntaxKind.YieldKeyword) {
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
        curPos,
        parser.pos
      );
    }
    if (context & Context.Strict && parser.token & SyntaxKind.IsFutureReserved && parser.previousErrorPos !== pos) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[
          parser.token === SyntaxKind.YieldKeyword
            ? DiagnosticCode.Identifier_expected_yield_is_a_reserved_word_in_strict_mode
            : DiagnosticCode.Identifier_expected_Reserved_word_in_strict_mode
        ],
        curPos,
        pos
      );
    }
    nextToken(parser, context);
    return createIdentifier(tokenValue, tokenRaw, curPos, parser.curPos);
  }

  if (diagnosticMessage && parser.previousErrorPos !== pos) {
    parser.previousErrorPos = pos;
    parser.onError(DiagnosticSource.Parser, DiagnosticKind.Error, diagnosticMap[diagnosticMessage], parser.curPos, pos);
  }

  return createDummyIdentifier(curPos, curPos);
}

// IdentifierName
function parseIdentifier(
  parser: ParserState,
  context: Context,
  check: number,
  diagnosticMessage?: DiagnosticCode
): Identifier | DummyIdentifier {
  const { curPos, tokenValue, tokenRaw, pos } = parser;
  parser.assignable = true;
  if (parser.token & check) {
    nextToken(parser, context);
    return createIdentifier(tokenValue, tokenRaw, curPos, parser.curPos);
  }
  if (parser.previousErrorPos !== pos) {
    parser.previousErrorPos = pos;
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error | DiagnosticKind.EarlyError,
      diagnosticMap[diagnosticMessage ? diagnosticMessage : DiagnosticCode.Identifier_expected],
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
  labels: any,
  ownLabels: any
): BlockStatement {
  const pos = parser.curPos;
  const nodeFlags = parser.nodeFlags;
  if (consume(parser, context | Context.AllowRegExp, SyntaxKind.LeftBrace)) {
    const block = parseBlock(parser, context | Context.InBlock, scope, labels, ownLabels);
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
    return createBlockStatement(block, nodeFlags | NodeFlags.IsStatement, pos, parser.curPos);
  }
  // Empty list
  return createBlockStatement(
    createBlock([], NodeFlags.IsStatement, pos, parser.curPos),
    nodeFlags | NodeFlags.IsStatement,
    pos,
    pos
  );
}

// Block : `{` StatementList `}`
function parseBlock(parser: ParserState, context: Context, scope: ScopeState, labels: any, ownLabels: any): Block {
  const curPos = parser.curPos;
  const statements: StatementNode[] = [];
  const flags = parser.nodeFlags;
  // We avoid making a a new 'catch scope' while parsing out a "TryStatement" for
  // cases like 'try {} catch(x) {}'. Instead we continue with current scope.
  while (parser.token & Constants.StatementOrExpression) {
    statements.push(parseStatementListItem(parser, context, scope, labels, ownLabels));
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
    const operatorToken = parseTokenNode(parser, context | Context.AllowRegExp, NodeFlags.ExpressionNode);
    const right = parseExpression(parser, context);
    parser.assignable = false;
    return createAssignmentExpression(expr, operatorToken, right, pos, parser.curPos);
  }

  return parseShortCircuitExpression(parser, context, expr, pos);
}

function parseTokenNode(parser: ParserState, context: Context, flags: NodeFlags): SyntaxToken<TokenSyntaxKind> {
  const pos = parser.curPos;
  const kind = parser.token;
  const nodeFlags = parser.nodeFlags;
  parser.assignable = false;
  nextToken(parser, context);
  return createToken(kind, nodeFlags | flags | NodeFlags.ChildLess, pos, parser.curPos);
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
  const questionToken = consumeToken(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.QuestionMark,
    DiagnosticCode.Expression_expected
  );
  const consequent = parseExpression(
    parser,
    (context | 0b00000000110000000000000010000000) ^ 0b00000000100000000000000010000000
  );
  const colonToken = consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.Colon);
  const alternate = parseExpression(parser, (context | Context.InConditionalExpr) ^ Context.InConditionalExpr);
  parser.assignable = false;
  return createConditionalExpression(
    shortCircuit,
    questionToken,
    consequent,
    colonToken,
    alternate,
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

    parser.assignable = false;

    left = createBinaryExpression(
      left,
      parseTokenNode(parser, context | Context.AllowRegExp, NodeFlags.ExpressionNode),
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
  leftHandSideContext: LeftHandSide
): ExpressionNode {
  const pos = parser.curPos;
  const expression = parsePrimaryExpression(parser, context, leftHandSideContext);
  return parseMemberExpression(parser, context, expression, SyntaxKind.IsPropertyOrCall, pos);
}

function parseExpression(parser: ParserState, context: Context): ExpressionNode {
  const curPos = parser.curPos;
  let expr = parsePrimaryExpression(parser, context, LeftHandSide.None);
  expr = parseMemberExpression(parser, context, expr, SyntaxKind.IsPropertyOrCall, curPos);
  expr = parseAssignmentExpression(parser, context, expr, curPos);
  return expr;
}

function parseExpressionCoverGrammar(parser: ParserState, context: Context): ExpressionNode {
  const curPos = parser.curPos;
  const property = parseExpression(parser, context);
  return parser.token === SyntaxKind.Comma ? parseCommaOperator(parser, context, property, curPos) : property;
}

function parseMemberExpression(
  parser: ParserState,
  context: Context,
  expr: ExpressionNode,
  check: number,
  pos: number
): ExpressionNode {
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
    chain = createCallChain(chain, /* typeArguments */ null, parseArguments(parser, context), pos, parser.curPos);
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
  } else if (context & Context.OptionsAllowTypes && parser.token === SyntaxKind.LessThan) {
    chain = createCallChain(
      chain as any,
      parseTypeParameterInstantiation(parser, context),
      parseArguments(parser, context),
      pos,
      parser.curPos
    );
  } else if (parser.token === SyntaxKind.TemplateTail || parser.token === SyntaxKind.TemplateCont) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error | DiagnosticKind.EarlyError,
      diagnosticMap[DiagnosticCode.Tagged_template_expressions_are_not_permitted_in_an_optional_chain],
      parser.curPos,
      parser.pos
    );

    chain = createTaggedTemplate(
      chain as any,
      parser.token === SyntaxKind.TemplateTail
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
    (SyntaxKind.IsKeyword |
      SyntaxKind.IsFutureReserved |
      SyntaxKind.IsIdentifier |
      SyntaxKind.IsPropertyOrCall |
      SyntaxKind.IsLessThanOrLeftParen)
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
      chain = createCallChain(
        chain as any,
        /* typeArguments */ null,
        parseArguments(parser, context),
        pos,
        parser.curPos
      );
    } else if (context & Context.OptionsAllowTypes && parser.token === SyntaxKind.LessThan) {
      chain = createCallChain(
        chain as any,
        parseTypeParameterInstantiation(parser, context),
        parseArguments(parser, context),
        pos,
        parser.curPos
      );
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
  if (parser.token & Constants.IdentifierOrKeyword) {
    return parser.token === SyntaxKind.PrivateIdentifier
      ? parsePrivateIdentifier(parser, context)
      : parseIdentifier(parser, context, Constants.IdentifierOrKeyword, DiagnosticCode.Identifier_expected);
  }

  parser.onError(
    DiagnosticSource.Parser,
    DiagnosticKind.Error | DiagnosticKind.EarlyError,
    diagnosticMap[DiagnosticCode.Dot_property_must_be_an_identifier],
    pos,
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
  if (member.kind === SyntaxKind.Super && parser.token === SyntaxKind.PrivateIdentifier) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error | DiagnosticKind.EarlyError,
      diagnosticMap[DiagnosticCode.Private_fields_can_t_be_accessed_on_super],
      parser.curPos,
      parser.pos
    );
  }
  parser.assignable = true;
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
      pos,
      parser.pos
    );
  }
  expression = parseExpressionCoverGrammar(
    parser,
    (context | 0b00000000100000000000000010000000) ^ 0b00000000100000000000000010000000
  );

  consume(parser, context, SyntaxKind.RightBracket);
  parser.assignable = true;
  return createMemberAccessExpression(member, expression, pos, parser.curPos);
}

function parseCallExpression(parser: ParserState, context: Context, expr: ExpressionNode, pos: number): CallExpression {
  const nodeFlags = parser.nodeFlags;
  const argumentList = parseArguments(parser, context);
  parser.assignable = false;
  return createCallExpression(
    expr,
    argumentList,
    nodeFlags | NodeFlags.ExpressionNode | NodeFlags.IsCallExpression,
    pos,
    parser.curPos
  );
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

  const contents = parseConciseOrFunctionBody(
    parser,
    ((context | 0b00000000010000000101111100101000) ^ 0b00000000010000000101111100101000) |
      (asyncToken ? Context.AwaitContext : Context.None),
    scope,
    (flags & NodeFlags.NoneSimpleParamList) < 1
  );

  parser.assignable = false;
  return createArrowFunction(
    arrowToken,
    typeParameters,
    params,
    asyncToken,
    returnType,
    contents,
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
      /* scopeError*/ (scope.flags & ScopeFlags.Error) > 0,
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
  // Single-expression body
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
  while (parser.token & Constants.ArgumentList) {
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
  return parseCommaOperator(
    parser,
    context,
    parseAssignmentExpression(
      parser,
      context,
      parseMemberExpression(parser, context, expr, SyntaxKind.IsPropertyOrCall, pos),
      pos
    ),
    pos
  );
}

// PrimaryExpression :
//   ...
function parsePrimaryExpression(
  parser: ParserState,
  context: Context,
  leftHandSideContext: LeftHandSide
): ExpressionNode {
  if (parser.token & SyntaxKind.IsIdentifier) {
    // - `async`
    if (parser.token === SyntaxKind.AsyncKeyword) {
      return parseFunctionExpression(parser, context, leftHandSideContext);
    }

    // - `#private`
    if (parser.token === SyntaxKind.PrivateIdentifier) {
      return parsePrivateIdentifier(parser, context);
    }

    // - `this`
    if (parser.token === SyntaxKind.ThisKeyword) {
      return consumeKeywordAndCheckForEscapeSequence(
        parser,
        context,
        SyntaxKind.ThisKeyword,
        NodeFlags.ExpressionNode,
        parser.curPos
      );
    }

    // - `await`
    if (context & (Context.AwaitContext | Context.Module) && parser.token === SyntaxKind.AwaitKeyword) {
      return parseAwaitExpression(parser, context, leftHandSideContext);
    }

    const token = parser.token;
    const expression = parseIdentifierReference(parser, context, DiagnosticCode.Identifier_expected);

    // - `x => y`
    if (parser.token === SyntaxKind.Arrow) {
      if (leftHandSideContext) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[
            leftHandSideContext & LeftHandSide.ForStatement
              ? DiagnosticCode.The_left_hand_side_of_a_for_in_or_of_statement_must_not_be_an_arrow_function
              : DiagnosticCode.Expected_a
          ],
          expression.start,
          parser.pos
        );
      }

      const scope = {
        kind: ScopeKind.ArrowParams,
        scope: { kind: ScopeKind.Block, scope: null, flags: ScopeFlags.None },
        flags: ScopeFlags.None
      };

      addBlockName(parser, context, scope, expression.text, BindingType.ArgumentList);

      return parseArrowFunction(
        parser,
        context,
        scope,
        /*typeParameters */ null,
        /* returnType */ null,
        /* params */ expression,
        /* asyncToken */ null,
        /* nodeFlags */ NodeFlags.ExpressionNode,
        expression.start
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
      return parsePrefixUpdateExpression(parser, context, leftHandSideContext);
    case SyntaxKind.DeleteKeyword:
    case SyntaxKind.Negate:
    case SyntaxKind.Complement:
    case SyntaxKind.Add:
    case SyntaxKind.Subtract:
    case SyntaxKind.TypeofKeyword:
    case SyntaxKind.VoidKeyword:
      return parseUnaryExpression(parser, context, leftHandSideContext);
    case SyntaxKind.FunctionKeyword:
      return parseFunctionExpression(parser, context, leftHandSideContext);
    case SyntaxKind.Decorator:
    case SyntaxKind.ClassKeyword:
      return parseClassExpression(parser, context);
    case SyntaxKind.NullKeyword:
    case SyntaxKind.TrueKeyword:
    case SyntaxKind.FalseKeyword:
      return consumeKeywordAndCheckForEscapeSequence(
        parser,
        context,
        parser.token,
        NodeFlags.ExpressionNode,
        parser.curPos
      );
    case SyntaxKind.LeftBracket:
      return parseArrayLiteral(parser, context);
    case SyntaxKind.LeftBrace:
      return parseObjectLiteral(parser, context);
    case SyntaxKind.LeftParen:
      return parseCoverParenthesizedExpressionAndArrowParameterList(parser, context, leftHandSideContext);
    case SyntaxKind.YieldKeyword:
      return parseYieldIdentifierOrExpression(parser, context, leftHandSideContext);
    case SyntaxKind.NewKeyword:
      return parseNewExpression(parser, context);
    case SyntaxKind.SuperKeyword:
      return parseSuperExpression(parser, context);
    case SyntaxKind.RegularExpression:
      return parseRegularExpression(parser, context);
    case SyntaxKind.BigIntLiteral:
      return parseBigIntLiteral(parser, context);
    case SyntaxKind.TemplateTail:
      return parseTemplateTail(
        parser,
        context,
        NodeFlags.ExpressionNode | NodeFlags.ChildLess | NodeFlags.TemplateLiteral
      );
    case SyntaxKind.TemplateCont:
      return parseTemplateExpression(parser, context, /*isTaggedTemplate*/ false);
    case SyntaxKind.ImportKeyword:
      return parseImportMetaOrCall(parser, context, leftHandSideContext);
    case SyntaxKind.LessThan:
      if (context & Context.OptionsAllowTypes && !speculate(parser, context, nextTokenIsLeftParen, true)) {
        return parseCoverParenthesizedExpressionAndArrowParameterList(parser, context, leftHandSideContext);
      }
  }

  const { curPos, tokenValue, token } = parser;

  const expr = parseIdentifierReference(parser, context, DiagnosticCode.Identifier_expected);

  if (token & SyntaxKind.IsFutureReserved) {
    if (parser.token === SyntaxKind.Arrow) {
      if (leftHandSideContext & (LeftHandSide.NotAssignable | LeftHandSide.DisallowClassExtends)) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.Expected_a],
          curPos,
          parser.pos
        );
      }

      if (leftHandSideContext & LeftHandSide.NewExpression) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.Expected_a],
          curPos,
          parser.pos
        );
      }

      const scope = {
        kind: ScopeKind.ArrowParams,
        scope: { kind: ScopeKind.Block, scope: null, flags: ScopeFlags.None },
        flags: ScopeFlags.None
      };

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
  if (parser.destructible & DestructibleKind.MustDestruct || expr.flags & NodeFlags.PrototypeField) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[
        expr.flags & NodeFlags.PrototypeField
          ? DiagnosticCode.An_object_literal_cannot_have_multiple_properties_with_the_name___proto
          : parser.destructible & DestructibleKind.CoverInitializedName
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
  const flags = parser.nodeFlags;
  nextToken(parser, context | Context.AllowRegExp);
  const propertyDefinitionList = parsePropertyDefinitionList(parser, context, scope, type);
  consume(parser, context, SyntaxKind.RightBrace, DiagnosticCode.The_parser_expected_to_find_a_to_match_the_token_here);

  if (parser.token & SyntaxKind.IsAssignOp) {
    if (parser.token !== SyntaxKind.Assign || parser.destructible & DestructibleKind.NotDestructible) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[
          parser.destructible & DestructibleKind.NotDestructible
            ? DiagnosticCode.The_left_hand_side_must_be_a_variable_or_a_property_access
            : DiagnosticCode.Expression_exprected_A_compound_assignment_or_an_logical_assignment_cannot_follow_an_object_literal
        ],
        pos,
        parser.pos
      );
    }
    const node = createAssignmentExpression(
      createObjectLiteral(
        propertyDefinitionList,
        flags | propertyDefinitionList.flags | NodeFlags.ExpressionNode,
        pos,
        parser.curPos
      ),
      parseTokenNode(parser, context, NodeFlags.ExpressionNode),
      parseExpression(parser, context),
      pos,
      parser.curPos
    );
    parser.destructible = (parser.destructible | DestructibleKind.MustDestruct) ^ DestructibleKind.MustDestruct;
    return node;
  }
  return createObjectLiteral(
    propertyDefinitionList,
    flags | propertyDefinitionList.flags | NodeFlags.ExpressionNode,
    pos,
    parser.curPos
  );
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

  if (prototypeCount > 1) flags |= NodeFlags.PrototypeField;
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
    return createSpreadProperty(
      consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.Ellipsis),
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

  let nodeFlags = parser.nodeFlags | NodeFlags.ExpressionNode;

  let destructible = DestructibleKind.None;

  if (generatorToken) nodeFlags |= NodeFlags.Generator;

  if (parser.token & Constants.Identifier) {
    const token = parser.token;

    key = parseIdentifier(parser, context, Constants.IdentifierOrKeyword, DiagnosticCode.Identifier_expected);

    // Check for a modifier keyword
    if (parser.token & 0b00000100110000000100000000000000) {
      if (token === SyntaxKind.AsyncKeyword) {
        nodeFlags |= NodeFlags.Async;
        asyncKeyword = createToken(SyntaxKind.AsyncKeyword, nodeFlags | NodeFlags.ChildLess, pos, parser.curPos);
        if (nodeFlags & Constants.IsEscaped) {
          parser.onError(
            DiagnosticSource.Parser,
            DiagnosticKind.Error,
            diagnosticMap[DiagnosticCode.Keywords_cannot_contain_escape_characters],
            parser.curPos,
            parser.pos
          );
        }
        generatorToken = consumeOptToken(parser, context, SyntaxKind.Multiply);
        if (generatorToken) nodeFlags |= NodeFlags.Generator;
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
        getKeyword = createToken(SyntaxKind.GetKeyword, nodeFlags | NodeFlags.ChildLess, pos, parser.curPos);
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
        setKeyword = createToken(SyntaxKind.SetKeyword, nodeFlags | NodeFlags.ChildLess, pos, parser.curPos);
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
    if ((context & Context.OptionsDisableWebCompat) < 1 && key.text === '__proto__') {
      nodeFlags |= NodeFlags.PrototypeField;
    }

    // - `({* ident })`
    if (parser.token & SyntaxKind.IsLessThanOrLeftParen || generatorToken) {
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

    // - `({ x = y })`
    // - `({ x })`
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
        if (type & BindingType.InArrow) {
          addVarOrBlock(parser, context, scope, key.text, type);
        }
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
    if ((context & Context.OptionsDisableWebCompat) < 1 && parser.tokenValue === '__proto__') {
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
    let left;

    if (parser.token & Constants.IdentifierOrKeyword) {
      const colonValue = parser.tokenValue;
      left = parsePrimaryExpression(parser, context, LeftHandSide.None);

      const token = parser.token;

      left = parseMemberExpression(parser, context, left, SyntaxKind.IsPropertyOrCall, pos);

      if (parser.token === SyntaxKind.RightBrace || parser.token === SyntaxKind.Comma) {
        // '({x : y =', '({x : y,' or '({x : y}'
        if (token === SyntaxKind.RightBrace || token === SyntaxKind.Assign || token === SyntaxKind.Comma) {
          if (!parser.assignable) destructible |= DestructibleKind.NotDestructible;
        } else {
          destructible |= parser.assignable ? DestructibleKind.Assignable : DestructibleKind.NotDestructible;
        }
      } else if (parser.token === SyntaxKind.Assign) {
        if (parser.assignable) {
          if (type & BindingType.InArrow) {
            addVarOrBlock(parser, context, scope, colonValue, type);
          }

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
        left = parseMemberExpression(parser, context, left, SyntaxKind.IsPropertyOrCall, pos);

        destructible = parser.assignable ? DestructibleKind.Assignable : DestructibleKind.NotDestructible;

        left = parseAssignmentExpression(parser, context, left, pos);
      }
    } else {
      left = parseLeftHandSideExpression(parser, context, LeftHandSide.None);

      destructible |= parser.assignable ? DestructibleKind.Assignable : DestructibleKind.NotDestructible;

      if (parser.token === SyntaxKind.Comma || parser.token === SyntaxKind.RightBrace) {
        if (!parser.assignable) {
          destructible |= DestructibleKind.NotDestructible;
        }
      } else {
        left = parseMemberExpression(parser, context, left, SyntaxKind.IsPropertyOrCall, pos);

        destructible = DestructibleKind.None;

        if (
          (parser.token as SyntaxKind) !== SyntaxKind.Comma &&
          (parser.token as SyntaxKind) !== SyntaxKind.RightBrace
        ) {
          left = parseAssignmentExpression(parser, context, left, pos);
        }
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

  // - `class X { foo?<T>(): T }`
  // - `({ foo<T>(): T {} })`
  const typeParameters = parseTypeParameterDeclaration(parser, context);
  if (nodeFlags & NodeFlags.Constructor) {
  } else {
    context = (context | Context.InConstructor | Context.SuperCall) ^ (Context.InConstructor | Context.SuperCall);
  }

  const scope = {
    kind: ScopeKind.FunctionParams,
    scope: {
      kind: ScopeKind.Block,
      scope: null,
      flags: ScopeFlags.None
    },
    flags: ScopeFlags.None
  };

  context |= Context.SuperProperty;

  context =
    ((context | 0b00000000100000000000011010000000) ^ 0b00000000100000000000011010000000) |
    (nodeFlags & NodeFlags.Async ? Context.AwaitContext : Context.None) |
    (nodeFlags & NodeFlags.Generator ? Context.YieldContext : Context.None);

  const methodParameters = parsMethodParameters(parser, context, nodeFlags, scope);

  const returnType = parseType(parser, context);

  const contents = parseFunctionBody(
    parser,
    context | Context.NewTarget | Context.IsOutsideFnOrArrow,
    scope,
    /* scopeError*/ (scope.flags & ScopeFlags.Error) > 0,
    /* isDecl */ false,
    /* isSimpleParameterList */ (methodParameters.flags & NodeFlags.NoneSimpleParamList) < 1,
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
  if (consume(parser, context | Context.AllowRegExp, SyntaxKind.LeftParen, DiagnosticCode.Method_definition_expected)) {
    if (parser.token === SyntaxKind.RightParen) {
      if (nodeFlags & NodeFlags.Setter) {
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
        diagnosticMap[
          parser.token === SyntaxKind.ThisKeyword
            ? DiagnosticCode.A_get_accessor_cannot_have_a_this_parameter
            : DiagnosticCode.A_get_accessor_cannot_have_parameters
        ],
        parser.curPos,
        parser.pos
      );
    }
    const curpPos = parser.curPos;
    let trailingComma = false;
    let count = 0;
    while (parser.token & Constants.FormalParameterList) {
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
        if (parser.token === SyntaxKind.ThisKeyword) {
          parser.onError(
            DiagnosticSource.Parser,
            DiagnosticKind.Error | DiagnosticKind.EarlyError,
            diagnosticMap[
              context & Context.OptionsAllowTypes
                ? DiagnosticCode.A_set_accessor_cannot_have_a_this_parameter
                : DiagnosticCode.The_this_keyword_cannot_be_a_formal_parameter
            ],
            parser.curPos,
            parser.pos
          );
        }
      }

      const parameter = parseFormalParameter(parser, context | Context.Parameters, scope, count);

      count++;
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
    consume(parser, context, SyntaxKind.RightParen, DiagnosticCode.Expected_a_to_match_the_token_here);
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
  // - `{...x};`
  // - `{...x/y};`
  // - `{...x};`
  // - `({...x}) => y;`
  // - `{...x} = y;`
  // - `{...this};`
  if (parser.token & Constants.Identifier) {
    const tokenValue = parser.tokenValue;
    let argument = parsePrimaryExpression(parser, context, LeftHandSide.None);
    let destructible = 0;

    const token = parser.token;
    argument = parseMemberExpression(parser, context, argument, SyntaxKind.IsPropertyOrCall, pos);

    if (parser.token !== SyntaxKind.Comma && parser.token !== SyntaxKind.RightBrace) {
      destructible |= DestructibleKind.NotDestructible;
      argument = parseAssignmentExpression(parser, context, argument, pos);
    }

    // - `{...a+b}`
    if (!parser.assignable) {
      destructible |= DestructibleKind.NotDestructible;
    } else if (token === SyntaxKind.RightBrace || token === SyntaxKind.Comma) {
      if (type & BindingType.InArrow) addVarOrBlock(parser, context, scope, tokenValue, type);
    } else {
      // - `{...a.b}=c`
      // - `let {...a.b}=c`
      // - `for ({...a.b} in c) d`
      // - `for (let {...a.b} in c) d`
      // - `{...a.b} = c`
      // - `({...a.b} = c)`
      // - `({...a.b}) => c`
      destructible |= DestructibleKind.Assignable;
    }
    if (parser.token !== SyntaxKind.RightBrace) {
      if (parser.token === SyntaxKind.Assign) {
        argument = parseAssignmentExpression(parser, context, argument, pos);
        destructible |= DestructibleKind.NotDestructible;
      } else {
        destructible |= DestructibleKind.NotDestructible;
      }
    }
    parser.destructible = destructible;
    return argument;
  }

  // - `({...[].x} = x);`
  // - `({...[][x]} = x);`
  // - `({...{}.x} = x);`
  if (parser.token & SyntaxKind.IsPatternStart) {
    let argument: any =
      parser.token === SyntaxKind.LeftBracket
        ? parseArrayLiteralOrAssignmentExpression(parser, context, scope, type)
        : parseObjectLiteralOrAssignmentExpression(parser, context, scope, type);

    const token = parser.token;
    let destructible = DestructibleKind.None;

    if (token !== SyntaxKind.Assign && token !== SyntaxKind.RightBrace && token !== SyntaxKind.Comma) {
      // - `({...[].x} = x);`
      if (parser.destructible & DestructibleKind.MustDestruct) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode._expected],
          parser.curPos,
          parser.pos
        );
      }

      argument = parseMemberExpression(parser, context, argument, SyntaxKind.IsPropertyOrCall, pos);
      // - `({ ...[x] }) => {}`
      // - `{...[] = c}`
      if (!parser.assignable) {
        destructible |= DestructibleKind.NotDestructible;
      }

      if ((parser.token & SyntaxKind.IsAssignOp) === SyntaxKind.IsAssignOp) {
        if (parser.token !== SyntaxKind.Assign) destructible |= DestructibleKind.NotDestructible;
        argument = parseAssignmentExpression(parser, context, argument, pos);
      } else {
        if ((parser.token & SyntaxKind.IsBinaryOp) === SyntaxKind.IsBinaryOp) {
          parseBinaryExpression(parser, context, argument, 4, parser.token, pos);
        }
        if (consumeOpt(parser, context | Context.AllowRegExp, SyntaxKind.QuestionMark)) {
          argument = parseConditionalExpression(parser, context, argument, pos);
        }
        destructible |= !parser.assignable ? DestructibleKind.NotDestructible : DestructibleKind.Assignable;
      }
    } else {
      destructible |=
        token === SyntaxKind.RightBrace && (token as any) !== SyntaxKind.Assign
          ? DestructibleKind.NotDestructible
          : parser.destructible;
    }
    if (parser.token !== SyntaxKind.RightBrace) {
      if (type & BindingType.ArgumentList) {
        destructible |= DestructibleKind.Assignable;
      }
      if (parser.token === SyntaxKind.Assign) {
        argument = parseAssignmentExpression(parser, context, argument, pos);
        destructible |= DestructibleKind.NotDestructible;
      } else {
        destructible |= DestructibleKind.NotDestructible;
      }
    }

    parser.destructible = destructible;
    return argument;
  }
  let destructible = DestructibleKind.Assignable;

  let argument = parseLeftHandSideExpression(parser, context, LeftHandSide.None);

  if (
    parser.token === SyntaxKind.Assign &&
    (parser.token as SyntaxKind) !== SyntaxKind.LeftBrace &&
    (parser.token as SyntaxKind) !== SyntaxKind.Comma
  ) {
    argument = parseAssignmentExpression(parser, context, argument, pos);
    destructible |= DestructibleKind.NotDestructible;
  } else {
    if (parser.token === SyntaxKind.Comma) {
      destructible |= DestructibleKind.NotDestructible;
    } else if ((parser.token as SyntaxKind) !== SyntaxKind.RightBrace) {
      argument = parseAssignmentExpression(parser, context, argument, pos);
    }

    destructible |= parser.assignable ? DestructibleKind.Assignable : DestructibleKind.NotDestructible;
  }
  if (parser.token !== SyntaxKind.RightBrace) {
    if (type & BindingType.ArgumentList) {
      destructible |= DestructibleKind.Assignable;
    }
    if (parser.token === SyntaxKind.Assign) {
      argument = parseAssignmentExpression(parser, context, argument, pos);
      destructible |= DestructibleKind.NotDestructible;
    } else {
      destructible |= DestructibleKind.NotDestructible;
    }
  }

  //if (kind & BindingKind.ArgumentList)
  //destructible |= isAsync ? DestructuringKind.CannotDestruct : DestructuringKind.Assignable;
  parser.destructible = destructible;
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
  const newToken = consumeKeywordAndCheckForEscapeSequence(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.NewKeyword,
    NodeFlags.ExpressionNode,
    pos
  );

  // - `new.target`
  if (consumeOpt(parser, context, SyntaxKind.Period)) {
    const targetKeyword = consumeKeywordAndCheckForEscapeSequence(
      parser,
      context,
      SyntaxKind.Target,
      NodeFlags.ExpressionNode,
      parser.curPos
    );
    if ((context & Context.NewTarget) < 1 || !targetKeyword) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[
          targetKeyword
            ? DiagnosticCode._new_target_only_allowed_within_functions
            : DiagnosticCode.The_only_valid_meta_property_for_new_is_new_target
        ],
        pos,
        parser.pos
      );
    }

    parser.assignable = false;
    return createNewTarget(newToken, targetKeyword, pos, parser.curPos);
  }

  let expression = parsePrimaryExpression(
    parser,
    (context | 0b00000000100000000000000010000000) ^ 0b00000000100000000000000010000000,
    LeftHandSide.NewExpression
  );

  // - `new x?.y`
  if (parser.token === SyntaxKind.QuestionMarkPeriod) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Invalid_optional_chain_from_new_expression],
      parser.curPos,
      parser.pos
    );
  }

  expression = parseMemberExpression(parser, context, expression, SyntaxKind.IsMember, pos);

  parser.assignable = false;
  return createNewExpression(
    newToken,
    expression,
    parser.token === SyntaxKind.LeftParen ? parseArguments(parser, context) : null,
    (newToken.flags | Constants.IsEscaped) ^ Constants.IsEscaped,
    pos,
    parser.curPos
  );
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
  return createPostfixUpdateExpression(
    parseTokenNode(parser, context, NodeFlags.ExpressionNode),
    expr,
    start,
    parser.curPos
  );
}

// UpdateExpression :
//   `++` UnaryExpression
//   `--` UnaryExpression
function parsePrefixUpdateExpression(
  parser: ParserState,
  context: Context,
  leftHandSideContext: LeftHandSide
): PrefixUpdateExpression {
  const curPos = parser.curPos;
  const operandToken = parseTokenNode(parser, context | Context.AllowRegExp, NodeFlags.ExpressionNode);
  const operand = parseLeftHandSideExpression(parser, context, LeftHandSide.None);
  if (leftHandSideContext & LeftHandSide.DisallowClassExtends) {
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
  if (leftHandSideContext & LeftHandSide.NewExpression) {
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
export function isPropertyWithPrivateFieldKey(node: any): boolean {
  return node.expression && node.expression.kind === SyntaxKind.PrivateIdentifier;
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
  leftHandSideContext: LeftHandSide
): UnaryExpression {
  const curPos = parser.curPos;
  const operandToken = parseTokenNode(parser, context | Context.AllowRegExp, NodeFlags.ExpressionNode);
  if (operandToken.flags & Constants.IsEscaped || leftHandSideContext & LeftHandSide.DisallowClassExtends) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[
        operandToken.flags & Constants.IsEscaped
          ? DiagnosticCode.Keywords_cannot_contain_escape_characters
          : DiagnosticCode.Expression_expected
      ],
      curPos,
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

  if (operandToken.kind === SyntaxKind.DeleteKeyword) {
    if (context & Context.Strict && expression.kind === SyntaxKind.Identifier) {
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
function parseArrayLiteral(parser: ParserState, context: Context): ArrayLiteral | AssignmentExpression {
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
  if (parser.destructible & DestructibleKind.MustDestruct) {
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
  return expr;
}

function parseArrayLiteralOrAssignmentExpression(
  parser: ParserState,
  context: Context,
  scope: any,
  type: BindingType
): ArrayLiteral | AssignmentExpression {
  const curPos = parser.curPos;
  const nodeFlags = parser.nodeFlags;
  consume(parser, context | Context.AllowRegExp, SyntaxKind.LeftBracket);
  const elementList = parseElementList(parser, context, scope, type);
  consume(parser, context, SyntaxKind.RightBracket, DiagnosticCode.Did_you_forgot_a_to_match_the_token);

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
    const node = createAssignmentExpression(
      createArrayLiteral(elementList, nodeFlags | NodeFlags.ExpressionNode, curPos, parser.curPos),
      parseTokenNode(parser, context | Context.AllowRegExp, NodeFlags.ExpressionNode),
      parseExpression(parser, context),
      curPos,
      parser.curPos
    );
    parser.destructible = (parser.destructible | DestructibleKind.MustDestruct) ^ DestructibleKind.MustDestruct;
    return node;
  }

  return createArrayLiteral(elementList, nodeFlags | NodeFlags.ExpressionNode, curPos, parser.curPos);
}

function parseElementList(parser: ParserState, context: Context, scope: ScopeState, type: BindingType): ElementList {
  const curPos = parser.curPos;
  const elements = [];
  const flags = parser.nodeFlags;

  let trailingComma = false;
  let destructible = DestructibleKind.None;

  while (parser.token & Constants.ElementList) {
    elements.push(parseArrayLiteralElement(parser, context, scope, type));
    destructible |= parser.destructible;
    if ((parser.token as SyntaxKind) === SyntaxKind.RightBracket) break;
    consume(parser, context | Context.AllowRegExp, SyntaxKind.Comma, DiagnosticCode._expected);
    if (parser.token === SyntaxKind.RightBracket) {
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

  // - `[x]`
  // - `[x, y]`
  // - `[x = y]`
  // - `[x.y]`
  // - `[x.y = z]`
  // - `[x + y]`
  // - `[this]`
  if (parser.token & Constants.Identifier) {
    const tokenValue = parser.tokenValue;
    let left = parsePrimaryExpression(parser, context, LeftHandSide.None);

    // - `([a:b]) => x`
    if (context & Context.OptionsAllowTypes && type & BindingType.InArrow) {
      if (parser.token === SyntaxKind.QuestionMark || parser.token === SyntaxKind.Colon) {
        let optionalToken = null;
        // An optional parameter cannot be used within an array pattern in an arrow head, but we parse it
        // out as part of the error recovery
        optionalToken = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.QuestionMark);

        if (optionalToken) {
          parser.onError(
            DiagnosticSource.Parser,
            DiagnosticKind.Error | DiagnosticKind.EarlyError,
            diagnosticMap[DiagnosticCode.An_optional_parameter_cannot_be_used_within_an_array_pattern],
            parser.curPos,
            parser.pos
          );
        }

        return createBindingElement(
          null,
          left as Identifier,
          /* error recovery */
          optionalToken,
          parseType(parser, context),
          parseInitializer(parser, context, false),
          NodeFlags.ExpressionNode,
          pos,
          parser.curPos
        );
      }
    }

    // - `[x = y]`
    // - `[x = y, z]`
    // - `[true = x]`
    // - `[await = x]`
    // - `[x = true]`
    if (parser.token === SyntaxKind.Assign) {
      // - `[true = x] = x`
      // - `[true = x]`
      if (!parser.assignable) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[
            DiagnosticCode.The_left_hand_side_of_an_assignment_expression_must_be_a_variable_or_a_property_access
          ],
          pos,
          parser.pos
        );
      }

      const operatorToken = parseTokenNode(parser, context | Context.AllowRegExp, NodeFlags.ExpressionNode);

      if (type & BindingType.InArrow) {
        addVarOrBlock(parser, context, scope, tokenValue, type);
      }

      const right = parseExpression(parser, context);
      parser.assignable = false;
      return createAssignmentExpression(left, operatorToken, right, pos, parser.curPos);
    }

    // - `[x]`
    // - `[x, z]`
    // - `[this]`
    if (parser.token === SyntaxKind.RightBracket || parser.token === SyntaxKind.Comma) {
      if (type & BindingType.InArrow) addVarOrBlock(parser, context, scope, tokenValue, type);
      parser.destructible = parser.assignable ? DestructibleKind.None : DestructibleKind.NotDestructible;
      return left;
    }

    let destructible =
      type & BindingType.ArgumentList
        ? // - `([x[y]] = z)`
          DestructibleKind.Assignable
        : (type & BindingType.Literal) !== BindingType.Literal
        ? DestructibleKind.NotDestructible
        : DestructibleKind.None;

    left = parseMemberExpression(parser, context, left, SyntaxKind.IsPropertyOrCall, pos);

    if (!parser.assignable) destructible = DestructibleKind.NotDestructible;

    if ((parser.token as SyntaxKind) === SyntaxKind.Comma || (parser.token as SyntaxKind) === SyntaxKind.RightBracket) {
      if ((parser.token & SyntaxKind.IsAssignOp) < 1) {
        // - `[...{a: b.b}.d] = c`
        // - `[...{a: b}.c] = []`
        // - `[...[{a: b}.c]] = [];`
        // - `[...[{prop: 1}.prop]] = []`
        // - `({"x": [y].slice(0)} = x)`
        // - `({"x": [y].slice(0)}) => x`
        // - `[...[x].map(y, z)] = a;`
        // - `({ident: {x}.join("")}) => x`
        destructible |= parser.assignable ? DestructibleKind.Assignable : DestructibleKind.NotDestructible;
      }
      parser.destructible = destructible;

      return left;
    }
    // - `[x.y = a] = z`
    // - `({ a: [a + 1] = [] });`
    // - `let({ a: [a + 1] = [] });`
    if ((parser.token as SyntaxKind) !== SyntaxKind.Assign) destructible |= DestructibleKind.NotDestructible;
    left = parseAssignmentExpression(parser, context, left, pos);

    parser.destructible = destructible;

    return left;
  }

  // - `[{}]`
  // - `[[]]`
  // - `[{..}]`
  // - `[{..}, x]`
  // - `[{..}.x]`
  // - `[{..}=x]`
  // - `[{}.foo] = x`
  // - `[{}[foo]] = x`
  // - `[{a}] = x`
  // - `[{a:b}] = x`
  // - `[{a:1}.foo] = x`
  // - `[{}.foo] = x`
  // - `[[..]]`
  // - `[[..], x]`
  // - `[[..].x]`
  // - `[[..]=x]`
  // - `[[..].foo] = x`
  // - `[[..][foo]] = x`
  // - `[[foo].length] = x`
  // - `[[foo].length = x] = x`
  if (parser.token & SyntaxKind.IsPatternStart) {
    let left: ArrayLiteral | ObjectLiteral | ExpressionNode =
      parser.token === SyntaxKind.LeftBracket
        ? parseArrayLiteralOrAssignmentExpression(parser, context, scope, type)
        : parseObjectLiteralOrAssignmentExpression(parser, context, scope, type);

    // - `([{a}:b]) => x`
    // - `([[a]:b]) => x`
    if (context & Context.OptionsAllowTypes && type & BindingType.InArrow) {
      const optionalToken = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.QuestionMark);
      if (optionalToken) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error | DiagnosticKind.EarlyError,
          diagnosticMap[DiagnosticCode.An_optional_parameter_cannot_be_used_within_an_array_pattern],
          parser.curPos,
          parser.pos
        );
      }

      if (optionalToken || parser.token === SyntaxKind.Colon) {
        return createBindingElement(
          null,
          left as any,
          /* error recovery */
          optionalToken,
          parseType(parser, context),
          parseInitializer(parser, context, false),
          NodeFlags.ExpressionNode,
          pos,
          parser.curPos
        );
      }
    }

    let destructible = parser.destructible;

    parser.assignable = destructible & DestructibleKind.NotDestructible ? false : true;

    if (parser.token === SyntaxKind.Comma || parser.token === SyntaxKind.RightBracket) {
      if (!parser.assignable) destructible |= DestructibleKind.NotDestructible;
    } else if ((parser.destructible & DestructibleKind.MustDestruct) < 1) {
      left = parseMemberExpression(parser, context, left as any, SyntaxKind.IsPropertyOrCall, pos);
      destructible = parser.assignable ? DestructibleKind.Assignable : DestructibleKind.NotDestructible;
      if (
        (parser.token as SyntaxKind) === SyntaxKind.Comma ||
        (parser.token as SyntaxKind) === SyntaxKind.RightBracket
      ) {
        if ((parser.token & SyntaxKind.IsAssignOp) < 1) {
          // - `[...{a: b.b}.d] = c`
          // - `[...{a: b}.c] = []`
          // - `[...[{a: b}.c]] = [];`
          // - `[...[{prop: 1}.prop]] = []`
          // - `({"x": [y].slice(0)} = x)`
          // - `({"x": [y].slice(0)}) => x`
          // - `[...[x].map(y, z)] = a;`
          // - `({ident: {x}.join("")}) => x`
          destructible |= parser.assignable ? DestructibleKind.Assignable : DestructibleKind.NotDestructible;
        }
        parser.destructible = destructible;

        return left;
      }
      // - `[x.y = a] = z`
      // - `({ a: [a + 1] = [] });`
      // - `let({ a: [a + 1] = [] });`
      if ((parser.token as SyntaxKind) !== SyntaxKind.Assign) destructible |= DestructibleKind.NotDestructible;
      left = parseAssignmentExpression(parser, context, left, pos);
    }

    parser.destructible = destructible;

    return left;
  }

  // - `([...{a}:b]) => x`
  // - `([...[a]:b]) => x`
  if (parser.token === SyntaxKind.Ellipsis) {
    const ellipsisToken = consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.Ellipsis);
    const left = parseArraySpreadArgument(parser, context, scope, type);
    if (context & Context.OptionsAllowTypes && type & BindingType.InArrow) {
      const optionalToken = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.QuestionMark);
      if (optionalToken) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error | DiagnosticKind.EarlyError,
          diagnosticMap[DiagnosticCode.An_optional_parameter_cannot_be_used_within_an_array_pattern],
          parser.curPos,
          parser.pos
        );
      }

      if ((parser.token as SyntaxKind) === SyntaxKind.Colon) {
        parser.destructible = DestructibleKind.None;

        return createBindingElement(
          ellipsisToken,
          left as any,
          /* error recovery */
          optionalToken,
          parseType(parser, context),
          parseInitializer(parser, context, false),
          NodeFlags.ExpressionNode,
          pos,
          parser.curPos
        );
      }
    }
    return createSpreadElement(ellipsisToken, left, pos, parser.curPos);
  }

  if ((parser.token as SyntaxKind) === SyntaxKind.Comma) return createElison(pos, pos);

  const token = parser.token;

  let destructible = DestructibleKind.None;

  let left = parseLeftHandSideExpression(parser, context, LeftHandSide.None);

  if (parser.token !== SyntaxKind.Comma && parser.token !== SyntaxKind.RightBracket) {
    left = parseAssignmentExpression(parser, context, left, pos);
    if ((BindingType.Literal | BindingType.ArgumentList) < 1 && token === SyntaxKind.LeftParen) {
      destructible |= DestructibleKind.NotDestructible;
    }
    // - `[x()] = obj`
    // - `[(x())] = obj`
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

function parseArgumentOrArrayLiteralElement(parser: ParserState, context: Context): ExpressionNode {
  return parser.token === SyntaxKind.Ellipsis ? parseSpreadElement(parser, context) : parseExpression(parser, context);
}

function parseArraySpreadArgument(
  parser: ParserState,
  context: Context,
  scope: ScopeState,
  type: BindingType
): ExpressionNode {
  const pos = parser.curPos;
  // - `{...x};`
  // - `{...x/y};`
  // - `{...x};`
  // - `({...x}) => y;`
  // - `{...x} = y;`
  // - `{...this};`
  if (parser.token & Constants.Identifier) {
    const tokenValue = parser.tokenValue;
    let argument = parsePrimaryExpression(parser, context, LeftHandSide.None);

    let destructible = 0;

    const token = parser.token;
    argument = parseMemberExpression(parser, context, argument, SyntaxKind.IsPropertyOrCall, pos);

    if (parser.token !== SyntaxKind.Comma && parser.token !== SyntaxKind.RightBracket) {
      destructible |= DestructibleKind.NotDestructible;
      argument = parseAssignmentExpression(parser, context, argument, pos);
    }

    // - `{...a+b}`
    if (!parser.assignable) {
      destructible |= DestructibleKind.NotDestructible;
    } else if (token === SyntaxKind.RightBracket || token === SyntaxKind.Comma) {
      if (type & BindingType.InArrow) addVarOrBlock(parser, context, scope, tokenValue, type);
    } else {
      // - `{...a.b}=c`
      // - `let {...a.b}=c`
      // - `for ({...a.b} in c);`
      // - `for (let {...a.b} in c);`
      // - `{...a.b} = c`
      // - `({...a.b} = c)`
      // - `({...a.b}) => c`
      destructible |= DestructibleKind.Assignable;
    }
    if (parser.token !== SyntaxKind.RightBracket) {
      if (parser.token === SyntaxKind.Assign) {
        argument = parseAssignmentExpression(parser, context, argument, pos);
        destructible |= DestructibleKind.NotDestructible;
      } else {
        destructible |= DestructibleKind.NotDestructible;
      }
    }
    parser.destructible = destructible;
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

    argument = parseMemberExpression(parser, context, argument, SyntaxKind.IsPropertyOrCall, pos);

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

export function convertArrowParameter(parser: ParserState, node: any): any {
  switch (node.kind) {
    case SyntaxKind.ArrayLiteral:
      return createArrayBindingPattern(
        convertArrowParameter(parser, node.elementList),
        node.flags,
        node.start,
        node.end
      );
    case SyntaxKind.ElementList:
      const listElements = [];
      const arrayElements = node.elements;
      let i = arrayElements.length;
      while (i--) {
        listElements.push(convertArrowParameter(parser, arrayElements[i]));
      }
      return createElementList(
        listElements,
        /* trailingComma */ node.trailingComma,
        NodeFlags.ExpressionNode,
        node.start,
        node.end
      );
    case SyntaxKind.AssignmentExpression:
      return createBindingElement(
        /* ellipsisToken */ null,
        convertArrowParameter(parser, node.left),
        /* optionalToken */ null,
        /* type */ null,
        node.right,
        NodeFlags.ExpressionNode,
        node.start,
        node.end
      );
    case SyntaxKind.ObjectLiteral:
      return createObjectBindingPattern(
        convertArrowParameter(parser, node.propertyList),
        node.flags | NodeFlags.ExpressionNode,
        node.start,
        node.end
      );
    case SyntaxKind.PropertyDefinitionList:
      const bindingProperty = [];
      const properties = node.properties;
      for (let i = 0, n = properties.length; i < n; ++i) {
        bindingProperty.push(convertArrowParameter(parser, properties[i]));
      }
      return createBindingPropertyList(
        bindingProperty,
        NodeFlags.ExpressionNode,
        /* trailingComma */ node.trailingComma,
        node.start,
        node.end
      );
    case SyntaxKind.CoverInitializedName: {
      return createBindingElement(
        /* ellipsisToken */ null,
        convertArrowParameter(parser, node.left),
        /* optionalToken */ null,
        /* type */ null,
        node.right,
        node.flags,
        node.start,
        node.end
      );
    }
    case SyntaxKind.PropertyDefinition:
      return createBindingProperty(
        /* optionalToken */ null,
        convertArrowParameter(parser, node.left),
        node.right,
        /* initializer */ null,
        node.start,
        node.end
      );
    case SyntaxKind.SpreadProperty:
      return createBindingElement(
        node.ellipsisToken,
        convertArrowParameter(parser, node.argument),
        /* optionalToken */ null,
        /* type */ null,
        /* left */ null,
        node.flags,
        node.start,
        node.end
      );
    case SyntaxKind.SpreadElement:
      return createBindingElement(
        node.ellipsisToken,
        node.argument,
        /* optionalToken */ null,
        /* type */ null,
        /* right */ null,
        node.flags | NodeFlags.ExpressionNode,
        node.start,
        node.end
      );
    default:
      return node;
  }
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
  leftHandSideContext: LeftHandSide
): ParenthesizedExpression | any {
  const curPos = parser.curPos;
  let typeParameters = null;
  let state = Tristate.False;
  let flags = NodeFlags.None;

  if (parser.token === SyntaxKind.LessThan) {
    state = Tristate.True;
    typeParameters = parseTypeParameterDeclaration(parser, context);
  }

  const scope = {
    kind: ScopeKind.ArrowParams,
    scope: { kind: ScopeKind.Block, scope: null, flags: ScopeFlags.None },
    flags: ScopeFlags.None
  };
  // Allow "in" inside parentheses
  context = (context | 0b00000000100000000000000010000000) ^ 0b00000000100000000000000010000000;

  consume(parser, context | Context.AllowRegExp, SyntaxKind.LeftParen);

  // - `() => x`
  // - `(() => x)`
  // - `return () => x`
  if (consumeOpt(parser, context, SyntaxKind.RightParen)) {
    if (leftHandSideContext & (LeftHandSide.NotAssignable | LeftHandSide.DisallowClassExtends)) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[
          leftHandSideContext & LeftHandSide.ForStatement
            ? DiagnosticCode.The_left_hand_side_of_a_for_in_or_of_statement_must_not_be_an_arrow_function
            : DiagnosticCode.Expected_a
        ],
        parser.curPos,
        parser.pos
      );
    }
    let isType = false;
    if (context & Context.OptionsAllowTypes && parser.token === SyntaxKind.Colon) {
      isType = context & Context.InConditionalExpr ? isValidReturnType(parser, context, curPos) : true;
    }

    switch (parser.token) {
      case SyntaxKind.Arrow:
      case SyntaxKind.Colon:
      case SyntaxKind.LeftBrace:
        if (leftHandSideContext & (LeftHandSide.NotAssignable | LeftHandSide.DisallowClassExtends)) {
          parser.onError(
            DiagnosticSource.Parser,
            DiagnosticKind.Error,
            diagnosticMap[
              leftHandSideContext & LeftHandSide.ForStatement
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
          /* returnType */ isType ? parseType(parser, context | Context.ArrowOrigin) : null,
          /* params */ [],
          /* asyncToken */ null,
          /* nodeFlags */ NodeFlags.ExpressionNode,
          curPos
        );
      // - `()`
      default:
        // Prevent duplicate diagnostics
        parser.previousErrorPos = parser.pos;
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.Expression_expected],
          parser.curPos,
          parser.pos
        );
        // This is an invalid case so create an dummy identifier and return
        return createDummyIdentifier(curPos, curPos);
    }
  }

  let expression: any;
  let destructible = DestructibleKind.None;

  if (parser.token & Constants.Identifier) {
    addBlockName(parser, context, scope, parser.tokenValue, BindingType.ArgumentList);

    expression = parsePrimaryExpression(parser, context, LeftHandSide.None);

    // - `(a?) => {}`
    // - `(a?: string) => {}`
    // - `(a?b:c)`
    if (context & Context.OptionsAllowTypes && parser.token === SyntaxKind.QuestionMark) {
      const questionMarkToken = consumeOptToken(parser, context, SyntaxKind.QuestionMark);
      if (
        (parser.token as SyntaxKind) === SyntaxKind.RightParen ||
        (parser.token as SyntaxKind) === SyntaxKind.Colon ||
        (parser.token as SyntaxKind) === SyntaxKind.Comma
      ) {
        state = Tristate.True;
        expression = createBindingElement(
          /* ellipsisToken */ null,
          /* left */ expression,
          /* optionalToken */ questionMarkToken,
          /* type */ parseType(parser, context),
          /* right */ parseInitializer(parser, context, false),
          NodeFlags.ExpressionNode,
          curPos,
          parser.curPos
        );
      } else {
        expression = createConditionalExpression(
          expression,
          questionMarkToken,
          parseExpression(parser, (context | 0b00000000110000000000000010000000) ^ 0b00000000100000000000000010000000),
          consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.Colon),
          parseExpression(parser, (context | Context.InConditionalExpr) ^ Context.InConditionalExpr),
          curPos,
          parser.curPos
        );
        state = Tristate.False;
        parser.assignable = false;
      }
      // - `(a: string) => {}"
    } else if (context & Context.OptionsAllowTypes && parser.token === SyntaxKind.Colon) {
      state = Tristate.True;

      expression = createBindingElement(
        /* ellipsisToken */ null,
        /* left */ expression,
        /* optionalToken */ null,
        /* type */ parseType(parser, context),
        /* right */ parseInitializer(parser, context, false),
        NodeFlags.ExpressionNode,
        curPos,
        parser.curPos
      );
    } else {
      // At this point, we do not know if this is an valid arrow function or an parenthese expression
      if (!state) state = Tristate.Unknown;

      // `(a)`
      // `(true)`
      // `(a,b)`
      // `(a) => {}`
      // `(a,b) => {}`
      if (parser.token === SyntaxKind.Comma || parser.token === SyntaxKind.RightParen) {
        if (!parser.assignable) {
          // - `(true) => {}`
          // - `(eval) => {}`
          // - `(arguments) => {}`
          destructible |= DestructibleKind.NotDestructible;
          parser.diagnosticStartPos = curPos;
        }
      } else {
        // - `(a=b)`
        // - `(a=b) => {}`
        // - `(a=b):c => {}`
        // - `(a=b,c)`
        // - `(a=b,c) => {}`
        // - `(a=b,c):d => {}`
        if (parser.token === SyntaxKind.Assign) {
          // - `(foo = x) => {}`
          flags |= NodeFlags.NoneSimpleParamList;
        } else {
          // - `(foo /= x) => {}`
          // - `(foo *= x) => {}`
          state = Tristate.False;
          destructible |= DestructibleKind.NotDestructible;
        }

        // If we have "(x[y])" then this is definitely not an arrow function
        if (parser.token & SyntaxKind.IsPropertyOrCall) {
          state = Tristate.False;
          // - `(a.[b])`
          // - `(a(b))`
          // - `(a.b)`
          expression = parseMemberExpression(parser, context, expression, SyntaxKind.IsPropertyOrCall, curPos);
        }

        // - `(a=b)`
        // - `(a.[b] = y)`
        // - `(a=b) => {}`
        if (
          (parser.token as SyntaxKind) !== SyntaxKind.RightParen &&
          (parser.token as SyntaxKind) !== SyntaxKind.Comma
        ) {
          expression = parseAssignmentExpression(parser, context, expression, curPos);
        }
      }
    }
    // - `([a]=b)`
    // - `([a]=b) => {}`
    // - `([a]=b):c => {}`
    // - `([a]?:b=b):c => {}`
    // - `([a]?):c => {}`
    // - `([a]=b,c)`
    // - `([a]=b,c) => {}`
    // - `([a]=b,c):d => {}`
    // - `({a}=b)`
    // - `({})`
    // - `({..})`
    // - `({..} = x)`
    // - `({..}, x)`
    // - `({..}.foo)`
    // - `({..}.foo = x)`
    // - `({..} + foo)`
    // - `({a}=b) => {}`
    // - `({a}=b):c => {}`
    // - `({a}?:b=b):c => {}`
    // - `({a}?):c => {}`
    // - `({a}=b,c)`
    // - `({a}=b,c) => {}`
    // - `({a}=b,c):d => {}`
  } else if (parser.token & SyntaxKind.IsPatternStart) {
    expression =
      parser.token === SyntaxKind.LeftBracket
        ? parseArrayLiteralOrAssignmentExpression(
            parser,
            context,
            scope,
            BindingType.ArgumentList | BindingType.InArrow
          )
        : parseObjectLiteralOrAssignmentExpression(
            parser,
            context,
            scope,
            BindingType.ArgumentList | BindingType.InArrow
          );

    flags |= NodeFlags.NoneSimpleParamList;

    // - `([a]?) => {}`
    // - `([a]?: string) => {}`
    // - `([a]?b:c)`
    // - `({a}?) => {}`
    // - `({a}?:string) => {}`
    // - `({a}?b:c)`
    if (parser.token === SyntaxKind.QuestionMark) {
      // - `([a]?)`
      // - `([a]?b:c)`
      // - `([a]?:b) => {}`
      // - `({a}?)`
      // - `({a}?b:c)`
      // - `({a}?:b) => {}`
      const questionMarkToken = consumeOptToken(parser, context, SyntaxKind.QuestionMark);
      if (
        (parser.token as SyntaxKind) === SyntaxKind.RightParen ||
        (parser.token as SyntaxKind) === SyntaxKind.Colon ||
        (parser.token as SyntaxKind) === SyntaxKind.Comma
      ) {
        state = Tristate.True;
        expression = createBindingElement(
          /* ellipsisToken */ null,
          /* left */ expression,
          /* optionalToken */ questionMarkToken,
          /* type */ parseType(parser, context),
          /* right */ parseInitializer(parser, context, false),
          NodeFlags.ExpressionNode,
          curPos,
          parser.curPos
        );
      } else {
        state = Tristate.False;
        expression = createConditionalExpression(
          expression,
          questionMarkToken,
          parseExpression(parser, (context | 0b00000000110000000000000010000000) ^ 0b00000000100000000000000010000000),
          consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.Colon),
          parseExpression(parser, (context | Context.InConditionalExpr) ^ Context.InConditionalExpr),
          curPos,
          parser.curPos
        );
        parser.assignable = false;
      }
      // - `([a]: string) => {}`
      // - `({a}: string) => {}`
    } else if (parser.token === SyntaxKind.Colon) {
      state = Tristate.True;

      expression = createBindingElement(
        /* ellipsisToken */ null,
        /* left */ expression as any,
        /* optionalToken */ null,
        /* type */ parseType(parser, context),
        /* right */ parseInitializer(parser, context, false),
        NodeFlags.ExpressionNode,
        curPos,
        parser.curPos
      );
      // - `([a])`
      // - `({a})`
      // - `([a]) => {}`
      // - `({a}) => {}`
      // - `([a]):b => {}`
      // - `({a}):b => {}`
      // - `([])`
      // - `([a].b)`
      // - `([a]?.b)`
      // - `({a}.b)`
      // - `({a}?.b)`
      // - `(a+b)`
    } else {
      state = Tristate.Unknown;

      // - `({web: true,  __proto__: x, __proto__: y});`
      if (expression.flags & NodeFlags.PrototypeField) {
        parser.diagnosticStartPos = curPos;
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.An_object_literal_cannot_have_multiple_properties_with_the_name___proto],
          parser.curPos,
          parser.pos
        );
      }

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

        // - `([a].b)`
        // - `([a]?.b)`
        // - `({a}.b)`
        // - `({a}?.b)`
        if (parser.token & SyntaxKind.IsPropertyOrCall) {
          state = Tristate.False;
          expression = parseMemberExpression(parser, context, expression, SyntaxKind.IsPropertyOrCall, curPos);
        }

        destructible |= DestructibleKind.NotDestructible;

        if (
          (parser.token as SyntaxKind) !== SyntaxKind.Comma &&
          (parser.token as SyntaxKind) !== SyntaxKind.RightParen
        ) {
          expression = parseAssignmentExpression(parser, context, expression, curPos);
        }
      }
    }
  } else if (parser.token === SyntaxKind.Ellipsis) {
    state = Tristate.True;
    expression = parseFormalParameter(parser, context | Context.Parameters, scope, /* count */ 0);
    // If we have something like `(32` then this is definitely not an arrow function
  } else {
    destructible |= DestructibleKind.NotDestructible;

    expression = parseExpression(parser, context);

    parser.assignable = true;

    if (parser.token === SyntaxKind.Comma) {
      const expressions: ExpressionNode[] = [expression];
      do {
        nextToken(parser, context | Context.AllowRegExp);
        expressions.push(parseExpression(parser, context));
      } while (parser.token === SyntaxKind.Comma);
      expression = createCommaOperator(expressions, curPos, parser.curPos);
      parser.assignable = false;
    }

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
        isType = context & Context.InConditionalExpr ? isValidReturnType(parser, context, curPos) : true;
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
        if (leftHandSideContext & (LeftHandSide.NotAssignable | LeftHandSide.DisallowClassExtends)) {
          parser.onError(
            DiagnosticSource.Parser,
            DiagnosticKind.Error,
            diagnosticMap[DiagnosticCode.Expected_a],
            parser.curPos,
            parser.pos
          );
        }

        expression = convertArrowParameter(parser, expression);

        return parseArrowFunction(
          parser,
          context,
          scope,
          typeParameters,
          parseType(parser, context | Context.ArrowOrigin),
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

  let expressions: any = [];

  // 12.16 Comma Operator
  if (consumeOpt(parser, context | Context.AllowRegExp, SyntaxKind.Comma)) {
    expressions = [expression];

    while (parser.token & Constants.DelimitedList) {
      if (parser.token & Constants.Identifier) {
        addBlockName(parser, context, scope, parser.tokenValue, BindingType.ArgumentList);
        expression = parsePrimaryExpression(parser, context, LeftHandSide.None);

        state = Tristate.Unknown;

        if (context & Context.OptionsAllowTypes && parser.token === SyntaxKind.QuestionMark) {
          const questionMarkToken = consumeOptToken(parser, context, SyntaxKind.QuestionMark);
          if (
            (parser.token as SyntaxKind) === SyntaxKind.RightParen ||
            (parser.token as SyntaxKind) === SyntaxKind.Colon ||
            (parser.token as SyntaxKind) === SyntaxKind.Comma
          ) {
            state = Tristate.True;
            expression = createBindingElement(
              /* ellipsisToken */ null,
              /* left */ expression,
              /* optionalToken */ questionMarkToken,
              /* type */ parseType(parser, context),
              /* right */ parseInitializer(parser, context, false),
              NodeFlags.ExpressionNode,
              curPos,
              parser.curPos
            );
          } else {
            state = Tristate.False;
            expression = createConditionalExpression(
              expression,
              questionMarkToken,
              parseExpression(
                parser,
                (context | 0b00000000110000000000000010000000) ^ 0b00000000100000000000000010000000
              ),
              consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.Colon),
              parseExpression(parser, (context | Context.InConditionalExpr) ^ Context.InConditionalExpr),
              curPos,
              parser.curPos
            );
            parser.assignable = false;
          }
          // - `(a, b: string) => {}"
        } else if (parser.token === SyntaxKind.Colon) {
          state = Tristate.True;

          expression = createBindingElement(
            /* ellipsisToken */ null,
            /* left */ expression,
            /* optionalToken */ null,
            /* type */ parseType(parser, context),
            /* right */ parseInitializer(parser, context, false),
            NodeFlags.ExpressionNode,
            curPos,
            parser.curPos
          );
        } else {
          // At this point, we do not know if this is an valid arrow function or an parenthese expression
          if (!state) state = Tristate.Unknown;

          // `(a, b)`
          // `(a, true)`
          // `(a,b)`
          // `(a,b) => {}`
          if (parser.token === SyntaxKind.Comma || parser.token === SyntaxKind.RightParen) {
            if (!parser.assignable) {
              // - `(a, true) => {}`
              // - `(a, eval) => {}`
              // - `(a, arguments) => {}`
              destructible |= DestructibleKind.NotDestructible;
              parser.diagnosticStartPos = curPos;
            }
          } else {
            // - `(a, b=c)`
            // - `(a, b=b) => {}`
            // - `(a, b=c):d => {}`
            // - `(a, b=c,d)`
            // - `(a, b=c,d) => {}`
            // - `(a, b=c,d):e => {}`
            if (parser.token === SyntaxKind.Assign) {
              // - `(a, b = x) => {}`
              flags |= NodeFlags.NoneSimpleParamList;
            } else {
              // - `(a, b /= x) => {}`
              // - `(a, b *= x) => {}`
              state = Tristate.False;
              destructible |= DestructibleKind.NotDestructible;
            }

            // If we have "(x[y])" then this is definitely not an arrow function
            if (parser.token & SyntaxKind.IsPropertyOrCall) {
              state = Tristate.False;
              // - `(a, b.[c])`
              // - `(a, b(c))`
              // - `(a, b.c)`
              expression = parseMemberExpression(parser, context, expression, SyntaxKind.IsPropertyOrCall, curPos);
            }

            // - `(a, b=c)`
            // - `(a, b.[c] = d)`
            // - `(a, b=c) => {}`
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
            ? parseArrayLiteralOrAssignmentExpression(
                parser,
                context,
                scope,
                BindingType.ArgumentList | BindingType.InArrow
              )
            : parseObjectLiteralOrAssignmentExpression(
                parser,
                context,
                scope,
                BindingType.ArgumentList | BindingType.InArrow
              );

        flags |= NodeFlags.NoneSimpleParamList;

        // - `(a, [a]?) => {}`
        // - `(a, [a]?: string) => {}`
        // - `(a, [a]?b:c)`
        // - `(a, {a}?) => {}`
        // - `(a, {a}?:string) => {}`
        // - `(a, {a}?b:c)`
        if (parser.token === SyntaxKind.QuestionMark) {
          // - `(a, [b]?)`
          // - `(a, [b]?c:d)`
          // - `(a, [b]?:c) => {}`
          // - `({a}?b:c, {a}?b:c)`
          // - `(a, {a}?:b) => {}`
          const questionMarkToken = consumeOptToken(parser, context, SyntaxKind.QuestionMark);
          if (
            (parser.token as SyntaxKind) === SyntaxKind.RightParen ||
            (parser.token as SyntaxKind) === SyntaxKind.Colon ||
            (parser.token as SyntaxKind) === SyntaxKind.Comma
          ) {
            state = Tristate.True;
            expression = createBindingElement(
              /* ellipsisToken */ null,
              /* left */ expression,
              /* optionalToken */ questionMarkToken,
              /* type */ parseType(parser, context),
              /* right */ parseInitializer(parser, context, false),
              NodeFlags.ExpressionNode,
              curPos,
              parser.curPos
            );
          } else {
            state = Tristate.False;
            expression = createConditionalExpression(
              expression,
              questionMarkToken,
              parseExpression(
                parser,
                (context | 0b00000000110000000000000010000000) ^ 0b00000000100000000000000010000000
              ),
              consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.Colon),
              parseExpression(parser, (context | Context.InConditionalExpr) ^ Context.InConditionalExpr),
              curPos,
              parser.curPos
            );
            parser.assignable = false;
          }
          // - `(a, [b]: string) => {}`
          // - `(a, {b}: string) => {}`
        } else if (parser.token === SyntaxKind.Colon) {
          state = Tristate.True;

          expression = createBindingElement(
            /* ellipsisToken */ null,
            /* left */ expression as any,
            /* optionalToken */ null,
            /* type */ parseType(parser, context),
            /* right */ parseInitializer(parser, context, false),
            NodeFlags.ExpressionNode,
            curPos,
            parser.curPos
          );
          // - `(a, [b])`
          // - `(a, {b})`
          // - `(a, [b]) => {}`
          // - `(a, {b}) => {}`
          // - `(a, [b]):c => {}`
          // - `(a, {b}):c => {}`
          // - `(a, [b])`
          // - `(a, [b].c)`
          // - `(a, [b]?.c)`
          // - `(a, {b}.c)`
          // - `(a, {b}?.c)`
          // - `(a, b+c)`
        } else {
          state = Tristate.Unknown;

          // - `({web: true,  __proto__: x, __proto__: y});`
          if (expression.flags & NodeFlags.PrototypeField) {
            parser.diagnosticStartPos = curPos;
            parser.onError(
              DiagnosticSource.Parser,
              DiagnosticKind.Error,
              diagnosticMap[DiagnosticCode.An_object_literal_cannot_have_multiple_properties_with_the_name___proto],
              parser.curPos,
              parser.pos
            );
          }

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

            // - `([a].b)`
            // - `([a]?.b)`
            // - `({a}.b)`
            // - `({a}?.b)`
            if (parser.token & SyntaxKind.IsPropertyOrCall) {
              state = Tristate.False;
              expression = parseMemberExpression(parser, context, expression, SyntaxKind.IsPropertyOrCall, curPos);
            }

            destructible |= DestructibleKind.NotDestructible;

            if (
              (parser.token as SyntaxKind) !== SyntaxKind.Comma &&
              (parser.token as SyntaxKind) !== SyntaxKind.RightParen
            ) {
              expression = parseAssignmentExpression(parser, context, expression, curPos);
            }
          }
        }
      } else if (parser.token === SyntaxKind.Ellipsis) {
        state = Tristate.True;
        expression = parseFormalParameter(parser, context | Context.Parameters, scope, /* count */ 0);
      } else {
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

      parser.assignable = false;
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
      isType = context & Context.InConditionalExpr ? isValidReturnType(parser, context, curPos) : true;
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
      if (leftHandSideContext & (LeftHandSide.NotAssignable | LeftHandSide.DisallowClassExtends)) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.Expected_a],
          parser.curPos,
          parser.pos
        );
      }

      const arrowParams = [];

      for (let i = 0; i < expressions.length; ++i) {
        arrowParams.push(convertArrowParameter(parser, expressions[i]));
      }

      return parseArrowFunction(
        parser,
        context,
        scope,
        typeParameters,
        parseType(parser, context),
        arrowParams,
        null,
        flags,
        curPos
      );
    }
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

function isValidReturnType(parser: ParserState, context: Context, pos: number) {
  return speculate(
    parser,
    context,
    function () {
      nextToken(parser, context); // ':'
      const isIdentifier = parser.token & Constants.Identifier;
      let expression: any = parsePrimaryExpression(parser, context, LeftHandSide.None);
      if (
        isIdentifier &&
        expression.kind === SyntaxKind.ArrowFunction &&
        (parser.token as SyntaxKind) === SyntaxKind.Colon
      ) {
        return true;
      }
      expression = parseAssignmentExpression(
        parser,
        context,
        parseMemberExpression(parser, context, expression, SyntaxKind.IsPropertyOrCall, pos),
        pos
      );
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
      return parseIdentifier(parser, context, Constants.IdentifierOrKeyword, DiagnosticCode.Identifier_expected);
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
  return parseBindingIdentifier(parser, context, scope, type, diagnosticMessage);
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
  let ellipsisToken = null;
  let left!: any;
  while (parser.token & 0b00010000101010000100000000000000) {
    const pos = parser.curPos;
    if (parser.token === SyntaxKind.Comma) {
      elements.push(createElison(pos, pos));
    } else {
      ellipsisToken = consumeOptToken(parser, context, SyntaxKind.Ellipsis);
      left = parseIdentifierOrPattern(parser, context, scope, type);
      if (
        ellipsisToken ||
        parser.token === SyntaxKind.QuestionMark ||
        parser.token === SyntaxKind.Colon ||
        parser.token === SyntaxKind.Assign
      ) {
        left = createBindingElement(
          ellipsisToken,
          left,
          consumeOptToken(parser, context, SyntaxKind.QuestionMark),
          parseType(parser, context),
          parseInitializer(parser, context, ellipsisToken ? true : false),
          NodeFlags.ExpressionNode,
          pos,
          parser.curPos
        );
      }
      elements.push(left);
    }
    if (parser.token === SyntaxKind.RightBracket) break;
    if (consumeOpt(parser, context, SyntaxKind.Comma)) {
      if (ellipsisToken) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[
            parser.token === SyntaxKind.RightBrace
              ? DiagnosticCode.A_rest_parameter_or_binding_pattern_may_not_have_a_trailing_comma
              : DiagnosticCode.A_rest_element_must_be_last_in_a_destructuring_pattern
          ],
          pos,
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
  const nodeFlags = parser.nodeFlags;
  consume(parser, context, SyntaxKind.LeftBrace);
  const bindingPropertyList = parseBindingPropertyList(parser, context, scope, type);
  consume(parser, context, SyntaxKind.RightBrace, DiagnosticCode.The_parser_expected_to_find_a_to_match_the_token_here);
  return createObjectBindingPattern(bindingPropertyList, nodeFlags | NodeFlags.ExpressionNode, pos, parser.curPos);
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
  while (parser.token & 0b00010100110010000100000000000000) {
    const bindingProperty = parseBindingProperty(parser, context, scope, type);
    properties.push(bindingProperty);

    if ((parser.token as SyntaxKind) === SyntaxKind.RightBrace) break;
    if (consumeOpt(parser, context, SyntaxKind.Comma)) {
      if (bindingProperty.kind !== SyntaxKind.Identifier && (bindingProperty as any).ellipsisToken) {
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
): BindingProperty | BindingElement | Identifier | DummyIdentifier {
  const pos = parser.curPos;
  const ellipsisToken = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.Ellipsis);
  const tokenIsIdentifier = parser.token & Constants.Identifier;
  const key = parsePropertyName(parser, context);
  if (tokenIsIdentifier && parser.token !== SyntaxKind.Colon) {
    addVarOrBlock(parser, context, scope, (key as Identifier).text, type);
    if (ellipsisToken || parser.token === SyntaxKind.Assign) {
      return createBindingElement(
        ellipsisToken,
        key as Identifier,
        /* optionalToken */ null,
        /* type */ null,
        parseInitializer(parser, context, ellipsisToken ? true : false),
        NodeFlags.None,
        pos,
        parser.curPos
      );
    }
    return key as Identifier; // SingleNameBinding
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

function isArrowAfterTheCurrentToken(parser: ParserState, context: Context): boolean {
  nextToken(parser, context);
  return parser.token !== SyntaxKind.Arrow;
}

function parseFunctionExpression(
  parser: ParserState,
  context: Context,
  leftHandSideContext: LeftHandSide
): FunctionExpression | Identifier | ArrowFunction {
  const pos = parser.curPos;
  const asyncToken = consumeOptToken(parser, context, SyntaxKind.AsyncKeyword);

  if (asyncToken) {
    // `async` [no LineTerminator here] `function`
    if (parser.token !== SyntaxKind.FunctionKeyword || parser.nodeFlags & NodeFlags.NewLine) {
      const flags = parser.nodeFlags;
      if ((flags & NodeFlags.NewLine) < 1) {
        // `async` [no LineTerminator here] AsyncArrowBindingIdentifier [no LineTerminator here] => AsyncConciseBody
        if (parser.token & Constants.Identifier) {
          // "for (async of" is only an arrow function if the next token is "=>"
          if (parser.token & SyntaxKind.IsInOrOf && speculate(parser, context, isArrowAfterTheCurrentToken, true)) {
            // Do not allow "for (async of []) ;" but do allow "for await (async of []) ;"
            if (
              (asyncToken.flags & Constants.IsEscaped) < 1 &&
              (context & Context.InForOfAwait) < 1 &&
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
          if (leftHandSideContext & (LeftHandSide.NotAssignable | LeftHandSide.DisallowClassExtends)) {
            parser.onError(
              DiagnosticSource.Parser,
              DiagnosticKind.Error,
              diagnosticMap[DiagnosticCode.Expected_a],
              parser.curPos,
              parser.pos
            );
          }
          if (context & Context.Strict && parser.token & SyntaxKind.IsFutureReserved) {
            parser.onError(
              DiagnosticSource.Parser,
              DiagnosticKind.Error,
              diagnosticMap[DiagnosticCode.Identifier_expected_Reserved_word_in_strict_mode],
              parser.curPos,
              parser.pos
            );
          }

          const scope = {
            kind: ScopeKind.ArrowParams,
            scope: { kind: ScopeKind.Block, scope: null, flags: ScopeFlags.None },
            flags: ScopeFlags.None
          };

          addBlockName(parser, context, scope, parser.tokenValue, BindingType.ArgumentList);

          return parseArrowFunction(
            parser,
            context,
            scope,
            /* typeParameters */ null,
            /* returnType */ null,
            parseIdentifierReference(parser, context),
            /* asyncToken */ asyncToken,
            /* nodeFlags */ NodeFlags.Async,
            /* pos */ pos
          );
        }
      }

      let expression: any = createIdentifier('async', 'async', pos, parser.curPos);

      // "new async"
      if (leftHandSideContext & LeftHandSide.NewExpression) return expression;

      // - `async()`
      // - `async () => {}`
      if (parser.token === SyntaxKind.LeftParen) {
        // Returning now sets the 'assignable = false' and allow us to
        // fail on following cases:
        //
        // - `([async () =>  x]) =>  {};`
        // - `++async (x, y) =>  ok;`
        // - `for (x of [async (x, y) =>  z] = {});`
        return parseCoverCallExpressionAndAsyncArrowHead(
          parser,
          context,
          expression,
          /* typeParameters */ null,
          leftHandSideContext,
          flags,
          pos
        ) as any;
      }
      // - `async<T>()`
      // - `async <T>() => {}`
      // - `(async<T>())`
      if (parser.token === SyntaxKind.LessThan && context & Context.OptionsAllowTypes) {
        const operatorToken = parseTokenNode(parser, context | Context.AllowRegExp, NodeFlags.ExpressionNode);
        if (parser.token & Constants.Identifier) {
          const name: any = parseIdentifier(parser, context, Constants.Identifier);
          const asyncIdent = expression;
          // - `(async <T>(x));`
          if ((parser.token as SyntaxKind) === SyntaxKind.GreaterThan) {
            if (
              speculate(
                parser,
                context,
                () => {
                  nextToken(parser, context); // skips: '>'
                  if ((parser.token as SyntaxKind) !== SyntaxKind.LeftParen) return false;
                  expression = parseCoverCallExpressionAndAsyncArrowHead(
                    parser,
                    context,
                    expression,
                    /* typeParameters */ null,
                    LeftHandSide.None,
                    flags,
                    pos
                  ) as any;
                  return expression.kind === SyntaxKind.ArrowFunction;
                },
                false
              )
            ) {
              expression.typeParameters = createTypeParameterDeclaration(
                createTypeParameterList(
                  [createTypeParameter(name, /* type */ null, /* defaultType */ null, name.start, parser.curPos)],
                  /* trailingComma */ false,
                  expression.start,
                  parser.curPos
                ),
                NodeFlags.IsTypeNode,
                pos,
                parser.curPos
              );
              return expression;
            }

            // - `(async <T>(x) >> y + z);`
            return createBinaryExpression(
              asyncIdent,
              operatorToken,
              parseBinaryExpression(
                parser,
                context,
                name as BinaryExpression,
                SyntaxKind.Identifier & SyntaxKind.Precedence,
                SyntaxKind.Identifier,
                parser.curPos
              ),
              pos,
              parser.curPos
            ) as any;

            // We haven't seen the `>` yet...
          } else {
            // - `(async <T, U>(x) => y)`
            // - `(async <T: U>(x) => y)`
            // - `(async <T = U>(x) => y)`
            if (
              (parser.token as SyntaxKind) === SyntaxKind.Colon ||
              (parser.token as SyntaxKind) === SyntaxKind.Assign
            ) {
              const type = parseType(parser, context);
              const defaultType = consumeOpt(parser, context, SyntaxKind.Assign)
                ? parseTypeAnnotation(parser, context)
                : null;
              const types = [createTypeParameter(name, type, defaultType, asyncIdent.start, parser.curPos)];
              let trailingComma = false;
              let requireDefault = (parser.token as SyntaxKind) === SyntaxKind.Assign;
              if (consumeOpt(parser, context, SyntaxKind.Comma)) {
                if ((parser.token as SyntaxKind) === SyntaxKind.GreaterThan) {
                  trailingComma = true;
                } else {
                  while (parser.token & Constants.IsTypeParameter) {
                    const type = parseTypeParameter(parser, context, requireDefault);
                    types.push(type);
                    if ((parser.token as SyntaxKind) === SyntaxKind.GreaterThan) break;
                    if (type.defaultType) requireDefault = true;
                    if (consumeOpt(parser, context, SyntaxKind.Comma)) {
                      if ((parser.token as SyntaxKind) === SyntaxKind.GreaterThan) {
                        trailingComma = true;
                        break;
                      }
                    }
                  }
                }
              }

              consume(parser, context, SyntaxKind.GreaterThan, DiagnosticCode.Expression_expected);

              expression = parseCoverCallExpressionAndAsyncArrowHead(
                parser,
                context,
                expression,
                createTypeParameterDeclaration(
                  createTypeParameterList(types, trailingComma, expression.start, parser.curPos),
                  NodeFlags.IsTypeNode,
                  pos,
                  parser.curPos
                ),
                LeftHandSide.None,
                flags,
                pos
              ) as ArrowFunction;

              if (expression.kind !== SyntaxKind.ArrowFunction) {
                parser.onError(
                  DiagnosticSource.Parser,
                  DiagnosticKind.Error,
                  diagnosticMap[
                    defaultType
                      ? // This is an error recovery case so we shouldn't care too much about the
                        // reconstructed CST
                        DiagnosticCode.The_left_hand_side_must_be_a_variable_or_a_property_access
                      : DiagnosticCode.Expression_expected
                  ],
                  pos,
                  parser.curPos
                );
              }

              return expression;
            }

            // - `(async <T, U>(x))`
            // - `(async <T, U>(x) => y)`
            if ((parser.token as SyntaxKind) === SyntaxKind.Comma) {
              if (
                speculate(
                  parser,
                  context,
                  function () {
                    let requireDefault = false;
                    const types: any = [
                      createTypeParameter(
                        name,
                        /* type */ null,
                        /* defaultType */ null,
                        asyncIdent.start,
                        parser.curPos
                      )
                    ];
                    let trailingComma = false;
                    nextToken(parser, context); // skips: ','
                    while (parser.token & Constants.IsTypeParameter) {
                      const type = parseTypeParameter(parser, context, requireDefault);
                      types.push(type);
                      if ((parser.token as SyntaxKind) === SyntaxKind.GreaterThan) break;
                      if (type.defaultType) requireDefault = true;
                      if (consumeOpt(parser, context, SyntaxKind.Comma)) {
                        if ((parser.token as SyntaxKind) === SyntaxKind.GreaterThan) {
                          trailingComma = true;
                          break;
                        }
                      }
                    }
                    if ((parser.token as SyntaxKind) !== SyntaxKind.GreaterThan) return false;
                    const typeParameterList = createTypeParameterList(types, trailingComma, pos, parser.curPos);
                    nextToken(parser, context); // skips: '>'
                    const typeParameters = createTypeParameterDeclaration(
                      typeParameterList,
                      NodeFlags.IsTypeNode,
                      pos,
                      parser.curPos
                    );
                    expression = parseCoverCallExpressionAndAsyncArrowHead(
                      parser,
                      context,
                      expression,
                      /* typeParameters */ null,
                      LeftHandSide.None,
                      flags,
                      pos
                    ) as any;
                    if (expression.kind !== SyntaxKind.ArrowFunction) return false;
                    expression.typeParameters = typeParameters;
                    return true;
                  },
                  false
                )
              ) {
                return expression;
              }
              // - `(async  <T, U>(x) >> y - z);`
              // - `(async  < T, U > (x));`
              return createBinaryExpression(
                asyncIdent,
                operatorToken,
                parseBinaryExpression(
                  parser,
                  context,
                  name,
                  SyntaxKind.Identifier & SyntaxKind.Precedence,
                  SyntaxKind.Identifier,
                  parser.curPos
                ),
                pos,
                parser.curPos
              ) as any;
            }
          }
        }
        // - `(async<{}>(x));`
        // - `(async <{}>(x) >> y + z);`
        return createBinaryExpression(
          expression,
          operatorToken,
          parseBinaryExpression(
            parser,
            context,
            parseLeftHandSideExpression(parser, context, LeftHandSide.NotAssignable) as BinaryExpression,
            SyntaxKind.Identifier & SyntaxKind.Precedence,
            SyntaxKind.Identifier,
            parser.curPos
          ),
          pos,
          parser.curPos
        ) as any;
      }

      // - `(async => {})`
      if (parser.token === SyntaxKind.Arrow) {
        const scope = {
          kind: ScopeKind.ArrowParams,
          scope: { kind: ScopeKind.Block, scope: null, flags: ScopeFlags.None },
          flags: ScopeFlags.None
        };

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

      // - `async`
      // - `async + 1`
      return expression;
    }
    if (asyncToken.flags & Constants.IsEscaped) {
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
  let scope: any = {
    kind: ScopeKind.Block,
    scope: null,
    flags: ScopeFlags.None
  };
  let firstRestricted!: SyntaxKind;

  // The name is optional
  if (parser.token & Constants.Identifier) {
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
    if ((generatorToken && parser.token === SyntaxKind.YieldKeyword) || parser.token === SyntaxKind.PrivateIdentifier) {
      parser.previousErrorPos = parser.pos;
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[
          parser.token === SyntaxKind.PrivateIdentifier
            ? DiagnosticCode.Private_identifiers_are_not_allowed_outside_class_bodies
            : DiagnosticCode.Cannot_use_yield_as_a_name_on_a_generator_function_expression
        ],
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
    name = parseIdentifier(parser, context, Constants.Identifier, DiagnosticCode.Binding_identifier_expected);
  }

  const typeParameters = parseTypeParameterDeclaration(parser, context);

  context =
    ((context | 0b00001001100000110100011010001000) ^ 0b00001001100000110100011010001000) |
    (asyncToken ? 0b00000000000000000000010000001000 : Context.None) |
    (generatorToken ? Context.YieldContext : Context.None);
  scope = {
    kind: ScopeKind.FunctionParams,
    scope,
    flags: ScopeFlags.None
  };

  const formalParameterList = parseFormalParameterList(
    parser,
    context | Context.Parameters | Context.Parameters,
    scope
  );
  const returnType = parseType(parser, context);
  const contents = parseFunctionBody(
    parser,
    context | Context.NewTarget | Context.IsOutsideFnOrArrow,
    scope,
    /* scopeError*/ (scope.flags & ScopeFlags.Error) > 0,
    /* isDecl */ false,
    /* isSimpleParameterList */ (formalParameterList.flags & NodeFlags.NoneSimpleParamList) < 1,
    /* ignoreMissingOpenBrace */ false,
    /* firstRestricted */ firstRestricted
  );

  parser.assignable = false;

  return createFunctionExpression(
    asyncToken,
    functionToken,
    generatorToken,
    name as any,
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
  functionFlags: ParseFunctionFlag,
  labels: any
): FunctionDeclaration | LabelledStatement | ExpressionStatement {
  const pos = parser.curPos;
  const asyncToken = consumeOptToken(parser, context, SyntaxKind.AsyncKeyword);
  if (asyncToken) {
    if (parser.token !== SyntaxKind.FunctionKeyword || parser.nodeFlags & NodeFlags.NewLine) {
      const flags = parser.nodeFlags;
      if ((flags & NodeFlags.NewLine) < 1) {
        // - `async x => {}`
        if (parser.token & Constants.Identifier) {
          if (functionFlags & ParseFunctionFlag.DisallowAsyncArrow) {
            parser.onError(
              DiagnosticSource.Parser,
              DiagnosticKind.Error,
              diagnosticMap[DiagnosticCode.An_async_arrow_without_the_default_modifier_can_not_be_exported],
              parser.curPos,
              parser.pos
            );
          }

          if (asyncToken.flags & Constants.IsEscaped) {
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

          scope = {
            kind: ScopeKind.ArrowParams,
            scope: { kind: ScopeKind.Block, scope: null, flags: ScopeFlags.None },
            flags: ScopeFlags.None
          };

          addBlockName(parser, context, scope, parser.tokenValue, BindingType.ArgumentList);

          return parseExpressionStatement(
            parser,
            context,
            parseCommaOperator(
              parser,
              context,
              parseArrowFunction(
                parser,
                context,
                scope,
                /* typeParameters */ null,
                /* returnType */ null,
                parseIdentifier(parser, context, Constants.Identifier),
                /* asyncToken */ asyncToken,
                /* nodeFlags */ NodeFlags.Async,
                /* pos */ pos
              ),
              pos
            ),
            pos
          );
        }
      }

      // - `async()`
      // - `async () => {}`
      if (parser.token === SyntaxKind.LeftParen) {
        if (functionFlags & ParseFunctionFlag.DisallowAsyncArrow) {
          parser.onError(
            DiagnosticSource.Parser,
            DiagnosticKind.Error,
            diagnosticMap[DiagnosticCode.An_async_arrow_without_the_default_modifier_can_not_be_exported],
            pos,
            parser.pos
          );
        }
        return parseCoverCallExpressionAndAsyncArrowHead(
          parser,
          context,
          createIdentifier(/* text */ 'async', /* rawText */ 'async', pos, parser.curPos),
          /* typeParameters */ null,
          LeftHandSide.None,
          flags,
          pos
        ) as any;
      }

      let expression: any = createIdentifier(/* text */ 'async', /* rawText */ 'async', pos, parser.curPos);

      // - `async <T>(x)`
      // - `async <T>(x) => y`
      if (parser.token === SyntaxKind.LessThan && context & Context.OptionsAllowTypes) {
        const operatorToken = parseTokenNode(parser, context | Context.AllowRegExp, NodeFlags.ExpressionNode);
        if (parser.token & Constants.Identifier) {
          const name: any = parseIdentifier(parser, context, Constants.Identifier);
          const asyncIdent = expression;
          // - `async <T>(x);`
          if ((parser.token as SyntaxKind) === SyntaxKind.GreaterThan) {
            if (
              speculate(
                parser,
                context,
                function () {
                  nextToken(parser, context); // skips: '>'
                  // - `async <T>[(x)]`
                  if ((parser.token as SyntaxKind) !== SyntaxKind.LeftParen) return false;
                  expression = parseCoverCallExpressionAndAsyncArrowHead(
                    parser,
                    context,
                    expression,
                    createTypeParameterDeclaration(
                      createTypeParameterList(
                        [createTypeParameter(name, /* type */ null, /* defaultType */ null, name.start, parser.curPos)],
                        /* trailingComma */ false,
                        expression.start,
                        parser.curPos
                      ),
                      NodeFlags.IsTypeNode,
                      pos,
                      parser.curPos
                    ),
                    LeftHandSide.None,
                    flags,
                    pos
                  ) as any;
                  return expression.kind === SyntaxKind.ArrowFunction;
                },
                false
              )
            ) {
              // ?
            } else {
              expression = createBinaryExpression(
                asyncIdent,
                operatorToken,
                parseBinaryExpression(
                  parser,
                  context,
                  name as BinaryExpression,
                  SyntaxKind.Identifier & SyntaxKind.Precedence,
                  SyntaxKind.Identifier,
                  parser.curPos
                ),
                pos,
                parser.curPos
              );
            }
            // We haven't seen the `>` yet...
          } else {
            // - `async <T, U>(x) => y`
            // - `async <T: U>(x) => y`
            // - `async <T = U>(x) => y`
            if (
              (parser.token as SyntaxKind) === SyntaxKind.Colon ||
              (parser.token as SyntaxKind) === SyntaxKind.Assign
            ) {
              const type = parseType(parser, context);
              const defaultType = consumeOpt(parser, context, SyntaxKind.Assign)
                ? parseTypeAnnotation(parser, context)
                : null;
              const types = [createTypeParameter(name, type, defaultType, asyncIdent.start, parser.curPos)];
              let trailingComma = false;
              let requireDefault = (parser.token as SyntaxKind) === SyntaxKind.Assign;
              if (consumeOpt(parser, context, SyntaxKind.Comma)) {
                if ((parser.token as SyntaxKind) === SyntaxKind.GreaterThan) {
                  trailingComma = true;
                } else {
                  while (parser.token & Constants.IsTypeParameter) {
                    const type = parseTypeParameter(parser, context, requireDefault);
                    types.push(type);
                    if ((parser.token as SyntaxKind) === SyntaxKind.GreaterThan) break;
                    if (type.defaultType) requireDefault = true;
                    if (consumeOpt(parser, context, SyntaxKind.Comma)) {
                      if ((parser.token as SyntaxKind) === SyntaxKind.GreaterThan) {
                        trailingComma = true;
                        break;
                      }
                    }
                  }
                }
              }

              consume(parser, context, SyntaxKind.GreaterThan, DiagnosticCode.Expression_expected);

              expression = parseCoverCallExpressionAndAsyncArrowHead(
                parser,
                context,
                expression,
                createTypeParameterDeclaration(
                  createTypeParameterList(types, trailingComma, expression.start, parser.curPos),
                  NodeFlags.IsTypeNode,
                  pos,
                  parser.curPos
                ),
                LeftHandSide.None,
                flags,
                pos
              ) as any;

              if (expression.kind !== SyntaxKind.ArrowFunction) {
                parser.onError(
                  DiagnosticSource.Parser,
                  DiagnosticKind.Error,
                  diagnosticMap[
                    defaultType
                      ? // In this case the returned expression is an 'CallExpression', so the 'TypeParameter' will not
                        // be part of the CST tree. This is okay because it's an error recovery case so we shouldn't
                        // care too much about the reconstructed CST.
                        // We could do speculative parsing here and parse out an 'BinaryExpression', but the invalid
                        // CST node tree need to be re-parsed anyway.
                        DiagnosticCode.The_left_hand_side_must_be_a_variable_or_a_property_access
                      : DiagnosticCode.Expression_expected
                  ],
                  pos,
                  parser.curPos
                );
              }

              // - `async <T, U>(x)`
              // - `async <T, U>(x) => y`
            } else if ((parser.token as SyntaxKind) === SyntaxKind.Comma) {
              if (
                speculate(
                  parser,
                  context,
                  () => {
                    const types = [
                      createTypeParameter(
                        name,
                        /* type */ null,
                        /* defaultType */ null,
                        asyncIdent.start,
                        parser.curPos
                      )
                    ];
                    let trailingComma = false;
                    let requireDefault = false;
                    nextToken(parser, context); // skips: ','
                    while (parser.token & Constants.IsTypeParameter) {
                      const type = parseTypeParameter(parser, context, requireDefault);
                      types.push(type);
                      if ((parser.token as SyntaxKind) === SyntaxKind.GreaterThan) break;
                      if (type.defaultType) requireDefault = true;
                      if (consumeOpt(parser, context, SyntaxKind.Comma)) {
                        if ((parser.token as SyntaxKind) === SyntaxKind.GreaterThan) {
                          trailingComma = true;
                          break;
                        }
                      }
                    }
                    if ((parser.token as SyntaxKind) !== SyntaxKind.GreaterThan) return false;
                    const typeParameterList = createTypeParameterList(types, trailingComma, pos, parser.curPos);
                    nextToken(parser, context); // skips: '>'
                    const typeParameters = createTypeParameterDeclaration(
                      typeParameterList,
                      NodeFlags.IsTypeNode,
                      pos,
                      parser.curPos
                    );
                    expression = parseCoverCallExpressionAndAsyncArrowHead(
                      parser,
                      context,
                      expression,
                      /* typeParameters */ null,
                      LeftHandSide.None,
                      flags,
                      pos
                    ) as any;
                    if (expression.kind !== SyntaxKind.ArrowFunction) return false;
                    expression.typeParameters = typeParameters;
                    return true;
                  },
                  false
                )
              ) {
                return expression;
              }
              // - `async  <T, U>(x) >> y - z;`
              // - `async  < T, U > (x);`
              expression = createBinaryExpression(
                asyncIdent,
                operatorToken,
                parseBinaryExpression(
                  parser,
                  context,
                  name,
                  SyntaxKind.Identifier & SyntaxKind.Precedence,
                  SyntaxKind.Identifier,
                  parser.curPos
                ),
                pos,
                parser.curPos
              );
            }
          }
        } else {
          // - `async<{}>(x);`
          // - `async <{}>(x) >> y + z`
          expression = createBinaryExpression(
            expression,
            operatorToken,
            parseBinaryExpression(
              parser,
              context,
              parseLeftHandSideExpression(parser, context, LeftHandSide.NotAssignable) as BinaryExpression,
              SyntaxKind.Identifier & SyntaxKind.Precedence,
              SyntaxKind.Identifier,
              parser.curPos
            ),
            pos,
            parser.curPos
          );
        }

        parser.assignable = true;
        return parseExpressionStatement(parser, context, parseExpressionRest(parser, context, expression, pos), pos);
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
          labels,
          null,
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

      if (functionFlags & ParseFunctionFlag.DisallowAsyncArrow) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.Declaration_or_statement_expected],
          pos,
          parser.pos
        );
      }
      // "async"
      // "async + 1"
      parser.assignable = true;
      return parseExpressionStatement(parser, context, parseExpressionRest(parser, context, expression, pos), pos);
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
  let innerScope: any = {
    kind: ScopeKind.Block,
    scope: null,
    flags: ScopeFlags.None
  };
  const firstRestricted = parser.token;

  parser.diagnosticStartPos = parser.curPos;

  if (parser.token & Constants.Identifier) {
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

    if (
      (context & (Context.YieldContext | Context.Strict) && parser.token === SyntaxKind.YieldKeyword) ||
      parser.token === SyntaxKind.PrivateIdentifier
    ) {
      parser.previousErrorPos = parser.pos;
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[
          generatorToken
            ? DiagnosticCode.Cannot_use_yield_as_a_name_on_a_generator_declaration
            : parser.token === SyntaxKind.PrivateIdentifier
            ? DiagnosticCode.Private_identifiers_are_not_allowed_outside_class_bodies
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

    innerScope = {
      kind: ScopeKind.FunctionRoot,
      scope: innerScope,
      flags: ScopeFlags.None
    };

    name = parseIdentifier(parser, context, Constants.Identifier, DiagnosticCode.Binding_identifier_expected);
  } else if ((functionFlags & ParseFunctionFlag.IsDefaultModifier) < 1) {
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

  innerScope = {
    kind: ScopeKind.FunctionParams,
    scope: innerScope,
    flags: ScopeFlags.None
  };
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
    returnType = parseTypeAnnotation(parser, context);
  }

  const contents =
    parser.token === SyntaxKind.LeftBrace
      ? parseFunctionBody(
          parser,
          context | Context.NewTarget | Context.IsOutsideFnOrArrow,
          innerScope,
          /* scopeError*/ (innerScope.flags & ScopeFlags.Error) > 0,
          /* isDecl */ declareKeyword ? true : false,
          /* isSimpleParameterList */ (formalParameterList.flags & NodeFlags.NoneSimpleParamList) < 1,
          /* ignoreMissingOpenBrace */ false,
          /* firstRestricted */ firstRestricted
        )
      : !declareKeyword
      ? parseFunctionBody(
          parser,
          context | Context.NewTarget | Context.IsOutsideFnOrArrow,
          innerScope,
          /* scopeError*/ (innerScope.flags & ScopeFlags.Error) > 0,
          /* isDecl */ !!declareKeyword,
          /* isSimpleParameterList */ (formalParameterList.flags & NodeFlags.NoneSimpleParamList) < 1,
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
    name as any,
    formalParameterList,
    contents,
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
  const nodeFlags = parser.nodeFlags;
  if (
    ignoreMissingOpenBrace ||
    consume(parser, context | Context.AllowRegExp, SyntaxKind.LeftBrace, DiagnosticCode.Missing_an_opening_brace)
  ) {
    const statementList = parseFunctionStatementList(
      parser,
      (context | 0b00000000000000000101100100100000) ^ 0b00000000000000000101100000100000,
      {
        kind: ScopeKind.FunctionBody,
        scope,
        flags: ScopeFlags.None
      },
      scopeError,
      isSimpleParameterList,
      firstRestricted,
      nodeFlags
    );
    consume(
      parser,
      isDecl ? context | Context.AllowRegExp : context,
      SyntaxKind.RightBrace,
      DiagnosticCode.The_parser_expected_to_find_a_to_match_the_token_here
    );
    return createFunctionBody(statementList, pos, parser.curPos);
  }

  // Empty list
  return createFunctionBody(createFunctionStatementList([], [], NodeFlags.ExpressionNode, pos, pos), pos, pos);
}

function parseFunctionStatementList(
  parser: ParserState,
  context: Context,
  scope: ScopeState,
  scopeError: boolean,
  isSimpleParameterList: boolean,
  firstRestricted: SyntaxKind | null,
  nodeFlags: NodeFlags
): FunctionStatementList {
  const pos = parser.curPos;
  const statements = [];
  const directives = [];
  const flags = nodeFlags | parser.nodeFlags;
  const isNotPreviousStrict = (context & Context.Strict) < 1;

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
              flags & Constants.IsEscaped
                ? DiagnosticCode._eval_and_arguments_cannot_contain_escape_characters
                : DiagnosticCode._eval_and_arguments_cannot_be_used_as_an_identifier_here
            ],
            parser.diagnosticStartPos,
            pos
          );
        }
      }
      // Functions with non-simple parameter lists (destructuring,
      // default or rest parameters) must not contain a "use strict"
      // directive.
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

  while (parser.token & Constants.StatementOrExpression) {
    statements.push(parseStatementListItem(parser, context, scope, null, null));
  }
  return createFunctionStatementList(directives, statements, flags | NodeFlags.ExpressionNode, pos, parser.curPos);
}

function parseFormalParameterList(parser: ParserState, context: Context, scope: ScopeState): FormalParameterList {
  const parameters = [];
  context = (context | 0b00000000100000000000000010000000) ^ 0b00000000100000000000000010000000;
  let nodeflags = NodeFlags.ExpressionNode;
  const curpPos = parser.curPos;
  if (
    consume(parser, context | Context.AllowRegExp, SyntaxKind.LeftParen, DiagnosticCode.Missing_an_opening_parentheses)
  ) {
    let trailingComma = false;
    let count = 0;
    let ellipsisToken = null;
    while (parser.token & Constants.FormalParameterList) {
      const pos = parser.curPos;
      if (parser.token === SyntaxKind.ThisKeyword) {
        if ((context & Context.OptionsAllowTypes) < 1 || count > 0) {
          parser.onError(
            DiagnosticSource.Parser,
            DiagnosticKind.Error,
            diagnosticMap[
              (context & Context.OptionsAllowTypes) < 1
                ? DiagnosticCode.The_this_keyword_cannot_be_a_formal_parameter
                : DiagnosticCode.The_this_parameter_must_be_the_first_function_parameter
            ],
            pos,
            parser.pos
          );
        }

        const left = parseBindingIdentifier(parser, context, scope, BindingType.ArgumentList);
        const optionalToken = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.QuestionMark);
        if (optionalToken) {
          parser.onError(
            DiagnosticSource.Parser,
            DiagnosticKind.Error,
            diagnosticMap[DiagnosticCode.The_this_parameter_cannot_be_optional],
            parser.curPos,
            parser.pos
          );
        }
        if ((parser.token as SyntaxKind) !== SyntaxKind.Colon) {
          parser.onError(
            DiagnosticSource.Parser,
            DiagnosticKind.Error,
            diagnosticMap[DiagnosticCode.A_type_annotation_is_required_for_the_this_parameter],
            parser.curPos,
            parser.pos
          );
        }
        parameters.push(
          createBindingElement(
            ellipsisToken,
            left,
            optionalToken,
            parseType(parser, context),
            /* right */ null,
            nodeflags,
            pos,
            parser.curPos
          )
        );
      } else {
        ellipsisToken = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.Ellipsis);
        let left = parseIdentifierOrPattern(
          parser,
          context,
          scope,
          ellipsisToken ? BindingType.None : BindingType.ArgumentList
        );

        if (
          ellipsisToken ||
          parser.token === SyntaxKind.QuestionMark ||
          parser.token === SyntaxKind.Colon ||
          parser.token === SyntaxKind.Assign
        ) {
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
          if (left.kind !== SyntaxKind.Identifier || parser.token === SyntaxKind.Assign) {
            nodeflags |= NodeFlags.NoneSimpleParamList;
            parser.diagnosticStartPos = pos;
          }
          left = createBindingElement(
            ellipsisToken,
            left,
            consumeOptToken(parser, context, SyntaxKind.QuestionMark),
            parseType(parser, context),
            parseInitializer(parser, context, ellipsisToken ? true : false),
            nodeflags,
            pos,
            parser.curPos
          );
        }

        parameters.push(left);
      }

      count++;
      if ((parser.token as SyntaxKind) === SyntaxKind.RightParen) break;
      consume(parser, context | Context.AllowRegExp, SyntaxKind.Comma, DiagnosticCode._expected);
      if ((parser.token as SyntaxKind) === SyntaxKind.RightParen) {
        trailingComma = true;
        break;
      }
    }

    if (scope.flags & ScopeFlags.Error && (nodeflags & NodeFlags.NoneSimpleParamList || context & Context.Strict)) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.A_formal_parameter_cannot_be_bound_multiple_times_in_the_same_parameter_list],
        parser.diagnosticStartPos,
        parser.pos
      );
    }

    const result = createFormalParameterList(parameters, trailingComma, nodeflags, curpPos, parser.pos);
    consume(parser, context, SyntaxKind.RightParen, DiagnosticCode.Expected_a_to_match_the_token_here);
    return result;
  }
  // Empty list
  return createFormalParameterList([], /* trailingComma*/ false, nodeflags, curpPos, curpPos);
}

/**
 * FormalParameter :
 *    BindingElement
 *
 * FormalParameterList :
 *    [empty]
 *       FunctionRestParameter
 *      FormalsList
 *     FormalsList , FunctionRestParameter
 *
 *     FunctionRestParameter :
 *      ... BindingIdentifier
 *
 *     FormalsList :
 *      FormalParameter
 *     FormalsList , FormalParameter
 *
 *     FormalParameter :
 *      BindingElement
 *
 *     BindingElement :
 *      SingleNameBinding
 *   BindingPattern Initializeropt
 */

function parseFormalParameter(
  parser: ParserState,
  context: Context,
  scope: ScopeState,
  count: number
): BindingElement | DummyIdentifier | Identifier | ArrayBindingPattern | ObjectBindingPattern {
  const pos = parser.curPos;
  let nodeflags = NodeFlags.ExpressionNode;

  if (parser.token === SyntaxKind.ThisKeyword) {
    if ((context & Context.OptionsAllowTypes) < 1 || count > 0) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[
          (context & Context.OptionsAllowTypes) < 1
            ? DiagnosticCode.The_this_keyword_cannot_be_a_formal_parameter
            : DiagnosticCode.The_this_parameter_must_be_the_first_function_parameter
        ],
        pos,
        parser.pos
      );
    }

    const left = parseBindingIdentifier(parser, context, scope, BindingType.ArgumentList);
    const optionalToken = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.QuestionMark);
    if (optionalToken) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.The_this_parameter_cannot_be_optional],
        parser.curPos,
        parser.pos
      );
    }
    if ((parser.token as SyntaxKind) !== SyntaxKind.Colon) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.A_type_annotation_is_required_for_the_this_parameter],
        parser.curPos,
        parser.pos
      );
    }

    return createBindingElement(
      /* ellipsisToken */ null,
      left,
      /* optionalToken */ null,
      parseType(parser, context),
      /* right */ null,
      nodeflags,
      pos,
      parser.curPos
    );
  }

  const ellipsisToken = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.Ellipsis);
  const left = parseIdentifierOrPattern(
    parser,
    context,
    scope,
    ellipsisToken ? BindingType.None : BindingType.ArgumentList
  );

  if (
    ellipsisToken ||
    parser.token === SyntaxKind.QuestionMark ||
    parser.token === SyntaxKind.Colon ||
    parser.token === SyntaxKind.Assign
  ) {
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
    const type = parseType(parser, context);
    const right = parseInitializer(parser, context, ellipsisToken ? true : false);

    if (left.kind !== SyntaxKind.Identifier || right) {
      nodeflags |= NodeFlags.NoneSimpleParamList;
      parser.diagnosticStartPos = pos;
    }
    return createBindingElement(ellipsisToken, left, optionalToken, type, right, nodeflags, pos, parser.curPos);
  }

  return left;
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
  const pos = parser.curPos;
  const importToken = consumeKeywordAndCheckForEscapeSequence(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.ImportKeyword,
    NodeFlags.IsStatement,
    pos
  );

  if (parser.token === SyntaxKind.StringLiteral) {
    const moduleSpecifier = parseStringLiteral(parser, context);
    parseSemicolon(parser, context);
    return createImportDeclaration(
      importToken,
      /*typeKeyword */ null,
      /*typeofKeyword */ null,
      /* fromClause */ null,
      moduleSpecifier,
      /* importClause */ null,
      (importToken.flags | Constants.IsEscaped) ^ Constants.IsEscaped,
      pos,
      parser.curPos
    );
  }

  if (parser.token === SyntaxKind.LeftParen) {
    return parseImportCall(parser, context, importToken);
  }

  if (parser.token === SyntaxKind.Period) {
    return parseImportMeta(parser, context, importToken);
  }

  if (isScript) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.The_import_keyword_can_only_be_used_with_the_module_goal],
      pos,
      parser.pos
    );
  }

  let importClause = null;
  let fromClause = null;
  let typeKeyword = null;
  let typeofKeyword = null;

  const token = parser.token;
  const tokenIsIdentifier = parser.token & Constants.IdentifierOrKeyword;

  if (
    tokenIsIdentifier || // import id
    parser.token === SyntaxKind.Multiply || // import *
    parser.token === SyntaxKind.LeftBrace // import {
  ) {
    let defaultBinding = null;
    let namespace = null;
    let namedImports = null;

    if (tokenIsIdentifier) {
      // - `import typeof a from "b";`
      // - `import typeof a from "b";`
      // - `import typeof { a, b } from "c";`
      // - `import typeof a from "b";`
      if ((token as SyntaxKind) === SyntaxKind.TypeofKeyword) {
        if ((context & Context.OptionsAllowTypes) === 0) {
          parser.onError(
            DiagnosticSource.Parser,
            DiagnosticKind.Error,
            diagnosticMap[DiagnosticCode.Import_declaration_expected],
            parser.curPos,
            parser.pos
          );
        }
        typeofKeyword = consumeOptToken(parser, context, SyntaxKind.TypeofKeyword);
        // - `import type foo24 from "bar";`
        if (parser.token & Constants.Identifier) {
          defaultBinding = parseIdentifier(
            parser,
            context,
            Constants.Identifier,
            DiagnosticCode.Binding_identifier_expected
          ) as Identifier;
        }
      } else {
        defaultBinding = parseIdentifier(
          parser,
          context,
          Constants.Identifier,
          DiagnosticCode.Binding_identifier_expected
        ) as Identifier;
      }

      // - `import type a from "b";`
      // - `import type { a, b } from "c";`
      if (
        context & Context.OptionsAllowTypes &&
        parser.token !== SyntaxKind.FromKeyword &&
        (token as SyntaxKind) === SyntaxKind.TypeKeyword
      ) {
        typeKeyword = createToken(
          SyntaxKind.TypeKeyword,
          NodeFlags.ChildLess,
          (defaultBinding as any).start as number,
          (defaultBinding as any).end
        );
        // - `import type foo24 from "bar";`
        if (parser.token & Constants.Identifier) {
          defaultBinding = parseIdentifier(
            parser,
            context,
            Constants.Identifier,
            DiagnosticCode.Binding_identifier_expected
          ) as Identifier;
        }
      } else {
        if (
          token === SyntaxKind.EvalIdentifier ||
          token === SyntaxKind.ArgumentsIdentifier ||
          (consumeOpt(parser, context, SyntaxKind.Comma) &&
            parser.token !== SyntaxKind.Multiply && // import *
            parser.token !== SyntaxKind.LeftBrace)
        ) {
          parser.onError(
            DiagnosticSource.Parser,
            DiagnosticKind.Error,
            diagnosticMap[
              token === SyntaxKind.EvalIdentifier || token === SyntaxKind.ArgumentsIdentifier
                ? DiagnosticCode._eval_and_arguments_cannot_be_used_as_an_identifier_here
                : DiagnosticCode.Import_declaration_expected
            ],
            parser.curPos,
            parser.pos
          );
        }
      }
    }

    if (typeKeyword && parser.token === SyntaxKind.Multiply) {
      namespace = parseNameSpaceImport(parser, context, scope);
    } else if (parser.token === SyntaxKind.LeftBrace) {
      namedImports = parseNamedImports(parser, context, scope);
    }

    importClause = createImportClause(defaultBinding, namespace, namedImports, pos, parser.curPos);
    fromClause = parseFromClause(parser, context);
  } else {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Declaration_or_statement_expected],
      parser.curPos,
      parser.pos
    );
  }

  parseSemicolon(parser, context);

  return createImportDeclaration(
    importToken,
    typeKeyword,
    typeofKeyword,
    fromClause,
    /* moduleSpecifier */ null,
    importClause,
    (importToken.flags | Constants.IsEscaped) ^ Constants.IsEscaped,
    pos,
    parser.curPos
  );
}

// NameSpaceImport :
//   `*` `as` ImportedBinding
function parseNameSpaceImport(parser: ParserState, context: Context, scope: ScopeState): NameSpaceImport {
  const pos = parser.curPos;
  return createNameSpaceImport(
    consumeToken(parser, context, SyntaxKind.Multiply),
    consumeKeywordAndCheckForEscapeSequence(
      parser,
      context,
      SyntaxKind.AsKeyword,
      NodeFlags.IsStatement,
      parser.curPos
    ),
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
  nextToken(parser, context);
  const importsList = parseImportsList(parser, context, scope);
  consume(parser, context, SyntaxKind.RightBrace, DiagnosticCode.The_parser_expected_to_find_a_to_match_the_token_here);
  return createNamedImports(importsList, pos, parser.curPos);
}

function parseImportsList(parser: ParserState, context: Context, scope: ScopeState): ImportsList {
  const pos = parser.curPos;
  const specifiers = [];

  while (parser.token === SyntaxKind.StringLiteral) {
    specifiers.push(
      createImportSpecifier(
        /* typeKeyword */ null,
        parseModuleExportName(parser, context),
        null,
        consumeKeywordAndCheckForEscapeSequence(
          parser,
          context,
          SyntaxKind.AsKeyword,
          NodeFlags.IsStatement,
          parser.curPos
        ),
        parseIdentifier(
          parser,
          context,
          Constants.Identifier,
          DiagnosticCode.Binding_identifier_expected
        ) as Identifier,
        pos,
        parser.curPos
      )
    );
  }

  while (parser.token & Constants.IdentifierOrKeyword) {
    specifiers.push(parseImportSpecifier(parser, context, scope));
    if (parser.token === SyntaxKind.RightBrace) break;
    consume(parser, context, SyntaxKind.Comma, DiagnosticCode._expected);
  }
  return createImportsList(specifiers, parser.nodeFlags, pos, parser.curPos);
}

// ImportSpecifier :
//   ImportedBinding
//   Identifier `as` ImportedBinding
function parseImportSpecifier(parser: ParserState, context: Context, scope: ScopeState): ImportSpecifier {
  const pos = parser.curPos;
  const token = parser.token;
  let typeKeyword = null;
  let identifier = parseIdentifier(parser, context, Constants.IdentifierOrKeyword, DiagnosticCode.Identifier_expected);

  if (parser.token === SyntaxKind.AsKeyword) {
    return createImportSpecifier(
      typeKeyword,
      null,
      identifier as Identifier,
      consumeKeywordAndCheckForEscapeSequence(
        parser,
        context,
        SyntaxKind.AsKeyword,
        NodeFlags.IsStatement,
        parser.curPos
      ),
      parseBindingIdentifier(parser, context, scope, BindingType.Let),
      pos,
      parser.curPos
    );
  }

  if (token === SyntaxKind.TypeKeyword && parser.token & Constants.Identifier) {
    typeKeyword = createToken(SyntaxKind.TypeKeyword, NodeFlags.ChildLess, identifier.start, identifier.end);
    identifier = parseIdentifier(parser, context, Constants.IdentifierOrKeyword, DiagnosticCode.Identifier_expected);
  }

  if (token === SyntaxKind.EvalIdentifier || token === SyntaxKind.ArgumentsIdentifier) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[
        identifier.flags & Constants.IsEscaped
          ? DiagnosticCode._eval_and_arguments_cannot_contain_escape_characters
          : DiagnosticCode._eval_and_arguments_cannot_be_used_as_an_identifier_here
      ],
      pos,
      parser.pos
    );
  }
  addVarOrBlock(parser, context, scope, identifier.text, BindingType.Let);

  return createImportSpecifier(typeKeyword, null, null, null, identifier as Identifier, pos, parser.curPos);
}

// ModulemoduleExportName : StringLiteral
function parseModuleExportName(parser: ParserState, context: Context): StringLiteral {
  return parseStringLiteral(parser, context);
}

// FromClause :
//   `from` ModuleSpecifier
function parseFromClause(parser: ParserState, context: Context): FromClause {
  const { curPos, nodeFlags } = parser;
  return createFromClause(
    consumeToken(parser, context, SyntaxKind.FromKeyword),
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
    NodeFlags.IsStatement,
    pos
  );
  let declaration: any = null;
  let fromClause: FromClause | null = null;
  let namedExports: NamedExports | null = null;
  let exportFromClause: any | null = null;
  const exportKind = ExportKind.Type;

  switch (parser.token) {
    case SyntaxKind.DefaultKeyword:
      return parseExportDefault(parser, context, scope, exportToken, pos);
    case SyntaxKind.LeftBrace: {
      namedExports = parseNamedExports(parser, context);
      if (
        (parser.token as SyntaxKind) === SyntaxKind.FromKeyword &&
        // - `fro\u006D`
        (parser.nodeFlags & Constants.IsEscaped) === 0
      ) {
        fromClause = parseFromClause(parser, context);
      }
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
      declaration = parseClassDeclaration(parser, context, scope, /* isDefaultModifier */ false, null);
      break;
    case SyntaxKind.AsyncKeyword:
    case SyntaxKind.FunctionKeyword:
      declaration = parseFunctionDeclaration(
        parser,
        context,
        scope,
        null,
        ParseFunctionFlag.DisallowGenerator | ParseFunctionFlag.DisallowAsyncArrow,
        null
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
      declaration = parseLetAsIdentifierOrLexicalDeclaration(parser, context, scope, null, null);
      break;
    case SyntaxKind.VarKeyword:
      declaration = parseVariableStatement(parser, context, null, scope, BindingType.Var | BindingType.Export);
      break;
    case SyntaxKind.TypeKeyword:
      const typeAlias = parseTypeAsIdentifierOrTypeAlias(parser, context, null, scope, null, null);
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
      const opaqueType = parseOpaqueType(parser, context, null, scope, null, null);
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
    (exportToken.flags | Constants.IsEscaped) ^ Constants.IsEscaped,
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
  const asKeyword = consumeKeywordAndCheckForEscapeSequence(
    parser,
    context,
    SyntaxKind.AsKeyword,
    NodeFlags.IsStatement,
    parser.curPos
  );
  if (asKeyword) {
    if (parser.token === SyntaxKind.StringLiteral) {
      moduleExportName = parseModuleExportName(parser, context);
    } else {
      namedBinding = parseIdentifier(parser, context, Constants.Identifier, DiagnosticCode.Identifier_expected);
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
  nextToken(parser, context);
  const exportsList = parseExportsList(parser, context);
  consume(parser, context, SyntaxKind.RightBrace, DiagnosticCode.The_parser_expected_to_find_a_to_match_the_token_here);
  return createNamedExports(exportsList, parser.nodeFlags, pos, parser.curPos);
}

function parseExportsList(parser: ParserState, context: Context): ExportsList {
  const pos = parser.curPos;
  const specifiers = [];
  while (parser.token & Constants.IdentifierOrKeyword) {
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
      : parseIdentifier(parser, context, Constants.IdentifierOrKeyword, DiagnosticCode.Identifier_expected);

  let exportedName = null;

  const asKeyword = consumeKeywordAndCheckForEscapeSequence(
    parser,
    context,
    SyntaxKind.AsKeyword,
    NodeFlags.IsStatement,
    parser.curPos
  );

  if (asKeyword) {
    if (parser.token === SyntaxKind.StringLiteral) {
      moduleExportName = parseModuleExportName(parser, context);
    } else {
      exportedName = parseIdentifier(parser, context, Constants.Identifier);
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
    NodeFlags.IsStatement,
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
        ParseFunctionFlag.IsDefaultModifier,
        null
      );
      break;
    case SyntaxKind.Decorator:
    case SyntaxKind.ClassKeyword:
      declaration = parseClassDeclaration(parser, context, scope, /* isDefaultModifier */ true, null);
      break;
    default:
      // - `export default {};`
      // - `export default [];`
      // - `export default (1 + 2);`
      declaration = parseExpression(parser, context);
      parseSemicolon(parser, context);
  }
  return createExportDefault(exportToken, defaultToken, declaration, pos, parser.curPos);
}

function parseTypeAnnotation(parser: ParserState, context: Context): TypeNode {
  const pos = parser.curPos;
  // A type annotation can either start with '|' or '&', and we will never
  // know the correct location of this nodes because if they are just 'consumed'
  // we will end up with a wrong location.
  //
  //   let x:
  //     |
  //     // comment
  //     string
  //
  // This is a detached comment and we can't use the 'node.start' value because
  // the actual location is 'node.start + 1'.
  //
  // To solve this edge case we parse out '|' or '&' as it's own token CST node
  // to get the correct location.
  //
  // Now we can collect the comment like this:
  //
  //   let x:
  //     bitwiseOrToken.end
  //     // comment
  //     type.start
  //
  return createTypeAnnotation(
    consumeOptToken(parser, context, SyntaxKind.BitwiseOr),
    consumeOptToken(parser, context, SyntaxKind.BitwiseAnd),
    parseTypeContinuation(parser, context, parseNullableType(parser, context)),
    pos,
    parser.curPos
  );
}

function parseTypeContinuation(parser: ParserState, context: Context, type: TypeNode): TypeNode {
  if (parser.token === SyntaxKind.BitwiseAnd) {
    const pos = parser.curPos;
    const types = [type];
    while (consumeOpt(parser, context, SyntaxKind.BitwiseAnd)) {
      types.push(parsePostfixType(parser, context, parsePrimaryType(parser, context), parser.curPos));
    }
    type = createIntersectionType(types, pos, parser.curPos);
  }

  if (parser.token === SyntaxKind.BitwiseOr) {
    const pos = parser.curPos;
    const types = [type];
    while (consumeOpt(parser, context, SyntaxKind.BitwiseOr)) {
      types.push(parseIntersectionType(parser, context));
    }
    type = createUnionType(types, pos, parser.curPos);
  }

  return type;
}

function parseType(parser: ParserState, context: Context): TypeNode | null {
  return context & Context.OptionsAllowTypes && consumeOpt(parser, context, SyntaxKind.Colon)
    ? parseTypeAnnotation(parser, context)
    : null;
}

function parseIntersectionType(parser: ParserState, context: Context): TypeNode {
  consumeOpt(parser, context, SyntaxKind.BitwiseAnd);
  const type = parseNullableType(parser, context);
  if (parser.token === SyntaxKind.BitwiseAnd) {
    const pos = parser.curPos;
    const types = [type];
    while (consumeOpt(parser, context, SyntaxKind.BitwiseAnd)) {
      types.push(parseNullableType(parser, context));
    }
    return createIntersectionType(types, pos, parser.curPos);
  }
  return type;
}

function parseNullableType(parser: ParserState, context: Context): NullableType | TypeNode {
  const pos = parser.curPos;
  return parser.token === SyntaxKind.QuestionMark
    ? createNullableType(
        consumeOptToken(parser, context, SyntaxKind.QuestionMark),
        parsePostfixType(parser, context, parsePrimaryType(parser, context), parser.curPos),
        pos,
        parser.curPos
      )
    : parsePostfixType(parser, context, parsePrimaryType(parser, context), pos);
}

function parsePostfixType(parser: ParserState, context: Context, type: TypeNode, pos: number): TypeNode {
  let optionalIndexedToken = null;
  while ((parser.nodeFlags & NodeFlags.NewLine) === 0) {
    switch (parser.token) {
      case SyntaxKind.QuestionMarkPeriod:
        optionalIndexedToken = consumeToken(parser, context, SyntaxKind.QuestionMarkPeriod);
      case SyntaxKind.LeftBracket:
        nextToken(parser, context);
        if (parser.token & Constants.IsType || optionalIndexedToken) {
          const indexType = parseTypeAnnotation(parser, context);
          consume(parser, context, SyntaxKind.RightBracket, DiagnosticCode.Type_expected);
          type = optionalIndexedToken
            ? createOptionalIndexedAccess(optionalIndexedToken, type, indexType, pos, parser.pos)
            : createIndexedAccessType(type, indexType, parser.nodeFlags, pos, parser.pos);
        } else {
          consume(parser, context, SyntaxKind.RightBracket, DiagnosticCode.Type_expected);
          type = createArrayType(type, pos, parser.curPos);
        }
        break;
      default:
        return type;
    }
  }
  return type;
}

function parsePrimaryType(parser: ParserState, context: Context): TypeNode | SyntaxToken<TokenSyntaxKind> {
  switch (parser.token) {
    case SyntaxKind.Multiply:
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
    case SyntaxKind.FalseKeyword:
    case SyntaxKind.TrueKeyword:
      return parseTokenNode(parser, context, NodeFlags.IsTypeNode);
    case SyntaxKind.StringLiteral:
      return parseStringType(parser, context);
    case SyntaxKind.NumericLiteral:
      return parseNumberType(parser, context);
    case SyntaxKind.BigIntLiteral:
      return parseBigIntType(parser, context);
    case SyntaxKind.LeftBrace:
      return parseObjectType(parser, context, ObjectTypeFlag.None);
    case SyntaxKind.LeftBracket:
      return parseTupleType(parser, context);
    case SyntaxKind.LessThan:
      return parseArrowFunctionType(parser, context);
    case SyntaxKind.LeftParen:
      return parseParenthesizedType(parser, context);
    case SyntaxKind.TypeofKeyword:
      return parseTypeofType(parser, context);
    case SyntaxKind.Subtract:
      return parseSubtractionType(parser, context);
    default:
      return parseTypeReference(parser, context);
  }
}

function parseSubtractionType(parser: ParserState, context: Context): SubtractionType | TypeReference {
  const pos = parser.curPos;
  const subtractionToken = consumeToken(parser, context, SyntaxKind.Subtract);
  if (parser.token === SyntaxKind.NumericLiteral || parser.token === SyntaxKind.BigIntLiteral) {
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
    parseEntityName(parser, context, createDummyIdentifier(pos, parser.curPos), Constants.IdentifierOrKeyword, pos),
    null,
    pos,
    parser.curPos
  );
}

function parseTypeofType(parser: ParserState, context: Context): TypeofType {
  const pos = parser.curPos;
  return createTypeofType(
    consumeToken(parser, context, SyntaxKind.TypeofKeyword),
    parsePrimaryType(parser, context),
    pos,
    parser.curPos
  );
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

function parseBigIntType(parser: ParserState, context: Context): BigIntType {
  const { curPos, tokenValue, tokenRaw } = parser;
  nextToken(parser, context);
  return createBigIntType(tokenValue, tokenRaw, curPos, parser.curPos);
}

function parseTupleType(parser: ParserState, context: Context): TupleType {
  const pos = parser.curPos;
  let trailingComma = false;
  nextToken(parser, context);
  const flags = parser.nodeFlags | NodeFlags.IsTypeNode;
  const elements: TypeNode[] = [];
  let ellipsisToken = null;
  let optionalToken = null;
  while (parser.token & (SyntaxKind.IsEllipsis | Constants.IsType)) {
    const innerPos = parser.curPos;
    ellipsisToken = consumeOptToken(parser, context, SyntaxKind.Ellipsis);
    let type = parseTypeAnnotation(parser, context);
    optionalToken = consumeOptToken(parser, context, SyntaxKind.QuestionMark);
    if (optionalToken) type = createOptionalType(optionalToken, type, innerPos, parser.curPos);
    elements.push(ellipsisToken ? createRestType(ellipsisToken, type, innerPos, parser.curPos) : type);
    if ((parser.token as SyntaxKind) === SyntaxKind.RightBracket) break;
    consume(parser, context, SyntaxKind.Comma, DiagnosticCode._expected);
    if (parser.token === SyntaxKind.RightBracket) {
      trailingComma = true;
      break;
    }
  }
  consume(parser, context, SyntaxKind.RightBracket);

  return createTupleType(elements, trailingComma, flags, pos, parser.curPos);
}

function parseFunctionType(parser: ParserState, context: Context, functionTypeFlags: FunctionTypeFlags): FunctionType {
  const pos = parser.curPos;
  const typeParameters = parseTypeParameterDeclaration(parser, context);
  const params = parseObjectTypeParameter(parser, context, functionTypeFlags);
  consume(parser, context, SyntaxKind.Colon);
  const returnType = parseTypeAnnotation(parser, context);
  return createFunctionType(params, returnType, typeParameters, pos, parser.curPos);
}

function parseFunctionTypeParameters(
  parser: ParserState,
  context: Context,
  functionTypeFlags: FunctionTypeFlags
): FunctionTypeParameterList {
  const pos = parser.curPos;
  const functionTypeParameterList: FunctionTypeParameter[] = [];
  let trailingComma = false;
  if (parser.token === SyntaxKind.RightParen) {
    if (functionTypeFlags & FunctionTypeFlags.Setter) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error | DiagnosticKind.EarlyError,
        diagnosticMap[DiagnosticCode.A_set_accessor_must_have_exactly_one_parameter],
        parser.curPos,
        parser.pos
      );
    }
  } else if (functionTypeFlags & FunctionTypeFlags.Getter) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error | DiagnosticKind.EarlyError,
      diagnosticMap[
        parser.token === SyntaxKind.ThisKeyword
          ? DiagnosticCode.A_get_accessor_cannot_have_a_this_parameter
          : DiagnosticCode.A_get_accessor_cannot_have_parameters
      ],
      parser.curPos,
      parser.pos
    );
  }

  while (
    parser.token &
    (SyntaxKind.IsEllipsis | SyntaxKind.IsFutureReserved | SyntaxKind.IsIdentifier | SyntaxKind.IsStartOfType)
  ) {
    if (functionTypeFlags & FunctionTypeFlags.Setter && parser.token === SyntaxKind.Ellipsis) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.A_set_accessor_cannot_have_rest_parameter],
        pos,
        parser.pos
      );
    }
    functionTypeParameterList.push(parseFunctionTypeParameter(parser, context));

    if (parser.token === SyntaxKind.RightParen) break;
    if (consumeOpt(parser, context | Context.AllowRegExp, SyntaxKind.Comma)) {
      if ((parser.token as SyntaxKind) === SyntaxKind.RightParen) {
        trailingComma = true;
        break;
      }
      if (functionTypeFlags & FunctionTypeFlags.Setter && parser.token === SyntaxKind.Ellipsis) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.A_set_accessor_must_have_exactly_one_parameter],
          pos,
          parser.pos
        );
      }
      continue;
    }
  }

  return createFunctionTypeParameterList(functionTypeParameterList, trailingComma, pos, parser.curPos);
}

function parseFunctionTypeParameter(parser: ParserState, context: Context): FunctionTypeParameter {
  const pos = parser.curPos;
  const ellipsisToken = consumeOptToken(parser, context, SyntaxKind.Ellipsis);
  let type: any = null;
  if (parser.token & Constants.Identifier) {
    const token = parser.token;
    type = parseIdentifier(parser, context, Constants.Identifier, DiagnosticCode.Type_expected);
    if (parser.token === SyntaxKind.QuestionMark || parser.token === SyntaxKind.Colon) {
      const optionalToken = consumeOptToken(parser, context, SyntaxKind.QuestionMark);
      consume(parser, context, SyntaxKind.Colon, DiagnosticCode.Type_expected);
      return createFunctionTypeParameters(
        ellipsisToken,
        type,
        optionalToken,
        parseTypeAnnotation(parser, context),
        pos,
        parser.curPos
      );
    }

    type = parseTypeContinuation(
      parser,
      context,
      parsePostfixType(parser, context, convertToPrimaryType(parser, context, token, type, pos), parser.curPos)
    );
  } else {
    type = parseTypeAnnotation(parser, context);
  }
  return createArrowTypeParameter(ellipsisToken, null as any, /* optionalToken */ null, type, pos, parser.curPos);
}

function parseArrowTypeParameter(parser: ParserState, context: Context): FunctionTypeParameter {
  const pos = parser.curPos;
  const ellipsisToken = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.Ellipsis);
  let type: any = null;
  if (parser.token & Constants.Identifier) {
    const token = parser.token;
    type = parseIdentifier(parser, context, Constants.Identifier, DiagnosticCode.Type_expected);
    if (parser.token === SyntaxKind.QuestionMark || parser.token === SyntaxKind.Colon) {
      const optionalToken = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.QuestionMark);
      consume(parser, context, SyntaxKind.Colon, DiagnosticCode.Type_expected);
      return createFunctionTypeParameters(
        ellipsisToken,
        type,
        optionalToken,
        parseTypeAnnotation(parser, context),
        pos,
        parser.curPos
      );
    }

    type = parseTypeContinuation(
      parser,
      context,
      parsePostfixType(parser, context, convertToPrimaryType(parser, context, token, type, pos), parser.curPos)
    );
  } else {
    type = parseTypeAnnotation(parser, context);
  }
  return createArrowTypeParameter(ellipsisToken, null as any, /* optionalToken */ null, type, pos, parser.curPos);
}

function parseArrowFunctionType(parser: ParserState, context: Context): ArrowFunctionType {
  const pos = parser.curPos;
  const typeParameters = parseTypeParameterDeclaration(parser, context);
  return createArrowFunctionType(
    parseArrowTypeParameters(parser, context),
    consumeOptToken(parser, context, SyntaxKind.Arrow),
    parseTypeAnnotation(parser, context),
    typeParameters,
    pos,
    parser.curPos
  );
}

function parseArrowTypeParameters(parser: ParserState, context: Context): FunctionTypeParameterList {
  const pos = parser.curPos;
  const arrowTypeParameterList: ArrowTypeParameter[] = [];
  let trailingComma = false;
  while (
    parser.token &
    (SyntaxKind.IsEllipsis | SyntaxKind.IsFutureReserved | SyntaxKind.IsIdentifier | SyntaxKind.IsStartOfType)
  ) {
    arrowTypeParameterList.push(parseArrowTypeParameter(parser, context));
    if (parser.token === SyntaxKind.RightParen) break;
    if (consumeOpt(parser, context | Context.AllowRegExp, SyntaxKind.Comma)) {
      if ((parser.token as SyntaxKind) === SyntaxKind.RightParen) {
        trailingComma = true;
        break;
      }
    }
  }
  return createArrowTypeParameterList(arrowTypeParameterList, trailingComma, pos, parser.curPos);
}

function parseArrowFunctionTypeParameters(parser: ParserState, context: Context, param: any, pos: number): any {
  const params: any = [param];
  let trailingComma = false;
  if (consumeOpt(parser, context, SyntaxKind.Comma)) {
    // - `type A = (string,) => void`
    if (parser.token === SyntaxKind.RightParen) {
      return createArrowTypeParameterList(params, /* trailingComma */ true, pos, parser.curPos);
    }
    do {
      params.push(parseArrowTypeParameter(parser, context));
      if ((parser.token as SyntaxKind) === SyntaxKind.RightParen) break;
      consume(parser, context | Context.AllowRegExp, SyntaxKind.Comma, DiagnosticCode._expected);
      if ((parser.token as SyntaxKind) === SyntaxKind.RightParen) {
        trailingComma = true;
        break;
      }
    } while (parser.token & Constants.IdentiferOrType);
  }
  return createArrowTypeParameterList(params, trailingComma, pos, parser.curPos);
}

function parseParenthesizedType(parser: ParserState, context: Context): any {
  const pos = parser.curPos;

  nextToken(parser, context);
  let token = parser.token;

  // - `type a = () => T;`
  // - `type a = (|x) => T;`
  // - `type a = [(&x,|a) => T];`
  if (parser.token === SyntaxKind.RightParen || parser.token === SyntaxKind.Ellipsis) {
    const params = parseArrowTypeParameters(parser, context);
    consume(parser, context, SyntaxKind.RightParen, DiagnosticCode.Expected_a_to_match_the_token_here);
    return createArrowFunctionType(
      params,
      consumeOptToken(parser, context, SyntaxKind.Arrow),
      parseTypeAnnotation(parser, context),
      /* typeParameters */ null,
      pos,
      parser.curPos
    );
  }

  if (parser.token & Constants.Identifier) {
    let arg: any = parseIdentifier(parser, context, Constants.IdentifierOrKeyword, DiagnosticCode.Type_expected);
    // - `type a = (x?: y) => T;`
    // - `type a = (x: y) => T;`
    if (parser.token === SyntaxKind.QuestionMark || parser.token === SyntaxKind.Colon) {
      const optionalToken = consumeOptToken(parser, context, SyntaxKind.QuestionMark);
      let type = null;
      if (optionalToken && parser.token !== SyntaxKind.Colon) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[
            DiagnosticCode.An_optional_parameter_cannot_be_used_without_an_in_an_arrow_function_type_parameter_list
          ],
          pos,
          parser.pos
        );
      }
      if (consumeOpt(parser, context, SyntaxKind.Colon)) {
        type = parseTypeAnnotation(parser, context);
      }
      const params = parseArrowFunctionTypeParameters(
        parser,
        context,
        createFunctionTypeParameters(/* ellipsisToken */ null, arg, optionalToken, type, pos, parser.curPos),
        pos
      );
      consume(parser, context, SyntaxKind.RightParen, DiagnosticCode.Expected_a_to_match_the_token_here);

      return createArrowFunctionType(
        consumeOptToken(parser, context, SyntaxKind.Arrow),
        params,
        parseTypeAnnotation(parser, context),
        /* typeParameters */ null,
        pos,
        parser.curPos
      );
    }

    // - `type a = (bj[c])[d];`
    // - `type a = (bj[c]) => T;`
    // - `type X = (x & y);`
    // - `type X = (x & y) => T;`
    // - `type a = (bj[c] & a | b) => T;`
    // - `type X = (x | y);`
    // - `type X = (x | y) => T;`
    // - `type X = (x) => T;`
    // - `type X = (x.y) => T;`
    // - `type X = (x.y<>) => T;`
    // - `type X = (x.y<z>) => T;`
    // - `type X = (x);`
    // - `type X = (x.y);`
    // - `type X = (x.y<>);`
    // - `type X = (x.y<z>);`
    arg = parseTypeContinuation(
      parser,
      context,
      parsePostfixType(parser, context, convertToPrimaryType(parser, context, token, arg, pos), parser.curPos)
    );

    // A comma delimited list is only alowed if this is an arrow, but we don't know this yet.
    // That's okay because we allow a comma delimited list in a 'ParenthesizedType' for error
    // recovery reasons
    if (parser.token === SyntaxKind.Comma) {
      arg = parseArrowFunctionTypeParameters(
        parser,
        context,
        createFunctionTypeParameters(
          /* ellipsisToken */ null,
          arg,
          /* optionalToken */ null,
          /* type */ null,
          pos,
          parser.curPos
        ),
        pos
      );
    }

    // This has to be an 'ArrowFunctionType'
    if (parser.token === SyntaxKind.Comma) {
      arg = parseArrowFunctionTypeParameters(
        parser,
        context,
        createFunctionTypeParameters(
          /* ellipsisToken */ null,
          arg,
          /* optionalToken */ null,
          /* type */ null,
          pos,
          parser.curPos
        ),
        pos
      );
      consume(parser, context, SyntaxKind.RightParen);
      return createArrowFunctionType(
        consumeToken(parser, context, SyntaxKind.Arrow, DiagnosticCode.Expected),
        arg,
        parseTypeAnnotation(parser, context),
        /* typeParameters */ null,
        pos,
        parser.curPos
      );
    }

    consume(parser, context, SyntaxKind.RightParen, DiagnosticCode.Expected_a_to_match_the_token_here);

    if ((context & Context.ArrowOrigin) === 0 && parser.token === SyntaxKind.Arrow) {
      return createArrowFunctionType(
        consumeToken(parser, context, SyntaxKind.Arrow, DiagnosticCode.Expected),
        arg,
        parseTypeAnnotation(parser, context),
        /* typeParameters */ null,
        pos,
        parser.curPos
      );
    }

    // this is an parenthesized type
    return createParenthesizedType(arg, pos, parser.curPos);
  }

  // '('
  if (parser.token === SyntaxKind.LeftParen) {
    nextToken(parser, context);
    token = parser.token;
    let type: any;
    if (consumeOpt(parser, context, SyntaxKind.RightParen)) {
      type = createArrowFunctionType(
        consumeOptToken(parser, context, SyntaxKind.Arrow),
        parseArrowFunctionTypeParameters(parser, context, [], pos),
        parseTypeAnnotation(parser, context),
        /* typeParameters */ null,
        pos,
        parser.curPos
      );
    } else {
      if (parser.token & Constants.Identifier) {
        type = parseIdentifier(parser, context, Constants.IdentifierOrKeyword, DiagnosticCode.Type_expected);
        // - `type X = ((x?) => T);`
        // - `type X = ((x?: y) => T);`
        // - `type X = ((x: y) => T);`
        if (
          (parser.token as SyntaxKind) === SyntaxKind.QuestionMark ||
          (parser.token as SyntaxKind) === SyntaxKind.Colon
        ) {
          const optionalToken = consumeOptToken(parser, context, SyntaxKind.QuestionMark);
          let type1 = null;
          if (optionalToken && (parser.token as SyntaxKind) !== SyntaxKind.Colon) {
            parser.onError(
              DiagnosticSource.Parser,
              DiagnosticKind.Error,
              diagnosticMap[
                DiagnosticCode.An_optional_parameter_cannot_be_used_without_an_in_an_arrow_function_type_parameter_list
              ],
              parser.curPos,
              parser.pos
            );
          }

          if (consumeOpt(parser, context, SyntaxKind.Colon)) {
            type1 = parseTypeAnnotation(parser, context);
          }
          const params = parseArrowFunctionTypeParameters(
            parser,
            context,
            createFunctionTypeParameters(/* ellipsisToken */ null, type, optionalToken, type1, pos, parser.curPos),
            pos
          );
          consume(parser, context, SyntaxKind.RightParen, DiagnosticCode.Expected_a_to_match_the_token_here);

          type = createArrowFunctionType(
            consumeOptToken(parser, context, SyntaxKind.Arrow),
            params,
            parseTypeAnnotation(parser, context),
            /* typeParameters */ null,
            pos,
            parser.curPos
          );
        }

        // - `type a = ((bj[c])[d]);`
        // - `type a = ((bj[c]) => T);`
        // - `type X = ((x & y));`
        // - `type X = ((x & y) => T);`
        // - `type a = ((bj[c] & a | b) => T);`
        // - `type X = ((x | y));`
        // - `type X = ((x | y) => T);`
        type = parseTypeContinuation(
          parser,
          context,
          parsePostfixType(parser, context, convertToPrimaryType(parser, context, token, type, pos), parser.curPos)
        );

        // A comma delimited list is only alowed if this is an arrow, but we don't know this yet.
        // That's okay because we allow a comma delimited list in a 'ParenthesizedType' for error
        // recovery reasons
        if ((parser.token as SyntaxKind) === SyntaxKind.Comma) {
          type = parseArrowFunctionTypeParameters(
            parser,
            context,
            createFunctionTypeParameters(
              /* ellipsisToken */ null,
              type,
              /* optionalToken */ null,
              /* type */ null,
              pos,
              parser.curPos
            ),
            pos
          );
        }
      } else if ((parser.token as SyntaxKind) === SyntaxKind.Ellipsis) {
        type = parseFunctionTypeParameter(parser, context);
        // - `type X = ((1));`
        // - `type X = ((1) => T);`
        // - `type X = (([1]) => T);`
      } else {
        type = parseTypeAnnotation(parser, context);
      }

      consume(parser, context, SyntaxKind.RightParen);
      const arrowToken = consumeOptToken(parser, context, SyntaxKind.Arrow);
      if (arrowToken) {
        type = createArrowFunctionType(
          arrowToken,
          parseArrowFunctionTypeParameters(parser, context, type, pos),
          parseTypeAnnotation(parser, context),
          /* typeParameters */ null,
          pos,
          parser.curPos
        );
      }
    }

    consume(parser, context, SyntaxKind.RightParen);

    if ((context & Context.ArrowOrigin) === 0 && (parser.token as SyntaxKind) === SyntaxKind.Arrow) {
      return createArrowFunctionType(
        consumeToken(parser, context, SyntaxKind.Arrow, DiagnosticCode.Expected),
        parseArrowFunctionTypeParameters(parser, context, type, pos),
        parseTypeAnnotation(parser, context),
        /* typeParameters */ null,
        pos,
        parser.curPos
      );
    }

    return createParenthesizedType(type, pos, parser.curPos);
  }

  let type: any = parseTypeAnnotation(parser, context);

  // This has to be an 'ArrowFunctionType'
  if (parser.token === SyntaxKind.Comma) {
    type = parseArrowFunctionTypeParameters(
      parser,
      context,
      createArrowTypeParameter(
        /* ellipsisToken */ null,
        type,
        /* optionalToken */ null,
        /* type */ null,
        pos,
        parser.curPos
      ),
      pos
    );
    consume(parser, context, SyntaxKind.RightParen);

    return createArrowFunctionType(
      type,
      consumeToken(parser, context, SyntaxKind.Arrow, DiagnosticCode.Expected),
      parseTypeAnnotation(parser, context),
      /* typeParameters */ null,
      pos,
      parser.curPos
    );
  }

  // - `type a = (bj[c])[d];`
  // - `type a = (bj[c]) => T;`
  // - `type a = (a[-1]) => T;`
  // - `type a = ([-1]) => T;`
  // - `type a = (["string"]) => T;`
  if (consumeOpt(parser, context, SyntaxKind.RightParen)) {
    if (context & Context.ArrowOrigin || parser.token !== SyntaxKind.Arrow) {
      return createParenthesizedType(type, pos, parser.curPos);
    }
    return createArrowFunctionType(
      consumeOptToken(parser, context, SyntaxKind.Arrow),
      parseArrowFunctionTypeParameters(parser, context, type, pos),
      parseTypeAnnotation(parser, context),
      /* typeParameters */ null,
      pos,
      parser.curPos
    );
  }

  consume(parser, context, SyntaxKind.RightParen, DiagnosticCode.Expected_a_to_match_the_token_here);

  // - `type a = (bj[c])[d];`
  // - `type a = (bj[c])`
  // - `type a = (a[-1]);`
  // - `type a = ([-1])`
  // - `type a = (["string"]);`
  return createParenthesizedType(type, pos, parser.curPos);
}

function parseTypeReference(parser: ParserState, context: Context): TypeReference {
  const pos = parser.curPos;
  return createTypeReference(
    parseEntityName(
      parser,
      context,
      parseIdentifier(parser, context | Context.InType, Constants.IdentifierOrKeyword, DiagnosticCode.Type_expected),
      Constants.IdentifierOrKeyword,
      pos
    ),
    parseTypeParameterInstantiation(
      parser,
      (context | (context & Context.ArrowOrigin)) ^ (context & Context.ArrowOrigin)
    ),
    pos,
    parser.curPos
  );
}

function parseEntityName(parser: ParserState, context: Context, entity: any, check: number, pos: number): any {
  while (consumeOpt(parser, context, SyntaxKind.Period)) {
    if (parser.token === SyntaxKind.LessThan) break;
    entity = createQualifiedType(
      entity,
      parseIdentifier(parser, context, check, DiagnosticCode.Type_expected),
      pos,
      parser.curPos
    ) as any;
  }
  return entity;
}

function parseTypeParameterDeclaration(parser: ParserState, context: Context): TypeParameterDeclaration | null {
  const pos = parser.curPos;
  const nodeFlags = parser.nodeFlags | NodeFlags.IsTypeNode;
  if (consumeOpt(parser, context, SyntaxKind.LessThan)) {
    if (parser.token === SyntaxKind.GreaterThan) {
      parser.previousErrorPos = parser.pos;
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.Identifier_expected],
        parser.curPos,
        parser.pos
      );
    }
    const declarations = parseTypeParameterList(parser, context | Context.InType);
    consume(parser, context, SyntaxKind.GreaterThan, DiagnosticCode.Expected_to_find_a_to_match_the_token_here);
    return createTypeParameterDeclaration(declarations, nodeFlags, pos, parser.curPos);
  }
  return null;
}

function parseTypeParameterList(parser: ParserState, context: Context): TypeParameterList {
  const start = parser.curPos;
  const types = [];
  let requireDefault = false;
  let trailingComma = false;
  while (parser.token & Constants.IsTypeParameter) {
    const type = parseTypeParameter(parser, context, requireDefault);
    types.push(type);
    if ((parser.token as SyntaxKind) === SyntaxKind.GreaterThan) break;
    if (type.defaultType) requireDefault = true;
    if (consumeOpt(parser, context, SyntaxKind.Comma)) {
      if (parser.token === SyntaxKind.GreaterThan) {
        trailingComma = true;
        break;
      }
    }
  }
  return createTypeParameterList(types, trailingComma, start, parser.curPos);
}

function parseTypeParameterInstantiation(parser: ParserState, context: Context): TypeParameterInstantiation | null {
  const pos = parser.curPos;
  const nodeFlags = parser.nodeFlags | NodeFlags.IsTypeNode;
  if ((parser.nodeFlags & NodeFlags.NewLine) === 0 && consumeOpt(parser, context, SyntaxKind.LessThan)) {
    const typeInstantiations = parseTypeInstantiations(parser, context | Context.InType);
    consume(parser, context, SyntaxKind.GreaterThan, DiagnosticCode.Expected_to_find_a_to_match_the_token_here);
    return createTypeParameterInstantiation(typeInstantiations, nodeFlags, pos, parser.curPos);
  }
  return null;
}

function parseTypeInstantiations(parser: ParserState, context: Context): TypeInstantiations {
  const start = parser.curPos;
  const types = [];
  let trailingComma = false;
  while (parser.token & Constants.IsTypeParameter) {
    types.push(parseTypeAnnotation(parser, context));
    if ((parser.token as SyntaxKind) === SyntaxKind.GreaterThan) break;
    if (consumeOpt(parser, context, SyntaxKind.Comma)) {
      if (parser.token === SyntaxKind.GreaterThan) {
        trailingComma = true;
        break;
      }
    }
  }
  return createTypeInstantiations(types, trailingComma, start, parser.curPos);
}

function parseTypeParameter(parser: ParserState, context: Context, requireInitializer: boolean): TypeParameter {
  const start = parser.curPos;
  const name = parseIdentifier(parser, context, Constants.Identifier);
  const type = parseType(parser, context);
  const defaultType = consumeOpt(parser, context, SyntaxKind.Assign) ? parseTypeAnnotation(parser, context) : null;
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
    NodeFlags.IsStatement,
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

  while (parser.token & Constants.VariableDeclarationList) {
    declarations.push(parseVariableDeclaration(parser, context, inForStatement, scope, type));
    // If we can consume a semicolon (either explicitly, or with ASI), then consider us done
    // with parsing the list of variable declarators.
    //
    // Same when we're parsing the variable declarator of a 'for-in' statement, we
    // are done if we see an 'in' keyword in front of us. Same with for-of
    if (parser.token & (SyntaxKind.Smi | SyntaxKind.IsInOrOf) || parser.nodeFlags & NodeFlags.NewLine) break;
    if (consumeOpt(parser, context, SyntaxKind.Comma)) {
      if ((parser.token & Constants.IsInOrOf) < 1) {
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
  const binding = parseIdentifierOrPattern(parser, context, scope, type, DiagnosticCode.Variable_declaration_expected);
  const optionalToken = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.QuestionMark);
  const typeAnnotation = parseType(parser, context);
  const initializer = parseInitializer(parser, context, false);
  if (initializer) {
    if (
      inForStatement &&
      (binding.kind !== SyntaxKind.Identifier || context & Context.OptionsDisableWebCompat) &&
      parser.token & SyntaxKind.IsInOrOf
    ) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.The_variable_declaration_of_a_for_of_in_statement_cannot_have_an_initializer],
        pos,
        parser.curPos
      );
    }
  }
  return createVariableDeclaration(binding, optionalToken, typeAnnotation, initializer, pos, parser.curPos);
}

function parseTypeAsIdentifierOrTypeAlias(
  parser: ParserState,
  context: Context,
  declareKeyword: SyntaxToken<TokenSyntaxKind> | null,
  scope: ScopeState,
  labels: any,
  ownLabels: any
): TypeAlias | LabelledStatement | ExpressionStatement {
  const pos = parser.curPos;
  let nodeFlags = parser.nodeFlags | NodeFlags.IsTypeNode;
  let expr = parseIdentifier(parser, context, Constants.Identifier, DiagnosticCode.Identifier_expected);
  if (context & Context.OptionsAllowTypes && parser.token & Constants.Identifier) {
    expr = parseIdentifier(parser, context, Constants.Identifier, DiagnosticCode.Identifier_expected);
    const typeParameters = parseTypeParameterDeclaration(parser, context);
    const assignToken = consumeToken(
      parser,
      context,
      SyntaxKind.Assign,
      DiagnosticCode.An_TypeAlias_declaration_require_a
    );
    const type = parseTypeAnnotation(parser, context);
    if (declareKeyword) nodeFlags |= NodeFlags.Declared;
    parseSemicolon(parser, context);
    return createTypeAlias(
      declareKeyword,
      createToken(SyntaxKind.TypeKeyword, NodeFlags.ChildLess, pos, expr.end),
      expr as Identifier,
      typeParameters,
      assignToken,
      type as any,
      nodeFlags,
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
      labels,
      ownLabels,
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
  scope: ScopeState,
  labels: any,
  ownLabels: any
): LexicalDeclaration | LabelledStatement | ExpressionStatement {
  const pos = parser.curPos;
  const flags = parser.nodeFlags | NodeFlags.IsStatement;
  let expr = parseIdentifier(parser, context, Constants.Identifier, DiagnosticCode.Identifier_expected);
  if (
    parser.token & (SyntaxKind.IsPatternStart | SyntaxKind.IsIdentifier | SyntaxKind.IsFutureReserved) &&
    (flags & Constants.IsEscaped) < 1
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
      labels,
      ownLabels,
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
  const lexicalToken = consumeKeywordAndCheckForEscapeSequence(parser, context, token, NodeFlags.IsStatement, pos);
  const declarationList = parseBindingList(
    parser,
    (context | 0b00000100000000000000000000010000) ^ Context.InBlock,
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

  while (parser.token & 0b00010000100000000100000000000000) {
    bindinglist.push(parseLexicalBinding(parser, context, flags, inForStatement, scope, type));
    // If we can consume a semicolon (either explicitly, or with ASI), then consider us done
    // with parsing the list of lexical bindings.
    //
    // Same when we're parsing the lexical binding of a 'for-in' statement, we
    // are done if we see an 'in' keyword in front of us. Same with for-of
    if (parser.token & (SyntaxKind.Smi | SyntaxKind.IsInOrOf) || parser.nodeFlags & NodeFlags.NewLine) break;

    if (consumeOpt(parser, context, SyntaxKind.Comma)) {
      if ((parser.token & 0b00010000100000000100000000000000) < 1) {
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
    !inForStatement && ((flags & NodeFlags.Const) > 0 || parser.token & SyntaxKind.IsPatternStart);

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
  const typeAnnotation = parseType(parser, context);

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
  } else if (
    requireInitializer ||
    (inForStatement && binding.kind !== SyntaxKind.Identifier && (parser.token & SyntaxKind.IsInOrOf) === 0)
  ) {
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

function parseObjectTypePropertyKey(
  parser: ParserState,
  context: Context,
  check: number
): StringLiteral | NumericLiteral | Identifier | DummyIdentifier {
  if (parser.token === SyntaxKind.StringLiteral) return parseStringLiteral(parser, context);
  if (parser.token === SyntaxKind.NumericLiteral) return parseNumericLiteral(parser, context);
  return parseIdentifier(parser, context, check, DiagnosticCode.Identifier_expected);
}

function parseTypeMember(parser: ParserState, context: Context, objectTypeFlag: ObjectTypeFlag): any {
  const pos = parser.curPos;
  let staticKeyword = null;
  let protoKeyword = null;
  const token = parser.token;

  // - `type x = { (): string }`
  if (token & SyntaxKind.IsLessThanOrLeftParen) {
    return parseObjectTypeCallProperty(parser, context, protoKeyword, staticKeyword, pos);
  }

  if (
    objectTypeFlag & (ObjectTypeFlag.AllowStatic | ObjectTypeFlag.AllowProto) &&
    (token === SyntaxKind.ProtoKeyword || token === SyntaxKind.StaticKeyword)
  ) {
    const key = parseIdentifier(parser, context, Constants.Identifier);
    // - `type x = { ()?: string }`
    // - `type x = { (): string }`
    // - `type x = { (): string, }`
    // - `type x = { (): string, y(): string }`
    if ((parser.token as SyntaxKind) === SyntaxKind.Colon || (parser.token as SyntaxKind) === SyntaxKind.QuestionMark) {
      const optionalToken = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.QuestionMark);
      consume(parser, context, SyntaxKind.Colon);
      const value = parseTypeAnnotation(parser, context);
      parseTypeMemberSemicolon(parser, context);
      return createObjectTypeProperty(
        /* getKeyword */ null,
        /* setKeyword */ null,
        key,
        value,
        optionalToken,
        staticKeyword,
        protoKeyword,
        pos,
        parser.curPos
      );
    }

    // - `proto`
    if (token === SyntaxKind.ProtoKeyword) {
      protoKeyword = createToken(SyntaxKind.ProtoKeyword, NodeFlags.ExpressionNode, key.start, key.end);
    }

    // - `static`
    if (token === SyntaxKind.StaticKeyword) {
      staticKeyword = createToken(SyntaxKind.StaticKeyword, NodeFlags.ExpressionNode, key.start, key.end);
    }
  }

  if (consumeOpt(parser, context, SyntaxKind.LeftBracket)) {
    return parser.token === SyntaxKind.LeftBracket
      ? parseObjectTypeInternalSlot(parser, context, staticKeyword, protoKeyword, pos)
      : parseObjectTypeIndexer(parser, context, protoKeyword, staticKeyword, pos);
  }

  // - `declare class x { static x (): string }`
  if (parser.token & SyntaxKind.IsLessThanOrLeftParen) {
    return parseObjectTypeCallProperty(parser, context, protoKeyword, staticKeyword, pos);
  }

  if (parser.token === SyntaxKind.Ellipsis) {
    return parseObjectTypeSpreadProperty(parser, context, protoKeyword, staticKeyword, pos);
  }

  return parseObjectTypeProperty(parser, context, protoKeyword, staticKeyword, pos);
}

function parseTypeMemberSemicolon(parser: ParserState, context: Context): void {
  if (consumeOpt(parser, context, SyntaxKind.Comma)) return;
  // Didn't have a comma.  We must have a (possible ASI) semicolon.
  parseSemicolon(parser, context);
}

function parseObjectType(parser: ParserState, context: Context, objectTypeFlag: ObjectTypeFlag): ObjectType {
  const pos = parser.curPos;
  const properties = [];
  const nodeFlags = parser.nodeFlags | NodeFlags.IsTypeNode;
  let trailingComma = false;
  if (consume(parser, context, SyntaxKind.LeftBrace, DiagnosticCode.Missing_an_opening_brace)) {
    while (parser.token & 0b00111000110010000100000000000000) {
      properties.push(parseTypeMember(parser, context, objectTypeFlag));
      if ((parser.token as SyntaxKind) === SyntaxKind.RightBrace) break;
      if (consumeOpt(parser, context, SyntaxKind.Comma)) {
        if ((parser.token as SyntaxKind) === SyntaxKind.RightParen) {
          trailingComma = true;
          break;
        }
      }
    }
    consume(
      parser,
      context,
      SyntaxKind.RightBrace,
      DiagnosticCode.The_parser_expected_to_find_a_to_match_the_token_here
    );
  }

  return createObjectType(properties, trailingComma, nodeFlags, pos, parser.curPos);
}

function parseObjectTypeSpreadProperty(
  parser: ParserState,
  context: Context,
  protoKeyword: SyntaxToken<TokenSyntaxKind> | null,
  staticKeyword: SyntaxToken<TokenSyntaxKind> | null,
  pos: number
): ObjectTypeSpreadProperty {
  return createObjectTypeSpreadProperty(
    protoKeyword,
    consumeToken(parser, context, SyntaxKind.Ellipsis, DiagnosticCode.Type_expected),
    parseTypeAnnotation(parser, context),
    staticKeyword,
    pos,
    parser.curPos
  );
}

function parseObjectTypeParameter(parser: ParserState, context: Context, functionTypeFlags: FunctionTypeFlags): any {
  const openingParensExists = consume(
    parser,
    context,
    SyntaxKind.LeftParen,
    DiagnosticCode.Missing_an_opening_parentheses
  );
  const params = parseFunctionTypeParameters(parser, context, functionTypeFlags);
  consume(
    parser,
    context,
    SyntaxKind.RightParen,
    openingParensExists ? DiagnosticCode.Expected_a_to_match_the_token_here : DiagnosticCode.Unexpected_token
  );
  return params;
}

function parseObjectTypeProperty(
  parser: ParserState,
  context: Context,
  protoKeyword: SyntaxToken<TokenSyntaxKind> | null,
  staticKeyword: SyntaxToken<TokenSyntaxKind> | null,
  pos: number
): ObjectTypeProperty {
  let key;
  let getKeyword: SyntaxToken<TokenSyntaxKind> | null = null;
  let setKeyword: SyntaxToken<TokenSyntaxKind> | null = null;

  if (parser.token & Constants.Identifier) {
    const token = parser.token;
    key = parseObjectTypePropertyKey(parser, context, Constants.IdentifierOrKeyword);
    if (
      (parser.token & SyntaxKind.IsLessThanOrLeftParen) === 0 &&
      (token === SyntaxKind.GetKeyword || token === SyntaxKind.SetKeyword)
    ) {
      if (token === SyntaxKind.GetKeyword) {
        getKeyword = createToken(SyntaxKind.GetKeyword, key.flags | NodeFlags.ChildLess, pos, key.end);
      } else {
        setKeyword = createToken(SyntaxKind.SetKeyword, key.flags | NodeFlags.ChildLess, pos, key.end);
      }
      key = parseObjectTypePropertyKey(parser, context, Constants.Identifier);
      const value = parseFunctionType(
        parser,
        context,
        token === SyntaxKind.GetKeyword ? FunctionTypeFlags.Getter : FunctionTypeFlags.Setter
      );
      parseTypeMemberSemicolon(parser, context);
      return createObjectTypeProperty(
        getKeyword,
        setKeyword,
        key,
        value,
        /* optionalToken */ null,
        /* staticKeyword */ null,
        protoKeyword,
        pos,
        parser.curPos
      );
    }
    if (parser.token & SyntaxKind.IsLessThanOrLeftParen) {
      const value = parseFunctionType(parser, context, FunctionTypeFlags.None);
      parseTypeMemberSemicolon(parser, context);
      // This is a method property
      return createObjectTypeProperty(
        getKeyword,
        setKeyword,
        key,
        value,
        /* optionalToken */ null,
        staticKeyword,
        protoKeyword,
        pos,
        parser.curPos
      );
    }
    const optionalToken = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.QuestionMark);
    consume(parser, context, SyntaxKind.Colon);
    const value = parseTypeAnnotation(parser, context);
    parseTypeMemberSemicolon(parser, context);
    return createObjectTypeProperty(
      getKeyword,
      setKeyword,
      key,
      value,
      optionalToken,
      staticKeyword,
      protoKeyword,
      pos,
      parser.curPos
    );
  } else {
    key = parseObjectTypePropertyKey(parser, context, Constants.IdentifierOrKeyword);
  }

  if (parser.token & SyntaxKind.IsLessThanOrLeftParen) {
    // This is a method property
    const value = parseFunctionType(parser, context, FunctionTypeFlags.None);
    parseTypeMemberSemicolon(parser, context);
    return createObjectTypeProperty(
      getKeyword,
      setKeyword,
      key,
      value,
      /* optionalToken */ null,
      staticKeyword,
      protoKeyword,
      pos,
      parser.curPos
    );
  }
  const optionalToken = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.QuestionMark);
  consume(parser, context, SyntaxKind.Colon);
  const value = parseTypeAnnotation(parser, context);
  parseTypeMemberSemicolon(parser, context);
  return createObjectTypeProperty(
    getKeyword,
    setKeyword,
    key,
    value,
    optionalToken,
    staticKeyword,
    protoKeyword,
    pos,
    parser.curPos
  );
}

function parseObjectTypeCallProperty(
  parser: ParserState,
  context: Context,
  protoKeyword: SyntaxToken<TokenSyntaxKind> | null,
  staticKeyword: SyntaxToken<TokenSyntaxKind> | null,
  pos: number
): ObjectTypeCallProperty {
  if (protoKeyword) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Type_expected],
      pos,
      parser.pos
    );
  }
  const typeParameters = parseTypeParameterDeclaration(parser, context);
  const params = parseObjectTypeParameter(parser, context, FunctionTypeFlags.None);
  consume(parser, context, SyntaxKind.Colon);
  const returnType = parseTypeAnnotation(parser, context);
  consumeOpt(parser, context, SyntaxKind.Semicolon);
  return createObjectTypeCallProperty(
    protoKeyword,
    typeParameters,
    params,
    staticKeyword,
    returnType,
    pos,
    parser.curPos
  );
}

function parseObjectTypeInternalSlot(
  parser: ParserState,
  context: Context,
  staticKeyword: SyntaxToken<TokenSyntaxKind> | null,
  protoKeyword: SyntaxToken<TokenSyntaxKind> | null,
  pos: number
): ObjectTypeInternalSlot {
  if (protoKeyword) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Type_expected],
      pos,
      parser.pos
    );
  }

  consume(parser, context, SyntaxKind.LeftBracket);
  const name = parseObjectTypePropertyKey(parser, context, Constants.IdentifierOrKeyword);
  consume(parser, context, SyntaxKind.RightBracket, DiagnosticCode.Did_you_forgot_a_to_match_the_token);

  consume(parser, context, SyntaxKind.RightBracket, DiagnosticCode.Did_you_forgot_a_to_match_the_token);

  if (parser.token & SyntaxKind.IsLessThanOrLeftParen) {
    const typeParameters = parseTypeParameterDeclaration(parser, context);
    const params = parseObjectTypeParameter(parser, context, FunctionTypeFlags.None);
    consume(parser, context, SyntaxKind.Colon);
    const returnType = parseTypeAnnotation(parser, context);
    const value = createFunctionType(params, returnType, typeParameters, pos, parser.curPos);
    parseTypeMemberSemicolon(parser, context);
    return createObjectTypeInternalSlot(
      protoKeyword,
      name,
      /* optionalToken */ null,
      staticKeyword,
      value,
      pos,
      parser.curPos
    );
  }
  const optionalToken = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.QuestionMark);
  consume(parser, context, SyntaxKind.Colon);
  const type = parseTypeAnnotation(parser, context);
  parseTypeMemberSemicolon(parser, context);
  return createObjectTypeInternalSlot(protoKeyword, name, optionalToken, staticKeyword, type, pos, parser.curPos);
}

function convertToPrimaryType(parser: ParserState, context: Context, t: SyntaxKind, key: any, pos: number): TypeNode {
  switch (t) {
    case SyntaxKind.StringLiteral:
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
      return createToken(t, NodeFlags.ChildLess, key.start, key.end);
    default:
      return createTypeReference(
        parseEntityName(parser, context, key, Constants.IdentifierOrKeyword, pos),
        parseTypeParameterInstantiation(
          parser,
          (context | (context & Context.ArrowOrigin)) ^ (context & Context.ArrowOrigin)
        ),
        pos,
        parser.curPos
      );
  }
}

function parseObjectTypeIndexer(
  parser: ParserState,
  context: Context,
  protoKeyword: SyntaxToken<TokenSyntaxKind> | null,
  staticKeyword: SyntaxToken<TokenSyntaxKind> | null,
  pos: number
): ObjectTypeIndexer {
  let key: any;
  let name = null;

  if (parser.token & Constants.Identifier) {
    const token = parser.token;
    key = parseIdentifier(parser, context, Constants.Identifier);
    if (parser.token === SyntaxKind.QuestionMark || parser.token === SyntaxKind.Colon) {
      let optionalToken = null;
      optionalToken = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.QuestionMark);
      name = key;
      if (optionalToken) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error | DiagnosticKind.EarlyError,
          diagnosticMap[DiagnosticCode.An_index_signature_parameter_cannot_have_a_question_mark],
          parser.curPos,
          parser.pos
        );
      }
      consume(parser, context, SyntaxKind.Colon);
      key = parseTypeAnnotation(parser, context);
    } else {
      key = parseTypeContinuation(
        parser,
        context,
        parsePostfixType(parser, context, convertToPrimaryType(parser, context, token, key, pos), parser.curPos)
      );
    }
  } else {
    key = parseTypeAnnotation(parser, context);
  }

  consume(parser, context, SyntaxKind.RightBracket, DiagnosticCode.Did_you_forgot_a_to_match_the_token);
  const type = parseReturnType(parser, context);
  parseTypeMemberSemicolon(parser, context);
  return createObjectTypeIndexer(protoKeyword, staticKeyword, name, key, type, pos, parser.curPos);
}

function parseReturnType(parser: ParserState, context: Context): TypeNode {
  consume(parser, context, SyntaxKind.Colon);
  return parseTypeAnnotation(parser, context);
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
  leftHandSideContext: LeftHandSide
): YieldExpression | ArrowFunction | Identifier | DummyIdentifier {
  const pos = parser.curPos;
  if (context & Context.YieldContext) {
    if (context & Context.Parameters) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode._yield_expression_cannot_be_used_in_function_parameters],
        pos,
        parser.pos
      );
    }
    const yieldKeyword = consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.YieldKeyword);

    if (leftHandSideContext || parser.token === SyntaxKind.QuestionMark) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[
          leftHandSideContext & LeftHandSide.NewExpression
            ? DiagnosticCode.Expression_expected
            : leftHandSideContext & LeftHandSide.ForStatement
            ? DiagnosticCode.Cannot_use_the_yield_keyword_on_the_left_hand_side_of_a_for_in_statement_in_a_generator_context
            : parser.token === SyntaxKind.QuestionMark
            ? DiagnosticCode.Cannot_use_the_yield_keyword_on_the_left_hand_side_of_conditional_expression_in_a_generator_context
            : DiagnosticCode.Expected_a
        ],
        pos,
        parser.pos
      );
    }

    const asteriskToken = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.Multiply);
    let expression = null;
    if (asteriskToken) {
      // A `\n` after `yield` is illegal for `yield *`, and '*' should therefor be parsed as
      //an binary expr operator in error recovery mode
      if (asteriskToken.flags & NodeFlags.NewLine) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.Expression_expected],
          parser.curPos,
          parser.pos
        );
      }

      expression = parseExpression(parser, context);
    } else if (parser.token & 0b00000000100000010100000000000000) {
      expression = parseExpression(parser, context);
    }

    parser.assignable = false;

    return createYieldExpression(
      /* yieldKeyword */ yieldKeyword,
      /* delegate */ !!asteriskToken,
      /* asteriskToken */ asteriskToken,
      /* expression */ expression,
      pos,
      parser.curPos
    );
  }
  const expression = parseIdentifier(parser, context, Constants.Identifier, DiagnosticCode.Identifier_expected);

  if (parser.token === SyntaxKind.Arrow) {
    const scope = {
      kind: ScopeKind.ArrowParams,
      scope: { kind: ScopeKind.Block, scope: null, flags: ScopeFlags.None },
      flags: ScopeFlags.None
    };

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
  leftHandSideContext: LeftHandSide
): AwaitExpression | DummyIdentifier {
  const pos = parser.curPos;

  if (
    (context & Context.Module && (context & (Context.AwaitContext | Context.TopLevel)) == 0) ||
    parser.nodeFlags & Constants.IsEscaped
  ) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[
        parser.nodeFlags & Constants.IsEscaped
          ? DiagnosticCode._await_keyword_must_not_contain_escaped_characters
          : DiagnosticCode._await_is_only_allowed_within_async_functions_and_at_the_top_levels_of_modules
      ],
      pos,
      parser.pos
    );
  }

  if (leftHandSideContext & LeftHandSide.DisallowClassExtends) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Expression_expected],
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

  // 'await' is a unary operator according to the spec, even though it's treated
  // specially in the parser.
  if ((parser.token as SyntaxKind) === SyntaxKind.Exponentiate || leftHandSideContext & LeftHandSide.NewExpression) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[
        leftHandSideContext & LeftHandSide.NewExpression
          ? DiagnosticCode.Expression_expected
          : DiagnosticCode.Unary_expressions_as_the_left_operand_of_an_exponentation_expression_must_be_disambiguated_with_parentheses
      ],
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
  consume(parser, context, SyntaxKind.Period);
  const metaKeyword = consumeKeywordAndCheckForEscapeSequence(
    parser,
    context,
    SyntaxKind.Meta,
    NodeFlags.ExpressionNode,
    parser.curPos
  );

  if ((context & Context.AllowImportMeta) < 1 && parser.previousErrorPos !== parser.pos) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Cannot_use_import_meta_outside_a_module],
      pos,
      parser.pos
    );
  }

  if (!metaKeyword) {
    parser.previousErrorPos = parser.pos;
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode._import_meta_is_the_only_valid_meta_property_for_import],
      pos,
      parser.pos
    );
  }

  const expression: any = createImportMeta(
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

  parser.assignable = false;

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
    parseExpressionCoverGrammar(
      parser,
      (context | 0b00000000100000000000000010000000) ^ 0b00000000100000000000000010000000
    ),
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
  isDefaultModifier: boolean,
  labels: any
): any {
  const pos = parser.curPos;
  let declareKeyword = null;

  if (parser.token === SyntaxKind.DeclareKeyword) {
    let expr = parseIdentifier(parser, context, Constants.Identifier, DiagnosticCode.Identifier_expected);
    if ((context & Context.OptionsAllowTypes) === 0 || (parser.token & SyntaxKind.IsStatementStart) === 0) {
      parser.assignable = true;
      if ((parser.token as SyntaxKind) === SyntaxKind.Colon) {
        return parseLabelledStatement(
          parser,
          context,
          expr as Identifier,
          SyntaxKind.DeclareKeyword,
          NodeFlags.IsStatement,
          /* allowFunction */ true,
          scope,
          labels,
          null,
          pos
        );
      } else if ((parser.token as SyntaxKind) === SyntaxKind.Arrow) {
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

    declareKeyword = createToken(SyntaxKind.DeclareKeyword, NodeFlags.ChildLess, expr.start, expr.end);

    switch (parser.token as SyntaxKind) {
      case SyntaxKind.VarKeyword:
        return parseVariableStatement(parser, context, declareKeyword, scope, BindingType.Var);
      case SyntaxKind.TypeKeyword:
        return parseTypeAsIdentifierOrTypeAlias(parser, context, declareKeyword, scope, labels, null);
      case SyntaxKind.OpaqueKeyword:
        return parseOpaqueType(parser, context, declareKeyword, scope, labels, null);
      case SyntaxKind.FunctionKeyword:
        return parseFunctionDeclaration(parser, context, scope, declareKeyword, ParseFunctionFlag.None, labels);
    }
  }

  const decorator = parseDecorators(parser, context);
  const flags = parser.nodeFlags | NodeFlags.IsStatement;
  const classToken = consumeKeywordAndCheckForEscapeSequence(
    parser,
    context | Context.AllowRegExp,
    SyntaxKind.ClassKeyword,
    NodeFlags.IsStatement,
    pos
  );
  context = (context | Context.InConstructor | Context.Strict) ^ Context.InConstructor;

  let name = null;

  if (parser.token !== SyntaxKind.ExtendsKeyword) {
    if (isDefaultModifier) {
      if (parser.token & Constants.Identifier) {
        name = parseBindingIdentifier(parser, context, scope, BindingType.Const);
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
        name = parseBindingIdentifier(parser, context, scope, BindingType.Const);
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
    (flags | Constants.IsEscaped) ^ Constants.IsEscaped,
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
  const flags = parser.nodeFlags | NodeFlags.ExpressionNode;
  const classToken = consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.ClassKeyword);

  let name = null;

  if (parser.token & Constants.Identifier && parser.token !== SyntaxKind.ExtendsKeyword) {
    if (parser.token & SyntaxKind.IsFutureReserved) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[DiagnosticCode.Identifier_expected_Reserved_word_in_strict_mode],
        parser.curPos,
        parser.pos
      );
    }
    name = parseIdentifierReference(parser, context);
  }

  const typeParameters = parseTypeParameterDeclaration(parser, context);

  const classTail = parseClassTail(parser, context | Context.InClassBody, false, true);

  parser.assignable = false;

  return createClassExpression(
    decorator,
    classToken,
    name as any,
    typeParameters,
    classTail,
    (flags | Constants.IsEscaped) ^ Constants.IsEscaped,
    pos,
    parser.curPos
  );
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
      NodeFlags.IsStatement,
      pos
    );

    const curPos = parser.curPos;
    classHeritage = createClassHeritage(
      extendsToken,
      parseLeftHandSideExpression(parser, context, LeftHandSide.NotAssignable | LeftHandSide.DisallowClassExtends),
      (parser.token as SyntaxKind) === SyntaxKind.LessThan ? parseTypeParameterInstantiation(parser, context) : null,
      curPos,
      parser.curPos
    );
    inheritedContext |= Context.SuperCall;
  } else {
    inheritedContext = (inheritedContext | Context.SuperCall) ^ Context.SuperCall;
  }

  // - `declare class x { y(): z; }`
  if (isDeclared) {
    return createClassTail(
      classHeritage,
      parseObjectType(parser, context, ObjectTypeFlag.AllowProto | ObjectTypeFlag.AllowStatic),
      NodeFlags.ExpressionNode | NodeFlags.Declared,
      pos,
      parser.curPos
    );
  }

  if (consume(parser, context, SyntaxKind.LeftBrace, DiagnosticCode.Missing_an_opening_brace)) {
    body = parseClassBody(parser, inheritedContext, context);
    consume(
      parser,
      context | (isDecl ? Context.AllowRegExp : Context.None),
      SyntaxKind.RightBrace,
      DiagnosticCode.The_parser_expected_to_find_a_to_match_the_token_here
    );
    return createClassTail(classHeritage, body, pos, NodeFlags.ExpressionNode, parser.curPos);
  }
  return createClassTail(
    classHeritage,
    /* empty list */ createClassBody([], pos, pos),
    pos,
    NodeFlags.ExpressionNode,
    pos
  );
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
  if (token & Constants.Identifier) {
    let key = parseIdentifier(parser, context, Constants.Identifier, DiagnosticCode.Identifier_expected);

    if (
      (parser.token & 0b00000100110000000100000000000000 || parser.token === SyntaxKind.Decorator) &&
      // If a line terminator is permitted before a 'static' 'declare', 'async', 'get', or 'set' modifier, this
      // is an class field

      (parser.nodeFlags & NodeFlags.NewLine) < 1
    ) {
      switch (token) {
        case SyntaxKind.StaticKeyword:
          // avoid 'static static'
          if (flags & Constants.IsEscaped) {
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
          if (flags & Constants.IsEscaped) {
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
          if (flags & Constants.IsEscaped) {
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
          setKeyword = createToken(SyntaxKind.SetKeyword, flags | NodeFlags.ChildLess, pos, parser.curPos);
          nodeFlags |= NodeFlags.Setter;
          break;
      }
    } else if (
      context & Context.OptionsNext &&
      token === SyntaxKind.StaticKeyword &&
      parser.token === SyntaxKind.LeftBrace
    ) {
      return parseClassStaticBlockDeclaration(
        parser,
        inheritedContext,
        decorators,
        declareKeyword,
        staticKeyword,
        nodeFlags,
        pos
      );
    }

    if (nodeFlags & (NodeFlags.Async | NodeFlags.Getter | NodeFlags.Setter)) {
      if (
        token &
        (SyntaxKind.IsIdentifier | SyntaxKind.IsKeyword | SyntaxKind.IsFutureReserved | SyntaxKind.IsProperty)
      ) {
        const t = parser.token;
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
      }
    }

    if (parser.token & SyntaxKind.IsLessThanOrLeftParen || nodeFlags & Constants.IsGetSetAsync) {
      if (key.kind !== SyntaxKind.ComputedPropertyName) {
        if (parser.tokenValue === 'constructor') {
          if ((!staticKeyword && nodeFlags & Constants.IsGetSetAsync) || decorators) {
            parser.onError(
              DiagnosticSource.Parser,
              DiagnosticKind.Error,
              diagnosticMap[
                decorators
                  ? DiagnosticCode.Decorators_are_not_valid_here
                  : DiagnosticCode.Class_constructor_may_not_be_a_accessor
              ],
              parser.curPos,
              parser.pos
            );
          }
          if ((context & Context.SuperCall) !== Context.SuperCall) {
            nodeFlags |= NodeFlags.Constructor;
          }
          nodeFlags |= NodeFlags.Constructor;
        } else if (staticKeyword && parser.tokenValue === 'prototype') {
          parser.onError(
            DiagnosticSource.Parser,
            DiagnosticKind.Error,
            diagnosticMap[DiagnosticCode.Classes_may_not_have_a_static_property_named_prototype],
            parser.curPos,
            parser.pos
          );
        }
      }

      if (declareKeyword) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.Class_methods_cannot_have_the_declare_modifier],
          parser.curPos,
          parser.pos
        );
      }

      const method = parseMethodDefinition(parser, context, key, nodeFlags);
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

    if (key.kind !== SyntaxKind.ComputedPropertyName) {
      if (parser.tokenValue === 'constructor') {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.A_class_field_cannot_have_a_field_named_constructor],
          parser.curPos,
          parser.pos
        );
      }
      if (staticKeyword && parser.tokenValue === 'prototype') {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.Class_fields_may_not_have_a_static_property_named_prototype],
          parser.curPos,
          parser.pos
        );
      }
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

  if (parser.token & SyntaxKind.IsLessThanOrLeftParen) {
    if (key.kind !== SyntaxKind.ComputedPropertyName) {
      if (parser.tokenValue === 'constructor') {
        if (
          parser.token & SyntaxKind.IsLessThanOrLeftParen &&
          !staticKeyword &&
          (context & Context.SuperCall) !== Context.SuperCall
        ) {
          nodeFlags |= NodeFlags.Constructor;
        }
      }

      if (staticKeyword && parser.tokenValue === 'prototype') {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.Classes_may_not_have_a_static_property_named_prototype],
          parser.curPos,
          parser.pos
        );
      }
    }

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
export function parseClassStaticBlockDeclaration(
  parser: ParserState,
  context: Context,
  decorators: DecoratorList | null,
  declareKeyword: SyntaxToken<TokenSyntaxKind> | null,
  staticKeyword: SyntaxToken<TokenSyntaxKind> | null,
  nodeFlags: NodeFlags,
  pos: number
): StaticBlock {
  // - `class q { static static {} }`
  if (staticKeyword) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error | DiagnosticKind.EarlyError,
      diagnosticMap[DiagnosticCode.A_static_initialization_block_cannot_have_the_static_modifier],
      parser.curPos,
      parser.pos
    );
  }

  // - `@foo class q { static {} }`
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
  // A 'static block' should be parsed outside of 'YieldContext', but inside
  // of 'AwaitContext'
  const block = parseBlock(
    parser,
    (context | 0b00000000000000000001111100100000) ^ 0b00000000000000000001101100000000,
    {
      kind: ScopeKind.Block,
      scope: {
        kind: ScopeKind.Block,
        scope: null,
        flags: ScopeFlags.None
      },
      flags: ScopeFlags.None
    },
    null,
    null
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
    createBlockStatement(block, pos, nodeFlags, parser.curPos),
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
  // - `class X { foo? }`
  // - `class X { foo?: number }`
  const optionalToken =
    context & Context.OptionsAllowTypes ? consumeOptToken(parser, context, SyntaxKind.QuestionMark) : null;

  // - `class X { foo: number }`
  const type = parseType(parser, context);

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
  const raw = parser.tokenRaw;
  if ((context & Context.InClassBody) < 1 && parser.previousErrorPos !== parser.pos) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Private_identifiers_are_not_allowed_outside_class_bodies],
      pos,
      parser.pos
    );
  }
  nextToken(parser, context);
  parser.assignable = true;
  return createPrivateIdentifier(name, raw, pos, parser.curPos);
}

export function parseImportMetaOrCall(
  parser: ParserState,
  context: Context,
  leftHandSideContext: LeftHandSide
): ExpressionNode {
  if (leftHandSideContext & LeftHandSide.NewExpression) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Cannot_use_new_with_import],
      parser.curPos,
      parser.pos
    );
  }
  const importToken = consumeToken(parser, context, SyntaxKind.ImportKeyword, DiagnosticCode.Expression_expected);
  return parser.token === SyntaxKind.Period
    ? parseImportMeta(parser, context, importToken)
    : parseImportCall(parser, context, importToken);
}

function parseSuperExpression(parser: ParserState, context: Context): Super | any {
  const pos = parser.curPos;
  const superKeyword = consumeKeywordAndCheckForEscapeSequence(
    parser,
    context,
    SyntaxKind.SuperKeyword,
    NodeFlags.ExpressionNode,
    pos
  );

  if (parser.token === SyntaxKind.LeftParen) {
    if ((context & Context.SuperCall) < 1) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[
          DiagnosticCode._super_can_only_be_referenced_in_members_of_derived_classes_or_object_literal_expressions
        ],
        pos,
        parser.pos
      );
    }
    parser.assignable = false;
    return createSuper(superKeyword, pos, parser.curPos);
  }
  if (parser.token === SyntaxKind.LeftBracket || parser.token === SyntaxKind.Period) {
    if ((context & Context.SuperProperty) < 1) {
      parser.onError(
        DiagnosticSource.Parser,
        DiagnosticKind.Error,
        diagnosticMap[
          DiagnosticCode._super_can_only_be_referenced_in_members_of_derived_classes_or_object_literal_expressions
        ],
        pos,
        parser.pos
      );
    }
    parser.assignable = true;
    return createSuper(superKeyword, pos, parser.curPos);
  }

  // If we have seen "super" it must be followed by '(' or '.'.
  // If it wasn't then just try to parse out a '.' and report an error.
  parser.onError(
    DiagnosticSource.Parser,
    DiagnosticKind.Error,
    diagnosticMap[DiagnosticCode._super_must_be_followed_by_an_argument_list_or_member_access],
    pos,
    parser.pos
  );
  parser.assignable = false;
  // If we have seen "super" it must be followed by '(' or '.'.
  // If it wasn't then just try to parse out a '.' and report an error.
  return createIndexExpression(
    createSuper(superKeyword, pos, parser.curPos),
    parsePropertyOrPrivatePropertyName(parser, context),
    pos,
    parser.curPos
  );
}

function parseDecorators(parser: ParserState, context: Context): DecoratorList | null {
  if (parser.token === SyntaxKind.Decorator) {
    const pos = parser.curPos;
    const decorators = [];
    do {
      decorators.push(parseDecoratorExpression(parser, context));
    } while (parser.token === SyntaxKind.Decorator);
    return createDecoratorList(decorators, pos, parser.curPos);
  }
  return null;
}

function parseDecoratorExpression(parser: ParserState, context: Context): Decorator {
  const decoratorToken = consumeOptToken(parser, context, SyntaxKind.Decorator);
  const pos = parser.curPos;
  const nodeFlags = parser.nodeFlags;
  return createDecorator(
    decoratorToken,
    parseMemberExpression(
      parser,
      context | Context.DecoratorContext,
      parseIdentifier(
        parser,
        context,
        Constants.Identifier,
        DiagnosticCode.Identifier_expected_A_decorator_name_can_only_be_an_identifier
      ),
      SyntaxKind.IsPropertyOrCall,
      pos
    ),
    nodeFlags,
    pos,
    parser.curPos
  );
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
  typeParameters: TypeParameterDeclaration | null,
  leftHandSideContext: LeftHandSide,
  flags: NodeFlags,
  start: number
): ArrowFunction | ExpressionNode {
  let state = Tristate.False;
  let trailingComma = false;

  const scope = {
    kind: ScopeKind.ArrowParams,
    scope: { kind: ScopeKind.Block, scope: null, flags: ScopeFlags.None },
    flags: ScopeFlags.None
  };

  consume(parser, context | Context.AllowRegExp, SyntaxKind.LeftParen);

  if (consumeOpt(parser, context, SyntaxKind.RightParen)) {
    let isType = false;
    if (context & Context.OptionsAllowTypes && parser.token === SyntaxKind.Colon) {
      isType = context & Context.InConditionalExpr ? isValidReturnType(parser, context, 1) : true;
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
        parseType(parser, context),
        [],
        createToken(SyntaxKind.AsyncKeyword, NodeFlags.ChildLess, start, expr.end),
        /* nodeFlags */ NodeFlags.Async,
        start
      );
    }
    return createCallExpression(
      expr,
      createArgumentList([], trailingComma, start, start),
      flags | NodeFlags.ExpressionNode | NodeFlags.IsCallExpression,
      start,
      parser.curPos
    );
  }

  let destructible = DestructibleKind.None;
  let expression!: ExpressionNode | any;

  const params: ExpressionNode[] = [];

  while (parser.token & Constants.DelimitedList) {
    const pos = parser.curPos;

    if (parser.token & Constants.Identifier) {
      addBlockName(parser, context, scope, parser.tokenValue, BindingType.ArgumentList);

      expression = parsePrimaryExpression(parser, context, LeftHandSide.None);

      if (context & Context.OptionsAllowTypes && parser.token === SyntaxKind.QuestionMark) {
        const questionMarkToken = consumeOptToken(parser, context, SyntaxKind.QuestionMark);
        if (
          (parser.token as SyntaxKind) === SyntaxKind.RightParen ||
          (parser.token as SyntaxKind) === SyntaxKind.Colon ||
          (parser.token as SyntaxKind) === SyntaxKind.Comma
        ) {
          state = Tristate.True;
          expression = createBindingElement(
            /* ellipsisToken */ null,
            /* left */ expression,
            /* optionalToken */ questionMarkToken,
            /* type */ parseType(parser, context),
            /* right */ parseInitializer(parser, context, false),
            NodeFlags.ExpressionNode,
            pos,
            parser.curPos
          );
        } else {
          expression = createConditionalExpression(
            expression,
            questionMarkToken,
            parseExpression(
              parser,
              (context | 0b00000000110000000000000010000000) ^ 0b00000000100000000000000010000000
            ),
            consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.Colon),
            parseExpression(parser, (context | Context.InConditionalExpr) ^ Context.InConditionalExpr),
            pos,
            parser.curPos
          );
          state = Tristate.False;
          parser.assignable = false;
        }
        // - `(a: string) => {}`
        // - `async <T>(fn: () => T);`
      } else if (context & Context.OptionsAllowTypes && parser.token === SyntaxKind.Colon) {
        state = Tristate.True;

        expression = createBindingElement(
          /* ellipsisToken */ null,
          /* left */ expression,
          /* optionalToken */ null,
          /* type */ parseType(parser, context),
          /* right */ parseInitializer(parser, context, false),
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
            expression = parseMemberExpression(parser, context, expression, SyntaxKind.IsPropertyOrCall, pos);
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
          ? parseArrayLiteralOrAssignmentExpression(
              parser,
              context,
              null,
              BindingType.ArgumentList | BindingType.InArrow
            )
          : parseObjectLiteralOrAssignmentExpression(
              parser,
              context,
              null,
              BindingType.ArgumentList | BindingType.InArrow
            );

      parser.diagnosticStartPos = pos;

      flags |= NodeFlags.NoneSimpleParamList;

      if (context & Context.OptionsAllowTypes && parser.token === SyntaxKind.QuestionMark) {
        const questionMarkToken = consumeOptToken(parser, context, SyntaxKind.QuestionMark);
        if (parser.token & Constants.Identifier) {
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

          expression = createBindingElement(
            /* ellipsisToken */ null,
            /* left */ expression,
            /* optionalToken */ questionMarkToken,
            /* type */ parseType(parser, context),
            /* right */ parseInitializer(parser, context, false),
            NodeFlags.ExpressionNode,
            pos,
            parser.curPos
          );
        }
      } else if (context & Context.OptionsAllowTypes && parser.token === SyntaxKind.Colon) {
        state = Tristate.True;
        expression = createBindingElement(
          /* ellipsisToken */ null,
          /* left */ expression as any,
          /* optionalToken */ null,
          /* type */ parseType(parser, context),
          /* right */ parseInitializer(parser, context, false),
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
            expression = parseMemberExpression(parser, context, expression, SyntaxKind.IsPropertyOrCall, pos);
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

      if (parser.token & Constants.Identifier) {
        let argument = parsePrimaryExpression(parser, context, LeftHandSide.None);

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

            expression = createBindingElement(
              /* ellipsisToken */ ellipsisToken,
              /* left */ expression,
              /* optionalToken */ questionMarkToken,
              /* type */ parseType(parser, context),
              /* right */ parseInitializer(parser, context, false),
              NodeFlags.ExpressionNode,
              pos,
              parser.curPos
            );
          }
          // If we have "(a:", then we must have a type-annotated parameter in an arrow function expression
        } else if (context & Context.OptionsAllowTypes && (parser.token as SyntaxKind) === SyntaxKind.Colon) {
          state = Tristate.True;

          expression = createBindingElement(
            /* ellipsisToken */ ellipsisToken,
            /* left */ expression,
            /* optionalToken */ null,
            /* type */ parseType(parser, context),
            /* right */ parseInitializer(parser, context, false),
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
            argument = parseMemberExpression(parser, context, argument, SyntaxKind.IsPropertyOrCall, pos);

            destructible = DestructibleKind.None;

            if (parser.token & (SyntaxKind.IsAssignOp | SyntaxKind.IsBinaryOp)) {
              destructible |= DestructibleKind.NotDestructible;
              argument = parseAssignmentExpression(parser, context, argument, pos);
            } else if ((parser.token as SyntaxKind) === SyntaxKind.QuestionMark) {
              argument = parseConditionalExpression(parser, context, argument, pos);
            }

            destructible = parser.assignable ? DestructibleKind.Assignable : DestructibleKind.NotDestructible;
          }
        }
      } else if (parser.token & SyntaxKind.IsPatternStart) {
        argument =
          (parser.token as SyntaxKind) === SyntaxKind.LeftBracket
            ? parseArrayLiteralOrAssignmentExpression(
                parser,
                context,
                null,
                BindingType.ArgumentList | BindingType.InArrow
              )
            : parseObjectLiteralOrAssignmentExpression(
                parser,
                context,
                null,
                BindingType.ArgumentList | BindingType.InArrow
              );

        parser.diagnosticStartPos = pos;

        flags |= NodeFlags.NoneSimpleParamList;

        if (context & Context.OptionsAllowTypes && (parser.token as SyntaxKind) === SyntaxKind.QuestionMark) {
          const questionMarkToken = consumeOptToken(parser, context, SyntaxKind.QuestionMark);
          if (
            (parser.token as SyntaxKind) === SyntaxKind.RightParen ||
            (parser.token as SyntaxKind) === SyntaxKind.Colon ||
            (parser.token as SyntaxKind) === SyntaxKind.Comma
          ) {
            state = Tristate.True;
            expression = createBindingElement(
              /* ellipsisToken */ null,
              /* left */ expression,
              /* optionalToken */ questionMarkToken,
              /* type */ parseType(parser, context),
              /* right */ parseInitializer(parser, context, false),
              NodeFlags.ExpressionNode,
              pos,
              parser.curPos
            );
          } else {
            expression = createConditionalExpression(
              expression,
              questionMarkToken,
              parseExpression(
                parser,
                (context | 0b00000000110000000000000010000000) ^ 0b00000000100000000000000010000000
              ),
              consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.Colon),
              parseExpression(parser, (context | Context.InConditionalExpr) ^ Context.InConditionalExpr),
              pos,
              parser.curPos
            );
            state = Tristate.False;
            parser.assignable = false;
          }
          // - `(a: string) => {}"
        } else if (context & Context.OptionsAllowTypes && (parser.token as SyntaxKind) === SyntaxKind.Colon) {
          state = Tristate.True;

          expression = createBindingElement(
            /* ellipsisToken */ ellipsisToken,
            /* left */ expression,
            /* optionalToken */ null,
            /* type */ parseType(parser, context),
            /* right */ parseInitializer(parser, context, false),
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

            argument = parseAssignmentExpression(
              parser,
              context,
              parseMemberExpression(parser, context, argument, SyntaxKind.IsPropertyOrCall, pos),
              pos
            );

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

      while (parser.token & Constants.ArgumentList) {
        params.push(parseArgumentOrArrayLiteralElement(parser, context));
        if ((parser.token as SyntaxKind) === SyntaxKind.RightParen) break;
        consume(parser, context | Context.AllowRegExp, SyntaxKind.Comma, DiagnosticCode._expected);
        if ((parser.token as SyntaxKind) === SyntaxKind.RightParen) {
          trailingComma = true;
          break;
        }
      }

      const argumentList = createArgumentList(params, trailingComma, start, parser.curPos);
      consume(parser, context, SyntaxKind.RightParen, DiagnosticCode.Expected_a_to_match_the_token_here);
      parser.assignable = false;
      return createCallExpression(
        expr,
        argumentList,
        flags | NodeFlags.ExpressionNode | NodeFlags.IsCallExpression,
        start,
        parser.curPos
      );
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
    return createCallExpression(
      expr,
      createArgumentList(params, trailingComma, start, start),
      flags | NodeFlags.ExpressionNode | NodeFlags.IsCallExpression,
      start,
      parser.curPos
    );
  }

  if (state) {
    let isType = false;
    if (context & Context.OptionsAllowTypes && parser.token === SyntaxKind.Colon) {
      isType = context & Context.InConditionalExpr ? isValidReturnType(parser, context, start) : true;
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
      if (leftHandSideContext & (LeftHandSide.NotAssignable | LeftHandSide.DisallowClassExtends)) {
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
      const arrowParams = [];
      for (let i = 0; i < params.length; ++i) {
        arrowParams.push(convertArrowParameter(parser, params[i]));
      }

      return parseArrowFunction(
        parser,
        context,
        scope,
        typeParameters,
        parseType(parser, context),
        arrowParams,
        createToken(SyntaxKind.AsyncKeyword, NodeFlags.ChildLess, start, expr.end),
        /* nodeFlags */ flags | NodeFlags.Async,
        start
      );
    }
  }

  if (destructible & DestructibleKind.MustDestruct || state === Tristate.True) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[
        state === Tristate.True
          ? DiagnosticCode.Expected
          : DiagnosticCode.The_left_hand_side_of_an_assignment_expression_must_be_a_variable_or_a_property_access
      ],
      parser.curPos,
      parser.pos
    );
  }

  parser.assignable = false;
  return createCallExpression(
    expr,
    createArgumentList(params, trailingComma, start, start),
    flags | NodeFlags.ExpressionNode | NodeFlags.IsCallExpression,
    start,
    parser.curPos
  );
}

function parseOpaqueType(
  parser: ParserState,
  context: Context,
  declareKeyword: SyntaxToken<TokenSyntaxKind> | null,
  scope: ScopeState,
  labels: any,
  ownLabels: any
) {
  const pos = parser.curPos;
  let expr = parseIdentifier(parser, context, Constants.Identifier, DiagnosticCode.Identifier_expected);
  if (parser.token === SyntaxKind.TypeKeyword) {
    return createOpaqueType(
      declareKeyword,
      createToken(SyntaxKind.OpaqueKeyword, NodeFlags.ChildLess, pos, parser.curPos),
      consumeOptToken(parser, context, SyntaxKind.TypeKeyword),
      parseIdentifier(parser, context, Constants.Identifier, DiagnosticCode.Identifier_expected),
      parseTypeParameterDeclaration(parser, context),
      consumeOpt(parser, context, SyntaxKind.Colon) ? parseTypeAnnotation(parser, context) : null,
      !declareKeyword && consume(parser, context, SyntaxKind.Assign) ? parseTypeAnnotation(parser, context) : null,
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
      labels,
      ownLabels,
      pos
    );
  }
  if (parser.token === SyntaxKind.Arrow) {
    expr = parseArrowFunction(
      parser,
      context,
      scope,
      /* typeParameters */ null,
      /* returnType */ null,
      /* params */ expr,
      /* asyncToken */ null,
      /* nodeFlags */ NodeFlags.ExpressionNode,
      pos
    ) as any;
  }
  return parseExpressionStatement(parser, context, parseExpressionRest(parser, context, expr, pos), pos);
}
