# Kataw parser test case

> Auto-generated tests to validate error recovery
>

### Cases

> `````js
> import(1)
> `````

> `````js
> import(y=x)
> `````

> `````js
> f(...[import(y=x)])
> `````

> `````js
> x = {[import(y=x)]: 1}
> `````

> `````js
> var {[import(y=x)]: x} = {
> `````

> `````js
> ({[import(y=x)]: x} = {})
> `````

> `````js
> async () => { await import(x) }
> `````

> `````js
> () => { import(x) }
> `````

> `````js
> (import(y=x))
> `````

> `````js
> {import(y=x)}
> `````

> `````js
> import(import(x))
> `````

> `````js
> x = import(x)
> `````

> `````js
> let x = import(x)
> `````

> `````js
> for(x of import(x)) {}
> `````

> `````js
> import(x).then()
> `````

> `````js
> import(x,)
> `````

> `````js
> import(x,y)
> `````

> `````js
> import(x,1)
> `````

> `````js
> import(x, { 'a': 'b' })
> `````

> `````js
> import(x, { a: 'b', 'c': 'd' },)
> `````

> `````js
> import(x, { 'a': { b: 'c' }, 'd': 'e' },)
> `````

> `````js
> import(x,y=z)
> `````

> `````js
> import(x,import(y))
> `````

> `````js
> import(x,undefined)
> `````

> `````js
> f(...[import(y=x)])
> `````

> `````js
> ({[import(y=x)]: x} = {})
> `````

> `````js
> var x = import(x)
> `````

> `````js
> import(x).then()
> `````

> `````js
> for(x of import(x)) {
> `````

> `````js
> import(x,))
> `````

> `````js
> import(x))
> `````

> `````js
> import(x,y,,)
> `````

> `````js
> import(x,y,z)
> `````

> `````js
> import(x,y(
> `````

> `````js
> import(x,y
> `````

> `````js
> import(x,())
> `````

> `````js
> import(x,))
> `````

> `````js
> import(x))
> `````

> `````js
> import(y=x)
> `````

> `````js
> import(y=x)
> `````

> `````js
> import(1)
> `````

### Templates

#### stand-alone

`````js
#
`````

#### lexical

`````js
#
`````

#### new-expr

`````js
#
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "#",
                "autofix": 0,
                "flags": 768,
                "start": 0,
                "end": 1
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 1
        }
    ],
    "isModule": false,
    "text": "#",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 0,
            "end": 1
        }
    ],
    "start": 0,
    "end": 1
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

