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
    "kind": 196,
    "source": "class A extends # {}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "A",
                    "rawText": "A",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 5,
                    "end": 7
                },
                "typeParameters": null,
                "classHeritage": {
                    "kind": 52,
                    "expression": {
                        "kind": 196712,
                        "text": "#",
                        "rawText": "extends",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 17
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 17
                },
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 19,
                    "end": 20
                },
                "decorators": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 1,
                "start": 0,
                "end": 20
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 20
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Invalid character",
            "start": 17,
            "length": 1
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
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

