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

The parser has build-in error recovery. It never throws an error unless a callback function has been provided as the parsers 3rd argument.

Various public API methods exist to extract info from the CST nodes.

*This is what Kataw can do*:

- parse Javascript

- typechecking (_like Typescript and Flow_)

- transform current ECMA code to older ECMA versions (_like Babel_)

- global API to perform AST manipulation and tree walkers

- Pretty printing (_like Prettier_)

- Grammar checker

- Linting (_like ESLint_)

- Minify (_Like Terser_)

## Current state

Only the Kataw CST parser, walker, AST manipulation through global API is available as of now.

Soon as this code is in a "stable state" I will add the rest of the tools

## Future

- A "hook system" for adding additional rules for the linter and the grammar checker will be published.

- Hooks to support experimental syntax and ECMA proposals in an sandboxed envirnonment
