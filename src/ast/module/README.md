# 15.2 Modules

### ImportDeclaration

```js
interface ImportDeclaration <: Node {
  kind: NodeKind.ImportDeclaration;
  importKeyword: SyntaxToken<TokenSyntaxKind>;
  typeKeyword: SyntaxToken<TokenSyntaxKind> | null;
  typeofKeyword: SyntaxToken<TokenSyntaxKind> | null;
  fromClause: FromClause;
  moduleSpecifier: ExpressionNode | null;
  importClause: ImportClause | null;
}
```
An import declaration, e.g., `import foo from 'mod;`.

### ImportClause

```js
interface ImportClause <: Node {
  kind: NodeKind.ImportClause;
  defaultBinding: Identifier | null;
  nameSpaceImport: Identifier | null;
  namedImports: NamedImports | null;
}
```

### NamedImports

```js
interface NamedImports <: Node {
  kind: NodeKind.NamedImports;
  importsList: ImportsList
}
```

### ImportsList

```js
interface ImportsList <: Node {
  kind: NodeKind.ImportDeclaration;
  specifiers: [ ImportSpecifier ]
}
```

### ImportSpecifier

```js
interface ImportSpecifier <: Node {
  kind: NodeKind.ImportSpecifier;
  typeKeyword: SyntaxToken<TokenSyntaxKind> | null;
  name: Identifier | null;
  asKeyword: SyntaxToken<TokenSyntaxKind> | null;
  binding: Identifier | null;
  moduleExportName: StringLiteral | null;
}
```

### ExportDeclaration

```js
interface ExportDeclaration <: Node {
  kind: NodeKind.ExportDeclaration;
  exportKeyword: SyntaxToken<TokenSyntaxKind>;
  declaration: AssignmentExpression | VariableStatement | LexicalDeclaration | FunctionDeclaration | ClassDeclaration | null;
  namedExports: NamedExports | null;
  fromClause: FromClause;
  exportFromClause: ExportFromClause | null;
}
```

### NamedExports

```js
interface NamedExports <: Node {
  kind: NodeKind.NamedExports;
  exportsList: ExportsList;
}
```

### ExportFromClause

```js
interface ExportFromClause <: Node {
  kind: NodeKind.ExportFromClause;
  asKeyword: SyntaxToken<TokenSyntaxKind>;
  moduleExportName: StringLiteral | null;
  namedBinding: Identifier | null;
}
```

  ### ExportSpecifier

```js
interface ExportSpecifier <: Node {
  kind: NodeKind.ExportSpecifier;
  name: Identifier | StringLiteral;
  asKeyword: SyntaxToken<TokenSyntaxKind> | null;
  binding: Identifier | null;
  moduleExportName: StringLiteral | null;
}
```

### ExportDefault

```js
interface ExportDefault <: Node {
  kind: NodeKind.ExportDefault;
  exportKeyword: SyntaxToken<TokenSyntaxKind>;
  defaultKeyword: SyntaxToken<TokenSyntaxKind>;
  declaration: FunctionDeclaration | ClassDeclaration | Expression;
}
```

### FromClause

```js
interface FromClause <: Node {
  kind: NodeKind.FromClause;
  fromKeyword: SyntaxToken<TokenSyntaxKind>;
  from: ExpressionNode;
}
```

### NameSpaceImport

```js
interface NameSpaceImport <: Node {
  kind: NodeKind.NameSpaceImport;
  asteriskToken: SyntaxToken<TokenSyntaxKind>;
  asKeyword: SyntaxToken<TokenSyntaxKind> | null;
  binding: Identifier | DummyIdentifier | null;
}
```

### ExportsList

```js
interface ExportsList <: Node {
  kind: NodeKind.ExportList;
  specifiers: [ ExportSpecifier ]
}
```

### NamespaceExportDeclaration

```js
interface NamespaceExportDeclaration <: Node {
  kind: NodeKind.NamespaceExportDeclaration;
  name: Identifier;
}
```
