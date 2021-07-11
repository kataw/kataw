import { DebuggerStatement } from '../ast/statements/debugger-stmt';
import { RootNode } from '../ast/root-node';
import { StringLiteral } from '../ast/expressions/string-literal';
import { ExpressionNode } from '../ast/expressions';
import { TypeNode } from '../ast/types';
import { PrivateIdentifier } from '../ast/expressions/private-identifier';
import { NumericLiteral } from '../ast/expressions/numeric-literal';
import { AssignmentExpression } from '../ast/expressions/assignment-expr';
import { EmptyStatement } from '../ast/statements/empty-stmt';
import { ExpressionStatement } from '../ast/statements/expression-stmt';
import { ArrayLiteral } from '../ast/expressions/array-literal';
import { BinaryExpression } from '../ast/expressions/binary-expr';
import { ArrayBindingPattern } from '../ast/expressions/array-binding-pattern';
import { ArrowFunction } from '../ast/expressions/arrow-function';
import { AwaitExpression } from '../ast/expressions/await-expr';
import { BindingProperty } from '../ast/expressions/binding-property';
import { BindingElement } from '../ast/expressions/binding-element';
import { IndexExpression } from '../ast/expressions/index-expr';
import { IndexExpressionChain } from '../ast/expressions/index-expr-chain';
import { MemberAccessExpression } from '../ast/expressions/member-access-expr';
import { StaticBlock } from '../ast/expressions/static-block';
import { YieldExpression } from '../ast/expressions/yield-expr';
import { CallExpression } from '../ast/expressions/call-expr';
import { CallChain } from '../ast/expressions/call-chain';
import { ClassTail } from '../ast/expressions/class-tail';
import { OptionalChain } from '../ast/expressions/optional-chain';
import { OptionalExpression } from '../ast/expressions/optional-expr';
import { CommaOperator } from '../ast/expressions/comma-operator';
import { ClassElement } from '../ast/expressions/class-element';
import { ClassExpression } from '../ast/expressions/class-expr';
import { ClassHeritage } from '../ast/expressions/class-heritage';
import { ComputedPropertyName } from '../ast/expressions/computed-property-name';
import { ConditionalExpression } from '../ast/expressions/conditional-expr';
import { CoverInitializedName } from '../ast/expressions/cover-initialized-name';
import { ElementList } from '../ast/expressions/element-list';
import { FieldDefinition } from '../ast/expressions/field-definition';
import { TaggedTemplate } from '../ast/expressions/tagged-template';
import { FunctionExpression } from '../ast/expressions/function-expr';
import { UnaryExpression } from '../ast/expressions/unary-expr';
import { ImportCall } from '../ast/expressions/import-call';
import { MethodDefinition } from '../ast/expressions/method-definition';
import { PropertyMethod } from '../ast/expressions/property-method';
import { NewExpression } from '../ast/expressions/new-expr';
import { ObjectBindingPattern } from '../ast/expressions/object-binding-pattern';
import { ObjectLiteral } from '../ast/expressions/object-literal';
import { ParenthesizedExpression } from '../ast/expressions/parenthesized-expr';
import { PostfixUpdateExpression } from '../ast/expressions/postfix-update-expr';
import { PrefixUpdateExpression } from '../ast/expressions/prefix-update-expr';
import { NewTarget } from '../ast/expressions/new-target';
import { BigIntLiteral } from '../ast/expressions/big-int-literal';
import { TemplateTail } from '../ast/expressions/template-tail';
import { PropertyDefinition } from '../ast/expressions/property-definition';
import { SpreadProperty } from '../ast/expressions/spread-property';
import { TemplateExpression } from '../ast/expressions/template-expression';
import { BindingList } from '../ast/statements/binding-list';
import { VariableStatement } from '../ast/statements/variable-stmt';
import { Block } from '../ast/statements/block';
import { BlockStatement } from '../ast/statements/block-stmt';
import { BreakStatement } from '../ast/statements/break-stmt';
import { ContinueStatement } from '../ast/statements/continue-stmt';
import { DefaultClause } from '../ast/statements/default-clause';
import { CaseClause } from '../ast/statements/case-clause';
import { DoWhileStatement } from '../ast/statements/do-stmt';
import { ForInStatement } from '../ast/statements/for-in-stmt';
import { ForOfStatement } from '../ast/statements/for-of-stmt';
import { ForStatement } from '../ast/statements/for-stmt';
import { IfStatement } from '../ast/statements/if-stmt';
import { LabelledStatement } from '../ast/statements/labelled-stmt';
import { LexicalBinding } from '../ast/statements/lexical-binding';
import { ReturnStatement } from '../ast/statements/return-stmt';
import { SwitchStatement } from '../ast/statements/switch-stmt';
import { ThrowStatement } from '../ast/statements/throw-stmt';
import { CaseBlock } from '../ast/statements/case-block';
import { TryStatement } from '../ast/statements/try-stmt';
import { VariableDeclaration } from '../ast/statements/variable-declaration';
import { VariableDeclarationList } from '../ast/statements/variable-declarationList';
import { WhileStatement } from '../ast/statements/while-stmt';
import { WithStatement } from '../ast/statements/with-stmt';
import { FunctionDeclaration } from '../ast/statements/function-declaration';
import { LexicalDeclaration } from '../ast/statements/lexical-declaration';
import { ClassDeclaration } from '../ast/statements/class-declaration';
import { SubtractionType } from '../ast/types/subtraction-type';
import { OptionalIndexedAccess } from '../ast/types/optional-indexed-access';
import { StringType } from '../ast/types/string-type';
import { ArrayType } from '../ast/types/array-type';
import { ObjectType } from '../ast/types/object-type';
import { BigIntType } from '../ast/types/big-int-type';
import { NumberType } from '../ast/types/number-type';
import { ObjectTypeSpreadProperty } from '../ast/types/object-type-spread-property';
import { TypeAlias } from '../ast/types/type-alias-declaration';
import { ArrowFunctionType } from '../ast/types/arrow-function-type';
import { ArrowTypeParameter } from '../ast/types/arrow-type-parameter';
import { ArrowTypeParameterList } from '../ast/types/arrow-type-parameter-list';
import { FunctionTypeParameterList } from '../ast/types/function-type-parameter-list';
import { FunctionTypeParameter } from '../ast/types/function-type-parameter';
import { NullableType } from '../ast/types/nullable-type';
import { ObjectTypeCallProperty } from '../ast/types/object-type-call-property';
import { ObjectTypeIndexer } from '../ast/types/object-type-indexer';
import { ObjectTypeInternalSlot } from '../ast/types/object-type-internal-slot';
import { ObjectTypeProperty } from '../ast/types/object-type-property';
import { OpaqueType } from '../ast/types/opaque-type';
import { QualifiedType } from '../ast/types/qualified-type';
import { TypeInstantiations } from '../ast/types/type-instantiations';
import { TypeAnnotation } from '../ast/types/type-annotation';
import { TypeParameterDeclaration } from '../ast/types/type-parameter-declaration';
import { TypeParameterInstantiation } from '../ast/types/type-parameter-instantiation';
import { TypeParameterList } from '../ast/types/type-parameter-list';
import { TypeofType } from '../ast/types/typeof-type';
import { TypeReference } from '../ast/types/type-reference';
import { FunctionType } from '../ast/types/function-type';
import { IndexedAccessType } from '../ast/types/indexed-access-type';
import { IntersectionType } from '../ast/types/intersection-type';
import { OptionalType } from '../ast/types/optional-type';
import { ParenthesizedType } from '../ast/types/parenthesized-type';
import { RestType } from '../ast/types/rest-type';
import { TupleType } from '../ast/types/tuple-type';
import { TypeParameter } from '../ast/types/type-parameter';
import { UnionType } from '../ast/types/union-type';
import { Decorator } from '../ast/expressions/decorators';
import { ImportClause } from '../ast/module/import-clause';
import { NameSpaceImport } from '../ast/module/namespace-import';
import { FromClause } from '../ast/module/from-clause';
import { ExportDefault } from '../ast/module/export-default';
import { ExportDeclaration } from '../ast/module/export-declaration';
import { ExportFromClause } from '../ast/module/export-from-clause';
import { ExportSpecifier } from '../ast/module/export-specifier';
import { ImportDeclaration } from '../ast/module/import-declaration';
import { ImportSpecifier } from '../ast/module/import-specifier';
import { NamedExports } from '../ast/module/named-exports';
import { NamedImports } from '../ast/module/named-imports';
import { SpreadElement } from '../ast/expressions/spread-element';
import { Identifier } from '../ast/expressions/identifier-expr';
import { SyntaxNode, SyntaxKind, NodeFlags, tokenToString } from '../ast/syntax-node';
import { lastOrUndefined } from '../parser/common';
import {
  Printer,
  write,
  writeLine,
  PrinterContext,
  printKeyword,
  printPunctuator,
  isEmptyBlock,
  nodeIsSynthesized,
  rangeStartPositionsAreOnSameLine,
  createPrinter,
  shouldprintBlockFunctionBodyOnSingleLine,
  getOpeningBrackets,
  getClosingBrackets,
  makeString,
  isEmptyProperties,
  printDetachedCommentsAndUpdateCommentsInfo,
  printTrailingCommentsOfPosition,
  shouldWriteSeparatingLineTerminator,
  shouldWriteLeadingLineTerminator,
  shouldWriteClosingLineTerminator,
  printLeadingComments,
  writeDelimiter,
  printWithComments
} from './common';

export interface PrinterOptions {
  singleQuote?: boolean;
  indent?: number;
  noSemicolon?: number;
  noComments?: number;
  noObjectCurlySpacing?: number;
  arrayBracketSpacing?: number;
  computedPropertySpacing?: number;
  allowArrowParens?: number;
  coerceQuoteProps?: number;
  quoteProps?: number;
  endOfLine?: number;
}

/** @internal */
export function printCST(node: RootNode, options?: PrinterOptions): string {
  let indent = 0;
  let context = PrinterContext.SingleQuote;

  if (options != null) {
    if (options.indent) indent = options.indent;
    if (options.singleQuote) context |= PrinterContext.SingleQuote;
    if (options.singleQuote) context |= PrinterContext.NoSemicolon;
    if (options.singleQuote) context |= PrinterContext.NoComments;
    if (options.singleQuote) context |= PrinterContext.NoObjectCurlySpacing;
    if (options.singleQuote) context |= PrinterContext.ArrayBracketSpacing;
    if (options.singleQuote) context |= PrinterContext.ComputedPropertySpacing;
    if (options.singleQuote) context |= PrinterContext.AllowArrowParens;
    if (options.singleQuote) context |= PrinterContext.CoerceQuoteProps;
    if (options.singleQuote) context |= PrinterContext.QuoteProps;
  }

  const printer = createPrinter(node.source, indent);
  printRootNode(node, printer, PrinterContext.None);
  return printer.output;
}

// Prints CST nodes on statement level with comment attachment
function printStatement(node: SyntaxNode, printer: Printer, context: PrinterContext, parentNode: SyntaxNode): void {
  printWithComments(node, printer, context, parentNode, printStatements);
}

function printStatements(node: SyntaxNode, printer: Printer, context: PrinterContext, parentNode: SyntaxNode): void {
  switch (node.kind) {
    case SyntaxKind.WhileStatement:
      return printWhileStatement(<WhileStatement>node, printer, context);
    case SyntaxKind.WithStatement:
      return printWithStatement(<WithStatement>node, printer, context);
    case SyntaxKind.ExpressionStatement:
      return printExpressionStatement(<ExpressionStatement>node, printer, context);
    case SyntaxKind.DoWhileStatement:
      return printDoWhileStatement(<DoWhileStatement>node, printer, context);
    case SyntaxKind.IfStatement:
      return printIfStatement(<IfStatement>node, printer, context);
    case SyntaxKind.CaseClause:
      return printCaseClause(<CaseClause>node, printer, context);
    case SyntaxKind.DefaultClause:
      return printDefaultClause(<DefaultClause>node, printer, context);
    case SyntaxKind.ContinueStatement:
      return printContinueStatement(<ContinueStatement>node, printer, context);
    case SyntaxKind.ClassTail:
      return printTail(<ClassTail>node, printer, context);
    case SyntaxKind.ClassElement:
      return printClassElement(<ClassElement>node, printer, context);
    case SyntaxKind.ClassHeritage:
      return printClassHeritage(<ClassHeritage>node, printer, context);
    case SyntaxKind.BreakStatement:
      return printBreakStatement(<BreakStatement>node, printer, context);
    case SyntaxKind.SwitchStatement:
      return printSwitchStatement(<SwitchStatement>node, printer, context);
    case SyntaxKind.StaticBlock:
      return printStaticBlock(<StaticBlock>node, printer, context);
    case SyntaxKind.ForStatement:
      return printForStatement(<ForStatement>node, printer, context);
    case SyntaxKind.FunctionDeclaration:
      return printFunctionDeclarationOrExpression(<FunctionDeclaration>node, printer, context);
    case SyntaxKind.ForInStatement:
      return printForInStatement(<ForInStatement>node, printer, context);
    case SyntaxKind.ForOfStatement:
      return printForOfStatement(<ForOfStatement>node, printer, context);
    case SyntaxKind.EmptyStatement:
      return printEmptyStatement(<EmptyStatement>node, printer, context);
    case SyntaxKind.LexicalDeclaration:
      return printLexicalDeclaration(<LexicalDeclaration>node, printer, false);
    case SyntaxKind.VariableStatement:
      return printVariableStatement(<VariableStatement>node, printer, context);
    case SyntaxKind.VariableDeclaration:
      return printVariableDeclarationOrLexicalBinding(<LexicalBinding>node, printer, context);
    case SyntaxKind.LexicalBinding:
      return printVariableDeclarationOrLexicalBinding(<VariableDeclaration>node, printer, context);
    case SyntaxKind.Decorator:
      return printDecorator(<Decorator>node, printer, context);
    case SyntaxKind.TryStatement:
      return printTryStatement(<TryStatement>node, printer, context);
    case SyntaxKind.ReturnStatement:
      return printReturnStatement(<ReturnStatement>node, printer, context);
    case SyntaxKind.ThrowStatement:
      return printThrowStatement(<ThrowStatement>node, printer, context);
    case SyntaxKind.LabelledStatement:
      return printLabelledStatement(<LabelledStatement>node, printer, context);
    case SyntaxKind.ArrayBindingPattern:
      return emitArrayBindingPattern(<ArrayBindingPattern>node, printer, context);
    case SyntaxKind.ObjectBindingPattern:
      return printObjectBindingPattern(<ObjectBindingPattern>node, printer, context);
    case SyntaxKind.BindingProperty:
      return printBindingProperty(<BindingProperty>node, printer, context);
    case SyntaxKind.ClassDeclaration:
      return printClassExpressionOrDeclaration(<ClassDeclaration>node, printer, context);
    case SyntaxKind.TypeAlias:
      return printTypeAlias(<TypeAlias>node, printer, context);
    case SyntaxKind.BindingElement:
      return printBindingElement(<BindingElement>node, printer, context);
    case SyntaxKind.BlockStatement:
      return printBlockStatement(<BlockStatement>node, printer, context);
    case SyntaxKind.DebuggerStatement:
      return printDebuggerStatement(<DebuggerStatement>node, printer, context);
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
    case SyntaxKind.SuperKeyword:
    case SyntaxKind.Semicolon:
      return printKeyword(<any>node, printer, node, /* addSpace */ false);
    case SyntaxKind.TypeAnnotation:
      return printTypeAnnotation(<TypeAnnotation>node, printer, context);
    case SyntaxKind.ArrayType:
      return printArrayType(<ArrayType>node, printer, context);
    case SyntaxKind.ArrowFunctionType:
      return printArrowFunctionType(<ArrowFunctionType>node, printer, context);
    case SyntaxKind.ArrowTypeParameterList:
      return printArrowTypeParameterList(<ArrowTypeParameterList>node, printer, context);
    case SyntaxKind.ArrowTypeParameter:
      return printArrowTypeParameter(<ArrowTypeParameter>node, printer, context);
    case SyntaxKind.BigIntType:
      return printBigIntType(<BigIntType>node, printer, context);
    case SyntaxKind.FunctionTypeParameterList:
      return printFunctionTypeParameterList(<FunctionTypeParameterList>node, printer, context);
    case SyntaxKind.FunctionTypeParameter:
      return printFunctionTypeParameter(<FunctionTypeParameter>node, printer, context);
    case SyntaxKind.FunctionType:
      return printFunctionType(<FunctionType>node, printer, context);
    case SyntaxKind.IndexedAccessType:
      return printIndexedAccessType(<IndexedAccessType>node, printer, context);
    case SyntaxKind.IntersectionType:
      return printIntersectionType(<IntersectionType>node, printer, context);
    case SyntaxKind.NullableType:
      return printNullableType(<NullableType>node, printer, context);
    case SyntaxKind.NumberType:
      return printNumericLiteral(<NumberType>node, printer, context);
    case SyntaxKind.ObjectTypeCallProperty:
      return printObjectTypeCallProperty(<ObjectTypeCallProperty>node, printer, context);
    case SyntaxKind.ObjectTypeIndexer:
      return printObjectTypeIndexer(<ObjectTypeIndexer>node, printer, context);
    case SyntaxKind.ObjectTypeInternalSlot:
      return printObjectTypeInternalSlot(<ObjectTypeInternalSlot>node, printer, context);
    case SyntaxKind.ObjectTypeProperty:
      return printObjectTypeProperty(<ObjectTypeProperty>node, printer, context);
    case SyntaxKind.ObjectTypeSpreadProperty:
      return printObjectTypeSpreadProperty(<ObjectTypeSpreadProperty>node, printer, context);
    case SyntaxKind.ObjectType:
      return printObjectType(<ObjectType>node, printer, <any>node);
    case SyntaxKind.OpaqueType:
      return printOpaqueType(<OpaqueType>node, printer, context);
    case SyntaxKind.OptionalIndexedAccess:
      return printOptionalIndexedAccess(<OptionalIndexedAccess>node, printer, context);
    case SyntaxKind.OptionalType:
      return printOptionalType(<OptionalType>node, printer, context);
    case SyntaxKind.ParenthesizedType:
      return printParenthesizedType(<ParenthesizedType>node, printer, context);
    case SyntaxKind.QualifiedType:
      return printQualifiedType(<QualifiedType>node, printer, context);
    case SyntaxKind.RestType:
      return printRestType(<RestType>node, printer, context);
    case SyntaxKind.StringType:
      return printStringType(<StringType>node, printer, context);
    case SyntaxKind.SubtractionType:
      return printSubtractionType(<SubtractionType>node, printer, context);
    case SyntaxKind.TupleType:
      return printTupleType(<TupleType>node, printer, context);
    case SyntaxKind.TypeInstantiations:
      return printTypeInstantiations(<TypeInstantiations>node, printer, context);
    case SyntaxKind.TypeParameterDeclaration:
      return printTypeParameterDeclaration(<TypeParameterDeclaration>node, printer, context);
    case SyntaxKind.TypeParameterInstantiation:
      return printTypeParameterInstantiation(<TypeParameterInstantiation>node, printer, context);
    case SyntaxKind.TypeParameterList:
      return printTypeParameterList(<TypeParameterList>node, printer, context);
    case SyntaxKind.TypeParameter:
      return printTypeParameter(<TypeParameter>node, printer, context);
    case SyntaxKind.TypeReference:
      return printTypeReference(<TypeReference>node, printer, context);
    case SyntaxKind.TypeofType:
      return printTypeofType(<TypeofType>node, printer, context);
    case SyntaxKind.UnionType:
      return printUnionType(<UnionType>node, printer, context);
    case SyntaxKind.ExportDeclaration:
      return printExportDeclaration(<ExportDeclaration>node, printer, context);
    case SyntaxKind.ExportFromClause:
      return printExportFromClause(<ExportFromClause>node, printer, context);
    case SyntaxKind.ExportDefault:
      return printExportDefault(<ExportDefault>node, printer, context);
    case SyntaxKind.NamedExports:
      return printNamedExports(<NamedExports>node, printer, context);
    case SyntaxKind.ExportSpecifier:
      return printExportSpecifier(<ExportSpecifier>node, printer, context);
    case SyntaxKind.ImportDeclaration:
      return printImportDeclaration(<ImportDeclaration>node, printer, context);
    case SyntaxKind.ImportClause:
      return printImportClause(<ImportClause>node, printer, context);
    case SyntaxKind.NameSpaceImport:
      return printNameSpaceImport(<NameSpaceImport>node, printer, context);
    case SyntaxKind.NamedImports:
      return printNamedImports(<NamedImports>node, printer, context);
    case SyntaxKind.ImportSpecifier:
      return printImportSpecifier(<ImportSpecifier>node, printer, context);
    case SyntaxKind.FromClause:
      return printFromClause(<FromClause>node, printer, context);
    default:
      if (node.flags & NodeFlags.ExpressionNode) {
        printExpression(<ExpressionNode>node, printer, context, parentNode);
      }
  }
}

function printExpression(node: SyntaxNode, printer: Printer, context: PrinterContext, parentNode: SyntaxNode): void {
  printWithComments(node, printer, context, parentNode, printExpressions);
}

function printExpressions(node: SyntaxNode, printer: Printer, context: PrinterContext, parentNode: SyntaxNode): void {
  const kind = node.kind;
  switch (kind) {
    case SyntaxKind.Identifier:
      return printIdentifier(<Identifier>node, printer);
    case SyntaxKind.ConditionalExpression:
      return printConditionalExpression(<ConditionalExpression>node, printer, context);
    case SyntaxKind.ParenthesizedExpression:
      return printParenthesizedExpression(<ParenthesizedExpression>node, printer, context);
    case SyntaxKind.PrefixUpdateExpression:
      return printPrefixUpdateExpression(<PrefixUpdateExpression>node, printer, context);
    case SyntaxKind.AssignmentExpression:
      return printAssignmentExpression(<AssignmentExpression>node, printer, context);
    case SyntaxKind.PostfixUpdateExpression:
      return printPostfixUpdateExpression(<PostfixUpdateExpression>node, printer, context);
    case SyntaxKind.NewTarget:
      return printNewTarget(<NewTarget>node, printer);
    case SyntaxKind.StringLiteral:
      return printStringLiteral(<StringLiteral>node, printer, context);
    case SyntaxKind.NumericLiteral:
      return printNumericLiteral(<NumericLiteral>node, printer, context);
    case SyntaxKind.BigIntLiteral:
      return printBigIntLiteral(<BigIntLiteral>node, printer, context);
    case SyntaxKind.CommaOperator:
      return printCommaOperator(<CommaOperator>node, printer, context);
    case SyntaxKind.ArrayLiteral:
      return printArrayLiteral(<ArrayLiteral>node, printer, context);
    case SyntaxKind.NewExpression:
      return printNewExpression(<NewExpression>node, printer, context);
    case SyntaxKind.AwaitExpression:
      return printAwaitExpression(<AwaitExpression>node, printer, context);
    case SyntaxKind.FunctionExpression:
      return printFunctionDeclarationOrExpression(<FunctionExpression>node, printer, context);
    case SyntaxKind.ThisKeyword:
    case SyntaxKind.NullKeyword:
    case SyntaxKind.FalseKeyword:
    case SyntaxKind.TrueKeyword:
    case SyntaxKind.SuperKeyword:
      return printKeyword(<any>node, printer, node, /* addSpace */ false);
    case SyntaxKind.ClassExpression:
      return printClassExpressionOrDeclaration(<ClassExpression>node, printer, context);
    case SyntaxKind.IndexExpression:
      return printIndexExpression(<IndexExpression>node, printer, context);
    case SyntaxKind.MemberAccessExpression:
      return printMemberAccessExpression(<MemberAccessExpression>node, printer, context);
    case SyntaxKind.FieldDefinition:
      return printFieldDefinition(<FieldDefinition>node, printer, context);
    case SyntaxKind.UnaryExpression:
      return printUnaryExpression(<UnaryExpression>node, printer, context);
    case SyntaxKind.BinaryExpression:
      return printBinaryExpression(<BinaryExpression>node, printer, context);
    case SyntaxKind.ArrowFunction:
      return printArrowFunction(<ArrowFunction>node, printer, context);
    case SyntaxKind.PrivateIdentifier:
      return printPrivateIdentifier(<PrivateIdentifier>node, printer);
    case SyntaxKind.CoverInitializedName:
      return printCoverInitializedName(<CoverInitializedName>node, printer, context);
    case SyntaxKind.PropertyMethod:
      return printPropertyMethod(<PropertyMethod>node, printer, context);
    case SyntaxKind.ObjectLiteral:
      return printObjectLiteral(<ObjectLiteral>node, printer, context);
    case SyntaxKind.PropertyDefinition:
      return printPropertyDefinition(<PropertyDefinition>node, printer, context);
    case SyntaxKind.MethodDefinition:
      return printMethodDefinition(<MethodDefinition>node, printer, context);
    case SyntaxKind.ComputedPropertyName:
      return printComputedPropertyName(<ComputedPropertyName>node, printer, context);
    case SyntaxKind.CallExpression:
      return printCallExpression(<CallExpression>node, printer, context);
    case SyntaxKind.YieldExpression:
      return printYieldExpression(<YieldExpression>node, printer, context);
    case SyntaxKind.SpreadProperty:
      return printSpreadElement(<SpreadProperty>node, printer, context);
    case SyntaxKind.SpreadElement:
      return printSpreadElement(<SpreadElement>node, printer, context);
    case SyntaxKind.RegularExpressionLiteral:
      return printRegularExpressionLiteral(<any>node, printer, context);
    case SyntaxKind.ImportCall:
      return printImportCall(<ImportCall>node, printer, context);
    case SyntaxKind.ImportMeta:
      return printImportMeta(<any>node, printer, context);
    case SyntaxKind.TaggedTemplate:
      return printTaggedTemplate(<TaggedTemplate>node, printer, context);
    case SyntaxKind.TemplateExpression:
      return printTemplateExpression(<TemplateExpression>node, printer, context);
    case SyntaxKind.TemplateSpan:
      return printTemplateSpan(<any>node, printer, context);
    case SyntaxKind.TemplateTail:
      return printTemplateTail(<TemplateTail>node, printer, context);
    case SyntaxKind.OptionalExpression:
      return printOptionalExpression(<OptionalExpression>node, printer, context);
    case SyntaxKind.OptionalChain:
      return printOptionalChain(<OptionalChain>node, printer, context);
    case SyntaxKind.CallChain:
      return printCallChain(<CallChain>node, printer, context);
    case SyntaxKind.IndexExpressionChain:
      return printIndexExpressionChain(<IndexExpressionChain>node, printer, context);
    case SyntaxKind.MemberAccessChain:
      return printMemberAccessChain(node, printer, context);
  }
}

function printExpressionStatement(node: ExpressionStatement, printer: Printer, context: PrinterContext): void {
  printExpression(node.expression, printer, context, node);
  write(printer, ';');
}

function printRootNode(node: RootNode, printer: Printer, context: PrinterContext) {
  const { directives, statements } = node;
  if (directives.length !== 0) {
    printPrologueDirectives(printer, directives, node, /*startWithNewLine */ true);
  }

  if (statements.length === 0 || directives.length === 0 || nodeIsSynthesized(statements[0])) {
    const { start, end } = node;

    if (start >= 0) {
      printDetachedCommentsAndUpdateCommentsInfo(node, printer);
    }

    printStatementList(printer, node, node, node.statements, PrinterContext.MultiLine);
    if (end >= 0) {
      printLeadingComments(
        printer,
        // In terms of performance, there is not much to gain from creating a new 'CST node
        // just to retieve the 'end' value of the last statement in the array, so we
        // take a shortcut...
        node.statements.length !== 0 ? lastOrUndefined(node.statements).end : end
      );

      if (printer.hasWrittenComment) {
        writeLine(printer);
      }
    }
  } else {
    printStatementList(printer, node, node, node.statements, PrinterContext.MultiLine);
  }
}

function printIdentifier(node: Identifier, printer: Printer) {
  write(printer, node.rawText);
}

function printPrivateIdentifier(node: PrivateIdentifier, printer: Printer) {
  write(printer, node.rawText);
}

function printPrologueDirectives(
  printer: Printer,
  directives: StringLiteral[],
  parentNode: SyntaxNode,
  startWithNewLine: boolean
) {
  for (let i = 0; i < directives.length; i++) {
    if (startWithNewLine || i > 0) {
      writeLine(printer);
    }
    printStatement(directives[i], printer, PrinterContext.None, parentNode);
  }
  write(printer, ';');
  return directives.length;
}

function printStatementList(
  printer: Printer,
  listNode: SyntaxNode,
  parentNode: SyntaxNode,
  children: SyntaxNode[],
  context: PrinterContext
) {
  printList(printStatement, printer, listNode, parentNode, children, context);
}

function printExpressionList(
  printer: Printer,
  listNode: SyntaxNode,
  parentNode: SyntaxNode,
  children: SyntaxNode[],
  context: PrinterContext
) {
  printList(printExpression, printer, listNode, parentNode, children, context);
}

function printList(
  print: (node: SyntaxNode, printer: Printer, context: PrinterContext, parentNode: SyntaxNode) => void,
  printer: Printer,
  listNode: SyntaxNode,
  parentNode: SyntaxNode,
  children: SyntaxNode[],
  context: PrinterContext
) {
  if (
    context &
    (PrinterContext.Braces | PrinterContext.Parenthesis | PrinterContext.AngleBrackets | PrinterContext.SquareBrackets)
  ) {
    write(
      printer,
      getOpeningBrackets(
        context &
          (PrinterContext.Braces |
            PrinterContext.Parenthesis |
            PrinterContext.AngleBrackets |
            PrinterContext.SquareBrackets)
      )
    );
    if (0 >= children.length) {
      printTrailingCommentsOfPosition(printer, listNode.start);
    }
  }

  if (0 >= children.length) {
    if (context & PrinterContext.MultiLine) {
      writeLine(printer);
    } else if (context & PrinterContext.SpaceBetweenBraces && !(context & PrinterContext.NoSpaceIfEmpty)) {
      write(printer, ' ');
    }
  } else {
    let shouldEmitInterveningComments = true;

    if (shouldWriteLeadingLineTerminator(parentNode, printer, children, context)) {
      writeLine(printer);
      shouldEmitInterveningComments = false;
    } else if (context & PrinterContext.SpaceBetweenBraces) {
      write(printer, ' ');
    }

    // Increase the indent, if requested.
    if (context & PrinterContext.Indented) {
      printer.indent++;
    }

    let previousSibling!: SyntaxNode;
    let shouldDecreaseIndentAfterEmit = false;

    for (let i = 0; i < children.length; i++) {
      const child = children[i];

      if (previousSibling) {
        if (
          context & (PrinterContext.BarDelimited | PrinterContext.AmpersandDelimited | PrinterContext.CommaDelimited) &&
          previousSibling.end !== (listNode ? listNode.end : -1)
        ) {
          if (previousSibling.end !== -1) {
            printLeadingComments(printer, previousSibling.end);
          }
        }

        writeDelimiter(printer, context);

        // Write either a line terminator or whitespace to separate the elements.
        if (shouldWriteSeparatingLineTerminator(previousSibling, printer, child, context)) {
          // If a synthesized node in a single-line list starts on a new
          // line, we should increase the indent.
          if (
            (context &
              (PrinterContext.SingleLine |
                PrinterContext.MultiLine |
                PrinterContext.PreserveLines |
                PrinterContext.Indented)) ===
            PrinterContext.SingleLine
          ) {
            printer.indent++;
            shouldDecreaseIndentAfterEmit = true;
          }
          writeLine(printer);
          shouldEmitInterveningComments = false;
        } else if (previousSibling && context & PrinterContext.SpaceBetweenSiblings) {
          write(printer, ' ');
        }
      }

      if (shouldEmitInterveningComments) {
        printTrailingCommentsOfPosition(printer, child.start);
      } else {
        shouldEmitInterveningComments = true;
      }
      printer.nextListElementPos = child.start;
      // print this child.
      print(child, printer, context, parentNode);

      if (shouldDecreaseIndentAfterEmit) {
        printer.indent--;
        shouldDecreaseIndentAfterEmit = false;
      }
      previousSibling = child;
    }
    if (
      context & PrinterContext.CommaDelimited &&
      context & PrinterContext.AllowTrailingComma &&
      (previousSibling.flags & NodeFlags.DisallowTrailingComma) === 0
    ) {
      if (previousSibling) {
        printPunctuator(',', printer, previousSibling.end, previousSibling, /* addSpace */ false);
      } else {
        write(printer, ',');
      }
    }

    if (
      previousSibling &&
      listNode.end !== previousSibling.end &&
      context & (PrinterContext.BarDelimited | PrinterContext.AmpersandDelimited | PrinterContext.CommaDelimited)
    ) {
      const pos = context & PrinterContext.AllowTrailingComma ? listNode.end : previousSibling.end;
      if (pos !== -1) {
        printLeadingComments(printer, pos);
      }
    }

    if (context & PrinterContext.Indented) {
      printer.indent--;
    }

    if (shouldWriteClosingLineTerminator(parentNode, printer, children, context)) {
      writeLine(printer);
    } else if (context & PrinterContext.SpaceBetweenBraces) {
      write(printer, ' ');
    }
  }

  if (
    context &
    (PrinterContext.Braces | PrinterContext.Parenthesis | PrinterContext.AngleBrackets | PrinterContext.SquareBrackets)
  ) {
    if (listNode.end !== -1 && 0 >= children.length) {
      printLeadingComments(printer, listNode.end);
    }

    write(
      printer,
      getClosingBrackets(
        context &
          (PrinterContext.Braces |
            PrinterContext.Parenthesis |
            PrinterContext.AngleBrackets |
            PrinterContext.SquareBrackets)
      )
    );
  }
}

function printArrayLiteral(node: ArrayLiteral, printer: Printer, context: PrinterContext) {
  return printElementList(node.elementList, printer, node);
}

function printElementList(node: ElementList, printer: Printer, parentNode: ArrayLiteral) {
  printExpressionList(
    printer,
    node,
    parentNode,
    node.elements,
    node.flags & NodeFlags.NewLine
      ? PrinterContext.PreserveLines |
          PrinterContext.CommaDelimited |
          PrinterContext.SpaceBetweenSiblings |
          PrinterContext.AllowTrailingComma |
          PrinterContext.Indented |
          PrinterContext.SquareBrackets |
          PrinterContext.PreferNewLine
      : PrinterContext.PreserveLines |
          PrinterContext.CommaDelimited |
          PrinterContext.SpaceBetweenSiblings |
          PrinterContext.AllowTrailingComma |
          PrinterContext.Indented |
          PrinterContext.SquareBrackets
  );
}

function printVariableDeclarationOrLexicalBinding(
  node: VariableDeclaration | LexicalBinding,
  printer: Printer,
  context: PrinterContext
): void {
  printStatement(node.binding, printer, context, node);
  if (node.type) {
    printPunctuator(':', printer, node.binding.end, node, /* addSpace */ true);
    printStatement(node.type, printer, context, node);
  }
  printInitializer(node.initializer as any, printer, context, node.type ? node.type.end : node.binding.end, node);
}

function printVariableStatement(node: VariableStatement, printer: Printer, context: PrinterContext): void {
  write(printer, 'var');
  write(printer, ' ');
  printVariableDeclarationList(node.declarationList, printer, node);
  write(printer, ';');
}

function printVariableDeclarationList(
  node: VariableDeclarationList,
  printer: Printer,
  parentNode: VariableStatement
): void {
  printStatementList(
    printer,
    node,
    parentNode,
    node.declarations,
    PrinterContext.CommaDelimited | PrinterContext.SpaceBetweenSiblings | PrinterContext.SingleLine
  );
}

function printLexicalDeclaration(node: LexicalDeclaration, printer: Printer, fromForStatement: boolean): void {
  write(printer, tokenToString(node.lexicalKeyword));
  write(printer, ' ');
  printBindingList(node.binding, printer, node);
  if (!fromForStatement) write(printer, ';');
}

function printBindingList(node: BindingList, printer: Printer, parentNode: any): void {
  printStatementList(
    printer,
    node,
    parentNode,
    node.bindingList,
    PrinterContext.CommaDelimited | PrinterContext.SpaceBetweenSiblings | PrinterContext.SingleLine
  );
}

function printForStatement(node: ForStatement, printer: Printer, context: PrinterContext): void {
  printKeyword(node.forKeyword, printer, node, /* addSpace */ true);
  let punctuatorPos = printPunctuator('(', printer, node.forKeyword.end, node, /* addSpace */ false);
  printForBinding(node.initializer, printer, context);
  punctuatorPos = printPunctuator(
    ';',
    printer,
    node.initializer ? node.initializer.end : punctuatorPos,
    node,
    /* addSpace */ false
  );
  if (node.condition) {
    write(printer, ' ');
    printExpression(node.condition, printer, context, node);
  }
  punctuatorPos = printPunctuator(
    ';',
    printer,
    node.condition ? node.condition.end : punctuatorPos,
    node,
    /* addSpace */ false
  );
  if (node.incrementor) {
    write(printer, ' ');
    printExpression(node.incrementor, printer, context, node);
  }
  printPunctuator(')', printer, node.incrementor ? node.incrementor.end : punctuatorPos, node, /* addSpace */ false);
  printEmbeddedStatement(node.statement, printer, context);
}

function printForBinding(node: any, printer: Printer, context: PrinterContext) {
  if (node) {
    if (node.kind === SyntaxKind.ForBinding) {
      const declarationList = node.declarationList;
      printKeyword(node.varKeyword, printer, node, /* addSpace */ true);
      printVariableDeclarationList(declarationList, printer, node);
    } else if (node.kind === SyntaxKind.LexicalDeclaration) {
      printLexicalDeclaration(node, printer, /* fromForStatement */ true);
    } else {
      printExpression(node, printer, context, node);
    }
  }
}

function printForInStatement(node: ForInStatement, printer: Printer, context: PrinterContext): void {
  printKeyword(node.forKeyword, printer, node, /* addSpace */ true);
  printPunctuator('(', printer, node.forKeyword.end, node, /* addSpace */ false);
  printForBinding(node.initializer, printer, context);
  write(printer, ' ');
  printKeyword(node.inKeyword, printer, node, /* addSpace */ true);
  printExpression(node.expression, printer, context, node);
  printPunctuator(')', printer, node.expression.end, node, /* addSpace */ false);
  printEmbeddedStatement(node.statement, printer, context);
}

function printForOfStatement(node: ForOfStatement, printer: Printer, context: PrinterContext): void {
  printKeyword(node.forKeyword, printer, node, /* addSpace */ true);
  if (node.awaitKeyword) {
    printKeyword(node.awaitKeyword, printer, node, /* addSpace */ true);
  }
  printPunctuator(
    '(',
    printer,
    node.awaitKeyword ? node.awaitKeyword.end : node.forKeyword.end,
    node,
    /* addSpace */ false
  );
  printForBinding(node.initializer, printer, context);
  write(printer, ' ');
  printKeyword(node.ofKeyword, printer, node, /* addSpace */ true);
  printExpression(node.expression, printer, context, node);
  printPunctuator(')', printer, node.expression.end, node, /* addSpace */ false);
  printEmbeddedStatement(node.statement, printer, context);
}

function printWhileStatement(node: any, printer: Printer, context: PrinterContext): void {
  printKeyword(node.whileKeyword, printer, node, /* addSpace */ true);
  printPunctuator('(', printer, node.whileKeyword.end, node, /* addSpace */ false);
  printExpression(node.expression, printer, context, node);
  printPunctuator(')', printer, node.expression.end, node, /* addSpace */ false);
  printEmbeddedStatement(node.statement, printer, context);
}

function printWithStatement(node: any, printer: Printer, context: PrinterContext): void {
  printKeyword(node.withKeyword, printer, node, /* addSpace */ true);
  printPunctuator('(', printer, node.withKeyword.end, node, /* addSpace */ false);
  printExpression(node.expression, printer, context, node);
  printPunctuator(')', printer, node.expression.end, node, /* addSpace */ false);
  printEmbeddedStatement(node.statement, printer, context);
}

function printBlockStatement(node: BlockStatement, printer: Printer, context: PrinterContext): void {
  printBlock(node.block, printer, node);
}

function printBlock(node: Block, printer: Printer, parentNode: BlockStatement): void {
  printStatementList(
    printer,
    node,
    parentNode,
    node.statements,
    (node.flags & NodeFlags.NewLine) === 0 && isEmptyBlock(node, parentNode, printer)
      ? PrinterContext.SpaceBetweenBraces |
          PrinterContext.SpaceBetweenSiblings |
          PrinterContext.SingleLine |
          PrinterContext.Braces
      : PrinterContext.Indented | PrinterContext.MultiLine | PrinterContext.NoSpaceIfEmpty | PrinterContext.Braces
  );
}

function printDoWhileStatement(node: DoWhileStatement, printer: Printer, context: PrinterContext) {
  printKeyword(node.doKeyword, printer, node, /* addSpace */ false);
  printEmbeddedStatement(node.statement, printer, context);
  write(printer, ' ');
  printKeyword(node.whileKeyword, printer, node, /* addSpace */ true);
  printPunctuator('(', printer, node.whileKeyword.end, node, /* addSpace */ false);
  printExpression(node.expression, printer, context, node);
  printPunctuator(')', printer, node.expression.end, node, /* addSpace */ false);
}

function printCatchClause(node: any, printer: Printer, context: PrinterContext) {
  printKeyword(node.catchKeyword, printer, node, /* addSpace */ true);
  if (node.catchParameter) {
    printPunctuator('(', printer, node.block.end, node, /* addSpace */ false);
    printStatement(node.catchParameter, printer, context, node);
    printPunctuator(')', printer, node.catchParameter.end, node, /* addSpace */ false);
  }
  printStatement(node.block, printer, context, node);
}

function printIfStatement(node: IfStatement, printer: Printer, context: PrinterContext): void {
  printKeyword(node.ifKeyword, printer, node, /* addSpace */ true);
  printPunctuator('(', printer, node.ifKeyword.end, node, /* addSpace */ false);
  printExpression(node.expression, printer, context, node);
  printPunctuator(')', printer, node.expression.end, node, /* addSpace */ false);
  printEmbeddedStatement(node.consequent, printer, context);
  if (node.alternate) {
    writeLine(printer);
    printKeyword(node.elseKeyword, printer, node, /* addSpace */ false);
    if (node.alternate.kind === SyntaxKind.IfStatement) {
      write(printer, ' ');
      printStatement(node.alternate, printer, context, node);
    } else {
      printEmbeddedStatement(node.alternate, printer, context);
    }
  }
}

function printEmbeddedStatement(node: SyntaxNode, printer: Printer, context: PrinterContext) {
  if (node.kind === SyntaxKind.BlockStatement) {
    write(printer, ' ');
    printBlockStatement(<BlockStatement>node, printer, context);
  } else {
    writeLine(printer);
    printer.indent++;
    printStatement(node, printer, context, node);
    printer.indent--;
  }
}

function printTryStatement(node: TryStatement, printer: Printer, context: PrinterContext): void {
  printKeyword(node.tryKeyword, printer, node, /* addSpace */ true);
  printStatement(node.block, printer, context, node);
  if (node.catchClause) {
    writeLine(printer);
    printCatchClause(node.catchClause, printer, context);
  }
  if (node.finallyBlock) {
    writeLine(printer);
    printKeyword(node.finallyKeyword, printer, node, /* addSpace */ true);
    printStatement(node.finallyBlock, printer, context, node);
  }
}

function printThrowStatement(node: ThrowStatement, printer: Printer, context: PrinterContext): void {
  printKeyword(node.throwKeyword, printer, node, /* addSpace */ true);
  printExpression(node.expression, printer, context, node);
  write(printer, ';');
}

function printReturnStatement(node: ReturnStatement, printer: Printer, context: PrinterContext): void {
  printKeyword(node.returnKeyword, printer, node, /* addSpace */ false);
  if (node.expression) {
    write(printer, ' ');
    printExpression(node.expression, printer, context, node);
  }
  write(printer, ';');
}

// DebuggerStatement : `debugger` `;
function printDebuggerStatement(node: DebuggerStatement, printer: Printer, context: PrinterContext): void {
  printKeyword(node.debuggerKeyword, printer, node, /* addSpace */ false);
  write(printer, ';');
}

function printLabelledStatement(node: LabelledStatement, printer: Printer, context: PrinterContext): void {
  printStatement(node.label, printer, context, node);
  printKeyword(node.colonToken, printer, node, /* addSpace */ true);
  printStatement(node.statement, printer, context, node);
}

function printBreakStatement(node: BreakStatement, printer: Printer, context: PrinterContext): void {
  printKeyword(node.breakKeyword, printer, node, /* addSpace */ false);
  if (node.label) {
    write(printer, ' ');
    printStatement(node.label, printer, context, node);
  }
  write(printer, ';');
}

function printContinueStatement(node: ContinueStatement, printer: Printer, context: PrinterContext): void {
  printKeyword(node.continueKeyword, printer, node, /* addSpace */ false);
  if (node.label) {
    write(printer, ' ');
    printStatement(node.label, printer, context, node);
  }
  write(printer, ';');
}

function printSwitchStatement(node: SwitchStatement, printer: Printer, context: PrinterContext): void {
  printKeyword(node.switchKeyword, printer, node, /* addSpace */ true);
  printPunctuator('(', printer, node.switchKeyword.end, node, /* addSpace */ false);
  printExpression(node.expression, printer, context, node);
  printPunctuator(')', printer, node.expression.end, node, /* addSpace */ false);
  write(printer, ' ');
  printCaseBlock(node.caseBlock, printer, node);
}

function printCaseBlock(node: CaseBlock, printer: Printer, parentNode: SwitchStatement): void {
  printStatementList(
    printer,
    node,
    parentNode,
    node.clauses as any,
    PrinterContext.Indented | PrinterContext.MultiLine | PrinterContext.Braces
  );
}

function printCaseClause(node: any | any, printer: Printer, context: PrinterContext): void {
  printKeyword(node.caseKeyword, printer, node, /* addSpace */ true);
  printExpression(node.expression, printer, context, node);
  printCaseOrDefaultClauseRest(node, printer, node.statements);
}

function printDefaultClause(node: any, printer: Printer, context: PrinterContext): void {
  printKeyword(node.defaultKeyword, printer, node, /* addSpace */ false);
  printCaseOrDefaultClauseRest(node, printer, node.statements);
}

function printCaseOrDefaultClauseRest(node: any, printer: Printer, statements: any): void {
  if (
    statements.length === 1 &&
    (nodeIsSynthesized(node) ||
      nodeIsSynthesized(statements[0]) ||
      rangeStartPositionsAreOnSameLine(node, statements[0], printer))
  ) {
    printKeyword(node.colonToken, printer, node, /* addSpace */ true);
    printStatementList(
      printer,
      node,
      node,
      statements,
      PrinterContext.Indented |
        PrinterContext.MultiLine |
        PrinterContext.NoTrailingNewLine |
        (PrinterContext.OptionalIfEmpty & ~(PrinterContext.MultiLine | PrinterContext.Indented))
    );
  } else {
    printKeyword(node.colonToken, printer, node, /* addSpace */ true);
    printStatementList(
      printer,
      node,
      node,
      statements,
      PrinterContext.Indented |
        PrinterContext.MultiLine |
        PrinterContext.NoTrailingNewLine |
        PrinterContext.OptionalIfEmpty
    );
  }
}

function printEmptyStatement(_node: any, printer: Printer, context: PrinterContext): void {
  write(printer, ';');
}

function printCommaOperator(node: any, printer: Printer, context: PrinterContext): void {
  printExpressionList(
    printer,
    node,
    node,
    node.expressions,
    PrinterContext.CommaDelimited | PrinterContext.SpaceBetweenSiblings | PrinterContext.SingleLine
  );
}

function printConditionalExpression(node: any, printer: Printer, context: PrinterContext): void {
  printStatement(node.shortCircuit, printer, context, node);
  write(printer, ' ');
  printKeyword(node.questionToken, printer, node, /* addSpace */ true);
  printStatement(node.consequent, printer, context, node);
  write(printer, ' ');
  printKeyword(node.colonToken, printer, node, /* addSpace */ true);
  printStatement(node.alternate, printer, context, node);
}

function printAwaitExpression(node: any, printer: Printer, context: PrinterContext): void {
  printKeyword(node.awaitKeyword, printer, node, /* addSpace */ true);
  printExpression(node.expression, printer, context, node);
}

function printNewExpression(node: any, printer: Printer, context: PrinterContext): void {
  printKeyword(node.newKeyword, printer, node, /* addSpace */ true);
  printExpression(node.expression, printer, context, node);
  if (node.argumentList) {
    printArgumentList(
      node.argumentList,
      node,
      printer,
      PrinterContext.CommaDelimited |
        PrinterContext.SpaceBetweenSiblings |
        PrinterContext.SingleLine |
        PrinterContext.Parenthesis |
        PrinterContext.OptionalIfUndefined
    );
  }
}

function printArgumentList(node: any, parentNode: any, printer: Printer, context: PrinterContext): void {
  if (node.trailingComma) context |= PrinterContext.AllowTrailingComma;
  printExpressionList(printer, node, parentNode, node.elements, context);
}

function printComputedPropertyName(node: ComputedPropertyName, printer: Printer, context: PrinterContext): void {
  printPunctuator('[', printer, node.start, node, /* addSpace */ false);
  write(printer, context & PrinterContext.SingleQuote ? ' ' : '');
  printExpression(node.expression, printer, context, node);
  write(printer, context & PrinterContext.SingleQuote ? ' ' : '');
  printPunctuator(']', printer, node.expression.end, node, /* addSpace */ false);
}

function printCallExpression(node: CallExpression, printer: Printer, context: PrinterContext): void {
  printExpression(node.expression, printer, context, node);
  printArgumentList(
    node.argumentList,
    node,
    printer,
    PrinterContext.CommaDelimited |
      PrinterContext.SpaceBetweenSiblings |
      PrinterContext.SingleLine |
      PrinterContext.Parenthesis
  );
}

function printParenthesizedExpression(node: ParenthesizedExpression, printer: Printer, context: PrinterContext): void {
  printPunctuator('(', printer, node.start, node, /* addSpace */ false);
  printExpression(node.expression, printer, context, node);
  printPunctuator(')', printer, node.expression.end, node, /* addSpace */ false);
}

function printYieldExpression(node: YieldExpression, printer: Printer, context: PrinterContext): void {
  printKeyword(node.yieldKeyword, printer, node, /* addSpace */ true);
  if (node.asteriskToken) printKeyword(node.asteriskToken, printer, node, /* addSpace */ true);
  if (node.expression) {
    write(printer, ' ');
    printExpression(node.expression, printer, context, node);
  }
}

function printPrefixUpdateExpression(node: PrefixUpdateExpression, printer: Printer, context: PrinterContext): void {
  printKeyword(node.operandToken, printer, node, /* addSpace */ false);
  printExpression(node.operand, printer, context, node);
}

function printPostfixUpdateExpression(node: PostfixUpdateExpression, printer: Printer, context: PrinterContext): void {
  printExpression(node.operand, printer, context, node);
  printKeyword(node.operandToken, printer, node, /* addSpace */ false);
}

function printAssignmentExpression(node: AssignmentExpression, printer: Printer, context: PrinterContext): void {
  printExpression(node.left, printer, context, node);
  write(printer, ' ');
  printKeyword(node.operatorToken, printer, node, /* addSpace */ true);
  printExpression(node.right, printer, context, node);
}

function printRegularExpressionLiteral(node: any, printer: Printer, context: PrinterContext): void {
  write(printer, node.text);
}

function printSpreadElement(node: any, printer: Printer, context: PrinterContext): void {
  printKeyword(node.ellipsisToken, printer, node, /* addSpace */ false);
  printExpression(node.argument, printer, context, node);
}

function printBinaryExpression(node: any, printer: Printer, context: PrinterContext): void {
  printExpression(node.left, printer, context, node);
  write(printer, ' ');
  printKeyword(node.operatorToken, printer, node, /* addSpace */ true);
  printExpression(node.right, printer, context, node);
}

function printFunctionDeclarationOrExpression(node: any, printer: Printer, context: PrinterContext): void {
  printKeyword(node.declareKeyword, printer, node, /* addSpace */ true);
  printKeyword(node.asyncKeyword, printer, node, /* addSpace */ true);
  printKeyword(node.functionKeyword, printer, node, /* addSpace */ true);
  printKeyword(node.asteriskToken, printer, node, /* addSpace */ true);
  printExpression(node.name, printer, context, node);
  if (node.typeParameters) {
    printStatement(node.typeParameters, printer, context, node);
    write(printer, ' ');
  }
  printFormalParameterList(node.formalParameterList, printer, node);
  if (node.returnType) {
    printPunctuator(':', printer, node.formalParameterList.end, node, /* addSpace */ true);
    printStatement(node.returnType, printer, context, node);
  }
  write(printer, ' ');
  printFunctionBody(node.contents, printer, context);
}

function printFunctionBody(node: any, printer: Printer, context: PrinterContext): void {
  if (node) {
    printPunctuator('{', printer, node.start, node, /* addSpace */ false);
    printer.indent++;
    printFunctioBody(node.functionStatementList, printer, node);
    printer.indent--;
    printPunctuator('}', printer, node.functionStatementList.end, node, /* addSpace */ false);
  }
}

function printFunctioBody(node: any, printer: Printer, parentNode: any): void {
  const { directives, statements } = node;
  if (directives.length !== 0) {
    printer.indent--;
    printPrologueDirectives(printer, directives, node, /*startWithNewLine */ true);
    printer.indent++;
    writeLine(printer);
  }

  if (shouldprintBlockFunctionBodyOnSingleLine(printer, parentNode, node)) {
    printer.indent--;
    printStatementList(
      printer,
      node,
      parentNode,
      statements,
      PrinterContext.SingleLine |
        PrinterContext.SpaceBetweenSiblings |
        PrinterContext.SpaceBetweenBraces |
        PrinterContext.NoSpaceIfEmpty
    );
    printer.indent++;
  } else {
    printStatementList(printer, node, parentNode, statements, PrinterContext.MultiLine);
  }

  printDetachedCommentsAndUpdateCommentsInfo(parentNode, printer);
  //printLeadingComments(printer, end);
  if (printer.hasWrittenComment && !printer.lineStart) writeLine(printer);
  return;
}

function printTypeAnnotation(node: any, printer: Printer, context: PrinterContext): void {
  printKeyword(node.bitwiseOrToken, printer, node, /* addSpace */ true);
  printKeyword(node.bitwiseAndToken, printer, node, /* addSpace */ true);
  printStatement(node.type, printer, context, node);
}

function printFormalParameterList(node: any, printer: Printer, parentNode: any): void {
  printStatementList(
    printer,
    node,
    parentNode,
    node.formalParameters,
    node.trailingComma
      ? PrinterContext.CommaDelimited |
          PrinterContext.SpaceBetweenSiblings |
          PrinterContext.SingleLine |
          PrinterContext.Indented |
          PrinterContext.Parenthesis |
          PrinterContext.AllowTrailingComma
      : PrinterContext.CommaDelimited |
          PrinterContext.SpaceBetweenSiblings |
          PrinterContext.SingleLine |
          PrinterContext.Indented |
          PrinterContext.Parenthesis
  );
}

function printBindingElement(node: any, printer: Printer, context: PrinterContext): void {
  printKeyword(node.ellipsisToken, printer, node, /* addSpace */ false);
  printStatement(node.left, printer, context, node);
  printKeyword(node.optionalToken, printer, node, /* addSpace */ false);

  if (node.type) {
    printPunctuator(':', printer, node.left.end, node, /* addSpace */ true);
    printStatement(node.type, printer, context, node);
  }
  if (node.right) {
    write(printer, ' ');
    printPunctuator('=', printer, node.type ? node.type.end : node.left.end, node, /* addSpace */ true);
    printStatement(node.right, printer, context, node);
  }
}

function printObjectLiteral(node: any, printer: Printer, context: PrinterContext): void {
  printPropertyDefinitionList(node.propertyList, printer, node);
}

function printPropertyDefinitionList(node: any, printer: Printer, parentNode: any): void {
  printExpressionList(
    printer,
    node,
    parentNode,
    node.properties,
    PrinterContext.PreserveLines |
      PrinterContext.CommaDelimited |
      PrinterContext.SpaceBetweenSiblings |
      PrinterContext.SpaceBetweenBraces |
      PrinterContext.Indented |
      PrinterContext.Braces |
      PrinterContext.NoSpaceIfEmpty |
      (node.trailingComma ? PrinterContext.AllowTrailingComma : PrinterContext.None) |
      (node.flags & NodeFlags.NewLine ? PrinterContext.PreferNewLine : PrinterContext.None)
  );
}

function printPropertyDefinition(node: any, printer: Printer, context: PrinterContext): void {
  printExpression(node.left, printer, context, node);
  write(printer, ' ');
  printPunctuator(':', printer, node.left.end, node, /* addSpace */ true);
  printExpression(node.right, printer, context, node);
}

function printCoverInitializedName(node: any, printer: Printer, context: PrinterContext): void {
  printExpression(node.left, printer, context, node);
  write(printer, ' ');
  printPunctuator('=', printer, node.left.end, node, /* addSpace */ true);
  printExpression(node.right, printer, context, node);
}

function printPropertyMethod(node: PropertyMethod, printer: Printer, context: PrinterContext): void {
  printKeyword(node.asyncKeyword, printer, node, /* addSpace */ true);
  printKeyword(node.asteriskToken, printer, node, /* addSpace */ true);
  printKeyword(node.getKeyword, printer, node, /* addSpace */ true);
  printKeyword(node.setKeyword, printer, node, /* addSpace */ true);
  printExpression(node.method, printer, context, node);
}

function printMethodDefinition(node: MethodDefinition, printer: Printer, context: PrinterContext): void {
  printExpression(node.name, printer, context, node);
  printStatement(node.typeParameters as TypeParameterDeclaration, printer, context, node);
  printFormalParameterList(node.formalParameterList, printer, node);
  if (node.returnType) {
    printPunctuator(':', printer, node.formalParameterList.end, node, /* addSpace */ true);
    printStatement(node.returnType, printer, context, node);
  }
  write(printer, ' ');
  printFunctionBody(node.contents, printer, context);
}

function emitArrayBindingPattern(node: any, printer: Printer, context: PrinterContext): void {
  printerBindingElementList(node.elementList, printer, node);
}

function printerBindingElementList(node: any, printer: Printer, parentNode: any): void {
  printStatementList(
    printer,
    node,
    parentNode,
    node.elements,
    PrinterContext.SingleLine |
      PrinterContext.SquareBrackets |
      (node.trailingComma ? PrinterContext.AllowTrailingComma : PrinterContext.None) |
      PrinterContext.CommaDelimited |
      PrinterContext.SpaceBetweenSiblings
  );
}

function printObjectBindingPattern(node: any, printer: Printer, context: PrinterContext): void {
  printPunctuator('{', printer, node.start, node, /* addSpace */ false);
  printBindingPropertyList(node.propertyList, printer, node);
  printPunctuator('}', printer, node.propertyList.end, node, /* addSpace */ false);
}

function printBindingPropertyList(node: any, printer: Printer, parentNode: any): void {
  printStatementList(
    printer,
    node,
    parentNode,
    node.properties,
    (node.trailingComma ? PrinterContext.AllowTrailingComma : PrinterContext.None) |
      ((node.flags & NodeFlags.NewLine) === 0 && isEmptyProperties(node, printer)
        ? PrinterContext.SingleLine |
          PrinterContext.SpaceBetweenBraces |
          PrinterContext.CommaDelimited |
          PrinterContext.SpaceBetweenSiblings
        : PrinterContext.CommaDelimited | PrinterContext.MultiLine | PrinterContext.Indented)
  );
}

function printBindingProperty(node: any, printer: Printer, context: PrinterContext): void {
  printKeyword(node.ellipsisToken, printer, node, /* addSpace */ false);
  printExpression(node.key, printer, context, node);
  printPunctuator(':', printer, node.key.end, node, /* addSpace */ true);
  printStatement(node.value, printer, context, node);
  printInitializer(node.initializer as any, printer, context, node.value.end, node);
}

function printArrowParameterList(node: any, printer: Printer, parentNode: any): void {
  printStatementList(
    printer,
    node,
    parentNode,
    node.parameters,
    PrinterContext.CommaDelimited |
      PrinterContext.SpaceBetweenSiblings |
      PrinterContext.SingleLine |
      PrinterContext.Indented |
      PrinterContext.Parenthesis
  );
}

function printArrowFunction(node: any, printer: Printer, context: PrinterContext): void {
  printKeyword(node.asyncKeyword, printer, node, /* addSpace */ true);
  if (node.typeParameters) printStatement(node.typeParameters, printer, context, node);
  node.arrowPatameterList.kind === SyntaxKind.ArrowPatameterList
    ? printArrowParameterList(node.arrowPatameterList, printer, node)
    : printStatement(node.arrowPatameterList, printer, context, node);

  write(printer, ' ');
  printKeyword(node.arrowToken, printer, node, /* addSpace */ true);

  if (node.contents.kind === SyntaxKind.FunctionBody) {
    printFunctionBody(node.contents, printer, context);
  } else {
    printStatement(node.contents, printer, context, node);
  }
}

function printClassExpressionOrDeclaration(node: any, printer: Printer, context: PrinterContext): void {
  printKeyword(node.declareKeyword, printer, node, /* addSpace */ true);
  if (node.decorators) {
    printDecoratorList(node.decorators, printer, node);
  }

  printKeyword(node.classKeyword, printer, node, /* addSpace */ true);
  printStatement(node.name, printer, context, node);
  if (node.typeParameters) {
    printStatement(node.typeParameters, printer, context, node);
  }
  write(printer, ' ');
  printStatement(node.tail, printer, context, node);
}

function printTail(node: any, printer: Printer, context: PrinterContext): void {
  if (node.classHeritage) {
    printStatement(node.classHeritage, printer, context, node);
  }

  if (node.flags & NodeFlags.Declared) {
    printObjectType(node.body, printer, node);
  } else {
    printPunctuator('{', printer, node.start, node, /* addSpace */ false);
    printClassBody(node.body, printer, node);
    printPunctuator('}', printer, node.body.end, node, /* addSpace */ false);
  }
}

function printClassHeritage(node: any, printer: Printer, context: PrinterContext): void {
  printKeyword(node.extendsKeyword, printer, node, /* addSpace */ true);
  printExpression(node.expression, printer, context, node);
  if (node.typeParameter) {
    printStatement(node.typeParameter, printer, context, node);
  }
  write(printer, ' ');
}

function printClassBody(node: any, printer: Printer, parentNode: SyntaxNode): void {
  printStatementList(printer, node, parentNode, node.elements, PrinterContext.Indented | PrinterContext.MultiLine);
}

function printClassElement(node: any, printer: Printer, context: PrinterContext): void {
  printKeyword(node.declareToken, printer, node, /* addSpace */ true);

  if (node.decorators) {
    printDecoratorList(node.decorators, printer, node);
  }
  printKeyword(node.staticKeyword, printer, node, /* addSpace */ true);
  printKeyword(node.asyncKeyword, printer, node, /* addSpace */ true);
  printKeyword(node.setKeyword, printer, node, /* addSpace */ true);
  printKeyword(node.getKeyword, printer, node, /* addSpace */ true);
  printKeyword(node.asteriskToken, printer, node, /* addSpace */ true);
  printExpression(node.method, printer, context, node);
}

function printFieldDefinition(node: any, printer: Printer, context: PrinterContext): void {
  if (node.decorators) {
    printDecoratorList(node.decorators, printer, node);
  }

  printKeyword(node.declaredToken, printer, node, /* addSpace */ true);
  printKeyword(node.staticKeyword, printer, node, /* addSpace */ true);
  printKeyword(node.asyncKeyword, printer, node, /* addSpace */ true);
  printExpression(node.key, printer, context, node);
  printKeyword(node.optionalToken, printer, node, /* addSpace */ false);

  if (node.type) {
    printPunctuator(
      ':',
      printer,
      node.optionalToken ? node.optionalToken.end : node.key.end,
      node,
      /* addSpace */ true
    );
    printStatement(node.type, printer, context, node);
  }
  printInitializer(
    node.initializer as any,
    printer,
    context,
    node.type ? node.type.end : node.optionalToken ? node.optionalToken.end : node.key.end,
    node
  );
}

function printBigIntLiteral(node: any, printer: Printer, context: PrinterContext): void {
  return printNumericLiteral(<any>node, printer, context);
}

function printIndexExpression(node: any, printer: Printer, context: PrinterContext): void {
  printStatement(node.member, printer, context, node);
  if (
    node.flags & NodeFlags.FloatingPointLiteral &&
    // check if numeric literal is a decimal literal that was originally written with a dot
    printer.source.indexOf('.')
  ) {
    write(printer, '.');
  }
  printPunctuator('.', printer, node.member.end, node, /* addSpace */ false);
  printStatement(node.expression, printer, context, node);
}

function printMemberAccessExpression(node: MemberAccessExpression, printer: Printer, context: PrinterContext): void {
  printStatement(node.member, printer, context, node);
  printPunctuator('[', printer, node.member.end, node, /* addSpace */ false);
  printStatement(node.expression, printer, context, node);
  printPunctuator(']', printer, node.expression.end, node, /* addSpace */ false);
}

function printArrayType(node: ArrayType, printer: Printer, context: PrinterContext): void {
  printStatement(node.type, printer, context, node);
  write(printer, '[');
  write(printer, ']');
}

function printArrowFunctionType(node: ArrowFunctionType, printer: Printer, context: PrinterContext): void {
  if (node.typeParameters) {
    printStatement(node.typeParameters, printer, context, node);
  }
  write(printer, '(');
  printStatement(node.arrowTypeParameterList, printer, context, node);
  printPunctuator(')', printer, node.arrowTypeParameterList.end, node, /* addSpace */ true);
  printKeyword(node.arrowToken, printer, node, /* addSpace */ true);
  printStatement(node.returnType, printer, context, node);
}

function printArrowTypeParameterList(node: ArrowTypeParameterList, printer: Printer, context: PrinterContext): void {
  printStatementList(
    printer,
    node,
    node,
    node.parameters as ArrowTypeParameter[],
    PrinterContext.CommaDelimited |
      PrinterContext.SpaceBetweenSiblings |
      PrinterContext.SingleLine |
      PrinterContext.Indented |
      (PrinterContext.Parenthesis & ~PrinterContext.Parenthesis) |
      (node.trailingComma ? PrinterContext.AllowTrailingComma : PrinterContext.None)
  );
}

function printArrowTypeParameter(node: ArrowTypeParameter, printer: Printer, context: PrinterContext): void {
  printKeyword(node.ellipsisToken, printer, node, /* addSpace */ false);
  if (node.name) {
    printStatement(node.name, printer, context, node);
  }
  printKeyword(node.optionalToken, printer, node, /* addSpace */ false);
  if (node.types) {
    if (node.name) {
      printPunctuator(
        ':',
        printer,
        node.name ? node.name.end : node.optionalToken ? node.optionalToken.end : node.start,
        node,
        /* addSpace */ true
      );
    }
    printStatement(node.types, printer, context, node);
  }
}

function printBigIntType(node: BigIntType, printer: Printer, context: PrinterContext): void {
  return printNumericLiteral(node, printer, context);
}

function printFunctionTypeParameterList(
  node: FunctionTypeParameterList,
  printer: Printer,
  context: PrinterContext
): void {
  printStatementList(
    printer,
    node,
    node,
    node.parameters as FunctionTypeParameter[],
    PrinterContext.CommaDelimited |
      PrinterContext.SpaceBetweenSiblings |
      PrinterContext.SingleLine |
      PrinterContext.Indented |
      (PrinterContext.Parenthesis & ~PrinterContext.Parenthesis) |
      (node.trailingComma ? PrinterContext.AllowTrailingComma : PrinterContext.None)
  );
}

function printFunctionTypeParameter(node: FunctionTypeParameter, printer: Printer, context: PrinterContext): void {
  printKeyword(node.ellipsisToken, printer, node, /* addSpace */ false);
  if (node.name) {
    printStatement(node.name, printer, context, node);
  }
  printKeyword(node.optionalToken, printer, node, /* addSpace */ false);
  if (node.types) {
    if (node.name) {
      printPunctuator(
        ':',
        printer,
        node.name ? node.name.end : node.optionalToken ? node.optionalToken.end : node.start,
        node,
        /* addSpace */ true
      );
    }
    printStatement(node.types, printer, context, node);
  }
}

function printFunctionType(node: FunctionType, printer: Printer, context: PrinterContext): void {
  if (node.typeParameters) {
    printStatement(node.typeParameters, printer, context, node);
    write(printer, ' ');
  }
  write(printer, '(');
  printStatement(node.functionTypeParameterList, printer, context, node);
  printPunctuator(')', printer, node.functionTypeParameterList.end, node, /* addSpace */ false);
  if (node.returnType) {
    printPunctuator(':', printer, node.functionTypeParameterList.end, node, /* addSpace */ true);
    printStatement(node.returnType, printer, context, node);
  }
}

function printIndexedAccessType(node: IndexedAccessType, printer: Printer, context: PrinterContext): void {
  printStatement(node.objectType, printer, context, node);
  printPunctuator('[', printer, node.objectType.end, node, /* addSpace */ true);
  printStatement(node.indexType, printer, context, node);
  printPunctuator(']', printer, node.indexType.end, node, /* addSpace */ false);
}

function printIntersectionType(node: IntersectionType, printer: Printer, context: PrinterContext): void {
  printStatementList(
    printer,
    node,
    node,
    node.types as TypeNode[],
    PrinterContext.AmpersandDelimited | PrinterContext.SpaceBetweenSiblings | PrinterContext.SingleLine
  );
}

function printNullableType(node: NullableType, printer: Printer, context: PrinterContext): void {
  printKeyword(node.nullableToken, printer, node, /* addSpace */ false);
  printStatement(node.type, printer, context, node);
}

function printObjectTypeCallProperty(node: ObjectTypeCallProperty, printer: Printer, context: PrinterContext): void {
  printKeyword(node.protoKeyword, printer, node, /* addSpace */ true);
  printKeyword(node.staticKeyword, printer, node, /* addSpace */ true);
  if (node.typeParameter) {
    printStatement(node.typeParameter, printer, context, node);
    write(printer, ' ');
  }
  write(printer, '(');
  printStatement(node.value, printer, context, node);
  const pos = printPunctuator(')', printer, node.value.end, node, /* addSpace */ false);
  if (node.returnType) {
    printPunctuator(':', printer, pos, node, /* addSpace */ true);
    printStatement(node.returnType, printer, context, node);
  }
}

function printObjectTypeIndexer(node: ObjectTypeIndexer, printer: Printer, context: PrinterContext): void {
  printKeyword(node.protoKeyword, printer, node, /* addSpace */ true);
  printKeyword(node.staticKeyword, printer, node, /* addSpace */ true);
  write(printer, '[');
  printStatement(node.name as any, printer, context, node);
  printStatement(node.key, printer, context, node);
  printPunctuator(']', printer, node.key.end, node, /* addSpace */ false);
  printPunctuator(':', printer, node.key.end, node, /* addSpace */ true);
  write(printer, ' ');
  printStatement(node.type, printer, context, node);
}

function printObjectTypeInternalSlot(node: ObjectTypeInternalSlot, printer: Printer, context: PrinterContext): void {
  printKeyword(node.protoKeyword, printer, node, /* addSpace */ true);
  printKeyword(node.staticKeyword, printer, node, /* addSpace */ true);
  let pos = printPunctuator(
    '[',
    printer,
    node.protoKeyword ? node.protoKeyword.end : node.staticKeyword ? node.staticKeyword.end : node.start,
    node,
    /* addSpace */ true
  );
  printPunctuator('[', printer, pos, node, /* addSpace */ false);
  printStatement(node.name, printer, context, node);
  pos = printPunctuator(']', printer, node.name.end, node, /* addSpace */ false);
  printPunctuator(']', printer, pos, node, /* addSpace */ false);
  printKeyword(node.optionalToken, printer, node, /* addSpace */ false);
  printStatement(node.type, printer, context, node);
}

function printObjectTypeProperty(node: ObjectTypeProperty, printer: Printer, context: PrinterContext): void {
  printKeyword(node.protoKeyword, printer, node, /* addSpace */ true);
  printKeyword(node.staticKeyword, printer, node, /* addSpace */ true);
  printStatement(node.key, printer, context, node);
  printKeyword(node.optionalToken, printer, node, /* addSpace */ false);
  if (node.type.kind === SyntaxKind.FunctionType) {
    printStatement(node.type, printer, context, node);
  } else {
    printPunctuator(
      ':',
      printer,
      node.optionalToken ? node.optionalToken.end : node.key.end,
      node,
      /* addSpace */ true
    );
    printStatement(node.type, printer, context, node);
  }
}

function printObjectTypeSpreadProperty(
  node: ObjectTypeSpreadProperty,
  printer: Printer,
  context: PrinterContext
): void {
  printKeyword(node.protoKeyword, printer, node, /* addSpace */ true);
  printKeyword(node.staticKeyword, printer, node, /* addSpace */ true);
  printKeyword(node.ellipsisToken, printer, node, /* addSpace */ false);
  printStatement(node.type, printer, context, node);
}

function printObjectType(node: ObjectType, printer: Printer, parentNode: SyntaxNode): void {
  let flags =
    parentNode.flags & NodeFlags.NewLine || node.properties.length > 3
      ? PrinterContext.MultiLine |
        PrinterContext.Indented |
        PrinterContext.OptionalIfEmpty |
        PrinterContext.NoSpaceIfEmpty |
        PrinterContext.CommaDelimited |
        PrinterContext.Braces
      : PrinterContext.SingleLine |
        PrinterContext.SpaceBetweenBraces |
        PrinterContext.SpaceBetweenSiblings |
        PrinterContext.NoSpaceIfEmpty |
        PrinterContext.CommaDelimited |
        PrinterContext.Braces;
  if (node.trailingComma) flags |= PrinterContext.AllowTrailingComma;
  printStatementList(printer, node, parentNode, node.properties, flags);
}

function printOpaqueType(node: OpaqueType, printer: Printer, context: PrinterContext): void {
  if (node.declareToken) {
    printKeyword(node.declareToken, printer, node, /* addSpace */ true);
    printKeyword(node.opaqueToken, printer, node, /* addSpace */ false);
  } else {
    printKeyword(node.opaqueToken, printer, node, /* addSpace */ true);

    printKeyword(node.typeToken, printer, node, /* addSpace */ true);
    printStatement(node.name, printer, context, node);
    if (node.typeParameters) {
      printStatement(node.typeParameters, printer, context, node);
    }
    if (node.superType) {
      write(printer, ':');
      write(printer, ' ');
      printStatement(node.superType, printer, context, node);
    }
    write(printer, ' ');
    printPunctuator('=', printer, node.superType ? node.superType.end : node.name.end, node, /* addSpace */ true);
    printStatement(node.impltype as TypeNode, printer, context, node);
  }
}

function printOptionalIndexedAccess(node: OptionalIndexedAccess, printer: Printer, context: PrinterContext): void {
  printStatement(node.objectType, printer, context, node);
  printKeyword(node.optionalIndexedToken, printer, node, /* addSpace */ false);
  printPunctuator('[', printer, node.optionalIndexedToken.end, node, /* addSpace */ false);
  printStatement(node.indexType, printer, context, node);
  printPunctuator(']', printer, node.indexType.end, node, /* addSpace */ false);
}

function printOptionalType(node: OptionalType, printer: Printer, context: PrinterContext): void {
  printStatement(node.type, printer, context, node);
  printKeyword(node.optionalToken, printer, node, /* addSpace */ false);
}

function printParenthesizedType(node: ParenthesizedType, printer: Printer, context: PrinterContext): void {
  printPunctuator('(', printer, node.start, node, /* addSpace */ false);
  printStatement(node.type, printer, context, node);
  printPunctuator(')', printer, node.type.end, node, /* addSpace */ false);
}

function printQualifiedType(node: QualifiedType, printer: Printer, context: PrinterContext): void {
  printStatement(node.qualification, printer, context, node);
  write(printer, '.');
  printStatement(node.name, printer, context, node);
}

function printRestType(node: RestType, printer: Printer, context: PrinterContext): void {
  printKeyword(node.ellipsisToken, printer, node, /* addSpace */ false);
  printStatement(node.type, printer, context, node);
}

function printStringType(node: StringType, printer: Printer, context: PrinterContext): void {
  return printStringLiteral(<StringLiteral>node, printer, context);
}
function printSubtractionType(node: SubtractionType, printer: Printer, context: PrinterContext): void {
  printKeyword(node.subtractionToken, printer, node, /* addSpace */ false);
  return printNumericLiteral(<any>node, printer, context);
}

function printTupleType(node: TupleType, printer: Printer, context: PrinterContext): void {
  write(printer, '[');
  printStatementList(
    printer,
    node,
    node,
    node.elementTypes,
    node.trailingComma
      ? PrinterContext.CommaDelimited |
          PrinterContext.SpaceBetweenSiblings |
          PrinterContext.SingleLine |
          PrinterContext.AllowTrailingComma |
          PrinterContext.SquareBrackets
      : PrinterContext.CommaDelimited |
          PrinterContext.SpaceBetweenSiblings |
          PrinterContext.SingleLine |
          PrinterContext.SquareBrackets
  );
  write(printer, ']');
}

function printTypeAlias(node: any, printer: Printer, context: PrinterContext): void {
  printKeyword(node.declareToken, printer, node, /* addSpace */ true);
  printKeyword(node.typeToken, printer, node, /* addSpace */ true);
  printStatement(node.name, printer, context, node);
  if (node.typeParameters) {
    printStatement(node.typeParameters, printer, context, node);
  }
  write(printer, ' ');
  printKeyword(node.assignToken, printer, node, /* addSpace */ true);
  printStatement(node.type, printer, context, node);
}

function printTypeInstantiations(node: TypeInstantiations, printer: Printer, context: PrinterContext): void {
  printStatementList(
    printer,
    node,
    node,
    node.types,
    node.trailingComma
      ? PrinterContext.CommaDelimited |
          PrinterContext.SpaceBetweenSiblings |
          PrinterContext.SingleLine |
          PrinterContext.Indented |
          PrinterContext.AngleBrackets |
          PrinterContext.OptionalIfUndefined |
          PrinterContext.OptionalIfEmpty |
          PrinterContext.AllowTrailingComma
      : PrinterContext.CommaDelimited |
          PrinterContext.SpaceBetweenSiblings |
          PrinterContext.SingleLine |
          PrinterContext.Indented |
          PrinterContext.AngleBrackets |
          PrinterContext.OptionalIfUndefined |
          PrinterContext.OptionalIfEmpty
  );
}

function printTypeParameterDeclaration(
  node: TypeParameterDeclaration,
  printer: Printer,
  context: PrinterContext
): void {
  printStatement(node.declarations, printer, context, node);
}

function printTypeParameterInstantiation(
  node: TypeParameterInstantiation,
  printer: Printer,
  context: PrinterContext
): void {
  printStatement(node.typeInstantiations, printer, context, node);
}

function printTypeParameterList(node: TypeParameterList, printer: Printer, context: PrinterContext): void {
  printStatementList(
    printer,
    node,
    node,
    node.parameters,
    node.trailingComma
      ? PrinterContext.CommaDelimited |
          PrinterContext.SpaceBetweenSiblings |
          PrinterContext.SingleLine |
          PrinterContext.Indented |
          PrinterContext.AngleBrackets |
          PrinterContext.OptionalIfUndefined |
          PrinterContext.OptionalIfEmpty |
          PrinterContext.AllowTrailingComma
      : PrinterContext.CommaDelimited |
          PrinterContext.SpaceBetweenSiblings |
          PrinterContext.SingleLine |
          PrinterContext.Indented |
          PrinterContext.AngleBrackets |
          PrinterContext.OptionalIfUndefined |
          PrinterContext.OptionalIfEmpty
  );
}

function printTypeParameter(node: TypeParameter, printer: Printer, context: PrinterContext): void {
  printStatement(node.name, printer, context, node);
  if (node.type) {
    write(printer, ':');
    write(printer, ' ');
    printStatement(node.type, printer, context, node);
  }

  if (node.assignToken) {
    printKeyword(node.assignToken, printer, node, /* addSpace */ true);
    printStatement(node.defaultType as TypeNode, printer, context, node);
  }
}

function printTypeReference(node: TypeReference, printer: Printer, context: PrinterContext): void {
  printStatement(node.typeName, printer, context, node);
  if (node.typeParameters) {
    printStatement(node.typeParameters, printer, context, node);
  }
}

function printTypeofType(node: TypeofType, printer: Printer, context: PrinterContext): void {
  printKeyword(node.typeOfKeyword, printer, node, /* addSpace */ true);
  printStatement(node.type, printer, context, node);
}

function printUnionType(node: UnionType, printer: Printer, context: PrinterContext): void {
  printStatementList(
    printer,
    node,
    node,
    node.types as TypeNode[],
    PrinterContext.BarDelimited | PrinterContext.SpaceBetweenSiblings | PrinterContext.SingleLine
  );
}

function printImportCall(node: ImportCall, printer: Printer, context: PrinterContext): void {
  printKeyword(node.importKeyword, printer, node, /* addSpace */ false);
  printPunctuator('(', printer, node.importKeyword.end, node, /* addSpace */ false);
  printExpression(node.expression, printer, context, node);
  printPunctuator(')', printer, node.expression.end, node, /* addSpace */ false);
}

function printImportMeta(node: any, printer: Printer, context: PrinterContext): void {
  printKeyword(node.importKeyword, printer, node, /* addSpace */ false);
  printPunctuator('.', printer, node.importKeyword.end, node, /* addSpace */ false);
  printKeyword(node.metaIdentifier, printer, node, /* addSpace */ false);
}

function printOptionalExpression(node: any, printer: Printer, context: PrinterContext): void {
  printExpression(node.member, printer, context, node);
  printKeyword(node.chainToken, printer, node, /* addSpace */ false);
  printExpression(node.chain, printer, context, node);
}

function printOptionalChain(node: any, printer: Printer, context: PrinterContext): void {
  printStatement(node.chain, printer, context, node);
}

function printCallChain(node: any, printer: Printer, context: PrinterContext): void {
  if (node.chain) printExpression(node.chain, printer, context, node);
  if (node.typeArguments) {
    printStatement(node.typeArguments, printer, context, node);
  }
  printArgumentList(
    node.argumentList,
    node,
    printer,
    PrinterContext.CommaDelimited |
      PrinterContext.SpaceBetweenSiblings |
      PrinterContext.SingleLine |
      PrinterContext.Parenthesis
  );
}

function printIndexExpressionChain(node: any, printer: Printer, context: PrinterContext): void {
  if (node.chain) {
    printStatement(node.chain, printer, context, node);
  }
  printStatement(node.expression, printer, context, node);
}

function printMemberAccessChain(node: any, printer: Printer, context: PrinterContext): void {
  if (node.chain) {
    printStatement(node.chain, printer, context, node);
  }
  printPunctuator('[', printer, node.chain ? node.chain.end : node.start, node, /* addSpace */ false);
  printExpression(node.expression, printer, context, node);
  printPunctuator(']', printer, node.expression.end, node, /* addSpace */ false);
}

export function shouldprintWhitespaceBeforeOperand(node: any): boolean {
  const { operand, operandToken } = node;
  return (
    operandToken.kind === SyntaxKind.VoidKeyword ||
    operandToken.kind === SyntaxKind.DeleteKeyword ||
    operandToken.kind === SyntaxKind.InKeyword ||
    operandToken.kind === SyntaxKind.TypeofKeyword ||
    (operandToken.kind === SyntaxKind.PrefixUpdateExpression &&
      ((node.operandToken.kind === SyntaxKind.Add &&
        (operand.operandToken.kind === SyntaxKind.Add || operand.operandToken.kind === SyntaxKind.Increment)) ||
        (node.operandToken.kind === SyntaxKind.Subtract &&
          (operand.operandToken.kind === SyntaxKind.Subtract || operand.operandToken.kind === SyntaxKind.Decrement))))
  );
}

function printUnaryExpression(node: any, printer: Printer, context: PrinterContext): void {
  printKeyword(node.operandToken, printer, node, /* addSpace */ true);
  if (shouldprintWhitespaceBeforeOperand(node)) {
    write(printer, ' ');
  }
  printExpression(node.operand, printer, context, node);
}

function printDecoratorList(node: any, printer: Printer, parentNode: SyntaxNode): any {
  printStatementList(
    printer,
    node,
    parentNode,
    node.elements,
    PrinterContext.MultiLine | PrinterContext.OptionalIfUndefined | PrinterContext.OptionalIfEmpty
  );
}

function printDecorator(node: any, printer: Printer, context: PrinterContext): any {
  printKeyword(node.decoratorToken, printer, node, /* addSpace */ false);
  printExpression(node.expression, printer, context, node);
}

function printTaggedTemplate(node: any, printer: Printer, context: PrinterContext): void {
  printStatement(node.member, printer, context, node);
  printStatement(node.template, printer, context, node);
}

function printTemplateExpression(node: any, printer: Printer, context: PrinterContext): void {
  write(printer, '`');
  printStatementList(printer, node, node, node.spans, PrinterContext.SingleLine | PrinterContext.NoInterveningComments);
  printStatement(node.tail, printer, context, node);
  write(printer, '`');
}

function printTemplateSpan(node: any, printer: Printer, context: PrinterContext): void {
  write(printer, node.rawText);
  const pos = printPunctuator('$', printer, node.start, node, /* addSpace */ false);
  printPunctuator('{', printer, pos, node, /* addSpace */ false);
  printExpression(node.expression, printer, context, node);
  printPunctuator('}', printer, node.expression.end, node, /* addSpace */ false);
}

function printTemplateTail(node: any, printer: Printer, context: PrinterContext): void {
  node.flags & NodeFlags.TemplateLiteral ? write(printer, '`' + node.rawText + '`') : write(printer, node.rawText);
}

function printImportSpecifier(node: any, printer: Printer, context: PrinterContext): void {
  if (node.name) {
    printExpression(node.name, printer, context, node);
  }
  if (node.moduleExportName) {
    printExpression(node.moduleExportName, printer, context, node);
  }
  if (node.typeKeyword) {
    write(printer, ' ');
    printKeyword(node.typeKeyword, printer, node, /* addSpace */ true);
  }
  if (node.asKeyword) {
    write(printer, ' ');
    printKeyword(node.asKeyword, printer, node, /* addSpace */ true);
  }
  write(printer, ' ');
  printExpression(node.binding, printer, context, node);
}

function printNamedImports(node: any, printer: Printer, context: PrinterContext): void {
  printExportsImportsList(node.importsList, printer, context);
}

function printExportsImportsList(node: any, printer: Printer, context: PrinterContext): void {
  printStatementList(
    printer,
    node,
    node,
    node.specifiers,
    PrinterContext.CommaDelimited |
      PrinterContext.SpaceBetweenSiblings |
      PrinterContext.AllowTrailingComma |
      PrinterContext.SingleLine |
      PrinterContext.SpaceBetweenBraces |
      PrinterContext.Braces
  );
}

function printNameSpaceImport(node: any, printer: Printer, context: PrinterContext): void {
  printKeyword(node.asteriskToken, printer, node, /* addSpace */ true);
  printStatement(node.binding, printer, context, node);
}

function printImportClause(node: any, printer: Printer, context: PrinterContext): void {
  if (node.defaultBinding) {
    printStatement(node.defaultBinding, printer, context, node);
  }
  if (node.nameSpaceImport) {
    write(printer, ' ');
    printStatement(node.nameSpaceImport, printer, context, node);
  }
  if (node.namedImports) {
    printStatement(node.namedImports, printer, context, node);
  }
}

function printFromClause(node: any, printer: Printer, context: PrinterContext): void {
  if (node) {
    write(printer, ' ');
    printKeyword(node.fromKeyword, printer, node, /* addSpace */ true);
    printStatement(node.from, printer, context, node);
  }
}

function printImportDeclaration(node: any, printer: Printer, context: PrinterContext): void {
  printKeyword(node.importKeyword, printer, node, /* addSpace */ true);
  printKeyword(node.typeKeyword, printer, node, /* addSpace */ true);
  printKeyword(node.typeofKeyword, printer, node, /* addSpace */ true);
  if (node.importClause) {
    printStatement(node.importClause, printer, context, node);
  }

  if (node.fromClause) {
    printStatement(node.fromClause, printer, context, node);
  }
  if (node.moduleSpecifier) {
    printStatement(node.moduleSpecifier, printer, context, node);
  }

  write(printer, ';');
}

function printExportDefault(node: any, printer: Printer, context: PrinterContext): void {
  printKeyword(node.exportKeyword, printer, node, /* addSpace */ true);
  printKeyword(node.defaultKeyword, printer, node, /* addSpace */ true);
  printStatement(node.declaration, printer, context, node);
  write(printer, ';');
}

function printExportFromClause(node: any, printer: Printer, context: PrinterContext): void {
  printKeyword(node.asteriskToken, printer, node, /* addSpace */ true);
  if (node.asKeyword) {
    printKeyword(node.asKeyword, printer, node, /* addSpace */ true);
    printStatement(node.moduleExportName, printer, context, node);
    printStatement(node.namedBinding, printer, context, node);
  }
}

function printExportDeclaration(node: any, printer: Printer, context: PrinterContext): void {
  printKeyword(node.exportKeyword, printer, node, /* addSpace */ true);
  if (node.declaration) {
    printStatement(node.declaration, printer, context, node);
  }
  if (node.exportFromClause) {
    printStatement(node.exportFromClause, printer, context, node);
  }
  if (node.namedExports) {
    printStatement(node.namedExports, printer, context, node);
  }
  if (node.fromClause) {
    printStatement(node.fromClause, printer, context, node);
  }
  if (!node.declaration) {
    write(printer, ';');
  }
}

function printNamedExports(node: any, printer: Printer, context: PrinterContext): void {
  printExportsImportsList(node.exportsList, printer, context);
}

function printExportSpecifier(node: any, printer: Printer, context: PrinterContext): void {
  if (node.name) {
    printExpression(node.name, printer, context, node);
  }
  if (node.moduleExportName) {
    printExpression(node.moduleExportName, printer, context, node);
  }

  if (node.asKeyword) {
    write(printer, ' ');
    printKeyword(node.asKeyword, printer, node, /* addSpace */ true);
  }
  if (node.binding) {
    write(printer, ' ');
    printExpression(node.binding, printer, context, node);
  }
}

function printNumericLiteral(node: any, printer: Printer, context: PrinterContext): void {
  write(
    printer,
    node.flags & 0b00000000000000000010001110000000
      ? node.rawText
      : node.rawText
          .toLowerCase()
          // Remove unnecessary plus and zeroes from scientific notation.
          .replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(\d)/, '$1$2$3')
          // Remove unnecessary scientific notation (1e0).
          .replace(/^([+-]?[\d.]+)e[+-]?0+$/, '$1')
          // Make sure numbers always start with a digit.
          .replace(/^([+-])?\./, '$10.')
          // Remove extraneous trailing decimal zeroes.
          .replace(/(\.\d+?)0+(?=e|$)/, '$1')
          // Remove trailing dot.
          .replace(/\.(?=e|$)/, '')
  );
}

function printStaticBlock(node: any, printer: Printer, context: PrinterContext): void {
  if (node.decorators) {
    printDecoratorList(node.decorators, printer, node);
  }
  printKeyword(node.declaredKeyword, printer, node, /* addSpace */ true);
  printKeyword(node.staticKeyword, printer, node, /* addSpace */ true);
  printStaticBlockBody(node.block, printer, node);
}

function printStaticBlockBody(node: any, printer: Printer, parentNode: any): void {
  const { start, end, block } = node;
  if (start >= 0) {
    printDetachedCommentsAndUpdateCommentsInfo(node, printer);
  }
  write(printer, ' ');
  printPunctuator('{', printer, node.start, node, /* addSpace */ false);
  printer.indent++;
  printStatementList(printer, node, parentNode, block.statements, PrinterContext.MultiLine);
  printer.indent--;
  printPunctuator('}', printer, block.end, node, /* addSpace */ false);

  if (end >= 0) {
    printLeadingComments(printer, block.statements.length !== 0 ? lastOrUndefined(block.statements).end : end);
  }
}

export function printStringLiteral(node: StringLiteral, printer: Printer, context: PrinterContext): void {
  write(printer, makeString(node.rawText, context & PrinterContext.SingleQuote ? "'" : '"'));
}

export function printNewTarget(node: any, printer: Printer) {
  printKeyword(node.newKeyword, printer, node, /* addSpace */ false);
  write(printer, '.');
  printKeyword(node.targetIdentifier, printer, node, /* addSpace */ false);
}

function printInitializer(
  node: ExpressionNode | undefined,
  printer: Printer,
  context: PrinterContext,
  equalCommentStartPos: number,
  container: SyntaxNode
) {
  if (node) {
    write(printer, ' ');
    printPunctuator('=', printer, equalCommentStartPos, node, /* addSpace */ false);
    write(printer, ' ');
    printExpression(node, printer, context, node);
  }
}
