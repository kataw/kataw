# The Kataw AST specification

Kataw's own AST represents the structure of an ECMAScript program as a tree and conforms both to the ECMAScript® 2021 specs and TypeScript **latest**.

The AST have been designed for performance, and it nearly eliminates the chance of accidentally creating an AST that does not represent an ECMAScript program while also
supporting a *hybrid* definition of *concrete syntax*.

## Node

```js
interface Node {
    kind: NodeKind;
    multiline?: boolean;
    flags: NodeFlags;
    transformFlags: TransformFlags;
    start: number;
    end: number;
}
```

The `Node` contains all AST nodes represented as `Node` object, which may have any
prototype inheritance.

The `kind` field is a string representing the AST variant type, and contrains a serie of
bitwise masks - allows you to group AST nodes very easily. For example
`kind & NodeKind.IsIdentfier` or `kind & NodeKind.ContainsList`.

The `start` and `end` are default properties representing the start and end values of each `AST node`.

## Script

The current `flags` property keeps track of which context you are currently parsing in, and it's property contains a serie of
bitwise masks that can be parsed by reference. This information isn't known from outside, or exposed through any API.

```js
interface Script <: Node {
 source: string;
 filename: string;
 scriptBody: ScriptBody;
 jsx: boolean;
 printable: boolean;
 diagnostics: Diagnostic[];
 incremental: boolean;
 intersects: false;
}
```

## Module

The current `flags` property keeps track of which context you are currently parsing in, and it's property contains a serie of
bitwise masks that can be parsed by reference. This information isn't known from outside, or exposed through any API.

```js
interface Module <: Node {
 source: string;
 filename: string;
 scriptBody: ModuleBody;
 jsx: boolean;
 printable: boolean;
 diagnostics: Diagnostic[];
 incremental: boolean;
 intersects: false;
}
```

## ScriptBody

```js
interface ScriptBody <: Node {
 statements: Statement[];
}
```


## ModuleBody

```js
interface ModuleBody <: Node {
 statements: Statement[];
}
```



