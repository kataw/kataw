# Printer

**WIP!**

This files and folders contains an opinionated code formatter that can print Javascript / Typescript source code.
It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line
length into account, wrapping code when necessary.

The formatted source will be 1:1 to original source with the exception for the pretty printing and the fact that unnecessary
parentheses have been removed.

The pretty printer tries to be smart enough to be able to understand what you want. As a result the formatter will
change based on your code style.

## API

### Browser

```js

// Script
kataw.printScript(source, OPTIONS);

// Module goal
kataw.printModule(source, OPTIONS);
```


### CLI

**internal**.

## Options

The second argument allows you to specify various options:

| Option        | Default |  Description |
| ----------- | -----------|------------------------------------------------- |
| `printWidth`  | 80 | Specify the line length that the printer will wrap on |
| `tabWidth`  | 2 | Specify the number of spaces per indentation-level |
| `useTabs`  | false | Indent lines with tabs instead of spaces |
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

## Comments

The comments are automatically added, but can be turned off by setting `ignoreComments` to `false`, and the algorithm used to insert 
them will ensure that all comments are inserted **100%** correctly in the expected places.

For example Prettier will output this:

```ts
class x {
  focus() {} // comment 1
}
```

Kataw's output is `1:1` to original source:

```ts
class x {
  focus() // comment 1
  {}
}
```

## Fragment printing

Kataw introduces "fragment printing", and allows you to only print part of your AST. This will help in testing environments and if you are developing
your own transformers or if you want to pretty print either a module or a script without the ECMA limitation of module / script parsing.
```js

const fragment = {
  kind: 196712,
  text: "identifier",
  rawText: "identifier",
  flags: 0,
  intersects: false,
  transformFlags: 0,
  emitNode: null,
  start: 0,
  end: 10,
};

kataw.printFragment(fragment, OPTIONS); // 'identifier*

```

## Unique identifer and integration with transformers

Coming...
