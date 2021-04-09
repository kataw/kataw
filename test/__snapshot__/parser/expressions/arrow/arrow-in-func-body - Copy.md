# Kataw parser test case

## Input

`````js
(function f() { (yield => {}); });
(function f() { ((yield, ...a) => {}); });
(function f() { (([yield]) => {}); });
(function f() { (({yield}) => {}); });
(function f() { ((yield) => {}); });
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
                    "kind": 177,
                    "asyncToken": null,
                    "generatorToken": null,
                    "name": {
                        "kind": 81921,
                        "value": "f",
                        "autofix": 0,
                        "flags": 768,
                        "start": 9,
                        "end": 11
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 12,
                        "end": 13
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "statements": [
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 271,
                                            "typeParameters": null,
                                            "parameters": {
                                                "kind": 81921,
                                                "value": "yield",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 17,
                                                "end": 22
                                            },
                                            "asyncToken": null,
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "statements": [],
                                                    "multiline": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 27,
                                                    "end": 27
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 25,
                                                "end": 28
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 17,
                                            "end": 28
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 15,
                                        "end": 29
                                    },
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 15,
                                    "end": 30
                                }
                            ],
                            "multiline": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 15,
                            "end": 30
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 13,
                        "end": 32
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 32
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 33
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 34
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncToken": null,
                    "generatorToken": null,
                    "name": {
                        "kind": 81921,
                        "value": "f",
                        "autofix": 0,
                        "flags": 768,
                        "start": 44,
                        "end": 46
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 47,
                        "end": 48
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "statements": [
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 271,
                                            "typeParameters": null,
                                            "parameters": [
                                                [
                                                    {
                                                        "kind": 81921,
                                                        "value": "yield",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 53,
                                                        "end": 58
                                                    },
                                                    {
                                                        "kind": 215,
                                                        "ellipsisToken": {
                                                            "kind": 524302,
                                                            "autofix": 0,
                                                            "flags": 0,
                                                            "start": 59,
                                                            "end": 63
                                                        },
                                                        "binding": {
                                                            "kind": 81921,
                                                            "value": "a",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 63,
                                                            "end": 64
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": null,
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 59,
                                                        "end": 64
                                                    }
                                                ]
                                            ],
                                            "asyncToken": false,
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "statements": [],
                                                    "multiline": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 70,
                                                    "end": 70
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 68,
                                                "end": 71
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 52,
                                            "end": 71
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 50,
                                        "end": 72
                                    },
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 50,
                                    "end": 73
                                }
                            ],
                            "multiline": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 50,
                            "end": 73
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 48,
                        "end": 75
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "autofix": 0,
                    "flags": 256,
                    "start": 36,
                    "end": 75
                },
                "autofix": 0,
                "flags": 256,
                "start": 34,
                "end": 76
            },
            "autofix": 0,
            "flags": 128,
            "start": 34,
            "end": 77
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncToken": null,
                    "generatorToken": null,
                    "name": {
                        "kind": 81921,
                        "value": "f",
                        "autofix": 0,
                        "flags": 768,
                        "start": 87,
                        "end": 89
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 90,
                        "end": 91
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "statements": [
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 271,
                                            "typeParameters": null,
                                            "parameters": [
                                                {
                                                    "kind": 119,
                                                    "elementList": {
                                                        "kind": 270,
                                                        "elements": [
                                                            {
                                                                "kind": 81921,
                                                                "value": "yield",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 97,
                                                                "end": 102
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 97,
                                                        "end": 102
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 96,
                                                    "end": 103
                                                }
                                            ],
                                            "asyncToken": false,
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "statements": [],
                                                    "multiline": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 109,
                                                    "end": 109
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 107,
                                                "end": 110
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 95,
                                            "end": 110
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 93,
                                        "end": 111
                                    },
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 93,
                                    "end": 112
                                }
                            ],
                            "multiline": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 93,
                            "end": 112
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 91,
                        "end": 114
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "autofix": 0,
                    "flags": 256,
                    "start": 79,
                    "end": 114
                },
                "autofix": 0,
                "flags": 256,
                "start": 77,
                "end": 115
            },
            "autofix": 0,
            "flags": 128,
            "start": 77,
            "end": 116
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncToken": null,
                    "generatorToken": null,
                    "name": {
                        "kind": 81921,
                        "value": "f",
                        "autofix": 0,
                        "flags": 768,
                        "start": 126,
                        "end": 128
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 129,
                        "end": 130
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "statements": [
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 271,
                                            "typeParameters": null,
                                            "parameters": [
                                                {
                                                    "kind": 220,
                                                    "propertyList": {
                                                        "kind": 218,
                                                        "properties": [
                                                            {
                                                                "kind": 81921,
                                                                "value": "yield",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 136,
                                                                "end": 141
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "multiline": false,
                                                        "autofix": 0,
                                                        "flags": 0,
                                                        "start": 136,
                                                        "end": 141
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 135,
                                                    "end": 142
                                                }
                                            ],
                                            "asyncToken": false,
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "statements": [],
                                                    "multiline": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 148,
                                                    "end": 148
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 146,
                                                "end": 149
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 134,
                                            "end": 149
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 132,
                                        "end": 150
                                    },
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 132,
                                    "end": 151
                                }
                            ],
                            "multiline": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 132,
                            "end": 151
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 130,
                        "end": 153
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "autofix": 0,
                    "flags": 256,
                    "start": 118,
                    "end": 153
                },
                "autofix": 0,
                "flags": 256,
                "start": 116,
                "end": 154
            },
            "autofix": 0,
            "flags": 128,
            "start": 116,
            "end": 155
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncToken": null,
                    "generatorToken": null,
                    "name": {
                        "kind": 81921,
                        "value": "f",
                        "autofix": 0,
                        "flags": 768,
                        "start": 165,
                        "end": 167
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 168,
                        "end": 169
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "statements": [
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 271,
                                            "typeParameters": null,
                                            "parameters": [
                                                {
                                                    "kind": 81921,
                                                    "value": "yield",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 174,
                                                    "end": 179
                                                }
                                            ],
                                            "asyncToken": false,
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "statements": [],
                                                    "multiline": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 185,
                                                    "end": 185
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 183,
                                                "end": 186
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 173,
                                            "end": 186
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 171,
                                        "end": 187
                                    },
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 171,
                                    "end": 188
                                }
                            ],
                            "multiline": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 171,
                            "end": 188
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 169,
                        "end": 190
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "autofix": 0,
                    "flags": 256,
                    "start": 157,
                    "end": 190
                },
                "autofix": 0,
                "flags": 256,
                "start": 155,
                "end": 191
            },
            "autofix": 0,
            "flags": 128,
            "start": 155,
            "end": 192
        }
    ],
    "isModule": false,
    "text": "(function f() { (yield => {}); });\n(function f() { ((yield, ...a) => {}); });\n(function f() { (([yield]) => {}); });\n(function f() { (({yield}) => {}); });\n(function f() { ((yield) => {}); });",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 192
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

