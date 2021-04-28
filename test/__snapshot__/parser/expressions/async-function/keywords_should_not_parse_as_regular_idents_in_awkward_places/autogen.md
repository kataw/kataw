# Kataw parser test case

> Auto-generated tests to validate error recovery
>

## Input

### Cases


> `````js
> async ()=>x
> `````

> `````js
> class{}
> `````

> `````js
> delete x.y
> `````

> `````js
> false
> `````

> `````js
> function(){}
> `````

> `````js
> new x
> `````

> `````js
> null
> `````

> `````js
> true
> `````

> `````js
> this
> `````

> `````js
> typeof x
> `````

> `````js
> void x
> `````

> `````js
> x + y
> `````

> `````js
> [].length
> `````

> `````js
> [x].length
> `````

> `````js
> {}.length
> `````

> `````js
> {x: y}.length
> `````

### Templates

#### in array

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

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 1,
                    "end": 1
                },
                "flags": 256,
                "start": 0,
                "end": 1
            },
            "flags": 128,
            "start": 0,
            "end": 1
        }
    ],
    "isModule": false,
    "text": "[ # ]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 5
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Invalid character - start: 1, end: 3
@{x2716}@ Private identifiers are not allowed outside class_bodies - start: 1, end: 3
@{x2716}@ Statement expected - start: 3, end: 5

```

