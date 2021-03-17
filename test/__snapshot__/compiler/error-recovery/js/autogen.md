# Kataw parser test case

> Auto-generated tests to validate error recovery
>

## Input

### Cases


> `````js
> ((((((
> `````

> `````js
> a(!
> `````

> `````js
> a(...
> `````

> `````js
> a(((((((
> `````

> `````js
> a((((((((!!
> `````

> `````js
> a...........
> `````

> `````js
> a...........!!
> `````

> `````js
> "
> `````

> `````js
> `\
> `````

> `````js
> |
> `````

> `````js
> `|
> `````

> `````js
> a`
> `````

> `````js
> `
> `````

> `````js
> ,,,,,,,,,,,,,,,,,,,,,,,,,,a
> `````

> `````js
> a[=.
> `````

> `````js
> ++
> `````

> `````js
> `${
> `````

> `````js
> ?:b
> `````

> `````js
> [k
> `````

> `````js
> +=>
> `````

> `````js
> a`..
> `````

> `````js
> + =>
> `````

> `````js
> + /= >
> `````

> `````js
> +!{
> `````

> `````js
> )=/++!{class
> `````

> `````js
> [a/
> `````

> `````js
> / / /
> `````

> `````js
> /000//////++!
> `````

> `````js
> a/a/
> `````

> `````js
> /x/ii
> `````

> `````js
> /x/uu
> `````

> `````js
> /x/yy
> `````

> `````js
> /x/ii /x/ii
> `````

> `````js
> /* */ / // foo /
> `````

> `````js
> (foo.)
> `````

> `````js
> foo. && true;
> `````

> `````js
> (foo.bar. || true);
> `````

> `````js
> if (foo.
> `````

> `````js
> x = 2,;
> `````

> `````js
> { foo:
> `````

> `````js
> { foo: bar,
> `````

> `````js
> foo(a,foo.
> `````

> `````js
> )=?)a..
> `````

> `````js
> new
> `````

> `````js
> a==b?
> `````

> `````js
> var package = yield!
> `````

> `````js
> 1-+
> `````

> `````js
> 1---
> `````

> `````js
> 1..
> `````

> `````js
> 1!{%
> `````

> `````js
> "string
> `````

> `````js
> else
> `````

> `````js
> =( ?
> `````

> `````js
> ¤%&()==)(&%*+-345
> `````

> `````js
> +//!458+!{while
> `````

> `````js
> +!458+!{while
> `````

> `````js
> ++!{while
> `````

> `````js
> ++while
> `````

> `````js
> +{
> `````

> `````js
> +!!
> `````

> `````js
> +!![
> `````

> `````js
> &/)=)==?)=
> `````

> `````js
> *=
> `````

> `````js
> a <<
> `````

> `````js
> a(!
> `````

> `````js
> a(€
> `````

> `````js
> )..
> `````

> `````js
> a  +=  -=  *=  n  %=  <<=  >>=  >>>=  |=  ^=  &=
> `````

> `````js
> a  >>>
> `````

> `````js
> a  >>>   >>>  b
> `````

> `````js
> {!super new class ++ | }
> `````

> `````js
> a *=  *= c
> `````

> `````js
> switch case default x!
> `````

> `````js
> enum x {{{{{{{{
> `````

> `````js
> function a() {"}
> `````

> `````js
> ..
> `````

> `````js
> function x (y = z -  {}
> `````

> `````js
> function x (
> `````

> `````js
> function x
> `````

> `````js
> function x ( = y) {}
> `````

> `````js
> function a(.) {}
> `````

> `````js
> function x ([a=) {}
> `````

> `````js
> export {!
> `````

> `````js
> import * foo from "foo.js";;
> `````

> `````js
> export * as
> `````

> `````js
> export default function*()
> `````

> `````js
> expo42;
> `````

> `````js
> export var y = 0;
> `````

> `````js
> export { };
> `````

> `````js
> !!! export from switch(export x from "y") {
> `````

> `````js
> import { };
> `````

> `````js
> import / as a from "foo";
> `````

> `````js
> import { 123 } from "foo";
> `````

> `````js
> import {
> `````

> `````js
> import * foo ;;
> `````

> `````js
> import m ;;'baz';
> `````

> `````js
> import { a, b ,,,,,,, !!!!! //} from 'baz';
> `````

> `````js
> import {}x'
> `````

> `````js
> import {} from 'x'
> `````

> `````js
> import }}}}}}}{ /*asdf*/ a / ? : c n from 'n.js';
> `````

> `````js
> import async from "foo";
> `````

> `````js
> var x; export default x =
> `````

> `````js
> export { for } from 'm.js';
> `````

> `````js
> export { };
> `````

> `````js
> export let x = y, {...z} = y;
> `````

> `````js
> export default () => {
> `````

> `````js
> for( {
> `````

> `````js
> function }
> `````

> `````js
> for({x = y} in foo);
> `````

> `````js
> for(let {x = y} in foo
> `````

> `````js
> for(var a,,,,,,,,,,,,,,,c in x) {}
> `````

> `````js
> function arguments(){}v:switch(x){default:}let arguments=l
> `````

> `````js
> ({__pto__: b});
> `````

> `````js
> -->
> `````

> `````js
> /a\u2028/
> `````

> `````js
> x\\u000072
> `````

> `````js
> x\\u0\nnewline
> `````

> `````js
> x\\u0x11ffff
> `````

> `````js
> \\u{70bc
> `````

> `````js
> x\\}
> `````

> `````js
> x\\u{000072
> `````

> `````js
> #privatename
> `````

> `````js
> x = {"x": [y + x]}
> `````

> `````js
> x = {"x": {a: y + x}.slice(0)}
> `````

> `````js
> ({ a,1:b })
> `````

> `````js
> { async *method([[x, y, z] = [4, 5,
> `````

> `````js
> ({async *x() {}}
> `````

> `````js
> ({x});
> `````

> `````js
> ({a, b} = c = d)
> `````

> `````js
> ({x:let}) => null
> `````

> `````js
> ({async foo() { }})
> `````

> `````js
> ({...(obj)} = foo),({...obj} = foo),({...obj.x} = foo),({...{}.x} = foo),({...[].x} = foo)
> `````

> `````js
> ({x = 42, y = 15})
> `````

> `````js
> ({[foo()] : foo().bar} = z = {});
> `````

> `````js
> ([[a] = [[a] = [[a] = ([[a] = x
> `````

> `````js
> ({ src: ([dest]) } = ob
> `````

> `````js
> {...{a, b}} = x
> `````

> `````js
> ([x],) = x
> `````

> `````js
> ({set p(...[]) {}}
> `````

> `````js
> ({...x.y} = z) => z
> `````

> `````js
> ({ a: (a = d) } = {
> `````

> `````js
> ({   async *[x
> `````

> `````js
> ({}(a,b))
> `````

> `````js
> (([(((null))), , (([(2).r = (((308)) ? this : (x)), aihgi] = ({}))), (8), (y)]))
> `````

> `````js
> ([ [ foo()[x] ] ] = {})
> `````

> `````js
> ([].x);
> `````

> `````js
> (a=b)
> `````

> `````js
> (a=(b=c))
> `````

> `````js
> [{x:x = 1, y:y = 2}, [a = 3, b = 4, c = 5]] =
> `````

> `````js
> (ar, [a,b,...rest])
> `````

> `````js
> ({  [ y[z] = 10 ] = {}
> `````

> `````js
> ([  ])
> `````

> `````js
> ({ x : { foo: foo().y } })
> `````

> `````js
> (x) += y) =
> `````

> `````js
> (x) += y) = x
> `````

> `````js
> ,4))),f[4,a-6]
> `````

> `````js
> ([foo](d)} })
> `````

> `````js
> ({...[][x (y))
> `````

> `````js
> [{x : [{y:{z = 1}, z1 = 2}] },{x3 : {y3:}} ] = [{{}}]}, {}, {x3:{y3:[{}]}}];
> `````

> `````js
> [,] = null;
> `````

> `````js
> [ "y].z = obj
> `````

> `````js
> [. a] =a
> `````

> `````js
> [{ bj
> `````

> `````js
> [(1) =c)]
> `````

> `````js
> [[[a.b =[{ x: x.b }]]]] = ([{ a = b / 2}])
> `````

> `````js
> [void x]
> `````

> `````js
> ({a:(((} = {a:20})
> `````

> `````js
> 1 *
> `````

> `````js
> I try and try and try, but soon to give up. I switch to better code!
> `````

> `````js
> while wait for the train i run for my life
> `````

> `````js
> function or class? I try class or maybe a function ???!
> `````

> `````js
> Endless parens should I try? ((((((((((((((((((((((((((((((((((((( or closing paren ))))))) I swithc to a bracket [
> `````

> `````js
> emojis I try!  :)  :( @(  !=
> `````

> `````js
> for yesterday was bad so I switch to summer for this clothes or I try
> `````

> `````js
> if I can run for this I will switch shoe
> `````

> `````js
> if ever I run into a {, then this is a brace and I switch or try to switch to [
> `````

> `````js
> while wait for the train i run for my life
> `````

> `````js
> I ran into infite loop while try to develop this {
> `````

> `````js
> I try, and it seems good. No need to switch!
> `````

> `````js
> 0b0122
> `````

> `````js
> x\\u foo
> `````

> `````js
> x\\
> `````

> `````js
> x\\u{0 foo
> `````

> `````js
> 0b1__2
> `````

> `````js
> 0b_
> `````

> `````js
> 1a
> `````

> `````js
> 1e
> `````

> `````js
> 1e!
> `````

> `````js
> 0b
> `````

> `````js
> 0b0017
> `````

> `````js
> for await
> `````

> `````js
> if else (
> `````

> `````js
> if async function else babel (
> `````

> `````js
> if (x async function ) (
> `````

> `````js
> if if if if async function else if if else (
> `````

> `````js
> if(((((({{{{{{{{{{{]}
> `````

> `````js
> if(x) {
> `````

> `````js
> {if{}
> `````

> `````js
> if{else
> `````

> `````js
> if(x){function x( {
> `````

> `````js
> if( hello!! while acorn can not do this
> `````

> `````js
> try { throw [,]; } catch ([x = 23]) {}
> `````

> `````js
> try {
> `````

> `````js
> try (
> `````

> `````js
> try (switch)
> `````

> `````js
> try catch(x),
> `````

> `````js
> throw(x
> `````

> `````js
> throw(x::::)
> `````

> `````js
> throw try
> `````

> `````js
> try {} catch
> `````

> `````js
> try {} catch
> `````

> `````js
> while (
> `````

> `````js
> while (x
> `````

> `````js
> while x)
> `````

> `````js
> while while x))
> `````

> `````js
> do function while x() {}
> `````

> `````js
> ((function..a..))
> `````

> `````js
> while x =
> `````

> `````js
> ...1
> `````

> `````js
> ()..
> `````

### Templates

#### stand-alone

`````js
[ # ]
`````

#### in destructuring assignment as shorthand

property is valid assignment target so should work

`````js
[ # ] = x
`````

#### in arrow head

`````js
([ # ]) => {}
`````

#### in function block

`````js
function x() {#}
`````

#### in paren

`````js
(#)
`````

#### in array literal

`````js
[x]
`````

#### in wrapped array literal

`````js
([ # ])
`````

#### in object literal

`````js
x = {#}
`````

#### in object literal assign

`````js
x = { x = #}
`````

#### in switch

`````js
switch (x) {
  case x:
    default:
      default
}
`````

#### in try statement

`````js
try #
`````

#### in throw stmt

`````js
throw #
`````

#### labeled stmt

`````js
a: #
`````

#### assignment

`````js
x = {#}
`````

#### in double assignment

`````js
x = y = x = {#}
`````

#### in arrow body

`````js
([ # ]) => {x = {#}}
`````

#### in arrow head and body

`````js
(#) => {x = {#}}
`````

#### in arrow non-block body

`````js
() => x = {#}
`````

#### in block stmt

`````js
{ # }
`````

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

