# Kataw parser test case

## Input

`````js
x0 * x1 & x2 >> x3 ^ x4 >= x5 + x6 || x7 && x8 !== x9 | x10 ** x
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
                                    "kind": 67143222,
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
                                    "kind": 35141,
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
                                "kind": 34881,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 26
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "x5",
                                "rawText": "x5",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 26,
                                "end": 29
                            },
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 29
                        },
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 29
                    },
                    "operatorToken": {
                        "kind": 99634,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 29,
                        "end": 31
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x6",
                        "rawText": "x6",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 31,
                        "end": 34
                    },
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 34
                },
                "operatorToken": {
                    "kind": 33339,
                    "flags": 96,
                    "transformFlags": 0,
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
                        "transformFlags": 0,
                        "start": 37,
                        "end": 40
                    },
                    "operatorToken": {
                        "kind": 33594,
                        "flags": 96,
                        "transformFlags": 0,
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
                                "transformFlags": 0,
                                "start": 43,
                                "end": 46
                            },
                            "operatorToken": {
                                "kind": 34621,
                                "flags": 96,
                                "transformFlags": 16,
                                "start": 46,
                                "end": 50
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "x9",
                                "rawText": "x9",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 50,
                                "end": 53
                            },
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 46,
                            "end": 53
                        },
                        "operatorToken": {
                            "kind": 134251592,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 53,
                            "end": 55
                        },
                        "right": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "x10",
                                "rawText": "x10",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 55,
                                "end": 59
                            },
                            "operatorToken": {
                                "kind": 35897,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 59,
                                "end": 62
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 62,
                                "end": 64
                            },
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 59,
                            "end": 64
                        },
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 46,
                        "end": 64
                    },
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 40,
                    "end": 64
                },
                "flags": 96,
                "transformFlags": 0,
                "start": 0,
                "end": 64
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 64
        }
    ],
    "isModule": false,
    "source": "x0 * x1 & x2 >> x3 ^ x4 >= x5 + x6 || x7 && x8 !== x9 | x10 ** x",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 64
}
```

### Printed

```javascript

x0 * x1 & x2 >> x3 ^ x4 >= x5 + x6 || x7 && x8 !== x9 | x10 ** x;
```

### Diagnostics

```javascript
✔ No errors
```

