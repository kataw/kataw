import { NodeFlags, SyntaxKind } from './ast/syntax-node';

/***
 * Simple AST walker.
 *
 * API:
 *
 * forEachChild(node, visitor);
 *
 * function visitor(node, parentNode) { return node; }
 *
 */

export function forEachChild(node: any, visitor: any): any {
  const kind = node.kind;

  // Childless AST nodes - nodes without any children.
  if (node.flags & NodeFlags.ChildLess) return node;

  // Switch - Frequently used nodes first
  switch (kind) {
    case SyntaxKind.RootNode:
      return visitNodes(node.statements, node, visitor);
    case SyntaxKind.FunctionStatementList:
      return visitNodes(node.statements, node, visitor);
    case SyntaxKind.FunctionBody:
      return visitNode(node.functionStatementList, node, visitor);
    case SyntaxKind.FormalParameterList:
      return visitNodes(node.formalParameterList, node, visitor);
    case SyntaxKind.ExpressionStatement:
      return visitNode(node.expression, node, visitor);
    case SyntaxKind.ElementList:
      return visitNodes(node.elements, node, visitor);
    case SyntaxKind.ArrayLiteral:
      return visitNode(node.elementList, node, visitor);
    case SyntaxKind.ParenthesizedExpression:
      return visitNode(node.expression, node, visitor);
    case SyntaxKind.ObjectLiteral:
      return visitNode(node.propertyList, node, visitor);
    case SyntaxKind.PropertyDefinitionList:
      return visitNodes(node.properties, node, visitor);
    case SyntaxKind.PropertyDefinition:
    case SyntaxKind.CoverInitializedName:
      return visitNode(node.left, node, visitor) && visitNode(node.right, node, visitor);
    case SyntaxKind.BindingElement:
      return (
        visitNode(node.left, node, visitor) &&
        visitNode(node.type, node, visitor) &&
        visitNode(node.right, node, visitor)
      );
    case SyntaxKind.AssignmentExpression:
    case SyntaxKind.BinaryExpression:
      return visitNode(node.left, node, visitor) && visitNode(node.right, node, visitor);
    case SyntaxKind.ConditionalExpression:
      return (
        visitNode(node.shortCircuit, node, visitor) &&
        visitNode(node.consequent, node, visitor) &&
        visitNode(node.alternate, node, visitor)
      );
    case SyntaxKind.ArgumentList:
      return visitNodes(node.elements, node, visitor);
    case SyntaxKind.ObjectBindingPattern:
      return visitNode(node.propertyList, node, visitor);
    case SyntaxKind.NewExpression:
    case SyntaxKind.CallExpression:
      return visitNode(node.expression, node, visitor) && visitNode(node.argumentList, node, visitor);
    case SyntaxKind.TaggedTemplate:
      return visitNode(node.member, node, visitor) && visitNode(node.template, node, visitor);
    case SyntaxKind.BindingElementList:
      return visitNodes(node.elements, node, visitor);
    case SyntaxKind.VariableStatement:
      return visitNode(node.declarationList, node, visitor);
    case SyntaxKind.VariableDeclarationList:
      return visitNodes(node.declarations, node, visitor);
    case SyntaxKind.LexicalDeclaration:
      return visitNode(node.binding, node, visitor);
    case SyntaxKind.ArrayBindingPattern:
      return visitNode(node.elementList, node, visitor);
    case SyntaxKind.VariableDeclaration:
    case SyntaxKind.LexicalBinding:
      return (
        visitNode(node.binding, node, visitor) &&
        visitNode(node.type, node, visitor) &&
        visitNode(node.initializer, node, visitor)
      );
    case SyntaxKind.BindingList:
      return visitNodes(node.bindingList, node, visitor);
    case SyntaxKind.BindingPropertyList:
      return visitNodes(node.properties, node, visitor);
    case SyntaxKind.UnaryExpression:
      return visitNode(node.operand, node, visitor);
    case SyntaxKind.ArrowFunction:
      return visitNodes(node.parameters, node, visitor) && visitNode(node.contents, node, visitor);
    case SyntaxKind.YieldExpression:
    case SyntaxKind.AwaitExpression:
      return visitNode(node.expression, node, visitor);
    case SyntaxKind.BindingProperty:
      return visitNode(node.key, node, visitor) && visitNode(node.value, node, visitor);
    case SyntaxKind.OptionalExpression:
      return visitNode(node.member, node, visitor) && visitNode(node.chain, node, visitor);
    case SyntaxKind.PropertyMethod:
      return visitNode(node.method, node, visitor);
    case SyntaxKind.IndexExpression:
    case SyntaxKind.MemberAccessExpression:
      return visitNode(node.member, node, visitor) && visitNode(node.expression, node, visitor);
    case SyntaxKind.IndexExpressionChain:
    case SyntaxKind.MemberAccessChain:
      return visitNode(node.chain, node, visitor) && visitNode(node.expression, node, visitor);
    case SyntaxKind.OptionalChain:
      return visitNode(node.chain, node, visitor);
    case SyntaxKind.ClassElement:
      return visitNode(node.decorators, node, visitor) && visitNode(node.method, node, visitor);
    case SyntaxKind.ClassHeritage:
      return (
        visitNode(node.expression, node, visitor) &&
        visitNode(node.typeArguments, node, visitor) &&
        visitNode(node.typeParameter, node, visitor)
      );
    case SyntaxKind.ClassTail:
      return visitNode(node.classHeritage, node, visitor) && visitNode(node.body, node, visitor);
    case SyntaxKind.ClassBody:
      return visitNodes(node.elements, node, visitor);
    case SyntaxKind.CommaOperator:
      return visitNodes(node.expressions, node, visitor);
    case SyntaxKind.ComputedPropertyName:
      return visitNode(node.expression, node, visitor);
    case SyntaxKind.ReturnStatement:
      return visitNode(node.expression, node, visitor);
    case SyntaxKind.PostfixUpdateExpression:
      return visitNode(node.operand, node, visitor);
    case SyntaxKind.PrefixUpdateExpression:
      return visitNode(node.operand, node, visitor);
    case SyntaxKind.ForInStatement:
      return (
        visitNode(node.initializer, node, visitor) &&
        visitNode(node.expression, node, visitor) &&
        visitNode(node.statement, node, visitor)
      );
    case SyntaxKind.ForOfStatement:
      return (
        visitNode(node.initializer, node, visitor) &&
        visitNode(node.expression, node, visitor) &&
        visitNode(node.statement, node, visitor)
      );
    case SyntaxKind.ForStatement:
      return (
        visitNode(node.initializer, node, visitor) &&
        visitNode(node.condition, node, visitor) &&
        visitNode(node.incrementor, node, visitor) &&
        visitNode(node.statement, node, visitor)
      );
    case SyntaxKind.SpreadProperty:
    case SyntaxKind.SpreadElement:
      return visitNode(node.argument, node, visitor);
    case SyntaxKind.TemplateExpression:
      return visitNodes(node.spans, node, visitor) && visitNode(node.tail, node, visitor);
    case SyntaxKind.TemplateSpan:
      return visitNode(node.expression, node, visitor);
    case SyntaxKind.ClassDeclaration:
    case SyntaxKind.ClassExpression:
      return (
        visitNode(node.decorators, node, visitor) ||
        visitNode(node.name, node, visitor) ||
        visitNode(node.typeParameters, node, visitor) ||
        visitNode(node.tail, node, visitor)
      );
    case SyntaxKind.BreakStatement:
      return visitNode(node.label, node, visitor);
    case SyntaxKind.ContinueStatement:
      return visitNode(node.label, node, visitor);
    case SyntaxKind.CaseClause:
      return visitNode(node.expression, node, visitor) && visitNodes(node.statements, node, visitor);
    case SyntaxKind.DefaultClause:
      return visitNodes(node.statements, node, visitor);
    case SyntaxKind.Catch:
      return visitNodes(node.catchParameter, node, visitor) && visitNodes(node.block, node, visitor);
    case SyntaxKind.CatchParameter:
      return (
        visitNodes(node.binding, node, visitor) &&
        visitNodes(node.type, node, visitor) &&
        visitNodes(node.initializer, node, visitor)
      );
    case SyntaxKind.DoWhileStatement:
      return visitNode(node.expression, node, visitor) && visitNode(node.statement, node, visitor);
    case SyntaxKind.IfStatement:
      return (
        visitNode(node.expression, node, visitor) &&
        visitNode(node.consequent, node, visitor) &&
        visitNode(node.alternate, node, visitor)
      );
    case SyntaxKind.MemberAccessChain:
      return visitNode(node.chain, node, visitor) && visitNode(node.expression, node, visitor);
    case SyntaxKind.LabelledStatement:
      return visitNode(node.label, node, visitor) && visitNode(node.statement, node, visitor);
    case SyntaxKind.ThrowStatement:
      return visitNode(node.expression, node, visitor);
    case SyntaxKind.TryStatement:
      return (
        visitNode(node.block, node, visitor) &&
        visitNode(node.catchClause, node, visitor) &&
        visitNode(node.finallyBlock, node, visitor)
      );
    case SyntaxKind.FieldDefinition:
      return (
        visitNode(node.decorators, node, visitor) &&
        visitNode(node.key, node, visitor) &&
        visitNode(node.type, node, visitor) &&
        visitNode(node.initializer, node, visitor)
      );
    case SyntaxKind.CallChain:
      return visitNode(node.chain, node, visitor) && visitNode(node.argumentList, node, visitor);
    case SyntaxKind.ImportCall:
      return visitNode(node.expression, node, visitor);
    case SyntaxKind.BlockStatement:
      return visitNode(node.block, node, visitor);
    case SyntaxKind.Block:
      return visitNodes(node.statements, node, visitor);
    case SyntaxKind.CaseBlock:
      return visitNodes(node.clauses, node, visitor);
    case SyntaxKind.SwitchStatement:
      return visitNode(node.expression, node, visitor) && visitNode(node.caseBlock, node, visitor);
    case SyntaxKind.WhileStatement:
      return visitNode(node.expression, node, visitor) && visitNode(node.statement, node, visitor);
    case SyntaxKind.WithStatement:
      return visitNode(node.expression, node, visitor) && visitNode(node.statement, node, visitor);
    case SyntaxKind.ExportDeclaration:
      return (
        visitNode(node.declaration, node, visitor) &&
        visitNode(node.namedExports, node, visitor) &&
        visitNode(node.exportFromClause, node, visitor) &&
        visitNode(node.fromClause, node, visitor)
      );
    case SyntaxKind.ExportFromClause:
      return visitNode(node.namedBinding, node, visitor) && visitNode(node.moduleExportName, node, visitor);
    case SyntaxKind.ExportDefault:
      return visitNode(node.declaration, node, visitor);
    case SyntaxKind.ExportSpecifier:
      return (
        visitNode(node.moduleExportName, node, visitor) &&
        visitNode(node.name, node, visitor) &&
        visitNode(node.binding, node, visitor)
      );
    case SyntaxKind.ExportsList:
      return visitNodes(node.specifiers, node, visitor);
    case SyntaxKind.ImportClause:
      return (
        visitNode(node.defaultBinding, node, visitor) &&
        visitNode(node.nameSpaceImport, node, visitor) &&
        visitNode(node.namedImports, node, visitor)
      );
    case SyntaxKind.ImportDeclaration:
      return (
        visitNode(node.fromClause, node, visitor) &&
        visitNode(node.moduleSpecifier, node, visitor) &&
        visitNode(node.importClause, node, visitor)
      );
    case SyntaxKind.ImportSpecifier:
      return (
        visitNode(node.moduleExportName, node, visitor) &&
        visitNode(node.name, node, visitor) &&
        visitNode(node.binding, node, visitor)
      );
    case SyntaxKind.ImportsList:
      return visitNodes(node.specifiers, node, visitor);
    case SyntaxKind.NamespaceExportDeclaration:
      return visitNodes(node.name, node, visitor);
    case SyntaxKind.NameSpaceImport:
      return visitNodes(node.binding, node, visitor);
    case SyntaxKind.NamedExports:
      return visitNode(node.exportsList, node, visitor);
    case SyntaxKind.NamedImports:
      return visitNode(node.importsList, node, visitor);
    case SyntaxKind.ArrayType:
      return visitNode(node.elementType, node, visitor);
    case SyntaxKind.FunctionExpression:
    case SyntaxKind.FunctionDeclaration:
      return (
        visitNode(node.name, node, visitor) &&
        visitNode(node.formalParameters, node, visitor) &&
        visitNode(node.contents, node, visitor) &&
        visitNode(node.typeParameters, node, visitor) &&
        visitNode(node.returnType, node, visitor)
      );
    case SyntaxKind.MethodDefinition:
      return (
        visitNode(node.formalParameters, node, visitor) &&
        visitNode(node.name, node, visitor) &&
        visitNode(node.contents, node, visitor)
      );
    case SyntaxKind.DecoratorList:
      return visitNodes(node.elements, node, visitor);
    case SyntaxKind.Decorator:
      return visitNode(node.expression, node, visitor);
    case SyntaxKind.ArrowTypeParameterList:
      return visitNodes(node.parameters, node, visitor);
    case SyntaxKind.ArrowTypeParameter:
      return visitNode(node.name, node, visitor) && visitNode(node.types, node, visitor);
    case SyntaxKind.ArrowFunctionType:
      return (
        visitNode(node.arrowTypeParameterList, node, visitor) &&
        visitNode(node.returnTypes, node, visitor) &&
        visitNode(node.typeParameters, node, visitor)
      );
    case SyntaxKind.FunctionTypeParameterList:
      return visitNodes(node.parameters, node, visitor);
    case SyntaxKind.TypeAlias:
      return (
        visitNode(node.name, node, visitor) &&
        visitNode(node.type, node, visitor) &&
        visitNode(node.typeParameters, node, visitor)
      );
    case SyntaxKind.IntersectionType:
    case SyntaxKind.UnionType:
      return visitNodes(node.types, node, visitor);
    case SyntaxKind.TypeParameter:
      return visitNode(node.type, node, visitor) && visitNode(node.defaultType, node, visitor);
    case SyntaxKind.TypeInstantiations:
      return visitNodes(node.types, node, visitor) && visitNode(node.defaultType, node, visitor);
    case SyntaxKind.TypeParameterDeclaration:
      return visitNode(node.declarations, node, visitor);
    case SyntaxKind.TypeParameterDeclaration:
      return visitNode(node.declarations, node, visitor);
    case SyntaxKind.TypeParameterList:
      return visitNodes(node.parameters, node, visitor);
    case SyntaxKind.FunctionType:
      return (
        visitNodes(node.functionTypeParameterList, node, visitor) &&
        visitNode(node.returnType, node, visitor) &&
        visitNode(node.typeParameters, node, visitor)
      );
    case SyntaxKind.IndexedAccessType:
      return visitNode(node.objectType, node, visitor) && visitNode(node.indexType, node, visitor);
    case SyntaxKind.ObjectTypeCallProperty:
      return (
        visitNode(node.typeParameter, node, visitor) &&
        visitNode(node.value, node, visitor) &&
        visitNode(node.returnType, node, visitor)
      );
    case SyntaxKind.ObjectTypeIndexer:
      return (
        visitNode(node.name, node, visitor) && visitNode(node.key, node, visitor) && visitNode(node.type, node, visitor)
      );
    case SyntaxKind.ParenthesizedType:
      return visitNode(node.type, node, visitor);
    case SyntaxKind.ObjectTypeInternalSlot:
      return visitNode(node.name, node, visitor) && visitNode(node.value, node, visitor);
    case SyntaxKind.QualifiedType:
      return visitNode(node.qualification, node, visitor) && visitNode(node.id, node, visitor);
    case SyntaxKind.ObjectType:
      return visitNode(node.key, node, visitor) && visitNode(node.value, node, visitor);
    case SyntaxKind.TupleType:
      return visitNodes(node.elementTypes, node, visitor);
    case SyntaxKind.ObjectTypeProperty:
      return visitNodes(node.parameters, node, visitor);
    case SyntaxKind.TypeAnnotation:
      return visitNode(node.type, node, visitor);
    default:
      return node;
  }
}

function visitNode(
  node: any,
  parentNode: any,
  visitor: (node: any, parentNode: any) => SyntaxKind
): SyntaxKind | undefined {
  if (node === null) return node;
  return visitor(node, parentNode);
}

function visitNodes(
  nodes: any[],
  parentNode: any,
  visitor: (node: any, parentNode: any) => SyntaxKind
): SyntaxKind[] | void {
  if (nodes === null && visitor === null) return nodes;

  const length = nodes.length;

  if (length === 0) return nodes;

  for (let i = 0; i < length; i++) {
    visitor(nodes[i], parentNode);
  }
}
