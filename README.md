<h1 align="center">Kataw</h1>

<p align="center"> An insane fast Javascript toolchain supporting both Javascript and Typescript.</p>

<p align="center">
<a href="https://github.com/kataw/kataw"><img src="https://img.shields.io/badge/code_style-kataw-ff69b4.svg?style=flat-square" alt="Meriyah NPM"/></a>
</p>
<br>
  
**WIP**

Kataw is a Javascript toolchain with insane performance that can

- parse Javascript, Typescript and JSX

- transform current ECMA code to older ECMA versions (_like Babel_)

- global API to perform AST manipulation and tree walkers

- Pretty printing (_like Prettier_)

- Grammar checker

- Linting (_like ESLint_)

- Minify (_Like Terser_)

## Current state

Only the Kataw parser, transformers, walkers, AST manipulation through global API is available as of now.

Soon as this code is in a "stable state" I will add the rest of the tools

## Future

- A "hook system" for adding additional rules for the linter and the grammar checker will be published.

- Hooks to support experimental syntax and ECMA proposals in an sandboxed envirnonment
