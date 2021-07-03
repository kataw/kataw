import { SyntaxToken, TokenSyntaxKind } from './ast/token';
import { SyntaxKind, SyntaxNode, NodeFlags } from './ast/syntax-node';
import { createRootNode, RootNode } from './ast/root-node';
import { StatementNode } from './ast/statements';
import { createAssignmentExpression, AssignmentExpression } from './ast/expressions/assignment-expr';
import { createForBinding, ForBinding } from './ast/statements/for-binding';
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
import { createIndexExpressionChain, IndexExpressionChain } from './ast/expressions/index-expr-chain';
import { createMemberAccessChain, MemberAccessChain } from './ast/expressions/member-access-chain';
import { createMemberAccessExpression, MemberAccessExpression } from './ast/expressions/member-access-expr';
import { createStaticBlock, StaticBlock } from './ast/expressions/static-block';
import { createYieldExpression, YieldExpression } from './ast/expressions/yield-expr';
import { createBindingPropertyList, BindingPropertyList } from './ast/expressions/binding-property-list';
import { createCallExpression, CallExpression } from './ast/expressions/call-expr';
import { createCallChain, CallChain } from './ast/expressions/call-chain';
import { createClassBody, ClassBody } from './ast/expressions/class-body';
import { createClassTail, ClassTail } from './ast/expressions/class-tail';
import { createOptionalChain, OptionalChain } from './ast/expressions/optional-chain';
import { createOptionalExpression, OptionalExpression } from './ast/expressions/optional-expr';
import { createCommaOperator, CommaOperator } from './ast/expressions/comma-operator';
import { createTemplateSpan, TemplateSpan } from './ast/expressions/template-span';
import { createClassElement, ClassElement } from './ast/expressions/class-element';
import { createClassExpression, ClassExpression } from './ast/expressions/class-expr';
import { createClassHeritage, ClassHeritage } from './ast/expressions/class-heritage';
import { createComputedPropertyName, ComputedPropertyName } from './ast/expressions/computed-property-name';
import { createConditionalExpression, ConditionalExpression } from './ast/expressions/conditional-expr';
import { createCoverInitializedName, CoverInitializedName } from './ast/expressions/cover-initialized-name';
import { createElementList, ElementList } from './ast/expressions/element-list';
import { createFieldDefinition, FieldDefinition } from './ast/expressions/field-definition';
import { createTaggedTemplate, TaggedTemplate } from './ast/expressions/tagged-template';
import { createFunctionExpression, FunctionExpression } from './ast/expressions/function-expr';
import { createUnaryExpression, UnaryExpression } from './ast/expressions/unary-expr';
import { createFunctionStatementList, FunctionStatementList } from './ast/expressions/function-stmt-list';
import { createFunctionBody, FunctionBody } from './ast/expressions/function-body';
import { createImportCall, ImportCall } from './ast/expressions/import-call';
import { createMethodDefinition, MethodDefinition } from './ast/expressions/method-definition';
import { createPropertyMethod, PropertyMethod } from './ast/expressions/property-method';
import { createNewExpression, NewExpression } from './ast/expressions/new-expr';
import { createObjectBindingPattern, ObjectBindingPattern } from './ast/expressions/object-binding-pattern';
import { createObjectLiteral, ObjectLiteral } from './ast/expressions/object-literal';
import { createParenthesizedExpression, ParenthesizedExpression } from './ast/expressions/parenthesized-expr';
import { createPostfixUpdateExpression, PostfixUpdateExpression } from './ast/expressions/postfix-update-expr';
import { createPrefixUpdateExpression, PrefixUpdateExpression } from './ast/expressions/prefix-update-expr';
import { createPropertyDefinition, PropertyDefinition } from './ast/expressions/property-definition';
import { createPropertyDefinitionList, PropertyDefinitionList } from './ast/expressions/property-definition-list';
import { createSpreadProperty, SpreadProperty } from './ast/expressions/spread-property';
import { createTemplateExpression, TemplateExpression } from './ast/expressions/template-expression';
import { createBindingList, BindingList } from './ast/statements/binding-list';
import { createVariableStatement, VariableStatement } from './ast/statements/variable-stmt';
import { createBlock, Block } from './ast/statements/block';
import { createBlockStatement, BlockStatement } from './ast/statements/block-stmt';
import { createArrowPatameterList, ArrowPatameterList } from './ast/expressions/arrow-parameter-list';
import { createBreakStatement, BreakStatement } from './ast/statements/break-stmt';
import { createContinueStatement, ContinueStatement } from './ast/statements/continue-stmt';
import { createDefaultClause, DefaultClause } from './ast/statements/default-clause';
import { createCaseClause, CaseClause } from './ast/statements/case-clause';
import { createDoWhileStatement, DoWhileStatement } from './ast/statements/do-stmt';
import { createForInStatement, ForInStatement } from './ast/statements/for-in-stmt';
import { createForOfStatement, ForOfStatement } from './ast/statements/for-of-stmt';
import { createForStatement, ForStatement } from './ast/statements/for-stmt';
import { createIfStatement, IfStatement } from './ast/statements/if-stmt';
import { createLabelledStatement, LabelledStatement } from './ast/statements/labelled-stmt';
import { createLexicalBinding, LexicalBinding } from './ast/statements/lexical-binding';
import { createReturnStatement, ReturnStatement } from './ast/statements/return-stmt';
import { createSwitchStatement, SwitchStatement } from './ast/statements/switch-stmt';
import { createThrowStatement, ThrowStatement } from './ast/statements/throw-stmt';
import { createCaseBlock, CaseBlock } from './ast/statements/case-block';
import { createTryStatement, TryStatement } from './ast/statements/try-stmt';
import { createVariableDeclaration, VariableDeclaration } from './ast/statements/variable-declaration';
import { createVariableDeclarationList, VariableDeclarationList } from './ast/statements/variable-declarationList';
import { createWhileStatement, WhileStatement } from './ast/statements/while-stmt';
import { createWithStatement, WithStatement } from './ast/statements/with-stmt';
import { createFunctionDeclaration, FunctionDeclaration } from './ast/statements/function-declaration';
import { createLexicalDeclaration, LexicalDeclaration } from './ast/statements/lexical-declaration';
import { createClassDeclaration, ClassDeclaration } from './ast/statements/class-declaration';
import { createCatch, CatchClause } from './ast/statements/catch-stmt';
import { createArrayType, ArrayType } from './ast/types/array-type';
import { createArrowFunctionType, ArrowFunctionType } from './ast/types/arrow-function-type';
import { createArrowTypeParameter, ArrowTypeParameter } from './ast/types/arrow-type-parameter';
import { createArrowTypeParameterList, ArrowTypeParameterList } from './ast/types/arrow-type-parameter-list';
import { createFunctionTypeParameterList, FunctionTypeParameterList } from './ast/types/function-type-parameter-list';
import { createFunctionTypeParameters, FunctionTypeParameter } from './ast/types/function-type-parameter';
import { createNullableType, NullableType } from './ast/types/nullable-type';
import { createObjectTypeCallProperty, ObjectTypeCallProperty } from './ast/types/object-type-call-property';
import { createObjectTypeIndexer, ObjectTypeIndexer } from './ast/types/object-type-indexer';
import { createObjectTypeInternalSlot, ObjectTypeInternalSlot } from './ast/types/object-type-internal-slot';
import { createObjectTypeProperty, ObjectTypeProperty } from './ast/types/object-type-property';
import { createOpaqueType, OpaqueType } from './ast/types/opaque-type';
import { createQualifiedType, QualifiedType } from './ast/types/qualified-type';
import { createTypeInstantiations, TypeInstantiations } from './ast/types/type-instantiations';
import { createTypeAnnotation, TypeAnnotation } from './ast/types/type-annotation';
import { createTypeParameterDeclaration, TypeParameterDeclaration } from './ast/types/type-parameter-declaration';
import { createTypeParameterInstantiation, TypeParameterInstantiation } from './ast/types/type-parameter-instantiation';
import { createTypeParameterList, TypeParameterList } from './ast/types/type-parameter-list';
import { createTypeofType, TypeofType } from './ast/types/typeof-type';
import { createTypeReference, TypeReference } from './ast/types/type-reference';
import { createFunctionType, FunctionType } from './ast/types/function-type';
import { createIndexedAccessType, IndexedAccessType } from './ast/types/indexed-access-type';
import { createIntersectionType, IntersectionType } from './ast/types/intersection-type';
import { createOptionalType, OptionalType } from './ast/types/optional-type';
import { createParenthesizedType, ParenthesizedType } from './ast/types/parenthesized-type';
import { createRestType, RestType } from './ast/types/rest-type';
import { createTupleType, TupleType } from './ast/types/tuple-type';
import { createTypeParameter, TypeParameter } from './ast/types/type-parameter';
import { createUnionType, UnionType } from './ast/types/union-type';
import { createDecoratorList, DecoratorList } from './ast/expressions/decorator-list';
import { createDecorator, Decorator } from './ast/expressions/decorators';
import { createFormalParameterList, FormalParameterList } from './ast/expressions/formal-parameter-list';
import { createImportClause, ImportClause } from './ast/module/import-clause';
import { createNameSpaceImport, NameSpaceImport } from './ast/module/namespace-import';
import { createExportDefault, ExportDefault } from './ast/module/export-default';
import { createExportDeclaration, ExportDeclaration } from './ast/module/export-declaration';
import { createExportFromClause, ExportFromClause } from './ast/module/export-from-clause';
import { createExportSpecifier, ExportSpecifier } from './ast/module/export-specifier';
import { createExportsList, ExportsList } from './ast/module/exports-list';
import { createImportDeclaration, ImportDeclaration } from './ast/module/import-declaration';
import { createImportSpecifier, ImportSpecifier } from './ast/module/import-specifier';
import { createImportsList, ImportsList } from './ast/module/imports-list';
import { createNamedExports, NamedExports } from './ast/module/named-exports';
import { createNamedImports, NamedImports } from './ast/module/named-imports';
import { createSpreadElement, SpreadElement } from './ast/expressions/spread-element';
import { createIdentifier, Identifier } from './ast/expressions/identifier-expr';
import {
  createNamespaceExportDeclaration,
  NamespaceExportDeclaration
} from './ast/module/namespace-export-declaration';
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
  visitor: (node: SyntaxNode | null) => SyntaxKind | null
): SyntaxNode | null {
  if (!node) return null;

  if (node.flags & NodeFlags.NoChildren) return node;

  const kind = node.kind;

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
            (<AssignmentExpression>node).operatorToken,
            (<AssignmentExpression>node).right,
            (<AssignmentExpression>node).start,
            (<AssignmentExpression>node).end
          )
        : node;

    case SyntaxKind.ExpressionStatement:
      return (<ExpressionStatement>node).expression !== visitNode((<ExpressionStatement>node).expression, visitor)
        ? createExpressionStatement(
            (<ExpressionStatement>node).expression,
            (<ExpressionStatement>node).start,
            (<ExpressionStatement>node).end
          )
        : node;
    case SyntaxKind.ElementList:
      return (<ElementList>node).elements !== visitNodes((<ElementList>node).elements, visitor)
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
            (<ArrayLiteral>node).end
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
            (<BinaryExpression>node).operatorToken,
            (<BinaryExpression>node).right,
            (<BinaryExpression>node).flags,
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
      return (<PropertyDefinition>node).asteriskToken !==
        visitNode((<PropertyDefinition>node).asteriskToken, visitor) ||
        (<PropertyDefinition>node).left !== visitNode((<PropertyDefinition>node).left, visitor) ||
        (<PropertyDefinition>node).right !== visitNode((<PropertyDefinition>node).right, visitor)
        ? createPropertyDefinition(
            (<PropertyDefinition>node).asteriskToken,
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
      return (<ObjectBindingPattern>node).propertyList !== visitNode((<ObjectBindingPattern>node).propertyList, visitor)
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
        (<VariableDeclaration>node).type !== visitNode((<VariableDeclaration>node).type, visitor) ||
        (<VariableDeclaration>node).initializer !== visitNode((<VariableDeclaration>node).initializer, visitor)
        ? createVariableDeclaration(
            (<VariableDeclaration>node).binding,
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
    case SyntaxKind.PropertyMethod:
      return (<PropertyMethod>node).asteriskToken !== visitNode((<PropertyMethod>node).asteriskToken, visitor) ||
        (<PropertyMethod>node).asyncKeyword !== visitNode((<PropertyMethod>node).asyncKeyword, visitor) ||
        (<PropertyMethod>node).getKeyword !== visitNode((<PropertyMethod>node).getKeyword, visitor) ||
        (<PropertyMethod>node).setKeyword !== visitNode((<PropertyMethod>node).setKeyword, visitor) ||
        (<PropertyMethod>node).method !== visitNode((<PropertyMethod>node).method, visitor)
        ? createPropertyMethod(
            (<PropertyMethod>node).asteriskToken,
            (<PropertyMethod>node).asyncKeyword,
            (<PropertyMethod>node).getKeyword,
            (<PropertyMethod>node).setKeyword,
            (<PropertyMethod>node).method,
            (<PropertyMethod>node).start,
            (<PropertyMethod>node).end
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
      return (<ArrayBindingPattern>node).elementList !== visitNode((<ArrayBindingPattern>node).elementList, visitor)
        ? createArrayBindingPattern(
            (<ArrayBindingPattern>node).elementList,
            (<ArrayBindingPattern>node).flags,
            (<ArrayBindingPattern>node).start,
            (<ArrayBindingPattern>node).end
          )
        : node;
    case SyntaxKind.LexicalBinding:
      return (<LexicalBinding>node).binding !== visitNode((<LexicalBinding>node).binding, visitor) ||
        (<LexicalBinding>node).type !== visitNode((<LexicalBinding>node).type, visitor) ||
        (<LexicalBinding>node).initializer !== visitNode((<LexicalBinding>node).initializer, visitor)
        ? createLexicalBinding(
            (<LexicalBinding>node).binding,
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
    case SyntaxKind.ArrowPatameterList:
      return (<ArrowPatameterList>node).parameters !== visitNodes((<ArrowPatameterList>node).parameters, visitor)
        ? createArrowPatameterList(
            (<ArrowPatameterList>node).parameters,
            (<ArrowPatameterList>node).trailingComma,
            (<ArrowPatameterList>node).flags,
            (<ArrowPatameterList>node).start,
            (<ArrowPatameterList>node).end
          )
        : node;
    case SyntaxKind.ArrowFunction:
      return (<ArrowFunction>node).arrowToken !== visitNode((<ArrowFunction>node).arrowToken, visitor) ||
        (<ArrowFunction>node).typeParameters !== visitNode((<ArrowFunction>node).typeParameters, visitor) ||
        (<ArrowFunction>node).arrowPatameterList !== visitNodes((<any>node).arrowPatameterList, visitor) ||
        (<ArrowFunction>node).asyncKeyword !== visitNode((<ArrowFunction>node).asyncKeyword, visitor) ||
        (<ArrowFunction>node).returnType !== visitNode((<ArrowFunction>node).returnType, visitor) ||
        (<ArrowFunction>node).contents !== visitFunctionBody(transform, (<ArrowFunction>node).contents, visitor)
        ? createArrowFunction(
            (<ArrowFunction>node).arrowToken,
            (<ArrowFunction>node).typeParameters,
            (<ArrowFunction>node).arrowPatameterList,
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
    case SyntaxKind.ForBinding:
      return (<ForBinding>node).varKeyword !== visitNode((<ForBinding>node).varKeyword, visitor) ||
        (<ForBinding>node).declarationList !== visitNode((<ForBinding>node).declarationList, visitor)
        ? createForBinding(
            (<ForBinding>node).varKeyword,
            (<ForBinding>node).declarationList,
            (<ForBinding>node).start,
            (<ForBinding>node).end
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
      return (<BindingProperty>node).key !== visitNode((<BindingProperty>node).key, visitor) ||
        (<BindingProperty>node).value !== visitNode((<BindingProperty>node).value, visitor) ||
        (<BindingProperty>node).initializer !== visitNode((<BindingProperty>node).initializer, visitor)
        ? createBindingProperty(
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
    case SyntaxKind.Identifier:
      return (<Identifier>node).text !== visitNode((<any>node).rawText, visitor)
        ? createIdentifier(
            (<Identifier>node).text,
            (<Identifier>node).rawText,
            (<Identifier>node).flags,
            (<Identifier>node).start,
            (<Identifier>node).end
          )
        : node;
    case SyntaxKind.CommaOperator:
      return (<CommaOperator>node).expressions !== visitNodes((<CommaOperator>node).expressions, visitor)
        ? createCommaOperator((<CommaOperator>node).expressions, (<CommaOperator>node).start, (<CommaOperator>node).end)
        : node;
    case SyntaxKind.ComputedPropertyName:
      return (<ComputedPropertyName>node).expression !== visitNode((<ComputedPropertyName>node).expression, visitor)
        ? createComputedPropertyName(
            (<ComputedPropertyName>node).expression,
            (<ComputedPropertyName>node).start,
            (<ComputedPropertyName>node).end
          )
        : node;
    case SyntaxKind.ConditionalExpression:
      return (<ConditionalExpression>node).shortCircuit !==
        visitNode((<ConditionalExpression>node).shortCircuit, visitor) ||
        (<ConditionalExpression>node).questionToken !==
          visitNode((<ConditionalExpression>node).questionToken, visitor) ||
        (<ConditionalExpression>node).colonToken !== visitNode((<ConditionalExpression>node).colonToken, visitor) ||
        (<ConditionalExpression>node).alternate !== visitNode((<ConditionalExpression>node).alternate, visitor)
        ? createConditionalExpression(
            (<ConditionalExpression>node).shortCircuit,
            (<ConditionalExpression>node).questionToken,
            (<ConditionalExpression>node).consequent,
            (<ConditionalExpression>node).colonToken,
            (<ConditionalExpression>node).alternate,
            (<ConditionalExpression>node).flags,
            (<ConditionalExpression>node).start,
            (<ConditionalExpression>node).end
          )
        : node;
    case SyntaxKind.CoverInitializedName:
      return (<CoverInitializedName>node).left !== visitNode((<CoverInitializedName>node).left, visitor) ||
        (<CoverInitializedName>node).right !== visitNode((<CoverInitializedName>node).right, visitor)
        ? createCoverInitializedName(
            (<CoverInitializedName>node).left,
            (<CoverInitializedName>node).right,
            (<CoverInitializedName>node).start,
            (<CoverInitializedName>node).end
          )
        : node;
    case SyntaxKind.ReturnStatement:
      return (<ReturnStatement>node).returnKeyword !== visitNode((<ReturnStatement>node).returnKeyword, visitor) ||
        (<ReturnStatement>node).expression !== visitNode((<ReturnStatement>node).expression, visitor)
        ? createReturnStatement(
            (<ReturnStatement>node).returnKeyword,
            (<ReturnStatement>node).expression,
            (<ReturnStatement>node).flags,
            (<ReturnStatement>node).start,
            (<ReturnStatement>node).end
          )
        : node;
    case SyntaxKind.UnaryExpression:
      return (<UnaryExpression>node).operandToken !== visitNode((<UnaryExpression>node).operandToken, visitor) ||
        (<UnaryExpression>node).operand !== visitNode((<UnaryExpression>node).operand, visitor)
        ? createUnaryExpression(
            (<UnaryExpression>node).operandToken,
            (<UnaryExpression>node).operand,
            (<UnaryExpression>node).start,
            (<UnaryExpression>node).end
          )
        : node;
    case SyntaxKind.PostfixUpdateExpression:
      return (<PostfixUpdateExpression>node).operandToken !==
        visitNode((<PostfixUpdateExpression>node).operandToken, visitor) ||
        (<PostfixUpdateExpression>node).operand !== visitNode((<PostfixUpdateExpression>node).operand, visitor)
        ? createPostfixUpdateExpression(
            (<PostfixUpdateExpression>node).operandToken,
            (<PostfixUpdateExpression>node).operand,
            (<PostfixUpdateExpression>node).start,
            (<PostfixUpdateExpression>node).end
          )
        : node;
    case SyntaxKind.PrefixUpdateExpression:
      return (<PrefixUpdateExpression>node).operandToken !==
        visitNode((<PrefixUpdateExpression>node).operandToken, visitor) ||
        (<PrefixUpdateExpression>node).operand !== visitNode((<PrefixUpdateExpression>node).operand, visitor)
        ? createPrefixUpdateExpression(
            (<PrefixUpdateExpression>node).operandToken,
            (<PrefixUpdateExpression>node).operand,
            (<PrefixUpdateExpression>node).start,
            (<PrefixUpdateExpression>node).end
          )
        : node;
    case SyntaxKind.NewExpression:
      return (<NewExpression>node).newKeyword !== visitNode((<NewExpression>node).newKeyword, visitor) ||
        (<NewExpression>node).expression !== visitNode((<NewExpression>node).expression, visitor) ||
        (<NewExpression>node).argumentList !== visitNode((<NewExpression>node).argumentList, visitor)
        ? createNewExpression(
            (<NewExpression>node).newKeyword,
            (<NewExpression>node).expression,
            (<NewExpression>node).argumentList,
            (<NewExpression>node).flags,
            (<NewExpression>node).start,
            (<NewExpression>node).end
          )
        : node;
    case SyntaxKind.SpreadProperty:
      return (<SpreadProperty>node).ellipsisToken !== visitNode((<SpreadProperty>node).ellipsisToken, visitor) ||
        (<SpreadProperty>node).argument !== visitNode((<SpreadProperty>node).argument, visitor)
        ? createSpreadProperty(
            (<SpreadProperty>node).ellipsisToken,
            (<SpreadProperty>node).argument,
            (<SpreadProperty>node).start,
            (<SpreadProperty>node).end
          )
        : node;
    case SyntaxKind.ForInStatement:
      return (<ForInStatement>node).forKeyword !== visitNode((<ForInStatement>node).forKeyword, visitor) ||
        (<ForInStatement>node).inKeyword !== visitNode((<ForInStatement>node).inKeyword, visitor) ||
        (<ForInStatement>node).initializer !== visitNode((<ForInStatement>node).initializer, visitor) ||
        (<ForInStatement>node).expression !== visitNode((<ForInStatement>node).expression, visitor) ||
        (<ForInStatement>node).statement !== visitNode((<ForInStatement>node).statement, visitor)
        ? createForInStatement(
            (<ForInStatement>node).forKeyword,
            (<ForInStatement>node).inKeyword,
            (<ForInStatement>node).initializer,
            (<ForInStatement>node).expression,
            (<ForInStatement>node).statement,
            (<ForInStatement>node).flags,
            (<ForInStatement>node).start,
            (<ForInStatement>node).end
          )
        : node;
    case SyntaxKind.ForOfStatement:
      return (<ForOfStatement>node).forKeyword !== visitNode((<ForOfStatement>node).forKeyword, visitor) ||
        (<ForOfStatement>node).ofKeyword !== visitNode((<ForOfStatement>node).ofKeyword, visitor) ||
        (<ForOfStatement>node).initializer !== visitNode((<ForOfStatement>node).initializer, visitor) ||
        (<ForOfStatement>node).expression !== visitNode((<ForOfStatement>node).expression, visitor) ||
        (<ForOfStatement>node).statement !== visitNode((<ForOfStatement>node).statement, visitor) ||
        (<ForOfStatement>node).awaitKeyword !== visitNode((<ForOfStatement>node).awaitKeyword, visitor)
        ? createForOfStatement(
            (<ForOfStatement>node).forKeyword,
            (<ForOfStatement>node).ofKeyword,
            (<ForOfStatement>node).initializer,
            (<ForOfStatement>node).expression,
            (<ForOfStatement>node).statement,
            (<ForOfStatement>node).awaitKeyword,
            (<ForOfStatement>node).flags,
            (<ForOfStatement>node).start,
            (<ForOfStatement>node).end
          )
        : node;
    case SyntaxKind.ForStatement:
      return (<ForStatement>node).forKeyword !== visitNode((<ForStatement>node).forKeyword, visitor) ||
        (<ForStatement>node).initializer !== visitNode((<ForStatement>node).initializer, visitor) ||
        (<ForStatement>node).condition !== visitNode((<ForStatement>node).condition, visitor) ||
        (<ForStatement>node).incrementor !== visitNode((<ForStatement>node).incrementor, visitor) ||
        (<ForStatement>node).statement !== visitNode((<ForStatement>node).statement, visitor)
        ? createForStatement(
            (<ForStatement>node).forKeyword,
            (<ForStatement>node).initializer,
            (<ForStatement>node).condition,
            (<ForStatement>node).incrementor,
            (<ForStatement>node).statement,
            (<ForStatement>node).flags,
            (<ForStatement>node).start,
            (<ForStatement>node).end
          )
        : node;
    case SyntaxKind.TaggedTemplate:
      return (<TaggedTemplate>node).member !== visitNode((<TaggedTemplate>node).member, visitor) ||
        (<TaggedTemplate>node).template !== visitNode((<TaggedTemplate>node).template, visitor)
        ? createTaggedTemplate(
            (<TaggedTemplate>node).member,
            (<TaggedTemplate>node).template,
            (<TaggedTemplate>node).start,
            (<TaggedTemplate>node).end
          )
        : node;
    case SyntaxKind.SpreadElement:
      return (<SpreadElement>node).ellipsisToken !== visitNode((<SpreadElement>node).ellipsisToken, visitor) ||
        (<SpreadElement>node).argument !== visitNode((<SpreadElement>node).argument, visitor)
        ? createSpreadElement(
            (<SpreadElement>node).ellipsisToken,
            (<SpreadElement>node).argument,
            (<SpreadElement>node).start,
            (<SpreadElement>node).end
          )
        : node;
    case SyntaxKind.TemplateExpression:
      return (<TemplateExpression>node).spans !== visitNodes((<TemplateExpression>node).spans, visitor) ||
        (<TemplateExpression>node).tail !== visitNode((<TemplateExpression>node).tail, visitor)
        ? createTemplateExpression(
            (<TemplateExpression>node).spans,
            (<TemplateExpression>node).tail,
            (<TemplateExpression>node).flags,
            (<TemplateExpression>node).start,
            (<TemplateExpression>node).end
          )
        : node;
    case SyntaxKind.TemplateSpan:
      return (<TemplateSpan>node).expression !== visitNode((<TemplateSpan>node).expression, visitor)
        ? createTemplateSpan(
            (<TemplateSpan>node).rawText,
            (<TemplateSpan>node).text,
            (<TemplateSpan>node).expression,
            (<TemplateSpan>node).start,
            (<TemplateSpan>node).end
          )
        : node;
    case SyntaxKind.ClassElement:
      return (<ClassElement>node).declareToken !== visitNode((<ClassElement>node).declareToken, visitor) ||
        (<ClassElement>node).decorators !== visitNode((<ClassElement>node).decorators, visitor) ||
        (<ClassElement>node).asteriskToken !== visitNode((<ClassElement>node).asteriskToken, visitor) ||
        (<ClassElement>node).staticKeyword !== visitNode((<ClassElement>node).staticKeyword, visitor) ||
        (<ClassElement>node).asyncKeyword !== visitNode((<ClassElement>node).asyncKeyword, visitor) ||
        (<ClassElement>node).setKeyword !== visitNode((<ClassElement>node).setKeyword, visitor) ||
        (<ClassElement>node).getKeyword !== visitNode((<ClassElement>node).getKeyword, visitor) ||
        (<ClassElement>node).method !== visitNode((<ClassElement>node).method, visitor)
        ? createClassElement(
            (<ClassElement>node).declareToken,
            (<ClassElement>node).decorators,
            (<ClassElement>node).asteriskToken,
            (<ClassElement>node).staticKeyword,
            (<ClassElement>node).asyncKeyword,
            (<ClassElement>node).setKeyword,
            (<ClassElement>node).getKeyword,
            (<ClassElement>node).method,
            (<ClassElement>node).flags,
            (<ClassElement>node).start,
            (<ClassElement>node).end
          )
        : node;
    case SyntaxKind.ClassExpression:
      return (<ClassExpression>node).decorators !== visitNode((<ClassExpression>node).decorators, visitor) ||
        (<ClassExpression>node).classKeyword !== visitNode((<ClassExpression>node).classKeyword, visitor) ||
        (<ClassExpression>node).name !== visitNode((<ClassExpression>node).name, visitor) ||
        (<ClassExpression>node).typeParameters !== visitNode((<ClassExpression>node).typeParameters, visitor) ||
        (<ClassExpression>node).tail !== visitNode((<ClassExpression>node).tail, visitor)
        ? createClassExpression(
            (<ClassExpression>node).decorators,
            (<ClassExpression>node).classKeyword,
            (<ClassExpression>node).name,
            (<ClassExpression>node).typeParameters,
            (<ClassExpression>node).tail,
            (<ClassExpression>node).flags,
            (<ClassExpression>node).start,
            (<ClassExpression>node).end
          )
        : node;
    case SyntaxKind.BreakStatement:
      return (<BreakStatement>node).breakKeyword !== visitNode((<BreakStatement>node).breakKeyword, visitor) ||
        (<BreakStatement>node).label !== visitNode((<BreakStatement>node).label, visitor)
        ? createBreakStatement(
            (<BreakStatement>node).breakKeyword,
            (<BreakStatement>node).label,
            (<BreakStatement>node).start,
            (<BreakStatement>node).end
          )
        : node;
    case SyntaxKind.ContinueStatement:
      return (<ContinueStatement>node).continueKeyword !==
        visitNode((<ContinueStatement>node).continueKeyword, visitor) ||
        (<ContinueStatement>node).label !== visitNode((<ContinueStatement>node).label, visitor)
        ? createContinueStatement(
            (<ContinueStatement>node).continueKeyword,
            (<ContinueStatement>node).label,
            (<ContinueStatement>node).start,
            (<ContinueStatement>node).end
          )
        : node;
    case SyntaxKind.CaseClause:
      return (<CaseClause>node).caseKeyword !== visitNode((<CaseClause>node).caseKeyword, visitor) ||
        (<CaseClause>node).expression !== visitNode((<CaseClause>node).expression, visitor) ||
        (<CaseClause>node).statements !== visitNodes((<CaseClause>node).statements, visitor)
        ? createCaseClause(
            (<CaseClause>node).caseKeyword,
            (<CaseClause>node).expression,
            (<CaseClause>node).colonToken,
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
            (<CaseClause>node).colonToken,
            (<DefaultClause>node).statements,
            (<DefaultClause>node).start,
            (<DefaultClause>node).end
          )
        : node;
    case SyntaxKind.Catch:
      return (<CatchClause>node).catchKeyword !== visitNode((<CatchClause>node).catchKeyword, visitor) ||
        (<CatchClause>node).catchParameter !== visitNode((<CatchClause>node).catchParameter, visitor) ||
        (<CatchClause>node).block !== visitNode((<CatchClause>node).block, visitor)
        ? createCatch(
            (<CatchClause>node).catchKeyword,
            (<CatchClause>node).catchParameter,
            (<CatchClause>node).block,
            (<CatchClause>node).flags,
            (<CatchClause>node).start,
            (<CatchClause>node).end
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
      return (<LabelledStatement>node).label !== visitNode((<LabelledStatement>node).label, visitor) ||
        (<LabelledStatement>node).colonToken !== visitNode((<LabelledStatement>node).colonToken, visitor) ||
        (<LabelledStatement>node).statement !== visitNode((<LabelledStatement>node).statement, visitor)
        ? createLabelledStatement(
            (<LabelledStatement>node).label,
            (<LabelledStatement>node).colonToken,
            (<LabelledStatement>node).statement,
            (<LabelledStatement>node).flags,
            (<LabelledStatement>node).start,
            (<LabelledStatement>node).end
          )
        : node;

    case SyntaxKind.SwitchStatement:
      return (<SwitchStatement>node).switchKeyword !== visitNode((<SwitchStatement>node).switchKeyword, visitor) ||
        (<SwitchStatement>node).expression !== visitNode((<SwitchStatement>node).expression, visitor) ||
        (<SwitchStatement>node).caseBlock !== visitNode((<SwitchStatement>node).caseBlock, visitor)
        ? createSwitchStatement(
            (<SwitchStatement>node).switchKeyword,
            (<SwitchStatement>node).expression,
            (<SwitchStatement>node).caseBlock,
            (<SwitchStatement>node).flags,
            (<SwitchStatement>node).start,
            (<SwitchStatement>node).end
          )
        : node;

    case SyntaxKind.ThrowStatement:
      return (<ThrowStatement>node).throwKeyword !== visitNode((<ThrowStatement>node).throwKeyword, visitor) ||
        (<ThrowStatement>node).expression !== visitNode((<ThrowStatement>node).expression, visitor)
        ? createThrowStatement(
            (<ThrowStatement>node).throwKeyword,
            (<ThrowStatement>node).expression,
            (<ThrowStatement>node).flags,
            (<ThrowStatement>node).start,
            (<ThrowStatement>node).end
          )
        : node;

    case SyntaxKind.CaseBlock:
      return (<CaseBlock>node).clauses !== visitNodes((<CaseBlock>node).clauses, visitor)
        ? createCaseBlock((<CaseBlock>node).clauses, (<CaseBlock>node).start, (<CaseBlock>node).end)
        : node;
    case SyntaxKind.IndexExpression:
      return (<IndexExpression>node).member !== visitNode((<IndexExpression>node).member, visitor) ||
        (<IndexExpression>node).expression !== visitNode((<IndexExpression>node).expression, visitor)
        ? createIndexExpression(
            (<IndexExpression>node).member,
            (<IndexExpression>node).expression,
            (<IndexExpression>node).flags,
            (<IndexExpression>node).start,
            (<IndexExpression>node).end
          )
        : node;
    case SyntaxKind.IndexExpressionChain:
      return (<IndexExpressionChain>node).chain !== visitNode((<IndexExpressionChain>node).chain, visitor) ||
        (<IndexExpressionChain>node).expression !== visitNode((<IndexExpressionChain>node).expression, visitor)
        ? createIndexExpressionChain(
            (<IndexExpressionChain>node).chain,
            (<IndexExpressionChain>node).expression,
            (<IndexExpressionChain>node).start,
            (<IndexExpressionChain>node).end
          )
        : node;
    case SyntaxKind.MemberAccessChain:
      return (<MemberAccessChain>node).chain !== visitNode((<MemberAccessChain>node).chain, visitor) ||
        (<MemberAccessChain>node).expression !== visitNode((<MemberAccessChain>node).expression, visitor)
        ? createMemberAccessChain(
            (<MemberAccessChain>node).chain,
            (<MemberAccessChain>node).expression,
            (<MemberAccessChain>node).start,
            (<MemberAccessChain>node).end
          )
        : node;

    case SyntaxKind.MemberAccessExpression:
      return (<MemberAccessExpression>node).member !== visitNode((<MemberAccessExpression>node).member, visitor) ||
        (<MemberAccessExpression>node).expression !== visitNode((<MemberAccessExpression>node).expression, visitor)
        ? createMemberAccessExpression(
            (<MemberAccessExpression>node).member,
            (<MemberAccessExpression>node).expression,
            (<MemberAccessExpression>node).start,
            (<MemberAccessExpression>node).end
          )
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
      return (<YieldExpression>node).yieldKeyword !== visitNode((<YieldExpression>node).yieldKeyword, visitor) ||
        (<YieldExpression>node).asteriskToken !== visitNode((<YieldExpression>node).asteriskToken, visitor) ||
        (<YieldExpression>node).expression !== visitNode((<YieldExpression>node).expression, visitor)
        ? createYieldExpression(
            (<YieldExpression>node).yieldKeyword,
            (<YieldExpression>node).delegate,
            (<YieldExpression>node).asteriskToken,
            (<YieldExpression>node).expression,
            (<YieldExpression>node).start,
            (<YieldExpression>node).end
          )
        : node;
    case SyntaxKind.TryStatement:
      return (<TryStatement>node).tryKeyword !== visitNode((<TryStatement>node).tryKeyword, visitor) ||
        (<TryStatement>node).block !== visitNode((<TryStatement>node).block, visitor) ||
        (<TryStatement>node).catchClause !== visitNode((<TryStatement>node).catchClause, visitor) ||
        (<TryStatement>node).finallyKeyword !== visitNode((<TryStatement>node).finallyKeyword, visitor) ||
        (<TryStatement>node).finallyBlock !== visitNode((<TryStatement>node).finallyBlock, visitor)
        ? createTryStatement(
            (<TryStatement>node).tryKeyword,
            (<TryStatement>node).block,
            (<TryStatement>node).catchClause,
            (<TryStatement>node).finallyKeyword,
            (<TryStatement>node).finallyBlock,
            (<TryStatement>node).start,
            (<TryStatement>node).end
          )
        : node;

    case SyntaxKind.WhileStatement:
      return (<WhileStatement>node).whileKeyword !== visitNode((<WhileStatement>node).whileKeyword, visitor) ||
        (<WhileStatement>node).expression !== visitNode((<WhileStatement>node).expression, visitor) ||
        (<WhileStatement>node).statement !== visitNode((<WhileStatement>node).statement, visitor)
        ? createWhileStatement(
            (<WhileStatement>node).whileKeyword,
            (<WhileStatement>node).expression,
            (<WhileStatement>node).statement,
            (<WhileStatement>node).flags,
            (<WhileStatement>node).start,
            (<WhileStatement>node).end
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
        (<FunctionDeclaration>node).asteriskToken !== visitNode((<FunctionDeclaration>node).asteriskToken, visitor) ||
        (<FunctionDeclaration>node).formalParameterList !==
          visitNode((<FunctionDeclaration>node).formalParameterList, visitor) ||
        (<FunctionDeclaration>node).contents !==
          visitFunctionBody(transform, (<FunctionDeclaration>node).contents, visitor) ||
        (<FunctionDeclaration>node).typeParameters !== visitNode((<FunctionDeclaration>node).typeParameters, visitor) ||
        (<FunctionDeclaration>node).returnType !== visitNode((<FunctionDeclaration>node).returnType, visitor)
        ? createFunctionDeclaration(
            (<FunctionDeclaration>node).declareKeyword,
            (<FunctionDeclaration>node).asyncKeyword,
            (<FunctionDeclaration>node).functionKeyword,
            (<FunctionDeclaration>node).asteriskToken,
            (<FunctionDeclaration>node).name,
            (<FunctionDeclaration>node).formalParameterList,
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
        (<FunctionExpression>node).asteriskToken !== visitNode((<FunctionExpression>node).asteriskToken, visitor) ||
        (<FunctionExpression>node).name !== visitNode((<FunctionExpression>node).name, visitor) ||
        (<FunctionExpression>node).formalParameterList !==
          visitNode((<FunctionExpression>node).formalParameterList, visitor) ||
        (<FunctionExpression>node).contents !==
          visitFunctionBody(transform, (<FunctionExpression>node).contents, visitor) ||
        (<FunctionExpression>node).typeParameters !== visitNode((<FunctionExpression>node).typeParameters, visitor) ||
        (<FunctionExpression>node).returnType !== visitNode((<FunctionExpression>node).returnType, visitor)
        ? createFunctionExpression(
            (<FunctionExpression>node).asyncKeyword,
            (<FunctionExpression>node).functionKeyword,
            (<FunctionExpression>node).asteriskToken,
            (<FunctionExpression>node).name,
            (<FunctionExpression>node).formalParameterList,
            (<FunctionExpression>node).contents,
            (<FunctionExpression>node).typeParameters,
            (<FunctionExpression>node).returnType,
            (<FunctionExpression>node).flags,
            (<FunctionExpression>node).start,
            (<FunctionExpression>node).end
          )
        : node;

    case SyntaxKind.DecoratorList:
      return (<DecoratorList>node).elements !== visitNodes((<DecoratorList>node).elements, visitor)
        ? createDecoratorList((<DecoratorList>node).elements, (<DecoratorList>node).start, (<DecoratorList>node).end)
        : node;

    case SyntaxKind.Decorator:
      return (<Decorator>node).decoratorToken !== visitNode((<Decorator>node).decoratorToken, visitor) ||
        (<Decorator>node).expression !== visitNode((<Decorator>node).expression, visitor)
        ? createDecorator(
            (<Decorator>node).decoratorToken,
            (<Decorator>node).expression,
            (<Decorator>node).flags,
            (<Decorator>node).start,
            (<Decorator>node).end
          )
        : node;

    case SyntaxKind.FormalParameterList:
      return (<FormalParameterList>node).formalParameters !==
        visitParameterList(transform, (<FormalParameterList>node).formalParameters, visitor)
        ? createFormalParameterList(
            (<FormalParameterList>node).formalParameters,
            (<FormalParameterList>node).trailingComma,
            (<FormalParameterList>node).flags,
            (<FormalParameterList>node).start,
            (<FormalParameterList>node).end
          )
        : node;

    case SyntaxKind.ImportClause:
      return (<ImportClause>node).defaultBinding !== visitNode((<ImportClause>node).defaultBinding, visitor) ||
        (<ImportClause>node).nameSpaceImport !== visitNode((<ImportClause>node).nameSpaceImport, visitor) ||
        (<ImportClause>node).namedImports !== visitNode((<ImportClause>node).namedImports, visitor)
        ? createImportClause(
            (<ImportClause>node).defaultBinding,
            (<ImportClause>node).nameSpaceImport,
            (<ImportClause>node).namedImports,
            (<ImportClause>node).start,
            (<ImportClause>node).end
          )
        : node;

    case SyntaxKind.ExportDefault:
      return (<ExportDefault>node).exportKeyword !== visitNode((<ExportDefault>node).exportKeyword, visitor) ||
        (<ExportDefault>node).defaultKeyword !== visitNode((<ExportDefault>node).defaultKeyword, visitor) ||
        (<ExportDefault>node).declaration !== visitNode((<ExportDefault>node).declaration, visitor)
        ? createExportDefault(
            (<ExportDefault>node).exportKeyword,
            (<ExportDefault>node).defaultKeyword,
            (<ExportDefault>node).declaration,
            (<ExportDefault>node).start,
            (<ExportDefault>node).end
          )
        : node;
    case SyntaxKind.NamespaceExportDeclaration:
      return (<NamespaceExportDeclaration>node).name !== visitNode((<NamespaceExportDeclaration>node).name, visitor)
        ? createNamespaceExportDeclaration(
            (<NamespaceExportDeclaration>node).name,
            (<NamespaceExportDeclaration>node).flags,
            (<NamespaceExportDeclaration>node).start,
            (<NamespaceExportDeclaration>node).end
          )
        : node;

    case SyntaxKind.NameSpaceImport:
      return (<NameSpaceImport>node).asteriskToken !== visitNode((<NameSpaceImport>node).asteriskToken, visitor) ||
        (<NameSpaceImport>node).asKeyword !== visitNode((<NameSpaceImport>node).asKeyword, visitor) ||
        (<NameSpaceImport>node).binding !== visitNode((<NameSpaceImport>node).binding, visitor)
        ? createNameSpaceImport(
            (<NameSpaceImport>node).asteriskToken,
            (<NameSpaceImport>node).asKeyword,
            (<NameSpaceImport>node).binding,
            (<NameSpaceImport>node).start,
            (<NameSpaceImport>node).end
          )
        : node;
    case SyntaxKind.ExportDeclaration:
      return (<ExportDeclaration>node).exportKeyword !== visitNode((<ExportDeclaration>node).exportKeyword, visitor) ||
        (<ExportDeclaration>node).declaration !== visitNode((<ExportDeclaration>node).declaration, visitor) ||
        (<ExportDeclaration>node).namedExports !== visitNode((<ExportDeclaration>node).namedExports, visitor) ||
        (<ExportDeclaration>node).fromClause !== visitNode((<ExportDeclaration>node).fromClause, visitor) ||
        (<ExportDeclaration>node).exportFromClause !== visitNode((<ExportDeclaration>node).exportFromClause, visitor)
        ? createExportDeclaration(
            (<ExportDeclaration>node).exportKeyword,
            (<ExportDeclaration>node).declaration,
            (<ExportDeclaration>node).namedExports,
            (<ExportDeclaration>node).fromClause,
            (<ExportDeclaration>node).exportFromClause,
            (<ExportDeclaration>node).exportKind,
            (<ExportDeclaration>node).flags,
            (<ExportDeclaration>node).start,
            (<ExportDeclaration>node).end
          )
        : node;

    case SyntaxKind.ExportFromClause:
      return (<ExportFromClause>node).asteriskToken !== visitNode((<ExportFromClause>node).asteriskToken, visitor) ||
        (<ExportFromClause>node).asKeyword !== visitNode((<ExportFromClause>node).asKeyword, visitor) ||
        (<ExportFromClause>node).namedBinding !== visitNode((<ExportFromClause>node).namedBinding, visitor) ||
        (<ExportFromClause>node).moduleExportName !== visitNode((<ExportFromClause>node).moduleExportName, visitor)
        ? createExportFromClause(
            (<ExportFromClause>node).asteriskToken,
            (<ExportFromClause>node).asKeyword,
            (<ExportFromClause>node).namedBinding,
            (<ExportFromClause>node).moduleExportName,
            (<ExportFromClause>node).flags,
            (<ExportFromClause>node).start,
            (<ExportFromClause>node).end
          )
        : node;

    case SyntaxKind.ExportSpecifier:
      return (<ExportSpecifier>node).moduleExportName !==
        visitNode((<ExportSpecifier>node).moduleExportName, visitor) ||
        (<ExportSpecifier>node).name !== visitNode((<ExportSpecifier>node).name, visitor) ||
        (<ExportSpecifier>node).binding !== visitNode((<ExportSpecifier>node).binding, visitor)
        ? createExportSpecifier(
            (<ExportSpecifier>node).moduleExportName,
            (<ExportSpecifier>node).name,
            (<ExportSpecifier>node).asKeyword,
            (<ExportSpecifier>node).binding,
            (<ExportSpecifier>node).start,
            (<ExportSpecifier>node).end
          )
        : node;

    case SyntaxKind.ExportsList:
      return (<ExportsList>node).specifiers !== visitNodes((<ExportsList>node).specifiers, visitor)
        ? createExportsList((<ExportsList>node).specifiers, (<ExportsList>node).start, (<ExportsList>node).end)
        : node;

    case SyntaxKind.ImportDeclaration:
      return (<ImportDeclaration>node).importKeyword !== visitNode((<ImportDeclaration>node).importKeyword, visitor) ||
        (<ImportDeclaration>node).typeKeyword !== visitNode((<ImportDeclaration>node).typeKeyword, visitor) ||
        (<ImportDeclaration>node).fromClause !== visitNode((<ImportDeclaration>node).fromClause, visitor) ||
        (<ImportDeclaration>node).moduleSpecifier !== visitNode((<ImportDeclaration>node).moduleSpecifier, visitor) ||
        (<ImportDeclaration>node).importClause !== visitNode((<ImportDeclaration>node).importClause, visitor)
        ? createImportDeclaration(
            (<ImportDeclaration>node).importKeyword,
            (<ImportDeclaration>node).typeKeyword,
            (<ImportDeclaration>node).typeofKeyword,
            (<ImportDeclaration>node).fromClause,
            (<ImportDeclaration>node).moduleSpecifier,
            (<ImportDeclaration>node).importClause,
            (<ImportDeclaration>node).flags,
            (<ImportDeclaration>node).start,
            (<ImportDeclaration>node).end
          )
        : node;

    case SyntaxKind.ImportSpecifier:
      return (<ImportSpecifier>node).typeKeyword !== visitNode((<ImportSpecifier>node).typeKeyword, visitor) ||
        (<ImportSpecifier>node).moduleExportName !== visitNode((<ImportSpecifier>node).moduleExportName, visitor) ||
        (<ImportSpecifier>node).name !== visitNode((<ImportSpecifier>node).name, visitor) ||
        (<ImportSpecifier>node).asKeyword !== visitNode((<ImportSpecifier>node).asKeyword, visitor) ||
        (<ImportSpecifier>node).binding !== visitNode((<ImportSpecifier>node).binding, visitor)
        ? createImportSpecifier(
            (<ImportSpecifier>node).typeKeyword,
            (<ImportSpecifier>node).moduleExportName,
            (<ImportSpecifier>node).name,
            (<ImportSpecifier>node).asKeyword,
            (<ImportSpecifier>node).binding,
            (<ImportSpecifier>node).start,
            (<ImportSpecifier>node).end
          )
        : node;

    case SyntaxKind.ImportsList:
      return (<ImportsList>node).specifiers !== visitNodes((<ImportsList>node).specifiers, visitor)
        ? createImportsList(
            (<ImportsList>node).specifiers,
            (<ImportsList>node).flags,
            (<ImportsList>node).start,
            (<ImportsList>node).end
          )
        : node;

    case SyntaxKind.NamedExports:
      return (<NamedExports>node).exportsList !== visitNode((<NamedExports>node).exportsList, visitor)
        ? createNamedExports(
            (<NamedExports>node).exportsList,
            (<NamedExports>node).flags,
            (<NamedExports>node).start,
            (<NamedExports>node).end
          )
        : node;

    case SyntaxKind.NamedImports:
      return (<NamedImports>node).importsList !== visitNode((<NamedImports>node).importsList, visitor)
        ? createNamedImports((<NamedImports>node).importsList, (<NamedImports>node).start, (<NamedImports>node).end)
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

    case SyntaxKind.FieldDefinition:
      return (<FieldDefinition>node).decorators !== visitNode((<FieldDefinition>node).decorators, visitor) ||
        (<FieldDefinition>node).declaredToken !== visitNode((<FieldDefinition>node).declaredToken, visitor) ||
        (<FieldDefinition>node).staticKeyword !== visitNode((<FieldDefinition>node).staticKeyword, visitor) ||
        (<FieldDefinition>node).asyncKeyword !== visitNode((<FieldDefinition>node).asyncKeyword, visitor) ||
        (<FieldDefinition>node).key !== visitNode((<FieldDefinition>node).key, visitor) ||
        (<FieldDefinition>node).optionalToken !== visitNode((<FieldDefinition>node).optionalToken, visitor) ||
        (<FieldDefinition>node).type !== visitNode((<FieldDefinition>node).type, visitor) ||
        (<FieldDefinition>node).initializer !== visitNode((<FieldDefinition>node).initializer, visitor)
        ? createFieldDefinition(
            (<FieldDefinition>node).decorators,
            (<FieldDefinition>node).declaredToken,
            (<FieldDefinition>node).staticKeyword,
            (<FieldDefinition>node).asyncKeyword,
            (<FieldDefinition>node).key,
            (<FieldDefinition>node).optionalToken,
            (<FieldDefinition>node).type,
            (<FieldDefinition>node).initializer,
            (<FieldDefinition>node).start,
            (<FieldDefinition>node).end
          )
        : node;

    case SyntaxKind.FunctionStatementList:
      return (<FunctionStatementList>node).directives !==
        visitNodes((<FunctionStatementList>node).directives, visitor) ||
        (<FunctionStatementList>node).statements !== visitNodes((<FunctionStatementList>node).statements, visitor)
        ? createFunctionStatementList(
            (<FunctionStatementList>node).directives,
            (<FunctionStatementList>node).statements,
            (<FunctionStatementList>node).flags,
            (<FunctionStatementList>node).start,
            (<FunctionStatementList>node).end
          )
        : node;

    case SyntaxKind.FunctionBody:
      return (<FunctionBody>node).functionStatementList !==
        visitNode((<FunctionBody>node).functionStatementList, visitor)
        ? createFunctionBody(
            (<FunctionBody>node).functionStatementList,
            (<FunctionBody>node).start,
            (<FunctionBody>node).end
          )
        : node;

    case SyntaxKind.ImportCall:
      return (<ImportCall>node).importKeyword !== visitNode((<ImportCall>node).importKeyword, visitor) ||
        (<ImportCall>node).expression !== visitNode((<ImportCall>node).expression, visitor)
        ? createImportCall(
            (<ImportCall>node).importKeyword,
            (<ImportCall>node).expression,
            (<ImportCall>node).start,
            (<ImportCall>node).end
          )
        : node;

    case SyntaxKind.MethodDefinition:
      return (<MethodDefinition>node).name !== visitNode((<MethodDefinition>node).name, visitor) ||
        (<MethodDefinition>node).typeParameters !== visitNode((<MethodDefinition>node).typeParameters, visitor) ||
        (<MethodDefinition>node).formalParameterList !==
          visitNode((<MethodDefinition>node).formalParameterList, visitor) ||
        (<MethodDefinition>node).returnType !== visitNode((<MethodDefinition>node).returnType, visitor) ||
        (<MethodDefinition>node).contents !== visitFunctionBody(transform, (<MethodDefinition>node).contents, visitor)
        ? createMethodDefinition(
            (<MethodDefinition>node).name,
            (<MethodDefinition>node).typeParameters,
            (<MethodDefinition>node).formalParameterList,
            (<MethodDefinition>node).returnType,
            (<MethodDefinition>node).contents,
            (<MethodDefinition>node).flags,
            (<MethodDefinition>node).start,
            (<MethodDefinition>node).end
          )
        : node;
  }

  if (node.flags & NodeFlags.IsTypeNode) {
    switch (kind) {
      case SyntaxKind.ArrayType:
        return (<ArrayType>node).type !== visitNode((<ArrayType>node).type, visitor)
          ? createArrayType((<ArrayType>node).type, (<ArrayType>node).start, (<ArrayType>node).end)
          : node;

      case SyntaxKind.TypeReference:
        return (<TypeReference>node).typeName !== visitNode((<TypeReference>node).typeName, visitor) ||
          (<TypeReference>node).typeParameters !== visitNode((<TypeReference>node).typeParameters, visitor)
          ? createTypeReference(
              (<TypeReference>node).typeName,
              (<TypeReference>node).typeParameters,
              (<TypeReference>node).start,
              (<TypeReference>node).end
            )
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
        return (<IndexedAccessType>node).objectType !== visitNode((<IndexedAccessType>node).objectType, visitor) ||
          (<IndexedAccessType>node).indexType !== visitNode((<IndexedAccessType>node).indexType, visitor)
          ? createIndexedAccessType(
              (<IndexedAccessType>node).objectType,
              (<IndexedAccessType>node).indexType,
              (<IndexedAccessType>node).flags,
              (<IndexedAccessType>node).start,
              (<IndexedAccessType>node).end
            )
          : node;

      case SyntaxKind.IntersectionType:
        return (<IntersectionType>node).types !== visitNodes((<IntersectionType>node).types, visitor)
          ? createIntersectionType(
              (<IntersectionType>node).types,
              (<IntersectionType>node).start,
              (<IntersectionType>node).end
            )
          : node;

      case SyntaxKind.OptionalType:
        return (<OptionalType>node).optionalToken !== visitNode((<OptionalType>node).optionalToken, visitor) ||
          (<OptionalType>node).type !== visitNode((<OptionalType>node).type, visitor)
          ? createOptionalType(
              (<OptionalType>node).optionalToken,
              (<OptionalType>node).type,
              (<OptionalType>node).start,
              (<OptionalType>node).end
            )
          : node;

      case SyntaxKind.ParenthesizedType:
        return (<ParenthesizedType>node).type !== visitNode((<ParenthesizedType>node).type, visitor)
          ? createParenthesizedType(
              (<ParenthesizedType>node).type,
              (<ParenthesizedType>node).start,
              (<ParenthesizedType>node).end
            )
          : node;

      case SyntaxKind.RestType:
        return (<RestType>node).ellipsisToken !== visitNode((<RestType>node).ellipsisToken, visitor) ||
          (<RestType>node).type !== visitNode((<RestType>node).type, visitor)
          ? createRestType(
              (<RestType>node).ellipsisToken,
              (<RestType>node).type,
              (<RestType>node).start,
              (<RestType>node).end
            )
          : node;

      case SyntaxKind.TupleType:
        return (<TupleType>node).elementTypes !== visitNodes((<TupleType>node).elementTypes, visitor)
          ? createTupleType(
              (<TupleType>node).elementTypes,
              (<TupleType>node).trailingComma,
              (<TupleType>node).flags,
              (<TupleType>node).start,
              (<TupleType>node).end
            )
          : node;

      case SyntaxKind.TypeParameter:
        return (<TypeParameter>node).name !== visitNode((<TypeParameter>node).name, visitor) ||
          (<TypeParameter>node).type !== visitNode((<TypeParameter>node).type, visitor) ||
          (<TypeParameter>node).assignToken !== visitNode((<TypeParameter>node).assignToken, visitor) ||
          (<TypeParameter>node).defaultType !== visitNode((<TypeParameter>node).defaultType, visitor)
          ? createTypeParameter(
              (<TypeParameter>node).name,
              (<TypeParameter>node).type,
              (<TypeParameter>node).assignToken,
              (<TypeParameter>node).defaultType,
              (<TypeParameter>node).start,
              (<TypeParameter>node).end
            )
          : node;

      case SyntaxKind.UnionType:
        return (<UnionType>node).types !== visitNodes((<UnionType>node).types, visitor)
          ? createUnionType((<UnionType>node).types, (<UnionType>node).start, (<UnionType>node).end)
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
        return (<ArrowTypeParameterList>node).parameters !==
          visitNodes((<ArrowTypeParameterList>node).parameters, visitor)
          ? createArrowTypeParameterList(
              (<ArrowTypeParameterList>node).parameters,
              (<ArrowTypeParameterList>node).trailingComma,
              (<ArrowTypeParameterList>node).start,
              (<ArrowTypeParameterList>node).end
            )
          : node;
      case SyntaxKind.FunctionTypeParameterList:
        return (<FunctionTypeParameterList>node).parameters !==
          visitNodes((<FunctionTypeParameterList>node).parameters, visitor)
          ? createFunctionTypeParameterList(
              (<FunctionTypeParameterList>node).parameters,
              (<FunctionTypeParameterList>node).trailingComma,
              (<FunctionTypeParameterList>node).start,
              (<FunctionTypeParameterList>node).end
            )
          : node;

      case SyntaxKind.FunctionTypeParameter:
        return (<FunctionTypeParameter>node).ellipsisToken !==
          visitNode((<FunctionTypeParameter>node).ellipsisToken, visitor) ||
          (<FunctionTypeParameter>node).name !== visitNode((<FunctionTypeParameter>node).name, visitor) ||
          (<FunctionTypeParameter>node).optionalToken !==
            visitNode((<FunctionTypeParameter>node).optionalToken, visitor) ||
          (<FunctionTypeParameter>node).types !== visitNode((<FunctionTypeParameter>node).types, visitor)
          ? createFunctionTypeParameters(
              (<FunctionTypeParameter>node).ellipsisToken,
              (<FunctionTypeParameter>node).name,
              (<FunctionTypeParameter>node).optionalToken,
              (<FunctionTypeParameter>node).types,
              (<FunctionTypeParameter>node).start,
              (<FunctionTypeParameter>node).end
            )
          : node;
      case SyntaxKind.NullableType:
        return (<NullableType>node).nullableToken !== visitNode((<NullableType>node).nullableToken, visitor) ||
          (<NullableType>node).type !== visitNode((<NullableType>node).type, visitor)
          ? createNullableType(
              (<NullableType>node).nullableToken,
              (<NullableType>node).type,
              (<NullableType>node).start,
              (<NullableType>node).end
            )
          : node;
      case SyntaxKind.ObjectTypeCallProperty:
        return (<ObjectTypeCallProperty>node).protoKeyword !==
          visitNode((<ObjectTypeCallProperty>node).protoKeyword, visitor) ||
          (<ObjectTypeCallProperty>node).typeParameter !==
            visitNode((<ObjectTypeCallProperty>node).typeParameter, visitor) ||
          (<ObjectTypeCallProperty>node).value !== visitNode((<ObjectTypeCallProperty>node).value, visitor) ||
          (<ObjectTypeCallProperty>node).staticKeyword !==
            visitNode((<ObjectTypeCallProperty>node).staticKeyword, visitor) ||
          (<ObjectTypeCallProperty>node).returnType !== visitNode((<ObjectTypeCallProperty>node).returnType, visitor)
          ? createObjectTypeCallProperty(
              (<ObjectTypeCallProperty>node).protoKeyword,
              (<ObjectTypeCallProperty>node).typeParameter,
              (<ObjectTypeCallProperty>node).value,
              (<ObjectTypeCallProperty>node).staticKeyword,
              (<ObjectTypeCallProperty>node).returnType,
              (<ObjectTypeCallProperty>node).start,
              (<ObjectTypeCallProperty>node).end
            )
          : node;
      case SyntaxKind.ObjectTypeIndexer:
        return (<ObjectTypeIndexer>node).protoKeyword !== visitNode((<ObjectTypeIndexer>node).protoKeyword, visitor) ||
          (<ObjectTypeIndexer>node).name !== visitNode((<ObjectTypeIndexer>node).name, visitor) ||
          (<ObjectTypeIndexer>node).key !== visitNode((<ObjectTypeIndexer>node).key, visitor) ||
          (<ObjectTypeIndexer>node).staticKeyword !== visitNode((<ObjectTypeIndexer>node).staticKeyword, visitor) ||
          (<ObjectTypeIndexer>node).type !== visitNode((<ObjectTypeIndexer>node).type, visitor)
          ? createObjectTypeIndexer(
              (<ObjectTypeIndexer>node).protoKeyword,
              (<ObjectTypeIndexer>node).staticKeyword,
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
          (<ObjectTypeInternalSlot>node).staticKeyword !==
            visitNode((<ObjectTypeInternalSlot>node).staticKeyword, visitor) ||
          (<ObjectTypeInternalSlot>node).type !== visitNode((<ObjectTypeInternalSlot>node).type, visitor)
          ? createObjectTypeInternalSlot(
              (<ObjectTypeInternalSlot>node).protoKeyword,
              (<ObjectTypeInternalSlot>node).name,
              (<ObjectTypeInternalSlot>node).optionalToken,
              (<ObjectTypeInternalSlot>node).staticKeyword,
              (<ObjectTypeInternalSlot>node).type,
              (<ObjectTypeInternalSlot>node).start,
              (<ObjectTypeInternalSlot>node).end
            )
          : node;
      case SyntaxKind.ObjectTypeProperty:
        return (<ObjectTypeProperty>node).getKeyword !== visitNode((<ObjectTypeProperty>node).getKeyword, visitor) ||
          (<ObjectTypeProperty>node).setKeyword !== visitNode((<ObjectTypeProperty>node).setKeyword, visitor) ||
          (<ObjectTypeProperty>node).key !== visitNode((<ObjectTypeProperty>node).key, visitor) ||
          (<ObjectTypeProperty>node).type !== visitNode((<ObjectTypeProperty>node).type, visitor) ||
          (<ObjectTypeProperty>node).optionalToken !== visitNode((<ObjectTypeProperty>node).optionalToken, visitor) ||
          (<ObjectTypeProperty>node).staticKeyword !== visitNode((<ObjectTypeProperty>node).staticKeyword, visitor) ||
          (<ObjectTypeProperty>node).protoKeyword !== visitNode((<ObjectTypeProperty>node).protoKeyword, visitor)
          ? createObjectTypeProperty(
              (<ObjectTypeProperty>node).getKeyword,
              (<ObjectTypeProperty>node).setKeyword,
              (<ObjectTypeProperty>node).key,
              (<ObjectTypeProperty>node).type,
              (<ObjectTypeProperty>node).optionalToken,
              (<ObjectTypeProperty>node).staticKeyword,
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
        return (<QualifiedType>node).qualification !== visitNode((<QualifiedType>node).qualification, visitor) ||
          (<QualifiedType>node).name !== visitNode((<QualifiedType>node).name, visitor)
          ? createQualifiedType(
              (<QualifiedType>node).qualification,
              (<QualifiedType>node).name,
              (<QualifiedType>node).start,
              (<QualifiedType>node).end
            )
          : node;
      case SyntaxKind.TypeInstantiations:
        return (<TypeInstantiations>node).types !== visitNodes((<TypeInstantiations>node).types, visitor)
          ? createTypeInstantiations(
              (<TypeInstantiations>node).types,
              (<TypeInstantiations>node).trailingComma,
              (<TypeInstantiations>node).start,
              (<TypeInstantiations>node).end
            )
          : node;
      case SyntaxKind.TypeAnnotation:
        return (<TypeAnnotation>node).bitwiseOrToken !== visitNode((<TypeAnnotation>node).bitwiseOrToken, visitor) ||
          (<TypeAnnotation>node).bitwiseAndToken !== visitNode((<TypeAnnotation>node).bitwiseAndToken, visitor) ||
          (<TypeAnnotation>node).type !== visitNode((<TypeAnnotation>node).type, visitor)
          ? createTypeAnnotation(
              (<TypeAnnotation>node).bitwiseOrToken,
              (<TypeAnnotation>node).bitwiseAndToken,
              (<TypeAnnotation>node).type,
              (<TypeAnnotation>node).start,
              (<TypeAnnotation>node).end
            )
          : node;
      case SyntaxKind.TypeParameterDeclaration:
        return (<TypeParameterDeclaration>node).declarations !==
          visitNode((<TypeParameterDeclaration>node).declarations, visitor)
          ? createTypeParameterDeclaration(
              (<TypeParameterDeclaration>node).declarations,
              (<TypeParameterDeclaration>node).flags,
              (<TypeParameterDeclaration>node).start,
              (<TypeParameterDeclaration>node).end
            )
          : node;

      case SyntaxKind.TypeParameterInstantiation:
        return (<TypeParameterInstantiation>node).typeInstantiations !==
          visitNode((<TypeParameterInstantiation>node).typeInstantiations, visitor)
          ? createTypeParameterInstantiation(
              (<TypeParameterInstantiation>node).typeInstantiations,
              (<TypeParameterInstantiation>node).flags,
              (<TypeParameterInstantiation>node).start,
              (<TypeParameterInstantiation>node).end
            )
          : node;

      case SyntaxKind.TypeParameterList:
        return (<TypeParameterList>node).parameters !== visitNodes((<TypeParameterList>node).parameters, visitor)
          ? createTypeParameterList(
              (<TypeParameterList>node).parameters,
              (<TypeParameterList>node).trailingComma,
              (<TypeParameterList>node).start,
              (<TypeParameterList>node).end
            )
          : node;

      case SyntaxKind.TypeofType:
        return (<TypeofType>node).typeOfKeyword !== visitNode((<TypeofType>node).typeOfKeyword, visitor) ||
          (<TypeofType>node).type !== visitNode((<TypeofType>node).type, visitor)
          ? createTypeofType(
              (<TypeofType>node).typeOfKeyword,
              (<TypeofType>node).type,
              (<TypeofType>node).start,
              (<TypeofType>node).end
            )
          : node;
    }
  }

  return node;
}

export function visitNode<T extends SyntaxNode>(
  node: T | null,
  visitor: (node: SyntaxNode | SyntaxToken<TokenSyntaxKind>) => any,
  lift?: any
): any | undefined;

export function visitNode<T extends SyntaxNode>(
  node: SyntaxToken<TokenSyntaxKind> | null,
  visitor: (node: SyntaxNode | SyntaxToken<TokenSyntaxKind>) => any,
  lift?: any
): any | undefined;
export function visitNode<T extends SyntaxNode>(
  node: T | null,
  visitor: (node: SyntaxNode | SyntaxToken<TokenSyntaxKind>) => any,
  lift?: any
): any | undefined {
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

export function visitNodes<T extends Node>(nodes: any | undefined, visitor: any, start?: number, count?: number): any {
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
