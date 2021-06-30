import { DebuggerStatement } from '../ast/statements/debugger-stmt';
import { RootNode } from '../ast/rootNode';
import { StringLiteral } from '../ast/expressions/string-literal';
import { ExpressionNode } from '../ast/expressions';
import { StatementNode } from '../ast/statements';
import { PrivateIdentifier } from '../ast/expressions/private-identifier';
import { NumericLiteral } from '../ast/expressions/numeric-literal';
import { AssignmentExpression } from '../ast/expressions/assignment-expr';
import { createForBinding, ForBinding } from '../ast/statements/for-binding';
import { ExpressionStatement } from '../ast/statements/expression-stmt';
import { ArrayLiteral } from '../ast/expressions/array-literal';
import { BinaryExpression } from '../ast/expressions/binary-expr';
import { ArgumentList } from '../ast/expressions/argument-list';
import { ArrayBindingPattern } from '../ast/expressions/array-binding-pattern';
import { ArrowFunction } from '../ast/expressions/arrow-function';
import { AwaitExpression } from '../ast/expressions/await-expr';
import { BindingElementList } from '../ast/expressions/binding-element-list';
import { BindingProperty } from '../ast/expressions/binding-property';
import { BindingElement } from '../ast/expressions/binding-element';
import { IndexExpression } from '../ast/expressions/index-expr';
import { IndexExpressionChain } from '../ast/expressions/index-expr-chain';
import { MemberAccessChain } from '../ast/expressions/member-access-chain';
import { MemberAccessExpression } from '../ast/expressions/member-access-expr';
import { StaticBlock } from '../ast/expressions/static-block';
import { YieldExpression } from '../ast/expressions/yield-expr';
import { BindingPropertyList } from '../ast/expressions/binding-property-list';
import { CallExpression } from '../ast/expressions/call-expr';
import { CallChain } from '../ast/expressions/call-chain';
import { ClassBody } from '../ast/expressions/class-body';
import { ClassTail } from '../ast/expressions/class-tail';
import { OptionalChain } from '../ast/expressions/optional-chain';
import { OptionalExpression } from '../ast/expressions/optional-expr';
import { CommaOperator } from '../ast/expressions/comma-operator';
import { TemplateSpan } from '../ast/expressions/template-span';
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
import { FunctionStatementList } from '../ast/expressions/function-stmt-list';
import { FunctionBody } from '../ast/expressions/function-body';
import { ImportCall } from '../ast/expressions/import-call';
import { MethodDefinition } from '../ast/expressions/method-definition';
import { PropertyMethod } from '../ast/expressions/property-method';
import { NewExpression } from '../ast/expressions/new-expr';
import { ObjectBindingPattern } from '../ast/expressions/object-binding-pattern';
import { ObjectLiteral } from '../ast/expressions/object-literal';
import { ParenthesizedExpression } from '../ast/expressions/parenthesized-expr';
import { PostfixUpdateExpression } from '../ast/expressions/postfix-update-expr';
import { PrefixUpdateExpression } from '../ast/expressions/prefix-update-expr';
import { PropertyDefinition } from '../ast/expressions/property-definition';
import { PropertyDefinitionList } from '../ast/expressions/property-definition-list';
import { SpreadProperty } from '../ast/expressions/spread-property';
import { TemplateExpression } from '../ast/expressions/template-expression';
import { BindingList } from '../ast/statements/binding-list';
import { VariableStatement } from '../ast/statements/variable-stmt';
import { Block } from '../ast/statements/block';
import { BlockStatement } from '../ast/statements/block-stmt';
import { ArrowPatameterList } from '../ast/expressions/arrow-parameter-list';
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
import { CatchClause } from '../ast/statements/catch-stmt';
import { ArrayType } from '../ast/types/array-type';
import { ArrowFunctionType } from '../ast/types/arrow-function-type';
import { ArrowTypeParameter } from '../ast/types/arrow-type-parameter';
import { ArrowTypeParameterList } from '../ast/types/arrow-type-parameter-list';
import { FunctionTypeParameterList } from '../ast/types/function-type-parameter-list';
import { FunctionTypeParameter } from '../ast/types/function-type-parameter';
import { createNullableType, NullableType } from '../ast/types/nullable-type';
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
import { createFunctionType, FunctionType } from '../ast/types/function-type';
import { IndexedAccessType } from '../ast/types/indexed-access-type';
import { IntersectionType } from '../ast/types/intersection-type';
import { OptionalType } from '../ast/types/optional-type';
import { ParenthesizedType } from '../ast/types/parenthesized-type';
import { RestType } from '../ast/types/rest-type';
import { TupleType } from '../ast/types/tuple-type';
import { TypeParameter } from '../ast/types/type-parameter';
import { createUnionType, UnionType } from '../ast/types/union-type';
import { DecoratorList } from '../ast/expressions/decorator-list';
import { Decorator } from '../ast/expressions/decorators';
import { FormalParameterList } from '../ast/expressions/formal-parameter-list';
import { createImportClause, ImportClause } from '../ast/module/import-clause';
import { NameSpaceImport } from '../ast/module/namespace-import';
import { ExportDefault } from '../ast/module/export-default';
import { ExportDeclaration } from '../ast/module/export-declaration';
import { ExportFromClause } from '../ast/module/export-from-clause';
import { ExportSpecifier } from '../ast/module/export-specifier';
import { ExportsList } from '../ast/module/exports-list';
import { ImportDeclaration } from '../ast/module/import-declaration';
import { ImportSpecifier } from '../ast/module/import-specifier';
import { ImportsList } from '../ast/module/imports-list';
import { NamedExports } from '../ast/module/named-exports';
import { NamedImports } from '../ast/module/named-imports';
import { SpreadElement } from '../ast/expressions/spread-element';
import { Identifier } from '../ast/expressions/identifier-expr';
import {
  SyntaxNode,
  SyntaxKind,
  NodeFlags,
  tokenToString,
} from '../ast/syntax-node';
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
  brackets,
  makeString,
  isEmptyProperties,
  printDetachedCommentsAndUpdateCommentsInfo,
  rangeEndIsOnSameLineAsRangeStart,
  printLeadingCommentsOfPosition,
  printTrailingCommentsOfPosition,
  shouldWriteSeparatingLineTerminator,
  shouldWriteLeadingLineTerminator,
  shouldWriteClosingLineTerminator,
  printLeadingComments,
  lastOrUndefined,
  writeDelimiter,
  printWithComments,
} from './common';

/** @internal */
export function printCST(node: RootNode, _options?: any): string {
  const printer = createPrinter(node.source);
  printRootNode(node, printer);
  return printer.output;
}

// Prints CST nodes on statement level with comment attachment
function printStatement(node: SyntaxNode, printer: Printer): void {
  printWithComments(node, printer, statementWorker);
}

function statementWorker(node: SyntaxNode, printer: Printer): void {
  switch (node.kind) {
    case SyntaxKind.WhileStatement:
      return printWhileStatement(<any>node, printer);
    case SyntaxKind.WithStatement:
      return printWithStatement(<any>node, printer);
    case SyntaxKind.ExpressionStatement:
      return printExpressionStatement(<ExpressionStatement>node, printer);
    case SyntaxKind.DoWhileStatement:
      return printDoWhileStatement(<any>node, printer);
    case SyntaxKind.IfStatement:
      return printIfStatement(<any>node, printer);
    case SyntaxKind.CaseClause:
      return printCaseClause(<any>node, printer);
    case SyntaxKind.DefaultClause:
      return printDefaultClause(<any>node, printer);
    case SyntaxKind.ContinueStatement:
      return printContinueStatement(<any>node, printer);
    case SyntaxKind.ClassTail:
      return printTail(<any>node, printer);
    case SyntaxKind.ClassElement:
      return printClassElement(<any>node, printer);
    case SyntaxKind.ClassHeritage:
      return printClassHeritage(<any>node, printer);
    case SyntaxKind.BreakStatement:
      return printBreakStatement(<any>node, printer);
    case SyntaxKind.SwitchStatement:
      return printSwitchStatement(<any>node, printer);
    //    case SyntaxKind.StaticBlock:
    //    return printStaticBlock(<any>node, printer);
    case SyntaxKind.ForStatement:
      return printForStatement(<any>node, printer);
    case SyntaxKind.FunctionDeclaration:
      return printFunctionDeclarationOrExpression(<any>node, printer);
    case SyntaxKind.ForInStatement:
      return printForInStatement(<any>node, printer);
    case SyntaxKind.ForOfStatement:
      return printForOfStatement(<any>node, printer);
    case SyntaxKind.EmptyStatement:
      return printEmptyStatement(<any>node, printer);
    case SyntaxKind.LexicalDeclaration:
      return printLexicalDeclaration(<any>node, printer, false);
    case SyntaxKind.VariableStatement:
      return printVariableStatement(<any>node, printer);
    case SyntaxKind.VariableDeclaration:
    case SyntaxKind.LexicalBinding:
      return printVariableDeclarationOrLexicalBinding(<any>node, printer);
    case SyntaxKind.Decorator:
      return printDecorator(<any>node, printer);
    case SyntaxKind.TryStatement:
      return printTryStatement(<any>node, printer);
    case SyntaxKind.ReturnStatement:
      return printReturnStatement(<any>node, printer);
    case SyntaxKind.ThrowStatement:
      return printThrowStatement(<any>node, printer);
    case SyntaxKind.LabelledStatement:
      return printLabelledStatement(<any>node, printer);
    case SyntaxKind.ArrayBindingPattern:
      return emitArrayBindingPattern(<any>node, printer);
    case SyntaxKind.ObjectBindingPattern:
      return printObjectBindingPattern(<any>node, printer);
    case SyntaxKind.BindingProperty:
      return printBindingProperty(<any>node, printer);
    case SyntaxKind.ClassDeclaration:
      return printClassExpressionOrDeclaration(<any>node, printer);
    case SyntaxKind.TypeAlias:
      return printTypeAlias(<any>node, printer);
    case SyntaxKind.BindingElement:
      return printBindingElement(<any>node, printer);
    case SyntaxKind.BlockStatement:
      return printBlockStatement(<any>node, printer);
    case SyntaxKind.DebuggerStatement:
      return printDebuggerStatement(<any>node, printer);
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
      return printKeyword(<any>node, printer, node);
    case SyntaxKind.TypeAnnotation:
      return printTypeAnnotation(<any>node, printer);
    case SyntaxKind.ArrayType:
      return printArrayType(<any>node, printer);
    case SyntaxKind.ArrowFunctionType:
      return printArrowFunctionType(<any>node, printer);
    case SyntaxKind.ArrowTypeParameterList:
      return printArrowTypeParameterList(<any>node, printer);
    case SyntaxKind.ArrowTypeParameter:
      return printArrowTypeParameter(<any>node, printer);
    case SyntaxKind.BigIntType:
      return printBigIntType(<any>node, printer);
    case SyntaxKind.FunctionTypeParameterList:
      return printFunctionTypeParameterList(<any>node, printer);
    case SyntaxKind.FunctionTypeParameter:
      return printFunctionTypeParameter(<any>node, printer);
    case SyntaxKind.FunctionType:
      return printFunctionType(<any>node, printer);
    case SyntaxKind.IndexedAccessType:
      return printIndexedAccessType(<any>node, printer);
    case SyntaxKind.IntersectionType:
      return printIntersectionType(<any>node, printer);
    case SyntaxKind.NullableType:
      return printNullableType(<any>node, printer);
    case SyntaxKind.NumberType:
      return printNumericLiteral(<any>node, printer);
    case SyntaxKind.ObjectTypeCallProperty:
      return printObjectTypeCallProperty(<any>node, printer);
    case SyntaxKind.ObjectTypeIndexer:
      return printObjectTypeIndexer(<any>node, printer);
    case SyntaxKind.ObjectTypeInternalSlot:
      return printObjectTypeInternalSlot(<any>node, printer);
    case SyntaxKind.ObjectTypeProperty:
      return printObjectTypeProperty(<any>node, printer);
    case SyntaxKind.ObjectTypeSpreadProperty:
      return printObjectTypeSpreadProperty(<any>node, printer);
    case SyntaxKind.ObjectType:
      return printObjectType(<any>node, printer, <any>node);
    case SyntaxKind.OpaqueType:
      return printOpaqueType(<any>node, printer);
    case SyntaxKind.OptionalIndexedAccess:
      return printOptionalIndexedAccess(<any>node, printer);
    case SyntaxKind.OptionalType:
      return printOptionalType(<any>node, printer);
    case SyntaxKind.ParenthesizedType:
      return printParenthesizedType(<any>node, printer);
    case SyntaxKind.QualifiedType:
      return printQualifiedType(<any>node, printer);
    case SyntaxKind.RestType:
      return printRestType(<any>node, printer);
    case SyntaxKind.StringType:
      return printStringType(<any>node, printer);
    case SyntaxKind.SubtractionType:
      return printSubtractionType(<any>node, printer);
    case SyntaxKind.TupleType:
      return printTupleType(<any>node, printer);
    case SyntaxKind.TypeInstantiations:
      return printTypeInstantiations(<any>node, printer);
    case SyntaxKind.TypeParameterDeclaration:
      return printTypeParameterDeclaration(<any>node, printer);
    case SyntaxKind.TypeParameterInstantiation:
      return printTypeParameterInstantiation(<any>node, printer);
    case SyntaxKind.TypeParameterList:
      return printTypeParameterList(<any>node, printer);
    case SyntaxKind.TypeParameter:
      return printTypeParameter(<any>node, printer);
    case SyntaxKind.TypeReference:
      return printTypeReference(<any>node, printer);
    case SyntaxKind.TypeofType:
      return printTypeofType(<any>node, printer);
    case SyntaxKind.UnionType:
      return printUnionType(<any>node, printer);
    case SyntaxKind.ExportDeclaration:
      return printExportDeclaration(<any>node, printer);
    case SyntaxKind.ExportFromClause:
      return printExportFromClause(<any>node, printer);
    case SyntaxKind.ExportDefault:
      return printExportDefault(<any>node, printer);
    case SyntaxKind.NamedExports:
      return printNamedExports(<any>node, printer);
    case SyntaxKind.ExportSpecifier:
      return printExportSpecifier(<any>node, printer);
    case SyntaxKind.ImportDeclaration:
      return printImportDeclaration(<any>node, printer);
    case SyntaxKind.ImportClause:
      return printImportClause(<any>node, printer);
    case SyntaxKind.NameSpaceImport:
      return printNameSpaceImport(<any>node, printer);
    case SyntaxKind.NamedImports:
      return printNamedImports(<any>node, printer);
    case SyntaxKind.ImportSpecifier:
      return printImportSpecifier(<any>node, printer);
    case SyntaxKind.FromClause:
      return printFromClause(<any>node, printer);
    default:
      if (node.flags & NodeFlags.ExpressionNode) {
        printExpression(<ExpressionNode>node, printer);
      }
  }
}

function printRootNode(node: RootNode, printer: Printer) {
  const { directives, statements } = node;
  if (directives.length !== 0) {
    printPrologueDirectives(
      printer,
      directives,
      /*startWithNewLine */ true,
      /* indented */ false
    );
  }

  if (
    statements.length === 0 ||
    directives.length === 0 ||
    nodeIsSynthesized(statements[0])
  ) {
    const { start, end } = node;

    if (start >= 0) {
      printDetachedCommentsAndUpdateCommentsInfo(node, printer);
    }

    printStatementList(
      printer,
      node,
      node,
      node.statements,
      PrinterContext.MultiLine
    );
    if (end >= 0) {
      printLeadingComments(
        printer,
        // In terms of performance, there is not much to gain from creating a new 'CST node
        // just to retieve the 'end' value of the last statement in the array, so we
        // take a shortcut...
        node.statements.length !== 0
          ? lastOrUndefined(node.statements).end
          : end
      );

      if (printer.hasWrittenComment) {
        writeLine(printer);
      }
    }
  } else {
    printStatementList(
      printer,
      node,
      node,
      node.statements,
      PrinterContext.MultiLine
    );
  }
}

function printExpressionStatement(node: ExpressionStatement, printer: Printer) {
  printExpression(node.expression, printer);
  write(printer, ';');
}

function printExpression(node: SyntaxNode, printer: Printer) {
  printWithComments(node, printer, emitExpressionWorker);
}

function emitExpressionWorker(node: SyntaxNode, printer: Printer) {
  const kind = node.kind;
  switch (kind) {
    case SyntaxKind.Identifier:
      return printIdentifier(<Identifier>node, printer);
    case SyntaxKind.ConditionalExpression:
      return printConditionalExpression(<ConditionalExpression>node, printer);
    case SyntaxKind.ParenthesizedExpression:
      return printParenthesizedExpression(<any>node, printer);
    case SyntaxKind.PrefixUpdateExpression:
      return printPrefixUpdateExpression(<any>node, printer);
    case SyntaxKind.AssignmentExpression:
      return printAssignmentExpression(<any>node, printer);
    case SyntaxKind.PostfixUpdateExpression:
      return printPostfixUpdateExpression(<any>node, printer);
    case SyntaxKind.NewTarget:
      return printNewTarget(<any>node, printer);
    case SyntaxKind.StringLiteral:
      return printStringLiteral(<StringLiteral>node, printer, {
        singleQuote: false,
      });
    case SyntaxKind.NumericLiteral:
      return printNumericLiteral(<NumericLiteral>node, printer);
    case SyntaxKind.BigIntLiteral:
      return printBigIntLiteral(<any>node, printer);
    case SyntaxKind.CommaOperator:
      return printCommaOperator(<any>node, printer);
    case SyntaxKind.ArrayLiteral:
      return printArrayLiteral(<any>node, printer);
    case SyntaxKind.NewExpression:
      return printNewExpression(<any>node, printer);
    case SyntaxKind.AwaitExpression:
      return printAwaitExpression(<any>node, printer);
    case SyntaxKind.FunctionExpression:
      return printFunctionDeclarationOrExpression(<any>node, printer);
    case SyntaxKind.ThisKeyword:
    case SyntaxKind.NullKeyword:
    case SyntaxKind.FalseKeyword:
    case SyntaxKind.TrueKeyword:
    case SyntaxKind.SuperKeyword:
      return printKeyword(<any>node, printer, node);
    case SyntaxKind.ClassExpression:
      return printClassExpressionOrDeclaration(<any>node, printer);
    case SyntaxKind.IndexExpression:
      return printIndexExpression(<any>node, printer);
    case SyntaxKind.MemberAccessExpression:
      return printMemberAccessExpression(<any>node, printer);
    case SyntaxKind.FieldDefinition:
      return printFieldDefinition(<any>node, printer);
    case SyntaxKind.UnaryExpression:
      return printUnaryExpression(<any>node, printer);
    case SyntaxKind.BinaryExpression:
      return printBinaryExpression(<any>node, printer);
    case SyntaxKind.ArrowFunction:
      return printArrowFunction(<any>node, printer);
    case SyntaxKind.PrivateIdentifier:
      return printPrivateIdentifier(<PrivateIdentifier>node, printer);
    case SyntaxKind.CoverInitializedName:
      return printCoverInitializedName(<any>node, printer);
    case SyntaxKind.PropertyMethod:
      return printPropertyMethod(<any>node, printer);
    case SyntaxKind.ObjectLiteral:
      return printObjectLiteral(<any>node, printer);
    case SyntaxKind.PropertyDefinition:
      return printPropertyDefinition(<any>node, printer);
    case SyntaxKind.MethodDefinition:
      return printMethodDefinition(<any>node, printer);
    case SyntaxKind.ComputedPropertyName:
      return printComputedPropertyName(<any>node, printer);
    case SyntaxKind.CallExpression:
      return printCallExpression(<any>node, printer);
    case SyntaxKind.YieldExpression:
      return printYieldExpression(<any>node, printer);
    case SyntaxKind.SpreadProperty:
    case SyntaxKind.SpreadElement:
      return printSpreadElement(<any>node, printer);
    case SyntaxKind.RegularExpressionLiteral:
      return printRegularExpressionLiteral(<any>node, printer);
    case SyntaxKind.ThisKeyword:
      return printThisExpression(<any>node, printer);
    case SyntaxKind.ImportCall:
      return printImportCall(<any>node, printer);
    case SyntaxKind.ImportMeta:
      return printImportMeta(<any>node, printer);
    case SyntaxKind.TaggedTemplate:
      return printTaggedTemplate(<any>node, printer);
    case SyntaxKind.TemplateExpression:
      return printTemplateExpression(<any>node, printer);
    case SyntaxKind.TemplateSpan:
      return printTemplateSpan(<any>node, printer);
    case SyntaxKind.TemplateTail:
      return printTemplateTail(<any>node, printer);
    case SyntaxKind.OptionalExpression:
      return printOptionalExpression(<any>node, printer);
    case SyntaxKind.OptionalChain:
      return printOptionalChain(<any>node, printer);
    case SyntaxKind.CallChain:
      return printCallChain(<any>node, printer);
    case SyntaxKind.IndexExpressionChain:
      return printIndexExpressionChain(<any>node, printer);
    case SyntaxKind.MemberAccessChain:
      return printMemberAccessChain(node, printer);
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
  startWithNewLine: boolean,
  indented: boolean
) {
  if (indented) {
    printer.indent++;
    writeLine(printer);
  }
  for (let i = 0; i < directives.length; i++) {
    if (startWithNewLine || i > 0) {
      writeLine(printer);
    }
    printStatement(directives[i], printer);
  }

  if (indented) {
    printer.indent--;
  }
  write(printer, ';');
  return directives.length;
}

function printStatementList(
  printer: Printer,
  listNode: SyntaxNode,
  parentNode: SyntaxNode,
  children: SyntaxNode[],
  format: PrinterContext
) {
  printList(printStatement, printer, listNode, parentNode, children, format);
}

function printExpressionList(
  printer: Printer,
  listNode: SyntaxNode,
  parentNode: SyntaxNode,
  children: SyntaxNode[],
  format: PrinterContext
) {
  printList(printExpression, printer, listNode, parentNode, children, format);
}

function printList(
  print: (node: SyntaxNode, printer: Printer) => void,
  printer: Printer,
  listNode: SyntaxNode,
  parentNode: SyntaxNode,
  children: SyntaxNode[],
  format: PrinterContext
) {
  const isEmpty = children === undefined || 0 >= children.length;

  let aladdin: any = [];

  if (
    format &
    (PrinterContext.Braces |
      PrinterContext.Parenthesis |
      PrinterContext.AngleBrackets |
      PrinterContext.SquareBrackets)
  ) {
    aladdin.push(
      brackets[
        format &
          (PrinterContext.Braces |
            PrinterContext.Parenthesis |
            PrinterContext.AngleBrackets |
            PrinterContext.SquareBrackets)
      ][0]
    );
    write(
      printer,
      brackets[
        format &
          (PrinterContext.Braces |
            PrinterContext.Parenthesis |
            PrinterContext.AngleBrackets |
            PrinterContext.SquareBrackets)
      ][0]
    );
    if (isEmpty && children) {
      printTrailingCommentsOfPosition(printer, listNode.start);
    }
  }

  if (isEmpty) {
    if (format & PrinterContext.MultiLine) {
      writeLine(printer);
    } else if (
      format & PrinterContext.SpaceBetweenBraces &&
      !(format & PrinterContext.NoSpaceIfEmpty)
    ) {
      write(printer, ' ');
    }
  } else {
    let shouldEmitInterveningComments = true;

    if (
      shouldWriteLeadingLineTerminator(parentNode, printer, children, format)
    ) {
      writeLine(printer);
      shouldEmitInterveningComments = false;
    } else if (format & PrinterContext.SpaceBetweenBraces) {
      write(printer, ' ');
    }

    // Increase the indent, if requested.
    if (format & PrinterContext.Indented) {
      printer.indent++;
    }

    let previousSibling!: SyntaxNode;
    let shouldDecreaseIndentAfterEmit: boolean = false;

    for (let i = 0; i < children.length; i++) {
      const child = children[i];

      if (previousSibling) {
        if (
          format &
            (PrinterContext.BarDelimited |
              PrinterContext.AmpersandDelimited |
              PrinterContext.CommaDelimited) &&
          previousSibling.end !== (listNode ? listNode.end : -1)
        ) {
          printLeadingCommentsOfPosition(printer, previousSibling.end);
        }

        aladdin.push(', ');
        writeDelimiter(printer, format);

        // Write either a line terminator or whitespace to separate the elements.
        if (
          shouldWriteSeparatingLineTerminator(
            previousSibling,
            printer,
            child,
            format
          )
        ) {
          // If a synthesized node in a single-line list starts on a new
          // line, we should increase the indent.
          if (
            (format &
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
        } else if (
          previousSibling &&
          format & PrinterContext.SpaceBetweenSiblings
        ) {
          write(printer, ' ');
        }
      }

      if (shouldEmitInterveningComments) {
        printTrailingCommentsOfPosition(printer, child.start);
      } else {
        shouldEmitInterveningComments = true;
      }

      // print this child.
      print(child, printer);

      if (shouldDecreaseIndentAfterEmit) {
        printer.indent--;
        shouldDecreaseIndentAfterEmit = false;
      }
      previousSibling = child;
    }
    if (
      format & PrinterContext.CommaDelimited &&
      format & PrinterContext.AllowTrailingComma &&
      (previousSibling.flags & NodeFlags.DisallowTrailingComma) === 0
    ) {
      if (previousSibling) {
        printPunctuator(',', printer, previousSibling.end, previousSibling);
      } else {
        write(printer, ',');
      }
    }

    if (
      previousSibling &&
      listNode.end !== previousSibling.end &&
      format &
        (PrinterContext.BarDelimited |
          PrinterContext.AmpersandDelimited |
          PrinterContext.CommaDelimited)
    ) {
      printLeadingCommentsOfPosition(
        printer,
        format & PrinterContext.AllowTrailingComma
          ? listNode.end
          : previousSibling.end
      );
    }

    // Decrease the indent, if requested.
    if (format & PrinterContext.Indented) {
      printer.indent--;
    }

    // Write the closing line terminator or closing whitespace.
    if (
      shouldWriteClosingLineTerminator(parentNode, printer, children, format)
    ) {
      writeLine(printer);
    } else if (format & PrinterContext.SpaceBetweenBraces) {
      write(printer, ' ');
    }
  }

  if (
    format &
    (PrinterContext.Braces |
      PrinterContext.Parenthesis |
      PrinterContext.AngleBrackets |
      PrinterContext.SquareBrackets)
  ) {
    if (isEmpty && children)
      printLeadingCommentsOfPosition(printer, listNode.end);
    aladdin.push(
      brackets[
        format &
          (PrinterContext.Braces |
            PrinterContext.Parenthesis |
            PrinterContext.AngleBrackets |
            PrinterContext.SquareBrackets)
      ][1]
    );
    write(
      printer,
      brackets[
        format &
          (PrinterContext.Braces |
            PrinterContext.Parenthesis |
            PrinterContext.AngleBrackets |
            PrinterContext.SquareBrackets)
      ][1]
    );
  }
}

function printArrayLiteral(node: ArrayLiteral, printer: Printer) {
  return printElementList(node.elementList, printer, node);
}

function printElementList(
  node: ElementList,
  printer: Printer,
  parentNode: ArrayLiteral
) {
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
  printer: Printer
): void {
  printStatement(node.binding, printer);
  if (node.type) {
    printPunctuator(':', printer, node.binding.end, node);
    write(printer, ' ');
    printStatement(node.type, printer);
  }
  if (node.initializer) {
    write(printer, ' ');
    printPunctuator(
      '=',
      printer,
      node.type ? node.type.end : node.binding.end,
      node
    );
    write(printer, ' ');
    printStatement(node.initializer, printer);
  }
}

function printVariableStatement(
  node: VariableStatement,
  printer: Printer
): void {
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
    PrinterContext.CommaDelimited |
      PrinterContext.SpaceBetweenSiblings |
      PrinterContext.SingleLine
  );
}

function printLexicalDeclaration(
  node: LexicalDeclaration,
  printer: Printer,
  fromForStatement: boolean
): void {
  write(printer, tokenToString(node.lexicalKeyword));
  write(printer, ' ');
  printBindingList(node.binding, printer, node);
  if (!fromForStatement) write(printer, ';');
}

function printBindingList(
  node: BindingList,
  printer: Printer,
  parentNode: any
): void {
  printStatementList(
    printer,
    node,
    parentNode,
    node.bindingList,
    PrinterContext.CommaDelimited |
      PrinterContext.SpaceBetweenSiblings |
      PrinterContext.SingleLine
  );
}

function printForStatement(node: ForStatement, printer: Printer): void {
  printKeyword(node.forKeyword, printer, node);
  write(printer, ' ');
  let punctuatorPos = printPunctuator('(', printer, node.forKeyword.end, node);
  printForBinding(node.initializer, printer);
  punctuatorPos = printPunctuator(
    ';',
    printer,
    node.initializer ? node.initializer.end : punctuatorPos,
    node
  );
  if (node.condition) {
    write(printer, ' ');
    printExpression(node.condition, printer);
  }
  punctuatorPos = printPunctuator(
    ';',
    printer,
    node.condition ? node.condition.end : punctuatorPos,
    node
  );
  if (node.incrementor) {
    write(printer, ' ');
    printExpression(node.incrementor, printer);
  }
  printPunctuator(
    ')',
    printer,
    node.incrementor ? node.incrementor.end : punctuatorPos,
    node
  );
  printEmbeddedStatement(node.statement, printer);
}

function printForBinding(node: any, printer: Printer) {
  if (node) {
    if (node.kind === SyntaxKind.ForBinding) {
      const declarationList = node.declarationList;
      printKeyword(node.varKeyword, printer, node);
      write(printer, ' ');
      printVariableDeclarationList(declarationList, printer, node);
    } else if (node.kind === SyntaxKind.LexicalDeclaration) {
      printLexicalDeclaration(node, printer, /* fromForStatement */ true);
    } else {
      printExpression(node, printer);
    }
  }
}

function printForInStatement(node: ForInStatement, printer: Printer): void {
  printKeyword(node.forKeyword, printer, node);
  write(printer, ' ');
  printPunctuator('(', printer, node.forKeyword.end, node);
  printForBinding(node.initializer, printer);
  write(printer, ' ');
  printKeyword(node.inKeyword, printer, node);
  write(printer, ' ');
  printExpression(node.expression, printer);
  printPunctuator(')', printer, node.expression.end, node);
  printEmbeddedStatement(node.statement, printer);
}

function printForOfStatement(node: ForOfStatement, printer: Printer): void {
  printKeyword(node.forKeyword, printer, node);
  if (node.awaitKeyword) {
    write(printer, ' ');
    printKeyword(node.awaitKeyword, printer, node);
  }
  write(printer, ' ');
  printPunctuator(
    '(',
    printer,
    node.awaitKeyword ? node.awaitKeyword.end : node.forKeyword.end,
    node
  );
  printForBinding(node.initializer, printer);
  write(printer, ' ');
  printKeyword(node.ofKeyword, printer, node);
  write(printer, ' ');
  printExpression(node.expression, printer);
  printPunctuator(')', printer, node.expression.end, node);
  printEmbeddedStatement(node.statement, printer);
}

function printWhileStatement(node: any, printer: Printer): void {
  printKeyword(node.whileKeyword, printer, node);
  write(printer, ' ');
  printPunctuator('(', printer, node.whileKeyword.end, node);
  printExpression(node.expression, printer);
  printPunctuator(')', printer, node.expression.end, node);
  printEmbeddedStatement(node.statement, printer);
}

function printWithStatement(node: any, printer: Printer): void {
  printKeyword(node.withKeyword, printer, node);
  write(printer, ' ');
  printPunctuator('(', printer, node.withKeyword.end, node);
  printExpression(node.expression, printer);
  printPunctuator(')', printer, node.expression.end, node);
  printEmbeddedStatement(node.statement, printer);
}

function printBlockStatement(node: BlockStatement, printer: Printer): void {
  printBlock(node.block, printer, node);
}

function printBlock(
  node: Block,
  printer: Printer,
  parentNode: BlockStatement
): void {
  printStatementList(
    printer,
    node,
    parentNode,
    node.statements,
    (node.flags & NodeFlags.NewLine) === 0 &&
      isEmptyBlock(node, parentNode, printer)
      ? PrinterContext.SpaceBetweenBraces |
          PrinterContext.SpaceBetweenSiblings |
          PrinterContext.SingleLine |
          PrinterContext.Braces
      : PrinterContext.Indented |
          PrinterContext.MultiLine |
          PrinterContext.Braces
  );
}

function printDoWhileStatement(node: DoWhileStatement, printer: Printer) {
  printKeyword(node.doKeyword, printer, node);
  printEmbeddedStatement(node.statement, printer);
  write(printer, ' ');
  printKeyword(node.whileKeyword, printer, node);
  write(printer, ' ');
  printPunctuator('(', printer, node.whileKeyword.end, node);
  printExpression(node.expression, printer);
  printPunctuator(')', printer, node.expression.end, node);
}

function printCatchClause(node: any, printer: Printer) {
  printKeyword(node.catchKeyword, printer, node);
  write(printer, ' ');
  if (node.catchParameter) {
    printPunctuator('(', printer, node.block.end, node);
    printStatement(node.catchParameter, printer);
    printPunctuator(')', printer, node.catchParameter.end, node);
  }
  printStatement(node.block, printer);
}

function printIfStatement(node: IfStatement, printer: Printer): void {
  printKeyword(node.ifKeyword, printer, node);
  write(printer, ' ');
  printPunctuator('(', printer, node.ifKeyword.end, node);
  printExpression(node.expression, printer);
  printPunctuator(')', printer, node.expression.end, node);
  printEmbeddedStatement(node.consequent, printer);
  if (node.alternate) {
    writeLine(printer);
    printKeyword(node.elseKeyword, printer, node);
    if (node.alternate.kind === SyntaxKind.IfStatement) {
      write(printer, ' ');
      printStatement(node.alternate, printer);
    } else {
      printEmbeddedStatement(node.alternate, printer);
    }
  }
}

function printEmbeddedStatement(node: SyntaxNode, printer: Printer) {
  if (node.kind === SyntaxKind.BlockStatement) {
    write(printer, ' ');
    printBlockStatement(<BlockStatement>node, printer);
  } else {
    writeLine(printer);
    printer.indent++;
    printStatement(node, printer);
    printer.indent--;
  }
}

function printTryStatement(node: TryStatement, printer: Printer): void {
  printKeyword(node.tryKeyword, printer, node);
  write(printer, ' ');
  printStatement(node.block, printer);
  if (node.catchClause) {
    writeLine(printer);
    printCatchClause(node.catchClause, printer);
  }
  if (node.finallyBlock) {
    writeLine(printer);
    printKeyword(node.finallyKeyword, printer, node);
    write(printer, ' ');
    printStatement(node.finallyBlock, printer);
  }
}

function printThrowStatement(node: ThrowStatement, printer: Printer): void {
  printKeyword(node.throwKeyword, printer, node);
  write(printer, ' ');
  printExpression(node.expression, printer);
  write(printer, ';');
}

function printReturnStatement(node: ReturnStatement, printer: Printer): void {
  printKeyword(node.returnKeyword, printer, node);
  if (node.expression) {
    write(printer, ' ');
    printExpression(node.expression, printer);
  }
  write(printer, ';');
}

// DebuggerStatement : `debugger` `;
function printDebuggerStatement(
  node: DebuggerStatement,
  printer: Printer
): void {
  printKeyword(node.debuggerKeyword, printer, node);
  write(printer, ';');
}

function printLabelledStatement(
  node: LabelledStatement,
  printer: Printer
): void {
  printStatement(node.label, printer);
  printKeyword(node.colonToken, printer, node);
  write(printer, ' ');
  printStatement(node.statement, printer);
}

function printBreakStatement(node: BreakStatement, printer: Printer): void {
  printKeyword(node.breakKeyword, printer, node);
  if (node.label) {
    write(printer, ' ');
    printStatement(node.label, printer);
  }
  write(printer, ';');
}

function printContinueStatement(
  node: ContinueStatement,
  printer: Printer
): void {
  printKeyword(node.continueKeyword, printer, node);
  if (node.label) {
    write(printer, ' ');
    printStatement(node.label, printer);
  }
  write(printer, ';');
}

function printSwitchStatement(node: SwitchStatement, printer: Printer): void {
  printKeyword(node.switchKeyword, printer, node);
  write(printer, ' ');
  printPunctuator('(', printer, node.switchKeyword.end, node);
  printExpression(node.expression, printer);
  printPunctuator(')', printer, node.expression.end, node);
  write(printer, ' ');
  printCaseBlock(node.caseBlock, printer, node);
}

function printCaseBlock(
  node: CaseBlock,
  printer: Printer,
  parentNode: SwitchStatement
): void {
  printPunctuator('{', printer, node.start, node);
  printStatementList(
    printer,
    node,
    parentNode,
    node.clauses,
    PrinterContext.Indented | PrinterContext.MultiLine
  );
  const end = node.clauses.length
    ? lastOrUndefined(node.clauses).end
    : node.end;
  printPunctuator('}', printer, end, node);
}

function printCaseClause(node: any | any, printer: Printer): void {
  printKeyword(node.caseKeyword, printer, node);
  write(printer, ' ');
  printExpression(node.expression, printer);
  printCaseOrDefaultClauseRest(node, printer, node.statements);
}

function printDefaultClause(node: any, printer: Printer): void {
  printKeyword(node.defaultKeyword, printer, node);
  printCaseOrDefaultClauseRest(node, printer, node.statements);
}

function printCaseOrDefaultClauseRest(
  node: any,
  printer: Printer,
  statements: any
): void {
  if (
    statements.length === 1 &&
    (nodeIsSynthesized(node) ||
      nodeIsSynthesized(statements[0]) ||
      rangeStartPositionsAreOnSameLine(node, statements[0], printer))
  ) {
    write(printer, ':');
    write(printer, ' ');
    printStatementList(
      printer,
      node,
      node,
      statements,
      PrinterContext.Indented |
        PrinterContext.MultiLine |
        PrinterContext.NoTrailingNewLine |
        (PrinterContext.OptionalIfEmpty &
          ~(PrinterContext.MultiLine | PrinterContext.Indented))
    );
  } else {
    printKeyword(node.colonToken, printer, node);
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

function printEmptyStatement(_node: any, printer: Printer): void {
  write(printer, ';');
}

function printCommaOperator(node: any, printer: Printer): void {
  printExpressionList(
    printer,
    node,
    node,
    node.expressions,
    PrinterContext.CommaDelimited |
      PrinterContext.SpaceBetweenSiblings |
      PrinterContext.SingleLine
  );
}

function printConditionalExpression(node: any, printer: Printer): void {
  const indentBeforeQuestion = needsIndentation(
    printer,
    node,
    node.shortCircuit,
    node.questionToken
  );
  const indentAfterQuestion = needsIndentation(
    printer,
    node,
    node.questionToken,
    node.consequent
  );
  const indentBeforeColon = needsIndentation(
    printer,
    node,
    node.consequent,
    node.colonToken
  );
  const indentAfterColon = needsIndentation(
    printer,
    node,
    node.colonToken,
    node.alternate
  );
  printStatement(node.shortCircuit, printer);
  increaseIndentIf(printer, indentBeforeQuestion, ' ');
  printKeyword(node.questionToken, printer, node);
  increaseIndentIf(printer, indentAfterQuestion, ' ');
  printStatement(node.consequent, printer);
  decreaseIndentIf(printer, indentBeforeQuestion, indentAfterQuestion);
  increaseIndentIf(printer, indentBeforeColon, ' ');
  printKeyword(node.colonToken, printer, node);
  increaseIndentIf(printer, indentAfterColon, ' ');
  printStatement(node.alternate, printer);
}

function printAwaitExpression(node: any, printer: Printer): void {
  printKeyword(node.awaitKeyword, printer, node);
  write(printer, ' ');
  printExpression(node.expression, printer);
}

function printNewExpression(node: any, printer: Printer): void {
  printKeyword(node.newKeyword, printer, node);
  write(printer, ' ');
  printExpression(node.expression, printer);
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

function printArgumentList(
  node: any,
  parentNode: any,
  printer: Printer,
  format: PrinterContext
): void {
  if (node.trailingComma) format |= PrinterContext.AllowTrailingComma;
  printExpressionList(printer, node, parentNode, node.elements, format);
}

function printComputedPropertyName(
  node: ComputedPropertyName,
  printer: Printer
): void {
  printPunctuator('[', printer, node.start, node);
  printExpression(node.expression, printer);
  printPunctuator(']', printer, node.expression.end, node);
}

function printCallExpression(node: CallExpression, printer: Printer): void {
  printExpression(node.expression, printer);
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

function printParenthesizedExpression(
  node: ParenthesizedExpression,
  printer: Printer
): void {
  printPunctuator('(', printer, node.start, node);
  printExpression(node.expression, printer);
  printPunctuator(')', printer, node.expression.end, node);
}

function printYieldExpression(node: YieldExpression, printer: Printer): void {
  printKeyword(node.yieldKeyword, printer, node);
  if (node.asteriskToken) printKeyword(node.asteriskToken, printer, node);
  if (node.expression) {
    write(printer, ' ');
    printExpression(node.expression, printer);
  }
}

function printPrefixUpdateExpression(
  node: PrefixUpdateExpression,
  printer: Printer
): void {
  printKeyword(node.operandToken, printer, node);
  printExpression(node.operand, printer);
}

function printPostfixUpdateExpression(
  node: PostfixUpdateExpression,
  printer: Printer
): void {
  printExpression(node.operand, printer);
  printKeyword(node.operandToken, printer, node);
}

function printAssignmentExpression(
  node: AssignmentExpression,
  printer: Printer
): void {
  printExpression(node.left, printer);
  write(printer, ' ');
  printKeyword(node.operatorToken, printer, node);
  write(printer, ' ');
  printExpression(node.right, printer);
}

function printThisExpression(node: any, printer: Printer): void {
  printKeyword(node.thisKeyword, printer, node);
}

function printRegularExpressionLiteral(node: any, printer: Printer): void {
  write(printer, node.text);
}

function printSpreadElement(node: any, printer: Printer): void {
  printKeyword(node.ellipsisToken, printer, node);
  printExpression(node.argument, printer);
}
function skipSynthesizedParentheses(node: any) {
  while (
    node.kind === SyntaxKind.ParenthesizedExpression &&
    nodeIsSynthesized(node)
  ) {
    node = (<ParenthesizedExpression>node).expression;
  }

  return node;
}
function needsIndentation(
  printer: Printer,
  parent: Node,
  node1: Node,
  node2: Node
): boolean {
  parent = skipSynthesizedParentheses(parent);
  node1 = skipSynthesizedParentheses(node1);
  node2 = skipSynthesizedParentheses(node2);

  return (
    !nodeIsSynthesized(parent) &&
    !nodeIsSynthesized(node1) &&
    !nodeIsSynthesized(node2) &&
    !rangeEndIsOnSameLineAsRangeStart(node1, node2, printer)
  );
}

function printBinaryExpression(node: any, printer: Printer): void {
  const isCommaOperator = node.operatorToken.kind !== SyntaxKind.Comma;
  const indentBeforeOperator = needsIndentation(
    printer,
    node,
    node.left,
    node.operatorToken
  );
  const indentAfterOperator = needsIndentation(
    printer,
    node,
    node.operatorToken,
    node.right
  );

  printExpression(node.left, printer);
  increaseIndentIf(
    printer,
    indentBeforeOperator,
    isCommaOperator ? ' ' : undefined
  );
  printKeyword(node.operatorToken, printer, node);
  increaseIndentIf(printer, indentAfterOperator, ' ');
  printExpression(node.right, printer);
  decreaseIndentIf(printer, indentBeforeOperator, indentAfterOperator);
}

function decreaseIndentIf(printer: Printer, value1: boolean, value2?: boolean) {
  if (value1) {
    printer.indent--;
  }
  if (value2) {
    printer.indent--;
  }
}

function increaseIndentIf(
  printer: Printer,
  value: boolean,
  valueToWriteWhenNotIndenting?: string
) {
  if (value) {
    printer.indent++;
    writeLine(printer);
  } else if (valueToWriteWhenNotIndenting) {
    write(printer, valueToWriteWhenNotIndenting);
  }
}

function printFunctionDeclarationOrExpression(
  node: any,
  printer: Printer
): void {
  if (node.declareKeyword) {
    printKeyword(node.declareKeyword, printer, node);
    write(printer, ' ');
  }
  if (node.asyncKeyword) {
    printKeyword(node.asyncKeyword, printer, node);
    write(printer, ' ');
  }
  printKeyword(node.functionKeyword, printer, node);
  if (node.asteriskToken) {
    printKeyword(node.asteriskToken, printer, node);
  }

  write(printer, ' ');
  printExpression(node.name, printer);
  if (node.typeParameters) {
    printStatement(node.typeParameters, printer);
    write(printer, ' ');
  }
  printFormalParameterList(node.formalParameterList, printer, node);
  if (node.returnType) {
    printPunctuator(':', printer, node.formalParameterList.end, node);
    write(printer, ' ');
    printStatement(node.returnType, printer);
  }
  printFunctionBody(node.contents, printer);
}

function printFunctionBody(node: any, printer: Printer): void {
  if (node) {
    write(printer, ' ');
    printPunctuator('{', printer, node.start, node);
    printer.indent++;
    printFunctioBody(node.functionStatementList, printer, node);
    printer.indent--;
    printPunctuator('}', printer, node.functionStatementList.end, node);
  }
}

function printFunctioBody(node: any, printer: Printer, parentNode: any): void {
  const { directives, statements, start, end } = node;
  if (directives.length !== 0) {
    printer.indent--;
    printPrologueDirectives(
      printer,
      directives,
      /*startWithNewLine */ true,
      /* indented */ false
    );
    printer.indent++;
    writeLine(printer);
  }

  if (shouldprintBlockFunctionBodyOnSingleLine(printer, node)) {
    printer.indent--;
    printStatementList(
      printer,
      node,
      parentNode,
      statements,
      PrinterContext.SingleLine |
        PrinterContext.SpaceBetweenSiblings |
        PrinterContext.SpaceBetweenBraces
    );
    printer.indent++;
  } else {
    printStatementList(
      printer,
      node,
      parentNode,
      statements,
      PrinterContext.MultiLine
    );
  }

  printDetachedCommentsAndUpdateCommentsInfo(parentNode, printer);
  //printLeadingComments(printer, end);
  if (printer.hasWrittenComment && !printer.lineStart) writeLine(printer);
  return;
}

function printTypeAnnotation(node: any, printer: Printer): void {
  if (node.bitwiseOrToken) {
    printKeyword(node.bitwiseOrToken, printer, node);
    write(printer, ' ');
  }
  if (node.bitwiseAndToken) {
    printKeyword(node.bitwiseAndToken, printer, node);
    write(printer, ' ');
  }
  printStatement(node.type, printer);
}

function printFormalParameterList(
  node: any,
  printer: Printer,
  parentNode: any
): void {
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

function printBindingElement(node: any, printer: Printer): void {
  if (node.ellipsisToken) {
    printKeyword(node.ellipsisToken, printer, node);
  }
  printStatement(node.left, printer);
  if (node.optionalToken) {
    printKeyword(node.optionalToken, printer, node);
  }
  if (node.type) {
    printPunctuator(':', printer, node.left.end, node);
    write(printer, ' ');
    printStatement(node.type, printer);
  }
  if (node.right) {
    write(printer, ' ');
    printPunctuator(
      '=',
      printer,
      node.type ? node.type.end : node.left.end,
      node
    );
    write(printer, ' ');
    printStatement(node.right, printer);
  }
}

function printObjectLiteral(node: any, printer: Printer): void {
  printPropertyDefinitionList(node.propertyList, printer, node);
}

function printPropertyDefinitionList(
  node: any,
  printer: Printer,
  parentNode: any
): void {
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
      (node.trailingComma
        ? PrinterContext.AllowTrailingComma
        : PrinterContext.None) |
      (node.flags & NodeFlags.NewLine
        ? PrinterContext.PreferNewLine
        : PrinterContext.None)
  );
}

function printPropertyDefinition(node: any, printer: Printer): void {
  printExpression(node.left, printer);
  write(printer, ' ');
  printPunctuator(':', printer, node.left.end, node);
  write(printer, ' ');
  printExpression(node.right, printer);
}

function printCoverInitializedName(node: any, printer: Printer): void {
  printExpression(node.left, printer);
  write(printer, ' ');
  printPunctuator('=', printer, node.left.end, node);
  write(printer, ' ');
  printExpression(node.right, printer);
}

function printPropertyMethod(node: any, printer: Printer): void {
  if (node.asyncKeyword) {
    printKeyword(node.asyncKeyword, printer, node);
    write(printer, ' ');
  }
  if (node.asteriskToken) {
    printKeyword(node.asteriskToken, printer, node);
    write(printer, ' ');
  }
  if (node.getKeyword) {
    printKeyword(node.getKeyword, printer, node);
    write(printer, ' ');
  }
  if (node.setKeyword) {
    printKeyword(node.setKeyword, printer, node);
    write(printer, ' ');
  }
  printExpression(node.method, printer);
}

function printMethodDefinition(node: any, printer: Printer): void {
  printExpression(node.name, printer);
  printStatement(node.typeParameters, printer);
  printFormalParameterList(node.formalParameterList, printer, node);
  if (node.returnType) {
    printPunctuator(':', printer, node.formalParameterList.end, node);
    write(printer, ' ');
    printStatement(node.returnType, printer);
  }
  printFunctionBody(node.contents, printer);
}

function emitArrayBindingPattern(node: any, printer: Printer): void {
  printerBindingElementList(node.elementList, printer, node);
}

function printerBindingElementList(
  node: any,
  printer: Printer,
  parentNode: any
): void {
  printStatementList(
    printer,
    node,
    parentNode,
    node.elements,
    PrinterContext.SingleLine |
      PrinterContext.SquareBrackets |
      (node.trailingComma
        ? PrinterContext.AllowTrailingComma
        : PrinterContext.None) |
      PrinterContext.CommaDelimited |
      PrinterContext.SpaceBetweenSiblings
  );
}

function printObjectBindingPattern(node: any, printer: Printer): void {
  printPunctuator('{', printer, node.start, node);
  printBindingPropertyList(node.propertyList, printer, node);
  printPunctuator('}', printer, node.propertyList.end, node);
}

function printBindingPropertyList(
  node: any,
  printer: Printer,
  parentNode: any
): void {
  printStatementList(
    printer,
    node,
    parentNode,
    node.properties,
    (node.trailingComma
      ? PrinterContext.AllowTrailingComma
      : PrinterContext.None) |
      ((node.flags & NodeFlags.NewLine) === 0 &&
      isEmptyProperties(node, printer)
        ? PrinterContext.SingleLine |
          PrinterContext.SpaceBetweenBraces |
          PrinterContext.CommaDelimited |
          PrinterContext.SpaceBetweenSiblings
        : PrinterContext.CommaDelimited |
          PrinterContext.MultiLine |
          PrinterContext.Indented)
  );
}

function printBindingProperty(node: any, printer: Printer): void {
  if (node.ellipsisToken) {
    printKeyword(node.ellipsisToken, printer, node);
  }
  printExpression(node.key, printer);
  printPunctuator(':', printer, node.key.end, node);
  write(printer, ' ');
  printStatement(node.value, printer);
  if (node.initializer) {
    write(printer, ' ');
    printPunctuator('=', printer, node.value.end, node);
    write(printer, ' ');
    printExpression(node.initializer, printer);
  }
}

function printArrowParameterList(
  node: any,
  printer: Printer,
  parentNode: any
): void {
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

function printArrowFunction(node: any, printer: Printer): void {
  if (node.asyncKeyword) {
    printKeyword(node.asyncKeyword, printer, node);
    write(printer, ' ');
  }

  if (node.typeParameters) printStatement(node.typeParameters, printer);
  node.arrowPatameterList.kind === SyntaxKind.ArrowPatameterList
    ? printArrowParameterList(node.arrowPatameterList, printer, node)
    : printStatement(node.arrowPatameterList, printer);

  write(printer, ' ');
  printKeyword(node.arrowToken, printer, node);
  write(printer, ' ');

  if (node.contents.kind === SyntaxKind.FunctionBody) {
    printFunctionBody(node.contents, printer);
  } else {
    printStatement(node.contents, printer);
  }
}

function printClassExpressionOrDeclaration(node: any, printer: Printer): void {
  if (node.declareKeyword) {
    printKeyword(node.declareKeyword, printer, node);
    write(printer, ' ');
  }
  if (node.decorators) {
    printDecoratorList(node.decorators, printer, node);
  }

  printKeyword(node.classKeyword, printer, node);
  write(printer, ' ');
  printStatement(node.name, printer);
  if (node.typeParameters) {
    printStatement(node.typeParameters, printer);
  }
  write(printer, ' ');
  printStatement(node.tail, printer);
}

function printTail(node: any, printer: Printer): void {
  if (node.classHeritage) {
    printStatement(node.classHeritage, printer);
  }

  if (node.flags & NodeFlags.Declared) {
    printObjectType(node.body, printer, node);
  } else {
    printPunctuator('{', printer, node.start, node);
    printClassBody(node.body, printer, node);
    printPunctuator('}', printer, node.body.end, node);
  }
}

function printClassHeritage(node: any, printer: Printer): void {
  printKeyword(node.extendsKeyword, printer, node);
  write(printer, ' ');
  printExpression(node.expression, printer);
  if (node.typeParameter) {
    printStatement(node.typeParameter, printer);
  }
  write(printer, ' ');
}

function printClassBody(
  node: any,
  printer: Printer,
  parentNode: SyntaxNode
): void {
  printStatementList(
    printer,
    node,
    parentNode,
    node.elements,
    PrinterContext.Indented | PrinterContext.MultiLine
  );
}

function printClassElement(node: any, printer: Printer): void {
  if (node.declareToken) {
    printKeyword(node.declareToken, printer, node);
  }
  if (node.decorators) {
    printDecoratorList(node.decorators, printer, node);
  }

  if (node.staticKeyword) {
    printKeyword(node.staticKeyword, printer, node);
    write(printer, ' ');
  }
  if (node.asyncKeyword) {
    printKeyword(node.asyncKeyword, printer, node);
    write(printer, ' ');
  }
  if (node.setKeyword) {
    printKeyword(node.setKeyword, printer, node);
    write(printer, ' ');
  }
  if (node.getKeyword) {
    printKeyword(node.getKeyword, printer, node);
    write(printer, ' ');
  }

  if (node.asteriskToken) {
    printKeyword(node.asteriskToken, printer, node);
  }

  printExpression(node.method, printer);
}

function printFieldDefinition(node: any, printer: Printer): void {
  if (node.decorators) {
    printDecoratorList(node.decorators, printer, node);
  }
  if (node.declaredToken) {
    printKeyword(node.declaredToken, printer, node);
  }

  if (node.staticKeyword) {
    printKeyword(node.staticKeyword, printer, node);
    write(printer, ' ');
  }

  if (node.asyncKeyword) {
    printKeyword(node.asyncKeyword, printer, node);
    write(printer, ' ');
  }

  printExpression(node.key, printer);

  if (node.optionalToken) {
    printKeyword(node.optionalToken, printer, node);
  }
  if (node.type) {
    printPunctuator(
      ':',
      printer,
      node.optionalToken ? node.optionalToken.end : node.key.end,
      node
    );
    write(printer, ' ');
    printStatement(node.type, printer);
  }

  if (node.initializer) {
    write(printer, ' ');
    printPunctuator(
      '=',
      printer,
      node.type
        ? node.type.end
        : node.optionalToken
        ? node.optionalToken.end
        : node.key.end,
      node
    );
    write(printer, ' ');
    printExpression(node.initializer, printer);
  }
}

function printBigIntLiteral(node: any, printer: Printer): void {
  return printNumericLiteral(<any>node, printer);
}

function printIndexExpression(node: any, printer: Printer): void {
  printStatement(node.member, printer);
  if (
    node.flags & NodeFlags.FloatingPointLiteral &&
    // check if numeric literal is a decimal literal that was originally written with a dot
    printer.source.indexOf('.')
  ) {
    write(printer, '.');
  }
  printPunctuator('.', printer, node.member.end, node);
  printStatement(node.expression, printer);
}

function printMemberAccessExpression(node: any, printer: Printer): void {
  printStatement(node.member, printer);
  printPunctuator('[', printer, node.member.end, node);
  printStatement(node.expression, printer);
  printPunctuator(']', printer, node.expression.end, node);
}

function printArrayType(node: any, printer: Printer): void {
  printStatement(node.type, printer);
  write(printer, '[');
  write(printer, ']');
}

function printArrowFunctionType(node: any, printer: Printer): void {
  if (node.typeParameters) {
    printStatement(node.typeParameters, printer);
  }
  write(printer, '(');
  printStatement(node.arrowTypeParameterList, printer);
  printPunctuator(')', printer, node.arrowTypeParameterList.end, node);
  write(printer, ' ');
  printKeyword(node.arrowToken, printer, node);
  write(printer, ' ');
  printStatement(node.returnType, printer);
}

function printArrowTypeParameterList(node: any, printer: Printer): void {
  printStatementList(
    printer,
    node,
    node,
    node.parameters,
    PrinterContext.CommaDelimited |
      PrinterContext.SpaceBetweenSiblings |
      PrinterContext.SingleLine |
      PrinterContext.Indented |
      (PrinterContext.Parenthesis & ~PrinterContext.Parenthesis) |
      (node.trailingComma
        ? PrinterContext.AllowTrailingComma
        : PrinterContext.None)
  );
}

function printArrowTypeParameter(node: any, printer: Printer): void {
  if (node.ellipsisToken) {
    printKeyword(node.ellipsisToken, printer, node);
  }
  if (node.name) {
    printStatement(node.name, printer);
  }
  if (node.optionalToken) {
    printKeyword(node.optionalToken, printer, node);
  }
  if (node.types) {
    if (node.name) {
      printPunctuator(
        ':',
        printer,
        node.name
          ? node.name.end
          : node.optionalToken
          ? node.optionalToken.end
          : node.start,
        node
      );
      write(printer, ' ');
    }
    printStatement(node.types, printer);
  }
}

function printBigIntType(node: any, printer: Printer): void {
  return printNumericLiteral(<any>node, printer);
}

function printFunctionTypeParameterList(node: any, printer: Printer): void {
  printStatementList(
    printer,
    node,
    node,
    node.parameters,
    PrinterContext.CommaDelimited |
      PrinterContext.SpaceBetweenSiblings |
      PrinterContext.SingleLine |
      PrinterContext.Indented |
      (PrinterContext.Parenthesis & ~PrinterContext.Parenthesis) |
      (node.trailingComma
        ? PrinterContext.AllowTrailingComma
        : PrinterContext.None)
  );
}

function printFunctionTypeParameter(node: any, printer: Printer): void {
  if (node.ellipsisToken) {
    printKeyword(node.ellipsisToken, printer, node);
  }
  if (node.name) {
    printStatement(node.name, printer);
  }
  if (node.optionalToken) {
    printKeyword(node.optionalToken, printer, node);
  }
  if (node.types) {
    if (node.name) {
      printPunctuator(
        ':',
        printer,
        node.name
          ? node.name.end
          : node.optionalToken
          ? node.optionalToken.end
          : node.start,
        node
      );
      write(printer, ' ');
    }
    printStatement(node.types, printer);
  }
}

function printFunctionType(node: any, printer: Printer): void {
  if (node.typeParameter) {
    printStatement(node.typeParameter, printer);
    write(printer, ' ');
  }
  write(printer, '(');
  printStatement(node.functionTypeParameterList, printer);
  printPunctuator(')', printer, node.functionTypeParameterList.end, node);
  if (node.returnType) {
    printPunctuator(':', printer, node.functionTypeParameterList.end, node);
    write(printer, ' ');
    printStatement(node.returnType, printer);
  }
}

function printIndexedAccessType(node: any, printer: Printer): void {
  printStatement(node.objectType, printer);
  printPunctuator('[', printer, node.objectType.end, node);
  printStatement(node.indexType, printer);
  printPunctuator(']', printer, node.indexType.end, node);
}

function printIntersectionType(node: any, printer: Printer): void {
  printStatementList(
    printer,
    node,
    node,
    node.types,
    PrinterContext.AmpersandDelimited |
      PrinterContext.SpaceBetweenSiblings |
      PrinterContext.SingleLine
  );
}

function printNullableType(node: any, printer: Printer): void {
  printKeyword(node.nullableToken, printer, node);
  printStatement(node.type, printer);
}

function printObjectTypeCallProperty(node: any, printer: Printer): void {
  if (node.proto) {
    printKeyword(node.protoToken, printer, node);
    write(printer, ' ');
  }
  if (node.staticKeyword) {
    printKeyword(node.staticKeyword, printer, node);
    write(printer, ' ');
  }
  if (node.typeParameter) {
    printStatement(node.typeParameter, printer);
    write(printer, ' ');
  }
  write(printer, '(');
  printStatement(node.value, printer);
  let pos = printPunctuator(')', printer, node.value.end, node);
  if (node.returnType) {
    printPunctuator(':', printer, pos, node);
    write(printer, ' ');
    printStatement(node.returnType, printer);
  }
}

function printObjectTypeIndexer(node: any, printer: Printer): void {
  if (node.proto) {
    printKeyword(node.protoToken, printer, node);
    write(printer, ' ');
  }
  if (node.staticKeyword) {
    printKeyword(node.staticKeyword, printer, node);
    write(printer, ' ');
  }
  write(printer, '[');
  printStatement(node.name, printer);
  printStatement(node.key, printer);
  printPunctuator(']', printer, node.key.end, node);
  printPunctuator(':', printer, node.key.end, node);
  write(printer, ' ');
  printStatement(node.type, printer);
}

function printObjectTypeInternalSlot(node: any, printer: Printer): void {
  if (node.proto) {
    printKeyword(node.protoToken, printer, node);
    write(printer, ' ');
  }
  if (node.staticKeyword) {
    printKeyword(node.staticKeyword, printer, node);
    write(printer, ' ');
  }

  let pos = printPunctuator(
    '[',
    printer,
    node.proto
      ? node.proto.end
      : node.staticKeyword
      ? node.staticKeyword.end
      : node.start,
    node
  );
  printPunctuator('[', printer, pos, node);
  printStatement(node.name, printer);
  pos = printPunctuator(']', printer, node.name.end, node);
  printPunctuator(']', printer, pos, node);
  if (node.optionalToken) {
    printKeyword(node.optionalToken, printer, node);
  }
  printStatement(node.type, printer);
}

function printObjectTypeProperty(node: any, printer: Printer): void {
  if (node.proto) {
    printKeyword(node.protoToken, printer, node);
    write(printer, ' ');
  }
  if (node.staticKeyword) {
    printKeyword(node.staticKeyword, printer, node);
    write(printer, ' ');
  }
  printStatement(node.key, printer);
  if (node.optionalToken) {
    printKeyword(node.optionalToken, printer, node);
  }
  if (node.type.kind === SyntaxKind.FunctionType) {
    printStatement(node.type, printer);
  } else {
    printPunctuator(
      ':',
      printer,
      node.optionalToken ? node.optionalToken.end : node.key.end,
      node
    );
    write(printer, ' ');
    printStatement(node.type, printer);
  }
}

function printObjectTypeSpreadProperty(node: any, printer: Printer): void {
  if (node.proto) {
    printKeyword(node.protoToken, printer, node);
    write(printer, ' ');
  }
  if (node.static) {
    printKeyword(node.static, printer, node);
    write(printer, ' ');
  }
  printKeyword(node.ellipsisToken, printer, node);
  printStatement(node.type, printer);
}

function printObjectType(
  node: any,
  printer: Printer,
  parentNode: SyntaxNode
): void {
  let flags =
    parentNode.flags & NodeFlags.NewLine || node.properties.length > 3
      ? PrinterContext.MultiLine |
        PrinterContext.Indented |
        PrinterContext.OptionalIfEmpty |
        PrinterContext.NoSpaceIfEmpty |
        PrinterContext.CommaDelimited
      : PrinterContext.SingleLine |
        PrinterContext.SpaceBetweenBraces |
        PrinterContext.SpaceBetweenSiblings |
        PrinterContext.NoSpaceIfEmpty |
        PrinterContext.CommaDelimited;
  if (node.trailingComma) flags |= PrinterContext.AllowTrailingComma;
  write(printer, '{');
  printStatementList(printer, node, parentNode, node.properties, flags);
  write(printer, '}');
}

function printOpaqueType(node: any, printer: Printer): void {
  if (node.declareToken) {
    printKeyword(node.declareToken, printer, node);
    write(printer, ' ');
    printKeyword(node.opaqueToken, printer, node);
  } else {
    printKeyword(node.opaqueToken, printer, node);
    write(printer, ' ');

    printKeyword(node.typeToken, printer, node);

    write(printer, ' ');
    printStatement(node.name, printer);
    if (node.typeParameters) {
      printStatement(node.typeParameters, printer);
    }
    if (node.superType) {
      write(printer, ':');
      write(printer, ' ');
      printStatement(node.superType, printer);
    }

    write(printer, ' ');
    printPunctuator(
      '=',
      printer,
      node.superType ? node.superType.end : node.name.end,
      node
    );

    write(printer, ' ');
    printStatement(node.impltype, printer);
  }
}

function printOptionalIndexedAccess(node: any, printer: Printer): void {
  printStatement(node.objectType, printer);
  printKeyword(node.optionalIndexedToken, printer, node);
  printPunctuator('[', printer, node.optionalIndexedToken.end, node);
  printStatement(node.indexType, printer);
  printPunctuator(']', printer, node.indexType.end, node);
}

function printOptionalType(node: any, printer: Printer): void {
  printStatement(node.type, printer);
  printKeyword(node.optionalToken, printer, node);
}

function printParenthesizedType(node: any, printer: Printer): void {
  printPunctuator('(', printer, node.start, node);
  printStatement(node.type, printer);
  printPunctuator(')', printer, node.type.end, node);
}

function printQualifiedType(node: any, printer: Printer): void {
  printStatement(node.qualification, printer);
  write(printer, '.');
  printStatement(node.name, printer);
}

function printRestType(node: any, printer: Printer): void {
  printKeyword(node.ellipsisToken, printer, node);
  printStatement(node.type, printer);
}

function printStringType(node: any, printer: Printer): void {
  return printStringLiteral(<StringLiteral>node, printer, {
    singleQuote: false,
  });
}
function printSubtractionType(node: any, printer: Printer): void {
  printKeyword(node.subtractionToken, printer, node);
  return printNumericLiteral(<any>node, printer);
}

function printTupleType(node: any, printer: Printer): void {
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
          PrinterContext.AllowTrailingComma
      : PrinterContext.CommaDelimited |
          PrinterContext.SpaceBetweenSiblings |
          PrinterContext.SingleLine
  );
  write(printer, ']');
}

function printTypeAlias(node: any, printer: Printer): void {
  if (node.declareToken) {
    printKeyword(node.declareToken, printer, node);
    write(printer, ' ');
  }
  printKeyword(node.typeToken, printer, node);
  write(printer, ' ');
  printStatement(node.name, printer);
  if (node.typeParameters) {
    printStatement(node.typeParameters, printer);
  }
  write(printer, ' ');
  printKeyword(node.assignToken, printer, node);
  write(printer, ' ');
  printStatement(node.type, printer);
}

function printTypeInstantiations(node: any, printer: Printer): void {
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

function printTypeParameterDeclaration(node: any, printer: Printer): void {
  printStatement(node.declarations, printer);
}

function printTypeParameterInstantiation(node: any, printer: Printer): void {
  printStatement(node.typeInstantiations, printer);
}

function printTypeParameterList(node: any, printer: Printer): void {
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

function printTypeParameter(node: any, printer: Printer): void {
  printStatement(node.name, printer);
  if (node.type) {
    write(printer, ':');
    write(printer, ' ');
    printStatement(node.type, printer);
  }

  if (node.assignToken) {
    printKeyword(node.assignToken, printer, node);
    write(printer, ' ');
    printStatement(node.defaultType, printer);
  }
}

function printTypeReference(node: any, printer: Printer): void {
  printStatement(node.typeName, printer);
  if (node.typeParameters) {
    printStatement(node.typeParameters, printer);
  }
}

function printTypeofType(node: any, printer: Printer): void {
  printKeyword(node.typeOfKeyword, printer, node);
  write(printer, ' ');
  printStatement(node.type, printer);
}

function printUnionType(node: any, printer: Printer): void {
  printStatementList(
    printer,
    node,
    node,
    node.types,
    PrinterContext.BarDelimited |
      PrinterContext.SpaceBetweenSiblings |
      PrinterContext.SingleLine
  );
}

function printImportCall(node: any, printer: Printer): void {
  printKeyword(node.importKeyword, printer, node);
  printPunctuator('(', printer, node.importKeyword.end, node);
  printExpression(node.expression, printer);
  printPunctuator(')', printer, node.expression.end, node);
}

function printImportMeta(node: any, printer: Printer): void {
  printKeyword(node.importKeyword, printer, node);
  printPunctuator('.', printer, node.importKeyword.end, node);
  printKeyword(node.metaIdentifier, printer, node);
}

function printOptionalExpression(node: any, printer: Printer): void {
  printExpression(node.member, printer);
  printKeyword(node.chainToken, printer, node);
  printExpression(node.chain, printer);
}

function printOptionalChain(node: any, printer: Printer): void {
  printStatement(node.chain, printer);
}

function printCallChain(node: any, printer: Printer): void {
  if (node.chain) printExpression(node.chain, printer);
  if (node.typeArguments) {
    printStatement(node.typeArguments, printer);
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

function printIndexExpressionChain(node: any, printer: Printer): void {
  if (node.chain) {
    printStatement(node.chain, printer);
  }
  printStatement(node.expression, printer);
}

function printMemberAccessChain(node: any, printer: Printer): void {
  if (node.chain) {
    printStatement(node.chain, printer);
  }
  printPunctuator('[', printer, node.chain ? node.chain.end : node.start, node);
  printExpression(node.expression, printer);
  printPunctuator(']', printer, node.expression.end, node);
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
        (operand.operandToken.kind === SyntaxKind.Add ||
          operand.operandToken.kind === SyntaxKind.Increment)) ||
        (node.operandToken.kind === SyntaxKind.Subtract &&
          (operand.operandToken.kind === SyntaxKind.Subtract ||
            operand.operandToken.kind === SyntaxKind.Decrement))))
  );
}

function printUnaryExpression(node: any, printer: Printer): void {
  printKeyword(node.operandToken, printer, node);
  if (shouldprintWhitespaceBeforeOperand(node)) {
    write(printer, ' ');
  }
  write(printer, ' ');
  printExpression(node.operand, printer);
}

function printDecoratorList(
  node: any,
  printer: Printer,
  parentNode: SyntaxNode
): any {
  printStatementList(
    printer,
    node,
    parentNode,
    node.elements,
    PrinterContext.MultiLine |
      PrinterContext.OptionalIfUndefined |
      PrinterContext.OptionalIfEmpty
  );
}

function printDecorator(node: any, printer: Printer): any {
  printKeyword(node.decoratorToken, printer, node);
  printExpression(node.expression, printer);
}

function printTaggedTemplate(node: any, printer: Printer): void {
  printStatement(node.member, printer);
  printStatement(node.template, printer);
}

function printTemplateExpression(node: any, printer: Printer): void {
  write(printer, '`');
  printStatementList(
    printer,
    node,
    node,
    node.spans,
    PrinterContext.SingleLine | PrinterContext.NoInterveningComments
  );
  printStatement(node.tail, printer);
  write(printer, '`');
}

function printTemplateSpan(node: any, printer: Printer): void {
  write(printer, node.rawText);
  const pos = printPunctuator('$', printer, node.start, node);
  printPunctuator('{', printer, pos, node);
  printExpression(node.expression, printer);
  printPunctuator('}', printer, node.expression.end, node);
}

function printTemplateTail(node: any, printer: Printer): void {
  node.flags & NodeFlags.TemplateLiteral
    ? write(printer, '`' + node.rawText + '`')
    : write(printer, node.rawText);
}

function printImportSpecifier(node: any, printer: Printer): void {
  if (node.name) {
    printExpression(node.name, printer);
  }
  if (node.moduleExportName) {
    printExpression(node.moduleExportName, printer);
  }
  if (node.typeKeyword) {
    write(printer, ' ');
    printKeyword(node.typeKeyword, printer, node);
  }
  if (node.asKeyword) {
    write(printer, ' ');
    printKeyword(node.asKeyword, printer, node);
  }
  write(printer, ' ');
  printExpression(node.binding, printer);
}

function printNamedImports(node: any, printer: Printer): void {
  printExportsImportsList(node.importsList, printer);
}

function printExportsImportsList(node: any, printer: Printer): void {
  write(printer, '{');
  printStatementList(
    printer,
    node,
    node,
    node.specifiers,
    PrinterContext.CommaDelimited |
      PrinterContext.SpaceBetweenSiblings |
      PrinterContext.AllowTrailingComma |
      PrinterContext.SingleLine |
      PrinterContext.SpaceBetweenBraces
  );
  write(printer, '}');
}

function printNameSpaceImport(node: any, printer: Printer): void {
  printKeyword(node.asteriskToken, printer, node);
  write(printer, ' ');
  printStatement(node.binding, printer);
}

function printImportClause(node: any, printer: Printer): void {
  if (node.defaultBinding) {
    printStatement(node.defaultBinding, printer);
  }
  if (node.nameSpaceImport) {
    write(printer, ' ');
    printStatement(node.nameSpaceImport, printer);
  }
  printStatement(node.namedImports, printer);
}

function printFromClause(node: any, printer: Printer): void {
  if (node) {
    write(printer, ' ');
    if (node.fromKeyword) {
      printKeyword(node.fromKeyword, printer, node);
      write(printer, ' ');
    }
    printStatement(node.from, printer);
  }
}

function printImportDeclaration(node: any, printer: Printer): void {
  printKeyword(node.importKeyword, printer, node);
  write(printer, ' ');
  if (node.typeKeyword) {
    printKeyword(node.typeKeyword, printer, node);
    write(printer, ' ');
  }
  if (node.typeofKeyword) {
    printKeyword(node.typeofKeyword, printer, node);
    write(printer, ' ');
  }
  if (node.importClause) {
    printStatement(node.importClause, printer);
  }

  if (node.fromClause) {
    printStatement(node.fromClause, printer);
  }
  if (node.moduleSpecifier) {
    printStatement(node.moduleSpecifier, printer);
  }

  write(printer, ';');
}

function printExportDefault(node: any, printer: Printer): void {
  printKeyword(node.exportKeyword, printer, node);
  write(printer, ' ');
  printKeyword(node.defaultKeyword, printer, node);
  write(printer, ' ');
  printStatement(node.declaration, printer);
  write(printer, ';');
}

function printExportFromClause(node: any, printer: Printer): void {
  printKeyword(node.asteriskToken, printer, node);
  write(printer, ' ');
  if (node.asKeyword) {
    printKeyword(node.asKeyword, printer, node);
    write(printer, ' ');
    printStatement(node.moduleExportName, printer);
    printStatement(node.namedBinding, printer);
  }
}

function printExportDeclaration(node: any, printer: Printer): void {
  printKeyword(node.exportKeyword, printer, node);
  write(printer, ' ');
  if (node.declaration) {
    printStatement(node.declaration, printer);
  }
  if (node.exportFromClause) {
    printStatement(node.exportFromClause, printer);
  }
  if (node.namedExports) {
    printStatement(node.namedExports, printer);
  }
  if (node.fromClause) {
    printStatement(node.fromClause, printer);
  }
  if (!node.declaration) {
    write(printer, ';');
  }
}

function printNamedExports(node: any, printer: Printer): void {
  printExportsImportsList(node.exportsList, printer);
}

function printExportSpecifier(node: any, printer: Printer): void {
  if (node.name) {
    printExpression(node.name, printer);
  }
  if (node.moduleExportName) {
    printExpression(node.moduleExportName, printer);
  }

  if (node.asKeyword) {
    write(printer, ' ');
    printKeyword(node.asKeyword, printer, node);
  }
  if (node.binding) {
    write(printer, ' ');
    printExpression(node.binding, printer);
  }
}

function printNumericLiteral(node: any, printer: Printer): void {
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

function printStaticBlock(node: any, printer: Printer): void {
  if (node.decorators) {
    printDecoratorList(node.decorators, printer, node);
  }
  if (node.declaredKeyword) {
    printKeyword(node.declaredKeyword, printer, node);
  }
  try {
    printKeyword(node.staticKeyword, printer, node);
  } catch (e) {}
  printStaticBlockBody(node.block, printer, node);
}

function printStaticBlockBody(
  node: any,
  printer: Printer,
  parentNode: any
): void {
  const { start, end, block } = node;
  if (start >= 0) {
    printDetachedCommentsAndUpdateCommentsInfo(node, printer);
  }
  write(printer, ' ');
  printPunctuator('{', printer, node.start, node);
  printer.indent++;
  printStatementList(
    printer,
    node,
    parentNode,
    block.statements,
    PrinterContext.MultiLine
  );
  printer.indent--;
  printPunctuator('}', printer, block.end, node);

  if (end >= 0) {
    printLeadingComments(
      printer,
      block.statements.length !== 0
        ? lastOrUndefined(block.statements).end
        : end
    );
  }
}

export function printStringLiteral(
  node: StringLiteral,
  printer: Printer,
  _options: any
): void {
  write(
    printer,
    makeString(node.rawText, node.flags & NodeFlags.SingleQuote ? "'" : '"')
  );
}

export function printNewTarget(node: any, printer: Printer) {
  printKeyword(node.newKeyword, printer, node);
  write(printer, '.');
  printKeyword(node.targetIdentifier, printer, node);
}
