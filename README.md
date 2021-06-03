<h1 align="center">Kataw</h1>

<p align="center"> An insane fast Javascript toolchain.</p>

<p align="center">
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

Another benefit with this CST parser is that it is running in `recovery mode` by `default` and can be used in any editor. See the section below.

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

### Recovery mode

The recovery mode is enabled by default. See the readme in the `parser folder` for further details.

**Note** This *must* not to be confused with `Acorn loose` because Kataw's error recovery mode reconstruct the CST 100% and makes sure the output
conforms with the ECMA specs. In `Acron` you can expect that a `try statement` become a `while statement` during error recovery or parts of the
`ESTree AST` is missing.

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

## Performance 

Performance is all about the memory and GC pressure, and it's commonly known that the ESTree and Babel AST is the real perf killer for parsers in Javascript.

Kataw work around this with it's own AST that is optimized for performance.

![kataw-perf](https://user-images.githubusercontent.com/31855118/116775569-3242ff80-aa96-11eb-86b2-238a10388c36.png)


## Future

- A "hook system" for adding additional rules for the linter and the grammar checker will be published.

- Hooks to support experimental syntax and ECMA proposals in an sandboxed envirnonment
