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

`None` of these files are not completely up to date with my private code and will not be improved further.

I use this AST in my private project that includes all the bullet point above.


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

## Demo

There exist an demo for this AST. It's an subset of my own private parser. The demo includes only pretty printing and AST, and
it doesn't work 110%. I "ripped out" some parts to prevent it from being used to other things than an demo.

TypeScript parsing is enabled, and TS types are removed in the pretty printing.

Transformers has not been added, but maybe I can add a transformer demo later on. The transformer works like Babel. It transpiles from
ES2021 to older ECMA versions.

* [AST overview](https://kataw.github.io/kataw/kataw_ast/)

* [Pretty printing with comments](https://kataw.github.io/kataw/kataw_print/)

* [Strip off Typescript types](https://kataw.github.io/kataw/kataw_print/?code=async%20function%20(x%3A%20string%20%7C%20number%2C%20y%3A%20unknown)%3A%20any%20%7B%7D%0A%0Afunction%20concat%3CT%20extends%20unknown%5B%5D%2C%20U%20extends%20unknown%5B%5D%3E(t%3A%20%5B...T%5D%2C%20u%3A%20%5B...U%5D)%3A%20%5B...T%2C%20...U%5D%20%7B%7D%0A%0A(class%20X%20%7B%0A%20%20static%20prop%20%3D%201%3B%0A%20%20%5BX.prop%5D()%20%7B%7D%20%2F%2F%20no%20error%2C%20fails%20at%20runtime%0A%7D)%0A%0Adeclare%20function%20x()%20%7B%7D%0A%0A&method=parse&range=undefined&loc=false&next=false&cst=false&module=false&raw=undefined&jsx=undefined&directives=undefined&attachComment=undefined&webCompat=undefined&lexical=undefined)


### AST nodes

If you want to test out how AST nodes are created, you can use the `kataw.js` file used in the demo above.

```ts
import { createIdentifierReference } from ''kataw;

createIdentifierReference('foo', 'foo', /* NodeFlag */ NodeFlag.Strict, /* start */ 1, /* end */ 3);
```

## Contribution

If you have ideas on how to improve this AST further - contribution is welcome.
