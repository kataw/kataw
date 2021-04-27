# 13 ECMAScript Language: Expressions

```js
interface Expression <: Node { }
```

### Identifier

```js
interface IdentifierName <: ExpressionNode {
  kind: NodeKind.IdentifierName;
  text: string;
  rawText: string;
}
```

### PrivateIdentifier

```js
interface PrivateIdentifier <: ExpressionNode {
  kind: NodeKind.PrivateIdentifier;
  text: string;
  rawText: string;
}
```

### NumericLiteral

```js
interface NumericLiteral <: ExpressionNode {
  kind: NodeKind.NumericLiteral;
  text: number;
  rawText: string;
}
```

### BigIntLiteral

```js
interface BigIntLiteral <: ExpressionNode {
  kind: NodeKind.BigIntLiteral;
  text: number | null;
  rawText: string;
}
```

### BooleanLiteral

```js
interface BooleanLiteral <: ExpressionNode {
  kind: NodeKind.BooleanLiteral;
  value: boolean;
}
```

### TemplateLiteral

```js
interface TemplateLiteral <: ExpressionNode {
  kind: NodeKind.TemplateLiteral;
  raw: string;
  value: string;
}
```

### NullLiteral

```js
interface NullLiteral <: ExpressionNode {
  kind: NodeKind.NullLiteral;
  value: null;
}
```

### StringLiteral

```js
interface StringLiteral <: ExpressionNode {
  kind: NodeKind.StringLiteral;
  text: string;
  rawText: string;
}
```

### RegularExpressionLiteral

```js
interface RegularExpressionLiteral <: ExpressionNode {
  kind: NodeKind.RegularExpressionLiteral;
  text: string;
}
```

## Comma Operator

```js
interface CommaOperator  <: ExpressionNode {
  kind: NodeKind.CommaOperator;
  expressions: [ Expression ];
}
```

A sequence expression, i.e., a comma-separated sequence of expressions.

See [13.16](https://tc39.es/ecma262/#sec-comma-operator)


### ThisExpression

```js
interface ThisExpression <: ExpressionNode {
  kind: NodeKind.ThisExpression;
}
```

### ArrayLiteral

```js
interface ArrayLiteral <: ExpressionNode {
  kind: NodeKind.IdentifierReference;
  elementList: ElementList;
}
```

### ElementList

```js
interface ElementList <: ExpressionNode {
  kind: NodeKind.ElementList;
  elements: [ Elison | SpreadElement | ExpressionNode ];
  trailingComma: boolean;
  multiline: boolean;
}
```

### ArrowFunction

```js
interface ArrowFunction <: ExpressionNode {
  kind: NodeKind.ArrowFunction;
  arrowToken: SyntaxToken | null;
  typeParameters: TypeParameter | null;
  parameters: Identifier | [FormalParameter];
  asyncToken: SyntaxToken | null;
  content: ExpressionNode | FunctionBody
}
```

### AssignmentExpression

```js
interface AssignmentExpression <: ExpressionNode {
  kind: NodeKind.AssignmentExpression;
  left: Expression;
  operatorToken: SyntaxToken | null;
  right: Expression;
}
```

### AwaitExpression

```js
interface AwaitExpression <: ExpressionNode {
  kind: NodeKind.AwaitExpression;
  awaitKeyword: SyntaxToken | null;
  argument: UnaryExpression;
}
```

### BinaryExpression

```js
interface BinaryExpression <: ExpressionNode {
  kind: NodeKind.BinaryExpression;
  left: Expression;
  operatorToken: SyntaxToken | null;
  right: Expression;
}
```

### BindingElement

```js
interface BindingElement <: ExpressionNode {
  kind: NodeKind.BindingElement;
  left: ObjectBindingPattern | ArrayBindingPattern | BindingIdentifier;
  right: AssignmentExpression;
}
```

### ArrayBindingPattern

```js
interface ArrayBindingPattern <: ExpressionNode {
  kind: NodeKind.ArrayBindingPattern;
  bindingElementList: BindingElementList;
}
```

### ArrayBindingElement

```js
interface ArrayBindingPattern <: ExpressionNode {
  kind: NodeKind.ArrayBindingPattern;
  ellipsisToken: SyntaxToken | null;
  binding: ObjectBindingPattern | ArrayBindingPattern | Identifier;
  optionalToken: SyntaxToken<TokenSyntaxKind> | null;
  type: TypeNode | null;
  initializer: ExpressionNode | null;
}
```

### BindingElementList

```js
interface BindingElementList <: ExpressionNode {
  kind: NodeKind.BindingElement;
  elements: [ Elison | BindingElement ];
  trailingComma: boolean;
}
```

### BindingRestProperty

```js
interface BindingRestProperty <: ExpressionNode {
  kind: NodeKind.BindingRestProperty;
  argument: BindingIdentifier;
}
```

### CallExpression

```js
interface CallExpression <: ExpressionNode {
  kind: NodeKind.CallExpression;
  argumentList: ArgumentList;
  arguments: typeArguments: TypeArguments;
}
```

### ArgumentList

```js
interface ArgumentList <: ExpressionNode {
  kind: NodeKind.ArgumentList;
  elements: [ ArgumentListElement ];
  trailingComma: boolean;
}
```

### ClassExpression

```js
interface ClassExpression <: ExpressionNode {
  kind: NodeKind.ClassExpression;
  classKeyword: SyntaxToken<TokenSyntaxKind>;
  decorators: DecoratorList | null;
  name: Identifier | null;
  typeParameters: TypeParameter | null;
  classHeritage: ExpressionNode | null;
  members: ClassElementList;
}
```

See [14.6 Class Definitions](https://tc39.es/ecma262/#sec-class-definitions)

### ClassHeritage

```js
interface ClassHeritage <: ExpressionNode {
  kind: NodeKind.ClassHeritage;
  extendsKeyword: SyntaxToken<TokenSyntaxKind>;
  expression: Expression;
  typeArguments: TypeArguments | null;
}
```


### ClassElementList

```js
interface ClassElementList <: ExpressionNode {
  kind: NodeKind.ClassElementList;
  elements: [ClassElements]
}
```

### ClassElement

```js
interface ClassElement <: ExpressionNode {
  kind: NodeKind.ClassElement;
  kind: NodeKind.ClassElementList;
  declareToken: SyntaxToken<TokenSyntaxKind> | null;
  decorators: DecoratorList | null;
  staticKeyword: SyntaxToken<TokenSyntaxKind> | null;
  asyncKeyword: SyntaxToken<TokenSyntaxKind> | null;
  setKeyword: SyntaxToken<TokenSyntaxKind> | null;
  getKeyword: SyntaxToken<TokenSyntaxKind> | null;
  method: MethodDefinition;
}
```

### FieldDefinition

```js
interface FieldDefinition <: ExpressionNode {
 decorators: DecoratorList | null;
 declaredToken: SyntaxToken<TokenSyntaxKind> | null;
 staticToken: SyntaxToken<TokenSyntaxKind> | null;
 asyncKeyword: SyntaxToken<TokenSyntaxKind> | null;
 key: ExpressionNode | Identifier;
 optionalToken: SyntaxToken<TokenSyntaxKind> | null;
 type: TypeNode | null;
 initializer: ExpressionNode | null;
}
```

### SemicolonClassElement

```js
interface SemicolonClassElement <: ExpressionNode {
  kind: NodeKind.Semicolon;
}

```
This node is part of the `ClassElement` production. See[`14.6 Class Definitions`](https://tc39.es/ecma262/#prod-ClassElement).


### ComputedPropertyName

```js
interface ComputedPropertyName <: ExpressionNode {
  kind: NodeKind.ComputedPropertyName;
  expression: Expression;
}
```

### ConciseBody

```js
interface ConciseBody <: ExpressionNode {
  kind: NodeKind.ConciseBody;
  expression: Expression;
}
```

### ConditionalExpression

```js
interface ConditionalExpression  <: ExpressionNode {
  shortCircuit: ExpressionNode;
  questionToken: SyntaxToken<TokenSyntaxKind>;
  consequent: ExpressionNode;
  colonToken: SyntaxToken<TokenSyntaxKind>;
  alternate: ExpressionNode;
}
```

For simplicity the `ShortCircuitExpression` have been merged with `ConditionalExpression`.
However. The `shortCircuit` property should start with `BinaryExpression`, and it's precedence
value should start with `|` - right above  `&&`, `||` and `??`.


### CoverInitializedName

```js
interface CoverInitializedName <: ExpressionNode {
  kind: NodeKind.CoverInitializedName;
  left: IdentifierReference;
  right: AssignmentExpression;
}
```

### Elison

```js
interface Elison <: ExpressionNode {
  kind: NodeKind.Elison;
}
```

Used to represent an splice array in [ArrayLiteral](https://tc39.es/ecma262/#prod-ArrayLiteral)


### FunctionBody

```js
interface FunctionBody <: ExpressionNode {
  kind: NodeKind.FunctionBody;
  statementList: FunctionStatementList;
}
```

### FunctionStatementList

```js
interface FunctionStatementList <: ExpressionNode {
  kind: NodeKind.FunctionStatementList;
  statements: [ Statement ];
  multiline: boolean;
}
```

### FunctionExpression

```js
interface FunctionExpression <: ExpressionNode {
  kind: NodeKind.FunctionExpression;
  asyncKeyword: SyntaxToken<TokenSyntaxKind> | null;
  functionKeyword: SyntaxToken<TokenSyntaxKind>;
  generatorToken: SyntaxToken<TokenSyntaxKind> | null;
  name: Identifier | null;
  formalParameters: FormalParameterList;
  contents: FunctionBody;
  typeParameters: TypeParameter | null;
  returnType: TypeNode | null;
}
```

 ### AsyncGeneratorExpression

```js
interface AsyncGeneratorExpression <: ExpressionNode {
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
interface AsyncFunctionExpression <: ExpressionNode {
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
interface GeneratorExpression <: ExpressionNode {
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
interface FormalParameterList <: ExpressionNode {
  kind: NodeKind.FormalParameterList;
  formalParameterList: [ FormalParameter ];
  trailingComma: boolean;
}
```

### FormalParameter

```js
interface FormalParameter <: ExpressionNode {
  ellipsisToken: SyntaxToken<TokenSyntaxKind> | null;
  binding: ObjectBindingPattern | ArrayBindingPattern | Identifier | DummyIdentifier;
  optionalToken: SyntaxToken<TokenSyntaxKind> | null;
  type: TypeNode | null;
  initializer: ExpressionNode | null;
}
```

### ImportCall

```js
interface ImportCall <: ExpressionNode {
  kind: NodeKind.ImportCall;
  importKeyword: SyntaxToken<TokenSyntaxKind>;
  expression: Expression;
}
```

### ImportMeta

```js
interface ImportMeta <: ExpressionNode {
  kind: NodeKind.ImportMeta;
  importKeyword: SyntaxToken<TokenSyntaxKind>;
}
```

### IndexExpression

```js
interface IndexExpression <: ExpressionNode {
  kind: NodeKind.IndexExpression;
  member: LeftHandSideExpression | OptionalExpression;
  expression: Expression;
}
```

### MemberAccessExpression

```js
interface MemberAccessExpression <: ExpressionNode {
  kind: NodeKind.MemberAccessExpression;
  member: LeftHandSideExpression | OptionalExpression;
  expression: IdentifierName | PrivateIdentifier;
}
```

### MethodDefinition

```js
interface MethodDefinition <: ExpressionNode {
  formalParameters: FormalParameterList | null;
  name: MethodName;
  contents: FunctionBody | null;
  typeParameters: TypeParameter | null;
  type: TypeNode | null;
}
```

### NewExpression

```js
interface NewExpression <: ExpressionNode {
  kind: NodeKind.NewExpression;
  newKeyword: SyntaxToken<TokenSyntaxKind>;
  expression: Expression;
  arguments: [ AssignmentRestElement | Expression ];
}
```

### NewTarget

```js
interface NewTarget <: ExpressionNode {
  kind: NodeKind.NewTarget;
  name: IdentifierName;
}
```

### SpreadElement

```js
interface SpreadElement <: ExpressionNode {
  kind: NodeKind.SpreadElement;
  ellipsisToken: SyntaxToken<TokenSyntaxKind> | null
  argument: Expression;
}
```

### SpreadProperty

```js
interface SpreadProperty <: ExpressionNode {
  kind: NodeKind.SpreadProperty;
  ellipsisToken: SyntaxToken<TokenSyntaxKind> | null
  argument: AssignmentExpression;
}
```

See `12.2.6 Object Initializer`. The `SpreadProperty` AST node is not mentioned in the specs, but has been
added to represent the `...AssignmentExpression` production.


### Super

```js
interface Super <: ExpressionNode {
  kind: NodeKind.Super;
  superKeyword: SyntaxToken<TokenSyntaxKind>;
}
```

### TaggedTemplate

```js
interface TaggedTemplate <: ExpressionNode {
  kind: NodeKind.TaggedTemplate;
  member: MemberExpression;
  typeArguments: any | null;
  template: TemplateTail  | TemplateExpression;
}
```

### TemplateSpan

```js
interface TemplateSpan <: ExpressionNode {
  kind: NodeKind.TemplateSpan;
  rawText: string;
  text: string;
  expression: Expression | null;
}
```
 The `rawText` property is the raw string source of the template element.

### TemplateTail

```js
interface TemplateTail <: ExpressionNode {
  kind: NodeKind.TemplateTail;
  rawText: string;
  text: string;
}
```

### TemplateExpression

```js
interface TemplateExpression <: ExpressionNode {
  kind: NodeKind.TemplateExpression;
  spans: [ TemplateSpan ];
  tail: TemplateTail;
}
```

### UnaryExpression

```js
interface UnaryExpression <: ExpressionNode {
  kind: NodeKind.UnaryExpression;
  operandToken: SyntaxToken<TokenSyntaxKind>;
  operand: Expression;
}
```

### YieldExpression

```js
interface YieldExpression <: ExpressionNode {
  kind: NodeKind.YieldExpression;
  yieldKeyword: SyntaxToken<TokenSyntaxKind> | null;
  delegate: boolean;
  asteriskToken: SyntaxToken<TokenSyntaxKind> | null;
  argument: Expression | null;
}
```

### ParenthesizedExpression

```js
interface ParenthesizedExpression <: ExpressionNode {
  kind: NodeKind.ParenthesizedExpression;
  expression: Expression | CommaOperator;
}
```

### OptionalExpression

```js
interface OptionalExpression <: ExpressionNode {
  kind: NodeKind.OptionalExpression;
  member: Expression;
  chain: OptionalChain;
}
```

See `12.3 Left-Hand-Side Expressions - OptionalExpression`.

### OptionalChain

```js
interface OptionalChain <: ExpressionNode {
  kind: NodeKind.OptionalChain;
  chain: MemberChain | CallChain | null;
}
```

### ElementAccessChain

```js
interface ElementAccessChain <: ExpressionNode {
  kind: NodeKind.ElementAccessChain;
  chain: ElementAccessChain | PropertyAccessChain | CallChain | null;
  expression: Expression | IdentifierName | null;
}
```

### PropertyAccessChain

```js
interface PropertyAccessChain <: ExpressionNode {
  kind: NodeKind.PropertyAccessChain;
  chain: ElementAccessChain | PropertyAccessChain | CallChain | null;
  expression: IdentifierName | PrivateName | null;
}
```

### CallChain

```js
interface CallChain <: ExpressionNode {
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
interface PropertyName <: ExpressionNode {
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
interface PrefixUpdateExpression <: ExpressionNode {
  kind: NodeKind.PrefixUpdateExpression;
  operandToken: SyntaxToken<TokenSyntaxKind>;
  operand: Expression;
}
```

`UpdateExpression` has been separated into `PrefixUpdateExpression` and `PostfixUpdateExpression` to reduce AST
file size.

### PostfixUpdateExpression

```js
interface PostfixUpdateExpression <: ExpressionNode {
  kind: NodeKind.PrefixUpdateExpression;
  operandToken: SyntaxToken<TokenSyntaxKind>;
  operand: Expression;
}
```

### ObjectLiteral

```js
interface ObjectLiteral <: ExpressionNode {
  kind: NodeKind.ObjectLiteral;
  propertyList: PropertyDefinitionList;
}
```

### PropertyDefinitionList

```js
interface PropertyDefinitionList <: ExpressionNode {
  kind: NodeKind.ObjectLiteral;
  properties: [ SpreadProperty | PropertyDefinition | IdentifierReference | CoverInitializedName ];
  trailingComma: boolean;
  multiline: boolean;
}
```

### PropertyDefinition

```js
interface PropertyDefinition <: ExpressionNode {
  kind: NodeKind.PropertyDefinition;
  left: IdentifierName | NumericLiteral | BigIntLiteral | StringLiteral | ComputedPropertyName,
  right: AssignmentExpression | BindingElement | BindingIdentifier,
}
```

### ObjectBindingPattern

```js
interface ObjectBindingPattern <: ExpressionNode {
  kind: NodeKind.ObjectBindingPattern;
  propertyList: BindingPropertyList;
}
```

### BindingPropertyList

```js
interface BindingPropertyList <: ExpressionNode {
  kind: NodeKind.BindingPropertyList;
  properties: [ BindingElement | BindingProperty ];
  trailingComma: boolean;
  multiline: boolean;
}
```

### BindingProperty

```js
interface BindingProperty <: ExpressionNode {
  kind: NodeKind.BindingProperty;
  ellipsisToken: SyntaxToken<TokenSyntaxKind> | null;
  key: PropertyKey;
  value: BindingElement | SingleNameBinding;
}
```

### SingleNameBinding

```js
interface SingleNameBinding <: ExpressionNode {
  kind: NodeKind.SingleNameBinding;
  ellipsisToken: SyntaxToken<TokenSyntaxKind> | null;
  binding: BindingIdentifier;
  initializer: AssignmentExpression | null;
}
```

### OmittedExpression

```js
interface OmittedExpression <: ExpressionNode {
  kind: NodeKind.OmittedExpression;
}
```
