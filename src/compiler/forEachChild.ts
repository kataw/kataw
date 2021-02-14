import { Node, NodeKind } from './ast/node';

/***
 * Simple AST walker.
 *
 * API:
 *
 * forEachChild(node, visitor);
 *
 * function visitor(node) { return node; }
 *
 */

export function forEachChild(node: any, visitor: (node: Node) => Node): any {
  const kind = node.kind;

  // Childless AST nodes - nodes without any children.
  if (kind & (NodeKind.IsChildless | NodeKind.IsIdentifier)) return node;

  // Function declaration
  if (kind & NodeKind.IsFunctionDeclaration) {
    return (
      visitNode(node.name, visitor) || visitNode(node.formalParameters, visitor) || visitNode(node.contents, visitor)
    );
  }

  // Function expression
  if (kind & NodeKind.IsFunctionExpression) {
    return (
      visitNode(node.name, visitor) || visitNode(node.formalParameters, visitor) || visitNode(node.contents, visitor)
    );
  }

  // Methoddefinition
  if (kind & NodeKind.IsMethod) {
    return (
      visitNode(node.accessModifier, visitor) ||
      visitNode(node.propertySetParameterList, visitor) ||
      visitNode(node.uniqueFormalParameters, visitor) ||
      visitNode(node.name, visitor) ||
      visitNode(node.typeParameters, visitor) ||
      visitNode(node.type, visitor) ||
      visitNode(node.contents, visitor)
    );
  }

  // Switch - Frequently used nodes first
  switch (kind) {
    case NodeKind.QualifiedName:
      return visitNode(node.left, visitor) || visitNode(node.right, visitor);
    case NodeKind.TypeParameterList:
      return visitNodes(node.typeParameterList, visitor);
    case NodeKind.TypeParameter:
      return (
        visitNode(node.constraint, visitor) ||
        visitNode(node.defaultType, visitor) ||
        visitNode(node.expression, visitor)
      );
    case NodeKind.Script:
      return visitNode(node.scriptBody, visitor);
    case NodeKind.Module:
      return visitNode(node.moduleBody, visitor);
    case NodeKind.ScriptBody:
      return visitNodes(node.statements, visitor);
    case NodeKind.ModuleBody:
      return visitNodes(node.statements, visitor);
    case NodeKind.FunctionStatementList:
      return visitNodes(node.statements, visitor);
    case NodeKind.FunctionBody:
      return visitNode(node.functionStatementList, visitor);
    case NodeKind.FormalParameterList:
      return visitNodes(node.formalParameterList, visitor);
    case NodeKind.AssignmentExpression:
      return visitNode(node.left, visitor) || visitNode(node.right, visitor);
    case NodeKind.ExpressionStatement:
      return visitNode(node.expression, visitor);
    case NodeKind.ElementList:
      return visitNodes(node.elements, visitor);
    case NodeKind.ArrayLiteral:
      return visitNode(node.elementList, visitor);
    case NodeKind.ParenthesizedExpression:
      return visitNode(node.expression, visitor);
    case NodeKind.ObjectLiteral:
      return visitNode(node.propertyList, visitor);
    case NodeKind.PropertyDefinitionList:
      return visitNodes(node.properties, visitor);
    case NodeKind.PropertyDefinition:
      return (
        visitNode(node.accessModifier, visitor) || visitNodes(node.left, visitor) || visitNodes(node.right, visitor)
      );
    case NodeKind.CoverInitializedName:
      return visitNode(node.left, visitor) || visitNode(node.right, visitor) || visitNode(node.accessModifier, visitor);
    case NodeKind.BinaryExpression:
      return visitNode(node.left, visitor) || visitNode(node.right, visitor);
    case NodeKind.AsExpression:
      return visitNode(node.expression, visitor) || visitNode(node.type, visitor);
    case NodeKind.ConditionalExpression:
      return (
        visitNode(node.shortCircuit, visitor) ||
        visitNode(node.consequent, visitor) ||
        visitNode(node.alternate, visitor)
      );
    case NodeKind.ArgumentList:
      return visitNodes(node.elements, visitor);
    case NodeKind.FormalParameter:
      return (
        visitNode(node.binding, visitor) ||
        visitNode(node.type, visitor) ||
        visitNode(node.initializer, visitor) ||
        visitNode(node.accessModifier, visitor)
      );
    case NodeKind.SingleNameBinding:
      return visitNode(node.left, visitor) || visitNode(node.right, visitor);
    case NodeKind.ObjectBindingPattern:
      return visitNode(node.propertyList, visitor);
    case NodeKind.BindingElement:
      return visitNode(node.left, visitor) || visitNode(node.right, visitor);
    case NodeKind.NewExpression:
    case NodeKind.CallExpression:
      return (
        visitNode(node.expression, visitor) ||
        visitNode(node.typeArguments, visitor) ||
        visitNode(node.argumentList, visitor)
      );
    case NodeKind.TaggedTemplate:
      return (
        visitNode(node.member, visitor) || visitNode(node.typeArguments, visitor) || visitNode(node.template, visitor)
      );
    case NodeKind.BindingElementList:
      return visitNodes(node.elements, visitor);
    case NodeKind.VariableStatement:
      return visitNode(node.declarationList, visitor);
    case NodeKind.VariableDeclaration:
      return visitNode(node.binding, visitor) || visitNode(node.initializer, visitor);
    case NodeKind.VariableDeclarationList:
      return visitNodes(node.declarations, visitor);
    case NodeKind.LexicalDeclaration:
      return visitNode(node.binding, visitor);
    case NodeKind.ArrayBindingPattern:
      return visitNode(node.elementList, visitor);
    case NodeKind.LexicalBinding:
      return visitNode(node.binding, visitor) || visitNode(node.type, visitor) || visitNode(node.initializer, visitor);
    case NodeKind.BindingList:
      return visitNodes(node.bindingList, visitor);
    case NodeKind.BindingPropertyList:
      return visitNodes(node.properties, visitor);
    case NodeKind.ArrowParameters:
      return (
        visitNodes(node.typeParameters, visitor) ||
        visitNodes(node.elements, visitor) ||
        visitNode(node.type, visitor || visitNode(node.accessModifier, visitor))
      );
    case NodeKind.UnaryExpression:
      return visitNode(node.operand, visitor);
    case NodeKind.PropertyAccessExpression:
      return visitNode(node.member, visitor) || visitNode(node.expression, visitor);
    case NodeKind.ArrowFunction:
      return visitNodes(node.arrowParameters, visitor) || visitNode(node.contents, visitor);
    case NodeKind.AwaitExpression:
      return visitNode(node.expression, visitor);
    case NodeKind.BindingProperty:
      return visitNode(node.key, visitor) || visitNode(node.value, visitor);
    case NodeKind.OptionalExpression:
      return visitNode(node.member, visitor) || visitNode(node.chain, visitor);
    case NodeKind.ElementAccessExpression:
      return visitNode(node.member, visitor) || visitNode(node.expression, visitor);
    case NodeKind.OptionalChain:
      return visitNode(node.chain, visitor);
    case NodeKind.ClassElement:
      return visitNode(node.method, visitor);
    case NodeKind.ClassElementList:
      return visitNodes(node.elements, visitor);
    case NodeKind.CommaOperator:
      return visitNodes(node.expressions, visitor);
    case NodeKind.ComputedPropertyName:
      return visitNode(node.expression, visitor);
    case NodeKind.ReturnStatement:
      return visitNode(node.expression, visitor);
    case NodeKind.PostfixUpdateExpression:
      return visitNode(node.operand, visitor);
    case NodeKind.PrefixUpdateExpression:
      return visitNode(node.operand, visitor);
    case NodeKind.SpreadProperty:
      return visitNode(node.argument, visitor);
    case NodeKind.ForInStatement:
      return (
        visitNode(node.initializer, visitor) ||
        visitNode(node.expression, visitor) ||
        visitNode(node.statement, visitor)
      );
    case NodeKind.ForOfStatement:
      return (
        visitNode(node.initializer, visitor) ||
        visitNode(node.expression, visitor) ||
        visitNode(node.statement, visitor)
      );
    case NodeKind.ForStatement:
      return (
        visitNode(node.initializer, visitor) ||
        visitNode(node.condition, visitor) ||
        visitNode(node.incrementor, visitor) ||
        visitNode(node.statement, visitor)
      );
    case NodeKind.SpreadElement:
      return visitNode(node.argument, visitor);
    case NodeKind.TemplateExpression:
      return visitNodes(node.spans, visitor) || visitNode(node.tail, visitor);
    case NodeKind.TemplateSpan:
      return visitNode(node.expression, visitor);
    case NodeKind.ClassDeclaration:
    case NodeKind.ClassExpression:
      return (
        visitNode(node.name, visitor) ||
        visitNode(node.classHeritage, visitor) ||
        visitNode(node.implementClauses, visitor) ||
        visitNode(node.members, visitor)
      );
    case NodeKind.BreakStatement:
      return visitNode(node.label, visitor);
    case NodeKind.ContinueStatement:
      return visitNode(node.label, visitor);
    case NodeKind.CaseClause:
      return visitNode(node.expression, visitor) || visitNodes(node.statements, visitor);
    case NodeKind.DefaultClause:
      return visitNodes(node.statements, visitor);
    case NodeKind.Catch:
      return visitNodes(node.catchParameter, visitor) || visitNodes(node.block, visitor);
    case NodeKind.CatchParameter:
      return (
        visitNodes(node.binding, visitor) || visitNodes(node.type, visitor) || visitNodes(node.initializer, visitor)
      );
    case NodeKind.DoWhileStatement:
      return visitNode(node.expression, visitor) || visitNode(node.statement, visitor);
    case NodeKind.ForBinding:
      return visitNode(node.declarationList, visitor);
    case NodeKind.IfStatement:
      return (
        visitNode(node.expression, visitor) || visitNode(node.consequent, visitor) || visitNode(node.alternate, visitor)
      );
    case NodeKind.PropertyAccessChain:
      return visitNode(node.chain, visitor) || visitNode(node.expression, visitor);
    case NodeKind.LabelledStatement:
      return visitNode(node.label, visitor) || visitNode(node.statement, visitor);
    case NodeKind.ThrowStatement:
      return visitNode(node.expression, visitor);
    case NodeKind.TryStatement:
      return (
        visitNode(node.block, visitor) || visitNode(node.catchClause, visitor) || visitNode(node.finallyBlock, visitor)
      );
    case NodeKind.ElementAccessChain:
      return visitNode(node.chain, visitor) || visitNode(node.expression, visitor);
    case NodeKind.AsyncArrowFunction:
      return visitNode(node.arrowParameters, visitor) || visitNode(node.contents, visitor);
    case NodeKind.FieldDefinition:
      return (
        visitNode(node.key, visitor) ||
        visitNode(node.type, visitor) ||
        visitNode(node.initializer, visitor) ||
        visitNode(node.accessModifier, visitor)
      );
    case NodeKind.CallChain:
      return (
        visitNode(node.chain, visitor) ||
        visitNode(node.typeArguments, visitor) ||
        visitNode(node.argumentList, visitor)
      );
    case NodeKind.ImportCall:
      return visitNode(node.expression, visitor);
    case NodeKind.BlockStatement:
      return visitNode(node.block, visitor);
    case NodeKind.Block:
      return visitNodes(node.statements, visitor);
    case NodeKind.CaseBlock:
      return visitNodes(node.clauses, visitor);
    case NodeKind.SwitchStatement:
      return visitNode(node.expression, visitor), visitNode(node.caseBlock, visitor);
    case NodeKind.WhileStatement:
      return visitNode(node.expression, visitor) || visitNode(node.statement, visitor);
    case NodeKind.WithStatement:
      return visitNode(node.expression, visitor) || visitNode(node.statement, visitor);
    case NodeKind.ExportAssignment:
      return visitNode(node.expression, visitor);
    case NodeKind.ExportDeclaration:
      return (
        visitNode(node.declaration, visitor) ||
        visitNode(node.namedExports, visitor) ||
        visitNode(node.exportFromClause, visitor) ||
        visitNode(node.fromClause, visitor)
      );
    case NodeKind.ExportDefault:
      return visitNode(node.declaration, visitor);
    case NodeKind.ExportSpecifier:
      return (
        visitNode(node.moduleExportName, visitor) || visitNode(node.name, visitor) || visitNode(node.binding, visitor)
      );
    case NodeKind.ExportsList:
      return visitNodes(node.specifiers, visitor);
    case NodeKind.ImportClause:
      return (
        visitNode(node.defaultBinding, visitor) ||
        visitNode(node.nameSpaceImport, visitor) ||
        visitNode(node.namedImports, visitor)
      );
    case NodeKind.ImportDeclaration:
      return (
        visitNode(node.fromClause, visitor) ||
        visitNode(node.moduleSpecifier, visitor) ||
        visitNode(node.importClause, visitor)
      );
    case NodeKind.ImportEqualsDeclaration:
      return visitNode(node.name, visitor) || visitNode(node.moduleReference, visitor);
    case NodeKind.ImportSpecifier:
      return (
        visitNode(node.moduleExportName, visitor) || visitNode(node.name, visitor) || visitNode(node.binding, visitor)
      );
    case NodeKind.ImportsList:
      return visitNodes(node.specifiers, visitor);
    case NodeKind.NamedExports:
      return visitNode(node.exportsList, visitor);
    case NodeKind.NamedImports:
      return visitNode(node.importsList, visitor);
    case NodeKind.JsxAttributesList:
      return visitNodes(node.attributesList, visitor);
    case NodeKind.JsxAttribute:
      return visitNode(node.initializer, visitor);
    case NodeKind.JsxChildrenList:
      return visitNodes(node.children, visitor);
    case NodeKind.JsxOpeningElement:
      return (
        visitNode(node.openingElement, visitor) ||
        visitNode(node.children, visitor) ||
        visitNode(node.closingElement, visitor)
      );
    case NodeKind.JsxFragment:
      return (
        visitNode(node.openingFragment, visitor) ||
        visitNode(node.children, visitor) ||
        visitNode(node.closingFragment, visitor)
      );
    case NodeKind.JsxMemberExpression:
      return visitNode(node.expression, visitor);
    case NodeKind.JsxNamespacedName:
      return visitNode(node.namespace, visitor);
    case NodeKind.JsxOpeningElement:
      return visitNode(node.attributes, visitor) || visitNode(node.typeParameters, visitor);
    case NodeKind.JsxSelfClosingElement:
      return visitNode(node.attributes, visitor) || visitNode(node.typeArguments, visitor);
    case NodeKind.JsxSpreadAttribute:
      return visitNode(node.expression, visitor);
    case NodeKind.JsxTagNamePropertyAccess:
      return visitNode(node.expression, visitor);
    case NodeKind.ArrayType:
      return visitNode(node.elementType, visitor);
    case NodeKind.FunctionType:
      return (
        visitNode(node.typeParameters, visitor) ||
        visitNode(node.parameters, visitor) ||
        visitNode(node.returnType, visitor)
      );
    case NodeKind.ConstructSignature:
    case NodeKind.CallSignature:
    case NodeKind.IndexSignature:
    case NodeKind.ConstructorType:
    case NodeKind.AbstractConstructorType:
      return (
        visitNode(node.accessModifier, visitor) ||
        visitNode(node.typeParameters, visitor) ||
        visitNode(node.parameters, visitor) ||
        visitNode(node.returnType, visitor)
      );

    case NodeKind.ConditionalType:
      return (
        visitNode(node.checkType, visitor) ||
        visitNode(node.extendsType, visitor) ||
        visitNode(node.trueType, visitor) ||
        visitNode(node.falseType, visitor)
      );

    case NodeKind.EnumDeclaration:
      return visitNode(node.members, visitor);
    case NodeKind.EnumMembers:
      return visitNode(node.initializer, visitor);
    case NodeKind.EnumMembersList:
      return visitNodes(node.enumMembersList, visitor);
    case NodeKind.ImplementClauses:
    case NodeKind.HeritageClauses:
      return visitNodes(node.clauses, visitor);
    case NodeKind.ImplementClause:
    case NodeKind.HeritageClause:
      return visitNode(node.type, visitor);
    case NodeKind.IndexedAccessType:
      return visitNode(node.objectType, visitor) || visitNode(node.indexType, visitor);
    case NodeKind.InferType:
      return visitNode(node.typeParameter, visitor);
    case NodeKind.ImportType:
      return (
        visitNode(node.argument, visitor) ||
        visitNode(node.qualifier, visitor) ||
        visitNode(node.typeArguments, visitor)
      );
    case NodeKind.InterfaceDeclaration:
      return (
        visitNode(node.typeParameters, visitor) ||
        visitNode(node.heritageClauses, visitor) ||
        visitNode(node.objectTypeMembers, visitor)
      );
    case NodeKind.MappedType:
      return (
        visitNode(node.typeParameter, visitor) || visitNode(node.nameType, visitor) || visitNode(node.type, visitor)
      );
    case NodeKind.MethodSignature:
      return (
        visitNode(node.accessModifier, visitor) ||
        visitNode(node.typeParameters, visitor) ||
        visitNode(node.parameters, visitor) ||
        visitNode(node.returnType, visitor)
      );
    case NodeKind.MinusType:
      return visitNode(node.expression, visitor);
    case NodeKind.OptionalType:
      return visitNode(node.valueType, visitor);
    case NodeKind.ParameterDeclaration:
      return (
        visitNode(node.accessModifier, visitor) ||
        visitNode(node.binding, visitor) ||
        visitNode(node.type, visitor) ||
        visitNode(node.initializer, visitor)
      );
    case NodeKind.Parameters:
      return visitNode(node.parameterList, visitor);
    case NodeKind.ParenthesizedType:
    case NodeKind.TypeOperator:
    case NodeKind.RestType:
    case NodeKind.HeritageClause:
      return visitNode(node.type, visitor);
    case NodeKind.PropertySignature:
      return (
        visitNode(node.accessModifier, visitor) || visitNode(node.type, visitor) || visitNode(node.initializer, visitor)
      );
    case NodeKind.TypeAliasDeclaration:
      return visitNode(node.type, visitor) || visitNode(node.typeParameters, visitor);
    case NodeKind.TypeArguments:
      return visitNodes(node.typeArgumentsList, visitor);
    case NodeKind.TypeAssertion:
      return visitNode(node.type, visitor) || visitNode(node.expression, visitor);
    case NodeKind.TypeLiteral:
      return visitNode(node.objectTypeMembers, visitor);
    case NodeKind.TypeReference:
      return visitNode(node.typeName, visitor) || visitNode(node.typeArguments, visitor);
    case NodeKind.TypePredicate:
      return (
        visitNode(node.asserts, visitor) || visitNode(node.parameterName, visitor) || visitNode(node.type, visitor)
      );
    case NodeKind.TypeQuery:
      return visitNode(node.exprName, visitor);
    case NodeKind.TupleType:
      return visitNodes(node.elementTypes, visitor);
    case NodeKind.UnionType:
    case NodeKind.IntersectionType:
      return visitNodes(node.types, visitor);
    case NodeKind.DecoratorList:
      return visitNodes(node.decoratorList, visitor);
    case NodeKind.Decorator:
      return visitNode(node.expression, visitor);
    case NodeKind.NamespaceDeclaration:
      return visitNode(node.body, visitor);
    case NodeKind.NamespaceBlock:
      return visitNodes(node.statements, visitor);
    default:
      return node;
  }
}

export function visitNode(node: Node, visitor: (node: Node) => Node): Node | undefined {
  if (node === null) return node;
  return visitor(node);
}

export function visitNodes(nodes: Node[], visitor: (node: Node) => Node): Node[] | void {
  if (nodes === null || visitor === null) return nodes;

  const length = nodes.length;

  if (length === 0) return nodes;

  for (let i = 0; i < length; i++) {
    visitor(nodes[i]);
  }
}
