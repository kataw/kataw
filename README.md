# kataw

**WIP**

Kataw is a Javascript toolchain with insane performance that can

- parse Javascript, Typescript and JSX

- transform current ECMA code to older ECMA versions (*like Babel*)

- global API to perform AST manipulation and tree walkers

- Pretty printing (*like Prettier*)

- Gammar checker

- Linting (*like ESLint*)

- Minify (*Like Terser*)


## Current state

Only the Kataw parser, transformers, walkers, AST manipulation through global API is available as of now.

Soon as this code is in a "stable state" I will add the rest of the tools


## Future

- A "hook system" for adding additional rules for the linter and the grammar checker will be published.

- Hooks to support experimental syntax and ECMA proposals in an sandboxed envirnonment

