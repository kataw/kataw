# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: w
> :: test: rhs pow
> :: case: async (x, y) => ok
## Input

`````js
x ** async (x, y) => ok
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
                "kind": 198,
                "left": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 35897,
                    "autofix": 0,
                    "flags": 0,
                    "start": 1,
                    "end": 4
                },
                "right": {
                    "kind": 131,
                    "expression": {
                        "kind": 81921,
                        "value": "async",
                        "autofix": 0,
                        "flags": 768,
                        "start": 4,
                        "end": 10
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 81921,
                                "value": "x",
                                "autofix": 0,
                                "flags": 768,
                                "start": 12,
                                "end": 13
                            },
                            {
                                "kind": 81921,
                                "value": "y",
                                "autofix": 0,
                                "flags": 768,
                                "start": 14,
                                "end": 16
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 12,
                        "end": 16
                    },
                    "flags": 256,
                    "start": 4,
                    "end": 17
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 17
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "ok",
                "autofix": 0,
                "flags": 768,
                "start": 20,
                "end": 23
            },
            "autofix": 0,
            "flags": 128,
            "start": 20,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "x ** async (x, y) => ok",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 17,
            "end": 20
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 17,
            "end": 20
        }
    ],
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: w
> :: test: rhs pow
> :: case: async (x, y) => ok
## Input

`````js
x ** async (x, y) => ok
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: w
> :: test: rhs pow
> :: case: async (x, y) => ok
## Input

`````js
x ** async (x, y) => ok
`````
```

