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
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 2
                        },
                        "operatorToken": {
                            "kind": 99634,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 4
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 6
                        },
                        "flags": 96,
                        "transformFlags": 1024,
                        "start": 0,
                        "end": 6
                    },
                    "flags": 0,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 7
                },
                "operatorToken": {
                    "kind": 34881,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 10
                },
                "right": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 12
                },
                "flags": 32,
                "transformFlags": 1024,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 15,
                            "end": 16
                        },
                        "operatorToken": {
                            "kind": 99634,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 18
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 20
                        },
                        "flags": 96,
                        "transformFlags": 1024,
                        "start": 13,
                        "end": 20
                    },
                    "flags": 13,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 21
                },
                "operatorToken": {
                    "kind": 34880,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 24
                },
                "right": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 26
                },
                "flags": 45,
                "transformFlags": 1024,
                "start": 13,
                "end": 26
            },
            "flags": 16,
            "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 29,
                            "end": 30
                        },
                        "operatorToken": {
                            "kind": 99634,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 32
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 34
                        },
                        "flags": 96,
                        "transformFlags": 1024,
                        "start": 27,
                        "end": 34
                    },
                    "flags": 27,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 35
                },
                "operatorToken": {
                    "kind": 34623,
                    "flags": 96,
                    "transformFlags": 16,
                    "start": 35,
                    "end": 38
                },
                "right": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 38,
                    "end": 40
                },
                "flags": 59,
                "transformFlags": 1024,
                "start": 27,
                "end": 40
            },
            "flags": 16,
            "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 43,
                            "end": 44
                        },
                        "operatorToken": {
                            "kind": 99634,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 44,
                            "end": 46
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 46,
                            "end": 48
                        },
                        "flags": 96,
                        "transformFlags": 1024,
                        "start": 41,
                        "end": 48
                    },
                    "flags": 41,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 49
                },
                "operatorToken": {
                    "kind": 34622,
                    "flags": 96,
                    "transformFlags": 16,
                    "start": 49,
                    "end": 52
                },
                "right": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 52,
                    "end": 54
                },
                "flags": 41,
                "transformFlags": 1024,
                "start": 41,
                "end": 54
            },
            "flags": 16,
            "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 57,
                            "end": 58
                        },
                        "operatorToken": {
                            "kind": 99634,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 58,
                            "end": 60
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 60,
                            "end": 62
                        },
                        "flags": 96,
                        "transformFlags": 1024,
                        "start": 55,
                        "end": 62
                    },
                    "flags": 55,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 63
                },
                "operatorToken": {
                    "kind": 34622,
                    "flags": 96,
                    "transformFlags": 16,
                    "start": 63,
                    "end": 66
                },
                "right": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 66,
                    "end": 68
                },
                "flags": 55,
                "transformFlags": 1024,
                "start": 55,
                "end": 68
            },
            "flags": 16,
            "transformFlags": 0,
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
                        "transformFlags": 0,
                        "start": 71,
                        "end": 72
                    },
                    "flags": 69,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 73
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 96,
                    "transformFlags": 32,
                    "start": 73,
                    "end": 75
                },
                "right": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 75,
                    "end": 77
                },
                "flags": 101,
                "transformFlags": 1024,
                "start": 69,
                "end": 77
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 69,
            "end": 78
        }
    ],
    "isModule": false,
    "source": "(x + y) >= z;\n(x + y) <= z;\n(x + y) != z;\n(x + y) == z;\n(x + y) == z;\n(x) / y;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 78
}
```

### Printed

```javascript
(x + y) >= z;
(x + y) <= z;

(x + y) != z;

(x + y) == z;

(x + y) == z;

(x) / y;

```

### Diagnostics

```javascript
✔ No errors
```

