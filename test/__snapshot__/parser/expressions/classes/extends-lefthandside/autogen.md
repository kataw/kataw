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

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 178,
            "decorators": null,
            "name": {
                "kind": 81921,
                "value": "A",
                "autofix": 0,
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "expression": {
                    "kind": 81921,
                    "value": "#",
                    "autofix": 0,
                    "flags": 768,
                    "start": 15,
                    "end": 17
                },
                "typeParameter": null,
                "flags": 128,
                "start": 15,
                "end": 17
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 19,
                "end": 20
            },
            "flags": 128,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "class A extends # {}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 15,
            "end": 17
        }
    ],
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

