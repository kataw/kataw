# Kataw parser test case

## Input

`````js
x0 << x1 & x2 < x3 && x4 || x5 ^ x6 / x7 ** x8 | x9 == x10 + x
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
                                "kind": 35140,
                                "flags": 64,
                                "start": 2,
                                "end": 5
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "x1",
                                "rawText": "x1",
                                "flags": 96,
                                "start": 5,
                                "end": 8
                            },
                            "flags": 32,
                            "start": 0,
                            "end": 8
                        },
                        "operatorToken": {
                            "kind": 34375,
                            "flags": 64,
                            "start": 8,
                            "end": 10
                        },
                        "right": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "x2",
                                "rawText": "x2",
                                "flags": 96,
                                "start": 10,
                                "end": 13
                            },
                            "operatorToken": {
                                "kind": 536971330,
                                "flags": 64,
                                "start": 13,
                                "end": 15
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "x3",
                                "rawText": "x3",
                                "flags": 96,
                                "start": 15,
                                "end": 18
                            },
                            "flags": 32,
                            "start": 13,
                            "end": 18
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 18
                    },
                    "operatorToken": {
                        "kind": 33594,
                        "flags": 64,
                        "start": 18,
                        "end": 21
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x4",
                        "rawText": "x4",
                        "flags": 96,
                        "start": 21,
                        "end": 24
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 24
                },
                "operatorToken": {
                    "kind": 33339,
                    "flags": 64,
                    "start": 24,
                    "end": 27
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "x5",
                            "rawText": "x5",
                            "flags": 96,
                            "start": 27,
                            "end": 30
                        },
                        "operatorToken": {
                            "kind": 134251849,
                            "flags": 64,
                            "start": 30,
                            "end": 32
                        },
                        "right": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "x6",
                                "rawText": "x6",
                                "flags": 96,
                                "start": 32,
                                "end": 35
                            },
                            "operatorToken": {
                                "kind": 35640,
                                "flags": 64,
                                "start": 35,
                                "end": 37
                            },
                            "right": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x7",
                                    "rawText": "x7",
                                    "flags": 96,
                                    "start": 37,
                                    "end": 40
                                },
                                "operatorToken": {
                                    "kind": 35897,
                                    "flags": 64,
                                    "start": 40,
                                    "end": 43
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "x8",
                                    "rawText": "x8",
                                    "flags": 96,
                                    "start": 43,
                                    "end": 46
                                },
                                "flags": 32,
                                "start": 40,
                                "end": 46
                            },
                            "flags": 32,
                            "start": 35,
                            "end": 46
                        },
                        "flags": 32,
                        "start": 30,
                        "end": 46
                    },
                    "operatorToken": {
                        "kind": 134251592,
                        "flags": 64,
                        "start": 46,
                        "end": 48
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "x9",
                                "rawText": "x9",
                                "flags": 96,
                                "start": 48,
                                "end": 51
                            },
                            "operatorToken": {
                                "kind": 34622,
                                "flags": 64,
                                "start": 51,
                                "end": 54
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "x10",
                                "rawText": "x10",
                                "flags": 96,
                                "start": 54,
                                "end": 58
                            },
                            "flags": 32,
                            "start": 51,
                            "end": 58
                        },
                        "operatorToken": {
                            "kind": 34098,
                            "flags": 64,
                            "start": 58,
                            "end": 60
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 60,
                            "end": 62
                        },
                        "flags": 32,
                        "start": 51,
                        "end": 62
                    },
                    "flags": 32,
                    "start": 30,
                    "end": 62
                },
                "flags": 32,
                "start": 0,
                "end": 62
            },
            "flags": 16,
            "start": 0,
            "end": 62
        }
    ],
    "isModule": false,
    "text": "x0 << x1 & x2 < x3 && x4 || x5 ^ x6 / x7 ** x8 | x9 == x10 + x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 62
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

