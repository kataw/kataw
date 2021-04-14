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
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37814362,
                        "flags": 768,
                        "start": 1,
                        "end": 9
                    },
                    "generatorToken": null,
                    "name": {
                        "kind": 81921,
                        "text": "f",
                        "rawText": "f",
                        "flags": 768,
                        "start": 9,
                        "end": 11
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 11,
                        "end": 13
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 271,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 768,
                                                "start": 22,
                                                "end": 25
                                            },
                                            "typeParameters": null,
                                            "parameters": {
                                                "kind": 81921,
                                                "text": "yield",
                                                "rawText": "yield",
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
                                                    "directives": [],
                                                    "statements": [],
                                                    "multiline": false,
                                                    "flags": 256,
                                                    "start": 27,
                                                    "end": 27
                                                },
                                                "flags": 256,
                                                "start": 25,
                                                "end": 28
                                            },
                                            "flags": 256,
                                            "start": 17,
                                            "end": 28
                                        },
                                        "flags": 256,
                                        "start": 15,
                                        "end": 29
                                    },
                                    "flags": 128,
                                    "start": 15,
                                    "end": 30
                                }
                            ],
                            "multiline": false,
                            "flags": 256,
                            "start": 15,
                            "end": 30
                        },
                        "flags": 256,
                        "start": 13,
                        "end": 32
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 256,
                    "start": 1,
                    "end": 32
                },
                "flags": 256,
                "start": 0,
                "end": 33
            },
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
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37814362,
                        "flags": 768,
                        "start": 36,
                        "end": 44
                    },
                    "generatorToken": null,
                    "name": {
                        "kind": 81921,
                        "text": "f",
                        "rawText": "f",
                        "flags": 768,
                        "start": 44,
                        "end": 46
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 46,
                        "end": 48
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 271,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 768,
                                                "start": 65,
                                                "end": 68
                                            },
                                            "typeParameters": null,
                                            "parameters": [
                                                [
                                                    {
                                                        "kind": 81921,
                                                        "text": "yield",
                                                        "rawText": "yield",
                                                        "flags": 768,
                                                        "start": 53,
                                                        "end": 58
                                                    },
                                                    {
                                                        "kind": 215,
                                                        "ellipsisToken": {
                                                            "kind": 524302,
                                                            "flags": 768,
                                                            "start": 59,
                                                            "end": 63
                                                        },
                                                        "binding": {
                                                            "kind": 81921,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 768,
                                                            "start": 63,
                                                            "end": 64
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 258,
                                                        "start": 59,
                                                        "end": 64
                                                    }
                                                ]
                                            ],
                                            "asyncToken": null,
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "multiline": false,
                                                    "flags": 256,
                                                    "start": 70,
                                                    "end": 70
                                                },
                                                "flags": 256,
                                                "start": 68,
                                                "end": 71
                                            },
                                            "flags": 256,
                                            "start": 52,
                                            "end": 71
                                        },
                                        "flags": 256,
                                        "start": 50,
                                        "end": 72
                                    },
                                    "flags": 128,
                                    "start": 50,
                                    "end": 73
                                }
                            ],
                            "multiline": false,
                            "flags": 256,
                            "start": 50,
                            "end": 73
                        },
                        "flags": 256,
                        "start": 48,
                        "end": 75
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 256,
                    "start": 36,
                    "end": 75
                },
                "flags": 256,
                "start": 34,
                "end": 76
            },
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
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37814362,
                        "flags": 768,
                        "start": 79,
                        "end": 87
                    },
                    "generatorToken": null,
                    "name": {
                        "kind": 81921,
                        "text": "f",
                        "rawText": "f",
                        "flags": 768,
                        "start": 87,
                        "end": 89
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 89,
                        "end": 91
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 271,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 768,
                                                "start": 104,
                                                "end": 107
                                            },
                                            "typeParameters": null,
                                            "parameters": [
                                                {
                                                    "kind": 119,
                                                    "elementList": {
                                                        "kind": 270,
                                                        "elements": [
                                                            {
                                                                "kind": 81921,
                                                                "text": "yield",
                                                                "rawText": "yield",
                                                                "flags": 768,
                                                                "start": 97,
                                                                "end": 102
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 256,
                                                        "start": 97,
                                                        "end": 102
                                                    },
                                                    "flags": 256,
                                                    "start": 96,
                                                    "end": 103
                                                }
                                            ],
                                            "asyncToken": null,
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "multiline": false,
                                                    "flags": 256,
                                                    "start": 109,
                                                    "end": 109
                                                },
                                                "flags": 256,
                                                "start": 107,
                                                "end": 110
                                            },
                                            "flags": 256,
                                            "start": 95,
                                            "end": 110
                                        },
                                        "flags": 256,
                                        "start": 93,
                                        "end": 111
                                    },
                                    "flags": 128,
                                    "start": 93,
                                    "end": 112
                                }
                            ],
                            "multiline": false,
                            "flags": 256,
                            "start": 93,
                            "end": 112
                        },
                        "flags": 256,
                        "start": 91,
                        "end": 114
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 256,
                    "start": 79,
                    "end": 114
                },
                "flags": 256,
                "start": 77,
                "end": 115
            },
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
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37814362,
                        "flags": 768,
                        "start": 118,
                        "end": 126
                    },
                    "generatorToken": null,
                    "name": {
                        "kind": 81921,
                        "text": "f",
                        "rawText": "f",
                        "flags": 768,
                        "start": 126,
                        "end": 128
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 128,
                        "end": 130
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 271,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 768,
                                                "start": 143,
                                                "end": 146
                                            },
                                            "typeParameters": null,
                                            "parameters": [
                                                {
                                                    "kind": 220,
                                                    "propertyList": {
                                                        "kind": 218,
                                                        "properties": [
                                                            {
                                                                "kind": 81921,
                                                                "text": "yield",
                                                                "rawText": "yield",
                                                                "flags": 768,
                                                                "start": 136,
                                                                "end": 141
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "start": 136,
                                                        "end": 141
                                                    },
                                                    "flags": 256,
                                                    "start": 135,
                                                    "end": 142
                                                }
                                            ],
                                            "asyncToken": null,
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "multiline": false,
                                                    "flags": 256,
                                                    "start": 148,
                                                    "end": 148
                                                },
                                                "flags": 256,
                                                "start": 146,
                                                "end": 149
                                            },
                                            "flags": 256,
                                            "start": 134,
                                            "end": 149
                                        },
                                        "flags": 256,
                                        "start": 132,
                                        "end": 150
                                    },
                                    "flags": 128,
                                    "start": 132,
                                    "end": 151
                                }
                            ],
                            "multiline": false,
                            "flags": 256,
                            "start": 132,
                            "end": 151
                        },
                        "flags": 256,
                        "start": 130,
                        "end": 153
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 256,
                    "start": 118,
                    "end": 153
                },
                "flags": 256,
                "start": 116,
                "end": 154
            },
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
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37814362,
                        "flags": 768,
                        "start": 157,
                        "end": 165
                    },
                    "generatorToken": null,
                    "name": {
                        "kind": 81921,
                        "text": "f",
                        "rawText": "f",
                        "flags": 768,
                        "start": 165,
                        "end": 167
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 167,
                        "end": 169
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 271,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 768,
                                                "start": 180,
                                                "end": 183
                                            },
                                            "typeParameters": null,
                                            "parameters": [
                                                {
                                                    "kind": 81921,
                                                    "text": "yield",
                                                    "rawText": "yield",
                                                    "flags": 768,
                                                    "start": 174,
                                                    "end": 179
                                                }
                                            ],
                                            "asyncToken": null,
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "multiline": false,
                                                    "flags": 256,
                                                    "start": 185,
                                                    "end": 185
                                                },
                                                "flags": 256,
                                                "start": 183,
                                                "end": 186
                                            },
                                            "flags": 256,
                                            "start": 173,
                                            "end": 186
                                        },
                                        "flags": 256,
                                        "start": 171,
                                        "end": 187
                                    },
                                    "flags": 128,
                                    "start": 171,
                                    "end": 188
                                }
                            ],
                            "multiline": false,
                            "flags": 256,
                            "start": 171,
                            "end": 188
                        },
                        "flags": 256,
                        "start": 169,
                        "end": 190
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 256,
                    "start": 157,
                    "end": 190
                },
                "flags": 256,
                "start": 155,
                "end": 191
            },
            "flags": 128,
            "start": 155,
            "end": 192
        }
    ],
    "isModule": false,
    "text": "(function f() { (yield => {}); });\n(function f() { ((yield, ...a) => {}); });\n(function f() { (([yield]) => {}); });\n(function f() { (({yield}) => {}); });\n(function f() { ((yield) => {}); });",
    "fileName": "__root__",
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

