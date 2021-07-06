# Kataw parser test case

## Input

`````js
x0 / x1 & x2 << x3 ^ x4 instanceof x5 + x6 || x7 && x8 == x9 | x10 ** x

typeof x;
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
                                    "transformFlags": 0,
                                    "start": 0,
                                    "end": 2
                                },
                                "operatorToken": {
                                    "kind": 35640,
                                    "flags": 96,
                                    "transformFlags": 32,
                                    "start": 2,
                                    "end": 4
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "x1",
                                    "rawText": "x1",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 4,
                                    "end": 7
                                },
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 0,
                                "end": 7
                            },
                            "operatorToken": {
                                "kind": 134252103,
                                "flags": 96,
                                "transformFlags": 0,
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
                                    "transformFlags": 0,
                                    "start": 9,
                                    "end": 12
                                },
                                "operatorToken": {
                                    "kind": 35140,
                                    "flags": 96,
                                    "transformFlags": 64,
                                    "start": 12,
                                    "end": 15
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "x3",
                                    "rawText": "x3",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 18
                                },
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 18
                            },
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 18
                        },
                        "operatorToken": {
                            "kind": 134251849,
                            "flags": 96,
                            "transformFlags": 0,
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
                                "transformFlags": 0,
                                "start": 20,
                                "end": 23
                            },
                            "operatorToken": {
                                "kind": 4229173,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 34
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "x5",
                                "rawText": "x5",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 37
                            },
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 37
                        },
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 37
                    },
                    "operatorToken": {
                        "kind": 99634,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 37,
                        "end": 39
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x6",
                        "rawText": "x6",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 39,
                        "end": 42
                    },
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 42
                },
                "operatorToken": {
                    "kind": 33339,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 42,
                    "end": 45
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x7",
                        "rawText": "x7",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 45,
                        "end": 48
                    },
                    "operatorToken": {
                        "kind": 33594,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 48,
                        "end": 51
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
                                "transformFlags": 0,
                                "start": 51,
                                "end": 54
                            },
                            "operatorToken": {
                                "kind": 34622,
                                "flags": 96,
                                "transformFlags": 16,
                                "start": 54,
                                "end": 57
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "x9",
                                "rawText": "x9",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 57,
                                "end": 60
                            },
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 54,
                            "end": 60
                        },
                        "operatorToken": {
                            "kind": 134251592,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 60,
                            "end": 62
                        },
                        "right": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "x10",
                                "rawText": "x10",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 62,
                                "end": 66
                            },
                            "operatorToken": {
                                "kind": 35897,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 66,
                                "end": 69
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 69,
                                "end": 71
                            },
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 66,
                            "end": 71
                        },
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 54,
                        "end": 71
                    },
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 48,
                    "end": 71
                },
                "flags": 96,
                "transformFlags": 0,
                "start": 0,
                "end": 71
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 71
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 138477613,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 71,
                    "end": 79
                },
                "operand": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 79,
                    "end": 81
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 71,
                "end": 81
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 71,
            "end": 82
        }
    ],
    "isModule": false,
    "source": "x0 / x1 & x2 << x3 ^ x4 instanceof x5 + x6 || x7 && x8 == x9 | x10 ** x\n\ntypeof x;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 82
}
```

### Printed

```javascript

x0 / x1 & x2 << x3 ^ x4 instanceof x5 + x6 || x7 && x8 == x9 | x10 ** x;
typeof x;

```

### Diagnostics

```javascript
✔ No errors
```

