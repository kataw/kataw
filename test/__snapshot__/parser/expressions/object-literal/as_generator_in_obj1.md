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
                                    "start": 3,
                                    "end": 7
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 1280,
                                    "start": 8,
                                    "end": 9
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
                                        "start": 10,
                                        "end": 10
                                    },
                                    "flags": 256,
                                    "start": 9,
                                    "end": 11
                                },
                                "flags": 1280,
                                "start": 7,
                                "end": 11
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 2,
                        "end": 11
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 12
                },
                "flags": 256,
                "start": 0,
                "end": 13
            },
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
                                    "kind": 134299649,
                                    "text": "get",
                                    "rawText": "get",
                                    "flags": 768,
                                    "start": 19,
                                    "end": 23
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 1280,
                                    "start": 24,
                                    "end": 25
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
                                        "start": 26,
                                        "end": 26
                                    },
                                    "flags": 256,
                                    "start": 25,
                                    "end": 27
                                },
                                "flags": 1280,
                                "start": 23,
                                "end": 27
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 18,
                        "end": 27
                    },
                    "flags": 256,
                    "start": 17,
                    "end": 28
                },
                "flags": 256,
                "start": 14,
                "end": 29
            },
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
                                    "kind": 134299649,
                                    "text": "private",
                                    "rawText": "private",
                                    "flags": 768,
                                    "start": 35,
                                    "end": 43
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 1280,
                                    "start": 44,
                                    "end": 45
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
                                        "start": 46,
                                        "end": 46
                                    },
                                    "flags": 256,
                                    "start": 45,
                                    "end": 47
                                },
                                "flags": 1280,
                                "start": 43,
                                "end": 47
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 34,
                        "end": 47
                    },
                    "flags": 256,
                    "start": 33,
                    "end": 48
                },
                "flags": 256,
                "start": 30,
                "end": 49
            },
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
                                    "kind": 134299649,
                                    "text": "readonly",
                                    "rawText": "readonly",
                                    "flags": 768,
                                    "start": 55,
                                    "end": 64
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 1280,
                                    "start": 65,
                                    "end": 66
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
                                        "start": 67,
                                        "end": 67
                                    },
                                    "flags": 256,
                                    "start": 66,
                                    "end": 68
                                },
                                "flags": 1280,
                                "start": 64,
                                "end": 68
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 54,
                        "end": 68
                    },
                    "flags": 256,
                    "start": 53,
                    "end": 69
                },
                "flags": 256,
                "start": 50,
                "end": 70
            },
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
                                    "kind": 134299649,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 768,
                                    "start": 76,
                                    "end": 82
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 1280,
                                    "start": 83,
                                    "end": 84
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
                                        "start": 85,
                                        "end": 85
                                    },
                                    "flags": 256,
                                    "start": 84,
                                    "end": 86
                                },
                                "flags": 1280,
                                "start": 82,
                                "end": 86
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 75,
                        "end": 86
                    },
                    "flags": 256,
                    "start": 74,
                    "end": 87
                },
                "flags": 256,
                "start": 71,
                "end": 88
            },
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
                                    "kind": 134299649,
                                    "text": "function",
                                    "rawText": "function",
                                    "flags": 768,
                                    "start": 94,
                                    "end": 103
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 1280,
                                    "start": 104,
                                    "end": 105
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
                                        "start": 106,
                                        "end": 106
                                    },
                                    "flags": 256,
                                    "start": 105,
                                    "end": 107
                                },
                                "flags": 1280,
                                "start": 103,
                                "end": 107
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 93,
                        "end": 107
                    },
                    "flags": 256,
                    "start": 92,
                    "end": 108
                },
                "flags": 256,
                "start": 89,
                "end": 109
            },
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
                                    "kind": 134299649,
                                    "text": "declare",
                                    "rawText": "declare",
                                    "flags": 768,
                                    "start": 115,
                                    "end": 123
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 1280,
                                    "start": 124,
                                    "end": 125
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
                                        "start": 126,
                                        "end": 126
                                    },
                                    "flags": 256,
                                    "start": 125,
                                    "end": 127
                                },
                                "flags": 1280,
                                "start": 123,
                                "end": 127
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 114,
                        "end": 127
                    },
                    "flags": 256,
                    "start": 113,
                    "end": 128
                },
                "flags": 256,
                "start": 110,
                "end": 129
            },
            "flags": 128,
            "start": 110,
            "end": 130
        }
    ],
    "isModule": false,
    "text": "({* set(){}});\n\n({* get(){}});\n\n({* private(){}});\n\n({* readonly(){}});\n\n({* async(){}});\n\n({* function(){}});\n\n({* declare(){}});\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 131
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

