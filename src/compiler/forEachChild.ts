import { Node, NodeKind } from './ast/node';

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

export function forEachChild(node: any, visitor: (node: Node) => Node): any {
  const kind = node.kind;

  // Childless AST nodes - nodes without any children.
  if (kind & (NodeKind.IsChildless | NodeKind.IsIdentifier)) return node;

  // Function declaration
  if (kind & NodeKind.IsFunctionDeclaration) {
    return (
      visitNode(node.name, node, visitor) ||
      visitNode(node.formalParameters, node, visitor) ||
      visitNode(node.contents, node, visitor)
    );
  }

  // Function expression
  if (kind & NodeKind.IsFunctionExpression) {
    return (
      visitNode(node.name, node, visitor) ||
      visitNode(node.formalParameters, node, visitor) ||
      visitNode(node.contents, node, visitor)
    );
  }

  // Method definition
  if (kind & NodeKind.IsMethod) {
    return (
      visitNode(node.accessModifier, node, visitor) ||
      visitNodes(node.formalParameters, node, visitor) ||
      visitNode(node.name, node, visitor) ||
      visitNode(node.typeParameters, node, visitor) ||
      visitNode(node.type, node, visitor) ||
      visitNode(node.contents, node, visitor)
    );
  }

  // Switch - Frequently used nodes first
  switch (kind) {
    case NodeKind.QualifiedName:
      return visitNode(node.left, node, visitor) || visitNode(node.right, node, visitor);
    case NodeKind.TypeParameterList:
      return visitNodes(node.typeParameterList, node, visitor);
    case NodeKind.TypeParameter:
      return (
        visitNode(node.constraint, node, visitor) ||
        visitNode(node.defaultType, node, visitor) ||
        visitNode(node.expression, node, visitor)
      );
    case NodeKind.Script:
      return visitNode(node.scriptBody, node, visitor);
    case NodeKind.Module:
      return visitNode(node.moduleBody, node, visitor);
    case NodeKind.ScriptBody:
      return visitNodes(node.statements, node, visitor);
    case NodeKind.ModuleBody:
      return visitNodes(node.statements, node, visitor);
    case NodeKind.FunctionStatementList:
      return visitNodes(node.statements, node, visitor);
    case NodeKind.FunctionBody:
      return visitNode(node.functionStatementList, node, visitor);
    case NodeKind.FormalParameterList:
      return visitNodes(node.formalParameterList, node, visitor);
    case NodeKind.AssignmentExpression:
      return visitNode(node.left, node, visitor) || visitNode(node.right, node, visitor);
    case NodeKind.ExpressionStatement:
      return visitNode(node.expression, node, visitor);
    case NodeKind.ElementList:
      return visitNodes(node.elements, node, visitor);
    case NodeKind.ArrayLiteral:
      return visitNode(node.elementList, node, visitor);
    case NodeKind.ParenthesizedExpression:
      return visitNode(node.expression, node, visitor);
    case NodeKind.ObjectLiteral:
      return visitNode(node.propertyList, node, visitor);
    case NodeKind.PropertyDefinitionList:
      return visitNodes(node.properties, node, visitor);
    case NodeKind.PropertyDefinition:
      return (
        visitNode(node.accessModifier, node, visitor) ||
        visitNodes(node.left, node, visitor) ||
        visitNodes(node.right, node, visitor)
      );
    case NodeKind.CoverInitializedName:
      return (
        visitNode(node.left, node, visitor) ||
        visitNode(node.right, node, visitor) ||
        visitNode(node.accessModifier, node, visitor)
      );
    case NodeKind.BinaryExpression:
      return visitNode(node.left, node, visitor) || visitNode(node.right, node, visitor);
    case NodeKind.AsExpression:
      return visitNode(node.expression, node, visitor) || visitNode(node.type, node, visitor);
    case NodeKind.ConditionalExpression:
      return (
        visitNode(node.shortCircuit, node, visitor) ||
        visitNode(node.consequent, node, visitor) ||
        visitNode(node.alternate, node, visitor)
      );
    case NodeKind.ArgumentList:
      return visitNodes(node.elements, node, visitor);
    case NodeKind.FormalParameter:
      return (
        visitNode(node.binding, node, visitor) ||
        visitNode(node.type, node, visitor) ||
        visitNode(node.initializer, node, visitor) ||
        visitNode(node.accessModifier, node, visitor)
      );
    case NodeKind.SingleNameBinding:
      return visitNode(node.left, node, visitor) || visitNode(node.right, node, visitor);
    case NodeKind.ObjectBindingPattern:
      return visitNode(node.propertyList, node, visitor);
    case NodeKind.BindingElement:
      return visitNode(node.left, node, visitor) || visitNode(node.right, node, visitor);
    case NodeKind.NewExpression:
    case NodeKind.CallExpression:
      return (
        visitNode(node.expression, node, visitor) ||
        visitNode(node.typeArguments, node, visitor) ||
        visitNode(node.argumentList, node, visitor)
      );
    case NodeKind.TaggedTemplate:
      return (
        visitNode(node.member, node, visitor) ||
        visitNode(node.typeArguments, node, visitor) ||
        visitNode(node.template, node, visitor)
      );
    case NodeKind.BindingElementList:
      return visitNodes(node.elements, node, visitor);
    case NodeKind.VariableStatement:
      return visitNode(node.declarationList, node, visitor);
    case NodeKind.VariableDeclaration:
      return visitNode(node.binding, node, visitor) || visitNode(node.initializer, node, visitor);
    case NodeKind.VariableDeclarationList:
      return visitNodes(node.declarations, node, visitor);
    case NodeKind.LexicalDeclaration:
      return visitNode(node.binding, node, visitor);
    case NodeKind.ArrayBindingPattern:
      return visitNode(node.elementList, node, visitor);
    case NodeKind.LexicalBinding:
      return (
        visitNode(node.binding, node, visitor) ||
        visitNode(node.type, node, visitor) ||
        visitNode(node.initializer, node, visitor)
      );
    case NodeKind.BindingList:
      return visitNodes(node.bindingList, node, visitor);
    case NodeKind.BindingPropertyList:
      return visitNodes(node.properties, node, visitor);
    case NodeKind.ArrowParameters:
      return (
        visitNodes(node.elements, node, visitor) ||
        visitNode(node.type, node, visitor || visitNode(node.accessModifier, node, visitor))
      );
    case NodeKind.UnaryExpression:
      return visitNode(node.operand, node, visitor);
    case NodeKind.PropertyAccessExpression:
      return visitNode(node.member, node, visitor) || visitNode(node.expression, node, visitor);
    case NodeKind.ArrowFunction:
      return visitNodes(node.arrowParameters, node, visitor) || visitNode(node.contents, node, visitor);
    case NodeKind.AwaitExpression:
      return visitNode(node.expression, node, visitor);
    case NodeKind.BindingProperty:
      return visitNode(node.key, node, visitor) || visitNode(node.value, node, visitor);
    case NodeKind.OptionalExpression:
      return visitNode(node.member, node, visitor) || visitNode(node.chain, node, visitor);
    case NodeKind.ElementAccessExpression:
      return visitNode(node.member, node, visitor) || visitNode(node.expression, node, visitor);
    case NodeKind.OptionalChain:
      return visitNode(node.chain, node, visitor);
    case NodeKind.ClassElement:
      return visitNode(node.method, node, visitor);
    case NodeKind.ClassHeritage:
      return visitNode(node.expression, node, visitor) || visitNode(node.typeArguments, node, visitor);
    case NodeKind.ClassElementList:
      return visitNodes(node.elements, node, visitor);
    case NodeKind.CommaOperator:
      return visitNodes(node.expressions, node, visitor);
    case NodeKind.ComputedPropertyName:
      return visitNode(node.expression, node, visitor);
    case NodeKind.ReturnStatement:
      return visitNode(node.expression, node, visitor);
    case NodeKind.PostfixUpdateExpression:
      return visitNode(node.operand, node, visitor);
    case NodeKind.PrefixUpdateExpression:
      return visitNode(node.operand, node, visitor);
    case NodeKind.SpreadProperty:
      return visitNode(node.argument, node, visitor);
    case NodeKind.ForInStatement:
      return (
        visitNode(node.initializer, node, visitor) ||
        visitNode(node.expression, node, visitor) ||
        visitNode(node.statement, node, visitor)
      );
    case NodeKind.ForOfStatement:
      return (
        visitNode(node.initializer, node, visitor) ||
        visitNode(node.expression, node, visitor) ||
        visitNode(node.statement, node, visitor)
      );
    case NodeKind.ForStatement:
      return (
        visitNode(node.initializer, node, visitor) ||
        visitNode(node.condition, node, visitor) ||
        visitNode(node.incrementor, node, visitor) ||
        visitNode(node.statement, node, visitor)
      );
    case NodeKind.SpreadElement:
      return visitNode(node.argument, node, visitor);
    case NodeKind.TemplateExpression:
      return visitNodes(node.spans, node, visitor) || visitNode(node.tail, node, visitor);
    case NodeKind.TemplateSpan:
      return visitNode(node.expression, node, visitor);
    case NodeKind.ClassDeclaration:
    case NodeKind.ClassExpression:
      return (
        visitNode(node.name, node, visitor) ||
        visitNode(node.classHeritage, node, visitor) ||
        visitNode(node.implementClauses, node, visitor) ||
        visitNode(node.members, node, visitor)
      );
    case NodeKind.BreakStatement:
      return visitNode(node.label, node, visitor);
    case NodeKind.ContinueStatement:
      return visitNode(node.label, node, visitor);
    case NodeKind.CaseClause:
      return visitNode(node.expression, node, visitor) || visitNodes(node.statements, node, visitor);
    case NodeKind.DefaultClause:
      return visitNodes(node.statements, node, visitor);
    case NodeKind.Catch:
      return visitNodes(node.catchParameter, node, visitor) || visitNodes(node.block, node, visitor);
    case NodeKind.CatchParameter:
      return (
        visitNodes(node.binding, node, visitor) ||
        visitNodes(node.type, node, visitor) ||
        visitNodes(node.initializer, node, visitor)
      );
    case NodeKind.DoWhileStatement:
      return visitNode(node.expression, node, visitor) || visitNode(node.statement, node, visitor);
    case NodeKind.ForBinding:
      return visitNode(node.declarationList, node, visitor);
    case NodeKind.IfStatement:
      return (
        visitNode(node.expression, node, visitor) ||
        visitNode(node.consequent, node, visitor) ||
        visitNode(node.alternate, node, visitor)
      );
    case NodeKind.PropertyAccessChain:
      return visitNode(node.chain, node, visitor) || visitNode(node.expression, node, visitor);
    case NodeKind.LabelledStatement:
      return visitNode(node.label, node, visitor) || visitNode(node.statement, node, visitor);
    case NodeKind.ThrowStatement:
      return visitNode(node.expression, node, visitor);
    case NodeKind.TryStatement:
      return (
        visitNode(node.block, node, visitor) ||
        visitNode(node.catchClause, node, visitor) ||
        visitNode(node.finallyBlock, node, visitor)
      );
    case NodeKind.ElementAccessChain:
      return visitNode(node.chain, node, visitor) || visitNode(node.expression, node, visitor);
    case NodeKind.AsyncArrowFunction:
      return visitNode(node.arrowParameters, node, visitor) || visitNode(node.contents, node, visitor);
    case NodeKind.FieldDefinition:
      return (
        visitNode(node.key, node, visitor) ||
        visitNode(node.type, node, visitor) ||
        visitNode(node.initializer, node, visitor) ||
        visitNode(node.accessModifier, node, visitor)
      );
    case NodeKind.CallChain:
      return (
        visitNode(node.chain, node, visitor) ||
        visitNode(node.typeArguments, node, visitor) ||
        visitNode(node.argumentList, node, visitor)
      );
    case NodeKind.ImportCall:
      return visitNode(node.expression, node, visitor);
    case NodeKind.BlockStatement:
      return visitNode(node.block, node, visitor);
    case NodeKind.Block:
      return visitNodes(node.statements, node, visitor);
    case NodeKind.CaseBlock:
      return visitNodes(node.clauses, node, visitor);
    case NodeKind.SwitchStatement:
      return visitNode(node.expression, node, visitor), visitNode(node.caseBlock, node, visitor);
    case NodeKind.WhileStatement:
      return visitNode(node.expression, node, visitor) || visitNode(node.statement, node, visitor);
    case NodeKind.WithStatement:
      return visitNode(node.expression, node, visitor) || visitNode(node.statement, node, visitor);
    case NodeKind.ExportAssignment:
      return visitNode(node.expression, node, visitor);
    case NodeKind.ExportDeclaration:
      return (
        visitNode(node.declaration, node, visitor) ||
        visitNode(node.namedExports, node, visitor) ||
        visitNode(node.exportFromClause, node, visitor) ||
        visitNode(node.fromClause, node, visitor)
      );
    case NodeKind.ExportDefault:
      return visitNode(node.declaration, node, visitor);
    case NodeKind.ExportSpecifier:
      return (
        visitNode(node.moduleExportName, node, visitor) ||
        visitNode(node.name, node, visitor) ||
        visitNode(node.binding, node, visitor)
      );
    case NodeKind.ExportsList:
      return visitNodes(node.specifiers, node, visitor);
    case NodeKind.ImportClause:
      return (
        visitNode(node.defaultBinding, node, visitor) ||
        visitNode(node.nameSpaceImport, node, visitor) ||
        visitNode(node.namedImports, node, visitor)
      );
    case NodeKind.ImportDeclaration:
      return (
        visitNode(node.fromClause, node, visitor) ||
        visitNode(node.moduleSpecifier, node, visitor) ||
        visitNode(node.importClause, node, visitor)
      );
    case NodeKind.ImportEqualsDeclaration:
      return visitNode(node.name, node, visitor) || visitNode(node.moduleReference, node, visitor);
    case NodeKind.ImportSpecifier:
      return (
        visitNode(node.moduleExportName, node, visitor) ||
        visitNode(node.name, node, visitor) ||
        visitNode(node.binding, node, visitor)
      );
    case NodeKind.ImportsList:
      return visitNodes(node.specifiers, node, visitor);
    case NodeKind.NamedExports:
      return visitNode(node.exportsList, node, visitor);
    case NodeKind.NamedImports:
      return visitNode(node.importsList, node, visitor);
    case NodeKind.JsxAttributesList:
      return visitNodes(node.attributesList, node, visitor);
    case NodeKind.JsxAttribute:
      return visitNode(node.initializer, node, visitor);
    case NodeKind.JsxChildrenList:
      return visitNodes(node.children, node, visitor);
    case NodeKind.JsxFragment:
      return (
        visitNode(node.openingFragment, node, visitor) ||
        visitNode(node.children, node, visitor) ||
        visitNode(node.closingFragment, node, visitor)
      );
    case NodeKind.JsxMemberExpression:
      return visitNode(node.expression, node, visitor);
    case NodeKind.JsxNamespacedName:
      return visitNode(node.namespace, node, visitor);
    case NodeKind.JsxOpeningElement:
      return (
        visitNode(node.openingElement, node, visitor) ||
        visitNode(node.children, node, visitor) ||
        visitNode(node.closingElement, node, visitor)
      );
    case NodeKind.JsxSelfClosingElement:
      return visitNode(node.attributes, node, visitor) || visitNode(node.typeArguments, node, visitor);
    case NodeKind.JsxSpreadAttribute:
      return visitNode(node.expression, node, visitor);
    case NodeKind.JsxTagNamePropertyAccess:
      return visitNode(node.expression, node, visitor);
    case NodeKind.ArrayType:
      return visitNode(node.elementType, node, visitor);
    case NodeKind.FunctionType:
      return (
        visitNode(node.typeParameters, node, visitor) ||
        visitNode(node.parameters, node, visitor) ||
        visitNode(node.returnType, node, visitor)
      );
    case NodeKind.ConstructSignature:
    case NodeKind.CallSignature:
    case NodeKind.IndexSignature:
    case NodeKind.ConstructorType:
    case NodeKind.AbstractConstructorType:
      return (
        visitNode(node.accessModifier, node, visitor) ||
        visitNode(node.typeParameters, node, visitor) ||
        visitNode(node.parameters, node, visitor) ||
        visitNode(node.returnType, node, visitor)
      );

    case NodeKind.ConditionalType:
      return (
        visitNode(node.checkType, node, visitor) ||
        visitNode(node.extendsType, node, visitor) ||
        visitNode(node.trueType, node, visitor) ||
        visitNode(node.falseType, node, visitor)
      );

    case NodeKind.EnumDeclaration:
      return visitNode(node.members, node, visitor);
    case NodeKind.EnumMembers:
      return visitNode(node.initializer, node, visitor);
    case NodeKind.EnumMembersList:
      return visitNodes(node.enumMembersList, node, visitor);
    case NodeKind.ImplementClauses:
    case NodeKind.HeritageClauses:
      return visitNodes(node.clauses, node, visitor);
    case NodeKind.ImplementClause:
      return visitNode(node.type, node, visitor);
    case NodeKind.IndexedAccessType:
      return visitNode(node.objectType, node, visitor) || visitNode(node.indexType, node, visitor);
    case NodeKind.InferType:
      return visitNode(node.typeParameter, node, visitor);
    case NodeKind.ImportType:
      return (
        visitNode(node.argument, node, visitor) ||
        visitNode(node.qualifier, node, visitor) ||
        visitNode(node.typeArguments, node, visitor)
      );
    case NodeKind.InterfaceDeclaration:
      return (
        visitNode(node.typeParameters, node, visitor) ||
        visitNode(node.heritageClauses, node, visitor) ||
        visitNode(node.objectTypeMembers, node, visitor)
      );
    case NodeKind.MappedType:
      return (
        visitNode(node.typeParameter, node, visitor) ||
        visitNode(node.nameType, node, visitor) ||
        visitNode(node.type, node, visitor)
      );
    case NodeKind.MethodSignature:
      return (
        visitNode(node.accessModifier, node, visitor) ||
        visitNode(node.typeParameters, node, visitor) ||
        visitNode(node.parameters, node, visitor) ||
        visitNode(node.returnType, node, visitor)
      );
    case NodeKind.MinusType:
      return visitNode(node.expression, node, visitor);
    case NodeKind.OptionalType:
      return visitNode(node.valueType, node, visitor);
    case NodeKind.ParameterDeclaration:
      return (
        visitNode(node.accessModifier, node, visitor) ||
        visitNode(node.binding, node, visitor) ||
        visitNode(node.type, node, visitor) ||
        visitNode(node.initializer, node, visitor)
      );
    case NodeKind.Parameters:
      return visitNode(node.parameterList, node, visitor);
    case NodeKind.ParenthesizedType:
    case NodeKind.TypeOperator:
    case NodeKind.RestType:
    case NodeKind.HeritageClause:
      return visitNode(node.type, node, visitor);
    case NodeKind.PropertySignature:
      return (
        visitNode(node.accessModifier, node, visitor) ||
        visitNode(node.type, node, visitor) ||
        visitNode(node.initializer, node, visitor)
      );
    case NodeKind.TypeAliasDeclaration:
      return visitNode(node.type, node, visitor) || visitNode(node.typeParameters, node, visitor);
    case NodeKind.TypeArguments:
      return visitNodes(node.typeArgumentsList, node, visitor);
    case NodeKind.TypeAssertion:
      return visitNode(node.type, node, visitor) || visitNode(node.expression, node, visitor);
    case NodeKind.TypeLiteral:
      return visitNode(node.objectTypeMembers, node, visitor);
    case NodeKind.TypeReference:
      return visitNode(node.typeName, node, visitor) || visitNode(node.typeArguments, node, visitor);
    case NodeKind.TypePredicate:
      return visitNode(node.parameterName, node, visitor) || visitNode(node.type, node, visitor);
    case NodeKind.TypeQuery:
      return visitNode(node.exprName, node, visitor);
    case NodeKind.TupleType:
      return visitNodes(node.elementTypes, node, visitor);
    case NodeKind.UnionType:
    case NodeKind.IntersectionType:
      return visitNodes(node.types, node, visitor);
    case NodeKind.DecoratorList:
      return visitNodes(node.decoratorList, node, visitor);
    case NodeKind.Decorator:
      return visitNode(node.expression, node, visitor);
    case NodeKind.NamespaceDeclaration:
      return visitNode(node.body, node, visitor);
    case NodeKind.NamespaceBlock:
      return visitNodes(node.statements, node, visitor);
    default:
      return node;
  }
}

export function visitNode(
  node: Node,
  parentNode: any,
  visitor: (node: Node, parentNode: Node) => Node
): Node | undefined {
  if (node === null) return node;
  return visitor(node, parentNode);
}

export function visitNodes(
  nodes: Node[],
  parentNode: Node,
  visitor: (node: Node, parentNode: Node) => Node
): Node[] | void {
  if (nodes === null || visitor === null) return nodes;

  const length = nodes.length;

  if (length === 0) return nodes;

  for (let i = 0; i < length; i++) {
    visitor(nodes[i], parentNode);
  }
}
