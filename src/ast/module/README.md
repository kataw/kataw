# 15.2 Modules

## 15.2.2 Imports

### ImportDeclaration

```js
interface ImportDeclaration <: Node {
  kind: NodeKind.ImportDeclaration;
  importKeyword: SyntaxToken<TokenSyntaxKind>;
  importClause: ImportClause | null
  fromClause: StringLiteral | null;
}
```
An import declaration, e.g., `import foo from 'mod;`.

### ImportClause

```js
interface ImportClause <: Node {
  kind: NodeKind.ImportClause;
  defaultBinding: BindingIdentifier | null;
  nameSpaceImport: BindingIdentifier | null;
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
  name: IdentifierName | BindingIdentifier | null,
  binding: IdentifierName | BindingIdentifier | null
}
```

## 15.2.3 Exports

### ExportDeclaration

```js
interface ExportDeclaration <: Node {
  kind: NodeKind.ExportDeclaration;
  exportKeyword: SyntaxToken<TokenSyntaxKind>;
  declaration: AssignmentExpression | VariableStatement | LexicalDeclaration | FunctionDeclaration | ClassDeclaration | null;
  namedExports: [ ExportSpecifier ];
  exportFromClause: ExportFromClause | null,
  fromClause: StringLiteral | null;
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
  moduleExportName: StringLiteral | null;
  namedBinding: IdentifierName | null;
}
```

  ### ExportSpecifier

```js
interface ExportSpecifier <: Node {
  kind: NodeKind.ExportSpecifier;
  name: IdentifierName;
  binding: IdentifierName | null;
}
```

### ExportDefault [MODIFIED]

```js
interface ExportDefault <: Node {
  kind: NodeKind.ExportDefault;
  exportKeyword: SyntaxToken<TokenSyntaxKind>;
  defaultKeyword: SyntaxToken<TokenSyntaxKind>;
  declaration: FunctionDeclaration | ClassDeclaration | Expression;
}
```
