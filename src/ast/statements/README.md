# 14 ECMAScript Language: Statements and Declarations

```js
interface Statements <: Node { }
```

## BlockStatement

```js
interface BlockStatement <: Statements {
    kind: NodeKind.BlockStatement;
    block: Block;
}
```

## Block

```js
interface Block <: Statements {
    kind: NodeKind.Block;
    statementList: [ Statement ];
    multiline: boolean;
}
```

### BreakStatement

```js
interface BreakStatement <: Statements {
    kind: NodeKind.BreakStatement;
    breakKeyword: SyntaxToken<TokenSyntaxKind>;
    label: IdentifierReference | null;
}
```

### ContinueStatement

```js
interface ContinueStatement <: Statements {
    kind: NodeKind.ContinueStatement;
    continueKeyword: SyntaxToken<TokenSyntaxKind>;
    label: IdentifierReference | null;
}
```

### SwitchStatement

```js
interface SwitchStatement <: Statements {
    kind: NodeKind.SwitchStatement;
    switchKeyword: SyntaxToken<TokenSyntaxKind>;
    expression: Expression;
    caseBlock: CaseBlock;
}
```

A `switch` statement.

### CaseBlock

```js
interface CaseBlock <: Statements {
  kind: NodeKind.CaseBlock;
  clauses: [ CaseClause | DefaultClause ];
}
```

### CaseClause

```js
interface CaseClause <: Statements {
  kind: NodeKind.CaseClause;
  clauseKeyword: SyntaxToken<TokenSyntaxKind>;
  expression: Expression;
  statements: [ Statement ];
}
```

### DefaultClause

```js
interface DefaultClause <: Statements {
  kind: NodeKind.DefaultClause;
  defaultKeyword: SyntaxToken<TokenSyntaxKind>;
  statements: [ Statement ];
}
```

### ThrowStatement

```js
interface ThrowStatement <: Statements {
  kind: NodeKind.ThrowStatement;
  throwKeyword: SyntaxToken<TokenSyntaxKind>;
  expression: Expression;
}
```

A `throw` statement.

### TryStatement

```js
interface TryStatement <: Statements {
  kind: NodeKind.TryStatement;
  tryKeyword: SyntaxToken<TokenSyntaxKind>;
  block: BlockStatement;
  catchKeyword: SyntaxToken<TokenSyntaxKind>;
  catchClause: CatchClause | null;
  finallyBlock: BlockStatement;
  finallyKeyword: SyntaxToken<TokenSyntaxKind>;
}
```

A `try` statement. If `handler` is `null` then `finalizer` must be a `BlockStatement`.

### CatchClause

```js
interface CatchClause <: Statements {
  kind: NodeKind.CatchClause;
  catchParameter: CatchParameter | null;
  block: BlockStatement;
}
```

### CatchParameter

```js
interface CatchParameter <: Statements {
  kind: NodeKind.CatchParameter;
  binding: BindingIdentifier | ObjectBindingPattern | ArrayBindingPattern | null;
  type: TypeNode | null;
  initializer: AssignmentExpression | null;
}
```

### WhileStatement

```js
interface WhileStatement <: Statements {
  kind: NodeKind.WhileStatement;
  whileKeyword: SyntaxToken<TokenSyntaxKind>;
  expression: Expression;
  statement: Statement;
}
```

### WithStatement

```js
interface WithStatement <: Statements {
  kind: NodeKind.WithStatement;
  withKeyword: SyntaxToken<TokenSyntaxKind>;
  expression: Expression;
  statement: Statement;
}
```

### DoWhileStatement

```js
interface DoWhileStatement <: Statements {
  kind: NodeKind.DoWhileStatement;
  doKeyword: SyntaxToken<TokenSyntaxKind>;
  statement: Statement;
  whileKeyword: SyntaxToken<TokenSyntaxKind>;
  expression: Expression;
}
```

### ForStatement

```js
interface ForStatement <: Statements {
  kind: NodeKind.ForStatement;
  forKeyword: SyntaxToken<TokenSyntaxKind>;
  initializer: ExpressionNode | VariableDeclarationList | BindingList | null;
  condition: ExpressionNode | null;
  incrementor: ExpressionNode | null;
  statement: StatementNode;
}
```

See [13.7 Iteration Statements](https://tc39.es/ecma262/#sec-iteration-statements)

### ForOfStatement

```js
interface ForOfStatement <: Statements {
  kind: NodeKind.ForOfStatement;
  forKeyword: SyntaxToken<TokenSyntaxKind>;
  awaitKeyword: SyntaxToken<TokenSyntaxKind> | null
  initializer: LexicalDeclaration | ForBinding | ObjectAssignmentPattern | ArrayAssignmentPattern |
  Expression;
  ofKeyword: SyntfaxToken<TokenSyntaxKind>
  expression: Expression;
  statement: Statement;
  awaitKeyword: SyntaxToken<TokenSyntaxKind>;
}
```

### ForInStatement

```js
interface ForInStatement <: Statements {
  kind: NodeKind.ForInStatement;
  forKeyword: SyntaxToken<TokenSyntaxKind>;
  initializer: LexicalDeclaration | ObjectAssignmentPattern | ArrayAssignmentPattern | Expression;
  inKeyword: SyntaxToken<TokenSyntaxKind>
  expression: Expression;
  statement: Statement;
}
```

### IfStatement

```js
interface IfStatement <: Statements {
  kind: NodeKind.IfStatement;
  ifKeyword: SyntaxToken<TokenSyntaxKind>;
  expression: ExpressionNode;
  consequent: StatementNode;
  elseKeyword: SyntaxToken<TokenSyntaxKind> | null;
  alternate: StatementNode | null;
}
```

### VariableDeclaration

```js
interface VariableStatement <: Declaration {
  kind: NodeKind.VariableDeclaration;
  varKeyword: SyntaxToken<TokenSyntaxKind>;
  declarationList: [ VariableDeclaration ];
}
```

### ReturnStatement

```js
interface ReturnStatement <: Statements {
  kind: NodeKind.ReturnStatement;
  returnKeyword: SyntaxToken<TokenSyntaxKind>;
  expression: Expression | null;
}
```

### LabeledStatement

```js
interface LabeledStatement <: Statements {
  kind: NodeKind.LabeledStatement;
  label: IdentifierReference;
  statement: Statement;
}
```

### DebuggerStatement

```js
interface DebuggerStatement <: Statements {
  kind: NodeKind.DebuggerStatement;
  debuggerKeyword: SyntaxToken<TokenSyntaxKind>;
}
```

### ExpressionStatement

```js
interface ExpressionStatement <: Statements {
  kind: NodeKind.ExpressionStatement;
  expression: Expression;
}
```

### EmptyStatement

```js
interface EmptyStatement <: Statements {
  kind: NodeKind.EmptyStatement;
}
```

### BindingList

```js
interface BindingList <: Statements {
  kind: NodeKind.BindingList;
  bindingList: [ LexicalBinding ];
}
```

### LexicalBinding

```js
interface LexicalBinding <: Statements {
  kind: NodeKind.LexicalBinding;
  lexicalKeyword: SyntaxToken<TokenSyntaxKind>;
  binding: BindingPattern | BindingIdentifier;
  exclamation: boolean;
  type: TypeNode;
  initializer: Expression | null;
}
```

## FunctionDeclaration

```js
interface FunctionDeclaration <: Statements {
  kind: NodeKind.FunctionDeclaration;
  declareKeyword: SyntaxToken<TokenSyntaxKind> | null;
  asyncKeyword: SyntaxToken<TokenSyntaxKind> | null;
  functionKeyword: SyntaxToken<TokenSyntaxKind>;
  generatorToken: SyntaxToken<TokenSyntaxKind> | null;
  name: Identifier | null;
  formalParameters: FormalParameterList;
  contents: FunctionBody | null;
  typeParameters: TypeParameter | null;
  returnType: TypeNode | null;
}
```

## ClassDeclaration

```js
interface ClassDeclaration <: Statements {
  kind: NodeKind.ClassDeclaration;
  declareKeyword: SyntaxToken<TokenSyntaxKind> | null;
  decorators: DecoratorList | null;
  classKeyword: SyntaxToken<TokenSyntaxKind>;
  name: Identifier | null;
  typeParameters: TypeParameter | null;
  members: ClassElementList;
}
```

## LexicalDeclaration

```js
interface LexicalDeclaration <: Statements {
    kind: NodeKind.LexicalDeclaration;
    bindingList: BindingList;
}
```
