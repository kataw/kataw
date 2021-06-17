import { SyntaxKind } from '../ast/syntax-node';
import { createRootNode } from '../ast/rootNode';
import { StatementNode } from '../ast/statements';
import { createAssignmentExpression } from '../ast/expressions/assignment-expr';
import { createExpressionStatement } from '../ast/statements/expression-stmt';
import { createArrayLiteral } from '../ast/expressions/array-literal';
import { createBinaryExpression } from '../ast/expressions/binary-expr';
import { createArgumentList } from '../ast/expressions/argument-list';
import { createArrayBindingPattern } from '../ast/expressions/array-binding-pattern';
import { createArrowFunction } from '../ast/expressions/arrow-function';
import { createAwaitExpression } from '../ast/expressions/await-expr';
import { createBindingElementList } from '../ast/expressions/binding-element-list';
import { createBindingProperty } from '../ast/expressions/binding-property';
import { createBindingElement } from '../ast/expressions/binding-element';
import { createIndexExpression } from '../ast/expressions/index-expr';
import { createIndexExpressionChain } from '../ast/expressions/index-expr-chain';
import { createMemberAccessChain } from '../ast/expressions/member-access-chain';
import { createMemberAccessExpression } from '../ast/expressions/member-access-expr';
import { createStaticBlock } from '../ast/expressions/static-block';
import { createYieldExpression } from '../ast/expressions/yield-expr';
import { createBindingPropertyList } from '../ast/expressions/binding-property-list';
import { createCallExpression } from '../ast/expressions/call-expr';
import { createCallChain } from '../ast/expressions/call-chain';
import { createClassBody } from '../ast/expressions/class-body';
import { createClassTail } from '../ast/expressions/class-tail';
import { createOptionalChain } from '../ast/expressions/optional-chain';
import { createOptionalExpression } from '../ast/expressions/optional-expr';
import { createCommaOperator } from '../ast/expressions/comma-operator';
import { createTemplateSpan } from '../ast/expressions/template-span';
import { createClassElement } from '../ast/expressions/class-element';
import { createClassExpression } from '../ast/expressions/class-expr';
import { createClassHeritage } from '../ast/expressions/class-heritage';
import { createComputedPropertyName } from '../ast/expressions/computed-property-name';
import { createConditionalExpression } from '../ast/expressions/conditional-expr';
import { createCoverInitializedName } from '../ast/expressions/cover-initialized-name';
import { createElementList } from '../ast/expressions/element-list';
import { createFieldDefinition } from '../ast/expressions/field-definition';
import { createTaggedTemplate } from '../ast/expressions/tagged-template';
import { createFunctionExpression } from '../ast/expressions/function-expr';
import { createUnaryExpression } from '../ast/expressions/unary-expr';
import { createFunctionStatementList } from '../ast/expressions/function-stmt-list';
import { createFunctionBody } from '../ast/expressions/function-body';
import { createImportCall } from '../ast/expressions/import-call';
import { createMethodDefinition } from '../ast/expressions/method-definition';
import { createNewExpression } from '../ast/expressions/new-expr';
import { createObjectBindingPattern } from '../ast/expressions/object-binding-pattern';
import { createObjectLiteral } from '../ast/expressions/object-literal';
import { createParenthesizedExpression } from '../ast/expressions/parenthesized-expr';
import { createPostfixUpdateExpression } from '../ast/expressions/postfix-update-expr';
import { createPrefixUpdateExpression } from '../ast/expressions/prefix-update-expr';
import { createPropertyDefinition } from '../ast/expressions/property-definition';
import { createPropertyDefinitionList } from '../ast/expressions/property-definition-list';
import { createSpreadProperty } from '../ast/expressions/spread-property';
import { createTemplateExpression } from '../ast/expressions/template-expression';
import { createBindingList } from '../ast/statements/binding-list';
import { createVariableStatement } from '../ast/statements/variable-stmt';
import { createBlock } from '../ast/statements/block';
import { createBlockStatement } from '../ast/statements/block-stmt';
import { createBreakStatement } from '../ast/statements/break-stmt';
import { createContinueStatement } from '../ast/statements/continue-stmt';
import { createDefaultClause } from '../ast/statements/default-clause';
import { createCaseClause } from '../ast/statements/case-clause';
import { createDoWhileStatement } from '../ast/statements/do-stmt';
import { createForInStatement } from '../ast/statements/for-in-stmt';
import { createForOfStatement } from '../ast/statements/for-of-stmt';
import { createForStatement } from '../ast/statements/for-stmt';
import { createIfStatement } from '../ast/statements/if-stmt';
import { createLabelledStatement } from '../ast/statements/labelled-stmt';
import { createLexicalBinding } from '../ast/statements/lexical-binding';
import { createReturnStatement } from '../ast/statements/return-stmt';
import { createSwitchStatement } from '../ast/statements/switch-stmt';
import { createThrowStatement } from '../ast/statements/throw-stmt';
import { createCaseBlock } from '../ast/statements/case-block';
import { createTryStatement } from '../ast/statements/try-stmt';
import { createVariableDeclaration } from '../ast/statements/variable-declaration';
import { createVariableDeclarationList } from '../ast/statements/variable-declarationList';
import { createWhileStatement } from '../ast/statements/while-stmt';
import { createWithStatement } from '../ast/statements/with-stmt';
import { createFunctionDeclaration } from '../ast/statements/function-declaration';
import { createLexicalDeclaration } from '../ast/statements/lexical-declaration';
import { createClassDeclaration } from '../ast/statements/class-declaration';
import { createCatch } from '../ast/statements/catch-stmt';
import { createArrayType } from '../ast/types/array-type';
import { createArrowFunctionType } from '../ast/types/arrow-function-type';
import { createArrowTypeParameter } from '../ast/types/arrow-type-parameter';
import { createArrowTypeParameterList } from '../ast/types/arrow-type-parameter-list';
import { createFunctionTypeParameterList } from '../ast/types/function-type-parameter-list';
import { createFunctionTypeParameters } from '../ast/types/function-type-parameter';
import { createNullableType } from '../ast/types/nullable-type';
import { createObjectTypeCallProperty } from '../ast/types/object-type-call-property';
import { createObjectTypeIndexer } from '../ast/types/object-type-indexer';
import { createObjectTypeInternalSlot } from '../ast/types/object-type-internal-slot';
import { createObjectTypeProperty } from '../ast/types/object-type-property';
import { createOpaqueType } from '../ast/types/opaque-type';
import { createQualifiedType } from '../ast/types/qualified-type';
import { createTypeInstantiations } from '../ast/types/type-instantiations';
import { createTypeAnnotation } from '../ast/types/type-annotation';
import { createTypeParameterDeclaration } from '../ast/types/type-parameter-declaration';
import { createTypeParameterInstantiation } from '../ast/types/type-parameter-instantiation';
import { createTypeParameterList } from '../ast/types/type-parameter-list';
import { createTypeofType } from '../ast/types/typeof-type';
import { createTypeReference } from '../ast/types/type-reference';
import { createFunctionType } from '../ast/types/function-type';
import { createIndexedAccessType } from '../ast/types/indexed-access-type';
import { createIntersectionType } from '../ast/types/intersection-type';
import { createOptionalType } from '../ast/types/optional-type';
import { createParenthesizedType } from '../ast/types/parenthesized-type';
import { createRestType } from '../ast/types/rest-type';
import { createTupleType } from '../ast/types/tuple-type';
import { createTypeParameter } from '../ast/types/type-parameter';
import { createUnionType } from '../ast/types/union-type';
import { createDecoratorList } from '../ast/expressions/decorator-list';
import { createDecorator } from '../ast/expressions/decorators';
import { createFormalParameterList } from '../ast/expressions/formal-parameter-list';
import { createImportClause } from '../ast/module/import-clause';
import { createNamespaceExportDeclaration } from '../ast/module/namespace-export-declaration';
import { createNameSpaceImport } from '../ast/module/namespace-import';
import { createExportDefault } from '../ast/module/export-default';
import { createExportDeclaration } from '../ast/module/export-declaration';
import { createExportFromClause } from '../ast/module/export-from-clause';
import { createExportSpecifier } from '../ast/module/export-specifier';
import { createExportsList } from '../ast/module/exports-list';
import { createImportDeclaration } from '../ast/module/import-declaration';
import { createImportSpecifier } from '../ast/module/import-specifier';
import { createImportsList } from '../ast/module/imports-list';
import { createNamedExports } from '../ast/module/named-exports';
import { createNamedImports } from '../ast/module/named-imports';
import { createSpreadElement } from '../ast/expressions/spread-element';
import {
  Transform,
  LexicalEnvironmentFlags,
  createNodeArray,
  extractSingleNode,
  startLexicalEnvironment,
  endLexicalEnvironment,
  concatenate
} from './core';

export function visitEachChild(transform: Transform, node: any, visitor: (node: SyntaxKind) => SyntaxKind): any {
  const kind = node.kind;
  switch (kind) {
    case SyntaxKind.RootNode:
      startLexicalEnvironment(transform);
      return node.statements !== visitNodes(node.statements, visitor)
        ? createRootNode(node.directives, node.statements, node.isModule, node.source, node.fileName)
        : node;
    case SyntaxKind.AssignmentExpression:
      return node.left !== visitNode(node.left, visitor) ||
        node.operatorToken !== visitNode(node.operatorToken, visitor) ||
        node.right !== visitNode(node.right, visitor)
        ? createAssignmentExpression(node.left, node.operatorToken, node.right, node.start, node.end)
        : node;

    case SyntaxKind.ExpressionStatement:
      return node.expression !== visitNode(node.expression, visitor)
        ? createExpressionStatement(node.expression, node.start, node.end)
        : node;
    case SyntaxKind.ElementList:
      return node.elements !== visitNode(node.elements, visitor)
        ? createElementList(node.elements, node.trailingComma, node.flags, node.start, node.end)
        : node;
    case SyntaxKind.ArrayLiteral:
      return node.elementList !== visitNode(node.elementList, visitor)
        ? createArrayLiteral(node.elementList, node.flags, node.start, node.end)
        : node;
    case SyntaxKind.ParenthesizedExpression:
      return node.expression !== visitNode(node.expression, visitor)
        ? createParenthesizedExpression(node.expression, node.start, node.end)
        : node;
    case SyntaxKind.BinaryExpression:
      return node.left !== visitNode(node.left, visitor) ||
        node.operatorToken !== visitNode(node.operatorToken, visitor) ||
        node.right !== visitNode(node.right, visitor)
        ? createBinaryExpression(node.left, node.operatorToken, node.right, node.start, node.end)
        : node;
    case SyntaxKind.ObjectLiteral:
      return node.propertyList !== visitNode(node.propertyList, visitor)
        ? createObjectLiteral(node.propertyList, node.flags, node.start, node.end)
        : node;
    case SyntaxKind.PropertyDefinitionList:
      return node.properties !== visitNodes(node.properties, visitor)
        ? createPropertyDefinitionList(node.properties, node.trailingComma, node.flags, node.start, node.end)
        : node;
    case SyntaxKind.PropertyDefinition:
      return node.generatorToken !== visitNode(node.generatorToken, visitor) ||
        node.left !== visitNode(node.left, visitor) ||
        node.right !== visitNode(node.right, visitor)
        ? createPropertyDefinition(node.generatorToken, node.left, node.right, node.flags, node.start, node.end)
        : node;
    case SyntaxKind.ArgumentList:
      return node.elements !== visitNodes(node.elements, visitor)
        ? createArgumentList(node.elements, node.trailingComma, node.start, node.end)
        : node;
    case SyntaxKind.Block:
      return node.statements !== visitNodes(node.statements, visitor)
        ? createBlock(node.statements, node.flags, node.start, node.end)
        : node;
    case SyntaxKind.ObjectBindingPattern:
      return node.propertyList !== visitNodes(node.propertyList, visitor)
        ? createObjectBindingPattern(node.propertyList, node.flags, node.start, node.end)
        : node;
    case SyntaxKind.CallExpression:
      return node.expression !== visitNode(node.expression, visitor) ||
        node.argumentList !== visitNode(node.argumentList, visitor)
        ? createCallExpression(node.expression, node.argumentList, node.flags, node.start, node.end)
        : node;
    case SyntaxKind.BindingElementList:
      return node.elements !== visitNodes(node.elements, visitor)
        ? createBindingElementList(node.elements, node.trailingComma, node.flags, node.start, node.end)
        : node;
    case SyntaxKind.VariableStatement:
      return node.declareKeyword !== visitNode(node.declareKeyword, visitor) ||
        node.varKeyword !== visitNode(node.varKeyword, visitor) ||
        node.declarationList !== visitNode(node.declarationList, visitor)
        ? createVariableStatement(
            node.declareKeyword,
            node.varKeyword,
            node.declarationList,
            node.flags,
            node.start,
            node.end
          )
        : node;
    case SyntaxKind.VariableDeclaration:
      return node.binding !== visitNode(node.binding, visitor) ||
        node.optionalToken !== visitNode(node.optionalToken, visitor) ||
        node.type !== visitNode(node.type, visitor) ||
        node.initializer !== visitNode(node.initializer, visitor)
        ? createVariableDeclaration(node.binding, node.optionalToken, node.type, node.initializer, node.start, node.end)
        : node;
    case SyntaxKind.VariableDeclarationList:
      return node.declarations !== visitNodes(node.declarations, visitor)
        ? createVariableDeclarationList(node.declarations, node.start, node.end)
        : node;
    case SyntaxKind.LexicalDeclaration:
      return node.lexicalKeyword !== visitNode(node.lexicalKeyword, visitor) ||
        node.binding !== visitNode(node.binding, visitor)
        ? createLexicalDeclaration(node.lexicalKeyword, node.binding, node.start, node.end)
        : node;
    case SyntaxKind.ArrayBindingPattern:
      return node.elementList !== visitNodes(node.elementList, visitor)
        ? createArrayBindingPattern(node.elementList, node.flags, node.start, node.end)
        : node;
    case SyntaxKind.LexicalBinding:
      return node.binding !== visitNode(node.binding, visitor) ||
        node.optionalToken !== visitNode(node.optionalToken, visitor) ||
        node.type !== visitNode(node.type, visitor) ||
        node.initializer !== visitNode(node.initializer, visitor)
        ? createLexicalBinding(node.binding, node.optionalToken, node.type, node.initializer, node.start, node.end)
        : node;
    case SyntaxKind.BindingList:
      return node.bindingList !== visitNodes(node.bindingList, visitor)
        ? createBindingList(node.bindingList, node.flags, node.start, node.end)
        : node;
    case SyntaxKind.BindingPropertyList:
      return node.properties !== visitNodes(node.properties, visitor)
        ? createBindingPropertyList(node.properties, node.flags, node.trailingComma, node.start, node.end)
        : node;
    case SyntaxKind.BlockStatement:
      return node.block !== visitNode(node.block, visitor)
        ? createBlockStatement(node.block, node.flags, node.start, node.end)
        : node;
    case SyntaxKind.ArrowFunction:
      return node.arrowToken !== visitNode(node.arrowToken, visitor) ||
        node.typeParameters !== visitNode(node.typeParameters, visitor) ||
        node.parameters !== visitNode(node.parameters, visitor) ||
        node.asyncKeyword !== visitNode(node.asyncKeyword, visitor) ||
        node.returnType !== visitNode(node.returnType, visitor) ||
        node.contents !== visitNode(node.contents, visitor)
        ? createArrowFunction(
            node.arrowToken,
            node.typeParameters,
            node.parameters,
            node.asyncKeyword,
            node.returnType,
            node.contents,
            node.flags,
            node.start,
            node.end
          )
        : node;
    case SyntaxKind.AwaitExpression:
      return node.awaitKeyword !== visitNode(node.awaitKeyword, visitor) ||
        node.expression !== visitNode(node.expression, visitor)
        ? createAwaitExpression(node.awaitKeyword, node.expression, node.start, node.end)
        : node;
    case SyntaxKind.BindingElement:
      return node.ellipsisToken !== visitNode(node.ellipsisToken, visitor) ||
        node.left !== visitNode(node.left, visitor) ||
        node.optionalToken !== visitNode(node.optionalToken, visitor) ||
        node.type !== visitNode(node.type, visitor)
        ? createBindingElement(
            node.ellipsisToken,
            node.left,
            node.optionalToken,
            node.type,
            node.right,
            node.flags,
            node.start,
            node.end
          )
        : node;
    case SyntaxKind.BindingProperty:
      return node.ellipsisToken !== visitNode(node.ellipsisToken, visitor) ||
        node.key !== visitNode(node.key, visitor) ||
        node.value !== visitNode(node.value, visitor) ||
        node.initializer !== visitNode(node.initializer, visitor)
        ? createBindingProperty(node.ellipsisToken, node.key, node.value, node.initializer, node.start, node.end)
        : node;
    case SyntaxKind.OptionalExpression:
      return node.chainToken !== visitNode(node.chainToken, visitor) ||
        node.member !== visitNode(node.member, visitor) ||
        node.chain !== visitNode(node.chain, visitor)
        ? createOptionalExpression(node.chainToken, node.member, node.chain, node.start, node.end)
        : node;
    case SyntaxKind.OptionalChain:
      return node.chain !== visitNode(node.chain, visitor)
        ? createOptionalChain(node.chain, node.start, node.end)
        : node;
    case SyntaxKind.ClassHeritage:
      return node.extendsKeyword !== visitNode(node.extendsKeyword, visitor) ||
        node.expression !== visitNode(node.expression, visitor) ||
        node.typeParameter !== visitNode(node.typeParameter, visitor)
        ? createClassHeritage(node.extendsKeyword, node.expression, node.typeParameter, node.start, node.end)
        : node;
    case SyntaxKind.ClassBody:
      return node.elements !== visitNodes(node.elements, visitor)
        ? createClassBody(node.elements, node.start, node.end)
        : node;
    case SyntaxKind.ClassTail:
      return node.classHeritage !== visitNode(node.classHeritage, visitor) ||
        node.body !== visitNode(node.body, visitor)
        ? createClassTail(node.classHeritage, node.body, node.flags, node.start, node.end)
        : node;
    case SyntaxKind.ClassDeclaration:
      return node.declareKeyword !== visitNode(node.declareKeyword, visitor) ||
        node.decorators !== visitNode(node.decorators, visitor) ||
        node.classKeyword !== visitNode(node.classKeyword, visitor) ||
        node.name !== visitNode(node.name, visitor) ||
        node.typeParameters !== visitNode(node.typeParameters, visitor) ||
        node.tail !== visitNode(node.tail, visitor)
        ? createClassDeclaration(
            node.declareKeyword,
            node.decorators,
            node.classKeyword,
            node.name,
            node.typeParameters,
            node.tail,
            node.flags,
            node.start,
            node.end
          )
        : node;
    case SyntaxKind.CommaOperator:
      return node.expressions !== visitNodes(node.expressions, visitor)
        ? createCommaOperator(node.expressions, node.start, node.end)
        : node;
    case SyntaxKind.ComputedPropertyName:
      return node.expression !== visitNode(node.expression, visitor)
        ? createComputedPropertyName(node.expression, node.start, node.end)
        : node;
    case SyntaxKind.ConditionalExpression:
      return node.shortCircuit !== visitNode(node.shortCircuit, visitor) ||
        node.questionToken !== visitNode(node.questionToken, visitor) ||
        node.colonToken !== visitNode(node.colonToken, visitor) ||
        node.alternate !== visitNode(node.alternate, visitor)
        ? createConditionalExpression(
            node.shortCircuit,
            node.questionToken,
            node.consequent,
            node.colonToken,
            node.alternate,
            node.start,
            node.end
          )
        : node;
    case SyntaxKind.CoverInitializedName:
      return node.left !== visitNode(node.left, visitor) || node.right !== visitNode(node.right, visitor)
        ? createCoverInitializedName(node.left, node.right, node.start, node.end)
        : node;
    case SyntaxKind.ReturnStatement:
      return node.returnKeyword !== visitNode(node.returnKeyword, visitor) ||
        node.expression !== visitNode(node.expression, visitor)
        ? createReturnStatement(node.returnKeyword, node.expression, node.flags, node.start, node.end)
        : node;
    case SyntaxKind.UnaryExpression:
      return node.operandToken !== visitNode(node.operandToken, visitor) ||
        node.operand !== visitNode(node.operand, visitor)
        ? createUnaryExpression(node.operandToken, node.operand, node.start, node.end)
        : node;
    case SyntaxKind.PostfixUpdateExpression:
      return node.operandToken !== visitNode(node.operandToken, visitor) ||
        node.operand !== visitNode(node.operand, visitor)
        ? createPostfixUpdateExpression(node.operandToken, node.operand, node.start, node.end)
        : node;
    case SyntaxKind.PrefixUpdateExpression:
      return node.operandToken !== visitNode(node.operandToken, visitor) ||
        node.operand !== visitNode(node.operand, visitor)
        ? createPrefixUpdateExpression(node.operandToken, node.operand, node.start, node.end)
        : node;
    case SyntaxKind.NewExpression:
      return node.newKeyword !== visitNode(node.newKeyword, visitor) ||
        node.expression !== visitNode(node.expression, visitor) ||
        node.argumentList !== visitNode(node.argumentList, visitor)
        ? createNewExpression(node.newKeyword, node.expression, node.argumentList, node.flags, node.start, node.end)
        : node;
    case SyntaxKind.SpreadProperty:
      return node.ellipsisToken !== visitNode(node.ellipsisToken, visitor) ||
        node.argument !== visitNode(node.argument, visitor)
        ? createSpreadProperty(node.ellipsisToken, node.argument, node.start, node.end)
        : node;
    case SyntaxKind.ForInStatement:
      return node.forKeyword !== visitNode(node.forKeyword, visitor) ||
        node.infKeyword !== visitNode(node.inKeyword, visitor) ||
        node.initializer !== visitNode(node.initializer, visitor) ||
        node.expression !== visitNode(node.expression, visitor) ||
        node.statement !== visitNode(node.statement, visitor)
        ? createForInStatement(
            node.forKeyword,
            node.inKeyword,
            node.initializer,
            node.expression,
            node.statement,
            node.flags,
            node.start,
            node.end
          )
        : node;
    case SyntaxKind.ForOfStatement:
      return node.forKeyword !== visitNode(node.forKeyword, visitor) ||
        node.ofKeyword !== visitNode(node.ofKeyword, visitor) ||
        node.initializer !== visitNode(node.initializer, visitor) ||
        node.expression !== visitNode(node.expression, visitor) ||
        node.statement !== visitNode(node.statement, visitor) ||
        node.awaitKeyword !== visitNode(node.awaitKeyword, visitor)
        ? createForOfStatement(
            node.forKeyword,
            node.ofKeyword,
            node.initializer,
            node.expression,
            node.statement,
            node.awaitKeyword,
            node.flags,
            node.start,
            node.end
          )
        : node;
    case SyntaxKind.ForStatement:
      return node.forKeyword !== visitNode(node.forKeyword, visitor) ||
        node.initializer !== visitNode(node.initializer, visitor) ||
        node.condition !== visitNode(node.condition, visitor) ||
        node.incrementor !== visitNode(node.incrementor, visitor) ||
        node.statement !== visitNode(node.statement, visitor)
        ? createForStatement(
            node.forKeyword,
            node.initializer,
            node.condition,
            node.incrementor,
            node.statement,
            node.flags,
            node.start,
            node.end
          )
        : node;
    case SyntaxKind.TaggedTemplate:
      return node.member !== visitNode(node.member, visitor) || node.template !== visitNode(node.template, visitor)
        ? createTaggedTemplate(node.member, node.template, node.start, node.end)
        : node;
    case SyntaxKind.SpreadElement:
      return node.ellipsisToken !== visitNode(node.ellipsisToken, visitor) ||
        node.argument !== visitNode(node.argument, visitor)
        ? createSpreadElement(node.ellipsisToken, node.argument, node.start, node.end)
        : node;
    case SyntaxKind.TemplateExpression:
      return node.spans !== visitNodes(node.spans, visitor) || node.tail !== visitNode(node.tail, visitor)
        ? createTemplateExpression(node.spans, node.tail, node.flags, node.start, node.end)
        : node;
    case SyntaxKind.TemplateSpan:
      return node.expression !== visitNode(node.expression, visitor)
        ? createTemplateSpan(node.rawText, node.text, node.expression, node.start, node.end)
        : node;
    case SyntaxKind.ClassElement:
      return node.declareToken !== visitNode(node.declareToken, visitor) ||
        node.decorators !== visitNode(node.decorators, visitor) ||
        node.generatorToken !== visitNode(node.generatorToken, visitor) ||
        node.staticKeyword !== visitNode(node.staticKeyword, visitor) ||
        node.asyncKeyword !== visitNode(node.asyncKeyword, visitor) ||
        node.setKeyword !== visitNode(node.setKeyword, visitor) ||
        node.getKeyword !== visitNode(node.getKeyword, visitor) ||
        node.method !== visitNode(node.method, visitor)
        ? createClassElement(
            node.declareToken,
            node.decorators,
            node.generatorToken,
            node.staticKeyword,
            node.asyncKeyword,
            node.setKeyword,
            node.getKeyword,
            node.method,
            node.flags,
            node.start,
            node.end
          )
        : node;
    case SyntaxKind.ClassExpression:
      return node.decorators !== visitNode(node.decorators, visitor) ||
        node.classKeyword !== visitNode(node.classKeyword, visitor) ||
        node.name !== visitNode(node.name, visitor) ||
        node.typeParameters !== visitNode(node.typeParameters, visitor) ||
        node.tail !== visitNode(node.tail, visitor)
        ? createClassExpression(
            node.decorators,
            node.classKeyword,
            node.name,
            node.typeParameters,
            node.tail,
            node.flags,
            node.start,
            node.end
          )
        : node;
    case SyntaxKind.BreakStatement:
      return node.continueKeyword !== visitNode(node.continueKeyword, visitor) ||
        node.label !== visitNode(node.label, visitor)
        ? createBreakStatement(node.continueKeyword, node.label, node.start, node.end)
        : node;
    case SyntaxKind.ContinueStatement:
      return node.continueKeyword !== visitNode(node.continueKeyword, visitor) ||
        node.label !== visitNode(node.label, visitor)
        ? createContinueStatement(node.continueKeyword, node.label, node.start, node.end)
        : node;
    case SyntaxKind.CaseClause:
      return node.caseKeyword !== visitNode(node.caseKeyword, visitor) ||
        node.expression !== visitNode(node.expression, visitor) ||
        node.statements !== visitNodes(node.statements, visitor)
        ? createCaseClause(node.caseKeyword, node.expression, node.statements, node.start, node.end)
        : node;
    case SyntaxKind.DefaultClause:
      return node.defaultKeyword !== visitNode(node.defaultKeyword, visitor) ||
        node.statements !== visitNodes(node.statements, visitor)
        ? createDefaultClause(node.defaultKeyword, node.statements, node.start, node.end)
        : node;
    case SyntaxKind.Catch:
      return node.catchKeyword !== visitNode(node.catchKeyword, visitor) ||
        node.catchParameter !== visitNode(node.catchParameter, visitor) ||
        node.block !== visitNode(node.block, visitor)
        ? createCatch(node.catchKeyword, node.catchParameter, node.block, node.flags, node.start, node.end)
        : node;

    case SyntaxKind.DoWhileStatement:
      return node.doKeyword !== visitNode(node.doKeyword, visitor) ||
        node.expression !== visitNode(node.expression, visitor) ||
        node.whileKeyword !== visitNode(node.whileKeyword, visitor) ||
        node.statement !== visitNode(node.statement, visitor) ||
        node.statement !== visitNode(node.statement, visitor)
        ? createDoWhileStatement(
            node.doKeyword,
            node.expression,
            node.whileKeyword,
            node.statement,
            node.flags,
            node.start,
            node.end
          )
        : node;

    case SyntaxKind.IfStatement:
      return node.ifKeyword !== visitNode(node.ifKeyword, visitor) ||
        node.expression !== visitNode(node.expression, visitor) ||
        node.consequent !== visitNode(node.consequent, visitor) ||
        node.elseKeyword !== visitNode(node.elseKeyword, visitor) ||
        node.alternate !== visitNode(node.alternate, visitor)
        ? createIfStatement(
            node.ifKeyword,
            node.expression,
            node.consequent,
            node.elseKeyword,
            node.alternate,
            node.flags,
            node.start,
            node.end
          )
        : node;

    case SyntaxKind.LabelledStatement:
      return node.label !== visitNode(node.label, visitor) ||
        node.colonToken !== visitNode(node.colonToken, visitor) ||
        node.statement !== visitNode(node.statement, visitor)
        ? createLabelledStatement(node.label, node.colonToken, node.statement, node.flags, node.start, node.end)
        : node;

    case SyntaxKind.SwitchStatement:
      return node.switchKeyword !== visitNode(node.switchKeyword, visitor) ||
        node.expression !== visitNode(node.expression, visitor) ||
        node.caseBlock !== visitNode(node.caseBlock, visitor)
        ? createSwitchStatement(node.switchKeyword, node.expression, node.caseBlock, node.flags, node.start, node.end)
        : node;

    case SyntaxKind.ThrowStatement:
      return node.catchKeyword !== visitNode(node.catchKeyword, visitor) ||
        node.catchParameter !== visitNode(node.catchParameter, visitor) ||
        node.block !== visitNode(node.block, visitor)
        ? createCatch(node.catchKeyword, node.catchParameter, node.block, node.flags, node.start, node.end)
        : node;

    case SyntaxKind.CaseBlock:
      return node.clauses !== visitNodes(node.clauses, visitor)
        ? createCaseBlock(node.clauses, node.start, node.end)
        : node;
    case SyntaxKind.IndexExpression:
      return node.member !== visitNode(node.member, visitor) || node.expression !== visitNode(node.expression, visitor)
        ? createIndexExpression(node.member, node.expression, node.start, node.end)
        : node;
    case SyntaxKind.IndexExpressionChain:
      return node.chain !== visitNode(node.chain, visitor) || node.expression !== visitNode(node.expression, visitor)
        ? createIndexExpressionChain(node.chain, node.expression, node.start, node.end)
        : node;
    case SyntaxKind.MemberAccessChain:
      return node.chain !== visitNode(node.chain, visitor) || node.expression !== visitNode(node.expression, visitor)
        ? createMemberAccessChain(node.chain, node.expression, node.start, node.end)
        : node;

    case SyntaxKind.MemberAccessExpression:
      return node.catchKeyword !== visitNode(node.catchKeyword, visitor) ||
        node.catchParameter !== visitNode(node.catchParameter, visitor) ||
        node.block !== visitNode(node.block, visitor)
        ? createMemberAccessExpression(node.member, node.expression, node.start, node.end)
        : node;
    case SyntaxKind.StaticBlock:
      return node.decorators !== visitNode(node.decorators, visitor) ||
        node.declaredKeyword !== visitNode(node.declaredKeyword, visitor) ||
        node.block !== visitNode(node.block, visitor)
        ? createStaticBlock(node.decorators, node.declaredKeyword, node.staticKeyword, node.block, node.start, node.end)
        : node;
    case SyntaxKind.YieldExpression:
      return node.yieldKeyword !== visitNode(node.yieldKeyword, visitor) ||
        node.asteriskToken !== visitNode(node.asteriskToken, visitor) ||
        node.expression !== visitNode(node.expression, visitor)
        ? createYieldExpression(
            node.yieldKeyword,
            node.delegate,
            node.asteriskToken,
            node.expression,
            node.start,
            node.end
          )
        : node;
    case SyntaxKind.TryStatement:
      return node.tryKeyword !== visitNode(node.tryKeyword, visitor) ||
        node.block !== visitNode(node.block, visitor) ||
        node.catchClause !== visitNode(node.catchClause, visitor) ||
        node.finallyKeyword !== visitNode(node.finallyKeyword, visitor) ||
        node.finallyBlock !== visitNode(node.finallyBlock, visitor)
        ? createTryStatement(
            node.tryKeyword,
            node.block,
            node.catchClause,
            node.finallyKeyword,
            node.finallyBlock,
            node.start,
            node.end
          )
        : node;

    case SyntaxKind.WhileStatement:
      return node.whileKeyword !== visitNode(node.whileKeyword, visitor) ||
        node.expression !== visitNode(node.expression, visitor) ||
        node.statement !== visitNode(node.statement, visitor)
        ? createWhileStatement(node.whileKeyword, node.expression, node.statement, node.flags, node.start, node.end)
        : node;

    case SyntaxKind.WithStatement:
      return node.withKeyword !== visitNode(node.whileKeyword, visitor) ||
        node.expression !== visitNode(node.expression, visitor) ||
        node.statement !== visitNode(node.statement, visitor)
        ? createWithStatement(node.withKeyword, node.expression, node.statement, node.flags, node.start, node.end)
        : node;

    case SyntaxKind.FunctionDeclaration:
      return node.declareKeyword !== visitNode(node.declareKeyword, visitor) ||
        node.asyncKeyword !== visitNode(node.asyncKeyword, visitor) ||
        node.functionKeyword !== visitNode(node.functionKeyword, visitor) ||
        node.generatorToken !== visitNode(node.generatorToken, visitor) ||
        node.name !== visitNode(node.name, visitor) ||
        node.formalParameters !== visitNode(node.formalParameters, visitor) ||
        node.contents !== visitNode(node.contents, visitor) ||
        node.typeParameters !== visitNode(node.typeParameters, visitor) ||
        node.returnType !== visitNode(node.returnType, visitor)
        ? createFunctionDeclaration(
            node.declareKeyword,
            node.asyncKeyword,
            node.functionKeyword,
            node.generatorToken,
            node.name,
            node.formalParameters,
            node.contents,
            node.typeParameters,
            node.returnType,
            node.flags,
            node.start,
            node.end
          )
        : node;

    case SyntaxKind.FunctionExpression:
      return node.asyncKeyword !== visitNode(node.asyncKeyword, visitor) ||
        node.functionKeyword !== visitNode(node.functionKeyword, visitor) ||
        node.generatorToken !== visitNode(node.generatorToken, visitor) ||
        node.name !== visitNode(node.name, visitor) ||
        node.formalParameters !== visitNode(node.formalParameters, visitor) ||
        node.contents !== visitNode(node.contents, visitor) ||
        node.typeParameters !== visitNode(node.typeParameters, visitor) ||
        node.returnType !== visitNode(node.returnType, visitor)
        ? createFunctionExpression(
            node.asyncKeyword,
            node.functionKeyword,
            node.generatorToken,
            node.name,
            node.formalParameters,
            node.contents,
            node.typeParameters,
            node.returnType,
            node.flags,
            node.start,
            node.end
          )
        : node;

    case SyntaxKind.ArrayType:
      return node.type !== visitNode(node.type, visitor) ? createArrayType(node.type, node.start, node.end) : node;

    case SyntaxKind.TypeReference:
      return node.id !== visitNode(node.id, visitor) || node.typeParameters !== visitNode(node.typeParameters, visitor)
        ? createTypeReference(node.id, node.typeParameters, node.start, node.end)
        : node;

    case SyntaxKind.FunctionType:
      return node.functionTypeParameterList !== visitNode(node.functionTypeParameterList, visitor) ||
        node.returnType !== visitNode(node.returnType, visitor) ||
        node.typeParameters !== visitNode(node.typeParameters, visitor)
        ? createFunctionType(node.functionTypeParameterList, node.returnType, node.typeParameters, node.start, node.end)
        : node;

    case SyntaxKind.IndexedAccessType:
      return node.objectType !== visitNode(node.objectType, visitor) ||
        node.indexType !== visitNode(node.indexType, visitor)
        ? createIndexedAccessType(node.objectType, node.indexType, node.flags, node.start, node.end)
        : node;

    case SyntaxKind.IntersectionType:
      return node.types !== visitNodes(node.types, visitor)
        ? createIntersectionType(node.types, node.start, node.end)
        : node;

    case SyntaxKind.OptionalType:
      return node.optionalToken !== visitNode(node.optionalToken, visitor) ||
        node.type !== visitNode(node.type, visitor)
        ? createOptionalType(node.optionalToken, node.type, node.start, node.end)
        : node;

    case SyntaxKind.ParenthesizedType:
      return node.type !== visitNode(node.type, visitor)
        ? createParenthesizedType(node.type, node.start, node.end)
        : node;

    case SyntaxKind.RestType:
      return node.ellipsisToken !== visitNode(node.ellipsisToken, visitor) ||
        node.type !== visitNode(node.type, visitor)
        ? createRestType(node.ellipsisToken, node.type, node.start, node.end)
        : node;

    case SyntaxKind.TupleType:
      return node.elemmentTypes !== visitNodes(node.elemmentTypes, visitor)
        ? createTupleType(node.elemmentTypes, node.trailingComma, node.flags, node.start, node.end)
        : node;

    case SyntaxKind.TypeParameter:
      return node.name !== visitNode(node.name, visitor) ||
        node.type !== visitNode(node.type, visitor) ||
        node.defaultType !== visitNode(node.defaultType, visitor)
        ? createTypeParameter(node.name, node.type, node.defaultType, node.start, node.end)
        : node;

    case SyntaxKind.UnionType:
      return node.types !== visitNodes(node.types, visitor) ? createUnionType(node.types, node.start, node.end) : node;

    case SyntaxKind.DecoratorList:
      return node.elements !== visitNodes(node.elements, visitor)
        ? createDecoratorList(node.elements, node.start, node.end)
        : node;

    case SyntaxKind.Decorator:
      return node.decoratorToken !== visitNode(node.decoratorToken, visitor) ||
        node.expression !== visitNode(node.expression, visitor)
        ? createDecorator(node.decoratorToken, node.expression, node.flags, node.start, node.end)
        : node;

    case SyntaxKind.FormalParameterList:
      return node.formalParameterList !== visitParameterList(transform, node.formalParameterList, visitor)
        ? createFormalParameterList(node.formalParameterList, node.trailingComma, node.flags, node.start, node.end)
        : node;

    case SyntaxKind.ImportClause:
      return node.defaultBinding !== visitNode(node.defaultBinding, visitor) ||
        node.nameSpaceImport !== visitNode(node.nameSpaceImport, visitor) ||
        node.namedImports !== visitNode(node.namedImports, visitor)
        ? createImportClause(node.defaultBinding, node.nameSpaceImport, node.namedImports, node.start, node.end)
        : node;

    case SyntaxKind.ExportDefault:
      return node.exportKeyword !== visitNode(node.exportKeyword, visitor) ||
        node.defaultKeyword !== visitNode(node.defaultKeyword, visitor) ||
        node.declaration !== visitNode(node.declaration, visitor)
        ? createExportDefault(node.exportKeyword, node.defaultKeyword, node.declaration, node.start, node.end)
        : node;
    case SyntaxKind.NamespaceExportDeclaration:
      return node.name !== visitNode(node.name, visitor)
        ? createNamespaceExportDeclaration(node.name, node.flags, node.start, node.end)
        : node;

    case SyntaxKind.NameSpaceImport:
      return node.asteriskToken !== visitNode(node.asteriskToken, visitor) ||
        node.asKeyword !== visitNode(node.asKeyword, visitor) ||
        node.binding !== visitNode(node.binding, visitor)
        ? createNameSpaceImport(node.asteriskToken, node.asKeyword, node.binding, node.start, node.end)
        : node;
    case SyntaxKind.ExportDeclaration:
      return node.exportKeyword !== visitNode(node.exportKeyword, visitor) ||
        node.declaration !== visitNode(node.declaration, visitor) ||
        node.namedExports !== visitNode(node.namedExports, visitor) ||
        node.fromClause !== visitNode(node.fromClause, visitor) ||
        node.exportFromClause !== visitNode(node.exportFromClause, visitor)
        ? createExportDeclaration(
            node.exportKeyword,
            node.declaration,
            node.namedExports,
            node.fromClause,
            node.exportFromClause,
            node.exportKind,
            node.flags,
            node.start,
            node.end
          )
        : node;

    case SyntaxKind.ExportFromClause:
      return node.asteriskToken !== visitNode(node.asteriskToken, visitor) ||
        node.asKeyword !== visitNode(node.asKeyword, visitor) ||
        node.namedBinding !== visitNode(node.namedBinding, visitor) ||
        node.moduleExportName !== visitNode(node.moduleExportName, visitor)
        ? createExportFromClause(
            node.asteriskToken,
            node.asKeyword,
            node.namedBinding,
            node.moduleExportName,
            node.flags,
            node.start,
            node.end
          )
        : node;

    case SyntaxKind.ExportSpecifier:
      return node.moduleExportName !== visitNode(node.moduleExportName, visitor) ||
        node.name !== visitNode(node.name, visitor) ||
        node.binding !== visitNode(node.binding, visitor)
        ? createExportSpecifier(node.moduleExportName, node.name, node.asKeyword, node.binding, node.start, node.end)
        : node;

    case SyntaxKind.ExportsList:
      return node.specifiers !== visitNodes(node.specifiers, visitor)
        ? createExportsList(node.specifiers, node.start, node.end)
        : node;

    case SyntaxKind.ImportDeclaration:
      return node.importKeyword !== visitNode(node.importKeyword, visitor) ||
        node.typeKeyword !== visitNode(node.typeKeyword, visitor) ||
        node.fromClause !== visitNode(node.fromClause, visitor) ||
        node.moduleSpecifier !== visitNode(node.moduleSpecifier, visitor) ||
        node.importClause !== visitNode(node.importClause, visitor)
        ? createImportDeclaration(
            node.importKeyword,
            node.typeKeyword,
            node.typeofKeyword,
            node.fromClause,
            node.moduleSpecifier,
            node.importClause,
            node.flags,
            node.start,
            node.end
          )
        : node;

    case SyntaxKind.ImportSpecifier:
      return node.typeKeyword !== visitNode(node.typeKeyword, visitor) ||
        node.moduleExportName !== visitNode(node.moduleExportName, visitor) ||
        node.name !== visitNode(node.name, visitor) ||
        node.asKeyword !== visitNode(node.asKeyword, visitor) ||
        node.binding !== visitNode(node.binding, visitor)
        ? createImportSpecifier(
            node.typeKeyword,
            node.moduleExportName,
            node.name,
            node.asKeyword,
            node.binding,
            node.start,
            node.end
          )
        : node;

    case SyntaxKind.ImportsList:
      return node.specifiers !== visitNodes(node.specifiers, visitor)
        ? createImportsList(node.specifiers, node.flags, node.start, node.end)
        : node;

    case SyntaxKind.NamedExports:
      return node.exportsList !== visitNode(node.exportsList, visitor)
        ? createNamedExports(node.exportsList, node.flags, node.start, node.end)
        : node;

    case SyntaxKind.NamedImports:
      return node.importsList !== visitNode(node.importsList, visitor)
        ? createNamedImports(node.importsList, node.start, node.end)
        : node;

    case SyntaxKind.CallChain:
      return node.chain !== visitNode(node.chain, visitor) ||
        node.typeArguments !== visitNode(node.typeArguments, visitor) ||
        node.argumentList !== visitNode(node.argumentList, visitor)
        ? createCallChain(node.chain, node.typeArguments, node.argumentList, node.start, node.end)
        : node;
    case SyntaxKind.ArrowFunctionType:
      return node.arrowTypeParameterList !== visitNode(node.arrowTypeParameterList, visitor) ||
        node.arrowToken !== visitNode(node.arrowToken, visitor) ||
        node.returnType !== visitNode(node.returnType, visitor) ||
        node.typeParameters !== visitNode(node.typeParameters, visitor)
        ? createArrowFunctionType(
            node.arrowTypeParameterList,
            node.arrowToken,
            node.returnType,
            node.typeParameters,
            node.start,
            node.end
          )
        : node;
    case SyntaxKind.ArrowTypeParameter:
      return node.ellipsisToken !== visitNode(node.ellipsisToken, visitor) ||
        node.name !== visitNode(node.name, visitor) ||
        node.optionalToken !== visitNode(node.optionalToken, visitor) ||
        node.types !== visitNode(node.types, visitor)
        ? createArrowTypeParameter(node.ellipsisToken, node.name, node.optionalToken, node.types, node.start, node.end)
        : node;
    case SyntaxKind.ArrowTypeParameterList:
      return node.parameters !== visitNodes(node.parameters, visitor)
        ? createArrowTypeParameterList(node.parameters, node.trailinComma, node.start, node.end)
        : node;
    case SyntaxKind.FunctionTypeParameterList:
      return node.parameters !== visitNodes(node.parameters, visitor)
        ? createFunctionTypeParameterList(node.parameters, node.trailinComma, node.start, node.end)
        : node;

    case SyntaxKind.FunctionTypeParameter:
      return node.ellipsisToken !== visitNode(node.ellipsisToken, visitor) ||
        node.name !== visitNode(node.name, visitor) ||
        node.optionalToken !== visitNode(node.optionalToken, visitor) ||
        node.types !== visitNode(node.types, visitor)
        ? createFunctionTypeParameters(
            node.ellipsisToken,
            node.name,
            node.optionalToken,
            node.types,
            node.start,
            node.end
          )
        : node;
    case SyntaxKind.NullableType:
      return node.nullableToken !== visitNode(node.nullableToken, visitor) ||
        node.type !== visitNode(node.type, visitor)
        ? createNullableType(node.nullableToken, node.type, node.start, node.end)
        : node;
    case SyntaxKind.ObjectTypeCallProperty:
      return node.protoKeyword !== visitNode(node.protoKeyword, visitor) ||
        node.typeParameter !== visitNode(node.typeParameter, visitor) ||
        node.value !== visitNode(node.value, visitor) ||
        node.staticToken !== visitNode(node.staticToken, visitor) ||
        node.returnTYpe !== visitNode(node.returnTYpe, visitor)
        ? createObjectTypeCallProperty(
            node.protoKeyword,
            node.typeParameter,
            node.value,
            node.staticToken,
            node.returnTYpe,
            node.start,
            node.end
          )
        : node;
    case SyntaxKind.ObjectTypeIndexer:
      return node.protoKeyword !== visitNode(node.protoKeyword, visitor) ||
        node.name !== visitNode(node.name, visitor) ||
        node.key !== visitNode(node.key, visitor) ||
        node.staticToken !== visitNode(node.staticToken, visitor) ||
        node.type !== visitNode(node.type, visitor)
        ? createObjectTypeIndexer(
            node.protoKeyword,
            node.staticToken,
            node.name,
            node.key,
            node.type,
            node.start,
            node.end
          )
        : node;
    case SyntaxKind.ObjectTypeInternalSlot:
      return node.protoKeyword !== visitNode(node.protoKeyword, visitor) ||
        node.optionalToken !== visitNode(node.optionalToken, visitor) ||
        node.staticToken !== visitNode(node.staticToken, visitor) ||
        node.value !== visitNode(node.value, visitor)
        ? createObjectTypeInternalSlot(
            node.protoKeyword,
            node.name,
            node.optionalToken,
            node.staticToken,
            node.value,
            node.start,
            node.end
          )
        : node;
    case SyntaxKind.ObjectTypeProperty:
      return node.getKeyword !== visitNode(node.getKeyword, visitor) ||
        node.setKeyword !== visitNode(node.setKeyword, visitor) ||
        node.key !== visitNode(node.key, visitor) ||
        node.value !== visitNode(node.value, visitor) ||
        node.optionalToken !== visitNode(node.optionalToken, visitor) ||
        node.staticToken !== visitNode(node.staticToken, visitor) ||
        node.protoKeyword !== visitNode(node.protoKeyword, visitor)
        ? createObjectTypeProperty(
            node.getKeyword,
            node.setKeyword,
            node.key,
            node.value,
            node.optionalToken,
            node.staticToken,
            node.protoKeyword,
            node.start,
            node.end
          )
        : node;
    case SyntaxKind.OpaqueType:
      return node.declareToken !== visitNode(node.declareToken, visitor) ||
        node.opaqueToken !== visitNode(node.opaqueToken, visitor) ||
        node.typeToken !== visitNode(node.typeToken, visitor) ||
        node.name !== visitNode(node.name, visitor) ||
        node.typeParamters !== visitNode(node.typeParamters, visitor) ||
        node.superType !== visitNode(node.superType, visitor) ||
        node.impltype !== visitNode(node.impltype, visitor)
        ? createOpaqueType(
            node.declareToken,
            node.opaqueToken,
            node.typeToken,
            node.name,
            node.typeParamters,
            node.superType,
            node.impltype,
            node.start,
            node.end
          )
        : node;
    case SyntaxKind.QualifiedType:
      return node.qualification !== visitNode(node.qualification, visitor) || node.id !== visitNode(node.id, visitor)
        ? createQualifiedType(node.qualification, node.id, node.start, node.end)
        : node;
    case SyntaxKind.TypeInstantiations:
      return node.types !== visitNodes(node.types, visitor)
        ? createTypeInstantiations(node.types, node.trailingComma, node.start, node.end)
        : node;
    case SyntaxKind.TypeAnnotation:
      return node.bitwiseOrToken !== visitNode(node.bitwiseOrToken, visitor) ||
        node.bitwiseAndToken !== visitNode(node.bitwiseAndToken, visitor) ||
        node.type !== visitNode(node.type, visitor)
        ? createTypeAnnotation(node.bitwiseOrToken, node.bitwiseAndToken, node.type, node.start, node.end)
        : node;
    case SyntaxKind.TypeParameterDeclaration:
      return node.declarations !== visitNode(node.declarations, visitor)
        ? createTypeParameterDeclaration(node.declarations, node.flags, node.start, node.end)
        : node;

    case SyntaxKind.TypeParameterInstantiation:
      return node.typeInstantiations !== visitNode(node.typeInstantiations, visitor)
        ? createTypeParameterInstantiation(node.typeInstantiations, node.flags, node.start, node.end)
        : node;

    case SyntaxKind.TypeParameterList:
      return node.parameters !== visitNodes(node.parameters, visitor)
        ? createTypeParameterList(node.parameters, node.trailingComma, node.start, node.end)
        : node;

    case SyntaxKind.TypeofType:
      return node.typeOfKeyword !== visitNode(node.typeOfKeyword, visitor) ||
        node.type !== visitNode(node.type, visitor) ||
        node.start !== visitNode(node.start, visitor)
        ? createTypeofType(node.typeOfKeyword, node.type, node.start, node.end)
        : node;

    case SyntaxKind.FieldDefinition:
      return node.decorators !== visitNode(node.decorators, visitor) ||
        node.declaredToken !== visitNode(node.declaredToken, visitor) ||
        node.staticToken !== visitNode(node.staticToken, visitor) ||
        node.asyncKeyword !== visitNode(node.asyncKeyword, visitor) ||
        node.key !== visitNode(node.key, visitor) ||
        node.optionalToken !== visitNode(node.optionalToken, visitor) ||
        node.type !== visitNode(node.type, visitor) ||
        node.initializer !== visitNode(node.initializer, visitor)
        ? createFieldDefinition(
            node.decorators,
            node.declaredToken,
            node.staticToken,
            node.asyncKeyword,
            node.key,
            node.optionalToken,
            node.type,
            node.initializer,
            node.start,
            node.end
          )
        : node;

    case SyntaxKind.FunctionStatementList:
      return node.directives !== visitNodes(node.directives, visitor) ||
        node.statements !== visitNodes(node.statements, visitor)
        ? createFunctionStatementList(node.directives, node.statements, node.flags, node.start, node.end)
        : node;

    case SyntaxKind.FunctionBody:
      return node.functionStatementList !== visitNode(node.functionStatementList, visitor)
        ? createFunctionBody(node.functionStatementList, node.start, node.end)
        : node;

    case SyntaxKind.ImportCall:
      return node.importKeyword !== visitNode(node.importKeyword, visitor) ||
        node.expression !== visitNode(node.expression, visitor)
        ? createImportCall(node.importKeyword, node.expression, node.start, node.end)
        : node;

    case SyntaxKind.ThrowKeyword:
      return node.throwKeyword !== visitNode(node.throwKeyword, visitor) ||
        node.expression !== visitNode(node.expression, visitor)
        ? createThrowStatement(node.throwKeyword, node.expression, node.flags, node.start, node.end)
        : node;

    case SyntaxKind.MethodDefinition:
      return node.name !== visitNode(node.name, visitor) ||
        node.typeParameters !== visitNode(node.typeParameters, visitor) ||
        node.formalParameters !== visitNode(node.formalParameters, visitor) ||
        node.returnType !== visitNode(node.returnType, visitor) ||
        node.contents !== visitNode(node.contents, visitor)
        ? createMethodDefinition(
            node.name,
            node.typeParameters,
            node.formalParameters,
            node.returnType,
            node.contents,
            node.flags,
            node.start,
            node.end
          )
        : node;
  }
}

export function visitNode(node: Node, visitor: (node: any) => any, lift?: any): any | undefined {
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

export function visitParameterList(transform: Transform, nodes: any, visitor: any): any {
  startLexicalEnvironment(transform);
  let updated: any;
  if (nodes) {
    updated = visitNodes(nodes, visitor);
    transform.lexicalEnvironmentFlags = transform.lexicalEnvironmentFlags & ~LexicalEnvironmentFlags.InParameters;
  }
  transform.lexicalEnvironmentSuspended = true;
  return updated;
}

export function visitLexicalEnvironment(
  transform: Transform,
  statements: any,
  visitor: any,
  start?: number,
  _ensureUseStrict?: boolean
) {
  startLexicalEnvironment(transform);
  statements = visitNodes(statements, visitor, start);
  const declarations = endLexicalEnvironment(transform);
  return createNodeArray(concatenate(declarations as StatementNode[], statements));
}
