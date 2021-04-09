# Kataw parser test case

## Input

`````js
x0 - x1 === x2 | x3 ** x4 * x5 ^ x6 || x7 && x8 >= x9 & x10 >> x

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
                                "kind": 81921,
                                "value": "x0",
                                "autofix": 0,
                                "flags": 768,
                                "start": 0,
                                "end": 2
                            },
                            "operatorToken": {
                                "kind": 35379,
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
                            "kind": 34620,
                            "autofix": 0,
                            "flags": 0,
                            "start": 7,
                            "end": 11
                        },
                        "right": {
                            "kind": 81921,
                            "value": "x2",
                            "autofix": 0,
                            "flags": 768,
                            "start": 11,
                            "end": 14
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 0,
                        "end": 14
                    },
                    "operatorToken": {
                        "kind": 33864,
                        "autofix": 0,
                        "flags": 0,
                        "start": 14,
                        "end": 16
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 81921,
                                    "value": "x3",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 16,
                                    "end": 19
                                },
                                "operatorToken": {
                                    "kind": 35897,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 19,
                                    "end": 22
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "x4",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 22,
                                    "end": 25
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 19,
                                "end": 25
                            },
                            "operatorToken": {
                                "kind": 67143222,
                                "autofix": 0,
                                "flags": 0,
                                "start": 25,
                                "end": 27
                            },
                            "right": {
                                "kind": 81921,
                                "value": "x5",
                                "autofix": 0,
                                "flags": 768,
                                "start": 27,
                                "end": 30
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 19,
                            "end": 30
                        },
                        "operatorToken": {
                            "kind": 34121,
                            "autofix": 0,
                            "flags": 0,
                            "start": 30,
                            "end": 32
                        },
                        "right": {
                            "kind": 81921,
                            "value": "x6",
                            "autofix": 0,
                            "flags": 768,
                            "start": 32,
                            "end": 35
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 19,
                        "end": 35
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 35
                },
                "operatorToken": {
                    "kind": 33339,
                    "autofix": 0,
                    "flags": 0,
                    "start": 35,
                    "end": 38
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 81921,
                        "value": "x7",
                        "autofix": 0,
                        "flags": 768,
                        "start": 38,
                        "end": 41
                    },
                    "operatorToken": {
                        "kind": 33594,
                        "autofix": 0,
                        "flags": 0,
                        "start": 41,
                        "end": 44
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
                                "start": 44,
                                "end": 47
                            },
                            "operatorToken": {
                                "kind": 34881,
                                "autofix": 0,
                                "flags": 0,
                                "start": 47,
                                "end": 50
                            },
                            "right": {
                                "kind": 81921,
                                "value": "x9",
                                "autofix": 0,
                                "flags": 768,
                                "start": 50,
                                "end": 53
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 47,
                            "end": 53
                        },
                        "operatorToken": {
                            "kind": 34375,
                            "autofix": 0,
                            "flags": 0,
                            "start": 53,
                            "end": 55
                        },
                        "right": {
                            "kind": 198,
                            "left": {
                                "kind": 81921,
                                "value": "x10",
                                "autofix": 0,
                                "flags": 768,
                                "start": 55,
                                "end": 59
                            },
                            "operatorToken": {
                                "kind": 35141,
                                "autofix": 0,
                                "flags": 0,
                                "start": 59,
                                "end": 62
                            },
                            "right": {
                                "kind": 81921,
                                "value": "x",
                                "autofix": 0,
                                "flags": 768,
                                "start": 62,
                                "end": 64
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 59,
                            "end": 64
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 47,
                        "end": 64
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 41,
                    "end": 64
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 64
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 64
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 4259885,
                    "autofix": 0,
                    "flags": 0,
                    "start": 64,
                    "end": 72
                },
                "expression": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 72,
                    "end": 74
                },
                "autofix": 0,
                "flags": 256,
                "start": 64,
                "end": 74
            },
            "autofix": 0,
            "flags": 128,
            "start": 64,
            "end": 75
        }
    ],
    "isModule": false,
    "text": "x0 - x1 === x2 | x3 ** x4 * x5 ^ x6 || x7 && x8 >= x9 & x10 >> x\n\ntypeof x;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 75
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

