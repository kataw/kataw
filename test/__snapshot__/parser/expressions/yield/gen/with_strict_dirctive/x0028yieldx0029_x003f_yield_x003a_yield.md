# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: (yield) ? yield : yield
## Input

`````js
'use strict'; (yield) ? yield : yield
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
                "kind": 197,
                "shortCircuit": {
                    "kind": 121,
                    "expression": {
                        "kind": 81921,
                        "value": "yield",
                        "autofix": 0,
                        "flags": 768,
                        "start": 15,
                        "end": 20
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 13,
                    "end": 21
                },
                "questionToken": {
                    "kind": 22,
                    "autofix": 0,
                    "flags": 0,
                    "start": 21,
                    "end": 23
                },
                "consequent": {
                    "kind": 81921,
                    "value": "yield",
                    "autofix": 0,
                    "flags": 768,
                    "start": 23,
                    "end": 29
                },
                "colonToken": {
                    "kind": 21,
                    "autofix": 0,
                    "flags": 0,
                    "start": 29,
                    "end": 31
                },
                "alternate": {
                    "kind": 81921,
                    "value": "yield",
                    "autofix": 0,
                    "flags": 768,
                    "start": 31,
                    "end": 37
                },
                "autofix": 0,
                "flags": 256,
                "start": 13,
                "end": 37
            },
            "autofix": 0,
            "flags": 128,
            "start": 13,
            "end": 37
        }
    ],
    "isModule": false,
    "text": "'use strict'; (yield) ? yield : yield",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 37
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: (yield) ? yield : yield
## Input

`````js
'use strict'; (yield) ? yield : yield
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: (yield) ? yield : yield
## Input

`````js
'use strict'; (yield) ? yield : yield
`````
```

