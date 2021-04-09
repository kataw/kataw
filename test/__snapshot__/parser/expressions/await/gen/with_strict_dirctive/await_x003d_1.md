# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: await = 1
## Input

`````js
'use strict'; await = 1
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
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 0,
                "end": 12
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "await",
                    "autofix": 0,
                    "flags": 768,
                    "start": 13,
                    "end": 19
                },
                "operatorToken": {
                    "kind": 67174402,
                    "autofix": 0,
                    "flags": 0,
                    "start": 13,
                    "end": 21
                },
                "right": {
                    "kind": 81921,
                    "value": 1,
                    "autofix": 0,
                    "flags": 768,
                    "start": 21,
                    "end": 23
                },
                "autofix": 0,
                "flags": 256,
                "start": 13,
                "end": 23
            },
            "autofix": 0,
            "flags": 128,
            "start": 13,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "'use strict'; await = 1",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: await = 1
## Input

`````js
'use strict'; await = 1
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: await = 1
## Input

`````js
'use strict'; await = 1
`````
```

