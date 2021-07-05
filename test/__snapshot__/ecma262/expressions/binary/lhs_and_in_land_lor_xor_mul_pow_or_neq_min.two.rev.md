# Kataw parser test case

## Input

`````js
x0 << x1 & x2 in x3 && x4 || x5 ^ x6 * x7 ** x8 | x9 != x10 - x

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
                                "kind": 35140,
                                "flags": 96,
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
                            "flags": 96,
                            "start": 0,
                            "end": 8
                        },
                        "operatorToken": {
                            "kind": 134252103,
                            "flags": 96,
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
                                "kind": 21006388,
                                "flags": 96,
                                "start": 13,
                                "end": 16
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "x3",
                                "rawText": "x3",
                                "flags": 96,
                                "start": 16,
                                "end": 19
                            },
                            "flags": 96,
                            "start": 13,
                            "end": 19
                        },
                        "flags": 96,
                        "start": 0,
                        "end": 19
                    },
                    "operatorToken": {
                        "kind": 33594,
                        "flags": 96,
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
                    "flags": 96,
                    "start": 0,
                    "end": 25
                },
                "operatorToken": {
                    "kind": 33339,
                    "flags": 96,
                    "start": 25,
                    "end": 28
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
                            "start": 28,
                            "end": 31
                        },
                        "operatorToken": {
                            "kind": 134251849,
                            "flags": 96,
                            "start": 31,
                            "end": 33
                        },
                        "right": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "x6",
                                "rawText": "x6",
                                "flags": 96,
                                "start": 33,
                                "end": 36
                            },
                            "operatorToken": {
                                "kind": 67143222,
                                "flags": 96,
                                "start": 36,
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
                                    "kind": 35897,
                                    "flags": 96,
                                    "start": 41,
                                    "end": 44
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "x8",
                                    "rawText": "x8",
                                    "flags": 96,
                                    "start": 44,
                                    "end": 47
                                },
                                "flags": 96,
                                "start": 41,
                                "end": 47
                            },
                            "flags": 96,
                            "start": 36,
                            "end": 47
                        },
                        "flags": 96,
                        "start": 31,
                        "end": 47
                    },
                    "operatorToken": {
                        "kind": 134251592,
                        "flags": 96,
                        "start": 47,
                        "end": 49
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "x9",
                            "rawText": "x9",
                            "flags": 96,
                            "start": 49,
                            "end": 52
                        },
                        "operatorToken": {
                            "kind": 34623,
                            "flags": 96,
                            "start": 52,
                            "end": 55
                        },
                        "right": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "x10",
                                "rawText": "x10",
                                "flags": 96,
                                "start": 55,
                                "end": 59
                            },
                            "operatorToken": {
                                "kind": 134318643,
                                "flags": 96,
                                "start": 59,
                                "end": 61
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 61,
                                "end": 63
                            },
                            "flags": 96,
                            "start": 59,
                            "end": 63
                        },
                        "flags": 96,
                        "start": 52,
                        "end": 63
                    },
                    "flags": 96,
                    "start": 31,
                    "end": 63
                },
                "flags": 96,
                "start": 0,
                "end": 63
            },
            "flags": 16,
            "start": 0,
            "end": 63
        }
    ],
    "isModule": false,
    "source": "x0 << x1 & x2 in x3 && x4 || x5 ^ x6 * x7 ** x8 | x9 != x10 - x\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 64
}
```

### Printed

```javascript

x0 <<  x1 &  x2 in  x3 &&  x4 ||  x5 ^  x6 *  x7 **  x8 |  x9 !=  x10 -  x;
```

### Diagnostics

```javascript
✔ No errors
```

