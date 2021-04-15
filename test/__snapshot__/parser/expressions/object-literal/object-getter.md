# Kataw parser test case

## Input

`````js
x({* foo(){},*bar(){}});
x({[foo](){}, get [bar](){}});
x({get [foo](){}});
x({get [foo](){}, get [bar](){}});
x({get foo(){}});
x({get foo(){}, get bar(){}});
x({get "foo"(){}});
x({get 1(){}});
x({get 0x234241(){}});
x({get 0b001(){}});
x({get 0o4567(){}});

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
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 768,
                                            "start": 4,
                                            "end": 8
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 1280,
                                            "start": 9,
                                            "end": 10
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
                                                "start": 11,
                                                "end": 11
                                            },
                                            "flags": 256,
                                            "start": 10,
                                            "end": 12
                                        },
                                        "flags": 1280,
                                        "start": 8,
                                        "end": 12
                                    },
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 768,
                                            "start": 14,
                                            "end": 17
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 1280,
                                            "start": 18,
                                            "end": 19
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
                                                "start": 20,
                                                "end": 20
                                            },
                                            "flags": 256,
                                            "start": 19,
                                            "end": 21
                                        },
                                        "flags": 1280,
                                        "start": 17,
                                        "end": 21
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 3,
                                "end": 21
                            },
                            "flags": 256,
                            "start": 2,
                            "end": 22
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 2,
                    "end": 22
                },
                "flags": 256,
                "start": 0,
                "end": 23
            },
            "flags": 128,
            "start": 0,
            "end": 24
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 24,
                    "end": 26
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
                                                "flags": 768,
                                                "start": 29,
                                                "end": 32
                                            },
                                            "flags": 256,
                                            "start": 28,
                                            "end": 33
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 34,
                                            "end": 35
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
                                                "start": 36,
                                                "end": 36
                                            },
                                            "flags": 256,
                                            "start": 35,
                                            "end": 37
                                        },
                                        "flags": 256,
                                        "start": 33,
                                        "end": 37
                                    },
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 768,
                                                "start": 44,
                                                "end": 47
                                            },
                                            "flags": 256,
                                            "start": 42,
                                            "end": 48
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 8448,
                                            "start": 49,
                                            "end": 50
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
                                                "start": 51,
                                                "end": 51
                                            },
                                            "flags": 256,
                                            "start": 50,
                                            "end": 52
                                        },
                                        "flags": 8448,
                                        "start": 48,
                                        "end": 52
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 28,
                                "end": 52
                            },
                            "flags": 256,
                            "start": 27,
                            "end": 53
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 27,
                    "end": 53
                },
                "flags": 256,
                "start": 24,
                "end": 54
            },
            "flags": 128,
            "start": 24,
            "end": 55
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 55,
                    "end": 57
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
                                                "flags": 768,
                                                "start": 64,
                                                "end": 67
                                            },
                                            "flags": 256,
                                            "start": 62,
                                            "end": 68
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 8448,
                                            "start": 69,
                                            "end": 70
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
                                                "start": 71,
                                                "end": 71
                                            },
                                            "flags": 256,
                                            "start": 70,
                                            "end": 72
                                        },
                                        "flags": 8448,
                                        "start": 68,
                                        "end": 72
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 59,
                                "end": 72
                            },
                            "flags": 256,
                            "start": 58,
                            "end": 73
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 58,
                    "end": 73
                },
                "flags": 256,
                "start": 55,
                "end": 74
            },
            "flags": 128,
            "start": 55,
            "end": 75
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 75,
                    "end": 77
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
                                                "flags": 768,
                                                "start": 84,
                                                "end": 87
                                            },
                                            "flags": 256,
                                            "start": 82,
                                            "end": 88
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 8448,
                                            "start": 89,
                                            "end": 90
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
                                                "start": 91,
                                                "end": 91
                                            },
                                            "flags": 256,
                                            "start": 90,
                                            "end": 92
                                        },
                                        "flags": 8448,
                                        "start": 88,
                                        "end": 92
                                    },
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 768,
                                                "start": 99,
                                                "end": 102
                                            },
                                            "flags": 256,
                                            "start": 97,
                                            "end": 103
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 8448,
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
                                        "flags": 8448,
                                        "start": 103,
                                        "end": 107
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 79,
                                "end": 107
                            },
                            "flags": 256,
                            "start": 78,
                            "end": 108
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 78,
                    "end": 108
                },
                "flags": 256,
                "start": 75,
                "end": 109
            },
            "flags": 128,
            "start": 75,
            "end": 110
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 110,
                    "end": 112
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
                                            "flags": 768,
                                            "start": 117,
                                            "end": 121
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 8448,
                                            "start": 122,
                                            "end": 123
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
                                                "start": 124,
                                                "end": 124
                                            },
                                            "flags": 256,
                                            "start": 123,
                                            "end": 125
                                        },
                                        "flags": 8448,
                                        "start": 121,
                                        "end": 125
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 114,
                                "end": 125
                            },
                            "flags": 256,
                            "start": 113,
                            "end": 126
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 113,
                    "end": 126
                },
                "flags": 256,
                "start": 110,
                "end": 127
            },
            "flags": 128,
            "start": 110,
            "end": 128
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 128,
                    "end": 130
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
                                            "flags": 768,
                                            "start": 135,
                                            "end": 139
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 8448,
                                            "start": 140,
                                            "end": 141
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
                                                "start": 142,
                                                "end": 142
                                            },
                                            "flags": 256,
                                            "start": 141,
                                            "end": 143
                                        },
                                        "flags": 8448,
                                        "start": 139,
                                        "end": 143
                                    },
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 768,
                                            "start": 148,
                                            "end": 152
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 8448,
                                            "start": 153,
                                            "end": 154
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
                                                "start": 155,
                                                "end": 155
                                            },
                                            "flags": 256,
                                            "start": 154,
                                            "end": 156
                                        },
                                        "flags": 8448,
                                        "start": 152,
                                        "end": 156
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 132,
                                "end": 156
                            },
                            "flags": 256,
                            "start": 131,
                            "end": 157
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 131,
                    "end": 157
                },
                "flags": 256,
                "start": 128,
                "end": 158
            },
            "flags": 128,
            "start": 128,
            "end": 159
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 159,
                    "end": 161
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
                                            "kind": 201392131,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 768,
                                            "start": 166,
                                            "end": 172
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 8448,
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
                                                "multiline": false,
                                                "flags": 256,
                                                "start": 175,
                                                "end": 175
                                            },
                                            "flags": 256,
                                            "start": 174,
                                            "end": 176
                                        },
                                        "flags": 8448,
                                        "start": 172,
                                        "end": 176
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 163,
                                "end": 176
                            },
                            "flags": 256,
                            "start": 162,
                            "end": 177
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 162,
                    "end": 177
                },
                "flags": 256,
                "start": 159,
                "end": 178
            },
            "flags": 128,
            "start": 159,
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
                    "flags": 768,
                    "start": 179,
                    "end": 181
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
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 768,
                                            "start": 186,
                                            "end": 188
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 8448,
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
                                                "multiline": false,
                                                "flags": 256,
                                                "start": 191,
                                                "end": 191
                                            },
                                            "flags": 256,
                                            "start": 190,
                                            "end": 192
                                        },
                                        "flags": 8448,
                                        "start": 188,
                                        "end": 192
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 183,
                                "end": 192
                            },
                            "flags": 256,
                            "start": 182,
                            "end": 193
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 182,
                    "end": 193
                },
                "flags": 256,
                "start": 179,
                "end": 194
            },
            "flags": 128,
            "start": 179,
            "end": 195
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 195,
                    "end": 197
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
                                            "text": 2310721,
                                            "rawText": "0x234241",
                                            "flags": 16777984,
                                            "start": 202,
                                            "end": 211
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 8448,
                                            "start": 212,
                                            "end": 213
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
                                                "start": 214,
                                                "end": 214
                                            },
                                            "flags": 256,
                                            "start": 213,
                                            "end": 215
                                        },
                                        "flags": 8448,
                                        "start": 211,
                                        "end": 215
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 199,
                                "end": 215
                            },
                            "flags": 256,
                            "start": 198,
                            "end": 216
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 198,
                    "end": 216
                },
                "flags": 256,
                "start": 195,
                "end": 217
            },
            "flags": 128,
            "start": 195,
            "end": 218
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 218,
                    "end": 220
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
                                            "text": 1,
                                            "rawText": "0b001",
                                            "flags": 8389376,
                                            "start": 225,
                                            "end": 231
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 8448,
                                            "start": 232,
                                            "end": 233
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
                                                "start": 234,
                                                "end": 234
                                            },
                                            "flags": 256,
                                            "start": 233,
                                            "end": 235
                                        },
                                        "flags": 8448,
                                        "start": 231,
                                        "end": 235
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 222,
                                "end": 235
                            },
                            "flags": 256,
                            "start": 221,
                            "end": 236
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 221,
                    "end": 236
                },
                "flags": 256,
                "start": 218,
                "end": 237
            },
            "flags": 128,
            "start": 218,
            "end": 238
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 238,
                    "end": 240
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
                                            "text": 2423,
                                            "rawText": "0o4567",
                                            "flags": 4195072,
                                            "start": 245,
                                            "end": 252
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 8448,
                                            "start": 253,
                                            "end": 254
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
                                                "start": 255,
                                                "end": 255
                                            },
                                            "flags": 256,
                                            "start": 254,
                                            "end": 256
                                        },
                                        "flags": 8448,
                                        "start": 252,
                                        "end": 256
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 242,
                                "end": 256
                            },
                            "flags": 256,
                            "start": 241,
                            "end": 257
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 241,
                    "end": 257
                },
                "flags": 256,
                "start": 238,
                "end": 258
            },
            "flags": 128,
            "start": 238,
            "end": 259
        }
    ],
    "isModule": false,
    "text": "x({* foo(){},*bar(){}});\nx({[foo](){}, get [bar](){}});\nx({get [foo](){}});\nx({get [foo](){}, get [bar](){}});\nx({get foo(){}});\nx({get foo(){}, get bar(){}});\nx({get \"foo\"(){}});\nx({get 1(){}});\nx({get 0x234241(){}});\nx({get 0b001(){}});\nx({get 0o4567(){}});\n",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 260
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

