import { SyntaxKind, SyntaxNode } from './ast/syntax-node';
import { createRootNode, RootNode } from './ast/rootNode';
import { StatementNode } from './ast/statements';
import { createAssignmentExpression, AssignmentExpression } from './ast/expressions/assignment-expr';
import { createExpressionStatement, ExpressionStatement } from './ast/statements/expression-stmt';
import { createArrayLiteral, ArrayLiteral } from './ast/expressions/array-literal';
import { createBinaryExpression, BinaryExpression } from './ast/expressions/binary-expr';
import { createArgumentList, ArgumentList } from './ast/expressions/argument-list';
import { createArrayBindingPattern, ArrayBindingPattern } from './ast/expressions/array-binding-pattern';
import { createArrowFunction, ArrowFunction } from './ast/expressions/arrow-function';
import { createAwaitExpression, AwaitExpression } from './ast/expressions/await-expr';
import { createBindingElementList, BindingElementList } from './ast/expressions/binding-element-list';
import { createBindingProperty, BindingProperty } from './ast/expressions/binding-property';
import { createBindingElement, BindingElement } from './ast/expressions/binding-element';
import { createIndexExpression, IndexExpression } from './ast/expressions/index-expr';
import { createIndexExpressionChain } from './ast/expressions/index-expr-chain';
import { createMemberAccessChain } from './ast/expressions/member-access-chain';
import { createMemberAccessExpression } from './ast/expressions/member-access-expr';
import { createStaticBlock, StaticBlock } from './ast/expressions/static-block';
import { createYieldExpression } from './ast/expressions/yield-expr';
import { createBindingPropertyList, BindingPropertyList } from './ast/expressions/binding-property-list';
import { createCallExpression, CallExpression } from './ast/expressions/call-expr';
import { createCallChain, CallChain } from './ast/expressions/call-chain';
import { createClassBody, ClassBody } from './ast/expressions/class-body';
import { createClassTail, ClassTail } from './ast/expressions/class-tail';
import { createOptionalChain, OptionalChain } from './ast/expressions/optional-chain';
import { createOptionalExpression, OptionalExpression } from './ast/expressions/optional-expr';
import { createCommaOperator } from './ast/expressions/comma-operator';
import { createTemplateSpan } from './ast/expressions/template-span';
import { createClassElement } from './ast/expressions/class-element';
import { createClassExpression } from './ast/expressions/class-expr';
import { createClassHeritage, ClassHeritage } from './ast/expressions/class-heritage';
import { createComputedPropertyName } from './ast/expressions/computed-property-name';
import { createConditionalExpression } from './ast/expressions/conditional-expr';
import { createCoverInitializedName } from './ast/expressions/cover-initialized-name';
import { createElementList, ElementList } from './ast/expressions/element-list';
import { createFieldDefinition } from './ast/expressions/field-definition';
import { createTaggedTemplate } from './ast/expressions/tagged-template';
import { createFunctionExpression, FunctionExpression } from './ast/expressions/function-expr';
import { createUnaryExpression } from './ast/expressions/unary-expr';
import { createFunctionStatementList } from './ast/expressions/function-stmt-list';
import { createFunctionBody } from './ast/expressions/function-body';
import { createImportCall } from './ast/expressions/import-call';
import { createMethodDefinition } from './ast/expressions/method-definition';
import { createNewExpression } from './ast/expressions/new-expr';
import { createObjectBindingPattern, ObjectBindingPattern } from './ast/expressions/object-binding-pattern';
import { createObjectLiteral, ObjectLiteral } from './ast/expressions/object-literal';
import { createParenthesizedExpression, ParenthesizedExpression } from './ast/expressions/parenthesized-expr';
import { createPostfixUpdateExpression } from './ast/expressions/postfix-update-expr';
import { createPrefixUpdateExpression } from './ast/expressions/prefix-update-expr';
import { createPropertyDefinition, PropertyDefinition } from './ast/expressions/property-definition';
import { createPropertyDefinitionList, PropertyDefinitionList } from './ast/expressions/property-definition-list';
import { createSpreadProperty } from './ast/expressions/spread-property';
import { createTemplateExpression } from './ast/expressions/template-expression';
import { createBindingList, BindingList } from './ast/statements/binding-list';
import { createVariableStatement, VariableStatement } from './ast/statements/variable-stmt';
import { createBlock, Block } from './ast/statements/block';
import { createBlockStatement, BlockStatement } from './ast/statements/block-stmt';
import { createBreakStatement } from './ast/statements/break-stmt';
import { createContinueStatement } from './ast/statements/continue-stmt';
import { createDefaultClause, DefaultClause } from './ast/statements/default-clause';
import { createCaseClause, CaseClause } from './ast/statements/case-clause';
import { createDoWhileStatement, DoWhileStatement } from './ast/statements/do-stmt';
import { createForInStatement } from './ast/statements/for-in-stmt';
import { createForOfStatement } from './ast/statements/for-of-stmt';
import { createForStatement } from './ast/statements/for-stmt';
import { createIfStatement, IfStatement } from './ast/statements/if-stmt';
import { createLabelledStatement } from './ast/statements/labelled-stmt';
import { createLexicalBinding, LexicalBinding } from './ast/statements/lexical-binding';
import { createReturnStatement } from './ast/statements/return-stmt';
import { createSwitchStatement } from './ast/statements/switch-stmt';
import { createThrowStatement } from './ast/statements/throw-stmt';
import { createCaseBlock } from './ast/statements/case-block';
import { createTryStatement } from './ast/statements/try-stmt';
import { createVariableDeclaration, VariableDeclaration } from './ast/statements/variable-declaration';
import { createVariableDeclarationList, VariableDeclarationList } from './ast/statements/variable-declarationList';
import { createWhileStatement } from './ast/statements/while-stmt';
import { createWithStatement, WithStatement } from './ast/statements/with-stmt';
import { createFunctionDeclaration, FunctionDeclaration } from './ast/statements/function-declaration';
import { createLexicalDeclaration, LexicalDeclaration } from './ast/statements/lexical-declaration';
import { createClassDeclaration, ClassDeclaration } from './ast/statements/class-declaration';
import { createCatch } from './ast/statements/catch-stmt';
import { createArrayType, ArrayType } from './ast/types/array-type';
import { createArrowFunctionType, ArrowFunctionType } from './ast/types/arrow-function-type';
import { createArrowTypeParameter, ArrowTypeParameter } from './ast/types/arrow-type-parameter';
import { createArrowTypeParameterList } from './ast/types/arrow-type-parameter-list';
import { createFunctionTypeParameterList } from './ast/types/function-type-parameter-list';
import { createFunctionTypeParameters } from './ast/types/function-type-parameter';
import { createNullableType } from './ast/types/nullable-type';
import { createObjectTypeCallProperty, ObjectTypeCallProperty } from './ast/types/object-type-call-property';
import { createObjectTypeIndexer, ObjectTypeIndexer } from './ast/types/object-type-indexer';
import { createObjectTypeInternalSlot, ObjectTypeInternalSlot } from './ast/types/object-type-internal-slot';
import { createObjectTypeProperty, ObjectTypeProperty } from './ast/types/object-type-property';
import { createOpaqueType, OpaqueType } from './ast/types/opaque-type';
import { createQualifiedType } from './ast/types/qualified-type';
import { createTypeInstantiations } from './ast/types/type-instantiations';
import { createTypeAnnotation } from './ast/types/type-annotation';
import { createTypeParameterDeclaration } from './ast/types/type-parameter-declaration';
import { createTypeParameterInstantiation } from './ast/types/type-parameter-instantiation';
import { createTypeParameterList } from './ast/types/type-parameter-list';
import { createTypeofType } from './ast/types/typeof-type';
import { createTypeReference } from './ast/types/type-reference';
import { createFunctionType, FunctionType } from './ast/types/function-type';
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
      return (<ObjectLiteral>node).propertyList !== visitNode((<ObjectLiteral>node).propertyList, visitor)
        ? createObjectLiteral(
            (<ObjectLiteral>node).propertyList,
            (<ObjectLiteral>node).flags,
            (<ObjectLiteral>node).start,
            (<ObjectLiteral>node).end
          )
        : node;
    case SyntaxKind.PropertyDefinitionList:
      return (<PropertyDefinitionList>node).properties !==
        visitNodes((<PropertyDefinitionList>node).properties, visitor)
        ? createPropertyDefinitionList(
            (<PropertyDefinitionList>node).properties,
            (<PropertyDefinitionList>node).trailingComma,
            (<PropertyDefinitionList>node).flags,
            (<PropertyDefinitionList>node).start,
            (<PropertyDefinitionList>node).end
          )
        : node;
    case SyntaxKind.PropertyDefinition:
      return (<PropertyDefinition>node).generatorToken !==
        visitNode((<PropertyDefinition>node).generatorToken, visitor) ||
        (<PropertyDefinition>node).left !== visitNode((<PropertyDefinition>node).left, visitor) ||
        (<PropertyDefinition>node).right !== visitNode((<PropertyDefinition>node).right, visitor)
        ? createPropertyDefinition(
            (<PropertyDefinition>node).generatorToken,
            (<PropertyDefinition>node).left,
            (<PropertyDefinition>node).right,
            (<PropertyDefinition>node).flags,
            (<PropertyDefinition>node).start,
            (<PropertyDefinition>node).end
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
      return (<Block>node).statements !== visitNodes((<Block>node).statements, visitor)
        ? createBlock((<Block>node).statements, (<Block>node).flags, (<Block>node).start, (<Block>node).end)
        : node;
    case SyntaxKind.ObjectBindingPattern:
      return (<ObjectBindingPattern>node).propertyList !==
        visitNodes((<ObjectBindingPattern>node).propertyList, visitor)
        ? createObjectBindingPattern(
            (<ObjectBindingPattern>node).propertyList,
            (<ObjectBindingPattern>node).flags,
            (<ObjectBindingPattern>node).start,
            (<ObjectBindingPattern>node).end
          )
        : node;
    case SyntaxKind.CallExpression:
      return (<CallExpression>node).expression !== visitNode((<CallExpression>node).expression, visitor) ||
        (<CallExpression>node).argumentList !== visitNode((<CallExpression>node).argumentList, visitor)
        ? createCallExpression(
            (<CallExpression>node).expression,
            (<CallExpression>node).argumentList,
            (<CallExpression>node).flags,
            (<CallExpression>node).start,
            (<CallExpression>node).end
          )
        : node;
    case SyntaxKind.BindingElementList:
      return (<BindingElementList>node).elements !== visitNodes((<BindingElementList>node).elements, visitor)
        ? createBindingElementList(
            (<BindingElementList>node).elements,
            (<BindingElementList>node).trailingComma,
            (<BindingElementList>node).flags,
            (<BindingElementList>node).start,
            (<BindingElementList>node).end
          )
        : node;
    case SyntaxKind.VariableStatement:
      return (<VariableStatement>node).declareKeyword !==
        visitNode((<VariableStatement>node).declareKeyword, visitor) ||
        (<VariableStatement>node).varKeyword !== visitNode((<VariableStatement>node).varKeyword, visitor) ||
        (<VariableStatement>node).declarationList !== visitNode((<VariableStatement>node).declarationList, visitor)
        ? createVariableStatement(
            (<VariableStatement>node).declareKeyword,
            (<VariableStatement>node).varKeyword,
            (<VariableStatement>node).declarationList,
            (<VariableStatement>node).flags,
            (<VariableStatement>node).start,
            (<VariableStatement>node).end
          )
        : node;
    case SyntaxKind.VariableDeclaration:
      return (<VariableDeclaration>node).binding !== visitNode((<VariableDeclaration>node).binding, visitor) ||
        (<VariableDeclaration>node).optionalToken !== visitNode((<VariableDeclaration>node).optionalToken, visitor) ||
        (<VariableDeclaration>node).type !== visitNode((<VariableDeclaration>node).type, visitor) ||
        (<VariableDeclaration>node).initializer !== visitNode((<VariableDeclaration>node).initializer, visitor)
        ? createVariableDeclaration(
            (<VariableDeclaration>node).binding,
            (<VariableDeclaration>node).optionalToken,
            (<VariableDeclaration>node).type,
            (<VariableDeclaration>node).initializer,
            (<VariableDeclaration>node).start,
            (<VariableDeclaration>node).end
          )
        : node;
    case SyntaxKind.VariableDeclarationList:
      return (<VariableDeclarationList>node).declarations !==
        visitNodes((<VariableDeclarationList>node).declarations, visitor)
        ? createVariableDeclarationList(
            (<VariableDeclarationList>node).declarations,
            (<VariableDeclarationList>node).start,
            (<VariableDeclarationList>node).end
          )
        : node;
    case SyntaxKind.LexicalDeclaration:
      return (<LexicalDeclaration>node).lexicalKeyword !==
        visitNode((<LexicalDeclaration>node).lexicalKeyword, visitor) ||
        (<LexicalDeclaration>node).binding !== visitNode((<LexicalDeclaration>node).binding, visitor)
        ? createLexicalDeclaration(
            (<LexicalDeclaration>node).lexicalKeyword,
            (<LexicalDeclaration>node).binding,
            (<LexicalDeclaration>node).start,
            (<LexicalDeclaration>node).end
          )
        : node;
    case SyntaxKind.ArrayBindingPattern:
      return (<ArrayBindingPattern>node).elementList !== visitNodes((<ArrayBindingPattern>node).elementList, visitor)
        ? createArrayBindingPattern(
            (<ArrayBindingPattern>node).elementList,
            (<ArrayBindingPattern>node).flags,
            (<ArrayBindingPattern>node).start,
            (<ArrayBindingPattern>node).end
          )
        : node;
    case SyntaxKind.LexicalBinding:
      return (<LexicalBinding>node).binding !== visitNode((<LexicalBinding>node).binding, visitor) ||
        (<LexicalBinding>node).optionalToken !== visitNode((<LexicalBinding>node).optionalToken, visitor) ||
        (<LexicalBinding>node).type !== visitNode((<LexicalBinding>node).type, visitor) ||
        (<LexicalBinding>node).initializer !== visitNode((<LexicalBinding>node).initializer, visitor)
        ? createLexicalBinding(
            (<LexicalBinding>node).binding,
            (<LexicalBinding>node).optionalToken,
            (<LexicalBinding>node).type,
            (<LexicalBinding>node).initializer,
            (<LexicalBinding>node).start,
            (<LexicalBinding>node).end
          )
        : node;
    case SyntaxKind.BindingList:
      return (<BindingList>node).bindingList !== visitNodes((<BindingList>node).bindingList, visitor)
        ? createBindingList(
            (<BindingList>node).bindingList,
            (<BindingList>node).flags,
            (<BindingList>node).start,
            (<BindingList>node).end
          )
        : node;
    case SyntaxKind.BindingPropertyList:
      return (<BindingPropertyList>node).properties !== visitNodes((<BindingPropertyList>node).properties, visitor)
        ? createBindingPropertyList(
            (<BindingPropertyList>node).properties,
            (<BindingPropertyList>node).flags,
            (<BindingPropertyList>node).trailingComma,
            (<BindingPropertyList>node).start,
            (<BindingPropertyList>node).end
          )
        : node;
    case SyntaxKind.BlockStatement:
      return (<BlockStatement>node).block !== visitNode((<BlockStatement>node).block, visitor)
        ? createBlockStatement(
            (<BlockStatement>node).block,
            (<BlockStatement>node).flags,
            (<BlockStatement>node).start,
            (<BlockStatement>node).end
          )
        : node;
    case SyntaxKind.ArrowFunction:
      return (<ArrowFunction>node).arrowToken !== visitNode((<ArrowFunction>node).arrowToken, visitor) ||
        (<ArrowFunction>node).typeParameters !== visitNode((<ArrowFunction>node).typeParameters, visitor) ||
        (<ArrowFunction>node).parameters !== visitNode((<ArrowFunction>node).parameters, visitor) ||
        (<ArrowFunction>node).asyncKeyword !== visitNode((<ArrowFunction>node).asyncKeyword, visitor) ||
        (<ArrowFunction>node).returnType !== visitNode((<ArrowFunction>node).returnType, visitor) ||
        (<ArrowFunction>node).contents !== visitFunctionBody(transform, (<ArrowFunction>node).contents, visitor)
        ? createArrowFunction(
            (<ArrowFunction>node).arrowToken,
            (<ArrowFunction>node).typeParameters,
            (<ArrowFunction>node).parameters,
            (<ArrowFunction>node).asyncKeyword,
            (<ArrowFunction>node).returnType,
            (<ArrowFunction>node).contents,
            (<ArrowFunction>node).flags,
            (<ArrowFunction>node).start,
            (<ArrowFunction>node).end
          )
        : node;
    case SyntaxKind.AwaitExpression:
      return (<AwaitExpression>node).awaitKeyword !== visitNode((<AwaitExpression>node).awaitKeyword, visitor) ||
        (<AwaitExpression>node).expression !== visitNode((<AwaitExpression>node).expression, visitor)
        ? createAwaitExpression(
            (<AwaitExpression>node).awaitKeyword,
            (<AwaitExpression>node).expression,
            (<AwaitExpression>node).start,
            (<AwaitExpression>node).end
          )
        : node;
    case SyntaxKind.BindingElement:
      return (<BindingElement>node).ellipsisToken !== visitNode((<BindingElement>node).ellipsisToken, visitor) ||
        (<BindingElement>node).left !== visitNode((<BindingElement>node).left, visitor) ||
        (<BindingElement>node).optionalToken !== visitNode((<BindingElement>node).optionalToken, visitor) ||
        (<BindingElement>node).type !== visitNode((<BindingElement>node).type, visitor) ||
        (<BindingElement>node).right !== visitNode((<BindingElement>node).right, visitor)
        ? createBindingElement(
            (<BindingElement>node).ellipsisToken,
            (<BindingElement>node).left,
            (<BindingElement>node).optionalToken,
            (<BindingElement>node).type,
            (<BindingElement>node).right,
            (<BindingElement>node).flags,
            (<BindingElement>node).start,
            (<BindingElement>node).end
          )
        : node;
    case SyntaxKind.BindingProperty:
      return (<BindingProperty>node).ellipsisToken !== visitNode((<BindingProperty>node).ellipsisToken, visitor) ||
        (<BindingProperty>node).key !== visitNode((<BindingProperty>node).key, visitor) ||
        (<BindingProperty>node).value !== visitNode((<BindingProperty>node).value, visitor) ||
        (<BindingProperty>node).initializer !== visitNode((<BindingProperty>node).initializer, visitor)
        ? createBindingProperty(
            (<BindingProperty>node).ellipsisToken,
            (<BindingProperty>node).key,
            (<BindingProperty>node).value,
            (<BindingProperty>node).initializer,
            (<BindingProperty>node).start,
            (<BindingProperty>node).end
          )
        : node;
    case SyntaxKind.OptionalExpression:
      return (<OptionalExpression>node).chainToken !== visitNode((<OptionalExpression>node).chainToken, visitor) ||
        (<OptionalExpression>node).member !== visitNode((<OptionalExpression>node).member, visitor) ||
        (<OptionalExpression>node).chain !== visitNode((<OptionalExpression>node).chain, visitor)
        ? createOptionalExpression(
            (<OptionalExpression>node).chainToken,
            (<OptionalExpression>node).member,
            (<OptionalExpression>node).chain,
            (<OptionalExpression>node).start,
            (<OptionalExpression>node).end
          )
        : node;
    case SyntaxKind.OptionalChain:
      return (<OptionalChain>node).chain !== visitNode((<OptionalChain>node).chain, visitor)
        ? createOptionalChain((<OptionalChain>node).chain, (<OptionalChain>node).start, (<OptionalChain>node).end)
        : node;
    case SyntaxKind.ClassHeritage:
      return (<ClassHeritage>node).extendsKeyword !== visitNode((<ClassHeritage>node).extendsKeyword, visitor) ||
        (<ClassHeritage>node).expression !== visitNode((<ClassHeritage>node).expression, visitor) ||
        (<ClassHeritage>node).typeParameter !== visitNode((<ClassHeritage>node).typeParameter, visitor)
        ? createClassHeritage(
            (<ClassHeritage>node).extendsKeyword,
            (<ClassHeritage>node).expression,
            (<ClassHeritage>node).typeParameter,
            (<ClassHeritage>node).start,
            (<ClassHeritage>node).end
          )
        : node;
    case SyntaxKind.ClassBody:
      return (<ClassBody>node).elements !== visitNodes((<ClassBody>node).elements, visitor)
        ? createClassBody((<ClassBody>node).elements, (<ClassBody>node).start, (<ClassBody>node).end)
        : node;
    case SyntaxKind.ClassTail:
      return (<ClassTail>node).classHeritage !== visitNode((<ClassTail>node).classHeritage, visitor) ||
        (<ClassTail>node).body !== visitNode((<ClassTail>node).body, visitor)
        ? createClassTail(
            (<ClassTail>node).classHeritage,
            (<ClassTail>node).body,
            (<ClassTail>node).flags,
            (<ClassTail>node).start,
            (<ClassTail>node).end
          )
        : node;
    case SyntaxKind.ClassDeclaration:
      return (<ClassDeclaration>node).declareKeyword !== visitNode((<ClassDeclaration>node).declareKeyword, visitor) ||
        (<ClassDeclaration>node).decorators !== visitNode((<ClassDeclaration>node).decorators, visitor) ||
        (<ClassDeclaration>node).classKeyword !== visitNode((<ClassDeclaration>node).classKeyword, visitor) ||
        (<ClassDeclaration>node).name !== visitNode((<ClassDeclaration>node).name, visitor) ||
        (<ClassDeclaration>node).typeParameters !== visitNode((<ClassDeclaration>node).typeParameters, visitor) ||
        (<ClassDeclaration>node).tail !== visitNode((<ClassDeclaration>node).tail, visitor)
        ? createClassDeclaration(
            (<ClassDeclaration>node).declareKeyword,
            (<ClassDeclaration>node).decorators,
            (<ClassDeclaration>node).classKeyword,
            (<ClassDeclaration>node).name,
            (<ClassDeclaration>node).typeParameters,
            (<ClassDeclaration>node).tail,
            (<ClassDeclaration>node).flags,
            (<ClassDeclaration>node).start,
            (<ClassDeclaration>node).end
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
      return (<CaseClause>node).caseKeyword !== visitNode((<CaseClause>node).caseKeyword, visitor) ||
        (<CaseClause>node).expression !== visitNode((<CaseClause>node).expression, visitor) ||
        (<CaseClause>node).statements !== visitNodes((<CaseClause>node).statements, visitor)
        ? createCaseClause(
            (<CaseClause>node).caseKeyword,
            (<CaseClause>node).expression,
            (<CaseClause>node).statements,
            (<CaseClause>node).start,
            (<CaseClause>node).end
          )
        : node;
    case SyntaxKind.DefaultClause:
      return (<DefaultClause>node).defaultKeyword !== visitNode((<DefaultClause>node).defaultKeyword, visitor) ||
        (<DefaultClause>node).statements !== visitNodes((<DefaultClause>node).statements, visitor)
        ? createDefaultClause(
            (<DefaultClause>node).defaultKeyword,
            (<DefaultClause>node).statements,
            (<DefaultClause>node).start,
            (<DefaultClause>node).end
          )
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
      return (<DoWhileStatement>node).doKeyword !== visitNode((<DoWhileStatement>node).doKeyword, visitor) ||
        (<DoWhileStatement>node).expression !== visitNode((<DoWhileStatement>node).expression, visitor) ||
        (<DoWhileStatement>node).whileKeyword !== visitNode((<DoWhileStatement>node).whileKeyword, visitor) ||
        (<DoWhileStatement>node).statement !== visitNode((<DoWhileStatement>node).statement, visitor) ||
        (<DoWhileStatement>node).statement !== visitNode((<DoWhileStatement>node).statement, visitor)
        ? createDoWhileStatement(
            (<DoWhileStatement>node).doKeyword,
            (<DoWhileStatement>node).expression,
            (<DoWhileStatement>node).whileKeyword,
            (<DoWhileStatement>node).statement,
            (<DoWhileStatement>node).flags,
            (<DoWhileStatement>node).start,
            (<DoWhileStatement>node).end
          )
        : node;

    case SyntaxKind.IfStatement:
      return (<IfStatement>node).ifKeyword !== visitNode((<IfStatement>node).ifKeyword, visitor) ||
        (<IfStatement>node).expression !== visitNode((<IfStatement>node).expression, visitor) ||
        (<IfStatement>node).consequent !== visitNode((<IfStatement>node).consequent, visitor) ||
        (<IfStatement>node).elseKeyword !== visitNode((<IfStatement>node).elseKeyword, visitor) ||
        (<IfStatement>node).alternate !== visitNode((<IfStatement>node).alternate, visitor)
        ? createIfStatement(
            (<IfStatement>node).ifKeyword,
            (<IfStatement>node).expression,
            (<IfStatement>node).consequent,
            (<IfStatement>node).elseKeyword,
            (<IfStatement>node).alternate,
            (<IfStatement>node).flags,
            (<IfStatement>node).start,
            (<IfStatement>node).end
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
      return (<IndexExpression>node).member !== visitNode((<IndexExpression>node).member, visitor) ||
        (<IndexExpression>node).expression !== visitNode((<IndexExpression>node).expression, visitor)
        ? createIndexExpression(
            (<IndexExpression>node).member,
            (<IndexExpression>node).expression,
            (<IndexExpression>node).start,
            (<IndexExpression>node).end
          )
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
      return (<StaticBlock>node).decorators !== visitNode((<StaticBlock>node).decorators, visitor) ||
        (<StaticBlock>node).declaredKeyword !== visitNode((<StaticBlock>node).declaredKeyword, visitor) ||
        (<StaticBlock>node).block !== visitNode((<StaticBlock>node).block, visitor)
        ? createStaticBlock(
            (<StaticBlock>node).decorators,
            (<StaticBlock>node).declaredKeyword,
            (<StaticBlock>node).staticKeyword,
            (<StaticBlock>node).block,
            (<StaticBlock>node).start,
            (<StaticBlock>node).end
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
      return (<WithStatement>node).withKeyword !== visitNode((<WithStatement>node).withKeyword, visitor) ||
        (<WithStatement>node).expression !== visitNode((<WithStatement>node).expression, visitor) ||
        (<WithStatement>node).statement !== visitNode((<WithStatement>node).statement, visitor)
        ? createWithStatement(
            (<WithStatement>node).withKeyword,
            (<WithStatement>node).expression,
            (<WithStatement>node).statement,
            (<WithStatement>node).flags,
            (<WithStatement>node).start,
            (<WithStatement>node).end
          )
        : node;

    case SyntaxKind.FunctionDeclaration:
      return (<FunctionDeclaration>node).declareKeyword !==
        visitNode((<FunctionDeclaration>node).declareKeyword, visitor) ||
        (<FunctionDeclaration>node).asyncKeyword !== visitNode((<FunctionDeclaration>node).asyncKeyword, visitor) ||
        (<FunctionDeclaration>node).generatorToken !== visitNode((<FunctionDeclaration>node).generatorToken, visitor) ||
        (<FunctionDeclaration>node).formalParameters !==
          visitNode((<FunctionDeclaration>node).formalParameters, visitor) ||
        (<FunctionDeclaration>node).contents !==
          visitFunctionBody(transform, (<FunctionDeclaration>node).contents, visitor) ||
        (<FunctionDeclaration>node).typeParameters !== visitNode((<FunctionDeclaration>node).typeParameters, visitor) ||
        (<FunctionDeclaration>node).returnType !== visitNode((<FunctionDeclaration>node).returnType, visitor)
        ? createFunctionDeclaration(
            (<FunctionDeclaration>node).declareKeyword,
            (<FunctionDeclaration>node).asyncKeyword,
            (<FunctionDeclaration>node).functionKeyword,
            (<FunctionDeclaration>node).generatorToken,
            (<FunctionDeclaration>node).name,
            (<FunctionDeclaration>node).formalParameters,
            (<FunctionDeclaration>node).contents,
            (<FunctionDeclaration>node).typeParameters,
            (<FunctionDeclaration>node).returnType,
            (<FunctionDeclaration>node).flags,
            (<FunctionDeclaration>node).start,
            (<FunctionDeclaration>node).end
          )
        : node;

    case SyntaxKind.FunctionExpression:
      return (<FunctionExpression>node).asyncKeyword !== visitNode((<FunctionExpression>node).asyncKeyword, visitor) ||
        (<FunctionExpression>node).functionKeyword !== visitNode((<FunctionExpression>node).functionKeyword, visitor) ||
        (<FunctionExpression>node).generatorToken !== visitNode((<FunctionExpression>node).generatorToken, visitor) ||
        (<FunctionExpression>node).name !== visitNode((<FunctionExpression>node).name, visitor) ||
        (<FunctionExpression>node).formalParameters !==
          visitNode((<FunctionExpression>node).formalParameters, visitor) ||
        (<FunctionExpression>node).contents !==
          visitFunctionBody(transform, (<FunctionExpression>node).contents, visitor) ||
        (<FunctionExpression>node).typeParameters !== visitNode((<FunctionExpression>node).typeParameters, visitor) ||
        (<FunctionExpression>node).returnType !== visitNode((<FunctionExpression>node).returnType, visitor)
        ? createFunctionExpression(
            (<FunctionExpression>node).asyncKeyword,
            (<FunctionExpression>node).functionKeyword,
            (<FunctionExpression>node).generatorToken,
            (<FunctionExpression>node).name,
            (<FunctionExpression>node).formalParameters,
            (<FunctionExpression>node).contents,
            (<FunctionExpression>node).typeParameters,
            (<FunctionExpression>node).returnType,
            (<FunctionExpression>node).flags,
            (<FunctionExpression>node).start,
            (<FunctionExpression>node).end
          )
        : node;

    case SyntaxKind.ArrayType:
      return (<ArrayType>node).type !== visitNode((<ArrayType>node).type, visitor)
        ? createArrayType((<ArrayType>node).type, (<ArrayType>node).start, (<ArrayType>node).end)
        : node;

    case SyntaxKind.TypeReference:
      return (<any>node).id !== visitNode((<any>node).id, visitor) ||
        (<any>node).typeParameters !== visitNode((<any>node).typeParameters, visitor)
        ? createTypeReference((<any>node).id, (<any>node).typeParameters, (<any>node).start, (<any>node).end)
        : node;

    case SyntaxKind.FunctionType:
      return (<FunctionType>node).functionTypeParameterList !==
        visitNode((<FunctionType>node).functionTypeParameterList, visitor) ||
        (<FunctionType>node).returnType !== visitNode((<FunctionType>node).returnType, visitor) ||
        (<FunctionType>node).typeParameters !== visitNode((<FunctionType>node).typeParameters, visitor)
        ? createFunctionType(
            (<FunctionType>node).functionTypeParameterList,
            (<FunctionType>node).returnType,
            (<FunctionType>node).typeParameters,
            (<FunctionType>node).start,
            (<FunctionType>node).end
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
      return (<CallChain>node).chain !== visitNode((<CallChain>node).chain, visitor) ||
        (<CallChain>node).typeArguments !== visitNode((<CallChain>node).typeArguments, visitor) ||
        (<CallChain>node).argumentList !== visitNode((<CallChain>node).argumentList, visitor)
        ? createCallChain(
            (<CallChain>node).chain,
            (<CallChain>node).typeArguments,
            (<any>node).argumentList,
            (<CallChain>node).start,
            (<CallChain>node).end
          )
        : node;
    case SyntaxKind.ArrowFunctionType:
      return (<ArrowFunctionType>node).arrowTypeParameterList !==
        visitNode((<ArrowFunctionType>node).arrowTypeParameterList, visitor) ||
        (<ArrowFunctionType>node).arrowToken !== visitNode((<ArrowFunctionType>node).arrowToken, visitor) ||
        (<ArrowFunctionType>node).returnType !== visitNode((<ArrowFunctionType>node).returnType, visitor) ||
        (<ArrowFunctionType>node).typeParameters !== visitNode((<ArrowFunctionType>node).typeParameters, visitor)
        ? createArrowFunctionType(
            (<ArrowFunctionType>node).arrowTypeParameterList,
            (<ArrowFunctionType>node).arrowToken,
            (<ArrowFunctionType>node).returnType,
            (<ArrowFunctionType>node).typeParameters,
            (<ArrowFunctionType>node).start,
            (<ArrowFunctionType>node).end
          )
        : node;
    case SyntaxKind.ArrowTypeParameter:
      return (<ArrowTypeParameter>node).ellipsisToken !==
        visitNode((<ArrowTypeParameter>node).ellipsisToken, visitor) ||
        (<ArrowTypeParameter>node).name !== visitNode((<ArrowTypeParameter>node).name, visitor) ||
        (<ArrowTypeParameter>node).optionalToken !== visitNode((<ArrowTypeParameter>node).optionalToken, visitor) ||
        (<ArrowTypeParameter>node).types !== visitNode((<ArrowTypeParameter>node).types, visitor)
        ? createArrowTypeParameter(
            (<ArrowTypeParameter>node).ellipsisToken,
            (<ArrowTypeParameter>node).name,
            (<ArrowTypeParameter>node).optionalToken,
            (<ArrowTypeParameter>node).types,
            (<ArrowTypeParameter>node).start,
            (<ArrowTypeParameter>node).end
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
      return (<ObjectTypeCallProperty>node).protoKeyword !==
        visitNode((<ObjectTypeCallProperty>node).protoKeyword, visitor) ||
        (<ObjectTypeCallProperty>node).typeParameter !==
          visitNode((<ObjectTypeCallProperty>node).typeParameter, visitor) ||
        (<ObjectTypeCallProperty>node).value !== visitNode((<ObjectTypeCallProperty>node).value, visitor) ||
        (<ObjectTypeCallProperty>node).staticToken !== visitNode((<ObjectTypeCallProperty>node).staticToken, visitor) ||
        (<ObjectTypeCallProperty>node).returnType !== visitNode((<ObjectTypeCallProperty>node).returnType, visitor)
        ? createObjectTypeCallProperty(
            (<ObjectTypeCallProperty>node).protoKeyword,
            (<ObjectTypeCallProperty>node).typeParameter,
            (<ObjectTypeCallProperty>node).value,
            (<ObjectTypeCallProperty>node).staticToken,
            (<ObjectTypeCallProperty>node).returnType,
            (<ObjectTypeCallProperty>node).start,
            (<ObjectTypeCallProperty>node).end
          )
        : node;
    case SyntaxKind.ObjectTypeIndexer:
      return (<ObjectTypeIndexer>node).protoKeyword !== visitNode((<ObjectTypeIndexer>node).protoKeyword, visitor) ||
        (<ObjectTypeIndexer>node).name !== visitNode((<ObjectTypeIndexer>node).name, visitor) ||
        (<ObjectTypeIndexer>node).key !== visitNode((<ObjectTypeIndexer>node).key, visitor) ||
        (<ObjectTypeIndexer>node).staticToken !== visitNode((<ObjectTypeIndexer>node).staticToken, visitor) ||
        (<ObjectTypeIndexer>node).type !== visitNode((<ObjectTypeIndexer>node).type, visitor)
        ? createObjectTypeIndexer(
            (<ObjectTypeIndexer>node).protoKeyword,
            (<ObjectTypeIndexer>node).staticToken,
            (<ObjectTypeIndexer>node).name,
            (<ObjectTypeIndexer>node).key,
            (<ObjectTypeIndexer>node).type,
            (<ObjectTypeIndexer>node).start,
            (<ObjectTypeIndexer>node).end
          )
        : node;
    case SyntaxKind.ObjectTypeInternalSlot:
      return (<ObjectTypeInternalSlot>node).protoKeyword !==
        visitNode((<ObjectTypeInternalSlot>node).protoKeyword, visitor) ||
        (<ObjectTypeInternalSlot>node).optionalToken !==
          visitNode((<ObjectTypeInternalSlot>node).optionalToken, visitor) ||
        (<ObjectTypeInternalSlot>node).staticToken !== visitNode((<ObjectTypeInternalSlot>node).staticToken, visitor) ||
        (<ObjectTypeInternalSlot>node).value !== visitNode((<ObjectTypeInternalSlot>node).value, visitor)
        ? createObjectTypeInternalSlot(
            (<ObjectTypeInternalSlot>node).protoKeyword,
            (<ObjectTypeInternalSlot>node).name,
            (<ObjectTypeInternalSlot>node).optionalToken,
            (<ObjectTypeInternalSlot>node).staticToken,
            (<ObjectTypeInternalSlot>node).value,
            (<ObjectTypeInternalSlot>node).start,
            (<ObjectTypeInternalSlot>node).end
          )
        : node;
    case SyntaxKind.ObjectTypeProperty:
      return (<ObjectTypeProperty>node).getKeyword !== visitNode((<ObjectTypeProperty>node).getKeyword, visitor) ||
        (<ObjectTypeProperty>node).setKeyword !== visitNode((<ObjectTypeProperty>node).setKeyword, visitor) ||
        (<ObjectTypeProperty>node).key !== visitNode((<ObjectTypeProperty>node).key, visitor) ||
        (<ObjectTypeProperty>node).value !== visitNode((<ObjectTypeProperty>node).value, visitor) ||
        (<ObjectTypeProperty>node).optionalToken !== visitNode((<ObjectTypeProperty>node).optionalToken, visitor) ||
        (<ObjectTypeProperty>node).staticToken !== visitNode((<ObjectTypeProperty>node).staticToken, visitor) ||
        (<ObjectTypeProperty>node).protoKeyword !== visitNode((<ObjectTypeProperty>node).protoKeyword, visitor)
        ? createObjectTypeProperty(
            (<ObjectTypeProperty>node).getKeyword,
            (<ObjectTypeProperty>node).setKeyword,
            (<ObjectTypeProperty>node).key,
            (<ObjectTypeProperty>node).value,
            (<ObjectTypeProperty>node).optionalToken,
            (<ObjectTypeProperty>node).staticToken,
            (<ObjectTypeProperty>node).protoKeyword,
            (<ObjectTypeProperty>node).start,
            (<ObjectTypeProperty>node).end
          )
        : node;
    case SyntaxKind.OpaqueType:
      return (<OpaqueType>node).declareToken !== visitNode((<OpaqueType>node).declareToken, visitor) ||
        (<OpaqueType>node).opaqueToken !== visitNode((<OpaqueType>node).opaqueToken, visitor) ||
        (<OpaqueType>node).typeToken !== visitNode((<OpaqueType>node).typeToken, visitor) ||
        (<OpaqueType>node).name !== visitNode((<OpaqueType>node).name, visitor) ||
        (<OpaqueType>node).typeParameters !== visitNode((<OpaqueType>node).typeParameters, visitor) ||
        (<OpaqueType>node).superType !== visitNode((<OpaqueType>node).superType, visitor) ||
        (<OpaqueType>node).impltype !== visitNode((<OpaqueType>node).impltype, visitor)
        ? createOpaqueType(
            (<OpaqueType>node).declareToken,
            (<OpaqueType>node).opaqueToken,
            (<OpaqueType>node).typeToken,
            (<OpaqueType>node).name,
            (<OpaqueType>node).typeParameters,
            (<OpaqueType>node).superType,
            (<OpaqueType>node).impltype,
            (<OpaqueType>node).start,
            (<OpaqueType>node).end
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
