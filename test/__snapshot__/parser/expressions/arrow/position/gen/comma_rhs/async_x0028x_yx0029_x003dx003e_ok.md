# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: comma rhs
> :: case: async (x, y) => ok
## Input

`````js
a, async (x, y) => ok
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 81921,
                        "value": "a",
                        "autofix": 0,
                        "flags": 768,
                        "start": 0,
                        "end": 1
                    },
                    {
                        "kind": 131,
                        "expression": {
                            "kind": 81921,
                            "value": "async",
                            "autofix": 0,
                            "flags": 768,
                            "start": 2,
                            "end": 8
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 81921,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 10,
                                    "end": 11
                                },
                                {
                                    "kind": 81921,
                                    "value": "y",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 12,
                                    "end": 14
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 10,
                            "end": 14
                        },
                        "flags": 256,
                        "start": 2,
                        "end": 15
                    }
                ],
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 15
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "ok",
                "autofix": 0,
                "flags": 768,
                "start": 18,
                "end": 21
            },
            "autofix": 0,
            "flags": 128,
            "start": 18,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "a, async (x, y) => ok",
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
            "end": 18
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 15,
            "end": 18
        }
    ],
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: comma rhs
> :: case: async (x, y) => ok
## Input

`````js
a, async (x, y) => ok
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: comma rhs
> :: case: async (x, y) => ok
## Input

`````js
a, async (x, y) => ok
`````
```

