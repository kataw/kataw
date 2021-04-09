# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: rest assignment destructuring
> :: case: a > b instanceof c
## Input

`````js
[ ... a > b instanceof c ] = x
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
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 223,
                                "argument": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 81921,
                                            "value": "a",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 5,
                                            "end": 7
                                        },
                                        "operatorToken": {
                                            "kind": 34883,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 7,
                                            "end": 9
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": "b",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 9,
                                            "end": 11
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 5,
                                        "end": 11
                                    },
                                    "operatorToken": {
                                        "kind": 4229173,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 11,
                                        "end": 22
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "c",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 22,
                                        "end": 24
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 5,
                                    "end": 24
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 1,
                                "end": 24
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 24
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 26
                },
                "operatorToken": {
                    "kind": 4125,
                    "autofix": 0,
                    "flags": 0,
                    "start": 26,
                    "end": 28
                },
                "right": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 28,
                    "end": 30
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 30
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "[ ... a > b instanceof c ] = x",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 26,
            "end": 28
        }
    ],
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: rest assignment destructuring
> :: case: a > b instanceof c
## Input

`````js
[ ... a > b instanceof c ] = x
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: rest assignment destructuring
> :: case: a > b instanceof c
## Input

`````js
[ ... a > b instanceof c ] = x
`````
```

