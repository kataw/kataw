# Kataw parser test case

## Input

`````js
(a['b'], c) => {};

(c, a['b']) => {};

(...a = b) => b;

(...rest - a) => b;

({x: this})  => {};

({x: y.z} = a) => b;

([x].length) => y;

(z, [x].length) => y;

({}.length) => y;

(z, {}.length) => y;

({x: y}.length) => y;

(z, {x: y}.length) => y;

({get a(){}}) => 0;;

(...[ 5 ]) => {};

({x: const}) => null;
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
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 536871042,
                            "member": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 1,
                                "end": 2
                            },
                            "expression": {
                                "kind": 201392131,
                                "text": "b",
                                "rawText": "'b'",
                                "flags": 4194400,
                                "start": 3,
                                "end": 6
                            },
                            "flags": 32,
                            "start": 0,
                            "end": 7
                        },
                        {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 8,
                            "end": 10
                        }
                    ],
                    "flags": 32,
                    "start": 0,
                    "end": 10
                },
                "flags": 32,
                "start": 0,
                "end": 11
            },
            "flags": 16,
            "start": 0,
            "end": 11
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 16,
                "end": 16
            },
            "flags": 16,
            "start": 14,
            "end": 17
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 17,
            "end": 18
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 21,
                            "end": 22
                        },
                        {
                            "kind": 536871042,
                            "member": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 23,
                                "end": 25
                            },
                            "expression": {
                                "kind": 201392131,
                                "text": "b",
                                "rawText": "'b'",
                                "flags": 4194400,
                                "start": 26,
                                "end": 29
                            },
                            "flags": 32,
                            "start": 18,
                            "end": 30
                        }
                    ],
                    "flags": 32,
                    "start": 18,
                    "end": 31
                },
                "flags": 32,
                "start": 18,
                "end": 31
            },
            "flags": 16,
            "start": 18,
            "end": 31
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 36,
                "end": 36
            },
            "flags": 16,
            "start": 34,
            "end": 37
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 37,
            "end": 38
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 50,
                    "end": 53
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 215,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 41,
                            "end": 44
                        },
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 44,
                            "end": 45
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 47,
                            "end": 49
                        },
                        "flags": 34,
                        "start": 41,
                        "end": 49
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 53,
                    "end": 55
                },
                "flags": 32,
                "start": 38,
                "end": 55
            },
            "flags": 16,
            "start": 38,
            "end": 56
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "flags": 32,
                        "start": 56,
                        "end": 66
                    },
                    "flags": 32,
                    "start": 56,
                    "end": 66
                },
                "operatorToken": {
                    "kind": 35379,
                    "flags": 64,
                    "start": 66,
                    "end": 68
                },
                "right": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 68,
                    "end": 70
                },
                "flags": 32,
                "start": 56,
                "end": 70
            },
            "flags": 16,
            "start": 56,
            "end": 70
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 96,
                "start": 74,
                "end": 76
            },
            "flags": 16,
            "start": 74,
            "end": 77
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 90,
                    "end": 94
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "generatorToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 81,
                                        "end": 82
                                    },
                                    "right": {
                                        "kind": 4276321,
                                        "flags": 96,
                                        "start": 83,
                                        "end": 88
                                    },
                                    "flags": 32,
                                    "start": 81,
                                    "end": 88
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 81,
                            "end": 88
                        },
                        "flags": 48,
                        "start": 80,
                        "end": 89
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 96,
                        "end": 96
                    },
                    "flags": 32,
                    "start": 94,
                    "end": 97
                },
                "flags": 34,
                "start": 77,
                "end": 97
            },
            "flags": 16,
            "start": 77,
            "end": 98
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 114,
                    "end": 117
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 125,
                        "left": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 102,
                                            "end": 103
                                        },
                                        "right": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 104,
                                                "end": 106
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "z",
                                                "rawText": "z",
                                                "flags": 96,
                                                "start": 107,
                                                "end": 108
                                            },
                                            "flags": 536870944,
                                            "start": 102,
                                            "end": 108
                                        },
                                        "flags": 32,
                                        "start": 102,
                                        "end": 108
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 102,
                                "end": 108
                            },
                            "flags": 48,
                            "start": 101,
                            "end": 109
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 64,
                            "start": 109,
                            "end": 111
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 111,
                            "end": 113
                        },
                        "flags": 32,
                        "start": 101,
                        "end": 113
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 117,
                    "end": 119
                },
                "flags": 34,
                "start": 98,
                "end": 119
            },
            "flags": 16,
            "start": 98,
            "end": 120
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 124,
                                    "end": 125
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 124,
                            "end": 125
                        },
                        "flags": 32,
                        "start": 123,
                        "end": 126
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "length",
                        "rawText": "length",
                        "flags": 96,
                        "start": 127,
                        "end": 133
                    },
                    "flags": 536870944,
                    "start": 120,
                    "end": 133
                },
                "flags": 32,
                "start": 120,
                "end": 134
            },
            "flags": 16,
            "start": 120,
            "end": 134
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "start": 137,
                "end": 139
            },
            "flags": 16,
            "start": 137,
            "end": 140
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 143,
                            "end": 144
                        },
                        {
                            "kind": 129,
                            "member": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 147,
                                            "end": 148
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 147,
                                    "end": 148
                                },
                                "flags": 32,
                                "start": 145,
                                "end": 149
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "length",
                                "rawText": "length",
                                "flags": 96,
                                "start": 150,
                                "end": 156
                            },
                            "flags": 536870944,
                            "start": 140,
                            "end": 156
                        }
                    ],
                    "flags": 32,
                    "start": 140,
                    "end": 157
                },
                "flags": 32,
                "start": 140,
                "end": 157
            },
            "flags": 16,
            "start": 140,
            "end": 157
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "start": 160,
                "end": 162
            },
            "flags": 16,
            "start": 160,
            "end": 163
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 167,
                            "end": 167
                        },
                        "flags": 48,
                        "start": 166,
                        "end": 168
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "length",
                        "rawText": "length",
                        "flags": 96,
                        "start": 169,
                        "end": 175
                    },
                    "flags": 536870944,
                    "start": 163,
                    "end": 175
                },
                "flags": 32,
                "start": 163,
                "end": 176
            },
            "flags": 16,
            "start": 163,
            "end": 176
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "start": 179,
                "end": 181
            },
            "flags": 16,
            "start": 179,
            "end": 182
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 185,
                            "end": 186
                        },
                        {
                            "kind": 129,
                            "member": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 189,
                                    "end": 189
                                },
                                "flags": 48,
                                "start": 187,
                                "end": 190
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "length",
                                "rawText": "length",
                                "flags": 96,
                                "start": 191,
                                "end": 197
                            },
                            "flags": 536870944,
                            "start": 182,
                            "end": 197
                        }
                    ],
                    "flags": 32,
                    "start": 182,
                    "end": 198
                },
                "flags": 32,
                "start": 182,
                "end": 198
            },
            "flags": 16,
            "start": 182,
            "end": 198
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "start": 201,
                "end": 203
            },
            "flags": 16,
            "start": 201,
            "end": 204
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "generatorToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 208,
                                        "end": 209
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 210,
                                        "end": 212
                                    },
                                    "flags": 32,
                                    "start": 208,
                                    "end": 212
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 208,
                            "end": 212
                        },
                        "flags": 48,
                        "start": 207,
                        "end": 213
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "length",
                        "rawText": "length",
                        "flags": 96,
                        "start": 214,
                        "end": 220
                    },
                    "flags": 536870944,
                    "start": 204,
                    "end": 220
                },
                "flags": 32,
                "start": 204,
                "end": 221
            },
            "flags": 16,
            "start": 204,
            "end": 221
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "start": 224,
                "end": 226
            },
            "flags": 16,
            "start": 224,
            "end": 227
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 230,
                            "end": 231
                        },
                        {
                            "kind": 129,
                            "member": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "generatorToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 234,
                                                "end": 235
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 236,
                                                "end": 238
                                            },
                                            "flags": 32,
                                            "start": 234,
                                            "end": 238
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 234,
                                    "end": 238
                                },
                                "flags": 48,
                                "start": 232,
                                "end": 239
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "length",
                                "rawText": "length",
                                "flags": 96,
                                "start": 240,
                                "end": 246
                            },
                            "flags": 536870944,
                            "start": 227,
                            "end": 246
                        }
                    ],
                    "flags": 32,
                    "start": 227,
                    "end": 247
                },
                "flags": 32,
                "start": 227,
                "end": 247
            },
            "flags": 16,
            "start": 227,
            "end": 247
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "start": 250,
                "end": 252
            },
            "flags": 16,
            "start": 250,
            "end": 253
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 268,
                    "end": 271
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 257,
                                    "asyncKeyword": null,
                                    "generatorToken": null,
                                    "getKeyword": {
                                        "kind": 16498,
                                        "flags": 64,
                                        "start": 257,
                                        "end": 260
                                    },
                                    "setKeyword": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 260,
                                            "end": 262
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 1056,
                                            "start": 263,
                                            "end": 264
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 265,
                                                "end": 265
                                            },
                                            "flags": 32,
                                            "start": 264,
                                            "end": 266
                                        },
                                        "flags": 1056,
                                        "start": 262,
                                        "end": 266
                                    },
                                    "flags": 32,
                                    "start": 257,
                                    "end": 266
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 257,
                            "end": 266
                        },
                        "flags": 48,
                        "start": 256,
                        "end": 267
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 271,
                    "end": 273
                },
                "flags": 34,
                "start": 253,
                "end": 273
            },
            "flags": 16,
            "start": 253,
            "end": 274
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 274,
            "end": 275
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "flags": 32,
                    "start": 275,
                    "end": 282
                },
                "flags": 32,
                "start": 275,
                "end": 282
            },
            "flags": 16,
            "start": 275,
            "end": 282
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 5,
                "rawText": "5",
                "flags": 96,
                "start": 282,
                "end": 284
            },
            "flags": 16,
            "start": 282,
            "end": 284
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 292,
                "end": 292
            },
            "flags": 16,
            "start": 290,
            "end": 293
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 293,
            "end": 294
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 308,
                    "end": 311
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "generatorToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 298,
                                        "end": 299
                                    },
                                    "right": {
                                        "kind": 16637,
                                        "text": "",
                                        "flags": 64,
                                        "start": 300,
                                        "end": 300
                                    },
                                    "flags": 32,
                                    "start": 298,
                                    "end": 300
                                },
                                {
                                    "kind": 134299649,
                                    "text": "const",
                                    "rawText": "const",
                                    "flags": 96,
                                    "start": 300,
                                    "end": 306
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 298,
                            "end": 306
                        },
                        "flags": 48,
                        "start": 297,
                        "end": 307
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 138477575,
                    "flags": 96,
                    "start": 311,
                    "end": 316
                },
                "flags": 34,
                "start": 294,
                "end": 316
            },
            "flags": 16,
            "start": 294,
            "end": 317
        }
    ],
    "isModule": false,
    "source": "(a['b'], c) => {};\n\n(c, a['b']) => {};\n\n(...a = b) => b;\n\n(...rest - a) => b;\n\n({x: this})  => {};\n\n({x: y.z} = a) => b;\n\n([x].length) => y;\n\n(z, [x].length) => y;\n\n({}.length) => y;\n\n(z, {}.length) => y;\n\n({x: y}.length) => y;\n\n(z, {x: y}.length) => y;\n\n({get a(){}}) => 0;;\n\n(...[ 5 ]) => {};\n\n({x: const}) => null;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 317
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 0, end: 14
✖ Expected a `;` - start: 31, end: 34
✖ A rest element cannot have an initializer - start: 47, end: 49
✖ Expected a ')' to match the '(' token here - start: 66, end: 68
✖ Expected '=>' - start: 66, end: 68
✖ Expected a `;` - start: 70, end: 71
✖ Declaration or statement expected - start: 71, end: 74
✖ The left hand side of the arrow is not destructible  - start: 90, end: 94
✖ The left hand side of the arrow is not destructible  - start: 114, end: 117
✖ Expected a `;` - start: 134, end: 137
✖ Expected a `;` - start: 157, end: 160
✖ Expected a `;` - start: 176, end: 179
✖ Expected a `;` - start: 198, end: 201
✖ Expected a `;` - start: 221, end: 224
✖ Expected a `;` - start: 247, end: 250
✖ The left hand side of the arrow is not destructible  - start: 268, end: 271
✖ Did you forgot a ']' to match the `[` token? - start: 282, end: 284
✖ Expected '=>' - start: 282, end: 284
✖ Expected a `;` - start: 284, end: 286
✖ Declaration or statement expected - start: 286, end: 287
✖ Declaration or statement expected - start: 287, end: 290
✖ Identifier expected - start: 300, end: 306
✖ Property definition expected. Did you mean to use a ':'? - start: 306, end: 307
✖ The left hand side of the arrow is not destructible  - start: 308, end: 311

```

