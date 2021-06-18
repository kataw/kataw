# Kataw toolchain

This files and folders contains the entire source for the Kataw source. It does parsing, linting,
printing and can transform the CST tree in the same way as `Babel`.

## Main API

### Node

This is the simplest way of doing parsing from the command line. Linting, grammar checking are
done automatically, but can be turned off.

```ts
kataw some.js --module --no-typecheck

```

### Browser

**Parsing:**

```ts
// parse in module goal
kataw.parseModule(source, options);

// parse in script mode
kataw.parseScript(source, options);
```

**Prettify:**

```ts
// pretty print in module goal
kataw.prettyModule(source, options);

// pretty print parse in script mode
kataw.prettifyScript(source, options);
```
