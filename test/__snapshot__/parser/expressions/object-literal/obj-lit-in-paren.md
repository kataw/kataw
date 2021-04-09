# Kataw parser test case

## Input

`````js
({...x=y});
({...x+y});
({...x, ...y});
({...x.y} = z);
({...x, y});
([{x = y}] = z);
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
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 224,
                                "argument": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 5,
                                        "end": 6
                                    },
                                    "operatorToken": {
                                        "kind": 81921,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 5,
                                        "end": 7
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "y",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 7,
                                        "end": 8
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 5,
                                    "end": 8
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 2,
                                "end": 8
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 2,
                        "end": 8
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 9
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 10
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 224,
                                "argument": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 17,
                                        "end": 18
                                    },
                                    "operatorToken": {
                                        "kind": 34098,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 18,
                                        "end": 19
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "y",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 19,
                                        "end": 20
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 17,
                                    "end": 20
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 14,
                                "end": 20
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 14,
                        "end": 20
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 13,
                    "end": 21
                },
                "autofix": 0,
                "flags": 256,
                "start": 11,
                "end": 22
            },
            "autofix": 0,
            "flags": 128,
            "start": 11,
            "end": 23
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 224,
                                "argument": {
                                    "kind": 81921,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 29,
                                    "end": 30
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 26,
                                "end": 30
                            },
                            {
                                "kind": 224,
                                "argument": {
                                    "kind": 81921,
                                    "value": "y",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 35,
                                    "end": 36
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 31,
                                "end": 36
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 26,
                        "end": 36
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 25,
                    "end": 37
                },
                "autofix": 0,
                "flags": 256,
                "start": 23,
                "end": 38
            },
            "autofix": 0,
            "flags": 128,
            "start": 23,
            "end": 39
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 224,
                                    "argument": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 45,
                                            "end": 46
                                        },
                                        "expression": {
                                            "kind": 81921,
                                            "value": "y",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 47,
                                            "end": 48
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 45,
                                        "end": 48
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 42,
                                    "end": 48
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 42,
                            "end": 48
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 41,
                        "end": 49
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 49,
                        "end": 51
                    },
                    "right": {
                        "kind": 81921,
                        "value": "z",
                        "autofix": 0,
                        "flags": 768,
                        "start": 51,
                        "end": 53
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 41,
                    "end": 53
                },
                "autofix": 0,
                "flags": 256,
                "start": 39,
                "end": 54
            },
            "autofix": 0,
            "flags": 128,
            "start": 39,
            "end": 55
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 224,
                                "argument": {
                                    "kind": 81921,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 61,
                                    "end": 62
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 58,
                                "end": 62
                            },
                            {
                                "kind": 81921,
                                "value": "y",
                                "autofix": 0,
                                "flags": 768,
                                "start": 63,
                                "end": 65
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 58,
                        "end": 65
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 57,
                    "end": 66
                },
                "autofix": 0,
                "flags": 256,
                "start": 55,
                "end": 67
            },
            "autofix": 0,
            "flags": 128,
            "start": 55,
            "end": 68
        },
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
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 205,
                                                "left": {
                                                    "kind": 81921,
                                                    "value": "x",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 72,
                                                    "end": 73
                                                },
                                                "right": {
                                                    "kind": 81921,
                                                    "value": "y",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 75,
                                                    "end": 77
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 72,
                                                "end": 77
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 72,
                                        "end": 77
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 71,
                                    "end": 78
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 71,
                            "end": 78
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 70,
                        "end": 79
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 79,
                        "end": 81
                    },
                    "right": {
                        "kind": 81921,
                        "value": "z",
                        "autofix": 0,
                        "flags": 768,
                        "start": 81,
                        "end": 83
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 70,
                    "end": 83
                },
                "autofix": 0,
                "flags": 256,
                "start": 68,
                "end": 84
            },
            "autofix": 0,
            "flags": 128,
            "start": 68,
            "end": 85
        }
    ],
    "isModule": false,
    "text": "({...x=y});\n({...x+y});\n({...x, ...y});\n({...x.y} = z);\n({...x, y});\n([{x = y}] = z);",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 85
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

