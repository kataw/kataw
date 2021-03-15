# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15\test\__snapshot__/compiler/js/expressions/await/autogen.md
- Path: kataw15\test\__snapshot__\compiler\js\expressions\await\gen\var
> :: test: var
> :: case: async function f() {
>            let { [await "a"]: a } = { a: 1 };
>            return a;
>          }
## Input

`````js
var await; var f = (async function() { async function f() {
  let { [await "a"]: a } = { a: 1 };
  return a;
} });
`````
