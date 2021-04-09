# Kataw parser test case

## Input

`````js
x0 / x1 & x2 << x3 ^ x4 >= x5 + x6 || x7 && x8 === x9 | x10 ** x
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
                                "kind": 34881,
                                "autofix": 0,
                                "flags": 0,
                                "start": 23,
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
                            "start": 23,
                            "end": 29
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 0,
                        "end": 29
                    },
                    "operatorToken": {
                        "kind": 34098,
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
                                "kind": 34620,
                                "autofix": 0,
                                "flags": 0,
                                "start": 46,
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
                            "start": 46,
                            "end": 53
                        },
                        "operatorToken": {
                            "kind": 33864,
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
                                "kind": 35897,
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
    "text": "x0 / x1 & x2 << x3 ^ x4 >= x5 + x6 || x7 && x8 === x9 | x10 ** x",
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

