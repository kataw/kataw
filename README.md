# kataw

This repo exist only to show off an alternative and improved AST than what can be seen in the EScaya repo.

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

The CST info is set using `NodeFlags`.

## Strict mode and module goal

Strict mode should be enabled with the `|= NodeFlags.Strict` flag. All AST nodes will contain this masks. 

`Module goal` is also strict mode, but a `module` boolean property can be enabled on the `RootNode`. 

## AnnexB

AnnexB is can be set as an boolean property on `IfStatement` and `LabelledStatement`.

## CST

This AST supports what I choose to call a "hybrid CST". It's contains enough info to give you a perfect pretty printing.

## Contribution

If you have ideas on how to improve this AST further - contribution is welcome.
