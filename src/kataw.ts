export { createTypeLiteral, updateTypeLiteral } from './compiler/ast/types/type-literal';
export { createParameterDeclaration, updateParameterDeclaration } from './compiler/ast/types/parameter-declaration';
export { createUnionType, updateUnionType } from './compiler/ast/types/union-type';
export { createEnumDeclaration, updateEnumDeclaration } from './compiler/ast/types/enum-declaration';
export { createEnumMembersList, updateEnumMembersList } from './compiler/ast/types/enum-members-list';
export { createEnumMember, updateEnumMember } from './compiler/ast/types/enum-member';
export { createQualifiedName, updateQualifiedName } from './compiler/ast/types/qualified-name';
export { createInterfaceDeclaration, updateInterfaceDeclaration } from './compiler/ast/types/interface-declaration';
export { createSingleNameBinding, updateSingleNameBinding } from './compiler/ast/expressions/singleNameBinding';
export { createHeritageClauses, updateHeritageClauses } from './compiler/ast/types/heritage-clauses';
export { createHeritageClause, updateHeritageClause } from './compiler/ast/types/heritage-clause';
export { createClassHeritage, updateClassHeritage } from './compiler/ast/expressions/class-heritage';
export { createThisType } from './compiler/ast/types/this-type';
export { createPropertySignature, updatePropertySignature } from './compiler/ast/types/property-signature';
export { createMethodSignature, updateMethodSignature } from './compiler/ast/types/method-signature';
export { createMappedType, updateMappedType } from './compiler/ast/types/mapped-type';
export { createObjectTypeMembers, updateObjectTypeMembers } from './compiler/ast/types/object-type-members';
export { createTypeParameters, updateTypeParameters } from './compiler/ast/types/type-parameter-list';
export { createTypeParameter, updateTypeParameter } from './compiler/ast/types/type-parameter';
export { createOptionalType, updateOptionalType } from './compiler/ast/types/optional-type';
export { createNamedTupleMember, updateNamedTupleMember } from './compiler/ast/types/named-tuple-member';
export { createRestType, updateRestType } from './compiler/ast/types/rest-type';
export { createInferType, updateInferType } from './compiler/ast/types/infer-type';
export { createConditionalType, updateConditionalType } from './compiler/ast/types/conditional-type';
export { createTypeAssertion, updateTypeAssertion } from './compiler/ast/types/type-assertion';
export { createCallSignature, updateCallSignature } from './compiler/ast/types/call-signature';
export { createIndexSignature, updateIndexSignature } from './compiler/ast/types/index-signature';
export { createFunctionType, updateFunctionType } from './compiler/ast/types/function-type';
export { createConstructorType, updateConstructorType } from './compiler/ast/types/constructor-type';
export { createTypeAliasDeclaration, updateTypeAliasDeclaration } from './compiler/ast/types/type-alias-declaration';
export { createImportType, updateImportType } from './compiler/ast/types/import-type';
export { createParameters, updateParameters } from './compiler/ast/types/parameters';
export { createTypePredicate, updateTypePredicate } from './compiler/ast/types/type-predicate';
export { createTypeQuery, updateTypeQuery } from './compiler/ast/types/type-query';
export { createTupleType, updateTupleType } from './compiler/ast/types/tuple-type';
export { createParenthesizedType, updateParenthesizedType } from './compiler/ast/types/parenthesized-type';
export { createStringType } from './compiler/ast/types/string-type';
export { createNumberType } from './compiler/ast/types/number-type';
export { createBigIntType } from './compiler/ast/types/bigint-type';
export { createTrueType } from './compiler/ast/types/true-type';
export { createFalseType } from './compiler/ast/types/false-type';
export { createTypeArguments, updateTypeArguments } from './compiler/ast/types/type-arguments';
export { createTypeReference, updateTypeReference } from './compiler/ast/types/type-reference';
export { createKeywordTypeNode } from './compiler/ast/types/keyword-type-node';
export { createIntersectionType, updateIntersectionType } from './compiler/ast/types/intersection-type';
export { createTypeOperator, updateTypeOperator } from './compiler/ast/types/type-operator';
export { createIndexedAccessType, updateIndexedAccessType } from './compiler/ast/types/indexed-access-type';
export { createArrayType, updateArrayType } from './compiler/ast/types/array-type';
export { createAsExpression, updateAsExpression } from './compiler/ast/expressions/as-expr';
export { createFormalParameter, updateFormalParameter } from './compiler/ast/expressions/formal-parameter';
export { createNonNullExpression, updateNonNullExpression } from './compiler/ast/expressions/non-null-expr';
export { createPrivateIdentifier } from './compiler/ast/expressions/private-identifier';
export { createClassDeclaration, updateClassDeclaration } from './compiler/ast/statements/class-declaration';
export { createClassExpression, updateClassExpression } from './compiler/ast/expressions/class-expr';
export { createClassElementList, updateClassElementList } from './compiler/ast/expressions/class-element-list';
export { createClassElement, updateClassElement } from './compiler/ast/expressions/class-element';
export { createSemicolon } from './compiler/ast/expressions/semicolon';
export { createFieldDefinition, updateFieldDefinition } from './compiler/ast/expressions/field-definition';
export { createNamedExports, updateNamedExports } from './compiler/ast/module/named-exports';
export {
  createExternalModuleReference,
  updateExternalModuleReference
} from './compiler/ast/module/external-module-reference';
export { createExportAssignment, updateExportAssignment } from './compiler/ast/module/export-assignment';
export {
  createImportEqualsDeclaration,
  updateImportEqualsDeclaration
} from './compiler/ast/module/import-equals-declaration';
export { createImportsList, updateImportsList } from './compiler/ast/module/imports-list';
export { createExportDeclaration, updateExportDeclaration } from './compiler/ast/module/export-declaration';
export { createExportDefault, updateExportDefault } from './compiler/ast/module/export-default';
export { createExportFromClause, updateExportFromClause } from './compiler/ast/module/export-from-clause';
export { createExportSpecifier, updateExportSpecifier } from './compiler/ast/module/export-specifier';
export { createImportClause, updateImportClause } from './compiler/ast/module/import-clause';
export { createImportDeclaration, updateImportDeclaration } from './compiler/ast/module/import-declaration';
export { createImportSpecifier, updateImportSpecifier } from './compiler/ast/module/import-specifier';
export { createNamedImports, updateNamedImports } from './compiler/ast/module/named-imports';
export { createExportsList, updateExportsList } from './compiler/ast/module/exports-list';
export { createJsxIdentifier } from './compiler/ast/jsx/jsx-identifier';
export { createJsxNamespacedName } from './compiler/ast/jsx/jsx-namespaced-name';
export { createJsxSelfClosingElement, updateJsxSelfClosingElement } from './compiler/ast/jsx/jsx-self-closing-element';
export { createJsxOpeningElement, updateJsxOpeningElement } from './compiler/ast/jsx/jsx-opening-element';
export { createJsxTagNamePropertyAccess } from './compiler/ast/jsx/jsx-tag-name-property-access';
export { createJsxMemberExpression } from './compiler/ast/jsx/jsx-member-expression';
export { createJsxSpreadAttribute } from './compiler/ast/jsx/jsx-spread-attribute';
export { createJsxAttribute } from './compiler/ast/jsx/jsx-attribute';
export { createJsxAttributesList } from './compiler/ast/jsx/jsx-attribute-list';
export { createJsxText } from './compiler/ast/jsx/jsx-text';
export { createJsxChildrenList } from './compiler/ast/jsx/jsx-children-list';
export { createJsxOpeningFragment } from './compiler/ast/jsx/jsx-opening-fragment';
export { createJsxClosingElement } from './compiler/ast/jsx/jsx-closing-element';
export { createJsxElement } from './compiler/ast/jsx/jsx-element';
export { createJsxFragment } from './compiler/ast/jsx/jsx-fragment';
export { createJsxClosingFragment } from './compiler/ast/jsx/jsx-closing-fragment';
export { createImportCall, updateImportCall } from './compiler/ast/expressions/import-call';
export { createImportMeta } from './compiler/ast/expressions/import-meta';
export { createSuper } from './compiler/ast/expressions/super';
export { createArrayLiteral, updateArrayLiteral } from './compiler/ast/expressions/array-literal';
export { createBooleanLiteral } from './compiler/ast/expressions/boolean-literal';
export { createThisExpression } from './compiler/ast/expressions/this-expr';
export { createNullLiteral } from './compiler/ast/expressions/null-literal';
export { createMethodDefinition, updateMethodDefinition } from './compiler/ast/expressions/method-definition';
export { createForBinding, updateForBinding } from './compiler/ast/statements/forBinding';
export {
  createParenthesizedExpression,
  updateParenthesizedExpression
} from './compiler/ast/expressions/parenthesized-expr';
export { createFunctionBody, updateFunctionBody } from './compiler/ast/expressions/function-body';
export {
  createFunctionStatementList,
  updateFunctionStatementList
} from './compiler/ast/expressions/function-stmt-list';
export { createTaggedTemplate, updateTaggedTemplaten } from './compiler/ast/expressions/tagged-template';
export { createOptionalChain, updateOptionalChain } from './compiler/ast/expressions/optional-chain';
export { createElementAccessChain, updateElementAccessChain } from './compiler/ast/expressions/element-access-chain';
export { createPropertyAccessChain, updatePropertyAccessChain } from './compiler/ast/expressions/property-access-chain';
export { createCallChain, updateCallChain } from './compiler/ast/expressions/call-chain';
export { createOptionalExpression, updateOptionalExpression } from './compiler/ast/expressions/optional-expr';
export { createNewExpression, updateNewExpression } from './compiler/ast/expressions/new-expr';
export { createNewTarget } from './compiler/ast/expressions/new-target';
export { createArrowParameters, updateArrowParameters } from './compiler/ast/expressions/arrow-parameters';
export { createArrowFunction, updateArrowFunction } from './compiler/ast/expressions/arrow-function';
export { createAwaitExpression, updateAwaitExpression } from './compiler/ast/expressions/await-expr';
export { createYieldExpression, updateYieldExpression } from './compiler/ast/expressions/yield-expr';
export { createFormalParameterList, updateFormalParameterList } from './compiler/ast/expressions/formal-parameter-list';
export { createArrayBindingPattern, updateArrayBindingPattern } from './compiler/ast/expressions/array-binding-pattern';
export { createBindingElementList, updateBindingElementList } from './compiler/ast/expressions/binding-element-list';
export { createBindingProperty, updateBindingProperty } from './compiler/ast/expressions/binding-property';
export {
  createObjectBindingPattern,
  updateObjectBindingPattern
} from './compiler/ast/expressions/object-binding-pattern';
export { createBindingPropertyList, updateBindingPropertyList } from './compiler/ast/expressions/binding-property-list';
export { createBindingElement, updateBindingElement } from './compiler/ast/expressions/binding-element';
export { createFunctionExpression, updateFunctionExpression } from './compiler/ast/expressions/function-expr';
export { createFunctionDeclaration, updateFunctionDeclaration } from './compiler/ast/statements/function-declaration';
export {
  createComputedPropertyName,
  updateComputedPropertyName
} from './compiler/ast/expressions/computed-property-name';
export { createPropertyDefinition, updatePropertyDefinition } from './compiler/ast/expressions/property-definition';
export { createElementList, updateElementList } from './compiler/ast/expressions/element-list';
export { createNumericLiteral } from './compiler/ast/expressions/numeric-literal';
export { createObjectLiteral, updateObjectLiteral } from './compiler/ast/expressions/object-literal';
export {
  createPropertyDefinitionList,
  updatePropertyDefinitionList
} from './compiler/ast/expressions/property-definition-list';
export { createSpreadProperty, updateSpreadProperty } from './compiler/ast/expressions/spread-property';
export {
  createCoverInitializedName,
  updateCoverInitializedName
} from './compiler/ast/expressions/cover-initialized-name';
export { createIdentifierReference } from './compiler/ast/expressions/identifier-reference';
export { createIdentifierName } from './compiler/ast/expressions/identifier-name';
export { createBindingIdentifier } from './compiler/ast/expressions/binding-identifier';
export { createStringLiteral } from './compiler/ast/expressions/string-literal';
export { createRegularExpressionLiteral } from './compiler/ast/expressions/regular-expr';
export { createBigIntLiteral } from './compiler/ast/expressions/bigint-literal';
export { createExpressionStatement, updateExpressionStatement } from './compiler/ast/statements/expr-stmt';
export { createCommaOperator, updateCommaOperator } from './compiler/ast/expressions/commaOperator';
export { createConditionalExpression, updateConditionalExpression } from './compiler/ast/expressions/conditional-expr';
export { createBinaryExpression, updateBinaryExpression } from './compiler/ast/expressions/binary-expr';
export {
  createPropertyAccessExpression,
  updatePropertyAccessExpression
} from './compiler/ast/expressions/property-access-expr';
export {
  createElementAccessExpression,
  updateElementAccessExpression
} from './compiler/ast/expressions/element-access-expr';
export { createCallExpression, updateCallExpression } from './compiler/ast/expressions/call-expr';
export { createForOfStatement, updateForOfStatement } from './compiler/ast/statements/for-of-stmt';
export { createForInStatement, updateForInStatement } from './compiler/ast/statements/for-in-stmt';
export { createForStatement, updateForStatement } from './compiler/ast/statements/for-stmt';
export { createThrowStatement, updateThrowStatement } from './compiler/ast/statements/throw-stmt';
export { createWithStatement, updateWithStatement } from './compiler/ast/statements/with-stmt';
export { createCaseBlock, updateCaseBlock } from './compiler/ast/statements/case-block';
export { createCaseClause, updateCaseClause } from './compiler/ast/statements/case-clause';
export { createDefaultClause, updateDefaultClause } from './compiler/ast/statements/default-clause';
export { createSwitchStatement, updateSwitchStatement } from './compiler/ast/statements/switch-stmt';
export { createReturnStatement, updateReturnStatement } from './compiler/ast/statements/return-stmt';
export { createEmptyStatement } from './compiler/ast/statements/empty-stmt';
export { createContinueStatement, updateContinueStatement } from './compiler/ast/statements/continue-stmt';
export { createBreakStatement, updateBreakStatement } from './compiler/ast/statements/break-stmt';
export { createDebuggerStatement } from './compiler/ast/statements/debugger-stmt';
export { createBlockStatement, updateBlockStatement } from './compiler/ast/statements/block-stmt';
export { createBlock, updateBlock } from './compiler/ast/statements/block';
export { createDoWhileStatement, updateDoWhileStatement } from './compiler/ast/statements/do-stmt';
export { createWhileStatement, updateWhileStatement } from './compiler/ast/statements/while-stmt';
export { createIfStatement, updateIfStatement } from './compiler/ast/statements/if-stmt';
export { createCatch, updateCatch } from './compiler/ast/statements/catch-stmt';
export { createCatchParameter, updateCatchParameter } from './compiler/ast/statements/catch-parameter';
export { createTryStatement, updateTryStatement } from './compiler/ast/statements/try-stmt';
export { createLexicalBinding, updateLexicalBinding } from './compiler/ast/statements/lexical-binding';
export { createLexicalDeclaration, updateLexicalDeclaration } from './compiler/ast/statements/lexical-declaration';
export { createVariableDeclaration, updateVariableDeclaration } from './compiler/ast/statements/variable-declaration';
export {
  createVariableDeclarationList,
  updateVariableDeclarationList
} from './compiler/ast/statements/variable-declarationList';
export { createLabelledStatement, updateLabelledStatement } from './compiler/ast/statements/labelled-stmt';
export { createBindingList, updateBindingList } from './compiler/ast/statements/binding-list';
export { createUnaryExpression, updateUnaryExpression } from './compiler/ast/expressions/unary-expr';
export { createSpreadElement, updatSpreadElement } from './compiler/ast/expressions/spread-element';
export { createArgumentList, updateArgumentList } from './compiler/ast/expressions/argument-list';
export {
  createPrefixUpdateExpression,
  updatePrefixUpdateExpression
} from './compiler/ast/expressions/prefix-update-expr';
export {
  createPostfixUpdateExpression,
  updatePostfixUpdateExpression
} from './compiler/ast/expressions/postfix-update-expr';
export { createTemplateSpan, updateTemplateSpan } from './compiler/ast/expressions/template-span';
export { createTemplateTail } from './compiler/ast/expressions/template-tail';
export { createTemplateExpression, updateTemplateExpression } from './compiler/ast/expressions/template-expression';
export { createVariableStatement, updateVariableStatement } from './compiler/ast/statements/variable-stmt';
export { createMinusType, updateMinusType } from './compiler/ast/types/minus-type';
export { createConstructSignature, updateConstructSignature } from './compiler/ast/types/construct-signature';
export { visitNode, visitNodes, visitEachChild } from './compiler/visitor';
export { createContext } from './compiler/transform/context';
import { RootNode } from './compiler/ast/rootNode';
import { parseRoot } from './compiler/parser';

export function parseScript(source: string, options?: any): RootNode {
  return parseRoot(source, false, options);
}

export function parseModule(source: string, options?: any): RootNode {
  return parseRoot(source, false, options);
}
