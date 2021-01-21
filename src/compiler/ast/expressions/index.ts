import { IdentifierReference } from './identifier-reference';
import { IdentifierName } from './identifier-name';
import { BindingIdentifier } from './binding-identifier';
import { CommaOperator } from './commaOperator';
import { AssignmentExpression } from './assignment-expr';
import { ConditionalExpression } from './conditional-expr';
import { BinaryExpression } from './binary-expr';
import { CallExpression } from './call-expr';
import { OptionalExpression } from './optional-expr';
import { ElementAccessChain } from './element-access-chain';
import { PropertyAccessChain } from './property-access-chain';
import { CallChain } from './call-chain';
import { UnaryExpression } from './unary-expr';
import { PrefixUpdateExpression } from './prefix-update-expr';
import { PostfixUpdateExpression } from './postfix-update-expr';
import { NewExpression } from './new-expr';
import { NullLiteral } from './null-literal';
import { ThisExpression } from './this-expr';
import { BooleanLiteral } from './boolean-literal';
import { ArrayLiteral } from './array-literal';
import { ObjectLiteral } from './object-literal';
import { ComputedPropertyName } from './computed-property-name';
import { MethodDefinition } from './method-definition';
import { FunctionExpression } from './function-expr';
import { FunctionBody } from './function-body';
import { ArrowFunction } from './arrow-function';
import { ParenthesizedExpression } from './parenthesized-expr';
import { ClassExpression } from './class-expr';
import { ClassElement } from './class-element';
import { ObjectBindingPattern } from './object-binding-pattern';
import { ArrayBindingPattern } from './array-binding-pattern';
import { BindingElement } from './binding-element';
import { AwaitExpression } from './await-expr';
import { Super } from './super';
import { Elison } from './elison';
import { CoverInitializedName } from './cover-initialized-name';
import { YieldExpression } from './yield-expr';
import { NumericLiteral } from './numeric-literal';
import { BigIntLiteral } from './bigint-literal';
import { StringLiteral } from './string-literal';
import { RegularExpressionLiteral } from './regular-expr';
import { TemplateExpression } from './template-expression';
import { TaggedTemplate } from './tagged-template';
import { TemplateSpan } from './template-span';
import { TemplateTail } from './template-tail';
import { NewTarget } from './new-target';
import { ImportCall } from './import-call';
import { AssignmentRestElement } from './assignment-rest-element';
import { LabelIdentifier } from './labelled-Identifier';
import { ImportMeta } from './import-meta';
import { PrivateIdentifier } from './private-identifier';
import { AsExpression } from './as-epr';
import { NonNullExpression } from './non-null-expr';
import { OmittedExpression } from './omitted-expr';
import { FormalParameter } from './formal-parameter';
import { FormalParameterList } from './formal-parameter-list';
import { PropertyDefinitionList } from './property-definition-list';
import { BindingElementList } from './binding-element-list';
import { UniqueIdentifier } from '../internal/unique-identifier';
import { ElementAccessExpression } from './element-access-expr';
import { PropertyAccessExpression } from './property-access-expr';

export type BindingPattern = ObjectBindingPattern | ArrayBindingPattern;

export type Binding = BindingPattern | BindingIdentifier;

export type Parameter = BindingIdentifier | BindingElement;

export type PropertyName = IdentifierName | StringLiteral | NumericLiteral | ComputedPropertyName | PrivateIdentifier;

export type MethodName =
  | ComputedPropertyName
  | IdentifierReference
  | StringLiteral
  | BigIntLiteral
  | NumericLiteral
  | PrivateIdentifier
  | IdentifierName;

export type Identifiers = IdentifierName | IdentifierReference | LabelIdentifier | BindingIdentifier;

/**
 * The set of all syntax items which are expressions.
 */
export type Expression =
  | LeftHandSideExpression
  | CommaOperator
  | IdentifierReference
  | IdentifierName
  | ElementAccessExpression
  | PropertyAccessExpression
  | NewExpression
  | PrivateIdentifier
  | NullLiteral
  | ThisExpression
  | BooleanLiteral
  | ArrayLiteral
  | ObjectLiteral
  | MethodDefinition
  | FunctionExpression
  | Elison
  | ArrowFunction
  | AwaitExpression
  | YieldExpression
  | LabelIdentifier
  | AsExpression
  | NonNullExpression
  | OmittedExpression
  | FormalParameter
  | FormalParameterList
  | PropertyDefinitionList
  | UniqueIdentifier
  | BindingElementList;

/**
 * The set of all syntax items which are allowed on the left side of an expression.
 */
export type LeftHandSideExpression =
  | AssignmentExpression
  | ConditionalExpression
  | BinaryExpression
  | CallExpression
  | OptionalExpression
  | ElementAccessChain
  | PropertyAccessChain
  | CallChain
  | UnaryExpression
  | PrefixUpdateExpression
  | PostfixUpdateExpression
  | FunctionBody
  | ParenthesizedExpression
  | ClassExpression
  | ClassElement
  | Super
  | CoverInitializedName
  | TemplateExpression
  | TemplateSpan
  | TemplateTail
  | TaggedTemplate
  | NewTarget
  | PrivateIdentifier
  | ImportCall
  | AssignmentRestElement
  | ComputedPropertyName
  | ImportMeta
  | NumericLiteral
  | BigIntLiteral
  | StringLiteral
  | RegularExpressionLiteral
  | TemplateTail;
