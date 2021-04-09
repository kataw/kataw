# Kataw parser test case

## Input

`````js
[{x:x = 1, y:y = 2}, [a = 3, b = 4, c = 5]] = {};
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
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "left": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 81921,
                                                    "value": "x",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 4,
                                                    "end": 5
                                                },
                                                "operatorToken": {
                                                    "kind": 67174402,
                                                    "autofix": 0,
                                                    "flags": 0,
                                                    "start": 2,
                                                    "end": 7
                                                },
                                                "right": {
                                                    "kind": 81921,
                                                    "value": 1,
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 7,
                                                    "end": 9
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 2,
                                                "end": 9
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "value": "x",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 2,
                                                "end": 3
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 2,
                                            "end": 9
                                        },
                                        {
                                            "kind": 219,
                                            "left": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 81921,
                                                    "value": "y",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 13,
                                                    "end": 14
                                                },
                                                "operatorToken": {
                                                    "kind": 67174402,
                                                    "autofix": 0,
                                                    "flags": 0,
                                                    "start": 10,
                                                    "end": 16
                                                },
                                                "right": {
                                                    "kind": 81921,
                                                    "value": 2,
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 16,
                                                    "end": 18
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 10,
                                                "end": 18
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "value": "y",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 10,
                                                "end": 12
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 10,
                                            "end": 18
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 2,
                                    "end": 18
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 1,
                                "end": 19
                            },
                            {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 125,
                                            "left": {
                                                "kind": 81921,
                                                "value": "a",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 22,
                                                "end": 23
                                            },
                                            "operatorToken": {
                                                "kind": 67174402,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 22,
                                                "end": 25
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "value": 3,
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 25,
                                                "end": 27
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 22,
                                            "end": 27
                                        },
                                        {
                                            "kind": 125,
                                            "left": {
                                                "kind": 81921,
                                                "value": "b",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 28,
                                                "end": 30
                                            },
                                            "operatorToken": {
                                                "kind": 67174402,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 28,
                                                "end": 32
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "value": 4,
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 32,
                                                "end": 34
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 28,
                                            "end": 34
                                        },
                                        {
                                            "kind": 125,
                                            "left": {
                                                "kind": 81921,
                                                "value": "c",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 35,
                                                "end": 37
                                            },
                                            "operatorToken": {
                                                "kind": 67174402,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 35,
                                                "end": 39
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "value": 5,
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 39,
                                                "end": 41
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 35,
                                            "end": 41
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 22,
                                    "end": 41
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 20,
                                "end": 42
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 42
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 43
                },
                "operatorToken": {
                    "kind": 4125,
                    "autofix": 0,
                    "flags": 0,
                    "start": 43,
                    "end": 45
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 47,
                        "end": 47
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 45,
                    "end": 48
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 48
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 49
        }
    ],
    "isModule": false,
    "text": "[{x:x = 1, y:y = 2}, [a = 3, b = 4, c = 5]] = {};",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 49
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

