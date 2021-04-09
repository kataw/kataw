# Kataw parser test case

## Input

`````js
x({.9:a, 0x84:b, 0b1:c, 0o27:d, 1e234:e});

x({.9(){}, 0x84(){}, 0b1(){}, 0o27(){}, 1e234(){}});
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
                "kind": 131,
                "expression": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 81921,
                                            "value": "a",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 6,
                                            "end": 7
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": 0.9,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 3,
                                            "end": 5
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 3,
                                        "end": 7
                                    },
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 81921,
                                            "value": "b",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 14,
                                            "end": 15
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": 132,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 8,
                                            "end": 13
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 8,
                                        "end": 15
                                    },
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 81921,
                                            "value": "c",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 21,
                                            "end": 22
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": 1,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 16,
                                            "end": 20
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 16,
                                        "end": 22
                                    },
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 81921,
                                            "value": "d",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 29,
                                            "end": 30
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": 23,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 23,
                                            "end": 28
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 23,
                                        "end": 30
                                    },
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 81921,
                                            "value": "e",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 38,
                                            "end": 39
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": 1e+234,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 31,
                                            "end": 37
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 31,
                                        "end": 39
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 3,
                                "end": 39
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 2,
                            "end": 40
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 2,
                    "end": 40
                },
                "flags": 256,
                "start": 0,
                "end": 41
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 42
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 42,
                    "end": 45
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 81921,
                                            "value": 0.9,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 47,
                                            "end": 49
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 50,
                                            "end": 51
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "statements": [],
                                                "multiline": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 52,
                                                "end": 52
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 51,
                                            "end": 53
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 49,
                                        "end": 53
                                    },
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 81921,
                                            "value": 132,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 54,
                                            "end": 59
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 60,
                                            "end": 61
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "statements": [],
                                                "multiline": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 62,
                                                "end": 62
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 61,
                                            "end": 63
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 59,
                                        "end": 63
                                    },
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 81921,
                                            "value": 1,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 64,
                                            "end": 68
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 69,
                                            "end": 70
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "statements": [],
                                                "multiline": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 71,
                                                "end": 71
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 70,
                                            "end": 72
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 68,
                                        "end": 72
                                    },
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 81921,
                                            "value": 23,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 73,
                                            "end": 78
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 79,
                                            "end": 80
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "statements": [],
                                                "multiline": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 81,
                                                "end": 81
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 80,
                                            "end": 82
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 78,
                                        "end": 82
                                    },
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 81921,
                                            "value": 1e+234,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 83,
                                            "end": 89
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 90,
                                            "end": 91
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "statements": [],
                                                "multiline": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 92,
                                                "end": 92
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 91,
                                            "end": 93
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 89,
                                        "end": 93
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 47,
                                "end": 93
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 46,
                            "end": 94
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 46,
                    "end": 94
                },
                "flags": 256,
                "start": 42,
                "end": 95
            },
            "autofix": 0,
            "flags": 128,
            "start": 42,
            "end": 96
        }
    ],
    "isModule": false,
    "text": "x({.9:a, 0x84:b, 0b1:c, 0o27:d, 1e234:e});\n\nx({.9(){}, 0x84(){}, 0b1(){}, 0o27(){}, 1e234(){}});",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 96
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

