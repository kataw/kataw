# Kataw toolchain

This files and folders contains the entire source for the Kataw toolchain

## Main API

### Parsing, linting and grammar checking

#### Node

This is the simplest way of doing parsing from the `CMD`. Linting, grammar checking are
done automatically.

```ts
const root = kataw.parse(source, fileName, options)

```

Incremental parsing are also supported

```ts
const root = kataw.parse(source, fileName, options);

kataw.update(root, fileName):

```

#### Browser

```ts
const root = kataw.parseScript(source, options)

// Lint and grammar checking

kataw.lint(root);

// Minify

kataw.minify(root);

// Print valid JS

kataw.toSource(root, transformers);
```

### Walker and AST manipulation

Kataw lets you walk / traverse the AST and do some AST manipulation. You can either create new nodes or update exisiting one.

Here is an example on how to replace all `Identifer` nodes with a custom one.

```ts

import * as kataw from './kataw';

const root = kataw.parseScript("Next gen");

kataw.forEachChild(root, visitor);

function visitor(node) {
  if (node.kind & Kataw.NodeKind.IsIdentifier) {
    return kataw.createIdentifierReference(
      "foo",
      "foo",
      kataw.NodeFlags.None,
      /* start */ 1,
      /* end */ 2
    );
  }
  return node;
}

```

