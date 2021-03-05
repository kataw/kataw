# Printer

**WIP!**

This files and folders contains an opinionated code formatter that can print Javascript / Typescript source code.
It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line
length into account, wrapping code when necessary.

The formatted source will be 1:1 to original source with the exception for the pretty printing and the fact that unnecessary
parentheses have been removed.

The pretty printer tries to be smart enough to be able to understand what you want. As a result the formatter will
change based on your code style.

For example if you insert a line break

```js
[
a,b,c]
```

the code formatter will insert a new line after `[` and before `]` in multi-line contexts.

```js
[
  a, b, c
];
```

## API

```js

// Script
kataw.printScript(source, OPTIONS);

// Module goal
kataw.printModule(source, OPTIONS);
```

## Options

The second argument allows you to specify various options:

| Option        | Default |  Description |
| ----------- | -----------|------------------------------------------------- |
| `printWidth`  | 80 | Specify the line length that the printer will wrap on |
| `tabWidth`  | 2 | Specify the number of spaces per indentation-level |
| `semi`  | true |  Print semicolons at the ends of statements |
| `trailingComma`  | true | Print trailing comma based on code style |
| `singleQuote`  | false | Use single quotes instead of double quotes |
| `bracketSpacing`  | true | Print spaces between brackets in object literals |
| `endOfLine`  | 'crlf' | Define file endings ('lf', 'crlf', or 'cr') |
| `ignoreComments`  | false | Prints comments |
| `spaceAfterQuestionMark`  | false | Print whiespace after `?` |
| `spaceBeforeDot`  | false | Print whiespace before `.` |
| `spaceBeforeComma` | false | Print whitespace before comma |
| `spaceAfterCommaDelimiter`  | true | Insert space after comma delimiter |
| `minify`  | false | Removes unnecessary whitespace, semicolons and line endings |
| `sourceMap`  | false | Prins source map |

## Parentheses

The goal of this pretty printer is to avoid increasing the size of the AST, so no extra parentheses have been
added to increase readability. Instead other clever tricks have been used to continue to maintain readability

Here is an example and a comparison with Prettier:

**Prettier's output:**

`````js
a => (a ? a : a);

a <= a ? a : a;
`````

**Kataw's output:**

```js
a => a ? a : a;

a <= a
  ? a
  : a;
```
