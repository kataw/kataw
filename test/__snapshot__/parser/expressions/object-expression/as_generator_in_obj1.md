# Kataw parser test case

## Input

`````js
({* set(){}});

({* get(){}});

({* private(){}});

({* readonly(){}});

({* async(){}});

({* function(){}});

({* declare(){}});

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
                                "kind": 209,
                                "name": {
                                    "kind": 81921,
                                    "value": "set",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 3,
                                    "end": 7
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 8,
                                    "end": 9
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
                                        "start": 10,
                                        "end": 10
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 9,
                                    "end": 11
                                },
                                "autofix": 0,
                                "flags": 1280,
                                "start": 7,
                                "end": 11
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 2,
                        "end": 11
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 12
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 13
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 14
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
                                    "kind": 81921,
                                    "value": "get",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 19,
                                    "end": 23
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 24,
                                    "end": 25
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
                                        "start": 26,
                                        "end": 26
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 25,
                                    "end": 27
                                },
                                "autofix": 0,
                                "flags": 1280,
                                "start": 23,
                                "end": 27
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 18,
                        "end": 27
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 17,
                    "end": 28
                },
                "autofix": 0,
                "flags": 256,
                "start": 14,
                "end": 29
            },
            "autofix": 0,
            "flags": 128,
            "start": 14,
            "end": 30
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
                                    "kind": 81921,
                                    "value": "private",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 35,
                                    "end": 43
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 44,
                                    "end": 45
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
                                        "start": 46,
                                        "end": 46
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 45,
                                    "end": 47
                                },
                                "autofix": 0,
                                "flags": 1280,
                                "start": 43,
                                "end": 47
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 34,
                        "end": 47
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 33,
                    "end": 48
                },
                "autofix": 0,
                "flags": 256,
                "start": 30,
                "end": 49
            },
            "autofix": 0,
            "flags": 128,
            "start": 30,
            "end": 50
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
                                    "kind": 81921,
                                    "value": "readonly",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 55,
                                    "end": 64
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 65,
                                    "end": 66
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
                                        "start": 67,
                                        "end": 67
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 66,
                                    "end": 68
                                },
                                "autofix": 0,
                                "flags": 1280,
                                "start": 64,
                                "end": 68
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 54,
                        "end": 68
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 53,
                    "end": 69
                },
                "autofix": 0,
                "flags": 256,
                "start": 50,
                "end": 70
            },
            "autofix": 0,
            "flags": 128,
            "start": 50,
            "end": 71
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
                                    "kind": 81921,
                                    "value": "async",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 76,
                                    "end": 82
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 83,
                                    "end": 84
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
                                        "start": 85,
                                        "end": 85
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 84,
                                    "end": 86
                                },
                                "autofix": 0,
                                "flags": 1280,
                                "start": 82,
                                "end": 86
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 75,
                        "end": 86
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 74,
                    "end": 87
                },
                "autofix": 0,
                "flags": 256,
                "start": 71,
                "end": 88
            },
            "autofix": 0,
            "flags": 128,
            "start": 71,
            "end": 89
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
                                    "kind": 81921,
                                    "value": "function",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 94,
                                    "end": 103
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 104,
                                    "end": 105
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
                                        "start": 106,
                                        "end": 106
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 105,
                                    "end": 107
                                },
                                "autofix": 0,
                                "flags": 1280,
                                "start": 103,
                                "end": 107
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 93,
                        "end": 107
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 92,
                    "end": 108
                },
                "autofix": 0,
                "flags": 256,
                "start": 89,
                "end": 109
            },
            "autofix": 0,
            "flags": 128,
            "start": 89,
            "end": 110
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
                                    "kind": 81921,
                                    "value": "declare",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 115,
                                    "end": 123
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 124,
                                    "end": 125
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
                                        "start": 126,
                                        "end": 126
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 125,
                                    "end": 127
                                },
                                "autofix": 0,
                                "flags": 1280,
                                "start": 123,
                                "end": 127
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 114,
                        "end": 127
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 113,
                    "end": 128
                },
                "autofix": 0,
                "flags": 256,
                "start": 110,
                "end": 129
            },
            "autofix": 0,
            "flags": 128,
            "start": 110,
            "end": 130
        }
    ],
    "isModule": false,
    "text": "({* set(){}});\n\n({* get(){}});\n\n({* private(){}});\n\n({* readonly(){}});\n\n({* async(){}});\n\n({* function(){}});\n\n({* declare(){}});\n",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 131
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

