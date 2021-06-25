# Kataw parser test case

## Input

`````js
x0 - x1 != x2 | x3 ** x4 % x5 ^ x6 || x7 && x8 >= x9 & x10 >>> x
`````

## Output

### CST

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
                                "kind": 134318643,
                                "flags": 96,
                                "start": 2,
                                "end": 4
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "x1",
                                "rawText": "x1",
                                "flags": 96,
                                "start": 4,
                                "end": 7
                            },
                            "flags": 32,
                            "start": 0,
                            "end": 7
                        },
                        "operatorToken": {
                            "kind": 34623,
                            "flags": 96,
                            "start": 7,
                            "end": 10
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "x2",
                            "rawText": "x2",
                            "flags": 96,
                            "start": 10,
                            "end": 13
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 13
                    },
                    "operatorToken": {
                        "kind": 134251592,
                        "flags": 96,
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
                                    "kind": 134299649,
                                    "text": "x3",
                                    "rawText": "x3",
                                    "flags": 96,
                                    "start": 15,
                                    "end": 18
                                },
                                "operatorToken": {
                                    "kind": 35897,
                                    "flags": 96,
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
                                "start": 18,
                                "end": 24
                            },
                            "operatorToken": {
                                "kind": 35639,
                                "flags": 96,
                                "start": 24,
                                "end": 26
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "x5",
                                "rawText": "x5",
                                "flags": 96,
                                "start": 26,
                                "end": 29
                            },
                            "flags": 32,
                            "start": 18,
                            "end": 29
                        },
                        "operatorToken": {
                            "kind": 134251849,
                            "flags": 96,
                            "start": 29,
                            "end": 31
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "x6",
                            "rawText": "x6",
                            "flags": 96,
                            "start": 31,
                            "end": 34
                        },
                        "flags": 32,
                        "start": 18,
                        "end": 34
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 34
                },
                "operatorToken": {
                    "kind": 33339,
                    "flags": 96,
                    "start": 34,
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
                        "kind": 33594,
                        "flags": 96,
                        "start": 40,
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
                                "flags": 96,
                                "start": 43,
                                "end": 46
                            },
                            "operatorToken": {
                                "kind": 34881,
                                "flags": 96,
                                "start": 46,
                                "end": 49
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "x9",
                                "rawText": "x9",
                                "flags": 96,
                                "start": 49,
                                "end": 52
                            },
                            "flags": 32,
                            "start": 46,
                            "end": 52
                        },
                        "operatorToken": {
                            "kind": 134252103,
                            "flags": 96,
                            "start": 52,
                            "end": 54
                        },
                        "right": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "x10",
                                "rawText": "x10",
                                "flags": 96,
                                "start": 54,
                                "end": 58
                            },
                            "operatorToken": {
                                "kind": 35142,
                                "flags": 96,
                                "start": 58,
                                "end": 62
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 62,
                                "end": 64
                            },
                            "flags": 32,
                            "start": 58,
                            "end": 64
                        },
                        "flags": 32,
                        "start": 46,
                        "end": 64
                    },
                    "flags": 32,
                    "start": 40,
                    "end": 64
                },
                "flags": 32,
                "start": 0,
                "end": 64
            },
            "flags": 16,
            "start": 0,
            "end": 64
        }
    ],
    "isModule": false,
    "source": "x0 - x1 != x2 | x3 ** x4 % x5 ^ x6 || x7 && x8 >= x9 & x10 >>> x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 64
}
```

### Printed

```javascript

x0 - x1 != x2 | x3 ** x4 % x5 ^ x6 || x7 && x8 >= x9 & x10 >>> x;
```

### Diagnostics

```javascript
✔ No errors
```

