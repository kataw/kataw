import { SyntaxKind, NodeFlags } from '../ast/syntax-node';
import { TokenSyntaxKind, createToken, SyntaxToken } from '../ast/token';
import { nextToken } from './scanner/scanner';
import { scanTemplateTail } from './scanner/template';
import { createBlockStatement, BlockStatement } from '../ast/stmt/block-stmt';
import { createBlock, Block } from '../ast/stmt/block';
import { createLabelledStatement, LabelledStatement } from '../ast/stmt/labelled-stmt';
import { createBreakStatement, BreakStatement } from '../ast/stmt/break-stmt';
import { createContinueStatement, ContinueStatement } from '../ast/stmt/continue-stmt';
import { createCaseBlock, CaseBlock } from '../ast/stmt/case-block';
import { createCaseClause, CaseClause } from '../ast/stmt/case-clause';
import { createCatch, CatchClause } from '../ast/stmt/catch-stmt';
import { createDebuggerStatement, DebuggerStatement } from '../ast/stmt/debugger-stmt';
import { createTryStatement, TryStatement } from '../ast/stmt/try-stmt';
import { createDefaultClause, DefaultClause } from '../ast/stmt/default-clause';
import { createDoWhileStatement, DoWhileStatement } from '../ast/stmt/do-stmt';
import { createEmptyStatement, EmptyStatement } from '../ast/stmt/empty-stmt';
import { createForInStatement, ForInStatement } from '../ast/stmt/for-in-stmt';
import { createForOfStatement, ForOfStatement } from '../ast/stmt/for-of-stmt';
import { createForStatement, ForStatement } from '../ast/stmt/for-stmt';
import { createIfStatement, IfStatement } from '../ast/stmt/if-stmt';
import { createReturnStatement, ReturnStatement } from '../ast/stmt/return-stmt';
import { createSwitchStatement, SwitchStatement } from '../ast/stmt/switch-stmt';
import { createThrowStatement, ThrowStatement } from '../ast/stmt/throw-stmt';
import { createWhileStatement, WhileStatement } from '../ast/stmt/while-stmt';
import { createWithStatement, WithStatement } from '../ast/stmt/with-stmt';
import { StatementNode } from '../ast/stmt';
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
import { createClassElementList, ClassElementList } from '../ast/expressions/class-element-list';
import { createClassExpression, ClassExpression } from '../ast/expressions/class-expr';
import { createFieldDefinition, FieldDefinition } from '../ast/expressions/field-definition';
import { createClassHeritage, ClassHeritage } from '../ast/expressions/class-heritage';
import { createTemplateSpan, TemplateSpan } from '../ast/expressions/template-span';
import { createTemplateTail, TemplateTail } from '../ast/expressions/template-tail';
import { createTaggedTemplate } from '../ast/expressions/tagged-template';
import { createAwaitExpression, AwaitExpression } from '../ast/expressions/await-expr';
import { createObjectLiteral, ObjectLiteral } from '../ast/expressions/object-literal';
import { createPropertyDefinition, PropertyDefinition } from '../ast/expressions/property-definition';
import { createSpreadProperty, SpreadProperty } from '../ast/expressions/spread-property';
import { createCoverInitializedName, CoverInitializedName } from '../ast/expressions/cover-initialized-name';
import { createMethodDefinition, MethodDefinition } from '../ast/expressions/method-definition';
import { createArrowFunction, ArrowFunction } from '../ast/expressions/arrow-function';
import { createSemicolonClassElement, SemicolonClassElement } from '../ast/expressions/semicolon-class-element';
import { createRegularExpressionLiteral, RegularExpressionLiteral } from '../ast/expressions/regular-expr';
import { ExpressionStatement, createExpressionStatement } from '../ast/stmt/expression-stmt';
import { createExportDeclaration, ExportDeclaration } from '../ast/module/export-declaration';
import { createExportDefault, ExportDefault } from '../ast/module/export-default';
import { createExportFromClause, ExportFromClause } from '../ast/module/export-from-clause';
import { createExportSpecifier, ExportSpecifier } from '../ast/module/export-specifier';
import { createExportsList, ExportsList } from '../ast/module/exports-list';
import { createImportClause, ImportClause } from '../ast/module/import-clause';
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
import { createOmittedExpression, OmittedExpression } from '../ast/expressions/omitted-expr';
import { createBindingElement, BindingElement } from '../ast/expressions/binding-element';
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
import { createBooleanType, BooleanType } from '../ast/types/boolean-type';
import { createObjectTypeSpreadProperty, ObjectTypeSpreadProperty } from '../ast/types/object-type-spread-property';
import { createObjectTypeInternalSlot, ObjectTypeInternalSlot } from '../ast/types/object-type-internal-slot';
import { createArrayType, ArrayType } from '../ast/types/array-type';
import { createTypeofType, TypeofType } from '../ast/types/typeof-type';
import { createNullableType, NullableType } from '../ast/types/nullable-type';
import { createObjectType, ObjectType } from '../ast/types/object-type';
import { createStringType, StringType } from '../ast/types/string-type';
import { createNumberType, NumberType } from '../ast/types/number-type';
import { createObjectTypeCallProperty, ObjectTypeCallProperty } from '../ast/types/object-type-call-property';
import { createObjectTypeIndexer, ObjectTypeIndexer } from '../ast/types/object-type-indexer';
import { createIntersectionType, IntersectionType } from '../ast/types/intersection-type';
import { createUnionType, UnionType } from '../ast/types/union-type';
import { createTypeAnnotation, TypeAnnotation } from '../ast/types/type-annotation';
import { createQualifiedType, QualifiedType } from '../ast/types/qualified-type';
import { createGenericType, GenericType } from '../ast/types/generic-type';
import { createTypeParameter, TypeParameter } from '../ast/types/type-parameter';
import { createTupleType, TupleType } from '../ast/types/tuple-type';
import { createFunctionType, FunctionType } from '../ast/types/function-type';
import { createFunctionTypeParameterList, FunctionTypeParameterList } from '../ast/types/function-type-parameter-list';
import { createFunctionTypeParameters, FunctionTypeParameter } from '../ast/types/function-type-parameter';
import { createBindingList, BindingList } from '../ast/stmt/binding-list';
import { createVariableDeclarationList, VariableDeclarationList } from '../ast/stmt/variable-declarationList';
import { createVariableStatement, VariableStatement } from '../ast/stmt/variable-stmt';
import { createVariableDeclaration, VariableDeclaration } from '../ast/stmt/variable-declaration';
import { createClassDeclaration, ClassDeclaration } from '../ast/stmt/class-declaration';
import { createLexicalBinding, LexicalBinding } from '../ast/stmt/lexical-binding';
import { createLexicalDeclaration, LexicalDeclaration } from '../ast/stmt/lexical-declaration';
import { createTypeAlias, TypeAlias } from '../ast/types/type-alias-declaration';
import { createObjectTypeProperty, ObjectTypeProperty } from '../ast/types/object-type-property';
import { createFunctionDeclaration, FunctionDeclaration } from '../ast/stmt/function-declaration';
import { createDummyIdentifier, DummyIdentifier } from '../ast/internal/dummy-identifier';
import { DiagnosticCode, diagnosticMap } from '../diagnostic/diagnostic-code';
import { DiagnosticSource } from '../diagnostic/diagnostic';
import { TypeNode } from '../ast/types';
import {
  createNamespaceExportDeclaration,
  NamespaceExportDeclaration
} from '../ast/module/namespace-export-declaration';
import {
  createPropertyDefinitionList,
  PropertyDefinitionList,
  Properties
} from '../ast/expressions/property-definition-list';
import {
  ParserState,
  Context,
  OnError,
  consumeOpt,
  consume,
  consumeOptToken,
  consumeToken,
  parseSemicolon,
  DestructibleKind,
  BindingType,
  speculate
} from './common';

// prettier-ignore
const enum Tristate {
  False,  // There *cannot* be a parenthesized arrow function here.
  True,   // We definitely expect a parenthesized arrow function here.
  Unknown // There *might* be a parenthesized arrow function here.
}

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
export function create(source: string, onError: OnError): ParserState {
  return {
    source,
    nodeFlags: NodeFlags.None,
    curPos: 0,
    pos: 0,
    end: source.length,
    token: SyntaxKind.EndOfFileToken,
    tokenPos: 0,
    destructible: DestructibleKind.None,
    assignable: true,
    onError,
    tokenValue: undefined,
    tokenRaw: ''
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

  const parser = create(source, onError ? onError : function () {});

  nextToken(parser, context | Context.AllowRegExp);

  const moduleOrScript = isModule ? parseModuleItem : parseStatementListItem;

  const statements = [];
  const directives = [];

  while (parser.token === SyntaxKind.StringLiteral) {
    const start = parser.curPos;
    const expr = parseStringLiteral(parser, context);

    if (isValidDirective(parser) && expr.text === expr.rawText && expr.text === 'use strict') {
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
    if (
      parser.token &
      (SyntaxKind.IsStatementStart |
        SyntaxKind.IsExpressionStart |
        SyntaxKind.IsIdentifier |
        SyntaxKind.IsFutureReserved |
        SyntaxKind.IsPatternStart |
        SyntaxKind.IsBinaryOp)
    ) {
      statements.push(moduleOrScript(parser, context));
      continue;
    }

    parser.onError(
      DiagnosticSource.Parser,
      diagnosticMap[
        parser.token === SyntaxKind.PrivateIdentifier
          ? DiagnosticCode.Private_identifiers_are_not_allowed_outside_class_bodies
          : DiagnosticCode.Statement_expected
      ],
      parser.curPos,
      parser.pos
    );

    nextToken(parser, context | Context.AllowRegExp);
  }
  return createRootNode(directives, statements, isModule, source, filename);
}

function parseModuleItem(parser: ParserState, context: Context): StatementNode {
  switch (parser.token) {
    case SyntaxKind.ImportKeyword:
      return parseImportDeclaration(parser, context, /* isScript*/ false);
    case SyntaxKind.ExportKeyword:
      return parseExportDeclaration(parser, context);
    default:
      return parseStatementListItem(parser, context);
  }
}

function parseStatementListItem(parser: ParserState, context: Context): StatementNode {
  switch (parser.token) {
    case SyntaxKind.FunctionKeyword:
    case SyntaxKind.AsyncKeyword:
      return parseFunctionDeclaration(parser, context, /* disallowGen*/ false, /* declareKeyword */ null);
    case SyntaxKind.Decorator:
    case SyntaxKind.ClassKeyword:
      return parseClassDeclaration(parser, context, /* declareKeyword */ null);
    case SyntaxKind.ConstKeyword:
      return parseLexicalDeclaration(parser, context, /* isConst */ true);
    case SyntaxKind.LetKeyword:
      return parseLetAsIdentifierOrLexicalDeclaration(parser, context);
    case SyntaxKind.TypeKeyword:
      return parseTypeAsIdentifierOrTypeAlias(parser, context, /* opaqueToken */ null, /* declareKeyword */ null);
    case SyntaxKind.OpaqueKeyword:
      return parseOpaqueType(parser, context, /* declareKeyword */ null);
    case SyntaxKind.DeclareKeyword:
      return parseDeclareAsIdentifierOrDeclareStatement(parser, context);
    case SyntaxKind.ImportKeyword:
      return parseImportDeclaration(parser, context, /* isScript */ true);
    case SyntaxKind.ExportKeyword:
      parser.onError(
        DiagnosticSource.Parser,
        diagnosticMap[DiagnosticCode.The_export_keyword_can_only_be_used_with_the_module_goal],
        parser.curPos,
        parser.pos
      );
      return parseExportDeclaration(parser, context);
    default:
      return parseStatement(parser, context, /* allowFunction */ true);
  }
}

function parseStatement(parser: ParserState, context: Context, allowFunction: boolean): StatementNode {
  switch (parser.token) {
    case SyntaxKind.VarKeyword:
      return parseVariableStatement(parser, context, /* declareKeyword */ null);
    case SyntaxKind.LeftBrace:
      return parseBlock(parser, context);
    case SyntaxKind.Semicolon:
      return parseEmptyStatement(parser, context);
    case SyntaxKind.IfKeyword:
      return parseIfStatement(parser, context);
    case SyntaxKind.DoKeyword:
      return parseDoWhileStatement(parser, context);
    case SyntaxKind.WhileKeyword:
      return parseWhileStatement(parser, context);
    case SyntaxKind.ForKeyword:
      return parseForStatement(parser, context);
    case SyntaxKind.ContinueKeyword:
      return parseContinueStatement(parser, context);
    case SyntaxKind.BreakKeyword:
      return parseBreakStatement(parser, context);
    case SyntaxKind.ReturnKeyword:
      return parseReturnStatement(parser, context);
    case SyntaxKind.ThrowKeyword:
      return parseThrowStatement(parser, context);
    case SyntaxKind.TryKeyword:
    // Miscellaneous error cases arguably better caught here than elsewhere.
    case SyntaxKind.CatchKeyword:
    case SyntaxKind.FinallyKeyword:
      return parseTryStatement(parser, context);
    case SyntaxKind.DebuggerKeyword:
      return parseDebuggerStatement(parser, context);
    case SyntaxKind.SwitchKeyword:
      return parseSwitchStatement(parser, context);
    case SyntaxKind.WithKeyword:
      return parseWithStatement(parser, context);
    case SyntaxKind.FunctionKeyword:
      // FunctionDeclaration are only allowed as a StatementListItem, not in
      // an arbitrary Statement position.

      parser.onError(
        DiagnosticSource.Parser,
        diagnosticMap[DiagnosticCode.Function_declarations_are_not_allowed_in_an_arbitrary_statement_position],
        parser.curPos,
        parser.pos
      );
      return parseFunctionDeclaration(parser, context, /* disallowGen*/ false, /* declareKeyword */ null);
    case SyntaxKind.ClassKeyword:
      parser.onError(
        DiagnosticSource.Parser,
        diagnosticMap[DiagnosticCode.Class_declarations_are_not_allowed_in_an_arbitrary_statement_position],
        parser.curPos,
        parser.pos
      );
      return parseClassDeclaration(parser, context, /* declareKeyword */ null);
    default:
      return parseExpressionOrLabelledStatement(parser, context, allowFunction);
  }
}

// SwitchStatement :
//   `switch` `(` Expression `)` CaseBlock
function parseSwitchStatement(parser: ParserState, context: Context): SwitchStatement {
  const pos = parser.curPos;
  const switchToken = consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.SwitchKeyword);
  consume(parser, context | Context.AllowRegExp, SyntaxKind.LeftParen);
  const expression = parseExpression(parser, context);
  consume(parser, context | Context.AllowRegExp, SyntaxKind.RightParen);
  const caseBlock = parseCaseBlock(parser, context | Context.InSwitch);
  return createSwitchStatement(switchToken, expression, caseBlock, pos, parser.curPos);
}

// CaseBlock :
//   `{` CaseClauses? `}`
//   `{` CaseClauses? DefaultClause CaseClauses? `}`
function parseCaseBlock(parser: ParserState, context: Context): CaseBlock {
  const pos = parser.curPos;
  consume(parser, context | Context.AllowRegExp, SyntaxKind.LeftBrace);
  const clauses = [];
  while (isCaseOrDefaultClause(parser.token)) {
    clauses.push(parseCaseOrDefaultClause(parser, context));
  }
  consume(parser, context | Context.AllowRegExp, SyntaxKind.RightBrace);
  return createCaseBlock(clauses, pos, parser.curPos);
}

function isCaseOrDefaultClause(t: SyntaxKind): boolean {
  return t === SyntaxKind.DefaultKeyword || t === SyntaxKind.CaseKeyword;
}

function parseCaseClause(parser: ParserState, context: Context): CaseClause {
  const pos = parser.curPos;
  const caseToken = consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.CaseKeyword);
  const expression = parseExpression(parser, context);
  consume(parser, context | Context.AllowRegExp, SyntaxKind.Colon);
  const statements = [];
  while (parser.token & 0b00010010100000011100000000000000) {
    statements.push(parseStatementListItem(parser, context));
  }
  return createCaseClause(caseToken, expression, statements, pos, parser.curPos);
}

function parseDefaultClause(parser: ParserState, context: Context): DefaultClause {
  const pos = parser.curPos;
  consume(parser, context, SyntaxKind.DefaultKeyword);
  const defaultToken = consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.DefaultKeyword);
  consume(parser, context | Context.AllowRegExp, SyntaxKind.Colon);
  const statements = [];
  while (parser.token & 0b00010010100000011100000000000000) {
    statements.push(parseStatementListItem(parser, context));
  }
  return createDefaultClause(defaultToken, statements, pos, parser.curPos);
}

function parseCaseOrDefaultClause(parser: ParserState, context: Context): CaseClause | DefaultClause {
  return parser.token === SyntaxKind.CaseKeyword
    ? parseCaseClause(parser, context)
    : parseDefaultClause(parser, context);
}

function parseTryStatement(parser: ParserState, context: Context): TryStatement {
  const pos = parser.curPos;
  const tryToken = consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.TryKeyword);
  const block = parseBlock(parser, context);
  const catchClause = parser.token === SyntaxKind.CatchKeyword ? parseCatchClause(parser, context) : null;

  // If we don't have a catch clause, then we must have a finally clause. Try to parse
  // one out no matter what.
  let finallyBlock: Block | null = null;
  let finallyKeyword: SyntaxToken<TokenSyntaxKind> | null = null;
  if (!catchClause || parser.token === SyntaxKind.FinallyKeyword) {
    finallyKeyword = consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.FinallyKeyword);
    finallyBlock = parseBlock(parser, context);
  }
  return createTryStatement(tryToken, block, catchClause, finallyKeyword, finallyBlock, pos, parser.curPos);
}

function parseCatchClause(parser: ParserState, context: Context): CatchClause {
  const pos = parser.curPos;
  const catchToken = consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.CatchKeyword);
  // Keep shape of node to avoid degrading performance.
  let catchParameter = null;
  if (consumeOpt(parser, context, SyntaxKind.LeftParen)) {
    catchParameter = parseIdentifierOrPattern(
      parser,
      context,
      DiagnosticCode.Private_identifiers_cannot_be_used_as_parameters
    );
    if (parser.token === SyntaxKind.Assign) {
      parser.onError(
        DiagnosticSource.Parser,
        diagnosticMap[DiagnosticCode.Catch_clause_variable_cannot_have_an_initializer],
        parser.curPos,
        parser.pos
      );
    }
    consume(parser, context | Context.AllowRegExp, SyntaxKind.RightParen);
  }
  return createCatch(catchToken, catchParameter, parseBlock(parser, context), pos, parser.curPos);
}

function parseDebuggerStatement(parser: ParserState, context: Context): DebuggerStatement {
  const pos = parser.curPos;
  const debuggerToken = consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.DebuggerKeyword);
  parseSemicolon(parser, context);
  return createDebuggerStatement(debuggerToken, pos, parser.curPos);
}

function parseEmptyStatement(parser: ParserState, context: Context): EmptyStatement {
  const pos = parser.curPos;
  nextToken(parser, context | Context.AllowRegExp);
  return createEmptyStatement(pos, parser.curPos);
}

function canParseSemicolon(parser: ParserState): number {
  // We can parse out an optional semicolon in ASI cases in the following cases.
  return parser.token & SyntaxKind.Smi || parser.nodeFlags & NodeFlags.NewLine;
}

function parseBreakStatement(parser: ParserState, context: Context): BreakStatement {
  const pos = parser.curPos;
  let label = null;
  const breakToken = consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.BreakKeyword);
  if (canParseSemicolon(parser)) {
    if ((context & (Context.InSwitch | Context.InIteration)) < 1) {
      parser.onError(
        DiagnosticSource.Parser,
        diagnosticMap[
          DiagnosticCode.A_break_statement_can_only_be_used_within_an_enclosing_iteration_or_switch_statement
        ],
        parser.curPos,
        parser.pos
      );
    }
  } else {
    label = parseIdentifier(parser, context);
  }
  parseSemicolon(parser, context | Context.AllowRegExp);
  return createBreakStatement(breakToken, label as Identifier, pos, parser.curPos);
}

function parseContinueStatement(parser: ParserState, context: Context): ContinueStatement {
  const pos = parser.curPos;
  if ((context & Context.InIteration) < 1) {
    parser.onError(
      DiagnosticSource.Parser,
      diagnosticMap[DiagnosticCode.A_continue_statement_can_only_be_used_within_an_enclosing_iteration_statement],
      parser.curPos,
      parser.pos
    );
  }
  let label = null;
  const continueToken = consumeToken(parser, context, SyntaxKind.ContinueKeyword);
  if (!canParseSemicolon(parser)) {
    label = parseIdentifier(parser, context);
  }
  parseSemicolon(parser, context);
  return createContinueStatement(continueToken, label as Identifier, pos, parser.curPos);
}

function parseIfStatement(parser: ParserState, context: Context): IfStatement {
  const pos = parser.curPos;
  const ifKeyword = consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.IfKeyword);
  consume(parser, context | Context.AllowRegExp, SyntaxKind.LeftParen);
  const expression = parseExpression(parser, context);
  consume(parser, context | Context.AllowRegExp, SyntaxKind.RightParen);
  const consequent = parseConsequentOrAlternative(parser, context);
  const elseKeyword = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.ElseKeyword);
  const alternate = elseKeyword ? parseConsequentOrAlternative(parser, context) : null;
  return createIfStatement(ifKeyword, expression, consequent, elseKeyword, alternate, pos, parser.curPos);
}

function parseConsequentOrAlternative(parser: ParserState, context: Context): StatementNode {
  // Annex B.3.4 says that unbraced FunctionDeclarations under if/else in
  // non-strict code act as if they were braced: 'if (x) function f() {}'
  // parses as 'if (x) { function f() {} }'.
  return context & (Context.OptionsDisableWebCompat | Context.Strict) || parser.token !== SyntaxKind.FunctionKeyword
    ? parseStatement(parser, context, /* allowFunction */ false)
    : parseFunctionDeclaration(parser, context, /* disallowGen */ true, /* declareKeyword */ null);
}

function parseWhileStatement(parser: ParserState, context: Context): WhileStatement {
  const pos = parser.curPos;
  const whileToken = consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.WhileKeyword);
  consume(parser, context | Context.AllowRegExp, SyntaxKind.LeftParen);
  const expression = parseExpression(parser, context);
  consume(parser, context | Context.AllowRegExp, SyntaxKind.RightParen);
  const statement = parseStatement(
    parser,
    (context | 0b00000000100000000001000010000000) ^ 0b00000000100000000000000010000000,
    /* allowFunction */ false
  );
  return createWhileStatement(whileToken, expression, statement, pos, parser.curPos);
}

// `do` Statement `while` `(` Expression `)` `;`
function parseDoWhileStatement(parser: ParserState, context: Context): DoWhileStatement {
  const pos = parser.curPos;
  const doKeyword = consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.DoKeyword);
  const statement = parseStatement(
    parser,
    (context | 0b00000000100000000001000010000000) ^ 0b00000000100000000000000010000000,
    /* allowFunction */ false
  );
  const whileKeyword = consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.WhileKeyword);
  consume(parser, context | Context.AllowRegExp, SyntaxKind.LeftParen);
  const expression = parseExpression(parser, context);
  consume(parser, context | Context.AllowRegExp, SyntaxKind.RightParen);
  consumeOpt(parser, context | Context.AllowRegExp, SyntaxKind.Semicolon);
  return createDoWhileStatement(doKeyword, expression, whileKeyword, statement, pos, parser.curPos);
}

function parseWithStatement(parser: ParserState, context: Context): WithStatement {
  const pos = parser.curPos;
  if (context & Context.Strict) {
    parser.onError(
      DiagnosticSource.Parser,
      diagnosticMap[DiagnosticCode._with_statements_are_not_allowed_in_strict_mode],
      pos,
      parser.pos
    );
  }
  const withKeyword = consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.WithKeyword);
  consume(parser, context | Context.AllowRegExp, SyntaxKind.LeftParen);
  const expression = parseExpression(parser, context);
  consume(parser, context | Context.AllowRegExp, SyntaxKind.RightParen);
  const statement = parseStatement(
    parser,
    (context | 0b00000000100000000001000010000000) ^ 0b00000000100000000000000010000000,
    /* allowFunction */ false
  );
  return createWithStatement(withKeyword, expression, statement, pos, parser.curPos);
}

// ThrowStatement :
//   `throw` [no LineTerminator here] Expression `;`
function parseThrowStatement(parser: ParserState, context: Context): ThrowStatement {
  const pos = parser.curPos;
  const throwKeyword = consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.ThrowKeyword);
  if (parser.nodeFlags & NodeFlags.NewLine) {
    parser.onError(
      DiagnosticSource.Parser,
      diagnosticMap[DiagnosticCode.Linebreak_ermitted_after_throw],
      parser.curPos,
      parser.pos
    );
  }
  const expression = parseExpression(parser, context);
  parseSemicolon(parser, context);
  return createThrowStatement(throwKeyword, expression, pos, parser.curPos);
}

function parseReturnStatement(parser: ParserState, context: Context): ReturnStatement {
  if ((context & Context.AllowReturn) === 0) {
    parser.onError(
      DiagnosticSource.Parser,
      diagnosticMap[DiagnosticCode.A_return_statement_can_only_be_used_within_a_function_body],
      parser.curPos,
      parser.pos
    );
  }
  const pos = parser.curPos;
  const returnToken = consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.ReturnKeyword);
  const expression = canParseSemicolon(parser) ? null : parseExpression(parser, context);
  parseSemicolon(parser, context);
  return createReturnStatement(returnToken, expression, parser.nodeFlags, pos);
}

export function parseLabelledStatement(
  parser: ParserState,
  context: Context,
  expr: Identifier,
  allowFunction: boolean,
  pos: number
): LabelledStatement {
  consume(parser, context | Context.AllowRegExp, SyntaxKind.Colon);
  return createLabelledStatement(
    expr,
    !allowFunction ||
      // Per 13.13.1 it's a syntax error if LabelledItem: FunctionDeclaration
      // is ever matched. Per Annex B.3.2 that modifies this text, this
      // applies only to strict mode code.
      context & (Context.OptionsDisableWebCompat | Context.Strict) ||
      parser.token !== SyntaxKind.FunctionKeyword
      ? parseStatement(parser, context, allowFunction)
      : parseFunctionDeclaration(parser, context, /* disallowGen */ true, /* declareKeyword */ null),
    pos,
    parser.curPos
  );
}

function parseForStatement(parser: ParserState, context: Context): ForStatement | ForInStatement | ForOfStatement {
  const pos = parser.curPos;
  const forKeyword = consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.ForKeyword);
  let destructible!: DestructibleKind;
  const awaitKeyword = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.AwaitKeyword);

  if (awaitKeyword && (context & Context.InAwaitContext) === 0) {
    parser.onError(
      DiagnosticSource.Parser,
      diagnosticMap[
        DiagnosticCode.A_for_await_of_statement_is_only_allowed_within_an_async_function_or_async_generator
      ],
      parser.curPos,
      parser.pos
    );
  }

  consume(parser, context | Context.AllowRegExp, SyntaxKind.LeftParen);

  let initializer = null;
  if (parser.token !== SyntaxKind.Semicolon) {
    if (parser.token === SyntaxKind.LetKeyword) {
      const { curPos } = parser;
      initializer = parseIdentifier(parser, context);
      if (parser.token & (SyntaxKind.IsIdentifier | SyntaxKind.IsFutureReserved | SyntaxKind.IsPatternStart)) {
        if ((parser.token as SyntaxKind) === SyntaxKind.InKeyword) {
          if (context & Context.Strict) {
            parser.onError(
              DiagnosticSource.Parser,
              diagnosticMap[DiagnosticCode.Identifier_expected_let_is_a_reserved_word_in_strict_mode],
              parser.curPos,
              parser.pos
            );
          }
        } else {
          initializer = parseBindingList(
            parser,
            context | Context.DisallowIn,
            /* isConst */ false,
            /* inForStatement */ true
          );
        }
      } else {
        initializer = parseMemberExpression(parser, context, initializer, /* allowCalls */ true, curPos);

        // In a for-of loop, 'let' that starts the loop head is a 'let' keyword,
        // per the [lookahead ≠ let] restriction on the LeftHandSideExpression
        // variant of such loops, so 'let' are disallowed here.
        if ((parser.token as SyntaxKind) === SyntaxKind.OfKeyword) {
          parser.onError(
            DiagnosticSource.Parser,
            diagnosticMap[DiagnosticCode.Identifier_expected_let_is_a_reserved_word_in_strict_mode],
            parser.curPos,
            parser.pos
          );
        }
      }
    } else if (consumeOpt(parser, context, SyntaxKind.ConstKeyword)) {
      initializer = parseBindingList(
        parser,
        context | Context.DisallowIn,
        /* isConst */ true,
        /* inForStatement */ true
      );
    } else if (consumeOpt(parser, context, SyntaxKind.VarKeyword)) {
      initializer = parseVariableDeclarationList(parser, context | Context.DisallowIn, /* inForStatement */ true);
    } else if (parser.token & SyntaxKind.IsPatternStart) {
      initializer =
        parser.token === SyntaxKind.LeftBrace
          ? parseObjectLiteralOrAssignmentExpression(parser, context, BindingType.Literal)
          : parseArrayLiteralOrAssignmentExpression(parser, context, BindingType.Literal);
      destructible = parser.destructible;

      parser.assignable = (destructible & DestructibleKind.NotDestructible) !== DestructibleKind.NotDestructible;

      initializer = parseMemberExpression(parser, context, initializer, true, pos);
    } else {
      initializer = parseLeftHandSideExpression(parser, context | Context.DisallowIn);
    }
  }

  if (
    awaitKeyword
      ? consume(parser, context | Context.AllowRegExp, SyntaxKind.OfKeyword)
      : consumeOpt(parser, context | Context.AllowRegExp, SyntaxKind.OfKeyword)
  ) {
    if (!parser.assignable) {
      parser.onError(
        DiagnosticSource.Parser,
        diagnosticMap[DiagnosticCode.Invalid_left_hand_side_in_for_of_loop],
        parser.curPos,
        parser.pos
      );
    }
    const expression = parseExpression(parser, context);
    consume(parser, context | Context.AllowRegExp, SyntaxKind.RightParen);

    return createForOfStatement(
      forKeyword,
      initializer,
      expression,
      parseStatement(
        parser,
        ((context | 0b00000000100000000000000010000000) ^ 0b00000000100000000000000010000000) | Context.InIteration,
        /* allowFunction */ false
      ),
      awaitKeyword,
      pos,
      parser.curPos
    );
  }

  if (consumeOpt(parser, context | Context.AllowRegExp, SyntaxKind.InKeyword)) {
    if (!parser.assignable) {
      parser.onError(
        DiagnosticSource.Parser,
        diagnosticMap[DiagnosticCode.Invalid_left_hand_side_in_for_in_loop],
        parser.curPos,
        parser.pos
      );
    }

    const expression = parseExpressions(parser, context);

    consume(parser, context | Context.AllowRegExp, SyntaxKind.RightParen);

    return createForInStatement(
      forKeyword,
      initializer,
      expression,
      parseStatement(parser, context, /* allowFunction */ false),
      pos,
      parser.curPos
    );
  }

  let condition: ExpressionNode | null = null;
  let incrementor: ExpressionNode | null = null;

  if (parser.destructible & DestructibleKind.MustDestruct) {
    parser.onError(
      DiagnosticSource.Parser,
      diagnosticMap[DiagnosticCode._can_only_be_used_in_an_object_literal_property_inside_a_destructuring],
      parser.curPos,
      parser.pos
    );
  }

  initializer = parseExpressionRest(parser, context, initializer as ExpressionNode, pos);

  consume(parser, context | Context.AllowRegExp, SyntaxKind.Semicolon);

  if (parser.token !== SyntaxKind.Semicolon) condition = parseExpressions(parser, context);

  consume(parser, context | Context.AllowRegExp, SyntaxKind.Semicolon);

  if (parser.token !== SyntaxKind.RightParen) incrementor = parseExpressions(parser, context);

  consume(parser, context | Context.AllowRegExp, SyntaxKind.RightParen);

  return createForStatement(
    forKeyword,
    initializer,
    incrementor,
    condition,
    parseStatement(
      parser,
      ((context | 0b00000000100000000000000010000000) ^ 0b00000000100000000000000010000000) | Context.InIteration,
      /* allowFunction */ false
    ),
    pos,
    parser.curPos
  );
}

export function parseExpressionOrLabelledStatement(
  parser: ParserState,
  context: Context,
  allowFunction: boolean
): LabelledStatement | ExpressionStatement {
  const { token, curPos } = parser;
  const expr = parsePrimaryExpression(parser, context, /* inNewExpression */ false);
  return token & SyntaxKind.IsIdentifier && parser.token === SyntaxKind.Colon
    ? parseLabelledStatement(parser, context, expr as Identifier, allowFunction, curPos)
    : parseExpressionStatement(parser, context, parseExpressionRest(parser, context, expr, curPos), curPos);
}

function parseExpressionStatement(
  parser: ParserState,
  context: Context,
  expr: ExpressionNode,
  pos: number
): ExpressionStatement {
  parseSemicolon(parser, context);
  return createExpressionStatement(expr, pos, parser.curPos);
}

function parseIdentifier(
  parser: ParserState,
  context: Context,
  diagnosticMessage?: DiagnosticCode,
  allowKeywords?: boolean
): Identifier | DummyIdentifier {
  const { token, curPos, tokenValue, tokenRaw } = parser;
  parser.assignable = true;
  if (
    allowKeywords
      ? token & (SyntaxKind.IsKeyword | SyntaxKind.IsFutureReserved | SyntaxKind.IsIdentifier)
      : token & (SyntaxKind.IsFutureReserved | SyntaxKind.IsIdentifier)
  ) {
    nextToken(parser, context);
    return createIdentifier(tokenValue, tokenRaw, curPos, parser.curPos);
  }

  parser.onError(
    DiagnosticSource.Parser,
    diagnosticMap[diagnosticMessage ? diagnosticMessage : DiagnosticCode.Identifier_expected],
    parser.curPos,
    parser.pos
  );
  return createDummyIdentifier(curPos, curPos);
}

function parseBlock(parser: ParserState, context: Context): Block {
  const pos = parser.curPos;
  if (consume(parser, context | Context.AllowRegExp, SyntaxKind.LeftBrace)) {
    const block = parseBlockStatement(parser, context);
    consume(parser, context | Context.AllowRegExp, SyntaxKind.RightBrace);
    if (consumeOpt(parser, context, SyntaxKind.Assign)) {
      parser.onError(
        DiagnosticSource.Parser,
        diagnosticMap[
          DiagnosticCode
            .Declaration_or_statement_expected_This_follows_a_block_of_statements_so_if_you_intended_to_write_a_destructuring_assignment_you_might_need_to_wrap_the_whole_assignment_in_parentheses
        ],
        parser.curPos,
        parser.pos
      );
    }
    return createBlock(block, pos, parser.curPos);
  }
  // Empty list
  return createBlock(createBlockStatement([], /* multiline */ false, pos, parser.curPos), pos, pos);
}

function parseBlockStatement(parser: ParserState, context: Context): BlockStatement {
  const curPos = parser.curPos;
  const statements: StatementNode[] = [];
  const multiline = (parser.nodeFlags & NodeFlags.NewLine) !== 0;
  if (
    parser.token &
    (SyntaxKind.IsStatementStart |
      SyntaxKind.IsExpressionStart |
      SyntaxKind.IsIdentifier |
      SyntaxKind.IsFutureReserved |
      SyntaxKind.IsPatternStart |
      SyntaxKind.IsBinaryOp)
  ) {
    const statement = parseStatementListItem(parser, context);
    if (statement) {
      statements.push(statement);
    }
  }
  return createBlockStatement(statements, multiline, curPos, parser.curPos);
}

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
        diagnosticMap[
          DiagnosticCode.The_left_hand_side_of_an_assignment_expression_must_be_a_variable_or_a_property_access
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

  return parseConditionalExpression(parser, context, expr, pos);
}

function parseTokenNode(parser: ParserState, context: Context): SyntaxToken<TokenSyntaxKind> {
  const pos = parser.curPos;
  const kind = parser.token;
  nextToken(parser, context);
  return createToken(kind, pos, parser.curPos);
}

function parseConditionalExpression(
  parser: ParserState,
  context: Context,
  expr: ExpressionNode,
  pos: number
): ExpressionNode {
  const shortCircuit = parseBinaryExpression(parser, context, expr, /* minPrec */ 4, pos);
  if (parser.token !== SyntaxKind.QuestionMark) return shortCircuit;
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

function parseBinaryExpression(
  parser: ParserState,
  context: Context,
  left: any,
  minPrec: number,
  pos: number
): BinaryExpression {
  let t: SyntaxKind;
  const bit = -((context & Context.DisallowIn) > 0) & SyntaxKind.InKeyword;
  let prec: number;
  while ((parser.token & SyntaxKind.IsBinaryOp) > 0) {
    t = parser.token;
    prec = t & SyntaxKind.Precedence;
    if (
      prec + ((((t as SyntaxKind) === SyntaxKind.Exponentiate) as any) << 8) - (((bit === t) as any) << 12) <=
      minPrec
    )
      return left;

    left = createBinaryExpression(
      left,
      parseTokenNode(parser, context | Context.AllowRegExp),
      parseBinaryExpression(parser, context, parseLeftHandSideExpression(parser, context), prec, parser.curPos),
      pos,
      parser.curPos
    );

    parser.assignable = false;
  }

  return left;
}

function parseLeftHandSideExpression(parser: ParserState, context: Context): ExpressionNode {
  const pos = parser.curPos;
  const expression = parsePrimaryExpression(parser, context, /* inNewExpression */ false);
  return parseMemberExpression(parser, context, expression, /* allowCalls */ true, pos);
}

function parseExpression(parser: ParserState, context: Context): ExpressionNode {
  const curPos = parser.curPos;
  let expr = parsePrimaryExpression(parser, context, /* inNewExpression */ false);
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
            ? parseTemplateTail(parser, context)
            : parseTemplateExpression(parser, context, /* isTaggedTemplate */ true),
          pos,
          parser.curPos
        );
    }
  }
  return expr;
}

function parseOptionalChain(parser: ParserState, context: Context): any {
  consume(parser, context, SyntaxKind.QuestionMarkPeriod);
  let chain = null;
  let pos = parser.curPos;

  if (consumeOpt(parser, context | Context.AllowRegExp, SyntaxKind.LeftBracket)) {
    chain = createMemberAccessChain(chain, parseExpression(parser, context), pos, parser.curPos);
    consumeOpt(parser, context, SyntaxKind.RightBracket);
  } else if (parser.token === SyntaxKind.LeftParen) {
    chain = createCallChain(chain, parseArguments(parser, context), pos, parser.curPos);
  } else if (parser.token & (SyntaxKind.IsFutureReserved | SyntaxKind.IsKeyword | SyntaxKind.IsIdentifier)) {
    chain = createIndexExpressionChain(chain, parsePropertyOrPrivatePropertyName(parser, context), pos, parser.curPos);
    parser.assignable = false;
  } else {
    parser.onError(
      DiagnosticSource.Parser,
      diagnosticMap[DiagnosticCode.Tagged_template_expressions_are_not_permitted_in_an_optional_chain],
      parser.curPos,
      parser.pos
    );

    chain = createTaggedTemplate(
      chain as any,
      (parser.token as SyntaxKind) === SyntaxKind.TemplateTail
        ? parseTemplateTail(parser, context)
        : parseTemplateExpression(parser, context, /*isTaggedTemplate*/ true),
      pos,
      parser.curPos
    );
  }

  chain = createOptionalChain(chain as any, pos, parser.curPos);

  parser.assignable = false;

  while (true) {
    pos = parser.curPos;
    if (consumeOpt(parser, context | Context.AllowRegExp, SyntaxKind.Period)) {
      chain = createIndexExpressionChain(
        chain as any,
        parsePropertyOrPrivatePropertyName(parser, context),
        pos,
        parser.curPos
      );

      if ((chain as any).expression.kind === SyntaxKind.PrivateIdentifier) {
        parser.onError(
          DiagnosticSource.Parser,
          diagnosticMap[DiagnosticCode.An_optional_chain_cannot_contain_private_identifiers],
          parser.curPos,
          parser.pos
        );
      }
    } else if (parser.token === SyntaxKind.LeftParen) {
      chain = createCallChain(chain as any, parseArguments(parser, context), pos, parser.curPos);
    } else if (consumeOpt(parser, context | Context.AllowRegExp, SyntaxKind.LeftBracket)) {
      chain = createMemberAccessChain(chain as any, parseExpression(parser, context), pos, parser.curPos);
      consumeOpt(parser, context, SyntaxKind.RightBracket);
    } else if (parser.token & (SyntaxKind.IsKeyword | SyntaxKind.IsFutureReserved | SyntaxKind.IsIdentifier)) {
      chain = createIndexExpressionChain(
        chain as any,
        parsePropertyOrPrivatePropertyName(parser, context),
        pos,
        parser.curPos
      );
      if ((chain as any).expression.kind === SyntaxKind.PrivateIdentifier) {
        parser.onError(
          DiagnosticSource.Parser,
          diagnosticMap[DiagnosticCode.An_optional_chain_cannot_contain_private_identifiers],
          parser.curPos,
          parser.pos
        );
      }
    } else {
      if (parser.token === SyntaxKind.TemplateCont || parser.token === SyntaxKind.TemplateTail) {
        parser.onError(
          DiagnosticSource.Parser,
          diagnosticMap[DiagnosticCode.Tagged_template_expressions_are_not_permitted_in_an_optional_chain],
          parser.curPos,
          parser.pos
        );
        chain = createTaggedTemplate(
          chain as any,
          parser.token === SyntaxKind.TemplateTail
            ? parseTemplateTail(parser, context)
            : parseTemplateExpression(parser, context, /*isTaggedTemplate*/ true),
          pos,
          parser.curPos
        );
      }

      parser.assignable = false;
    }
    return chain;
  }
}

function parsePropertyOrPrivatePropertyName(parser: ParserState, context: Context): Identifier | PrivateIdentifier {
  const pos = parser.curPos;
  if (parser.token & (SyntaxKind.IsIdentifier | SyntaxKind.IsFutureReserved)) {
    return parseIdentifier(parser, context);
  }

  if (parser.token === SyntaxKind.PrivateIdentifier) {
    return parsePrivateIdentifier(parser, context);
  }

  // For cases like `(foo.)` where we will hit the ')' instead of discovering a property.
  // To avoid consuming the ')' - which will cause the parse of the parentheses to fail - we
  // return an dummy identifier without priming the scanner.

  parser.onError(
    DiagnosticSource.Parser,
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
  if (parser.token === SyntaxKind.RightBracket) {
    parser.onError(
      DiagnosticSource.Parser,
      diagnosticMap[DiagnosticCode.An_element_access_expression_should_take_an_argument],
      parser.curPos,
      parser.pos
    );
  }
  const expression = parseExpressions(
    parser,
    (context | 0b00000000100000000000000010000000) ^ 0b00000000100000000000000010000000
  );
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
  typeParameters: TypeParameter | null,
  returnType: TypeNode | null,
  params: any,
  asyncToken: SyntaxToken<TokenSyntaxKind> | null,
  pos: number
): any {
  if (parser.nodeFlags & NodeFlags.NewLine) {
    parser.onError(
      DiagnosticSource.Parser,
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
      ((context |
        Context.InAwaitContext |
        Context.InTypes |
        Context.InClassBody |
        Context.InGeneratorContext |
        Context.DisallowIn |
        Context.InSwitch |
        Context.InIteration) ^
        (Context.InGeneratorContext |
          Context.InClassBody |
          Context.InAwaitContext |
          Context.DisallowIn |
          Context.InTypes |
          Context.InSwitch |
          Context.InIteration)) |
        (asyncToken ? Context.InAwaitContext : Context.None)
    ),
    pos,
    parser.curPos
  );
}

function parseConciseOrFunctionBody(parser: ParserState, context: Context): FunctionBody | ExpressionNode {
  if (parser.token === SyntaxKind.LeftBrace) {
    const body = parseFunctionBody(
      parser,
      context,
      /* isDecl */ true,
      /* isSimpleParameterList */ true,
      /* ignoreMissingOpenBrace */ false
    );

    if (parser.nodeFlags & NodeFlags.NewLine) {
      switch (parser.token as SyntaxKind) {
        case SyntaxKind.Period:
          parser.onError(
            DiagnosticSource.Parser,
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
          diagnosticMap[DiagnosticCode.An_arrow_function_can_not_be_part_of_an_operator_to_the_right],
          parser.curPos,
          parser.pos
        );
      } else {
        switch (parser.token as SyntaxKind) {
          case SyntaxKind.Period:
            parser.onError(
              DiagnosticSource.Parser,
              diagnosticMap[DiagnosticCode.Block_body_arrows_can_not_be_immediately_accessed_without_a_group],
              parser.curPos,
              parser.pos
            );
            break;
          case SyntaxKind.LeftParen:
          case SyntaxKind.LeftBracket:
            parser.onError(
              DiagnosticSource.Parser,
              diagnosticMap[DiagnosticCode.Block_body_arrows_can_not_be_immediately_invoked_without_a_group],
              parser.curPos,
              parser.pos
            );
            break;
          case SyntaxKind.TemplateTail:
            parser.onError(
              DiagnosticSource.Parser,
              diagnosticMap[DiagnosticCode.Block_body_arrows_can_not_be_immediately_tagged_without_a_group],
              parser.curPos,
              parser.pos
            );
            break;
          case SyntaxKind.QuestionMark:
            parser.onError(
              DiagnosticSource.Parser,
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
    parser.token !== SyntaxKind.ClassKeyword
  ) {
    return parseFunctionBody(
      parser,
      context,
      /* isDecl */ true,
      /* isSimpleParameterList */ true,
      /* ignoreMissingOpenBrace */ true
    );
  }

  return parseExpression(parser, context);
}

function parseArguments(parser: ParserState, context: Context): ArgumentList {
  consume(parser, context | Context.AllowRegExp, SyntaxKind.LeftParen);
  const result = parseArgumentList(
    parser,
    (context | 0b00000000100000000000000010000000) ^ 0b00000000100000000000000010000000
  );
  consume(parser, context, SyntaxKind.RightParen);
  return result;
}

function parseArgumentList(parser: ParserState, context: Context): ArgumentList {
  const start = parser.curPos;
  const elements: ExpressionNode[] = [];
  let trailingComma = false;

  while (
    parser.token &
    (SyntaxKind.IsIdentifier |
      SyntaxKind.IsFutureReserved |
      SyntaxKind.IsExpressionStart |
      SyntaxKind.IsPropertyOrCall |
      SyntaxKind.IsBinaryOp |
      SyntaxKind.IsEllipsis |
      SyntaxKind.IsComma)
  ) {
    elements.push(parseArgumentOrArrayLiteralElement(parser, context));
    if ((parser.token as SyntaxKind) === SyntaxKind.RightParen) break;
    if (consumeOpt(parser, context | Context.AllowRegExp, SyntaxKind.Comma)) {
      if ((parser.token as SyntaxKind) === SyntaxKind.RightParen) {
        trailingComma = true;
        break;
      }
      continue;
    }
    // We didn't get a comma, and the list wasn't terminated, explicitly so give
    // a good error message instead

    parser.onError(DiagnosticSource.Parser, diagnosticMap[DiagnosticCode._expected], parser.curPos, parser.pos);
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

function parseIdentifierReference(parser: ParserState, context: Context): Identifier {
  const { token, curPos, tokenValue, tokenRaw } = parser;
  parser.assignable = true;

  if (token & (SyntaxKind.IsFutureReserved | SyntaxKind.IsIdentifier)) {
    if (context & (Context.Strict | Context.InGeneratorContext) && token === SyntaxKind.YieldKeyword) {
      parser.onError(
        DiagnosticSource.Parser,
        diagnosticMap[DiagnosticCode.Identifier_expected_yield_is_a_reserved_word_in_strict_mode],
        parser.curPos,
        parser.pos
      );
    }
    if (context & (Context.Module | Context.InAwaitContext) && token === SyntaxKind.AwaitKeyword) {
      parser.onError(
        DiagnosticSource.Parser,
        diagnosticMap[DiagnosticCode._let_is_a_restricted_production_at_the_start_of_a_statement],
        parser.curPos,
        parser.pos
      );
    }

    // 'let' followed by '[' means a lexical declaration, which should not appear here.
    if (token === SyntaxKind.LetKeyword && (parser.token as SyntaxKind) === SyntaxKind.LeftBracket) {
      parser.onError(
        DiagnosticSource.Parser,
        diagnosticMap[DiagnosticCode._let_is_a_restricted_production_at_the_start_of_a_statement],
        parser.curPos,
        parser.pos
      );
    }
    nextToken(parser, context);
    return createIdentifier(tokenValue, tokenRaw, curPos, parser.curPos);
  }

  parser.onError(DiagnosticSource.Parser, diagnosticMap[DiagnosticCode.Identifier_expected], parser.curPos, parser.pos);

  return createDummyIdentifier(curPos, curPos) as any;
}

function parsePrimaryExpression(parser: ParserState, context: Context, inNewExpression: boolean): any {
  if (parser.token & SyntaxKind.IsIdentifier) {
    if (parser.token === SyntaxKind.AsyncKeyword) {
      return parseFunctionExpression(parser, context);
    }
    if (context & Context.InAwaitContext && parser.token === SyntaxKind.AwaitKeyword) {
      return parseAwaitExpression(parser, context, inNewExpression);
    }
    const pos = parser.curPos;
    const expression = parseIdentifierReference(parser, context);
    if (parser.token === SyntaxKind.Arrow) {
      return parseArrowFunction(
        parser,
        context,
        /*typeParameters */ null,
        /* returnType */ null,
        /* params */ expression,
        /* asyncToken */ null,
        pos
      );
    }
    parser.assignable = true;
    return expression;
  }
  switch (parser.token) {
    case SyntaxKind.Decrement:
    case SyntaxKind.Increment:
      return parsePrefixUpdateExpression(parser, context, inNewExpression);
    case SyntaxKind.DeleteKeyword:
    case SyntaxKind.Negate:
    case SyntaxKind.Complement:
    case SyntaxKind.Add:
    case SyntaxKind.Subtract:
    case SyntaxKind.TypeofKeyword:
    case SyntaxKind.VoidKeyword:
      return parseUnaryExpression(parser, context);
    case SyntaxKind.PrivateIdentifier:
      return parsePrivateIdentifier(parser, context);
    case SyntaxKind.YieldKeyword:
      return parseYieldIdentifierOrExpression(parser, context);
    case SyntaxKind.FunctionKeyword:
      return parseFunctionExpression(parser, context);
    case SyntaxKind.ClassKeyword:
      return parseClassExpression(parser, context);
    case SyntaxKind.ThisKeyword:
      return parseThisExpression(parser, context);
    case SyntaxKind.NullKeyword:
      return parseNullLiteral(parser, context);
    case SyntaxKind.TrueKeyword:
      return parseBooleanLiteral(parser, context, /* isTruthy */ true);
    case SyntaxKind.FalseKeyword:
      return parseBooleanLiteral(parser, context, /* isTruthy */ false);
    case SyntaxKind.BigIntLiteral:
      return parseThisExpression(parser, context);
    case SyntaxKind.LeftBracket:
      return parseArrayLiteral(parser, context);
    case SyntaxKind.LessThan:
    case SyntaxKind.LeftParen:
      return parsentheizedExpression(
        parser,
        (context | 0b00000000100000000000000010000000) ^ 0b00000000100000000000000010000000
      );
    case SyntaxKind.LeftBrace:
      return parseObjectLiteral(parser, context);
    case SyntaxKind.NewKeyword:
      return parseNewExpression(parser, context);
    case SyntaxKind.SuperKeyword:
      return parseSuperExpression(parser, context);
    case SyntaxKind.RegularExpression:
      return parseRegularExpression(parser, context);
    case SyntaxKind.TemplateTail:
      return parseTemplateTail(parser, context);
    case SyntaxKind.TemplateSpan:
      return parseTemplateExpression(parser, context, /*isTaggedTemplate*/ false);
    case SyntaxKind.NumericLiteral:
      return parseNumericLiteral(parser, context);
    case SyntaxKind.StringLiteral:
      return parseStringLiteral(parser, context);
    case SyntaxKind.ImportKeyword:
      return parseImportMetaOrCall(parser, context, inNewExpression);
  }
  return parseIdentifier(parser, context);
}

function parseObjectLiteral(parser: ParserState, context: Context): ObjectLiteral | AssignmentExpression {
  const expr = parseObjectLiteralOrAssignmentExpression(parser, context, BindingType.Literal);
  if ((parser.destructible & DestructibleKind.MustDestruct) === DestructibleKind.MustDestruct) {
    parser.onError(
      DiagnosticSource.Parser,
      diagnosticMap[
        DiagnosticCode.The_left_hand_side_of_an_assignment_expression_must_be_a_variable_or_a_property_access
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
  type: BindingType
): ObjectLiteral | AssignmentExpression {
  const pos = parser.curPos;
  nextToken(parser, context | Context.AllowRegExp);
  const propertyDefinitionList = parsePropertyDefinitionList(
    parser,
    (context | 0b00000000100000000000000010000000) ^ 0b00000000100000000000000010000000,
    type
  );
  consume(parser, context, SyntaxKind.RightBrace);
  const node = createObjectLiteral(propertyDefinitionList, pos, parser.curPos);
  if (parser.token & SyntaxKind.IsAssignOp) {
    if (parser.token !== SyntaxKind.Assign) {
      parser.onError(
        DiagnosticSource.Parser,
        diagnosticMap[DiagnosticCode.Expression_exprected_A_compound_assignment_cannot_follow_an_object_literal],
        parser.curPos,
        parser.pos
      );
    }
    if (parser.destructible & DestructibleKind.NotDestructible) {
      parser.onError(
        DiagnosticSource.Parser,
        diagnosticMap[
          DiagnosticCode.The_left_hand_side_of_an_assignment_expression_must_be_a_variable_or_a_property_access
        ],
        parser.curPos,
        parser.pos
      );
    }
    const t = parseTokenNode(parser, context | Context.AllowRegExp);

    const right = parseExpression(parser, context);
    parser.destructible = (parser.destructible | DestructibleKind.MustDestruct) ^ DestructibleKind.MustDestruct;
    return createAssignmentExpression(node, t, right, pos, parser.curPos);
  }
  return node;
}

function parsePropertyDefinitionList(parser: ParserState, context: Context, type: BindingType): PropertyDefinitionList {
  const pos = parser.curPos;
  const properties = [];
  const multiline = (parser.nodeFlags & NodeFlags.NewLine) !== 0;
  let trailingComma = false;
  let destructible = DestructibleKind.None;
  const prototypeCount = 0;
  while (parser.token & (SyntaxKind.IsKeyword | 76038144)) {
    properties.push(parsePropertyDefinition(parser, context, type));
    destructible |= parser.destructible;
    if (parser.token === SyntaxKind.RightBrace) break;
    if (consumeOpt(parser, context | Context.AllowRegExp, SyntaxKind.Comma)) {
      if ((parser.token as SyntaxKind) === SyntaxKind.RightBrace) {
        trailingComma = true;
        break;
      }
      continue;
    }

    parser.onError(DiagnosticSource.Parser, diagnosticMap[DiagnosticCode._expected], parser.curPos, parser.pos);
  }
  parser.destructible = destructible;
  return createPropertyDefinitionList(properties, trailingComma, multiline, parser.nodeFlags, pos, parser.curPos);
}

function parsePropertyDefinition(
  parser: ParserState,
  context: Context,
  type: BindingType
): PropertyDefinition | SpreadProperty | MethodDefinition | Identifier | CoverInitializedName {
  const pos = parser.curPos;

  if (parser.token & SyntaxKind.IsEllipsis) {
    nextToken(parser, context | Context.AllowRegExp);
    return createSpreadProperty(paresSpreadPropertyArgument(parser, context, type), pos, parser.curPos);
  }

  let key: any;
  let destructible = DestructibleKind.None;

  let nodeFlags = consumeOpt(parser, context, SyntaxKind.Multiply)
    ? NodeFlags.ExpressionNode | NodeFlags.Generator
    : NodeFlags.ExpressionNode;

  if (parser.token & 8404992) {
    const token = parser.token;
    key = parseIdentifier(parser, context, DiagnosticCode.A_rest_element_cannot_have_an_initializer, true);
    if (
      parser.token === SyntaxKind.Assign ||
      parser.token === SyntaxKind.Comma ||
      parser.token === SyntaxKind.RightBrace
    ) {
      if (consumeOpt(parser, context | Context.AllowRegExp, SyntaxKind.Assign)) {
        parser.destructible = DestructibleKind.MustDestruct;
        return createCoverInitializedName(key, parseExpression(parser, context), pos, parser.curPos);
      }
      parser.destructible = destructible;
      return key;
    }
    if (parser.token & 75513856) {
      if (token === SyntaxKind.AsyncKeyword) {
        nodeFlags |= NodeFlags.Async;
        if (consumeOpt(parser, context, SyntaxKind.Multiply)) nodeFlags |= NodeFlags.Generator;
      } else if (token === SyntaxKind.GetKeyword) {
        nodeFlags |= NodeFlags.Getter;
      } else if (token === SyntaxKind.SetKeyword) {
        nodeFlags |= NodeFlags.Setter;
      }

      if (nodeFlags & 15360) {
        if (consumeOpt(parser, context, SyntaxKind.Multiply)) nodeFlags |= NodeFlags.Generator;
        if (parser.token & 79708160) {
          key = parsePropertyName(parser, context);
        }
      }
    }
  } else {
    key = parsePropertyName(parser, context);
  }

  if (parser.token & SyntaxKind.IsLessThanOrLeftParen) {
    return parseMethodDefinition(parser, context, /* isDeclared*/ false, key, nodeFlags);
  }

  if (consumeOpt(parser, context | Context.AllowRegExp, SyntaxKind.Colon)) {
    let left: any;
    if (parser.token & 12599296) {
      left = parsePrimaryExpression(parser, context, /* inNewExpression */ false);

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
          ? parseArrayLiteralOrAssignmentExpression(parser, context, type)
          : parseObjectLiteralOrAssignmentExpression(parser, context, type);

      destructible = parser.destructible;

      if (parser.token !== SyntaxKind.RightBrace && parser.token !== SyntaxKind.Comma) {
        if (parser.destructible & DestructibleKind.MustDestruct) {
          parser.onError(
            DiagnosticSource.Parser,
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
      left = parseLeftHandSideExpression(parser, context);

      const isAssignToken = parser.token === SyntaxKind.Assign;

      left = parseAssignmentExpression(parser, context, left, pos);

      destructible |=
        parser.assignable || isAssignToken ? DestructibleKind.Assignable : DestructibleKind.NotDestructible;
    }
    parser.destructible = destructible;
    return createPropertyDefinition(left, key, pos, parser.curPos);
  }
  if (parser.destructible & DestructibleKind.MustDestruct) {
    parser.onError(
      DiagnosticSource.Parser,
      diagnosticMap[DiagnosticCode.Invalid_optional_chain_from_new_expression],
      parser.curPos,
      parser.pos
    );
  }
  return key;
}

function parseTypeParameters(parser: ParserState, context: Context): TypeParameter | null {
  return context & Context.OptionsAllowTypes && parser.token === SyntaxKind.LessThan
    ? parseTypeParameter(parser, context | Context.InTypes)
    : null;
}

function parseMethodDefinition(
  parser: ParserState,
  context: Context,
  isDeclared: boolean,
  key: any,
  nodeFlags: NodeFlags
): MethodDefinition {
  const pos = parser.curPos;
  const typeParameters = parseTypeParameters(parser, context);
  if (nodeFlags & NodeFlags.Constructor) {
  } else {
    context = (context | Context.InConstructor | Context.SuperCall) ^ (Context.InConstructor | Context.SuperCall);
  }
  context |= Context.SuperProperty;

  context =
    ((context | Context.InAwaitContext | Context.InGeneratorContext | Context.InTypes | Context.DisallowIn) ^
      (Context.InGeneratorContext | Context.InAwaitContext | Context.DisallowIn | Context.InTypes)) |
    (nodeFlags & NodeFlags.Async ? Context.InAwaitContext : Context.None) |
    (nodeFlags & NodeFlags.Generator ? Context.InGeneratorContext : Context.None);

  const methodParameters = parsMethodParameters(parser, context, nodeFlags);
  const returnType = parseTypeAnnotation(parser, context);
  const content = parseFunctionBlockOrSemicolon(
    parser,
    context | Context.NewTarget,
    /* isDeclared */ isDeclared,
    /* isDecl */ false,
    /* , /* isSimpleParameterList */ (methodParameters.flags & NodeFlags.NoneSimpleParamList) === 0,
    /* ignoreMissingOpenBrace */ false
  );
  parser.destructible = DestructibleKind.NotDestructible;
  return createMethodDefinition(
    key,
    typeParameters,
    methodParameters,
    returnType,
    content,
    nodeFlags,
    pos,
    parser.curPos
  );
}

function parsMethodParameters(parser: ParserState, context: Context, nodeFlags: NodeFlags): FormalParameterList {
  const parameters = [];
  context = (context | 0b00000000100000000000000010000000) ^ 0b00000000100000000000000010000000;
  if (consume(parser, context | Context.AllowRegExp, SyntaxKind.LeftParen)) {
    if (nodeFlags & NodeFlags.Getter && parser.token !== SyntaxKind.RightParen) {
      parser.onError(
        DiagnosticSource.Parser,
        diagnosticMap[DiagnosticCode.A_get_accessor_cannot_have_parameters],
        parser.curPos,
        parser.pos
      );
    }

    const curpPos = parser.curPos;
    let trailingComma = false;

    while (
      parser.token &
      (SyntaxKind.IsIdentifier | SyntaxKind.IsFutureReserved | SyntaxKind.IsEllipsis | SyntaxKind.IsPatternStart)
    ) {
      if (nodeFlags & NodeFlags.Setter) {
        if (parser.token & SyntaxKind.IsEllipsis) {
          parser.onError(
            DiagnosticSource.Parser,
            diagnosticMap[DiagnosticCode.A_set_accessor_cannot_have_rest_parameter],
            parser.curPos,
            parser.pos
          );
        }
        if (context & Context.OptionsAllowTypes && parser.token === SyntaxKind.ThisKeyword) {
          parser.onError(
            DiagnosticSource.Parser,
            diagnosticMap[DiagnosticCode.A_setter_cannot_have_a_this_parameter],
            parser.curPos,
            parser.pos
          );
        }
      }

      let parameter = parseFormalParameter(parser, context);

      nodeFlags |= parameter.flags;

      parameters.push(parameter);

      if ((parser.token as SyntaxKind) === SyntaxKind.RightParen) break;
      if (consumeOpt(parser, context | Context.AllowRegExp, SyntaxKind.Comma)) {
        if (nodeFlags & NodeFlags.Setter && parser.token !== SyntaxKind.RightParen) {
          parser.onError(
            DiagnosticSource.Parser,
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

      parser.onError(DiagnosticSource.Parser, diagnosticMap[DiagnosticCode._expected], parser.curPos, parser.pos);
    }
    const result = createFormalParameterList(parameters, trailingComma, nodeFlags, curpPos, parser.pos);
    consume(parser, context, SyntaxKind.RightParen);
    return result;
  }
  // Empty list
  return createFormalParameterList([], /* trailingComma*/ false, nodeFlags, parser.curPos, parser.curPos);
}

function paresSpreadPropertyArgument(parser: ParserState, context: Context, type: BindingType): SpreadProperty | any {
  const pos = parser.curPos;
  if (parser.token & (SyntaxKind.IsIdentifier | SyntaxKind.IsFutureReserved)) {
    let argument = parsePrimaryExpression(parser, context, /* inNewExpression */ false);

    // '... )' , '... ]' and '... }'
    if (parser.token === SyntaxKind.RightBrace) {
      parser.destructible = parser.assignable ? DestructibleKind.Destructible : DestructibleKind.NotDestructible;
      return argument;
    }

    // A spread or rest element / property may not have a trailing comma, so we are setting the
    // destructible state to 'NotDestructible' for cases like '..., )',  '..., }'  and '..., ]'.
    if (parser.token & SyntaxKind.IsComma) {
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
        ? parseArrayLiteralOrAssignmentExpression(parser, context, type)
        : parseObjectLiteralOrAssignmentExpression(parser, context, type);

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
      parser.onError(DiagnosticSource.Parser, diagnosticMap[DiagnosticCode._expected], parser.curPos, parser.pos);
    }

    argument = parseMemberExpression(parser, context, argument, true, pos);

    argument = parseAssignmentExpression(parser, context, argument, pos);

    parser.destructible = parser.assignable ? DestructibleKind.Assignable : DestructibleKind.NotDestructible;

    return argument;
  }

  let argument = parseLeftHandSideExpression(parser, context);

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

function parseRegularExpression(parser: ParserState, context: Context): RegularExpressionLiteral {
  const { curPos, tokenValue } = parser;
  nextToken(parser, context);
  parser.assignable = false;
  return createRegularExpressionLiteral(tokenValue, curPos, parser.curPos);
}

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

function parseNewExpression(parser: ParserState, context: Context): NewTarget | NewExpression {
  const pos = parser.curPos;
  const newToken = consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.NewKeyword);
  if (consumeOpt(parser, context, SyntaxKind.Period)) {
    if ((context & Context.NewTarget) === 0) {
      parser.onError(
        DiagnosticSource.Parser,
        diagnosticMap[DiagnosticCode._new_target_only_allowed_within_functions],
        parser.curPos,
        parser.pos
      );
    }
    parser.assignable = false;
    return createNewTarget(parseIdentifier(parser, context) as Identifier, pos, parser.curPos);
  }
  context = (context | 0b00000000100000000000000010000000) ^ 0b00000000100000000000000010000000;
  const expression = parsePrimaryExpression(parser, context, /* inNewExpression */ true);
  if (parser.token === SyntaxKind.QuestionMarkPeriod) {
    parser.onError(
      DiagnosticSource.Parser,
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
  const curPos = parser.curPos;
  nextToken(parser, context);
  parser.assignable = false;
  return createThisExpression(curPos, parser.curPos);
}

function parseBooleanLiteral(parser: ParserState, context: Context, isTruthy: boolean): BooleanLiteral {
  const curPos = parser.curPos;
  nextToken(parser, context);
  parser.assignable = false;
  return createBooleanLiteral(isTruthy ? true : false, curPos, parser.curPos);
}

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

function parsePrefixUpdateExpression(
  parser: ParserState,
  context: Context,
  inNewExpression: boolean
): PrefixUpdateExpression {
  const curPos = parser.curPos;
  const operandToken = parseTokenNode(parser, context | Context.AllowRegExp);
  const operand = parseExpression(parser, context);

  if (!parser.assignable) {
    parser.onError(
      DiagnosticSource.Parser,
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
      diagnosticMap[DiagnosticCode.Expression_expected],
      parser.curPos,
      parser.pos
    );
  }
  parser.assignable = false;
  return createPrefixUpdateExpression(operandToken, operand, curPos, parser.curPos);
}

function parseUnaryExpression(parser: ParserState, context: Context): UnaryExpression {
  const curPos = parser.curPos;
  const operandToken = parseTokenNode(parser, context | Context.AllowRegExp);
  const expression = parseLeftHandSideExpression(parser, context);

  if ((parser.token as SyntaxKind) === SyntaxKind.Exponentiate) {
    parser.onError(
      DiagnosticSource.Parser,
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
        diagnosticMap[DiagnosticCode._delete_cannot_be_called_on_an_identifier_in_strict_mode],
        parser.curPos,
        parser.pos
      );
    }
    if (expression.kind === SyntaxKind.PrivateIdentifier) {
      parser.onError(
        DiagnosticSource.Parser,
        diagnosticMap[DiagnosticCode.Prohibit_delete_of_private_class_elements],
        parser.curPos,
        parser.pos
      );
    }
  }

  parser.assignable = false;
  return createUnaryExpression(operandToken, expression, curPos, parser.curPos);
}

function parseArrayLiteral(parser: ParserState, context: Context): ArrayLiteral {
  const expr = parseArrayLiteralOrAssignmentExpression(parser, context, BindingType.Literal);
  if ((parser.destructible & DestructibleKind.MustDestruct) === DestructibleKind.MustDestruct) {
    parser.onError(
      DiagnosticSource.Parser,
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
  type: BindingType
): ArrayLiteral | AssignmentExpression {
  const curPos = parser.curPos;
  consume(parser, context | Context.AllowRegExp, SyntaxKind.LeftBracket);
  const elementList = parseElementList(parser, context, type);
  consume(parser, context, SyntaxKind.RightBracket);
  context = (context | 0b00000000100000000000000010000000) ^ 0b00000000100000000000000010000000;
  const node = createArrayLiteral(elementList, curPos, parser.curPos);

  if (parser.token & SyntaxKind.IsAssignOp) {
    if (parser.token !== SyntaxKind.Assign) {
      parser.onError(
        DiagnosticSource.Parser,
        diagnosticMap[DiagnosticCode.Expression_exprected_A_compound_assignment_cannot_follow_an_array_literal],
        parser.curPos,
        parser.pos
      );
    }
    if (parser.destructible & DestructibleKind.NotDestructible) {
      parser.onError(
        DiagnosticSource.Parser,
        diagnosticMap[
          DiagnosticCode.The_left_hand_side_of_an_assignment_expression_must_be_a_variable_or_a_property_access
        ],
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

function parseElementList(parser: ParserState, context: Context, type: BindingType): ElementList {
  const curPos = parser.curPos;
  const elements: ExpressionNode[] = [];
  let trailingComma = false;
  let destructible = DestructibleKind.None;
  while (parser.token & 279789568) {
    elements.push(parseArrayLiteralElement(parser, context, type) as any);
    destructible |= parser.destructible;
    if (parser.token === SyntaxKind.RightBracket) break;
    if (consumeOpt(parser, context | Context.AllowRegExp, SyntaxKind.Comma)) {
      if ((parser.token as SyntaxKind) === SyntaxKind.RightBracket) {
        trailingComma = true;
        break;
      }
      continue;
    }

    parser.onError(DiagnosticSource.Parser, diagnosticMap[DiagnosticCode._expected], parser.curPos, parser.pos);
  }

  parser.destructible = destructible;
  return createElementList(elements, trailingComma, curPos, parser.curPos);
}

function parseArrayLiteralElement(
  parser: ParserState,
  context: Context,
  type: BindingType
): OmittedExpression | SpreadElement | ExpressionNode {
  const pos = parser.curPos;

  // Simple cases: "[a]", "[a,]", "[a = b]", "[a.[b] ...]",  "[a.b ... ]" and "[a.(b) ...]"'
  if (parser.token & (SyntaxKind.IsFutureReserved | SyntaxKind.IsIdentifier)) {
    let left = parsePrimaryExpression(parser, context, /* inNewExpression */ false);

    // Array with only one identifier followed by an assignment, '[a = ', are destructible unless this is a keyword.
    if (parser.token === SyntaxKind.Assign) {
      return parseAssignmentExpression(parser, context, left, pos);
    }

    // Array with only one identifier, should be 'destructible' except for a few valid identifiers / keywords
    // that can't be assigned to. For example `true` and `typeof`.
    if (parser.token === SyntaxKind.RightBracket || parser.token & SyntaxKind.IsComma) {
      parser.destructible = parser.assignable ? DestructibleKind.None : DestructibleKind.NotDestructible;
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
        ? parseArrayLiteralOrAssignmentExpression(parser, context, type)
        : parseObjectLiteralOrAssignmentExpression(parser, context, type);

    let destructible = parser.destructible;

    if (parser.token & (SyntaxKind.IsPropertyOrCall | SyntaxKind.IsExpressionStart)) {
      // '=' can only be used in an object literal property inside a destructuring assignment
      if (destructible & DestructibleKind.MustDestruct) {
        parser.onError(DiagnosticSource.Parser, diagnosticMap[DiagnosticCode._expected], parser.curPos, parser.pos);
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

  if (parser.token & SyntaxKind.IsEllipsis) {
    nextToken(parser, context | Context.AllowRegExp); // skips: '...'
    return createSpreadElement(parseArraySpreadArgument(parser, context, type), pos, parser.curPos);
  }

  if (parser.token & SyntaxKind.IsComma) {
    return createOmittedExpression(pos, pos);
  }

  const token = parser.token;

  let destructible = DestructibleKind.None;

  let left = parseLeftHandSideExpression(parser, context);

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
  return parser.token & SyntaxKind.IsEllipsis
    ? parseSpreadElement(parser, context)
    : parser.token & SyntaxKind.IsComma
    ? createOmittedExpression(parser.curPos, parser.curPos)
    : parseExpression(parser, context);
}

function parseArraySpreadArgument(parser: ParserState, context: Context, type: BindingType): any {
  const pos = parser.curPos;

  if (parser.token & (SyntaxKind.IsIdentifier | SyntaxKind.IsFutureReserved)) {
    let argument = parsePrimaryExpression(parser, context, /* inNewExpression */ false);

    // '... )' , '... ]' and '... }'
    if (parser.token === SyntaxKind.RightBracket) {
      parser.destructible = parser.assignable ? DestructibleKind.Destructible : DestructibleKind.NotDestructible;
      return argument;
    }

    // A spread or rest element / property may not have a trailing comma, so we are setting the
    // destructible state to 'NotDestructible' for cases like '..., )',  '..., }'  and '..., ]'.
    if (parser.token & SyntaxKind.IsComma) {
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
    } else if (parser.token === SyntaxKind.Comma || (parser.token as SyntaxKind) === SyntaxKind.RightBracket) {
      //addVarOrBlock(parser, context, scope, tokenValue, type);
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
        ? parseArrayLiteralOrAssignmentExpression(parser, context, type)
        : parseObjectLiteralOrAssignmentExpression(parser, context, type);

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
      parser.onError(DiagnosticSource.Parser, diagnosticMap[DiagnosticCode._expected], parser.curPos, parser.pos);
    }

    argument = parseMemberExpression(parser, context, argument, true, pos);

    argument = parseAssignmentExpression(parser, context, argument, pos);

    parser.destructible = parser.assignable ? DestructibleKind.Assignable : DestructibleKind.NotDestructible;

    return argument;
  }

  let argument = parseLeftHandSideExpression(parser, context);

  if (parser.token & SyntaxKind.IsExpressionStart) {
    argument = parseAssignmentExpression(parser, context, argument, pos);
    parser.destructible |= DestructibleKind.NotDestructible;
    return argument;
  }

  if (parser.token === SyntaxKind.Comma) {
    parser.destructible = DestructibleKind.NotDestructible;
    return argument;
  }

  argument = parseAssignmentExpression(parser, context, argument, pos);

  parser.destructible = parser.assignable ? DestructibleKind.Assignable : DestructibleKind.NotDestructible;

  return argument;
}

function parseSpreadElement(parser: ParserState, context: Context): SpreadElement {
  const pos = parser.curPos;
  nextToken(parser, context);
  return createSpreadElement(
    parseExpression(parser, (context | 0b00000000100000000000000010000000) ^ 0b00000000100000000000000010000000),
    pos,
    parser.curPos
  );
}

function parsentheizedExpression(parser: ParserState, context: Context): ParenthesizedExpression | any {
  const curPos = parser.curPos;
  let typeParameters = null;
  let state = Tristate.False;

  if (parser.token === SyntaxKind.LessThan) {
    state = Tristate.True;
    typeParameters = parseTypeParameter(parser, context);
  }

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
              parsePrimaryExpression(parser, context, /* inNewExpression */ false),
              curPos,
              false
            )
          : true;
    }

    switch (parser.token) {
      case SyntaxKind.Arrow:
      case SyntaxKind.Colon:
      case SyntaxKind.LeftBrace:
        return parseArrowFunction(
          parser,
          context,
          /*typeParameters */ typeParameters,
          /* returnType */ isType ? parseTypeAnnotation(parser, context) : null,
          /* params */ [],
          /* asyncToken */ null,
          curPos
        );
      default:
        parser.onError(
          DiagnosticSource.Parser,
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
    expression = parsePrimaryExpression(parser, context, /* inNewExpression */ false);

    if (parser.token === SyntaxKind.Colon) {
      state = Tristate.True;

      expression = createFormalParameter(
        /* ellipsisToken */ null,
        /* binding */ expression,
        /* optionalToken */ null,
        /* type */ parseTypeAnnotation(parser, context),
        /* initializer */ parseInitializer(parser, context),
        NodeFlags.ExpressionNode,
        curPos,
        parser.curPos
      );
    } else {
      state = Tristate.Unknown;

      if (parser.token === SyntaxKind.Comma || parser.token === SyntaxKind.RightParen) {
        if (!parser.assignable) {
          destructible |= DestructibleKind.NotDestructible;
        }
      } else {
        if (parser.token !== SyntaxKind.Assign) {
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
        ? parseArrayLiteralOrAssignmentExpression(parser, context, BindingType.ArgumentList)
        : parseObjectLiteralOrAssignmentExpression(parser, context, BindingType.ArgumentList);

    if (parser.token === SyntaxKind.Colon) {
      state = Tristate.True;

      expression = createFormalParameter(
        /* ellipsisToken */ null,
        /* binding */ expression as any,
        /* optionalToken */ null,
        /* type */ parseTypeAnnotation(parser, context),
        /* initializer */ parseInitializer(parser, context),
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
          parser.onError(DiagnosticSource.Parser, diagnosticMap[DiagnosticCode._expected], parser.curPos, parser.pos);
        }

        if (parser.token & SyntaxKind.IsPropertyOrCall) {
          state = Tristate.False;
          expression = parseMemberExpression(parser, context, expression, true, curPos);
        }

        destructible |= DestructibleKind.NotDestructible;

        if ((parser.token & SyntaxKind.IsAssignOp) > 0) {
          if (!parser.assignable) {
            parser.onError(DiagnosticSource.Parser, diagnosticMap[DiagnosticCode._expected], parser.curPos, parser.pos);
          }
          expression = parseAssignmentExpression(parser, context, expression, curPos);
        } else if ((parser.token & SyntaxKind.IsBinaryOp) > 0) {
          expression = parseBinaryExpression(parser, context, expression, 4, curPos);
          if ((parser.token as SyntaxKind) === SyntaxKind.QuestionMark) {
            expression = parseConditionalExpression(parser, context, expression, curPos);
          }
        } else {
          if (parser.token === SyntaxKind.QuestionMark) {
            expression = parseConditionalExpression(parser, context, expression, curPos);
          } else {
            destructible |= !parser.assignable ? DestructibleKind.NotDestructible : DestructibleKind.Assignable;
          }
        }

        if (
          (parser.token as SyntaxKind) !== SyntaxKind.Comma ||
          (parser.token as SyntaxKind) !== SyntaxKind.LeftParen
        ) {
          expression = parseAssignmentExpression(parser, context, expression, curPos);
          destructible |= !parser.assignable ? DestructibleKind.NotDestructible : DestructibleKind.Assignable;
        }
      }
    }
  } else if (parser.token & SyntaxKind.IsEllipsis) {
    state = Tristate.True;
    expression = parseFormalParameter(parser, context);
  } else {
    state = Tristate.False;
    destructible |= DestructibleKind.NotDestructible;

    expression = parseExpression(parser, context);

    expression = parseCommaOperator(parser, context, expression, curPos);

    consume(parser, context, SyntaxKind.RightParen);

    parser.destructible = destructible;

    return createParenthesizedExpression(expression, curPos, parser.curPos);
  }

  if (consumeOpt(parser, context, SyntaxKind.RightParen)) {
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
            diagnosticMap[DiagnosticCode.The_left_hand_side_of_the_arrow_is_not_destructible],
            parser.curPos,
            parser.pos
          );
        }
        return parseArrowFunction(
          parser,
          context,
          typeParameters,
          parseTypeAnnotation(parser, context),
          [expression],
          null,
          curPos
        );
      }
    }

    return createParenthesizedExpression(expression, curPos, parser.curPos);
  }

  let expressions: any;

  // 12.16 Comma Operator
  if (consumeOpt(parser, context | Context.AllowRegExp, SyntaxKind.Comma)) {
    expressions = [expression];

    while (
      parser.token &
      (SyntaxKind.IsEllipsis |
        SyntaxKind.IsComma |
        SyntaxKind.IsIdentifier |
        SyntaxKind.IsExpressionStart |
        SyntaxKind.IsPatternStart |
        SyntaxKind.IsFutureReserved)
    ) {
      if (parser.token & (SyntaxKind.IsIdentifier | SyntaxKind.IsFutureReserved)) {
        expression = parsePrimaryExpression(parser, context, /* inNewExpression */ false);

        state = Tristate.Unknown;

        if (context & Context.OptionsAllowTypes && parser.token === SyntaxKind.Colon) {
          state = Tristate.True;

          expression = createFormalParameter(
            /* ellipsisToken */ null,
            /* binding */ expression,
            /* optionalToken */ null,
            /* type */ parseTypeAnnotation(parser, context),
            /* initializer */ parseInitializer(parser, context),
            NodeFlags.ExpressionNode,
            curPos,
            parser.curPos
          );
        } else {
          state = Tristate.Unknown;

          if (parser.token === SyntaxKind.Comma || parser.token === SyntaxKind.RightParen) {
            if (!parser.assignable) {
              destructible |= DestructibleKind.NotDestructible;
            }
          } else {
            if (parser.token !== SyntaxKind.Assign) {
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
            ? parseArrayLiteralOrAssignmentExpression(parser, context, BindingType.ArgumentList)
            : parseObjectLiteralOrAssignmentExpression(parser, context, BindingType.ArgumentList);

        if (parser.token === SyntaxKind.Colon) {
          state = Tristate.True;

          expression = createFormalParameter(
            /* ellipsisToken */ null,
            /* binding */ expression as any,
            /* optionalToken */ null,
            /* type */ parseTypeAnnotation(parser, context),
            /* initializer */ parseInitializer(parser, context),
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
      } else if (parser.token & SyntaxKind.IsEllipsis) {
        state = Tristate.True;
        expression = parseFormalParameter(parser, context);
      } else {
        state = Tristate.False;
        destructible |= DestructibleKind.NotDestructible;

        expressions.push(parseExpression(parser, context));

        while (consumeOpt(parser, context | Context.AllowRegExp, SyntaxKind.Comma)) {
          expressions.push(parseExpression(parser, context));
        }

        expression = createCommaOperator(expressions, curPos, parser.curPos);

        consume(parser, context, SyntaxKind.RightParen);

        parser.destructible = destructible;

        return createParenthesizedExpression(expression, curPos, parser.curPos);
      }
      expressions.push(expression);

      if (consumeOpt(parser, context, SyntaxKind.Comma)) continue;
      if (parser.token === SyntaxKind.RightParen) break;
    }

    parser.assignable = false;
  }

  consume(parser, context, SyntaxKind.RightParen);

  if (destructible & DestructibleKind.NotDestructible && destructible & DestructibleKind.MustDestruct) {
    //if (destructible & DestructibleKind.DisallowTrailing) {

    parser.onError(
      DiagnosticSource.Parser,
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
          diagnosticMap[DiagnosticCode.The_left_hand_side_of_the_arrow_is_not_destructible],
          parser.curPos,
          parser.pos
        );
      }
      return parseArrowFunction(
        parser,
        context,
        typeParameters,
        parseTypeAnnotation(parser, context),
        [expressions],
        null,
        curPos
      );
    }
  }

  expression = createCommaOperator(expressions, curPos, parser.curPos);

  if (destructible & DestructibleKind.MustDestruct) {
    parser.onError(
      DiagnosticSource.Parser,
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
      const isIdentifier = parser.token & SyntaxKind.IsIdentifier;
      let expression: any = parsePrimaryExpression(parser, context, /* inNewExpression */ false);
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
      return parseIdentifier(parser, context, DiagnosticCode.A_rest_element_cannot_have_an_initializer, true);
  }
}

function parseIdentifierOrPattern(
  parser: ParserState,
  context: Context,
  privateIdentifierDiagnosticMessage?: DiagnosticCode
): Identifier | ArrayBindingPattern | ObjectBindingPattern | DummyIdentifier | any {
  if (parser.token === SyntaxKind.LeftBracket) return parseArrayBindingPattern(parser, context);
  if (parser.token === SyntaxKind.LeftBrace) return parseObjectBindingPattern(parser, context);
  return parseIdentifier(parser, context, privateIdentifierDiagnosticMessage);
}

function parseArrayBindingPattern(parser: ParserState, context: Context): ArrayBindingPattern {
  const pos = parser.curPos;
  nextToken(parser, context);
  const bindingElementList = parseBindingElementList(parser, context);
  consume(parser, context, SyntaxKind.RightBracket);
  return createArrayBindingPattern(bindingElementList, pos, parser.curPos);
}

function parseBindingElementList(parser: ParserState, context: Context): BindingElementList {
  const pos = parser.curPos;
  const elements = [];
  let trailingComma = false;

  while (
    parser.token &
    (SyntaxKind.IsPatternStart |
      SyntaxKind.IsEllipsis |
      SyntaxKind.IsComma |
      SyntaxKind.IsIdentifier |
      SyntaxKind.IsFutureReserved)
  ) {
    elements.push(parseArrayBindingElement(parser, context));
    if ((parser.token as SyntaxKind) === SyntaxKind.RightBracket) break;
    if (consumeOpt(parser, context, SyntaxKind.Comma)) {
      if ((parser.token as SyntaxKind) === SyntaxKind.RightBracket) {
        trailingComma = true;
        break;
      }
      continue;
    }

    parser.onError(DiagnosticSource.Parser, diagnosticMap[DiagnosticCode._expected], parser.curPos, parser.pos);
  }
  return createBindingElementList(elements, trailingComma, pos, parser.curPos);
}

function parseArrayBindingElement(parser: ParserState, context: Context): OmittedExpression | ArrayBindingElement {
  if (parser.token & SyntaxKind.IsComma) return createOmittedExpression(parser.curPos, parser.curPos);
  const pos = parser.curPos;
  const ellipsisToken = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.Ellipsis);

  if (ellipsisToken && (parser.token as SyntaxKind) === SyntaxKind.Assign) {
    parser.onError(
      DiagnosticSource.Parser,
      diagnosticMap[DiagnosticCode.A_rest_element_cannot_have_an_initializer],
      parser.curPos,
      parser.pos
    );
  }

  return createArrayBindingElement(
    ellipsisToken,
    parseIdentifierOrPattern(parser, context),
    consumeOptToken(parser, context, SyntaxKind.QuestionMark),
    parseTypeAnnotation(parser, context),
    parseInitializer(parser, context),
    pos,
    parser.curPos
  );
}

function parseBindingElement(parser: ParserState, context: Context): BindingElement {
  const pos = parser.curPos;
  const ellipsis = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.Ellipsis);
  const binding = parseIdentifierOrPattern(parser, context);
  return createBindingElement(ellipsis, binding, parseInitializer(parser, context), pos, parser.curPos);
}

function parseObjectBindingPattern(parser: ParserState, context: Context): ObjectBindingPattern {
  const pos = parser.curPos;
  consume(parser, context, SyntaxKind.LeftBrace);
  const bindingPropertyList = parseBindingPropertyList(parser, context);
  consume(parser, context, SyntaxKind.RightBrace);
  return createObjectBindingPattern(bindingPropertyList, pos, parser.curPos);
}

function parseBindingPropertyList(parser: ParserState, context: Context): BindingPropertyList {
  const pos = parser.curPos;
  const properties = [];
  let trailingComma = false;
  const multiline = (parser.nodeFlags & NodeFlags.NewLine) !== 0;
  while (
    parser.token &
    (SyntaxKind.IsPatternStart | SyntaxKind.IsEllipsis | SyntaxKind.IsIdentifier | SyntaxKind.IsFutureReserved)
  ) {
    properties.push(parseBindingProperty(parser, context));
    if ((parser.token as SyntaxKind) === SyntaxKind.RightBrace) break;
    if (consumeOpt(parser, context, SyntaxKind.Comma)) {
      if ((parser.token as SyntaxKind) === SyntaxKind.RightBrace) {
        trailingComma = true;
        break;
      }
      continue;
    }

    parser.onError(DiagnosticSource.Parser, diagnosticMap[DiagnosticCode._expected], parser.curPos, parser.pos);
  }
  return createBindingPropertyList(properties as any, multiline, trailingComma, pos, parser.curPos);
}

function parseBindingProperty(parser: ParserState, context: Context): BindingProperty | SingleNameBinding {
  const pos = parser.curPos;
  const ellipsisToken = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.Ellipsis);

  if (parser.token & (SyntaxKind.IsFutureReserved | SyntaxKind.IsIdentifier)) {
    const tokenValue = parser.tokenValue;
    const tokenRaw = parser.tokenRaw;
    nextToken(parser, context);
    if (consumeOpt(parser, context, SyntaxKind.Colon)) {
      return createBindingProperty(
        ellipsisToken,
        createIdentifier(tokenValue, tokenRaw, pos, parser.curPos),
        parseBindingElement(parser, context),
        pos,
        parser.curPos
      );
    }
    if (ellipsisToken && parser.token === SyntaxKind.Assign) {
      parser.onError(
        DiagnosticSource.Parser,
        diagnosticMap[DiagnosticCode.A_rest_element_cannot_have_an_initializer],
        parser.curPos,
        parser.pos
      );
    }
    return createSingleNameBinding(
      ellipsisToken,
      createIdentifier(tokenValue, tokenRaw, pos, parser.curPos),
      parseInitializer(parser, context),
      pos,
      parser.curPos
    );
  }
  if (ellipsisToken) {
    parser.onError(
      DiagnosticSource.Parser,
      diagnosticMap[DiagnosticCode.The_binding_pattern_is_not_destructible],
      parser.curPos,
      parser.pos
    );
  }
  const key = parsePropertyName(parser, context);
  consume(parser, context, SyntaxKind.Colon);
  return createBindingProperty(ellipsisToken, key, parseBindingElement(parser, context), pos, parser.curPos);
}

function parseFunctionExpression(parser: ParserState, context: Context): FunctionExpression {
  const pos = parser.curPos;

  const asyncToken = consumeOptToken(parser, context, SyntaxKind.AsyncKeyword);

  if (asyncToken) {
    if (parser.token !== SyntaxKind.FunctionKeyword || parser.nodeFlags & NodeFlags.NewLine) {
      if ((parser.nodeFlags & NodeFlags.NewLine) === 0) {
        let expression!: ExpressionNode;
        if (parser.token & (SyntaxKind.IsIdentifier | SyntaxKind.IsIdentifier)) {
          expression = createFormalParameter(
            /* ellipsisToken */ null,
            /* binding */ parseIdentifier(parser, context),
            /* optionalToken */ null,
            /* type */ null,
            /* initializer */ null,
            NodeFlags.ExpressionNode,
            pos,
            parser.curPos
          );
          return parseArrowFunction(
            parser,
            context,
            /* typeParameters */ null,
            /* returnType */ null,
            /* params */ [expression],
            /* asyncToken */ asyncToken,
            /* pos */ pos
          );
        }
      }

      let expression: any = createIdentifier('async', 'async', pos, parser.curPos);

      if (parser.token === SyntaxKind.LeftParen) {
        expression = parseCoverCallExpressionAndAsyncArrowHead(parser, context, expression, false, pos);
      }

      if (parser.token === SyntaxKind.Arrow) {
        expression = createFormalParameter(
          /* ellipsisToken */ null,
          /* binding */ expression as any,
          /* optionalToken */ null,
          /* type */ null,
          /* initializer */ null,
          NodeFlags.ExpressionNode,
          pos,
          parser.curPos
        );
        return parseArrowFunction(
          parser,
          context,
          /* typeParameters */ null,
          /* returnType */ null,
          /* params */ [expression],
          /* asyncToken */ asyncToken,
          /* pos */ pos
        );
      }
      parser.assignable = true;

      return expression;
    }
  }
  const functionToken = consumeToken(parser, context, SyntaxKind.FunctionKeyword);
  const generatorToken = consumeOptToken(parser, context, SyntaxKind.Multiply);
  const name =
    parser.token & (SyntaxKind.IsFutureReserved | SyntaxKind.IsIdentifier) ? parseIdentifier(parser, context) : null;
  const typeParameters = parseTypeParameters(parser, context);

  context =
    ((context |
      Context.InAwaitContext |
      Context.InGeneratorContext |
      Context.Parameters |
      Context.DisallowIn |
      Context.InTypes |
      Context.InClassBody |
      Context.SuperProperty |
      Context.SuperCall) ^
      (Context.InGeneratorContext |
        Context.InAwaitContext |
        Context.InTypes |
        Context.InClassBody |
        Context.Parameters |
        Context.DisallowIn |
        Context.SuperProperty |
        Context.SuperCall)) |
    (asyncToken ? Context.InAwaitContext : Context.None) |
    (generatorToken ? Context.InGeneratorContext : Context.None);

  const formalParameterList = parseFormalParameterList(parser, context | Context.Parameters);
  const returnType = parseTypeAnnotation(parser, context);
  const contents = parseFunctionBody(
    parser,
    context | Context.NewTarget,
    /* isDecl */ false,
    /* , /* isSimpleParameterList */ (formalParameterList.flags & NodeFlags.NoneSimpleParamList) === 0,
    /* ignoreMissingOpenBrace */ false
  );

  parser.assignable = false;
  return createFunctionExpression(
    asyncToken,
    functionToken,
    generatorToken,
    name as Identifier,
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
  disallowGen: boolean,
  declareKeyword: SyntaxToken<TokenSyntaxKind> | null
): FunctionDeclaration | LabelledStatement | ExpressionStatement {
  const pos = parser.curPos;
  const asyncToken = consumeOptToken(parser, context, SyntaxKind.AsyncKeyword);

  if (asyncToken) {
    if (parser.token !== SyntaxKind.FunctionKeyword || parser.nodeFlags & NodeFlags.NewLine) {
      if ((parser.nodeFlags & NodeFlags.NewLine) === 0) {
        let expression!: ExpressionNode;
        if (parser.token & (SyntaxKind.IsIdentifier | SyntaxKind.IsIdentifier)) {
          expression = createFormalParameter(
            /* ellipsisToken */ null,
            /* binding */ parseIdentifier(parser, context),
            /* optionalToken */ null,
            /* type */ null,
            /* initializer */ null,
            NodeFlags.ExpressionNode,
            pos,
            parser.curPos
          );
          expression = parseArrowFunction(
            parser,
            context,
            /* typeParameters */ null,
            /* returnType */ null,
            /* params */ [expression],
            /* asyncToken */ asyncToken,
            /* pos */ pos
          );
          expression = parseCommaOperator(parser, context, expression, pos);
          return parseExpressionStatement(parser, context, expression, pos);
        }
      }
      let expression: any = createIdentifier('async', 'async', pos, parser.curPos);
      if (parser.token === SyntaxKind.Colon) {
        return parseLabelledStatement(parser, context, expression, /* allowFunction */ true, pos);
      }
      if (parser.token === SyntaxKind.Arrow) {
        expression = createFormalParameter(
          /* ellipsisToken */ null,
          /* binding */ expression as any,
          /* optionalToken */ null,
          /* type */ null,
          /* initializer */ null,
          NodeFlags.ExpressionNode,
          pos,
          parser.curPos
        );
        expression = parseArrowFunction(
          parser,
          context,
          /* typeParameters */ null,
          /* returnType */ null,
          /* params */ [expression],
          /* asyncToken */ asyncToken,
          /* pos */ pos
        );
      } else if (parser.token === SyntaxKind.LeftParen) {
        return parseCoverCallExpressionAndAsyncArrowHead(parser, context, expression, false, pos) as any;
      }
      parser.assignable = true;
      expression = parseExpressionRest(parser, context, expression, pos);
      return parseExpressionStatement(parser, context, expression, pos);
    }
  }

  const functionToken = consumeToken(parser, context, SyntaxKind.FunctionKeyword);
  const generatorToken = consumeOptToken(parser, context, SyntaxKind.Multiply);

  if (disallowGen && generatorToken) {
    parser.onError(
      DiagnosticSource.Parser,
      diagnosticMap[DiagnosticCode.Generators_can_only_be_declared_at_the_top_level_or_inside_a_block],
      parser.curPos,
      parser.pos
    );
  }
  const name = parseIdentifier(parser, context);
  const typeParameters = parseTypeParameters(parser, context);

  context =
    ((context |
      Context.InAwaitContext |
      Context.InGeneratorContext |
      Context.Parameters |
      Context.DisallowIn |
      Context.InTypes |
      Context.SuperProperty |
      Context.InClassBody |
      Context.SuperCall) ^
      (Context.InGeneratorContext |
        Context.InAwaitContext |
        Context.Parameters |
        Context.InTypes |
        Context.DisallowIn |
        Context.InClassBody |
        Context.SuperProperty |
        Context.SuperCall)) |
    (asyncToken ? Context.InAwaitContext : Context.None) |
    (generatorToken ? Context.InGeneratorContext : Context.None);

  const formalParameterList = parseFormalParameterList(parser, context | Context.Parameters);
  const returnType = parseTypeAnnotation(parser, context);

  const contents = parseFunctionBlockOrSemicolon(
    parser,
    context | Context.NewTarget,
    declareKeyword ? true : false,
    /* isDecl */ true,
    /* isSimpleParameterList */ (formalParameterList.flags & NodeFlags.NoneSimpleParamList) === 0,
    /* ignoreMissingOpenBrace */ false
  );

  return createFunctionDeclaration(
    declareKeyword,
    asyncToken,
    functionToken,
    generatorToken,
    name as Identifier,
    formalParameterList,
    contents,
    typeParameters,
    returnType,
    NodeFlags.IsStatement,
    pos,
    parser.curPos
  );
}

function parseFunctionBlockOrSemicolon(
  parser: ParserState,
  context: Context,
  isDeclared: boolean,
  isDecl: boolean,
  isSimpleParameterList: boolean,
  ignoreMissingOpenBrace: boolean
): FunctionBody | null {
  if (isDeclared && parser.token !== SyntaxKind.LeftBrace && canParseSemicolon(parser)) {
    parseSemicolon(parser, context);
    return null;
  }
  return parseFunctionBody(parser, context | Context.NewTarget, isDecl, isSimpleParameterList, ignoreMissingOpenBrace);
}

function parseFunctionBody(
  parser: ParserState,
  context: Context,
  isDecl: boolean,
  isSimpleParameterList: boolean,
  ignoreMissingOpenBrace: boolean
): FunctionBody {
  const pos = parser.curPos;
  if (consume(parser, context | Context.AllowRegExp, SyntaxKind.LeftBrace) || ignoreMissingOpenBrace) {
    const statementList = parseFunctionStatementList(
      parser,
      (context | Context.InSwitch | Context.InIteration | Context.AllowReturn) ^
        (Context.InSwitch | Context.InIteration),
      isSimpleParameterList
    );
    consume(parser, isDecl ? context | Context.AllowRegExp : context, SyntaxKind.RightBrace);
    return createFunctionBody(statementList, pos, parser.curPos);
  }

  parser.onError(DiagnosticSource.Parser, diagnosticMap[DiagnosticCode.Unexpected_token], parser.curPos, parser.pos);

  // Empty list
  return createFunctionBody(createFunctionStatementList([], [], false, pos, pos), pos, pos);
}
export function isValidDirective(state: ParserState): boolean {
  return (
    state.token === SyntaxKind.NumericLiteral ||
    ((state.token & (SyntaxKind.IsPropertyOrCall | SyntaxKind.IsExpressionStart)) === 0 && !!canParseSemicolon(state))
  );
}

function parseFunctionStatementList(
  parser: ParserState,
  context: Context,
  isSimpleParameterList: boolean
): FunctionStatementList {
  const pos = parser.curPos;
  const statements = [];
  const directives = [];
  const multiline = (parser.nodeFlags & NodeFlags.NewLine) !== 0;

  while (parser.token === SyntaxKind.StringLiteral) {
    const start = parser.curPos;
    const expr: any = parseStringLiteral(parser, context);

    if (isValidDirective(parser)) {
      if (expr.text === expr.rawText && expr.text === 'use strict') {
        if (!isSimpleParameterList) {
          parser.onError(
            DiagnosticSource.Parser,
            diagnosticMap[DiagnosticCode._use_strict_directive_cannot_be_used_with_non_simple_parameter_list],
            parser.curPos,
            parser.pos
          );
        }
        context |= Context.Strict;
      }
      parseSemicolon(parser, context);
      directives.push(expr);
    } else {
      statements.push(
        parseExpressionStatement(parser, context, parseExpressionRest(parser, context, expr, start), start)
      );
    }
  }

  while (
    parser.token &
    (SyntaxKind.IsStatementStart |
      SyntaxKind.IsExpressionStart |
      SyntaxKind.IsIdentifier |
      SyntaxKind.IsFutureReserved |
      SyntaxKind.IsPatternStart |
      SyntaxKind.IsBinaryOp)
  ) {
    statements.push(parseStatementListItem(parser, context));
  }
  return createFunctionStatementList(directives, statements, multiline, pos, parser.curPos);
}

function parseFormalParameterList(parser: ParserState, context: Context): FormalParameterList {
  const parameters = [];
  context = (context | 0b00000000100000000000000010000000) ^ 0b00000000100000000000000010000000;
  let nodeFlags = NodeFlags.ExpressionNode;
  const curpPos = parser.curPos;
  if (consume(parser, context | Context.AllowRegExp, SyntaxKind.LeftParen)) {
    let trailingComma = false;
    while (parser.token & 277364736) {
      const param = parseFormalParameter(parser, context);
      nodeFlags |= param.flags;
      parameters.push(param);
      if ((parser.token as SyntaxKind) === SyntaxKind.RightParen) break;
      if (consumeOpt(parser, context | Context.AllowRegExp, SyntaxKind.Comma)) {
        if ((parser.token as SyntaxKind) === SyntaxKind.RightParen) {
          trailingComma = true;
          break;
        }
        continue;
      }

      parser.onError(DiagnosticSource.Parser, diagnosticMap[DiagnosticCode._expected], parser.curPos, parser.pos);
    }

    const result = createFormalParameterList(parameters, trailingComma, nodeFlags, curpPos, parser.pos);
    consume(parser, context, SyntaxKind.RightParen);
    return result;
  }
  // Empty list
  return createFormalParameterList([], /* trailingComma*/ false, nodeFlags, curpPos, curpPos);
}

function parseFormalParameter(parser: ParserState, context: Context): FormalParameter {
  const pos = parser.curPos;
  let nodeflags = NodeFlags.ExpressionNode;
  const token = parser.token;
  if (context & Context.InAwaitContext && parser.token === SyntaxKind.AwaitKeyword) {
    parser.onError(
      DiagnosticSource.Parser,
      diagnosticMap[DiagnosticCode._Await_expression_cannot_be_used_in_function_parameters],
      parser.curPos,
      parser.pos
    );
  }

  if (context & Context.InGeneratorContext && parser.token === SyntaxKind.YieldKeyword) {
    parser.onError(
      DiagnosticSource.Parser,
      diagnosticMap[DiagnosticCode._Yield_expression_cannot_be_used_in_function_parameters],
      parser.curPos,
      parser.pos
    );
  }

  if (token === SyntaxKind.Ellipsis) {
    const ellipsisToken = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.Ellipsis);
    const binding = parseIdentifierOrPattern(parser, context);

    if (parser.token & SyntaxKind.IsComma) {
      parser.onError(
        DiagnosticSource.Parser,
        diagnosticMap[DiagnosticCode.A_rest_parameter_must_be_last_in_a_parameter_list],
        parser.curPos,
        parser.pos
      );
    }

    if (parser.token & SyntaxKind.IsComma) {
      parser.onError(
        DiagnosticSource.Parser,
        diagnosticMap[DiagnosticCode.A_rest_parameter_must_be_last_in_a_parameter_list],
        parser.curPos,
        parser.pos
      );
    }
    if ((parser.token as SyntaxKind) === SyntaxKind.Assign) {
      parser.onError(
        DiagnosticSource.Parser,
        diagnosticMap[DiagnosticCode.A_rest_element_cannot_have_an_initializer],
        parser.curPos,
        parser.pos
      );
    }
    const optionalToken = consumeOptToken(parser, context, SyntaxKind.QuestionMark);

    return createFormalParameter(
      ellipsisToken,
      binding,
      optionalToken,
      parseTypeAnnotation(parser, context),
      parseInitializer(parser, context),
      nodeflags | NodeFlags.NoneSimpleParamList,
      pos,
      parser.curPos
    );
  }
  const binding = parseIdentifierOrPattern(parser, context);
  const optionalToken = consumeOptToken(parser, context, SyntaxKind.QuestionMark);

  if (context & Context.OptionsAllowTypes && token === SyntaxKind.ThisKeyword) {
    if (optionalToken) {
      parser.onError(
        DiagnosticSource.Parser,
        diagnosticMap[DiagnosticCode.The_this_parameter_cannot_be_optional],
        parser.curPos,
        parser.pos
      );
    }
    if (parser.token !== SyntaxKind.Colon) {
      parser.onError(
        DiagnosticSource.Parser,
        diagnosticMap[DiagnosticCode.A_type_annotation_is_required_for_the_this_parameter],
        parser.curPos,
        parser.pos
      );
    }
  }

  const type = parseTypeAnnotation(parser, context);
  const initializer = parseInitializer(parser, context);

  if (binding.kind !== SyntaxKind.Identifier || initializer) nodeflags |= NodeFlags.NoneSimpleParamList;

  return createFormalParameter(
    /* ellipsisToken */ null,
    binding,
    optionalToken,
    type,
    initializer,
    nodeflags,
    pos,
    parser.curPos
  );
}

// ImportDeclaration :
//   `import` ImportClause FromClause `;`
//   `import` ModuleSpecifier `;`
function parseImportDeclaration(
  parser: ParserState,
  context: Context,
  isScript: boolean
): ImportDeclaration | ExpressionStatement {
  let moduleSpecifier = null;
  let importClause = null;
  let fromClause: StringLiteral | ExpressionNode | null = null;

  const importToken = consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.ImportKeyword);

  const pos = parser.curPos;

  if (parser.token === SyntaxKind.StringLiteral) {
    moduleSpecifier = parseStringLiteral(parser, context);
  } else if (
    parser.token & (SyntaxKind.IsFutureReserved | SyntaxKind.IsIdentifier) || // import id
    parser.token === SyntaxKind.Multiply || // import *
    parser.token === SyntaxKind.LeftBrace // import {
  ) {
    let defaultBinding: Identifier | null = null;
    let namespace: Identifier | null = null;
    let namedImports: NamedImports | null = null;
    let isCommaSeparated = true;

    if (parser.token & (SyntaxKind.IsFutureReserved | SyntaxKind.IsIdentifier)) {
      defaultBinding = parseIdentifier(parser, context) as Identifier;
      isCommaSeparated = !consumeOpt(parser, context, SyntaxKind.Comma);
    }
    if (parser.token === SyntaxKind.Multiply) {
      namespace = parseNameSpaceImport(parser, context);
    } else if (parser.token === SyntaxKind.LeftBrace) {
      namedImports = parseNamedImports(parser, context);
    } else if (!isCommaSeparated) {
      parser.onError(
        DiagnosticSource.Parser,
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
    parser.onError(DiagnosticSource.Parser, diagnosticMap[DiagnosticCode.Unexpected_token], parser.curPos, parser.pos);
  }
  if (isScript) {
    parser.onError(
      DiagnosticSource.Parser,
      diagnosticMap[DiagnosticCode.The_import_keyword_can_only_be_used_with_the_module_goal],
      parser.curPos,
      parser.pos
    );
  }
  parseSemicolon(parser, context);
  return createImportDeclaration(importToken, fromClause as any, moduleSpecifier, importClause, pos, parser.curPos);
}

function parseModuleSpecifier(parser: ParserState, context: Context): any {
  // We allow arbitrary expressions here, even though the grammar only allows string
  // literals.  We check to ensure that it is only a string literal later in the grammar
  // walker.
  const result = parseExpression(parser, context);
  return result;
}
// NameSpaceImport :
//   `*` `as` ImportedBinding
function parseNameSpaceImport(parser: ParserState, context: Context): Identifier | any {
  consume(parser, context, SyntaxKind.Multiply);
  consume(parser, context, SyntaxKind.AsKeyword);
  return parseIdentifier(parser, context);
}

// NamedImports :
//   `{` `}`
//   `{` ImportsList `}`
//   `{` ImportsList `,` `}`
function parseNamedImports(parser: ParserState, context: Context): NamedImports {
  const pos = parser.curPos;
  consume(parser, context, SyntaxKind.LeftBrace);
  const importsList = parseImportsList(parser, context);
  consume(parser, context, SyntaxKind.RightBrace);
  return createNamedImports(importsList, pos, parser.curPos);
}

function parseImportsList(parser: ParserState, context: Context): ImportsList {
  const pos = parser.curPos;
  const specifiers = [];

  while (parser.token === SyntaxKind.StringLiteral) {
    const moduleExportName = parseModuleExportName(parser, context);
    consume(parser, context, SyntaxKind.AsKeyword);
    const importedBinding = parseIdentifier(parser, context);
    specifiers.push(createImportSpecifier(moduleExportName, null, importedBinding as Identifier, pos, parser.curPos));
  }

  while (parser.token & (SyntaxKind.IsIdentifier | SyntaxKind.IsKeyword | SyntaxKind.IsFutureReserved)) {
    specifiers.push(parseImportSpecifier(parser, context));
    if (parser.token === SyntaxKind.RightBrace) break;
    consume(parser, context, SyntaxKind.Comma);
  }
  return createImportsList(specifiers, parser.nodeFlags, pos, parser.curPos);
}

// ImportSpecifier :
//   ImportedBinding
//   Identifier `as` ImportedBinding
function parseImportSpecifier(parser: ParserState, context: Context): ImportSpecifier {
  const pos = parser.curPos;
  const Identifier = parseIdentifier(parser, context);
  if (consumeOpt(parser, context, SyntaxKind.AsKeyword)) {
    return createImportSpecifier(
      null,
      Identifier as Identifier,
      parseIdentifier(parser, context) as Identifier,
      pos,
      parser.curPos
    );
  }
  Identifier.flags = NodeFlags.ChildLess;
  return createImportSpecifier(null, null, Identifier as Identifier, pos, parser.curPos);
}

// ModulemoduleExportName : StringLiteral
function parseModuleExportName(parser: ParserState, context: Context): StringLiteral {
  return parseStringLiteral(parser, context);
}

// FromClause :
//   `from` ModuleSpecifier
function parseFromClause(parser: ParserState, context: Context): StringLiteral | ExpressionNode {
  consume(parser, context, SyntaxKind.FromKeyword);
  if (parser.token === SyntaxKind.StringLiteral) {
    return parseStringLiteral(parser, context);
  }
  // We allow arbitrary expressions here, even though the grammar only allows string
  // literals. We check to ensure that it is only a string literal later in the grammar
  // check pass.
  return parseExpression(parser, context);
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
  context: Context
): ExportDeclaration | ExportDefault | LabelledStatement | ExpressionStatement {
  const pos = parser.curPos;
  const exportToken = consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.ExportKeyword);
  let declaration: any = null;
  let fromClause: StringLiteral | ExpressionNode | null = null;
  let namedExports: NamedExports | null = null;
  let exportFromClause: any | null = null;

  switch (parser.token) {
    case SyntaxKind.DefaultKeyword:
      return parseExportDefault(parser, context, exportToken, pos);
    case SyntaxKind.LetKeyword:
      break;
    case SyntaxKind.ConstKeyword: {
      break;
    }
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
      declaration = parseClassDeclaration(parser, context, /* declareKeyword */ null);
      break;
    case SyntaxKind.FunctionKeyword:
      declaration = parseFunctionDeclaration(parser, context, /* disallowGen*/ true, /* declareKeyword */ null);
      break;
    case SyntaxKind.VarKeyword:
      declaration = parseVariableStatement(parser, context, /* declareKeyword */ null);
      break;
    case SyntaxKind.AsyncKeyword:
    default:
      parser.onError(
        DiagnosticSource.Parser,
        diagnosticMap[DiagnosticCode.Unexpected_token],
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
    pos,
    parser.curPos
  );
}

// ExportFromClause :
//   `*`
//   `*` as Identifier
//   `*` as ModulemoduleExportName
function parseExportFromClause(parser: ParserState, context: Context, pos: number): ExportFromClause {
  nextToken(parser, context);
  let moduleExportName: StringLiteral | null = null;
  let namedBinding: Identifier | DummyIdentifier | null = null;
  if (consumeOpt(parser, context, SyntaxKind.AsKeyword)) {
    if (parser.token === SyntaxKind.StringLiteral) {
      moduleExportName = parseModuleExportName(parser, context);
    } else {
      namedBinding = parseIdentifier(parser, context);
    }
  }
  return createExportFromClause(namedBinding as Identifier, moduleExportName, pos, parser.curPos);
}

// NamedExports :
//   `{` `}`
//   `{` ExportsList `}`
//   `{` ExportsList `,` `}`
function parseNamedExports(parser: ParserState, context: Context): NamedExports {
  const pos = parser.curPos;
  consume(parser, context, SyntaxKind.LeftBrace);
  const exportsList = parseExportsList(parser, context);
  consume(parser, context, SyntaxKind.RightBrace);
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
      : (parseIdentifier(parser, context) as Identifier);
  let exportedName = null;
  if (consumeOpt(parser, context, SyntaxKind.AsKeyword)) {
    if (parser.token === SyntaxKind.StringLiteral) {
      moduleExportName = parseModuleExportName(parser, context);
    } else {
      exportedName = parseIdentifier(parser, context) as Identifier;
    }
  }
  return createExportSpecifier(localName, moduleExportName, exportedName, pos, parser.curPos);
}

// ExportDefault :
//   `export` `default` HoistableDeclaration [EXTENDED]
//   `export` `default` ClassDeclaration  [EXTENDED]
//   `export` `default` AssignmentExpression `;`  [EXTENDED]
function parseExportDefault(
  parser: ParserState,
  context: Context,
  exportToken: SyntaxToken<TokenSyntaxKind>,
  pos: number
): ExportDefault | ExpressionStatement | LabelledStatement {
  const defaultToken = consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.DefaultKeyword);

  let declaration!: StatementNode | ExpressionNode | any;

  switch (parser.token) {
    case SyntaxKind.FunctionKeyword:
      declaration = parseFunctionDeclaration(parser, context, /* disallowGen*/ false, /* declareKeyword */ null);
      break;
    case SyntaxKind.Decorator:
    case SyntaxKind.ClassKeyword:
      declaration = parseClassDeclaration(parser, context, /* declareKeyword */ null);
      break;
    case SyntaxKind.AsyncKeyword:
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
  const type = parsePrefixType(parser, context);
  if (parser.token === SyntaxKind.BitwiseAnd) {
    const pos = parser.curPos;
    const types = [type];
    while (consumeOpt(parser, context, SyntaxKind.BitwiseAnd)) {
      types.push(parsePrefixType(parser, context));
    }
    return createIntersectionType(types, pos, parser.curPos);
  }
  return type;
}

function parsePrefixType(parser: ParserState, context: Context): TypeNode {
  const pos = parser.curPos;
  if (consumeOpt(parser, context, SyntaxKind.QuestionMark)) {
    return createNullableType(parsePrefixType(parser, context), pos, parser.curPos);
  }
  return parsePostfixType(parser, context);
}

function parsePostfixType(parser: ParserState, context: Context): TypeNode {
  let type = parsePrimaryType(parser, context);
  while ((parser.nodeFlags & NodeFlags.NewLine) === 0 && consumeOpt(parser, context, SyntaxKind.LeftBracket)) {
    const pos = parser.curPos;
    consume(parser, context, SyntaxKind.RightBracket);
    type = createArrayType(type, pos, parser.curPos);
  }
  return type;
}

function parsePrimaryType(parser: ParserState, context: Context): TypeNode | SyntaxToken<TokenSyntaxKind> {
  switch (parser.token) {
    case SyntaxKind.Multiply:
    case SyntaxKind.BigintKeyword:
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
      return parseObjectType(parser, context, /* allowStatic */ false);
    case SyntaxKind.LeftBracket:
      return parseTupleType(parser, context);
    case SyntaxKind.LessThan:
      return parseFunctionType(parser, context);
    case SyntaxKind.LeftParen:
      return parseFunctionTypeOrParen(parser, context);
    case SyntaxKind.TypeofKeyword:
      return parseTypeofType(parser, context);
    case SyntaxKind.QuestionMark:
    default:
      return parseGenericType(parser, context);
  }
}

function parseTypeofType(parser: ParserState, context: Context): TypeofType {
  const pos = parser.curPos;
  nextToken(parser, context);
  return createTypeofType(parsePrimaryType(parser, context), pos, parser.curPos);
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
  const multiline = (parser.nodeFlags & NodeFlags.NewLine) !== 0;
  const types: TypeNode[] = [];
  while (
    parser.token &
    (SyntaxKind.IsLessThanOrLeftParen | SyntaxKind.IsStartOfType | SyntaxKind.IsIdentifier | SyntaxKind.IsPatternStart)
  ) {
    types.push(parseType(parser, context));
    if (parser.token === SyntaxKind.RightBracket) break;
    if (consumeOpt(parser, context, SyntaxKind.Comma)) {
      if ((parser.token as SyntaxKind) === SyntaxKind.RightBracket) {
        trailingComma = true;
        break;
      }
      continue;
    }
    parser.onError(DiagnosticSource.Parser, diagnosticMap[DiagnosticCode._expected], parser.curPos, parser.pos);
  }
  consume(parser, context, SyntaxKind.RightBracket);
  return createTupleType(types, trailingComma, multiline, pos, parser.curPos);
}

function parseFunctionType(parser: ParserState, context: Context): FunctionType {
  const pos = parser.curPos;
  const typeParameters = parseTypeParameters(parser, context);
  consume(parser, context, SyntaxKind.LeftParen);
  const params = parseFunctionTypeParameters(parser, context);
  consume(parser, context, SyntaxKind.RightParen);
  consume(parser, context, SyntaxKind.Colon);
  const returnType = parseType(parser, context);
  return createFunctionType(params, returnType, typeParameters, pos, parser.curPos);
}

function parseFunctionTypeParameterssRest(parser: ParserState, context: Context, type: FunctionTypeParameter): any {
  const params: any = [type];
  while (parser.token & (SyntaxKind.IsEllipsis | SyntaxKind.IsIdentifier)) {
    params.push(parseFunctionTypeParameter(parser, context));
    if ((parser.token as SyntaxKind) !== SyntaxKind.LeftParen) {
      consume(parser, context, SyntaxKind.Comma);
    }
  }

  return params;
}

function parseFunctionTypeParameters(parser: ParserState, context: Context): FunctionTypeParameterList {
  const pos = parser.curPos;
  const functionTypeParameterList: FunctionTypeParameter[] = [];
  let trailingComma = false;
  while (parser.token & (SyntaxKind.IsEllipsis | SyntaxKind.IsIdentifier)) {
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
  const ellipsisToken = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.Ellipsis);
  const name = parseIdentifier(parser, context);
  const optional = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.QuestionMark);
  consume(parser, context, SyntaxKind.Colon);
  const type = parseUnionType(parser, context);
  return createFunctionTypeParameters(ellipsisToken, name as Identifier, optional, type, pos, parser.curPos);
}

function parseFunctionTypeOrParen(parser: ParserState, context: Context): any {
  const pos = parser.curPos;
  let returnType = null;
  nextToken(parser, context);
  let isGroupedType = false;
  // Check to see if this is actually a grouped type
  if ((parser.token as SyntaxKind) !== SyntaxKind.RightParen && (parser.token as SyntaxKind) !== SyntaxKind.Ellipsis) {
    if (parser.token & SyntaxKind.IsIdentifier) {
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
  }
  // A `,` or a `) =>` means thi
  if (isGroupedType) {
    let type = parseUnionType(parser, context);

    if (
      !(
        parser.token === SyntaxKind.Comma ||
        (parser.token === SyntaxKind.RightParen &&
          speculate(
            parser,
            context,
            function () {
              nextToken(parser, context);
              return parser.token === SyntaxKind.Arrow;
            },
            /* rollback */ true
          ))
      )
    ) {
      consume(parser, context, SyntaxKind.RightParen);
      return type;
    } else {
      consumeOpt(parser, context, SyntaxKind.Comma);
    }

    consume(parser, context, SyntaxKind.RightParen);

    consume(parser, context, SyntaxKind.Arrow);

    returnType = parseType(parser, context);

    return createFunctionType([type], returnType, /* typeParameters */ null, pos, parser.curPos);
  }

  const params = parseFunctionTypeParameters(parser, context);

  consume(parser, context, SyntaxKind.RightParen);

  consume(parser, context, SyntaxKind.Arrow);

  returnType = parseType(parser, context);

  return createFunctionType(params, returnType, /* typeParameters */ null, pos, parser.curPos);
}

function parseGenericType(parser: ParserState, context: Context): GenericType {
  const pos = parser.curPos;
  let entity = parseIdentifier(parser, context) as any;
  while (consumeOpt(parser, context, SyntaxKind.Period)) {
    entity = parseQualifiedType(parser, context, entity);
  }
  const typeParameters = parseTypeParameters(parser, context);
  return createGenericType(entity, typeParameters, pos, parser.curPos);
}

function parseQualifiedType(parser: ParserState, context: Context, entity: Identifier | QualifiedType): QualifiedType {
  const curPos = parser.curPos;
  return createQualifiedType(entity, parseIdentifier(parser, context) as Identifier, curPos, parser.curPos);
}

function parseTypeParameter(parser: ParserState, context: Context): TypeParameter {
  const pos = parser.curPos;
  const types: TypeNode[] = [];
  consume(parser, context, SyntaxKind.LessThan);

  while (
    parser.token &
    (SyntaxKind.IsLessThanOrLeftParen |
      SyntaxKind.IsExpressionStart |
      SyntaxKind.IsStartOfType |
      SyntaxKind.IsIdentifier |
      SyntaxKind.IsPatternStart)
  ) {
    types.push(parseType(parser, context));
    if ((parser.token as SyntaxKind) !== SyntaxKind.GreaterThan) {
      consume(parser, context, SyntaxKind.Comma);
    }
  }
  consume(parser, context, SyntaxKind.GreaterThan);
  return createTypeParameter(types, pos, parser.curPos);
}

function parseVariableStatement(
  parser: ParserState,
  context: Context,
  declareKeyword: SyntaxToken<TokenSyntaxKind> | null
): VariableStatement {
  const pos = parser.curPos;
  const varToken = consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.VarKeyword);
  const declarationList = parseVariableDeclarationList(parser, context, /* inForStatement */ false);
  parseSemicolon(parser, context);
  return createVariableStatement(
    declareKeyword,
    varToken,
    declarationList,
    declareKeyword ? NodeFlags.IsStatement | NodeFlags.Declared : NodeFlags.IsStatement,
    pos,
    parser.curPos
  );
}

function parseVariableDeclarationList(
  parser: ParserState,
  context: Context,
  inForStatement: boolean
): VariableDeclarationList {
  const pos = parser.curPos;
  const declarations = [];

  while (parser.token & (SyntaxKind.IsPatternStart | SyntaxKind.IsFutureReserved | SyntaxKind.IsIdentifier)) {
    declarations.push(parseVariableDeclaration(parser, context, inForStatement));
    // If we can consume a semicolon (either explicitly, or with ASI), then consider us done
    // with parsing the list of variable declarators.
    //
    // Same when we're parsing the variable declarator of a 'for-in' statement, we
    // are done if we see an 'in' keyword in front of us. Same with for-of
    if (parser.token & (SyntaxKind.Smi | SyntaxKind.IsInOrOf) || parser.nodeFlags & NodeFlags.NewLine) break;
    if (consumeOpt(parser, context, SyntaxKind.Comma)) {
      continue;
    }

    parser.onError(DiagnosticSource.Parser, diagnosticMap[DiagnosticCode._expected], parser.curPos, parser.pos);
  }
  if (inForStatement && declarations.length > 1 && parser.token & SyntaxKind.IsInOrOf) {
    parser.onError(
      DiagnosticSource.Parser,
      diagnosticMap[DiagnosticCode.Only_a_single_variable_declaration_is_allowed_in_a_for_of_statement],
      parser.curPos,
      parser.pos
    );
  }

  return createVariableDeclarationList(declarations, pos, parser.curPos);
}

function parseInitializer(parser: ParserState, context: Context): ExpressionNode | null {
  if (consumeOpt(parser, context | Context.AllowRegExp, SyntaxKind.Assign)) {
    const expression = parseExpression(parser, context);
    if (context & Context.InAwaitContext && parser.token === SyntaxKind.AwaitKeyword) {
      parser.onError(
        DiagnosticSource.Parser,
        diagnosticMap[DiagnosticCode._await_expressions_cannot_be_used_in_a_parameter_initializer],
        parser.curPos,
        parser.pos
      );
    }
    return expression;
  }
  return null;
}

function parseVariableDeclaration(parser: ParserState, context: Context, inForStatement: boolean): VariableDeclaration {
  const pos = parser.curPos;
  const requireInitializer = !inForStatement && parser.token & SyntaxKind.IsPatternStart;
  const binding = parseIdentifierOrPattern(parser, context);
  const optionalToken = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.QuestionMark);
  const type = parseTypeAnnotation(parser, context);
  if (requireInitializer && parser.token !== SyntaxKind.Assign) {
    parser.onError(
      DiagnosticSource.Parser,
      diagnosticMap[DiagnosticCode.Missing_initializer_in_destructuring_declaration],
      parser.curPos,
      parser.pos
    );
  }
  const initializer = parseInitializer(parser, context);
  return createVariableDeclaration(binding, optionalToken, type, initializer, pos, parser.curPos);
}

function parseDeclareAsIdentifierOrDeclareStatement(
  parser: ParserState,
  context: Context
): TypeAlias | LabelledStatement | ExpressionStatement | StatementNode {
  const pos = parser.curPos;
  const expr = parseIdentifier(parser, context);
  if (context & Context.OptionsAllowTypes && parser.token & SyntaxKind.IsStatementStart) {
    const declareKeyword = createToken(SyntaxKind.DeclareKeyword, expr.start, expr.end);
    switch (parser.token) {
      case SyntaxKind.VarKeyword:
        return parseVariableStatement(parser, context, declareKeyword);
      case SyntaxKind.TypeKeyword:
        return parseTypeAsIdentifierOrTypeAlias(
          parser,
          context,
          /* opaqueToken */ null,
          /* declareKeyword */ declareKeyword
        );
      case SyntaxKind.OpaqueKeyword:
        return parseOpaqueType(parser, context, /* declareKeyword */ declareKeyword);
      case SyntaxKind.FunctionKeyword:
        return parseFunctionDeclaration(parser, context, /* disallowGen */ false, /* declareKeyword */ declareKeyword);
      case SyntaxKind.ClassKeyword:
        return parseClassDeclaration(parser, context, /* declareKeyword */ declareKeyword);
    }
  }
  parser.assignable = true;
  if (parser.token === SyntaxKind.Colon) {
    return parseLabelledStatement(parser, context, expr as Identifier, /* allowFunction */ true, pos);
  }
  if (parser.token === SyntaxKind.Arrow) {
    return parseArrowFunction(
      parser,
      context,
      /*typeParameters */ null,
      /* returnType */ null,
      /* params */ createIdentifier('declare', 'declare', pos, parser.curPos),
      /* asyncToken */ null,
      pos
    );
  }
  return parseExpressionStatement(parser, context, parseExpressionRest(parser, context, expr, pos), pos);
}

function parseTypeAsIdentifierOrTypeAlias(
  parser: ParserState,
  context: Context,
  opaqueKeyword: SyntaxToken<TokenSyntaxKind> | null,
  declareKeyword: SyntaxToken<TokenSyntaxKind> | null
): TypeAlias | LabelledStatement | ExpressionStatement {
  const pos = parser.curPos;
  let expr = parseIdentifier(parser, context);
  if (context & Context.OptionsAllowTypes && parser.token & SyntaxKind.IsIdentifier) {
    expr = parseIdentifier(parser, context);
    const opaqueType = opaqueKeyword ? parseTypeAnnotation(parser, context) : null;
    const typeParameters = parseTypeParameters(parser, context);
    let type = null;
    if (consumeOpt(parser, context | Context.InTypes, SyntaxKind.Assign)) {
      type = parseType(parser, context);
    } else if (!declareKeyword) {
      parser.onError(
        DiagnosticSource.Parser,
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
      opaqueKeyword,
      createToken(SyntaxKind.TypeKeyword, opaqueKeyword ? opaqueKeyword.start : pos, expr.end),
      expr as Identifier,
      opaqueType,
      typeParameters,
      type as any,
      declareKeyword ? NodeFlags.Declared | NodeFlags.IsStatement : NodeFlags.IsStatement,
      pos,
      parser.curPos
    );
  }
  parser.assignable = true;
  if (parser.token === SyntaxKind.Colon) {
    return parseLabelledStatement(parser, context, expr as Identifier, /* allowFunction */ true, pos);
  }
  if (parser.token === SyntaxKind.Arrow) {
    return parseArrowFunction(
      parser,
      context,
      /*typeParameters */ null,
      /* returnType */ null,
      /* params */ createIdentifier('type', 'type', pos, parser.curPos),
      /* asyncToken */ null,
      pos
    );
  }
  return parseExpressionStatement(parser, context, parseExpressionRest(parser, context, expr, pos), pos);
}

function parseLetAsIdentifierOrLexicalDeclaration(
  parser: ParserState,
  context: Context
): LexicalDeclaration | LabelledStatement | ExpressionStatement {
  const pos = parser.curPos;
  const expr = parseIdentifier(parser, context);
  if (parser.token & (SyntaxKind.IsPatternStart | SyntaxKind.IsIdentifier)) {
    const declarationList = parseBindingList(parser, context, /* isConst */ false, /* isForStatement */ false);
    parseSemicolon(parser, context);
    return createLexicalDeclaration(
      createToken(SyntaxKind.LetKeyword, pos, expr.end),
      declarationList,
      pos,
      parser.curPos
    );
  }
  if (context & Context.Strict) {
    parser.onError(
      DiagnosticSource.Parser,
      diagnosticMap[DiagnosticCode.Identifier_expected_let_is_a_reserved_word_in_strict_mode],
      parser.curPos,
      parser.pos
    );
  }
  parser.assignable = true;
  if (parser.token === SyntaxKind.Colon) {
    return parseLabelledStatement(parser, context, expr as Identifier, /* allowFunction */ true, pos);
  }
  if (parser.token === SyntaxKind.Arrow) {
    return parseArrowFunction(
      parser,
      context,
      /*typeParameters */ null,
      /* returnType */ null,
      /* params */ createIdentifier('let', 'let', pos, parser.curPos),
      /* asyncToken */ null,
      pos
    );
  }
  return parseExpressionStatement(parser, context, parseExpressionRest(parser, context, expr, pos), pos);
}

function parseLexicalDeclaration(parser: ParserState, context: Context, isConst: boolean): LexicalDeclaration {
  const pos = parser.curPos;
  const lexicalToken = consumeToken(parser, context, isConst ? SyntaxKind.ConstKeyword : SyntaxKind.LetKeyword);
  const declarationList = parseBindingList(parser, context, isConst, /* inForStatement */ false);
  parseSemicolon(parser, context);
  return createLexicalDeclaration(lexicalToken, declarationList, pos, parser.curPos);
}

function parseBindingList(
  parser: ParserState,
  context: Context,
  isConst: boolean,
  inForStatement: boolean
): BindingList {
  const pos = parser.curPos;
  const bindinglist = [];

  while (parser.token & (SyntaxKind.IsPatternStart | SyntaxKind.IsFutureReserved | SyntaxKind.IsIdentifier)) {
    bindinglist.push(parseLexicalBinding(parser, context, isConst, inForStatement));
    // If we can consume a semicolon (either explicitly, or with ASI), then consider us done
    // with parsing the list of lexical bindings.
    //
    // Same when we're parsing the lexical binding of a 'for-in' statement, we
    // are done if we see an 'in' keyword in front of us. Same with for-of
    if (parser.token & (SyntaxKind.Smi | SyntaxKind.IsInOrOf) || parser.nodeFlags & NodeFlags.NewLine) break;

    if (consumeOpt(parser, context, SyntaxKind.Comma)) {
      continue;
    }

    parser.onError(DiagnosticSource.Parser, diagnosticMap[DiagnosticCode._expected], parser.curPos, parser.pos);
  }

  if (inForStatement && bindinglist.length > 1 && parser.token & SyntaxKind.IsInOrOf) {
    parser.onError(
      DiagnosticSource.Parser,
      diagnosticMap[DiagnosticCode.Invalid_left_hand_side_Must_have_a_single_binding_in_a_for_of_statement],
      parser.curPos,
      parser.pos
    );
  }
  return createBindingList(bindinglist, isConst, pos, parser.curPos);
}

function parseLexicalBinding(
  parser: ParserState,
  context: Context,
  isConst: boolean,
  inForStatement: boolean
): LexicalBinding {
  const pos = parser.curPos;

  const requireInitializer = !inForStatement && (isConst || parser.token & SyntaxKind.IsPatternStart);

  if (isConst && parser.token === SyntaxKind.LetKeyword) {
    parser.onError(
      DiagnosticSource.Parser,
      diagnosticMap[DiagnosticCode.A_lexical_declaration_can_t_define_a_let_binding],
      parser.curPos,
      parser.pos
    );
  }

  const binding = parseIdentifierOrPattern(parser, context);
  const optionalToken = consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.QuestionMark);
  const type = parseTypeAnnotation(parser, context);

  if (requireInitializer && parser.token !== SyntaxKind.Assign) {
    parser.onError(
      DiagnosticSource.Parser,
      isConst
        ? diagnosticMap[DiagnosticCode.Missing_initializer_in_const_declaration]
        : diagnosticMap[DiagnosticCode.Missing_initializer_in_destructuring_declaration],
      parser.curPos,
      parser.pos
    );
  }
  if (inForStatement && parser.token & SyntaxKind.IsInOrOf && parser.token === SyntaxKind.Assign) {
    parser.onError(
      DiagnosticSource.Parser,
      diagnosticMap[DiagnosticCode.The_lexical_declaration_of_a_for_in_or_of_statement_cannot_have_an_initializer],
      parser.curPos,
      parser.pos
    );
  }

  const initializer = parseInitializer(parser, context);

  return createLexicalBinding(binding, optionalToken, type, initializer, pos, parser.curPos);
}

function parseObjectType(parser: ParserState, context: Context, allowStatic: boolean): ObjectType {
  const pos = parser.curPos;
  consume(parser, context, SyntaxKind.LeftBrace);

  const properties = [];
  const indexers = [];
  const callProperties = [];
  const internalSlots = [];

  while ((parser.token as SyntaxKind) !== SyntaxKind.RightBrace) {
    const innerPos = parser.curPos;
    const staticKeyword =
      allowStatic && consumeOptToken(parser, context | Context.AllowRegExp, SyntaxKind.StaticKeyword);

    if (allowStatic && consumeOpt(parser, context, SyntaxKind.StaticKeyword)) {
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
        indexers.push(parseObjectTypeIndexer(parser, context, /* isStatic */ staticKeyword, innerPos));
      }
    } else {
      if (consumeOpt(parser, context, SyntaxKind.LeftBracket)) {
        if (parser.token === SyntaxKind.LeftBracket) {
          internalSlots.push(parseObjectTypeInternalSlot(parser, context, staticKeyword, innerPos));
        } else {
          indexers.push(parseObjectTypeIndexer(parser, context, staticKeyword, innerPos));
        }
      } else if (parser.token & SyntaxKind.IsLessThanOrLeftParen) {
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
  consume(parser, context, SyntaxKind.RightBrace);
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

    key = parseIdentifier(parser, context);

    if (token === SyntaxKind.GetKeyword) {
      return createObjectTypeProperty(
        /* key */ parseIdentifier(parser, context),
        /* value */ parseFunctionType(parser, context),
        /* optionalToken */ null,
        /* staticKeyword */ null,
        pos,
        parser.curPos
      );
    }
    if (token === SyntaxKind.SetKeyword) {
      return createObjectTypeProperty(
        /* key */ parseIdentifier(parser, context),
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
  const typeParameters = parseTypeParameters(parser, context);
  consume(parser, context, SyntaxKind.LeftParen);
  const params = parseFunctionTypeParameters(parser, context);
  consume(parser, context, SyntaxKind.RightParen);
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
  consume(parser, context, SyntaxKind.RightBracket);
  consume(parser, context, SyntaxKind.RightBracket);
  if (parser.token & SyntaxKind.IsLessThanOrLeftParen) {
    const typeParameters = parseTypeParameters(parser, context);
    consume(parser, context, SyntaxKind.LeftParen);
    const params = parseFunctionTypeParameters(parser, context);
    consume(parser, context, SyntaxKind.RightParen);
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
    key = parseUnionType(parser, context);
  }

  consume(parser, context, SyntaxKind.RightBracket);
  consume(parser, context, SyntaxKind.Colon);
  const value = parseType(parser, context);
  parseSemicolon(parser, context);
  return createObjectTypeIndexer(name, key, value, staticKeyword, pos, parser.curPos);
}

function parseComputedPropertyName(parser: ParserState, context: Context): ComputedPropertyName {
  const pos = parser.curPos;
  consume(parser, context | Context.AllowRegExp, SyntaxKind.LeftBracket);
  const expression = parseExpression(
    parser,
    (context | 0b00000000100000000000000010000000) ^ 0b00000000100000000000000010000000
  );
  consume(parser, context, SyntaxKind.RightBracket);
  return createComputedPropertyName(expression, pos, parser.curPos);
}

function parseYieldIdentifierOrExpression(parser: ParserState, context: Context): YieldExpression {
  const pos = parser.curPos;

  if (context & Context.InGeneratorContext) {
    // YieldExpression[In] :
    //      yield
    //      yield [no LineTerminator here] [Lexical goal InputElementRegExp]AssignmentExpression[?In, Yield]
    //      yield [no LineTerminator here] * [Lexical goal InputElementRegExp]AssignmentExpression[?In, Yield]
    const yieldKeyword = consumeToken(parser, context, SyntaxKind.YieldKeyword);
    if (context & Context.Parameters) {
      parser.onError(
        DiagnosticSource.Parser,
        diagnosticMap[DiagnosticCode._Yield_expression_cannot_be_used_in_function_parameters],
        parser.curPos,
        parser.pos
      );
    }
    const token = parser.token;
    parser.assignable = false;
    if (token === SyntaxKind.Multiply) {
      // A `\n` after `yield` is illegal for `yield *`, and '*' should therefor be parsed as
      //an binary expr operator in error recovery mode
      if (parser.nodeFlags & NodeFlags.NewLine) {
        parser.onError(
          DiagnosticSource.Parser,
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
      /* expression */ token & SyntaxKind.IsExpressionStart ? parseExpression(parser, context) : null,
      pos,
      parser.curPos
    );
  }
  const expression = parseIdentifier(parser, context);
  return parser.token === SyntaxKind.Arrow
    ? parseArrowFunction(
        parser,
        context,
        /*typeParameters */ null,
        /* returnType */ null,
        /* params */ expression,
        /* asyncToken */ null,
        pos
      )
    : expression;
}

export function parseAwaitExpression(parser: ParserState, context: Context, inNewExpression: boolean): AwaitExpression {
  const pos = parser.curPos;
  const awaitKeyword = consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.AwaitKeyword);
  const expression = parseLeftHandSideExpression(parser, context);
  if ((parser.token as SyntaxKind) === SyntaxKind.Exponentiate) {
    // Unary expressions as the left operand of an exponentation expression must be disambiguated with parentheses
    parser.onError(
      DiagnosticSource.Parser,
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
  let expression!: ExpressionNode;
  if (parser.token === SyntaxKind.RightParen) {
    parser.onError(
      DiagnosticSource.Parser,
      diagnosticMap[DiagnosticCode.Import_Call_should_take_at_least_one_argument],
      parser.curPos,
      parser.pos
    );
    expression = createDummyIdentifier(pos, parser.curPos);
  } else {
    expression = parseExpression(parser, context);
  }

  consume(parser, context, SyntaxKind.RightParen);
  expression = createImportCall(importKeyword, expression, pos, parser.curPos);
  expression = parseExpressionRest(parser, context, expression, pos);
  return parseExpressionStatement(parser, context, expression, pos);
}

// ImportMeta:
//   import.meta
export function parseImportMeta(
  parser: ParserState,
  context: Context,
  importKeyword: SyntaxToken<TokenSyntaxKind>
): ExpressionStatement {
  const pos = parser.curPos;
  nextToken(parser, context);
  nextToken(parser, context);
  let expression: any = createImportMeta(importKeyword, pos, parser.curPos);
  parser.assignable = false;
  expression = parseExpressionRest(parser, context, expression, pos);
  return parseExpressionStatement(parser, context, expression, pos);
}

function parseTemplateExpression(parser: ParserState, context: Context, isTaggedTemplate: boolean): TemplateExpression {
  const pos = parser.curPos;
  const nodeFlags = parser.nodeFlags;
  const templateSpans = [parseTemplateSpan(parser, context)];
  while (scanTemplateTail(parser, context, isTaggedTemplate) === SyntaxKind.TemplateCont) {
    templateSpans.push(parseTemplateSpan(parser, context));
  }
  return createTemplateExpression(
    templateSpans,
    parseTemplateTail(parser, context),
    nodeFlags | NodeFlags.ExpressionNode,
    pos,
    parser.curPos
  );
}

function parseTemplateSpan(parser: ParserState, context: Context): TemplateSpan {
  const { curPos, tokenValue, tokenRaw } = parser;
  consume(parser, context | Context.AllowRegExp, SyntaxKind.TemplateCont);
  const expression = parseExpressions(
    parser,
    (context | 0b00000000100000000000000010000000) ^ 0b00000000100000000000000010000000
  );
  return createTemplateSpan(tokenRaw, tokenValue, expression, curPos, parser.curPos);
}

function parseTemplateTail(parser: ParserState, context: Context): TemplateTail {
  const { curPos, tokenValue, tokenRaw } = parser;
  consume(parser, context | Context.AllowRegExp, SyntaxKind.TemplateTail);
  return createTemplateTail(tokenRaw, tokenValue, curPos, parser.curPos);
}

function parseClassDeclaration(
  parser: ParserState,
  context: Context,
  declareKeyword: SyntaxToken<TokenSyntaxKind> | null
): ClassDeclaration {
  const { curPos } = parser;
  const decorator = parseDecorators(parser, context);
  const classToken = consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.ClassKeyword);

  context = (context | Context.InConstructor | Context.Strict) ^ Context.InConstructor;

  const name =
    parser.token & (SyntaxKind.IsIdentifier | SyntaxKind.IsFutureReserved) && parser.token !== SyntaxKind.ExtendsKeyword
      ? parseIdentifier(parser, context)
      : null;

  const typeParameters = parseTypeParameters(parser, context);

  let inheritedContext = context;

  let classHeritage: ExpressionNode | null = null;

  if (parser.token === SyntaxKind.ExtendsKeyword) {
    classHeritage = parseClassHeritage(parser, context);
    inheritedContext |= Context.SuperCall;
  } else {
    inheritedContext = (inheritedContext | Context.SuperCall) ^ Context.SuperCall;
  }

  const classElementList = consume(parser, context, SyntaxKind.LeftBrace)
    ? parseClassElementList(
        parser,
        inheritedContext | Context.InClassBody,
        context | Context.InClassBody,
        /* isDeclared */ declareKeyword ? true : false,
        /* isDecl */ true
      )
    : // Empty list
      createClassElementList([], curPos, curPos);
  parser.assignable = false;

  return createClassDeclaration(
    declareKeyword,
    decorator,
    classToken,
    name as Identifier,
    typeParameters,
    classHeritage,
    classElementList,
    curPos,
    parser.curPos
  );
}

function parseClassExpression(parser: ParserState, context: Context): ClassExpression {
  const curPos = parser.curPos;
  const decorator = parseDecorators(parser, context);
  const classToken = consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.ClassKeyword);

  const name =
    parser.token & (SyntaxKind.IsIdentifier | SyntaxKind.IsFutureReserved) && parser.token !== SyntaxKind.ExtendsKeyword
      ? parseIdentifier(parser, context)
      : null;

  const typeParameters = parseTypeParameters(parser, context);

  let inheritedContext = context;

  let classHeritage: ExpressionNode | null = null;

  if (parser.token === SyntaxKind.ExtendsKeyword) {
    classHeritage = parseClassHeritage(parser, context);
    inheritedContext |= Context.SuperCall;
  } else {
    inheritedContext = (inheritedContext | Context.SuperCall) ^ Context.SuperCall;
  }

  const classElementList = consume(parser, context, SyntaxKind.LeftBrace)
    ? parseClassElementList(
        parser,
        inheritedContext | Context.InClassBody,
        context | Context.InClassBody,
        /* isDeclared */ false,
        /* isDecl */ true
      )
    : // Empty list
      createClassElementList([], curPos, curPos);
  parser.assignable = false;

  return createClassExpression(
    decorator,
    classToken,
    name as Identifier,
    typeParameters,
    classHeritage,
    classElementList,
    curPos,
    parser.curPos
  );
}

function parseClassHeritage(parser: ParserState, context: Context): ClassHeritage | null {
  const extendToken = consumeToken(parser, context | Context.AllowRegExp, SyntaxKind.ExtendsKeyword);
  const curPos = parser.curPos;
  return createClassHeritage(
    extendToken,
    parseLeftHandSideExpression(parser, context),
    (parser.token as SyntaxKind) === SyntaxKind.LessThan ? parseTypeParameter(parser, context) : null,
    curPos,
    parser.curPos
  );
}

function parseClassElementList(
  parser: ParserState,
  context: Context,
  inheritedContext: Context,
  isDeclared: boolean,
  isDecl: boolean
): ClassElementList {
  const pos = parser.curPos;
  const elements = [];

  parser.nodeFlags = (parser.nodeFlags | NodeFlags.HasConstructor) ^ NodeFlags.HasConstructor;

  while (
    parser.token &
    (SyntaxKind.IsIdentifier |
      SyntaxKind.IsSemicolon |
      SyntaxKind.IsKeyword |
      SyntaxKind.IsFutureReserved |
      SyntaxKind.IsProperty)
  ) {
    elements.push(
      parseClassElement(
        parser,
        context,
        inheritedContext,
        /* declareKeyword */ null,
        isDeclared,
        /* staticKeyword */ null,
        /* decorators */ null,
        NodeFlags.None
      )
    );
    if ((parser.token as SyntaxKind) === SyntaxKind.RightBrace) break;
  }
  consume(parser, isDecl ? context | Context.AllowRegExp : context, SyntaxKind.RightBrace);
  return createClassElementList(elements, pos, parser.curPos);
}

export function parseFieldDefinition(
  parser: ParserState,
  context: Context,
  decorators: DecoratorList | null,
  declareKeyword: SyntaxToken<TokenSyntaxKind> | null,
  staticKeyword: SyntaxToken<TokenSyntaxKind> | null,
  asyncKeyword: SyntaxToken<TokenSyntaxKind> | null,
  key: any,
  optionalToken: SyntaxToken<TokenSyntaxKind> | null,
  pos: number
) {
  const type = parseTypeAnnotation(parser, context);

  if (declareKeyword && parser.token === SyntaxKind.Assign) {
    parser.onError(
      DiagnosticSource.Parser,
      diagnosticMap[DiagnosticCode.Initializers_are_not_allowed_in_fields_with_the_declare_modifier],
      parser.curPos,
      parser.pos
    );
  }
  const initializer = parseInitializer(parser, context);

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

export function parseClassElement(
  parser: ParserState,
  context: Context,
  inheritedContext: Context,
  declareKeyword: SyntaxToken<TokenSyntaxKind> | null,
  isDeclared: boolean,
  staticKeyword: SyntaxToken<TokenSyntaxKind> | null,
  decorators: DecoratorList | null,
  nodeFlags: NodeFlags
): ClassElement | SemicolonClassElement | FieldDefinition {
  const pos = parser.curPos;

  let asyncKeyword: SyntaxToken<TokenSyntaxKind> | null = null;
  let getKeyword: SyntaxToken<TokenSyntaxKind> | null = null;
  let setKeyword: SyntaxToken<TokenSyntaxKind> | null = null;

  if (parser.token === SyntaxKind.Semicolon) {
    nextToken(parser, context);
    return createSemicolonClassElement(pos, parser.curPos);
  }

  decorators = parseDecorators(parser, context);

  const token = parser.token;

  if (token & (SyntaxKind.IsIdentifier | SyntaxKind.IsFutureReserved)) {
    let key: any =
      token === SyntaxKind.PrivateIdentifier
        ? parsePrivateIdentifier(parser, context)
        : parseIdentifier(parser, context);
    if ((parser.token & (SyntaxKind.Smi | SyntaxKind.IsLessThanOrLeftParen)) === 0) {
      switch (token) {
        case SyntaxKind.StaticKeyword:
          if (!staticKeyword) {
            return parseClassElement(
              parser,
              context,
              inheritedContext,
              declareKeyword,
              isDeclared,
              createToken(SyntaxKind.StaticKeyword, pos, parser.curPos),
              decorators,
              nodeFlags
            );
          }
        case SyntaxKind.DeclareKeyword:
          if (context & Context.OptionsAllowTypes) {
            if (!declareKeyword) {
              return parseClassElement(
                parser,
                context,
                inheritedContext,
                createToken(SyntaxKind.DeclareKeyword, pos, parser.curPos),
                isDeclared,
                staticKeyword,
                decorators,
                nodeFlags
              );
            }
            break;
          }
        case SyntaxKind.AsyncKeyword:
          nodeFlags |= NodeFlags.Async;
          asyncKeyword = createToken(SyntaxKind.AsyncKeyword, pos, parser.curPos);
          if (consumeOpt(parser, context, SyntaxKind.Multiply)) nodeFlags |= NodeFlags.Generator;
          break;
        case SyntaxKind.GetKeyword:
          nodeFlags |= NodeFlags.Getter;
          getKeyword = createToken(SyntaxKind.AsyncKeyword, pos, parser.curPos);
          break;

        case SyntaxKind.SetKeyword:
          setKeyword = createToken(SyntaxKind.AsyncKeyword, pos, parser.curPos);
          nodeFlags |= NodeFlags.Setter;
          break;
      }
    }
    if (nodeFlags & (NodeFlags.Async | NodeFlags.Getter | NodeFlags.Setter)) {
      if (
        token &
        (SyntaxKind.IsIdentifier | SyntaxKind.IsKeyword | SyntaxKind.IsFutureReserved | SyntaxKind.IsProperty)
      ) {
        key = parsePropertyName(parser, inheritedContext) as Identifier;
      } else {
        parser.onError(
          DiagnosticSource.Parser,
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
            diagnosticMap[DiagnosticCode.Class_constructor_may_not_be_a_accessor],
            parser.curPos,
            parser.pos
          );
        }
        if ((context & Context.SuperCall) !== Context.SuperCall) {
          if (parser.nodeFlags & NodeFlags.HasConstructor) {
            parser.onError(
              DiagnosticSource.Parser,
              diagnosticMap[DiagnosticCode.Duplicate_constructor_method_in_class],
              parser.curPos,
              parser.pos
            );
          } else parser.nodeFlags |= NodeFlags.HasConstructor;
        }
      }
    } else if (
      staticKeyword ||
      (nodeFlags & (NodeFlags.Async | NodeFlags.Getter | NodeFlags.Setter) && parser.tokenValue === 'prototype')
    ) {
      parser.onError(
        DiagnosticSource.Parser,
        diagnosticMap[DiagnosticCode.Classes_may_not_have_a_static_property_named_prototype],
        parser.curPos,
        parser.pos
      );
    }
    if (parser.token & SyntaxKind.IsLessThanOrLeftParen) {
      if (declareKeyword) {
        parser.onError(
          DiagnosticSource.Parser,
          diagnosticMap[DiagnosticCode.The_declare_modifier_can_only_appear_on_class_fields],
          parser.curPos,
          parser.pos
        );
      }

      const method = parseMethodDefinition(parser, context | Context.InClassBody, isDeclared, key, nodeFlags);
      return createClassElement(
        declareKeyword,
        decorators,
        staticKeyword,
        asyncKeyword,
        getKeyword,
        setKeyword,
        method,
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
      null,
      pos
    );
  }

  const generatorToken = consumeOptToken(parser, context, SyntaxKind.Multiply);

  const key = parsePropertyName(parser, inheritedContext);

  if (generatorToken) nodeFlags | NodeFlags.Generator;

  if (parser.token & SyntaxKind.IsLessThanOrLeftParen) {
    if (declareKeyword) {
      parser.onError(
        DiagnosticSource.Parser,
        diagnosticMap[DiagnosticCode.The_declare_modifier_can_only_appear_on_class_fields],
        parser.curPos,
        parser.pos
      );
    }

    const method = parseMethodDefinition(parser, context | Context.InClassBody, isDeclared, key, nodeFlags);
    return createClassElement(
      declareKeyword,
      decorators,
      staticKeyword,
      asyncKeyword,
      getKeyword,
      setKeyword,
      method,
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
    null,
    pos
  );
}

function parsePrivateIdentifier(parser: ParserState, context: Context): PrivateIdentifier {
  const pos = parser.curPos;
  const name = parser.tokenValue;
  if ((context & Context.InClassBody) === 0) {
    parser.onError(
      DiagnosticSource.Parser,
      diagnosticMap[DiagnosticCode.Private_identifiers_are_not_allowed_outside_class_bodies],
      parser.curPos,
      parser.pos
    );
  }
  nextToken(parser, context);
  return createPrivateIdentifier(name, pos, parser.curPos);
}

export function parseImportMetaOrCall(parser: ParserState, context: Context, inNewExpression: boolean): any {
  if (inNewExpression) {
    parser.onError(
      DiagnosticSource.Parser,
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
  const expression = createSuper(consumeToken(parser, context, SyntaxKind.SuperKeyword), pos, parser.curPos);
  switch (parser.token) {
    case SyntaxKind.QuestionMarkPeriod:
      parser.onError(
        DiagnosticSource.Parser,
        diagnosticMap[DiagnosticCode._super_must_be_followed_by_an_argument_list_or_member_access],
        parser.curPos,
        parser.pos
      );
    case SyntaxKind.LeftParen:
      if ((context & Context.SuperCall) < 1) {
        parser.onError(
          DiagnosticSource.Parser,
          diagnosticMap[
            DiagnosticCode._super_can_only_be_referenced_in_members_of_derived_classes_or_object_literal_expressions
          ],
          parser.curPos,
          parser.pos
        );
      }
      parser.assignable = false;
      return expression;
    case SyntaxKind.LeftBracket:
    case SyntaxKind.Period:
      if ((context & Context.SuperProperty) < 1) {
        parser.onError(
          DiagnosticSource.Parser,
          diagnosticMap[
            DiagnosticCode._super_can_only_be_referenced_in_members_of_derived_classes_or_object_literal_expressions
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
        diagnosticMap[DiagnosticCode._super_must_be_followed_by_an_argument_list_or_member_access],
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
  const expression = parseLeftHandSideExpression(parser, context);
  return createDecorator(expression, parser.nodeFlags, pos, parser.curPos);
}

// `CoverCallExpressionAndAsyncArrowHead : MemberExpressionArguments`
export function parseCoverCallExpressionAndAsyncArrowHead(
  parser: ParserState,
  context: Context,
  expr: ExpressionNode,
  hasLineTerminator: boolean,
  start: number
): ArrowFunction | ExpressionNode {
  let typeParameters = null;

  let state = Tristate.False;

  const asyncToken = createToken(SyntaxKind.AsyncKeyword, start, parser.curPos);

  if (parser.token === SyntaxKind.LessThan) {
    state = Tristate.True;
    typeParameters = parseTypeParameter(parser, context);
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
              parsePrimaryExpression(parser, context, /* inNewExpression */ false),
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
      if (hasLineTerminator) {
        parser.onError(
          DiagnosticSource.Parser,
          diagnosticMap[DiagnosticCode.Line_terminator_not_permitted_before_arrow],
          parser.curPos,
          parser.pos
        );
      }

      return parseArrowFunction(
        parser,
        context,
        typeParameters,
        parseTypeAnnotation(parser, context),
        [],
        asyncToken,
        start
      );
    }
    return createCallExpression(
      expr,
      createArgumentList([], /* trailingComma */ false, start, start),
      start,
      parser.curPos
    );
  }

  let destructible = DestructibleKind.None;
  let expression!: ExpressionNode | any;

  const params: ExpressionNode[] = [];

  while (
    parser.token &
    (SyntaxKind.IsExpressionStart |
      SyntaxKind.IsIdentifier |
      SyntaxKind.IsFutureReserved |
      SyntaxKind.IsPatternStart |
      SyntaxKind.IsComma |
      SyntaxKind.IsEllipsis)
  ) {
    const pos = parser.curPos;

    if (parser.token & (SyntaxKind.IsIdentifier | SyntaxKind.IsFutureReserved)) {
      expression = parsePrimaryExpression(parser, context, /* inNewExpression */ false);

      if (context & Context.OptionsAllowTypes && parser.token === SyntaxKind.Colon) {
        state = Tristate.True;

        expression = createFormalParameter(
          /* ellipsisToken */ null,
          /* binding */ expression,
          /* optionalToken */ null,
          /* type */ parseTypeAnnotation(parser, context),
          /* initializer */ parseInitializer(parser, context),
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
          if (parser.token !== SyntaxKind.Assign) {
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
          ? parseArrayLiteralOrAssignmentExpression(parser, context, BindingType.ArgumentList)
          : parseObjectLiteralOrAssignmentExpression(parser, context, BindingType.ArgumentList);
      if (parser.token === SyntaxKind.Colon) {
        state = Tristate.True;

        expression = createFormalParameter(
          /* ellipsisToken */ null,
          /* binding */ expression as any,
          /* optionalToken */ null,
          /* type */ parseTypeAnnotation(parser, context),
          /* initializer */ parseInitializer(parser, context),
          NodeFlags.ExpressionNode,
          pos,
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

          if ((parser.token & SyntaxKind.IsAssignOp) > 0) {
            if (!parser.assignable) {
              parser.onError(
                DiagnosticSource.Parser,
                diagnosticMap[
                  DiagnosticCode.The_left_hand_side_of_an_assignment_expression_must_be_a_variable_or_a_property_access
                ],
                parser.curPos,
                parser.pos
              );
            }
            expression = parseAssignmentExpression(parser, context, expression, pos);
          } else if ((parser.token & SyntaxKind.IsBinaryOp) > 0) {
            expression = parseBinaryExpression(parser, context, expression, 4, pos);
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

          if (
            (parser.token as SyntaxKind) !== SyntaxKind.Comma ||
            (parser.token as SyntaxKind) !== SyntaxKind.LeftParen
          ) {
            expression = parseAssignmentExpression(parser, context, expression, pos);
            destructible |= !parser.assignable ? DestructibleKind.NotDestructible : DestructibleKind.Assignable;
          }
        }
      }
    } else if (parser.token === SyntaxKind.Ellipsis) {
      state = Tristate.Unknown;
      nextToken(parser, context);

      let argument: any;

      if (parser.token & (SyntaxKind.IsIdentifier | SyntaxKind.IsFutureReserved)) {
        let argument = parsePrimaryExpression(parser, context, /* inNewExpression */ false);

        // '... )' , '... ]' and '... }'
        if ((parser.token as SyntaxKind) === SyntaxKind.RightBrace) {
          destructible |= parser.assignable ? DestructibleKind.Destructible : DestructibleKind.NotDestructible;
        } else if (parser.token & SyntaxKind.IsComma) {
          destructible = DestructibleKind.NotDestructible;
        } else {
          // This is the slow path. We shouldn't care too much about performance
          argument = parseMemberExpression(parser, context, argument, /*allowCalls */ true, pos);

          destructible = DestructibleKind.None;

          //if ((parser.token as SyntaxKind) !== SyntaxKind.Comma && (parser.token as SyntaxKind) !== SyntaxKind.RightBrace) {
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
      } else if (parser.token & SyntaxKind.IsPatternStart) {
        argument =
          (parser.token as SyntaxKind) === SyntaxKind.LeftBracket
            ? parseArrayLiteralOrAssignmentExpression(parser, context, BindingType.ArgumentList)
            : parseObjectLiteralOrAssignmentExpression(parser, context, BindingType.ArgumentList);

        // '...[ ] )' , '... { } ]' etc.
        if ((parser.token as SyntaxKind) === SyntaxKind.RightBrace) {
          destructible |= DestructibleKind.NotDestructible;
        } else if ((parser.token as SyntaxKind) === SyntaxKind.Comma) {
          destructible = DestructibleKind.NotDestructible;
        } else {
          if (parser.destructible & DestructibleKind.MustDestruct) {
            parser.onError(DiagnosticSource.Parser, diagnosticMap[DiagnosticCode._expected], parser.curPos, parser.pos);
          }

          argument = parseMemberExpression(parser, context, argument, true, pos);

          argument = parseAssignmentExpression(parser, context, argument, pos);

          destructible = parser.assignable ? DestructibleKind.Assignable : DestructibleKind.NotDestructible;
        }
      } else {
        let argument = parseLeftHandSideExpression(parser, context);

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
      expression = createSpreadElement(argument, pos, parser.curPos);

      destructible |=
        (parser.token as SyntaxKind) === SyntaxKind.RightParen
          ? DestructibleKind.None
          : DestructibleKind.NotDestructible;
    } else {
      state = Tristate.False;
      destructible |= DestructibleKind.NotDestructible;

      let trailingComma = false;

      while (parser.token & 11255808) {
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

        parser.onError(DiagnosticSource.Parser, diagnosticMap[DiagnosticCode._expected], parser.curPos, parser.pos);
      }

      const argumentList = createArgumentList(params, trailingComma, start, parser.curPos);
      consume(parser, context, SyntaxKind.RightParen);

      parser.assignable = false;
      return createCallExpression(expr, argumentList, start, parser.curPos);
    }
    params.push(expression);

    if (consumeOpt(parser, context | Context.AllowRegExp, SyntaxKind.Comma)) continue;
    if (parser.token === SyntaxKind.RightParen) break;
  }

  consume(parser, context, SyntaxKind.RightParen);

  if (destructible & DestructibleKind.NotDestructible) {
    parser.assignable = false;
    return createCallExpression(
      expr,
      createArgumentList(params, /* trailingComma */ false, start, start),
      start,
      parser.curPos
    );
  }

  if (state) {
    let isType = false;
    if (context & Context.OptionsAllowTypes && parser.token === SyntaxKind.Colon) {
      isType = context & Context.InConditionalExpr ? isValidReturnType(parser, context, expression, start, true) : true;
    }

    if (parser.token === SyntaxKind.Arrow || isType) {
      if (hasLineTerminator) {
        parser.onError(
          DiagnosticSource.Parser,
          diagnosticMap[DiagnosticCode.Line_terminator_not_permitted_before_arrow],
          parser.curPos,
          parser.pos
        );
      }

      if (destructible & (DestructibleKind.Assignable | DestructibleKind.NotDestructible)) {
        parser.onError(
          DiagnosticSource.Parser,
          diagnosticMap[DiagnosticCode.The_left_hand_side_of_the_arrow_is_not_destructible],
          parser.curPos,
          parser.pos
        );
      }

      return parseArrowFunction(
        parser,
        context,
        typeParameters,
        parseTypeAnnotation(parser, context),
        params,
        asyncToken,
        start
      );
    }
  }

  if (destructible & DestructibleKind.MustDestruct) {
    parser.onError(
      DiagnosticSource.Parser,
      diagnosticMap[
        DiagnosticCode.The_left_hand_side_of_an_assignment_expression_must_be_a_variable_or_a_property_access
      ],
      parser.curPos,
      parser.pos
    );
  }

  parser.assignable = false;
  return createCallExpression(
    expr,
    createArgumentList(params, /* trailingComma */ false, start, start),
    start,
    parser.curPos
  );
}

function parseOpaqueType(parser: ParserState, context: Context, declareKeyword: SyntaxToken<TokenSyntaxKind> | null) {
  const pos = parser.curPos;
  let expr = parseIdentifier(parser, context);
  if (parser.token === SyntaxKind.TypeKeyword) {
    return parseTypeAsIdentifierOrTypeAlias(
      parser,
      context,
      createToken(SyntaxKind.OpaqueKeyword, pos, parser.curPos),
      declareKeyword
    );
  }
  parser.assignable = true;
  if (parser.token === SyntaxKind.Colon) {
    return parseLabelledStatement(parser, context, expr as Identifier, /* allowFunction */ true, pos);
  }
  if (parser.token === SyntaxKind.Arrow) {
    return parseArrowFunction(
      parser,
      context,
      /*typeParameters */ null,
      /* returnType */ null,
      /* params */ expr,
      /* asyncToken */ null,
      pos
    );
  }
  return parseExpressionStatement(parser, context, parseExpressionRest(parser, context, expr, pos), pos);
}
