# Kataw parser test case

## Input

`````js
x0 / x1 & x2 << x3 ^ x4 instanceof x5 + x6 || x7 && x8 == x9 | x10 ** x

typeof x;
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
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 81921,
                                    "value": "x0",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 0,
                                    "end": 2
                                },
                                "operatorToken": {
                                    "kind": 35640,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 2,
                                    "end": 4
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "x1",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 4,
                                    "end": 7
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 0,
                                "end": 7
                            },
                            "operatorToken": {
                                "kind": 34375,
                                "autofix": 0,
                                "flags": 0,
                                "start": 7,
                                "end": 9
                            },
                            "right": {
                                "kind": 198,
                                "left": {
                                    "kind": 81921,
                                    "value": "x2",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 9,
                                    "end": 12
                                },
                                "operatorToken": {
                                    "kind": 35140,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 12,
                                    "end": 15
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "x3",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 15,
                                    "end": 18
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 12,
                                "end": 18
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 0,
                            "end": 18
                        },
                        "operatorToken": {
                            "kind": 34121,
                            "autofix": 0,
                            "flags": 0,
                            "start": 18,
                            "end": 20
                        },
                        "right": {
                            "kind": 198,
                            "left": {
                                "kind": 81921,
                                "value": "x4",
                                "autofix": 0,
                                "flags": 768,
                                "start": 20,
                                "end": 23
                            },
                            "operatorToken": {
                                "kind": 4229173,
                                "autofix": 0,
                                "flags": 0,
                                "start": 23,
                                "end": 34
                            },
                            "right": {
                                "kind": 81921,
                                "value": "x5",
                                "autofix": 0,
                                "flags": 768,
                                "start": 34,
                                "end": 37
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 23,
                            "end": 37
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 0,
                        "end": 37
                    },
                    "operatorToken": {
                        "kind": 34098,
                        "autofix": 0,
                        "flags": 0,
                        "start": 37,
                        "end": 39
                    },
                    "right": {
                        "kind": 81921,
                        "value": "x6",
                        "autofix": 0,
                        "flags": 768,
                        "start": 39,
                        "end": 42
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 42
                },
                "operatorToken": {
                    "kind": 33339,
                    "autofix": 0,
                    "flags": 0,
                    "start": 42,
                    "end": 45
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 81921,
                        "value": "x7",
                        "autofix": 0,
                        "flags": 768,
                        "start": 45,
                        "end": 48
                    },
                    "operatorToken": {
                        "kind": 33594,
                        "autofix": 0,
                        "flags": 0,
                        "start": 48,
                        "end": 51
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 198,
                            "left": {
                                "kind": 81921,
                                "value": "x8",
                                "autofix": 0,
                                "flags": 768,
                                "start": 51,
                                "end": 54
                            },
                            "operatorToken": {
                                "kind": 34622,
                                "autofix": 0,
                                "flags": 0,
                                "start": 54,
                                "end": 57
                            },
                            "right": {
                                "kind": 81921,
                                "value": "x9",
                                "autofix": 0,
                                "flags": 768,
                                "start": 57,
                                "end": 60
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 54,
                            "end": 60
                        },
                        "operatorToken": {
                            "kind": 33864,
                            "autofix": 0,
                            "flags": 0,
                            "start": 60,
                            "end": 62
                        },
                        "right": {
                            "kind": 198,
                            "left": {
                                "kind": 81921,
                                "value": "x10",
                                "autofix": 0,
                                "flags": 768,
                                "start": 62,
                                "end": 66
                            },
                            "operatorToken": {
                                "kind": 35897,
                                "autofix": 0,
                                "flags": 0,
                                "start": 66,
                                "end": 69
                            },
                            "right": {
                                "kind": 81921,
                                "value": "x",
                                "autofix": 0,
                                "flags": 768,
                                "start": 69,
                                "end": 71
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 66,
                            "end": 71
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 54,
                        "end": 71
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 48,
                    "end": 71
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 71
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 71
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 4259885,
                    "autofix": 0,
                    "flags": 0,
                    "start": 71,
                    "end": 79
                },
                "expression": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 79,
                    "end": 81
                },
                "autofix": 0,
                "flags": 256,
                "start": 71,
                "end": 81
            },
            "autofix": 0,
            "flags": 128,
            "start": 71,
            "end": 82
        }
    ],
    "isModule": false,
    "text": "x0 / x1 & x2 << x3 ^ x4 instanceof x5 + x6 || x7 && x8 == x9 | x10 ** x\n\ntypeof x;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 82
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

