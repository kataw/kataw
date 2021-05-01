# Kataw parser test case

## Input

`````js
({1: 1, set 1(v) {}});
({1: 1, get 1() {}});
({1: 1, set "1"(v) {}});
({foo: 1, bar: 2});
({1: 1, 2: 2});
({get foo() {}});
({set foo(v) {}});
({set 1(v) {}});
({foo: 1, get bar() {}});
({1: 1, get 2() {}});
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
                                "kind": 219,
                                "generatorToken": null,
                                "asyncKeyword": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "original": "1",
                                    "rawText": " 1",
                                    "flags": 96,
                                    "start": 4,
                                    "end": 6
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "original": "1",
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 2,
                                    "end": 3
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 6
                            },
                            {
                                "kind": 134299649,
                                "original": "set",
                                "text": "set",
                                "rawText": " set",
                                "flags": 96,
                                "start": 7,
                                "end": 11
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "original": "1",
                                    "rawText": " 1",
                                    "flags": 96,
                                    "start": 11,
                                    "end": 13
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
                                                "original": "v",
                                                "text": "v",
                                                "rawText": "v",
                                                "flags": 96,
                                                "start": 14,
                                                "end": 15
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 14,
                                            "end": 15
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 14,
                                    "end": 16
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 18,
                                        "end": 18
                                    },
                                    "flags": 32,
                                    "start": 16,
                                    "end": 19
                                },
                                "flags": 32,
                                "start": 13,
                                "end": 19
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 19
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 20
                },
                "flags": 32,
                "start": 0,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 22
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
                                "kind": 219,
                                "generatorToken": null,
                                "asyncKeyword": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "original": "1",
                                    "rawText": " 1",
                                    "flags": 96,
                                    "start": 27,
                                    "end": 29
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "original": "1",
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 25,
                                    "end": 26
                                },
                                "flags": 32,
                                "start": 25,
                                "end": 29
                            },
                            {
                                "kind": 134299649,
                                "original": "get",
                                "text": "get",
                                "rawText": " get",
                                "flags": 96,
                                "start": 30,
                                "end": 34
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "original": "1",
                                    "rawText": " 1",
                                    "flags": 96,
                                    "start": 34,
                                    "end": 36
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 37,
                                    "end": 38
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 40,
                                        "end": 40
                                    },
                                    "flags": 32,
                                    "start": 38,
                                    "end": 41
                                },
                                "flags": 32,
                                "start": 36,
                                "end": 41
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 25,
                        "end": 41
                    },
                    "flags": 32,
                    "start": 24,
                    "end": 42
                },
                "flags": 32,
                "start": 22,
                "end": 43
            },
            "flags": 16,
            "start": 22,
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
                                "kind": 219,
                                "generatorToken": null,
                                "asyncKeyword": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "original": "1",
                                    "rawText": " 1",
                                    "flags": 96,
                                    "start": 49,
                                    "end": 51
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "original": "1",
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 47,
                                    "end": 48
                                },
                                "flags": 32,
                                "start": 47,
                                "end": 51
                            },
                            {
                                "kind": 134299649,
                                "original": "set",
                                "text": "set",
                                "rawText": " set",
                                "flags": 96,
                                "start": 52,
                                "end": 56
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 201392131,
                                    "text": "1",
                                    "original": "\"1\"",
                                    "rawText": " \"1\"",
                                    "flags": 96,
                                    "start": 56,
                                    "end": 60
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
                                                "original": "v",
                                                "text": "v",
                                                "rawText": "v",
                                                "flags": 96,
                                                "start": 61,
                                                "end": 62
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 61,
                                            "end": 62
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 61,
                                    "end": 63
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
                                    "start": 63,
                                    "end": 66
                                },
                                "flags": 32,
                                "start": 60,
                                "end": 66
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 47,
                        "end": 66
                    },
                    "flags": 32,
                    "start": 46,
                    "end": 67
                },
                "flags": 32,
                "start": 44,
                "end": 68
            },
            "flags": 16,
            "start": 44,
            "end": 69
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
                                "kind": 219,
                                "generatorToken": null,
                                "asyncKeyword": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "original": "1",
                                    "rawText": " 1",
                                    "flags": 96,
                                    "start": 76,
                                    "end": 78
                                },
                                "right": {
                                    "kind": 134299649,
                                    "original": "foo",
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 72,
                                    "end": 75
                                },
                                "flags": 32,
                                "start": 72,
                                "end": 78
                            },
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "asyncKeyword": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 2,
                                    "original": "2",
                                    "rawText": " 2",
                                    "flags": 96,
                                    "start": 84,
                                    "end": 86
                                },
                                "right": {
                                    "kind": 134299649,
                                    "original": "bar",
                                    "text": "bar",
                                    "rawText": " bar",
                                    "flags": 96,
                                    "start": 79,
                                    "end": 83
                                },
                                "flags": 32,
                                "start": 79,
                                "end": 86
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 72,
                        "end": 86
                    },
                    "flags": 32,
                    "start": 71,
                    "end": 87
                },
                "flags": 32,
                "start": 69,
                "end": 88
            },
            "flags": 16,
            "start": 69,
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
                                "kind": 219,
                                "generatorToken": null,
                                "asyncKeyword": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "original": "1",
                                    "rawText": " 1",
                                    "flags": 96,
                                    "start": 94,
                                    "end": 96
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "original": "1",
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 92,
                                    "end": 93
                                },
                                "flags": 32,
                                "start": 92,
                                "end": 96
                            },
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "asyncKeyword": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 2,
                                    "original": "2",
                                    "rawText": " 2",
                                    "flags": 96,
                                    "start": 100,
                                    "end": 102
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 2,
                                    "original": "2",
                                    "rawText": " 2",
                                    "flags": 96,
                                    "start": 97,
                                    "end": 99
                                },
                                "flags": 32,
                                "start": 97,
                                "end": 102
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 92,
                        "end": 102
                    },
                    "flags": 32,
                    "start": 91,
                    "end": 103
                },
                "flags": 32,
                "start": 89,
                "end": 104
            },
            "flags": 16,
            "start": 89,
            "end": 105
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
                                    "original": "foo",
                                    "text": "foo",
                                    "rawText": " foo",
                                    "flags": 96,
                                    "start": 111,
                                    "end": 115
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 1056,
                                    "start": 116,
                                    "end": 117
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 119,
                                        "end": 119
                                    },
                                    "flags": 32,
                                    "start": 117,
                                    "end": 120
                                },
                                "flags": 1056,
                                "start": 115,
                                "end": 120
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 108,
                        "end": 120
                    },
                    "flags": 32,
                    "start": 107,
                    "end": 121
                },
                "flags": 32,
                "start": 105,
                "end": 122
            },
            "flags": 16,
            "start": 105,
            "end": 123
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
                                    "original": "foo",
                                    "text": "foo",
                                    "rawText": " foo",
                                    "flags": 96,
                                    "start": 129,
                                    "end": 133
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
                                                "original": "v",
                                                "text": "v",
                                                "rawText": "v",
                                                "flags": 96,
                                                "start": 134,
                                                "end": 135
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 134,
                                            "end": 135
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 544,
                                    "start": 134,
                                    "end": 136
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 138,
                                        "end": 138
                                    },
                                    "flags": 32,
                                    "start": 136,
                                    "end": 139
                                },
                                "flags": 544,
                                "start": 133,
                                "end": 139
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 126,
                        "end": 139
                    },
                    "flags": 32,
                    "start": 125,
                    "end": 140
                },
                "flags": 32,
                "start": 123,
                "end": 141
            },
            "flags": 16,
            "start": 123,
            "end": 142
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
                                "kind": 134299649,
                                "original": "set",
                                "text": "set",
                                "rawText": "set",
                                "flags": 96,
                                "start": 145,
                                "end": 148
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "original": "1",
                                    "rawText": " 1",
                                    "flags": 96,
                                    "start": 148,
                                    "end": 150
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
                                                "original": "v",
                                                "text": "v",
                                                "rawText": "v",
                                                "flags": 96,
                                                "start": 151,
                                                "end": 152
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 151,
                                            "end": 152
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 151,
                                    "end": 153
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 155,
                                        "end": 155
                                    },
                                    "flags": 32,
                                    "start": 153,
                                    "end": 156
                                },
                                "flags": 32,
                                "start": 150,
                                "end": 156
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 145,
                        "end": 156
                    },
                    "flags": 32,
                    "start": 144,
                    "end": 157
                },
                "flags": 32,
                "start": 142,
                "end": 158
            },
            "flags": 16,
            "start": 142,
            "end": 159
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
                                "kind": 219,
                                "generatorToken": null,
                                "asyncKeyword": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "original": "1",
                                    "rawText": " 1",
                                    "flags": 96,
                                    "start": 166,
                                    "end": 168
                                },
                                "right": {
                                    "kind": 134299649,
                                    "original": "foo",
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 162,
                                    "end": 165
                                },
                                "flags": 32,
                                "start": 162,
                                "end": 168
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "original": "bar",
                                    "text": "bar",
                                    "rawText": " bar",
                                    "flags": 96,
                                    "start": 173,
                                    "end": 177
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 1056,
                                    "start": 178,
                                    "end": 179
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 181,
                                        "end": 181
                                    },
                                    "flags": 32,
                                    "start": 179,
                                    "end": 182
                                },
                                "flags": 1056,
                                "start": 177,
                                "end": 182
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 162,
                        "end": 182
                    },
                    "flags": 32,
                    "start": 161,
                    "end": 183
                },
                "flags": 32,
                "start": 159,
                "end": 184
            },
            "flags": 16,
            "start": 159,
            "end": 185
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
                                "kind": 219,
                                "generatorToken": null,
                                "asyncKeyword": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "original": "1",
                                    "rawText": " 1",
                                    "flags": 96,
                                    "start": 190,
                                    "end": 192
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "original": "1",
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 188,
                                    "end": 189
                                },
                                "flags": 32,
                                "start": 188,
                                "end": 192
                            },
                            {
                                "kind": 134299649,
                                "original": "get",
                                "text": "get",
                                "rawText": " get",
                                "flags": 96,
                                "start": 193,
                                "end": 197
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 201392130,
                                    "text": 2,
                                    "original": "2",
                                    "rawText": " 2",
                                    "flags": 96,
                                    "start": 197,
                                    "end": 199
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 200,
                                    "end": 201
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 203,
                                        "end": 203
                                    },
                                    "flags": 32,
                                    "start": 201,
                                    "end": 204
                                },
                                "flags": 32,
                                "start": 199,
                                "end": 204
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 188,
                        "end": 204
                    },
                    "flags": 32,
                    "start": 187,
                    "end": 205
                },
                "flags": 32,
                "start": 185,
                "end": 206
            },
            "flags": 16,
            "start": 185,
            "end": 207
        }
    ],
    "isModule": false,
    "source": "({1: 1, set 1(v) {}});\n({1: 1, get 1() {}});\n({1: 1, set \"1\"(v) {}});\n({foo: 1, bar: 2});\n({1: 1, 2: 2});\n({get foo() {}});\n({set foo(v) {}});\n({set 1(v) {}});\n({foo: 1, get bar() {}});\n({1: 1, get 2() {}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 207
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 11, end: 13
✖ ',' expected - start: 34, end: 36
✖ ',' expected - start: 56, end: 60
✖ ',' expected - start: 148, end: 150
✖ ',' expected - start: 197, end: 199

```

