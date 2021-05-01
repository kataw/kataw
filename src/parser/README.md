## Kataw parser

This files and folders contains the Kataw parser. It's developed for performance, and emits an ECMAScript friendly CST
and allows you to
parse `ECMAScript® 2022 (ECMA-262 12th Edition) language specification`.

The CST node contains several properties, and the `flags` property contains the CST info.

All important CST methods can be extracted from the CST node through public API methods.


## Parsing

The parse method allows you to parse in `script mode` (*the default*) or in `module mode`-

```ts
kataw.parseScript('foo', { next: true }, function (source, message, start, end) {})

kataw.parseModule('foo', { next: true }, function (source, message, start, end) {})
```

### Parser options


| API        | Description |
| ------------------- | ------------------------------------------------------------ |
| `next`              |  Enables stage 3 support (ESNext)
| `disableWebCompat`  |  Disable web compatibility
| `impliedStrict`     | Enables implied strict mode
| `allowTypes`        | Enables type checking


### Error handling

Kataw has a build in error recovery feature so it will never throw any errors by default - a callback function has to be used.

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
| `containsSeparator`              | True if the node contains a numeric separator `_`.  e.g. `0b1100_0101`|
| `hasUnicodeEscape`              | True if the node contains any unicode escapes |
| `hasExtendedUnicodeEscape`              | True if the node contains extended unicode escape |
| `isConstructor`              | True if the node is a class constructor |
| `isGenerator`              | True if the node is parsed in a generator context |
| `isAsync`              | True if the node is parsed in a async context |
| `isDeclared`              | True if the node has been declared |
| `isNoneSimpleParamList`              | True if the node is a simple parameter list |
| `isImplicitOctal`              | True if the node is an implicit octal |
| `isOctalIntegerLiteral`              | True if the node is an octal integer literal. e.g. `0777` |
| `isBinaryIntegerLiteral`              | True if the node is an binary integer literal. e.g. `0b0110010000000000` |
| `hexIntegerLiteral`              | True if the node is an hex integer literal. e.g. `0x00000000` |
| `isUnterminated`              | True if the node is is unterminated. String or template literal. |
| `containsInvalidEscape`              | True if the node contains invalid escape. e.g. `\uhello` |
| `hasErrors`              | True if the node contains errors |
| `isLexical`              | True if the node is a lexical declaration |
| `hasNewLine`              | True if the node has a newline |
| `hasDuplicateLabels`     | True if the node has duplicate labels |

## Escaped keywords

All keywords is it's own `CST keyword node` - for example `lexicalKeyword` or `caseKeyword` - and
you can check if the keyword is escaped like this:

`kataw.hasUnicodeEscape(node)` or `kataw.hasExtendedUnicodeEscape(node)`

## Whitespace, linebreak and comments

Kataw skips whitespace by default. Instead this information is part of the rawText value on the CST node. 

For example the raw value of a string literal `foo` if the source code is like this:

```ts

"foo"
```

will become:  `"\n\"string\""`.

If you need this *extra* information in a code generator, you can use the `rawText` instead of the `text` value.

Comments will be kept as well as part of the `rawText`.

```ts

/*  hello string */ "string"
```

will become:  `"\n/*  hello string */ \"string\""`.

## Location tracking

Each CST node has a `start` and `end` property for where the AST node start and end.

## Types

Kataw has it's own type system
