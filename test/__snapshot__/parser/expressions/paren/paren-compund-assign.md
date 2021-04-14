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
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 81921,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 1,
                        "end": 2
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 3
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 3,
                    "end": 5
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 121,
                        "expression": {
                            "kind": 81921,
                            "text": "y",
                            "rawText": "y",
                            "flags": 768,
                            "start": 7,
                            "end": 8
                        },
                        "flags": 256,
                        "start": 5,
                        "end": 9
                    },
                    "operatorToken": {
                        "kind": 4130,
                        "flags": 768,
                        "start": 9,
                        "end": 12
                    },
                    "right": {
                        "kind": 81921,
                        "text": "z",
                        "rawText": "z",
                        "flags": 768,
                        "start": 12,
                        "end": 14
                    },
                    "flags": 256,
                    "start": 5,
                    "end": 14
                },
                "flags": 256,
                "start": 0,
                "end": 14
            },
            "flags": 128,
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
                        "kind": 81921,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 17,
                        "end": 18
                    },
                    "flags": 256,
                    "start": 15,
                    "end": 19
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 19,
                    "end": 21
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 121,
                        "expression": {
                            "kind": 81921,
                            "text": "y",
                            "rawText": "y",
                            "flags": 768,
                            "start": 23,
                            "end": 24
                        },
                        "flags": 256,
                        "start": 21,
                        "end": 25
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 25,
                        "end": 27
                    },
                    "right": {
                        "kind": 81921,
                        "text": "z",
                        "rawText": "z",
                        "flags": 768,
                        "start": 27,
                        "end": 29
                    },
                    "flags": 256,
                    "start": 21,
                    "end": 29
                },
                "flags": 256,
                "start": 15,
                "end": 29
            },
            "flags": 128,
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
                        "kind": 81921,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 32,
                        "end": 33
                    },
                    "flags": 256,
                    "start": 30,
                    "end": 34
                },
                "operatorToken": {
                    "kind": 4130,
                    "flags": 768,
                    "start": 34,
                    "end": 37
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 121,
                        "expression": {
                            "kind": 81921,
                            "text": "y",
                            "rawText": "y",
                            "flags": 768,
                            "start": 39,
                            "end": 40
                        },
                        "flags": 256,
                        "start": 37,
                        "end": 41
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 41,
                        "end": 43
                    },
                    "right": {
                        "kind": 81921,
                        "text": "z",
                        "rawText": "z",
                        "flags": 768,
                        "start": 43,
                        "end": 45
                    },
                    "flags": 256,
                    "start": 37,
                    "end": 45
                },
                "flags": 256,
                "start": 30,
                "end": 45
            },
            "flags": 128,
            "start": 30,
            "end": 46
        }
    ],
    "isModule": false,
    "text": "(x) = (y) += z;\n(x) = (y) = z;\n(x) += (y) = z;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 46
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

