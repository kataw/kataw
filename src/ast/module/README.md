# 15.2 Modules

### ImportDeclaration

```js
interface ImportDeclaration <: SyntaxNode {
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
interface ImportClause <: SyntaxNode {
  kind: NodeKind.ImportClause;
  defaultBinding: Identifier | null;
  nameSpaceImport: Identifier | null;
  namedImports: NamedImports | null;
}
```

### NamedImports

```js
interface NamedImports <: SyntaxNode {
  kind: NodeKind.NamedImports;
  importsList: ImportsList
}
```

### ImportsList

```js
interface ImportsList <: SyntaxNode {
  kind: NodeKind.ImportDeclaration;
  specifiers: [ ImportSpecifier ]
}
```

### ImportSpecifier

```js
interface ImportSpecifier <: SyntaxNode {
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
interface ExportDeclaration <: SyntaxNode {
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
interface NamedExports <: SyntaxNode {
  kind: NodeKind.NamedExports;
  exportsList: ExportsList;
}
```

### ExportFromClause

```js
interface ExportFromClause <: SyntaxNode {
  kind: NodeKind.ExportFromClause;
  asKeyword: SyntaxToken<TokenSyntaxKind>;
  moduleExportName: StringLiteral | null;
  namedBinding: Identifier | null;
}
```

  ### ExportSpecifier

```js
interface ExportSpecifier <: SyntaxNode {
  kind: NodeKind.ExportSpecifier;
  name: Identifier | StringLiteral;
  asKeyword: SyntaxToken<TokenSyntaxKind> | null;
  binding: Identifier | null;
  moduleExportName: StringLiteral | null;
}
```

### ExportDefault

```js
interface ExportDefault <: SyntaxNode {
  kind: NodeKind.ExportDefault;
  exportKeyword: SyntaxToken<TokenSyntaxKind>;
  defaultKeyword: SyntaxToken<TokenSyntaxKind>;
  declaration: FunctionDeclaration | ClassDeclaration | Expression;
}
```

### FromClause

```js
interface FromClause <: SyntaxNode {
  kind: NodeKind.FromClause;
  fromKeyword: SyntaxToken<TokenSyntaxKind>;
  from: ExpressionNode;
}
```

### NameSpaceImport

```js
interface NameSpaceImport <: SyntaxNode {
  kind: NodeKind.NameSpaceImport;
  asteriskToken: SyntaxToken<TokenSyntaxKind>;
  asKeyword: SyntaxToken<TokenSyntaxKind> | null;
  binding: Identifier | DummyIdentifier | null;
}
```

### ExportsList

```js
interface ExportsList <: SyntaxNode {
  kind: NodeKind.ExportList;
  specifiers: [ ExportSpecifier ]
}
```

### NamespaceExportDeclaration

```js
interface NamespaceExportDeclaration <: SyntaxNode {
  kind: NodeKind.NamespaceExportDeclaration;
  name: Identifier;
}
```
