# The Kataw AST specification

Kataw's own AST represents the structure of an ECMAScript program as a tree and conforms to the ECMAScript® 2022.

The AST have been designed for performance, and it nearly eliminates the chance of accidentally creating an AST that does not represent an ECMAScript program while also
supporting a definition of CST (*concrete syntax*).

## Node

```js
interface SyntaxNode {
  kind: SyntaxKind;
  flags: NodeFlags;
  start: number;
  end: number;
}
```

The `Node` contains all CST nodes represented as a `SyntaxNode` object, which may have any
prototype inheritance.

The `kind` field is a string representing the AST variant type, and contrains a serie of
bitwise masks - allows you to group AST nodes very easily. For example
`kind & NodeKind.IsIdentfier` or `kind & NodeKind.ContainsList`.

The `flags` property contrains a serie of bitwise masks keeping the CST info. This info can be extracted through
public API methods.

The `start` and `end` are default properties representing the start and end values of each CST node.

## RootNode

```js
interface RootNode <: SyntaxNode {
  directives: StringLiteral[];
  statements: StatementNode[];
  isModule: boolean;
  text: string;
  fileName: string;
}
```
