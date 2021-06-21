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

x = {a, ...null, b}:

x = {a, ...()=>{}, b};

x = {a, ...(()=>{})(), b};

x = {a, ...{b() {}}, c};

x = {y: 1}?.['y'];

x = {y: {z: 1}}?.y?.z;

x = {y: {z: 1}}?.y?.z;

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

### CST

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
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 2,
                                    "end": 6
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 7,
                                    "end": 9
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 9
                            },
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": {
                                    "kind": 16498,
                                    "flags": 96,
                                    "start": 10,
                                    "end": 14
                                },
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 14,
                                        "end": 18
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 1056,
                                        "start": 19,
                                        "end": 20
                                    },
                                    "returnType": null,
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
                                },
                                "flags": 32,
                                "start": 10,
                                "end": 23
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 23
                    },
                    "flags": 48,
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
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 30,
                                    "end": 34
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 35,
                                    "end": 37
                                },
                                "flags": 32,
                                "start": 30,
                                "end": 37
                            },
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": {
                                    "kind": 16499,
                                    "flags": 96,
                                    "start": 38,
                                    "end": 42
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 42,
                                        "end": 46
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "v",
                                                "rawText": "v",
                                                "flags": 96,
                                                "start": 47,
                                                "end": 48
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 608,
                                        "start": 47,
                                        "end": 49
                                    },
                                    "returnType": null,
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
                                },
                                "flags": 32,
                                "start": 38,
                                "end": 52
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 30,
                        "end": 52
                    },
                    "flags": 48,
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
                                "asteriskToken": null,
                                "left": {
                                    "kind": 201392131,
                                    "text": "foo",
                                    "rawText": "\"foo\"",
                                    "flags": 96,
                                    "start": 59,
                                    "end": 65
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 66,
                                    "end": 68
                                },
                                "flags": 32,
                                "start": 59,
                                "end": 68
                            },
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": {
                                    "kind": 16498,
                                    "flags": 96,
                                    "start": 69,
                                    "end": 73
                                },
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 201392131,
                                        "text": "foo",
                                        "rawText": "\"foo\"",
                                        "flags": 96,
                                        "start": 73,
                                        "end": 79
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 1056,
                                        "start": 80,
                                        "end": 81
                                    },
                                    "returnType": null,
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
                                    "flags": 1056,
                                    "start": 79,
                                    "end": 84
                                },
                                "flags": 32,
                                "start": 69,
                                "end": 84
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 59,
                        "end": 84
                    },
                    "flags": 48,
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
                                "asteriskToken": null,
                                "left": {
                                    "kind": 201392131,
                                    "text": "foo",
                                    "rawText": "\"foo\"",
                                    "flags": 96,
                                    "start": 91,
                                    "end": 96
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 97,
                                    "end": 99
                                },
                                "flags": 32,
                                "start": 91,
                                "end": 99
                            },
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": {
                                    "kind": 16499,
                                    "flags": 96,
                                    "start": 100,
                                    "end": 104
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 201392131,
                                        "text": "foo",
                                        "rawText": "\"foo\"",
                                        "flags": 96,
                                        "start": 104,
                                        "end": 110
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "v",
                                                "rawText": "v",
                                                "flags": 96,
                                                "start": 111,
                                                "end": 112
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 608,
                                        "start": 111,
                                        "end": 113
                                    },
                                    "returnType": null,
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
                                    "flags": 544,
                                    "start": 110,
                                    "end": 116
                                },
                                "flags": 32,
                                "start": 100,
                                "end": 116
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 91,
                        "end": 116
                    },
                    "flags": 48,
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
                                "asteriskToken": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 123,
                                    "end": 124
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 125,
                                    "end": 127
                                },
                                "flags": 32,
                                "start": 123,
                                "end": 127
                            },
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": {
                                    "kind": 16498,
                                    "flags": 96,
                                    "start": 128,
                                    "end": 132
                                },
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 132,
                                        "end": 134
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 1056,
                                        "start": 135,
                                        "end": 136
                                    },
                                    "returnType": null,
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
                                    "flags": 1056,
                                    "start": 134,
                                    "end": 139
                                },
                                "flags": 32,
                                "start": 128,
                                "end": 139
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 123,
                        "end": 139
                    },
                    "flags": 48,
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
                                "asteriskToken": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 146,
                                    "end": 147
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 148,
                                    "end": 150
                                },
                                "flags": 32,
                                "start": 146,
                                "end": 150
                            },
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": {
                                    "kind": 16499,
                                    "flags": 96,
                                    "start": 151,
                                    "end": 155
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 155,
                                        "end": 157
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "v",
                                                "rawText": "v",
                                                "flags": 96,
                                                "start": 158,
                                                "end": 159
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 608,
                                        "start": 158,
                                        "end": 160
                                    },
                                    "returnType": null,
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
                                    "flags": 544,
                                    "start": 157,
                                    "end": 163
                                },
                                "flags": 32,
                                "start": 151,
                                "end": 163
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 146,
                        "end": 163
                    },
                    "flags": 48,
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
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": {
                                    "kind": 16498,
                                    "flags": 96,
                                    "start": 170,
                                    "end": 173
                                },
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 173,
                                        "end": 177
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 1056,
                                        "start": 178,
                                        "end": 179
                                    },
                                    "returnType": null,
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
                                "flags": 32,
                                "start": 170,
                                "end": 182
                            },
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": {
                                    "kind": 16498,
                                    "flags": 96,
                                    "start": 183,
                                    "end": 187
                                },
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 187,
                                        "end": 191
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 1056,
                                        "start": 192,
                                        "end": 193
                                    },
                                    "returnType": null,
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
                                },
                                "flags": 32,
                                "start": 183,
                                "end": 196
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 170,
                        "end": 196
                    },
                    "flags": 48,
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
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": {
                                    "kind": 16499,
                                    "flags": 96,
                                    "start": 203,
                                    "end": 206
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 206,
                                        "end": 210
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "_",
                                                "rawText": "_",
                                                "flags": 96,
                                                "start": 211,
                                                "end": 212
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 608,
                                        "start": 211,
                                        "end": 213
                                    },
                                    "returnType": null,
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
                                "flags": 32,
                                "start": 203,
                                "end": 216
                            },
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": {
                                    "kind": 16499,
                                    "flags": 96,
                                    "start": 217,
                                    "end": 221
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 221,
                                        "end": 225
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "v",
                                                "rawText": "v",
                                                "flags": 96,
                                                "start": 226,
                                                "end": 227
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 608,
                                        "start": 226,
                                        "end": 228
                                    },
                                    "returnType": null,
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
                                },
                                "flags": 32,
                                "start": 217,
                                "end": 231
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 203,
                        "end": 231
                    },
                    "flags": 48,
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 234,
                    "end": 237
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 237,
                    "end": 239
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 241,
                                "end": 242
                            },
                            {
                                "kind": 224,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "start": 243,
                                    "end": 247
                                },
                                "argument": {
                                    "kind": 138477575,
                                    "flags": 96,
                                    "start": 247,
                                    "end": 251
                                },
                                "flags": 32,
                                "start": 243,
                                "end": 251
                            },
                            {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 252,
                                "end": 254
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 241,
                        "end": 254
                    },
                    "flags": 48,
                    "start": 239,
                    "end": 255
                },
                "flags": 32,
                "start": 234,
                "end": 255
            },
            "flags": 16,
            "start": 234,
            "end": 255
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 256,
                    "end": 259
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 259,
                    "end": 261
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 263,
                                "end": 264
                            },
                            {
                                "kind": 224,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "start": 265,
                                    "end": 269
                                },
                                "argument": {
                                    "kind": 271,
                                    "asyncKeyword": null,
                                    "typeParameters": null,
                                    "parameters": [],
                                    "returnType": null,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 64,
                                        "start": 271,
                                        "end": 273
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 274,
                                            "end": 274
                                        },
                                        "flags": 32,
                                        "start": 273,
                                        "end": 275
                                    },
                                    "flags": 32,
                                    "start": 269,
                                    "end": 275
                                },
                                "flags": 32,
                                "start": 265,
                                "end": 275
                            },
                            {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 276,
                                "end": 278
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 263,
                        "end": 278
                    },
                    "flags": 48,
                    "start": 261,
                    "end": 279
                },
                "flags": 32,
                "start": 256,
                "end": 279
            },
            "flags": 16,
            "start": 256,
            "end": 280
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 280,
                    "end": 283
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 283,
                    "end": 285
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 287,
                                "end": 288
                            },
                            {
                                "kind": 224,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "start": 289,
                                    "end": 293
                                },
                                "argument": {
                                    "kind": 131,
                                    "expression": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 271,
                                            "asyncKeyword": null,
                                            "typeParameters": null,
                                            "parameters": [],
                                            "returnType": null,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "start": 296,
                                                "end": 298
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 299,
                                                    "end": 299
                                                },
                                                "flags": 32,
                                                "start": 298,
                                                "end": 300
                                            },
                                            "flags": 32,
                                            "start": 294,
                                            "end": 300
                                        },
                                        "flags": 32,
                                        "start": 293,
                                        "end": 301
                                    },
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 302,
                                        "end": 302
                                    },
                                    "flags": 268435488,
                                    "start": 293,
                                    "end": 303
                                },
                                "flags": 32,
                                "start": 289,
                                "end": 303
                            },
                            {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 304,
                                "end": 306
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 287,
                        "end": 306
                    },
                    "flags": 48,
                    "start": 285,
                    "end": 307
                },
                "flags": 32,
                "start": 280,
                "end": 307
            },
            "flags": 16,
            "start": 280,
            "end": 308
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 308,
                    "end": 311
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 311,
                    "end": 313
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 315,
                                "end": 316
                            },
                            {
                                "kind": 224,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "start": 317,
                                    "end": 321
                                },
                                "argument": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 351,
                                                "asyncKeyword": null,
                                                "asteriskToken": null,
                                                "getKeyword": null,
                                                "setKeyword": null,
                                                "method": {
                                                    "kind": 209,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "b",
                                                        "rawText": "b",
                                                        "flags": 96,
                                                        "start": 322,
                                                        "end": 323
                                                    },
                                                    "typeParameters": null,
                                                    "formalParameterList": {
                                                        "kind": 214,
                                                        "formalParameters": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 324,
                                                        "end": 325
                                                    },
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [],
                                                            "flags": 32,
                                                            "start": 327,
                                                            "end": 327
                                                        },
                                                        "flags": 32,
                                                        "start": 325,
                                                        "end": 328
                                                    },
                                                    "flags": 32,
                                                    "start": 323,
                                                    "end": 328
                                                },
                                                "flags": 32,
                                                "start": 322,
                                                "end": 328
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 322,
                                        "end": 328
                                    },
                                    "flags": 48,
                                    "start": 321,
                                    "end": 329
                                },
                                "flags": 32,
                                "start": 317,
                                "end": 329
                            },
                            {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 330,
                                "end": 332
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 315,
                        "end": 332
                    },
                    "flags": 48,
                    "start": 313,
                    "end": 333
                },
                "flags": 32,
                "start": 308,
                "end": 333
            },
            "flags": 16,
            "start": 308,
            "end": 334
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 334,
                    "end": 337
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 337,
                    "end": 339
                },
                "right": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 346,
                        "end": 348
                    },
                    "member": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 341,
                                        "end": 342
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 343,
                                        "end": 345
                                    },
                                    "flags": 32,
                                    "start": 341,
                                    "end": 345
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 341,
                            "end": 345
                        },
                        "flags": 48,
                        "start": 339,
                        "end": 346
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 203,
                            "chain": null,
                            "expression": {
                                "kind": 201392131,
                                "text": "y",
                                "rawText": "'y'",
                                "flags": 4194400,
                                "start": 349,
                                "end": 352
                            },
                            "flags": 536870944,
                            "start": 348,
                            "end": 352
                        },
                        "flags": 32,
                        "start": 348,
                        "end": 353
                    },
                    "flags": 32,
                    "start": 339,
                    "end": 353
                },
                "flags": 32,
                "start": 334,
                "end": 353
            },
            "flags": 16,
            "start": 334,
            "end": 354
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 354,
                    "end": 357
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 357,
                    "end": 359
                },
                "right": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 374,
                        "end": 376
                    },
                    "member": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 64,
                            "start": 371,
                            "end": 373
                        },
                        "member": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 361,
                                            "end": 362
                                        },
                                        "right": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "z",
                                                            "rawText": "z",
                                                            "flags": 96,
                                                            "start": 365,
                                                            "end": 366
                                                        },
                                                        "right": {
                                                            "kind": 201392130,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 96,
                                                            "start": 367,
                                                            "end": 369
                                                        },
                                                        "flags": 32,
                                                        "start": 365,
                                                        "end": 369
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 365,
                                                "end": 369
                                            },
                                            "flags": 48,
                                            "start": 363,
                                            "end": 370
                                        },
                                        "flags": 32,
                                        "start": 361,
                                        "end": 370
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 361,
                                "end": 370
                            },
                            "flags": 48,
                            "start": 359,
                            "end": 371
                        },
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 536871114,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 373,
                                    "end": 374
                                },
                                "flags": 32,
                                "start": 373,
                                "end": 374
                            },
                            "flags": 32,
                            "start": 373,
                            "end": 374
                        },
                        "flags": 32,
                        "start": 359,
                        "end": 374
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 536871114,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "z",
                                "rawText": "z",
                                "flags": 96,
                                "start": 376,
                                "end": 377
                            },
                            "flags": 32,
                            "start": 376,
                            "end": 377
                        },
                        "flags": 32,
                        "start": 376,
                        "end": 377
                    },
                    "flags": 32,
                    "start": 359,
                    "end": 377
                },
                "flags": 32,
                "start": 354,
                "end": 377
            },
            "flags": 16,
            "start": 354,
            "end": 378
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 378,
                    "end": 381
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 381,
                    "end": 383
                },
                "right": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 398,
                        "end": 400
                    },
                    "member": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 64,
                            "start": 395,
                            "end": 397
                        },
                        "member": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 385,
                                            "end": 386
                                        },
                                        "right": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "z",
                                                            "rawText": "z",
                                                            "flags": 96,
                                                            "start": 389,
                                                            "end": 390
                                                        },
                                                        "right": {
                                                            "kind": 201392130,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 96,
                                                            "start": 391,
                                                            "end": 393
                                                        },
                                                        "flags": 32,
                                                        "start": 389,
                                                        "end": 393
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 389,
                                                "end": 393
                                            },
                                            "flags": 48,
                                            "start": 387,
                                            "end": 394
                                        },
                                        "flags": 32,
                                        "start": 385,
                                        "end": 394
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 385,
                                "end": 394
                            },
                            "flags": 48,
                            "start": 383,
                            "end": 395
                        },
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 536871114,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 397,
                                    "end": 398
                                },
                                "flags": 32,
                                "start": 397,
                                "end": 398
                            },
                            "flags": 32,
                            "start": 397,
                            "end": 398
                        },
                        "flags": 32,
                        "start": 383,
                        "end": 398
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 536871114,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "z",
                                "rawText": "z",
                                "flags": 96,
                                "start": 400,
                                "end": 401
                            },
                            "flags": 32,
                            "start": 400,
                            "end": 401
                        },
                        "flags": 32,
                        "start": 400,
                        "end": 401
                    },
                    "flags": 32,
                    "start": 383,
                    "end": 401
                },
                "flags": 32,
                "start": 378,
                "end": 401
            },
            "flags": 16,
            "start": 378,
            "end": 402
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
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 406,
                                    "end": 410
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 411,
                                    "end": 413
                                },
                                "flags": 32,
                                "start": 406,
                                "end": 413
                            },
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": {
                                    "kind": 16498,
                                    "flags": 96,
                                    "start": 414,
                                    "end": 418
                                },
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 201392131,
                                        "text": "foo",
                                        "rawText": "\"foo\"",
                                        "flags": 96,
                                        "start": 418,
                                        "end": 424
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 1056,
                                        "start": 425,
                                        "end": 426
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 428,
                                            "end": 428
                                        },
                                        "flags": 32,
                                        "start": 426,
                                        "end": 429
                                    },
                                    "flags": 1056,
                                    "start": 424,
                                    "end": 429
                                },
                                "flags": 32,
                                "start": 414,
                                "end": 429
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 406,
                        "end": 429
                    },
                    "flags": 48,
                    "start": 405,
                    "end": 430
                },
                "flags": 32,
                "start": 402,
                "end": 431
            },
            "flags": 16,
            "start": 402,
            "end": 432
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
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 436,
                                    "end": 440
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 441,
                                    "end": 443
                                },
                                "flags": 32,
                                "start": 436,
                                "end": 443
                            },
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": {
                                    "kind": 16499,
                                    "flags": 96,
                                    "start": 444,
                                    "end": 448
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 201392131,
                                        "text": "foo",
                                        "rawText": "\"foo\"",
                                        "flags": 96,
                                        "start": 448,
                                        "end": 454
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "v",
                                                "rawText": "v",
                                                "flags": 96,
                                                "start": 455,
                                                "end": 456
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 608,
                                        "start": 455,
                                        "end": 457
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 459,
                                            "end": 459
                                        },
                                        "flags": 32,
                                        "start": 457,
                                        "end": 460
                                    },
                                    "flags": 544,
                                    "start": 454,
                                    "end": 460
                                },
                                "flags": 32,
                                "start": 444,
                                "end": 460
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 436,
                        "end": 460
                    },
                    "flags": 48,
                    "start": 435,
                    "end": 461
                },
                "flags": 32,
                "start": 432,
                "end": 462
            },
            "flags": 16,
            "start": 432,
            "end": 463
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
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "get",
                                        "rawText": "get",
                                        "flags": 96,
                                        "start": 467,
                                        "end": 471
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 472,
                                        "end": 473
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 474,
                                            "end": 474
                                        },
                                        "flags": 32,
                                        "start": 473,
                                        "end": 475
                                    },
                                    "flags": 32,
                                    "start": 471,
                                    "end": 475
                                },
                                "flags": 32,
                                "start": 467,
                                "end": 475
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 467,
                        "end": 475
                    },
                    "flags": 48,
                    "start": 466,
                    "end": 477
                },
                "flags": 32,
                "start": 463,
                "end": 478
            },
            "flags": 16,
            "start": 463,
            "end": 479
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
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "set",
                                    "rawText": "set",
                                    "flags": 96,
                                    "start": 483,
                                    "end": 487
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 489,
                                    "end": 491
                                },
                                "flags": 32,
                                "start": 483,
                                "end": 491
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 483,
                        "end": 491
                    },
                    "flags": 48,
                    "start": 482,
                    "end": 493
                },
                "flags": 32,
                "start": 479,
                "end": 494
            },
            "flags": 16,
            "start": 479,
            "end": 495
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
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "if",
                                    "rawText": "if",
                                    "flags": 96,
                                    "start": 499,
                                    "end": 502
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 4,
                                    "rawText": "4",
                                    "flags": 96,
                                    "start": 503,
                                    "end": 505
                                },
                                "flags": 32,
                                "start": 499,
                                "end": 505
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 499,
                        "end": 505
                    },
                    "flags": 48,
                    "start": 498,
                    "end": 507
                },
                "flags": 32,
                "start": 495,
                "end": 508
            },
            "flags": 16,
            "start": 495,
            "end": 509
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
                                "kind": 351,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 352,
                                    "start": 513,
                                    "end": 519
                                },
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "start": 519,
                                        "end": 521
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 288,
                                        "start": 522,
                                        "end": 523
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 524,
                                            "end": 524
                                        },
                                        "flags": 32,
                                        "start": 523,
                                        "end": 525
                                    },
                                    "flags": 288,
                                    "start": 521,
                                    "end": 525
                                },
                                "flags": 32,
                                "start": 513,
                                "end": 525
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 513,
                        "end": 525
                    },
                    "flags": 48,
                    "start": 512,
                    "end": 527
                },
                "flags": 32,
                "start": 509,
                "end": 528
            },
            "flags": 16,
            "start": 509,
            "end": 529
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
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "interface",
                                    "rawText": "interface",
                                    "flags": 96,
                                    "start": 533,
                                    "end": 543
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 5,
                                    "rawText": "5",
                                    "flags": 96,
                                    "start": 544,
                                    "end": 546
                                },
                                "flags": 32,
                                "start": 533,
                                "end": 546
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 533,
                        "end": 546
                    },
                    "flags": 48,
                    "start": 532,
                    "end": 548
                },
                "flags": 32,
                "start": 529,
                "end": 549
            },
            "flags": 16,
            "start": 529,
            "end": 550
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
                                "kind": 351,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 352,
                                    "start": 554,
                                    "end": 560
                                },
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "set",
                                        "rawText": "set",
                                        "flags": 96,
                                        "start": 560,
                                        "end": 564
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 288,
                                        "start": 565,
                                        "end": 566
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 567,
                                            "end": 567
                                        },
                                        "flags": 32,
                                        "start": 566,
                                        "end": 568
                                    },
                                    "flags": 288,
                                    "start": 564,
                                    "end": 568
                                },
                                "flags": 32,
                                "start": 554,
                                "end": 568
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 554,
                        "end": 568
                    },
                    "flags": 48,
                    "start": 553,
                    "end": 570
                },
                "flags": 32,
                "start": 550,
                "end": 571
            },
            "flags": 16,
            "start": 550,
            "end": 572
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
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 96,
                                    "start": 576,
                                    "end": 582
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 584,
                                    "end": 586
                                },
                                "flags": 32,
                                "start": 576,
                                "end": 586
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 576,
                        "end": 586
                    },
                    "flags": 48,
                    "start": 575,
                    "end": 588
                },
                "flags": 32,
                "start": 572,
                "end": 589
            },
            "flags": 16,
            "start": 572,
            "end": 590
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 590,
                "end": 604
            },
            "flags": 16,
            "start": 590,
            "end": 605
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
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 608,
                                    "end": 610
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "async",
                                        "rawText": "async",
                                        "flags": 96,
                                        "start": 610,
                                        "end": 615
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 160,
                                        "start": 616,
                                        "end": 617
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 618,
                                            "end": 618
                                        },
                                        "flags": 32,
                                        "start": 617,
                                        "end": 619
                                    },
                                    "flags": 160,
                                    "start": 615,
                                    "end": 619
                                },
                                "flags": 32,
                                "start": 608,
                                "end": 619
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 608,
                        "end": 619
                    },
                    "flags": 48,
                    "start": 607,
                    "end": 621
                },
                "flags": 32,
                "start": 605,
                "end": 622
            },
            "flags": 16,
            "start": 605,
            "end": 623
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 623,
                "end": 636
            },
            "flags": 16,
            "start": 623,
            "end": 637
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
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": {
                                    "kind": 16498,
                                    "flags": 96,
                                    "start": 640,
                                    "end": 644
                                },
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 644,
                                        "end": 646
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 1056,
                                        "start": 647,
                                        "end": 648
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 650,
                                            "end": 650
                                        },
                                        "flags": 32,
                                        "start": 648,
                                        "end": 651
                                    },
                                    "flags": 1056,
                                    "start": 646,
                                    "end": 651
                                },
                                "flags": 32,
                                "start": 640,
                                "end": 651
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 640,
                        "end": 651
                    },
                    "flags": 48,
                    "start": 639,
                    "end": 653
                },
                "flags": 32,
                "start": 637,
                "end": 654
            },
            "flags": 16,
            "start": 637,
            "end": 655
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 655,
                "end": 668
            },
            "flags": 16,
            "start": 655,
            "end": 669
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
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 672,
                                    "end": 676
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 677,
                                    "end": 679
                                },
                                "flags": 32,
                                "start": 672,
                                "end": 679
                            },
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": {
                                    "kind": 16499,
                                    "flags": 96,
                                    "start": 680,
                                    "end": 684
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "bar",
                                        "rawText": "bar",
                                        "flags": 96,
                                        "start": 684,
                                        "end": 688
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "v",
                                                "rawText": "v",
                                                "flags": 96,
                                                "start": 689,
                                                "end": 690
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 608,
                                        "start": 689,
                                        "end": 691
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 693,
                                            "end": 693
                                        },
                                        "flags": 32,
                                        "start": 691,
                                        "end": 694
                                    },
                                    "flags": 544,
                                    "start": 688,
                                    "end": 694
                                },
                                "flags": 32,
                                "start": 680,
                                "end": 694
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 672,
                        "end": 694
                    },
                    "flags": 48,
                    "start": 671,
                    "end": 696
                },
                "flags": 32,
                "start": 669,
                "end": 697
            },
            "flags": 16,
            "start": 669,
            "end": 698
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
                                "asteriskToken": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 702,
                                    "end": 704
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 705,
                                    "end": 707
                                },
                                "flags": 32,
                                "start": 702,
                                "end": 707
                            },
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": {
                                    "kind": 16499,
                                    "flags": 96,
                                    "start": 708,
                                    "end": 712
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 201392130,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 96,
                                        "start": 712,
                                        "end": 714
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "v",
                                                "rawText": "v",
                                                "flags": 96,
                                                "start": 715,
                                                "end": 716
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 608,
                                        "start": 715,
                                        "end": 717
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 719,
                                            "end": 719
                                        },
                                        "flags": 32,
                                        "start": 717,
                                        "end": 720
                                    },
                                    "flags": 544,
                                    "start": 714,
                                    "end": 720
                                },
                                "flags": 32,
                                "start": 708,
                                "end": 720
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 702,
                        "end": 720
                    },
                    "flags": 48,
                    "start": 701,
                    "end": 722
                },
                "flags": 32,
                "start": 698,
                "end": 723
            },
            "flags": 16,
            "start": 698,
            "end": 724
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
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "get",
                                    "rawText": "get",
                                    "flags": 96,
                                    "start": 728,
                                    "end": 732
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 733,
                                    "end": 735
                                },
                                "flags": 32,
                                "start": 728,
                                "end": 735
                            },
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": {
                                    "kind": 16498,
                                    "flags": 96,
                                    "start": 736,
                                    "end": 740
                                },
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 740,
                                        "end": 744
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 1056,
                                        "start": 745,
                                        "end": 746
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 748,
                                            "end": 748
                                        },
                                        "flags": 32,
                                        "start": 746,
                                        "end": 749
                                    },
                                    "flags": 1056,
                                    "start": 744,
                                    "end": 749
                                },
                                "flags": 32,
                                "start": 736,
                                "end": 749
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 728,
                        "end": 749
                    },
                    "flags": 48,
                    "start": 727,
                    "end": 751
                },
                "flags": 32,
                "start": 724,
                "end": 752
            },
            "flags": 16,
            "start": 724,
            "end": 753
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
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "set",
                                    "rawText": "set",
                                    "flags": 96,
                                    "start": 757,
                                    "end": 761
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 762,
                                    "end": 764
                                },
                                "flags": 32,
                                "start": 757,
                                "end": 764
                            },
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": {
                                    "kind": 16499,
                                    "flags": 96,
                                    "start": 765,
                                    "end": 769
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 769,
                                        "end": 773
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "_",
                                                "rawText": "_",
                                                "flags": 96,
                                                "start": 774,
                                                "end": 775
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 608,
                                        "start": 774,
                                        "end": 776
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 778,
                                            "end": 778
                                        },
                                        "flags": 32,
                                        "start": 776,
                                        "end": 779
                                    },
                                    "flags": 544,
                                    "start": 773,
                                    "end": 779
                                },
                                "flags": 32,
                                "start": 765,
                                "end": 779
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 757,
                        "end": 779
                    },
                    "flags": 48,
                    "start": 756,
                    "end": 781
                },
                "flags": 32,
                "start": 753,
                "end": 782
            },
            "flags": 16,
            "start": 753,
            "end": 783
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
                                "asteriskToken": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 787,
                                    "end": 789
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 790,
                                    "end": 792
                                },
                                "flags": 32,
                                "start": 787,
                                "end": 792
                            },
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 96,
                                    "start": 793,
                                    "end": 795
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 96,
                                    "start": 796,
                                    "end": 798
                                },
                                "flags": 32,
                                "start": 793,
                                "end": 798
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 787,
                        "end": 798
                    },
                    "flags": 48,
                    "start": 786,
                    "end": 800
                },
                "flags": 32,
                "start": 783,
                "end": 801
            },
            "flags": 16,
            "start": 783,
            "end": 802
        }
    ],
    "isModule": false,
    "source": "({ foo: 1, get foo() {}});\n\n({ foo: 1, set foo(v) {}});\n\n({ \"foo\": 1, get \"foo\"() {}});\n\n({\"foo\": 1, set \"foo\"(v) {}});\n\n({1: 1, get 1() {}});\n\n({1: 1, set 1(v) {}});\n\n({get foo() {}, get foo() {}});\n\n({set foo(_) {}, set foo(v) {}});\n\nx = {a, ...null, b}:\n\nx = {a, ...()=>{}, b};\n\nx = {a, ...(()=>{})(), b};\n\nx = {a, ...{b() {}}, c};\n\nx = {y: 1}?.['y'];\n\nx = {y: {z: 1}}?.y?.z;\n\nx = {y: {z: 1}}?.y?.z;\n\n({ foo: 1, get \"foo\"() {}});\n\n({ foo: 1, set \"foo\"(v) {}});\n\n({ get(){} });\n\n({ set : 0 });\n\n({ if: 4 });\n\n({ async 0(){} });\n\n({ interface: 5 });\n\n({ async set(){} });\n\n({ async : 0 });\n\n\"use strict\"; ({ *async(){} });\n\"use strict\"; ({ get 1() {} });\n\"use strict\"; ({ foo: 1, set bar(v) {} });\n\n({ 1: 1, set 2(v) {} });\n\n({ get: 1, get foo() {} });\n\n({ set: 1, set foo(_) {} });\n\n({ 1: 1, 2: 2 });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 802
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 255, end: 256

```

