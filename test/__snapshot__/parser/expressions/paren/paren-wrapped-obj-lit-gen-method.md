# Kataw parser test case

## Input

`````js
x({*[foo](){}});

x({*get(){}});

x({*123(){}});

x({async foo(){}, bar(){}});

x({foo(){}, async bar(){}});

x({async "foo"(){}});

x({async [foo](){}});

x({foo(){}, *bar(){}});

x({*foo(){}});
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
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
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
                                        "kind": 209,
                                        "name": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "start": 5,
                                                "end": 8
                                            },
                                            "flags": 32,
                                            "start": 4,
                                            "end": 9
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 160,
                                            "start": 10,
                                            "end": 11
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 12,
                                                "end": 12
                                            },
                                            "flags": 32,
                                            "start": 11,
                                            "end": 13
                                        },
                                        "flags": 160,
                                        "start": 9,
                                        "end": 13
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 3,
                                "end": 13
                            },
                            "flags": 32,
                            "start": 2,
                            "end": 14
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 2,
                    "end": 14
                },
                "flags": 32,
                "start": 0,
                "end": 15
            },
            "flags": 16,
            "start": 0,
            "end": 16
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 16,
                    "end": 19
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
                                            "kind": 134299649,
                                            "text": "get",
                                            "rawText": "get",
                                            "flags": 96,
                                            "start": 22,
                                            "end": 25
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 160,
                                            "start": 26,
                                            "end": 27
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 28,
                                                "end": 28
                                            },
                                            "flags": 32,
                                            "start": 27,
                                            "end": 29
                                        },
                                        "flags": 160,
                                        "start": 25,
                                        "end": 29
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 21,
                                "end": 29
                            },
                            "flags": 32,
                            "start": 20,
                            "end": 30
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 20,
                    "end": 30
                },
                "flags": 32,
                "start": 16,
                "end": 31
            },
            "flags": 16,
            "start": 16,
            "end": 32
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 32,
                    "end": 35
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
                                            "kind": 201392130,
                                            "text": 123,
                                            "rawText": "123",
                                            "flags": 96,
                                            "start": 38,
                                            "end": 41
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 160,
                                            "start": 42,
                                            "end": 43
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 44,
                                                "end": 44
                                            },
                                            "flags": 32,
                                            "start": 43,
                                            "end": 45
                                        },
                                        "flags": 160,
                                        "start": 41,
                                        "end": 45
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 37,
                                "end": 45
                            },
                            "flags": 32,
                            "start": 36,
                            "end": 46
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 36,
                    "end": 46
                },
                "flags": 32,
                "start": 32,
                "end": 47
            },
            "flags": 16,
            "start": 32,
            "end": 48
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 48,
                    "end": 51
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
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 58,
                                            "end": 62
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 288,
                                            "start": 63,
                                            "end": 64
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 65,
                                                "end": 65
                                            },
                                            "flags": 32,
                                            "start": 64,
                                            "end": 66
                                        },
                                        "flags": 288,
                                        "start": 62,
                                        "end": 66
                                    },
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 96,
                                            "start": 67,
                                            "end": 71
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 72,
                                            "end": 73
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 74,
                                                "end": 74
                                            },
                                            "flags": 32,
                                            "start": 73,
                                            "end": 75
                                        },
                                        "flags": 32,
                                        "start": 71,
                                        "end": 75
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 53,
                                "end": 75
                            },
                            "flags": 32,
                            "start": 52,
                            "end": 76
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 52,
                    "end": 76
                },
                "flags": 32,
                "start": 48,
                "end": 77
            },
            "flags": 16,
            "start": 48,
            "end": 78
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 78,
                    "end": 81
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
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 83,
                                            "end": 86
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 87,
                                            "end": 88
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 89,
                                                "end": 89
                                            },
                                            "flags": 32,
                                            "start": 88,
                                            "end": 90
                                        },
                                        "flags": 32,
                                        "start": 86,
                                        "end": 90
                                    },
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 96,
                                            "start": 97,
                                            "end": 101
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 288,
                                            "start": 102,
                                            "end": 103
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 104,
                                                "end": 104
                                            },
                                            "flags": 32,
                                            "start": 103,
                                            "end": 105
                                        },
                                        "flags": 288,
                                        "start": 101,
                                        "end": 105
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 83,
                                "end": 105
                            },
                            "flags": 32,
                            "start": 82,
                            "end": 106
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 82,
                    "end": 106
                },
                "flags": 32,
                "start": 78,
                "end": 107
            },
            "flags": 16,
            "start": 78,
            "end": 108
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 108,
                    "end": 111
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
                                        "kind": 134299649,
                                        "text": "async",
                                        "rawText": "async",
                                        "flags": 96,
                                        "start": 113,
                                        "end": 118
                                    },
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 201392131,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 118,
                                            "end": 124
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 125,
                                            "end": 126
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 127,
                                                "end": 127
                                            },
                                            "flags": 32,
                                            "start": 126,
                                            "end": 128
                                        },
                                        "flags": 32,
                                        "start": 124,
                                        "end": 128
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 113,
                                "end": 128
                            },
                            "flags": 32,
                            "start": 112,
                            "end": 129
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 112,
                    "end": 129
                },
                "flags": 32,
                "start": 108,
                "end": 130
            },
            "flags": 16,
            "start": 108,
            "end": 131
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 131,
                    "end": 134
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
                                        "kind": 134299649,
                                        "text": "async",
                                        "rawText": "async",
                                        "flags": 96,
                                        "start": 136,
                                        "end": 141
                                    },
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "start": 143,
                                                "end": 146
                                            },
                                            "flags": 32,
                                            "start": 141,
                                            "end": 147
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 148,
                                            "end": 149
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 150,
                                                "end": 150
                                            },
                                            "flags": 32,
                                            "start": 149,
                                            "end": 151
                                        },
                                        "flags": 32,
                                        "start": 147,
                                        "end": 151
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 136,
                                "end": 151
                            },
                            "flags": 32,
                            "start": 135,
                            "end": 152
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 135,
                    "end": 152
                },
                "flags": 32,
                "start": 131,
                "end": 153
            },
            "flags": 16,
            "start": 131,
            "end": 154
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 154,
                    "end": 157
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
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 159,
                                            "end": 162
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 163,
                                            "end": 164
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 165,
                                                "end": 165
                                            },
                                            "flags": 32,
                                            "start": 164,
                                            "end": 166
                                        },
                                        "flags": 32,
                                        "start": 162,
                                        "end": 166
                                    },
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 96,
                                            "start": 169,
                                            "end": 172
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 160,
                                            "start": 173,
                                            "end": 174
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 175,
                                                "end": 175
                                            },
                                            "flags": 32,
                                            "start": 174,
                                            "end": 176
                                        },
                                        "flags": 160,
                                        "start": 172,
                                        "end": 176
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 159,
                                "end": 176
                            },
                            "flags": 32,
                            "start": 158,
                            "end": 177
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 158,
                    "end": 177
                },
                "flags": 32,
                "start": 154,
                "end": 178
            },
            "flags": 16,
            "start": 154,
            "end": 179
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 179,
                    "end": 182
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
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 185,
                                            "end": 188
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 160,
                                            "start": 189,
                                            "end": 190
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 191,
                                                "end": 191
                                            },
                                            "flags": 32,
                                            "start": 190,
                                            "end": 192
                                        },
                                        "flags": 160,
                                        "start": 188,
                                        "end": 192
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 184,
                                "end": 192
                            },
                            "flags": 32,
                            "start": 183,
                            "end": 193
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 183,
                    "end": 193
                },
                "flags": 32,
                "start": 179,
                "end": 194
            },
            "flags": 16,
            "start": 179,
            "end": 195
        }
    ],
    "isModule": false,
    "text": "x({*[foo](){}});\n\nx({*get(){}});\n\nx({*123(){}});\n\nx({async foo(){}, bar(){}});\n\nx({foo(){}, async bar(){}});\n\nx({async \"foo\"(){}});\n\nx({async [foo](){}});\n\nx({foo(){}, *bar(){}});\n\nx({*foo(){}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 195
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 118, end: 124
✖ ',' expected - start: 141, end: 143

```

