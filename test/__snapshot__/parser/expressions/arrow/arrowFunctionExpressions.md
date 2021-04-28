# Kataw parser test case

## Input

`````js
var a = (p: string) => p.length;
var a = (p: string) => { return p.length; };

var b = j => { return 0; };
var b = (j) => { return 0; };

var c: number;
var d = n => c = n;
var d = (n) => c = n;
var d: (n: any) => any;


var p1 = ([a]) => { };
var p2 = ([...a]) => { };
var p3 = ([, a]) => { };
var p4 = ([, ...a]) => { };
var p5 = ([a = 1]) => { };
var p6 = ({ a }) => { };
var p7 = ({ a: { b } }) => { };
var p8 = ({ a = 1 }) => { };
//var p9 = ({ a: { b = 1 } = { b: 1 } }) => { };
var p10 = ([{ value, done }]) => { };

`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 19,
                                "end": 22
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 215,
                                    "ellipsisToken": null,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "p",
                                        "rawText": "p",
                                        "flags": 96,
                                        "start": 9,
                                        "end": 10
                                    },
                                    "optionalToken": null,
                                    "type": {
                                        "kind": 139,
                                        "type": {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 11,
                                            "end": 18
                                        },
                                        "flags": 0,
                                        "start": 10,
                                        "end": 18
                                    },
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 7,
                                    "end": 18
                                }
                            ],
                            "asyncToken": null,
                            "returnType": null,
                            "contents": {
                                "kind": 129,
                                "member": {
                                    "kind": 134299649,
                                    "text": "p",
                                    "rawText": "p",
                                    "flags": 96,
                                    "start": 22,
                                    "end": 24
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "length",
                                    "rawText": "length",
                                    "flags": 96,
                                    "start": 25,
                                    "end": 31
                                },
                                "flags": 32,
                                "start": 22,
                                "end": 31
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 31
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 31
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 31
            },
            "flags": 16,
            "start": 0,
            "end": 32
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 32,
                "end": 36
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 36,
                            "end": 38
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 52,
                                "end": 55
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 215,
                                    "ellipsisToken": null,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "p",
                                        "rawText": "p",
                                        "flags": 96,
                                        "start": 42,
                                        "end": 43
                                    },
                                    "optionalToken": null,
                                    "type": {
                                        "kind": 139,
                                        "type": {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 44,
                                            "end": 51
                                        },
                                        "flags": 0,
                                        "start": 43,
                                        "end": 51
                                    },
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 40,
                                    "end": 51
                                }
                            ],
                            "asyncToken": null,
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 161,
                                            "returnKeyword": {
                                                "kind": 37757022,
                                                "flags": 0,
                                                "start": 57,
                                                "end": 64
                                            },
                                            "expression": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 134299649,
                                                    "text": "p",
                                                    "rawText": "p",
                                                    "flags": 96,
                                                    "start": 64,
                                                    "end": 66
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "length",
                                                    "rawText": "length",
                                                    "flags": 96,
                                                    "start": 67,
                                                    "end": 73
                                                },
                                                "flags": 32,
                                                "start": 64,
                                                "end": 73
                                            },
                                            "flags": 16,
                                            "start": 0,
                                            "end": 57
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 32,
                                    "start": 57,
                                    "end": 74
                                },
                                "flags": 32,
                                "start": 55,
                                "end": 76
                            },
                            "flags": 32,
                            "start": 40,
                            "end": 76
                        },
                        "flags": 16,
                        "start": 36,
                        "end": 76
                    }
                ],
                "flags": 16,
                "start": 36,
                "end": 76
            },
            "flags": 16,
            "start": 32,
            "end": 77
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 77,
                "end": 82
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 82,
                            "end": 84
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 88,
                                "end": 91
                            },
                            "typeParameters": null,
                            "parameters": {
                                "kind": 134299649,
                                "text": "j",
                                "rawText": "j",
                                "flags": 96,
                                "start": 86,
                                "end": 88
                            },
                            "asyncToken": null,
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 161,
                                            "returnKeyword": {
                                                "kind": 37757022,
                                                "flags": 0,
                                                "start": 93,
                                                "end": 100
                                            },
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 96,
                                                "start": 100,
                                                "end": 102
                                            },
                                            "flags": 16,
                                            "start": 0,
                                            "end": 93
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 32,
                                    "start": 93,
                                    "end": 103
                                },
                                "flags": 32,
                                "start": 91,
                                "end": 105
                            },
                            "flags": 32,
                            "start": 86,
                            "end": 105
                        },
                        "flags": 16,
                        "start": 82,
                        "end": 105
                    }
                ],
                "flags": 16,
                "start": 82,
                "end": 105
            },
            "flags": 16,
            "start": 77,
            "end": 106
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 106,
                "end": 110
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 110,
                            "end": 112
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 118,
                                "end": 121
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "j",
                                    "rawText": "j",
                                    "flags": 96,
                                    "start": 116,
                                    "end": 117
                                }
                            ],
                            "asyncToken": null,
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 161,
                                            "returnKeyword": {
                                                "kind": 37757022,
                                                "flags": 0,
                                                "start": 123,
                                                "end": 130
                                            },
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 96,
                                                "start": 130,
                                                "end": 132
                                            },
                                            "flags": 16,
                                            "start": 0,
                                            "end": 123
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 32,
                                    "start": 123,
                                    "end": 133
                                },
                                "flags": 32,
                                "start": 121,
                                "end": 135
                            },
                            "flags": 32,
                            "start": 114,
                            "end": 135
                        },
                        "flags": 16,
                        "start": 110,
                        "end": 135
                    }
                ],
                "flags": 16,
                "start": 110,
                "end": 135
            },
            "flags": 16,
            "start": 106,
            "end": 136
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 136,
                "end": 141
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 141,
                            "end": 143
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234345,
                                "flags": 64,
                                "start": 144,
                                "end": 151
                            },
                            "flags": 0,
                            "start": 143,
                            "end": 151
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 141,
                        "end": 151
                    }
                ],
                "flags": 16,
                "start": 141,
                "end": 151
            },
            "flags": 16,
            "start": 136,
            "end": 152
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 152,
                "end": 156
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "d",
                            "rawText": "d",
                            "flags": 96,
                            "start": 156,
                            "end": 158
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 162,
                                "end": 165
                            },
                            "typeParameters": null,
                            "parameters": {
                                "kind": 134299649,
                                "text": "n",
                                "rawText": "n",
                                "flags": 96,
                                "start": 160,
                                "end": 162
                            },
                            "asyncToken": null,
                            "returnType": null,
                            "contents": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 165,
                                    "end": 167
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 64,
                                    "start": 167,
                                    "end": 169
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "n",
                                    "rawText": "n",
                                    "flags": 96,
                                    "start": 169,
                                    "end": 171
                                },
                                "flags": 32,
                                "start": 165,
                                "end": 171
                            },
                            "flags": 32,
                            "start": 160,
                            "end": 171
                        },
                        "flags": 16,
                        "start": 156,
                        "end": 171
                    }
                ],
                "flags": 16,
                "start": 156,
                "end": 171
            },
            "flags": 16,
            "start": 152,
            "end": 172
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 172,
                "end": 176
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "d",
                            "rawText": "d",
                            "flags": 96,
                            "start": 176,
                            "end": 178
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 184,
                                "end": 187
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "n",
                                    "rawText": "n",
                                    "flags": 96,
                                    "start": 182,
                                    "end": 183
                                }
                            ],
                            "asyncToken": null,
                            "returnType": null,
                            "contents": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 187,
                                    "end": 189
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 64,
                                    "start": 189,
                                    "end": 191
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "n",
                                    "rawText": "n",
                                    "flags": 96,
                                    "start": 191,
                                    "end": 193
                                },
                                "flags": 32,
                                "start": 187,
                                "end": 193
                            },
                            "flags": 32,
                            "start": 180,
                            "end": 193
                        },
                        "flags": 16,
                        "start": 176,
                        "end": 193
                    }
                ],
                "flags": 16,
                "start": 176,
                "end": 193
            },
            "flags": 16,
            "start": 172,
            "end": 194
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 194,
                "end": 198
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "d",
                            "rawText": "d",
                            "flags": 96,
                            "start": 198,
                            "end": 200
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 148,
                                "parameters": {
                                    "kind": 208,
                                    "functionTypeParameterList": [
                                        {
                                            "kind": 149,
                                            "ellipsisToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "n",
                                                "rawText": "n",
                                                "flags": 96,
                                                "start": 203,
                                                "end": 204
                                            },
                                            "optionalToken": null,
                                            "typeAnnotation": {
                                                "kind": 134234252,
                                                "flags": 64,
                                                "start": 205,
                                                "end": 209
                                            },
                                            "flags": 0,
                                            "start": 203,
                                            "end": 209
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 203,
                                    "end": 209
                                },
                                "returnType": {
                                    "kind": 134234252,
                                    "flags": 64,
                                    "start": 213,
                                    "end": 217
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 201,
                                "end": 217
                            },
                            "flags": 0,
                            "start": 200,
                            "end": 217
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 198,
                        "end": 217
                    }
                ],
                "flags": 16,
                "start": 198,
                "end": 217
            },
            "flags": 16,
            "start": 194,
            "end": 218
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 218,
                "end": 224
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "p1",
                            "rawText": "p1",
                            "flags": 96,
                            "start": 224,
                            "end": 227
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 235,
                                "end": 238
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 232,
                                                "end": 233
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 232,
                                        "end": 233
                                    },
                                    "flags": 32,
                                    "start": 231,
                                    "end": 234
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
                                    "flags": 32,
                                    "start": 240,
                                    "end": 240
                                },
                                "flags": 32,
                                "start": 238,
                                "end": 242
                            },
                            "flags": 32,
                            "start": 229,
                            "end": 242
                        },
                        "flags": 16,
                        "start": 224,
                        "end": 242
                    }
                ],
                "flags": 16,
                "start": 224,
                "end": 242
            },
            "flags": 16,
            "start": 218,
            "end": 243
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 243,
                "end": 247
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "p2",
                            "rawText": "p2",
                            "flags": 96,
                            "start": 247,
                            "end": 250
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 261,
                                "end": 264
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 223,
                                                "ellipsisToken": {
                                                    "kind": 524302,
                                                    "flags": 0,
                                                    "start": 255,
                                                    "end": 258
                                                },
                                                "argument": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 258,
                                                    "end": 259
                                                },
                                                "flags": 32,
                                                "start": 255,
                                                "end": 259
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 255,
                                        "end": 259
                                    },
                                    "flags": 32,
                                    "start": 254,
                                    "end": 260
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
                                    "flags": 32,
                                    "start": 266,
                                    "end": 266
                                },
                                "flags": 32,
                                "start": 264,
                                "end": 268
                            },
                            "flags": 32,
                            "start": 252,
                            "end": 268
                        },
                        "flags": 16,
                        "start": 247,
                        "end": 268
                    }
                ],
                "flags": 16,
                "start": 247,
                "end": 268
            },
            "flags": 16,
            "start": 243,
            "end": 269
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 269,
                "end": 273
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "p3",
                            "rawText": "p3",
                            "flags": 96,
                            "start": 273,
                            "end": 276
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 286,
                                "end": 289
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 230,
                                                "flags": 96,
                                                "start": 281,
                                                "end": 281
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 282,
                                                "end": 284
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 281,
                                        "end": 284
                                    },
                                    "flags": 32,
                                    "start": 280,
                                    "end": 285
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
                                    "flags": 32,
                                    "start": 291,
                                    "end": 291
                                },
                                "flags": 32,
                                "start": 289,
                                "end": 293
                            },
                            "flags": 32,
                            "start": 278,
                            "end": 293
                        },
                        "flags": 16,
                        "start": 273,
                        "end": 293
                    }
                ],
                "flags": 16,
                "start": 273,
                "end": 293
            },
            "flags": 16,
            "start": 269,
            "end": 294
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 294,
                "end": 298
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "p4",
                            "rawText": "p4",
                            "flags": 96,
                            "start": 298,
                            "end": 301
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 314,
                                "end": 317
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 230,
                                                "flags": 96,
                                                "start": 306,
                                                "end": 306
                                            },
                                            {
                                                "kind": 223,
                                                "ellipsisToken": {
                                                    "kind": 524302,
                                                    "flags": 0,
                                                    "start": 307,
                                                    "end": 311
                                                },
                                                "argument": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 311,
                                                    "end": 312
                                                },
                                                "flags": 32,
                                                "start": 307,
                                                "end": 312
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 306,
                                        "end": 312
                                    },
                                    "flags": 32,
                                    "start": 305,
                                    "end": 313
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
                                    "flags": 32,
                                    "start": 319,
                                    "end": 319
                                },
                                "flags": 32,
                                "start": 317,
                                "end": 321
                            },
                            "flags": 32,
                            "start": 303,
                            "end": 321
                        },
                        "flags": 16,
                        "start": 298,
                        "end": 321
                    }
                ],
                "flags": 16,
                "start": 298,
                "end": 321
            },
            "flags": 16,
            "start": 294,
            "end": 322
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 322,
                "end": 326
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "p5",
                            "rawText": "p5",
                            "flags": 96,
                            "start": 326,
                            "end": 329
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 341,
                                "end": 344
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 334,
                                                    "end": 335
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 64,
                                                    "start": 335,
                                                    "end": 337
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 96,
                                                    "start": 337,
                                                    "end": 339
                                                },
                                                "flags": 32,
                                                "start": 334,
                                                "end": 339
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 334,
                                        "end": 339
                                    },
                                    "flags": 32,
                                    "start": 333,
                                    "end": 340
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
                                    "flags": 32,
                                    "start": 346,
                                    "end": 346
                                },
                                "flags": 32,
                                "start": 344,
                                "end": 348
                            },
                            "flags": 32,
                            "start": 331,
                            "end": 348
                        },
                        "flags": 16,
                        "start": 326,
                        "end": 348
                    }
                ],
                "flags": 16,
                "start": 326,
                "end": 348
            },
            "flags": 16,
            "start": 322,
            "end": 349
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 349,
                "end": 353
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "p6",
                            "rawText": "p6",
                            "flags": 96,
                            "start": 353,
                            "end": 356
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 366,
                                "end": 369
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 361,
                                                "end": 363
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "start": 361,
                                        "end": 363
                                    },
                                    "flags": 32,
                                    "start": 360,
                                    "end": 365
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
                                    "flags": 32,
                                    "start": 371,
                                    "end": 371
                                },
                                "flags": 32,
                                "start": 369,
                                "end": 373
                            },
                            "flags": 32,
                            "start": 358,
                            "end": 373
                        },
                        "flags": 16,
                        "start": 353,
                        "end": 373
                    }
                ],
                "flags": 16,
                "start": 353,
                "end": 373
            },
            "flags": 16,
            "start": 349,
            "end": 374
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 374,
                "end": 378
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "p7",
                            "rawText": "p7",
                            "flags": 96,
                            "start": 378,
                            "end": 381
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 398,
                                "end": 401
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
                                                "asyncKeyword": null,
                                                "getKeyword": null,
                                                "setKeyword": null,
                                                "left": {
                                                    "kind": 220,
                                                    "propertyList": {
                                                        "kind": 218,
                                                        "properties": [
                                                            {
                                                                "kind": 134299649,
                                                                "text": "b",
                                                                "rawText": "b",
                                                                "flags": 96,
                                                                "start": 391,
                                                                "end": 393
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "start": 391,
                                                        "end": 393
                                                    },
                                                    "flags": 32,
                                                    "start": 389,
                                                    "end": 395
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 386,
                                                    "end": 388
                                                },
                                                "flags": 32,
                                                "start": 386,
                                                "end": 395
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "start": 386,
                                        "end": 395
                                    },
                                    "flags": 32,
                                    "start": 385,
                                    "end": 397
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
                                    "flags": 32,
                                    "start": 403,
                                    "end": 403
                                },
                                "flags": 32,
                                "start": 401,
                                "end": 405
                            },
                            "flags": 32,
                            "start": 383,
                            "end": 405
                        },
                        "flags": 16,
                        "start": 378,
                        "end": 405
                    }
                ],
                "flags": 16,
                "start": 378,
                "end": 405
            },
            "flags": 16,
            "start": 374,
            "end": 406
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 406,
                "end": 410
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "p8",
                            "rawText": "p8",
                            "flags": 96,
                            "start": 410,
                            "end": 413
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 427,
                                "end": 430
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 205,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 418,
                                                    "end": 420
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 96,
                                                    "start": 422,
                                                    "end": 424
                                                },
                                                "flags": 32,
                                                "start": 418,
                                                "end": 424
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "start": 418,
                                        "end": 424
                                    },
                                    "flags": 32,
                                    "start": 417,
                                    "end": 426
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
                                    "flags": 32,
                                    "start": 432,
                                    "end": 432
                                },
                                "flags": 32,
                                "start": 430,
                                "end": 434
                            },
                            "flags": 32,
                            "start": 415,
                            "end": 434
                        },
                        "flags": 16,
                        "start": 410,
                        "end": 434
                    }
                ],
                "flags": 16,
                "start": 410,
                "end": 434
            },
            "flags": 16,
            "start": 406,
            "end": 435
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 435,
                "end": 488
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "p10",
                            "rawText": "p10",
                            "flags": 96,
                            "start": 488,
                            "end": 492
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 514,
                                "end": 517
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 220,
                                                "propertyList": {
                                                    "kind": 218,
                                                    "properties": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "value",
                                                            "rawText": "value",
                                                            "flags": 96,
                                                            "start": 498,
                                                            "end": 504
                                                        },
                                                        {
                                                            "kind": 134299649,
                                                            "text": "done",
                                                            "rawText": "done",
                                                            "flags": 96,
                                                            "start": 505,
                                                            "end": 510
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "multiline": false,
                                                    "flags": 0,
                                                    "start": 498,
                                                    "end": 510
                                                },
                                                "flags": 32,
                                                "start": 497,
                                                "end": 512
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 497,
                                        "end": 512
                                    },
                                    "flags": 32,
                                    "start": 496,
                                    "end": 513
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
                                    "flags": 32,
                                    "start": 519,
                                    "end": 519
                                },
                                "flags": 32,
                                "start": 517,
                                "end": 521
                            },
                            "flags": 32,
                            "start": 494,
                            "end": 521
                        },
                        "flags": 16,
                        "start": 488,
                        "end": 521
                    }
                ],
                "flags": 16,
                "start": 488,
                "end": 521
            },
            "flags": 16,
            "start": 435,
            "end": 522
        }
    ],
    "isModule": false,
    "text": "var a = (p: string) => p.length;\nvar a = (p: string) => { return p.length; };\n\nvar b = j => { return 0; };\nvar b = (j) => { return 0; };\n\nvar c: number;\nvar d = n => c = n;\nvar d = (n) => c = n;\nvar d: (n: any) => any;\n\n\nvar p1 = ([a]) => { };\nvar p2 = ([...a]) => { };\nvar p3 = ([, a]) => { };\nvar p4 = ([, ...a]) => { };\nvar p5 = ([a = 1]) => { };\nvar p6 = ({ a }) => { };\nvar p7 = ({ a: { b } }) => { };\nvar p8 = ({ a = 1 }) => { };\n//var p9 = ({ a: { b = 1 } = { b: 1 } }) => { };\nvar p10 = ([{ value, done }]) => { };\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 523
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

