# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: comma lhs
> :: case: async (x, y) => ok
## Input

`````js
async (x, y) => ok, a
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
                "kind": 131,
                "expression": {
                    "kind": 81921,
                    "value": "async",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 5
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 7,
                            "end": 8
                        },
                        {
                            "kind": 81921,
                            "value": "y",
                            "autofix": 0,
                            "flags": 768,
                            "start": 9,
                            "end": 11
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 7,
                    "end": 11
                },
                "flags": 256,
                "start": 0,
                "end": 12
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 81921,
                        "value": "ok",
                        "autofix": 0,
                        "flags": 768,
                        "start": 15,
                        "end": 18
                    },
                    {
                        "kind": 81921,
                        "value": "a",
                        "autofix": 0,
                        "flags": 768,
                        "start": 19,
                        "end": 21
                    }
                ],
                "autofix": 0,
                "flags": 256,
                "start": 15,
                "end": 21
            },
            "autofix": 0,
            "flags": 128,
            "start": 15,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "async (x, y) => ok, a",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 12,
            "end": 15
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 12,
            "end": 15
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
> :: test: comma lhs
> :: case: async (x, y) => ok
## Input

`````js
async (x, y) => ok, a
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: comma lhs
> :: case: async (x, y) => ok
## Input

`````js
async (x, y) => ok, a
`````
```

