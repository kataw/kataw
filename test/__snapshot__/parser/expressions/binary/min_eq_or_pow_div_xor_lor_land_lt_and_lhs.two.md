# Kataw parser test case

## Input

`````js
x0 - x1 == x2 | x3 ** x4 / x5 ^ x6 || x7 && x8 < x9 & x10 << x
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
                                "flags": 768,
                                "start": 0,
                                "end": 2
                            },
                            "operatorToken": {
                                "kind": 35379,
                                "flags": 2,
                                "start": 512,
                                "end": 4
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "x1",
                                "rawText": "x1",
                                "flags": 768,
                                "start": 4,
                                "end": 7
                            },
                            "flags": 256,
                            "start": 0,
                            "end": 7
                        },
                        "operatorToken": {
                            "kind": 34622,
                            "flags": 7,
                            "start": 512,
                            "end": 10
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "x2",
                            "rawText": "x2",
                            "flags": 768,
                            "start": 10,
                            "end": 13
                        },
                        "flags": 256,
                        "start": 0,
                        "end": 13
                    },
                    "operatorToken": {
                        "kind": 134251592,
                        "flags": 13,
                        "start": 512,
                        "end": 15
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
                                    "flags": 768,
                                    "start": 15,
                                    "end": 18
                                },
                                "operatorToken": {
                                    "kind": 35897,
                                    "flags": 18,
                                    "start": 512,
                                    "end": 21
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "x4",
                                    "rawText": "x4",
                                    "flags": 768,
                                    "start": 21,
                                    "end": 24
                                },
                                "flags": 256,
                                "start": 18,
                                "end": 24
                            },
                            "operatorToken": {
                                "kind": 35640,
                                "flags": 24,
                                "start": 512,
                                "end": 26
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "x5",
                                "rawText": "x5",
                                "flags": 768,
                                "start": 26,
                                "end": 29
                            },
                            "flags": 256,
                            "start": 18,
                            "end": 29
                        },
                        "operatorToken": {
                            "kind": 134251849,
                            "flags": 29,
                            "start": 512,
                            "end": 31
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "x6",
                            "rawText": "x6",
                            "flags": 768,
                            "start": 31,
                            "end": 34
                        },
                        "flags": 256,
                        "start": 18,
                        "end": 34
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 34
                },
                "operatorToken": {
                    "kind": 33339,
                    "flags": 34,
                    "start": 512,
                    "end": 37
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x7",
                        "rawText": "x7",
                        "flags": 768,
                        "start": 37,
                        "end": 40
                    },
                    "operatorToken": {
                        "kind": 33594,
                        "flags": 40,
                        "start": 512,
                        "end": 43
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "x8",
                                "rawText": "x8",
                                "flags": 768,
                                "start": 43,
                                "end": 46
                            },
                            "operatorToken": {
                                "kind": 536971330,
                                "flags": 46,
                                "start": 512,
                                "end": 48
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "x9",
                                "rawText": "x9",
                                "flags": 768,
                                "start": 48,
                                "end": 51
                            },
                            "flags": 256,
                            "start": 46,
                            "end": 51
                        },
                        "operatorToken": {
                            "kind": 34375,
                            "flags": 51,
                            "start": 512,
                            "end": 53
                        },
                        "right": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "x10",
                                "rawText": "x10",
                                "flags": 768,
                                "start": 53,
                                "end": 57
                            },
                            "operatorToken": {
                                "kind": 35140,
                                "flags": 57,
                                "start": 512,
                                "end": 60
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 60,
                                "end": 62
                            },
                            "flags": 256,
                            "start": 57,
                            "end": 62
                        },
                        "flags": 256,
                        "start": 46,
                        "end": 62
                    },
                    "flags": 256,
                    "start": 40,
                    "end": 62
                },
                "flags": 256,
                "start": 0,
                "end": 62
            },
            "flags": 128,
            "start": 0,
            "end": 62
        }
    ],
    "isModule": false,
    "text": "x0 - x1 == x2 | x3 ** x4 / x5 ^ x6 || x7 && x8 < x9 & x10 << x",
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

