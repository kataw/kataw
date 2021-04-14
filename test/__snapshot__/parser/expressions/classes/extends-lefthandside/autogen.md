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
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "decorators": null,
            "classKeyword": {
                "kind": 37814352,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 81921,
                "text": "A",
                "rawText": "A",
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsToken": {
                    "kind": 4194391,
                    "flags": 768,
                    "start": 7,
                    "end": 15
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 15,
                    "end": 15
                },
                "typeParameter": null,
                "flags": 128,
                "start": 15,
                "end": 15
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 0,
                "end": 0
            },
            "flags": 128,
            "start": 0,
            "end": 15
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 19,
                "end": 19
            },
            "flags": 128,
            "start": 17,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "class A extends # {}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 15,
            "end": 17
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 15,
            "end": 17
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 15,
            "end": 17
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
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

