## Kataw parser

This files and folders contains the Kataw parser. It's developed for performance, and emits an ECMAScript friendly CST.

- The NodeFlags contains the CST info.

- The TransformFlags contains info for transformers.


## Parsing

Kataw parser allows you to parse:

- Javascript - ECMAScript® 2022 (ECMA-262 12th Edition) language specification

- JSX


### Error handling

Kataw has a build in error recovery feature so it will never throw any errors by defailt. A
callback function has to be used.

For example:

```ts
kataw.parseScript('¤', { allowTypes: false}, function (source, message, start, end) {})
```

The `source` argument is either `1` for lexer and `2` for parser.


### Public API methods to extract info from CST nodes

Multiple API methods exist to get info from the CST nodes

| API        | Description |
| ------------------- | ------------------------------------------------------------ |
| `isAssignOp`              | True if the node is one of `-=`, `*=`, `/=`, `%=`, `^=`, `|=`, `&=`, `||=`, `&&=` or `??=` |
| `isBinaryOp`              | True if the node is one of `+`, `-`, `in`, `*`, `%`, `/` etc |
| `isStatementStart`              | True if node is valid start of an statement |
| `isExpressionStart`              | True if node valid start of an expression |
| `isEllipsis`              | True if the node is `...`, |
| `isInOrOf`              |  True if the node is one of `in` or `of` |
| `isKeyword`              | True if the node is a keyword |
| `isFutureReserved`              | True if the node is future reserved keyword |
| `isStartOfType`              | True if node is valid start of an type |
| `isSemicolon`              | True if the node is `;`, |
| `isChildLess`              | True if the node doesn't have any child AST nodes |
| `isSingleQuote`              | True if the node has either `'` or `"`|
| `containsSeparator`              | True if the node contains a numeric separator `_`|
| `hasUnicodeEscape`              | True if the node contains any unicode escapes |
| `isConstructor`              | True if the node is a class constructor |
| `isGenerator`              | True if the node is parsed in a generator context |
| `isAsync`              | True if the node is parsed in a async context |
| `isDeclared`              | True if the node has been declared |
| `isNoneSimpleParamList`              | True if the node is a simple parameter list |
| `hasExtendedUnicodeEscape`              | True if the node contains extended unicode escape |
| `isImplicitOctal`              | True if the node is an implicit octal |
| `isOctalIntegerLiteral`              | True if the node is an octal integer literal |
| `isBinaryIntegerLiteral`              | True if the node is an binary integer literal |
| `isUnterminated`              | True if the node is is unterminated. String or template literal. |
| `hexIntegerLiteral`              | True if the node is an hex integer literal |
| `containsInvalidEscape`              | True if the node contains invalid escape (*template literal*) |
| `hasErrors`              | True if the node contains errors |


## Types

Kataw has it's own type system
