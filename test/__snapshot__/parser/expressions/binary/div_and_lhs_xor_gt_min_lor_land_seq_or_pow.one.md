# Kataw parser test case

## Input

`````js
x0 / x1 & x2 << x3 ^ x4 > x5 - x6 || x7 && x8 === x9 | x10 ** x
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
                            "kind": 34883,
                            "autofix": 0,
                            "flags": 0,
                            "start": 23,
                            "end": 25
                        },
                        "right": {
                            "kind": 198,
                            "left": {
                                "kind": 81921,
                                "value": "x5",
                                "autofix": 0,
                                "flags": 768,
                                "start": 25,
                                "end": 28
                            },
                            "operatorToken": {
                                "kind": 35379,
                                "autofix": 0,
                                "flags": 0,
                                "start": 28,
                                "end": 30
                            },
                            "right": {
                                "kind": 81921,
                                "value": "x6",
                                "autofix": 0,
                                "flags": 768,
                                "start": 30,
                                "end": 33
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 28,
                            "end": 33
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 23,
                        "end": 33
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 33
                },
                "operatorToken": {
                    "kind": 33339,
                    "autofix": 0,
                    "flags": 0,
                    "start": 33,
                    "end": 36
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 81921,
                        "value": "x7",
                        "autofix": 0,
                        "flags": 768,
                        "start": 36,
                        "end": 39
                    },
                    "operatorToken": {
                        "kind": 33594,
                        "autofix": 0,
                        "flags": 0,
                        "start": 39,
                        "end": 42
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
                                "start": 42,
                                "end": 45
                            },
                            "operatorToken": {
                                "kind": 34620,
                                "autofix": 0,
                                "flags": 0,
                                "start": 45,
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
                            "start": 45,
                            "end": 52
                        },
                        "operatorToken": {
                            "kind": 33864,
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
                                "kind": 35897,
                                "autofix": 0,
                                "flags": 0,
                                "start": 58,
                                "end": 61
                            },
                            "right": {
                                "kind": 81921,
                                "value": "x",
                                "autofix": 0,
                                "flags": 768,
                                "start": 61,
                                "end": 63
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 58,
                            "end": 63
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 45,
                        "end": 63
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 39,
                    "end": 63
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 63
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 63
        }
    ],
    "isModule": false,
    "text": "x0 / x1 & x2 << x3 ^ x4 > x5 - x6 || x7 && x8 === x9 | x10 ** x",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 63
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

