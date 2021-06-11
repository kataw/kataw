# Printer

**WIP!**

This files and folders contains the type checker for Kataw's type system.

## API

### Browser

   N/A

### CLI

```js
kataw some_js_file.js --module --reporter: nicolo_green
```

You can also turn off type checking

```js
// parse in script mode with no typechecking and vanila reporter
kataw some_js_file.js --typecheck-off
```

Type checking works just fine together with linting

```js
kataw some_js_file.js --module --lint --reporter: loddy
```

The `loddy` reporter contains some usefull hints on how to correct your code
