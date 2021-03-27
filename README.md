<h1 align="center">Kataw</h1>

<p align="center"> An insane fast Javascript toolchain.</p>

<p align="center">
<a href="https://github.com/kataw/kataw"><img src="https://img.shields.io/badge/code_style-kataw-ff69b4.svg?style=flat-square" alt="Meriyah NPM"/></a>
</p>
<br>

**WIP**

Kataw is a javascript toolchain with high focus on performance, and it's main goal is to unify functionality that has previously been separate tools.

A demo of a JS printer (*WIP*) can be [tested here](https://kataw.github.io/kataw/kataw_print/)

This is what Kataw can do:

- parse Javascript

- typechecking (_like Typescript and Flow_)

- transform current ECMA code to older ECMA versions (_like Babel_)

- global API to perform AST manipulation and tree walkers

- Pretty printing (_like Prettier_)

- Grammar checker

- Linting (_like ESLint_)

- Minify (_Like Terser_)

## Transformers

Transformers is WIP, but transformers for ES2020, ES2019 and 2016 exist and allow you to transpile current Javascript code to an earlier versions in the same way as Babel does it.

The main difference from Babel is that the transformer API is a public API, and allow you to develop your own transformers.

**This is still WIP, and we would preciate it if someone would help us writing transformers.**

## Current state

Only the Kataw parser, transformers, walkers, AST manipulation through global API is available as of now.

Soon as this code is in a "stable state" I will add the rest of the tools

## Future

- A "hook system" for adding additional rules for the linter and the grammar checker will be published.

- Hooks to support experimental syntax and ECMA proposals in an sandboxed envirnonment
