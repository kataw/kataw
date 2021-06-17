import { SyntaxKind, NodeFlags, SyntaxNode } from './ast/syntax-node';
import { createRootNode, RootNode } from './ast/rootNode';
import { StatementNode } from './ast/statements';
import { createAssignmentExpression, AssignmentExpression } from './ast/expressions/assignment-expr';
import { createExpressionStatement, ExpressionStatement } from './ast/statements/expression-stmt';
import { createArrayLiteral, ArrayLiteral } from './ast/expressions/array-literal';
import { createBinaryExpression, BinaryExpression } from './ast/expressions/binary-expr';
import { createArgumentList, ArgumentList } from './ast/expressions/argument-list';
import { createArrayBindingPattern } from './ast/expressions/array-binding-pattern';
import { createArrowFunction } from './ast/expressions/arrow-function';
import { createAwaitExpression } from './ast/expressions/await-expr';
import { createBindingElementList } from './ast/expressions/binding-element-list';
import { createBindingProperty } from './ast/expressions/binding-property';
import { createBindingElement } from './ast/expressions/binding-element';
import { createIndexExpression } from './ast/expressions/index-expr';
import { createIndexExpressionChain } from './ast/expressions/index-expr-chain';
import { createMemberAccessChain } from './ast/expressions/member-access-chain';
import { createMemberAccessExpression } from './ast/expressions/member-access-expr';
import { createStaticBlock } from './ast/expressions/static-block';
import { createYieldExpression } from './ast/expressions/yield-expr';
import { createBindingPropertyList } from './ast/expressions/binding-property-list';
import { createCallExpression } from './ast/expressions/call-expr';
import { createCallChain } from './ast/expressions/call-chain';
import { createClassBody } from './ast/expressions/class-body';
import { createClassTail } from './ast/expressions/class-tail';
import { createOptionalChain } from './ast/expressions/optional-chain';
import { createOptionalExpression } from './ast/expressions/optional-expr';
import { createCommaOperator } from './ast/expressions/comma-operator';
import { createTemplateSpan } from './ast/expressions/template-span';
import { createClassElement } from './ast/expressions/class-element';
import { createClassExpression } from './ast/expressions/class-expr';
import { createClassHeritage } from './ast/expressions/class-heritage';
import { createComputedPropertyName } from './ast/expressions/computed-property-name';
import { createConditionalExpression } from './ast/expressions/conditional-expr';
import { createCoverInitializedName } from './ast/expressions/cover-initialized-name';
import { createElementList, ElementList } from './ast/expressions/element-list';
import { createFieldDefinition } from './ast/expressions/field-definition';
import { createTaggedTemplate } from './ast/expressions/tagged-template';
import { createFunctionExpression } from './ast/expressions/function-expr';
import { createUnaryExpression } from './ast/expressions/unary-expr';
import { createFunctionStatementList } from './ast/expressions/function-stmt-list';
import { createFunctionBody } from './ast/expressions/function-body';
import { createImportCall } from './ast/expressions/import-call';
import { createMethodDefinition } from './ast/expressions/method-definition';
import { createNewExpression } from './ast/expressions/new-expr';
import { createObjectBindingPattern } from './ast/expressions/object-binding-pattern';
import { createObjectLiteral } from './ast/expressions/object-literal';
import { createParenthesizedExpression, ParenthesizedExpression } from './ast/expressions/parenthesized-expr';
import { createPostfixUpdateExpression } from './ast/expressions/postfix-update-expr';
import { createPrefixUpdateExpression } from './ast/expressions/prefix-update-expr';
import { createPropertyDefinition } from './ast/expressions/property-definition';
import { createPropertyDefinitionList } from './ast/expressions/property-definition-list';
import { createSpreadProperty } from './ast/expressions/spread-property';
import { createTemplateExpression } from './ast/expressions/template-expression';
import { createBindingList } from './ast/statements/binding-list';
import { createVariableStatement } from './ast/statements/variable-stmt';
import { createBlock } from './ast/statements/block';
import { createBlockStatement } from './ast/statements/block-stmt';
import { createBreakStatement } from './ast/statements/break-stmt';
import { createContinueStatement } from './ast/statements/continue-stmt';
import { createDefaultClause } from './ast/statements/default-clause';
import { createCaseClause } from './ast/statements/case-clause';
import { createDoWhileStatement } from './ast/statements/do-stmt';
import { createForInStatement } from './ast/statements/for-in-stmt';
import { createForOfStatement } from './ast/statements/for-of-stmt';
import { createForStatement } from './ast/statements/for-stmt';
import { createIfStatement } from './ast/statements/if-stmt';
import { createLabelledStatement } from './ast/statements/labelled-stmt';
import { createLexicalBinding } from './ast/statements/lexical-binding';
import { createReturnStatement } from './ast/statements/return-stmt';
import { createSwitchStatement } from './ast/statements/switch-stmt';
import { createThrowStatement } from './ast/statements/throw-stmt';
import { createCaseBlock } from './ast/statements/case-block';
import { createTryStatement } from './ast/statements/try-stmt';
import { createVariableDeclaration } from './ast/statements/variable-declaration';
import { createVariableDeclarationList } from './ast/statements/variable-declarationList';
import { createWhileStatement } from './ast/statements/while-stmt';
import { createWithStatement } from './ast/statements/with-stmt';
import { createFunctionDeclaration } from './ast/statements/function-declaration';
import { createLexicalDeclaration } from './ast/statements/lexical-declaration';
import { createClassDeclaration } from './ast/statements/class-declaration';
import { createCatch } from './ast/statements/catch-stmt';
import { createArrayType } from './ast/types/array-type';
import { createArrowFunctionType } from './ast/types/arrow-function-type';
import { createArrowTypeParameter } from './ast/types/arrow-type-parameter';
import { createArrowTypeParameterList } from './ast/types/arrow-type-parameter-list';
import { createFunctionTypeParameterList } from './ast/types/function-type-parameter-list';
import { createFunctionTypeParameters } from './ast/types/function-type-parameter';
import { createNullableType } from './ast/types/nullable-type';
import { createObjectTypeCallProperty } from './ast/types/object-type-call-property';
import { createObjectTypeIndexer } from './ast/types/object-type-indexer';
import { createObjectTypeInternalSlot } from './ast/types/object-type-internal-slot';
import { createObjectTypeProperty } from './ast/types/object-type-property';
import { createOpaqueType } from './ast/types/opaque-type';
import { createQualifiedType } from './ast/types/qualified-type';
import { createTypeInstantiations } from './ast/types/type-instantiations';
import { createTypeAnnotation } from './ast/types/type-annotation';
import { createTypeParameterDeclaration } from './ast/types/type-parameter-declaration';
import { createTypeParameterInstantiation } from './ast/types/type-parameter-instantiation';
import { createTypeParameterList } from './ast/types/type-parameter-list';
import { createTypeofType } from './ast/types/typeof-type';
import { createTypeReference } from './ast/types/type-reference';
import { createFunctionType } from './ast/types/function-type';
import { createIndexedAccessType } from './ast/types/indexed-access-type';
import { createIntersectionType } from './ast/types/intersection-type';
import { createOptionalType } from './ast/types/optional-type';
import { createParenthesizedType } from './ast/types/parenthesized-type';
import { createRestType } from './ast/types/rest-type';
import { createTupleType } from './ast/types/tuple-type';
import { createTypeParameter } from './ast/types/type-parameter';
import { createUnionType } from './ast/types/union-type';
import { createDecoratorList } from './ast/expressions/decorator-list';
import { createDecorator } from './ast/expressions/decorators';
import { createFormalParameterList } from './ast/expressions/formal-parameter-list';
import { createImportClause } from './ast/module/import-clause';
import { createNamespaceExportDeclaration } from './ast/module/namespace-export-declaration';
import { createNameSpaceImport } from './ast/module/namespace-import';
import { createExportDefault } from './ast/module/export-default';
import { createExportDeclaration } from './ast/module/export-declaration';
import { createExportFromClause } from './ast/module/export-from-clause';
import { createExportSpecifier } from './ast/module/export-specifier';
import { createExportsList } from './ast/module/exports-list';
import { createImportDeclaration } from './ast/module/import-declaration';
import { createImportSpecifier } from './ast/module/import-specifier';
import { createImportsList } from './ast/module/imports-list';
import { createNamedExports } from './ast/module/named-exports';
import { createNamedImports } from './ast/module/named-imports';
import { createSpreadElement } from './ast/expressions/spread-element';
import {
  Transform,
  createNodeArray,
  extractSingleNode,
  some,
  startLexicalEnvironment,
  endLexicalEnvironment,
  concatenate
} from './transform/core';

export function visitEachChild(
  transform: Transform,
  node: SyntaxNode,
  visitor: (node: StatementNode) => SyntaxKind
): any {
  const kind = (<any>node).kind;
  switch (kind) {
    case SyntaxKind.RootNode:
      return (<RootNode>node).statements !== visitLexicalEnvironment(transform, (<RootNode>node).statements, visitor)
        ? createRootNode(
            (<RootNode>node).directives,
            (<RootNode>node).statements,
            (<RootNode>node).isModule,
            (<RootNode>node).source,
            (<RootNode>node).fileName
          )
        : node;
    case SyntaxKind.AssignmentExpression:
      return (<AssignmentExpression>node).left !== visitNode((<AssignmentExpression>node).left, visitor) ||
        (<AssignmentExpression>node).operatorToken !== visitNode((<any>node).operatorToken, visitor) ||
        (<AssignmentExpression>node).right !== visitNode((<AssignmentExpression>node).right, visitor)
        ? createAssignmentExpression(
            (<AssignmentExpression>node).left,
            (<any>node).operatorToken,
            (<AssignmentExpression>node).right,
            (<AssignmentExpression>node).start,
            (<AssignmentExpression>node).end
          )
        : node;

    case SyntaxKind.ExpressionStatement:
      return (<ExpressionStatement>node).expression !== visitNode((<any>node).expression, visitor)
        ? createExpressionStatement(
            (<ExpressionStatement>node).expression,
            (<ExpressionStatement>node).start,
            (<ExpressionStatement>node).end
          )
        : node;
    case SyntaxKind.ElementList:
      return (<ElementList>node).elements !== visitNode((<ElementList>node).elements, visitor)
        ? createElementList(
            (<ElementList>node).elements,
            (<ElementList>node).trailingComma,
            (<ElementList>node).flags,
            (<ElementList>node).start,
            (<ElementList>node).end
          )
        : node;
    case SyntaxKind.ArrayLiteral:
      return (<ArrayLiteral>node).elementList !== visitNode((<ArrayLiteral>node).elementList, visitor)
        ? createArrayLiteral(
            (<ArrayLiteral>node).elementList,
            (<ArrayLiteral>node).flags,
            (<ArrayLiteral>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.ParenthesizedExpression:
      return (<ParenthesizedExpression>node).expression !==
        visitNode((<ParenthesizedExpression>node).expression, visitor)
        ? createParenthesizedExpression(
            (<ParenthesizedExpression>node).expression,
            (<ParenthesizedExpression>node).start,
            (<ParenthesizedExpression>node).end
          )
        : node;
    case SyntaxKind.BinaryExpression:
      return (<BinaryExpression>node).left !== visitNode((<BinaryExpression>node).left, visitor) ||
        (<BinaryExpression>node).operatorToken !== visitNode((<BinaryExpression>node).operatorToken, visitor) ||
        (<BinaryExpression>node).right !== visitNode((<BinaryExpression>node).right, visitor)
        ? createBinaryExpression(
            (<BinaryExpression>node).left,
            (<any>node).operatorToken,
            (<BinaryExpression>node).right,
            (<BinaryExpression>node).start,
            (<BinaryExpression>node).end
          )
        : node;
    case SyntaxKind.ObjectLiteral:
      return (<any>node).propertyList !== visitNode((<any>node).propertyList, visitor)
        ? createObjectLiteral((<any>node).propertyList, (<any>node).flags, (<any>node).start, (<any>node).end)
        : node;
    case SyntaxKind.PropertyDefinitionList:
      return (<any>node).properties !== visitNodes((<any>node).properties, visitor)
        ? createPropertyDefinitionList(
            (<any>node).properties,
            (<any>node).trailingComma,
            (<any>node).flags,
            (<any>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.PropertyDefinition:
      return (<any>node).generatorToken !== visitNode((<any>node).generatorToken, visitor) ||
        (<any>node).left !== visitNode((<any>node).left, visitor) ||
        (<any>node).right !== visitNode((<any>node).right, visitor)
        ? createPropertyDefinition(
            (<any>node).generatorToken,
            (<any>node).left,
            (<any>node).right,
            (<any>node).flags,
            (<any>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.ArgumentList:
      return (<ArgumentList>node).elements !== visitNodes((<ArgumentList>node).elements, visitor)
        ? createArgumentList(
            (<ArgumentList>node).elements,
            (<ArgumentList>node).trailingComma,
            (<ArgumentList>node).start,
            (<ArgumentList>node).end
          )
        : node;
    case SyntaxKind.Block:
      return (<any>node).statements !== visitNodes((<any>node).statements, visitor)
        ? createBlock((<any>node).statements, (<any>node).flags, (<any>node).start, (<any>node).end)
        : node;
    case SyntaxKind.ObjectBindingPattern:
      return (<any>node).propertyList !== visitNodes((<any>node).propertyList, visitor)
        ? createObjectBindingPattern((<any>node).propertyList, (<any>node).flags, (<any>node).start, (<any>node).end)
        : node;
    case SyntaxKind.CallExpression:
      return (<any>node).expression !== visitNode((<any>node).expression, visitor) ||
        (<any>node).argumentList !== visitNode((<any>node).argumentList, visitor)
        ? createCallExpression(
            (<any>node).expression,
            (<any>node).argumentList,
            (<any>node).flags,
            (<any>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.BindingElementList:
      return (<any>node).elements !== visitNodes((<any>node).elements, visitor)
        ? createBindingElementList(
            (<any>node).elements,
            (<any>node).trailingComma,
            (<any>node).flags,
            (<any>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.VariableStatement:
      return (<any>node).declareKeyword !== visitNode((<any>node).declareKeyword, visitor) ||
        (<any>node).varKeyword !== visitNode((<any>node).varKeyword, visitor) ||
        (<any>node).declarationList !== visitNode((<any>node).declarationList, visitor)
        ? createVariableStatement(
            (<any>node).declareKeyword,
            (<any>node).varKeyword,
            (<any>node).declarationList,
            (<any>node).flags,
            (<any>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.VariableDeclaration:
      return (<any>node).binding !== visitNode((<any>node).binding, visitor) ||
        (<any>node).optionalToken !== visitNode((<any>node).optionalToken, visitor) ||
        (<any>node).type !== visitNode((<any>node).type, visitor) ||
        (<any>node).initializer !== visitNode((<any>node).initializer, visitor)
        ? createVariableDeclaration(
            (<any>node).binding,
            (<any>node).optionalToken,
            (<any>node).type,
            (<any>node).initializer,
            (<any>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.VariableDeclarationList:
      return (<any>node).declarations !== visitNodes((<any>node).declarations, visitor)
        ? createVariableDeclarationList((<any>node).declarations, (<any>node).start, (<any>node).end)
        : node;
    case SyntaxKind.LexicalDeclaration:
      return (<any>node).lexicalKeyword !== visitNode((<any>node).lexicalKeyword, visitor) ||
        (<any>node).binding !== visitNode((<any>node).binding, visitor)
        ? createLexicalDeclaration((<any>node).lexicalKeyword, (<any>node).binding, (<any>node).start, (<any>node).end)
        : node;
    case SyntaxKind.ArrayBindingPattern:
      return (<any>node).elementList !== visitNodes((<any>node).elementList, visitor)
        ? createArrayBindingPattern((<any>node).elementList, (<any>node).flags, (<any>node).start, (<any>node).end)
        : node;
    case SyntaxKind.LexicalBinding:
      return (<any>node).binding !== visitNode((<any>node).binding, visitor) ||
        (<any>node).optionalToken !== visitNode((<any>node).optionalToken, visitor) ||
        (<any>node).type !== visitNode((<any>node).type, visitor) ||
        (<any>node).initializer !== visitNode((<any>node).initializer, visitor)
        ? createLexicalBinding(
            (<any>node).binding,
            (<any>node).optionalToken,
            (<any>node).type,
            (<any>node).initializer,
            (<any>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.BindingList:
      return (<any>node).bindingList !== visitNodes((<any>node).bindingList, visitor)
        ? createBindingList((<any>node).bindingList, (<any>node).flags, (<any>node).start, (<any>node).end)
        : node;
    case SyntaxKind.BindingPropertyList:
      return (<any>node).properties !== visitNodes((<any>node).properties, visitor)
        ? createBindingPropertyList(
            (<any>node).properties,
            (<any>node).flags,
            (<any>node).trailingComma,
            (<any>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.BlockStatement:
      return (<any>node).block !== visitNode((<any>node).block, visitor)
        ? createBlockStatement((<any>node).block, (<any>node).flags, (<any>node).start, (<any>node).end)
        : node;
    case SyntaxKind.ArrowFunction:
      return (<any>node).arrowToken !== visitNode((<any>node).arrowToken, visitor) ||
        (<any>node).typeParameters !== visitNode((<any>node).typeParameters, visitor) ||
        (<any>node).parameters !== visitNode((<any>node).parameters, visitor) ||
        (<any>node).asyncKeyword !== visitNode((<any>node).asyncKeyword, visitor) ||
        (<any>node).returnType !== visitNode((<any>node).returnType, visitor) ||
        (<any>node).contents !== visitFunctionBody(transform, (<any>node).contents, visitor)
        ? createArrowFunction(
            (<any>node).arrowToken,
            (<any>node).typeParameters,
            (<any>node).parameters,
            (<any>node).asyncKeyword,
            (<any>node).returnType,
            (<any>node).contents,
            (<any>node).flags,
            (<any>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.AwaitExpression:
      return (<any>node).awaitKeyword !== visitNode((<any>node).awaitKeyword, visitor) ||
        (<any>node).expression !== visitNode((<any>node).expression, visitor)
        ? createAwaitExpression((<any>node).awaitKeyword, (<any>node).expression, (<any>node).start, (<any>node).end)
        : node;
    case SyntaxKind.BindingElement:
      return (<any>node).ellipsisToken !== visitNode((<any>node).ellipsisToken, visitor) ||
        (<any>node).left !== visitNode((<any>node).left, visitor) ||
        (<any>node).optionalToken !== visitNode((<any>node).optionalToken, visitor) ||
        (<any>node).type !== visitNode((<any>node).type, visitor) ||
        (<any>node).right !== visitNode((<any>node).right, visitor)
        ? createBindingElement(
            (<any>node).ellipsisToken,
            (<any>node).left,
            (<any>node).optionalToken,
            (<any>node).type,
            (<any>node).right,
            (<any>node).flags,
            (<any>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.BindingProperty:
      return (<any>node).ellipsisToken !== visitNode((<any>node).ellipsisToken, visitor) ||
        (<any>node).key !== visitNode((<any>node).key, visitor) ||
        (<any>node).value !== visitNode((<any>node).value, visitor) ||
        (<any>node).initializer !== visitNode((<any>node).initializer, visitor)
        ? createBindingProperty(
            (<any>node).ellipsisToken,
            (<any>node).key,
            (<any>node).value,
            (<any>node).initializer,
            (<any>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.OptionalExpression:
      return (<any>node).chainToken !== visitNode((<any>node).chainToken, visitor) ||
        (<any>node).member !== visitNode((<any>node).member, visitor) ||
        (<any>node).chain !== visitNode((<any>node).chain, visitor)
        ? createOptionalExpression(
            (<any>node).chainToken,
            (<any>node).member,
            (<any>node).chain,
            (<any>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.OptionalChain:
      return (<any>node).chain !== visitNode((<any>node).chain, visitor)
        ? createOptionalChain((<any>node).chain, (<any>node).start, (<any>node).end)
        : node;
    case SyntaxKind.ClassHeritage:
      return (<any>node).extendsKeyword !== visitNode((<any>node).extendsKeyword, visitor) ||
        (<any>node).expression !== visitNode((<any>node).expression, visitor) ||
        (<any>node).typeParameter !== visitNode((<any>node).typeParameter, visitor)
        ? createClassHeritage(
            (<any>node).extendsKeyword,
            (<any>node).expression,
            (<any>node).typeParameter,
            (<any>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.ClassBody:
      return (<any>node).elements !== visitNodes((<any>node).elements, visitor)
        ? createClassBody((<any>node).elements, (<any>node).start, (<any>node).end)
        : node;
    case SyntaxKind.ClassTail:
      return (<any>node).classHeritage !== visitNode((<any>node).classHeritage, visitor) ||
        (<any>node).body !== visitNode((<any>node).body, visitor)
        ? createClassTail(
            (<any>node).classHeritage,
            (<any>node).body,
            (<any>node).flags,
            (<any>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.ClassDeclaration:
      return (<any>node).declareKeyword !== visitNode((<any>node).declareKeyword, visitor) ||
        (<any>node).decorators !== visitNode((<any>node).decorators, visitor) ||
        (<any>node).classKeyword !== visitNode((<any>node).classKeyword, visitor) ||
        (<any>node).name !== visitNode((<any>node).name, visitor) ||
        (<any>node).typeParameters !== visitNode((<any>node).typeParameters, visitor) ||
        (<any>node).tail !== visitNode((<any>node).tail, visitor)
        ? createClassDeclaration(
            (<any>node).declareKeyword,
            (<any>node).decorators,
            (<any>node).classKeyword,
            (<any>node).name,
            (<any>node).typeParameters,
            (<any>node).tail,
            (<any>node).flags,
            (<any>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.CommaOperator:
      return (<any>node).expressions !== visitNodes((<any>node).expressions, visitor)
        ? createCommaOperator((<any>node).expressions, (<any>node).start, (<any>node).end)
        : node;
    case SyntaxKind.ComputedPropertyName:
      return (<any>node).expression !== visitNode((<any>node).expression, visitor)
        ? createComputedPropertyName((<any>node).expression, (<any>node).start, (<any>node).end)
        : node;
    case SyntaxKind.ConditionalExpression:
      return (<any>node).shortCircuit !== visitNode((<any>node).shortCircuit, visitor) ||
        (<any>node).questionToken !== visitNode((<any>node).questionToken, visitor) ||
        (<any>node).colonToken !== visitNode((<any>node).colonToken, visitor) ||
        (<any>node).alternate !== visitNode((<any>node).alternate, visitor)
        ? createConditionalExpression(
            (<any>node).shortCircuit,
            (<any>node).questionToken,
            (<any>node).consequent,
            (<any>node).colonToken,
            (<any>node).alternate,
            (<any>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.CoverInitializedName:
      return (<any>node).left !== visitNode((<any>node).left, visitor) ||
        (<any>node).right !== visitNode((<any>node).right, visitor)
        ? createCoverInitializedName((<any>node).left, (<any>node).right, (<any>node).start, (<any>node).end)
        : node;
    case SyntaxKind.ReturnStatement:
      return (<any>node).returnKeyword !== visitNode((<any>node).returnKeyword, visitor) ||
        (<any>node).expression !== visitNode((<any>node).expression, visitor)
        ? createReturnStatement(
            (<any>node).returnKeyword,
            (<any>node).expression,
            (<any>node).flags,
            (<any>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.UnaryExpression:
      return (<any>node).operandToken !== visitNode((<any>node).operandToken, visitor) ||
        (<any>node).operand !== visitNode((<any>node).operand, visitor)
        ? createUnaryExpression((<any>node).operandToken, (<any>node).operand, (<any>node).start, (<any>node).end)
        : node;
    case SyntaxKind.PostfixUpdateExpression:
      return (<any>node).operandToken !== visitNode((<any>node).operandToken, visitor) ||
        (<any>node).operand !== visitNode((<any>node).operand, visitor)
        ? createPostfixUpdateExpression(
            (<any>node).operandToken,
            (<any>node).operand,
            (<any>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.PrefixUpdateExpression:
      return (<any>node).operandToken !== visitNode((<any>node).operandToken, visitor) ||
        (<any>node).operand !== visitNode((<any>node).operand, visitor)
        ? createPrefixUpdateExpression(
            (<any>node).operandToken,
            (<any>node).operand,
            (<any>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.NewExpression:
      return (<any>node).newKeyword !== visitNode((<any>node).newKeyword, visitor) ||
        (<any>node).expression !== visitNode((<any>node).expression, visitor) ||
        (<any>node).argumentList !== visitNode((<any>node).argumentList, visitor)
        ? createNewExpression(
            (<any>node).newKeyword,
            (<any>node).expression,
            (<any>node).argumentList,
            (<any>node).flags,
            (<any>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.SpreadProperty:
      return (<any>node).ellipsisToken !== visitNode((<any>node).ellipsisToken, visitor) ||
        (<any>node).argument !== visitNode((<any>node).argument, visitor)
        ? createSpreadProperty((<any>node).ellipsisToken, (<any>node).argument, (<any>node).start, (<any>node).end)
        : node;
    case SyntaxKind.ForInStatement:
      return (<any>node).forKeyword !== visitNode((<any>node).forKeyword, visitor) ||
        (<any>node).infKeyword !== visitNode((<any>node).inKeyword, visitor) ||
        (<any>node).initializer !== visitNode((<any>node).initializer, visitor) ||
        (<any>node).expression !== visitNode((<any>node).expression, visitor) ||
        (<any>node).statement !== visitNode((<any>node).statement, visitor)
        ? createForInStatement(
            (<any>node).forKeyword,
            (<any>node).inKeyword,
            (<any>node).initializer,
            (<any>node).expression,
            (<any>node).statement,
            (<any>node).flags,
            (<any>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.ForOfStatement:
      return (<any>node).forKeyword !== visitNode((<any>node).forKeyword, visitor) ||
        (<any>node).ofKeyword !== visitNode((<any>node).ofKeyword, visitor) ||
        (<any>node).initializer !== visitNode((<any>node).initializer, visitor) ||
        (<any>node).expression !== visitNode((<any>node).expression, visitor) ||
        (<any>node).statement !== visitNode((<any>node).statement, visitor) ||
        (<any>node).awaitKeyword !== visitNode((<any>node).awaitKeyword, visitor)
        ? createForOfStatement(
            (<any>node).forKeyword,
            (<any>node).ofKeyword,
            (<any>node).initializer,
            (<any>node).expression,
            (<any>node).statement,
            (<any>node).awaitKeyword,
            (<any>node).flags,
            (<any>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.ForStatement:
      return (<any>node).forKeyword !== visitNode((<any>node).forKeyword, visitor) ||
        (<any>node).initializer !== visitNode((<any>node).initializer, visitor) ||
        (<any>node).condition !== visitNode((<any>node).condition, visitor) ||
        (<any>node).incrementor !== visitNode((<any>node).incrementor, visitor) ||
        (<any>node).statement !== visitNode((<any>node).statement, visitor)
        ? createForStatement(
            (<any>node).forKeyword,
            (<any>node).initializer,
            (<any>node).condition,
            (<any>node).incrementor,
            (<any>node).statement,
            (<any>node).flags,
            (<any>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.TaggedTemplate:
      return (<any>node).member !== visitNode((<any>node).member, visitor) ||
        (<any>node).template !== visitNode((<any>node).template, visitor)
        ? createTaggedTemplate((<any>node).member, (<any>node).template, (<any>node).start, (<any>node).end)
        : node;
    case SyntaxKind.SpreadElement:
      return (<any>node).ellipsisToken !== visitNode((<any>node).ellipsisToken, visitor) ||
        (<any>node).argument !== visitNode((<any>node).argument, visitor)
        ? createSpreadElement((<any>node).ellipsisToken, (<any>node).argument, (<any>node).start, (<any>node).end)
        : node;
    case SyntaxKind.TemplateExpression:
      return (<any>node).spans !== visitNodes((<any>node).spans, visitor) ||
        (<any>node).tail !== visitNode((<any>node).tail, visitor)
        ? createTemplateExpression(
            (<any>node).spans,
            (<any>node).tail,
            (<any>node).flags,
            (<any>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.TemplateSpan:
      return (<any>node).expression !== visitNode((<any>node).expression, visitor)
        ? createTemplateSpan(
            (<any>node).rawText,
            (<any>node).text,
            (<any>node).expression,
            (<any>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.ClassElement:
      return (<any>node).declareToken !== visitNode((<any>node).declareToken, visitor) ||
        (<any>node).decorators !== visitNode((<any>node).decorators, visitor) ||
        (<any>node).generatorToken !== visitNode((<any>node).generatorToken, visitor) ||
        (<any>node).staticKeyword !== visitNode((<any>node).staticKeyword, visitor) ||
        (<any>node).asyncKeyword !== visitNode((<any>node).asyncKeyword, visitor) ||
        (<any>node).setKeyword !== visitNode((<any>node).setKeyword, visitor) ||
        (<any>node).getKeyword !== visitNode((<any>node).getKeyword, visitor) ||
        (<any>node).method !== visitNode((<any>node).method, visitor)
        ? createClassElement(
            (<any>node).declareToken,
            (<any>node).decorators,
            (<any>node).generatorToken,
            (<any>node).staticKeyword,
            (<any>node).asyncKeyword,
            (<any>node).setKeyword,
            (<any>node).getKeyword,
            (<any>node).method,
            (<any>node).flags,
            (<any>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.ClassExpression:
      return (<any>node).decorators !== visitNode((<any>node).decorators, visitor) ||
        (<any>node).classKeyword !== visitNode((<any>node).classKeyword, visitor) ||
        (<any>node).name !== visitNode((<any>node).name, visitor) ||
        (<any>node).typeParameters !== visitNode((<any>node).typeParameters, visitor) ||
        (<any>node).tail !== visitNode((<any>node).tail, visitor)
        ? createClassExpression(
            (<any>node).decorators,
            (<any>node).classKeyword,
            (<any>node).name,
            (<any>node).typeParameters,
            (<any>node).tail,
            (<any>node).flags,
            (<any>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.BreakStatement:
      return (<any>node).continueKeyword !== visitNode((<any>node).continueKeyword, visitor) ||
        (<any>node).label !== visitNode((<any>node).label, visitor)
        ? createBreakStatement((<any>node).continueKeyword, (<any>node).label, (<any>node).start, (<any>node).end)
        : node;
    case SyntaxKind.ContinueStatement:
      return (<any>node).continueKeyword !== visitNode((<any>node).continueKeyword, visitor) ||
        (<any>node).label !== visitNode((<any>node).label, visitor)
        ? createContinueStatement((<any>node).continueKeyword, (<any>node).label, (<any>node).start, (<any>node).end)
        : node;
    case SyntaxKind.CaseClause:
      return (<any>node).caseKeyword !== visitNode((<any>node).caseKeyword, visitor) ||
        (<any>node).expression !== visitNode((<any>node).expression, visitor) ||
        (<any>node).statements !== visitNodes((<any>node).statements, visitor)
        ? createCaseClause(
            (<any>node).caseKeyword,
            (<any>node).expression,
            (<any>node).statements,
            (<any>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.DefaultClause:
      return (<any>node).defaultKeyword !== visitNode((<any>node).defaultKeyword, visitor) ||
        (<any>node).statements !== visitNodes((<any>node).statements, visitor)
        ? createDefaultClause((<any>node).defaultKeyword, (<any>node).statements, (<any>node).start, (<any>node).end)
        : node;
    case SyntaxKind.Catch:
      return (<any>node).catchKeyword !== visitNode((<any>node).catchKeyword, visitor) ||
        (<any>node).catchParameter !== visitNode((<any>node).catchParameter, visitor) ||
        (<any>node).block !== visitNode((<any>node).block, visitor)
        ? createCatch(
            (<any>node).catchKeyword,
            (<any>node).catchParameter,
            (<any>node).block,
            (<any>node).flags,
            (<any>node).start,
            (<any>node).end
          )
        : node;

    case SyntaxKind.DoWhileStatement:
      return (<any>node).doKeyword !== visitNode((<any>node).doKeyword, visitor) ||
        (<any>node).expression !== visitNode((<any>node).expression, visitor) ||
        (<any>node).whileKeyword !== visitNode((<any>node).whileKeyword, visitor) ||
        (<any>node).statement !== visitNode((<any>node).statement, visitor) ||
        (<any>node).statement !== visitNode((<any>node).statement, visitor)
        ? createDoWhileStatement(
            (<any>node).doKeyword,
            (<any>node).expression,
            (<any>node).whileKeyword,
            (<any>node).statement,
            (<any>node).flags,
            (<any>node).start,
            (<any>node).end
          )
        : node;

    case SyntaxKind.IfStatement:
      return (<any>node).ifKeyword !== visitNode((<any>node).ifKeyword, visitor) ||
        (<any>node).expression !== visitNode((<any>node).expression, visitor) ||
        (<any>node).consequent !== visitNode((<any>node).consequent, visitor) ||
        (<any>node).elseKeyword !== visitNode((<any>node).elseKeyword, visitor) ||
        (<any>node).alternate !== visitNode((<any>node).alternate, visitor)
        ? createIfStatement(
            (<any>node).ifKeyword,
            (<any>node).expression,
            (<any>node).consequent,
            (<any>node).elseKeyword,
            (<any>node).alternate,
            (<any>node).flags,
            (<any>node).start,
            (<any>node).end
          )
        : node;

    case SyntaxKind.LabelledStatement:
      return (<any>node).label !== visitNode((<any>node).label, visitor) ||
        (<any>node).colonToken !== visitNode((<any>node).colonToken, visitor) ||
        (<any>node).statement !== visitNode((<any>node).statement, visitor)
        ? createLabelledStatement(
            (<any>node).label,
            (<any>node).colonToken,
            (<any>node).statement,
            (<any>node).flags,
            (<any>node).start,
            (<any>node).end
          )
        : node;

    case SyntaxKind.SwitchStatement:
      return (<any>node).switchKeyword !== visitNode((<any>node).switchKeyword, visitor) ||
        (<any>node).expression !== visitNode((<any>node).expression, visitor) ||
        (<any>node).caseBlock !== visitNode((<any>node).caseBlock, visitor)
        ? createSwitchStatement(
            (<any>node).switchKeyword,
            (<any>node).expression,
            (<any>node).caseBlock,
            (<any>node).flags,
            (<any>node).start,
            (<any>node).end
          )
        : node;

    case SyntaxKind.ThrowStatement:
      return (<any>node).catchKeyword !== visitNode((<any>node).catchKeyword, visitor) ||
        (<any>node).catchParameter !== visitNode((<any>node).catchParameter, visitor) ||
        (<any>node).block !== visitNode((<any>node).block, visitor)
        ? createCatch(
            (<any>node).catchKeyword,
            (<any>node).catchParameter,
            (<any>node).block,
            (<any>node).flags,
            (<any>node).start,
            (<any>node).end
          )
        : node;

    case SyntaxKind.CaseBlock:
      return (<any>node).clauses !== visitNodes((<any>node).clauses, visitor)
        ? createCaseBlock((<any>node).clauses, (<any>node).start, (<any>node).end)
        : node;
    case SyntaxKind.IndexExpression:
      return (<any>node).member !== visitNode((<any>node).member, visitor) ||
        (<any>node).expression !== visitNode((<any>node).expression, visitor)
        ? createIndexExpression((<any>node).member, (<any>node).expression, (<any>node).start, (<any>node).end)
        : node;
    case SyntaxKind.IndexExpressionChain:
      return (<any>node).chain !== visitNode((<any>node).chain, visitor) ||
        (<any>node).expression !== visitNode((<any>node).expression, visitor)
        ? createIndexExpressionChain((<any>node).chain, (<any>node).expression, (<any>node).start, (<any>node).end)
        : node;
    case SyntaxKind.MemberAccessChain:
      return (<any>node).chain !== visitNode((<any>node).chain, visitor) ||
        (<any>node).expression !== visitNode((<any>node).expression, visitor)
        ? createMemberAccessChain((<any>node).chain, (<any>node).expression, (<any>node).start, (<any>node).end)
        : node;

    case SyntaxKind.MemberAccessExpression:
      return (<any>node).catchKeyword !== visitNode((<any>node).catchKeyword, visitor) ||
        (<any>node).catchParameter !== visitNode((<any>node).catchParameter, visitor) ||
        (<any>node).block !== visitNode((<any>node).block, visitor)
        ? createMemberAccessExpression((<any>node).member, (<any>node).expression, (<any>node).start, (<any>node).end)
        : node;
    case SyntaxKind.StaticBlock:
      return (<any>node).decorators !== visitNode((<any>node).decorators, visitor) ||
        (<any>node).declaredKeyword !== visitNode((<any>node).declaredKeyword, visitor) ||
        (<any>node).block !== visitNode((<any>node).block, visitor)
        ? createStaticBlock(
            (<any>node).decorators,
            (<any>node).declaredKeyword,
            (<any>node).staticKeyword,
            (<any>node).block,
            (<any>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.YieldExpression:
      return (<any>node).yieldKeyword !== visitNode((<any>node).yieldKeyword, visitor) ||
        (<any>node).asteriskToken !== visitNode((<any>node).asteriskToken, visitor) ||
        (<any>node).expression !== visitNode((<any>node).expression, visitor)
        ? createYieldExpression(
            (<any>node).yieldKeyword,
            (<any>node).delegate,
            (<any>node).asteriskToken,
            (<any>node).expression,
            (<any>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.TryStatement:
      return (<any>node).tryKeyword !== visitNode((<any>node).tryKeyword, visitor) ||
        (<any>node).block !== visitNode((<any>node).block, visitor) ||
        (<any>node).catchClause !== visitNode((<any>node).catchClause, visitor) ||
        (<any>node).finallyKeyword !== visitNode((<any>node).finallyKeyword, visitor) ||
        (<any>node).finallyBlock !== visitNode((<any>node).finallyBlock, visitor)
        ? createTryStatement(
            (<any>node).tryKeyword,
            (<any>node).block,
            (<any>node).catchClause,
            (<any>node).finallyKeyword,
            (<any>node).finallyBlock,
            (<any>node).start,
            (<any>node).end
          )
        : node;

    case SyntaxKind.WhileStatement:
      return (<any>node).whileKeyword !== visitNode((<any>node).whileKeyword, visitor) ||
        (<any>node).expression !== visitNode((<any>node).expression, visitor) ||
        (<any>node).statement !== visitNode((<any>node).statement, visitor)
        ? createWhileStatement(
            (<any>node).whileKeyword,
            (<any>node).expression,
            (<any>node).statement,
            (<any>node).flags,
            (<any>node).start,
            (<any>node).end
          )
        : node;

    case SyntaxKind.WithStatement:
      return (<any>node).withKeyword !== visitNode((<any>node).whileKeyword, visitor) ||
        (<any>node).expression !== visitNode((<any>node).expression, visitor) ||
        (<any>node).statement !== visitNode((<any>node).statement, visitor)
        ? createWithStatement(
            (<any>node).withKeyword,
            (<any>node).expression,
            (<any>node).statement,
            (<any>node).flags,
            (<any>node).start,
            (<any>node).end
          )
        : node;

    case SyntaxKind.FunctionDeclaration:
      return (<any>node).declareKeyword !== visitNode((<any>node).declareKeyword, visitor) ||
        (<any>node).asyncKeyword !== visitNode((<any>node).asyncKeyword, visitor) ||
        (<any>node).generatorToken !== visitNode((<any>node).generatorToken, visitor) ||
        (<any>node).formalParameters !== visitNode((<any>node).formalParameters, visitor) ||
        (<any>node).contents !== visitFunctionBody(transform, (<any>node).contents, visitor) ||
        (<any>node).typeParameters !== visitNode((<any>node).typeParameters, visitor) ||
        (<any>node).returnType !== visitNode((<any>node).returnType, visitor)
        ? createFunctionDeclaration(
            (<any>node).declareKeyword,
            (<any>node).asyncKeyword,
            (<any>node).functionKeyword,
            (<any>node).generatorToken,
            (<any>node).name,
            (<any>node).formalParameters,
            (<any>node).contents,
            (<any>node).typeParameters,
            (<any>node).returnType,
            (<any>node).flags,
            (<any>node).start,
            (<any>node).end
          )
        : node;

    case SyntaxKind.FunctionExpression:
      return (<any>node).asyncKeyword !== visitNode((<any>node).asyncKeyword, visitor) ||
        (<any>node).functionKeyword !== visitNode((<any>node).functionKeyword, visitor) ||
        (<any>node).generatorToken !== visitNode((<any>node).generatorToken, visitor) ||
        (<any>node).name !== visitNode((<any>node).name, visitor) ||
        (<any>node).formalParameters !== visitNode((<any>node).formalParameters, visitor) ||
        (<any>node).contents !== visitFunctionBody(transform, (<any>node).contents, visitor) ||
        (<any>node).typeParameters !== visitNode((<any>node).typeParameters, visitor) ||
        (<any>node).returnType !== visitNode((<any>node).returnType, visitor)
        ? createFunctionExpression(
            (<any>node).asyncKeyword,
            (<any>node).functionKeyword,
            (<any>node).generatorToken,
            (<any>node).name,
            (<any>node).formalParameters,
            (<any>node).contents,
            (<any>node).typeParameters,
            (<any>node).returnType,
            (<any>node).flags,
            (<any>node).start,
            (<any>node).end
          )
        : node;

    case SyntaxKind.ArrayType:
      return (<any>node).type !== visitNode((<any>node).type, visitor)
        ? createArrayType((<any>node).type, (<any>node).start, (<any>node).end)
        : node;

    case SyntaxKind.TypeReference:
      return (<any>node).id !== visitNode((<any>node).id, visitor) ||
        (<any>node).typeParameters !== visitNode((<any>node).typeParameters, visitor)
        ? createTypeReference((<any>node).id, (<any>node).typeParameters, (<any>node).start, (<any>node).end)
        : node;

    case SyntaxKind.FunctionType:
      return (<any>node).functionTypeParameterList !== visitNode((<any>node).functionTypeParameterList, visitor) ||
        (<any>node).returnType !== visitNode((<any>node).returnType, visitor) ||
        (<any>node).typeParameters !== visitNode((<any>node).typeParameters, visitor)
        ? createFunctionType(
            (<any>node).functionTypeParameterList,
            (<any>node).returnType,
            (<any>node).typeParameters,
            (<any>node).start,
            (<any>node).end
          )
        : node;

    case SyntaxKind.IndexedAccessType:
      return (<any>node).objectType !== visitNode((<any>node).objectType, visitor) ||
        (<any>node).indexType !== visitNode((<any>node).indexType, visitor)
        ? createIndexedAccessType(
            (<any>node).objectType,
            (<any>node).indexType,
            (<any>node).flags,
            (<any>node).start,
            (<any>node).end
          )
        : node;

    case SyntaxKind.IntersectionType:
      return (<any>node).types !== visitNodes((<any>node).types, visitor)
        ? createIntersectionType((<any>node).types, (<any>node).start, (<any>node).end)
        : node;

    case SyntaxKind.OptionalType:
      return (<any>node).optionalToken !== visitNode((<any>node).optionalToken, visitor) ||
        (<any>node).type !== visitNode((<any>node).type, visitor)
        ? createOptionalType((<any>node).optionalToken, (<any>node).type, (<any>node).start, (<any>node).end)
        : node;

    case SyntaxKind.ParenthesizedType:
      return (<any>node).type !== visitNode((<any>node).type, visitor)
        ? createParenthesizedType((<any>node).type, (<any>node).start, (<any>node).end)
        : node;

    case SyntaxKind.RestType:
      return (<any>node).ellipsisToken !== visitNode((<any>node).ellipsisToken, visitor) ||
        (<any>node).type !== visitNode((<any>node).type, visitor)
        ? createRestType((<any>node).ellipsisToken, (<any>node).type, (<any>node).start, (<any>node).end)
        : node;

    case SyntaxKind.TupleType:
      return (<any>node).elemmentTypes !== visitNodes((<any>node).elemmentTypes, visitor)
        ? createTupleType(
            (<any>node).elemmentTypes,
            (<any>node).trailingComma,
            (<any>node).flags,
            (<any>node).start,
            (<any>node).end
          )
        : node;

    case SyntaxKind.TypeParameter:
      return (<any>node).name !== visitNode((<any>node).name, visitor) ||
        (<any>node).type !== visitNode((<any>node).type, visitor) ||
        (<any>node).defaultType !== visitNode((<any>node).defaultType, visitor)
        ? createTypeParameter(
            (<any>node).name,
            (<any>node).type,
            (<any>node).defaultType,
            (<any>node).start,
            (<any>node).end
          )
        : node;

    case SyntaxKind.UnionType:
      return (<any>node).types !== visitNodes((<any>node).types, visitor)
        ? createUnionType((<any>node).types, (<any>node).start, (<any>node).end)
        : node;

    case SyntaxKind.DecoratorList:
      return (<any>node).elements !== visitNodes((<any>node).elements, visitor)
        ? createDecoratorList((<any>node).elements, (<any>node).start, (<any>node).end)
        : node;

    case SyntaxKind.Decorator:
      return (<any>node).decoratorToken !== visitNode((<any>node).decoratorToken, visitor) ||
        (<any>node).expression !== visitNode((<any>node).expression, visitor)
        ? createDecorator(
            (<any>node).decoratorToken,
            (<any>node).expression,
            (<any>node).flags,
            (<any>node).start,
            (<any>node).end
          )
        : node;

    case SyntaxKind.FormalParameterList:
      return (<any>node).formalParameterList !== visitParameterList(transform, (<any>node).formalParameterList, visitor)
        ? createFormalParameterList(
            (<any>node).formalParameterList,
            (<any>node).trailingComma,
            (<any>node).flags,
            (<any>node).start,
            (<any>node).end
          )
        : node;

    case SyntaxKind.ImportClause:
      return (<any>node).defaultBinding !== visitNode((<any>node).defaultBinding, visitor) ||
        (<any>node).nameSpaceImport !== visitNode((<any>node).nameSpaceImport, visitor) ||
        (<any>node).namedImports !== visitNode((<any>node).namedImports, visitor)
        ? createImportClause(
            (<any>node).defaultBinding,
            (<any>node).nameSpaceImport,
            (<any>node).namedImports,
            (<any>node).start,
            (<any>node).end
          )
        : node;

    case SyntaxKind.ExportDefault:
      return (<any>node).exportKeyword !== visitNode((<any>node).exportKeyword, visitor) ||
        (<any>node).defaultKeyword !== visitNode((<any>node).defaultKeyword, visitor) ||
        (<any>node).declaration !== visitNode((<any>node).declaration, visitor)
        ? createExportDefault(
            (<any>node).exportKeyword,
            (<any>node).defaultKeyword,
            (<any>node).declaration,
            (<any>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.NamespaceExportDeclaration:
      return (<any>node).name !== visitNode((<any>node).name, visitor)
        ? createNamespaceExportDeclaration((<any>node).name, (<any>node).flags, (<any>node).start, (<any>node).end)
        : node;

    case SyntaxKind.NameSpaceImport:
      return (<any>node).asteriskToken !== visitNode((<any>node).asteriskToken, visitor) ||
        (<any>node).asKeyword !== visitNode((<any>node).asKeyword, visitor) ||
        (<any>node).binding !== visitNode((<any>node).binding, visitor)
        ? createNameSpaceImport(
            (<any>node).asteriskToken,
            (<any>node).asKeyword,
            (<any>node).binding,
            (<any>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.ExportDeclaration:
      return (<any>node).exportKeyword !== visitNode((<any>node).exportKeyword, visitor) ||
        (<any>node).declaration !== visitNode((<any>node).declaration, visitor) ||
        (<any>node).namedExports !== visitNode((<any>node).namedExports, visitor) ||
        (<any>node).fromClause !== visitNode((<any>node).fromClause, visitor) ||
        (<any>node).exportFromClause !== visitNode((<any>node).exportFromClause, visitor)
        ? createExportDeclaration(
            (<any>node).exportKeyword,
            (<any>node).declaration,
            (<any>node).namedExports,
            (<any>node).fromClause,
            (<any>node).exportFromClause,
            (<any>node).exportKind,
            (<any>node).flags,
            (<any>node).start,
            (<any>node).end
          )
        : node;

    case SyntaxKind.ExportFromClause:
      return (<any>node).asteriskToken !== visitNode((<any>node).asteriskToken, visitor) ||
        (<any>node).asKeyword !== visitNode((<any>node).asKeyword, visitor) ||
        (<any>node).namedBinding !== visitNode((<any>node).namedBinding, visitor) ||
        (<any>node).moduleExportName !== visitNode((<any>node).moduleExportName, visitor)
        ? createExportFromClause(
            (<any>node).asteriskToken,
            (<any>node).asKeyword,
            (<any>node).namedBinding,
            (<any>node).moduleExportName,
            (<any>node).flags,
            (<any>node).start,
            (<any>node).end
          )
        : node;

    case SyntaxKind.ExportSpecifier:
      return (<any>node).moduleExportName !== visitNode((<any>node).moduleExportName, visitor) ||
        (<any>node).name !== visitNode((<any>node).name, visitor) ||
        (<any>node).binding !== visitNode((<any>node).binding, visitor)
        ? createExportSpecifier(
            (<any>node).moduleExportName,
            (<any>node).name,
            (<any>node).asKeyword,
            (<any>node).binding,
            (<any>node).start,
            (<any>node).end
          )
        : node;

    case SyntaxKind.ExportsList:
      return (<any>node).specifiers !== visitNodes((<any>node).specifiers, visitor)
        ? createExportsList((<any>node).specifiers, (<any>node).start, (<any>node).end)
        : node;

    case SyntaxKind.ImportDeclaration:
      return (<any>node).importKeyword !== visitNode((<any>node).importKeyword, visitor) ||
        (<any>node).typeKeyword !== visitNode((<any>node).typeKeyword, visitor) ||
        (<any>node).fromClause !== visitNode((<any>node).fromClause, visitor) ||
        (<any>node).moduleSpecifier !== visitNode((<any>node).moduleSpecifier, visitor) ||
        (<any>node).importClause !== visitNode((<any>node).importClause, visitor)
        ? createImportDeclaration(
            (<any>node).importKeyword,
            (<any>node).typeKeyword,
            (<any>node).typeofKeyword,
            (<any>node).fromClause,
            (<any>node).moduleSpecifier,
            (<any>node).importClause,
            (<any>node).flags,
            (<any>node).start,
            (<any>node).end
          )
        : node;

    case SyntaxKind.ImportSpecifier:
      return (<any>node).typeKeyword !== visitNode((<any>node).typeKeyword, visitor) ||
        (<any>node).moduleExportName !== visitNode((<any>node).moduleExportName, visitor) ||
        (<any>node).name !== visitNode((<any>node).name, visitor) ||
        (<any>node).asKeyword !== visitNode((<any>node).asKeyword, visitor) ||
        (<any>node).binding !== visitNode((<any>node).binding, visitor)
        ? createImportSpecifier(
            (<any>node).typeKeyword,
            (<any>node).moduleExportName,
            (<any>node).name,
            (<any>node).asKeyword,
            (<any>node).binding,
            (<any>node).start,
            (<any>node).end
          )
        : node;

    case SyntaxKind.ImportsList:
      return (<any>node).specifiers !== visitNodes((<any>node).specifiers, visitor)
        ? createImportsList((<any>node).specifiers, (<any>node).flags, (<any>node).start, (<any>node).end)
        : node;

    case SyntaxKind.NamedExports:
      return (<any>node).exportsList !== visitNode((<any>node).exportsList, visitor)
        ? createNamedExports((<any>node).exportsList, (<any>node).flags, (<any>node).start, (<any>node).end)
        : node;

    case SyntaxKind.NamedImports:
      return (<any>node).importsList !== visitNode((<any>node).importsList, visitor)
        ? createNamedImports((<any>node).importsList, (<any>node).start, (<any>node).end)
        : node;

    case SyntaxKind.CallChain:
      return (<any>node).chain !== visitNode((<any>node).chain, visitor) ||
        (<any>node).typeArguments !== visitNode((<any>node).typeArguments, visitor) ||
        (<any>node).argumentList !== visitNode((<any>node).argumentList, visitor)
        ? createCallChain(
            (<any>node).chain,
            (<any>node).typeArguments,
            (<any>node).argumentList,
            (<any>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.ArrowFunctionType:
      return (<any>node).arrowTypeParameterList !== visitNode((<any>node).arrowTypeParameterList, visitor) ||
        (<any>node).arrowToken !== visitNode((<any>node).arrowToken, visitor) ||
        (<any>node).returnType !== visitNode((<any>node).returnType, visitor) ||
        (<any>node).typeParameters !== visitNode((<any>node).typeParameters, visitor)
        ? createArrowFunctionType(
            (<any>node).arrowTypeParameterList,
            (<any>node).arrowToken,
            (<any>node).returnType,
            (<any>node).typeParameters,
            (<any>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.ArrowTypeParameter:
      return (<any>node).ellipsisToken !== visitNode((<any>node).ellipsisToken, visitor) ||
        (<any>node).name !== visitNode((<any>node).name, visitor) ||
        (<any>node).optionalToken !== visitNode((<any>node).optionalToken, visitor) ||
        (<any>node).types !== visitNode((<any>node).types, visitor)
        ? createArrowTypeParameter(
            (<any>node).ellipsisToken,
            (<any>node).name,
            (<any>node).optionalToken,
            (<any>node).types,
            (<any>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.ArrowTypeParameterList:
      return (<any>node).parameters !== visitNodes((<any>node).parameters, visitor)
        ? createArrowTypeParameterList(
            (<any>node).parameters,
            (<any>node).trailinComma,
            (<any>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.FunctionTypeParameterList:
      return (<any>node).parameters !== visitNodes((<any>node).parameters, visitor)
        ? createFunctionTypeParameterList(
            (<any>node).parameters,
            (<any>node).trailinComma,
            (<any>node).start,
            (<any>node).end
          )
        : node;

    case SyntaxKind.FunctionTypeParameter:
      return (<any>node).ellipsisToken !== visitNode((<any>node).ellipsisToken, visitor) ||
        (<any>node).name !== visitNode((<any>node).name, visitor) ||
        (<any>node).optionalToken !== visitNode((<any>node).optionalToken, visitor) ||
        (<any>node).types !== visitNode((<any>node).types, visitor)
        ? createFunctionTypeParameters(
            (<any>node).ellipsisToken,
            (<any>node).name,
            (<any>node).optionalToken,
            (<any>node).types,
            (<any>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.NullableType:
      return (<any>node).nullableToken !== visitNode((<any>node).nullableToken, visitor) ||
        (<any>node).type !== visitNode((<any>node).type, visitor)
        ? createNullableType((<any>node).nullableToken, (<any>node).type, (<any>node).start, (<any>node).end)
        : node;
    case SyntaxKind.ObjectTypeCallProperty:
      return (<any>node).protoKeyword !== visitNode((<any>node).protoKeyword, visitor) ||
        (<any>node).typeParameter !== visitNode((<any>node).typeParameter, visitor) ||
        (<any>node).value !== visitNode((<any>node).value, visitor) ||
        (<any>node).staticToken !== visitNode((<any>node).staticToken, visitor) ||
        (<any>node).returnTYpe !== visitNode((<any>node).returnTYpe, visitor)
        ? createObjectTypeCallProperty(
            (<any>node).protoKeyword,
            (<any>node).typeParameter,
            (<any>node).value,
            (<any>node).staticToken,
            (<any>node).returnTYpe,
            (<any>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.ObjectTypeIndexer:
      return (<any>node).protoKeyword !== visitNode((<any>node).protoKeyword, visitor) ||
        (<any>node).name !== visitNode((<any>node).name, visitor) ||
        (<any>node).key !== visitNode((<any>node).key, visitor) ||
        (<any>node).staticToken !== visitNode((<any>node).staticToken, visitor) ||
        (<any>node).type !== visitNode((<any>node).type, visitor)
        ? createObjectTypeIndexer(
            (<any>node).protoKeyword,
            (<any>node).staticToken,
            (<any>node).name,
            (<any>node).key,
            (<any>node).type,
            (<any>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.ObjectTypeInternalSlot:
      return (<any>node).protoKeyword !== visitNode((<any>node).protoKeyword, visitor) ||
        (<any>node).optionalToken !== visitNode((<any>node).optionalToken, visitor) ||
        (<any>node).staticToken !== visitNode((<any>node).staticToken, visitor) ||
        (<any>node).value !== visitNode((<any>node).value, visitor)
        ? createObjectTypeInternalSlot(
            (<any>node).protoKeyword,
            (<any>node).name,
            (<any>node).optionalToken,
            (<any>node).staticToken,
            (<any>node).value,
            (<any>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.ObjectTypeProperty:
      return (<any>node).getKeyword !== visitNode((<any>node).getKeyword, visitor) ||
        (<any>node).setKeyword !== visitNode((<any>node).setKeyword, visitor) ||
        (<any>node).key !== visitNode((<any>node).key, visitor) ||
        (<any>node).value !== visitNode((<any>node).value, visitor) ||
        (<any>node).optionalToken !== visitNode((<any>node).optionalToken, visitor) ||
        (<any>node).staticToken !== visitNode((<any>node).staticToken, visitor) ||
        (<any>node).protoKeyword !== visitNode((<any>node).protoKeyword, visitor)
        ? createObjectTypeProperty(
            (<any>node).getKeyword,
            (<any>node).setKeyword,
            (<any>node).key,
            (<any>node).value,
            (<any>node).optionalToken,
            (<any>node).staticToken,
            (<any>node).protoKeyword,
            (<any>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.OpaqueType:
      return (<any>node).declareToken !== visitNode((<any>node).declareToken, visitor) ||
        (<any>node).opaqueToken !== visitNode((<any>node).opaqueToken, visitor) ||
        (<any>node).typeToken !== visitNode((<any>node).typeToken, visitor) ||
        (<any>node).name !== visitNode((<any>node).name, visitor) ||
        (<any>node).typeParamters !== visitNode((<any>node).typeParamters, visitor) ||
        (<any>node).superType !== visitNode((<any>node).superType, visitor) ||
        (<any>node).impltype !== visitNode((<any>node).impltype, visitor)
        ? createOpaqueType(
            (<any>node).declareToken,
            (<any>node).opaqueToken,
            (<any>node).typeToken,
            (<any>node).name,
            (<any>node).typeParamters,
            (<any>node).superType,
            (<any>node).impltype,
            (<any>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.QualifiedType:
      return (<any>node).qualification !== visitNode((<any>node).qualification, visitor) ||
        (<any>node).id !== visitNode((<any>node).id, visitor)
        ? createQualifiedType((<any>node).qualification, (<any>node).id, (<any>node).start, (<any>node).end)
        : node;
    case SyntaxKind.TypeInstantiations:
      return (<any>node).types !== visitNodes((<any>node).types, visitor)
        ? createTypeInstantiations((<any>node).types, (<any>node).trailingComma, (<any>node).start, (<any>node).end)
        : node;
    case SyntaxKind.TypeAnnotation:
      return (<any>node).bitwiseOrToken !== visitNode((<any>node).bitwiseOrToken, visitor) ||
        (<any>node).bitwiseAndToken !== visitNode((<any>node).bitwiseAndToken, visitor) ||
        (<any>node).type !== visitNode((<any>node).type, visitor)
        ? createTypeAnnotation(
            (<any>node).bitwiseOrToken,
            (<any>node).bitwiseAndToken,
            (<any>node).type,
            (<any>node).start,
            (<any>node).end
          )
        : node;
    case SyntaxKind.TypeParameterDeclaration:
      return (<any>node).declarations !== visitNode((<any>node).declarations, visitor)
        ? createTypeParameterDeclaration(
            (<any>node).declarations,
            (<any>node).flags,
            (<any>node).start,
            (<any>node).end
          )
        : node;

    case SyntaxKind.TypeParameterInstantiation:
      return (<any>node).typeInstantiations !== visitNode((<any>node).typeInstantiations, visitor)
        ? createTypeParameterInstantiation(
            (<any>node).typeInstantiations,
            (<any>node).flags,
            (<any>node).start,
            (<any>node).end
          )
        : node;

    case SyntaxKind.TypeParameterList:
      return (<any>node).parameters !== visitNodes((<any>node).parameters, visitor)
        ? createTypeParameterList((<any>node).parameters, (<any>node).trailingComma, (<any>node).start, (<any>node).end)
        : node;

    case SyntaxKind.TypeofType:
      return (<any>node).typeOfKeyword !== visitNode((<any>node).typeOfKeyword, visitor) ||
        (<any>node).type !== visitNode((<any>node).type, visitor) ||
        (<any>node).start !== visitNode((<any>node).start, visitor)
        ? createTypeofType((<any>node).typeOfKeyword, (<any>node).type, (<any>node).start, (<any>node).end)
        : node;

    case SyntaxKind.FieldDefinition:
      return (<any>node).decorators !== visitNode((<any>node).decorators, visitor) ||
        (<any>node).declaredToken !== visitNode((<any>node).declaredToken, visitor) ||
        (<any>node).staticToken !== visitNode((<any>node).staticToken, visitor) ||
        (<any>node).asyncKeyword !== visitNode((<any>node).asyncKeyword, visitor) ||
        (<any>node).key !== visitNode((<any>node).key, visitor) ||
        (<any>node).optionalToken !== visitNode((<any>node).optionalToken, visitor) ||
        (<any>node).type !== visitNode((<any>node).type, visitor) ||
        (<any>node).initializer !== visitNode((<any>node).initializer, visitor)
        ? createFieldDefinition(
            (<any>node).decorators,
            (<any>node).declaredToken,
            (<any>node).staticToken,
            (<any>node).asyncKeyword,
            (<any>node).key,
            (<any>node).optionalToken,
            (<any>node).type,
            (<any>node).initializer,
            (<any>node).start,
            (<any>node).end
          )
        : node;

    case SyntaxKind.FunctionStatementList:
      return (<any>node).directives !== visitNodes((<any>node).directives, visitor) ||
        (<any>node).statements !== visitNodes((<any>node).statements, visitor)
        ? createFunctionStatementList(
            (<any>node).directives,
            (<any>node).statements,
            (<any>node).flags,
            (<any>node).start,
            (<any>node).end
          )
        : node;

    case SyntaxKind.FunctionBody:
      return (<any>node).functionStatementList !== visitNode((<any>node).functionStatementList, visitor)
        ? createFunctionBody((<any>node).functionStatementList, (<any>node).start, (<any>node).end)
        : node;

    case SyntaxKind.ImportCall:
      return (<any>node).importKeyword !== visitNode((<any>node).importKeyword, visitor) ||
        (<any>node).expression !== visitNode((<any>node).expression, visitor)
        ? createImportCall((<any>node).importKeyword, (<any>node).expression, (<any>node).start, (<any>node).end)
        : node;

    case SyntaxKind.ThrowKeyword:
      return (<any>node).throwKeyword !== visitNode((<any>node).throwKeyword, visitor) ||
        (<any>node).expression !== visitNode((<any>node).expression, visitor)
        ? createThrowStatement(
            (<any>node).throwKeyword,
            (<any>node).expression,
            (<any>node).flags,
            (<any>node).start,
            (<any>node).end
          )
        : node;

    case SyntaxKind.MethodDefinition:
      return (<any>node).name !== visitNode((<any>node).name, visitor) ||
        (<any>node).typeParameters !== visitNode((<any>node).typeParameters, visitor) ||
        (<any>node).formalParameters !== visitNode((<any>node).formalParameters, visitor) ||
        (<any>node).returnType !== visitNode((<any>node).returnType, visitor) ||
        (<any>node).contents !== visitFunctionBody(transform, (<any>node).contents, visitor)
        ? createMethodDefinition(
            (<any>node).name,
            (<any>node).typeParameters,
            (<any>node).formalParameters,
            (<any>node).returnType,
            (<any>node).contents,
            (<any>node).flags,
            (<any>node).start,
            (<any>node).end
          )
        : node;
  }
}

export function visitNode(node: any, visitor: (node: any) => any, lift?: any): any | undefined {
  if (node === null || visitor === null) {
    return node;
  }
  //if ((<any>node).flags & NodeFlags.ChildLess) return node;
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
  const updated = visitNodes(nodes, visitor);
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
  //  if (ensureUseStrict) statements = context.factory.ensureUseStrict(statements);
  const declarations = endLexicalEnvironment(transform);
  return createNodeArray(concatenate(declarations as StatementNode[], statements));
}

export function visitFunctionBody(transform: Transform, node: any | undefined, visitor: any): any | undefined {
  transform.lexicalEnvironmentSuspended = true;
  const updated = visitNode(node, visitor);
  const declarations = endLexicalEnvironment(transform);
  if (some(declarations)) {
    console.log('Naa declarations');
  }
  return updated;
}
