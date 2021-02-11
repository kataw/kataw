# Compiler

This files and folders contains the Kataw compiler core files

- Javascript & Typescript parser

- Diagnostics

- Pretty printing

- Transformers

- Linter

- Minifier

- AST walkers


## API

### Parsing

The Kataw parser is slightly different from the TypeScript parser because there is a clearly distinguish
between script and module goal, and the parser supports AnnexB. The latter can be turned off through options.

#### Browser

No difference from other parsers.

- `kataw.parseScript()`

- `kataw.parseModule()`

#### Command line

Allow parsing on CMD and require a file as it's second argument.

- `kataw.parse()`
