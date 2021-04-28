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
    "directives": [],
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
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 2,
                                    "start": 0,
                                    "end": 5
                                },
                                "argument": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 5,
                                        "end": 6
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 6,
                                        "start": 512,
                                        "end": 7
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 768,
                                        "start": 7,
                                        "end": 8
                                    },
                                    "flags": 256,
                                    "start": 5,
                                    "end": 8
                                },
                                "flags": 256,
                                "start": 2,
                                "end": 8
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 2,
                        "end": 8
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 9
                },
                "flags": 256,
                "start": 0,
                "end": 10
            },
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
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 14,
                                    "start": 0,
                                    "end": 17
                                },
                                "argument": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 17,
                                        "end": 18
                                    },
                                    "operatorToken": {
                                        "kind": 34098,
                                        "flags": 18,
                                        "start": 512,
                                        "end": 19
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 768,
                                        "start": 19,
                                        "end": 20
                                    },
                                    "flags": 256,
                                    "start": 17,
                                    "end": 20
                                },
                                "flags": 256,
                                "start": 14,
                                "end": 20
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 14,
                        "end": 20
                    },
                    "flags": 256,
                    "start": 13,
                    "end": 21
                },
                "flags": 256,
                "start": 11,
                "end": 22
            },
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
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 26,
                                    "start": 0,
                                    "end": 29
                                },
                                "argument": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 29,
                                    "end": 30
                                },
                                "flags": 256,
                                "start": 26,
                                "end": 30
                            },
                            {
                                "kind": 224,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 31,
                                    "start": 0,
                                    "end": 35
                                },
                                "argument": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 768,
                                    "start": 35,
                                    "end": 36
                                },
                                "flags": 256,
                                "start": 31,
                                "end": 36
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 26,
                        "end": 36
                    },
                    "flags": 256,
                    "start": 25,
                    "end": 37
                },
                "flags": 256,
                "start": 23,
                "end": 38
            },
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
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 42,
                                        "start": 0,
                                        "end": 45
                                    },
                                    "argument": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 45,
                                            "end": 46
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 768,
                                            "start": 47,
                                            "end": 48
                                        },
                                        "flags": 256,
                                        "start": 45,
                                        "end": 48
                                    },
                                    "flags": 256,
                                    "start": 42,
                                    "end": 48
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 42,
                            "end": 48
                        },
                        "flags": 256,
                        "start": 41,
                        "end": 49
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 49,
                        "start": 512,
                        "end": 51
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 768,
                        "start": 51,
                        "end": 53
                    },
                    "flags": 256,
                    "start": 41,
                    "end": 53
                },
                "flags": 256,
                "start": 39,
                "end": 54
            },
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
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 58,
                                    "start": 0,
                                    "end": 61
                                },
                                "argument": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 61,
                                    "end": 62
                                },
                                "flags": 256,
                                "start": 58,
                                "end": 62
                            },
                            {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 768,
                                "start": 63,
                                "end": 65
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 58,
                        "end": 65
                    },
                    "flags": 256,
                    "start": 57,
                    "end": 66
                },
                "flags": 256,
                "start": 55,
                "end": 67
            },
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
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 768,
                                                    "start": 72,
                                                    "end": 73
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 768,
                                                    "start": 75,
                                                    "end": 77
                                                },
                                                "flags": 256,
                                                "start": 72,
                                                "end": 77
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "start": 72,
                                        "end": 77
                                    },
                                    "flags": 256,
                                    "start": 71,
                                    "end": 78
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 71,
                            "end": 78
                        },
                        "flags": 256,
                        "start": 70,
                        "end": 79
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 79,
                        "start": 512,
                        "end": 81
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 768,
                        "start": 81,
                        "end": 83
                    },
                    "flags": 256,
                    "start": 70,
                    "end": 83
                },
                "flags": 256,
                "start": 68,
                "end": 84
            },
            "flags": 128,
            "start": 68,
            "end": 85
        }
    ],
    "isModule": false,
    "text": "({...x=y});\n({...x+y});\n({...x, ...y});\n({...x.y} = z);\n({...x, y});\n([{x = y}] = z);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 85
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

