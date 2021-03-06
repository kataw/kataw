import { ArrayLiteral } from './array-literal';
import { ParenthesizedExpression } from './parenthesized-expr';
import { Identifier } from './identifier-expr';
import { AssignmentExpression } from './assignment-expr';
import { IndexExpression } from './index-expr';
import { MemberAccessExpression } from './member-access-expr';
import { CallExpression } from './call-expr';
import { ImportMeta } from './import-meta';
import { UnaryExpression } from './unary-expr';
import { PostfixUpdateExpression } from './postfix-update-expr';
import { PrefixUpdateExpression } from './prefix-update-expr';
import { CommaOperator } from './comma-operator';
import { BigIntLiteral } from './big-int-literal';
import { NumericLiteral } from './numeric-literal';
import { StringLiteral } from './string-literal';
import { BinaryExpression } from './binary-expr';
import { ConditionalExpression } from './conditional-expr';
import { ComputedPropertyName } from './computed-property-name';
import { BindingElement } from './binding-element';
import { ArgumentList } from './argument-list';
import { ObjectLiteral } from './object-literal';
import { FormalParameterList } from './formal-parameter-list';
import { TaggedTemplate } from './tagged-template';
import { TemplateTail } from './template-tail';
import { TemplateExpression } from './template-expression';
import { DummyIdentifier } from '../internal/dummy-identifier';
import { OptionalChain } from '../expressions/optional-chain';
import { IndexExpressionChain } from '../expressions/index-expr-chain';
import { MemberAccessChain } from '../expressions/member-access-chain';
import { CallChain } from '../expressions/call-chain';
import { PropertyDefinition } from '../expressions/property-definition';
import { PropertyDefinitionList } from '../expressions/property-definition-list';
import { OptionalExpression } from '../expressions/optional-expr';
import { ClassBody } from '../expressions/class-body';
import { ClassTail } from '../expressions/class-tail';
import { ArrowFunction } from '../expressions/arrow-function';
import { FunctionExpression } from '../expressions/function-expr';
import { ClassExpression } from '../expressions/class-expr';
import { YieldExpression } from '../expressions/yield-expr';
import { NewExpression } from '../expressions/new-expr';
import { NewTarget } from '../expressions/new-target';
import { SpreadElement } from '../expressions/spread-element';
import { RegularExpressionLiteral } from '../expressions/regular-expr';

/**
 * The set of all syntax items which are expressions.
 */
export type ExpressionNode =
  | TaggedTemplate
  | TemplateExpression
  | TemplateTail
  | ArrayLiteral
  | Identifier
  | FormalParameterList
  | AssignmentExpression
  | ParenthesizedExpression
  | UnaryExpression
  | PostfixUpdateExpression
  | PrefixUpdateExpression
  | FunctionExpression
  | ClassExpression
  | YieldExpression
  | NewExpression
  | SpreadElement
  | NewTarget
  | CommaOperator
  | ObjectLiteral
  | IndexExpression
  | CallExpression
  | BigIntLiteral
  | ArrowFunction
  | ClassBody
  | ClassTail
  | ImportMeta
  | RegularExpressionLiteral
  | ArgumentList
  | NumericLiteral
  | StringLiteral
  | ConditionalExpression
  | BinaryExpression
  | ComputedPropertyName
  | BindingElement
  | DummyIdentifier
  | PropertyDefinition
  | PropertyDefinitionList
  | OptionalChain
  | IndexExpressionChain
  | MemberAccessChain
  | CallChain
  | OptionalExpression
  | MemberAccessExpression;
