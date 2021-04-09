# Kataw parser test case

## Input

`````js
result = { __proto__: x, __proto__: y } = value;

result = ({ __proto__: x, __proto__: y } = value);
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
                    "kind": 81921,
                    "value": "result",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 268501004,
                    "autofix": 0,
                    "flags": 0,
                    "start": 0,
                    "end": 8
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 21,
                                        "end": 23
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "__proto__",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 10,
                                        "end": 20
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 10,
                                    "end": 23
                                },
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 81921,
                                        "value": "y",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 35,
                                        "end": 37
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "__proto__",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 24,
                                        "end": 34
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 24,
                                    "end": 37
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 10,
                            "end": 37
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 8,
                        "end": 39
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 39,
                        "end": 41
                    },
                    "right": {
                        "kind": 81921,
                        "value": "value",
                        "autofix": 0,
                        "flags": 768,
                        "start": 41,
                        "end": 47
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 8,
                    "end": 47
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 47
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 48
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "result",
                    "autofix": 0,
                    "flags": 768,
                    "start": 48,
                    "end": 56
                },
                "operatorToken": {
                    "kind": 537067531,
                    "autofix": 0,
                    "flags": 0,
                    "start": 48,
                    "end": 58
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 125,
                        "left": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 72,
                                            "end": 74
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": "__proto__",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 61,
                                            "end": 71
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 61,
                                        "end": 74
                                    },
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 81921,
                                            "value": "y",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 86,
                                            "end": 88
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": "__proto__",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 75,
                                            "end": 85
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 75,
                                        "end": 88
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 61,
                                "end": 88
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 60,
                            "end": 90
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "autofix": 0,
                            "flags": 0,
                            "start": 90,
                            "end": 92
                        },
                        "right": {
                            "kind": 81921,
                            "value": "value",
                            "autofix": 0,
                            "flags": 768,
                            "start": 92,
                            "end": 98
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 60,
                        "end": 98
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 58,
                    "end": 99
                },
                "autofix": 0,
                "flags": 256,
                "start": 48,
                "end": 99
            },
            "autofix": 0,
            "flags": 128,
            "start": 48,
            "end": 100
        }
    ],
    "isModule": false,
    "text": "result = { __proto__: x, __proto__: y } = value;\n\nresult = ({ __proto__: x, __proto__: y } = value);",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 100
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

