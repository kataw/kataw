# Kataw parser test case

## Input

`````js
({ set(...a) { } });
({ set(a, ...b) { } });
({ set([a], ...b) { } });
({ set({a: A}, ...b) { } });
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
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "set",
                                    "rawText": "set",
                                    "flags": 768,
                                    "start": 2,
                                    "end": 6
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 768,
                                                "start": 7,
                                                "end": 10
                                            },
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 768,
                                                "start": 10,
                                                "end": 11
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 258,
                                            "start": 7,
                                            "end": 11
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 258,
                                    "start": 7,
                                    "end": 12
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 14,
                                        "end": 14
                                    },
                                    "flags": 256,
                                    "start": 12,
                                    "end": 16
                                },
                                "flags": 256,
                                "start": 6,
                                "end": 16
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 2,
                        "end": 16
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 18
                },
                "flags": 256,
                "start": 0,
                "end": 19
            },
            "flags": 128,
            "start": 0,
            "end": 20
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
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "set",
                                    "rawText": "set",
                                    "flags": 768,
                                    "start": 23,
                                    "end": 27
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 768,
                                                "start": 28,
                                                "end": 29
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 28,
                                            "end": 29
                                        },
                                        {
                                            "kind": 215,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 768,
                                                "start": 30,
                                                "end": 34
                                            },
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 768,
                                                "start": 34,
                                                "end": 35
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 258,
                                            "start": 30,
                                            "end": 35
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 258,
                                    "start": 28,
                                    "end": 36
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 38,
                                        "end": 38
                                    },
                                    "flags": 256,
                                    "start": 36,
                                    "end": 40
                                },
                                "flags": 256,
                                "start": 27,
                                "end": 40
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 23,
                        "end": 40
                    },
                    "flags": 256,
                    "start": 22,
                    "end": 42
                },
                "flags": 256,
                "start": 20,
                "end": 43
            },
            "flags": 128,
            "start": 20,
            "end": 44
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
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "set",
                                    "rawText": "set",
                                    "flags": 768,
                                    "start": 47,
                                    "end": 51
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 201,
                                                "elementList": {
                                                    "kind": 202,
                                                    "elements": [
                                                        {
                                                            "kind": 244,
                                                            "ellipsisToken": null,
                                                            "binding": {
                                                                "kind": 134299649,
                                                                "text": "a",
                                                                "rawText": "a",
                                                                "flags": 768,
                                                                "start": 53,
                                                                "end": 54
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": null,
                                                            "flags": 256,
                                                            "start": 53,
                                                            "end": 54
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 256,
                                                    "start": 53,
                                                    "end": 54
                                                },
                                                "flags": 256,
                                                "start": 52,
                                                "end": 55
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 258,
                                            "start": 52,
                                            "end": 55
                                        },
                                        {
                                            "kind": 215,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 768,
                                                "start": 56,
                                                "end": 60
                                            },
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 768,
                                                "start": 60,
                                                "end": 61
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 258,
                                            "start": 56,
                                            "end": 61
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 258,
                                    "start": 52,
                                    "end": 62
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 64,
                                        "end": 64
                                    },
                                    "flags": 256,
                                    "start": 62,
                                    "end": 66
                                },
                                "flags": 256,
                                "start": 51,
                                "end": 66
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 47,
                        "end": 66
                    },
                    "flags": 256,
                    "start": 46,
                    "end": 68
                },
                "flags": 256,
                "start": 44,
                "end": 69
            },
            "flags": 128,
            "start": 44,
            "end": 70
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
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "set",
                                    "rawText": "set",
                                    "flags": 768,
                                    "start": 73,
                                    "end": 77
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 212,
                                                "propertyList": {
                                                    "kind": 213,
                                                    "properties": [
                                                        {
                                                            "kind": 204,
                                                            "ellipsisToken": null,
                                                            "key": {
                                                                "kind": 134299649,
                                                                "text": "a",
                                                                "rawText": "a",
                                                                "flags": 768,
                                                                "start": 79,
                                                                "end": 81
                                                            },
                                                            "value": {
                                                                "kind": 203,
                                                                "ellipsisToken": null,
                                                                "binding": {
                                                                    "kind": 134299649,
                                                                    "text": "A",
                                                                    "rawText": "A",
                                                                    "flags": 768,
                                                                    "start": 81,
                                                                    "end": 83
                                                                },
                                                                "initializer": null,
                                                                "flags": 256,
                                                                "start": 81,
                                                                "end": 83
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 79,
                                                            "end": 83
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "trailingComma": false,
                                                    "flags": 256,
                                                    "start": 79,
                                                    "end": 83
                                                },
                                                "flags": 256,
                                                "start": 78,
                                                "end": 84
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 258,
                                            "start": 78,
                                            "end": 84
                                        },
                                        {
                                            "kind": 215,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 768,
                                                "start": 85,
                                                "end": 89
                                            },
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 768,
                                                "start": 89,
                                                "end": 90
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 258,
                                            "start": 85,
                                            "end": 90
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 258,
                                    "start": 78,
                                    "end": 91
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 93,
                                        "end": 93
                                    },
                                    "flags": 256,
                                    "start": 91,
                                    "end": 95
                                },
                                "flags": 256,
                                "start": 77,
                                "end": 95
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 73,
                        "end": 95
                    },
                    "flags": 256,
                    "start": 72,
                    "end": 97
                },
                "flags": 256,
                "start": 70,
                "end": 98
            },
            "flags": 128,
            "start": 70,
            "end": 99
        }
    ],
    "isModule": false,
    "text": "({ set(...a) { } });\n({ set(a, ...b) { } });\n({ set([a], ...b) { } });\n({ set({a: A}, ...b) { } });",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 99
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

