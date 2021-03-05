# Printer

**WIP!**

This files and folders contains an opinionated code formatter that can print Javascript / Typescript source code.
It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line
length into account, wrapping code when necessary.

The formatted source will be 1:1 to original source with the exception for the pretty printing and the fact that unnecessary
parentheses have been removed.

The pretty printer tries to be smart enough to be able to understand what you want. As a result if this the formatter will
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

Wait for it! The API is part of the pretty printer

## Options

The second argument allows you to specify various options:

| Option        | Default |  Description |
| ----------- | ------------------------------------------------------------ |
| `printWidth`  | 80 | Specify the line length that the printer will wrap on |
| `tabWidth`  | 2 | Specify the number of spaces per indentation-level |
| `semi`  | true |  Print semicolons at the ends of statements |
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
