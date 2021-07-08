<h1 align="center">Kataw</h1>

<p align="center"> An insane fast Javascript toolchain.</p>

<p align="center">
<a href="https://www.npmjs.com/package/kataw"><img src="https://img.shields.io/npm/v/kataw.svg?style=flat-square" alt="Kataw NPM"/></a>
<a href="https://lgtm.com/projects/g/kataw/kataw/context:javascript"><img src="https://img.shields.io/lgtm/grade/javascript/g/kataw/kataw.svg?logo=lgtm&logoWidth=18" alt="GitHub license" /></a>
<a href="https://github.com/kataw/kataw"><img src="https://img.shields.io/badge/code_style-kataw-ff69b4.svg?style=flat-square" alt="Meriyah NPM"/></a>
</p>
<br>

<!-- vscode-markdown-toc -->
* [CST nodes](#CSTnodes)
* [CST keywords](#CSTkeywords)
* [ESNext](#ESNext)
* [Types](#Types)
* [Comments](#Comments)
	* [Ignore comment](#Ignorecomment)
* [Transformation](#Transformation)
* [CST parser features](#CSTparserfeatures)
* [Current state](#Currentstate)
* [Roadmap](#Roadmap)
	* [📌v0.1](#v0.1)
	* [v0.2](#v0.2)
	* [v0.3](#v0.3)
	* [v1.0](#v1.0)
* [Future](#Future)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

**WIP**

Kataw is a javascript toolchain with high focus on performance, and it's main goal is to unify functionality that has previously been separate tools.


It's core is an ECMAScript friendly CST that allows you to parse `ECMAScript® 2022 (ECMA-262 12th Edition) language specification`.

If you only need a parser like `Acorn`, you can use Kataw to perform syntactic analysis (parsing) of a Javascript program, and with `ES2015`
and later a Javascript program can be either a [script or a module](https://tc39.es/ecma262/index.html#sec-ecmascript-language-scripts-and-modules).

To do a simple parse you can use either `kataw.parseModule` or `kataw.parseScript` and you get an `CST` in return.

Here is an example on how to set up `Kataw` to act like `Acorn`:

```ts
 // Parse with module goal
 kataw.parseModule('x = y', { next: true }, function(source, kind, msg, line, column) {
    throw msg + '(' + line + ', ' + column + ')';
 });

 // Parse in script mode
 kataw.parseScript('x = y', { next: true }, function(source, kind, msg, line, column) {
    throw msg + '(' + line + ', ' + column + ')';
 });
```

The returned CST tree can now be used as an AST, but note that the CST in Kataw contains more information that can be extracted from the CST node through
public API methods.

Click [here](https://github.com/kataw/kataw/tree/main/src/parser#public-api-methods-to-extract-info-from-cst-nodes) for a
complete list over all the public API methods.

Many of these APIs have the advantage that they allow you to "retrieve" info that is not otherwise available with a standard AST parser.

One example is that you only need to use `kataw.isStatementNode` to find out if the current CST node is a statement node. With an AST parser you must use
a `switch statement` with 60 `switch cases`.


```ts
 // With Babel you are forced to do
 switch(node.type) {
   case 'SwitchStatement': ...
   case 'ReturnStatement': ...
 }

 // With Kataw
 kataw.isStatementNode(node); // return 'true'
```

Another example is how easy it is to find out if a keyword node contains an `escaped keyword`. You only need to use `kataw.hasUnicodeEscape`. You can narrow this down further
if you use `kataw.hasNoChildren`. A keyword doesn't have any child nodes.

Here is a few examples:

```ts
    // Check for unicode escape on nodes without children
    if (kataw.hasNoChildren(node) && kataw.hasUnicodeEscape(node)) {}

    // Check for unicode escape on keywords
    if (kataw.isKeyword(node) && kataw.hasUnicodeEscape(node)) {}
```

A third benefit with this CST parser is that it is running in `recovery mode` by `default` and can be used in any editor. A build-in diagnostic system reports diagnostics if an `error handler` have been used. The diagnostics are dynamic. It means all the diagnostics are informative, and they will will change based on the context you
are parsing in. The diagnostics have been designed like this so you can quickly understand what the problem is and correct it.

These features used together gives you more options to adjust, modify and customize the CST tree compared to a regular AST parser and you can also write fewer
code lines and at the same time experience insane performance.

## <a name='CSTnodes'></a>CST nodes

All CST nodes has a `kind` which is a number that represents the node type. It's identical to `ESTree` type with the exception that Kataw doesn't do any
string comparisons - everything in Kataw is a number.

Here is an example:

```ts
if (node.kind === Kataw.SyntaxKind.Identifier) {}
```

You need to use `kataw.visitEachChild` to traverse the CST tree to get access to each CST node. After that you do any kind of transformation.

Be aware that also the  `kind` contain some additional information that you can extract through the public API - not only the `NodeFlags`.

For example `Kataw.isKeyword`, `Kataw.isIdentifier`, and `Kataw.isFutureReserved`.

This is made possible because there are no `token` in Kataw. Everything is
a `SyntaxKind` - `token` and `kind` merged into one.

Kataw also exports all CST nodes so you can create your own nodes. This is handy if you want to try out new `ECMA` features that isn't part of the language yet, or make your own transformers as in `Babel`.

Here is an example on how to create an CST node:

```ts
 // creates an identifier
 kataw.createIdentifier(/* text */ 'hello', /* rawText */ 'hello', /* start */ 1,  /* end */ 5)
```

Some CST nodes needes additional info. This can be set using the `Kataw.NodeFlags` andt this bitwise mask can be set on every CST node and CST keyword node.

```ts
 // creates an string literal
 const str = kataw.createStringLiteral(
    /* text */ 'hello', /* rawText */ 'hello', /* start */ 1,  /* end */ 5
);

 // set the flag and mark it as a single quote. E.g. 'string'
 str.flag |= Kataw.NodeFlags.SingleQuote.

 // Check if the flag is set
 kataw.isSingleQuote(str); // true
```

## <a name='CSTkeywords'></a>CST keywords

All keywords in Kataw is it's own CST node, and you create them in almost the same way as any other CST nodes.

```ts
kataw.createToken(kataw.SyntaxKind.ForKeyword, Kataw.NodeFlags.NoChildren, /* start */ 1,  /* end */ 5);
```

## <a name='ESNext'></a>ESNext

`Stage 3` proposals can be parsed if the `next` options are enabled.

`Stage 1` and `stage 2` proposals are not supported because the specs drafts are changing all the time.


## <a name='Types'></a>Types

Kataw has it's own type system that is an improvement over `Typescript` and `Flow`, and it
conform to the `ECMAScript® 2022 (ECMA-262 12th Edition) language specification`.

As everything else - it's developed for high performance and it consumes less memory.

It allows you to parse syntax like `function x(y: string, z: number): string | number {}` and other
similiar syntax.

The type system is still `WIP` and will be enabled by default in the `CLI` together with
Kataw's own type checker.

You can manually enable this if you enable the `allowTypes` option. It will then parse the types but it
will not do any type checking.

You can use `kataw.removeKatawTypes` to remove Kataw's types from the CST tree


```ts
const source = kataw.parseModule('let: string', { allowTypes: true});
// Remove the types
kataw.removeKatawTypes(source);
```

## <a name='Comments'></a>Comments

Leading and trailing comments can be extracted at correct position with `kataw.getLeadingComments` and `kataw.getTrailingComments`.

```ts
Hello
/* I'm a comment */
  there!
```

Getting the trailing comment of `Hello` can be done like this `kataw.getTrailingComments(5, 24).` It get the comments from the end value of
`hello` until the start value of `there!`.

If you want a `1:1` copy of the actual source code, you can do a "*slice*" from the start value of `Hello` to the end value of `there!`.

### <a name='Ignorecomment'></a>Ignore comment

Statements, blocks and other code lines can be ignored in Kataw with a `// kataw-ignore` comment.

If set on a `WhileStatement` it will ignore the entire statement and the `BlockStatement`.

```ts
// kataw-ignore
while (true) {}
```

You can use `kataw.shouldIgnoreNextNode(node);` to verify if the node should be ignored.

## <a name='Transformation'></a>Transformation

`Kataw` can act the same way as`Babel` and be a tool that helps you write code in the latest version of Javascript. This can be done with
developing transformers to handle situations where your supported environments don't support certain features natively.

The compiler transform those features down to a supported version.

You have to use `kataw.visitEachChild` to traverse the CST tree. `kataw.visitNode`can be used to traverse a single node, and
`kataw.visitNodes` to visit an array of CST nodes. This API method should only be used on *lists*. CST nodes that is *known*
to contain an array. There are no need to use for example `Array.Array` to verify if it's an array.
Performance is maintained that way.

All CST nodes will be updated automatically if any changes has been detected.

Keywords can also be swapped around and the same with `AssignmentExpression`, `BinaryExpression`, `UnaryExpression` and
`UpdateExpression` operands. For example `!==` can be changed to `===`.

A `WithStatement` can be transformed into a `WhileStatement` simply by changing the value of the `TokenNode`.

The location of the CST node in the CST tree can also be changed if you change the values of `start` and `end` on the CST node.

Changing the `NodeFlags` allow you to change how the CST node should behave.

All this things gives a you better control over transformation of each CST node compared to `Babel` and `Rome`.

Here is an example on an simple transformer that will replace all identifiers with an `NumericLiteral`.

```ts
export function swapIdentifierWithNumeric(transform) {
  return transformSourceFile;

  function transformSourceFile(root) {
    switch (node.kind) {
      case kataw.NodeKind.Identifier:
        return kataw.createNumericLiteral(
          123,
          "123",
          kataw.NodeFlags.ExpressionNode | kataw.NodeFlags.NoChildren,
          /* start */ 1,
          /* end */ 3
        );
      default:
        return kataw.visitEachChild(transform, root, visitor);
    }
  }

  function visitor() {
    switch (node.kind) {
      default:
        return kataw.visitEachChild(transform, node, visitor);
    }
  }
}

```

## <a name='CSTparserfeatures'></a>CST parser features

Kataw is adjustable and allows three different ways to print your source code.

The returned source does not include any extra parenthesis or unnecessary code.

The comments are 100% correct and they will be printed in the places you expect.


| API        |   Description |
| ----------- |------------------------------------------------- |
| `print`  |   Prints *a given* CST tree and let you adjust the diagnostics and set your own parser options |
| `printModule`    | Prints the source in module goal |
| `printScript`    | Prints the source in script mode |

Here is an example:

```ts

// Print
 kataw.print(kataw.parseModule('x = y', { next: true }, function(source, kind, msg, line, column) {
    throw msg + '(' + line + ', ' + column + ')';
 }));

 // Print with module goal
 kataw.printModule('x = y');

 // Print in script mode
 kataw.printScript('x = y');
```

## CST parser features

- Error recovery by default (_like Acorn loose_), but it reconstruct the CST tree correctly

- Optional error reporting (_require a callback as the parsers 3rd argument_)

- Dynamic error, hint and warning diagnostics (_depends on the context you are parsing in_)

- Public API methods to extract info from the CST nodes

- 100% correct comment extraction and attachment algorithm

- Can parse types and type annotations (_Kataw has it's own type system_)

- Can be used in any editors

- Scalable

- Performance

## <a name='Currentstate'></a>Current state

- The CST parser can be used in production

## <a name='Roadmap'></a>Roadmap

### <a name='v0.1'></a>📌v0.1
- [x] Parsing ECMA 262(aka JavaScript), and the cst spec be stable
- [x] Test 262 passes
- [x] Printing API (like prettier API)
- [ ] //kataw-ignore(like //prettier-ignore)
- [ ] Command line interface (like prettier cli)
- [ ] Documentation & website

### <a name='v0.2'></a>v0.2
- [ ] plugin system, to make it possible to support jsx/ts/flow...
- [ ] jsx plugin
- [ ] ts plugin

### <a name='v0.3'></a>v0.3
- [ ] transformers: like babel
- [ ] minify: like uglify-js
- [ ] linter: like eslint

### <a name='v1.0'></a>v1.0


## <a name='Future'></a>Future

- A "hook system" for adding additional rules for the linter and the grammar checker will be published.

- Hooks to support experimental syntax and ECMA proposals in an sandboxed envirnonment
