# Kataw parser test case

## Input

`````js
(x) = (y) += z;
(x) = (y) = z;
(x) += (y) = z;
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
                "kind": 125,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 1,
                        "end": 2
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 3
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 3,
                    "end": 5
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 121,
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 7,
                            "end": 8
                        },
                        "flags": 32,
                        "start": 5,
                        "end": 9
                    },
                    "operatorToken": {
                        "kind": 4130,
                        "flags": 64,
                        "start": 9,
                        "end": 12
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "start": 12,
                        "end": 14
                    },
                    "flags": 32,
                    "start": 5,
                    "end": 14
                },
                "flags": 32,
                "start": 0,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 17,
                        "end": 18
                    },
                    "flags": 32,
                    "start": 15,
                    "end": 19
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 19,
                    "end": 21
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 121,
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 23,
                            "end": 24
                        },
                        "flags": 32,
                        "start": 21,
                        "end": 25
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 25,
                        "end": 27
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "start": 27,
                        "end": 29
                    },
                    "flags": 32,
                    "start": 21,
                    "end": 29
                },
                "flags": 32,
                "start": 15,
                "end": 29
            },
            "flags": 16,
            "start": 15,
            "end": 30
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 32,
                        "end": 33
                    },
                    "flags": 32,
                    "start": 30,
                    "end": 34
                },
                "operatorToken": {
                    "kind": 4130,
                    "flags": 64,
                    "start": 34,
                    "end": 37
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 121,
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 39,
                            "end": 40
                        },
                        "flags": 32,
                        "start": 37,
                        "end": 41
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 41,
                        "end": 43
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "start": 43,
                        "end": 45
                    },
                    "flags": 32,
                    "start": 37,
                    "end": 45
                },
                "flags": 32,
                "start": 30,
                "end": 45
            },
            "flags": 16,
            "start": 30,
            "end": 46
        }
    ],
    "isModule": false,
    "text": "(x) = (y) += z;\n(x) = (y) = z;\n(x) += (y) = z;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 46
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

