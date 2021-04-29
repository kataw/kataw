# Kataw parser test case

## Input

`````js
x0 + x1 === x2 | x3 ** x4 * x5 ^ x6 || x7 && x8 instanceof x9 & x10 << x
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
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
                            "kind": 134299649,
                            "text": "x0",
                            "rawText": "x0",
                            "flags": 96,
                            "start": 0,
                            "end": 2
                        },
                        "operatorToken": {
                            "kind": 34098,
                            "flags": 64,
                            "start": 2,
                            "end": 4
                        },
                        "right": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "x1",
                                "rawText": "x1",
                                "flags": 96,
                                "start": 4,
                                "end": 7
                            },
                            "operatorToken": {
                                "kind": 34620,
                                "flags": 64,
                                "start": 7,
                                "end": 11
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "x2",
                                "rawText": "x2",
                                "flags": 96,
                                "start": 11,
                                "end": 14
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 14
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 14
                    },
                    "operatorToken": {
                        "kind": 134251592,
                        "flags": 64,
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
                                    "kind": 134299649,
                                    "text": "x3",
                                    "rawText": "x3",
                                    "flags": 96,
                                    "start": 16,
                                    "end": 19
                                },
                                "operatorToken": {
                                    "kind": 35897,
                                    "flags": 64,
                                    "start": 19,
                                    "end": 22
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "x4",
                                    "rawText": "x4",
                                    "flags": 96,
                                    "start": 22,
                                    "end": 25
                                },
                                "flags": 32,
                                "start": 19,
                                "end": 25
                            },
                            "operatorToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 25,
                                "end": 27
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "x5",
                                "rawText": "x5",
                                "flags": 96,
                                "start": 27,
                                "end": 30
                            },
                            "flags": 32,
                            "start": 19,
                            "end": 30
                        },
                        "operatorToken": {
                            "kind": 134251849,
                            "flags": 64,
                            "start": 30,
                            "end": 32
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "x6",
                            "rawText": "x6",
                            "flags": 96,
                            "start": 32,
                            "end": 35
                        },
                        "flags": 32,
                        "start": 19,
                        "end": 35
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 35
                },
                "operatorToken": {
                    "kind": 33339,
                    "flags": 64,
                    "start": 35,
                    "end": 38
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x7",
                        "rawText": "x7",
                        "flags": 96,
                        "start": 38,
                        "end": 41
                    },
                    "operatorToken": {
                        "kind": 33594,
                        "flags": 64,
                        "start": 41,
                        "end": 44
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "x8",
                                "rawText": "x8",
                                "flags": 96,
                                "start": 44,
                                "end": 47
                            },
                            "operatorToken": {
                                "kind": 4229173,
                                "flags": 64,
                                "start": 47,
                                "end": 58
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "x9",
                                "rawText": "x9",
                                "flags": 96,
                                "start": 58,
                                "end": 61
                            },
                            "flags": 32,
                            "start": 47,
                            "end": 61
                        },
                        "operatorToken": {
                            "kind": 34375,
                            "flags": 64,
                            "start": 61,
                            "end": 63
                        },
                        "right": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "x10",
                                "rawText": "x10",
                                "flags": 96,
                                "start": 63,
                                "end": 67
                            },
                            "operatorToken": {
                                "kind": 35140,
                                "flags": 64,
                                "start": 67,
                                "end": 70
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 70,
                                "end": 72
                            },
                            "flags": 32,
                            "start": 67,
                            "end": 72
                        },
                        "flags": 32,
                        "start": 47,
                        "end": 72
                    },
                    "flags": 32,
                    "start": 41,
                    "end": 72
                },
                "flags": 32,
                "start": 0,
                "end": 72
            },
            "flags": 16,
            "start": 0,
            "end": 72
        }
    ],
    "isModule": false,
    "source": "x0 + x1 === x2 | x3 ** x4 * x5 ^ x6 || x7 && x8 instanceof x9 & x10 << x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 72
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

