import { ParserState } from '../types';
import { Token, KeywordDescTable } from '../ast/token';
import { NodeKind, NodeFlags, AccessModifiers } from '../ast/node';
import { TypeNode } from '../ast/types';
import { Statement } from '../ast/statements/index';
import { createCatchParameter, CatchParameter } from '../ast/statements/catch-parameter';
import { createTypeLiteral, TypeLiteral } from '../ast/types/type-literal';
import { createParameterDeclaration, ParameterDeclaration } from '../ast/types/parameter-declaration';
import { createTemplateLiteralTypeSpan, TemplateLiteralTypeSpan } from '../ast/types/template-type-span';
import { createTemplateLiteralType, TemplateLiteralType } from '../ast/types/template-type';
import { createUnionType, UnionType } from '../ast/types/union-type';
import { createEnumDeclaration, EnumDeclaration } from '../ast/types/enum-declaration';
import { createEnumMembersList, EnumMembersList } from '../ast/types/enum-members-list';
import { createIntrinsicKeyword, IntrinsicKeyword } from '../ast/types/intrinsic';
import { createEnumMember, EnumMember } from '../ast/types/enum-member';
import { createQualifiedName, QualifiedName } from '../ast/types/qualified-name';
import { createInterfaceDeclaration, InterfaceDeclaration } from '../ast/types/interface-declaration';
import { createSingleNameBinding, SingleNameBinding } from '../ast/expressions/singleNameBinding';
import { createOmittedExpression, OmittedExpression } from '../ast/expressions/omitted-expr';
import { createHeritageClauses, HeritageClauses } from '../ast/types/heritage-clauses';
import { createHeritageClause, HeritageClause } from '../ast/types/heritage-clause';
import { createImplementClauses, ImplementClauses } from '../ast/types/implement-clauses';
import { createImplementClause, ImplementClause } from '../ast/types/implement-clause';
import { createThisType, ThisType } from '../ast/types/this-type';
import { createPropertySignature, PropertySignature } from '../ast/types/property-signature';
import { createMethodSignature, MethodSignature } from '../ast/types/method-signature';
import { createMappedType, MappedType } from '../ast/types/mapped-type';
import { createObjectTypeMembers, ObjectTypeMembers } from '../ast/types/object-type-members';
import { createTypeParameters, TypeParameters } from '../ast/types/type-parameter-list';
import { createTypeParameter, TypeParameter } from '../ast/types/type-parameter';
import { createOptionalType, OptionalType } from '../ast/types/optional-type';
import { createNamedTupleMember, NamedTupleMember } from '../ast/types/named-tuple-member';
import { createRestType, RestType } from '../ast/types/rest-type';
import { createInferType, InferType } from '../ast/types/infer-type';
import { createConditionalType, ConditionalType } from '../ast/types/conditional-type';
import { createTypeAssertion, TypeAssertion } from '../ast/types/type-assertion';
import { createCallSignature, CallSignature } from '../ast/types/call-signature';
import { createIndexSignature, IndexSignature } from '../ast/types/index-signature';
import { createFunctionType, FunctionType } from '../ast/types/function-type';
import { createConstructorType, ConstructorType } from '../ast/types/constructor-type';
import { createTypeAliasDeclaration, TypeAliasDeclaration } from '../ast/types/type-alias-declaration';
import { createImportType, ImportType } from '../ast/types/import-type';
import { createParameters, Parameters } from '../ast/types/parameters';
import { createTypePredicate, TypePredicate } from '../ast/types/type-predicate';
import { createTypeQuery, TypeQuery } from '../ast/types/type-query';
import { createTupleType, TupleType } from '../ast/types/tuple-type';
import { createParenthesizedType, ParenthesizedType } from '../ast/types/parenthesized-type';
import { createStringType, StringType } from '../ast/types/string-type';
import { createNumberType, NumberType } from '../ast/types/number-type';
import { createBigIntType, BigIntType } from '../ast/types/bigint-type';
import { createTrueType, TrueType } from '../ast/types/true-type';
import { createFalseType, FalseType } from '../ast/types/false-type';
import { createTypeArguments, TypeArguments } from '../ast/types/type-arguments';
import { createTypeReference, TypeReference } from '../ast/types/type-reference';
import { createKeywordTypeNode, KeywordTypeNode } from '../ast/types/keyword-type-node';
import { createIntersectionType, IntersectionType } from '../ast/types/intersection-type';
import { createTypeOperator, TypeOperator, TypeOperators } from '../ast/types/type-operator';
import { createIndexedAccessType, IndexedAccessType } from '../ast/types/indexed-access-type';
import { createArrayType, ArrayType } from '../ast/types/array-type';
import { createAsExpression, AsExpression } from '../ast/expressions/as-epr';
import { createFormalParameter, FormalParameter } from '../ast/expressions/formal-parameter';
import { createNonNullExpression, NonNullExpression } from '../ast/expressions/non-null-expr';
import { createDummyIdentifier, DummyIdentifier } from '../ast/internal/dummy-identifier';
import { createPrivateIdentifier, PrivateIdentifier } from '../ast/expressions/private-identifier';
import { createClassDeclaration, ClassDeclaration } from '../ast/statements/class-declaration';
import { createClassExpression, ClassExpression } from '../ast/expressions/class-expr';
import { createClassElementList, ClassElementList } from '../ast/expressions/class-element-list';
import { createClassElement, ClassElement } from '../ast/expressions/class-element';
import { createSemicolon, Semicolon } from '../ast/expressions/semicolon';
import { createFieldDefinition, FieldDefinition } from '../ast/expressions/field-definition';
import { Expression, MethodName } from '../ast/expressions/index';
import { createNamedExports, NamedExports } from '../ast/module/named-exports';
import { createExternalModuleReference, ExternalModuleReference } from '../ast/module/external-module-reference';
import { createExportAssignment, ExportAssignment } from '../ast/module/export-assignment';
import { createImportEqualsDeclaration, ImportEqualsDeclaration } from '../ast/module/import-equals-declaration';
import { createImportsList, ImportsList } from '../ast/module/imports-list';
import { createExportDeclaration, ExportDeclaration } from '../ast/module/export-declaration';
import { createExportDefault, ExportDefault } from '../ast/module/export-default';
import { createExportFromClause, ExportFromClause } from '../ast/module/export-from-clause';
import { createExportSpecifier, ExportSpecifier } from '../ast/module/export-specifier';
import { createImportClause } from '../ast/module/import-clause';
import { createImportDeclaration, ImportDeclaration } from '../ast/module/import-declaration';
import { createImportSpecifier, ImportSpecifier } from '../ast/module/import-specifier';
import { createNamedImports, NamedImports } from '../ast/module/named-imports';
import { createExportsList, ExportsList } from '../ast/module/exports-list';
import { createJsxIdentifier, JsxIdentifier } from '../ast/jsx/jsx-identifier';
import { createJsxNamespacedName, JsxNamespacedName } from '../ast/jsx/jsx-namespaced-name';
import { createJsxSelfClosingElement, JsxSelfClosingElement } from '../ast/jsx/jsx-self-closing-element';
import { createJsxOpeningElement, JsxOpeningElement } from '../ast/jsx/jsx-opening-element';
import { createJsxTagNamePropertyAccess, JsxTagNamePropertyAccess } from '../ast/jsx/jsx-tag-name-property-access';
import { createJsxMemberExpression, JsxMemberExpression } from '../ast/jsx/jsx-member-expression';
import { createJsxSpreadAttribute, JsxSpreadAttribute } from '../ast/jsx/jsx-spread-attribute';
import { createJsxAttribute, JsxAttribute } from '../ast/jsx/jsx-attribute';
import { createJsxAttributesList, JsxAttributesList } from '../ast/jsx/jsx-attribute-list';
import { createJsxText, JsxText } from '../ast/jsx/jsx-text';
import { createJsxChildrenList, JsxChildrenList, JsxChild } from '../ast/jsx/jsx-children-list';
import { createJsxOpeningFragment, JsxOpeningFragment } from '../ast/jsx/jsx-opening-fragment';
import { createJsxClosingElement, JsxClosingElement } from '../ast/jsx/jsx-closing-element';
import { createJsxElement, JsxElement } from '../ast/jsx/jsx-element';
import { createJsxFragment, JsxFragment } from '../ast/jsx/jsx-fragment';
import { createJsxClosingFragment, JsxClosingFragment } from '../ast/jsx/jsx-closing-fragment';
import { createImportCall, ImportCall } from '../ast/expressions/import-call';
import { createImportMeta, ImportMeta } from '../ast/expressions/import-meta';
import { createSuper, Super } from '../ast/expressions/super';
import { nextToken } from '../parser/scanner/scan';
import { scanTemplateTail } from '../parser/scanner/template';
import { createArrayLiteral, ArrayLiteral } from '../ast/expressions/array-literal';
import { createBooleanLiteral, BooleanLiteral } from '../ast/expressions/boolean-literal';
import { createThisExpression, ThisExpression } from '../ast/expressions/this-expr';
import { createNullLiteral, NullLiteral } from '../ast/expressions/null-literal';
import { createMethodDefinition, MethodDefinition } from '../ast/expressions/method-definition';
import { createForBinding, ForBinding } from '../ast/statements/forBinding';
import { createParenthesizedExpression, ParenthesizedExpression } from '../ast/expressions/parenthesized-expr';
import { createFunctionBody, FunctionBody } from '../ast/expressions/function-body';
import { createFunctionStatementList, FunctionStatementList } from '../ast/expressions/function-stmt-list';
import { createTaggedTemplate, TaggedTemplate } from '../ast/expressions/tagged-template';
import { createOptionalChain, OptionalChain } from '../ast/expressions/optional-chain';
import { createElementAccessChain, ElementAccessChain } from '../ast/expressions/element-access-chain';
import { createPropertyAccessChain, PropertyAccessChain } from '../ast/expressions/property-access-chain';
import { createCallChain, CallChain } from '../ast/expressions/call-chain';
import { createOptionalExpression, OptionalExpression } from '../ast/expressions/optional-expr';
import { createNewExpression, NewExpression } from '../ast/expressions/new-expr';
import { createNewTarget, NewTarget } from '../ast/expressions/new-target';
import { createArrowParameters, ArrowParameters } from '../ast/expressions/arrow-parameters';
import { createArrowFunction, ArrowFunction } from '../ast/expressions/arrow-function';
import { AwaitExpression, createAwaitExpression } from '../ast/expressions/await-expr';
import { YieldExpression, createYieldExpression } from '../ast/expressions/yield-expr';
import { createFormalParameterList, FormalParameterList } from '../ast/expressions/formal-parameter-list';
import { ArrayBindingPattern, createArrayBindingPattern } from '../ast/expressions/array-binding-pattern';
import { BindingElementList, createBindingElementList } from '../ast/expressions/binding-element-list';
import { createBindingProperty, BindingProperty } from '../ast/expressions/binding-property';
import { createObjectBindingPattern, ObjectBindingPattern } from '../ast/expressions/object-binding-pattern';
import { createBindingPropertyList, BindingPropertyList } from '../ast/expressions/binding-property-list';
import { createBindingElement, BindingElement } from '../ast/expressions/binding-element';
import { createFunctionExpression, FunctionExpression } from '../ast/expressions/function-expr';
import { createFunctionDeclaration, FunctionDeclaration } from '../ast/statements/function-declaration';
import { createComputedPropertyName, ComputedPropertyName } from '../ast/expressions/computed-property-name';
import { createPropertyDefinition, PropertyDefinition } from '../ast/expressions/property-definition';
import { ElementList, createElementList } from '../ast/expressions/element-list';
import { createNumericLiteral, NumericLiteral } from '../ast/expressions/numeric-literal';
import { createObjectLiteral, ObjectLiteral } from '../ast/expressions/object-literal';
import { createPropertyDefinitionList, PropertyDefinitionList } from '../ast/expressions/property-definition-list';
import { createSpreadProperty, SpreadProperty } from '../ast/expressions/spread-property';
import { createCoverInitializedName, CoverInitializedName } from '../ast/expressions/cover-initialized-name';
import { createIdentifierReference, IdentifierReference } from '../ast/expressions/identifier-reference';
import { createIdentifierName, IdentifierName } from '../ast/expressions/identifier-name';
import { createBindingIdentifier, BindingIdentifier } from '../ast/expressions/binding-identifier';
import { createStringLiteral, StringLiteral } from '../ast/expressions/string-literal';
import { createRegularExpressionLiteral, RegularExpressionLiteral } from '../ast/expressions/regular-expr';
import { createBigIntLiteral, BigIntLiteral } from '../ast/expressions/bigint-literal';
import { createExpressionStatement, ExpressionStatement } from '../ast/statements/expr-stmt';
import { createCommaOperator, CommaOperator } from '../ast/expressions/commaOperator';
import { createConditionalExpression, ConditionalExpression } from '../ast/expressions/conditional-expr';
import { createBinaryExpression, BinaryExpression, BinaryOperator } from '../ast/expressions/binary-expr';
import { createPropertyAccessExpression, PropertyAccessExpression } from '../ast/expressions/property-access-expr';
import { createElementAccessExpression, ElementAccessExpression } from '../ast/expressions/element-access-expr';
import { createCallExpression, CallExpression } from '../ast/expressions/call-expr';
import { ForOfStatement, createForOfStatement } from '../ast/statements/for-of-stmt';
import { ForInStatement, createForInStatement } from '../ast/statements/for-in-stmt';
import { ForStatement, createForStatement } from '../ast/statements/for-stmt';
import { ThrowStatement, createThrowStatement } from '../ast/statements/throw-stmt';
import { WithStatement, createWithStatement } from '../ast/statements/with-stmt';
import { CaseBlock, createCaseBlock } from '../ast/statements/case-block';
import { CaseClause, createCaseClause } from '../ast/statements/case-clause';
import { DefaultClause, createDefaultClause } from '../ast/statements/default-clause';
import { SwitchStatement, createSwitchStatement } from '../ast/statements/switch-stmt';
import { ReturnStatement, createReturnStatement } from '../ast/statements/return-stmt';
import { EmptyStatement, createEmptyStatement } from '../ast/statements/empty-stmt';
import { ContinueStatement, createContinueStatement } from '../ast/statements/continue-stmt';
import { BreakStatement, createBreakStatement } from '../ast/statements/break-stmt';
import { DebuggerStatement, createDebuggerStatement } from '../ast/statements/debugger-stmt';
import { BlockStatement, createBlockStatement } from '../ast/statements/block-stmt';
import { Block, createBlock } from '../ast/statements/block';
import { DoWhileStatement, createDoWhileStatement } from '../ast/statements/do-stmt';
import { WhileStatement, createWhileStatement } from '../ast/statements/while-stmt';
import { IfStatement, createIfStatement } from '../ast/statements/if-stmt';
import { createCatch, CatchClause } from '../ast/statements/catch-stmt';
import { createTryStatement, TryStatement } from '../ast/statements/try-stmt';
import { LexicalBinding, createLexicalBinding } from '../ast/statements/lexical-binding';
import { LexicalDeclaration, createLexicalDeclaration } from '../ast/statements/lexical-declaration';
import { VariableDeclaration, createVariableDeclaration } from '../ast/statements/variable-declaration';
import { VariableDeclarationList, createVariableDeclarationList } from '../ast/statements/variable-declarationList';
import { LabelledStatement, createLabelledStatement } from '../ast/statements/labelled-stmt';
import { BindingList, createBindingList } from '../ast/statements/binding-list';
import { lookAhead, tryParse } from '../parser/scanner/common';
import { createUnaryExpression, UnaryExpression, UnaryOperator } from '../ast/expressions/unary-expr';
import { createSpreadElement, SpreadElement } from '../ast/expressions/spread-element';
import { ArgumentList, createArgumentList } from '../ast/expressions/argument-list';
import { createPrefixUpdateExpression, PrefixUpdateExpression, UpdateOp } from '../ast/expressions/prefix-update-expr';
import { createPostfixUpdateExpression, PostfixUpdateExpression } from '../ast/expressions/postfix-update-expr';
import { createScriptBody, ScriptBody } from '../ast/scriptBody';
import { createModuleBody, ModuleBody } from '../ast/moduleBody';
import { getCurrentNode } from './incremental';
import { DiagnosticCode } from '../diagnostics/diagnosticMessages.generated';
import { parseErrorAtPosition, reportErrorDiagnostic, reportWarningDiagnostic } from '../diagnostics/diagnostic';
import { createTemplateSpan, TemplateSpan } from '../ast/expressions/template-span';
import { createTemplateTail, TemplateTail } from '../ast/expressions/template-tail';
import { createTemplateExpression, TemplateExpression } from '../ast/expressions/template-expression';
import { createVariableStatement, VariableStatement } from '../ast/statements/variable-stmt';
import { scanJsxIdentifier, reScanJsxToken, scanJsxToken, scanJsxAttributeValue } from '../parser/scanner/jsx';
import { createMinusType, MinusType } from '../ast/types/minus-type';
import { createAccessModifier, AccessModifier } from '../ast/types/access-modifier';
import { Constants } from './constants';
import { createConstructSignature, ConstructSignature } from '../ast/types/construct-signature';
import { createDecoratorList, DecoratorList } from '../ast/expressions/decorator-list';
import { createDecorator, Decorator } from '../ast/expressions/decorators';
import {
  createAssignmentExpression,
  AssignmentExpression,
  AssignOp,
  LogicalOp
} from '../ast/expressions/assignment-expr';
import {
  Context,
  PropertyKind,
  canParseSemicolon,
  parseSemicolon,
  consume,
  consumeOpt,
  consumeOptAsBitwise,
  tagNamesAreEquivalent,
  reinterpretToPattern
} from './common';

// prettier-ignore
const enum Tristate {
  False,  // There *cannot* be a parenthesized arrow function here.
  True,   // We definitely expect a parenthesized arrow function here.
  Unknown // There *might* be a parenthesized arrow function here.
}

// ScriptBody : StatementList
// ModuleBody :
//   ModuleItemList
export function parseScriptOrModuleBody(
  parser: ParserState,
  context: Context,
  cb: any,
  factory: any
): ScriptBody | ModuleBody {
  const pos = parser.startPos;
  const statements: Statement[] = [];

  while (parser.token !== Token.EndOfSource) {
    if (parser.token & Constants.SourceElements) {
      statements.push(getCurrentNode(parser, context, cb));
      continue;
    }

    reportErrorDiagnostic(
      parser,
      0,
      parser.token === Token.PrivateIdentifier
        ? DiagnosticCode.Private_identifiers_are_not_allowed_outside_class_bodies
        : DiagnosticCode.Declaration_or_statement_expected
    );

    // '/' in an statement position should be parsed as an unterminated regular expression
    nextToken(parser, context | Context.AllowRegExp);
  }
  return factory(statements, parser.nodeFlags, pos, parser.startPos);
}

export function parseModuleItemList(parser: ParserState, context: Context): Statement {
  switch (parser.token) {
    case Token.ImportKeyword:
      if (lookAhead(parser, context, nextTokenCanFollowImportKeyword)) {
        return parseImportDeclaration(parser, context);
      }
      return parseExpressionOrLabeledStatement(parser, context, /* allowFunction */ false);
    case Token.Decorator:
    case Token.ExportKeyword:
      return parseExportDeclaration(parser, context);
    default:
      return parseStatementListItem(parser, context);
  }
}

function nextTokenIsFunctionKeywordOnSameLine(parser: ParserState, context: Context): boolean {
  nextToken(parser, context);
  return parser.token === Token.FunctionKeyword && (parser.nodeFlags & NodeFlags.PrecedingLineBreak) === 0;
}

// StatementListItem :
//   Statement
//   Declaration
//
// Declaration :
//   HoistableDeclaration
//   ClassDeclaration
//   LexicalDeclaration
export function parseStatementListItem(parser: ParserState, context: Context): Statement {
  switch (parser.token) {
    case Token.FunctionKeyword:
      return parseFunctionDeclaration(parser, context, false);
    case Token.Decorator:
    case Token.ClassKeyword:
      return parseClassDeclaration(parser, context);
    case Token.AbstractKeyword:
      if (tryParse(parser, context, nextTokenIsDeclareOrAbstractKeywordOnSameLine)) {
        parser.nodeFlags |= NodeFlags.Abstract;
        if (parser.token !== Token.ClassKeyword) {
          reportErrorDiagnostic(
            parser,
            8,
            DiagnosticCode._abstract_modifier_can_only_appear_on_a_class_method_or_property_declaration
          );
          return parseModuleItemList(parser, context);
        }
        return parseClassDeclaration(parser, context);
      }
      return parseExpressionOrLabeledStatement(parser, context, /* allowFunction */ true);
    case Token.ConstKeyword:
      return parseLexicalOrEnumDeclaration(parser, context);
    case Token.AsyncKeyword: {
      if (lookAhead(parser, context, nextTokenIsFunctionKeywordOnSameLine)) {
        return parseFunctionDeclaration(parser, context, false);
      }
      return parseStatement(parser, context, /* allowFunction */ true);
    }
    case Token.LetKeyword: {
      const pos = parser.startPos;
      const flags = parser.nodeFlags;
      if (tryParse(parser, context, nextKeywordCanFollowLexicalLet)) {
        return parseLexicalDeclaration(parser, context, /* isConst */ false, flags, pos);
      }
      return parseStatement(parser, context, /* allowFunction */ true);
    }
    case Token.DeclareKeyword:
      if (tryParse(parser, context, nextTokenIsDeclareOrAbstractKeywordOnSameLine)) {
        parser.nodeFlags |= NodeFlags.Declared | NodeFlags.Ambient;
        return context & Context.Module
          ? parseModuleItemList(parser, context)
          : parseStatementListItem(parser, context);
      }
    case Token.TypeKeyword:
      return parseTypeAliasDeclaration(parser, context);
    case Token.InterfaceKeyword:
      const pos = parser.startPos;
      const nodeFlags = parser.nodeFlags;
      if (tryParse(parser, context, nextTokenIsIdentifierOnSameLine)) {
        return parseInterfaceDeclaration(parser, context, nodeFlags, pos);
      }
      return parseStatement(parser, context, /* allowFunction */ true);
    case Token.ImportKeyword:
      if (lookAhead(parser, context, nextTokenCanFollowImportKeyword)) {
        reportErrorDiagnostic(parser, 0, DiagnosticCode.The_import_keyword_can_only_be_used_with_the_module_goal);
        return parseImportDeclaration(parser, context);
      }
      return parseExpressionOrLabeledStatement(parser, context, /* allowFunction */ true);
    case Token.ExportKeyword:
      reportErrorDiagnostic(parser, 0, DiagnosticCode.The_export_keyword_can_only_be_used_with_the_module_goal);
      return parseExportDeclaration(parser, context);
    default:
      return parseStatement(parser, context, /* allowFunction */ true);
  }
}

// prettier-ignore
function canFollowAbstractOrDeclareKeyword(token: Token): boolean {
  switch (token) {
    case Token.ClassKeyword: // abstract class x {};
    // this case is the only legal case that can follow a abstract keyword.
    case Token.FunctionKeyword:  // declare function x();
    case Token.AsyncKeyword:     // declare async function x();
    // these cases can't legally follow a declare or abstract keyword. However, we choose too
    // allow this so that we can report them in the grammar checker.
    case Token.VarKeyword:       // declare var x;
    case Token.LetKeyword:       // declare let x;
    case Token.ConstKeyword:     // declare const x = y;
    case Token.ExportKeyword:    // declare export let x;
    case Token.ImportKeyword:    // declare import x from "y";
    case Token.InterfaceKeyword: // declare interface x {};
    case Token.TypeKeyword:      // declare type x = y;
    case Token.EnumKeyword:      // declare enum x {};
      return true;
    default:
      return false;
  }
}

function nextTokenCanFollowImportKeyword(parser: ParserState, context: Context): boolean {
  nextToken(parser, context);
  return (parser.token & Token.IsPropertyOrCall) === 0;
}

function nextTokenIsDeclareOrAbstractKeywordOnSameLine(parser: ParserState, context: Context): boolean {
  nextToken(parser, context);
  return (parser.nodeFlags & NodeFlags.PrecedingLineBreak) === 0 && canFollowAbstractOrDeclareKeyword(parser.token);
}

function nextKeywordCanFollowLexicalLet(parser: ParserState, context: Context): number | boolean {
  nextToken(parser, context);
  // 'function *x() { let yield; }'
  if (context & 0b00000000001000000000010000000000 && parser.token === Token.YieldKeyword) return false;
  // 'async function *x() { let await; }'
  if (context & 0b00000000010000000000100000000000 && parser.token === Token.AwaitKeyword) return false;
  return parser.token & 0b00000000000010000101000000000000;
}

// Statement ::
//   Block
//   VariableStatement
//   EmptyStatement
//   ExpressionStatement
//   IfStatement
//   IterationStatement
//   ContinueStatement
//   BreakStatement
//   ReturnStatement
//   WithStatement
//   LabelledStatement
//   SwitchStatement
//   ThrowStatement
//   TryStatement
//   DebuggerStatement
function parseStatement(parser: ParserState, context: Context, allowFunction: boolean): Statement {
  switch (parser.token) {
    case Token.LeftBrace:
      return parseBlockStatement(parser, context);
    case Token.Semicolon:
      return parseEmptyStatement(parser, context);
    case Token.IfKeyword:
      return parseIfStatement(parser, context);
    case Token.DoKeyword:
      return parseDoWhileStatement(parser, context);
    case Token.WhileKeyword:
      return parseWhileStatement(parser, context);
    case Token.ForKeyword:
      return parseForStatement(parser, context);
    case Token.VarKeyword:
      return parseVariableStatement(parser, context);
    case Token.ContinueKeyword:
      return parseBreakOrContinueStatement(parser, context, /* isContinue */ true);
    case Token.BreakKeyword:
      return parseBreakOrContinueStatement(parser, context, /* isContinue */ false);
    case Token.ReturnKeyword:
      return parseReturnStatement(parser, context);
    case Token.ThrowKeyword:
      return parseThrowStatement(parser, context);
    case Token.TryKeyword:
    // Miscellaneous error cases arguably better caught here than elsewhere.
    case Token.CatchKeyword:
    case Token.FinallyKeyword:
      return parseTryStatement(parser, context);
    case Token.DebuggerKeyword:
      return parseDebuggerStatement(parser, context);
    case Token.SwitchKeyword:
      return parseSwitchStatement(parser, context);
    case Token.WithKeyword:
      return parseWithStatement(parser, context);
    case Token.FunctionKeyword:
      // FunctionDeclaration are only allowed as a StatementListItem, not in
      // an arbitrary Statement position.
      reportErrorDiagnostic(
        parser,
        0,
        context & Context.Strict
          ? DiagnosticCode.In_strict_mode_code_functions_can_only_be_declared_at_top_level_or_inside_a_block
          : context & Context.OptionsDisableWebCompat
          ? DiagnosticCode.Without_web_compability_enabled_functions_can_not_be_declared_at_top_level_inside_a_block_or_as_the_body_of_an_if_statement
          : DiagnosticCode.In_non_strict_mode_code_functions_can_only_be_declared_at_top_level_inside_a_block_or_as_the_body_of_an_if_statement
      );
      return parseFunctionDeclaration(parser, context, /* isDefault */ false);
    case Token.ClassKeyword:
      reportErrorDiagnostic(parser, 0, DiagnosticCode.Class_declaration_cannot_appear_in_single_statement_context);
      return parseClassDeclaration(parser, context);
    case Token.EnumKeyword:
      const { startPos, nodeFlags } = parser;
      if (tryParse(parser, context, nextTokenIsIdentifierOnSameLine)) {
        return parseEnumDeclaration(parser, context, /* isConst */ false, nodeFlags, startPos);
      }
    /* falls through */
    default:
      return parseExpressionOrLabeledStatement(parser, context, allowFunction);
  }
}

function parseInterfaceDeclaration(
  parser: ParserState,
  context: Context,
  nodeFlags: NodeFlags,
  pos: number
): InterfaceDeclaration {
  return createInterfaceDeclaration(
    parseIdentifierReference(parser, context),
    parseTypeParameters(parser, context | Context.AllowConditionalTypes),
    parseHeritageClauses(parser, context),
    parseObjectType(parser, context),
    nodeFlags | parser.nodeFlags,
    pos,
    parser.startPos
  );
}

function parseHeritageClauses(parser: ParserState, context: Context): HeritageClauses {
  let listPos = parser.startPos;

  const clauses = [];

  if (parser.token === Token.ExtendsKeyword || parser.token === Token.ImplementsKeyword) {
    // Interface declaration cannot have implements clause. However, we choose too
    // allow this so that we can avoid tons of parse errors. We will report them later in the grammar checker.

    if (parser.token === Token.ImplementsKeyword) {
      reportErrorDiagnostic(parser, 0, DiagnosticCode.Interface_declaration_cannot_have_implements_clause);
    }

    nextToken(parser, context);
    listPos = parser.startPos;
    while (parser.token & (Token.IsIdentifier | Token.FutureReserved)) {
      clauses.push(parseHeritageClause(parser, context));
      if (parser.token & Token.IsPatternStart) break;
      if (consumeOpt(parser, context, Token.Comma)) continue;
      reportErrorDiagnostic(parser, 0, DiagnosticCode._0_expected, ',');
    }
  }

  return createHeritageClauses(clauses, parser.nodeFlags, listPos, parser.startPos);
}

function parseHeritageClause(parser: ParserState, context: Context): HeritageClause {
  const pos = parser.startPos;
  return createHeritageClause(parseTypeReference(parser, context), parser.nodeFlags, pos, parser.startPos);
}

function nextTokenIsIdentifierOnSameLine(parser: ParserState, context: Context): boolean {
  nextToken(parser, context);
  return (
    (parser.token & (Token.IsIdentifier | Token.FutureReserved)) !== 0 &&
    (parser.nodeFlags & NodeFlags.PrecedingLineBreak) === 0
  );
}

function parseTypeAliasDeclaration(
  parser: ParserState,
  context: Context
): TypeAliasDeclaration | LabelledStatement | ExpressionStatement {
  const { startPos, nodeFlags } = parser;
  if (tryParse(parser, context, nextTokenIsIdentifierOnSameLine)) {
    return parseTypeAliasDeclarationRest(parser, context, nodeFlags, startPos);
  }
  return parseExpressionOrLabeledStatement(parser, context, /* allowFunction */ true);
}

function parseTypeAliasDeclarationRest(
  parser: ParserState,
  context: Context,
  nodeFlags: NodeFlags,
  pos: number
): TypeAliasDeclaration {
  const name = parseIdentifierReference(parser, context);
  const typeParameters = parseTypeParameters(parser, context | Context.AllowConditionalTypes);
  consume(parser, context, Token.Assign);
  const type =
    (parser.token === Token.IntrinsicKeyword && tryParse(parser, context, parseIntrinsic)) ||
    parseType(parser, context | Context.AllowConditionalTypes);
  parseSemicolon(parser, context);
  return createTypeAliasDeclaration(name, type, typeParameters, nodeFlags | parser.nodeFlags, pos, parser.startPos);
}

function parseIntrinsic(parser: ParserState, context: Context): IntrinsicKeyword | undefined {
  const pos = parser.startPos;
  nextToken(parser, context);
  if (parser.token === Token.Period) return undefined;
  return createIntrinsicKeyword(parser.nodeFlags, pos, parser.startPos);
}

function parseLexicalOrEnumDeclaration(parser: ParserState, context: Context): EnumDeclaration | LexicalDeclaration {
  const pos = parser.startPos;
  const nodeFlags = parser.nodeFlags;
  nextToken(parser, context);
  if (consumeOpt(parser, context, Token.EnumKeyword)) {
    return parseEnumDeclaration(parser, context, /* isConst */ true, nodeFlags, pos);
  }
  return parseLexicalDeclaration(parser, context, /* isConst */ true, nodeFlags, pos);
}

// at 'enum': Identifier '{' (EnumValueDeclaration (',' EnumValueDeclaration )*)? '}' ';'?
function parseEnumDeclaration(
  parser: ParserState,
  context: Context,
  isConst: boolean,
  nodeFlags: NodeFlags,
  pos: number
): EnumDeclaration {
  const name = parseIdentifierReference(parser, context);
  consume(parser, context, Token.LeftBrace);
  const enumMembersList = parseEnumMembersList(parser, context);
  consume(parser, context, Token.RightBrace);
  return createEnumDeclaration(name, enumMembersList, isConst, nodeFlags | parser.nodeFlags, pos, parser.startPos);
}

function parseEnumMembersList(parser: ParserState, context: Context): EnumMembersList {
  const pos = parser.startPos;
  const members = [];
  while (parser.token & Constants.EnumMembers) {
    members.push(getCurrentNode(parser, context, parseEnumMember));
    if (parser.token === Token.RightBrace) break;
    if (consumeOpt(parser, context, Token.Comma)) continue;
    reportErrorDiagnostic(parser, 0, DiagnosticCode.An_enum_member_name_must_be_followed_by_a_or);
  }
  return createEnumMembersList(members, parser.nodeFlags, pos, parser.startPos);
}

function parseEnumMember(parser: ParserState, context: Context): EnumMember {
  const pos = parser.startPos;
  return createEnumMember(
    parsePropertyName(parser, context),
    parseInitializer(parser, context),
    parser.nodeFlags,
    pos,
    parser.startPos
  );
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
function parseTryStatement(parser: ParserState, context: Context): TryStatement {
  const pos = parser.startPos;

  consume(parser, context | Context.AllowRegExp, Token.TryKeyword);
  const block = parseBlockStatement(parser, context);
  const catchClause = parser.token === Token.CatchKeyword ? parseCatchClause(parser, context) : null;

  // If we don't have a catch clause, then we must have a finally clause. Try to parse
  // one out no matter what.
  let finallyBlock = null;
  if (!catchClause || parser.token === Token.FinallyKeyword) {
    consume(parser, context | Context.AllowRegExp, Token.FinallyKeyword);
    finallyBlock = parseBlockStatement(parser, context);
  }
  return createTryStatement(block, catchClause, finallyBlock, parser.nodeFlags, pos, parser.startPos);
}

// Catch :
//   `catch` `(` CatchParameter `)` Block
//   `catch` Block
//
// CatchParameter :
//   BindingIdentifier
//   BindingPattern
function parseCatchClause(parser: ParserState, context: Context): CatchClause {
  const pos = parser.startPos;
  consume(parser, context | Context.AllowRegExp, Token.CatchKeyword);
  // Keep shape of node to avoid degrading performance.
  let catchParameter = null;
  if (consumeOpt(parser, context, Token.LeftParen)) {
    catchParameter = parseCatchParameter(parser, (context | Context.DisallowIn) ^ Context.DisallowIn);
    if (parser.token === Token.Assign) {
      reportErrorDiagnostic(parser, 0, DiagnosticCode.Catch_clause_variable_cannot_have_an_initializer);
    }
    consume(parser, context | Context.AllowRegExp, Token.RightParen);
  }
  return createCatch(catchParameter, parseBlockStatement(parser, context), parser.nodeFlags, pos, parser.startPos);
}

function parseCatchParameter(parser: ParserState, context: Context): CatchParameter {
  const pos = parser.startPos;
  const binding = parseIdentifierOrPattern(
    parser,
    (context | Context.DisallowIn) ^ Context.DisallowIn,
    DiagnosticCode.Private_identifiers_cannot_be_used_as_parameters
  );

  return createCatchParameter(
    binding,
    parseTypeAnnotation(parser, context),
    parseInitializer(parser, context),
    parser.nodeFlags,
    pos,
    parser.startPos
  );
}

// VariableStatement : `var` VariableDeclarationList `;`
function parseVariableStatement(parser: ParserState, context: Context): VariableStatement {
  const { startPos, nodeFlags } = parser;
  nextToken(parser, context | Context.AllowRegExp);
  const declarationList = parseVariableDeclarationList(parser, context, /* inForStatement */ false);
  parseSemicolon(parser, context);
  return createVariableStatement(declarationList, nodeFlags | parser.nodeFlags, startPos, parser.startPos);
}

// VariableDeclaration :
//   BindingIdentifier Initializer?
//   BindingPattern Initializer
function parseVariableDeclaration(parser: ParserState, context: Context): VariableDeclaration {
  const pos = parser.startPos;
  const binding = parseIdentifierOrPattern(
    parser,
    (context | Context.DisallowIn) ^ Context.DisallowIn,
    DiagnosticCode.Private_identifiers_are_not_allowed_in_variable_declarations
  );
  const exclamation =
    (binding.kind & NodeKind.IsIdentifier) !== 0 &&
    (parser.nodeFlags & NodeFlags.PrecedingLineBreak) === 0 &&
    consumeOpt(parser, context, Token.Negate);
  const type = parseTypeAnnotation(parser, context);
  const initializer = parser.token & Token.IsInOrOf ? null : parseInitializer(parser, context);
  return createVariableDeclaration(binding, exclamation, type, initializer, pos, parser.nodeFlags, parser.startPos);
}

// LexicalDeclaration : LetOrConst BindingList `;`
function parseLexicalDeclaration(
  parser: ParserState,
  context: Context,
  isConst: boolean,
  nodeFlags: NodeFlags,
  pos: number
): LexicalDeclaration {
  const bindingList = parseBindingList(parser, context, /* inForStatement */ false);
  parseSemicolon(parser, context);
  return createLexicalDeclaration(
    isConst,
    bindingList,
    nodeFlags | parser.nodeFlags | NodeFlags.BlockScoped,
    pos,
    parser.startPos
  );
}

// BindingList :
//   LexicalBinding
//   BindingList `,` LexicalBinding
//
// LexicalBinding :
//   BindingIdentifier Initializer?
//   BindingPattern Initializer
function parseBindingList(parser: ParserState, context: Context, inForStatement: boolean): BindingList {
  const declarations = [];
  const pos = parser.startPos;
  while (parser.token & 0b00000000000010000101000000000000) {
    declarations.push(getCurrentNode(parser, context, parseLexicalBinding));
    if (inForStatement && parser.token & Token.IsInOrOf) break;
    if (canParseSemicolon(parser)) break;
    if (consumeOpt(parser, context, Token.Comma)) continue;
    // A typical typo is to hit '.' instead of ',' because they are next to each other on the keyboard.
    // If that's the case we just skip it and continue. This ensures we get back on track and don't
    // result in tons of parse errors.
    consumeOpt(parser, context, Token.Period);
    reportErrorDiagnostic(parser, 0, DiagnosticCode._0_expected, ',');
  }

  return createBindingList(declarations, parser.nodeFlags | NodeFlags.BlockScoped, pos, parser.startPos);
}

// LexicalBinding :
//   BindingIdentifier Initializer?
//   BindingPattern Initializer
function parseLexicalBinding(parser: ParserState, context: Context): LexicalBinding {
  const pos = parser.startPos;
  const binding = parseIdentifierOrPattern(
    parser,
    (context | Context.DisallowIn) ^ Context.DisallowIn,
    DiagnosticCode.Private_identifiers_are_not_allowed_in_lexical_bindings
  );
  // Declarations with initializers cannot also have definite assignment assertions, but we allow this so that
  // we can report this in the grammar checker.
  const exclamation =
    (binding.kind & NodeKind.IsIdentifier) !== 0 &&
    (parser.nodeFlags & NodeFlags.PrecedingLineBreak) === 0 &&
    consumeOpt(parser, context, Token.Negate);
  const type = parseTypeAnnotation(parser, context);
  // Initializers are not allowed in ambient contexts, but we will handle this in the grammar checker
  const initializer = parser.token & Token.IsInOrOf ? null : parseInitializer(parser, context);
  return createLexicalBinding(binding, exclamation, type, initializer, parser.nodeFlags, pos, parser.startPos);
}

// VariableDeclarationList :
//   VariableDeclaration
//   VariableDeclarationList `,` VariableDeclaration
function parseVariableDeclarationList(
  parser: ParserState,
  context: Context,
  inForStatement: boolean
): VariableDeclarationList {
  const pos = parser.startPos;
  const declarations = [];
  while (parser.token & 0b00000000000010000101000000000000) {
    declarations.push(getCurrentNode(parser, context, parseVariableDeclaration));
    if (canParseSemicolon(parser)) break;
    if (consumeOpt(parser, context, Token.Comma)) continue;
    if (inForStatement && parser.token & Token.IsInOrOf) break;
    // A typical typo is to hit '.' instead of ',' because they are next to each other on the keyboard.
    // If that's the case we just skip it and continue. This ensures we get back on track and don't
    // result in tons of parse errors.
    consumeOpt(parser, context, Token.Period);
    reportErrorDiagnostic(parser, 0, DiagnosticCode._0_expected, ',');
  }
  return createVariableDeclarationList(declarations, parser.nodeFlags, pos, parser.startPos);
}

// IfStatement :
//  `if` `(` Expression `)` Statement `else` Statement
//  `if` `(` Expression `)` Statement
function parseIfStatement(parser: ParserState, context: Context): IfStatement {
  const pos = parser.startPos;
  nextToken(parser, context);
  consume(parser, context | Context.AllowRegExp, Token.LeftParen);
  const expression = parseExpression(parser, context);
  consume(parser, context | Context.AllowRegExp, Token.RightParen);
  const consequent = parseConsequentOrAlternative(parser, context);
  const alternate = consumeOpt(parser, context | Context.AllowRegExp, Token.ElseKeyword)
    ? parseConsequentOrAlternative(parser, context)
    : null;
  // Annex B.3.4 says that unbraced FunctionDeclarations under if/else in
  // non-strict code act as if they were braced: 'if (x) function f() {}'
  // parses as 'if (x) { function f() {} }'.
  // As a result of this we must add an extra 'isWebCompat' property on the AST
  // node so we can handle this properly in the grammar checker.
  return createIfStatement(
    expression,
    consequent,
    alternate,
    (context & Context.OptionsDisableWebCompat) !== Context.OptionsDisableWebCompat,
    parser.nodeFlags,
    pos,
    parser.startPos
  );
}

export function parseConsequentOrAlternative(parser: ParserState, context: Context): Statement {
  // Annex B.3.4 says that unbraced FunctionDeclarations under if/else in
  // non-strict code act as if they were braced: 'if (x) function f() {}'
  // parses as 'if (x) { function f() {} }'.
  //
  return context & (Context.OptionsDisableWebCompat | Context.Strict) || parser.token !== Token.FunctionKeyword
    ? parseStatement(parser, context, /* allowFunction */ false)
    : parseFunctionDeclaration(parser, context, /* isDefault */ false);
}

// WhileStatement :
//   `while` `(` Expression `)` Statement
function parseWhileStatement(parser: ParserState, context: Context): WhileStatement {
  const pos = parser.startPos;
  nextToken(parser, context);
  consume(parser, context | Context.AllowRegExp, Token.LeftParen);
  const expression = parseExpression(parser, context);
  consume(parser, context | Context.AllowRegExp, Token.RightParen);
  const statement = parseStatement(parser, context, /* allowFunction */ true);
  return createWhileStatement(expression, statement, parser.nodeFlags, pos, parser.startPos);
}

// `do` Statement `while` `(` Expression `)` `;`
function parseDoWhileStatement(parser: ParserState, context: Context): DoWhileStatement {
  const pos = parser.startPos;
  nextToken(parser, context | Context.AllowRegExp);
  const statement = parseStatement(parser, context, /* allowFunction */ true);
  consume(parser, context, Token.WhileKeyword);
  consume(parser, context | Context.AllowRegExp, Token.LeftParen);
  const expression = parseExpression(parser, context);
  consume(parser, context | Context.AllowRegExp, Token.RightParen);
  consumeOpt(parser, context | Context.AllowRegExp, Token.Semicolon);
  return createDoWhileStatement(expression, statement, parser.nodeFlags, pos, parser.startPos);
}

// BlockStatement : Block
function parseBlockStatement(parser: ParserState, context: Context): BlockStatement {
  const pos = parser.startPos;
  if (consume(parser, context | Context.AllowRegExp, Token.LeftBrace)) {
    const block = parseBlock(parser, context);
    consume(parser, context | Context.AllowRegExp, Token.RightBrace);
    if (consumeOpt(parser, context, Token.Assign)) {
      reportErrorDiagnostic(
        parser,
        0,
        DiagnosticCode.Declaration_or_statement_expected_This_follows_a_block_of_statements_so_if_you_intended_to_write_a_destructuring_assignment_you_might_need_to_wrap_the_the_whole_assignment_in_parentheses
      );
    }
    return createBlockStatement(block, parser.nodeFlags, pos, parser.startPos);
  }

  return createBlockStatement(
    createBlock([], /* multiline */ false, NodeFlags.None, pos, parser.startPos),
    NodeFlags.None,
    pos,
    pos
  );
}

// Block : `{` StatementList `}`
function parseBlock(parser: ParserState, context: Context): Block {
  const pos = parser.startPos;
  const multiline = (parser.nodeFlags & NodeFlags.PrecedingLineBreak) !== 0;
  const statements = [];
  while (parser.token & Constants.BlockStatements) {
    statements.push(getCurrentNode(parser, context, parseStatementListItem));
  }
  return createBlock(statements, multiline, parser.nodeFlags, pos, parser.startPos);
}

// DebuggerStatement : `debugger` `;
function parseDebuggerStatement(parser: ParserState, context: Context): DebuggerStatement {
  const pos = parser.startPos;
  nextToken(parser, context | Context.AllowRegExp);
  parseSemicolon(parser, context);
  return createDebuggerStatement(parser.nodeFlags, pos, parser.startPos);
}

// BreakStatement :
//   `break` `;`
//   `break` [no LineTerminator here] LabelIdentifier `;`
//
// ContinueStatement :
//   `continue` `;`
//   `continue` [no LineTerminator here] LabelIdentifier `;
function parseBreakOrContinueStatement(
  parser: ParserState,
  context: Context,
  isContinue: boolean
): BreakStatement | ContinueStatement {
  const pos = parser.startPos;
  nextToken(parser, context | Context.AllowRegExp);
  let label = null;
  if (!canParseSemicolon(parser)) label = parseIdentifierReference(parser, context | Context.AllowRegExp);

  parseSemicolon(parser, context);

  return isContinue
    ? createContinueStatement(label as IdentifierReference, parser.nodeFlags, pos, parser.startPos)
    : createBreakStatement(label as IdentifierReference, parser.nodeFlags, pos, parser.startPos);
}

// EmptyStatement :
// ';'
function parseEmptyStatement(parser: ParserState, context: Context): EmptyStatement {
  const pos = parser.startPos;
  nextToken(parser, context | Context.AllowRegExp);
  return createEmptyStatement(parser.nodeFlags, pos, parser.startPos);
}

// ReturnStatement :
//   `return` `;`
//   `return` [no LineTerminator here] Expression `;`
function parseReturnStatement(parser: ParserState, context: Context): ReturnStatement {
  const pos = parser.startPos;
  nextToken(parser, context | Context.AllowRegExp);
  const expression = canParseSemicolon(parser)
    ? null
    : parseExpression(parser, (context | Context.DisallowIn) ^ Context.DisallowIn);
  parseSemicolon(parser, context);
  return createReturnStatement(expression, parser.nodeFlags, pos, parser.startPos);
}

// SwitchStatement :
//   `switch` `(` Expression `)` CaseBlock
function parseSwitchStatement(parser: ParserState, context: Context): SwitchStatement {
  const pos = parser.startPos;
  consume(parser, context, Token.SwitchKeyword);
  consume(parser, context | Context.AllowRegExp, Token.LeftParen);
  const expression = parseExpression(parser, context);
  consume(parser, context, Token.RightParen);
  const caseBlock = parseCaseBlock(parser, (context | Context.DisallowIn) ^ Context.DisallowIn);
  return createSwitchStatement(expression, caseBlock, parser.nodeFlags, pos, parser.startPos);
}

// CaseBlock :
//   `{` CaseClauses? `}`
//   `{` CaseClauses? DefaultClause CaseClauses? `}`
function parseCaseBlock(parser: ParserState, context: Context): CaseBlock {
  const pos = parser.startPos;
  consume(parser, context, Token.LeftBrace);
  const clauses = [];
  while (isCaseOrDefaultClause(parser.token)) {
    clauses.push(getCurrentNode(parser, context, parseCaseOrDefaultClause));
  }

  consume(parser, context | Context.AllowRegExp, Token.RightBrace);
  return createCaseBlock(clauses, parser.nodeFlags, pos, parser.startPos);
}

function isCaseOrDefaultClause(t: Token): boolean {
  return t === Token.DefaultKeyword || t === Token.CaseKeyword;
}

// CaseClauses :
//   CaseClause
//   CaseClauses CauseClause
// CaseClause :
//   `case` Expression `:` StatementList?
//
// DefaultClause :
//   `default` `:` StatementList?
function parseCaseOrDefaultClause(parser: ParserState, context: Context): CaseClause | DefaultClause {
  const statements = [];
  const pos = parser.startPos;
  if (consumeOpt(parser, context | Context.AllowRegExp, Token.CaseKeyword)) {
    const expression = parseExpression(parser, context);
    consume(parser, context | Context.AllowRegExp, Token.Colon);
    while (parser.token & (Token.IsBinaryOp | Token.IsUnaryOp | 0b00000000000000110101000000000000)) {
      statements.push(getCurrentNode(parser, context, parseStatementListItem));
    }
    return createCaseClause(expression, statements, parser.nodeFlags, pos, parser.startPos);
  }

  consume(parser, context, Token.DefaultKeyword);
  consume(parser, context | Context.AllowRegExp, Token.Colon);

  while (parser.token & (Token.IsBinaryOp | Token.IsUnaryOp | 0b00000000000000110101000000000000)) {
    statements.push(getCurrentNode(parser, context, parseStatementListItem));
  }
  return createDefaultClause(statements, parser.nodeFlags, pos, parser.startPos);
}

// WithStatement :
//   `with` `(` Expression `)` Statement
function parseWithStatement(parser: ParserState, context: Context): WithStatement {
  const pos = parser.startPos;
  nextToken(parser, context | Context.AllowRegExp);
  consume(parser, context | Context.AllowRegExp, Token.LeftParen);
  const expression = parseExpression(parser, context);
  consume(parser, context | Context.AllowRegExp, Token.RightParen);
  const statement = parseStatement(parser, context, /* allowFunction */ false);
  return createWithStatement(expression, statement, parser.nodeFlags, pos, parser.startPos);
}

// ThrowStatement :
//   `throw` [no LineTerminator here] Expression `;`
function parseThrowStatement(parser: ParserState, context: Context): ThrowStatement {
  const pos = parser.startPos;
  nextToken(parser, context | Context.AllowRegExp);
  const expression = parseExpression(parser, context);
  parseSemicolon(parser, context);
  return createThrowStatement(expression, parser.nodeFlags, pos, parser.startPos);
}

function canFollowContextualOfKeyword(parser: ParserState, context: Context) {
  nextToken(parser, context);
  if ((parser.token & (Token.FutureReserved | Token.IsIdentifier | Token.IsPatternStart)) === 0) return false;
  nextToken(parser, context);
  return parser.token === Token.RightParen;
}

// `for` `(` [lookahead != `let` `[`] Expression? `;` Expression? `;` Expression? `)` Statement
// `for` `(` `var` VariableDeclarationList `;` Expression? `;` Expression? `)` Statement
// `for` `(` LexicalDeclaration Expression? `;` Expression? `)` Statement
// `for` `(` [lookahead != `let` `[`] LeftHandSideExpression `in` Expression `)` Statement
// `for` `(` `var` ForBinding `in` Expression `)` Statement
// `for` `(` ForDeclaration `in` Expression `)` Statement
// `for` `(` [lookahead != `let`] LeftHandSideExpression `of` AssignmentExpression `)` Statement
// `for` `(` `var` ForBinding `of` AssignmentExpression `)` Statement
// `for` `(` ForDeclaration `of` AssignmentExpression `)` Statement
// `for` `await` `(` [lookahead != `let`] LeftHandSideExpression `of` AssignmentExpression `)` Statement
// `for` `await` `(` `var` ForBinding `of` AssignmentExpression `)` Statement
// `for` `await` `(` ForDeclaration `of` AssignmentExpression `)` Statement

function parseForStatement(parser: ParserState, context: Context): ForStatement | ForInStatement | ForOfStatement {
  const pos = parser.startPos;
  let isVariableDeclarationList = false;
  consume(parser, context, Token.ForKeyword);

  const isAwait = consumeOpt(parser, context, Token.AwaitKeyword);

  consume(parser, context | Context.AllowRegExp, Token.LeftParen);

  if (consumeOpt(parser, context, Token.Semicolon)) {
    const initializer = null;
    let incrementor = null;
    let condition = null;

    if (parser.token !== Token.Semicolon) condition = parseAssignmentExpression(parser, context);

    consume(parser, context, Token.Semicolon);

    if (parser.token !== Token.RightParen) incrementor = parseAssignmentExpression(parser, context);

    consume(parser, context, Token.RightParen);

    return createForStatement(
      initializer,
      incrementor,
      condition,
      isVariableDeclarationList,
      parseStatement(parser, context, /* allowFunction */ false),
      parser.nodeFlags,
      pos,
      parser.startPos
    );
  }

  let initializer!: Expression;

  const innerPos = parser.startPos;

  // 'var', 'let', 'const'
  if (parser.token === Token.VarKeyword || parser.token === Token.LetKeyword || parser.token === Token.ConstKeyword) {
    if (parser.token === Token.LetKeyword) {
      if (lookAhead(parser, context, nextKeywordCanFollowLexicalLet)) {
        nextToken(parser, context);
        const bindingList =
          parser.token === Token.OfKeyword && lookAhead(parser, context, canFollowContextualOfKeyword)
            ? createBindingList([], NodeFlags.None, pos, parser.startPos)
            : parseBindingList(parser, context | Context.DisallowIn, /* inForStatement */ true);

        initializer = createLexicalDeclaration(false, bindingList, parser.nodeFlags, innerPos, parser.startPos);
      } else {
        initializer = parseExpression(parser, context | Context.DisallowIn);
      }
    } else if (consumeOpt(parser, context, Token.ConstKeyword)) {
      const bindingList =
        parser.token === Token.OfKeyword && lookAhead(parser, context, canFollowContextualOfKeyword)
          ? createBindingList([], NodeFlags.None, pos, parser.startPos)
          : parseBindingList(parser, context | Context.DisallowIn, /* inForStatement */ true);
      initializer = createLexicalDeclaration(true, bindingList, parser.nodeFlags, innerPos, parser.startPos);
    } else {
      nextToken(parser, context);
      initializer = parseVariableDeclarationList(parser, context, /* inForStatement */ true);

      if (parser.token & Token.IsInOrOf) {
        initializer = createForBinding(initializer as any, parser.nodeFlags, innerPos, parser.startPos);
      }

      isVariableDeclarationList = true;
    }
  } else {
    initializer = parseExpression(parser, context | Context.DisallowIn);
  }

  if (
    isAwait
      ? consume(parser, context | Context.AllowRegExp, Token.OfKeyword)
      : consumeOpt(parser, context | Context.AllowRegExp, Token.OfKeyword)
  ) {
    const expression = parseAssignmentExpression(parser, context);
    consume(parser, context | Context.AllowRegExp, Token.RightParen);
    return createForOfStatement(
      initializer,
      expression,
      parseStatement(parser, context, /* allowFunction */ false),
      isAwait,
      parser.nodeFlags,
      pos,
      parser.startPos
    );
  }

  if (consumeOpt(parser, context | Context.AllowRegExp, Token.InKeyword)) {
    const expression = parseExpression(parser, context);
    consume(parser, context | Context.AllowRegExp, Token.RightParen);
    return createForInStatement(
      initializer,
      expression,
      parseStatement(parser, context, /* allowFunction */ false),
      parser.nodeFlags,
      pos,
      parser.startPos
    );
  }

  consume(parser, context, Token.Semicolon);

  const condition = parser.token === Token.Semicolon ? null : parseAssignmentExpression(parser, context);

  consume(parser, context, Token.Semicolon);

  const incrementor = parser.token === Token.RightParen ? null : parseAssignmentExpression(parser, context);

  consume(parser, context | Context.AllowRegExp, Token.RightParen);

  return createForStatement(
    initializer,
    incrementor,
    condition,
    isVariableDeclarationList,
    parseStatement(parser, context, /* allowFunction */ false),
    parser.nodeFlags,
    pos,
    parser.startPos
  );
}

// ExpressionStatement :
//   [lookahead != `{`, `function`, `async` [no LineTerminator here] `function`, `class`, `let` `[` ] Expression `;`
function parseExpressionOrLabeledStatement(
  parser: ParserState,
  context: Context,
  allowFunction: boolean
): ExpressionStatement | LabelledStatement {
  const { startPos, token } = parser;
  const expression = parseExpression(parser, context);
  if (isIdentifier(token, context) && consumeOpt(parser, context | Context.AllowRegExp, Token.Colon)) {
    // ES#sec-labelled-function-declarations Labelled Function Declarations
    const statement =
      !allowFunction ||
      // It's a syntax error if LabelledItem: FunctionDeclaration
      // is ever matched. Per Annex B.3.2 that modifies this text, this
      // applies only to strict mode code.
      context & (Context.OptionsDisableWebCompat | Context.Strict) ||
      parser.token !== Token.FunctionKeyword
        ? parseStatement(parser, context, allowFunction)
        : // GeneratorDeclaration is only matched by HoistableDeclaration in
          // StatementListItem, so generators can't be inside labels.
          parseFunctionDeclaration(parser, context, /* isDefault */ false);

    return createLabelledStatement(
      expression as IdentifierReference,
      statement,
      (context & Context.OptionsDisableWebCompat) !== Context.OptionsDisableWebCompat,
      parser.nodeFlags,
      startPos,
      parser.startPos
    );
  }
  parseSemicolon(parser, context);

  return createExpressionStatement(expression, NodeFlags.None, startPos, parser.startPos);
}

// Expression :
//   AssignmentExpression
//   Expression `,` AssignmentExpression
function parseExpression(parser: ParserState, context: Context): Expression {
  const pos = parser.startPos;
  // clear the decorator context when parsing Expression, as it should be unambiguous when parsing a decorator
  context = (context | Context.InDecoratorContext) ^ Context.InDecoratorContext;
  const expression = parseAssignmentExpression(parser, context);
  if (consumeOpt(parser, context | Context.AllowRegExp, Token.Comma)) {
    const expressions = [expression];

    do {
      expressions.push(parseAssignmentExpression(parser, context));
    } while (consumeOpt(parser, context | Context.AllowRegExp, Token.Comma));
    return createCommaOperator(expressions, parser.nodeFlags, pos, parser.startPos);
  }
  return expression;
}

function parseAssignmentExpression(parser: ParserState, context: Context): Expression {
  const { token, startPos } = parser;
  if (context & Context.InYieldContext && token === Token.YieldKeyword) {
    return parseYieldExpression(parser, context, startPos);
  }
  const left = parseBinaryExpression(parser, context, parseUnaryExpression(parser, context), 4, startPos);

  if (parser.token & Token.IsAssignOp) {
    const operator = KeywordDescTable[parser.token & Token.Type] as AssignOp | LogicalOp;
    nextToken(parser, context | Context.AllowRegExp);
    return createAssignmentExpression(
      left,
      operator,
      parseAssignmentExpression(parser, context),
      parser.nodeFlags,
      startPos,
      parser.startPos
    );
  }

  if (left.kind & NodeKind.IsIdentifier) {
    // `async` [no LineTerminator here] IdentifierReference [no LineTerminator here] `=>`
    if (
      token === Token.AsyncKeyword &&
      parser.token & (Token.FutureReserved | Token.IsIdentifier) &&
      lookAhead(parser, context, nextTokenIsArrow)
    ) {
      return parseArrowFunction(
        parser,
        context,
        createArrowParameters(
          null,
          [
            createFormalParameter(
              /* ellipsis */ false,
              parseBindingIdentifier(parser, context),
              /* optional */ false,
              /* type */ null,
              /* initializer */ null,
              /* decorators */ null,
              /* accessModifier */ null,
              /* isReadOnly */ false,
              NodeFlags.None,
              parser.pos,
              parser.startPos
            )
          ],
          null,
          null,
          /* trailingComma */ false,
          parser.nodeFlags,
          startPos,
          parser.startPos
        ),
        token === Token.AsyncKeyword,
        /* isParenthesized */ false,
        startPos
      );
    }

    if (parser.token === Token.Arrow) {
      left.kind = NodeKind.BindingIdentifier | NodeKind.IsChildless;
      return parseArrowFunction(
        parser,
        context,
        createArrowParameters(
          null,
          [
            createFormalParameter(
              false,
              left as any,
              false,
              parseTypeAnnotation(parser, context),
              null,
              null,
              null,
              /* isReadOnly */ false,
              NodeFlags.None,
              parser.startPos,
              parser.startPos
            )
          ],
          null,
          null,
          /* trailingComma */ false,
          parser.nodeFlags,
          startPos,
          parser.startPos
        ),
        token === Token.AsyncKeyword,
        /* isParenthesized */ false,
        startPos
      );
    }
  }
  return left.kind === NodeKind.ArrowParameters && parser.token === Token.Arrow
    ? parseArrowFunction(parser, context, left, token === Token.AsyncKeyword, /* isParenthesized */ true, startPos)
    : parseConditionalExpression(parser, context, left, startPos);
}

// YieldExpression :
//   `yield`
//   `yield` [no LineTerminator here] AssignmentExpression
//   `yield` [no LineTerminator here] `*` AssignmentExpression
function parseYieldExpression(parser: ParserState, context: Context, pos: number): YieldExpression {
  nextToken(parser, context | Context.AllowRegExp);
  if (
    (parser.nodeFlags & NodeFlags.PrecedingLineBreak) === 0 &&
    (parser.token === Token.Multiply || parser.token & Constants.YieldDelegate)
  ) {
    return createYieldExpression(
      consumeOpt(parser, context | Context.AllowRegExp, Token.Multiply),
      parseExpression(parser, context),
      parser.nodeFlags,
      pos,
      parser.startPos
    );
  }
  // if the next token is not on the same line as yield.  or we don't have an '*' or
  // the start of an expression, then this is just a simple "yield" expression.
  return createYieldExpression(false, null, parser.nodeFlags, pos, parser.startPos);
}

// ConditionalExpression :
//   ShortCircuitExpression
//   ShortCircuitExpression `?` AssignmentExpression `:` AssignmentExpression
function parseConditionalExpression(
  parser: ParserState,
  context: Context,
  shortCircuit: any,
  pos: number
): ConditionalExpression {
  if (parser.token === Token.QuestionMark) {
    consume(parser, context | Context.AllowRegExp, Token.QuestionMark);
    const consequent = parseAssignmentExpression(
      parser,
      (context | 0b00001001000000000010000000000000) ^ 0b00001000000000000010000000000000
    );
    consume(parser, context | Context.AllowRegExp, Token.Colon);
    const alternate = parseAssignmentExpression(parser, context);
    return createConditionalExpression(shortCircuit, consequent, alternate, parser.nodeFlags, pos, parser.startPos);
  }
  return shortCircuit;
}

function parseBinaryExpression(
  parser: ParserState,
  context: Context,
  left: any,
  minPrec: number,
  pos: number
): BinaryExpression {
  const bit = -((context & Context.DisallowIn) > 0) & Token.InKeyword;
  let t: Token;
  let prec: number;

  while ((parser.token & Token.IsBinaryOp) > 0) {
    t = parser.token;
    prec = t & Token.Precedence;
    if (prec + (((t === Token.Exponentiate) as any) << 8) - (((bit === t) as any) << 12) <= minPrec) return left;
    if (parser.token === Token.AsKeyword) {
      // Make sure we *do* perform ASI for constructs like this:
      //    var x = foo
      //    as (Bar)
      // This should be parsed as an initialized variable, followed
      // by a function call to 'as' with the argument 'Bar'
      if ((parser.nodeFlags & NodeFlags.PrecedingLineBreak) !== 0) break;
      left = parseAsExpression(parser, context, left);
    } else {
      nextToken(parser, context | Context.AllowRegExp);
      left = createBinaryExpression(
        left,
        KeywordDescTable[t & Token.Type] as BinaryOperator,
        parseBinaryExpression(parser, context, parseUnaryExpression(parser, context), prec, parser.startPos),
        parser.nodeFlags,
        pos,
        parser.startPos
      );
    }
  }
  return left;
}

function parseAsExpression(parser: ParserState, context: Context, left: Expression): AsExpression {
  const pos = parser.startPos;
  nextToken(parser, context);
  return createAsExpression(
    left,
    parseType(parser, context | Context.AllowConditionalTypes),
    parser.nodeFlags,
    pos,
    parser.startPos
  );
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
function parseUnaryExpression(parser: ParserState, context: Context): Expression | TypeAssertion {
  if (context & Context.InAwaitContext && parser.token === Token.AwaitKeyword) {
    return parseAwaitExpression(parser, context);
  }
  if ((parser.token & Token.IsUnaryOp) === 0) return parseUpdateExpression(parser, context);
  const pos = parser.startPos;
  const operator = KeywordDescTable[parser.token & Token.Type] as UnaryOperator;
  nextToken(parser, context | Context.AllowRegExp);
  const operand = parseUnaryExpression(parser, context) as UnaryExpression;
  if (parser.token === Token.Exponentiate) {
    reportErrorDiagnostic(
      parser,
      0,
      DiagnosticCode.An_unary_expression_with_the_0_operator_is_not_allowed_in_the_left_hand_side_of_an_exponentiation_expression,
      KeywordDescTable[parser.token & Token.Type]
    );
  }
  return createUnaryExpression(operator, operand, parser.nodeFlags, pos, parser.startPos);
}

// AwaitExpression : `await` UnaryExpression
function parseAwaitExpression(parser: ParserState, context: Context): AwaitExpression {
  const pos = parser.startPos;
  nextToken(parser, context | Context.AllowRegExp);
  return createAwaitExpression(
    parseUnaryExpression(parser, context) as UnaryExpression,
    parser.nodeFlags,
    pos,
    parser.startPos
  );
}

// UpdateExpression :
//   LeftHandSideExpression
//   LeftHandSideExpression [no LineTerminator here] `++`
//   LeftHandSideExpression [no LineTerminator here] `--`
//   `++` UnaryExpression
//   `--` UnaryExpression
function parseUpdateExpression(
  parser: ParserState,
  context: Context
): PrefixUpdateExpression | PostfixUpdateExpression | Expression {
  const pos = parser.startPos;

  if (parser.token & Token.IsUpdateOp) {
    const operator = KeywordDescTable[parser.token & Token.Type] as UpdateOp;
    nextToken(parser, context | Context.AllowRegExp);
    return createPrefixUpdateExpression(
      operator,
      parseUnaryExpression(parser, context) as UnaryExpression,
      parser.nodeFlags,
      pos,
      parser.startPos
    );
  }

  if (parser.token === Token.LessThan) {
    if (context & Context.OptionsJSX && lookAhead(parser, context, nextTokenIsIdentifierOrKeywordOrGreaterThan)) {
      return parseJsxElementOrFragment(parser, context, /*inExpressionContext*/ true);
    }

    if (context & Context.InArrowContext) return parseTypeAssertion(parser, context);

    const typeParameters = tryParse(parser, context, nextProductionIsTypeParameter);

    if (!typeParameters) return parseTypeAssertion(parser, context);

    return parseCoverParenthesizedExpressionAndArrowParameterList(
      parser,
      context | Context.InArrowContext,
      typeParameters
    );
  }

  const operand = parseLeftHandSideExpression(parser, context, /* allowCalls */ true);

  if (parser.token & Token.IsUpdateOp && (parser.nodeFlags & NodeFlags.PrecedingLineBreak) === 0) {
    const operator = KeywordDescTable[parser.token & Token.Type] as UpdateOp;
    nextToken(parser, context);
    return createPostfixUpdateExpression(operator, operand, parser.nodeFlags, pos, parser.startPos);
  }
  return operand;
}

function nextProductionIsTypeParameter(parser: ParserState, context: Context) {
  const expert = parseTypeParameters(parser, context | Context.AllowConditionalTypes);
  return parser.token === Token.LeftParen ? expert : undefined;
}

function nextTokenIsIdentifierOrKeywordOrGreaterThan(parser: ParserState, context: Context) {
  nextToken(parser, context);
  return parser.token & 0b00000000000000000111000000000000 || parser.token === Token.GreaterThan;
}

// IdentifierName
// IdentifierReference
function parsePropertyOrPrivatePropertyName(parser: ParserState, context: Context): IdentifierName | PrivateIdentifier {
  const pos = parser.startPos;
  if (parser.token & (Token.IsIdentifier | Token.Keyword | Token.FutureReserved)) {
    return parser.token === Token.PrivateIdentifier
      ? parsePrivateIdentifier(parser, context)
      : parseIdentifierName(parser, context);
  }

  // For cases like `(foo.)` where we will hit the ')' instead of discovering a property.
  // To avoid consuming the ')' - which will cause the parse of the parentheses to fail - we
  // return an dummy identifier without priming the scanner.
  reportErrorDiagnostic(parser, 0, DiagnosticCode.Dot_property_must_be_an_identifier);
  return createIdentifierName('', '', parser.nodeFlags, pos, pos);
}

function parseLeftHandSideExpression(parser: ParserState, context: Context, allowCalls: boolean): Expression {
  let member = parsePrimaryExpression(parser, context);

  const check = allowCalls ? Token.IsPropertyOrCall : Token.IsMember;
  while (parser.token & check) {
    const pos = parser.startPos;

    switch (parser.token) {
      /* Property */
      case Token.Period:
        nextToken(parser, context);
        member = createPropertyAccessExpression(
          member,
          parsePropertyOrPrivatePropertyName(parser, context),
          parser.nodeFlags,
          pos,
          parser.startPos
        );
        break;

      /* Property */
      case Token.LeftBracket:
        // when in the [Decorator] context, we do not parse ElementAccess as it could be part of a ComputedPropertyName
        if ((context & Context.InDecoratorContext) === 0) {
          nextToken(parser, context | Context.AllowRegExp);
          let expression!: Expression;
          if (parser.token === Token.RightBracket) {
            reportErrorDiagnostic(parser, 0, DiagnosticCode.An_element_access_expression_should_take_an_argument);
            expression = createDummyIdentifier(pos, pos);
          } else {
            expression = parseExpression(parser, (context | Context.DisallowIn) ^ Context.DisallowIn);
          }
          consume(parser, context, Token.RightBracket);
          member = createElementAccessExpression(member, expression, parser.nodeFlags, pos, parser.startPos);
        }
        break;

      /* Call */
      case Token.LeftParen:
        // `async` [no LineTerminator here] `(`
        const argumentList: any = parseCoverCallExpressionAndAsyncArrowHead(
          parser,
          (context | Context.DisallowIn) ^ Context.DisallowIn
        );
        if (member.text === 'async' && argumentList.kind === NodeKind.ArrowParameters) return argumentList;
        member = createCallExpression(member, null, argumentList, parser.nodeFlags, pos, parser.startPos);
        break;

      /* ! */
      case Token.Negate:
        if ((parser.nodeFlags & NodeFlags.PrecedingLineBreak) !== 0) return member;
        member = parseNonNullExpression(parser, context, member, pos);
        break;

      /* < */
      case Token.LessThan:
        const typeArguments: any = tryParse(
          parser,
          context | Context.InTypes | Context.AllowConditionalTypes,
          parseTypeArgumentsInExpression as any
        );
        if (!typeArguments) return member;
        member = createCallExpression(
          member,
          typeArguments,
          parseArguments(parser, context),
          parser.nodeFlags,
          pos,
          parser.startPos
        );
        break;

      /* Optional Property */
      case Token.QuestionMarkPeriod:
        member = {
          kind: NodeKind.OptionalExpression,
          member,
          chain: parseOptionalChain(parser, (context | Context.DisallowIn) ^ Context.DisallowIn),
          flags: NodeFlags.None,
          pos,
          end: parser.startPos
        };
        break;

      default:
        member = createTaggedTemplate(
          member,
          null,
          parser.token === Token.TemplateTail
            ? parseTemplateTail(parser, context)
            : parseTemplateExpression(parser, context | Context.TaggedTemplate),
          false,
          parser.nodeFlags,
          pos,
          parser.startPos
        );
    }
  }
  return member;
}

function nextTokenIsIdentifierOrPatternOnSameLine(parser: ParserState, context: Context): boolean {
  nextToken(parser, context);
  return (
    (parser.token & (Token.IsIdentifier | Token.IsPatternStart | Token.FutureReserved)) !== 0 &&
    (parser.nodeFlags & NodeFlags.PrecedingLineBreak) === 0
  );
}

function parseCoverCallExpressionAndAsyncArrowHead(
  parser: ParserState,
  context: Context
): ArrowParameters | ArgumentList {
  nextToken(parser, context | Context.AllowRegExp);

  let expression!: Expression;
  const pos = parser.pos;
  let trailingComma = false;
  let state = Tristate.False;

  const elements: any = [];

  // Simple cases: "async () =>", "async (): ", and  "async () {".
  if (parser.token === Token.RightParen) {
    state = Tristate.Unknown;
  }

  let innerPos = parser.startPos;

  while (parser.token & 0b00000110001001100101000000000000) {
    if (parser.token & Token.IsAccessModifier && lookAhead(parser, context, nextTokenIsIdentifierOrPatternOnSameLine)) {
      state = Tristate.True;
      expression = parseFormalParameter(parser, context);
    } else if (parser.token & 0b00000000000010000101000000000000) {
      if (context & Context.InYieldContext && parser.token === Token.YieldKeyword) {
        state = Tristate.False;
        expression = parseYieldExpression(parser, context, innerPos);
      } else {
        const token = parser.token;
        expression = parseBinaryExpression(parser, context, parseUnaryExpression(parser, context), 4, innerPos);
        if (expression.kind & (NodeKind.IsIdentifier | NodeKind.IsArrayOrObjectLiteral)) {
          // If we have "async (a?:" or "async (a?," or "async (a?=" or "async (a?)" then this must be a optional
          // type-annotated parameter in an arrow function expression or a conditional expression
          // in an argument list.
          if (consumeOpt(parser, context, Token.QuestionMark)) {
            if (parser.token & 0b00000000001101100101000000000000) {
              // If we have "(a ? b :" then this is part of an conditional expression in an argument list
              const consequent = tryParse(parser, context, nextIsMaybeConditionalExpr);

              if (consequent) {
                state = Tristate.False;
                expression = createConditionalExpression(
                  expression,
                  consequent,
                  parseAssignmentExpression(parser, context),
                  parser.nodeFlags, // this *could* contain a parse error bit
                  innerPos,
                  parser.startPos
                );
              }
              // This has to be something like "async (a?" or "async (a?:"
            } else {
              state = Tristate.True;
              expression = createFormalParameter(
                false,
                reinterpretToPattern(expression, parser, context),
                true,
                parseTypeAnnotation(parser, context),
                parseInitializer(parser, context),
                null,
                null,
                /* isReadOnly */ false,
                NodeFlags.None,
                innerPos,
                parser.startPos
              );
            }

            // If we have something like "(a:", then we must have a
            // type-annotated parameter in an arrow function expression.
          } else if (parser.token === Token.Colon) {
            state = Tristate.True;
            expression = createFormalParameter(
              false,
              reinterpretToPattern(expression, parser, context),
              false,
              parseTypeAnnotation(parser, context),
              parseInitializer(parser, context),
              null,
              null,
              /* isReadOnly */ false,
              parser.nodeFlags,
              innerPos,
              parser.startPos
            );
          } else {
            // If we have "async a," or "async (a=" or "async (a)" this *could* be an async arrow function
            state = Tristate.Unknown;
            if (parser.token & Token.IsAssignOp) {
              // If we have "(a %= b:" then this is definitely not an arrow function
              if (parser.token !== Token.Assign) state = Tristate.False;
              const operator = KeywordDescTable[parser.token & Token.Type] as AssignOp | LogicalOp;
              nextToken(parser, context | Context.AllowRegExp);
              expression = createAssignmentExpression(
                expression,
                operator,
                parseAssignmentExpression(parser, context) as any,
                parser.nodeFlags,
                innerPos,
                parser.startPos
              );
            }

            // If we have "(async=>" then this is definitely not an arrow function
            if (
              token === Token.AsyncKeyword &&
              parser.token & (Token.FutureReserved | Token.IsIdentifier) &&
              lookAhead(parser, context, nextTokenIsArrow)
            ) {
              state = Tristate.False;
              expression = parseArrowFunction(
                parser,
                context,
                createArrowParameters(
                  null,
                  [
                    createFormalParameter(
                      /* ellipsis */ false,
                      parseBindingIdentifier(parser, context),
                      /* optional */ false,
                      /* type */ null,
                      /* initializer */ null,
                      /* decorators */ null,
                      /* accessModifier */ null,
                      /* isReadOnly */ false,
                      NodeFlags.None,
                      parser.startPos,
                      parser.startPos
                    )
                  ],
                  null,
                  null,
                  trailingComma,
                  parser.nodeFlags,
                  innerPos,
                  parser.startPos
                ),
                token === Token.AsyncKeyword,
                /* isParenthesized */ false,
                innerPos
              );
            }
          }
        } else if (parser.token === Token.Assign) {
          state = Tristate.False;
          const operator = KeywordDescTable[parser.token & Token.Type] as AssignOp | LogicalOp;
          nextToken(parser, context | Context.AllowRegExp);
          expression = createAssignmentExpression(
            expression,
            operator,
            parseAssignmentExpression(parser, context),
            parser.nodeFlags,
            innerPos,
            parser.startPos
          );
        }

        // If we have something like "a(x && y ? 1 : 2" then this is definitely not an async arrow function.
        if (parser.token === Token.QuestionMark) {
          state = Tristate.False;
          expression = parseConditionalExpression(parser, context, expression, innerPos);
        }

        if (
          parser.token === Token.Arrow &&
          (token & (Token.FutureReserved | Token.IsIdentifier) || expression.kind === NodeKind.ArrowParameters)
        ) {
          const isParenthesized = expression.kind === NodeKind.ArrowParameters;
          if (!isParenthesized) {
            expression = createArrowParameters(
              null,
              convertToArrowParams(parser, context, elements, innerPos),
              null,
              null,
              trailingComma,
              parser.nodeFlags,
              innerPos,
              parser.startPos
            );
          }
          expression = parseArrowFunction(
            parser,
            context,
            convertToArrowParams(parser, context, elements, innerPos),
            token === Token.AsyncKeyword,
            isParenthesized,
            innerPos
          );
        }
      }
    } else if (parser.token & Token.IsEllipsis) {
      state = Tristate.Unknown;
      nextToken(parser, context | Context.AllowRegExp);
      if (context & Context.InYieldContext && parser.token === Token.YieldKeyword) {
        state = Tristate.False;
        expression = parseYieldExpression(parser, context, innerPos);
      } else if (parser.token & 0b00000000000010000101000000000000) {
        const token = parser.token;
        expression = parseBinaryExpression(parser, context, parseUnaryExpression(parser, context), 4, innerPos);

        if (expression.kind & (NodeKind.IsIdentifier | NodeKind.IsArrayOrObjectLiteral)) {
          if (consumeOpt(parser, context, Token.QuestionMark)) {
            if (parser.token & 0b00000000001101100101000000000000) {
              // If we have "(...a?b:" or "(...[a]?b:" then this is part of an conditional expression in an argument list
              const consequent = tryParse(parser, context, nextIsMaybeConditionalExpr);

              if (consequent) {
                state = Tristate.False;
                expression = createConditionalExpression(
                  expression,
                  consequent,
                  parseAssignmentExpression(parser, context),
                  parser.nodeFlags, // this *could* contain a parse error bit
                  innerPos,
                  parser.startPos
                );
              } else if (parser.token === Token.Assign) {
                state = Tristate.True;
                expression = createFormalParameter(
                  true,
                  expression as any,
                  true,
                  null,
                  parseInitializer(parser, context),
                  null,
                  null as any,
                  /* isReadOnly */ false,
                  NodeFlags.None,
                  innerPos,
                  parser.startPos
                );
              }
              // This has to be something like "async (a?" or "async (a?:"
            } else {
              state = Tristate.True;
              expression = createFormalParameter(
                true,
                expression as any,
                true,
                parseTypeAnnotation(parser, context),
                parseInitializer(parser, context),
                null,
                null,
                /* isReadOnly */ false,
                NodeFlags.None,
                innerPos,
                parser.startPos
              );
            }

            // If we have something like "async (...a:" or "async (...[a]? b :", then we must have a
            // type-annotated parameter in an arrow function expression.
          } else if (parser.token === Token.Colon) {
            state = Tristate.True;

            expression = createFormalParameter(
              true,
              expression as any,
              false,
              parseTypeAnnotation(parser, context),
              parseInitializer(parser, context),
              null,
              null,
              /* isReadOnly */ false,
              parser.nodeFlags,
              innerPos,
              parser.startPos
            );
          } else {
            // If we have something like "async (...a," or "async (...a=" or "async (...[]" or "async (...{a}" this *could* be an arrow function
            // However, "=" can't legally follow "async (...a=" or "async (...{x}=" or "async (...[]=" in formal parameters, but we allow this so that
            // we can report them in the grammar checker.
            state = Tristate.Unknown;
            if (parser.token & Token.IsAssignOp) {
              // If we have "(a %= b:" then this is definitely not an arrow function
              if (parser.token !== Token.Assign) state = Tristate.False;
              const operator: any = KeywordDescTable[parser.token & Token.Type] as AssignOp | LogicalOp;
              nextToken(parser, context | Context.AllowRegExp);
              expression = createAssignmentExpression(
                expression,
                operator,
                parseAssignmentExpression(parser, context),
                parser.nodeFlags,
                innerPos,
                parser.startPos
              );
            }
          }
        }

        if (expression.kind === NodeKind.ArrowParameters && parser.token === Token.Arrow) {
          expression = parseArrowFunction(
            parser,
            context,
            expression,
            token === Token.AsyncKeyword,
            /* isParenthesized */ true,
            innerPos
          );
        }

        // If we have something like "a(...x && y ? 1 : 2" then this is definitely not an async arrow function.
        if (parser.token === Token.QuestionMark) {
          state = Tristate.False;
          expression = parseConditionalExpression(parser, context, expression, innerPos);
        }

        if (
          parser.token === Token.Arrow &&
          (token & (Token.FutureReserved | Token.IsIdentifier) || expression.kind === NodeKind.ArrowParameters)
        ) {
          const isParenthesized = expression.kind === NodeKind.ArrowParameters;

          if (!isParenthesized) {
            expression.kind = NodeKind.BindingIdentifier | NodeKind.IsChildless;
            expression = createArrowParameters(
              null,
              [
                createFormalParameter(
                  false,
                  expression as any,
                  false,
                  parseTypeAnnotation(parser, context),
                  null,
                  null,
                  null,
                  /* isReadOnly */ false,
                  NodeFlags.None,
                  parser.startPos,
                  parser.startPos
                )
              ],
              null,
              null,
              trailingComma,
              parser.nodeFlags,
              innerPos,
              parser.startPos
            );
          }
          expression = parseArrowFunction(
            parser,
            context,
            expression,
            token === Token.AsyncKeyword,
            isParenthesized,
            innerPos
          );
        }

        expression = createSpreadElement(expression, parser.nodeFlags, innerPos, parser.startPos);
      } else {
        state = Tristate.False;
        expression = createSpreadElement(
          parseAssignmentExpression(parser, context),
          parser.nodeFlags,
          innerPos,
          parser.startPos
        );
      }
      // If we had "(" followed by something that's not an identifier, '...' or binding pattern,
      // then this definitely is an call expression.
    } else {
      state = Tristate.False;
      expression = parseAssignmentExpression(parser, context);
    }

    elements.push(expression);

    if (parser.token === Token.RightParen) break;

    if (consumeOpt(parser, context | Context.AllowRegExp, Token.Comma)) {
      if (!state) elements.push(createOmittedExpression(NodeFlags.None, innerPos, innerPos));
      if (parser.token === Token.RightParen) {
        trailingComma = true;
        break;
      }
      innerPos = parser.startPos;
      continue;
    }

    innerPos = parser.startPos;

    // We didn't get a comma, and the list wasn't terminated, explicitly so give
    // a good error message instead
    reportErrorDiagnostic(parser, 0, DiagnosticCode._0_expected, ',');
  }

  consumeOpt(parser, context, Token.RightParen);

  if (state) {
    if (parser.token === Token.Colon) {
      const isType =
        context & Context.InConditionalContext
          ? lookAhead(parser, context, () => {
              nextToken(parser, context);
              parseAssignmentExpression(parser, context);
              return parser.token === Token.Arrow;
            })
          : true;

      if (isType && consumeOpt(parser, context, Token.Colon)) {
        const type = parseTypeOrTypePredicate(parser, context);
        if (parser.token !== Token.Arrow) {
          reportErrorDiagnostic(parser, 0, DiagnosticCode._0_expected, '=>');
        }

        return createArrowParameters(
          null,
          convertToArrowParams(parser, context, elements, innerPos),
          type,
          null,
          false,
          parser.nodeFlags,
          pos,
          parser.startPos
        );
      }
    }

    if (parser.token === Token.Arrow) {
      return createArrowParameters(
        null,
        convertToArrowParams(parser, context, elements, innerPos),
        null,
        null,
        trailingComma,
        NodeFlags.None,
        pos,
        parser.startPos
      );
    }
  }

  return createArgumentList(elements, trailingComma, parser.nodeFlags, pos, parser.startPos);
}

function nextTokenIsArrow(parser: ParserState, context: Context): boolean | any {
  nextToken(parser, context);
  return parser.token === Token.Arrow;
}
function nextIsMaybeConditionalExpr(parser: ParserState, context: Context): Expression | undefined {
  const consequent = parseAssignmentExpression(
    parser,
    (context | Context.InConditionalContext | Context.DisallowIn) ^ Context.DisallowIn
  );
  return consume(parser, context, Token.Colon) ? consequent : undefined;
}

function parseTypeArgumentsInExpression(parser: ParserState, context: Context): any {
  nextToken(parser, context);
  const pos = parser.startPos;
  const typeArguments = [];
  while (parser.token & 0b01100000000010000101000000000000) {
    typeArguments.push(getCurrentNode(parser, context, parseType));
    if (parser.token === Token.GreaterThan) break;
    if (consumeOpt(parser, context, Token.Comma)) continue;
  }

  if (parser.token !== Token.GreaterThan) return false;
  nextToken(parser, context);
  return pos !== parser.startPos && canFollowTypeArgumentsInExpression(parser)
    ? createTypeArguments(typeArguments, parser.nodeFlags, pos, parser.startPos)
    : false;
}

function canFollowTypeArgumentsInExpression(parser: ParserState): boolean {
  switch (parser.token) {
    case Token.LeftParen: // foo<x>(
    // this case are the only case where this token can legally follow a type argument
    // list.  So we definitely want to treat this as a type arg list.

    case Token.Period: // foo<x>.
    case Token.RightParen: // foo<x>)
    case Token.RightBracket: // foo<x>]
    case Token.Colon: // foo<x>:
    case Token.Semicolon: // foo<x>;
    case Token.QuestionMark: // foo<x>?
    case Token.LooseEqual: // foo<x> ==
    case Token.StrictEqual: // foo<x> ===
    case Token.LooseNotEqual: // foo<x> !=
    case Token.StrictNotEqual: // foo<x> !==
    case Token.LogicalAnd: // foo<x> &&
    case Token.LogicalOr: // foo<x> ||
    case Token.BitwiseXor: // foo<x> ^
    case Token.BitwiseAnd: // foo<x> &
    case Token.BitwiseOr: // foo<x> |
    case Token.RightBrace: // foo<x> }
    case Token.EndOfSource: // foo<x>
      // these cases can't legally follow a type arg list.  However, they're not legal
      // expressions either.  The user is probably in the middle of a generic type. So
      // treat it as such.
      return true;

    case Token.Comma: // foo<x>,
    case Token.LeftBrace: // foo<x> {
    // We don't want to treat these as type arguments.  Otherwise we'll parse this
    // as an invocation expression.  Instead, we want to parse out the expression
    // in isolation from the type arguments.

    default:
      // Anything else treat as an expression.
      return false;
  }
}
function parseNonNullExpression(parser: ParserState, context: Context, member: any, pos: number): NonNullExpression {
  nextToken(parser, context);
  return createNonNullExpression(member, parser.nodeFlags, pos, parser.startPos);
}

function parseOptionalChain(parser: ParserState, context: Context): any {
  consume(parser, context, Token.QuestionMarkPeriod);
  let chain = null;
  let pos = parser.startPos;

  if (consumeOpt(parser, context | Context.AllowRegExp, Token.LeftBracket)) {
    consumeOpt(parser, context, Token.RightBracket);
    chain = createElementAccessChain(chain, parseExpression(parser, context), parser.nodeFlags, pos, parser.startPos);
  } else if (parser.token === Token.LeftParen) {
    chain = createCallChain(chain, null, parseArguments(parser, context), parser.nodeFlags, pos, parser.startPos);
  } else if (parser.token & (Token.Keyword | Token.FutureReserved | Token.IsIdentifier)) {
    chain = createPropertyAccessChain(
      chain,
      parsePropertyOrPrivatePropertyName(parser, context),
      parser.nodeFlags,
      pos,
      parser.startPos
    );
  } else {
    reportErrorDiagnostic(parser, 0, DiagnosticCode.Invalid_optional_chain_in_tagged_template);
    chain = createTaggedTemplate(
      chain as any,
      null,
      parser.token === Token.TemplateTail
        ? parseTemplateTail(parser, context)
        : parseTemplateExpression(parser, context),
      true,
      parser.nodeFlags,
      pos,
      parser.startPos
    );
  }

  chain = {
    kind: NodeKind.OptionalChain,
    chain,
    flags: NodeFlags.None,
    pos,
    end: parser.startPos
  };

  while (true) {
    pos = parser.startPos;
    if (consumeOpt(parser, context | Context.AllowRegExp, Token.Period)) {
      chain = createPropertyAccessChain(
        chain as any,
        parsePropertyOrPrivatePropertyName(parser, context),
        parser.nodeFlags,
        pos,
        parser.startPos
      );
      if (chain.expression.kind === NodeKind.PrivateIdentifier) {
        reportErrorDiagnostic(parser, 0, DiagnosticCode.An_optional_chain_cannot_contain_private_identifiers);
      }
    } else if (parser.token === Token.LeftParen) {
      chain = createCallChain(
        chain as any,
        null,
        parseArguments(parser, context),
        parser.nodeFlags,
        pos,
        parser.startPos
      );
    } else if (consumeOpt(parser, context | Context.AllowRegExp, Token.LeftBracket)) {
      chain = createElementAccessChain(
        chain as any,
        parseExpression(parser, context),
        parser.nodeFlags,
        pos,
        parser.startPos
      );
      consumeOpt(parser, context, Token.RightBracket);
    } else if (parser.token & (Token.Keyword | Token.FutureReserved | Token.IsIdentifier)) {
      chain = createPropertyAccessChain(
        chain as any,
        parsePropertyOrPrivatePropertyName(parser, context),
        parser.nodeFlags,
        pos,
        parser.startPos
      );
      if (chain.expression.kind === NodeKind.PrivateIdentifier) {
        reportErrorDiagnostic(parser, 0, DiagnosticCode.An_optional_chain_cannot_contain_private_identifiers);
      }
    } else {
      if (parser.token === Token.NoSubstitutionTemplateLiteral || parser.token === Token.TemplateHead) {
        reportErrorDiagnostic(parser, 0, DiagnosticCode.Invalid_optional_chain_in_tagged_template);
        chain = createTaggedTemplate(
          chain as any,
          null,
          parser.token === Token.TemplateTail
            ? parseTemplateTail(parser, context)
            : parseTemplateExpression(parser, context),
          true,
          parser.nodeFlags,
          pos,
          parser.startPos
        );
      }

      return chain;
    }
  }
}

function parseArguments(parser: ParserState, context: Context): ArgumentList {
  consume(parser, context | Context.AllowRegExp, Token.LeftParen);
  const result = parseArgumentList(parser, context);
  consume(parser, context, Token.RightParen);
  return result;
}

function parseArgumentOrArrayLiteralElement(parser: ParserState, context: Context): Expression {
  return parser.token & Token.IsEllipsis
    ? parseSpreadElement(parser, context)
    : parser.token & Token.IsComma
    ? createOmittedExpression(NodeFlags.None, parser.startPos, parser.startPos)
    : parseAssignmentExpression(parser, context);
}

function parseArgumentList(parser: ParserState, context: Context): ArgumentList {
  const pos = parser.startPos;

  let trailingComma = false;

  const elements = [];

  while (parser.token & 0b00000110001001100101000000000000) {
    elements.push(getCurrentNode(parser, context, parseArgumentOrArrayLiteralElement));

    if (parser.token === Token.RightParen) break;
    if (consumeOpt(parser, context | Context.AllowRegExp, Token.Comma)) {
      if (parser.token === Token.RightParen) {
        trailingComma = true;
        break;
      }
      continue;
    }
    // We didn't get a comma, and the list wasn't terminated, explicitly so give
    // a good error message instead
    reportErrorDiagnostic(parser, 0, DiagnosticCode._0_expected, ',');
  }

  return createArgumentList(elements, trailingComma, parser.nodeFlags, pos, parser.startPos);
}

function parseSpreadElement(parser: ParserState, context: Context): SpreadElement {
  const pos = parser.startPos;
  nextToken(parser, context | Context.AllowRegExp);
  return createSpreadElement(parseAssignmentExpression(parser, context), parser.nodeFlags, pos, parser.startPos);
}

function parseTemplateExpression(parser: ParserState, context: Context): TemplateExpression {
  const pos = parser.startPos;
  const templateSpans = [];
  do {
    templateSpans.push(parseTemplateSpan(parser, context));
  } while ((parser.token = scanTemplateTail(parser, context)) === Token.TemplateCont);
  return createTemplateExpression(
    templateSpans,
    parseTemplateTail(parser, context),
    parser.nodeFlags,
    pos,
    parser.startPos
  );
}

function parseTemplateSpan(parser: ParserState, context: Context): TemplateSpan {
  const { startPos, tokenValue, templateRaw } = parser;
  consume(parser, context | Context.AllowRegExp, Token.TemplateCont);
  const expression = parseExpression(parser, (context | Context.DisallowIn) ^ Context.DisallowIn);
  return createTemplateSpan(templateRaw, tokenValue, expression, parser.nodeFlags, startPos, parser.startPos);
}

function parseTemplateTail(parser: ParserState, context: Context): TemplateTail {
  const { startPos, tokenValue, nodeFlags, templateRaw } = parser;
  consume(parser, context | Context.AllowRegExp, Token.TemplateTail);
  return createTemplateTail(templateRaw, tokenValue, nodeFlags, startPos, parser.startPos);
}

// ArrayLiteral :
//   `[` `]`
//   `[` Elision `]`
//   `[` ElementList `]`
//   `[` ElementList `,` `]`
//   `[` ElementList `,` Elision `]`
function parseArrayLiteral(parser: ParserState, context: Context): ArrayLiteral {
  const pos = parser.startPos;
  nextToken(parser, context | Context.AllowRegExp);
  const elementList = parseElementList(parser, (context | Context.DisallowIn) ^ Context.DisallowIn);
  consume(parser, context, Token.RightBracket);
  if (parser.token & Token.IsAssignOp && parser.token !== Token.Assign) {
    nextToken(parser, context | Context.AllowRegExp);
    reportErrorDiagnostic(
      parser,
      0,
      DiagnosticCode.Expression_exprected_A_compound_assignment_cannot_follow_an_array_literal
    );
  }
  return createArrayLiteral(elementList, parser.nodeFlags, pos, parser.startPos);
}

function parseElementList(parser: ParserState, context: Context): ElementList {
  const pos = parser.startPos;
  const elements = [];
  const multiline = (parser.nodeFlags & NodeFlags.PrecedingLineBreak) !== 0;
  let trailingComma = false;
  while (parser.token & Constants.ArrayLiteralMembers) {
    elements.push(getCurrentNode(parser, context, parseArgumentOrArrayLiteralElement));
    if (parser.token === Token.RightBracket) break;
    if (consumeOpt(parser, context | Context.AllowRegExp, Token.Comma)) {
      if (parser.token === Token.RightBracket) {
        trailingComma = true;
        break;
      }
      continue;
    }
    reportErrorDiagnostic(parser, 0, DiagnosticCode._0_expected, ',');
  }

  return createElementList(elements, trailingComma, multiline, parser.nodeFlags, pos, parser.startPos);
}

function parseObjectLiteral(parser: ParserState, context: Context): ObjectLiteral {
  const pos = parser.startPos;
  nextToken(parser, context | Context.AllowRegExp);
  const propertyDefinitionList = parsePropertyDefinitionList(
    parser,
    (context | Context.DisallowIn) ^ Context.DisallowIn
  );
  consume(parser, context, Token.RightBrace);
  if (parser.token & Token.IsAssignOp && parser.token !== Token.Assign) {
    nextToken(parser, context | Context.AllowRegExp);
    reportErrorDiagnostic(
      parser,
      0,
      DiagnosticCode.Expression_exprected_A_compound_assignment_cannot_follow_an_object_literal
    );
  }
  return createObjectLiteral(propertyDefinitionList, parser.nodeFlags, pos, parser.startPos);
}

function parsePropertyDefinitionList(parser: ParserState, context: Context): PropertyDefinitionList {
  const pos = parser.startPos;
  const properties = [];
  const multiline = (parser.nodeFlags & NodeFlags.PrecedingLineBreak) !== 0;
  const trailingComma = false;
  while (parser.token & 0b00010100000000000111000000000000) {
    properties.push(getCurrentNode(parser, context, parsePropertyDefinition));
    if (parser.token === Token.RightBrace) break;
    if (consumeOpt(parser, context | Context.AllowRegExp, Token.Comma)) continue;
    reportErrorDiagnostic(parser, 0, DiagnosticCode._0_expected, ',');
  }
  return createPropertyDefinitionList(properties, trailingComma, multiline, parser.nodeFlags, pos, parser.startPos);
}

function parsSpreadProperty(parser: ParserState, context: Context): SpreadProperty {
  const pos = parser.startPos;
  return createSpreadProperty(parseAssignmentExpression(parser, context), parser.nodeFlags, pos, parser.startPos);
}

function isAccessModifier(t: Token): boolean {
  return t === Token.ProtectedKeyword || t === Token.PrivateKeyword || t === Token.PublicKeyword;
}

function parseAccessModifier(parser: ParserState, context: Context, endToken: Token): AccessModifier | null {
  if (isAccessModifier(parser.token)) {
    const pos = parser.startPos;
    if (
      tryParse(parser, context, () => {
        nextToken(parser, context);
        return (parser.token & 0b00010000000010000101000000000000) !== 0 || !endToken;
      })
    ) {
      return createAccessModifier(AccessModifiers.Protected, NodeFlags.None, pos, parser.startPos);
    }
  }
  return null;
}

function parsePropertyDefinition(
  parser: ParserState,
  context: Context
): SpreadProperty | PropertyDefinition | IdentifierReference | CoverInitializedName {
  if (consumeOpt(parser, context | Context.AllowRegExp, Token.Ellipsis)) {
    return parsSpreadProperty(parser, context);
  }

  let key;
  let kind = PropertyKind.None;

  const decorators = parseDecorators(parser, context);
  const modifiers = parseAccessModifier(parser, context, Token.RightBrace);

  if (consumeOpt(parser, context, Token.Multiply)) kind |= PropertyKind.Generator;

  const { startPos, tokenValue, raw, nodeFlags, token } = parser;

  if (token & 0b00000000000000000111000000000000) {
    nextToken(parser, context);

    if (parser.token === Token.LeftParen || parser.token === Token.LessThan) {
      return parseMethodDefinition(
        parser,
        context,
        createIdentifierName(tokenValue, raw, nodeFlags, startPos, parser.startPos),
        kind,
        decorators,
        modifiers
      ) as any;
    }

    // If we have "{ foo" or "{ foo," or "{ foo;" or "{ foo:" or "{ foo?" or "{ foo =" this has to be either
    // a property name or a cover initialized name
    if (parser.token & Token.IsClassField) {
      // If we have "{ foo:" then this is a valid 'PropertyDefinition'.
      if (parser.token === Token.Colon) {
        key = createIdentifierName(tokenValue, raw, nodeFlags, startPos, parser.startPos);
        nextToken(parser, context | Context.AllowRegExp);
        return createPropertyDefinition(
          key,
          parseAssignmentExpression(parser, context) as any,
          decorators,
          modifiers,
          parser.nodeFlags,
          startPos,
          parser.startPos
        );
      }

      key = createIdentifierReference(tokenValue, raw, nodeFlags, startPos, parser.startPos);

      // If we have "{ foo =" or "{ foo?"  or "{ foo!" then this is a cover initialized name. However. Cases
      // like "{ a?! =" or "{ a? =" isn't valid, but accepted here for error recovery reasons.
      if (parser.token === Token.Assign || parser.token === Token.QuestionMark || parser.token === Token.Negate) {
        const optional = consumeOpt(parser, context, Token.QuestionMark);
        const exclamation = consumeOpt(parser, context, Token.Negate);
        nextToken(parser, context | Context.AllowRegExp);
        return createCoverInitializedName(
          key,
          optional,
          exclamation,
          parseAssignmentExpression(parser, context) as AssignmentExpression,
          modifiers,
          parser.nodeFlags,
          startPos,
          parser.startPos
        );
      }

      // If we have something like "{ private x" or "{ private x?: string" then this is definitely not valid, but we allow this for error recovery reasons and
      // handle it in the grammar checker.
      return token & Token.IsAccessModifier
        ? createPropertyDefinition(
            key as any,
            null as any,
            decorators,
            modifiers,
            parser.nodeFlags,
            startPos,
            parser.startPos
          )
        : key;
    }

    if (parser.token & 0b00010000000000000101000000000000 || parser.token == Token.LessThan) {
      if (token === Token.AsyncKeyword && (parser.nodeFlags & NodeFlags.PrecedingLineBreak) === 0) {
        kind |= PropertyKind.Async;
        if (consumeOpt(parser, context, Token.Multiply)) kind |= PropertyKind.Generator;
      } else if (token === Token.GetKeyword) {
        kind |= PropertyKind.Getter;
      } else if (token === Token.SetKeyword) {
        kind |= PropertyKind.Setter;
      }

      // We do this check to avoid the 'case' keyword to be parsed
      // as an 'MethodDefinition' for cases like 'switch { case x: { !}' in 'recovery mode'.
      if (kind & 0b00000000000000000000000000000111) {
        key = parsePropertyName(parser, context);
        if (parser.token === Token.LeftParen || parser.token === Token.LessThan) {
          return parseMethodDefinition(parser, context, key, kind, decorators, modifiers) as any;
        }
        return key as IdentifierName;
      }

      return createIdentifierName(tokenValue, raw, nodeFlags, startPos, parser.startPos);
    }

    key = createIdentifierName(tokenValue, raw, nodeFlags, startPos, parser.startPos);

    if (parser.token !== Token.Colon && parser.token !== Token.LessThan && parser.token !== Token.LeftParen) {
      return key;
    }
  } else {
    key = parsePropertyName(parser, context);
  }

  if (kind & PropertyKind.Generator || parser.token === Token.LeftParen || parser.token === Token.LessThan) {
    return parseMethodDefinition(parser, context, key, kind, decorators, modifiers) as any;
  }

  consume(parser, context | Context.AllowRegExp, Token.Colon);

  return createPropertyDefinition(
    key as any,
    parseAssignmentExpression(parser, context) as any,
    decorators,
    modifiers,
    parser.nodeFlags,
    startPos,
    parser.startPos
  );
}

function parseMethodDefinition(
  parser: ParserState,
  context: Context,
  key: MethodName,
  kind: PropertyKind,
  decorators: any,
  accessModifier: AccessModifier | null
): MethodDefinition {
  const pos = parser.startPos;
  let propertySetParameterList = null;
  let uniqueFormalParameters = null;

  const typeParameters = parseTypeParameters(parser, context | Context.AllowConditionalTypes);

  context =
    ((context | Context.InAwaitContext | Context.InYieldContext) ^ (Context.InAwaitContext | Context.InYieldContext)) |
    (kind & PropertyKind.Async ? Context.InAwaitContext : 0) |
    (kind & PropertyKind.Generator ? Context.InYieldContext : 0);

  if (kind & PropertyKind.Getter) {
    consume(parser, context, Token.LeftParen);
    if (parser.token !== Token.RightParen) {
      reportErrorDiagnostic(parser, 1, DiagnosticCode.A_get_accessor_cannot_have_parameters);
      const parameters = [];
      while (parser.token & 0b00000100000010000101000000000000) {
        parameters.push(getCurrentNode(parser, context, parseFormalParameter));
        if (parser.token === Token.RightParen) break;
        if (consumeOpt(parser, context | Context.AllowRegExp, Token.Comma)) continue;
        reportErrorDiagnostic(parser, 0, DiagnosticCode.Expression_or_comma_expected);
      }
      uniqueFormalParameters = createFormalParameterList(parameters, false, parser.nodeFlags, pos, parser.startPos);
    }
    nextToken(parser, context);
  } else if (kind & PropertyKind.Setter) {
    consume(parser, context, Token.LeftParen);
    if (parser.token === Token.RightParen) {
      reportErrorDiagnostic(parser, 1, DiagnosticCode.A_set_accessor_must_have_exactly_one_parameter);
    }
    propertySetParameterList = parseFormalParameter(parser, context);
    if (parser.token !== Token.RightParen) {
      reportErrorDiagnostic(parser, 1, DiagnosticCode.A_set_accessor_must_have_exactly_one_parameter);
    }
    nextToken(parser, context);
  } else {
    uniqueFormalParameters = parseFormalParameterList(parser, (context | Context.DisallowIn) ^ Context.DisallowIn);
  }

  return createMethodDefinition(
    parser.nodeFlags,
    kind,
    propertySetParameterList,
    uniqueFormalParameters,
    key,
    accessModifier,
    typeParameters,
    consumeOpt(parser, context, Token.Colon) ? parseTypeOrTypePredicate(parser, context) : null,
    parseFunctionBlockOrSemicolon(parser, context, /* isStatement */ false),
    decorators,
    pos,
    parser.startPos
  );
}

function parsePropertyName(
  parser: ParserState,
  context: Context
): NumericLiteral | StringLiteral | ComputedPropertyName | IdentifierName | PrivateIdentifier {
  switch (parser.token) {
    case Token.NumericLiteral:
      return parseNumericLiteral(parser, context);
    case Token.BigIntLiteral:
      return parseBigIntLiteral(parser, context);
    case Token.StringLiteral:
      return parseStringLiteral(parser, context);
    case Token.LeftBracket:
      return parseComputedPropertyName(parser, context);
    case Token.PrivateIdentifier:
      return parsePrivateIdentifier(parser, context);
    default:
      return parseIdentifierName(parser, context);
  }
}

function parsePrivateIdentifier(parser: ParserState, context: Context): PrivateIdentifier {
  const pos = parser.startPos;
  const raw = parser.raw;
  const name = parser.tokenValue;
  nextToken(parser, context);
  return createPrivateIdentifier(name, raw, parser.nodeFlags, pos, parser.startPos);
}

function parseComputedPropertyName(parser: ParserState, context: Context): ComputedPropertyName {
  const pos = parser.startPos;
  consume(parser, context | Context.AllowRegExp, Token.LeftBracket);
  const expression = parseAssignmentExpression(parser, (context | Context.DisallowIn) ^ Context.DisallowIn);
  consume(parser, context, Token.RightBracket);
  return createComputedPropertyName(expression, parser.nodeFlags, pos, parser.startPos);
}

// ArrowFunction :
//   ArrowParameters
function parseArrowFunction(
  parser: ParserState,
  context: Context,
  arrowParameters: any,
  isAsync: boolean,
  isParenthesized: boolean,
  pos: number
): ArrowFunction {
  consume(parser, context | Context.AllowRegExp, Token.Arrow);
  return createArrowFunction(
    arrowParameters,
    parseConciseOrFunctionBody(
      parser,
      ((context | Context.InYieldContext | Context.InAwaitContext) ^
        (Context.InYieldContext | Context.InAwaitContext)) |
        (isAsync ? Context.InAwaitContext : Context.None)
    ),
    isAsync,
    isParenthesized,
    parser.nodeFlags,
    pos,
    parser.startPos
  );
}

// FunctionBody :
//   FunctionStatementList
//
// ConciseBody :
//   [lookahead ≠ {]ExpressionBody
//   { FunctionBody }
function parseConciseOrFunctionBody(parser: ParserState, context: Context): FunctionBody | Expression {
  if (parser.token === Token.LeftBrace) {
    return parseFunctionBody(parser, context, /* isStatement */ true);
  }
  return parseExpression(parser, context);
}

function parseImportCallOrMeta(parser: ParserState, context: Context): ImportCall | ImportMeta {
  const pos = parser.startPos;
  nextToken(parser, context);
  const typeArguments = parseTypeArgumentsOfTypeReference(parser, context | Context.InTypes);
  if (parser.token === Token.Period) return createImportMeta(parser.nodeFlags, pos, parser.startPos);
  consume(parser, context | Context.AllowRegExp, Token.LeftParen);
  const expression = parseAssignmentExpression(parser, context);
  consume(parser, context, Token.RightParen);
  return createImportCall(typeArguments, expression, parser.nodeFlags, pos, parser.startPos);
}

function parsePrimaryExpression(parser: ParserState, context: Context): any {
  switch (parser.token) {
    case Token.NumericLiteral:
      return parseNumericLiteral(parser, context);
    case Token.BigIntLiteral:
      return parseBigIntLiteral(parser, context);
    case Token.StringLiteral:
      return parseStringLiteral(parser, context);
    case Token.TrueKeyword:
      return parseBooleanLiteral(parser, context);
    case Token.FalseKeyword:
      return parseBooleanLiteral(parser, context);
    case Token.NullKeyword:
      return parseNullLiteral(parser, context);
    case Token.ThisKeyword:
      return parseThisExpression(parser, context);
    case Token.RegularExpression:
      return parseRegularExpression(parser, context);
    case Token.LeftBracket:
      return parseArrayLiteral(parser, context);
    case Token.LeftBrace:
      return parseObjectLiteral(parser, context);
    case Token.LeftParen:
      return parseCoverParenthesizedExpressionAndArrowParameterList(parser, context | Context.InArrowContext, 1);
    case Token.Decorator:
    case Token.ClassKeyword:
      return parseClassExpression(parser, context);
    case Token.FunctionKeyword:
      return parseFunctionExpression(parser, context);
    case Token.AsyncKeyword:
      // `async` [no LineTerminator here] `function`
      if (
        (parser.nodeFlags & NodeFlags.PrecedingLineBreak) === 0 &&
        lookAhead(parser, context, () => {
          nextToken(parser, context);
          return parser.token === Token.FunctionKeyword;
        })
      ) {
        return parseFunctionExpression(parser, context);
      }

      const pos = parser.startPos;

      const typeParameters = tryParse(parser, context, () => {
        nextToken(parser, context);
        if (parser.token === Token.LessThan) {
          const expert = parseTypeParameters(parser, context | Context.AllowConditionalTypes);
          return parser.token === Token.LeftParen ? expert : false;
        }
        return false;
      });

      if (!typeParameters) return parseIdentifierReference(parser, context);

      return parseArrowFunction(
        parser,
        context,
        parseCoverParenthesizedExpressionAndArrowParameterList(
          parser,
          context | Context.InArrowContext,
          typeParameters
        ),
        true,
        true,
        pos
      );

    case Token.NewKeyword:
      return parseNewExpressionOrNewDotTarget(parser, context);
    case Token.TemplateTail:
      return parseTemplateTail(parser, context);
    case Token.TemplateCont:
      return parseTemplateExpression(parser, context);
    case Token.SuperKeyword:
      return parseSuperExpression(parser, context);
    case Token.ImportKeyword:
      return parseImportCallOrMeta(parser, context);
    default:
      return parseIdentifierReference(parser, context);
  }
}

function parseSuperExpression(parser: ParserState, context: Context): Super | PropertyAccessExpression {
  const pos = parser.startPos;
  nextToken(parser, context);
  if (parser.token === Token.LessThan) {
    if (
      !tryParse(
        parser,
        context | Context.InTypes | Context.AllowConditionalTypes,
        parseTypeArgumentsInExpression as any
      )
    ) {
      reportErrorDiagnostic(parser, 0, DiagnosticCode.Super_may_not_use_type_arguments);
    }
  }
  const expression = createSuper(parser.nodeFlags, pos, parser.startPos);
  if (parser.token === Token.LeftParen || parser.token === Token.LeftBracket || parser.token === Token.Period) {
    return expression;
  }

  // If we have seen "super" it must be followed by '(' or '.'.
  // If it wasn't then just try to parse out a '.' and report an error.
  reportErrorDiagnostic(parser, 0, DiagnosticCode.Super_must_be_followed_by_an_argument_list_or_member_access);

  return createPropertyAccessExpression(
    expression,
    parsePropertyOrPrivatePropertyName(parser, context),
    pos,
    parser.nodeFlags,
    parser.startPos
  );
}

function parseNewExpressionOrNewDotTarget(parser: ParserState, context: Context): NewTarget | NewExpression {
  const pos = parser.startPos;
  nextToken(parser, context | Context.AllowRegExp);
  if (consumeOpt(parser, context, Token.Period)) {
    return createNewTarget(parseIdentifierName(parser, context), parser.nodeFlags, pos, parser.startPos);
  }
  const expression = parseLeftHandSideExpression(parser, context, /* allowCalls*/ false);
  return createNewExpression(
    expression,
    null,
    parser.token === Token.LeftParen ? parseArguments(parser, context) : (null as any),
    pos,
    parser.nodeFlags,
    parser.startPos
  );
}

function parseCoverParenthesizedExpressionAndArrowParameterList(
  parser: ParserState,
  context: Context,
  typeParameters: any
): ParenthesizedExpression | ArrowParameters | DummyIdentifier {
  const pos = parser.startPos;
  nextToken(parser, context | Context.AllowRegExp);

  if (consumeOpt(parser, context, Token.RightParen)) {
    // Simple cases: "() =>", "(): ", and  "() {".
    // This is an arrow function with no parameters.
    // The last one is not actually an arrow function,
    // but this is probably what the user intended.

    switch (parser.token) {
      case Token.Arrow:
      case Token.Colon:
      case Token.LeftBrace:
        return createArrowParameters(
          typeParameters,
          [],
          consumeOpt(parser, context, Token.Colon) ? parseTypeOrTypePredicate(parser, context) : null,
          null,
          /* trailingComma */ false,
          NodeFlags.None,
          pos,
          pos
        );
      default:
        reportErrorDiagnostic(parser, 0, DiagnosticCode._0_expected, '=>');

        return createDummyIdentifier(pos, pos);
    }
  }

  context = (context | Context.DisallowIn) ^ Context.DisallowIn;

  let expression!: Expression;
  const commaOperatorStart = parser.startPos;
  let state = Tristate.False;

  // If we have something like "public (" or "protected (" or "private (" then this isn't legal syntax.
  // However, we choose too allow this so that we can report it in the grammar checker.
  if (parser.token & Token.IsAccessModifier && lookAhead(parser, context, nextTokenIsIdentifierOrPatternOnSameLine)) {
    state = Tristate.True;
    expression = parseFormalParameter(parser, context);
  } else if (parser.token & 0b00000000000010000101000000000000) {
    if (context & Context.InYieldContext && parser.token === Token.YieldKeyword) {
      state = Tristate.False;
      expression = parseYieldExpression(parser, context, pos);
    } else {
      const token = parser.token;
      expression = parseBinaryExpression(parser, context, parseUnaryExpression(parser, context), 4, pos);
      if (expression.kind & (NodeKind.IsIdentifier | NodeKind.IsArrayOrObjectLiteral)) {
        // If we have something like "(a?:" or "({a}?," or "(a?=" or "([a]?)" then this must be a optional
        // type-annotated parameter in an arrow function expression or a conditional expression
        // in an argument list.
        if (consumeOpt(parser, context, Token.QuestionMark)) {
          if (parser.token & 0b00000000001101100101000000000000) {
            // If we have "(a?b:" then this is part of an conditional expression in an argument list
            const consequent = tryParse(parser, context, nextIsMaybeConditionalExpr);

            if (consequent) {
              state = Tristate.False;
              expression = createConditionalExpression(
                expression,
                consequent,
                parseAssignmentExpression(parser, context),
                parser.nodeFlags, // this *could* contain a parse error bit
                pos,
                parser.startPos
              );
            }
            // This isn't part of an conditional expression, so this has to be "(a?" or "(a?:"
          } else {
            state = Tristate.True;
            expression = createFormalParameter(
              false,
              reinterpretToPattern(expression, parser, context),
              true,
              parseTypeAnnotation(parser, context),
              parseInitializer(parser, context),
              null,
              null,
              /* isReadOnly */ false,
              NodeFlags.None,
              pos,
              parser.startPos
            );
          }

          // If we have "(a:", then we must have a type-annotated parameter in an arrow function expression
        } else if (parser.token === Token.Colon) {
          state = Tristate.True;
          expression = createFormalParameter(
            false,
            expression as any,
            false,
            parseTypeAnnotation(parser, context),
            parseInitializer(parser, context),
            null,
            null as any,
            /* isReadOnly */ false,
            parser.nodeFlags,
            pos,
            parser.startPos
          );
        } else {
          // If we have "(a," or "(a=" or "(a" this *could* be an arrow function
          state = Tristate.Unknown;
          if (parser.token & Token.IsAssignOp) {
            // If we have "async (a %= b:" then this is definitely not an arrow function
            if (parser.token !== Token.Assign) state = Tristate.False;
            const operator = KeywordDescTable[parser.token & Token.Type] as AssignOp | LogicalOp;
            nextToken(parser, context | Context.AllowRegExp);
            expression = createAssignmentExpression(
              expression,
              operator,
              parseAssignmentExpression(parser, context),
              parser.nodeFlags,
              pos,
              parser.startPos
            );
          }

          // If we have something like "(async x =>" then this is part of 'AssignmentExpression, and
          // definitely not an arrow function
          if (
            token === Token.AsyncKeyword &&
            parser.token & (Token.FutureReserved | Token.IsIdentifier) &&
            lookAhead(parser, context, nextTokenIsArrow)
          ) {
            state = Tristate.False;
            expression = parseArrowFunction(
              parser,
              context,
              createArrowParameters(
                createTypeParameters([], parser.nodeFlags, pos, pos),
                [
                  createFormalParameter(
                    /* ellipsis */ false,
                    parseBindingIdentifier(parser, context),
                    /* optional */ false,
                    /* type */ null,
                    /* initializer */ null,
                    /* decorators */ null,
                    /* accessModifier */ null,
                    /* isReadOnly */ false,
                    NodeFlags.None,
                    pos,
                    parser.startPos
                  )
                ],
                null,
                null,
                /* trailingComma */ false,
                parser.nodeFlags,
                pos,
                parser.startPos
              ),
              true,
              /* isParenthesized */ false,
              pos
            );
          }
        }
      } else if (parser.token === Token.Assign) {
        state = Tristate.False;
        const operator = KeywordDescTable[parser.token & Token.Type] as AssignOp | LogicalOp;
        nextToken(parser, context | Context.AllowRegExp);
        expression = createAssignmentExpression(
          expression,
          operator,
          parseAssignmentExpression(parser, context),
          parser.nodeFlags,
          pos,
          parser.startPos
        );
      }

      // If we have something like "a(x && y ? 1 : 2" then this is definitely not an async arrow function.
      if (parser.token === Token.QuestionMark) {
        state = Tristate.False;
        expression = parseConditionalExpression(parser, context, expression, pos);
      }

      if (
        parser.token === Token.Arrow &&
        (token & (Token.FutureReserved | Token.IsIdentifier) || expression.kind === NodeKind.ArrowParameters)
      ) {
        const isParenthesized = expression.kind === NodeKind.ArrowParameters;

        if (!isParenthesized) {
          expression.kind = NodeKind.BindingIdentifier | NodeKind.IsChildless;
          expression = createArrowParameters(
            createTypeParameters([], parser.nodeFlags, pos, pos),
            [
              createFormalParameter(
                false,
                expression as BindingIdentifier,
                false,
                parseTypeAnnotation(parser, context),
                null,
                null,
                null,
                /* isReadOnly */ false,
                NodeFlags.None,
                pos,
                parser.startPos
              )
            ],
            null,
            null,
            /* trailingComma */ false,
            parser.nodeFlags,
            pos,
            parser.startPos
          );
        }
        expression = parseArrowFunction(
          parser,
          context,
          expression,
          token === Token.AsyncKeyword,
          isParenthesized,
          pos
        );
      }
    }
  } else if (parser.token & Token.IsEllipsis) {
    state = Tristate.True;
    expression = parseFormalParameter(parser, context);

    // If we have something like "(32" then this is definitely not an arrow function
  } else {
    expression = parseAssignmentExpression(parser, context);
  }

  if (consumeOpt(parser, context, Token.RightParen)) {
    if (state) {
      if (parser.token === Token.Colon) {
        const isType =
          context & Context.InConditionalContext
            ? lookAhead(parser, context, () => {
                nextToken(parser, context);
                parseAssignmentExpression(parser, context);
                return parser.token === Token.Arrow;
              })
            : true;

        if (isType && consumeOpt(parser, context, Token.Colon)) {
          const type = parseTypeOrTypePredicate(parser, context);
          if (parser.token !== Token.Arrow) {
            reportErrorDiagnostic(parser, 0, DiagnosticCode._0_expected, '=>');
          }

          return createArrowParameters(
            typeParameters,
            [
              createFormalParameter(
                false,
                reinterpretToPattern(expression, parser, context),
                false,
                parseTypeAnnotation(parser, context),
                null,
                null,
                null,
                /* isReadOnly */ false,
                NodeFlags.None,
                pos,
                parser.startPos
              )
            ],
            type,
            null,
            false,
            NodeFlags.None,
            pos,
            parser.startPos
          );
        }
      }

      if (parser.token === Token.Arrow) {
        if (expression.kind !== NodeKind.FormalParameter) {
          expression = createFormalParameter(
            false,
            reinterpretToPattern(expression, parser, context),
            false,
            parseTypeAnnotation(parser, context),
            null,
            null,
            null,
            /* isReadOnly */ false,
            NodeFlags.None,
            pos,
            parser.startPos
          );
        }

        return createArrowParameters(
          createTypeParameters([], parser.nodeFlags, pos, pos),
          [expression as any],
          null,
          null,
          false,
          NodeFlags.None,
          pos,
          parser.startPos
        );
      }
    }
    return createParenthesizedExpression(expression, parser.nodeFlags, pos, parser.startPos);
  }

  if (parser.token === Token.Comma) {
    const expressions = [expression];
    if (state) {
      let innerPos = parser.startPos;
      while (consumeOpt(parser, context | Context.AllowRegExp, Token.Comma)) {
        if (parser.token & 0b00000000000010000101000000000000) {
          if (
            parser.token & Token.IsAccessModifier &&
            lookAhead(parser, context, nextTokenIsIdentifierOrPatternOnSameLine)
          ) {
            state = Tristate.True;
            expression = parseFormalParameter(parser, context);
          } else if (parser.token & 0b00000000000010000101000000000000) {
            if (context & Context.InYieldContext && parser.token === Token.YieldKeyword) {
              state = Tristate.False;
              expression = parseYieldExpression(parser, context, innerPos);
            } else {
              const token = parser.token;
              expression = parseBinaryExpression(parser, context, parseUnaryExpression(parser, context), 4, innerPos);
              if (expression.kind & (NodeKind.IsIdentifier | NodeKind.IsArrayOrObjectLiteral)) {
                // If we have "(a?:" or "(a?," or "(a?=" or "(a?)" then this must be a optional
                // type-annotated parameter in an arrow function expression or a conditional expression
                // in an argument list.
                if (consumeOpt(parser, context, Token.QuestionMark)) {
                  if (parser.token & 0b00000000001101100101000000000000) {
                    // If we have "(a?b:" then this is part of an conditional expression in an argument list
                    const consequent = tryParse(parser, context, nextIsMaybeConditionalExpr);

                    if (consequent) {
                      state = Tristate.False;
                      expression = createConditionalExpression(
                        expression,
                        consequent,
                        parseAssignmentExpression(parser, context),
                        parser.nodeFlags, // this *could* contain a parse error bit
                        innerPos,
                        parser.startPos
                      );
                    } else {
                      state = Tristate.True;
                      expression = createFormalParameter(
                        false,
                        expression as any,
                        true,
                        null,
                        parseInitializer(parser, context),
                        null,
                        null,
                        /* isReadOnly */ false,
                        NodeFlags.None,
                        innerPos,
                        parser.startPos
                      );
                    }
                  } else if (parser.token === Token.Colon) {
                    state = Tristate.True;
                    expression = createFormalParameter(
                      false,
                      reinterpretToPattern(expression, parser, context),
                      true,
                      parseTypeAnnotation(parser, context),
                      parseInitializer(parser, context),
                      null,
                      null,
                      /* isReadOnly */ false,
                      NodeFlags.None,
                      innerPos,
                      parser.startPos
                    );
                  }
                  // If we have something like "(a:", then we must have a
                  // type-annotated parameter in an arrow function expression.
                } else if (parser.token === Token.Colon) {
                  state = Tristate.True;
                  expression = createFormalParameter(
                    false,
                    reinterpretToPattern(expression, parser, context),
                    false,
                    parseTypeAnnotation(parser, context),
                    parseInitializer(parser, context),
                    null,
                    null,
                    /* isReadOnly */ false,
                    parser.nodeFlags,
                    innerPos,
                    parser.startPos
                  );
                } else {
                  // If we have "(a," or "(a=" or "(a)" this *could* be an arrow function
                  state = Tristate.Unknown;
                  if (parser.token & Token.IsAssignOp) {
                    // If we have "(a %= b:" then this is definitely not an arrow function
                    if (parser.token !== Token.Assign) state = Tristate.False;
                    const operator: any = KeywordDescTable[parser.token & Token.Type];
                    nextToken(parser, context | Context.AllowRegExp);
                    expression = createAssignmentExpression(
                      expression,
                      operator,
                      parseAssignmentExpression(parser, context),
                      parser.nodeFlags,
                      innerPos,
                      parser.startPos
                    );
                  }

                  // If we have "(async=>" then this is definitely not an arrow function
                  if (
                    token === Token.AsyncKeyword &&
                    parser.token & (Token.FutureReserved | Token.IsIdentifier) &&
                    lookAhead(parser, context, nextTokenIsArrow)
                  ) {
                    state = Tristate.False;
                    expression = parseArrowFunction(
                      parser,
                      context,
                      createArrowParameters(
                        createTypeParameters([], parser.nodeFlags, pos, pos),
                        [
                          createFormalParameter(
                            /* ellipsis */ false,
                            parseBindingIdentifier(parser, context),
                            /* optional */ false,
                            /* type */ null,
                            /* initializer */ null,
                            /* decorators */ null,
                            /* accessModifier */ null,
                            /* isReadOnly */ false,
                            NodeFlags.None,
                            pos,
                            parser.startPos
                          )
                        ],
                        null,
                        null,
                        /* trailingComma */ false,
                        parser.nodeFlags,
                        innerPos,
                        parser.startPos
                      ),
                      token === Token.AsyncKeyword,
                      /* isParenthesized */ false,
                      innerPos
                    );
                  }
                }
              } else {
                if (parser.token === Token.Assign) {
                  state = Tristate.False;
                  const operator = KeywordDescTable[parser.token & Token.Type] as AssignOp | LogicalOp;
                  nextToken(parser, context | Context.AllowRegExp);
                  expression = createAssignmentExpression(
                    expression,
                    operator,
                    parseAssignmentExpression(parser, context),
                    parser.nodeFlags,
                    innerPos,
                    parser.startPos
                  );
                }

                if (parser.token === Token.QuestionMark) {
                  state = Tristate.False;
                  expression = parseConditionalExpression(parser, context, expression, innerPos);
                }
              }

              if (
                parser.token === Token.Arrow &&
                (token & (Token.FutureReserved | Token.IsIdentifier) || expression.kind === NodeKind.ArrowParameters)
              ) {
                const isParenthesized = expression.kind === NodeKind.ArrowParameters;

                if (!isParenthesized) {
                  expression.kind = NodeKind.BindingIdentifier | NodeKind.IsChildless;
                  expression = createArrowParameters(
                    null,
                    [
                      createFormalParameter(
                        false,
                        expression as BindingIdentifier,
                        false,
                        parseTypeAnnotation(parser, context),
                        null,
                        null,
                        null,
                        /* isReadOnly */ false,
                        NodeFlags.None,
                        pos,
                        parser.startPos
                      )
                    ],
                    null,
                    null,
                    /* trailingComma */ false,
                    parser.nodeFlags,
                    innerPos,
                    parser.startPos
                  );
                }
                expression = parseArrowFunction(
                  parser,
                  context,
                  expression,
                  token === Token.AsyncKeyword,
                  isParenthesized,
                  innerPos
                );
              }
            }
          }
          // If we had "(" followed by something that's not an identifier, '...' or binding pattern,
          // then this definitely not an arrow function.
        } else if (parser.token & Token.IsEllipsis) {
          state = Tristate.True;
          expression = parseFormalParameter(parser, context);
        } else if (parser.token === Token.RightParen) {
          state = Tristate.True;
          break;
        } else {
          state = Tristate.False;
          expression = parseAssignmentExpression(parser, context);
        }
        innerPos = parser.startPos;
        expressions.push(expression);
      }
    } else {
      state = Tristate.False;
      while (consumeOpt(parser, context | Context.AllowRegExp, Token.Comma)) {
        expressions.push(
          parseAssignmentExpression(parser, (context | Context.InDecoratorContext) ^ Context.InDecoratorContext)
        );
      }
    }

    const commaOPeratorEnd = parser.startPos;

    consume(parser, context, Token.RightParen);

    if (state) {
      if (parser.token === Token.Colon) {
        const isType = context & Context.InConditionalContext ? lookAhead(parser, context, nextTokenIsArrow) : true;

        if (isType && consumeOpt(parser, context, Token.Colon)) {
          const type = parseTypeOrTypePredicate(parser, context);
          if (parser.token !== Token.Arrow) {
            reportErrorDiagnostic(parser, 0, DiagnosticCode._0_expected, '=>');
          }

          return createArrowParameters(
            typeParameters,
            convertToArrowParams(parser, context, expressions, pos),
            type,
            null as any,
            false,
            parser.nodeFlags,
            commaOperatorStart,
            commaOPeratorEnd
          );
        }
      }
      if (state === Tristate.True && parser.token !== Token.Arrow) {
        reportErrorDiagnostic(parser, 0, DiagnosticCode._0_expected, '=>');
      }

      if (parser.token === Token.Arrow) {
        return createArrowParameters(
          typeParameters,
          convertToArrowParams(parser, context, expressions, pos),
          null,
          null,
          false,
          NodeFlags.None,
          commaOperatorStart,
          commaOPeratorEnd
        );
      }
    }

    expression = createCommaOperator(expressions, parser.nodeFlags, commaOperatorStart, commaOPeratorEnd);
  }

  return createParenthesizedExpression(expression, parser.nodeFlags, pos, parser.startPos);
}

function convertToArrowParams(parser: ParserState, context: Context, expressions: any[], pos: number): any {
  let i = expressions.length;
  const x: any = [];
  while (i--) {
    const id = expressions[i];

    x.push(
      id.kind !== NodeKind.FormalParameter
        ? createFormalParameter(
            false,
            reinterpretToPattern(id, parser, context),
            false,
            parseTypeAnnotation(parser, context),
            null,
            null,
            null,
            /* isReadOnly */ false,
            NodeFlags.None,
            pos,
            parser.startPos
          )
        : id
    );
  }
  return x;
}

function parseBooleanLiteral(parser: ParserState, context: Context): BooleanLiteral {
  const pos = parser.startPos;
  const value = KeywordDescTable[parser.token & Token.Type] === 'true';
  nextToken(parser, context);
  return createBooleanLiteral(value, parser.nodeFlags, pos, parser.startPos);
}

function parseThisExpression(parser: ParserState, context: Context): ThisExpression {
  const pos = parser.startPos;
  nextToken(parser, context);
  return createThisExpression(parser.nodeFlags, pos, parser.startPos);
}

function parseNullLiteral(parser: ParserState, context: Context): NullLiteral {
  const pos = parser.startPos;
  nextToken(parser, context);
  return createNullLiteral(parser.nodeFlags, pos, parser.startPos);
}

function parseNumericLiteral(parser: ParserState, context: Context): NumericLiteral {
  const { startPos, tokenValue, raw, nodeFlags } = parser;
  nextToken(parser, context);
  return createNumericLiteral(tokenValue, raw, nodeFlags, startPos, parser.startPos);
}

function parseBigIntLiteral(parser: ParserState, context: Context): BigIntLiteral {
  const { startPos, tokenValue, raw, nodeFlags } = parser;
  nextToken(parser, context);
  return createBigIntLiteral(tokenValue, raw, nodeFlags, startPos, parser.startPos);
}

function parseStringLiteral(parser: ParserState, context: Context): StringLiteral {
  const { startPos, raw, tokenValue, nodeFlags } = parser;
  nextToken(parser, context);
  return createStringLiteral(tokenValue, raw, nodeFlags, startPos, parser.startPos);
}

// Returns true if this is an valid identifier
function isIdentifier(t: Token, context: Context, allowKeywords?: boolean): boolean {
  // If we have a 'yield' keyword, and we're in the [yield] context, then 'yield' is
  // considered a keyword and is not an identifier.
  if (context & (Context.Strict | Context.InYieldContext) && t === Token.YieldKeyword) return false;
  // If we have a 'await' keyword, and we're in the [Await] context, then 'await' is
  // considered a keyword and is not an identifier.
  if (context & (Context.Module | Context.InAwaitContext) && t === Token.AwaitKeyword) return false;
  return allowKeywords
    ? (t & Token.IsIdentifier) === Token.IsIdentifier ||
        (t & Token.Keyword) === Token.Keyword ||
        (t & Token.FutureReserved) === Token.FutureReserved
    : (t & Token.IsIdentifier) === Token.IsIdentifier || (t & Token.FutureReserved) === Token.FutureReserved;
}

function parseIdentifierReference(
  parser: ParserState,
  context: Context,
  diagnosticMessage?: DiagnosticCode,
  allowKeywords?: boolean
): IdentifierReference | DummyIdentifier | any {
  const pos = parser.startPos;
  const raw = parser.raw;
  const flags = parser.nodeFlags;

  if (isIdentifier(parser.token, context, allowKeywords)) {
    const name = parser.tokenValue;
    nextToken(parser, context);
    return createIdentifierReference(name, raw, flags, pos, parser.startPos);
  }
  reportErrorDiagnostic(parser, 0, diagnosticMessage ? diagnosticMessage : DiagnosticCode.Identifier_expected);
  return createDummyIdentifier(pos, pos);
}

function parseIdentifierName(
  parser: ParserState,
  context: Context,
  diagnosticMessage?: DiagnosticCode
): IdentifierName {
  const pos = parser.startPos;
  const nodeFlags = parser.nodeFlags;
  if (parser.token & Constants.TokenIsIdentifierOrKeyword) {
    const name = parser.tokenValue;
    const raw = parser.raw;
    nextToken(parser, context);
    return createIdentifierName(name, raw, nodeFlags, pos, parser.startPos);
  }
  reportErrorDiagnostic(parser, 0, diagnosticMessage ? diagnosticMessage : DiagnosticCode.Identifier_expected);
  return createIdentifierReference('', '', nodeFlags | NodeFlags.HasErrors, pos, pos);
}

function parseBindingIdentifier(
  parser: ParserState,
  context: Context,
  privateIdentifierDiagnosticMessage?: DiagnosticCode
): BindingIdentifier {
  const { startPos, raw, nodeFlags } = parser;
  if (parser.token & (Token.IsIdentifier | Token.FutureReserved)) {
    if (parser.token === Token.PrivateIdentifier) {
      reportErrorDiagnostic(
        parser,
        0,
        privateIdentifierDiagnosticMessage || DiagnosticCode.Private_identifiers_are_not_allowed_outside_class_bodies,
        KeywordDescTable[parser.token & Token.Type]
      );
    }
    const name = parser.tokenValue;
    nextToken(parser, context);
    return createBindingIdentifier(name, raw, nodeFlags | parser.nodeFlags, startPos, parser.startPos);
  }
  reportErrorDiagnostic(
    parser,
    0,
    parser.token & Token.Keyword
      ? DiagnosticCode.Identifier_expected_0_is_a_reserved_word_that_cannot_be_used_here
      : DiagnosticCode.Identifier_expected,
    KeywordDescTable[parser.token & Token.Type]
  );

  return createBindingIdentifier('', '', parser.nodeFlags, startPos, startPos);
}

function parseRegularExpression(parser: ParserState, context: Context): RegularExpressionLiteral {
  const { startPos, tokenValue, nodeFlags } = parser;
  nextToken(parser, context);
  return createRegularExpressionLiteral(tokenValue, nodeFlags, startPos, parser.startPos);
}

function parseFunctionDeclaration(parser: ParserState, context: Context, isDefault: boolean): FunctionDeclaration {
  const { startPos, nodeFlags } = parser;

  const isAsync = consumeOptAsBitwise(parser, context, Token.AsyncKeyword);

  consume(parser, context | Context.AllowRegExp, Token.FunctionKeyword);

  const isGenerator = consumeOptAsBitwise(parser, context, Token.Multiply);

  const generatorAndAsyncFlags = (isAsync * 2 + isGenerator) << 21;

  const name = isDefault
    ? parseOptionalBindingIdentifier(parser, context)
    : parseBindingIdentifier(parser, context | Context.AllowRegExp);

  const typeParameters = parseTypeParameters(parser, context | Context.AllowConditionalTypes);
  const formalParameterList = parseFormalParameterList(parser, (context | Context.DisallowIn) ^ Context.DisallowIn);
  const type = consumeOpt(parser, context, Token.Colon) ? parseTypeOrTypePredicate(parser, context) : null;

  context =
    ((context | 0b00011100011000010000000000000000) ^ 0b00011100011000010000000000000000) | generatorAndAsyncFlags;

  const contents = parseFunctionBlockOrSemicolon(parser, context, /* isStatement */ true);

  return createFunctionDeclaration(
    name,
    isGenerator,
    isAsync,
    formalParameterList,
    contents,
    typeParameters,
    type,
    nodeFlags | parser.nodeFlags,
    startPos,
    parser.startPos
  );
}

function parseOptionalBindingIdentifier(parser: ParserState, context: Context): BindingIdentifier | null {
  return parser.token & (Token.IsIdentifier | Token.FutureReserved) ? parseBindingIdentifier(parser, context) : null;
}

function parseFunctionExpression(parser: ParserState, context: Context): FunctionExpression {
  const pos = parser.startPos;

  const isAsync = consumeOptAsBitwise(parser, context, Token.AsyncKeyword);

  consume(parser, context | Context.AllowRegExp, Token.FunctionKeyword);

  const isGenerator = consumeOptAsBitwise(parser, context, Token.Multiply);

  const generatorAndAsyncFlags = (isAsync * 2 + isGenerator) << 21;

  const name =
    parser.token & (Token.IsIdentifier | Token.FutureReserved)
      ? parseBindingIdentifier(
          parser,
          ((context | 0b00000000011000000000000000000000) ^ 0b00000000011000000000000000000000) | generatorAndAsyncFlags
        )
      : null;

  const typeParameters = parseTypeParameters(parser, context | Context.AllowConditionalTypes);
  const formalParameterList = parseFormalParameterList(parser, (context | Context.DisallowIn) ^ Context.DisallowIn);
  const type = consumeOpt(parser, context, Token.Colon) ? parseTypeOrTypePredicate(parser, context) : null;

  context =
    ((context | 0b00011100011000010000000000000000) ^ 0b00011100011000010000000000000000) | generatorAndAsyncFlags;

  const contents = parseFunctionBody(parser, context, /* isStatement */ false);
  return createFunctionExpression(
    name,
    isGenerator,
    isAsync,
    formalParameterList,
    contents,
    typeParameters,
    type,
    parser.nodeFlags,
    pos,
    parser.startPos
  );
}

function parseFunctionBlockOrSemicolon(
  parser: ParserState,
  context: Context,
  isStatement: boolean
): FunctionBody | null {
  if (parser.token !== Token.LeftBrace && canParseSemicolon(parser)) {
    parseSemicolon(parser, context);
    return null;
  }
  const pos = parser.startPos;
  nextToken(parser, context | Context.AllowRegExp);
  const statementList = parseFunctionStatementList(parser, context);
  consume(parser, isStatement ? context | Context.AllowRegExp : context, Token.RightBrace);
  return createFunctionBody(statementList, parser.nodeFlags, pos, parser.startPos);
}

function parseFunctionBody(parser: ParserState, context: Context, isStatement: boolean): FunctionBody {
  const pos = parser.startPos;
  if (consume(parser, context | Context.AllowRegExp, Token.LeftBrace)) {
    const statementList = parseFunctionStatementList(parser, context);
    consume(parser, isStatement ? context | Context.AllowRegExp : context, Token.RightBrace);
    return createFunctionBody(statementList, parser.nodeFlags, pos, parser.startPos);
  }

  reportErrorDiagnostic(parser, 0, DiagnosticCode.Statement_expected);

  return createFunctionBody(
    createFunctionStatementList([], false, parser.nodeFlags, pos, pos),
    parser.nodeFlags,
    pos,
    pos
  );
}

// FunctionBody : FunctionStatementList
function parseFunctionStatementList(parser: ParserState, context: Context): FunctionStatementList {
  const pos = parser.startPos;
  const statements = [];
  const multiline = (parser.nodeFlags & NodeFlags.PrecedingLineBreak) !== 0;
  while (
    parser.token &
    (Token.IsIdentifier |
      Token.IsUnaryOp |
      Token.IsUpdateOp |
      Token.IsBinaryOp |
      Token.FutureReserved |
      Token.IsStatementStart |
      Token.IsExpressionStart)
  ) {
    // We may be in a [Decorator] context when parsing a function expression or
    // arrow function. The body of the function is not in [Decorator] context.
    statements.push(
      getCurrentNode(
        parser,
        (context | Context.InDecoratorContext) ^ Context.InDecoratorContext,
        parseStatementListItem
      )
    );
  }
  return createFunctionStatementList(statements, multiline, parser.nodeFlags, pos, parser.startPos);
}

function parseFormalParameterList(parser: ParserState, context: Context): FormalParameterList {
  const parameters: any = [];
  let startOfList = parser.startPos;
  let endOfList = startOfList;
  let trailingComma = false;
  if (consume(parser, context, Token.LeftParen)) {
    startOfList = parser.startPos;
    while (parser.token & 0b00000100000010000101000000000000 || parser.token === Token.Decorator) {
      parameters.push(getCurrentNode(parser, context, parseFormalParameter));
      if (parser.token === Token.RightParen) break;
      if (consumeOpt(parser, context | Context.AllowRegExp, Token.Comma)) {
        if (parser.token === Token.RightParen) {
          trailingComma = true;
          break;
        }
        continue;
      }
      reportErrorDiagnostic(parser, 0, DiagnosticCode.Expression_or_comma_expected);
    }
    endOfList = parser.pos;
    consume(parser, context, Token.RightParen);
  }

  return createFormalParameterList(parameters, trailingComma, parser.nodeFlags, startOfList, endOfList);
}

function parseFormalParameter(parser: ParserState, context: Context): FormalParameter {
  const pos = parser.startPos;
  const decorators = parseDecorators(parser, context);
  const accessModifier = parseAccessModifier(parser, context, Token.RightParen);
  const ellipsis = consumeOpt(parser, context, Token.Ellipsis);

  let isReadOnly = false;

  // Check if we have something like "function x ( readonly xxx". The 'readonly' modifier is the only
  // modifier we care about here. Others like "abstract" and "declare" are invalid, so we parse them
  // out as normal and report a missing "," instead. This so we can handle this correctly in the grammar
  // checker and the linter.
  if (parser.token === Token.ReadonlyKeyword) {
    if (tryParse(parser, context, nextTokenIsIdentifierOrPatternOnSameLine)) {
      isReadOnly = true;
    }
  }

  if (parser.token === Token.ThisKeyword) {
    const { tokenValue, raw, nodeFlags } = parser;
    if (accessModifier) reportErrorDiagnostic(parser, 0, DiagnosticCode.Identifier_expected);
    nextToken(parser, context);
    return createFormalParameter(
      false,
      createBindingIdentifier(tokenValue, raw, nodeFlags, pos, parser.startPos),
      false,
      parseTypeAnnotation(parser, context),
      null,
      decorators,
      accessModifier,
      isReadOnly,
      parser.nodeFlags,
      pos,
      parser.startPos
    );
  }

  // FormalParameter [Yield,Await]:
  //      BindingElement[?Yield,?Await]
  const binding = parseIdentifierOrPattern(
    parser,
    (context | Context.DisallowIn) ^ Context.DisallowIn,
    DiagnosticCode.Private_identifiers_cannot_be_used_as_parameters
  );

  return createFormalParameter(
    ellipsis,
    binding,
    consumeOpt(parser, context, Token.QuestionMark),
    parseTypeAnnotation(parser, context),
    parseInitializer(parser, context),
    decorators,
    accessModifier,
    isReadOnly,
    parser.nodeFlags,
    pos,
    parser.startPos
  );
}

// BindingPattern:
//   ObjectBindingPattern
//   ArrayBindingPattern
function parseIdentifierOrPattern(
  parser: ParserState,
  context: Context,
  privateIdentifierDiagnosticMessage?: DiagnosticCode
): BindingIdentifier | ArrayBindingPattern | ObjectBindingPattern {
  if (parser.token === Token.LeftBracket) return parseArrayBindingPattern(parser, context);
  if (parser.token === Token.LeftBrace) return parseObjectBindingPattern(parser, context);
  return parseBindingIdentifier(parser, context, privateIdentifierDiagnosticMessage);
}

// Initializer : `=` AssignmentExpression
function parseInitializer(parser: ParserState, context: Context): any {
  return consumeOpt(parser, context | Context.AllowRegExp, Token.Assign)
    ? parseAssignmentExpression(parser, context)
    : null;
}

function parseObjectBindingPattern(parser: ParserState, context: Context): ObjectBindingPattern {
  const pos = parser.startPos;
  consume(parser, context, Token.LeftBrace);
  const bindingPropertyList = parseBindingPropertyList(parser, context);
  consume(parser, context, Token.RightBrace);
  return createObjectBindingPattern(bindingPropertyList, parser.nodeFlags, pos, parser.startPos);
}

function parseBindingPropertyList(parser: ParserState, context: Context): BindingPropertyList {
  const pos = parser.startPos;
  const properties = [];
  let trailingComma = false;
  const multiline = (parser.nodeFlags & NodeFlags.PrecedingLineBreak) !== 0;
  while (parser.token & (Token.IsEllipsis | Token.IsIdentifier | Token.FutureReserved | Token.IsProperty)) {
    properties.push(getCurrentNode(parser, context, parseBindingProperty));
    if (parser.token === Token.RightBrace) break;
    if (consumeOpt(parser, context | Context.AllowRegExp, Token.Comma)) {
      if (parser.token === Token.RightBrace) {
        trailingComma = true;
        break;
      }
      continue;
    }
    reportErrorDiagnostic(parser, 0, DiagnosticCode.Unexpected_token);
  }
  return createBindingPropertyList(properties, multiline, trailingComma, parser.nodeFlags, pos, parser.startPos);
}

function parseBindingProperty(parser: ParserState, context: Context): BindingProperty | SingleNameBinding {
  const pos = parser.startPos;
  const ellipsis = consumeOpt(parser, context, Token.Ellipsis);
  if (parser.token & (Token.FutureReserved | Token.Keyword | Token.IsIdentifier)) {
    const { tokenValue, raw, nodeFlags } = parser;
    nextToken(parser, context);
    if (consumeOpt(parser, context | Context.AllowRegExp, Token.Colon)) {
      return createBindingProperty(
        ellipsis,
        createIdentifierName(tokenValue, raw, nodeFlags, pos, parser.startPos),
        parseBindingElement(parser, context),
        parser.nodeFlags,
        pos,
        parser.startPos
      );
    }
    return createSingleNameBinding(
      ellipsis,
      createBindingIdentifier(tokenValue, raw, nodeFlags, pos, parser.startPos),
      parseInitializer(parser, context),
      parser.nodeFlags,
      pos,
      parser.startPos
    );
  }
  const key = parsePropertyName(parser, context);
  consume(parser, context | Context.AllowRegExp, Token.Colon);
  return createBindingProperty(
    ellipsis,
    key,
    parseBindingElement(parser, context),
    parser.nodeFlags,
    pos,
    parser.startPos
  );
}

// BindingElement :
//   SingleNameBinding
//   BindingPattern Initializer?
// SingleNameBinding :
//   BindingIdentifier Initializer?
function parseBindingElement(parser: ParserState, context: Context): BindingElement {
  const pos = parser.startPos;
  const ellipsis = consumeOpt(parser, context, Token.Ellipsis);
  const binding = parseIdentifierOrPattern(parser, (context | Context.DisallowIn) ^ Context.DisallowIn);
  return createBindingElement(
    ellipsis,
    binding,
    parseInitializer(parser, context),
    parser.nodeFlags,
    pos,
    parser.startPos
  );
}

function parseArrayBindingPattern(parser: ParserState, context: Context): ArrayBindingPattern {
  const pos = parser.startPos;
  nextToken(parser, context | Context.AllowRegExp);
  const bindingElementList = parseBindingElementList(parser, (context | Context.DisallowIn) ^ Context.DisallowIn);
  consume(parser, context, Token.RightBracket);
  return createArrayBindingPattern(bindingElementList, parser.nodeFlags, pos, parser.startPos);
}

function parseBindingElementList(parser: ParserState, context: Context): BindingElementList {
  const pos = parser.startPos;
  const elements = [];
  let trailingComma = false;

  while (parser.token & 0b01000100000010000101000000000000) {
    elements.push(getCurrentNode(parser, context, parseArrayBindingElement));
    if (parser.token === Token.RightBracket) break;
    if (consumeOpt(parser, context | Context.AllowRegExp, Token.Comma)) {
      if (parser.token === Token.RightBracket) {
        trailingComma = true;
        break;
      }
      continue;
    }
    reportErrorDiagnostic(parser, 0, DiagnosticCode._0_expected, ',');
  }
  return createBindingElementList(elements, trailingComma, parser.nodeFlags, pos, parser.startPos);
}

function parseArrayBindingElement(parser: ParserState, context: Context): OmittedExpression | BindingElement {
  if (parser.token & Token.IsComma) return createOmittedExpression(NodeFlags.None, parser.startPos, parser.startPos);
  return parseBindingElement(parser, context);
}

function parseJsxElementOrFragment(
  parser: ParserState,
  context: Context,
  inExpressionContext: boolean
): JsxElement | JsxSelfClosingElement | JsxFragment {
  const pos = parser.startPos;

  consume(parser, context, Token.LessThan);

  // JSX fragments
  if (parser.token === Token.GreaterThan) {
    return createJsxFragment(
      parseJsxOpeningFragment(parser, pos),
      parseJsxChildren(parser, context),
      parseJsxClosingFragment(parser, context, inExpressionContext),
      parser.nodeFlags,
      pos,
      parser.startPos
    );
  }

  const openingElement = parseJsxOpeningOrSelfClosingElement(parser, context, inExpressionContext, pos);

  if (openingElement.kind === NodeKind.JsxOpeningElement) {
    const jsxChildren = parseJsxChildren(parser, context);
    const closingElement = parseJsxClosingElement(parser, context, inExpressionContext);
    if (!tagNamesAreEquivalent(openingElement.tagName, closingElement.tagName)) {
      reportErrorDiagnostic(
        parser,
        DiagnosticCode.Expected_corresponding_JSX_closing_tag_for_0,
        openingElement.tagName.name.text
      );
    }
    return createJsxElement(openingElement, jsxChildren, closingElement, parser.nodeFlags, pos, parser.startPos);
  }

  return openingElement;
}

function parseJsxOpeningFragment(parser: ParserState, pos: number): JsxOpeningFragment {
  scanJsxToken(parser);
  return createJsxOpeningFragment(parser.nodeFlags, pos, parser.startPos);
}

function parseJsxClosingElement(
  parser: ParserState,
  context: Context,
  inExpressionContext: boolean
): JsxClosingElement {
  const pos = parser.startPos;

  consume(parser, context, Token.JSXClose);
  const tagName = parseJsxElementName(parser, context);

  if (inExpressionContext) {
    consume(parser, context, Token.GreaterThan);
  } else {
    reScanJsxToken(parser);
  }
  return createJsxClosingElement(tagName, parser.nodeFlags, pos, parser.startPos);
}

function parseJsxClosingFragment(
  parser: ParserState,
  context: Context,
  inExpressionContext: boolean
): JsxClosingFragment {
  const pos = parser.startPos;

  consume(parser, context, Token.JSXClose);

  if (parser.token & (Token.IsIdentifier | Token.FutureReserved)) {
    reportErrorDiagnostic(parser, 0, DiagnosticCode.Expected_corresponding_closing_tag_for_JSX_fragment);
  }

  if (inExpressionContext) {
    consume(parser, context, Token.GreaterThan);
  } else {
    reScanJsxToken(parser);
  }

  return createJsxClosingFragment(parser.nodeFlags, pos, parser.startPos);
}

function parseJsxChildren(parser: ParserState, context: Context): JsxChildrenList {
  const pos = parser.startPos;
  const children = [];
  while (parser.pos < parser.end) {
    reScanJsxToken(parser);
    if (parser.token === Token.JSXClose) break;
    children.push(parseJsxChild(parser, context));
  }
  return createJsxChildrenList(children as any, parser.nodeFlags, pos, parser.startPos);
}

function parseJsxText(parser: ParserState): JsxText {
  const pos = parser.startPos;
  const name = parser.tokenValue;
  scanJsxToken(parser);
  return createJsxText(name, parser.nodeFlags, pos, parser.startPos);
}

function parseJsxChild(parser: ParserState, context: Context): JsxChild | null {
  if (parser.token === Token.JsxText) return parseJsxText(parser);
  return parser.token === Token.LeftBrace
    ? parseJsxMemberExpression(parser, context, /* inExpressionContext */ false)
    : parseJsxElementOrFragment(parser, context, /* inExpressionContext */ true);
}

function parseJsxAttributes(parser: ParserState, context: Context): JsxAttributesList {
  const pos = parser.startPos;
  const attributes = [];
  while (parser.token & 0b00000000000010000111000000000000) {
    attributes.push(parseJsxAttribute(parser, context));
  }
  return createJsxAttributesList(attributes, parser.nodeFlags, pos, parser.startPos);
}

function parseJsxAttribute(parser: ParserState, context: Context): JsxAttribute | JsxSpreadAttribute {
  if (parser.token === Token.LeftBrace) return parseJsxSpreadAttribute(parser, context);

  scanJsxIdentifier(parser);

  const pos = parser.startPos;

  const name = parseJsxAttributeName(parser, context, pos);
  let initializer = null;

  if (parser.token === Token.Assign) {
    const token = scanJsxAttributeValue(parser, context);
    initializer =
      token === Token.StringLiteral
        ? parseStringLiteral(parser, context)
        : token === Token.LessThan
        ? parseJsxElementOrFragment(parser, context, /*inExpressionContext*/ true)
        : parseJsxMemberExpression(parser, context, /*inExpressionContext*/ true);
  }

  return createJsxAttribute(name, initializer, parser.nodeFlags, pos, parser.startPos);
}

function parseJsxSpreadAttribute(parser: ParserState, context: Context): JsxSpreadAttribute {
  const pos = parser.startPos;
  consume(parser, context, Token.LeftBrace);
  consume(parser, context, Token.Ellipsis);
  const expression = parseExpression(parser, context);
  consume(parser, context, Token.RightBrace);
  return createJsxSpreadAttribute(expression, parser.nodeFlags, pos, parser.startPos);
}

function parseJsxMemberExpression(
  parser: ParserState,
  context: Context,
  inExpressionContext: boolean
): JsxMemberExpression | null {
  const pos = parser.startPos;

  // JSX attributes must only be assigned a non-empty 'expression'
  if (!consume(parser, context, Token.LeftBrace)) return null;

  let expression = null;
  let ellipsis = false;

  if (parser.token !== Token.RightBrace) {
    // JSXSpreadChild
    ellipsis = consumeOpt(parser, context, Token.Ellipsis);
    expression = parseExpression(parser, context);
  }

  if (inExpressionContext) {
    consume(parser, context, Token.RightBrace);
  } else if (parser.token === Token.RightBrace) {
    scanJsxToken(parser);
  }

  return createJsxMemberExpression(ellipsis, expression, parser.nodeFlags, pos, parser.startPos);
}

function parseJsxOpeningOrSelfClosingElement(
  parser: ParserState,
  context: Context,
  inExpressionContext: boolean,
  pos: number
): JsxSelfClosingElement | JsxOpeningElement | any {
  const tagName = parseJsxElementName(parser, context);
  const typeArguments = parseTypeArgumentsOfTypeReference(
    parser,
    context | Context.InTypes | Context.AllowConditionalTypes
  );

  const jsxAttributes = parseJsxAttributes(parser, context);

  if (parser.token === Token.GreaterThan) {
    scanJsxToken(parser);
    return createJsxOpeningElement(tagName, jsxAttributes, typeArguments, parser.nodeFlags, pos, parser.startPos);
  }

  consume(parser, context, Token.Divide);

  if (inExpressionContext) {
    consume(parser, context, Token.GreaterThan);
  } else {
    scanJsxToken(parser);
  }

  return createJsxSelfClosingElement(tagName, jsxAttributes, typeArguments, parser.nodeFlags, pos, parser.startPos);
}

function parseJsxElementName(
  parser: ParserState,
  context: Context
): ThisExpression | JsxNamespacedName | JsxIdentifier | JsxTagNamePropertyAccess {
  const pos = parser.startPos;

  scanJsxIdentifier(parser);

  let expression =
    parser.token === Token.ThisKeyword
      ? parseThisExpression(parser, context)
      : parseJsxAttributeName(parser, context, pos);

  while (consumeOpt(parser, context, Token.Period)) {
    expression = createJsxTagNamePropertyAccess(
      parseJsxIdentifier(parser, context),
      expression,
      parser.nodeFlags,
      pos,
      parser.startPos
    );
  }

  return expression;
}

function parseJsxAttributeName(parser: ParserState, context: Context, pos: number): JsxNamespacedName | JsxIdentifier {
  const name = parseJsxIdentifier(parser, context);
  return parser.token === Token.Colon ? parseJsxNamespacedName(parser, context, name, pos) : name;
}

function parseJsxNamespacedName(
  parser: ParserState,
  context: Context,
  name: JsxIdentifier,
  pos: number
): JsxNamespacedName {
  consume(parser, context, Token.Colon);
  const namespace = parseJsxIdentifier(parser, context);
  return createJsxNamespacedName(name, namespace, parser.nodeFlags, pos, parser.startPos);
}

function parseJsxIdentifier(parser: ParserState, context: Context): JsxIdentifier {
  const pos = parser.startPos;
  const name = parser.tokenValue;
  nextToken(parser, context);
  return createJsxIdentifier(name, pos, parser.startPos);
}

// ImportDeclaration :
//   `import` ImportClause FromClause `;`
//   `import` ModuleSpecifier `;`
function parseImportDeclaration(parser: ParserState, context: Context): ImportDeclaration | ImportEqualsDeclaration {
  let moduleSpecifier = null;
  let importClause = null;
  let fromClause: StringLiteral | Expression | null = null;
  const nodeFlags = parser.nodeFlags;
  const pos = parser.startPos;

  nextToken(parser, context);

  const afterImportPos = parser.startPos;

  if (parser.token === Token.StringLiteral) {
    moduleSpecifier = parseStringLiteral(parser, context);
  } else if (
    parser.token & (Token.FutureReserved | Token.IsIdentifier) || // import id
    parser.token === Token.Multiply || // import *
    parser.token === Token.LeftBrace // import {
  ) {
    let defaultBinding!: BindingIdentifier;
    let namespace: BindingIdentifier | null = null;
    let namedImports: NamedImports | null = null;
    let isCommaSeparated = true;
    let isTypeOnly = false;

    if (parser.token & (Token.FutureReserved | Token.IsIdentifier)) {
      defaultBinding = parseBindingIdentifier(parser, context);

      if (
        parser.token !== Token.FromKeyword &&
        defaultBinding.text === 'type' &&
        parser.token & (Token.IsIdentifier | Token.FutureReserved)
      ) {
        isTypeOnly = true;
        defaultBinding = parseBindingIdentifier(parser, context);
      }

      if (parser.token === Token.Assign) {
        return parseImportEqualsDeclaration(parser, context, defaultBinding, isTypeOnly, pos);
      }

      isCommaSeparated = !consumeOpt(parser, context, Token.Comma);
    }
    if (parser.token === Token.Multiply) {
      namespace = parseNameSpaceImport(parser, context);
    } else if (parser.token === Token.LeftBrace) {
      namedImports = parseNamedImports(parser, context);
    } else if (!isCommaSeparated) {
      reportErrorDiagnostic(parser, 0, DiagnosticCode.Unexpected_token);
    }

    importClause = createImportClause(
      defaultBinding,
      namespace,
      namedImports,
      isTypeOnly,
      parser.nodeFlags,
      afterImportPos,
      parser.startPos
    );
    fromClause = parseFromClause(parser, context);
  } else {
    reportErrorDiagnostic(parser, 0, DiagnosticCode.Unexpected_token);
  }
  parseSemicolon(parser, context);
  return createImportDeclaration(fromClause as any, moduleSpecifier, importClause, nodeFlags, pos, parser.startPos);
}

function parseImportEqualsDeclaration(
  parser: ParserState,
  context: Context,
  identifier: any,
  isTypeOnly: boolean,
  start: number
): ImportEqualsDeclaration {
  consume(parser, context, Token.Assign);
  const moduleReference = parseModuleReference(parser, context);
  parseSemicolon(parser, context);
  if (isTypeOnly) reportErrorDiagnostic(parser, 0, DiagnosticCode.Only_ECMAScript_imports_may_use_import_type);
  return createImportEqualsDeclaration(
    identifier,
    moduleReference,
    isTypeOnly,
    parser.nodeFlags,
    start,
    parser.startPos
  );
}

function isExternalModuleReference(parser: ParserState, context: Context) {
  return (
    parser.token === Token.RequireKeyword &&
    lookAhead(parser, context, () => {
      nextToken(parser, context);
      return parser.token === Token.LeftParen;
    })
  );
}

function parseModuleReference(parser: ParserState, context: Context) {
  return isExternalModuleReference(parser, context)
    ? parseExternalModuleReference(parser, context)
    : parseEntityName(parser, context, /* allowKeywords */ false);
}

function parseExternalModuleReference(parser: ParserState, context: Context): ExternalModuleReference {
  const pos = parser.startPos;
  consume(parser, context, Token.RequireKeyword);
  consume(parser, context, Token.LeftParen);

  const expression = parseModuleSpecifier(parser, context);
  consume(parser, context, Token.RightParen);
  return createExternalModuleReference(expression, parser.nodeFlags, pos, parser.startPos);
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
function parseNameSpaceImport(parser: ParserState, context: Context): any {
  consume(parser, context, Token.Multiply);
  consume(parser, context, Token.AsKeyword);
  return parseBindingIdentifier(parser, context);
}

// NamedImports :
//   `{` `}`
//   `{` ImportsList `}`
//   `{` ImportsList `,` `}`
function parseNamedImports(parser: ParserState, context: Context): NamedImports {
  const pos = parser.startPos;
  consume(parser, context, Token.LeftBrace);
  const importsList = parseImportsList(parser, context);
  consume(parser, context | Context.AllowRegExp, Token.RightBrace);
  return createNamedImports(importsList, parser.nodeFlags, pos, parser.startPos);
}

function parseImportsList(parser: ParserState, context: Context): ImportsList {
  const pos = parser.startPos;
  const specifiers = [];

  while (parser.token === Token.StringLiteral) {
    const moduleExportName = parseModuleExportName(parser, context);
    consume(parser, context, Token.AsKeyword);
    const importedBinding = parseBindingIdentifier(parser, context);
    specifiers.push(
      createImportSpecifier(moduleExportName, null, importedBinding, parser.nodeFlags, pos, parser.startPos)
    );
  }

  while (parser.token & (Token.IsIdentifier | Token.Keyword | Token.FutureReserved)) {
    specifiers.push(getCurrentNode(parser, context, parseImportSpecifier));
    if (parser.token === Token.RightBrace) break;
    consume(parser, context, Token.Comma);
  }
  return createImportsList(specifiers, parser.nodeFlags, pos, parser.startPos);
}

// ImportSpecifier :
//   ImportedBinding
//   IdentifierName `as` ImportedBinding
function parseImportSpecifier(parser: ParserState, context: Context): ImportSpecifier {
  const pos = parser.startPos;
  let importedBinding: BindingIdentifier | null = null;
  const identifierName = parseIdentifierName(parser, context);
  if (consumeOpt(parser, context, Token.AsKeyword)) {
    importedBinding = parseBindingIdentifier(parser, context);
  } else {
    identifierName.kind = NodeKind.BindingIdentifier | NodeKind.IsChildless;
    importedBinding = identifierName;
  }

  return createImportSpecifier(null, identifierName, importedBinding, parser.nodeFlags, pos, parser.startPos);
}

// ModulemoduleExportName : StringLiteral
function parseModuleExportName(parser: ParserState, context: Context): StringLiteral {
  return parseStringLiteral(parser, context);
}

// FromClause :
//   `from` ModuleSpecifier
function parseFromClause(parser: ParserState, context: Context): StringLiteral | Expression {
  consume(parser, context, Token.FromKeyword);
  if (parser.token === Token.StringLiteral) {
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
): ExportDeclaration | ExportDefault | ExpressionStatement | LabelledStatement | ImportEqualsDeclaration {
  const pos = parser.startPos;
  const nodeFlags = parser.nodeFlags;
  nextToken(parser, context | Context.AllowRegExp);
  let declaration: any = null;
  let fromClause: StringLiteral | Expression | null = null;
  let namedExports: NamedExports | null = null;
  let exportFromClause: any | null = null;
  const isTypeOnly = parser.token === Token.TypeKeyword && tryParse(parser, context, canFollowExportTypeKeyword);

  switch (parser.token) {
    case Token.DefaultKeyword:
      return parseExportDefault(parser, context, pos);
    case Token.LetKeyword:
      nextToken(parser, context);
      declaration = parseLexicalDeclaration(parser, context, /* isConst */ false, parser.nodeFlags, pos);
      break;
    case Token.ConstKeyword: {
      const { startPos, nodeFlags } = parser;
      nextToken(parser, context);
      declaration = consumeOpt(parser, context, Token.EnumKeyword)
        ? parseEnumDeclaration(parser, context, /* isConst */ true, nodeFlags, startPos)
        : parseLexicalDeclaration(parser, context, /* isConst */ true, parser.nodeFlags, pos);
      break;
    }
    case Token.LeftBrace: {
      namedExports = parseNamedExports(parser, context);
      if (parser.token === Token.FromKeyword) fromClause = parseFromClause(parser, context);
      parseSemicolon(parser, context);
      break;
    }
    case Token.Multiply: {
      exportFromClause = parseExportFromClause(parser, context, pos);
      fromClause = parseFromClause(parser, context);
      parseSemicolon(parser, context);
      break;
    }
    case Token.Decorator:
    case Token.ClassKeyword:
      declaration = parseClassDeclaration(parser, context);
      break;
    case Token.FunctionKeyword:
      declaration = parseFunctionDeclaration(parser, context, /* isDefault */ false);
      break;
    case Token.VarKeyword:
      declaration = parseVariableStatement(parser, context);
      break;
    case Token.AsyncKeyword:
      if (lookAhead(parser, context, nextTokenIsFunctionKeywordOnSameLine)) {
        declaration = parseFunctionDeclaration(parser, context, /* isDefault */ false);
        break;
      }
      reportErrorDiagnostic(parser, 0, DiagnosticCode.Declaration_or_statement_expected);
      return parseExpressionOrLabeledStatement(parser, context, /* allowFunction */ false);
    case Token.ImportKeyword:
      nextToken(parser, context);
      return parseImportEqualsDeclaration(
        parser,
        context,
        parseIdentifierName(parser, context),
        /* isTypeOnly */ false,
        pos
      );
    case Token.Assign:
      return parseExportAssignment(parser, context);
    case Token.TypeKeyword:
    case Token.InterfaceKeyword:
    case Token.EnumKeyword:
    case Token.AbstractKeyword:
    case Token.DeclareKeyword:
      const node = parseStatementListItem(parser, context) as any;
      if (node.expression) {
        reportErrorDiagnostic(parser, 0, DiagnosticCode.Declaration_or_statement_expected);
      }
      node.nodeFlags |= NodeFlags.Exported;
      return node;
    default:
      reportErrorDiagnostic(parser, 0, DiagnosticCode.Unexpected_token);
  }

  return createExportDeclaration(
    declaration,
    namedExports,
    fromClause as any,
    exportFromClause,
    isTypeOnly,
    nodeFlags | parser.nodeFlags,
    pos,
    parser.startPos
  );
}

function parseExportAssignment(parser: ParserState, context: Context): ExportAssignment {
  const pos = parser.startPos;
  nextToken(parser, context);
  const expression = parseAssignmentExpression(parser, context | Context.InAwaitContext);
  parseSemicolon(parser, context);
  return createExportAssignment(expression, parser.nodeFlags, pos, parser.startPos);
}

function canFollowExportTypeKeyword(parser: ParserState, context: Context): boolean {
  nextToken(parser, context);
  return parser.token === Token.LeftBrace && (parser.nodeFlags & NodeFlags.PrecedingLineBreak) === 0;
}

// ExportFromClause :
//   `*`
//   `*` as IdentifierName
//   `*` as ModulemoduleExportName
function parseExportFromClause(parser: ParserState, context: Context, pos: number): ExportFromClause {
  nextToken(parser, context);
  let moduleExportName: StringLiteral | null = null;
  let namedBinding: IdentifierName | null = null;
  if (consumeOpt(parser, context, Token.AsKeyword)) {
    if (parser.token === Token.StringLiteral) {
      moduleExportName = parseModuleExportName(parser, context);
    } else {
      namedBinding = parseIdentifierName(parser, context);
    }
  }
  return createExportFromClause(namedBinding, moduleExportName, NodeFlags.None, pos, parser.startPos);
}

// NamedExports :
//   `{` `}`
//   `{` ExportsList `}`
//   `{` ExportsList `,` `}`
function parseNamedExports(parser: ParserState, context: Context): NamedExports {
  const pos = parser.startPos;
  consume(parser, context, Token.LeftBrace);
  const exportsList = parseExportsList(parser, context);
  consume(parser, context | Context.AllowRegExp, Token.RightBrace);
  return createNamedExports(exportsList, parser.nodeFlags, pos, parser.startPos);
}

function parseExportsList(parser: ParserState, context: Context): ExportsList {
  const pos = parser.startPos;
  const specifiers = [];
  while (parser.token & (Token.IsIdentifier | Token.Keyword | Token.FutureReserved)) {
    specifiers.push(getCurrentNode(parser, context, parseExportSpecifier));
    if (parser.token === Token.RightBrace) break;
    consume(parser, context, Token.Comma);
  }
  return createExportsList(specifiers, parser.nodeFlags, pos, parser.startPos);
}

// ExportSpecifier :
//   IdentifierName
//   IdentifierName `as` IdentifierName
function parseExportSpecifier(parser: ParserState, context: Context): ExportSpecifier {
  const pos = parser.startPos;
  // ImportSpecifier:
  //   BindingIdentifier
  //   IdentifierName as BindingIdentifier
  // ExportSpecifier:
  //   IdentifierName
  //   IdentifierName as IdentifierName
  let moduleExportName: StringLiteral | null = null;
  if (parser.token === Token.StringLiteral) {
    const name = parseModuleExportName(parser, context);
    let exportedName = null;
    if (consumeOpt(parser, context, Token.AsKeyword)) {
      if (parser.token === Token.StringLiteral) {
        moduleExportName = parseModuleExportName(parser, context);
      } else {
        exportedName = parseIdentifierName(parser, context);
      }
    }
    return createExportSpecifier(name, moduleExportName, exportedName, parser.nodeFlags, pos, parser.startPos);
  }
  const name = parseIdentifierName(parser, context);
  let exportedName = null;
  if (consumeOpt(parser, context, Token.AsKeyword)) {
    if (parser.token === Token.StringLiteral) {
      moduleExportName = parseModuleExportName(parser, context);
    } else {
      exportedName = parseIdentifierName(parser, context);
    }
  }
  return createExportSpecifier(name, moduleExportName, exportedName, parser.nodeFlags, pos, parser.startPos);
}

// ExportDefault :
//   `export` `default` HoistableDeclaration [EXTENDED]
//   `export` `default` ClassDeclaration  [EXTENDED]
//   `export` `default` AssignmentExpression `;`  [EXTENDED]
function parseExportDefault(
  parser: ParserState,
  context: Context,
  pos: number
): ExportDefault | ExpressionStatement | LabelledStatement {
  nextToken(parser, context | Context.AllowRegExp);

  let declaration!: Statement | Expression;

  switch (parser.token) {
    case Token.FunctionKeyword:
      declaration = parseFunctionDeclaration(parser, context, /* isDefault */ true);
      break;
    case Token.Decorator:
    case Token.ClassKeyword:
      declaration = parseClassDeclaration(parser, context);
      break;
    case Token.AsyncKeyword:
      if (lookAhead(parser, context, nextTokenIsFunctionKeywordOnSameLine)) {
        declaration = parseFunctionDeclaration(parser, context, /* isDefault */ true);
        break;
      }
    case Token.InterfaceKeyword:
    case Token.AbstractKeyword:
      const node = parseStatementListItem(parser, context) as any;
      if (!node.expression) {
        node.nodeFlags |= NodeFlags.Exported;
        return node;
      }
      declaration = node.expression;
      parseSemicolon(parser, context);
      break;
    default:
      // export default {};
      // export default [];
      // export default (1 + 2);
      declaration = parseAssignmentExpression(parser, context);
      parseSemicolon(parser, context);
  }
  return createExportDefault(declaration, parser.nodeFlags, pos, parser.startPos);
}

function parseClassDeclaration(parser: ParserState, context: Context): ClassDeclaration {
  const { startPos, nodeFlags } = parser;
  const decorator = parseDecorators(parser, context);
  nextToken(parser, context | Context.AllowRegExp);

  const name =
    parser.token & (Token.IsIdentifier | Token.FutureReserved) &&
    parser.token !== Token.ExtendsKeyword &&
    parser.token !== Token.ImplementsKeyword
      ? parseBindingIdentifier(parser, context)
      : null;
  const typeParameters = parseTypeParameters(parser, context | Context.AllowConditionalTypes);

  return createClassDeclaration(
    name,
    typeParameters,
    consumeOpt(parser, context | Context.AllowRegExp, Token.ExtendsKeyword)
      ? parseLeftHandSideExpression(parser, context, false)
      : null,
    parseimplementClauses(parser, context),
    consume(parser, context, Token.LeftBrace)
      ? parseClassElementList(parser, context)
      : // Empty list
        createClassElementList([], parser.nodeFlags, startPos, startPos),
    decorator,
    nodeFlags | parser.nodeFlags,
    startPos,
    parser.startPos
  );
}

function parseimplementClauses(parser: ParserState, context: Context): ImplementClauses | null {
  if (consumeOpt(parser, context, Token.ImplementsKeyword)) {
    const pos = parser.startPos;
    const clauses = [];
    while (parser.token & (Token.IsIdentifier | Token.FutureReserved)) {
      clauses.push(parseImplementClause(parser, context));
      if (parser.token & Token.IsPatternStart) break;
      if (parser.token === Token.ExtendsKeyword) {
        reportErrorDiagnostic(parser, 0, DiagnosticCode.Interface_declaration_cannot_have_implements_clause);
        break;
      }
      if (consumeOpt(parser, context, Token.Comma)) continue;
      reportErrorDiagnostic(parser, 0, DiagnosticCode._0_expected, ',');
    }
    return createImplementClauses(clauses, parser.nodeFlags, pos, parser.startPos);
  }
  return null;
}

function parseImplementClause(parser: ParserState, context: Context): ImplementClause {
  const pos = parser.startPos;
  return createImplementClause(parseTypeReference(parser, context), parser.nodeFlags, pos, parser.startPos);
}

function parseClassExpression(parser: ParserState, context: Context): ClassExpression {
  const pos = parser.startPos;
  const decorator = parseDecorators(parser, context);
  nextToken(parser, context | Context.AllowRegExp);
  const name =
    parser.token & (Token.IsIdentifier | Token.FutureReserved) &&
    parser.token !== Token.ExtendsKeyword &&
    parser.token !== Token.ImplementsKeyword
      ? parseBindingIdentifier(parser, context)
      : null;

  return createClassExpression(
    name,
    parseTypeParameters(parser, context | Context.AllowConditionalTypes),
    consumeOpt(parser, context | Context.AllowRegExp, Token.ExtendsKeyword)
      ? parseLeftHandSideExpression(parser, context, false)
      : null,
    parseimplementClauses(parser, context),
    consume(parser, context, Token.LeftBrace)
      ? parseClassElementList(parser, context)
      : // Empty list
        createClassElementList([], parser.nodeFlags, pos, pos),
    decorator,
    parser.nodeFlags,
    pos,
    parser.startPos
  );
}

function parseClassElementList(parser: ParserState, context: Context): ClassElementList {
  const pos = parser.startPos;
  const elements = [];

  while (
    parser.token &
    (Token.IsIdentifier | Token.Keyword | Token.FutureReserved | Token.IsProperty | Token.IsSemicolon)
  ) {
    elements.push(getCurrentNode(parser, context, parseClassElement));
    consumeOpt(parser, context, Token.Comma);
    if (parser.token === Token.RightBrace) break;
  }
  consume(parser, context, Token.RightBrace);
  return createClassElementList(elements, parser.nodeFlags, pos, parser.startPos);
}

function canFollowAPropertyOnSameLine(parser: ParserState, context: Context) {
  nextToken(parser, context);
  return (
    (parser.token & 0b00010000000000000111000000000000) !== 0 && (parser.nodeFlags & NodeFlags.PrecedingLineBreak) === 0
  );
}

// ClassElement :
//   `static` MethodDefinition
//   MethodDefinition
function parseClassElement(parser: ParserState, context: Context): ClassElement | Semicolon | FieldDefinition | any {
  const pos = parser.startPos;

  if (parser.token === Token.Semicolon) {
    nextToken(parser, context);
    return createSemicolon(parser.nodeFlags, pos, parser.startPos);
  }

  // If we have "{ @foo xxx" then this is definitely an class decorator.
  const decorators = parseDecorators(parser, context);

  let kind = PropertyKind.None;
  let isStatic = false;

  // We need to check for the 'readOnly' keyword first in case we have something like "{ readonly private foo;".
  // A accessor modifier must precede 'readonly' modifier, so this isn't allowed here. We will
  // handle this in the grammar checker
  let isReadOnly = parser.token === Token.ReadonlyKeyword && tryParse(parser, context, canFollowAPropertyOnSameLine);

  // Access modifiers are "{ private xxx(" or "{ protected foo<x>(" or "{ readonly public xxx".
  let modifiers = parseAccessModifier(parser, context, Token.RightBrace);

  // Cases like "{ abstract foo(" or "{ abstract foo<x>(" or "{ abstract xxx".
  const isAbstract = parser.token === Token.AbstractKeyword && tryParse(parser, context, canFollowAPropertyOnSameLine);

  // Simple cases like "{ private readonly foo(" or "{ readonly foo<x>(" or "{ readonly static set(".
  isReadOnly = parser.token === Token.ReadonlyKeyword && tryParse(parser, context, canFollowAPropertyOnSameLine);

  // If we have "{ private readonly * foo" etc. this must be a class method.
  if (consumeOpt(parser, context, Token.Multiply)) kind |= PropertyKind.Generator;

  // Cases like "{ declare (" isn't valid, but accepted here for error recovery reasons.
  // We will handle this in the grammar checker. If we consume this as an modifier, it will
  // block us from doing "auto fix" in the linter.
  let isDeclared = parser.token === Token.DeclareKeyword && tryParse(parser, context, canFollowAPropertyOnSameLine);

  if (parser.token & 0b00000000000000000111000000000000) {
    let token = parser.token;
    let key: any = parseIdentifierName(parser, context);

    // Simple cases like "{ static foo(" or "{ static foo<x>(" or "{ private static set(" or
    // "{ private static constructor<x>(".
    if (token === Token.StaticKeyword) {
      if (parser.token & Token.IsClassField) {
        return parseFieldDefinition(
          parser,
          context,
          kind,
          modifiers,
          isStatic,
          isAbstract,
          isReadOnly,
          isDeclared,
          decorators,
          key,
          pos
        );
      }

      if (consumeOpt(parser, context, Token.Multiply)) kind |= PropertyKind.Generator;

      if (parser.token === Token.LeftParen || parser.token === Token.LessThan) {
        return createClassElement(
          isStatic,
          isAbstract,
          isReadOnly,
          /* isOptional */ false,
          parseMethodDefinition(parser, context, key, kind, decorators, modifiers),
          parser.nodeFlags,
          pos,
          parser.startPos
        );
      }

      token = parser.token;

      key = parsePropertyName(parser, context);
      isStatic = true;
    }

    // If we have "{ private constructor" or "{ protected constructor" or "{ public constructor" or "{ readonly constructor"
    // or "{ constructor" this must be a class method.
    if (token === Token.ConstructorKeyword) {
      // Classes may not have a field named 'constructor' and type parameters cannot appear on a constructor declaration
      // like in this case 'class Foo { readonly constructor<x>(a) }'. However. "{ static constructor<x>(" is
      // a valid case.
      return createClassElement(
        isStatic,
        isAbstract,
        isReadOnly,
        /* isOptional */ false,
        parseMethodDefinition(parser, context, key, kind | PropertyKind.Constructor, decorators, modifiers),
        parser.nodeFlags,
        pos,
        parser.startPos
      );
    }

    // Simple cases like "{ readonly foo(" or "{ readonly foo<x>(" etc.
    if (parser.token === Token.LeftParen || parser.token === Token.LessThan) {
      return createClassElement(
        isStatic,
        isAbstract,
        isReadOnly,
        /* isOptional */ false,
        parseMethodDefinition(parser, context, key, kind, decorators, modifiers),
        parser.nodeFlags,
        pos,
        parser.startPos
      );
    }

    // Simple class field cases like "{ readonly y" or "{ private y" or "{ private readonly y = " etc.
    if (parser.token & Token.IsClassField) {
      return parseFieldDefinition(
        parser,
        context,
        kind,
        modifiers,
        isStatic,
        isAbstract,
        isReadOnly,
        isDeclared,
        decorators,
        key,
        pos
      );
    }

    if (token === Token.AsyncKeyword) {
      // Simple cases like "{ async * function (" or "{ async foo (" or "{ async foo<x>(" etc.
      // Class fields are forbidden in this context.
      if (parser.token === Token.LeftParen || parser.token === Token.LessThan) {
        return createClassElement(
          isStatic,
          isAbstract,
          isReadOnly,
          /* isOptional */ false,
          parseMethodDefinition(parser, context, key, kind, decorators, modifiers),
          parser.nodeFlags,
          pos,
          parser.startPos
        );
      }

      kind |= PropertyKind.Async;

      if (consumeOpt(parser, context, Token.Multiply)) kind |= PropertyKind.Generator;

      token = parser.token;

      key = parsePropertyName(parser, context);
    }

    // Simple cases like "{ async get(" or "{ get foo (" or "{ get foo<x>(" etc.
    if (token === Token.GetKeyword) {
      if (parser.token === Token.LeftParen || parser.token === Token.LessThan) {
        return createClassElement(
          isStatic,
          isAbstract,
          isReadOnly,
          /* isOptional */ false,
          parseMethodDefinition(parser, context, key, kind, decorators, modifiers),
          parser.nodeFlags,
          pos,
          parser.startPos
        );
      }
      key = parsePropertyName(parser, context);

      kind |= PropertyKind.Getter;
    }

    // If we have cases like "{ foo?" or "{ foo?: string" or "{ static = y" or "{ async set(" or "{ set foo (" or
    // "{ set foo<x>(" etc. this could be either a class field or a class method
    if (token === Token.SetKeyword) {
      // If we have "{ async set(" then this is definitely not an class field.
      if (parser.token === Token.LeftParen || parser.token === Token.LessThan) {
        return createClassElement(
          isStatic,
          isAbstract,
          isReadOnly,
          /* isOptional */ false,
          parseMethodDefinition(parser, context, key, kind, decorators, modifiers),
          parser.nodeFlags,
          pos,
          parser.startPos
        );
      }
      key = parsePropertyName(parser, context);
      kind |= PropertyKind.Setter;
    }

    // For error recovery reasons we need to check for the existence of the 'declare' keyword again. Cases like
    // "{ async declare xxx(" and "{ async declare xxx = yyy". This will be handled in the grammar checker.
    if (
      token === Token.DeclareKeyword &&
      (parser.token & 0b00010000000000000111000000000000) !== 0 &&
      (parser.nodeFlags & NodeFlags.PrecedingLineBreak) === 0
    ) {
      key = parsePropertyName(parser, context);
      isDeclared = true;
    }

    // If we have "{ private static x (" or "{ static async (" or "{ private static async x(" or "{ get foo()"
    // or "{ async set (" this must be a class method. Cases like "class Foo { private readonly static async x() }"
    // isn't valid, but we will handle this in the grammar checker.
    if (parser.token === Token.LeftParen || parser.token === Token.LessThan) {
      return createClassElement(
        isStatic,
        isAbstract,
        isReadOnly,
        /* isOptional */ false,
        parseMethodDefinition(parser, context, key, kind, decorators, modifiers),
        parser.nodeFlags,
        pos,
        parser.startPos
      );
    }

    // This has to be something like "{ async" or "{ foo?" or "{ foo?: string" or "{ static = async" etc.
    return parseFieldDefinition(
      parser,
      context,
      kind,
      modifiers,
      isStatic,
      isAbstract,
      isReadOnly,
      isDeclared,
      decorators,
      key,
      pos
    );
  }

  if (parser.token & Token.IsProperty) {
    let key;
    // Check if this is an unambiguous index signature or computed property
    if (parser.token === Token.LeftBracket) {
      nextToken(parser, context);

      // If we have "[..." or "[]" then we parse this as an index signature for error recovery reasons
      if (parser.token & Token.IsEllipsis || parser.token === Token.RightBracket) {
        return parseIndexSignatureDeclaration(parser, context, PropertyKind.None, modifiers);
      }

      if (parser.token & (Token.IsIdentifier | Token.FutureReserved)) {
        // If we have "[readonly id" then this has to be parsed as an index signature
        if (parser.token === Token.ReadonlyKeyword) {
          const name = parseIdentifierName(parser, context);
          // If we have "[readonly ...id" or "[readonly id" or then this is an index signature even if
          // a modifier isn't allowed here, but we will handle this in the grammar checker
          if (parser.token & (Token.IsEllipsis | Token.IsIdentifier | Token.FutureReserved)) {
            return parseIndexSignatureDeclaration(parser, context, PropertyKind.Readonly, modifiers);
          }
          consume(parser, context, Token.RightBracket);
          return parsePropertyOrMethodSignature(parser, context, name, PropertyKind.None, modifiers, pos);
        }

        // If we have "[private id" or "[protected id" or "[public id" then this *maybe* is an index signature.
        // The only allowed sequence is: "[id:". However, for error recovery, we allow this.
        modifiers = parseAccessModifier(parser, context, Token.RightBrace);

        // It's needed to do lookahead and try too figure out if this is an valid index signature
        // if we don't have any access modifiers follow by "...". Speculative parsing will not help us here.
        if ((modifiers && parser.token & Token.Ellipsis) || lookAhead(parser, context, isIndexSignature)) {
          return parseIndexSignatureDeclaration(parser, context, PropertyKind.None, modifiers);
        }
      }
      // We have "[ expr" and this is a valid computed property
      const expression = parseAssignmentExpression(parser, context);
      consume(parser, context, Token.RightBracket);
      key = createComputedPropertyName(expression, parser.nodeFlags, pos, parser.startPos);
    } else {
      key = parsePropertyName(parser, context);
    }

    // If we have "{ private constructor" or "{ protected constructor" or "{ public constructor" or "{ readonly constructor"
    // or "{ constructor" this must be a class method.
    if (parser.tokenValue === 'constructor') {
      // Classes may not have a field named 'constructor' and type parameters cannot appear on a constructor declaration
      // like in this case 'class Foo { readonly constructor<x>(a) }'. However. "{ static constructor<x>(" is
      // a valid case.
      return createClassElement(
        isStatic,
        isAbstract,
        isReadOnly,
        /* isOptional */ false,
        parseMethodDefinition(parser, context, key, kind | PropertyKind.Constructor, decorators, modifiers),
        parser.nodeFlags,
        pos,
        parser.startPos
      );
    }

    if (consumeOpt(parser, context, Token.Multiply)) kind |= PropertyKind.Generator;

    if (parser.token === Token.LeftParen || parser.token === Token.LessThan) {
      return createClassElement(
        isStatic,
        isAbstract,
        isReadOnly,
        /* isOptional */ false,
        parseMethodDefinition(parser, context, key, kind | PropertyKind.None, decorators, modifiers),
        parser.nodeFlags,
        pos,
        parser.startPos
      );
    }

    // This has to be something like "{ async" or "{ foo?" or "{ foo?: string" or "{ static = async" etc.
    return parseFieldDefinition(
      parser,
      context,
      kind,
      modifiers,
      isStatic,
      isAbstract,
      isReadOnly,
      isDeclared,
      decorators,
      key,
      pos
    );
  }
}

function parseFieldDefinition(
  parser: ParserState,
  context: Context,
  kind: PropertyKind,
  accessModifier: AccessModifier | null,
  isStatic: boolean,
  isAbstract: boolean,
  isReadOnly: boolean,
  isDeclared: boolean,
  decorators: DecoratorList | null,
  key: Expression | PrivateIdentifier,
  pos: number
): FieldDefinition | ClassElement {
  let optional = false;
  if (consumeOpt(parser, context, Token.QuestionMark)) {
    // This has to be an optional method "{ async?(". We check it here so we can avoid having to do
    // the lookahead for this by just trying to parse out '?' and then seeing if it is followed
    // by '('
    if (parser.token === Token.LeftParen) {
      return createClassElement(
        isStatic,
        isAbstract,
        isReadOnly,
        /* isOptional */ true,
        parseMethodDefinition(parser, context, key as any, kind, decorators, accessModifier),
        parser.nodeFlags,
        pos,
        parser.startPos
      );
    }
    optional = true;
  }
  const exclamation = consumeOpt(parser, context, Token.Negate);
  const type = parseTypeAnnotation(parser, context);
  const initializer = parseInitializer(parser, context);

  parseSemicolon(parser, context);

  return createFieldDefinition(
    key,
    optional,
    isDeclared,
    isReadOnly,
    isAbstract,
    exclamation,
    type,
    initializer,
    decorators,
    accessModifier,
    isStatic,
    parser.nodeFlags,
    pos,
    parser.startPos
  );
}

function parseTypeAnnotation(parser: ParserState, context: Context): TypeNode | null {
  return consumeOpt(parser, context, Token.Colon) ? parseType(parser, context | Context.AllowConditionalTypes) : null;
}

function isAnyModifier(t: Token): boolean {
  // Added here for for error recovery reasons
  return (
    t === Token.ProtectedKeyword ||
    t === Token.PrivateKeyword ||
    t === Token.PublicKeyword ||
    t === Token.ReadonlyKeyword ||
    t === Token.DeclareKeyword ||
    t === Token.StaticKeyword ||
    t === Token.AbstractKeyword
  );
}

function skipParameterStart(parser: ParserState, context: Context): boolean {
  if (isAnyModifier(parser.token)) {
    nextToken(parser, context);
  }
  if (parser.token & (Token.IsIdentifier | Token.FutureReserved)) {
    nextToken(parser, context);
    return true;
  }
  if (parser.token & Token.IsPatternStart) {
    // Return true if we can parse an array or object binding pattern with no errors
    const previousErrorCount = parser.diagnostics.length;
    parseIdentifierOrPattern(parser, (context | Context.DisallowIn) ^ Context.DisallowIn);
    return previousErrorCount === parser.diagnostics.length;
  }
  return false;
}

function parseType(parser: ParserState, context: Context): TypeNode | ConditionalType {
  const pos = parser.startPos;
  const type = parseUnionType(parser, context | Context.AllowConditionalTypes);
  if (context & Context.AllowConditionalTypes && parser.token === Token.ExtendsKeyword) {
    if (parser.nodeFlags & NodeFlags.PrecedingLineBreak) return type;
    nextToken(parser, context);
    // The type following 'extends' is not permitted to be another conditional type
    const extendsType = parseType(parser, (context | Context.AllowConditionalTypes) ^ Context.AllowConditionalTypes);
    consume(parser, context, Token.QuestionMark);
    const trueType = parseType(parser, context | Context.AllowConditionalTypes);
    consume(parser, context, Token.Colon);
    const falseType = parseType(parser, context | Context.AllowConditionalTypes);
    return createConditionalType(type, extendsType, trueType, falseType, parser.nodeFlags, pos, parser.startPos);
  }
  return type;
}

function parseUnionType(parser: ParserState, context: Context): TypeNode | UnionType {
  consumeOpt(parser, context, Token.BitwiseOr);
  const type = parseIntersectionType(parser, context);
  if (parser.token === Token.BitwiseOr) {
    const pos = parser.startPos;
    const types = [type];
    while (consumeOpt(parser, context, Token.BitwiseOr)) {
      types.push(getCurrentNode(parser, context, parseIntersectionType));
    }
    return createUnionType(types, parser.nodeFlags, pos, parser.startPos);
  }
  return type;
}

function parseIntersectionType(parser: ParserState, context: Context): TypeNode | IntersectionType {
  consumeOpt(parser, context, Token.BitwiseAnd);
  const type = parsePostfixType(parser, context);
  if (parser.token === Token.BitwiseAnd) {
    const pos = parser.startPos;
    const types = [type];
    while (consumeOpt(parser, context, Token.BitwiseAnd)) {
      types.push(getCurrentNode(parser, context, parsePostfixType));
    }
    return createIntersectionType(types, parser.nodeFlags, pos, parser.startPos);
  }
  return type;
}

function parsePostfixType(parser: ParserState, context: Context): TypeNode | IndexedAccessType | ArrayType {
  const pos = parser.startPos;
  let type = parsePrimaryType(parser, context);
  while ((parser.nodeFlags & NodeFlags.PrecedingLineBreak) === 0 && consumeOpt(parser, context, Token.LeftBracket)) {
    if (parser.token & 0b00100000000010000101000000000000) {
      const indexType = parseType(parser, context | Context.AllowConditionalTypes);
      consume(parser, context, Token.RightBracket);
      type = createIndexedAccessType(type, indexType, parser.nodeFlags, pos, parser.pos);
    } else {
      consume(parser, context, Token.RightBracket);
      type = createArrayType(type, parser.nodeFlags, pos, parser.pos);
    }
  }

  return type;
}

function parseFunctionTypeWithTypeParameters(parser: ParserState, context: Context): FunctionType {
  const pos = parser.startPos;
  const typeParameters = parseTypeParameters(parser, context | Context.AllowConditionalTypes);
  consume(parser, context, Token.LeftParen);
  const parameters = parseFunctionTypeParams(parser, context);
  consume(parser, context, Token.RightParen);
  consume(parser, context, Token.Arrow);
  return createFunctionType(
    typeParameters,
    parameters,
    parseTypeOrTypePredicate(parser, context),
    parser.nodeFlags,
    pos,
    parser.startPos
  );
}

function parseFunctionType(parser: ParserState, context: Context, pos: number): FunctionType {
  const parameters = parseFunctionTypeParams(parser, context);
  consume(parser, context, Token.RightParen);
  consume(parser, context, Token.Arrow);
  return createFunctionType(
    null,
    parameters,
    parseTypeOrTypePredicate(parser, context),
    parser.nodeFlags,
    pos,
    parser.startPos
  );
}

function parseConstructorType(
  parser: ParserState,
  context: Context,
  accessModifier: AccessModifier | null
): ConstructorType {
  const pos = parser.startPos;
  const isAbstract = consumeOpt(parser, context, Token.AbstractKeyword);
  nextToken(parser, context);
  const typeParameters = parseTypeParameters(parser, context | Context.AllowConditionalTypes);
  const parameters = parseParameterList(parser, context);
  consume(parser, context, Token.Arrow);
  const type = parseTypeOrTypePredicate(parser, context);
  if (isAbstract) parser.nodeFlags |= NodeFlags.Abstract;
  return createConstructorType(
    accessModifier,
    typeParameters,
    parameters,
    type,
    parser.nodeFlags,
    pos,
    parser.startPos
  );
}

function parseTypeOperator(parser: ParserState, context: Context): TypeOperator | TypeNode {
  const pos = parser.startPos;
  const operator = KeywordDescTable[parser.token & Token.Type] as TypeOperators;
  nextToken(parser, context);
  return createTypeOperator(
    operator,
    parseType(parser, context | Context.AllowConditionalTypes),
    parser.nodeFlags,
    pos,
    parser.startPos
  );
}

function parseInferType(parser: ParserState, context: Context): InferType {
  const pos = parser.startPos;
  nextToken(parser, context);
  return createInferType(parseTypeParameterOfInferType(parser, context), parser.nodeFlags, pos, parser.startPos);
}

function parseTypeParameterOfInferType(parser: ParserState, context: Context): TypeParameter {
  const pos = parser.startPos;
  return createTypeParameter(
    parseIdentifierReference(parser, context),
    null,
    null,
    null,
    parser.nodeFlags,
    pos,
    parser.startPos
  );
}

function parsePrimaryType(parser: ParserState, context: Context): TypeNode {
  switch (parser.token) {
    case Token.AnyKeyword:
    case Token.UnknownKeyword:
    case Token.StringKeyword:
    case Token.NumberKeyword:
    case Token.BigIntKeyword:
    case Token.SymbolKeyword:
    case Token.BooleanKeyword:
    case Token.UndefinedKeyword:
    case Token.NeverKeyword:
    case Token.ObjectKeyword:
      // If these are followed by a dot, then parse these out as a dotted type reference instead.
      return tryParse(parser, context, parseKeywordAndNoDot) || parseTypeReference(parser, context);
    case Token.VoidKeyword:
      return parseVoidKeyword(parser, context);
    case Token.StringLiteral:
      return parseStringType(parser, context);
    case Token.NumericLiteral:
      return parseNumberType(parser, context);
    case Token.ReadonlyKeyword:
    case Token.UniqueKeyword:
    case Token.KeyOfKeyword:
      return parseTypeOperator(parser, context);
    case Token.InferKeyword:
      return parseInferType(parser, context);
    case Token.LessThan:
      return parseFunctionTypeWithTypeParameters(parser, context);
    case Token.AbstractKeyword:
    case Token.NewKeyword:
      return parseConstructorType(parser, context, null);
    case Token.BigIntLiteral:
      return parseBigIntType(parser, context);
    case Token.TrueKeyword:
      return parseTrueType(parser, context);
    case Token.FalseKeyword:
      return parseFalseType(parser, context);
    case Token.NullKeyword:
      return parseNullKeyword(parser, context);
    case Token.Subtract:
      return lookAhead(parser, context, nextTokenIsNumericLiteral)
        ? parseMinusType(parser, context)
        : parseTypeReference(parser, context);
    case Token.ThisKeyword:
      return parseThisTypeOrTypePredicate(parser, context);
    case Token.LeftBracket:
      return parseTupleType(parser, context);
    case Token.LeftBrace:
      return parseTypeLiteralOrMappedType(parser, context);
    case Token.TypeofKeyword:
      return parseTypeQueryOrImportType(parser, context);
    case Token.LeftParen:
      return parseParenthesizedType(parser, context);
    case Token.ImportKeyword:
      return parseImportType(parser, context, /* isTypeOf */ false, parser.startPos);
    case Token.AssertsKeyword:
      if (lookAhead(parser, context, nextTokenIsIdentifierOrKeywordOnSameLine)) {
        return parseAssertsTypePredicate(parser, context);
      }
      return parseTypeReference(parser, context);
    case Token.TemplateCont:
      return parseTemplateType(parser, context);
    default:
      return parseTypeReference(parser, context);
  }
}

function parseThisTypeOrTypePredicate(parser: ParserState, context: Context): ThisType | TypePredicate {
  const thisKeyword = parseThisType(parser, context);
  if (parser.token === Token.IsKeyword && (parser.nodeFlags & NodeFlags.PrecedingLineBreak) === 0) {
    nextToken(parser, context);
    return createTypePredicate(
      false,
      thisKeyword,
      parseType(parser, context | Context.AllowConditionalTypes),
      parser.nodeFlags,
      thisKeyword.start,
      parser.startPos
    );
  }
  return thisKeyword;
}

function nextTokenIsIdentifierOrKeywordOnSameLine(parser: ParserState, context: Context): boolean {
  nextToken(parser, context);
  return (
    (parser.token & (Token.IsIdentifier | Token.Keyword | Token.FutureReserved)) !== 0 &&
    (parser.nodeFlags & NodeFlags.PrecedingLineBreak) === 0
  );
}

function nextTokenIsNumericLiteral(parser: ParserState, context: Context): boolean {
  nextToken(parser, context);
  return parser.token === Token.NumericLiteral;
}

function nextTokenIsInKeyword(parser: ParserState, context: Context): boolean {
  nextToken(parser, context);
  return parser.token === Token.InKeyword;
}

function parseTypeLiteralOrMappedType(parser: ParserState, context: Context): TypeLiteral | MappedType {
  const pos = parser.startPos;
  nextToken(parser, context);
  // try speculative parsing here...
  const mappedType =
    parser.token & 0b00100000000011000101000000000000 &&
    tryParse(parser, context, () => {
      let isAdd = false;
      let isSubtract = false;

      // If we have "+" or "-" it need to be followed by 'readonly'
      if (parser.token === Token.Add || parser.token === Token.Subtract) {
        isAdd = consumeOpt(parser, context, Token.Add);
        isSubtract = consumeOpt(parser, context, Token.Subtract);
        // Unexpected property or signature
        if (parser.token !== Token.ReadonlyKeyword) return false;
      }

      const isReadOnly = consumeOpt(parser, context, Token.ReadonlyKeyword);

      // If we don't have "[", then this cannot be a valid MappedType
      if (parser.token !== Token.LeftBracket) return false;

      nextToken(parser, context);

      // This is only a valid MappedType if we have "[id" followed by "in"
      if ((parser.token & (Token.IsIdentifier | Token.FutureReserved)) === 0) return false;

      if (!lookAhead(parser, context, nextTokenIsInKeyword)) {
        return false;
      }

      const typeParameter = parseMappedTypeParameter(parser, context);
      const nameType = consumeOpt(parser, context, Token.AsKeyword)
        ? parseType(parser, context | Context.AllowConditionalTypes)
        : null;

      // Roll back if we don't have a "]"
      if (parser.token !== Token.RightBracket) return false;

      nextToken(parser, context);

      let optional = consumeOpt(parser, context, Token.QuestionMark);

      if (!optional) {
        if (parser.token === Token.Add || parser.token === Token.Subtract) {
          isAdd = consumeOpt(parser, context, Token.Add);
          isSubtract = consumeOpt(parser, context, Token.Subtract);
          optional = consume(parser, context, Token.QuestionMark);
        }
      }

      const type = parseTypeAnnotation(parser, context);

      parseSemicolon(parser, context);

      consume(parser, context, Token.RightBrace);

      return createMappedType(
        typeParameter,
        nameType,
        isReadOnly,
        isSubtract,
        isAdd,
        optional,
        type,
        parser.nodeFlags,
        pos,
        parser.startPos
      );
    });

  if (mappedType) return mappedType;

  const innerPos = parser.startPos;
  const members = [];
  while (parser.token & 0b00110000000000000111000000000000) {
    members.push(getCurrentNode(parser, context, parseTypeMember));
  }

  consume(parser, context, Token.RightBrace);

  return createTypeLiteral(
    createObjectTypeMembers(members, parser.nodeFlags, innerPos, parser.startPos),
    parser.nodeFlags,
    pos,
    parser.startPos
  );
}

function parseTemplateType(parser: ParserState, context: Context): TemplateLiteralType {
  const pos = parser.startPos;
  const templateSpans = [];
  do {
    templateSpans.push(parseTemplateTypeSpan(parser, context));
  } while ((parser.token = scanTemplateTail(parser, context)) === Token.TemplateCont);
  return createTemplateLiteralType(
    templateSpans,
    parseTemplateTail(parser, context),
    parser.nodeFlags,
    pos,
    parser.startPos
  );
}

function parseTemplateTypeSpan(parser: ParserState, context: Context): TemplateLiteralTypeSpan {
  const { startPos, tokenValue, templateRaw } = parser;
  consume(parser, context | Context.AllowRegExp, Token.TemplateCont);
  const type = parseType(parser, context | Context.AllowConditionalTypes);
  return createTemplateLiteralTypeSpan(type, templateRaw, tokenValue, parser.nodeFlags, startPos, parser.startPos);
}

function parseObjectType(parser: ParserState, context: Context): ObjectTypeMembers {
  let pos = parser.startPos;
  if (consume(parser, context, Token.LeftBrace)) {
    const members = [];
    pos = parser.startPos;
    while (parser.token & 0b00110000000000000111000000000000) {
      members.push(getCurrentNode(parser, context, parseTypeMember));
    }
    const result = createObjectTypeMembers(members, parser.nodeFlags, pos, parser.startPos);
    consume(parser, context, Token.RightBrace);
    return result;
  }
  // missing list
  return createObjectTypeMembers([], parser.nodeFlags, pos, pos);
}

function parseTypeMemberSemicolon(parser: ParserState, context: Context): void {
  if (consumeOpt(parser, context, Token.Comma)) return;
  // Didn't have a comma.  We must have a (possible ASI) semicolon.
  parseSemicolon(parser, context);
}

function isIndexSignature(parser: ParserState, context: Context): boolean {
  // skips the identifier
  nextToken(parser, context);
  // A colon signifies a well formed indexer
  // A comma should be a badly formed indexer because comma expressions are not allowed
  // in computed properties.
  if (parser.token === Token.Colon || parser.token & Token.IsComma) {
    return true;
  }
  // Question mark could be an indexer with an optional property,
  // or it could be a conditional expression in a computed property.
  if (parser.token !== Token.QuestionMark) {
    return false;
  }
  // If any of the following tokens are after the question mark, it cannot
  // be a conditional expression, so treat it as an indexer.
  nextToken(parser, context);
  return parser.token === Token.Colon || parser.token === Token.Comma || parser.token === Token.RightBracket;
}

function parseTypeMember(
  parser: ParserState,
  context: Context
): ConstructSignature | CallSignature | PropertySignature | IndexSignature {
  const pos = parser.startPos;
  let token = parser.token;
  let kind = PropertyKind.None;
  let modifiers = parseAccessModifier(parser, context, Token.RightBrace);

  if (parser.token === Token.LeftParen || parser.token === Token.LessThan) {
    return parseSignatureMember(parser, context, modifiers, NodeKind.CallSignature);
  }

  if (token === Token.StaticKeyword) {
    const name = parseIdentifierName(parser, context);
    if ((parser.token & 0b00010000000000000101000000000000) === 0) {
      return parser.token === Token.LeftParen || parser.token === Token.LessThan
        ? parseSignatureMember(parser, context, modifiers, NodeKind.ConstructSignature)
        : parsePropertySignature(parser, context, name, PropertyKind.None, modifiers, pos);
    }
    kind |= PropertyKind.Static;
    token = parser.token;
  }

  if (token === Token.DeclareKeyword) {
    const name = parseIdentifierName(parser, context);
    if ((parser.token & 0b00010000000000000101000000000000) === 0) {
      return parser.token === Token.LeftParen || parser.token === Token.LessThan
        ? parseSignatureMember(parser, context, modifiers, NodeKind.ConstructSignature)
        : parsePropertySignature(parser, context, name, PropertyKind.None, modifiers, pos);
    }
    kind |= PropertyKind.Declare;
    token = parser.token;
  }

  if (token === Token.AbstractKeyword) {
    const name = parseIdentifierName(parser, context);
    if ((parser.token & 0b00010000000000000101000000000000) === 0) {
      return parser.token === Token.LeftParen || parser.token === Token.LessThan
        ? parseSignatureMember(parser, context, modifiers, NodeKind.ConstructSignature)
        : parsePropertySignature(parser, context, name, PropertyKind.None, modifiers, pos);
    }
    kind |= PropertyKind.Abstract;
    token = parser.token;
  }

  if (token === Token.ReadonlyKeyword) {
    const name = parseIdentifierName(parser, context);
    if ((parser.token & 0b00010000000000000101000000000000) === 0) {
      return parser.token === Token.LeftParen || parser.token === Token.LessThan
        ? parseSignatureMember(parser, context, modifiers, NodeKind.ConstructSignature)
        : parsePropertySignature(parser, context, name, PropertyKind.None, modifiers, pos);
    }
    kind |= PropertyKind.Readonly;
    token = parser.token;
  }

  if (token === Token.NewKeyword) {
    const name = parseIdentifierName(parser, context);
    if (parser.token === Token.LeftParen || parser.token === Token.LessThan) {
      return parseSignatureMember(parser, context, modifiers, NodeKind.ConstructSignature);
    }

    return parsePropertySignature(parser, context, name, kind, modifiers, pos);
  }

  // Check if this is an unambiguous index signature or computed property
  if (token === Token.LeftBracket) {
    nextToken(parser, context);

    // If we have "[..." or "[]" then we parse this as an index signature for error recovery reasons
    if (parser.token & Token.IsEllipsis || parser.token === Token.RightBracket) {
      return parseIndexSignatureDeclaration(parser, context, kind, modifiers);
    }

    if (parser.token & (Token.IsIdentifier | Token.FutureReserved)) {
      // If we have "[readonly id" then this has to be parsed as an index signature
      if (parser.token === Token.ReadonlyKeyword) {
        const name = parseIdentifierName(parser, context);
        // If we have "[readonly ...id" or "[readonly id" or then this is an index signature even if
        // a modifier isn't allowed here, but we will handle this in the grammar checker.
        if (parser.token & (Token.IsEllipsis | Token.IsIdentifier | Token.FutureReserved)) {
          return parseIndexSignatureDeclaration(parser, context, PropertyKind.Readonly, modifiers);
        }
        consume(parser, context, Token.RightBracket);
        return parsePropertyOrMethodSignature(parser, context, name, kind, modifiers, pos);
      }

      // If we have "[private id" or "[protected id" or "[public id" then this *maybe* is an index signature.
      // The only allowed sequence is: "[id:". However, for error recovery, we allow this.
      modifiers = parseAccessModifier(parser, context, Token.RightBrace);

      // It's needed to do lookahead and try too figure out if this is an valid index signature
      // if we don't have any access modifiers follow by "...". Speculative parsing will not help us here.
      if ((modifiers && parser.token & Token.Ellipsis) || lookAhead(parser, context, isIndexSignature)) {
        return parseIndexSignatureDeclaration(parser, context, kind, modifiers);
      }
    }
    // We have "[ expr" and this is a valid computed property
    const expression = parseAssignmentExpression(parser, context);
    consume(parser, context, Token.RightBracket);
    return parsePropertyOrMethodSignature(
      parser,
      context,
      createComputedPropertyName(expression, parser.nodeFlags, pos, parser.startPos),
      kind,
      modifiers,
      pos
    );
  }

  return parsePropertyOrMethodSignature(parser, context, parsePropertyName(parser, context), kind, modifiers, pos);
}

function parseIndexSignatureDeclaration(
  parser: ParserState,
  context: Context,
  kind: PropertyKind,
  accessModifier: AccessModifier | null
): IndexSignature {
  const pos = parser.startPos;
  const parameters = parseBracketList(parser, context);
  consume(parser, context, Token.RightBracket);
  const type = parseTypeAnnotation(parser, context);
  parseTypeMemberSemicolon(parser, context);
  return createIndexSignature(accessModifier, parameters, type, kind, parser.nodeFlags, pos, parser.startPos);
}

function parseBracketList(parser: ParserState, context: Context): Parameters {
  const pos = parser.startPos;
  const parameters = [];
  let trailingComma = false;
  while (parser.token & 0b00000100000010000101000000000000) {
    parameters.push(getCurrentNode(parser, context, parseParameter));
    if (parser.token === Token.RightBracket) break;
    if (consumeOpt(parser, context, Token.Comma)) {
      if (parser.token === Token.RightBracket) {
        trailingComma = true;
        break;
      }
      continue;
    }
    reportErrorDiagnostic(parser, 0, DiagnosticCode._0_expected, ',');
  }
  return createParameters(parameters, trailingComma, parser.nodeFlags, pos, parser.startPos);
}

function parsePropertyOrMethodSignature(
  parser: ParserState,
  context: Context,
  name: any,
  kind: PropertyKind,
  accessModifier: AccessModifier | null,
  pos: number
): MethodSignature | PropertySignature {
  const optional = consumeOpt(parser, context, Token.QuestionMark);

  if (parser.token === Token.LeftParen || parser.token === Token.LessThan) {
    const typeParameters = parseTypeParameters(parser, context | Context.AllowConditionalTypes);
    const parameters = parseParameterList(parser, context);
    const type = consumeOpt(parser, context, Token.Colon) ? parseTypeOrTypePredicate(parser, context) : null;
    if (consumeOpt(parser, context, Token.Arrow)) reportErrorDiagnostic(parser, 0, DiagnosticCode._0_expected, '=>');
    parseTypeMemberSemicolon(parser, context);
    return createMethodSignature(
      name,
      optional,
      kind,
      accessModifier,
      typeParameters,
      parameters,
      type,
      parser.nodeFlags,
      pos,
      parser.startPos
    );
  }
  const type = parseTypeAnnotation(parser, context);
  const initializer = parseInitializer(parser, context);
  parseTypeMemberSemicolon(parser, context);
  return createPropertySignature(
    name,
    optional,
    accessModifier,
    type,
    kind,
    initializer,
    parser.nodeFlags,
    pos,
    parser.startPos
  );
}

function parsePropertySignature(
  parser: ParserState,
  context: Context,
  name: any,
  kind: PropertyKind,
  accessModifier: AccessModifier | null,
  pos: number
): PropertySignature {
  const optional = consumeOpt(parser, context, Token.QuestionMark);
  const type = parseTypeAnnotation(parser, context);
  // Although type literal properties cannot have initializers, we attempt
  // to parse an initializer so we can report in the checker that an interface
  // property or type literal property cannot have an initializer.
  const initializer = parseInitializer(parser, context);
  parseTypeMemberSemicolon(parser, context);
  return createPropertySignature(
    name,
    optional,
    accessModifier,
    type,
    kind,
    initializer,
    parser.nodeFlags,
    pos,
    parser.startPos
  );
}

function parseParameterList(parser: ParserState, context: Context): Parameters {
  if (consume(parser, context, Token.LeftParen)) {
    const pos = parser.startPos;
    const parameters = [];
    let trailingComma = false;
    while (parser.token & 0b00000100000010000101000000000000) {
      parameters.push(getCurrentNode(parser, context, parseParameter));
      if (parser.token === Token.RightParen) break;
      if (consumeOpt(parser, context, Token.Comma)) {
        if (parser.token === Token.RightBracket) {
          trailingComma = true;
          break;
        }
        continue;
      }

      reportErrorDiagnostic(parser, 0, DiagnosticCode._0_expected, ',');
    }
    const result = createParameters(parameters, trailingComma, parser.nodeFlags, pos, parser.startPos);
    consume(parser, context, Token.RightParen);
    return result;
  }
  return createParameters([], /* trailingComma */ false, parser.nodeFlags, parser.startPos, parser.startPos);
}

function parseParameter(parser: ParserState, context: Context): ParameterDeclaration {
  const pos = parser.startPos;
  const modifier = parseAccessModifier(parser, context, Token.RightParen);
  let isReadOnly = false;

  if (parser.token === Token.ReadonlyKeyword) {
    if (tryParse(parser, context, nextTokenIsIdentifierOrPatternOnSameLine)) {
      isReadOnly = true;
    }
  }

  if (parser.token === Token.ThisKeyword) {
    const { tokenValue, raw, nodeFlags } = parser;
    nextToken(parser, context);
    return createParameterDeclaration(
      false,
      createIdentifierReference(tokenValue, raw, nodeFlags, pos, parser.startPos),
      false,
      parseTypeAnnotation(parser, context),
      null,
      modifier,
      isReadOnly,
      parser.nodeFlags,
      pos,
      parser.startPos
    );
  }

  return createParameterDeclaration(
    consumeOpt(parser, context, Token.Ellipsis),
    parseIdentifierOrPattern(parser, (context | Context.DisallowIn) ^ Context.DisallowIn),
    consumeOpt(parser, context, Token.QuestionMark),
    parseTypeAnnotation(parser, context),
    parseInitializer(parser, context),
    modifier,
    isReadOnly,
    parser.nodeFlags,
    pos,
    parser.startPos
  );
}

function parseSignatureMember(
  parser: ParserState,
  context: Context,
  accessModifier: AccessModifier | null,
  kind: NodeKind
): ConstructSignature | CallSignature {
  const pos = parser.startPos;
  const typeParameters = parseTypeParameters(parser, context | Context.AllowConditionalTypes);
  const parameters = parseParameterList(parser, context);
  const type = consumeOpt(parser, context, Token.Colon) ? parseTypeOrTypePredicate(parser, context) : null;
  if (consumeOpt(parser, context, Token.Arrow)) {
    reportErrorDiagnostic(parser, 0, DiagnosticCode._0_expected, KeywordDescTable[Token.Arrow & Token.Type]);
  }
  parseTypeMemberSemicolon(parser, context);
  return kind === NodeKind.ConstructSignature
    ? createConstructSignature(accessModifier, typeParameters, parameters, type, parser.nodeFlags, pos, parser.startPos)
    : createCallSignature(accessModifier, typeParameters, parameters, type, parser.nodeFlags, pos, parser.startPos);
}

function isTypeParametersTerminator(token: Token): boolean {
  // Tokens other than '>' are here for better error recovery
  return (
    token === Token.GreaterThan ||
    token === Token.LeftParen ||
    token === Token.LeftBrace ||
    token === Token.ExtendsKeyword ||
    token === Token.ImplementsKeyword
  );
}

function parseTypeParameters(parser: ParserState, context: Context): TypeParameters | null {
  if (parser.token !== Token.LessThan) return null;
  nextToken(parser, context);
  const pos = parser.startPos;
  const params = [];
  while (parser.token & (Token.IsIdentifier | Token.Keyword | Token.FutureReserved)) {
    params.push(getCurrentNode(parser, context, parseTypeParameter));
    if (isTypeParametersTerminator(parser.token)) break;
    if (consumeOpt(parser, context, Token.Comma)) continue;
    reportErrorDiagnostic(parser, 0, DiagnosticCode.Unexpected_token);
  }

  const result = createTypeParameters(params, parser.nodeFlags, pos, parser.startPos);
  consume(parser, context, Token.GreaterThan);
  return result;
}

function parseTypeParameter(parser: ParserState, context: Context): TypeParameter {
  const pos = parser.startPos;
  const name = parseIdentifierName(parser, context);
  let constraint: TypeNode | null = null;
  let expression: Expression | null = null;
  if (consumeOpt(parser, context, Token.ExtendsKeyword)) {
    if (parser.token & 0b00100000000010000101000000000000 || (parser.token & Token.IsExpressionStart) === 0) {
      constraint = parseType(parser, context | Context.AllowConditionalTypes);
    } else {
      expression = parseUnaryExpression(parser, context);
    }
  }
  const defaultType = consumeOpt(parser, context, Token.Assign)
    ? parseType(parser, context | Context.AllowConditionalTypes)
    : null;
  return createTypeParameter(name, constraint, defaultType, expression, parser.nodeFlags, pos, parser.startPos);
}

function parseImportType(parser: ParserState, context: Context, isTypeOf: boolean, pos: number): ImportType {
  consume(parser, context, Token.ImportKeyword);
  consume(parser, context, Token.LeftParen);
  const type = parseType(parser, context | Context.AllowConditionalTypes);
  consume(parser, context, Token.RightParen);
  const qualifier = consumeOpt(parser, context, Token.Period)
    ? parseEntityName(parser, context, /* allowKeywords */ true)
    : null;
  const typeArguments = parseTypeArgumentsOfTypeReference(
    parser,
    context | Context.InTypes | Context.AllowConditionalTypes
  );
  return createImportType(isTypeOf, type, qualifier, typeArguments, parser.nodeFlags, pos, parser.startPos);
}

function parseTypeQueryOrImportType(parser: ParserState, context: Context): TypeQuery | ImportType {
  const pos = parser.startPos;
  nextToken(parser, context);

  return parser.token === Token.ImportKeyword
    ? parseImportType(parser, context, /* isTypeOf */ true, pos)
    : createTypeQuery(
        parseEntityName(parser, context, /* allowKeywords */ true),
        parser.nodeFlags,
        pos,
        parser.startPos
      );
}

function parseParenthesizedType(parser: ParserState, context: Context): ParenthesizedType | FunctionType {
  const pos = parser.startPos;

  nextToken(parser, context);

  if (parser.token === Token.RightParen || parser.token & Token.IsEllipsis) {
    return parseFunctionType(parser, context, pos);
  }

  if (
    parser.token & (Token.IsPatternStart | Token.IsIdentifier | Token.FutureReserved) &&
    lookAhead(parser, context, () => {
      if (skipParameterStart(parser, context)) {
        // We successfully skipped modifiers (if any) and an identifier or binding pattern,
        // now let's figure out if we have something that indicates a parameter declaration
        if (
          parser.token === Token.Colon ||
          parser.token & Token.IsComma ||
          parser.token === Token.QuestionMark ||
          parser.token === Token.Assign
        ) {
          // ( xxx :
          // ( xxx ,
          // ( xxx ?
          // ( xxx =
          return true;
        }
        if (parser.token === Token.RightParen) {
          nextToken(parser, context);
          if (parser.token === Token.Arrow) {
            // ( xxx ) =>
            return true;
          }
        }
      }
      return false;
    })
  ) {
    return parseFunctionType(parser, context, pos);
  }

  const type = parseType(parser, context | Context.AllowConditionalTypes);

  consume(parser, context, Token.RightParen);

  return createParenthesizedType(type, parser.nodeFlags, pos, parser.startPos);
}

function parseFunctionTypeParams(parser: ParserState, context: Context): Parameters {
  const pos = parser.startPos;
  const parameters = [];
  let trailingComma = false;
  while (parser.token & (Token.IsEllipsis | Token.IsPatternStart | Token.IsIdentifier | Token.FutureReserved)) {
    parameters.push(getCurrentNode(parser, context, parseParameter));
    if (parser.token === Token.RightParen) break;
    if (consumeOpt(parser, context, Token.Comma)) {
      if (parser.token === Token.RightParen) {
        trailingComma = true;
        break;
      }
      continue;
    }
    reportErrorDiagnostic(parser, 0, DiagnosticCode._0_expected, ',');
  }

  return createParameters(parameters, trailingComma, parser.nodeFlags, pos, parser.startPos);
}

function parseAssertsTypePredicate(parser: ParserState, context: Context): TypePredicate {
  const pos = parser.startPos;
  const assertsModifier = consume(parser, context, Token.AssertsKeyword);
  const parameterName =
    parser.token === Token.ThisKeyword ? parseThisType(parser, context) : parseIdentifierReference(parser, context);
  const type = consumeOpt(parser, context, Token.IsKeyword)
    ? parseType(parser, context | Context.AllowConditionalTypes)
    : null;
  return createTypePredicate(assertsModifier, parameterName, type, parser.nodeFlags, pos, parser.startPos);
}

function parseMappedTypeParameter(parser: ParserState, context: Context): TypeParameter {
  const pos = parser.startPos;
  const name = parseIdentifierName(parser, context);
  consume(parser, context, Token.InKeyword);
  const type = parseType(parser, context | Context.AllowConditionalTypes);
  return createTypeParameter(name, type, null, null, parser.nodeFlags, pos, parser.startPos);
}

function parseTupleType(parser: ParserState, context: Context): TupleType {
  const pos = parser.startPos;
  const elements = [];
  nextToken(parser, context);
  while (parser.token & 0b01100100000010000101000000000000) {
    elements.push(getCurrentNode(parser, context, parseTupleElementNameOrTupleElementType));
    if (parser.token === Token.RightBracket) break;
    if (consumeOpt(parser, context, Token.Comma)) continue;
  }
  consume(parser, context, Token.RightBracket);
  return createTupleType(elements, parser.nodeFlags, pos, parser.startPos);
}

function parseTupleElementNameOrTupleElementType(parser: ParserState, context: Context): NamedTupleMember | TypeNode {
  const pos = parser.startPos;
  const ellipsis = consumeOpt(parser, context, Token.Ellipsis);
  if (
    parser.token & (Token.IsIdentifier | Token.FutureReserved) &&
    lookAhead(parser, context, () => {
      nextToken(parser, context); // skips identifier
      if (parser.token === Token.QuestionMark) nextToken(parser, context);
      return parser.token === Token.Colon;
    })
  ) {
    const name = parseIdentifierName(parser, context);
    const optional = consumeOpt(parser, context, Token.QuestionMark);
    consume(parser, context, Token.Colon);
    return createNamedTupleMember(
      ellipsis,
      name,
      optional,
      parseTupleElementType(parser, context, ellipsis, pos),
      parser.nodeFlags,
      pos,
      parser.startPos
    );
  }
  return parseTupleElementType(parser, context, ellipsis, pos);
}

function parseTupleElementType(
  parser: ParserState,
  context: Context,
  ellipsis: boolean,
  pos: number
): RestType | TypeNode {
  let type = parseType(parser, context | Context.AllowConditionalTypes);
  if (parser.token === Token.QuestionMark) type = parseOptionalType(parser, context, type);
  return ellipsis ? createRestType(type, parser.nodeFlags, pos, parser.startPos) : type;
}

function parseOptionalType(parser: ParserState, context: Context, type: TypeNode): OptionalType {
  const pos = parser.startPos;
  nextToken(parser, context);
  return createOptionalType(type, parser.nodeFlags, pos, parser.startPos);
}

function parseThisType(parser: ParserState, context: Context): ThisType {
  const pos = parser.startPos;
  nextToken(parser, context);
  return createThisType(parser.nodeFlags, pos, parser.startPos);
}

function parseFalseType(parser: ParserState, context: Context): FalseType {
  const pos = parser.startPos;
  const value = parser.tokenValue;
  const raw = parser.raw;
  nextToken(parser, context);
  return createFalseType(value, raw, parser.nodeFlags, pos, parser.startPos);
}

function parseTrueType(parser: ParserState, context: Context): TrueType {
  const pos = parser.startPos;
  const value = parser.tokenValue;
  const raw = parser.raw;
  nextToken(parser, context);
  return createTrueType(value, raw, parser.nodeFlags, pos, parser.startPos);
}

function parseMinusType(parser: ParserState, context: Context): MinusType {
  const pos = parser.startPos;
  return createMinusType(parseUnaryExpression(parser, context), parser.nodeFlags, pos, parser.startPos);
}

function parseStringType(parser: ParserState, context: Context): StringType {
  const pos = parser.startPos;
  const value = parser.tokenValue;
  const raw = parser.raw;
  nextToken(parser, context);
  return createStringType(value, raw, parser.nodeFlags, pos, parser.startPos);
}

function parseNumberType(parser: ParserState, context: Context): NumberType {
  const pos = parser.startPos;
  const value = parser.tokenValue;
  const raw = parser.raw;
  nextToken(parser, context);
  return createNumberType(value, raw, parser.nodeFlags, pos, parser.startPos);
}

function parseBigIntType(parser: ParserState, context: Context): BigIntType {
  const pos = parser.startPos;
  const value = parser.tokenValue;
  const raw = parser.raw;
  nextToken(parser, context);
  return createBigIntType(value, raw, parser.nodeFlags, pos, parser.startPos);
}

function parseVoidKeyword(parser: ParserState, context: Context): KeywordTypeNode {
  const pos = parser.startPos;
  nextToken(parser, context);
  return createKeywordTypeNode(NodeKind.VoidKeyword, pos, parser.startPos);
}

function parseNullKeyword(parser: ParserState, context: Context): KeywordTypeNode {
  const pos = parser.startPos;
  nextToken(parser, context);
  return createKeywordTypeNode(NodeKind.NullKeyword, pos, parser.startPos);
}

function parseKeywordAndNoDot(parser: ParserState, context: Context): KeywordTypeNode | undefined {
  const pos = parser.startPos;
  const token = parser.token;
  nextToken(parser, context);
  if (parser.token === Token.Period) return undefined;
  switch (token) {
    case Token.AnyKeyword:
      return createKeywordTypeNode(NodeKind.AnyKeyword, pos, parser.startPos);
    case Token.UnknownKeyword:
      return createKeywordTypeNode(NodeKind.UnknownKeyword, pos, parser.startPos);
    case Token.ObjectKeyword:
      return createKeywordTypeNode(NodeKind.ObjectKeyword, pos, parser.startPos);
    case Token.NumberKeyword:
      return createKeywordTypeNode(NodeKind.NumberKeyword, pos, parser.startPos);
    case Token.BigIntKeyword:
      return createKeywordTypeNode(NodeKind.BigIntKeyword, pos, parser.startPos);
    case Token.SymbolKeyword:
      return createKeywordTypeNode(NodeKind.SymbolKeyword, pos, parser.startPos);
    case Token.BooleanKeyword:
      return createKeywordTypeNode(NodeKind.BooleanKeyword, pos, parser.startPos);
    case Token.UndefinedKeyword:
      return createKeywordTypeNode(NodeKind.UndefinedKeyword, pos, parser.startPos);
    case Token.NeverKeyword:
      return createKeywordTypeNode(NodeKind.NeverKeyword, pos, parser.startPos);
    default:
      return createKeywordTypeNode(NodeKind.StringKeyword, pos, parser.startPos);
  }
}

function parseTypeReference(parser: ParserState, context: Context): TypeReference {
  const pos = parser.startPos;
  return createTypeReference(
    parseEntityName(parser, context, /* allowKeywords */ true, DiagnosticCode.Type_expected),
    parseTypeArgumentsOfTypeReference(parser, context | Context.InTypes),
    parser.nodeFlags,
    pos,
    parser.pos
  );
}

function parseEntityName(
  parser: ParserState,
  context: Context,
  allowKeywords: boolean,
  diagnosticMessage?: DiagnosticCode
): QualifiedName | IdentifierName | IdentifierReference {
  const pos = parser.startPos;
  let entity: IdentifierReference | IdentifierName | QualifiedName = allowKeywords
    ? parseIdentifierName(parser, context, diagnosticMessage)
    : parseIdentifierReference(parser, context, diagnosticMessage);
  while (consumeOpt(parser, context, Token.Period)) {
    if (parser.token === Token.LessThan) break;
    entity = createQualifiedName(
      entity,
      parsePropertyOrPrivatePropertyName(parser, context),
      parser.nodeFlags,
      pos,
      parser.startPos
    );
  }
  return entity;
}

function parseTypeArgumentsOfTypeReference(parser: ParserState, context: Context): TypeArguments | null {
  if ((parser.nodeFlags & NodeFlags.PrecedingLineBreak) === 0 && consumeOpt(parser, context, Token.LessThan)) {
    const pos = parser.startPos;
    const typeArguments = [];
    while (parser.token & 0b01100000000010000101000000000000) {
      typeArguments.push(getCurrentNode(parser, context, parseType));
      if (parser.token === Token.GreaterThan) break;
      if (consumeOpt(parser, context, Token.Comma)) continue;
      reportErrorDiagnostic(parser, 0, DiagnosticCode._0_expected, ',');
    }
    const result = createTypeArguments(typeArguments, parser.nodeFlags, pos, parser.startPos);
    consume(parser, context, Token.GreaterThan);
    return result;
  }
  return null;
}

function parseTypePredicatePrefix(parser: ParserState, context: Context): IdentifierReference | null {
  const id = parseIdentifierReference(parser, context, DiagnosticCode.Type_expected, /* allowKeywords */ true);
  if (parser.token === Token.IsKeyword && (parser.nodeFlags & NodeFlags.PrecedingLineBreak) === 0) {
    nextToken(parser, context);
    return id;
  }
  return null;
}

function parseTypeOrTypePredicate(parser: ParserState, context: Context): TypeNode | TypePredicate {
  const pos = parser.startPos;
  const typePredicateVariable =
    parser.token & 0b00000000000000000111000000000000 && tryParse(parser, context, parseTypePredicatePrefix);
  const type = parseType(parser, context | Context.AllowConditionalTypes);
  return typePredicateVariable
    ? createTypePredicate(false, typePredicateVariable, type, parser.nodeFlags, pos, parser.startPos)
    : type;
}

function parseTypeAssertion(parser: ParserState, context: Context): TypeAssertion {
  const pos = parser.startPos;
  consume(parser, context, Token.LessThan);
  const type = parseType(parser, context | Context.AllowConditionalTypes);
  consume(parser, context | Context.AllowRegExp, Token.GreaterThan);
  const expression = parseUnaryExpression(parser, context);
  return createTypeAssertion(type, expression, parser.nodeFlags, pos, parser.startPos);
}

function parseDecorators(parser: ParserState, context: Context): DecoratorList | null {
  if (consumeOpt(parser, context, Token.Decorator)) {
    const pos = parser.startPos;
    const decorators = [];
    while (parser.token & (Token.IsIdentifier | Token.FutureReserved)) {
      decorators.push(parseDecoratorExpression(parser, context));
      if (!consumeOpt(parser, context, Token.Decorator)) break;
    }
    return createDecoratorList(decorators, parser.nodeFlags, pos, parser.startPos);
  }
  return null;
}

function parseDecoratorExpression(parser: ParserState, context: Context): Decorator {
  const pos = parser.startPos;
  const expression = parseLeftHandSideExpression(parser, context, /* allowCalls */ true);
  return createDecorator(expression, parser.nodeFlags, pos, parser.startPos);
}
