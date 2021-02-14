import { createNodeArray, concatenate, updateNode, extractSingleNode } from './utils';
import { LexicalEnvironmentFlags } from './transform/context';
import { Node, NodeFlags, NodeKind, TransformFlags } from './ast/node';
import { updateScript } from './ast/script';
import { updateModule } from './ast/module';
import { updateScriptBody } from './ast/scriptBody';
import { updateModuleBody } from './ast/moduleBody';
import { updateExpressionStatement } from './ast/statements/expr-stmt';
import { updateBinaryExpression } from './ast/expressions/binary-expr';
import { updateArgumentList } from './ast/expressions/argument-list';
import { updateArrayBindingPattern } from './ast/expressions/array-binding-pattern';
import { updateArrayLiteral } from './ast/expressions/array-literal';
import { updateArrowFunction } from './ast/expressions/arrow-function';
import { updateArrowParameters } from './ast/expressions/arrow-parameters';
import { updateAsExpression } from './ast/expressions/as-expr';
import { updateAssignmentExpression } from './ast/expressions/assignment-expr';
import { updateAwaitExpression } from './ast/expressions/await-expr';
import { updateBindingElement } from './ast/expressions/binding-element';
import { updateBindingElementList } from './ast/expressions/binding-element-list';
import { updateBindingProperty } from './ast/expressions/binding-property';
import { updateBindingPropertyList } from './ast/expressions/binding-property-list';
import { updateCallExpression } from './ast/expressions/call-expr';
import { updateCallChain } from './ast/expressions/call-chain';
import { updateOptionalChain } from './ast/expressions/optional-chain';
import { updateOptionalExpression } from './ast/expressions/optional-expr';
import { updateTemplateSpan } from './ast/expressions/template-span';
import { updateClassElement } from './ast/expressions/class-element';
import { updateClassElementList } from './ast/expressions/class-element-list';
import { updateClassExpression } from './ast/expressions/class-expr';
import { updateCommaOperator } from './ast/expressions/commaOperator';
import { updateComputedPropertyName } from './ast/expressions/computed-property-name';
import { updateConditionalExpression } from './ast/expressions/conditional-expr';
import { updateCoverInitializedName } from './ast/expressions/cover-initialized-name';
import { updateElementAccessExpression } from './ast/expressions/element-access-expr';
import { updateElementAccessChain } from './ast/expressions/element-access-chain';
import { updateElementList } from './ast/expressions/element-list';
import { updateFieldDefinition } from './ast/expressions/field-definition';
import { updateFunctionExpression } from './ast/expressions/function-expr';
import { updateUnaryExpression } from './ast/expressions/unary-expr';
import { updateFunctionStatementList } from './ast/expressions/function-stmt-list';
import { updateFunctionBody } from './ast/expressions/function-body';
import { updateImportCall } from './ast/expressions/import-call';
import { updateMethodDefinition } from './ast/expressions/method-definition';
import { updateNewExpression } from './ast/expressions/new-expr';
import { updateObjectBindingPattern } from './ast/expressions/object-binding-pattern';
import { updateObjectLiteral } from './ast/expressions/object-literal';
import { updateParenthesizedExpression } from './ast/expressions/parenthesized-expr';
import { updatePostfixUpdateExpression } from './ast/expressions/postfix-update-expr';
import { updatePrefixUpdateExpression } from './ast/expressions/prefix-update-expr';
import { updatePropertyAccessExpression } from './ast/expressions/property-access-expr';
import { updatePropertyAccessChain } from './ast/expressions/property-access-chain';
import { updatePropertyDefinition } from './ast/expressions/property-definition';
import { updatePropertyDefinitionList } from './ast/expressions/property-definition-list';
import { updateSingleNameBinding } from './ast/expressions/singleNameBinding';
import { updatSpreadElement } from './ast/expressions/spread-element';
import { updateSpreadProperty } from './ast/expressions/spread-property';
import { updateTaggedTemplaten } from './ast/expressions/tagged-template';
import { updateTemplateExpression } from './ast/expressions/template-expression';
import { updateBindingList } from './ast/statements/binding-list';
import { updateBlock } from './ast/statements/block';
import { updateBlockStatement } from './ast/statements/block-stmt';
import { updateBreakStatement } from './ast/statements/break-stmt';
import { updateContinueStatement } from './ast/statements/continue-stmt';
import { updateDefaultClause } from './ast/statements/default-clause';
import { updateCaseClause } from './ast/statements/case-clause';
import { updateDoWhileStatement } from './ast/statements/do-stmt';
import { updateForInStatement } from './ast/statements/for-in-stmt';
import { updateForOfStatement } from './ast/statements/for-of-stmt';
import { updateForStatement } from './ast/statements/for-stmt';
import { updateForBinding } from './ast/statements/forBinding';
import { updateIfStatement } from './ast/statements/if-stmt';
import { updateLabelledStatement } from './ast/statements/labelled-stmt';
import { updateLexicalBinding } from './ast/statements/lexical-binding';
import { updateReturnStatement } from './ast/statements/return-stmt';
import { updateSwitchStatement } from './ast/statements/switch-stmt';
import { updateThrowStatement } from './ast/statements/throw-stmt';
import { updateCaseBlock } from './ast/statements/case-block';
import { updateTryStatement } from './ast/statements/try-stmt';
import { updateVariableStatement } from './ast/statements/variable-stmt';
import { updateVariableDeclaration } from './ast/statements/variable-declaration';
import { updateVariableDeclarationList } from './ast/statements/variable-declarationList';
import { updateWhileStatement } from './ast/statements/while-stmt';
import { updateWithStatement } from './ast/statements/with-stmt';
import { updateFunctionDeclaration } from './ast/statements/function-declaration';
import { updateLexicalDeclaration } from './ast/statements/lexical-declaration';
import { updateClassDeclaration } from './ast/statements/class-declaration';
import { updateCatch } from './ast/statements/catch-stmt';
import { updateCatchParameter } from './ast/statements/catch-parameter';
import { updateArrayType } from './ast/types/array-type';
import { updateNamespaceDeclaration } from './ast/types/namespace-declaration';
import { updateNamespaceBlock } from './ast/types/namespace-block';
import { updateCallSignature } from './ast/types/call-signature';
import { updateConditionalType } from './ast/types/conditional-type';
import { updateConstructorType } from './ast/types/constructor-type';
import { updateConstructSignature } from './ast/types/construct-signature';
import { updateEnumDeclaration } from './ast/types/enum-declaration';
import { updateEnumMember } from './ast/types/enum-member';
import { updateTypeReference } from './ast/types/type-reference';
import { updateEnumMembersList } from './ast/types/enum-members-list';
import { updateFunctionType } from './ast/types/function-type';
import { updateHeritageClause } from './ast/types/heritage-clause';
import { updateHeritageClauses } from './ast/types/heritage-clauses';
import { updateImplementClause } from './ast/types/implement-clause';
import { updateImplementClauses } from './ast/types/implement-clauses';
import { updateImportType } from './ast/types/import-type';
import { updateIndexSignature } from './ast/types/index-signature';
import { updateIndexedAccessType } from './ast/types/indexed-access-type';
import { updateInferType } from './ast/types/infer-type';
import { updateInterfaceDeclaration } from './ast/types/interface-declaration';
import { updateIntersectionType } from './ast/types/intersection-type';
import { updateMappedType } from './ast/types/mapped-type';
import { updateMethodSignature } from './ast/types/method-signature';
import { updateMinusType } from './ast/types/minus-type';
import { updateNamedTupleMember } from './ast/types/named-tuple-member';
import { updateObjectTypeMembers } from './ast/types/object-type-members';
import { updateOptionalType } from './ast/types/optional-type';
import { updateParameterDeclaration } from './ast/types/parameter-declaration';
import { updateParameters } from './ast/types/parameters';
import { updateParenthesizedType } from './ast/types/parenthesized-type';
import { updatePropertySignature } from './ast/types/property-signature';
import { updateQualifiedName } from './ast/types/qualified-name';
import { updateRestType } from './ast/types/rest-type';
import { updateTupleType } from './ast/types/tuple-type';
import { updateTypeAliasDeclaration } from './ast/types/type-alias-declaration';
import { updateTypeArguments } from './ast/types/type-arguments';
import { updateTypeAssertion } from './ast/types/type-assertion';
import { updateTypeLiteral } from './ast/types/type-literal';
import { updateTypeOperator } from './ast/types/type-operator';
import { updateTypeParameters } from './ast/types/type-parameter-list';
import { updateTypeParameter } from './ast/types/type-parameter';
import { updateTypePredicate } from './ast/types/type-predicate';
import { updateUnionType } from './ast/types/union-type';
import { updateTypeQuery } from './ast/types/type-query';
import { updateJsxAttribute } from './ast/jsx/jsx-attribute';
import { updateJsxAttributesList } from './ast/jsx/jsx-attribute-list';
import { updateJsxChildrenList } from './ast/jsx/jsx-children-list';
import { updateJsxClosingElement } from './ast/jsx/jsx-closing-element';
import { updateJsxElement } from './ast/jsx/jsx-element';
import { updateJsxFragment } from './ast/jsx/jsx-fragment';
import { updateJsxMemberExpression } from './ast/jsx/jsx-member-expression';
import { updateJsxNamespacedName } from './ast/jsx/jsx-namespaced-name';
import { updateJsxOpeningElement } from './ast/jsx/jsx-opening-element';
import { updateJsxSelfClosingElement } from './ast/jsx/jsx-self-closing-element';
import { updateJsxSpreadAttribute } from './ast/jsx/jsx-spread-attribute';
import { updateJsxTagNamePropertyAccess } from './ast/jsx/jsx-tag-name-property-access';
import { updateJsxText } from './ast/jsx/jsx-text';
import { updateDecoratorList } from './ast/expressions/decorator-list';
import { updateDecorator } from './ast/expressions/decorators';
import { updateFormalParameterList } from './ast/expressions/formal-parameter-list';
import { updateFormalParameter } from './ast/expressions/formal-parameter';
import { updateImportClause, ImportClause } from './ast/module/import-clause';
import { updateExportAssignment } from './ast/module/export-assignment';
import { updateExportDefault } from './ast/module/export-default';
import { updateExportDeclaration, ExportDeclaration } from './ast/module/export-declaration';
import { updateExportFromClause } from './ast/module/export-from-clause';
import { updateExportSpecifier } from './ast/module/export-specifier';
import { updateExportsList } from './ast/module/exports-list';
import { updateExternalModuleReference } from './ast/module/external-module-reference';
import { updateImportDeclaration } from './ast/module/import-declaration';
import { updateImportEqualsDeclaration } from './ast/module/import-equals-declaration';
import { updateImportSpecifier } from './ast/module/import-specifier';
import { updateImportsList } from './ast/module/imports-list';
import { updateNamedExports } from './ast/module/named-exports';
import { updateNamedImports } from './ast/module/named-imports';

export function visitNode(node: Node, visitor: (node: Node) => Node, lift?: any): any | undefined {
  if (node === null || visitor === null) {
    return node;
  }

  const visited = visitor(node);

  if (visited === node) return node;

  let visitedNode: any = null;

  if (visited === null) return null;

  if (Array.isArray(visited)) {
    visitedNode = (lift || extractSingleNode)(visited);
  } else {
    visitedNode = visited;
  }

  return visitedNode;
}

export function visitNodes(nodes: any, visitor: any, start?: number, count?: number): any {
  if (nodes === null || visitor === null) {
    return nodes;
  }

  let updated: any = null;

  // Ensure start and count have valid values
  const length = nodes.length;

  if (start === undefined || start < 0) {
    start = 0;
  }

  if (length === 0) return nodes;

  if (count === undefined || count > length - start) {
    count = length - start;
  }

  if (start > 0 || count < length) {
    updated = [];
  }

  for (let i = 0; i < count; i++) {
    const node = nodes[i + start];

    const visited = node !== null ? visitor(node) : null;
    if (updated !== null || visited === null || visited !== node) {
      if (updated === null) updated = createNodeArray(nodes.slice(0, i));

      if (visited) {
        if (Array.isArray(visited)) {
          for (const visitedNode of visited) {
            updated.push(visitedNode);
          }
        } else {
          updated.push(visited);
        }
      }
    }
  }
  return updated || nodes;
}

export function visitEachChild(node: any, visitor: (node: Node) => Node, context: any): any {
  const kind = node.kind;

  // Childless AST nodes - nodes without any children.
  if (kind & (NodeKind.IsChildless | NodeKind.IsIdentifier)) return node;

  // Function declaration
  if (kind & NodeKind.IsFunctionDeclaration) {
    return updateFunctionDeclaration(
      node,
      kind & NodeKind.IsGenerator,
      kind & NodeKind.IsAsync,
      visitNode(node.name, visitor),
      visitNode(node.formalParameters, visitor),
      visitNode(node.contents, visitor),
      visitNode(node.typeParameters, visitor),
      visitNode(node.type, visitor)
    );
  }

  // Function expression
  if (kind & NodeKind.IsFunctionExpression) {
    return updateFunctionExpression(
      node,
      visitNode(node.name, visitor),
      kind & NodeKind.IsGenerator,
      kind & NodeKind.IsAsync,
      visitNode(node.formalParameters, visitor),
      visitNode(node.contents, visitor),
      visitNode(node.typeParameters, visitor),
      visitNode(node.type, visitor)
    );
  }

  // Method definition
  if (kind & NodeKind.IsMethod) {
    return updateMethodDefinition(
      node,
      (kind & NodeKind.IsGenerator) !== 0,
      (kind & NodeKind.IsAsync) !== 0,
      visitNode(node.propertySetParameterList, visitor),
      visitNode(node.uniqueFormalParameters, visitor),
      visitNode(node.name, visitor),
      visitNode(node.accessModifier, visitor),
      visitNode(node.typeParameters, visitor),
      visitNode(node.type, visitor),
      visitNode(node.contents, visitor),
      node // visitNode(node.decorators, visitor),
    );
  }

  // Switch - Frequently used nodes first
  switch (kind) {
    case NodeKind.Script:
      return updateScript(node, visitNode(node.scriptBody, visitor));
    case NodeKind.Module:
      return updateModule(node, visitNode(node.moduleBody, visitor));
    case NodeKind.ScriptBody:
      context.startLexicalEnvironment();
      return updateScriptBody(node, visitLexicalEnvironment(node.statements, visitor, context));
    case NodeKind.ModuleBody:
      context.startLexicalEnvironment();
      return updateModuleBody(node, visitLexicalEnvironment(node.statements, visitor, context));
    case NodeKind.FunctionStatementList:
      return updateFunctionStatementList(node, visitNodes(node.statements, visitor), node.multiline);
    case NodeKind.FunctionBody:
      return updateFunctionBody(node, visitNode(node.functionStatementList, visitor));
    case NodeKind.FormalParameterList:
      return updateFormalParameterList(
        node,
        visitParameterList(node.formalParameterList, visitor, context),
        node.trailingComma
      );
    case NodeKind.AssignmentExpression:
      return updateAssignmentExpression(node, visitNode(node.left, visitor), visitNode(node.right, visitor));
    case NodeKind.ExpressionStatement:
      return updateExpressionStatement(node, visitNode(node.expression, visitor));
    case NodeKind.ElementList:
      return updateElementList(node, visitNodes(node.elements, visitor), node.trailingComma, node.multiline);
    case NodeKind.ArrayLiteral:
      return updateArrayLiteral(node, visitNode(node.elementList, visitor));
    case NodeKind.ParenthesizedExpression:
      return updateParenthesizedExpression(node, visitNode(node.expression, visitor));
    case NodeKind.BinaryExpression:
      return updateBinaryExpression(node, visitNode(node.left, visitor), visitNode(node.right, visitor));
    case NodeKind.ObjectLiteral:
      return updateObjectLiteral(node, visitNode(node.propertyList, visitor));
    case NodeKind.PropertyDefinitionList:
      return updatePropertyDefinitionList(
        node,
        visitNodes(node.properties, visitor),
        node.trailingComma,
        node.multiline
      );
    case NodeKind.PropertyDefinition:
      return updatePropertyDefinition(
        node,
        visitNodes(node.left, visitor),
        visitNodes(node.right, visitor),
        visitNode(node.decorators, visitor),
        visitNode(node.accessModifier, visitor)
      );
    case NodeKind.ArgumentList:
      return updateArgumentList(node, visitNodes(node.elements, visitor));
    case NodeKind.FormalParameter:
      return updateFormalParameter(
        node,
        node.ellipsis,
        visitNode(node.binding, visitor),
        node.isOptional,
        visitNode(node.type, visitor),
        visitNode(node.initializer, visitor),
        visitNode(node.decorators, visitor),
        visitNode(node.accessModifier, visitor),
        node.isReadOnly
      );
    case NodeKind.SingleNameBinding:
      return updateSingleNameBinding(
        node,
        node.ellipsis,
        visitNode(node.left, visitor),
        visitNode(node.right, visitor)
      );
    case NodeKind.Block:
      return updateBlock(node, visitNodes(node.statements, visitor), node.multiline);
    case NodeKind.ObjectBindingPattern:
      return updateObjectBindingPattern(node, visitNode(node.propertyList, visitor));
    case NodeKind.BindingElement:
      return updateBindingElement(node, node.ellipsis, visitNode(node.left, visitor), visitNode(node.right, visitor));
    case NodeKind.CallExpression:
      return updateCallExpression(
        node,
        visitNode(node.expression, visitor),
        visitNode(node.typeArguments, visitor),
        visitNode(node.argumentList, visitor)
      );
    case NodeKind.BindingElementList:
      return updateBindingElementList(node, visitNodes(node.elements, visitor));
    case NodeKind.VariableStatement:
      return updateVariableStatement(node, visitNode(node.declarationList, visitor));
    case NodeKind.VariableDeclaration:
      return updateVariableDeclaration(
        node,
        visitNode(node.binding, visitor),
        node.exclamation,
        visitNode(node.type, visitor),
        visitNode(node.initializer, visitor)
      );
    case NodeKind.VariableDeclarationList:
      return updateVariableDeclarationList(node, visitNodes(node.declarations, visitor));
    case NodeKind.LexicalDeclaration:
      return updateLexicalDeclaration(node, node.isConst, visitNode(node.binding, visitor));
    case NodeKind.ArrayBindingPattern:
      return updateArrayBindingPattern(node, visitNode(node.elementList, visitor));
    case NodeKind.LexicalBinding:
      return updateLexicalBinding(
        node,
        visitNode(node.binding, visitor),
        node.exclamation,
        visitNode(node.type, visitor),
        visitNode(node.initializer, visitor)
      );
    case NodeKind.BindingList:
      return updateBindingList(node, visitNodes(node.bindingList, visitor));
    case NodeKind.BindingPropertyList:
      return updateBindingPropertyList(node, visitNodes(node.properties, visitor), node.multiline, node.trailingComma);
    case NodeKind.BlockStatement:
      return updateBlockStatement(node, visitNode(node.block, visitor));
    case NodeKind.ArrowParameters:
      return updateArrowParameters(
        node,
        visitNode(node.typeParameters, visitor),
        visitParameterList(node.elements, visitor, context),
        visitNode(node.type, visitor),
        visitNode(node.accessModifier, visitor),
        node.trailingComma
      );
    case NodeKind.PropertyAccessExpression:
      return updatePropertyAccessExpression(node, visitNode(node.member, visitor), visitNode(node.expression, visitor));
    case NodeKind.ArrowFunction:
      return updateArrowFunction(
        node,
        /* isAsync */ false,
        (node.flags & NodeFlags.ParenthesizedArrow) !== 0,
        visitNode(node.arrowParameters, visitor),
        visitNode(node.contents, visitor)
      );
    case NodeKind.AwaitExpression:
      return updateAwaitExpression(node, visitNode(node.expression, visitor));
    case NodeKind.BindingProperty:
      return updateBindingProperty(node, node.ellipsis, visitNode(node.key, visitor), visitNode(node.value, visitor));
    case NodeKind.OptionalExpression:
      return updateOptionalExpression(node, visitNode(node.member, visitor), visitNode(node.chain, visitor));
    case NodeKind.ElementAccessExpression:
      return updateElementAccessExpression(node, visitNode(node.member, visitor), visitNode(node.expression, visitor));
    case NodeKind.OptionalChain:
      return updateOptionalChain(node, visitNode(node.chain, visitor));
    case NodeKind.ClassElement:
      return updateClassElement(
        node,
        node.isStatic,
        node.isAbstract,
        node.isReadOnly,
        node.isOptional,
        visitNode(node.method, visitor)
      );
    case NodeKind.ClassElementList:
      return updateClassElementList(node, visitNodes(node.elements, visitor));
    case NodeKind.ClassDeclaration:
      return updateClassDeclaration(
        node,
        visitNode(node.name, visitor),
        visitNode(node.typeParameters, visitor),
        visitNode(node.classHeritage, visitor),
        visitNode(node.implementClauses, visitor),
        visitNode(node.members, visitor),
        visitNode(node.decorators, visitor)
      );
    case NodeKind.CommaOperator:
      return updateCommaOperator(node, visitNodes(node.expressions, visitor));
    case NodeKind.ComputedPropertyName:
      return updateComputedPropertyName(node, visitNode(node.expression, visitor));
    case NodeKind.ConditionalExpression:
      return updateConditionalExpression(
        node,
        visitNode(node.shortCircuit, visitor),
        visitNode(node.consequent, visitor),
        visitNode(node.alternate, visitor)
      );
    case NodeKind.CoverInitializedName:
      return updateCoverInitializedName(
        node,
        visitNode(node.left, visitor),
        visitNode(node.right, visitor),
        visitNode(node.accessModifier, visitor),
        node.isOptional,
        node.exclamation
      );
    case NodeKind.ReturnStatement:
      return updateReturnStatement(node, visitNode(node.expression, visitor));
    case NodeKind.UnaryExpression:
      return updateUnaryExpression(node, visitNode(node.operand, visitor));
    case NodeKind.PostfixUpdateExpression:
      return updatePostfixUpdateExpression(node, visitNode(node.operand, visitor));
    case NodeKind.PrefixUpdateExpression:
      return updatePrefixUpdateExpression(node, visitNode(node.operand, visitor));
    case NodeKind.NewExpression:
      return updateNewExpression(
        node,
        visitNode(node.expression, visitor),
        visitNode(node.typeArguments, visitor),
        visitNode(node.argumentList, visitor)
      );
    case NodeKind.SpreadProperty:
      return updateSpreadProperty(node, visitNode(node.argument, visitor));
    case NodeKind.ForInStatement:
      return updateForInStatement(
        node,
        visitNode(node.initializer, visitor),
        visitNode(node.expression, visitor),
        visitNode(node.statement, visitor)
      );
    case NodeKind.ForOfStatement:
      return updateForOfStatement(
        node,
        visitNode(node.initializer, visitor),
        visitNode(node.expression, visitor),
        visitNode(node.statement, visitor)
      );
    case NodeKind.ForStatement:
      return updateForStatement(
        node,
        visitNode(node.initializer, visitor),
        visitNode(node.condition, visitor),
        visitNode(node.incrementor, visitor),
        visitNode(node.statement, visitor)
      );
    case NodeKind.TaggedTemplate:
      return updateTaggedTemplaten(
        node,
        visitNode(node.member, visitor),
        visitNode(node.typeArguments, visitor),
        visitNode(node.template, visitor)
      );

    case NodeKind.SpreadElement:
      return updatSpreadElement(node, visitNode(node.argument, visitor));

    case NodeKind.TemplateExpression:
      return updateTemplateExpression(node, visitNodes(node.spans, visitor), visitNode(node.tail, visitor));
    case NodeKind.TemplateSpan:
      return updateTemplateSpan(
        node,
        visitNode(node.rawText, visitor),
        visitNode(node.text, visitor),
        visitNode(node.expression, visitor)
      );

    case NodeKind.ClassExpression:
      return updateClassExpression(
        node,
        visitNode(node.name, visitor),
        visitNode(node.typeParameters, visitor),
        visitNode(node.classHeritage, visitor),
        visitNode(node.implementClauses, visitor),
        visitNode(node.members, visitor),
        visitNode(node.decorators, visitor)
      );
    case NodeKind.BreakStatement:
      return updateBreakStatement(node, visitNode(node.label, visitor));
    case NodeKind.ContinueStatement:
      return updateContinueStatement(node, visitNode(node.label, visitor));
    case NodeKind.CaseClause:
      return updateCaseClause(node, visitNode(node.expression, visitor), visitNodes(node.statements, visitor));
    case NodeKind.DefaultClause:
      return updateDefaultClause(node, visitNodes(node.statements, visitor));
    case NodeKind.Catch:
      return updateCatch(node, visitNodes(node.catchParameter, visitor), visitNodes(node.block, visitor));
    case NodeKind.CatchParameter:
      return updateCatchParameter(
        node,
        visitNodes(node.binding, visitor),
        visitNodes(node.type, visitor),
        visitNodes(node.initializer, visitor)
      );
    case NodeKind.DoWhileStatement:
      return updateDoWhileStatement(node, visitNode(node.expression, visitor), visitNode(node.statement, visitor));
    case NodeKind.ForBinding:
      return updateForBinding(node, visitNode(node.declarationList, visitor));
    case NodeKind.IfStatement:
      return updateIfStatement(
        node,
        visitNode(node.expression, visitor),
        visitNode(node.consequent, visitor),
        visitNode(node.alternate, visitor)
      );
    case NodeKind.PropertyAccessChain:
      return updatePropertyAccessChain(node, visitNode(node.chain, visitor), visitNode(node.expression, visitor));
    case NodeKind.LabelledStatement:
      return updateLabelledStatement(node, visitNode(node.label, visitor), visitNode(node.statement, visitor));
    case NodeKind.CaseBlock:
      return updateCaseBlock(node, visitNodes(node.clauses, visitor));
    case NodeKind.SwitchStatement:
      return updateSwitchStatement(node, visitNode(node.expression, visitor), visitNode(node.caseBlock, visitor));
    case NodeKind.ThrowStatement:
      return updateThrowStatement(node, visitNode(node.expression, visitor));
    case NodeKind.TryStatement:
      return updateTryStatement(
        node,
        visitNode(node.block, visitor),
        visitNode(node.catchClause, visitor),
        visitNode(node.finallyBlock, visitor)
      );
    case NodeKind.ElementAccessChain:
      return updateElementAccessChain(node, visitNode(node.chain, visitor), visitNode(node.expression, visitor));
    case NodeKind.AsyncArrowFunction:
      return updateArrowFunction(
        node,
        /* isAsync */ true,
        (node.flags & NodeFlags.ParenthesizedArrow) !== 0,
        visitNode(node.arrowParameters, visitor),
        visitNode(node.contents, visitor)
      );
    case NodeKind.FieldDefinition:
      return updateFieldDefinition(
        node,
        visitNode(node.key, visitor),
        node.isOptional,
        node.isDeclared,
        node.isReadOnly,
        node.isAbstract,
        node.exclamation,
        visitNode(node.type, visitor),
        visitNode(node.initializer, visitor),
        visitNode(node.decorators, visitor),
        visitNode(node.accessModifier, visitor),
        node.isStatic
      );
    case NodeKind.CallChain:
      return updateCallChain(
        node,
        visitNode(node.chain, visitor),
        visitNode(node.typeArguments, visitor),
        visitNode(node.argumentList, visitor)
      );
    case NodeKind.Decorator:
      return updateDecorator(node, visitNode(node.expression, visitor));
    case NodeKind.DecoratorList:
      return updateDecoratorList(node, visitNodes(node.decoratorList, visitor));
    case NodeKind.ImportCall:
      return updateImportCall(node, visitNode(node.expression, visitor), visitNode(node.typeArguments, visitor));
    case NodeKind.WhileStatement:
      return updateWhileStatement(node, visitNode(node.expression, visitor), visitNode(node.statement, visitor));
    case NodeKind.WithStatement:
      return updateWithStatement(node, visitNode(node.expression, visitor), visitNode(node.statement, visitor));
    case NodeKind.AsExpression:
      return updateAsExpression(node, visitNode(node.expression, visitor), visitNode(node.type, visitor));
    case NodeKind.TypePredicate:
      return updateTypePredicate(
        node,
        node.asserts,
        visitNode(node.parameterName, visitor),
        visitNode(node.type, visitor)
      );

    case NodeKind.TypeReference:
      return updateTypeReference(node, visitNode(node.typeName, visitor), visitNode(node.typeArguments, visitor));

    case NodeKind.FunctionType:
      return updateFunctionType(
        node,
        visitNode(node.typeParameters, visitor),
        visitNode(node.parameters, visitor),
        visitNode(node.type, visitor)
      );

    case NodeKind.AbstractConstructorType:
    case NodeKind.ConstructorType:
      return updateConstructorType(
        node,
        node.isReadOnly,
        visitNode(node.accessModifier, visitor),
        visitNode(node.typeParameters, visitor),
        visitNode(node.parameters, visitor),
        visitNode(node.type, visitor)
      );

    case NodeKind.TypeQuery:
      return updateTypeQuery(node, visitNode(node.exprName, visitor));

    case NodeKind.TypeLiteral:
      return updateTypeLiteral(node, visitNode(node.members, visitor));

    case NodeKind.ArrayType:
      return updateArrayType(node, visitNode(node.elementType, visitor));

    case NodeKind.TupleType:
      return updateTupleType(node, visitNodes(node.elementTypes, visitor));

    case NodeKind.OptionalType:
      return updateOptionalType(node, visitNode(node.valueType, visitor));

    case NodeKind.RestType:
      return updateRestType(node, visitNode(node.type, visitor));

    case NodeKind.UnionType:
      return updateUnionType(node, visitNode(node.types, visitor));

    case NodeKind.IntersectionType:
      return updateIntersectionType(node, visitNode(node.types, visitor));

    case NodeKind.ConditionalType:
      return updateConditionalType(
        node,
        visitNode(node.checkType, visitor),
        visitNode(node.extendsType, visitor),
        visitNode(node.trueType, visitor),
        visitNode(node.falseType, visitor)
      );

    case NodeKind.InferType:
      return updateInferType(node, visitNode(node.typeParameter, visitor));

    case NodeKind.ImportType:
      return updateImportType(
        node,
        node.isTypeOf,
        visitNode(node.argument, visitor),
        visitNode(node.qualifier, visitor),
        visitNodes(node.typeArguments, visitor)
      );

    case NodeKind.ParenthesizedType:
      return updateParenthesizedType(node, visitNode(node.type, visitor));

    case NodeKind.TypeOperator:
      return updateTypeOperator(node, node.operator, visitNode(node.type, visitor));

    case NodeKind.IndexedAccessType:
      return updateIndexedAccessType(node, visitNode(node.objectType, visitor), visitNode(node.indexType, visitor));

    case NodeKind.MappedType:
      return updateMappedType(
        node,
        visitNode(node.typeParameter, visitor),
        visitNode(node.nameType, visitor),
        visitNode(node.type, visitor),
        node.readOnly,
        node.plus,
        node.minus,
        node.isOptional
      );

    case NodeKind.CallSignature:
      return updateCallSignature(
        node,
        node.isReadOnly,
        visitNode(node.accessModifier, visitor),
        visitNode(node.typeParameters, visitor),
        visitNode(node.parameters, visitor),
        visitNode(node.returnType, visitor)
      );

    case NodeKind.ConstructSignature:
      return updateConstructSignature(
        node,
        node.isReadOnly,
        visitNode(node.accessModifier, visitor),
        visitNode(node.typeParameters, visitor),
        visitNode(node.parameters, visitor),
        visitNode(node.returnType, visitor)
      );

    case NodeKind.IndexSignature:
      return updateIndexSignature(
        node,
        visitNode(node.accessModifier, visitor),
        node.isReadOnly,
        visitNode(node.parameters, visitor),
        visitNode(node.returnType!, visitor)
      );

    case NodeKind.PropertySignature:
      return updatePropertySignature(
        node,
        visitNode(node.name, visitor),
        node.isOptional,
        visitNode(node.type, visitor),
        node.readonly,
        visitNode(node.initializer, visitor),
        visitNode(node.accessModifier, visitor)
      );

    case NodeKind.MethodSignature:
      return updateMethodSignature(
        node,
        visitNode(node.accessModifier, visitor),
        visitNode(node.name, visitor),
        node.isOptional,
        node.isReadOnly,
        visitNode(node.typeParameters, visitor),
        visitNode(node.parameters, visitor),
        visitNode(node.returnType, visitor)
      );

    case NodeKind.Parameters:
      return updateParameters(visitNodes(node.parameterList, visitor), node.readOnly);
    case NodeKind.TypeParameter:
      return updateTypeParameters(visitNodes(node.typeParameterList, visitor), node.readOnly);
    case NodeKind.TypeAssertionExpression:
      return updateTypeAssertion(node, visitNode(node.type, visitor), visitNode(node.expression, visitor));

    case NodeKind.InterfaceDeclaration:
      return updateInterfaceDeclaration(
        node,
        visitNode(node.name, visitor),
        visitNode(node.typeParameters, visitor),
        visitNode(node.heritageClauses, visitor),
        visitNode(node.objectTypeMembers, visitor)
      );

    case NodeKind.TypeAliasDeclaration:
      return updateTypeAliasDeclaration(
        node,
        visitNode(node.name, visitor),
        visitNode(node.type, visitor),
        visitNode(node.typeParameters, visitor)
      );

    case NodeKind.EnumDeclaration:
      return updateEnumDeclaration(
        node,
        visitNode(node.members, visitor),
        visitNode(node.parameters, visitor),
        node.isConst
      );

    case NodeKind.MinusType:
      return updateMinusType(node, visitNode(node.expression, visitor));

    case NodeKind.NamedTupleMember:
      return updateNamedTupleMember(
        node,
        node.ellipsis,
        visitNode(node.name, visitor),
        visitNode(node.type, visitor),
        node.isOptional
      );

    case NodeKind.ObjectTypeMembers:
      return updateObjectTypeMembers(node, visitNodes(node.members, visitor));

    case NodeKind.ParameterDeclaration:
      return updateParameterDeclaration(
        node,
        node.ellipsis,
        visitNode(node.binding, visitor),
        visitNode(node.type, visitor),
        node.isOptional,
        visitNode(node.initializer, visitor),
        visitNode(node.accessModifier, visitor),
        node.isReadOnly
      );

    case NodeKind.TypeArguments:
      return updateTypeArguments(node, visitNodes(node.typeArgumentsList, visitor));

    case NodeKind.TypeParameter:
      return updateTypeParameter(
        node,
        visitNode(node.name, visitor),
        visitNode(node.constraint, visitor),
        visitNode(node.defaultType, visitor),
        visitNode(node.expression, visitor)
      );

    case NodeKind.HeritageClauses:
      return updateHeritageClauses(node, visitNodes(node.clauses, visitor));

    case NodeKind.HeritageClause:
      return updateHeritageClause(node, visitNode(node.type, visitor));

    case NodeKind.ImplementClauses:
      return updateImplementClauses(node, visitNodes(node.clauses, visitor));

    case NodeKind.ImplementClause:
      return updateImplementClause(node, visitNode(node.type, visitor));

    case NodeKind.EnumMembersList:
      return updateEnumMembersList(node, visitNodes(node.enumMembersList, visitor));
    case NodeKind.EnumMembers:
      return updateEnumMember(node, visitNodes(node.name, visitor), visitNodes(node.initializer, visitor));
    case NodeKind.QualifiedName:
      return updateQualifiedName(node, visitNodes(node.left, visitor), visitNodes(node.right, visitor));

    case NodeKind.JsxAttribute:
      return updateJsxAttribute(node, visitNode(node.name, visitor), visitNode(node.initializer, visitor));
    case NodeKind.JsxAttributesList:
      return updateJsxAttributesList(node, visitNodes(node.attributesList, visitor));
    case NodeKind.JsxChildrenList:
      return updateJsxChildrenList(node, visitNodes(node.JsxChildrenList, visitor));
    case NodeKind.JsxClosingElement:
      return updateJsxClosingElement(node, visitNode(node.tagName, visitor));
    case NodeKind.JsxElement:
      return updateJsxElement(
        node,
        visitNode(node.openingElement, visitor),
        visitNode(node.children, visitor),
        visitNode(node.closingElement, visitor)
      );
    case NodeKind.JsxFragment:
      return updateJsxFragment(
        node,
        visitNode(node.openingFragment, visitor),
        visitNode(node.children, visitor),
        visitNode(node.closingFragment, visitor)
      );
    case NodeKind.JsxMemberExpression:
      return updateJsxMemberExpression(node, visitNode(node.expression, visitor));
    case NodeKind.JsxNamespacedName:
      return updateJsxNamespacedName(node, visitNode(node.name, visitor), visitNode(node.namespace, visitor));
    case NodeKind.JsxOpeningElement:
      return updateJsxOpeningElement(
        node,
        visitNode(node.tagName, visitor),
        visitNode(node.attributes, visitor),
        visitNode(node.typeArguments, visitor)
      );
    case NodeKind.JsxSelfClosingElement:
      return updateJsxSelfClosingElement(
        node,
        visitNode(node.tagName, visitor),
        visitNode(node.attributes, visitor),
        visitNode(node.typeArguments, visitor)
      );
    case NodeKind.ImportClause:
      return updateImportClause(
        node,
        visitNode(node.defaultBinding, visitor),
        visitNode(node.nameSpaceImport, visitor),
        visitNode(node.namedImports, visitor),
        (node as ImportClause).isTypeOnly
      );
    case NodeKind.ExportAssignment:
      return updateExportAssignment(node, visitNode(node.expression, visitor));
    case NodeKind.ExportDefault:
      return updateExportDefault(node, visitNode(node.declaration, visitor));
    case NodeKind.ExportDeclaration:
      return updateExportDeclaration(
        node,
        visitNode(node.declaration, visitor),
        visitNode(node.namedExports, visitor),
        visitNode(node.fromClause, visitor),
        visitNode(node.exportFromClause, visitor),
        (node as ExportDeclaration).isTypeOnly
      );
    case NodeKind.ExportFromClause:
      return updateExportFromClause(
        node,
        visitNode(node.moduleExportName, visitor),
        visitNode(node.namedBinding, visitor)
      );
    case NodeKind.ExportSpecifier:
      return updateExportSpecifier(
        node,
        visitNode(node.name, visitor),
        visitNode(node.binding, visitor),
        visitNode(node.moduleExportName, visitor)
      );
    case NodeKind.ExportsList:
      return updateExportsList(node, visitNode(node.specifiers, visitor));
    case NodeKind.ExternalModuleReference:
      return updateExternalModuleReference(node, visitNode(node.expression, visitor));
    case NodeKind.ImportDeclaration:
      return updateImportDeclaration(
        node,
        visitNode(node.fromClause, visitor),
        visitNode(node.moduleSpecifier, visitor),
        visitNode(node.importClause, visitor)
      );
    case NodeKind.ImportEqualsDeclaration:
      return updateImportEqualsDeclaration(
        node,
        visitNode(node.name, visitor),
        visitNode(node.moduleReference, visitor)
      );

    case NodeKind.ImportsList:
      return updateImportsList(node, visitNode(node.specifiers, visitor));

    case NodeKind.NamedExports:
      return updateNamedExports(node, visitNode(node.exportsList, visitor));
    case NodeKind.ImportSpecifier:
      return updateImportSpecifier(
        node,
        visitNode(node.moduleExportName, visitor),
        visitNode(node.name, visitor),
        visitNode(node.binding, visitor)
      );

    case NodeKind.NamespaceDeclaration:
      return updateNamespaceDeclaration(node, visitNode(node.name, visitor), visitNode(node.body, visitor));

    case NodeKind.NamespaceBlock:
      return updateNamespaceBlock(node, visitNodes(node.statements, visitor));

    case NodeKind.NamedImports:
      return updateNamedImports(node, visitNode(node.importsList, visitor));
    case NodeKind.JsxSpreadAttribute:
      return updateJsxSpreadAttribute(node, visitNode(node.expression, visitor));
    case NodeKind.JsxTagNamePropertyAccess:
      return updateJsxTagNamePropertyAccess(node, visitNode(node.member, visitor), visitNode(node.expression, visitor));
    case NodeKind.HeritageClauses:
      return updateJsxText(node, visitNode(node.clauses, visitor));
    default:
      return node;
  }
}

export function visitParameterList(nodes: any, visitor: any, context: any): any {
  context.startLexicalEnvironment();
  let updated: any;
  if (nodes) {
    updated = visitNodes(nodes, visitor);
    context.setLexicalEnvironmentFlags(LexicalEnvironmentFlags.InParameters, false);
  }
  context.suspendLexicalEnvironment();
  return updated;
}

export function visitLexicalEnvironment(
  statements: any,
  visitor: any,
  context: any,
  start?: number,
  _ensureUseStrict?: boolean
) {
  context.startLexicalEnvironment();
  statements = visitNodes(statements, visitor, start);
  const declarations = context.endLexicalEnvironment();
  return createNodeArray(concatenate(declarations, statements));
}
