# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: prefix update
> :: case: async (x, y) => ok
## Input

`````js
++async (x, y) => ok
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
                "kind": 128,
                "operandToken": {
                    "kind": 196635,
                    "autofix": 0,
                    "flags": 0,
                    "start": 0,
                    "end": 2
                },
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 81921,
                        "value": "async",
                        "autofix": 0,
                        "flags": 768,
                        "start": 2,
                        "end": 7
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 81921,
                                "value": "x",
                                "autofix": 0,
                                "flags": 768,
                                "start": 9,
                                "end": 10
                            },
                            {
                                "kind": 81921,
                                "value": "y",
                                "autofix": 0,
                                "flags": 768,
                                "start": 11,
                                "end": 13
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 9,
                        "end": 13
                    },
                    "flags": 256,
                    "start": 2,
                    "end": 14
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 14
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "ok",
                "autofix": 0,
                "flags": 768,
                "start": 17,
                "end": 20
            },
            "autofix": 0,
            "flags": 128,
            "start": 17,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "++async (x, y) => ok",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 25,
            "error": "The operand of an increment or decrement operator must be a variable or a property access",
            "start": 14,
            "end": 17
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 14,
            "end": 17
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 14,
            "end": 17
        }
    ],
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: prefix update
> :: case: async (x, y) => ok
## Input

`````js
++async (x, y) => ok
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: prefix update
> :: case: async (x, y) => ok
## Input

`````js
++async (x, y) => ok
`````
```

