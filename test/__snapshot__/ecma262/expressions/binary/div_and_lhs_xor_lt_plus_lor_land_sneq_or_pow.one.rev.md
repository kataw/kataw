# Kataw parser test case

## Input

`````js
x0 / x1 & x2 << x3 ^ x4 < x5 + x6 || x7 && x8 !== x9 | x10 ** x
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
                                    "kind": 35640,
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
                                "flags": 96,
                                "start": 0,
                                "end": 7
                            },
                            "operatorToken": {
                                "kind": 134252103,
                                "flags": 96,
                                "start": 7,
                                "end": 9
                            },
                            "right": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x2",
                                    "rawText": "x2",
                                    "flags": 96,
                                    "start": 9,
                                    "end": 12
                                },
                                "operatorToken": {
                                    "kind": 35140,
                                    "flags": 96,
                                    "start": 12,
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
                                "flags": 96,
                                "start": 12,
                                "end": 18
                            },
                            "flags": 96,
                            "start": 0,
                            "end": 18
                        },
                        "operatorToken": {
                            "kind": 134251849,
                            "flags": 96,
                            "start": 18,
                            "end": 20
                        },
                        "right": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "x4",
                                "rawText": "x4",
                                "flags": 96,
                                "start": 20,
                                "end": 23
                            },
                            "operatorToken": {
                                "kind": 536971330,
                                "flags": 96,
                                "start": 23,
                                "end": 25
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "x5",
                                "rawText": "x5",
                                "flags": 96,
                                "start": 25,
                                "end": 28
                            },
                            "flags": 96,
                            "start": 23,
                            "end": 28
                        },
                        "flags": 96,
                        "start": 0,
                        "end": 28
                    },
                    "operatorToken": {
                        "kind": 99634,
                        "flags": 96,
                        "start": 28,
                        "end": 30
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x6",
                        "rawText": "x6",
                        "flags": 96,
                        "start": 30,
                        "end": 33
                    },
                    "flags": 96,
                    "start": 0,
                    "end": 33
                },
                "operatorToken": {
                    "kind": 33339,
                    "flags": 96,
                    "start": 33,
                    "end": 36
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x7",
                        "rawText": "x7",
                        "flags": 96,
                        "start": 36,
                        "end": 39
                    },
                    "operatorToken": {
                        "kind": 33594,
                        "flags": 96,
                        "start": 39,
                        "end": 42
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
                                "start": 42,
                                "end": 45
                            },
                            "operatorToken": {
                                "kind": 34621,
                                "flags": 96,
                                "start": 45,
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
                            "flags": 96,
                            "start": 45,
                            "end": 52
                        },
                        "operatorToken": {
                            "kind": 134251592,
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
                                "kind": 35897,
                                "flags": 96,
                                "start": 58,
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
                            "start": 58,
                            "end": 63
                        },
                        "flags": 96,
                        "start": 45,
                        "end": 63
                    },
                    "flags": 96,
                    "start": 39,
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
    "source": "x0 / x1 & x2 << x3 ^ x4 < x5 + x6 || x7 && x8 !== x9 | x10 ** x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 63
}
```

### Printed

```javascript

x0 /  x1 &  x2 <<  x3 ^  x4  <  x5 +  x6 ||  x7 &&  x8 !==  x9 |  x10 **  x;
```

### Diagnostics

```javascript
✔ No errors
```

