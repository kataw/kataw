# Kataw parser test case

## Input

`````js
([...[][x]] = x);

(x, [...[][x]] = x);
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
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 223,
                                    "argument": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 6,
                                                "end": 6
                                            },
                                            "flags": 256,
                                            "start": 5,
                                            "end": 7
                                        },
                                        "expression": {
                                            "kind": 81921,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 8,
                                            "end": 9
                                        },
                                        "flags": 256,
                                        "start": 5,
                                        "end": 10
                                    },
                                    "flags": 256,
                                    "start": 2,
                                    "end": 10
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 2,
                            "end": 10
                        },
                        "flags": 256,
                        "start": 1,
                        "end": 11
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 11,
                        "end": 13
                    },
                    "right": {
                        "kind": 81921,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 13,
                        "end": 15
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 15
                },
                "flags": 256,
                "start": 0,
                "end": 16
            },
            "flags": 128,
            "start": 0,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 81921,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 20,
                            "end": 21
                        },
                        {
                            "kind": 125,
                            "left": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 223,
                                            "argument": {
                                                "kind": 130,
                                                "member": {
                                                    "kind": 119,
                                                    "elementList": {
                                                        "kind": 270,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "flags": 256,
                                                        "start": 28,
                                                        "end": 28
                                                    },
                                                    "flags": 256,
                                                    "start": 27,
                                                    "end": 29
                                                },
                                                "expression": {
                                                    "kind": 81921,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 768,
                                                    "start": 30,
                                                    "end": 31
                                                },
                                                "flags": 256,
                                                "start": 27,
                                                "end": 32
                                            },
                                            "flags": 256,
                                            "start": 24,
                                            "end": 32
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 24,
                                    "end": 32
                                },
                                "flags": 256,
                                "start": 22,
                                "end": 33
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 768,
                                "start": 33,
                                "end": 35
                            },
                            "right": {
                                "kind": 81921,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 35,
                                "end": 37
                            },
                            "flags": 256,
                            "start": 22,
                            "end": 37
                        }
                    ],
                    "flags": 256,
                    "start": 17,
                    "end": 38
                },
                "flags": 256,
                "start": 17,
                "end": 38
            },
            "flags": 128,
            "start": 17,
            "end": 39
        }
    ],
    "isModule": false,
    "text": "([...[][x]] = x);\n\n(x, [...[][x]] = x);",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

