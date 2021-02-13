# 13 ECMAScript Language: Expressions

```js
interface Expression <: Node { }
```

### IdentifierName

```js
interface IdentifierName <: Expression {
  kind: NodeKind.IdentifierName;
  text: string;
  rawText: string;
}
```

### IdentifierReference

```js
interface IdentifierReference <: Expression {
  kind: NodeKind.IdentifierReference;
  text: string;
  rawText: string;
}
```

An identifier that is a `PrimaryExpression`. E.g. `id in id()`

### BindingIdentifier

```js
interface BindingIdentifier <: Expression {
  kind: NodeKind.BindingIdentifier;
  text: string;
  rawText: string;
}
```

### PrivateIdentifier

```js
interface PrivateIdentifier <: Expression {
  kind: NodeKind.PrivateIdentifier;
  text: string;
  rawText: string;
}
```

### NumericLiteral

```js
interface NumericLiteral <: Expression {
  kind: NodeKind.NumericLiteral | NodeKind.FloatingPointLiteral;
  text: number;
  rawText: string;
}
```

### BigIntLiteral

```js
interface BigIntLiteral <: Expression {
  kind: NodeKind.BigIntLiteral;
  text: number | null;
  rawText: string;
}
```

### BooleanLiteral

```js
interface BooleanLiteral <: Expression {
  kind: NodeKind.BooleanLiteral;
  value: boolean;
}
```

### TemplateLiteral

```js
interface TemplateLiteral <: Expression {
  kind: NodeKind.TemplateLiteral;
  raw: string;
  value: string;
}
```

### NullLiteral

```js
interface NullLiteral <: Expression {
  kind: NodeKind.NullLiteral;
  value: null;
}
```

### StringLiteral

```js
interface StringLiteral <: Expression {
  kind: NodeKind.StringLiteral;
  text: string;
  rawText: string;
}
```

### RegularExpressionLiteral

```js
interface RegularExpressionLiteral <: Expression {
  kind: NodeKind.RegularExpressionLiteral;
  text: string;
}
```

## Comma Operator

```js
interface CommaOperator  <: Expression {
  kind: NodeKind.CommaOperator;
  expressions: [ Expression ];
}
```

A sequence expression, i.e., a comma-separated sequence of expressions.

See [13.16](https://tc39.es/ecma262/#sec-comma-operator)


### ThisExpression

```js
interface ThisExpression <: Expression {
  kind: NodeKind.ThisExpression;
}
```

### ArrayLiteral

```js
interface ArrayLiteral <: Expression {
  kind: NodeKind.IdentifierReference;
  elementList: ElementList;
}
```

### ArrayLiteral

```js
interface ArrayLiteral <: Expression {
  kind: NodeKind.IdentifierReference;
  elementList: ElementList;
}
```

### ElementList

```js
interface ElementList <: Expression {
  kind: NodeKind.ElementList;
  elements: [ Elison | SpreadElement | Expression ];
  trailingComma: boolean;
  multiline: boolean;
}
```

### ArrowFunction

```js
interface ArrowFunction <: Expression {
  kind: NodeKind.ArrowFunction;
  params: [ BindingIdentifier | BindingRestElement | ArrayBindingPattern | ObjectBindingPattern ];
  content: Expression | FunctionBody
}
```

### AssignmentOperator

```js

enum AssignmentOperator {
  '=',
  '+=',
  '-=',
  '*=',
  '/=',
  '%=',
  '<<=',
  '>>=',
  '>>>=',
  '|=',
  '^=',
  '&='
}
```

### LogicalAssignmentOperator

```js
enum LogicalAssignmentOperator {
  '||=',
  '&&=',
  '??='
}
```

### AssignmentExpression

```js
interface AssignmentExpression <: Expression {
  kind: NodeKind.AssignmentExpression;
  left: Expression;
  operator: AssignmentOperator | LogicalAssignmentOperator;
  right: Expression;
}
```

### AssignmentRestElement

```js
interface AssignmentRestElement <: Expression {
  kind: NodeKind.AssignmentRestElement;
  argument: Expression;
}
```

### AwaitExpression

```js
interface AwaitExpression <: Expression {
  kind: NodeKind.AwaitExpression;
  argument: UnaryExpression;
}
```

### BinaryOperator

```js
enum BinaryOperator {
  '==' ,
  '!=',
  '===',
  '!==',
  '<',
  '<=',
  '>',
  '>=',
  '<<',
  '>>',
  '>>>',
  '+',
  '-',
  '*',
  '/',
  '%',
  '|',
  '^',
  '&',
  '??',
  'in',
  'instanceof'
}
```

### BinaryExpression

```js
interface BinaryExpression <: Expression {
  kind: NodeKind.BinaryExpression;
  left: Expression;
  operator: BinaryOperator
  right: Expression;
}
```

### BindingElement

```js
interface BindingElement <: Expression {
  kind: NodeKind.BindingElement;
  left: ObjectBindingPattern | ArrayBindingPattern | BindingIdentifier;
  right: AssignmentExpression;
}
```

### BindingRestElement

```js
interface BindingRestElement <: Expression {
  kind: NodeKind.BindingRestElement;
  argument: ObjectBindingPattern | ArrayBindingPattern | BindingIdentifier;
}
```

### ArrayBindingPattern

```js
interface ArrayBindingPattern <: Expression {
  kind: NodeKind.ArrayBindingPattern;
  bindingElementList: BindingElementList;
}
```

### BindingElementList

```js
interface BindingElementList <: Expression {
  kind: NodeKind.BindingElement;
  elements: [ Elison | BindingElement ];
  trailingComma: boolean;
}
```

### BindingRestProperty

```js
interface BindingRestProperty <: Expression {
  kind: NodeKind.BindingRestProperty;
  argument: BindingIdentifier;
}
```

### CallExpression

```js
interface CallExpression <: Expression {
  kind: NodeKind.CallExpression;
  argumentList: ArgumentList;
  arguments: typeArguments: TypeArguments;
}
```

### ArgumentList

```js
interface ArgumentList <: Expression {
  kind: NodeKind.ArgumentList;
  elements: [ ArgumentListElement ];
  trailingComma: boolean;
}
```

### ClassExpression

```js
interface ClassExpression <: Expression {
  kind: NodeKind.ClassExpression;
  name: BindingIdentifier | null;
  typeParameters: TypeParameters;
  classHeritage: Expression | null;
  classElementList: ClassElementList;
}
```

See [14.6 Class Definitions](https://tc39.es/ecma262/#sec-class-definitions)


### ClassElementList

```js
interface ClassElementList <: Expression {
  kind: NodeKind.ClassElementList;
  elements: [ Semicolon | ClassElement | FieldDefinition ]
}
```

### ClassElement

```js
interface ClassElement <: Expression {
  kind: NodeKind.ClassElement;
  isStatic: boolean;
  isAbstract: boolean;
  isReadOnly: boolean;
  isOptional: boolean;
  method: MethodDefinition;
}
```
The `isStatic` boolean is true if `static` of ClassElement is true.


### FieldDefinition

```js
interface FieldDefinition <: Expression {
  key: Expression | PrivateIdentifier;
  isOptional: boolean;
  isReadOnly: boolean;
  exclamation: boolean;
  type: TypeNode | null;
  initializer: Expression | null;
  isStatic: boolean;
}
```

The `optional` and `exclamation` are `Typescript` properties.

### Semicolon

```js
interface Semicolon <: Expression {
  kind: NodeKind.Semicolon;
}

```
This node is part of the `ClassElement` production. See[`14.6 Class Definitions`](https://tc39.es/ecma262/#prod-ClassElement).


### ComputedPropertyName

```js
interface ComputedPropertyName <: Expression {
  kind: NodeKind.ComputedPropertyName;
  expression: Expression;
}
```

### ConciseBody

```js
interface ConciseBody <: Expression {
  kind: NodeKind.ConciseBody;
  expression: Expression;
}
```

### ConditionalExpression

```js
interface ConditionalExpression  <: Expression {
  kind: NodeKind.ConditionalExpression;
  shortCircuit: BinaryExpression | Expression;
  consequent: AssignmentExpression;
  alternate: AssignmentExpression;
}
```

For simplicity the `ShortCircuitExpression` have been merged with `ConditionalExpression`.
However. The `shortCircuit` property should start with `BinaryExpression`, and it's precedence
value should start with `|` - right above  `&&`, `||` and `??`.


### CoverInitializedName

```js
interface CoverInitializedName <: Expression {
  kind: NodeKind.CoverInitializedName;
  identifierReference: IdentifierReference;
  isOptional: boolean;
  exclamation: boolean;
  initializer: AssignmentExpression;
}
```

`optional` and `exclamation` is invalid here, and only used for error recovery.

 Use of this node should automatically force an grammar error to appear in actual object initializer.

### Elison

```js
interface Elison <: Expression {
  kind: NodeKind.Elison;
}
```

Used to represent an splice array in [ArrayLiteral](https://tc39.es/ecma262/#prod-ArrayLiteral)


### FunctionBody

```js
interface FunctionBody <: Expression {
  kind: NodeKind.FunctionBody;
  statementList: FunctionStatementList;
}
```

### FunctionStatementList

```js
interface FunctionStatementList <: Expression {
  kind: NodeKind.FunctionStatementList;
  statements: [ Statement ];
  multiline: boolean;
}
```

### FunctionExpression

```js
interface FunctionExpression <: Expression {
  kind: NodeKind.FunctionExpression;
  name: BindingIdentifier | null;
  formalParameters: FormalParameterList;
  contents: FunctionBody;
  typeParameters: TypeParameters;
  type: TypeNode | null;
}
```

 `typeParameters` and `type` is not allowed in `FunctionExpression`. They exist here for error recovery
 reasons.

 ### AsyncGeneratorExpression

```js
interface AsyncGeneratorExpression <: Expression {
  kind: NodeKind.AsyncGeneratorExpression;
  name: BindingIdentifier | null;
  formalParameters: FormalParameterList;
  contents: FunctionBody;
  typeParameters: TypeParameters;
  type: TypeNode | null;
}
```

### AsyncFunctionExpression

```js
interface AsyncFunctionExpression <: Expression {
  kind: NodeKind.AsyncFunctionExpression;
  name: BindingIdentifier | null;
  formalParameters: FormalParameterList;
  contents: FunctionBody;
  typeParameters: TypeParameters;
  type: TypeNode | null;
}
```

### GeneratorExpression

```js
interface GeneratorExpression <: Expression {
  kind: NodeKind.GeneratorExpression;
  name: BindingIdentifier | null;
  formalParameters: FormalParameterList;
  contents: FunctionBody;
  typeParameters: TypeParameters;
  type: TypeNode | null;
}
```

### FormalParameterList

```js
interface FormalParameterList <: Expression {
  kind: NodeKind.FormalParameterList;
  formalParameterList: [ FormalParameter ];
  trailingComma: boolean;
}
```

### FormalParameter

```js
interface FormalParameter <: Expression {
  ellipsis: boolean;
  binding: ObjectBindingPattern | ArrayBindingPattern | BindingIdentifier;
  isOptional: boolean;
  isReadOnly: boolean;
  type: TypeNode | null;
  initializer: AssignmentExpression | null;
  accessModifiers: AccessModifiers;
}
```
The `optional`, `accessModifiers` and `type` are `Typescript` properties.

### ImportCall

```js
interface ImportCall <: Expression {
  kind: NodeKind.ImportCall;
  expression: Expression;
}
```

### ImportMeta

```js
interface ImportMeta <: Expression {
  kind: NodeKind.ImportMeta;
}
```

### ElementAccessExpression

```js
interface ElementAccessExpression <: Expression {
  kind: NodeKind.ElementAccessExpression;
  member: LeftHandSideExpression | OptionalExpression;
  expression: Expression;
}
```

### PropertyAccessExpression

```js
interface PropertyAccessExpression <: Expression {
  kind: NodeKind.PropertyAccessExpression;
  member: LeftHandSideExpression | OptionalExpression;
  expression: IdentifierName | PrivateIdentifier;
}
```

### MethodDefinition

```js
interface MethodDefinition <: Expression {
  kind: NodeKind.MethodDefinition;
  async: boolean;
  generator: boolean;
  getter: boolean;
  propertySetParameterList: BindingIdentifier | BindingElement | null;
  uniqueFormalParameters: [ BindingIdentifier | BindingElement | BindingRestElement ];
  name: IdentifierReference | StringLiteral | BigIntLiteral | NumericLiteral | IdentifierName;
  contents: FunctionBody;
}
```
`getter` should be true **only** if `propertySetParameterList` is set to `null` and `uniqueFormalParameters` has
an empty list.

A getter cannot have any parameters.

`propertySetParameterList` should be set if `getter` is false and `uniqueFormalParameters` has
an empty list.

E.g `({set x(y) {}})` can only have one paramater.

This changes conforms to the ECMA specification.

### NewExpression

```js
interface NewExpression <: Expression {
  kind: NodeKind.NewExpression;
  expression: Expression;
  arguments: [ AssignmentRestElement | Expression ];
}
```

### NewTarget

```js
interface NewTarget <: Expression {
  kind: NodeKind.NewTarget;
  name: IdentifierName;
}
```

### SpreadElement

```js
interface SpreadElement <: Expression {
  kind: NodeKind.SpreadElement;
  argument: Expression;
}
```

### SpreadProperty

```js
interface SpreadProperty <: Expression {
  kind: NodeKind.SpreadProperty;
  argument: AssignmentExpression;
}
```

See `12.2.6 Object Initializer`. The `SpreadProperty` AST node is not mentioned in the specs, but has been
added to represent the `...AssignmentExpression` production.


### Super

```js
interface Super <: Expression {
  kind: NodeKind.Super;
}
```

### TaggedTemplate

```js
interface TaggedTemplate <: Expression {
  kind: NodeKind.TaggedTemplate;
  member: MemberExpression;
  typeArguments: any | null;
  template: TemplateTail  | TemplateExpression;
}
```

### TemplateSpan

```js
interface TemplateSpan <: Expression {
  kind: NodeKind.TemplateSpan;
  rawText: string;
  text: string;
  expression: Expression | null;
}
```
 The `rawText` property is the raw string source of the template element.

### TemplateTail

```js
interface TemplateTail <: Expression {
  kind: NodeKind.TemplateTail;
  rawText: string;
  text: string;
}
```

### TemplateExpression

```js
interface TemplateExpression <: Expression {
  kind: NodeKind.TemplateExpression;
  spans: [ TemplateSpan ];
  tail: TemplateTail;
}
```

### UnaryOperator

```js
  enum UnaryOperator {
  '+',
  '-',
  '!',
  '~',
  'delete',
  'void',
  'typeof'
  }
```

### UnaryExpression

```js
interface UnaryExpression <: Expression {
  kind: NodeKind.UnaryExpression;
  operator: UnaryOperator;
  operand: Expression;
}
```

### YieldExpression

```js
interface YieldExpression <: Expression {
  kind: NodeKind.YieldExpression;
  delegate: boolean;
  argument: Expression | null;
}
```

### ParenthesizedExpression

```js
interface ParenthesizedExpression <: Expression {
  kind: NodeKind.ParenthesizedExpression;
  expression: Expression | CommaOperator;
}
```

### OptionalExpression

```js
interface OptionalExpression <: Expression {
  kind: NodeKind.OptionalExpression;
  member: Expression;
  chain: OptionalChain;
}
```

See `12.3 Left-Hand-Side Expressions - OptionalExpression`.

### OptionalChain

```js
interface OptionalChain <: Expression {
  kind: NodeKind.OptionalChain;
  chain: MemberChain | CallChain | null;
}
```

### ElementAccessChain

```js
interface ElementAccessChain <: Expression {
  kind: NodeKind.ElementAccessChain;
  chain: ElementAccessChain | PropertyAccessChain | CallChain | null;
  expression: Expression | IdentifierName | null;
}
```

### PropertyAccessChain

```js
interface PropertyAccessChain <: Expression {
  kind: NodeKind.PropertyAccessChain;
  chain: ElementAccessChain | PropertyAccessChain | CallChain | null;
  expression: IdentifierName | PrivateName | null;
}
```

### CallChain

```js
interface CallChain <: Expression {
  kind: NodeKind.CallChain;
  chain: ElementAccessChain | PropertyAccessChain | CallChain | null;
  argumentsList: ArgumentList | null;
  typeArguments: TypeArguments;
}
```

### PropertyKey

```js
enum PropertyKey {
  IdentifierName, NumericLiteral, BigIntLiteral, StringLiteral, ComputedPropertyName
}
```

### PropertyName

```js
interface PropertyName <: Expression {
  kind: NodeKind.PropertyName;
  key: PropertyKey;
  value: AssignmentExpression | BindingElement;
}
```

### UnaryOperator

```js
  enum UpdateOp {
  '++',
  '--'
  }
```

### PrefixUpdateExpression

```js
interface PrefixUpdateExpression <: Expression {
  kind: NodeKind.PrefixUpdateExpression;
  operator: UpdateOp;
  operand: Expression;
}
```

`UpdateExpression` has been separated into `PrefixUpdateExpression` and `PostfixUpdateExpression` to reduce AST
file size.

### PostfixUpdateExpression

```js
interface PostfixUpdateExpression <: Expression {
  kind: NodeKind.PrefixUpdateExpression;
  operator: UpdateOp;
  operand: Expression;
}
```

### ObjectLiteral

```js
interface ObjectLiteral <: Expression {
  kind: NodeKind.ObjectLiteral;
  propertyList: PropertyDefinitionList;
}
```

### PropertyDefinitionList

```js
interface PropertyDefinitionList <: Expression {
  kind: NodeKind.ObjectLiteral;
  properties: [ SpreadProperty | PropertyDefinition | IdentifierReference | CoverInitializedName ];
  trailingComma: boolean;
  multiline: boolean;
}
```

### PropertyDefinition

```js
interface PropertyDefinition <: Expression {
  kind: NodeKind.PropertyDefinition;
  left: IdentifierName | NumericLiteral | BigIntLiteral | StringLiteral | ComputedPropertyName,
  right: AssignmentExpression | BindingElement | BindingIdentifier,
  decorators: DecoratorList,
  accessModifier: AccessModifier | null,
}
```

### ObjectBindingPattern

```js
interface ObjectBindingPattern <: Expression {
  kind: NodeKind.ObjectBindingPattern;
  propertyList: BindingPropertyList;
}
```

### BindingPropertyList

```js
interface BindingPropertyList <: Expression {
  kind: NodeKind.BindingPropertyList;
  properties: [ BindingElement | BindingProperty ];
  trailingComma: boolean;
  multiline: boolean;
}
```

### BindingProperty

```js
interface BindingProperty <: Expression {
  kind: NodeKind.BindingProperty;
  ellipsis: boolean;
  key: PropertyKey;
  value: BindingElement | SingleNameBinding;
}
```

### SingleNameBinding

```js
interface SingleNameBinding <: Expression {
  kind: NodeKind.SingleNameBinding;
  ellipsis: boolean;
  binding: BindingIdentifier;
  initializer: AssignmentExpression | null;
}
```

### AsExpression

```js
interface AsExpression <: Expression {
  kind: NodeKind.AsExpression;
  expression: Expression;
  type: TypeNode;
}
```

This node is for `Typescript`.

### NonNullExpression

```js
interface NonNullExpression <: Expression {
  kind: NodeKind.NonNullExpression;
  expression: Expression;
}
```

This node is for `Typescript`.

### OmittedExpression

```js
interface OmittedExpression <: Expression {
  kind: NodeKind.OmittedExpression;
}
```

This node is for `Typescript`.
