# Kataw parser test case

## Input

`````js
(x + y) >= z;
(x + y) <= z;
(x + y) != z;
(x + y) == z;
(x + y) == z;
(x) / y;
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
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 1,
                            "end": 2
                        },
                        "operatorToken": {
                            "kind": 34098,
                            "flags": 64,
                            "start": 2,
                            "end": 4
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 4,
                            "end": 6
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 6
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 7
                },
                "operatorToken": {
                    "kind": 34881,
                    "flags": 64,
                    "start": 7,
                    "end": 10
                },
                "right": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "start": 10,
                    "end": 12
                },
                "flags": 32,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 15,
                            "end": 16
                        },
                        "operatorToken": {
                            "kind": 34098,
                            "flags": 64,
                            "start": 16,
                            "end": 18
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 18,
                            "end": 20
                        },
                        "flags": 32,
                        "start": 13,
                        "end": 20
                    },
                    "flags": 32,
                    "start": 13,
                    "end": 21
                },
                "operatorToken": {
                    "kind": 34880,
                    "flags": 64,
                    "start": 21,
                    "end": 24
                },
                "right": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "start": 24,
                    "end": 26
                },
                "flags": 32,
                "start": 13,
                "end": 26
            },
            "flags": 16,
            "start": 13,
            "end": 27
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 29,
                            "end": 30
                        },
                        "operatorToken": {
                            "kind": 34098,
                            "flags": 64,
                            "start": 30,
                            "end": 32
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 32,
                            "end": 34
                        },
                        "flags": 32,
                        "start": 27,
                        "end": 34
                    },
                    "flags": 32,
                    "start": 27,
                    "end": 35
                },
                "operatorToken": {
                    "kind": 34623,
                    "flags": 64,
                    "start": 35,
                    "end": 38
                },
                "right": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "start": 38,
                    "end": 40
                },
                "flags": 32,
                "start": 27,
                "end": 40
            },
            "flags": 16,
            "start": 27,
            "end": 41
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 43,
                            "end": 44
                        },
                        "operatorToken": {
                            "kind": 34098,
                            "flags": 64,
                            "start": 44,
                            "end": 46
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 46,
                            "end": 48
                        },
                        "flags": 32,
                        "start": 41,
                        "end": 48
                    },
                    "flags": 32,
                    "start": 41,
                    "end": 49
                },
                "operatorToken": {
                    "kind": 34622,
                    "flags": 64,
                    "start": 49,
                    "end": 52
                },
                "right": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "start": 52,
                    "end": 54
                },
                "flags": 32,
                "start": 41,
                "end": 54
            },
            "flags": 16,
            "start": 41,
            "end": 55
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 57,
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
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 60,
                            "end": 62
                        },
                        "flags": 32,
                        "start": 55,
                        "end": 62
                    },
                    "flags": 32,
                    "start": 55,
                    "end": 63
                },
                "operatorToken": {
                    "kind": 34622,
                    "flags": 64,
                    "start": 63,
                    "end": 66
                },
                "right": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "start": 66,
                    "end": 68
                },
                "flags": 32,
                "start": 55,
                "end": 68
            },
            "flags": 16,
            "start": 55,
            "end": 69
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 71,
                        "end": 72
                    },
                    "flags": 32,
                    "start": 69,
                    "end": 73
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 64,
                    "start": 73,
                    "end": 75
                },
                "right": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 75,
                    "end": 77
                },
                "flags": 32,
                "start": 69,
                "end": 77
            },
            "flags": 16,
            "start": 69,
            "end": 78
        }
    ],
    "isModule": false,
    "text": "(x + y) >= z;\n(x + y) <= z;\n(x + y) != z;\n(x + y) == z;\n(x + y) == z;\n(x) / y;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 78
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

