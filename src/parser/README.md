## Kataw parser

This files and folders contains the Kataw parser. It's developed for performance, and emits an ECMAScript friendly CST
and allows you to
parse `ECMAScript® 2022 (ECMA-262 12th Edition) language specification`.

The CST node contains several properties, and the `flags` property contains the CST info.

All important CST methods can be extracted from the CST node through public API methods.


## Parsing

The parse method exposed by `Kataw` takes an optional options object which allows you to specify whether to parse in `script mode` (*the default*) or in `module mode`.


```ts
kataw.parseScript('foo', { allowTypes: false}, function (source, message, start, end) {})

kataw.parseModule('foo', { allowTypes: false}, function (source, message, start, end) {})
```


### Error handling

Kataw has a build in error recovery feature so it will never throw any errors by defailt - a callback function has to be used.

For example:

```ts
kataw.parseScript('¤', { allowTypes: false}, function (source, message, start, end) {})
```

The `source` argument is either `1` for lexer or  `2` for parser.



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

## Location tracking

Each CST node has a `start` and `end` property for where the AST node start and end. Kataw ignores whitespace, so the
location values are calculated before any whitespace has been skipped.

## Types

Kataw has it's own type system
