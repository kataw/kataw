# Pretty printer

Kataw is adjustable and allows three different ways to print your source code.

The returned source does not include any extra parenthesis or unnecessary code.

The comments are 100% correct and they will be printed in the places you expect.


| API        |   Description |
| ----------- |------------------------------------------------- |
| `print`  |   Prints *a given* CST tree and let you adjust the diagnostics and set your own parser options |
| `printModule`    | Prints the source in module goal |
| `printScript`    | Prints the source in script mode |

Here is an example:

```ts

// Print
 kataw.print(kataw.parseModule('x = y', { next: true }, function(source, kind, msg, line, column) {
    throw msg + '(' + line + ', ' + column + ')';
 }));

 // Print with module goal
 kataw.printModule('x = y');

 // Print in script mode
 kataw.printScript('x = y');
```

## Options

| Options        |   Description |
| ----------- |------------------------------------------------- |
| `printWidth`  | Specify the line length that the printer will wrap on |
| `tabWidth`    | Specify the number of spaces per indentation-level |
| `useTabs`    | Indent lines with tabs instead of spaces |
| `noSemicolon`    | Doesn't print semicolons at the ends of statements |
| `singleQuote`    | Use single quotes instead of double quotes |
| `noWhitespace`    | Doesn't print whitespace |
| `compact`    | Doesn't print whitespace or line breaks |
| `noObjectCurlySpacing`    | Doesn't print spaces between `{` and `}` in object literals and pattern |
| `arrayBracketSpacing`    | Disallow or enforce spaces inside of brackets |
| `computedPropertySpacing`    | Disallow or enforce spaces inside of computed properties |
| `disallowStringEscape`    | Doesn't print string escape |
| `allowArrowParens`    | Include parentheses around a sole arrow function parameter |
| `spaceAfterAt`    | Prints a space after `@` in decorators |
| `quoteProps`    | Change when properties in objects are quoted |
| `coerceQuoteProps` | Coerce string literal to identifier when printing object properties and remove quotes |
| `insertPragma`    | Inserts a special `@kataw` marker at the top of file |
| `arrayBracketNewline`    | Enforces line breaks after opening and before closing array brackets |
| `enforceLineBreaksBetweenArray`    | Enforces line breaks between array elements |
| `endOfLine`    | Change line endings in the source. `lf`, `crlf`, and `cr`. |
