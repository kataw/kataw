<h1 align="center">Kataw</h1>

<p align="center"> An insane fast Javascript toolchain.</p>

<p align="center">
<a href="https://github.com/kataw/kataw"><img src="https://img.shields.io/badge/code_style-kataw-ff69b4.svg?style=flat-square" alt="Meriyah NPM"/></a>
</p>
<br>

**WIP**

Kataw is a javascript toolchain with high focus on performance, and it's main goal is to unify functionality that has previously been separate tools.

It's core is an CST parser that emits an ECMAScript friendly CST and allows you to
parse `ECMAScript® 2022 (ECMA-262 12th Edition) language specification`.

## CST parser features

- Error recovery by default (_like Acorn loose_), but it reconstruct the CST tree correctly

- Optional error reporting (_require a callback as the parsers 3rd argument_)

- Dynamic error, hint and warning diagnostics (_depends on the context you are parsing in_)

- Public API methods to extract info from the CST nodes

- 100% correct comment extraction and attachment algorithm

- Can be used in any editors

- Scalable

- Performance

### Recovery mode

The recovery mode is on enabled by default.

**Note** This *must* not to be confused with `Acorn loose` because Kataw's error recovery mode reconstruct the CST 100%.

## This is what Kataw can do:

- parse Javascript

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


## Current state

Only the Kataw CST parser, walker, AST manipulation through global API is available as of now.

Soon as this code is in a "stable state" I will add the rest of the tools

## Future

- A "hook system" for adding additional rules for the linter and the grammar checker will be published.

- Hooks to support experimental syntax and ECMA proposals in an sandboxed envirnonment
