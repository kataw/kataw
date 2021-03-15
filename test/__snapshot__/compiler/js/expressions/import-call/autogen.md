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
    "kind": 196,
    "source": "#",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "#",
                "rawText": "",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 1
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 1
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Invalid character",
            "start": 1,
            "length": 1
        }
    ],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
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

