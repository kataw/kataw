# kataw

This repo exist only to show off an alternative and improved AST than ESTree and Babel AST.

It's conforms to latest ECMA specs, and the AST is designed to fullfill this goals with high performance:

* CST
* Error handling / recovery
* Incremental parsing
* Transformation
* Linter
* Minification
* AST traversal
* JSX
* Typescript
* Pretty printing

## Demo

There exist a few demos for this AST. It's an subset of an non-open source parser.

TypeScript parsing is enabled, and TS types are removed in the pretty printing.

* [AST overview](https://kataw.github.io/kataw/kataw_ast/)

* [Pretty printing with comments](https://kataw.github.io/kataw/kataw_print/)

* [Parsing with linting](https://kataw.github.io/kataw/kataw_lint/?code=if(x)&method=parse&range=undefined&loc=false&next=false&cst=false&module=false&raw=undefined&jsx=undefined&directives=undefined&attachComment=undefined&webCompat=undefined&lexical=undefined)

* [Strip off Typescript types](https://kataw.github.io/kataw/kataw_print/?code=async%20function%20(x%3A%20string%20%7C%20number%2C%20y%3A%20unknown)%3A%20any%20%7B%7D%0A%0Afunction%20concat%3CT%20extends%20unknown%5B%5D%2C%20U%20extends%20unknown%5B%5D%3E(t%3A%20%5B...T%5D%2C%20u%3A%20%5B...U%5D)%3A%20%5B...T%2C%20...U%5D%20%7B%7D%0A%0A(class%20X%20%7B%0A%20%20static%20prop%20%3D%201%3B%0A%20%20%5BX.prop%5D()%20%7B%7D%20%2F%2F%20no%20error%2C%20fails%20at%20runtime%0A%7D)%0A%0Adeclare%20function%20x()%20%7B%7D%0A%0A&method=parse&range=undefined&loc=false&next=false&cst=false&module=false&raw=undefined&jsx=undefined&directives=undefined&attachComment=undefined&webCompat=undefined&lexical=undefined)


## Strict mode and module goal

Strict mode should be enabled with the `|= NodeFlags.Strict` flag. All AST nodes will contain this mask.

`Module goal` is also strict mode, but the `Module` and `ModuleBody` AST nodes should be used for parsing in module goal.

## Async and generators

You will know if you parse in either async or yield context based on for example the `AsyncFunctionDeclaration` AST node.

See the [ECMA specs for this](https://tc39.es/ecma262/#prod-AsyncGeneratorDeclaration)

The `NodeKind` flags also let you do either `kind & NodeKind.IsGenerator`  or `kind & NodeKind.IsAsync` for async and generator nodes.

## NodeKind

The `NodeKind` flags allow you to do an quick comparison of AST nodes instead of using an huge switch statement that consumes memory.

For example `kind & NodeKind.IsExpression`, `kind & NodeKind.IsStatement`, `kind & NodeKind.IsBindingPattern` or
`kind & NodeKind.IsFunctionDeclaration`

## Comments

Comments isn't a part of this AST. Start and end values exist on each AST node. That's all info you need too extract the comments from
the source file on the `Script` and `Module` AST node.


## AnnexB

AnnexB is can be set as an boolean property on the `IfStatement` and `LabelledStatement` AST node.

## CST

This AST supports what I choose to call a "hybrid CST". It's contains enough info to give you a perfect pretty printing.

The CST info is set using `NodeFlags`.

### AST nodes

If you want to test out how AST nodes are created, you can use the `kataw.js` file used in the demo above.

```ts
import { createIdentifierReference } from ''kataw;

createIdentifierReference('foo', 'foo', /* NodeFlag */ NodeFlag.Strict, /* start */ 1, /* end */ 3);
```

### Parent nodes

The `parent` property on each node should be used to track the *parent node*. Here is how this could look like.

```ts
<ref *2> {
  kind: 2097233,
  expression: <ref *1> {
    kind: 67592,
    arrowParameters: {
      kind: 65545,
      typeParameters: 1,
      elements: [],
      type: null,
      accessModifiers: 0,
      trailingComma: false,
      flags: 0,
      intersects: false,
      transformFlags: 0,
      parent: null,
      emitNode: null,
      start: 0,
      end: 2
    },
    isParenthesized: true,
    contents: {
      kind: 196710,
      text: 'a',
      rawText: 'a',
      flags: 0,
      intersects: false,
      transformFlags: 0,
      parent: [Circular *1],
      emitNode: null,
      start: 5,
      end: 7
    },
    flags: 0,
    intersects: false,
    transformFlags: 0,
    parent: [Circular *2],
    emitNode: null,
    start: 0,
    end: 7
  },
  flags: 0,
  intersects: false,
  transformFlags: 0,
  parent: <ref *3> {
    kind: 242,
    statements: [ [Circular *2] ],
    transformFlags: 0,
    flags: 0,
    intersects: false,
    parent: {
      kind: 239,
      source: '() => a',
      filename: '',
      scriptBody: [Circular *3],
      jsx: false,
      diagnostics: [],
      parent: null,
      emitNode: null,
      incremental: false,
      flags: 0,
      intersects: false,
      transformFlags: 0,
      start: 0,
      end: 7
    },
    emitNode: null,
    start: 0,
    end: 7
  },
  emitNode: null,
  start: 0,
  end: 7
}
```

## Rationale
This AST was designed for performance because there exist different Javascript tools, and they have many issues and one thing in common - performance issues.

.  Acorn is the most commonly used tool out there because of its support for recent ES standards, but it's slow and it often is too permissive in what it accepts. It's also not optimized for handheld devices, and Acorn loose doesn't confirm to ECMA standards.

- Babel. The slowest of them all. It's internal parser is slow and it's an fork of Acorn parser.

- Esprima is a little faster than Acorn, but it's almost never updated, and their test suite has too many invalid tests. It also doesn't support recent ES standards.

- Rome. A wannabe toolchain that does it all. Linting, parsing, pretty printing etc. It's internals are forked from other project and "rewritten" to fit with the Rome project. Over all it's slow in almost everything it does.

- Prettier. Slow. Can't print comments correctly among other issues.

- Typescript. It's not a secret that it's TypeChecker is slow, and so is it's parser. 


I figured I could try do better, so I started out creating and AST that could deliver insane performance, conform to the ECMA specs and contain a "hybrid" CST with enough info to get the job done . It should also include Typescript and JSX parsing because that's one of the most common used libraries this days.

That's what this AST is about. I have also build a tool chain around this AST so I know it's fast. 

Maybe one day my toolchain will be open sourced, but the time isn't there yet. Too much work for a single developer, but I managed to use this AST to develop something that Rome wannabe mixed with Babel and API design ideas from TypeSscript. It can perform parsing, transforming, linting, pretty printing and even more, but the time isn't there yet to open source it.


## Contribution

If you have ideas on how to improve this AST further - contribution is welcome.
