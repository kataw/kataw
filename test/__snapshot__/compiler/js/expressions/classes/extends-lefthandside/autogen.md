# Kataw parser test case

> Auto-generated tests to validate error recovery
>

### Cases

> `````js
> () => x
> `````

> `````js
> () => {}
> `````

> `````js
> (a) => x
> `````

> `````js
> (a) => {}
> `````

> `````js
> (a, b) => x
> `````

> `````js
> (a, b) => {}
> `````

> `````js
> a => b
> `````

> `````js
> a => {}
> `````

> `````js
> async () => x
> `````

> `````js
> async () => {}
> `````

> `````js
> async a => b
> `````

> `````js
> async a => {}
> `````

> `````js
> async()
> `````

> `````js
> async(x)
> `````

> `````js
> async
> ()
> `````

> `````js
> async
> `````

> `````js
> async
> x
> `````

> `````js
> async
> x => y
> `````

> `````js
> function(){}
> `````

> `````js
> function f(){}
> `````

> `````js
> async function(){}
> `````

> `````js
> async function f(){}
> `````

> `````js
> function *(){}
> `````

> `````js
> function *f(){}
> `````

> `````js
> async function *(){}
> `````

> `````js
> async function *f(){}
> `````

> `````js
> delete x
> `````

> `````js
> ~x
> `````

> `````js
> !x
> `````

> `````js
> -x
> `````

> `````js
> +x
> `````

> `````js
> --x
> `````

> `````js
> ++x
> `````

> `````js
> void x
> `````

> `````js
> typeof x
> `````

> `````js
> new x
> `````

> `````js
> yield
> `````

> `````js
> yield x
> `````

> `````js
> yield
> x
> `````

> `````js
> await
> `````

> `````js
> await x
> `````

> `````js
> await
> x;
> `````

> `````js
> super()
> `````

> `````js
> super.foo
> `````

> `````js
> import('x')
> `````

> `````js
> new.target
> `````

> `````js
> this
> `````

> `````js
> true
> `````

> `````js
> false
> `````

> `````js
> null
> `````

> `````js
> fooo
> `````

> `````js
> fooo()
> `````

> `````js
> fooo.bar
> `````

> `````js
> fooo[bar]
> `````

> `````js
> fooo`bar`
> `````

> `````js
> 1.2
> `````

> `````js
> "crap"
> `````

> `````js
> "oct \03 al"
> `````

> `````js
> /crap/
> `````

> `````js
> /more crap/g
> `````

> `````js
> [foo]
> `````

> `````js
> {bar}
> `````

> `````js
> eval
> `````

> `````js
> arguments
> `````

> `````js
> `temp`
> `````

> `````js
> `temp {waitforit} late`
> `````

> `````js
> `t${e}m${p}l`
> `````

> `````js
> oh,no
> `````

> `````js
> (oh,yes)
> `````

> `````js
> (x)
> `````

> `````js
> a + b
> `````

> `````js
> a = b
> `````

> `````js
> a *= b
> `````

> `````js
> a !== b
> `````

> `````js
> [x]
> `````

> `````js
> [x] = b
> `````

> `````js
> [x=y]
> `````

> `````js
> [x=y] = b
> `````

> `````js
> {x}
> `````

> `````js
> {x} = b
> `````

> `````js
> {x=y}
> `````

> `````js
> {x=y} = b
> `````

> `````js
> {x: y}
> `````

> `````js
> {x: y} = b
> `````

> `````js
> {x: y=y}
> `````

> `````js
> {x: y=y} = b
> `````

> `````js
> [...x]
> `````

> `````js
> [...x] = b
> `````

> `````js
> [...x=y]
> `````

> `````js
> [...x=y] = b
> `````

> `````js
> {...x}
> `````

> `````js
> {...x} = b
> `````

> `````js
> {...x=y}
> `````

> `````js
> {...x=y} = b
> `````

> `````js
> {...x: y}
> `````

> `````js
> {...x: y} = b
> `````

> `````js
> {...x: y = y}
> `````

> `````js
> {...x: y = y} = b
> `````

> `````js
> x in y
> `````

> `````js
> s ** y
> `````

### Templates

#### declaration

`````js
class A extends # {}
`````

#### expression

`````js
(class B extends # {})
`````

#### async wrapped

`````js
async function p(){
  class C extends # {}
}
`````

#### generator wrapped

`````js
function *P(){
  class D extends # {}
}
`````

#### new arg

`````js
new #
`````

#### for-in lhs

`````js
for (# in x) ;
`````
