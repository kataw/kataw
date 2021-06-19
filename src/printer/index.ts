import { RootNode } from '../ast/rootNode';
import { SyntaxKind, NodeFlags, tokenToString } from '../ast/syntax-node';
import {
  createPrinter,
  Printer,
  printKeyword,
  printPunctuator,
  positionsAreOnSameLine,
  shouldprintWhitespaceBeforeOperand,
  ifBreak,
  shouldFlatten,
  getPreferredQuote,
  makeString,
  emitTrailingCommentsOfPosition,
  printTokenWithComment,
  softline,
  toString,
  hardline,
  group,
  line,
  indent,
  chain,
  emitNode
} from './common';

export interface PrinterOptions {
  // Specify the line length that the printer will wrap on
  printWidth?: number;
  // Specify the number of spaces per indentation-level
  tabWidth?: number;
  // Indent lines with tabs instead of spaces
  useTabs?: boolean;
  // Print semicolons at the ends of statements
  semi?: boolean;
  // Print trailing comma based on code style
  trailingComma?: boolean;
  // Use single quotes instead of double quotes
  singleQuote?: boolean;
  // Print spaces between brackets in object literals
  bracketSpacing?: boolean;
  // Define file endings ('lf', 'crlf', 'cr', 'none')
  endOfLine?: 'lf' | 'crlf' | 'cr' | 'none';
  // Define line endings ('\n', '\n\r'')
  newLine?: 'cr' | 'crlf' | 'cr' | 'none';
  // Removes unnecessary whiteprinter.space, semicolons and line endings
  minify?: boolean;
  // Prins source map
  sourceMap?: boolean;
}

export function printSourceFile(cst: RootNode, options?: PrinterOptions): string {
  let printWidth = 80; /* default to '80' */
  let tabWidth = 2; /* default to '2' */

  if (options != null) {
    if (options.printWidth) printWidth = options.printWidth;
    if (options.tabWidth) tabWidth = options.tabWidth;
  }

  const printer = createPrinter(cst.source, printWidth, tabWidth);
  return toString(printStatements(cst, printer, cst), printer, '\n');
}

function printStatements(node: any, printer: Printer, parentNode: any): any {
  return emitNode(node, printer, parentNode, printStatementsWorker);
}

function printStatementsWorker(node: any, printer: Printer, parentNode: any): any {
  const kind = node.kind;

  if (node.flags & NodeFlags.IsTypeNode) {
    switch (kind) {
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
        return printKeyword(node, printer, node.start, node, /* separator */ false);
      case SyntaxKind.TypeAnnotation:
        return printTypeAnnotation(node, printer, node);
      case SyntaxKind.ArrayType:
        return printArrayType(node, printer, node);
      case SyntaxKind.IndexedAccessType:
        return printIndexedAccessType(node, printer, node);
      case SyntaxKind.TupleType:
        return printTupleType(node, printer, node);
      case SyntaxKind.TypeParameterDeclaration:
        return printTypeParameterDeclaration(node, printer, node);
      case SyntaxKind.TypeParameterList:
        return printTypeParameterList(node, printer, node);
      case SyntaxKind.TypeParameter:
        return printParameter(node, printer, node);
    }
  }

  switch (kind) {
    case SyntaxKind.RootNode:
      return printRootNode(node.statements, printer, node);
    case SyntaxKind.Identifier:
      return node.text;
    case SyntaxKind.PrivateIdentifier:
      return node.text;
    case SyntaxKind.EmptyStatement:
      return '';
    case SyntaxKind.ExportDefault:
      return printExportDefault(node, printer);
    case SyntaxKind.ExportFromClause:
      return printExportFromClause(node, printer);
    case SyntaxKind.ExportSpecifier:
      return printExportSpecifier(node, printer);
    case SyntaxKind.ImportSpecifier:
      return printImportSpecifier(node, printer, parentNode);
    case SyntaxKind.ImportClause:
      return printImportClause(node, printer, parentNode);
    case SyntaxKind.ImportDeclaration:
      return printImportDeclaration(node, printer);
    case SyntaxKind.FormalParameterList:
      return printFormalParameterList(node, printer);
    case SyntaxKind.BindingProperty:
      return printBindingProperty(node, printer);
    case SyntaxKind.ClassTail:
      return printClassTail(node, printer, parentNode);
    case SyntaxKind.ClassBody:
      return printClassBody(node, printer, parentNode);
    case SyntaxKind.ClassDeclaration:
      return printClassDeclarationOrExpression(node, printer);
    case SyntaxKind.ObjectBindingPattern:
      return printObjectBindingPattern(node, printer, parentNode);
    case SyntaxKind.BindingPropertyList:
      return printBindingPropertyList(node.properties, printer, node);
    case SyntaxKind.ArrayBindingPattern:
      return printArrayBindingPattern(node, printer);
    case SyntaxKind.BindingElement:
      return printBindingElement(node, printer);
    case SyntaxKind.BindingElementList:
      return printBindingElementList(node, printer);
    case SyntaxKind.BlockStatement:
      return printBlockStatement(node, printer, parentNode);
    case SyntaxKind.VariableStatement:
      return printVariableStatement(node, printer, false);
    case SyntaxKind.LexicalDeclaration:
      return printLexicalDeclaration(node, printer, false);
    case SyntaxKind.IfStatement:
      return printIfStatement(node, printer);
    case SyntaxKind.DoWhileStatement:
      return printDoWhileStatement(node, printer);
    case SyntaxKind.WhileStatement:
      return printWhileStatement(node, printer);
    case SyntaxKind.ForStatement:
      return printForStatement(node, printer);
    case SyntaxKind.ForInStatement:
      return printForInStatement(node, printer);
    case SyntaxKind.ForOfStatement:
      return printForOfStatement(node, printer);
    case SyntaxKind.ContinueStatement:
      return printContinueStatement(node, printer);
    case SyntaxKind.OptionalExpression:
      return printOptionalExpression(node, printer);
    case SyntaxKind.ReturnStatement:
      return printReturnStatement(node, printer);
    case SyntaxKind.WithStatement:
      return printWithStatement(node, printer);
    case SyntaxKind.FunctionDeclaration:
      return printFunctionDeclarationOrExpression(node, printer);
    case SyntaxKind.BreakStatement:
      return printBreakStatement(node, printer);
    case SyntaxKind.SwitchStatement:
      return printSwitchStatement(node, printer);
    case SyntaxKind.LabelledStatement:
      return printLabelledStatement(node, printer);
    case SyntaxKind.ThrowStatement:
      return printThrowStatement(node, printer);
    case SyntaxKind.TryStatement:
      return printTryStatement(node, printer);
    case SyntaxKind.DebuggerStatement:
      return printDebuggerStatement(node, printer);
    case SyntaxKind.CatchParameter:
      return printCatchParameter(node, printer);
    case SyntaxKind.LexicalBinding:
    case SyntaxKind.VariableDeclaration:
      return printVariableDeclarationOrLexicalBinding(node, printer);
    case SyntaxKind.ExportFromClause:
      return printExportFromClause(node, printer);
    case SyntaxKind.ExportSpecifier:
      return printExportSpecifier(node, printer);
    case SyntaxKind.ExportDeclaration:
      return printExportDeclaration(node, printer);
    case SyntaxKind.ImportSpecifier:
      return printImportSpecifier(node, printer, parentNode);
    case SyntaxKind.ImportClause:
      return printImportClause(node, printer, parentNode);
    case SyntaxKind.FieldDefinition:
      return printFieldDefinition(node, printer);
    case SyntaxKind.ClassElement:
      return printClassElement(node, printer);
    case SyntaxKind.CaseBlock:
      return printCaseBlock(node, printer);
    case SyntaxKind.CaseClause:
      return printCaseClause(node, printer);
    case SyntaxKind.DefaultClause:
      return printDefaultClause(node, printer);
    case SyntaxKind.Catch:
      return printCatchClause(node, printer);
    case SyntaxKind.ExpressionStatement:
      return printExpressionStatement(node, printer);
    case SyntaxKind.ImportCall:
      return printImportCall(node, printer);
    case SyntaxKind.ImportMeta:
      return printImportMeta(node, printer);
    case SyntaxKind.NewTarget:
      return printNewTarget(node, printer);
    case SyntaxKind.ThisKeyword:
      return printKeyword(node, printer, node.start, node, /* separator */ false);
    case SyntaxKind.NullKeyword:
      return printKeyword(node, printer, node.start, node, /* separator */ false);
    case SyntaxKind.TrueKeyword:
      return printKeyword(node, printer, node.start, node, /* separator */ false);
    case SyntaxKind.FalseKeyword:
      return printKeyword(node, printer, node.start, node, /* separator */ false);
    default:
      if (node.flags & NodeFlags.ExpressionNode) {
        return printExpressions(node, printer, parentNode);
      }
  }
}

function printExpressions(node: any, printer: Printer, parentNode: any): any {
  return emitNode(node, printer, parentNode, printExpressionWorker);
}

function printExpressionWorker(node: any, printer: Printer, parentNode: any): any {
  const kind = node.kind;
  switch (kind) {
    case SyntaxKind.MethodDefinition:
      return printMethodDefinition(node, printer);
    case SyntaxKind.Identifier:
      return node.text;
    case SyntaxKind.ThisKeyword:
      return printKeyword(node, printer, node.start, node, /* separator */ false);
    case SyntaxKind.PrivateIdentifier:
      return node.text;
    case SyntaxKind.CoverInitializedName:
      return printCoverInitializedName(node, printer);
    case SyntaxKind.Super:
      return printSuper(node, printer);
    case SyntaxKind.PropertyDefinition:
      return printPropertyDefinition(node, printer);
    case SyntaxKind.PropertyMethod:
      return printPropertyMethod(node, printer);
    case SyntaxKind.ComputedPropertyName:
      return printComputedPropertyName(node, printer);
    case SyntaxKind.ArrayLiteral:
      return printExpressions(node.elementList, printer, parentNode);
    case SyntaxKind.ElementList:
      return printElementList(node, printer);
    case SyntaxKind.ObjectLiteral:
      return printObjectLiteral(node, printer, parentNode);
    case SyntaxKind.SpreadProperty:
      return printSpreadProperty(node, printer);
    case SyntaxKind.PropertyDefinitionList:
      return printPropertyDefinitionList(node.properties, printer, node);
    case SyntaxKind.FunctionExpression:
      return printFunctionDeclarationOrExpression(node, printer);
    case SyntaxKind.OptionalChain:
      return printOptionalChain(node, printer);
    case SyntaxKind.CallChain:
      return printCallChain(node, printer);
    case SyntaxKind.IndexExpressionChain:
      return printIndexExpressionChain(node, printer, parentNode);
    case SyntaxKind.MemberAccessChain:
      return printMemberAccessChain(node, printer);
    case SyntaxKind.SpreadElement:
      return chain([
        printKeyword(node.ellipsisToken, printer, node.ellipsisToken.start, node, /* separator */ false),
        printExpressions(node.argument, printer, parentNode)
      ]);
    case SyntaxKind.MemberAccessExpression:
      return printMemberAccessExpression(node, printer);
    case SyntaxKind.IndexExpression:
      return printIndexExpression(node, printer);
    case SyntaxKind.CallExpression:
      return printCallExpression(node, printer);
    case SyntaxKind.NewExpression:
      return printNewExpression(node, printer);
    case SyntaxKind.ParenthesizedExpression:
      return printParenthesizedExpression(node, printer);
    case SyntaxKind.ArrowFunction:
      return printArrowFunction(node, printer);
    case SyntaxKind.UnaryExpression:
      return printUnaryExpression(node, printer);
    case SyntaxKind.AwaitExpression:
      return printAwaitExpression(node, printer);
    case SyntaxKind.PrefixUpdateExpression:
      return printPrefixUpdateExpression(node, printer);
    case SyntaxKind.PostfixUpdateExpression:
      return printPostfixUpdateExpression(node, printer);
    case SyntaxKind.BinaryExpression:
      return printBinaryExpression(node, printer, parentNode);
    case SyntaxKind.ConditionalExpression:
      return printConditionalExpression(node, printer, parentNode);
    case SyntaxKind.TemplateTail:
      return printTemplateTail(node, printer);
    case SyntaxKind.TaggedTemplate:
      return printTaggedTemplate(node, printer);
    case SyntaxKind.TemplateSpan:
      return printTemplateSpan(node, printer);
    case SyntaxKind.TemplateExpression:
      return printTemplateExpression(node, printer, parentNode);
    case SyntaxKind.YieldExpression:
      return printYieldExpression(node, printer);
    case SyntaxKind.ClassExpression:
      return printClassDeclarationOrExpression(node, printer);
    case SyntaxKind.Elison:
      return '';
    case SyntaxKind.TrueKeyword:
      return printKeyword(node, printer, node.start, node, /* separator */ false);
    case SyntaxKind.FalseKeyword:
      return printKeyword(node, printer, node.start, node, /* separator */ false);
    case SyntaxKind.StringLiteral:
      return printStringLiteral(node, { singleQuote: false });
    case SyntaxKind.NumericLiteral:
      return printNumericLiteral(node);
    case SyntaxKind.BigIntLiteral:
      return `${node.rawText}n`;
    case SyntaxKind.NullKeyword:
      return printKeyword(node, printer, node.start, node, /* separator */ false);
    case SyntaxKind.RegularExpressionLiteral:
      return node.text;
    case SyntaxKind.CommaOperator:
      return printCommaOperator(node, printer, parentNode);
    case SyntaxKind.YieldExpression:
      return printYieldExpression(node, printer);
    case SyntaxKind.AssignmentExpression:
      return printAssignmentExpression(node, printer);
  }
}

function printYieldExpression(node: any, printer: Printer): any {
  return chain([
    printTokenWithComment(node.yieldKeyword, node.start, printer, node, true),
    node.asteriskToken ? printTokenWithComment(node.asteriskToken, node.start, printer, node, true) : '',
    node.expression ? printExpressions(node.expression, printer, node) : ''
  ]);
}

function printCommaOperator(node: any, printer: Printer, parentNode: any): any {
  if (parentNode.kind === SyntaxKind.ExpressionStatement || parentNode.kind === SyntaxKind.ForStatement) {
    // Indent expressions after the first to improve the readability
    return group(
      chain(
        node.expressions.map((expr: any, i: any) =>
          i === 0
            ? printExpressions(expr, printer, node)
            : chain([',', indent(chain([line, printExpressions(expr, printer, node)]))])
        )
      )
    );
  }

  return group(chain(printDelimitedList(node.expressions, printer, node, printExpressions, ',', false)));
}
function printDelimitedList(
  children: any,
  printer: Printer,
  parentNode: any,
  print: (node: any, printer: Printer, parentNode?: any) => any,
  delimiter: string,
  hard?: boolean
): any {
  if (!children) return '';
  const elements: any = [];
  const count = children.length;
  const isEmpty = children === undefined || 0 >= children.length || count === 0;
  // Emit each child
  let previousSibling: Node | undefined;
  const x = hard ? hardline : softline;

  for (let i = 0; i < count; i++) {
    const child = children[i];
    // Write the delimiter if this is not the first node.
    if (previousSibling) {
      // Write either a line terminator or whitespace to separate the elements.
      elements.push(chain([delimiter, printer.space, x]));
    }
    // Print this child.
    elements.push(
      child ? chain([emitTrailingCommentsOfPosition(printer, child.start), print(child, printer, parentNode)]) : ''
    );

    previousSibling = child;
  }
  return elements;
}

function printRootNode(children: any, printer: Printer, parentNode: any) {
  return chain([hardline, printList(children, printer, parentNode, printStatements)]);
}

function printList(
  children: any,
  printer: Printer,
  parentNode: any,
  print: (node: any, printer: Printer, parentNode: any) => any
): any {
  const elements: any = [];
  const count = children.length;

  for (let i = 0; i < count; i++) {
    const isLast = i === children.length - 1;
    const node = children[i];

    if (node.kind === SyntaxKind.EmptyStatement) {
      continue;
    }
    let printed = print(node, printer, parentNode);

    if (!isLast) {
      const nextNode = children[i + 1];
      if (positionsAreOnSameLine(node.start, nextNode.start, printer)) {
        printed = chain([printed, hardline]);
      }
    }
    elements.push(printed);
  }
  return chain(elements);
}

function printExpressionStatement(node: any, printer: Printer): any {
  return chain([printStatements(node.expression, printer, node), ';']);
}

function printInitializer(node: any, printer: Printer, parentNode: any): any {
  if (node) {
    return chain([printer.space, '=', printer.space, printExpressions(node, printer, parentNode)]);
  }

  return '';
}

function canBreakAssignment(left: any, right: any): boolean {
  switch (right.kind) {
    case SyntaxKind.StringType:
    case SyntaxKind.CommaOperator:
    case SyntaxKind.BinaryExpression:
      return true;
    case SyntaxKind.ConditionalExpression: {
      const { shortCircuit } = right;
      return (
        shortCircuit.kind === SyntaxKind.BinaryExpression &&
        shortCircuit.right.kind !== SyntaxKind.ArrayLiteral &&
        shortCircuit.right.kind !== SyntaxKind.ObjectLiteral
      );
    }
    case SyntaxKind.ClassExpression:
      return right.decorators && right.decorators.node.elements.length;
  }

  if (
    left.kind & SyntaxKind.IsIdentifier ||
    left.flags & NodeFlags.IsMemberExpression ||
    left.kind === SyntaxKind.PrivateIdentifier ||
    left.kind === SyntaxKind.StringLiteral
  ) {
    let node = right;
    while (node && node.kind === SyntaxKind.UnaryExpression) {
      node = node.operand;
    }
    if ((node && node.kind === SyntaxKind.StringKeyword) || node.flags & NodeFlags.IsMemberExpression) {
      return true;
    }
  }

  return false;
}

function printAssignmentExpression(node: any, printer: Printer): any {
  const canBreak = canBreakAssignment(node.left, node.right);
  return group(
    chain([
      printExpressions(node.left, printer, node),
      printer.space,
      tokenToString(node.operatorToken),
      canBreak
        ? group(indent(chain([line, printExpressions(node.right, printer, node)])))
        : chain([printer.space, printExpressions(node.right, printer, node)])
    ])
  );
}

export function printStringLiteral(node: any, options: any) {
  const enclosingQuote = getPreferredQuote(node.rawText, options.singleQuote ? "'" : '"');

  // It might sound unnecessary to use `makeString` even if the string already
  // is enclosed with `enclosingQuote`, but it isn't. The string could contain
  // unnecessary escapes (such as in `"\'"`). Always using `makeString` makes
  // sure that we consistently output the minimum amount of escaped quotes.
  return makeString(node.rawText, enclosingQuote);
}

function printNumericLiteral(node: any): string {
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

function printCoverInitializedName(node: any, printer: Printer): any {
  return group(
    chain([
      printStatements(node.left, printer, node),
      printer.space,
      '=',
      printer.space,
      printStatements(node.right, printer, node)
    ])
  );
}

function printExportSpecifier(node: any, printer: Printer): any {
  return node.moduleExportName
    ? chain([
        printExpressions(node.name, printer, node),
        printer.space,
        printTokenWithComment(node.asKeyword, node.name.end, printer, node, true),
        printExpressions(node.moduleExportName, printer, node)
      ])
    : node.binding
    ? chain([
        printExpressions(node.name, printer, node),
        printer.space,
        printTokenWithComment(node.asKeyword, node.name.end, printer, node, true),
        printExpressions(node.binding, printer, node)
      ])
    : printExpressions(node.name, printer, node);
}

function printExportDefault(node: any, printer: Printer): any {
  return chain([
    printTokenWithComment(node.exportKeyword, node.start, printer, node, true),
    'default',
    printer.space,
    printStatements(node.declaration, printer, node),
    ';'
  ]);
}

function printFromClause(node: any, printer: Printer): any {
  return node ? chain([printer.space, 'from', printer.space, printExpressions(node, printer, node)]) : '';
}

function printExportFromClause(node: any, printer: Printer): any {
  return node.namedBinding
    ? chain([
        printer.space,
        printTokenWithComment(node.asKeyword, node.start, printer, node, true),
        printExpressions(node.namedBinding, printer, node)
      ])
    : node.moduleExportName
    ? // arbitrary module namespace names
      chain([
        printer.space,
        printTokenWithComment(node.asKeyword, node.start, printer, node, true),
        printExpressions(node.moduleExportName, printer, node)
      ])
    : '';
}

function printNamedExports(node: any, printer: Printer, parentNode: any): any {
  return printImportsList(node.exportsList, printer, parentNode);
}

function printExportDeclaration(node: any, printer: Printer): any {
  if (node.declaration) {
    return chain([
      printTokenWithComment(node.exportKeyword, node.start, printer, node, true),
      printStatements(node.declaration, printer, node)
    ]);
  }

  if (node.namedExports) {
    return chain([
      printTokenWithComment(node.exportKeyword, node.start, printer, node, true),
      printNamedExports(node.namedExports, printer, node),
      printFromClause(node.fromClause, printer),
      ';'
    ]);
  }

  if (node.exportFromClause) {
    return chain([
      printTokenWithComment(node.exportKeyword, node.start, printer, node, true),
      '*',
      printExportFromClause(node.exportFromClause, printer),
      printFromClause(node.fromClause, printer),
      ';'
    ]);
  }
}

function printImportClause(node: any, printer: Printer, _parentNode: any): any {
  if (node) {
    if (node.defaultBinding) {
      if (node.nameSpaceImport) {
        return chain([
          printStatements(node.defaultBinding, printer, node),
          ',',
          printer.space,
          '*',
          printer.space,
          'as',
          printer.space,
          printStatements(node.nameSpaceImport, printer, node)
        ]);
      }
      if (node.namedImports) {
        return chain([
          printStatements(node.defaultBinding, printer, node),
          ',',
          printer.space,
          printNamedImports(node.namedImports, printer)
        ]);
      }
      return printStatements(node.defaultBinding, printer, node);
    }
    if (node.namedImports) {
      return node.defaultBinding
        ? chain([', ', printNamedImports(node.namedImports, printer)])
        : printNamedImports(node.namedImports, printer);
    }

    if (node.nameSpaceImport) {
      return chain(['*', printer.space, 'as', printer.space, printStatements(node.nameSpaceImport, printer, node)]);
    }
  }
  return '';
}

// ImportDeclaration :
//   `import` ImportClause FromClause `;`
//   `import` ModuleSpecifier `;`
function printImportDeclaration(node: any, printer: Printer): any {
  return node.importClause
    ? chain([
        printTokenWithComment(node.importKeyword, node.start, printer, node, true),
        printImportClause(node.importClause, printer, node),
        printer.space,
        printTokenWithComment(node.fromKeyword, node.importClause.end, printer, node, true),
        printExpressions(node.fromClause, printer, node),
        ';'
      ])
    : chain([node.importKeyword, printer.space, printExpressions(node.moduleSpecifier, printer, node), ';']);
}

function printNamedImports(node: any, printer: Printer): any {
  return printImportsList(node.importsList, printer, node);
}

function printImportsList(node: any, printer: Printer, parentNode: any): any {
  if (node.specifiers.length === 0) {
    return '{}';
  }
  return group(
    chain([
      '{',
      indent(
        chain([
          printer.bracketSpacing ? line : softline,
          chain([chain(printDelimitedList(node.specifiers, printer, parentNode, printStatements, ',', false)), ''])
        ])
      ),
      ifBreak(/*shouldPrintComma(options) ? "," : */ ''),
      printer.bracketSpacing ? line : softline,
      '}'
    ])
  );
}

function printImportSpecifier(node: any, printer: Printer, parentNode: any): any {
  return node.name
    ? chain([
        printExpressions(node.name, printer, node),
        printer.space,
        printKeyword(node.asKeyword, printer, node.name.end, node, /* separator */ false),
        printExpressions(node.binding, printer, parentNode)
      ])
    : printExpressions(node.binding, printer, parentNode);
}

function printSuper(node: any, printer: Printer): any {
  return printTokenWithComment(node.superKeyword, node.start, printer, node, false);
}

function printDoWhileStatement(node: any, printer: Printer): any {
  return chain([
    group(
      chain([
        printKeyword(node.doKeyword, printer, node.doKeyword.start, node, /* separator */ false),
        adjustClause(node.statement, printer, printStatements(node.statement, printer, node))
      ])
    ),
    node.statement.kind === SyntaxKind.Block ? printer.space : hardline,
    printKeyword(node.whileKeyword, printer, node.statement.end, node, /* separator */ false),
    printer.space,
    '(',
    group(chain([indent(chain([softline, printExpressions(node.expression, printer, node)])), softline])),
    ')',
    ';'
  ]);
}

function printWhileStatement(node: any, printer: Printer): any {
  return group(
    chain([
      printKeyword(node.whileKeyword, printer, node.whileKeyword.start, node, /* separator */ false),
      printer.space,
      '(',
      group(chain([indent(chain([softline, printExpressions(node.expression, printer, node)])), softline])),
      ')',
      adjustClause(node.statement, printer, printStatements(node.statement, printer, node))
    ])
  );
}

function printDebuggerStatement(node: any, printer: Printer): any {
  return chain([
    printKeyword(node.debuggerKeyword, printer, node.debuggerKeyword.end, node, /* separator */ false),
    ';'
  ]);
}

function printLabelledStatement(node: any, printer: Printer): any {
  return chain([
    printStatements(node.label, printer, node),
    ':',
    node.statement.kind === SyntaxKind.EmptyStatement
      ? ';'
      : chain([printer.space, printStatements(node.statement, printer, node)])
  ]);
}

function printContinueStatement(node: any, printer: Printer): any {
  const parts = [printKeyword(node.continueKeyword, printer, node.start, node, /* separator */ false)];

  if (node.label) {
    parts.push(printer.space, printStatements(node.label, printer, node));
  }

  parts.push(';');

  return chain(parts);
}

function printBreakStatement(node: any, printer: Printer): any {
  const parts = [printKeyword(node.breakKeyword, printer, node.start, node, /* separator */ false)];

  if (node.label) {
    parts.push(printer.space, printStatements(node.label, printer, node));
  }

  parts.push(';');

  return chain(parts);
}

function printWithStatement(node: any, printer: Printer): any {
  return chain([
    printKeyword(node.withKeyword, printer, node.start, node, /* separator */ false),
    printer.space,
    '(',
    printExpressions(node.expression, printer, node),
    ')',
    adjustClause(node.statement, printer, printStatements(node.statement, printer, node))
  ]);
}

function printDecorators(node: any, printer: Printer): any {
  if (node.elements) {
    const children = node.elements;
    const elements: any[] = [];
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      elements.push(printDecorator(child, printer));
    }
    return chain(elements);
  }
  return '';
}

function printDecorator(node: any, printer: Printer): any {
  return chain(['@', printExpressions(node.expression, printer, node), hardline]);
}

function printCatchParameter(node: any, printer: Printer): any {
  return chain([printStatements(node.binding, printer, node), printInitializer(node.initializer, printer, node)]);
}

function printImportCall(node: any, printer: Printer): any {
  return chain([
    printKeyword(node.importKeyword, printer, node.start, node, /* separator */ false),
    '(',
    printExpressions(node.expression, printer, node),
    ')'
  ]);
}

function printImportMeta(node: any, printer: Printer): any {
  return chain([
    printKeyword(node.importKeyword, printer, node.importKeyword.start, node, /* separator */ false),
    '.',
    node.metaIdentifier
      ? printKeyword(node.metaIdentifier, printer, node.metaIdentifier.start, node, /* separator */ false)
      : ''
  ]);
}

function printNewTarget(node: any, printer: Printer): any {
  return chain([
    printKeyword(node.newKeyword, printer, node.newKeyword.start, node, /* separator */ false),
    '.',
    printKeyword(node.targetIdentifier, printer, node.targetIdentifier.start, node, /* separator */ false)
  ]);
}

function printCatchClause(node: any, printer: Printer): any {
  return node.catchParameter
    ? chain([
        printKeyword(node.catchKeyword, printer, node.catchKeyword.start, node, /* separator */ true),
        '(',
        printStatements(node.catchParameter, printer, node),
        ')',
        printer.space,
        printStatements(node.block, printer, node)
      ])
    : chain([
        printKeyword(node.catchKeyword, printer, node.catchKeyword.start, node, /* separator */ true),
        printStatements(node.block, printer, node)
      ]);
}

function printTaggedTemplate(node: any, printer: Printer): any {
  return chain([printStatements(node.member, printer, node), printStatements(node.template, printer, node)]);
}

function printTemplateExpression(node: any, printer: Printer, parentNode: any): any {
  const elements: any[] = [];

  for (let i = 0; i < node.spans.length; i++) {
    const child = node.spans[i];
    elements.push(printExpressions(child, printer, node));
  }
  return chain([
    '`',
    chain(elements),
    parentNode.kind === SyntaxKind.TaggedTemplate && parentNode.flags & NodeFlags.TemplateLiteral
      ? chain(['`', printStatements(node.tail, printer, node), '`'])
      : printStatements(node.tail, printer, node),
    '`'
  ]);
}

function printTemplateSpan(node: any, printer: Printer): any {
  return group(chain([node.text, '${', printExpressions(node.expression, printer, node), '}']));
}

function printTemplateTail(node: any, _printer: Printer): any {
  return node.flags & NodeFlags.TemplateLiteral ? '`' + node.text + '`' : node.text;
}

function printBindingProperty(node: any, printer: Printer): any {
  return chain([
    printStatements(node.key, printer, node),
    ': ',
    printStatements(node.value, printer, node),
    printInitializer(node.initializer, printer, node)
  ]);
}

function printSwitchStatement(node: any, printer: Printer): any {
  return chain([
    group(
      chain([
        printKeyword(node.switchKeyword, printer, node.start, node, /* separator */ false),
        '(',
        group(chain([indent(chain([softline, printExpressions(node.expression, printer, node)])), softline])),
        ')',
        printer.space
      ])
    ),
    printCaseBlock(node.caseBlock, printer)
  ]);
}

function printCaseBlock(node: any, printer: Printer): any {
  return chain([
    '{',
    node.clauses.length > 0
      ? indent(chain([hardline, chain(printDelimitedList(node.clauses, printer, node, printStatements, ''))]))
      : '',
    hardline,
    '}'
  ]);
}

function printDefaultClause(node: any, printer: Printer): any {
  const { statements } = node;
  return chain([
    printKeyword(node.defaultKeyword, printer, node.defaultKeyword.start, node, /* separator */ false),
    ' ',
    statements.length === 1 && statements[0].kind === SyntaxKind.Block
      ? printStatements(statements[0], printer, node)
      : indent(chain([hardline, printCaseOrDefaultClauseStatements(statements, printer, node)]))
  ]);
}

function printCaseClause(node: any, printer: Printer): any {
  const { statements } = node;
  return chain([
    printKeyword(node.caseKeyword, printer, node.start, node, /* separator */ false),
    printer.space,
    printExpressions(node.expression, printer, node),
    ':',
    printer.space,
    statements.length === 1 && statements[0].kind === SyntaxKind.Block
      ? printStatements(statements[0], printer, node)
      : indent(chain([hardline, printCaseOrDefaultClauseStatements(statements, printer, node)]))
  ]);
}

function printCaseOrDefaultClauseStatements(children: any, printer: Printer, parentNode: any): any {
  return printList(children, printer, parentNode, printStatements);
}

function printTryStatement(node: any, printer: Printer): any {
  return chain([
    printKeyword(node.tryKeyword, printer, node.start, node, /* separator */ false),
    printer.space,
    printStatements(node.block, printer, node),
    node.catchClause ? chain([printer.space, printStatements(node.catchClause, printer, node)]) : '',
    node.finallyBlock
      ? chain([
          printer.space,
          printKeyword(node.tryKeyword, printer, (node.block || node.finallyBlock).end, node, /* separator */ false),
          printStatements(node.finallyBlock, printer, node)
        ])
      : ''
  ]);
}

function printReturnStatement(node: any, printer: Printer): any {
  return chain([
    printKeyword(node.returnKeyword, printer, node.start, node, /* separator */ true),
    node.expression ? chain([printer.space, printExpressions(node.expression, printer, node)]) : '',
    ';'
  ]);
}

function printThrowStatement(node: any, printer: Printer): any {
  return chain([
    printKeyword(node.throwKeyword, printer, node.start, node, /* separator */ true),
    node.expression ? chain([printer.space, printExpressions(node.expression, printer, node)]) : '',
    ';'
  ]);
}

function printClassElement(node: any, printer: Printer): any {
  return chain([
    node.declareToken
      ? printKeyword(node.declareToken, printer, node.declareToken.start, node, /* separator */ true)
      : '',
    node.decorators ? printDecorators(node.decorators, printer) : '',
    node.abstractKeyword
      ? printKeyword(node.abstractKeyword, printer, node.abstractKeyword.start, node, /* separator */ true)
      : '',
    node.asyncKeyword
      ? printKeyword(node.asyncKeyword, printer, node.asyncKeyword.start, node, /* separator */ true)
      : '',
    node.staticKeyword
      ? printKeyword(node.staticKeyword, printer, node.staticKeyword.start, node, /* separator */ true)
      : '',
    node.setKeyword ? printKeyword(node.setKeyword, printer, node.setKeyword.start, node, /* separator */ true) : '',
    node.getKeyword ? printKeyword(node.getKeyword, printer, node.getKeyword.start, node, /* separator */ true) : '',
    printKeyword(node.staticKeyword, printer, node.start, node, /* separator */ true),

    node.isOptional ? chain(['?', printer.space]) : '',
    printExpressions(node.method, printer, node)
  ]);
}

function printClassDeclarationOrExpression(node: any, printer: Printer): any {
  const parts: any = [
    node.declareKeyword
      ? printKeyword(node.declareKeyword, printer, node.declareKeyword.start, node, /* separator */ true)
      : '',
    node.decorators ? printDecorators(node.decorators, printer) : '',
    printKeyword(node.classKeyword, printer, node.classKeyword.start, node, /* separator */ true),
    node.name ? printStatements(node.name, printer, node) : ''
  ];

  parts.push(printer.space, printClassTail(node.tail, printer, node));

  return chain(parts);
}

function printClassTail(node: any, printer: Printer, parentNode: any): any {
  return chain([
    node.classHeritage ? chain([' ', printStatements(node.classHeritage, printer, node)]) : '',
    node.flags & NodeFlags.Declared ? /* TODO */ 'TODO!' : printClassBody(node.body, printer, parentNode)
  ]);
}

function printClassBody(node: any, printer: Printer, parentNode: any): any {
  try {
    if (node.elements.length === 0) {
      return '{}';
    }
  } catch (x) {}
  return chain([
    '{',
    indent(chain([hardline, printList(node.elements, printer, parentNode, printStatements)])),
    hardline,
    '}'
  ]);
}

function printBlock(node: any, printer: Printer, parentNode: any): any {
  const statements = node.statements;
  const hasContents = statements !== undefined && statements.length > 0;

  if (
    (!hasContents && parentNode.kind === SyntaxKind.FunctionDeclaration) ||
    parentNode.kind === SyntaxKind.FunctionExpression ||
    parentNode.kind === SyntaxKind.MethodDefinition ||
    parentNode.kind === SyntaxKind.ArrowFunction ||
    parentNode.kind === SyntaxKind.FieldDefinition ||
    parentNode.kind === SyntaxKind.ForStatement ||
    parentNode.kind === SyntaxKind.ClassTail ||
    parentNode.kind === SyntaxKind.WhileStatement ||
    parentNode.kind === SyntaxKind.DoWhileStatement ||
    parentNode.kind === SyntaxKind.ForInStatement ||
    parentNode.kind === SyntaxKind.SwitchStatement ||
    parentNode.kind === SyntaxKind.ClassTail
  ) {
    return group(chain(['{', node.multiline ? hardline : softline, '}']));
  }

  return chain(['{', indent(printList(statements, printer, parentNode, printStatements), true), hardline, '}']);
}

function printIfStatement(node: any, printer: Printer): any {
  const parts: any[] = [
    group(
      chain([
        printKeyword(node.ifKeyword, printer, node.start, node, /* separator */ true),
        printPunctuator('(', node.ifKeyword.end, node),
        group(chain([indent(chain([softline, printStatements(node.expression, printer, node)])), softline])),
        printPunctuator(')', node.expression.end, node),
        adjustClause(node.consequent, printer, printStatements(node.consequent, printer, node))
      ])
    )
  ];

  if (node.alternate) {
    parts.push(
      node.consequent.kind === SyntaxKind.Block ? printer.space : hardline,
      printKeyword(node.elseKeyword, printer, node.consequent.end, node, /* separator */ true),
      group(
        adjustClause(
          node.alternate,
          printer,
          printStatements(node.alternate, printer, node),
          node.alternate.kind === SyntaxKind.IfStatement
        )
      )
    );
  }

  return chain(parts);
}

function printForInStatement(node: any, printer: Printer): any {
  return chain([
    printKeyword(node.forKeyword, printer, node.start, node, /* separator */ true),
    printPunctuator('(', node.forKeyword.end, node),
    printForBinding(node.initializer, printer, node),
    printer.space,
    printKeyword(node.inKeyword, printer, node.initializer.end, node, /* separator */ true),
    printExpressions(node.expression, printer, node),
    printPunctuator(')', node.initializer.end, node),
    adjustClause(node.statement, printer, printStatements(node.statement, printer, node))
  ]);
}

function printForOfStatement(node: any, printer: Printer): any {
  return chain([
    printKeyword(node.forKeyword, printer, node.start, node, /* separator */ true),
    printKeyword(node.awaitKeyword, printer, node.forKeyword.end, node, /* separator */ true),
    printPunctuator('(', node.awaitKeyword ? node.awaitKeyword.end : node.forKeyword.end, node),
    printForBinding(node.initializer, printer, node),
    printer.space,
    printKeyword(node.ofKeyword, printer, node.initializer.end, node, /* separator */ true),
    printExpressions(node.expression, printer, node),
    printPunctuator(')', node.initializer.end, node),
    adjustClause(node.statement, printer, printStatements(node.statement, printer, node))
  ]);
}

function printForStatement(node: any, printer: Printer): any {
  const body = adjustClause(node.statement, printer, printStatements(node.statement, printer, node));

  if (!node.initializer && !node.condition && !node.incrementor) {
    return chain(['for (;;)', body]);
  }

  const condition = node.condition ? printStatements(node.condition, printer, node) : '';
  const incrementor = node.incrementor ? printStatements(node.incrementor, printer, node) : '';

  return chain([
    printKeyword(node.forKeyword, printer, node.start, node, /* separator */ true),
    printPunctuator('(', node.awaitKeyword ? node.awaitKeyword.end : node.forKeyword.end, node),
    group(
      chain([
        indent(
          chain([
            softline,
            printForBinding(node.initializer, printer, node),
            ';',
            line,
            condition,
            ';',
            line,
            incrementor
          ])
        ),
        softline
      ])
    ),
    printPunctuator(')', node.end, node),
    body
  ]);
}

function adjustClause(node: any, printer: Printer, clause: any, forceSpace?: any) {
  if (node.kind === SyntaxKind.EmptyStatement) {
    return ';';
  }

  if (node.kind === SyntaxKind.Block || forceSpace) {
    return chain([printer.space, clause]);
  }

  return indent(chain([line, clause]));
}

function printForBinding(node: any, printer: Printer, parentNode: any): any {
  if (node && node.kind === SyntaxKind.VariableDeclaration) {
    return printVariableStatement(node, printer, /* inForStatement */ true);
  }
  if (node && node.kind === SyntaxKind.BindingList) {
    return chain([node.flags & NodeFlags.Const ? 'const' : 'let', printBindingList(node.bindingList, printer)]);
  }
  return printStatements(node, printer, parentNode);
}

function printBindingElement(node: any, printer: Printer): any {
  return chain([
    printKeyword(node.ellipsisToken, printer, node.start, node, /* separator */ false),
    printStatements(node.left, printer, node),
    node.optionalToken
      ? printKeyword(node.optionalToken, printer, node.optionalToken.start, node, /* separator */ false)
      : '',
    node.right ? printInitializer(node.right, printer, node) : ''
  ]);
}

function printArrayBindingPattern(node: any, printer: Printer): any {
  return printStatements(node.elementList, printer, node);
}

function printBindingElementList(node: any, printer: Printer): any {
  if (node.elements.length === 0) {
    return '[]';
  }

  const shouldBreak =
    node.elements.length > 1 &&
    node.elements.every((element: any, i: any, elements: any) => {
      const elementType = element && element.kind;
      if (elementType !== SyntaxKind.ArrayLiteral && elementType !== SyntaxKind.ObjectLiteral) {
        return false;
      }

      const nextElement = elements[i + 1];
      if (nextElement && elementType !== nextElement.type) {
        return false;
      }

      const itemsKey = elementType === SyntaxKind.ArrayLiteral ? 'elements' : 'properties';

      return element[itemsKey] && element[itemsKey].length > 1;
    });

  const trailingComma = printer.trailingComma ? ',' : node.trailingComma ? ',' : '';

  return group(
    chain([
      '[',
      indent(
        chain([
          softline,
          chain([chain(printDelimitedList(node.elements, printer, node, printStatements, ',', false)), trailingComma])
        ])
      ),
      softline,
      ']'
    ]),
    shouldBreak
  );
}

function printObjectLiteral(node: any, printer: Printer, parentNode: any): any {
  return printPropertyDefinitionList(node.propertyList, printer, parentNode);
}

function printPropertyDefinitionList(node: any, printer: Printer, parentNode: any): any {
  const children = node.properties;
  return children.length === 0
    ? '{}'
    : group(
        chain([
          '{',
          indent(chain([line, chain(printDelimitedList(node.properties, printer, parentNode, printExpressions, ','))])),
          line,
          '}'
        ]),
        node.multiline
      );
}

function printObjectBindingPattern(node: any, printer: Printer, parentNode: any): any {
  return printBindingPropertyList(node.propertyList, printer, parentNode);
}

function printBindingPropertyList(node: any, printer: Printer, parentNode: any): any {
  return node.properties.length === 0
    ? '{}'
    : group(
        chain([
          '{',
          indent(
            chain([
              printer.bracketSpacing ? line : softline,
              chain(printDelimitedList(node.properties, printer, parentNode, printStatements, ','))
            ])
          ),
          ifBreak(''),
          printer.bracketSpacing ? line : softline,
          '}'
        ]),
        (parentNode.kind & 0b00000000100001000100000000000000) === 0
      );
}

function printBindingList(node: any, printer: Printer): any {
  return printDelimitedList(node.bindingList, printer, node, printStatements, ',');
}

function printVariableDeclarationList(node: any, printer: Printer): any {
  return printDelimitedList(node.declarations, printer, node, printStatements, ',');
}

function printVariableStatement(node: any, printer: Printer, inForStatement: boolean): any {
  const declarations = printVariableDeclarationList(node.declarationList, printer);

  return group(
    chain([
      printKeyword(node.varKeyword, printer, node.start, node, /* separator */ true),
      declarations.shift()!,
      indent(chain(declarations)),
      inForStatement ? '' : ';'
    ])
  );
}

function printLexicalDeclaration(node: any, printer: Printer, inForStatement: boolean): any {
  const printed = printBindingList(node.binding, printer);
  return group(
    chain([
      printKeyword(node.lexicalKeyword, printer, node.start, node, /* separator */ true),
      printed[0],
      indent(chain(printed.slice(1))),
      inForStatement ? '' : ';'
    ])
  );
}

function printFormalParameterList(node: any, printer: Printer): any {
  if (node.formalParameters.length === 0) {
    return '()';
  }

  const printed: any = printDelimitedList(node.formalParameterList, printer, node, printStatements, ',');

  if (node.formalParameters.length === 1) {
    return chain(['(', chain(printed), ')']);
  }

  return chain([
    '(',
    indent(chain([softline, chain(printed)])),
    ifBreak(printer.trailingComma ? ',' : node.trailingComma ? ',' : ''),
    ifBreak(printer.trailingComma ? ',' : node.trailingComma ? ',' : ''),
    softline,
    ')'
  ]);
}

function printBlockStatement(node: any, printer: Printer, parentNode: any): any {
  return printBlock(node.block, printer, parentNode);
}

function printVariableDeclarationOrLexicalBinding(node: any, printer: Printer): any {
  if (node.initializer) {
    const { initializer } = node;

    const canBreak =
      initializer.kind === SyntaxKind.CommaOperator ||
      initializer.kind === SyntaxKind.StringType ||
      initializer.kind === SyntaxKind.BinaryExpression ||
      (initializer.kind === SyntaxKind.ClassExpression &&
        initializer.decorators &&
        initializer.decorators.node.elements.length) ||
      initializer.kind === SyntaxKind.CommaOperator ||
      initializer.kind === SyntaxKind.UnaryExpression ||
      (initializer.kind === SyntaxKind.ConditionalExpression &&
        initializer.shortCircuit.kind === SyntaxKind.BinaryExpression &&
        initializer.shortCircuit.right.kind !== SyntaxKind.ArrayLiteral &&
        initializer.shortCircuit.right.kind !== SyntaxKind.ObjectLiteral);

    return group(
      chain([
        printStatements(node.binding, printer, node),
        node.type ? printTypeAnnotation(node.type, printer, node) : '',
        printer.space,
        '=',
        canBreak
          ? group(indent(chain([line, printExpressions(initializer, printer, node)])))
          : chain([printer.space, printExpressions(initializer, printer, node)])
      ])
    );
  }
  return chain([
    printStatements(node.binding, printer, node),
    node.type ? printTypeAnnotation(node.type, printer, node) : ''
  ]);
}

function printPropertyMethod(node: any, printer: Printer): any {
  return group(
    chain([
      node.asteriskToken
        ? printKeyword(node.asteriskToken, printer, node.asteriskToken.start, node, /* separator */ true)
        : '',
      node.asyncKeyword
        ? printKeyword(node.asyncKeyword, printer, node.asyncKeyword.start, node, /* separator */ true)
        : '',
      node.getKeyword ? printKeyword(node.getKeyword, printer, node.getKeyword.start, node, /* separator */ true) : '',
      node.setKeyword ? printKeyword(node.setKeyword, printer, node.setKeyword.start, node, /* separator */ true) : '',
      printExpressions(node.method, printer, node)
    ])
  );
}

function printPropertyDefinition(node: any, printer: Printer): any {
  return group(
    chain([
      printExpressions(node.left, printer, node),
      printPunctuator(':', node.left.end, node),
      printer.space,
      emitTrailingCommentsOfPosition(printer, node.start),
      printExpressions(node.right, printer, node)
    ])
  );
}

function printConditionalExpression(node: any, printer: Printer, parentNode: any): any {
  const printed = chain([
    printExpressions(node.shortCircuit, printer, node),
    indent(
      chain([
        line,
        printKeyword(node.questionToken, printer, node.questionToken.start, node, /* separator */ false),
        printer.space,
        node.consequent.kind === SyntaxKind.ConditionalExpression
          ? printExpressions(node.consequent, printer, node)
          : indent(printExpressions(node.consequent, printer, node)),
        line,
        printKeyword(node.colonToken, printer, node.consequent.end, node, /* separator */ false),
        printer.space,
        node.alternate.kind === SyntaxKind.ConditionalExpression
          ? printExpressions(node.alternate, printer, node)
          : indent(printExpressions(node.alternate, printer, node))
      ])
    )
  ]);

  return parentNode.kind === SyntaxKind.ConditionalExpression ? printed : group(printed);
}

function printBinaryExpression(node: any, printer: Printer, parentNode: any): any {
  const isInsideParenthesis = parentNode.kind === SyntaxKind.ParenthesizedExpression;

  const parts: any = printBinaryishExpressions(node, printer, parentNode, isInsideParenthesis);

  if (isInsideParenthesis) {
    return chain(parts);
  }

  if (
    parentNode.kind === SyntaxKind.UnaryExpression ||
    parentNode.kind === SyntaxKind.CallChain ||
    parentNode.kind === SyntaxKind.CallExpression ||
    parentNode.kind === SyntaxKind.UnaryExpression ||
    parentNode.flags & (NodeFlags.IsCallExpression | NodeFlags.IsMemberExpression) ||
    parentNode.kind === SyntaxKind.OptionalExpression
  ) {
    return group(chain([indent(chain([softline, chain(parts)])), softline]));
  }

  const shouldNotIndent =
    (node.kind === SyntaxKind.BinaryExpression &&
      (node.right.kind === SyntaxKind.ObjectLiteral || node.right.kind === SyntaxKind.ArrayLiteral)) ||
    parentNode.kind === SyntaxKind.ReturnStatement ||
    (node !== parentNode.statement && parentNode.kind === SyntaxKind.ForStatement) ||
    (node === parentNode.contents && parentNode.kind === SyntaxKind.ArrowFunction);

  const shouldIndentIfInlining =
    parentNode.kind === SyntaxKind.AssignmentExpression ||
    parentNode.kind === SyntaxKind.LexicalBinding ||
    parentNode.kind === SyntaxKind.VariableDeclaration ||
    parentNode.kind === SyntaxKind.FieldDefinition ||
    parentNode.kind === SyntaxKind.PropertyDefinition;

  const samePrecedenceSubExpression =
    node.left.kind === SyntaxKind.BinaryExpression && shouldFlatten(node.operator, node.left.operator);

  if (
    shouldNotIndent ||
    ((node.kind === SyntaxKind.ArrayLiteral || node.kind === SyntaxKind.ObjectLiteral) &&
      !samePrecedenceSubExpression) ||
    (node.kind !== SyntaxKind.ArrayLiteral && node.kind !== SyntaxKind.ObjectLiteral && shouldIndentIfInlining)
  ) {
    return group(chain(parts));
  }

  if (parts.length === 0) {
    return '';
  }

  const rest = chain(parts.slice(1));

  return group(chain([parts.length > 0 ? parts[0] : '', indent(rest)]));
}

function printBinaryishExpressions1(node: any, printer: Printer, parentNode: any, isInsideParenthesis: boolean) {
  let parts: any = [];

  if (node.kind === SyntaxKind.BinaryExpression) {
    if (shouldFlatten(tokenToString(node.operatorToken), tokenToString(node.left.operatorToken))) {
      parts = parts.concat(printBinaryishExpressions(node.left, printer, node, isInsideParenthesis));
    } else {
      parts.push(printExpressions(node.left, printer, node));
    }

    const right =
      node.kind === SyntaxKind.ArrayLiteral || node.kind === SyntaxKind.ObjectLiteral
        ? chain([tokenToString(node.operatorToken), ' ', printExpressions(node.right, printer, node)])
        : chain([tokenToString(node.operatorToken), line, printExpressions(node.right, printer, node)]);

    const shouldGroup =
      !(isInsideParenthesis && node.kind === SyntaxKind.BinaryExpression) &&
      parentNode.kind !== node.kind &&
      node.left.kind !== node.kind &&
      node.right.kind !== node.kind;

    parts.push(printer.space, shouldGroup ? group(right) : right);
  } else {
    parts.push(printExpressions(node, printer, node));
  }

  return parts;
}

function printBinaryishExpressions(node: any, printer: Printer, parentNode: any, isInsideParenthesis: boolean) {
  let parts: any = [];

  if (node.kind === SyntaxKind.BinaryExpression) {
    if (shouldFlatten(tokenToString(node.operatorToken), tokenToString(node.left.operatorToken))) {
      parts = parts.concat(printBinaryishExpressions1(node.left, printer, node, isInsideParenthesis));
    } else {
      parts.push(printExpressions(node.left, printer, node));
    }

    const right =
      node.kind === SyntaxKind.ArrayLiteral || node.kind === SyntaxKind.ObjectLiteral
        ? chain([tokenToString(node.operatorToken), ' ', printExpressions(node.right, printer, node)])
        : chain([tokenToString(node.operatorToken), line, printExpressions(node.right, printer, node)]);

    const shouldGroup =
      !(isInsideParenthesis && node.kind === SyntaxKind.BinaryExpression) &&
      parentNode.kind !== node.kind &&
      node.left.kind !== node.kind &&
      node.right.kind !== node.kind;

    parts.push(printer.space, shouldGroup ? group(right) : right);
  } else {
    parts.push(
      chain([
        printExpressions(node.left, printer, node),
        printer.space,
        tokenToString(node.operatorToken),
        printer.space,
        printExpressions(node.right, printer, node)
      ])
    );
  }

  return parts;
}

function printUnaryExpression(node: any, printer: Printer): any {
  return chain([
    printKeyword(
      node.operandToken,
      printer,
      node.operandToken.start,
      node,
      /* separator */ shouldprintWhitespaceBeforeOperand(node)
    ),
    printExpressions(node.operand, printer, node)
  ]);
}

function printPrefixUpdateExpression(node: any, printer: Printer): any {
  return chain([
    printKeyword(node.operandToken, printer, node.operandToken.start, node, /* separator */ false),
    printExpressions(node.operand, printer, node)
  ]);
}

function printPostfixUpdateExpression(node: any, printer: Printer): any {
  return chain([
    printExpressions(node.operand, printer, node),
    printKeyword(node.operandToken, printer, node.operandToken.start, node, /* separator */ false)
  ]);
}

export function isFunctionNode(node: any): node is any {
  return (
    node.kind === SyntaxKind.FunctionExpression ||
    node.kind === SyntaxKind.FunctionDeclaration ||
    node.kind === SyntaxKind.ArrowFunction
  );
}

function printArgumentsList(node: any, printer: Printer, parentNode: any): any {
  if (!node || node.elements.length === 0) {
    return '()';
  }

  if (node.elements.length === 1) {
    const element = node.elements[0];
    if (
      element.kind === SyntaxKind.ArrayLiteral ||
      element.kind === SyntaxKind.ObjectLiteral ||
      isFunctionNode(element)
    ) {
      return chain(['(', printExpressions(element, printer, parentNode), ')']);
    }
  }

  return group(
    chain([
      '(',
      indent(
        chain([softline, chain(printDelimitedList(node.elements, printer, parentNode, printExpressions, ',', false))])
      ),
      ifBreak(','),
      softline,
      ')'
    ])
  );
}

function printCallExpression(node: any, printer: Printer): any {
  return chain([
    printExpressions(node.expression, printer, node),
    printArgumentsList(node.argumentList, printer, node)
  ]);
}

function printNewExpression(node: any, printer: Printer): any {
  return chain([
    node.newKeyword ? printKeyword(node.newKeyword, printer, node.newKeyword.start, node, /* separator */ true) : '',
    printer.space,
    printExpressions(node.expression, printer, node),
    printArgumentsList(node.argumentList, printer, node)
  ]);
}

function printFunctionDeclarationOrExpression(node: any, printer: Printer): any {
  const parts: any[] = [
    node.declaredKeyword
      ? printKeyword(node.declaredKeyword, printer, node.declaredKeyword.start, node, /* separator */ true)
      : '',
    node.asyncKeyword
      ? printKeyword(node.asyncKeyword, printer, node.asyncKeyword.start, node, /* separator */ true)
      : '',
    node.functionKeyword
      ? printKeyword(node.functionKeyword, printer, node.functionKeyword.start, node, /* separator */ true)
      : '',
    node.asteriskToken
      ? printKeyword(node.asteriskToken, printer, node.asteriskToken.start, node, /* separator */ true)
      : ''
  ];

  if (node.typeParameters) {
    parts.push(printStatements(node.typeParameters, printer, node));
  }

  if (node.name) {
    parts.push(printStatements(node.name, printer, node));
  }

  parts.push(
    group(
      chain([
        printStatements(node.formalParameterList, printer, node),
        node.returnType ? printTypeAnnotation(node.returnType, printer, node) : ''
      ])
    ),
    printFunctionBody(node.contents, printer)
  );

  return chain(parts);
}

function printFunctionBody(node: any, printer: Printer): any {
  if (node) {
    if (node.functionStatementList.statements.length === 0) {
      return chain([printer.space, '{}']);
    }

    const printed = printFunctionStatementList(node.functionStatementList, printer);
    const parts: any = [printer.space, '{'];
    parts.push(indent(chain([hardline, printed])));
    parts.push(hardline);
    parts.push('}');
    return chain(parts);
  }
  return ';';
}

function printFunctionStatementList(node: any, printer: Printer): any {
  return printList(node.statements, printer, node, printStatements);
}

function printElementList(node: any, printer: Printer): any {
  if (node.elements.length === 0) {
    //const comments = addTrailingComment(node, printer, /*  consumeCurrentToken */ true);
    //if (comments.length === 0)
    return '[]';
    //return group(chain(['[', chain(comments), softline, ']']));
  }

  const trailingComma = printer.trailingComma ? ',' : node.trailingComma ? ',' : '';

  return group(
    chain([
      '[',
      indent(
        chain([
          softline,
          chain([printDelimitedList1(node.elements, printer, node, printExpressions, ',', false), trailingComma])
        ])
      ),
      softline,
      ']'
    ])
    // shouldBreak
  );
}

function printDelimitedList1(
  children: any,
  printer: Printer,
  parentNode: any,
  print: (node: any, printer: Printer, parentNode?: any) => any,
  delimiter: string,
  hard?: boolean
): any {
  const elements: any = [];
  const count = children.length;
  const isEmpty = children === undefined || 0 >= children.length || count === 0;
  // Emit each child
  let previousSibling: any | undefined;
  let shouldEmitInterveningComments = true;

  for (let i = 0; i < count; i++) {
    const child = children[i];

    //addTrailingComment(child, printer, /*  consumeCurrentToken */ true);

    // Write the delimiter if this is not the first node.
    if (previousSibling) {
      if (previousSibling.end !== parentNode.end) {
        //addLeadingComment(previousSibling, printer);
        //printLeadingCommentsOfPosition(printer, previousSibling.end);
      }

      // Write either a line terminator or whitespace to separate the elements.
      if (hard) {
        shouldEmitInterveningComments = false;
        elements.push(chain([delimiter, printer.space, hardline]));
      } else {
        elements.push(chain([delimiter, printer.space, softline]));
      }
    }

    if (shouldEmitInterveningComments) {
      elements.push(chain([emitTrailingCommentsOfPosition(printer, child.start), print(child, printer, parentNode)]));
    } else {
      elements.push(print(child, printer, parentNode));
      shouldEmitInterveningComments = true;
    }

    previousSibling = child;
  }
  return chain(elements);
}

function printSpreadProperty(node: any, printer: Printer): any {
  return chain([
    printKeyword(node.ellipsisToken, printer, node.ellipsisToken.start, node, /* separator */ false),
    printStatements(node.argument, printer, node)
  ]);
}

function printParenthesizedExpression(node: any, printer: Printer): any {
  const { expression } = node;
  const expr = printExpressions(expression, printer, node);

  if (expression.kind === SyntaxKind.ArrayLiteral || expression.kind === SyntaxKind.ObjectLiteral) {
    return chain(['(', expr, ')']);
  }

  return node.expression.kind === SyntaxKind.ParenthesizedExpression
    ? expr
    : group(chain(['(', indent(chain([softline, expr])), softline, ')']));
}

function printAwaitExpression(node: any, printer: Printer): any {
  return chain([
    printKeyword(node.awaitKeyword, printer, node.awaitKeyword.start, node, /* separator */ true),
    printExpressions(node.expression, printer, node)
  ]);
}

function printIndexExpression(node: any, printer: Printer): any {
  return group(
    chain([printExpressions(node.member, printer, node), '.', printExpressions(node.expression, printer, node)])
  );
}

function printMemberAccessExpression(node: any, printer: Printer): any {
  return group(
    chain([
      printExpressions(node.member, printer, node),
      '[',
      indent(chain([softline, printExpressions(node.expression, printer, node)])),
      softline,
      ']'
    ])
  );
}

function printArrowFunction(node: any, printer: Printer): any {
  const parts: any = [
    printKeyword(node.asyncKeyword, printer, node.start, node, /* separator */ true),
    group(printArrowParameters(node.parameters, printer)),
    printer.space,
    printKeyword(
      node.arrowToken,
      printer,
      node.asyncKeyword ? node.asyncKeyword.end : node.start,
      node,
      /* separator */ true
    )
  ];

  const { contents } = node;

  if (contents.kind === SyntaxKind.FunctionBody) {
    parts.push(printFunctionBody(contents, printer));
    return chain(parts);
  }

  const body: any = printExpressions(contents, printer, node);

  if (
    contents.kind === SyntaxKind.BlockStatement ||
    contents.kind === SyntaxKind.ObjectLiteral ||
    contents.kind === SyntaxKind.ArrayLiteral ||
    contents.kind === SyntaxKind.ArrowFunction
  ) {
    return group(chain([chain(parts), printer.space, body]));
  }

  return group(chain([chain(parts), group(chain([indent(chain([line, body]))]))]));
}
function printArrowParameters(node: any, printer: Printer): any {
  return node.flags & NodeFlags.ExpressionNode
    ? printExpressions(node, printer, node)
    : chain(['(', chain(printDelimitedList(node, printer, node, printStatements, ',')), ')']);
}

function printFieldDefinition(node: any, printer: Printer): any {
  if (node.isInKeyword) {
    return chain([
      printStatements(node.key, printer, node),
      printer.space,
      printKeyword(node.inKeyword, printer, node.key.end, node, /* separator */ true),
      printExpressions(node.expression, printer, node)
    ]);
  }

  const parts: any = [
    node.decorators ? printDecorators(node.decorators, printer) : '',
    node.declaredToken
      ? printKeyword(
          node.declaredToken,
          printer,
          node.decorators ? node.decorators.end : node.start,
          node,
          /* separator */ true
        )
      : '',
    node.staticToken
      ? printKeyword(
          node.staticToken,
          printer,
          node.declaredToken ? node.declaredToken.end : node.decorators ? node.decorators.end : node.start,
          node,
          /* separator */ true
        )
      : '',
    node.asyncKeyword
      ? printKeyword(
          node.asyncKeyword,
          printer,
          node.staticToken
            ? node.staticToken.end
            : node.declaredToken
            ? node.declaredToken.end
            : node.decorators
            ? node.decorators.end
            : node.start,
          node,
          /* separator */ true
        )
      : '',
    printStatements(node.key, printer, node),
    node.optionalToken ? printKeyword(node.optionalToken, printer, node.key.end, node, /* separator */ false) : ''
  ];

  if (node.initializer) {
    const { initializer } = node;

    const canBreak =
      (initializer.kind === SyntaxKind.BinaryExpression &&
        initializer.right.kind !== SyntaxKind.ArrayLiteral &&
        initializer.right.kind !== SyntaxKind.ObjectLiteral) ||
      initializer.kind === SyntaxKind.CommaOperator ||
      initializer.kind === SyntaxKind.StringType ||
      (initializer.kind === SyntaxKind.ClassExpression && node.decorators && node.decorators.node.elements.length) ||
      node.key.kind & SyntaxKind.IsIdentifier ||
      node.key.kind === SyntaxKind.PrivateIdentifier ||
      node.key.kind === SyntaxKind.StringLiteral ||
      (initializer.kind === SyntaxKind.ConditionalExpression &&
        initializer.shortCircuit.kind === SyntaxKind.BinaryExpression &&
        initializer.shortCircuit.right.kind !== SyntaxKind.ArrayLiteral &&
        initializer.shortCircuit.right.kind !== SyntaxKind.ObjectLiteral);

    parts.push(
      ' =',
      canBreak
        ? indent(chain([line, printExpressions(initializer, printer, node)]))
        : chain([' ', printExpressions(initializer, printer, node)])
    );
  }

  parts.push(';');

  return group(chain(parts));
}

function printComputedPropertyName(node: any, printer: Printer): any {
  return chain(['[', printExpressions(node.expression, printer, node), ']']);
}

function printMethodDefinition(node: any, printer: Printer): any {
  const parts: any = [node.decorators ? printDecorators(node.decorators, printer) : ''];
  parts.push(
    printStatements(node.name, printer, node),
    //printTypeParameters(node.typeParameters, printer, node),
    group(chain([printStatements(node.formalParameterList, printer, node)])),
    printFunctionBody(node.contents, printer)
  );
  return chain(parts);
}

function printOptionalExpression(node: any, printer: Printer): any {
  return chain([
    printExpressions(node.member, printer, node),
    node.chainToken ? printKeyword(node.chainToken, printer, node.chainToken.start, node, /* separator */ false) : '',
    printExpressions(node.chain, printer, node)
  ]);
}

function printOptionalChain(node: any, printer: Printer): any {
  return printExpressions(node.chain, printer, node);
}

function printCallChain(node: any, printer: Printer): any {
  return chain([
    node.chain ? printExpressions(node.chain, printer, node) : '',
    printArgumentsList(node.argumentList, printer, node)
  ]);
}

function printIndexExpressionChain(node: any, printer: Printer, parentNode: any): any {
  return chain([
    node.chain ? printExpressions(node.chain, printer, node) : '',
    parentNode.kind === SyntaxKind.OptionalChain ? '' : '.',
    printExpressions(node.expression, printer, node)
  ]);
}

function printMemberAccessChain(node: any, printer: Printer): any {
  return chain([
    node.chain ? printExpressions(node.chain, printer, node) : '',
    '[',
    printExpressions(node.expression, printer, node),
    ']'
  ]);
}

function printTypeAnnotation(node: any, printer: Printer, parentNode: any): any {
  return chain([
    ':',
    printer.space,
    node.bitwiseOrToken ? printKeyword(node.bitwiseOrToken, printer, node.start, node, /* separator */ true) : '',
    node.bitwiseAndToken ? printKeyword(node.bitwiseAndToken, printer, node.start, node, /* separator */ true) : '',
    printStatements(node.type, printer, parentNode)
  ]);
}

function printArrayType(node: any, printer: Printer, parentNode: any): any {
  return chain(['[', printer.space, printStatements(node.type, printer, parentNode), printer.space, ']']);
}

function printIndexedAccessType(node: any, printer: Printer, parentNode: any): any {
  return chain([
    '[',
    printer.space,
    printStatements(node.objectType, printer, parentNode),
    printStatements(node.indexType, printer, parentNode),
    printer.space,
    ']'
  ]);
}

function printTypeParameterDeclaration(node: any, printer: Printer, parentNode: any): any {
  return printStatements(node.declarations, printer, node);
}

function printParameter(node: any, printer: Printer, parentNode: any): any {
  return chain([
    printStatements(node.name, printer, parentNode),
    printStatements(node.defaultType, printer, parentNode),
    printStatements(node.type, printer, parentNode)
  ]);
}

function printTypeParameterList(node: any, printer: Printer, parentNode: any): any {
  return chain([
    printer.space,
    '<',
    group(chain(printDelimitedList(node.parameters, printer, node, printStatements, ',', false))),
    printer.space,
    '>'
  ]);
}

function printTupleType(node: any, printer: Printer, parentNode: any): any {
  return chain([
    printer.space,
    '[',
    group(chain(printDelimitedList(node.elementTypes, printer, node, printStatements, ',', false))),
    printer.space,
    ']'
  ]);
}
