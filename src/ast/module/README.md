# 15.2 Modules

## 15.2.2 Imports

### ImportDeclaration

```js
interface ImportDeclaration <: Node {
  kind: NodeKind.ImportDeclaration;
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
  declaration: FunctionDeclaration | ClassDeclaration | Expression;
}
```

Extracted from `ExportDeclaration` to simplify a few things, and save 1 byte vs. using an
'default' property on the `ExportDeclaration` node.


### ExportAssignment [EXTRA]

```js
interface ExportAssignment <: Node {
  kind: NodeKind.ExportAssignment;
  expression: Expression;
}
```

### ExternalModuleReference [EXTRA]

```js
interface ExternalModuleReference <: Node {
  kind: NodeKind.ExternalModuleReference;
  expression: Expression;
}
```

### ImportEqualsDeclaration [EXTRA]

```js
interface ImportEqualsDeclaration <: Node {
  kind: NodeKind.ImportEqualsDeclaration;
  importClause: ImportClause | null
  fromClause: StringLiteral | null;
}
```
