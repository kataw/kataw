# Kataw parser test case

## Input

`````js
x0 << x1 & x2 in x3 && x4 || x5 ^ x6 * x7 ** x8 | x9 != x10 - x

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
                                "kind": 35140,
                                "autofix": 0,
                                "flags": 0,
                                "start": 2,
                                "end": 5
                            },
                            "right": {
                                "kind": 81921,
                                "value": "x1",
                                "autofix": 0,
                                "flags": 768,
                                "start": 5,
                                "end": 8
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 0,
                            "end": 8
                        },
                        "operatorToken": {
                            "kind": 34375,
                            "autofix": 0,
                            "flags": 0,
                            "start": 8,
                            "end": 10
                        },
                        "right": {
                            "kind": 198,
                            "left": {
                                "kind": 81921,
                                "value": "x2",
                                "autofix": 0,
                                "flags": 768,
                                "start": 10,
                                "end": 13
                            },
                            "operatorToken": {
                                "kind": 21006388,
                                "autofix": 0,
                                "flags": 0,
                                "start": 13,
                                "end": 16
                            },
                            "right": {
                                "kind": 81921,
                                "value": "x3",
                                "autofix": 0,
                                "flags": 768,
                                "start": 16,
                                "end": 19
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 13,
                            "end": 19
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 0,
                        "end": 19
                    },
                    "operatorToken": {
                        "kind": 33594,
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
                    "start": 0,
                    "end": 25
                },
                "operatorToken": {
                    "kind": 33339,
                    "autofix": 0,
                    "flags": 0,
                    "start": 25,
                    "end": 28
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 81921,
                            "value": "x5",
                            "autofix": 0,
                            "flags": 768,
                            "start": 28,
                            "end": 31
                        },
                        "operatorToken": {
                            "kind": 34121,
                            "autofix": 0,
                            "flags": 0,
                            "start": 31,
                            "end": 33
                        },
                        "right": {
                            "kind": 198,
                            "left": {
                                "kind": 81921,
                                "value": "x6",
                                "autofix": 0,
                                "flags": 768,
                                "start": 33,
                                "end": 36
                            },
                            "operatorToken": {
                                "kind": 67143222,
                                "autofix": 0,
                                "flags": 0,
                                "start": 36,
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
                                    "kind": 35897,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 41,
                                    "end": 44
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "x8",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 44,
                                    "end": 47
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 41,
                                "end": 47
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 36,
                            "end": 47
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 31,
                        "end": 47
                    },
                    "operatorToken": {
                        "kind": 33864,
                        "autofix": 0,
                        "flags": 0,
                        "start": 47,
                        "end": 49
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 81921,
                            "value": "x9",
                            "autofix": 0,
                            "flags": 768,
                            "start": 49,
                            "end": 52
                        },
                        "operatorToken": {
                            "kind": 34623,
                            "autofix": 0,
                            "flags": 0,
                            "start": 52,
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
                                "kind": 35379,
                                "autofix": 0,
                                "flags": 0,
                                "start": 59,
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
                            "start": 59,
                            "end": 63
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 52,
                        "end": 63
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 31,
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
    "text": "x0 << x1 & x2 in x3 && x4 || x5 ^ x6 * x7 ** x8 | x9 != x10 - x\n",
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

