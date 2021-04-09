# Kataw parser test case

## Input

`````js
x0 - x1 != x2 | x3 ** x4 % x5 ^ x6 || x7 && x8 >= x9 & x10 >>> x
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
                            "kind": 34623,
                            "autofix": 0,
                            "flags": 0,
                            "start": 7,
                            "end": 10
                        },
                        "right": {
                            "kind": 81921,
                            "value": "x2",
                            "autofix": 0,
                            "flags": 768,
                            "start": 10,
                            "end": 13
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 0,
                        "end": 13
                    },
                    "operatorToken": {
                        "kind": 33864,
                        "autofix": 0,
                        "flags": 0,
                        "start": 13,
                        "end": 15
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
                                    "start": 15,
                                    "end": 18
                                },
                                "operatorToken": {
                                    "kind": 35897,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 18,
                                    "end": 21
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "x4",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 21,
                                    "end": 24
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 18,
                                "end": 24
                            },
                            "operatorToken": {
                                "kind": 35639,
                                "autofix": 0,
                                "flags": 0,
                                "start": 24,
                                "end": 26
                            },
                            "right": {
                                "kind": 81921,
                                "value": "x5",
                                "autofix": 0,
                                "flags": 768,
                                "start": 26,
                                "end": 29
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 18,
                            "end": 29
                        },
                        "operatorToken": {
                            "kind": 34121,
                            "autofix": 0,
                            "flags": 0,
                            "start": 29,
                            "end": 31
                        },
                        "right": {
                            "kind": 81921,
                            "value": "x6",
                            "autofix": 0,
                            "flags": 768,
                            "start": 31,
                            "end": 34
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 18,
                        "end": 34
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 34
                },
                "operatorToken": {
                    "kind": 33339,
                    "autofix": 0,
                    "flags": 0,
                    "start": 34,
                    "end": 37
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 81921,
                        "value": "x7",
                        "autofix": 0,
                        "flags": 768,
                        "start": 37,
                        "end": 40
                    },
                    "operatorToken": {
                        "kind": 33594,
                        "autofix": 0,
                        "flags": 0,
                        "start": 40,
                        "end": 43
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
                                "start": 43,
                                "end": 46
                            },
                            "operatorToken": {
                                "kind": 34881,
                                "autofix": 0,
                                "flags": 0,
                                "start": 46,
                                "end": 49
                            },
                            "right": {
                                "kind": 81921,
                                "value": "x9",
                                "autofix": 0,
                                "flags": 768,
                                "start": 49,
                                "end": 52
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 46,
                            "end": 52
                        },
                        "operatorToken": {
                            "kind": 34375,
                            "autofix": 0,
                            "flags": 0,
                            "start": 52,
                            "end": 54
                        },
                        "right": {
                            "kind": 198,
                            "left": {
                                "kind": 81921,
                                "value": "x10",
                                "autofix": 0,
                                "flags": 768,
                                "start": 54,
                                "end": 58
                            },
                            "operatorToken": {
                                "kind": 35142,
                                "autofix": 0,
                                "flags": 0,
                                "start": 58,
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
                            "start": 58,
                            "end": 64
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 46,
                        "end": 64
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 40,
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
        }
    ],
    "isModule": false,
    "text": "x0 - x1 != x2 | x3 ** x4 % x5 ^ x6 || x7 && x8 >= x9 & x10 >>> x",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 64
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

