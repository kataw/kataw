# kataw

This repo exist only to show off an alternative and improved AST than ESTree and Babel AST.

It's conforms to latest ECMA specs, and the AST is designed to fullfill this goals with high performance:

* CST
* Error handling / recovery
* Incremental parsing
* Transformation
* Linter
* Minification
* JSX
* Typescript
* Pretty printing

`None` of these files are not completely up to date with my private code and will not be improved further.

I use this AST in my private project that includes all the bullet point above.


## Strict mode and module goal

Strict mode should be enabled with the `|= NodeFlags.Strict` flag. All AST nodes will contain this mask.

`Module goal` is also strict mode, but a `module` boolean property can be enabled on the `RootNode`.

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
the source file on the `RootNode`.


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

## Contribution

If you have ideas on how to improve this AST further - contribution is welcome.
