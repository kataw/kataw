import { parse, Options, LinterRules, LinterOptions } from './parser/parser';
import { DiagnosticSource, DiagnosticKind } from './diagnostic/diagnostic';
import { PrinterOptions } from './printer';
import { Context, OnError } from './parser/common';
import { RootNode } from './ast/root-node';
import { printSource } from './printer';
export { SyntaxKind } from './ast/syntax-node';
export { NodeFlags } from './ast/syntax-node';
export { TokenSyntaxKind, createToken, SyntaxToken } from './ast/token';
export { createBlockStatement } from './ast/statements/block-stmt';
export { createBlock } from './ast/statements/block';
export { createLabelledStatement } from './ast/statements/labelled-stmt';
export { createBreakStatement } from './ast/statements/break-stmt';
export { createContinueStatement } from './ast/statements/continue-stmt';
export { createCaseBlock } from './ast/statements/case-block';
export { createCaseClause } from './ast/statements/case-clause';
export { createCatch } from './ast/statements/catch-stmt';
export { createDebuggerStatement } from './ast/statements/debugger-stmt';
export { createTryStatement } from './ast/statements/try-stmt';
export { createDefaultClause } from './ast/statements/default-clause';
export { createDoWhileStatement } from './ast/statements/do-stmt';
export { createEmptyStatement } from './ast/statements/empty-stmt';
export { createForInStatement } from './ast/statements/for-in-stmt';
export { createForOfStatement } from './ast/statements/for-of-stmt';
export { createForStatement } from './ast/statements/for-stmt';
export { createIfStatement } from './ast/statements/if-stmt';
export { createReturnStatement } from './ast/statements/return-stmt';
export { createSwitchStatement } from './ast/statements/switch-stmt';
export { createThrowStatement } from './ast/statements/throw-stmt';
export { createWhileStatement } from './ast/statements/while-stmt';
export { createWithStatement } from './ast/statements/with-stmt';
export { createIndexExpressionChain } from './ast/expressions/index-expr-chain';
export { createDecoratorList } from './ast/expressions/decorator-list';
export { createDecorator } from './ast/expressions/decorators';
export { createMemberAccessChain } from './ast/expressions/member-access-chain';
export { createCallChain } from './ast/expressions/call-chain';
export { createOptionalExpression } from './ast/expressions/optional-expr';
export { createOptionalChain } from './ast/expressions/optional-chain';
export { createImportCall } from './ast/expressions/import-call';
export { createImportMeta } from './ast/expressions/import-meta';
export { createTemplateExpression } from './ast/expressions/template-expression';
export { createClassElement } from './ast/expressions/class-element';
export { createStaticBlock } from './ast/expressions/static-block';
export { createClassTail } from './ast/expressions/class-tail';
export { createClassBody } from './ast/expressions/class-body';
export { createClassExpression } from './ast/expressions/class-expr';
export { createFieldDefinition } from './ast/expressions/field-definition';
export { createClassHeritage } from './ast/expressions/class-heritage';
export { createTemplateSpan } from './ast/expressions/template-span';
export { createTemplateTail } from './ast/expressions/template-tail';
export { createTaggedTemplate } from './ast/expressions/tagged-template';
export { createAwaitExpression } from './ast/expressions/await-expr';
export { createObjectLiteral } from './ast/expressions/object-literal';
export { createPropertyDefinition } from './ast/expressions/property-definition';
export { createPropertyMethod } from './ast/expressions/property-method';
export { createSpreadProperty } from './ast/expressions/spread-property';
export { createCoverInitializedName } from './ast/expressions/cover-initialized-name';
export { createMethodDefinition } from './ast/expressions/method-definition';
export { createArrowFunction } from './ast/expressions/arrow-function';
export { createRegularExpressionLiteral } from './ast/expressions/regular-expr';
export { createExpressionStatement } from './ast/statements/expression-stmt';
export { createNameSpaceImport } from './ast/module/namespace-import';
export { createFromClause } from './ast/module/from-clause';
export { createExportDeclaration } from './ast/module/export-declaration';
export { createExportDefault } from './ast/module/export-default';
export { createExportFromClause } from './ast/module/export-from-clause';
export { createExportSpecifier } from './ast/module/export-specifier';
export { createExportsList } from './ast/module/exports-list';
export { createImportClause } from './ast/module/import-clause';
export { createImportDeclaration } from './ast/module/import-declaration';
export { createImportsList } from './ast/module/imports-list';
export { createNamedExports } from './ast/module/named-exports';
export { createNamedImports } from './ast/module/named-imports';
export { createImportSpecifier } from './ast/module/import-specifier';
export { createSpreadElement } from './ast/expressions/spread-element';
export { createNewTarget } from './ast/expressions/new-target';
export { createYieldExpression } from './ast/expressions/yield-expr';
export { createNewExpression } from './ast/expressions/new-expr';
export { createArgumentList } from './ast/expressions/argument-list';
export { createFunctionBody } from './ast/expressions/function-body';
export { createFunctionExpression } from './ast/expressions/function-expr';
export { createFunctionStatementList } from './ast/expressions/function-stmt-list';
export { createFormalParameterList } from './ast/expressions/formal-parameter-list';
export { createElison } from './ast/expressions/elison';
export { createBindingElementList } from './ast/expressions/binding-element-list';
export { createBindingElement } from './ast/expressions/binding-element';
export { createArrayBindingPattern } from './ast/expressions/array-binding-pattern';
export { createElementList } from './ast/expressions/element-list';
export { createBindingProperty } from './ast/expressions/binding-property';
export { createBindingPropertyList } from './ast/expressions/binding-property-list';
export { createObjectBindingPattern } from './ast/expressions/object-binding-pattern';
export { createRootNode } from './ast/root-node';
export { createIdentifier } from './ast/expressions/identifier-expr';
export { createComputedPropertyName } from './ast/expressions/computed-property-name';
export { createArrayLiteral } from './ast/expressions/array-literal';
export { createAssignmentExpression } from './ast/expressions/assignment-expr';
export { createParenthesizedExpression } from './ast/expressions/parenthesized-expr';
export { createUnaryExpression } from './ast/expressions/unary-expr';
export { createPostfixUpdateExpression } from './ast/expressions/postfix-update-expr';
export { createPrefixUpdateExpression } from './ast/expressions/prefix-update-expr';
export { createPrivateIdentifier } from './ast/expressions/private-identifier';
export { createIndexExpression } from './ast/expressions/index-expr';
export { createMemberAccessExpression } from './ast/expressions/member-access-expr';
export { createCallExpression } from './ast/expressions/call-expr';
export { createCommaOperator } from './ast/expressions/comma-operator';
export { createNumericLiteral } from './ast/expressions/numeric-literal';
export { createStringLiteral } from './ast/expressions/string-literal';
export { createBigIntLiteral } from './ast/expressions/big-int-literal';
export { createConditionalExpression } from './ast/expressions/conditional-expr';
export { createBinaryExpression } from './ast/expressions/binary-expr';
export { createSubtractionType } from './ast/types/subtraction-type';
export { createIndexedAccessType } from './ast/types/indexed-access-type';
export { createTypeSpreadProperty } from './ast/types/type-spread-property';
export { createInternalSlot } from './ast/types/internal-slot';
export { createArrayType } from './ast/types/array-type';
export { createTypeofType } from './ast/types/typeof-type';
export { createNullableType } from './ast/types/nullable-type';
export { createObjectType } from './ast/types/object-type';
export { createStringType } from './ast/types/string-type';
export { createNumberType } from './ast/types/number-type';
export { createCallSignature } from './ast/types/call-signature';
export { createIndexSignatureDeclaration } from './ast/types/index-signature-declaration';
export { createIntersectionType } from './ast/types/intersection-type';
export { createUnionType } from './ast/types/union-type';
export { createTypeAnnotation } from './ast/types/type-annotation';
export { createQualifiedType } from './ast/types/qualified-type';
export { createTypeReference } from './ast/types/type-reference';
export { createTypeParameter } from './ast/types/type-parameter';
export { createTupleType } from './ast/types/tuple-type';
export { createArrowFunctionType } from './ast/types/arrow-function-type';
export { createParenthesizedType } from './ast/types/parenthesized-type';
export { createFunctionType } from './ast/types/function-type';
export { createFunctionTypeParameterList } from './ast/types/function-type-parameter-list';
export { createFunctionTypeParameters } from './ast/types/function-type-parameter';
export { createTypeParameterDeclaration } from './ast/types/type-parameter-declaration';
export { createBindingList } from './ast/statements/binding-list';
export { createVariableDeclarationList } from './ast/statements/variable-declarationList';
export { createVariableStatement } from './ast/statements/variable-stmt';
export { createVariableDeclaration } from './ast/statements/variable-declaration';
export { createClassDeclaration } from './ast/statements/class-declaration';
export { createLexicalBinding } from './ast/statements/lexical-binding';
export { createLexicalDeclaration } from './ast/statements/lexical-declaration';
export { createTypeAlias } from './ast/types/type-alias-declaration';
export { createOpaqueType } from './ast/types/opaque-type';
export { createTypeProperty } from './ast/types/type-property';
export { createFunctionDeclaration } from './ast/statements/function-declaration';
export { createDummyIdentifier } from './ast/internal/dummy-identifier';
export { getLeadingComments, getTrailingComments } from './parser/scanner/comments';
export { visitEachChild, visitNodes, visitNode } from './visitor';
export { createUniqueIdentifier } from './ast/internal/unique-identifier';
export { fuzzModule, fuzzScript } from './fuzzer/';
export { aladdin } from './diagnostic/reporters/aladdin'
export { eslint } from './diagnostic/reporters/eslint';
export { compact } from './diagnostic/reporters/compact';
export { unix } from './diagnostic/reporters/unix';
export {
  isStatementNode,
  isExpressionNode,
  hasNoChildren,
  isSingleQuote,
  containsSeparator,
  hasUnicodeEscape,
  isConstructor,
  isGenerator,
  isAsync,
  isDeclared,
  isNoneSimpleParamList,
  isIdentifier,
  hasExtendedUnicodeEscape,
  isImplicitOctal,
  isOctalIntegerLiteral,
  isBinaryIntegerLiteral,
  hexIntegerLiteral,
  containsInvalidEscape,
  isAssignOp,
  isBinaryOp,
  hasNewLine,
  isStatementStart,
  isExpressionStart,
  isPropertyOrCall,
  isEllipsis,
  isInOrOf,
  isKeyword,
  isLexical,
  isFutureReserved,
  isStartOfType,
  isSemicolon,
  isTypeNode,
  isTemplateLiteral,
  shouldIgnoreNextNode
} from './parser/common';

/**
 * Parse a script, optionally with various options.
 */
export function parseScript(source: string, options?: Options, onError?: OnError): RootNode {
  return parse(
    source,
    /* filename */ '__root__',
    Context.TopLevel,
    /* isModule */ false,
    onError || function () {},
    options
  );
}

/**
 * Parse a module, optionally with various options.
 */
export function parseModule(source: string, options?: Options, onError?: OnError): RootNode {
  return parse(
    source,
    '__root__',
    Context.Module | Context.TopLevel | Context.Strict | Context.AllowImportMeta,
    /* isModule */ true,
    onError || function () {},
    options
  );
}

export function print(root: any, options?: PrinterOptions): string {
  return printSource(root, options);
}

export function lintScript(
  source: string,
  options: LinterOptions,
  lint: LinterRules
): RootNode {
  return parse(
    source,
    /* filename */ '__root__',
    Context.TopLevel,
    /* isModule */ false,
    function (diagnosticSource: DiagnosticSource, kind: DiagnosticKind, message: string, start: number, end: number) {
      options.reporter(diagnosticSource, kind, message, start, end, source);
    },
    { lint }
  );
}

export function lintModule(
  source: string,
  options: LinterOptions,
  lint: LinterRules
): RootNode {
  return parse(
    source,
    '__root__',
    Context.Module | Context.TopLevel | Context.Strict | Context.AllowImportMeta,
    /* isModule */ true,
    function (diagnosticSource: DiagnosticSource, kind: DiagnosticKind, message: string, start: number, end: number) {
      options.reporter(diagnosticSource, kind, message, start, end, source);
    },
    { lint }
  );
}

export function printScript(source: string, options?: PrinterOptions): string {
  return printSource(
    parseScript(source, { next: true }, function (_source, _kind, msg, line, column) {
      throw msg + '(' + line + ', ' + column + ')';
    }),
    options
  );
}

export function printModule(source: string, options?: PrinterOptions): string {
  return printSource(
    parseModule(source, { next: true }, function (_source, _kind, msg, line, column) {
      throw msg + '(' + line + ', ' + column + ')';
    }),
    options
  );
}
