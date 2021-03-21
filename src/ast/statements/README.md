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
    label: IdentifierReference | null;
}
```

### ContinueStatement

```js
interface ContinueStatement <: Statements {
    kind: NodeKind.ContinueStatement;
    label: IdentifierReference | null;
}
```

### SwitchStatement

```js
interface SwitchStatement <: Statements {
    kind: NodeKind.SwitchStatement;
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
  expression: Expression;
  statements: [ Statement ];
}
```

### DefaultClause

```js
interface DefaultClause <: Statements {
  kind: NodeKind.DefaultClause;
  statements: [ Statement ];
}
```

### ThrowStatement

```js
interface ThrowStatement <: Statements {
  kind: NodeKind.ThrowStatement;
  expression: Expression;
}
```

A `throw` statement.

### TryStatement

```js
interface TryStatement <: Statements {
  kind: NodeKind.TryStatement;
  block: BlockStatement;
  catchClause: CatchClause | null;
  finallyBlock: BlockStatement;
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
    expression: Expression;
    statement: Statement;
}
```

### WithStatement

```js
interface WithStatement <: Statements {
    kind: NodeKind.WithStatement;
    expression: Expression;
    statement: Statement;
}
```

### DoWhileStatement

```js
interface DoWhileStatement <: Statements {
    kind: NodeKind.DoWhileStatement;
    statement: Statement;
    expression: Expression;
}
```

### ForStatement

```js
interface ForStatement <: Statements {
    kind: NodeKind.ForStatement;
    initializer: LexicalDeclaration | [ VariableDeclaration ] | Expression | null;
    variableDeclarationList: boolean;
    condition: Expression | null;
    incrementor: Expression | null;
    statement: Statement;
}
```
The `variableDeclarationList` is `true` if the initializer contains a list of `VariableDeclaration`. Otherwise it is `false`.

See [13.7 Iteration Statements](https://tc39.es/ecma262/#sec-iteration-statements)

### ForOfStatement

```js
interface ForOfStatement <: Statements {
    kind: NodeKind.ForOfStatement;
    initializer: LexicalDeclaration | ForBinding | ObjectAssignmentPattern | ArrayAssignmentPattern | Expression;
    expression: Expression;
    statement: Statement;
    await: boolean;
}
```

### ForInStatement

```js
interface ForInStatement <: Statements {
    kind: NodeKind.ForInStatement;
    initializer: LexicalDeclaration | ObjectAssignmentPattern | ArrayAssignmentPattern | Expression;
    expression: Expression;
    statement: Statement;
}
```

### VariableDeclaration

```js
interface VariableStatement <: Declaration {
    kind: NodeKind.VariableDeclaration;
    declarationList: [ VariableDeclaration ];
}
```

`isDeclared` is not necessary and is part of `TypeScript`

### ReturnStatement

```js
interface ReturnStatement <: Statements {
    kind: NodeKind.ReturnStatement;
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
    binding: BindingPattern | BindingIdentifier;
    exclamation: boolean;
    type: TypeNode;
    initializer: Expression | null;
}
```
`exclamation` and `type` is not necessary and is part of `TypeScript`

## AsyncGeneratorDeclaration

```js
interface AsyncGeneratorDeclaration <: Statements {
    kind: NodeKind.AsyncGeneratorDeclaration;
    name: BindingIdentifier;
    formalParameters: FormalParameterList;
    contents: FunctionBody;
    typeParameters: TypeParameters;
    type: TypeNode | null;
}
```

## AsyncFunctionDeclaration

```js
interface AsyncFunctionDeclaration <: Statements {
    kind: NodeKind.AsyncFunctionDeclaration;
    name: BindingIdentifier;
    formalParameters: FormalParameterList;
    contents: FunctionBody;
    typeParameters: TypeParameters;
    type: TypeNode | null;
}
```

## GeneratorDeclaration

```js
interface GeneratorDeclaration <: Statements {
    kind: NodeKind.GeneratorDeclaration;
    name: BindingIdentifier;
    formalParameters: FormalParameterList;
    contents: FunctionBody;
    typeParameters: TypeParameters;
    type: TypeNode | null;
}
```

## FunctionDeclaration

```js
interface FunctionDeclaration <: Statements {
    kind: NodeKind.FunctionDeclaration;
    name: BindingIdentifier;
    formalParameters: FormalParameterList;
    contents: FunctionBody;
    typeParameters: TypeParameters;
    type: TypeNode | null;
}
```

## ClassDeclaration

```js
interface ClassDeclaration <: Statements {
    kind: NodeKind.ClassDeclaration;
    name: BindingIdentifier | null;
    typeParameters: TypeParameters;
    classHeritage: Expression | null;
    classElementList: ClassElementList;
}
```

## LexicalDeclaration

```js
interface LexicalDeclaration <: Statements {
    kind: NodeKind.LexicalDeclaration;
    bindingList: BindingList;
}
```
