<h1 align="center">Kataw</h1>

<p align="center"> An insane fast Javascript toolchain.</p>

<p align="center">
<a href="https://www.npmjs.com/package/kataw"><img src="https://img.shields.io/npm/v/kataw.svg?style=flat-square" alt="Kataw NPM"/></a>
<a href="https://lgtm.com/projects/g/kataw/kataw/context:javascript"><img src="https://img.shields.io/lgtm/grade/javascript/g/kataw/kataw.svg?logo=lgtm&logoWidth=18" alt="GitHub license" /></a>
<a href="https://github.com/kataw/kataw"><img src="https://img.shields.io/badge/code_style-kataw-ff69b4.svg?style=flat-square" alt="Meriyah NPM"/></a>
</p>
<br>

**WIP**

Kataw is a javascript toolchain with high focus on performance, and it's main goal is to unify functionality that has previously been separate tools.

It's core is an ECMAScript friendly CST that allows you to parse `ECMAScript® 2022 (ECMA-262 12th Edition) language specification`.
Each CST node contains several properties, and the `flags` property contains the CST info.

The CST info can be extracted from the CST node through public API methods. Click [here](https://github.com/kataw/kataw/tree/main/src/parser#public-api-methods-to-extract-info-from-cst-nodes) for a complete list over all the public API methods.

Many of these APIs have the advantage that they allow you to "retrieve" info that is not otherwise available with a standard AST parser.

One example is that you only need to use `kataw.isStatementNode` to find out if the current CST node is a statement node. With an AST parser you must use
a `switch statement` with 60 `switch cases`.

Another example is how easy it is to find out if a keyword node contains an `escaped keyword`. You only need to use `kataw.hasUnicodeEscape`. You can narrow this down further
if you use `kataw.isChildLess`. A keyword doesn't have any child nodes.

Here is a few examples:

```ts
    // Check for unicode escape on childless nodes
    if (kataw.isChildLess(node) && kataw.hasUnicodeEscape(node)) {}

    // Check for unicode escape on keywords
    if (kataw.isKeyword(node) && kataw.hasUnicodeEscape(node)) {}
```

A third benefit with this CST parser is that it is running in `recovery mode` by `default` and can be used in any editor. A build-in diagnostic system reports diagnostics if an `error handler` have been used. The diagnostics are dynamic. It means all the diagnostics are informative, and they will will change based on the context you
are parsing in. The diagnostics have been designed like this so you can quickly understand what the problem is and correct it.

These features used together gives you more options to adjust, modify and customize the CST tree compared to a regular AST parser and you can also write fewer
code lines and at the same time experience insane performance.

## CST nodes

All CST nodes has a `kind` which is a number that represents the node type. It's identical to `ESTree` type with the exception that Kataw doesn't do any
string comparisons - everything in Kataw is a number.

Here is an example:

```ts
if (node.kind === Kataw.SyntaxKind.Identifier) {}
```

In the same way as for `NodeFlags` the `kind` contain some additional information that you can extract through public API.
E. g. `Kataw.isKeyword`, `Kataw.isIdentifier`, and `Kataw.isFutureReserved`. This is made possbible because there are no `token` in Kataw. Everything is
a `SyntaxKind` - `token` and `kind` merged into one.

Kataw also exports all CST nodes so you can create your own nodes.

Here is an example:

```ts
 // creates an identifier
 kataw.createIdentifier(/* text */ 'hello', /* rawText */ 'hello', /* start */ 1,  /* end */ 5)
```

Some CST nodes needes additional info - the famous `nodeFlag`. In this case you can pass the flags like
this `kataw.NodeFlags.IsStatement`.

**Note** This flag can be set on every CST node and every CST keyword nodes.

```ts
 // creates an string literal
 const str = kataw.createStringLiteral(
    /* text */ 'hello', /* rawText */ 'hello', /* start */ 1,  /* end */ 5
);

 // set the flag and mark it as unterminated. E.g. "string
 str.flag |= Kataw.NodeFlags.Unterminated.

 // Validate if the flag is set
 kataw.isUnterminated(str); // true
```

## CST keywords

All keywords in Kataw is it's own CST node, and you create them in almost the same way as any other CST nodes.

```ts
kataw.createToken(kataw.SyntaxKind.ForKeyword, Kataw.NodeFlags.ChildLess, /* start */ 1,  /* end */ 5);
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


## Current state

- The CST parser can be used in production


## This is what the future plans are for Kataw

All this features are still *WIP*.

- typechecking (_like Typescript and Flow_)

- transform current ECMA code to older ECMA versions (_like Babel_)

- global API to perform AST manipulation and tree walkers

- Pretty printing (_like Prettier_)

- Grammar checker

- Linting (_like ESLint_)

- Minify (_Like Terser_)


## Future

- A "hook system" for adding additional rules for the linter and the grammar checker will be published.

- Hooks to support experimental syntax and ECMA proposals in an sandboxed envirnonment
