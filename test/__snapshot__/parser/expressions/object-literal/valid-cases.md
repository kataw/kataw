# Kataw parser test case

## Input

`````js
({ foo: 1, get foo() {}});

({ foo: 1, set foo(v) {}});

({ "foo": 1, get "foo"() {}});

({"foo": 1, set "foo"(v) {}});

({1: 1, get 1() {}});

({1: 1, set 1(v) {}});

({get foo() {}, get foo() {}});

({set foo(_) {}, set foo(v) {}});

({ foo: 1, get "foo"() {}});

({ foo: 1, set "foo"(v) {}});

({ get(){} });

({ set : 0 });

({ if: 4 });

({ async 0(){} });

({ interface: 5 });

({ async set(){} });

({ async : 0 });

"use strict"; ({ *async(){} });
"use strict"; ({ get 1() {} });
"use strict"; ({ foo: 1, set bar(v) {} });

({ 1: 1, set 2(v) {} });

({ get: 1, get foo() {} });

({ set: 1, set foo(_) {} });

({ 1: 1, 2: 2 });
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
                                    "start": 7,
                                    "end": 9
                                },
                                "right": {
                                    "kind": 134299649,
                                    "original": "foo",
                                    "text": "foo",
                                    "rawText": " foo",
                                    "flags": 96,
                                    "start": 2,
                                    "end": 6
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 9
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "original": "foo",
                                    "text": "foo",
                                    "rawText": " foo",
                                    "flags": 96,
                                    "start": 14,
                                    "end": 18
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 1056,
                                    "start": 19,
                                    "end": 20
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 22,
                                        "end": 22
                                    },
                                    "flags": 32,
                                    "start": 20,
                                    "end": 23
                                },
                                "flags": 1056,
                                "start": 18,
                                "end": 23
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 23
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 24
                },
                "flags": 32,
                "start": 0,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 26
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
                                    "start": 35,
                                    "end": 37
                                },
                                "right": {
                                    "kind": 134299649,
                                    "original": "foo",
                                    "text": "foo",
                                    "rawText": " foo",
                                    "flags": 96,
                                    "start": 30,
                                    "end": 34
                                },
                                "flags": 32,
                                "start": 30,
                                "end": 37
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "original": "foo",
                                    "text": "foo",
                                    "rawText": " foo",
                                    "flags": 96,
                                    "start": 42,
                                    "end": 46
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
                                                "start": 47,
                                                "end": 48
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 47,
                                            "end": 48
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 544,
                                    "start": 47,
                                    "end": 49
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 51,
                                        "end": 51
                                    },
                                    "flags": 32,
                                    "start": 49,
                                    "end": 52
                                },
                                "flags": 544,
                                "start": 46,
                                "end": 52
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 30,
                        "end": 52
                    },
                    "flags": 32,
                    "start": 29,
                    "end": 53
                },
                "flags": 32,
                "start": 26,
                "end": 54
            },
            "flags": 16,
            "start": 26,
            "end": 55
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
                                    "start": 66,
                                    "end": 68
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "foo",
                                    "original": "\"foo\"",
                                    "rawText": " \"foo\"",
                                    "flags": 96,
                                    "start": 59,
                                    "end": 65
                                },
                                "flags": 32,
                                "start": 59,
                                "end": 68
                            },
                            {
                                "kind": 134299649,
                                "original": "get",
                                "text": "get",
                                "rawText": " get",
                                "flags": 96,
                                "start": 69,
                                "end": 73
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 201392131,
                                    "text": "foo",
                                    "original": "\"foo\"",
                                    "rawText": " \"foo\"",
                                    "flags": 96,
                                    "start": 73,
                                    "end": 79
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 80,
                                    "end": 81
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 83,
                                        "end": 83
                                    },
                                    "flags": 32,
                                    "start": 81,
                                    "end": 84
                                },
                                "flags": 32,
                                "start": 79,
                                "end": 84
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 59,
                        "end": 84
                    },
                    "flags": 32,
                    "start": 58,
                    "end": 85
                },
                "flags": 32,
                "start": 55,
                "end": 86
            },
            "flags": 16,
            "start": 55,
            "end": 87
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
                                    "start": 97,
                                    "end": 99
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "foo",
                                    "original": "\"foo\"",
                                    "rawText": "\"foo\"",
                                    "flags": 96,
                                    "start": 91,
                                    "end": 96
                                },
                                "flags": 32,
                                "start": 91,
                                "end": 99
                            },
                            {
                                "kind": 134299649,
                                "original": "set",
                                "text": "set",
                                "rawText": " set",
                                "flags": 96,
                                "start": 100,
                                "end": 104
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 201392131,
                                    "text": "foo",
                                    "original": "\"foo\"",
                                    "rawText": " \"foo\"",
                                    "flags": 96,
                                    "start": 104,
                                    "end": 110
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
                                                "start": 111,
                                                "end": 112
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 111,
                                            "end": 112
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 111,
                                    "end": 113
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 115,
                                        "end": 115
                                    },
                                    "flags": 32,
                                    "start": 113,
                                    "end": 116
                                },
                                "flags": 32,
                                "start": 110,
                                "end": 116
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 91,
                        "end": 116
                    },
                    "flags": 32,
                    "start": 90,
                    "end": 117
                },
                "flags": 32,
                "start": 87,
                "end": 118
            },
            "flags": 16,
            "start": 87,
            "end": 119
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
                                    "start": 125,
                                    "end": 127
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "original": "1",
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 123,
                                    "end": 124
                                },
                                "flags": 32,
                                "start": 123,
                                "end": 127
                            },
                            {
                                "kind": 134299649,
                                "original": "get",
                                "text": "get",
                                "rawText": " get",
                                "flags": 96,
                                "start": 128,
                                "end": 132
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "original": "1",
                                    "rawText": " 1",
                                    "flags": 96,
                                    "start": 132,
                                    "end": 134
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 135,
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
                                "flags": 32,
                                "start": 134,
                                "end": 139
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 123,
                        "end": 139
                    },
                    "flags": 32,
                    "start": 122,
                    "end": 140
                },
                "flags": 32,
                "start": 119,
                "end": 141
            },
            "flags": 16,
            "start": 119,
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
                                    "start": 148,
                                    "end": 150
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "original": "1",
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 146,
                                    "end": 147
                                },
                                "flags": 32,
                                "start": 146,
                                "end": 150
                            },
                            {
                                "kind": 134299649,
                                "original": "set",
                                "text": "set",
                                "rawText": " set",
                                "flags": 96,
                                "start": 151,
                                "end": 155
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "original": "1",
                                    "rawText": " 1",
                                    "flags": 96,
                                    "start": 155,
                                    "end": 157
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
                                                "start": 158,
                                                "end": 159
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 158,
                                            "end": 159
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 158,
                                    "end": 160
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 162,
                                        "end": 162
                                    },
                                    "flags": 32,
                                    "start": 160,
                                    "end": 163
                                },
                                "flags": 32,
                                "start": 157,
                                "end": 163
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 146,
                        "end": 163
                    },
                    "flags": 32,
                    "start": 145,
                    "end": 164
                },
                "flags": 32,
                "start": 142,
                "end": 165
            },
            "flags": 16,
            "start": 142,
            "end": 166
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
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "original": "foo",
                                    "text": "foo",
                                    "rawText": " foo",
                                    "flags": 96,
                                    "start": 187,
                                    "end": 191
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 1056,
                                    "start": 192,
                                    "end": 193
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 195,
                                        "end": 195
                                    },
                                    "flags": 32,
                                    "start": 193,
                                    "end": 196
                                },
                                "flags": 1056,
                                "start": 191,
                                "end": 196
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 170,
                        "end": 196
                    },
                    "flags": 32,
                    "start": 169,
                    "end": 197
                },
                "flags": 32,
                "start": 166,
                "end": 198
            },
            "flags": 16,
            "start": 166,
            "end": 199
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
                                    "start": 206,
                                    "end": 210
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
                                                "original": "_",
                                                "text": "_",
                                                "rawText": "_",
                                                "flags": 96,
                                                "start": 211,
                                                "end": 212
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 211,
                                            "end": 212
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 544,
                                    "start": 211,
                                    "end": 213
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 215,
                                        "end": 215
                                    },
                                    "flags": 32,
                                    "start": 213,
                                    "end": 216
                                },
                                "flags": 544,
                                "start": 210,
                                "end": 216
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "original": "foo",
                                    "text": "foo",
                                    "rawText": " foo",
                                    "flags": 96,
                                    "start": 221,
                                    "end": 225
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
                                                "start": 226,
                                                "end": 227
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 226,
                                            "end": 227
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 544,
                                    "start": 226,
                                    "end": 228
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 230,
                                        "end": 230
                                    },
                                    "flags": 32,
                                    "start": 228,
                                    "end": 231
                                },
                                "flags": 544,
                                "start": 225,
                                "end": 231
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 203,
                        "end": 231
                    },
                    "flags": 32,
                    "start": 202,
                    "end": 232
                },
                "flags": 32,
                "start": 199,
                "end": 233
            },
            "flags": 16,
            "start": 199,
            "end": 234
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
                                    "start": 243,
                                    "end": 245
                                },
                                "right": {
                                    "kind": 134299649,
                                    "original": "foo",
                                    "text": "foo",
                                    "rawText": " foo",
                                    "flags": 96,
                                    "start": 238,
                                    "end": 242
                                },
                                "flags": 32,
                                "start": 238,
                                "end": 245
                            },
                            {
                                "kind": 134299649,
                                "original": "get",
                                "text": "get",
                                "rawText": " get",
                                "flags": 96,
                                "start": 246,
                                "end": 250
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 201392131,
                                    "text": "foo",
                                    "original": "\"foo\"",
                                    "rawText": " \"foo\"",
                                    "flags": 96,
                                    "start": 250,
                                    "end": 256
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 257,
                                    "end": 258
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 260,
                                        "end": 260
                                    },
                                    "flags": 32,
                                    "start": 258,
                                    "end": 261
                                },
                                "flags": 32,
                                "start": 256,
                                "end": 261
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 238,
                        "end": 261
                    },
                    "flags": 32,
                    "start": 237,
                    "end": 262
                },
                "flags": 32,
                "start": 234,
                "end": 263
            },
            "flags": 16,
            "start": 234,
            "end": 264
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
                                    "start": 273,
                                    "end": 275
                                },
                                "right": {
                                    "kind": 134299649,
                                    "original": "foo",
                                    "text": "foo",
                                    "rawText": " foo",
                                    "flags": 96,
                                    "start": 268,
                                    "end": 272
                                },
                                "flags": 32,
                                "start": 268,
                                "end": 275
                            },
                            {
                                "kind": 134299649,
                                "original": "set",
                                "text": "set",
                                "rawText": " set",
                                "flags": 96,
                                "start": 276,
                                "end": 280
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 201392131,
                                    "text": "foo",
                                    "original": "\"foo\"",
                                    "rawText": " \"foo\"",
                                    "flags": 96,
                                    "start": 280,
                                    "end": 286
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
                                                "start": 287,
                                                "end": 288
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 287,
                                            "end": 288
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 287,
                                    "end": 289
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 291,
                                        "end": 291
                                    },
                                    "flags": 32,
                                    "start": 289,
                                    "end": 292
                                },
                                "flags": 32,
                                "start": 286,
                                "end": 292
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 268,
                        "end": 292
                    },
                    "flags": 32,
                    "start": 267,
                    "end": 293
                },
                "flags": 32,
                "start": 264,
                "end": 294
            },
            "flags": 16,
            "start": 264,
            "end": 295
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
                                    "original": "get",
                                    "text": "get",
                                    "rawText": " get",
                                    "flags": 96,
                                    "start": 299,
                                    "end": 303
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 304,
                                    "end": 305
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 306,
                                        "end": 306
                                    },
                                    "flags": 32,
                                    "start": 305,
                                    "end": 307
                                },
                                "flags": 32,
                                "start": 303,
                                "end": 307
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 299,
                        "end": 307
                    },
                    "flags": 32,
                    "start": 298,
                    "end": 309
                },
                "flags": 32,
                "start": 295,
                "end": 310
            },
            "flags": 16,
            "start": 295,
            "end": 311
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
                                    "text": 0,
                                    "original": "0",
                                    "rawText": " 0",
                                    "flags": 96,
                                    "start": 321,
                                    "end": 323
                                },
                                "right": {
                                    "kind": 134299649,
                                    "original": "set",
                                    "text": "set",
                                    "rawText": " set",
                                    "flags": 96,
                                    "start": 315,
                                    "end": 319
                                },
                                "flags": 32,
                                "start": 315,
                                "end": 323
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 315,
                        "end": 323
                    },
                    "flags": 32,
                    "start": 314,
                    "end": 325
                },
                "flags": 32,
                "start": 311,
                "end": 326
            },
            "flags": 16,
            "start": 311,
            "end": 327
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
                                    "text": 4,
                                    "original": "4",
                                    "rawText": " 4",
                                    "flags": 96,
                                    "start": 335,
                                    "end": 337
                                },
                                "right": {
                                    "kind": 134299649,
                                    "original": "if",
                                    "text": "if",
                                    "rawText": " if",
                                    "flags": 96,
                                    "start": 331,
                                    "end": 334
                                },
                                "flags": 32,
                                "start": 331,
                                "end": 337
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 331,
                        "end": 337
                    },
                    "flags": 32,
                    "start": 330,
                    "end": 339
                },
                "flags": 32,
                "start": 327,
                "end": 340
            },
            "flags": 16,
            "start": 327,
            "end": 341
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
                                "original": "async",
                                "text": "async",
                                "rawText": " async",
                                "flags": 96,
                                "start": 345,
                                "end": 351
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "original": "0",
                                    "rawText": " 0",
                                    "flags": 96,
                                    "start": 351,
                                    "end": 353
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 354,
                                    "end": 355
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 356,
                                        "end": 356
                                    },
                                    "flags": 32,
                                    "start": 355,
                                    "end": 357
                                },
                                "flags": 32,
                                "start": 353,
                                "end": 357
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 345,
                        "end": 357
                    },
                    "flags": 32,
                    "start": 344,
                    "end": 359
                },
                "flags": 32,
                "start": 341,
                "end": 360
            },
            "flags": 16,
            "start": 341,
            "end": 361
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
                                    "text": 5,
                                    "original": "5",
                                    "rawText": " 5",
                                    "flags": 96,
                                    "start": 376,
                                    "end": 378
                                },
                                "right": {
                                    "kind": 134299649,
                                    "original": "interface",
                                    "text": "interface",
                                    "rawText": " interface",
                                    "flags": 96,
                                    "start": 365,
                                    "end": 375
                                },
                                "flags": 32,
                                "start": 365,
                                "end": 378
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 365,
                        "end": 378
                    },
                    "flags": 32,
                    "start": 364,
                    "end": 380
                },
                "flags": 32,
                "start": 361,
                "end": 381
            },
            "flags": 16,
            "start": 361,
            "end": 382
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
                                    "original": "set",
                                    "text": "set",
                                    "rawText": " set",
                                    "flags": 96,
                                    "start": 392,
                                    "end": 396
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 288,
                                    "start": 397,
                                    "end": 398
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 399,
                                        "end": 399
                                    },
                                    "flags": 32,
                                    "start": 398,
                                    "end": 400
                                },
                                "flags": 288,
                                "start": 396,
                                "end": 400
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 386,
                        "end": 400
                    },
                    "flags": 32,
                    "start": 385,
                    "end": 402
                },
                "flags": 32,
                "start": 382,
                "end": 403
            },
            "flags": 16,
            "start": 382,
            "end": 404
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
                                    "text": 0,
                                    "original": "0",
                                    "rawText": " 0",
                                    "flags": 96,
                                    "start": 416,
                                    "end": 418
                                },
                                "right": {
                                    "kind": 134299649,
                                    "original": "async",
                                    "text": "async",
                                    "rawText": " async",
                                    "flags": 96,
                                    "start": 408,
                                    "end": 414
                                },
                                "flags": 32,
                                "start": 408,
                                "end": 418
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 408,
                        "end": 418
                    },
                    "flags": 32,
                    "start": 407,
                    "end": 420
                },
                "flags": 32,
                "start": 404,
                "end": 421
            },
            "flags": 16,
            "start": 404,
            "end": 422
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "original": "\"use strict\"",
                "rawText": "\n\n\"use strict\"",
                "flags": 97,
                "start": 422,
                "end": 436
            },
            "flags": 16,
            "start": 422,
            "end": 437
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
                                    "original": "async",
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 96,
                                    "start": 442,
                                    "end": 447
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 160,
                                    "start": 448,
                                    "end": 449
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 450,
                                        "end": 450
                                    },
                                    "flags": 32,
                                    "start": 449,
                                    "end": 451
                                },
                                "flags": 160,
                                "start": 447,
                                "end": 451
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 440,
                        "end": 451
                    },
                    "flags": 32,
                    "start": 439,
                    "end": 453
                },
                "flags": 32,
                "start": 437,
                "end": 454
            },
            "flags": 16,
            "start": 437,
            "end": 455
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "original": "\"use strict\"",
                "rawText": "\n\"use strict\"",
                "flags": 97,
                "start": 455,
                "end": 468
            },
            "flags": 16,
            "start": 455,
            "end": 469
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
                                "original": "get",
                                "text": "get",
                                "rawText": " get",
                                "flags": 96,
                                "start": 472,
                                "end": 476
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "original": "1",
                                    "rawText": " 1",
                                    "flags": 96,
                                    "start": 476,
                                    "end": 478
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 479,
                                    "end": 480
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 482,
                                        "end": 482
                                    },
                                    "flags": 32,
                                    "start": 480,
                                    "end": 483
                                },
                                "flags": 32,
                                "start": 478,
                                "end": 483
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 472,
                        "end": 483
                    },
                    "flags": 32,
                    "start": 471,
                    "end": 485
                },
                "flags": 32,
                "start": 469,
                "end": 486
            },
            "flags": 16,
            "start": 469,
            "end": 487
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "original": "\"use strict\"",
                "rawText": "\n\"use strict\"",
                "flags": 97,
                "start": 487,
                "end": 500
            },
            "flags": 16,
            "start": 487,
            "end": 501
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
                                    "start": 509,
                                    "end": 511
                                },
                                "right": {
                                    "kind": 134299649,
                                    "original": "foo",
                                    "text": "foo",
                                    "rawText": " foo",
                                    "flags": 96,
                                    "start": 504,
                                    "end": 508
                                },
                                "flags": 32,
                                "start": 504,
                                "end": 511
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "original": "bar",
                                    "text": "bar",
                                    "rawText": " bar",
                                    "flags": 96,
                                    "start": 516,
                                    "end": 520
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
                                                "start": 521,
                                                "end": 522
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 521,
                                            "end": 522
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 544,
                                    "start": 521,
                                    "end": 523
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 525,
                                        "end": 525
                                    },
                                    "flags": 32,
                                    "start": 523,
                                    "end": 526
                                },
                                "flags": 544,
                                "start": 520,
                                "end": 526
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 504,
                        "end": 526
                    },
                    "flags": 32,
                    "start": 503,
                    "end": 528
                },
                "flags": 32,
                "start": 501,
                "end": 529
            },
            "flags": 16,
            "start": 501,
            "end": 530
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
                                    "start": 537,
                                    "end": 539
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "original": "1",
                                    "rawText": " 1",
                                    "flags": 96,
                                    "start": 534,
                                    "end": 536
                                },
                                "flags": 32,
                                "start": 534,
                                "end": 539
                            },
                            {
                                "kind": 134299649,
                                "original": "set",
                                "text": "set",
                                "rawText": " set",
                                "flags": 96,
                                "start": 540,
                                "end": 544
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 201392130,
                                    "text": 2,
                                    "original": "2",
                                    "rawText": " 2",
                                    "flags": 96,
                                    "start": 544,
                                    "end": 546
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
                                                "start": 547,
                                                "end": 548
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 547,
                                            "end": 548
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 547,
                                    "end": 549
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 551,
                                        "end": 551
                                    },
                                    "flags": 32,
                                    "start": 549,
                                    "end": 552
                                },
                                "flags": 32,
                                "start": 546,
                                "end": 552
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 534,
                        "end": 552
                    },
                    "flags": 32,
                    "start": 533,
                    "end": 554
                },
                "flags": 32,
                "start": 530,
                "end": 555
            },
            "flags": 16,
            "start": 530,
            "end": 556
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
                                    "start": 565,
                                    "end": 567
                                },
                                "right": {
                                    "kind": 134299649,
                                    "original": "get",
                                    "text": "get",
                                    "rawText": " get",
                                    "flags": 96,
                                    "start": 560,
                                    "end": 564
                                },
                                "flags": 32,
                                "start": 560,
                                "end": 567
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "original": "foo",
                                    "text": "foo",
                                    "rawText": " foo",
                                    "flags": 96,
                                    "start": 572,
                                    "end": 576
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 1056,
                                    "start": 577,
                                    "end": 578
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 580,
                                        "end": 580
                                    },
                                    "flags": 32,
                                    "start": 578,
                                    "end": 581
                                },
                                "flags": 1056,
                                "start": 576,
                                "end": 581
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 560,
                        "end": 581
                    },
                    "flags": 32,
                    "start": 559,
                    "end": 583
                },
                "flags": 32,
                "start": 556,
                "end": 584
            },
            "flags": 16,
            "start": 556,
            "end": 585
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
                                    "start": 594,
                                    "end": 596
                                },
                                "right": {
                                    "kind": 134299649,
                                    "original": "set",
                                    "text": "set",
                                    "rawText": " set",
                                    "flags": 96,
                                    "start": 589,
                                    "end": 593
                                },
                                "flags": 32,
                                "start": 589,
                                "end": 596
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "original": "foo",
                                    "text": "foo",
                                    "rawText": " foo",
                                    "flags": 96,
                                    "start": 601,
                                    "end": 605
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
                                                "original": "_",
                                                "text": "_",
                                                "rawText": "_",
                                                "flags": 96,
                                                "start": 606,
                                                "end": 607
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 606,
                                            "end": 607
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 544,
                                    "start": 606,
                                    "end": 608
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 610,
                                        "end": 610
                                    },
                                    "flags": 32,
                                    "start": 608,
                                    "end": 611
                                },
                                "flags": 544,
                                "start": 605,
                                "end": 611
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 589,
                        "end": 611
                    },
                    "flags": 32,
                    "start": 588,
                    "end": 613
                },
                "flags": 32,
                "start": 585,
                "end": 614
            },
            "flags": 16,
            "start": 585,
            "end": 615
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
                                    "start": 622,
                                    "end": 624
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "original": "1",
                                    "rawText": " 1",
                                    "flags": 96,
                                    "start": 619,
                                    "end": 621
                                },
                                "flags": 32,
                                "start": 619,
                                "end": 624
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
                                    "start": 628,
                                    "end": 630
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 2,
                                    "original": "2",
                                    "rawText": " 2",
                                    "flags": 96,
                                    "start": 625,
                                    "end": 627
                                },
                                "flags": 32,
                                "start": 625,
                                "end": 630
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 619,
                        "end": 630
                    },
                    "flags": 32,
                    "start": 618,
                    "end": 632
                },
                "flags": 32,
                "start": 615,
                "end": 633
            },
            "flags": 16,
            "start": 615,
            "end": 634
        }
    ],
    "isModule": false,
    "source": "({ foo: 1, get foo() {}});\n\n({ foo: 1, set foo(v) {}});\n\n({ \"foo\": 1, get \"foo\"() {}});\n\n({\"foo\": 1, set \"foo\"(v) {}});\n\n({1: 1, get 1() {}});\n\n({1: 1, set 1(v) {}});\n\n({get foo() {}, get foo() {}});\n\n({set foo(_) {}, set foo(v) {}});\n\n({ foo: 1, get \"foo\"() {}});\n\n({ foo: 1, set \"foo\"(v) {}});\n\n({ get(){} });\n\n({ set : 0 });\n\n({ if: 4 });\n\n({ async 0(){} });\n\n({ interface: 5 });\n\n({ async set(){} });\n\n({ async : 0 });\n\n\"use strict\"; ({ *async(){} });\n\"use strict\"; ({ get 1() {} });\n\"use strict\"; ({ foo: 1, set bar(v) {} });\n\n({ 1: 1, set 2(v) {} });\n\n({ get: 1, get foo() {} });\n\n({ set: 1, set foo(_) {} });\n\n({ 1: 1, 2: 2 });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 634
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 73, end: 79
✖ ',' expected - start: 104, end: 110
✖ ',' expected - start: 132, end: 134
✖ ',' expected - start: 155, end: 157
✖ ',' expected - start: 250, end: 256
✖ ',' expected - start: 280, end: 286
✖ ',' expected - start: 351, end: 353
✖ ',' expected - start: 476, end: 478
✖ ',' expected - start: 544, end: 546

```

