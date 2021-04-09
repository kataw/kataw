# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: p
> :: test: group
> :: case: a > b instanceof c
## Input

`````js
( a > b instanceof c )
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
                "kind": 121,
                "expression": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 81921,
                            "value": "a",
                            "autofix": 0,
                            "flags": 768,
                            "start": 1,
                            "end": 3
                        },
                        "operatorToken": {
                            "kind": 34883,
                            "autofix": 0,
                            "flags": 0,
                            "start": 3,
                            "end": 5
                        },
                        "right": {
                            "kind": 81921,
                            "value": "b",
                            "autofix": 0,
                            "flags": 768,
                            "start": 5,
                            "end": 7
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 0,
                        "end": 7
                    },
                    "operatorToken": {
                        "kind": 4229173,
                        "autofix": 0,
                        "flags": 0,
                        "start": 7,
                        "end": 18
                    },
                    "right": {
                        "kind": 81921,
                        "value": "c",
                        "autofix": 0,
                        "flags": 768,
                        "start": 18,
                        "end": 20
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 20
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 22
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "text": "( a > b instanceof c )",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: p
> :: test: group
> :: case: a > b instanceof c
## Input

`````js
( a > b instanceof c )
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: p
> :: test: group
> :: case: a > b instanceof c
## Input

`````js
( a > b instanceof c )
`````
```

