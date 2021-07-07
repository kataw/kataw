import {
  SyntaxKind,
  SyntaxNode,
  NodeFlags,
  tokenToString,
  TransformFlags,
} from '../ast/syntax-node';
import { RootNode } from '../ast/root-node';
import { skipWhitespace } from '../parser/scanner/common';
import {
  Printer,
  createPrinter,
  printKeyword,
  printKeywordNoSpace,
  shouldFlatten,
  shouldprintWhitespaceBeforeOperand,
  PrinterFlags,
  makeString,
  printAssignmentRight,
  toggleSemicolon,
} from './core';
import {
  toString,
  DocumentKind,
  DocumentFlags,
  concat,
  group,
  join,
  softline,
  ifBreak,
  line,
  indent,
  hardline,
} from '../formatter/index';

export interface PrinterOptions {
  printWidth?: number;
  tabWidth?: number;
  noSemicolon?: boolean;
  singleQuote?: boolean;
  noWhitespace?: boolean;
  noObjectCurlySpacing?: boolean;
  arrayBracketSpacing?: boolean;
  trailingCommas?: boolean;
  disallowStringEscape?: boolean;
  allowArrowParens?: boolean;
  spaceAfterAt?: boolean;
  endOfLine?: string;
}

export const nodeLookupMap: any = {
  [SyntaxKind.RootNode]: printRootNode,
  [SyntaxKind.ExpressionStatement]: printExpressionStatement,
  [SyntaxKind.EmptyStatement]: printEmptyStatement,
  [SyntaxKind.Identifier]: printIdentifier,
  [SyntaxKind.PrivateIdentifier]: printPrivateIdentifier,
  [SyntaxKind.StringLiteral]: printStringLiteral,
  [SyntaxKind.BinaryExpression]: printBinaryExpression,
  [SyntaxKind.ConditionalExpression]: printConditionalExpression,
  [SyntaxKind.AssignmentExpression]: printAssignmentExpression,
  [SyntaxKind.IndexExpression]: printIndexExpression,
  [SyntaxKind.MemberAccessExpression]: printMemberAccessExpression,
  [SyntaxKind.PrefixUpdateExpression]: printPrefixUpdateExpression,
  [SyntaxKind.PostfixUpdateExpression]: printPostfixUpdateExpression,
  [SyntaxKind.UnaryExpression]: printUnaryExpression,
  [SyntaxKind.AwaitExpression]: printAwaitExpression,
  [SyntaxKind.ArrayLiteral]: printArrayLiteral,
  [SyntaxKind.ArrayBindingPattern]: printArrayBindingPattern,
  [SyntaxKind.BlockStatement]: printBlockStatement,
  [SyntaxKind.BindingProperty]: printBindingProperty,
  [SyntaxKind.UnionType]: printUnionType,
  [SyntaxKind.ArrowTypeParameterList]: printArrowTypeParameterList,
  [SyntaxKind.FunctionStatementList]: printFunctionStatementList,
  [SyntaxKind.TypeofType]: printTypeofType,
  [SyntaxKind.TypeReference]: printTypeReference,
  [SyntaxKind.TypeParameter]: printTypeParameter,
  [SyntaxKind.TypeParameterInstantiation]: printTypeParameterInstantiation,
  [SyntaxKind.TypeInstantiations]: printTypeInstantiations,
  [SyntaxKind.SubtractionType]: printSubtractionType,
  [SyntaxKind.RestType]: printRestType,
  [SyntaxKind.QualifiedType]: printQualifiedType,
  [SyntaxKind.ParenthesizedType]: printParenthesizedType,
  [SyntaxKind.ParenthesizedExpression]: printParenthesizedExpression,
  [SyntaxKind.OptionalType]: printOptionalType,
  [SyntaxKind.OptionalIndexedAccess]: printOptionalIndexedAccess,
  [SyntaxKind.OpaqueType]: printOpaqueType,
  [SyntaxKind.ObjectTypeSpreadProperty]: printObjectTypeSpreadProperty,
  [SyntaxKind.ArrowFunctionType]: printArrowFunctionType,
  [SyntaxKind.ArrowTypeParameter]: printArrowTypeParameter,
  [SyntaxKind.BigIntType]: printBigIntType,
  [SyntaxKind.FunctionTypeParameterList]: printFunctionTypeParameterList,
  [SyntaxKind.FunctionTypeParameter]: printFunctionTypeParameter,
  [SyntaxKind.FunctionType]: printFunctionType,
  [SyntaxKind.IndexedAccessType]: printIndexedAccessType,
  [SyntaxKind.IntersectionType]: printIntersectionType,
  [SyntaxKind.NullableType]: printNullableType,
  [SyntaxKind.ObjectTypeCallProperty]: printObjectTypeCallProperty,
  [SyntaxKind.ObjectTypeIndexer]: printObjectTypeIndexer,
  [SyntaxKind.ObjectTypeInternalSlot]: printObjectTypeInternalSlot,
  [SyntaxKind.ObjectTypeProperty]: printObjectTypeProperty,
  [SyntaxKind.ArrayType]: printArrayType,
  [SyntaxKind.TypeAnnotation]: printTypeAnnotation,
  [SyntaxKind.Block]: printBlock,
  [SyntaxKind.TypeAlias]: printTypeAlias,
  [SyntaxKind.CommaOperator]: printCommaOperator,
  [SyntaxKind.CallChain]: printCallChain,
  [SyntaxKind.CallExpression]: printCallExpression,
  [SyntaxKind.ObjectLiteral]: printObjectLiteral,
  [SyntaxKind.WhileStatement]: printWhileStatement,
  [SyntaxKind.IfStatement]: printIfStatement,
  [SyntaxKind.ReturnStatement]: printReturnStatement,
  [SyntaxKind.DoWhileStatement]: printDoWhileStatement,
  [SyntaxKind.ForInStatement]: printForInStatement,
  [SyntaxKind.ForOfStatement]: printForOfStatement,
  [SyntaxKind.ForStatement]: printForStatement,
  [SyntaxKind.LexicalBinding]: printVariableDeclarationOrLexicalBinding,
  [SyntaxKind.VariableDeclaration]: printVariableDeclarationOrLexicalBinding,
  [SyntaxKind.FunctionDeclaration]: printFunctionDeclarationOrExpression,
  [SyntaxKind.FunctionExpression]: printFunctionDeclarationOrExpression,
  [SyntaxKind.ClassDeclaration]: printClassDeclarationOrExpression,
  [SyntaxKind.ClassExpression]: printClassDeclarationOrExpression,
  [SyntaxKind.BindingElement]: printBindingElement,
  [SyntaxKind.VariableStatement]: printVariableStatement,
  [SyntaxKind.LexicalDeclaration]: printLexicalDeclaration,
  [SyntaxKind.WhileStatement]: printWhileStatement,
  [SyntaxKind.CaseClause]: printCaseClause,
  [SyntaxKind.DefaultClause]: printDefaultClause,
  [SyntaxKind.ContinueStatement]: printContinueStatement,
  [SyntaxKind.ClassHeritage]: printClassHeritage,
  [SyntaxKind.BreakStatement]: printBreakStatement,
  [SyntaxKind.SwitchStatement]: printSwitchStatement,
  [SyntaxKind.BindingProperty]: printBindingProperty,
  [SyntaxKind.TryStatement]: printTryStatement,
  [SyntaxKind.ThrowStatement]: printThrowStatement,
  [SyntaxKind.LabelledStatement]: printLabelledStatement,
  [SyntaxKind.BlockStatement]: printBlockStatement,
  [SyntaxKind.DebuggerStatement]: printDebuggerStatement,
  [SyntaxKind.WithStatement]: printWithStatement,
  [SyntaxKind.Decorator]: printDecorator,
  [SyntaxKind.ObjectType]: printObjectType,
  [SyntaxKind.OptionalIndexedAccess]: printOptionalIndexedAccess,
  [SyntaxKind.OptionalType]: printOptionalType,
  [SyntaxKind.NumericLiteral]: printNumericLiteral,
  [SyntaxKind.BigIntLiteral]: printNumericLiteral,
  [SyntaxKind.NumberType]: printNumericLiteral,
  [SyntaxKind.ParenthesizedType]: printParenthesizedType,
  [SyntaxKind.QualifiedType]: printQualifiedType,
  [SyntaxKind.RestType]: printRestType,
  [SyntaxKind.StringType]: printStringType,
  [SyntaxKind.SubtractionType]: printSubtractionType,
  [SyntaxKind.TupleType]: printTupleType,
  [SyntaxKind.TypeParameterDeclaration]: printTypeParameterDeclaration,
  [SyntaxKind.TypeParameterList]: printTypeParameterList,
  [SyntaxKind.ExportDeclaration]: printExportDeclaration,
  [SyntaxKind.ExportFromClause]: printExportFromClause,
  [SyntaxKind.ExportDefault]: printExportDefault,
  [SyntaxKind.NamedExports]: printNamedExports,
  [SyntaxKind.ExportSpecifier]: printExportSpecifier,
  [SyntaxKind.ImportDeclaration]: printImportDeclaration,
  [SyntaxKind.ImportClause]: printImportClause,
  [SyntaxKind.NameSpaceImport]: printNameSpaceImport,
  [SyntaxKind.NamedImports]: printNamedImports,
  [SyntaxKind.ImportSpecifier]: printImportSpecifier,
  [SyntaxKind.FromClause]: printFromClause,
  [SyntaxKind.NewTarget]: printNewTarget,
  [SyntaxKind.NewExpression]: printNewExpression,
  [SyntaxKind.YieldExpression]: printYieldExpression,
  [SyntaxKind.SpreadProperty]: printSpreadElement,
  [SyntaxKind.SpreadElement]: printSpreadElement,
  [SyntaxKind.ClassTail]: printClassTail,
  [SyntaxKind.ClassElement]: printClassElement,
  [SyntaxKind.ArrowFunction]: printArrowFunction,
  [SyntaxKind.ObjectBindingPattern]: printObjectBindingPattern,
  [SyntaxKind.CoverInitializedName]: printCoverInitializedName,
  [SyntaxKind.PropertyMethod]: printPropertyMethod,
  [SyntaxKind.PropertyDefinition]: printPropertyDefinition,
  [SyntaxKind.MethodDefinition]: printMethodDefinition,
  [SyntaxKind.ComputedPropertyName]: printComputedPropertyName,
  [SyntaxKind.RegularExpressionLiteral]: printRegularExpressionLiteral,
  [SyntaxKind.ImportCall]: printImportCall,
  [SyntaxKind.ImportMeta]: printImportMeta,
  [SyntaxKind.TaggedTemplate]: printTaggedTemplate,
  [SyntaxKind.TemplateExpression]: printTemplateExpression,
  [SyntaxKind.ThisKeyword]: printKeywordNoSpace,
  [SyntaxKind.NullKeyword]: printKeywordNoSpace,
  [SyntaxKind.FalseKeyword]: printKeywordNoSpace,
  [SyntaxKind.TrueKeyword]: printKeywordNoSpace,
  [SyntaxKind.Semicolon]: printKeywordNoSpace,
  [SyntaxKind.SuperKeyword]: printKeywordNoSpace,
  [SyntaxKind.Multiply]: printKeywordNoSpace,
  [SyntaxKind.ThisKeyword]: printKeywordNoSpace,
  [SyntaxKind.AnyKeyword]: printKeywordNoSpace,
  [SyntaxKind.NullKeyword]: printKeywordNoSpace,
  [SyntaxKind.UnknownKeyword]: printKeywordNoSpace,
  [SyntaxKind.UndefinedKeyword]: printKeywordNoSpace,
  [SyntaxKind.ObjectKeyword]: printKeywordNoSpace,
  [SyntaxKind.NeverKeyword]: printKeywordNoSpace,
  [SyntaxKind.VoidKeyword]: printKeywordNoSpace,
  [SyntaxKind.SymbolKeyword]: printKeywordNoSpace,
  [SyntaxKind.MixedKeyword]: printKeywordNoSpace,
  [SyntaxKind.NumberKeyword]: printKeywordNoSpace,
  [SyntaxKind.StringKeyword]: printKeywordNoSpace,
  [SyntaxKind.BooleanKeyword]: printKeywordNoSpace,
  [SyntaxKind.EmptyKeyword]: printKeywordNoSpace,
  [SyntaxKind.FalseKeyword]: printKeywordNoSpace,
  [SyntaxKind.TrueKeyword]: printKeywordNoSpace,
  [SyntaxKind.TemplateSpan]: printTemplateSpan,
  [SyntaxKind.TemplateTail]: printTemplateTail,
  [SyntaxKind.FieldDefinition]: printFieldDefinition,
  [SyntaxKind.OptionalExpression]: printOptionalExpression,
  [SyntaxKind.OptionalChain]: printOptionalChain,
  [SyntaxKind.IndexExpressionChain]: printIndexExpressionChain,
  [SyntaxKind.MemberAccessChain]: printMemberAccessChain,
};

export function printSource(root: RootNode, options?: PrinterOptions) {
  let flags = PrinterFlags.ObjectCurlySpacing | PrinterFlags.UseSemicolon;
  let printWidth = 80;
  let tabWidth = 2;
  let space = ' ';
  let lineEnd = '\n';
  if (options != null) {
    if (options.printWidth) printWidth = options.printWidth;
    if (options.tabWidth) tabWidth = options.tabWidth;
    if (options.noWhitespace) space = '';
    if (options.noSemicolon) flags &= ~PrinterFlags.UseSemicolon;
    if (options.singleQuote) flags |= PrinterFlags.SingleQuote;
    if (options.arrayBracketSpacing) flags |= PrinterFlags.ArrayBracketSpacing;
    if (options.noObjectCurlySpacing) flags &= ~PrinterFlags.ObjectCurlySpacing;
    if (options.trailingCommas) flags |= PrinterFlags.TrailinComma;
    if (options.spaceAfterAt) flags |= PrinterFlags.SpaceAfterAt;
    if (options.disallowStringEscape)
      flags |= PrinterFlags.DisallowStringEscape;
    if (options.allowArrowParens) flags |= PrinterFlags.ArrowParens;
    if (options.endOfLine) {
      const eof = options.endOfLine;
      // Common on Linux and macOS as well as inside git repos
      if (eof === 'lf') lineEnd = '\n';
      // Line Feed characters (\r\n), common on Windows
      if (eof === 'crlf') lineEnd = '\n\r';
      // Carriage Return character only (\r)
      if (eof === 'cr') lineEnd = '\r';
      // Removes all line endings
      if (eof === 'none') lineEnd = '';
    }
  }

  const printer = createPrinter(root.source, flags, space);
  return toString(
    printWidth,
    printStatement(printer, root, /* lineMap */ [], root),
  );
}

export function printStatement(
  printer: Printer,
  node: SyntaxNode,
  lineMap: number[],
  parentNode: SyntaxNode,
) {
  const map = nodeLookupMap[node.kind];
  return map ? map(printer, node, lineMap, parentNode) : '';
}

export function printIdentifier(printer: Printer, node: any): any {
  return node.rawText;
}

export function printPrivateIdentifier(printer: Printer, node: any): any {
  return node.rawText;
}

export function printAssignmentExpression(
  printer: Printer,
  node: any,
  lineMap: number[],
): any {
  const { operatorToken, left, right } = node;
  return node.flags & NodeFlags.IgnoreNextNode
    ? printer.source.slice(node.start, node.end)
    : group(
        concat([
          printStatement(printer, left, lineMap, node),
          printer.space,
          printKeyword(printer, operatorToken, node, /* addSpace */ false),
          operatorToken.flags & NodeFlags.IgnoreNextNode
            ? printer.source.slice(operatorToken.end, node.end)
            : printAssignmentRight(
                left,
                right,
                printStatement(printer, right, lineMap, node),
              ),
        ]),
        {},
      );
}

export function printConditionalExpression(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  // First, do the simple check to see if the 'IgnoreNextNode' bit has been set, and
  // ignore the entire 'ConditionalExpression' if the bitwise mask exists.

  if (node.flags & NodeFlags.IgnoreNextNode) {
    return printer.source.slice(node.start, node.end);
  }

  // Then, check for the 'IgnoreNextNode' bit on the 'consequent' property. This allows
  // Kataw to ignore formatting after the 'shortCircuit' property.
  //
  //  a ? // kataw-ignore
  //  b : c ? a : b;
  //
  if (node.consequent.flags & NodeFlags.IgnoreNextNode) {
    return concat([
      printStatement(printer, node.shortCircuit, lineMap, node),
      printer.space,
      '?',
      printer.source.slice(node.questionToken.end, node.end),
    ]);
  }

  const printed = concat([
    printStatement(printer, node.shortCircuit, lineMap, node),
    indent(
      concat([
        line,
        '?',
        printer.space,
        node.consequent.kind === SyntaxKind.ConditionalExpression
          ? printStatement(printer, node.consequent, lineMap, node)
          : indent(printStatement(printer, node.consequent, lineMap, node)),
        line,
        ':',
        printer.space,
        node.alternate.kind === SyntaxKind.ConditionalExpression
          ? printStatement(printer, node.alternate, lineMap, node)
          : indent(printStatement(printer, node.alternate, lineMap, node)),
      ]),
    ),
  ]);

  return parentNode.kind === SyntaxKind.ConditionalExpression
    ? printed
    : group(printed, {});
}

function printBinaryExpression(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: any,
): any {
  const parentKind = parentNode.kind;
  const parts: any = printBinaryExpressionRest(
    printer,
    node,
    lineMap,
    parentNode,
    parentKind === SyntaxKind.ParenthesizedExpression,
  );
  return parentKind === SyntaxKind.ParenthesizedExpression
    ? concat(parts)
    : parentKind === SyntaxKind.UnaryExpression ||
      parentNode.transformFlags &
        (SyntaxKind.IndexExpression | SyntaxKind.CallExpression) ||
      parentKind === SyntaxKind.OptionalExpression
    ? group(concat([indent(concat([softline, concat(parts)])), softline]), {})
    : (node.kind === SyntaxKind.BinaryExpression &&
        node.right.transformFlags &
          (TransformFlags.ShouldNotIndent |
            TransformFlags.ArrayOrObjectLiteral)) ||
      (parentKind === SyntaxKind.ForStatement &&
        node !== parentNode.statement) ||
      (parentKind === SyntaxKind.ArrowFunction &&
        node === parentNode.contents) ||
      (node.transformFlags & TransformFlags.ArrayOrObjectLiteral &&
        node.left.kind !== SyntaxKind.BinaryExpression &&
        !shouldFlatten(node)) ||
      ((node.transformFlags & TransformFlags.ArrayOrObjectLiteral) === 0 &&
        parentNode.transformFlags & TransformFlags.ShouldIndentIfInlining)
    ? group(concat(parts), {})
    : group(
        concat([
          parts.length > 0 ? parts[0] : "''",
          indent(concat(parts.slice(1))),
        ]),
        {},
      );
}

function printBinaryExpressionRest(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: any,
  isInsideParenthesis: boolean,
) {
  if (node.kind === SyntaxKind.BinaryExpression) {
    let parts: any = shouldFlatten(node)
      ? printBinaryExpressionRest(
          printer,
          node.left,
          lineMap,
          node,
          isInsideParenthesis,
        )
      : [printStatement(printer, node.left, lineMap, node)];

    const right = concat([
      printKeyword(printer, node.operatorToken, node, /* addSpace */ false),
      node.transformFlags & TransformFlags.ArrayOrObjectLiteral ? '' : line,
      printStatement(printer, node.right, lineMap, node),
    ]);

    parts.push(
      ' ',
      !(isInsideParenthesis && node.kind === SyntaxKind.BinaryExpression) &&
        parentNode.kind !== node.kind &&
        node.left.kind !== node.kind &&
        node.right.kind !== node.kind
        ? group(right, {})
        : right,
    );

    return parts;
  }
  return concat([
    printStatement(printer, node.left, lineMap, node),
    ' ',
    printKeyword(printer, node.operatorToken, node, /* addSpace */ true),
    printStatement(printer, node.right, lineMap, node),
  ]);
}

function printPrefixUpdateExpression(
  printer: Printer,
  node: any,
  lineMap: number[],
): any {
  return concat([
    printKeyword(printer, node.operandToken, node, /* addSpace */ true),
    printStatement(printer, node.operand, lineMap, node),
  ]);
}

function printPostfixUpdateExpression(
  printer: Printer,
  node: any,
  lineMap: number[],
): any {
  return concat([
    printStatement(printer, node.operand, lineMap, node),
    printKeyword(printer, node.operandToken, node, /* addSpace */ false),
  ]);
}

function printUnaryExpression(
  printer: Printer,
  node: any,
  lineMap: number[],
): any {
  return concat([
    printKeyword(printer, node.operandToken, node, /* addSpace */ false),
    shouldprintWhitespaceBeforeOperand(node) ? ' ' : '',
    printStatement(printer, node.operand, lineMap, node),
  ]);
}

function printAwaitExpression(
  printer: Printer,
  node: any,
  lineMap: number[],
): any {
  return concat([
    printKeyword(printer, node.awaitKeyword, node, /* addSpace */ true),
    printStatement(printer, node.expression, lineMap, node),
  ]);
}

export function printIndexExpression(
  printer: Printer,
  node: any,
  lineMap: number[],
): any {
  return node.flags & NodeFlags.IgnoreNextNode
    ? printer.source.slice(node.start, node.end)
    : group(
        concat([
          printStatement(printer, node.member, lineMap, node),
          node.flags & NodeFlags.FloatingPointLiteral &&
          // check if numeric literal is a decimal literal that was originally written with a dot
          printer.source.indexOf('.')
            ? '.'
            : '',
          '.',
          printStatement(printer, node.expression, lineMap, node),
        ]),
        {},
      );
}

function printMemberAccessExpression(
  printer: Printer,
  node: any,
  lineMap: number[],
): any {
  return group(
    concat([
      printStatement(printer, node.member, lineMap, node),
      '[',
      indent(
        concat([
          softline,
          printStatement(printer, node.expression, lineMap, node),
        ]),
      ),
      softline,
      ']',
    ]),
    {},
  );
}

export function printEmptyStatement(): any {
  return ';';
}

export function printExpressionStatement(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return concat([
    printStatement(printer, node.expression, lineMap, parentNode),
    ';',
  ]);
}

export function printRootNode(
  printer: Printer,
  node: RootNode,
  lineMap: number[],
  parentNode: SyntaxNode,
): { kind: DocumentKind; parts: any; flags: DocumentFlags } {
  const { directives, statements } = node;
  const tokens = [];
  let previousSibling: SyntaxNode | undefined;
  let child: SyntaxNode | undefined;
  let lastIdx = -1;

  if (directives && directives.length > 0) {
    lastIdx = directives.length - 1;
    for (let i = 0; i < directives.length; i++) {
      if (i === lastIdx) printer.flags |= PrinterFlags.DisallowSemicolon;
      tokens.push(
        concat([
          hardline,
          printStatement(printer, directives[i], lineMap, parentNode),
          ';',
        ]),
      );
    }
    tokens.push(hardline);
  }
  lastIdx = tokens.length - 1;
  for (let i = 0; i < statements.length; i++) {
    if (i === lastIdx) printer.flags |= PrinterFlags.DisallowSemicolon;
    child = statements![i];
    if (child.kind !== SyntaxKind.EmptyStatement) {
      tokens.push(
        previousSibling &&
          previousSibling.end !== skipWhitespace(printer.source, child.start)
          ? concat([
              hardline,
              printStatement(printer, child, lineMap, parentNode),
              hardline,
            ])
          : printStatement(printer, child, lineMap, node),
      );
      previousSibling = child;
    }
  }
  return concat(tokens);
}

export function printArrayLiteral(
  printer: Printer,
  node: any,
  lineMap: number[],
): any {
  return node.flags & NodeFlags.IgnoreNextNode
    ? printer.source.slice(node.start, node.end)
    : printElementList(printer, node.elementList, lineMap, node);
}

export function printElementList(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  if (node.elements.length === 0) {
    return '[]';
  }

  const children = node.elements;

  const elements: any = [];

  let previousSibling!: SyntaxNode;
  let child!: SyntaxNode;

  const trailingComma = node.trailingComma ? ifBreak(',') : '';

  for (let i = 0; i < children.length; i++) {
    child = children[i];
    if (previousSibling) {
      elements.push(concat([',', printer.space, softline]));
    }

    elements.push(printStatement(printer, child, lineMap, parentNode));
    previousSibling = child;
  }

  return group(
    concat([
      '[',
      indent(
        concat([
          printer.flags & PrinterFlags.ArrayBracketSpacing ? line : softline,
          concat([concat(elements)]),
        ]),
      ),
      node.trailingComma ? ',' : '',
      ifBreak(node.trailingComma ? ',' : ''),
      printer.flags & PrinterFlags.ArrayBracketSpacing ? line : softline,
      ']',
    ]),
    {},
  );
}

function printArrayBindingPattern(
  printer: Printer,
  node: any,
  lineMap: number[],
): any {
  return node.flags & NodeFlags.IgnoreNextNode
    ? printer.source.slice(node.start, node.end)
    : printerBindingElementList(printer, node.elementList, lineMap, node);
}

export function printerBindingElementList(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  if (node.elements.length === 0) {
    return '[]';
  }

  const children = node.elements;

  const elements: any = [];

  let previousSibling!: SyntaxNode;
  let child!: SyntaxNode;

  for (let i = 0; i < children.length; i++) {
    child = children[i];
    if (previousSibling) {
      elements.push(concat([',', printer.space, softline]));
    }

    elements.push(printStatement(printer, child, lineMap, parentNode));
    previousSibling = child;
  }

  return group(
    concat([
      '[',
      indent(concat([softline, concat([concat(elements)])])),
      node.trailingComma &&
      previousSibling &&
      !(previousSibling as any).ellipsisToken
        ? ','
        : '',
      ifBreak(
        node.trailingComma &&
          previousSibling &&
          !(previousSibling as any).ellipsisToken
          ? ','
          : '',
      ),
      softline,
      ']',
    ]),
    {},
  );
}

function printBlockStatement(
  printer: Printer,
  node: any,
  lineMap: number[],
): any {
  printer.flags =
    (printer.flags | PrinterFlags.DisallowSemicolon) ^
    PrinterFlags.DisallowSemicolon;
  return node.flags & NodeFlags.IgnoreNextNode
    ? printer.source.slice(node.start, node.end)
    : printBlock(printer, node.block, lineMap, node);
}

function printBlock(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  if (node.statements.length === 0) {
    return '{}';
  }

  const { statements } = node;

  const tokens = [];
  let previousSibling: SyntaxNode | undefined;
  let child: any;

  for (let i = 0; i < statements.length; i++) {
    child = statements![i];
    tokens.push(
      previousSibling &&
        previousSibling.end !== skipWhitespace(printer.source, child.start)
        ? concat([
            hardline,
            printStatement(printer, child, lineMap, parentNode),
          ])
        : printStatement(printer, child, lineMap, node),
    );
    previousSibling = child;
  }

  return concat([
    '{',
    indent(concat([hardline, concat(tokens)])),
    hardline,
    '}',
  ]);
}

function printTypeAnnotation(
  printer: Printer,
  node: any,
  lineMap: number[],
): any {
  return concat([
    printKeyword(printer, node.bitwiseAndToken, node, true),
    printKeyword(printer, node.bitwiseOrToken, node, true),
    printStatement(printer, node.type, lineMap, node),
  ]);
}

function printArrayType(printer: Printer, node: any, lineMap: number[]): any {
  return concat([printStatement(printer, node.type, lineMap, node), '[', ']']);
}

function printObjectTypeProperty(
  printer: Printer,
  node: any,
  lineMap: number[],
): any {
  return concat([
    printKeyword(printer, node.protoKeyword, node, /* addSpace */ true),
    printKeyword(printer, node.staticKeyword, node, /* addSpace */ true),
    printStatement(printer, node.key, lineMap, node),
    printKeyword(printer, node.optionalToken, node, /* addSpace */ true),

    node.type.kind === SyntaxKind.FunctionType
      ? printStatement(printer, node.type, lineMap, node)
      : concat([
          ':',
          printer.space,
          printStatement(printer, node.type, lineMap, node),
        ]),
  ]);
}

function printObjectTypeInternalSlot(
  printer: Printer,
  node: any,
  lineMap: number[],
): any {
  return concat([
    printKeyword(printer, node.protoKeyword, node, /* addSpace */ true),
    printKeyword(printer, node.staticKeyword, node, /* addSpace */ true),
    '[',
    '[',
    printStatement(printer, node.name, lineMap, node),
    ']',
    ']',
    printKeyword(printer, node.optionalToken, node, /* addSpace */ true),
    node.type.kind === SyntaxKind.FunctionType
      ? printStatement(printer, node.type, lineMap, node)
      : concat([
          ':',
          printer.space,
          printStatement(printer, node.type, lineMap, node),
        ]),
  ]);
}

function printObjectTypeIndexer(
  printer: Printer,
  node: any,
  lineMap: number[],
): any {
  return concat([
    printKeyword(printer, node.protoKeyword, node, /* addSpace */ true),
    printKeyword(printer, node.staticKeyword, node, /* addSpace */ true),
    '[',
    //printStatement(printer, node.name, lineMap, node),
    printStatement(printer, node.key, lineMap, node),
    ']',
    node.type.kind === SyntaxKind.FunctionType
      ? printStatement(printer, node.type, lineMap, node)
      : concat([
          ':',
          printer.space,
          printStatement(printer, node.type, lineMap, node),
        ]),
  ]);
}

function printObjectTypeCallProperty(
  printer: Printer,
  node: any,
  lineMap: number[],
): any {
  return concat([
    printKeyword(printer, node.protoKeyword, node, /* addSpace */ true),
    printKeyword(printer, node.staticKeyword, node, /* addSpace */ true),
    node.typeParameter
      ? printStatement(printer, node.typeParameter, lineMap, node)
      : '',
    '(',
    printStatement(printer, node.value, lineMap, node),
    ')',
    node.returnType
      ? concat([
          ':',
          printer.space,
          printStatement(printer, node.returnType, lineMap, node),
        ])
      : '',
  ]);
}

function printNullableType(
  printer: Printer,
  node: any,
  lineMap: number[],
): any {
  return concat([
    printKeyword(printer, node.nullableToken, node, /* addSpace */ true),
    printStatement(printer, node.type, lineMap, node),
  ]);
}

function printIntersectionType(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: any,
): any {
  const printed = concat([
    //ifBreak(concat([parentNode.transformFlags & TransformFlags.TypeParameter ? hardline : '', '&', printer.space])),
    join(
      concat([line, '&', printer.space]),
      node.types.map((type: any) =>
        indent(printStatement(printer, type, lineMap, parentNode)),
      ),
    ),
  ]);

  return group(
    parentNode.transformFlags & TransformFlags.TypeParameter
      ? indent(printed)
      : printed,
    {},
  );
}

function printIndexedAccessType(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return concat([
    printStatement(printer, node.objectType, lineMap, node),
    '[',
    printStatement(printer, node.indexType, lineMap, node),
    ']',
  ]);
}

function printFunctionType(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return node.flags & NodeFlags.IgnoreNextNode
    ? printer.source.slice(node.start, node.end)
    : concat([
        node.typeParameters
          ? concat([
              printStatement(printer, node.typeParameters, lineMap, node),
              printer.space,
            ])
          : '',
        '(',
        printStatement(printer, node.functionTypeParameterList, lineMap, node),
        ')',
        node.returnType
          ? concat([
              ':',
              printer.space,
              printStatement(printer, node.returnType, lineMap, node),
            ])
          : '',
      ]);
}

function printFunctionTypeParameter(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return node.flags & NodeFlags.IgnoreNextNode
    ? printer.source.slice(node.start, node.end)
    : concat([
        printKeyword(printer, node.ellipsisToken, node, /* addSpace */ false),
        node.name ? printStatement(printer, node.name, lineMap, node) : '',
        printKeyword(printer, node.optionalToken, node, /* addSpace */ true),
        node.types
          ? concat([
              node.name ? concat([':', printer.space]) : '',
              printStatement(printer, node.types, lineMap, node),
            ])
          : '',
      ]);
}

function printFunctionTypeParameterList(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  const children = node.parameters;

  const elements: any = [];

  let previousSibling!: SyntaxNode;
  let child!: SyntaxNode;

  const lineBreak = node.flags & NodeFlags.NewLine ? hardline : softline;

  for (let i = 0; i < children.length; i++) {
    child = children[i];
    if (previousSibling) {
      elements.push(concat([',', printer.space, lineBreak]));
    }

    elements.push(printStatement(printer, child, lineMap, parentNode));
    previousSibling = child;
  }

  return concat(elements);
}

function printBigIntType(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return printNumericLiteral(printer, <any>node);
}

function printArrowTypeParameter(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return node.flags & NodeFlags.IgnoreNextNode
    ? printer.source.slice(node.start, node.end)
    : concat([
        printKeyword(printer, node.ellipsisToken, node, /* addSpace */ false),
        node.name ? printStatement(printer, node.name, lineMap, node) : '',
        printKeyword(printer, node.optionalToken, node, /* addSpace */ false),
        node.types
          ? concat([
              node.name ? concat([':', printer.space]) : '',
              printStatement(printer, node.types, lineMap, node),
            ])
          : '',
      ]);
}

function printArrowFunctionType(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return node.flags & NodeFlags.IgnoreNextNode
    ? printer.source.slice(node.start, node.end)
    : concat([
        node.typeParameters
          ? printStatement(printer, node.typeParameters, lineMap, node)
          : '',
        '(',
        printStatement(printer, node.arrowTypeParameterList, lineMap, node),
        ')',
        printer.space,
        printKeyword(printer, node.arrowToken, node, /* addSpace */ false),
        printer.space,
        printStatement(printer, node.returnType, lineMap, node),
      ]);
}

function printObjectTypeSpreadProperty(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return concat([
    printKeyword(printer, node.protoKeyword, node, /* addSpace */ true),
    printKeyword(printer, node.static, node, /* addSpace */ true),
    printKeyword(printer, node.ellipsisToken, node, /* addSpace */ false),
    printStatement(printer, node.type, lineMap, node),
  ]);
}

function printOpaqueType(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return node.flags & NodeFlags.IgnoreNextNode
    ? printer.source.slice(node.start, node.end)
    : node.declareToken
    ? concat([
        printKeyword(printer, node.declareToken, node, /* addSpace */ true),
        printKeyword(printer, node.opaqueToken, node, /* addSpace */ true),
      ])
    : concat([
        printKeyword(printer, node.opaqueToken, node, /* addSpace */ true),
        printKeyword(printer, node.typeToken, node, /* addSpace */ true),
        printStatement(printer, node.name, lineMap, node),
        node.typeParameters
          ? printStatement(printer, node.typeParameters, lineMap, node)
          : '',
        node.superType
          ? concat([
              ':',
              printer.space,
              printStatement(printer, node.superType, lineMap, node),
            ])
          : '',
        printer.space,
        '=',
        printer.space,
        printStatement(printer, node.impltype, lineMap, node),
        toggleSemicolon(printer),
      ]);
}

function printOptionalIndexedAccess(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return concat([
    printStatement(printer, node.objectType, lineMap, node),
    printKeyword(printer, node.optionalIndexedToken, node, /* addSpace */ true),
    '[',
    printStatement(printer, node.indexType, lineMap, node),
    ']',
  ]);
}

function printOptionalType(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return concat([
    printStatement(printer, node.type, lineMap, node),
    printKeyword(printer, node.optionalToken, node, /* addSpace */ true),
  ]);
}

function printParenthesizedType(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return node.flags & NodeFlags.IgnoreNextNode
    ? printer.source.slice(node.start, node.end)
    : concat(['(', printStatement(printer, node.type, lineMap, node), ')']);
}

function printQualifiedType(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return concat([
    printStatement(printer, node.qualification, lineMap, node),
    '.',
    printStatement(printer, node.name, lineMap, node),
  ]);
}

function printRestType(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return node.flags & NodeFlags.IgnoreNextNode
    ? printer.source.slice(node.start, node.end)
    : concat([
        printKeyword(printer, node.ellipsisToken, node, /* addSpace */ false),
        printStatement(printer, node.type, lineMap, node),
      ]);
}

function printSubtractionType(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return concat([
    printKeyword(printer, node.subtractionToken, node, /* addSpace */ false),
    printNumericLiteral(printer, <any>node),
  ]);
}

function printTupleType(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  if (node.elementTypes.length === 0) {
    return '[]';
  }

  const children = node.elementTypes;

  const elements: any = [];

  let previousSibling!: SyntaxNode;
  let child!: SyntaxNode;

  const lineBreak = node.flags & NodeFlags.NewLine ? hardline : softline;

  for (let i = 0; i < children.length; i++) {
    child = children[i];
    if (previousSibling) {
      elements.push(concat([',', printer.space, lineBreak]));
    }

    elements.push(printStatement(printer, child, lineMap, parentNode));
    previousSibling = child;
  }

  return group(
    concat([
      '[',
      indent(concat([softline, concat(elements)])),
      softline,
      ifBreak(node.trailingComma ? ',' : ''),
      ']',
    ]),
    {},
  );
}

function printTypeInstantiations(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  if (node.types.length === 0) {
    return '<>';
  }

  const elements: any = [];
  const children = node.types;
  let previousSibling!: SyntaxNode;
  let child!: SyntaxNode;

  const lineBreak = node.flags & NodeFlags.NewLine ? hardline : softline;

  for (let i = 0; i < children.length; i++) {
    child = children[i];
    if (previousSibling) {
      elements.push(concat([',', printer.space, lineBreak]));
    }

    elements.push(printStatement(printer, child, lineMap, parentNode));
    previousSibling = child;
  }

  return group(
    concat([
      '<',
      indent(concat([softline, concat(elements)])),
      ifBreak(node.trailingComma ? ',' : ''),
      '>',
    ]),
    {},
  );
}

function printTypeParameterDeclaration(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return printStatement(printer, node.declarations, lineMap, parentNode);
}

function printTypeParameterInstantiation(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return printStatement(printer, node.typeInstantiations, lineMap, parentNode);
}

function printTypeParameterList(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  if (node.parameters.length === 0) {
    return '<>';
  }

  const children = node.parameters;

  const elements: any = [];

  let previousSibling!: SyntaxNode;
  let child!: SyntaxNode;

  const lineBreak = node.flags & NodeFlags.NewLine ? hardline : softline;

  for (let i = 0; i < children.length; i++) {
    child = children[i];
    if (previousSibling) {
      elements.push(concat([',', printer.space, lineBreak]));
    }

    elements.push(printStatement(printer, child, lineMap, parentNode));
    previousSibling = child;
  }
  return group(
    concat([
      '<',
      indent(concat([softline, concat(elements)])),
      ifBreak(node.trailingComma ? ',' : ''),
      '>',
    ]),
    {},
  );
}

function printTypeParameter(
  printer: Printer,
  node: any,
  lineMap: number[],
): any {
  return node
    ? concat([
        printStatement(printer, node.name, lineMap, node),
        node.type
          ? concat([
              ':',
              printer.space,
              printStatement(printer, node.type, lineMap, node),
            ])
          : '',
        node.assignToken
          ? concat([
              printKeyword(
                printer,
                node.assignToken,
                node,
                /* addSpace */ true,
              ),
              printStatement(printer, node.defaultType, lineMap, node),
            ])
          : '',
      ])
    : '';
}

function printTypeReference(
  printer: Printer,
  node: any,
  lineMap: number[],
): any {
  return concat([
    printStatement(printer, node.typeName, lineMap, node),
    node.typeParameters
      ? printStatement(printer, node.typeParameters, lineMap, node)
      : '',
  ]);
}

function printTypeofType(printer: Printer, node: any, lineMap: number[]): any {
  return node.flags & NodeFlags.IgnoreNextNode
    ? printer.source.slice(node.start, node.end)
    : concat([
        printKeyword(printer, node.typeOfKeyword, node, /* addSpace */ true),
        printStatement(printer, node.type, lineMap, node),
      ]);
}

function printUnionType(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: any,
): any {
  const printed = concat([
    //ifBreak(concat([shouldIndent ? hardline : '', '|', printer.space])),
    join(
      concat([line, '|', printer.space]),
      node.types.map((type: any) =>
        indent(printStatement(printer, type, lineMap, parentNode)),
      ),
    ),
  ]);

  return group(
    parentNode.transformFlags & TransformFlags.TypeParameter
      ? indent(printed)
      : printed,
    {},
  );
}

function printArrowTypeParameterList(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  const children = node.parameters;

  const elements: any = [];

  let previousSibling!: SyntaxNode;
  let child!: SyntaxNode;

  const lineBreak = node.flags & NodeFlags.NewLine ? hardline : softline;

  for (let i = 0; i < children.length; i++) {
    child = children[i];
    if (previousSibling) {
      elements.push(concat([',', printer.space, lineBreak]));
    }

    elements.push(printStatement(printer, child, lineMap, parentNode));
    previousSibling = child;
  }
  return concat(elements);
}

function printDecoratorList(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  const children = node.elements;

  const elements: any = [];

  let previousSibling!: SyntaxNode;
  let child!: SyntaxNode;

  const lineBreak = node.flags & NodeFlags.NewLine ? hardline : softline;

  for (let i = 0; i < children.length; i++) {
    child = children[i];
    if (previousSibling) {
      elements.push(concat([',', printer.space, lineBreak]));
    }

    elements.push(printStatement(printer, child, lineMap, parentNode));
    previousSibling = child;
  }
  return concat(elements);
}

function printDecorator(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return node.flags & NodeFlags.IgnoreNextNode
    ? printer.source.slice(node.start, node.end)
    : concat([
        printKeyword(
          printer,
          node.decoratorToken,
          node,
          (printer.flags & PrinterFlags.SpaceAfterAt) !== 0,
        ),
        printStatement(printer, node.expression, lineMap, node),
      ]);
}

function printBindingProperty(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return concat([
    printKeyword(printer, node.ellipsisToken, node, /* addSpace */ false),
    printStatement(printer, node.key, lineMap, node),
    ':',
    printer.space,
    printStatement(printer, node.value, lineMap, node),
    node.initializer
      ? concat([
          printer.space,
          '=',
          printer.space,
          printStatement(printer, node.initializer, lineMap, node),
        ])
      : '',
  ]);
}

function printFunctionDeclarationOrExpression(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return node.flags & NodeFlags.IgnoreNextNode
    ? printer.source.slice(node.start, node.end)
    : concat([
        printKeyword(printer, node.declareKeyword, node, /* addSpace */ true),
        printKeyword(printer, node.asyncKeyword, node, /* addSpace */ true),
        printKeyword(printer, node.functionKeyword, node, /* addSpace */ true),
        printKeyword(printer, node.asteriskToken, node, /* addSpace */ false),
        node.name ? printStatement(printer, node.name, lineMap, node) : '',
        node.typeParameters
          ? printStatement(printer, node.typeParameters, lineMap, node)
          : '',
        group(
          concat([
            printFormalParameterList(
              printer,
              node.formalParameterList,
              lineMap,
              node,
            ),
            node.returnType
              ? concat([
                  ':',
                  printer.space,
                  printStatement(printer, node.returnType, lineMap, node),
                ])
              : '',
          ]),
          {},
        ),
        node.contents
          ? concat([
              printer.space,
              printFunctionBody(printer, node.contents, lineMap, node),
            ])
          : '',
        node.declareKeyword
          ? printer.flags & PrinterFlags.DisallowSemicolon
            ? ''
            : ';'
          : '',
      ]);
}

function printFunctionBody(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return node.flags & NodeFlags.IgnoreNextNode
    ? printer.source.slice(node.start, node.end)
    : printStatement(printer, node.functionStatementList, lineMap, parentNode);
}

function printFunctionStatementList(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  if (node.statements.length === 0) {
    return '{}';
  }
  const { directives, statements } = node;

  const tokens = [];
  let previousSibling: SyntaxNode | undefined;
  let child: any;
  let lastIdx = statements.length - 1;

  if (directives && directives.length > 0) {
    lastIdx = directives.length - 1;
    for (let i = 0; i < directives.length; i++) {
      if (i === lastIdx) printer.flags |= PrinterFlags.DisallowSemicolon;
      tokens.push(
        concat([
          hardline,
          printStatement(printer, directives[i], lineMap, parentNode),
          toggleSemicolon(printer),
        ]),
      );
    }
    tokens.push(hardline);
  }

  lastIdx = tokens.length - 1;

  for (let i = 0; i < statements.length; i++) {
    if (i === lastIdx) printer.flags |= PrinterFlags.DisallowSemicolon;
    child = statements![i];
    tokens.push(
      previousSibling &&
        previousSibling.end !== skipWhitespace(printer.source, child.start)
        ? concat([
            hardline,
            printStatement(printer, child, lineMap, parentNode),
          ])
        : printStatement(printer, child, lineMap, node),
    );
    previousSibling = child;
  }

  if (tokens.length > 0) {
    printer.flags =
      (printer.flags | PrinterFlags.DisallowSemicolon) ^
      PrinterFlags.DisallowSemicolon;
  }

  return concat([
    '{',
    indent(concat([hardline, concat(tokens)])),
    hardline,
    '}',
  ]);
}

function printBindingElement(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return concat([
    printKeyword(printer, node.ellipsisToken, node, /* addSpace */ false),
    printStatement(printer, node.left, lineMap, node),
    printKeyword(printer, node.optionalToken, node, /* addSpace */ true),
    node.type
      ? concat([
          ':',
          printer.space,
          printStatement(printer, node.type, lineMap, node),
        ])
      : '',
    node.right
      ? printInitializer(printer, node.right, lineMap, parentNode)
      : '',
  ]);
}

function printInitializer(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return concat([
    ' ',
    '=',
    ' ',
    printStatement(printer, node, lineMap, parentNode),
  ]);
}

function printNewExpression(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return node.flags & NodeFlags.IgnoreNextNode
    ? printer.source.slice(node.start, node.end)
    : concat([
        printKeyword(printer, node.newKeyword, node, /* addSpace */ true),
        printStatement(printer, node.expression, lineMap, node),
        node.argumentList
          ? printArgumentsList(printer, node.argumentList, lineMap, parentNode)
          : '',
      ]);
}

function printArgumentsList(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  if (node.elements.length === 0) {
    return '()';
  }

  if (node.elements.length === 1) {
    printer.flags &= ~PrinterFlags.UnParenthezisedNew;

    const argument = node.elements[0];
    if (
      argument.transformFlags & TransformFlags.ArrayOrObjectLiteral ||
      argument.kind === SyntaxKind.FunctionDeclaration ||
      argument.kind === SyntaxKind.FunctionExpression ||
      argument.kind === SyntaxKind.ArrowFunction ||
      argument.kind === SyntaxKind.Identifier
    ) {
      return printer.flags & PrinterFlags.UnParenthezisedNew
        ? printStatement(printer, argument, lineMap, parentNode)
        : concat([
            '(',
            printStatement(printer, argument, lineMap, parentNode),
            ')',
          ]);
    }
  }

  const children = node.elements;

  const elements: any = [];

  let previousSibling!: SyntaxNode;
  let child!: SyntaxNode;

  for (let i = 0; i < children.length; i++) {
    child = children[i];
    if (previousSibling) {
      elements.push(concat([',', printer.space, softline]));
    }

    elements.push(printStatement(printer, child, lineMap, parentNode));
    previousSibling = child;
  }

  return group(
    concat([
      '(',
      indent(concat([softline, concat(elements)])),
      ifBreak(node.trailingComma ? ',' : ''),
      softline,
      ')',
    ]),
    {},
  );
}

function printCallExpression(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  printer.flags &= ~PrinterFlags.UnParenthezisedNew;
  return group(
    concat([
      printStatement(printer, node.expression, lineMap, node),
      printArgumentsList(printer, node.argumentList, lineMap, node),
    ]),
    {},
  );
}

function printYieldExpression(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return node.flags & NodeFlags.IgnoreNextNode
    ? printer.source.slice(node.start, node.end)
    : concat([
        printKeyword(
          printer,
          node.yieldKeyword,
          node,
          /* addSpace */ !node.asteriskToken,
        ),
        printKeyword(printer, node.asteriskToken, node, /* addSpace */ true),
        node.expression
          ? printStatement(printer, node.expression, lineMap, node)
          : '',
      ]);
}

function printSpreadElement(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return concat([
    printKeyword(printer, node.ellipsisToken, node, /* addSpace */ false),
    printStatement(printer, node.argument, lineMap, node),
  ]);
}

function printRegularExpressionLiteral(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return node.text;
}

function printImportCall(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return group(
    concat([
      printKeyword(printer, node.importKeyword, node, /* addSpace */ false),
      '(',
      printStatement(printer, node.expression, lineMap, node),
      ')',
    ]),
    {},
  );
}

function printImportMeta(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return concat([
    printKeyword(printer, node.importKeyword, node, /* addSpace */ false),
    '.',
    printKeyword(printer, node.metaIdentifier, node, /* addSpace */ false),
  ]);
}

function printTaggedTemplate(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return concat([
    printStatement(printer, node.member, lineMap, node),
    printStatement(printer, node.template, lineMap, node),
  ]);
}

function printTemplateExpression(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  if (node.spans.length === 0) {
    return '``';
  }
  const children = node.spans;

  const elements: any = [];

  let previousSibling!: SyntaxNode;
  let child!: SyntaxNode;

  const lineBreak = node.flags & NodeFlags.NewLine ? hardline : softline;

  for (let i = 0; i < children.length; i++) {
    child = children[i];
    if (previousSibling) {
      elements.push(concat([',', printer.space, lineBreak]));
    }

    elements.push(printStatement(printer, child, lineMap, parentNode));
    previousSibling = child;
  }
  return concat([
    '`',
    concat(elements),
    printStatement(printer, node.tail, lineMap, node),
    '`',
  ]);
}

function printTemplateSpan(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return group(
    concat([
      node.rawText,
      '$',
      '{',
      printStatement(printer, node.expression, lineMap, node),
      '}',
    ]),
    {},
  );
}

function printTemplateTail(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return node.flags & NodeFlags.TemplateLiteral
    ? '`' + node.rawText + '`'
    : node.rawText;
}

function printComputedPropertyName(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return concat([
    '[',
    printStatement(printer, node.expression, lineMap, parentNode),
    ']',
  ]);
}

function printClassDeclarationOrExpression(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return node.flags & NodeFlags.IgnoreNextNode
    ? printer.source.slice(node.start, node.end)
    : concat([
        node.decorators
          ? concat([
              printDecoratorList(printer, node.decorators, lineMap, node),
              ' ',
            ])
          : '',
        printKeyword(printer, node.declareKeyword, node, /* addSpace */ true),
        printKeyword(printer, node.classKeyword, node, /* addSpace */ true),
        node.name
          ? concat([printStatement(printer, node.name, lineMap, node), ' '])
          : '',
        node.typeParameters
          ? printStatement(printer, node.typeParameters, lineMap, node)
          : '',
        printStatement(printer, node.tail, lineMap, node),
      ]);
}

function printClassTail(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return concat([
    node.classHeritage
      ? printStatement(printer, node.classHeritage, lineMap, parentNode)
      : '',
    node.flags & NodeFlags.Declared
      ? printObjectType(printer, node.body, lineMap, parentNode)
      : printClassBody(printer, node.body, lineMap, parentNode),
  ]);
}

function printClassBody(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  if (node.elements.length === 0) {
    return '{}';
  }
  printer.flags =
    (printer.flags | PrinterFlags.DisallowSemicolon) ^
    PrinterFlags.DisallowSemicolon;
  const elements = [];
  let previousSibling: SyntaxNode | undefined;
  let child: SyntaxNode | any;
  const statements = node.elements;
  for (let i = 0; i < statements.length; i++) {
    child = statements![i];
    elements.push(
      previousSibling &&
        previousSibling.end !== skipWhitespace(printer.source, child.start)
        ? concat([
            hardline,
            printStatement(printer, child, lineMap, parentNode),
          ])
        : printStatement(printer, child, lineMap, node),
    );
    previousSibling = child;
  }
  return concat([
    '{',
    indent(concat([hardline, concat(elements)])),
    hardline,
    '}',
  ]);
}

function printClassElement(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return concat([
    node.decorators
      ? concat([
          printDecoratorList(printer, node.decorators, lineMap, node),
          ' ',
        ])
      : '',
    printKeyword(printer, node.declaredToken, node, /* addSpace */ true),
    printKeyword(printer, node.staticKeyword, node, /* addSpace */ true),
    printKeyword(printer, node.asyncKeyword, node, /* addSpace */ true),
    printKeyword(printer, node.setKeyword, node, /* addSpace */ true),
    printKeyword(printer, node.getKeyword, node, /* addSpace */ true),
    printKeyword(printer, node.asteriskToken, node, /* addSpace */ false),
    printStatement(printer, node.method, lineMap, node),
  ]);
}

function printFieldDefinition(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return concat([
    node.decorators
      ? concat([
          printDecoratorList(printer, node.decorators, lineMap, node),
          ' ',
        ])
      : '',
    printKeyword(printer, node.declaredToken, node, /* addSpace */ true),
    printKeyword(printer, node.staticKeyword, node, /* addSpace */ true),
    printKeyword(printer, node.asyncKeyword, node, /* addSpace */ true),
    printStatement(printer, node.key, lineMap, node),
    printKeyword(printer, node.optionalToken, node, /* addSpace */ true),
    node.type
      ? concat([
          ':',
          ' ',
          printStatement(printer, node.type, lineMap, node),
          printKeyword(printer, node.asyncKeyword, node, /* addSpace */ true),
        ])
      : '',
    node.initializer
      ? concat([
          ' ',
          '=',
          printAssignmentRight(
            node.key,
            node.initializer,
            printStatement(printer, node.initializer, lineMap, node),
          ),
        ])
      : '',
    toggleSemicolon(printer),
  ]);
}

function printObjectType(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  if (node.properties.length === 0) {
    return '{}';
  }

  const children = node.properties;

  const elements: any = [];

  let previousSibling!: SyntaxNode;
  let child!: SyntaxNode;

  const lineBreak = node.flags & NodeFlags.NewLine ? hardline : softline;

  for (let i = 0; i < children.length; i++) {
    child = children[i];
    if (previousSibling) {
      elements.push(concat([',', printer.space, lineBreak]));
    }

    elements.push(printStatement(printer, child, lineMap, parentNode));
    previousSibling = child;
  }

  return group(
    concat([
      '{',
      indent(
        concat([
          printer.flags & PrinterFlags.ObjectCurlySpacing ? line : softline,
          concat(elements),
        ]),
      ),
      ifBreak(node.trailingComma ? ',' : ''),
      printer.flags & PrinterFlags.ObjectCurlySpacing ? line : softline,
      '}',
    ]),
    {},
  );
}

function printArrowFunction(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  const { contents } = node;

  if (contents.kind === SyntaxKind.FunctionBody) {
    return concat([
      printKeyword(printer, node.asyncKeyword, node, /* addSpace */ true),
      node.typeParameters
        ? printStatement(printer, node.typeParameters, lineMap, node)
        : '',
      group(
        node.arrowPatameterList.kind === SyntaxKind.ArrowPatameterList
          ? printArrowParameterList(
              printer,
              node.arrowPatameterList,
              lineMap,
              node,
            )
          : printer.flags & PrinterFlags.ArrowParens
          ? concat([
              '(',
              printStatement(printer, node.arrowPatameterList, lineMap, node),
              ')',
            ])
          : printStatement(printer, node.arrowPatameterList, lineMap, node),
        {},
      ),
      printer.space,
      printKeyword(printer, node.arrowToken, node, /* addSpace */ false),
      printer.space,
      printFunctionBody(printer, contents, lineMap, node),
    ]);
  }

  const parts: any = [
    printKeyword(printer, node.asyncKeyword, node, /* addSpace */ true),
    node.typeParameters
      ? printStatement(printer, node.typeParameters, lineMap, node)
      : '',
    group(
      node.arrowPatameterList.kind === SyntaxKind.ArrowPatameterList
        ? printArrowParameterList(
            printer,
            node.arrowPatameterList,
            lineMap,
            node,
          )
        : printer.flags & PrinterFlags.ArrowParens
        ? concat([
            '(',
            printStatement(printer, node.arrowPatameterList, lineMap, node),
            ')',
          ])
        : printStatement(printer, node.arrowPatameterList, lineMap, node),
      {},
    ),
    printer.space,
    printKeyword(printer, node.arrowToken, node, /* addSpace */ false),
  ];

  const body: any = printStatement(printer, contents, lineMap, node);

  if (contents.kind === SyntaxKind.CommaOperator) {
    return group(
      concat([
        concat(parts),
        group(
          concat([' (', indent(concat([softline, body])), softline, ')']),
          {},
        ),
      ]),
      {},
    );
  }

  return contents.kind === SyntaxKind.FunctionBody ||
    contents.transformFlags & TransformFlags.ArrayOrObjectLiteral ||
    contents.kind === SyntaxKind.ArrowFunction
    ? group(concat([concat(parts), printer.space, body]), {})
    : contents.transformFlags &
        (TransformFlags.CallExpression | TransformFlags.NewExpression) &&
      contents.expression.kind === SyntaxKind.Identifier &&
      parentNode.transformFlags &
        (TransformFlags.ArrayOrObjectLiteral | TransformFlags.ArrowFolding)
    ? group(concat([concat(parts), ' ', body]), {})
    : group(
        concat([
          concat(parts),
          group(concat([indent(concat([line, body]))]), {}),
        ]),
        {},
      );
}

function printArrowParameterList(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  if (node.parameters.length === 0) {
    return '()';
  }
  const children = node.parameters;

  const elements: any = [];

  let previousSibling!: SyntaxNode;
  let child!: SyntaxNode;

  for (let i = 0; i < children.length; i++) {
    child = children[i];
    if (previousSibling) {
      elements.push(concat([',', printer.space, softline]));
    }

    elements.push(printStatement(printer, child, lineMap, parentNode));
    previousSibling = child;
  }
  return concat(['(', concat(elements), ')']);
}

function printCoverInitializedName(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return group(
    concat([
      printStatement(printer, node.left, lineMap, node),
      printer.space,
      '=',
      printer.space,
      printStatement(printer, node.right, lineMap, node),
    ]),
    {},
  );
}

function printPropertyMethod(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return group(
    concat([
      printKeyword(printer, node.asyncKeyword, node, /* addSpace */ true),
      printKeyword(printer, node.asteriskToken, node, /* addSpace */ false),
      printKeyword(printer, node.getKeyword, node, /* addSpace */ true),
      printKeyword(printer, node.setKeyword, node, /* addSpace */ true),
      printStatement(printer, node.method, lineMap, node),
    ]),
    {},
  );
}

function printObjectLiteral(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return node.flags & NodeFlags.IgnoreNextNode
    ? printer.source.slice(node.start, node.end)
    : printBindingPropertyListOrPropertyDefinitionList(
        printer,
        node.propertyList,
        lineMap,
        parentNode,
      );
}

function printBindingPropertyListOrPropertyDefinitionList(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  const properties = node.properties;

  if (properties.length === 0) {
    return '{}';
  }

  const elements: any = [];

  let previousSibling!: SyntaxNode;
  let child!: SyntaxNode;

  for (let i = 0; i < properties.length; i++) {
    child = properties[i];
    if (previousSibling) {
      elements.push(concat([',', printer.space, softline]));
    }

    elements.push(printStatement(printer, child, lineMap, parentNode));
    previousSibling = child;
  }

  return group(
    concat([
      '{',
      indent(
        concat([
          printer.flags & PrinterFlags.ObjectCurlySpacing ? line : softline,
          concat(elements),
        ]),
      ),
      ifBreak(node.trailingComma ? ',' : ''),
      printer.flags & PrinterFlags.ObjectCurlySpacing ? line : softline,
      '}',
    ]),
    {},
  );
}

function printObjectBindingPattern(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return node.flags & NodeFlags.IgnoreNextNode
    ? printer.source.slice(node.start, node.end)
    : printBindingPropertyListOrPropertyDefinitionList(
        printer,
        node.propertyList,
        lineMap,
        parentNode,
      );
}

function printBindingList(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  const children = node.bindingList;
  printer.flags =
    (printer.flags | PrinterFlags.DisallowSemicolon) ^
    PrinterFlags.DisallowSemicolon;
  const elements: any = [];

  let previousSibling!: SyntaxNode;
  let child!: SyntaxNode;

  for (let i = 0; i < children.length; i++) {
    child = children[i];
    if (previousSibling) {
      elements.push(concat([',', printer.space, softline]));
    }

    elements.push(printStatement(printer, child, lineMap, parentNode));
    previousSibling = child;
  }

  return concat(elements);
}

function printVariableDeclarationList(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  const children = node.declarations;
  printer.flags =
    (printer.flags | PrinterFlags.DisallowSemicolon) ^
    PrinterFlags.DisallowSemicolon;
  const elements: any = [];

  let previousSibling!: SyntaxNode;
  let child!: SyntaxNode;

  for (let i = 0; i < children.length; i++) {
    child = children[i];
    if (previousSibling) {
      elements.push(concat([',', printer.space, softline]));
    }

    elements.push(printStatement(printer, child, lineMap, parentNode));
    previousSibling = child;
  }

  return concat(elements);
}

function printVariableStatement(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
  inForStatement: boolean,
): any {
  return node.flags & NodeFlags.IgnoreNextNode
    ? printer.source.slice(node.start, node.end)
    : group(
        concat([
          printKeyword(printer, node.declareKeyword, node, /* addSpace */ true),
          'var',
          ' ',
          indent(
            printVariableDeclarationList(
              printer,
              node.declarationList,
              lineMap,
              node,
            ),
          ),
          inForStatement ? '' : toggleSemicolon(printer),
        ]),
        {},
      );
}

function printLexicalDeclaration(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
  inForStatement: boolean,
): any {
  const printed = printBindingList(printer, node.binding, lineMap, node);
  return node.flags & NodeFlags.IgnoreNextNode
    ? printer.source.slice(node.start, node.end)
    : group(
        concat([
          tokenToString(node.lexicalKeyword),
          ' ',
          indent(printed),
          inForStatement ? '' : toggleSemicolon(printer),
        ]),
        {},
      );
}

function printVariableDeclarationOrLexicalBinding(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  if (node.initializer) {
    const { initializer } = node;

    return group(
      concat([
        printStatement(printer, node.binding, lineMap, node),
        node.type
          ? concat([
              ':',
              printer.space,
              printStatement(printer, node.type, lineMap, node),
            ])
          : '',
        printer.space,
        '=',
        initializer.transformFlags & TransformFlags.CanBreak ||
        (initializer.kind === SyntaxKind.ClassExpression &&
          initializer.decorators) ||
        (initializer.kind === SyntaxKind.ConditionalExpression &&
          initializer.shortCircuit.kind === SyntaxKind.BinaryExpression &&
          (initializer.shortCircuit.right.transformFlags &
            TransformFlags.ArrayOrObjectLiteral) ===
            0)
          ? group(
              indent(
                concat([
                  line,
                  printStatement(printer, initializer, lineMap, node),
                ]),
              ),
              {},
            )
          : concat([
              printer.space,
              printStatement(printer, initializer, lineMap, node),
            ]),
      ]),
      {},
    );
  }

  return concat([
    printStatement(printer, node.binding, lineMap, node),
    node.type
      ? concat([
          ':',
          printer.space,
          printStatement(printer, node.type, lineMap, node),
        ])
      : '',
  ]);
}

function printPropertyDefinition(
  printer: Printer,
  node: any,
  lineMap: number[],
): any {
  return group(
    concat([
      printStatement(printer, node.left, lineMap, node),
      ':',
      printAssignmentRight(
        node.left,
        node.right,
        printStatement(printer, node.right, lineMap, node),
      ),
    ]),
    {},
  );
}

function printMethodDefinition(
  printer: Printer,
  node: any,
  lineMap: number[],
): any {
  return concat([
    printStatement(printer, node.name, lineMap, node),
    node.typeParameters
      ? printStatement(printer, node.typeParameters, lineMap, node)
      : '',
    printFormalParameterList(printer, node.formalParameterList, lineMap, node),
    node.returnType
      ? concat([
          ':',
          printer.space,
          printStatement(printer, node.returnType, lineMap, node),
        ])
      : '',
    printer.space,
    printFunctionBody(printer, node.contents, lineMap, node),
  ]);
}

function printFormalParameterList(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  if (node.formalParameters.length === 0) {
    return '()';
  }
  const children = node.formalParameters;

  const elements: any = [];

  let previousSibling!: SyntaxNode;
  let child!: SyntaxNode;

  for (let i = 0; i < children.length; i++) {
    child = children[i];
    if (previousSibling) {
      elements.push(concat([',', printer.space, softline]));
    }
    elements.push(printStatement(printer, child, lineMap, parentNode));
    previousSibling = child;
  }

  return node.formalParameters.length === 1
    ? concat(['(', concat(elements), ')'])
    : concat([
        '(',
        indent(concat([softline, concat(elements)])),
        ifBreak(
          node.trailingComma &&
            previousSibling &&
            !(previousSibling as any).ellipsisToken
            ? ','
            : '',
        ),
        softline,
        ')',
      ]);
}

function printOptionalExpression(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return concat([
    printStatement(printer, node.member, lineMap, node),
    printKeyword(printer, node.chainToken, node, /* addSpace */ false),
    printStatement(printer, node.chain, lineMap, node),
  ]);
}

function printOptionalChain(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return printStatement(printer, node.chain, lineMap, node);
}

function printCallChain(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return group(
    concat([
      node.chain ? printStatement(printer, node.chain, lineMap, node) : '',
      node.typeArguments
        ? printStatement(printer, node.typeArguments, lineMap, node)
        : '',
      printArgumentsList(printer, node.argumentList, lineMap, node),
    ]),
    {},
  );
}

function printIndexExpressionChain(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return concat([
    node.chain ? printStatement(printer, node.chain, lineMap, node) : '',
    parentNode.kind === SyntaxKind.OptionalChain ? '' : '.',
    printStatement(printer, node.expression, lineMap, node),
  ]);
}

function printMemberAccessChain(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return concat([
    node.chain ? printStatement(printer, node.chain, lineMap, node) : '',
    '[',
    printStatement(printer, node.expression, lineMap, node),
    ']',
  ]);
}

function printExportSpecifier(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return concat([
    node.name ? printStatement(printer, node.name, lineMap, node) : '',
    node.moduleExportName
      ? printStatement(printer, node.moduleExportName, lineMap, node)
      : '',
    ' ',
    printKeyword(printer, node.asKeyword, node, /* addSpace */ true),
    node.binding
      ? concat([
          printer.space,
          printStatement(printer, node.binding, lineMap, node),
        ])
      : '',
  ]);
}

function printExportDefault(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return node.flags & NodeFlags.IgnoreNextNode
    ? printer.source.slice(node.start, node.end)
    : concat([
        printKeyword(printer, node.exportKeyword, node, /* addSpace */ true),
        printKeyword(printer, node.defaultKeyword, node, /* addSpace */ true),
        printStatement(printer, node.declaration, lineMap, node),
        toggleSemicolon(printer),
      ]);
}

function printFromClause(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return node
    ? concat([
        ' ',
        printKeyword(printer, node.fromKeyword, node, /* addSpace */ true),
        printStatement(printer, node.from, lineMap, node),
        toggleSemicolon(printer),
      ])
    : '';
}

function printNamedExports(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return printExportsImportsList(
    printer,
    node.exportsList,
    lineMap,
    parentNode,
  );
}

function printExportFromClause(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  if (node.asKeyword) {
    return node.flags & NodeFlags.IgnoreNextNode
      ? printer.source.slice(node.start, node.end)
      : concat([
          printKeyword(printer, node.asteriskToken, node, /* addSpace */ true),
          printKeyword(printer, node.asKeyword, node, /* addSpace */ true),
          printStatement(printer, node.moduleExportName, lineMap, node),
          printStatement(printer, node.namedBinding, lineMap, node),
        ]);
  }
  return printKeyword(printer, node.asteriskToken, node, /* addSpace */ true);
}

function printExportDeclaration(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return node.flags & NodeFlags.IgnoreNextNode
    ? printer.source.slice(node.start, node.end)
    : concat([
        printKeyword(printer, node.exportKeyword, node, /* addSpace */ true),
        node.declaration
          ? printStatement(printer, node.declaration, lineMap, node)
          : '',
        node.exportFromClause
          ? printStatement(printer, node.exportFromClause, lineMap, node)
          : '',
        node.namedExports
          ? printStatement(printer, node.namedExports, lineMap, node)
          : '',
        node.fromClause
          ? printStatement(printer, node.fromClause, lineMap, node)
          : '',
        !node.declaration
          ? printer.flags & PrinterFlags.DisallowSemicolon
            ? ''
            : ';'
          : '',
      ]);
}

function printNameSpaceImport(
  printer: Printer,
  node: any,
  lineMap: number[],
): any {
  return concat([
    printKeyword(node.asteriskToken, printer, node, /* addSpace */ true),
    printStatement(printer, node.binding, lineMap, node),
  ]);
}

function printImportClause(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return node.flags & NodeFlags.IgnoreNextNode
    ? printer.source.slice(node.start, node.end)
    : concat([
        node.defaultBinding
          ? printStatement(printer, node.defaultBinding, lineMap, node)
          : '',
        node.nameSpaceImport
          ? printStatement(printer, node.nameSpaceImport, lineMap, node)
          : '',
        node.namedImports
          ? printStatement(printer, node.namedImports, lineMap, node)
          : '',
      ]);
}

// ImportDeclaration :
//   `import` ImportClause FromClause `;`
//   `import` ModuleSpecifier `;`
function printImportDeclaration(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return node.flags & NodeFlags.IgnoreNextNode
    ? printer.source.slice(node.start, node.end)
    : concat([
        printKeyword(printer, node.importKeyword, node, /* addSpace */ true),
        printKeyword(printer, node.typeKeyword, node, /* addSpace */ true),
        printKeyword(printer, node.typeofKeyword, node, /* addSpace */ true),
        node.importClause
          ? printStatement(printer, node.importClause, lineMap, node)
          : '',
        node.fromClause
          ? printFromClause(printer, node.fromClause, lineMap, node)
          : '',
        node.moduleSpecifier
          ? printStatement(printer, node.moduleSpecifier, lineMap, node)
          : '',
      ]);
}

function printNamedImports(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return printExportsImportsList(printer, node.importsList, lineMap, node);
}

function printExportsImportsList(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  if (node.specifiers.length === 0) {
    return '{}';
  }

  const children = node.specifiers;

  const elements: any = [];

  let previousSibling!: SyntaxNode;
  let child!: SyntaxNode;

  for (let i = 0; i < children.length; i++) {
    child = children[i];
    if (previousSibling) {
      elements.push(concat([',', printer.space, softline]));
    }

    elements.push(printStatement(printer, child, lineMap, parentNode));
    previousSibling = child;
  }

  return group(
    concat([
      '{',
      indent(concat([line, concat(elements), ''])),
      ifBreak(/*shouldPrintComma(options) ? "," : */ ''),
      line,
      '}',
    ]),
    {},
  );
}

function printImportSpecifier(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return node.flags & NodeFlags.IgnoreNextNode
    ? printer.source.slice(node.start, node.end)
    : concat([
        node.name
          ? printStatement(printer, node.name, lineMap, parentNode)
          : '',
        node.moduleExportName
          ? printStatement(printer, node.moduleExportName, lineMap, parentNode)
          : '',
        ' ',
        printKeyword(printer, node.typeKeyword, node, /* addSpace */ true),
        printKeyword(printer, node.asKeyword, node, /* addSpace */ true),
        printStatement(printer, node.binding, lineMap, parentNode),
      ]);
}

function printDoWhileStatement(
  printer: Printer,
  node: any,
  lineMap: number[],
): any {
  return node.flags & NodeFlags.IgnoreNextNode
    ? printer.source.slice(node.start, node.end)
    : concat([
        group(
          concat([
            printKeyword(printer, node.doKeyword, node, /* addSpace */ true),
            adjustClause(
              node.statement,
              printer,
              printStatement(printer, node.statement, lineMap, node),
            ),
          ]),
          {},
        ),
        node.statement.kind === SyntaxKind.Block ? printer.space : hardline,
        printKeyword(printer, node.whileKeyword, node, /* addSpace */ true),
        '(',
        group(
          concat([
            indent(
              concat([
                softline,
                printStatement(printer, node.expression, lineMap, node),
              ]),
            ),
            softline,
          ]),
          {},
        ),
        ')',
        toggleSemicolon(printer),
      ]);
}

function printWhileStatement(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return node.flags & NodeFlags.IgnoreNextNode
    ? printer.source.slice(node.start, node.end)
    : group(
        concat([
          printKeyword(printer, node.whileKeyword, node, /* addSpace */ true),
          '(',
          group(
            concat([
              indent(
                concat([
                  softline,
                  printStatement(printer, node.expression, lineMap, node),
                ]),
              ),
              softline,
            ]),
            {},
          ),
          ')',
          adjustClause(
            node.statement,
            printer,
            printStatement(printer, node.statement, lineMap, node),
          ),
        ]),
        {},
      );
}

function printDebuggerStatement(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return concat([
    printKeyword(printer, node.debuggerKeyword, node, /* addSpace */ false),
    toggleSemicolon(printer),
  ]);
}

function printLabelledStatement(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return node.flags & NodeFlags.IgnoreNextNode
    ? printer.source.slice(node.start, node.end)
    : concat([
        printStatement(printer, node.label, lineMap, node),
        printKeyword(printer, node.colonToken, node, /* addSpace */ true),
        node.statement.kind === SyntaxKind.EmptyStatement
          ? ';'
          : concat([
              ' ',
              printStatement(printer, node.statement, lineMap, node),
            ]),
      ]);
}

function printContinueStatement(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return node.flags & NodeFlags.IgnoreNextNode
    ? printer.source.slice(node.start, node.end)
    : concat([
        printKeyword(printer, node.continueKeyword, node, /* addSpace */ true),
        node.label
          ? concat([' ', printStatement(printer, node.label, lineMap, node)])
          : '',
        toggleSemicolon(printer),
      ]);
}

function printBreakStatement(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return node.flags & NodeFlags.IgnoreNextNode
    ? printer.source.slice(node.start, node.end)
    : concat([
        printKeyword(printer, node.breakKeyword, node, /* addSpace */ true),
        node.label
          ? concat([' ', printStatement(printer, node.label, lineMap, node)])
          : '',
        toggleSemicolon(printer),
      ]);
}

function printWithStatement(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return node.flags & NodeFlags.IgnoreNextNode
    ? printer.source.slice(node.start, node.end)
    : group(
        concat([
          printKeyword(printer, node.withKeyword, node, /* addSpace */ true),
          '(',
          group(
            concat([
              indent(
                concat([
                  softline,
                  printStatement(printer, node.expression, lineMap, node),
                ]),
              ),
              softline,
            ]),
            {},
          ),
          ')',
          adjustClause(
            node.statement,
            printer,
            printStatement(printer, node.statement, lineMap, node),
          ),
        ]),
        {},
      );
}

function printNewTarget(printer: Printer, node: any): any {
  return node.flags & NodeFlags.IgnoreNextNode
    ? printer.source.slice(node.start, node.end)
    : concat([
        printKeyword(printer, node.newKeyword, node, /* addSpace */ false),
        '.',
        printKeyword(
          printer,
          node.targetIdentifier,
          node,
          /* addSpace */ false,
        ),
      ]);
}

function printCatchClause(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  printer.flags =
    (printer.flags | PrinterFlags.DisallowSemicolon) ^
    PrinterFlags.DisallowSemicolon;
  return node.catchParameter
    ? concat([
        printKeyword(printer, node.catchKeyword, node, /* addSpace */ true),
        '(',
        printStatement(printer, node.catchParameter, lineMap, node),
        ')',
        printer.space,
        printStatement(printer, node.block, lineMap, node),
      ])
    : concat([
        printKeyword(printer, node.catchKeyword, node, /* addSpace */ true),
        printStatement(printer, node.block, lineMap, parentNode),
      ]);
}

function printSwitchStatement(
  printer: Printer,
  node: any,
  lineMap: number[],
): any {
  return concat([
    group(
      concat([
        printKeyword(printer, node.switchKeyword, node, /* addSpace */ true),
        '(',
        group(
          concat([
            indent(
              concat([
                softline,
                printStatement(printer, node.expression, lineMap, node),
              ]),
            ),
            softline,
          ]),
          {},
        ),
        ')',
        printer.space,
      ]),
      {},
    ),
    printCaseBlock(printer, node.caseBlock, lineMap, node),
  ]);
}

function printCaseBlock(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  if (node.clauses.length === 0) {
    return '{}';
  }
  const children = node.clauses;

  const tokens = [];
  let previousSibling: SyntaxNode | undefined;
  let child: SyntaxNode | any;

  for (let i = 0; i < children.length; i++) {
    child = children![i];
    tokens.push(
      previousSibling &&
        previousSibling.end !== skipWhitespace(printer.source, child.start)
        ? concat([
            hardline,
            printStatement(printer, child, lineMap, parentNode),
          ])
        : printStatement(printer, child, lineMap, parentNode),
    );
    previousSibling = child;
  }

  return concat([
    '{',
    indent(concat([hardline, concat(tokens)])),
    hardline,
    '}',
  ]);
}

function printDefaultClause(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  const { statements } = node;
  return concat([
    printKeyword(printer, node.defaultKeyword, node, /* addSpace */ true),
    statements.length === 1 && statements[0].kind === SyntaxKind.Block
      ? printStatement(printer, statements[0], lineMap, node)
      : indent(
          concat([
            hardline,
            printCaseOrDefaultClauseStatements(
              printer,
              statements,
              lineMap,
              parentNode,
            ),
          ]),
        ),
  ]);
}

function printCaseClause(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  const { statements } = node;
  return concat([
    printKeyword(printer, node.caseKeyword, node, /* addSpace */ true),
    printStatement(printer, node.expression, lineMap, node),
    ':',
    printer.space,
    statements.length === 1 && statements[0].kind === SyntaxKind.Block
      ? printStatement(printer, statements[0], lineMap, node)
      : indent(
          concat([
            hardline,
            printCaseOrDefaultClauseStatements(
              printer,
              statements,
              lineMap,
              parentNode,
            ),
          ]),
        ),
  ]);
}

function printCaseOrDefaultClauseStatements(
  printer: Printer,
  children: any,
  lineMap: number[],
  parentNode: any,
): any {
  const tokens = [];
  let previousSibling: SyntaxNode | undefined;
  let child: SyntaxNode | any;
  for (let i = 0; i < children.length; i++) {
    child = children![i];
    tokens.push(
      previousSibling &&
        previousSibling.end !== skipWhitespace(printer.source, child.start)
        ? concat([
            hardline,
            printStatement(printer, child, lineMap, parentNode),
          ])
        : printStatement(printer, child, lineMap, parentNode),
    );
    previousSibling = child;
  }
  return concat(tokens);
}

function printTryStatement(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  printer.flags =
    (printer.flags | PrinterFlags.DisallowSemicolon) ^
    PrinterFlags.DisallowSemicolon;
  return concat([
    printKeyword(printer, node.tryKeyword, node, /* addSpace */ true),
    printStatement(printer, node.block, lineMap, node),
    node.catchClause
      ? concat([
          ' ',
          printCatchClause(printer, node.catchClause, lineMap, parentNode),
        ])
      : '',
    node.finallyBlock
      ? concat([
          ' ',
          printKeyword(printer, node.finallyKeyword, node, /* addSpace */ true),
          printStatement(printer, node.finallyBlock, lineMap, node),
        ])
      : '',
  ]);
}

function printReturnStatement(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return concat([
    printKeyword(
      printer,
      node.returnKeyword,
      node,
      /* addSpace */ !!node.expression,
    ),
    node.expression
      ? printStatement(printer, node.expression, lineMap, node)
      : '',
    toggleSemicolon(printer),
  ]);
}

function printThrowStatement(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return concat([
    printKeyword(printer, node.throwKeyword, node, /* addSpace */ true),
    node.expression
      ? printStatement(printer, node.expression, lineMap, node)
      : '',
    ';',
  ]);
}

function printForInStatement(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return group(
    concat([
      printKeyword(printer, node.forKeyword, node, /* addSpace */ true),
      '(',
      printForBinding(printer, node.initializer, lineMap, node),
      ' ',
      printKeyword(printer, node.inKeyword, node, /* addSpace */ true),
      printStatement(printer, node.expression, lineMap, node),
      ')',
      adjustClause(
        node.statement,
        printer,
        printStatement(printer, node.statement, lineMap, node),
      ),
    ]),
    {},
  );
}

function printForOfStatement(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return group(
    concat([
      printKeyword(printer, node.forKeyword, node, /* addSpace */ true),
      printKeyword(printer, node.awaitKeyword, node, /* addSpace */ true),
      '(',
      printForBinding(printer, node.initializer, lineMap, node),
      ' ',
      printKeyword(printer, node.ofKeyword, node, /* addSpace */ true),
      printStatement(printer, node.expression, lineMap, node),
      ')',
      adjustClause(
        node.statement,
        printer,
        printStatement(printer, node.statement, lineMap, node),
      ),
    ]),
    {},
  );
}

function printForStatement(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return !node.initializer && !node.condition && !node.incrementor
    ? concat([
        'for (;;)',
        adjustClause(
          node.statement,
          printer,
          printStatement(printer, node.statement, lineMap, node),
        ),
      ])
    : group(
        concat([
          printKeyword(printer, node.forKeyword, node, /* addSpace */ true),
          '(',
          group(
            concat([
              indent(
                concat([
                  softline,
                  node.initializer
                    ? printForBinding(printer, node.initializer, lineMap, node)
                    : '',
                  ';',
                  line,
                  node.condition
                    ? printStatement(printer, node.condition, lineMap, node)
                    : '',
                  ';',
                  line,
                  node.incrementor
                    ? printStatement(printer, node.incrementor, lineMap, node)
                    : '',
                ]),
              ),
              softline,
            ]),
            {},
          ),
          ')',
          adjustClause(
            node.statement,
            printer,
            printStatement(printer, node.statement, lineMap, node),
          ),
        ]),
        {},
      );
}

function adjustClause(
  node: any,
  printer: Printer,
  clause: any,
  forceSpace?: any,
) {
  printer.flags =
    (printer.flags | PrinterFlags.DisallowSemicolon) ^
    PrinterFlags.DisallowSemicolon;
  return node.kind === SyntaxKind.EmptyStatement
    ? printer.flags & PrinterFlags.DisallowSemicolon
      ? ''
      : ';'
    : node.kind === SyntaxKind.Block || forceSpace
    ? concat([' ', clause])
    : indent(concat([line, clause]));
}

function printForBinding(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  if (node) {
    if (node.kind === SyntaxKind.ForBinding) {
      return concat([
        printKeyword(printer, node.varKeyword, node, /* addSpace */ true),
        printVariableDeclarationList(
          printer,
          node.declarationList,
          lineMap,
          node,
        ),
      ]);
    }

    if (node.kind === SyntaxKind.LexicalDeclaration) {
      return printLexicalDeclaration(
        printer,
        node,
        lineMap,
        node,
        /* fromForStatement */ true,
      );
    }
    return printStatement(printer, node, lineMap, parentNode);
  }
}

function printIfStatement(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  const parts: any[] = [
    group(
      concat([
        printKeyword(printer, node.ifKeyword, node, /* addSpace */ true),
        '(',
        group(
          concat([
            indent(
              concat([
                softline,
                printStatement(printer, node.expression, lineMap, node),
              ]),
            ),
            softline,
          ]),
          {},
        ),
        ')',
        adjustClause(
          node.consequent,
          printer,
          printStatement(printer, node.consequent, lineMap, node),
        ),
      ]),
      {},
    ),
  ];

  if (node.alternate) {
    parts.push(
      node.consequent.kind === SyntaxKind.Block ? printer.space : hardline,
      printKeyword(printer, node.elseKeyword, node, /* addSpace */ true),
      group(
        adjustClause(
          node.alternate,
          printer,
          printStatement(printer, node.alternate, lineMap, node),
          node.alternate.kind === SyntaxKind.IfStatement,
        ),
        {},
      ),
    );
  }

  return concat(parts);
}

function printClassHeritage(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return concat([
    printKeyword(printer, node.extendsKeyword, node, /* addSpace */ true),
    printStatement(printer, node.expression, lineMap, node),
    node.typeParameter
      ? printStatement(printer, node.typeParameter, lineMap, node)
      : '',
    printer.space,
  ]);
}

function printTypeAlias(printer: Printer, node: any, lineMap: number[]): any {
  return concat([
    printKeyword(printer, node.declareToken, node, /* addSpace */ true),
    printKeyword(printer, node.typeToken, node, /* addSpace */ true),
    printStatement(printer, node.name, lineMap, node),
    node.typeParameters
      ? printStatement(printer, node.typeParameters, lineMap, node)
      : '',
    printer.space,
    printKeyword(printer, node.assignToken, node, /* addSpace */ true),
    group(printStatement(printer, node.type, lineMap, node), {}),
  ]);
}

function printParenthesizedExpression(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  return group(
    concat([
      '(',
      indent(
        concat([
          softline,
          printStatement(printer, node.expression, lineMap, node),
        ]),
      ),
      softline,
      ')',
    ]),
    {},
  );
}

function printNumericLiteral(printer: Printer, node: any): any {
  return node.flags & 0b00000000000000000010001110000000
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
        .replace(/\.(?=e|$)/, '');
}

function printStringType(printer: Printer, node: any, lineMap: number[]): any {
  return makeString(
    node.rawText,
    printer.flags & PrinterFlags.SingleQuote ? "'" : '"',
  );
}

export function printStringLiteral(printer: Printer, node: any): any {
  return makeString(
    node.rawText,
    printer.flags & PrinterFlags.SingleQuote ? "'" : '"',
  );
}

function printCommaOperator(
  printer: Printer,
  node: any,
  lineMap: number[],
  parentNode: SyntaxNode,
): any {
  if (
    parentNode.kind === SyntaxKind.ExpressionStatement ||
    parentNode.kind === SyntaxKind.ForStatement ||
    parentNode.kind === SyntaxKind.CommaOperator
  ) {
    // Indent expressions after the first to improve the readability
    return group(
      concat(
        node.expressions.map((expr: any, i: any) =>
          i === 0
            ? printStatement(printer, expr, lineMap, node)
            : concat([
                ',',
                indent(
                  concat([line, printStatement(printer, expr, lineMap, node)]),
                ),
              ]),
        ),
      ),
      {},
    );
  }

  const children = node.expressions;

  const elements: any = [];

  let previousSibling!: SyntaxNode;
  let child!: SyntaxNode;

  for (let i = 0; i < children.length; i++) {
    child = children[i];
    if (previousSibling) {
      elements.push(concat([',', printer.space, softline]));
    }

    elements.push(printStatement(printer, child, lineMap, node));
    previousSibling = child;
  }
  return group(concat(elements), {});
}
