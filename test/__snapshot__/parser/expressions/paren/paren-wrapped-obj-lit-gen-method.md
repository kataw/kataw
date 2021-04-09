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
                                        "kind": 209,
                                        "name": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 81921,
                                                "value": "foo",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 5,
                                                "end": 8
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 4,
                                            "end": 9
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 10,
                                            "end": 11
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
                                                "start": 12,
                                                "end": 12
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 11,
                                            "end": 13
                                        },
                                        "autofix": 0,
                                        "flags": 1280,
                                        "start": 9,
                                        "end": 13
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 3,
                                "end": 13
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 2,
                            "end": 14
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 2,
                    "end": 14
                },
                "flags": 256,
                "start": 0,
                "end": 15
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 16
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
                                            "kind": 81921,
                                            "value": "get",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 22,
                                            "end": 25
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 26,
                                            "end": 27
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
                                                "start": 28,
                                                "end": 28
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 27,
                                            "end": 29
                                        },
                                        "autofix": 0,
                                        "flags": 1280,
                                        "start": 25,
                                        "end": 29
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 21,
                                "end": 29
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 20,
                            "end": 30
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 20,
                    "end": 30
                },
                "flags": 256,
                "start": 16,
                "end": 31
            },
            "autofix": 0,
            "flags": 128,
            "start": 16,
            "end": 32
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
                                            "kind": 81921,
                                            "value": 123,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 38,
                                            "end": 41
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 42,
                                            "end": 43
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
                                                "start": 44,
                                                "end": 44
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 43,
                                            "end": 45
                                        },
                                        "autofix": 0,
                                        "flags": 1280,
                                        "start": 41,
                                        "end": 45
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 37,
                                "end": 45
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 36,
                            "end": 46
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 36,
                    "end": 46
                },
                "flags": 256,
                "start": 32,
                "end": 47
            },
            "autofix": 0,
            "flags": 128,
            "start": 32,
            "end": 48
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
                                            "kind": 81921,
                                            "value": "foo",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 58,
                                            "end": 62
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 63,
                                            "end": 64
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
                                                "start": 65,
                                                "end": 65
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 64,
                                            "end": 66
                                        },
                                        "autofix": 0,
                                        "flags": 2304,
                                        "start": 62,
                                        "end": 66
                                    },
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 81921,
                                            "value": "bar",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 67,
                                            "end": 71
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 72,
                                            "end": 73
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
                                                "start": 74,
                                                "end": 74
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 73,
                                            "end": 75
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 71,
                                        "end": 75
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 53,
                                "end": 75
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 52,
                            "end": 76
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 52,
                    "end": 76
                },
                "flags": 256,
                "start": 48,
                "end": 77
            },
            "autofix": 0,
            "flags": 128,
            "start": 48,
            "end": 78
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
                                            "kind": 81921,
                                            "value": "foo",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 83,
                                            "end": 86
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 87,
                                            "end": 88
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
                                                "start": 89,
                                                "end": 89
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 88,
                                            "end": 90
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 86,
                                        "end": 90
                                    },
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 81921,
                                            "value": "bar",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 97,
                                            "end": 101
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 102,
                                            "end": 103
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
                                                "start": 104,
                                                "end": 104
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 103,
                                            "end": 105
                                        },
                                        "autofix": 0,
                                        "flags": 2304,
                                        "start": 101,
                                        "end": 105
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 83,
                                "end": 105
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 82,
                            "end": 106
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 82,
                    "end": 106
                },
                "flags": 256,
                "start": 78,
                "end": 107
            },
            "autofix": 0,
            "flags": 128,
            "start": 78,
            "end": 108
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
                                        "kind": 209,
                                        "name": {
                                            "kind": 67174403,
                                            "value": "foo",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 118,
                                            "end": 124
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 125,
                                            "end": 126
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
                                                "start": 127,
                                                "end": 127
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 126,
                                            "end": 128
                                        },
                                        "autofix": 0,
                                        "flags": 2304,
                                        "start": 124,
                                        "end": 128
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 113,
                                "end": 128
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 112,
                            "end": 129
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 112,
                    "end": 129
                },
                "flags": 256,
                "start": 108,
                "end": 130
            },
            "autofix": 0,
            "flags": 128,
            "start": 108,
            "end": 131
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
                                        "kind": 209,
                                        "name": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 81921,
                                                "value": "foo",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 143,
                                                "end": 146
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 141,
                                            "end": 147
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 148,
                                            "end": 149
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
                                                "start": 150,
                                                "end": 150
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 149,
                                            "end": 151
                                        },
                                        "autofix": 0,
                                        "flags": 2304,
                                        "start": 147,
                                        "end": 151
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 136,
                                "end": 151
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 135,
                            "end": 152
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 135,
                    "end": 152
                },
                "flags": 256,
                "start": 131,
                "end": 153
            },
            "autofix": 0,
            "flags": 128,
            "start": 131,
            "end": 154
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
                                            "kind": 81921,
                                            "value": "foo",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 159,
                                            "end": 162
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 163,
                                            "end": 164
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
                                                "start": 165,
                                                "end": 165
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 164,
                                            "end": 166
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 162,
                                        "end": 166
                                    },
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 81921,
                                            "value": "bar",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 169,
                                            "end": 172
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 173,
                                            "end": 174
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
                                                "start": 175,
                                                "end": 175
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 174,
                                            "end": 176
                                        },
                                        "autofix": 0,
                                        "flags": 1280,
                                        "start": 172,
                                        "end": 176
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 159,
                                "end": 176
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 158,
                            "end": 177
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 158,
                    "end": 177
                },
                "flags": 256,
                "start": 154,
                "end": 178
            },
            "autofix": 0,
            "flags": 128,
            "start": 154,
            "end": 179
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
                                            "kind": 81921,
                                            "value": "foo",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 185,
                                            "end": 188
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 189,
                                            "end": 190
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
                                                "start": 191,
                                                "end": 191
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 190,
                                            "end": 192
                                        },
                                        "autofix": 0,
                                        "flags": 1280,
                                        "start": 188,
                                        "end": 192
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 184,
                                "end": 192
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 183,
                            "end": 193
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 183,
                    "end": 193
                },
                "flags": 256,
                "start": 179,
                "end": 194
            },
            "autofix": 0,
            "flags": 128,
            "start": 179,
            "end": 195
        }
    ],
    "isModule": false,
    "text": "x({*[foo](){}});\n\nx({*get(){}});\n\nx({*123(){}});\n\nx({async foo(){}, bar(){}});\n\nx({foo(){}, async bar(){}});\n\nx({async \"foo\"(){}});\n\nx({async [foo](){}});\n\nx({foo(){}, *bar(){}});\n\nx({*foo(){}});",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 195
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

