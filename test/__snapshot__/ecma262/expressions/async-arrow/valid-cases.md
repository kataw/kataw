# Kataw parser test case

## Input

`````js

(async, x) => {};
async ();
async (x);
async (...x);
async (...x, ...y);
async () => {};
async x => {};
async (x) => {};
async (...x) => {};
async x => await 0;
async () => await 0;

(async x => y, z);
(async x => (y, z));
(async (x) => y), z;
(async (x) => y, z);
(async (x) => (y, z));
async x => y, z;
async x => (y, z);
async (x) => (y, z);

async (x) => y, z;

foo = async ({ async: bar }) => { await baz; };;
var x = async (a, b) => await a + b;
var x = async (a, b, c, d, e, f, g) => await a + await b + c + d + e + f + g;
f(a, async b => await b);
async a => { await a };
async function foo(a = async () => await b) {};
async a => await 1;
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
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "async",
                            "rawText": "async",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 7
                        },
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 10
                        }
                    ],
                    "trailingComma": false,
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 11
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 14
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 16
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 17
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 18
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "async",
                    "rawText": "async",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 24
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 18
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 18,
                "end": 27
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 18,
            "end": 28
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "async",
                    "rawText": "async",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 28,
                    "end": 34
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 36,
                            "end": 37
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 28,
                    "end": 28
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 28,
                "end": 38
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 28,
            "end": 39
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "async",
                    "rawText": "async",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 39,
                    "end": 45
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 47,
                                "end": 50
                            },
                            "argument": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 50,
                                "end": 51
                            },
                            "flags": 1073741856,
                            "transformFlags": 0,
                            "start": 47,
                            "end": 51
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 39,
                    "end": 39
                },
                "flags": 268435490,
                "transformFlags": 1,
                "start": 39,
                "end": 52
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 39,
            "end": 53
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "async",
                    "rawText": "async",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 53,
                    "end": 59
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 61,
                                "end": 64
                            },
                            "argument": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 64,
                                "end": 65
                            },
                            "flags": 1073741856,
                            "transformFlags": 0,
                            "start": 61,
                            "end": 65
                        },
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 66,
                                "end": 70
                            },
                            "argument": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 70,
                                "end": 71
                            },
                            "flags": 1073741856,
                            "transformFlags": 0,
                            "start": 66,
                            "end": 71
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 53,
                    "end": 53
                },
                "flags": 268435490,
                "transformFlags": 1,
                "start": 53,
                "end": 72
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 53,
            "end": 73
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 73,
                    "end": 79
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 81,
                    "end": 81
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 82,
                    "end": 85
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 87,
                        "end": 87
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 85,
                    "end": 88
                },
                "flags": 288,
                "transformFlags": 0,
                "start": 73,
                "end": 88
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 73,
            "end": 89
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 65,
                    "transformFlags": 0,
                    "start": 89,
                    "end": 95
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 95,
                    "end": 97
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 97,
                    "end": 100
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 102,
                        "end": 102
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 100,
                    "end": 103
                },
                "flags": 288,
                "transformFlags": 0,
                "start": 89,
                "end": 103
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 89,
            "end": 104
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 104,
                    "end": 110
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 112,
                            "end": 113
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 112,
                    "end": 114
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 114,
                    "end": 117
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 119,
                        "end": 119
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 117,
                    "end": 120
                },
                "flags": 288,
                "transformFlags": 0,
                "start": 104,
                "end": 120
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 104,
            "end": 121
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 121,
                    "end": 127
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 129,
                                "end": 132
                            },
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 132,
                                "end": 133
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": null,
                            "flags": 1073741856,
                            "transformFlags": 0,
                            "start": 129,
                            "end": 133
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 129,
                    "end": 134
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 134,
                    "end": 137
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 139,
                        "end": 139
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 137,
                    "end": 140
                },
                "flags": 290,
                "transformFlags": 0,
                "start": 121,
                "end": 140
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 121,
            "end": 141
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 65,
                    "transformFlags": 0,
                    "start": 141,
                    "end": 147
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 147,
                    "end": 149
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 149,
                    "end": 152
                },
                "contents": {
                    "kind": 208,
                    "awaitKeyword": {
                        "kind": 82196,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 152,
                        "end": 158
                    },
                    "expression": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 158,
                        "end": 160
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 152,
                    "end": 160
                },
                "flags": 288,
                "transformFlags": 0,
                "start": 141,
                "end": 160
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 141,
            "end": 161
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 161,
                    "end": 167
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 169,
                    "end": 169
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 170,
                    "end": 173
                },
                "contents": {
                    "kind": 208,
                    "awaitKeyword": {
                        "kind": 82196,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 173,
                        "end": 179
                    },
                    "expression": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 179,
                        "end": 181
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 173,
                    "end": 181
                },
                "flags": 288,
                "transformFlags": 0,
                "start": 161,
                "end": 181
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 161,
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
                            "kind": 271,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 185,
                                "end": 190
                            },
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 190,
                                "end": 192
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 192,
                                "end": 195
                            },
                            "contents": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 195,
                                "end": 197
                            },
                            "flags": 288,
                            "transformFlags": 0,
                            "start": 185,
                            "end": 197
                        },
                        {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 198,
                            "end": 200
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 182,
                    "end": 201
                },
                "flags": 182,
                "transformFlags": 0,
                "start": 33,
                "end": 201
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 182,
            "end": 202
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 271,
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 204,
                        "end": 209
                    },
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 209,
                        "end": 211
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 211,
                        "end": 214
                    },
                    "contents": {
                        "kind": 121,
                        "expression": {
                            "kind": 132,
                            "expressions": [
                                {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 216,
                                    "end": 217
                                },
                                {
                                    "kind": 134299649,
                                    "text": "z",
                                    "rawText": "z",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 218,
                                    "end": 220
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 1024,
                            "start": 214,
                            "end": 221
                        },
                        "flags": 214,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 221
                    },
                    "flags": 288,
                    "transformFlags": 0,
                    "start": 204,
                    "end": 221
                },
                "flags": 202,
                "transformFlags": 0,
                "start": 33,
                "end": 222
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 202,
            "end": 223
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 121,
                        "expression": {
                            "kind": 271,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 225,
                                "end": 230
                            },
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 232,
                                        "end": 233
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 232,
                                "end": 234
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 234,
                                "end": 237
                            },
                            "contents": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 237,
                                "end": 239
                            },
                            "flags": 288,
                            "transformFlags": 0,
                            "start": 225,
                            "end": 239
                        },
                        "flags": 223,
                        "transformFlags": 0,
                        "start": 33,
                        "end": 240
                    },
                    {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 241,
                        "end": 243
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 223,
                "end": 243
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 223,
            "end": 244
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 271,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 246,
                                "end": 251
                            },
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 253,
                                        "end": 254
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 253,
                                "end": 255
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 255,
                                "end": 258
                            },
                            "contents": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 258,
                                "end": 260
                            },
                            "flags": 288,
                            "transformFlags": 0,
                            "start": 246,
                            "end": 260
                        },
                        {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 261,
                            "end": 263
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 244,
                    "end": 264
                },
                "flags": 244,
                "transformFlags": 0,
                "start": 33,
                "end": 264
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 244,
            "end": 265
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 271,
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 267,
                        "end": 272
                    },
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [
                            {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 274,
                                "end": 275
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 274,
                        "end": 276
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 276,
                        "end": 279
                    },
                    "contents": {
                        "kind": 121,
                        "expression": {
                            "kind": 132,
                            "expressions": [
                                {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 281,
                                    "end": 282
                                },
                                {
                                    "kind": 134299649,
                                    "text": "z",
                                    "rawText": "z",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 283,
                                    "end": 285
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 1024,
                            "start": 279,
                            "end": 286
                        },
                        "flags": 279,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 286
                    },
                    "flags": 288,
                    "transformFlags": 0,
                    "start": 267,
                    "end": 286
                },
                "flags": 265,
                "transformFlags": 0,
                "start": 33,
                "end": 287
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 265,
            "end": 288
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 271,
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 65,
                            "transformFlags": 0,
                            "start": 288,
                            "end": 294
                        },
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 294,
                            "end": 296
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 296,
                            "end": 299
                        },
                        "contents": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 299,
                            "end": 301
                        },
                        "flags": 288,
                        "transformFlags": 0,
                        "start": 288,
                        "end": 301
                    },
                    {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 302,
                        "end": 304
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 288,
                "end": 304
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 288,
            "end": 305
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 65,
                    "transformFlags": 0,
                    "start": 305,
                    "end": 311
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 311,
                    "end": 313
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 313,
                    "end": 316
                },
                "contents": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [
                            {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 318,
                                "end": 319
                            },
                            {
                                "kind": 134299649,
                                "text": "z",
                                "rawText": "z",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 320,
                                "end": 322
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 1024,
                        "start": 316,
                        "end": 323
                    },
                    "flags": 316,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 323
                },
                "flags": 288,
                "transformFlags": 0,
                "start": 305,
                "end": 323
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 305,
            "end": 324
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 324,
                    "end": 330
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 332,
                            "end": 333
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 332,
                    "end": 334
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 334,
                    "end": 337
                },
                "contents": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [
                            {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 339,
                                "end": 340
                            },
                            {
                                "kind": 134299649,
                                "text": "z",
                                "rawText": "z",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 341,
                                "end": 343
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 1024,
                        "start": 337,
                        "end": 344
                    },
                    "flags": 337,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 344
                },
                "flags": 288,
                "transformFlags": 0,
                "start": 324,
                "end": 344
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 324,
            "end": 345
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 271,
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 345,
                            "end": 352
                        },
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 342,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 354,
                                    "end": 355
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 354,
                            "end": 356
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 356,
                            "end": 359
                        },
                        "contents": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 359,
                            "end": 361
                        },
                        "flags": 288,
                        "transformFlags": 0,
                        "start": 345,
                        "end": 361
                    },
                    {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 362,
                        "end": 364
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 345,
                "end": 364
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 345,
            "end": 365
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 365,
                    "end": 370
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 370,
                    "end": 372
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 372,
                        "end": 378
                    },
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [
                            {
                                "kind": 212,
                                "propertyList": {
                                    "kind": 213,
                                    "properties": [
                                        {
                                            "kind": 329,
                                            "key": {
                                                "kind": 134299649,
                                                "text": "async",
                                                "rawText": "async",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 381,
                                                "end": 387
                                            },
                                            "value": {
                                                "kind": 134299649,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 388,
                                                "end": 392
                                            },
                                            "initializer": null,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 381,
                                            "end": 392
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 381,
                                    "end": 392
                                },
                                "flags": 48,
                                "transformFlags": 0,
                                "start": 380,
                                "end": 394
                            }
                        ],
                        "trailingComma": false,
                        "flags": 34,
                        "transformFlags": 0,
                        "start": 380,
                        "end": 395
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 395,
                        "end": 398
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
                                        "kind": 208,
                                        "awaitKeyword": {
                                            "kind": 82196,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 400,
                                            "end": 406
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "baz",
                                            "rawText": "baz",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 406,
                                            "end": 410
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 400,
                                        "end": 410
                                    },
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 400,
                                    "end": 411
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 400,
                            "end": 411
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 398,
                        "end": 413
                    },
                    "flags": 290,
                    "transformFlags": 0,
                    "start": 372,
                    "end": 413
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 365,
                "end": 413
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 365,
            "end": 414
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 414,
            "end": 415
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "transformFlags": 0,
                "start": 415,
                "end": 419
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 419,
                            "end": 421
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 423,
                                "end": 429
                            },
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 431,
                                        "end": 432
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 433,
                                        "end": 435
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 431,
                                "end": 436
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 436,
                                "end": 439
                            },
                            "contents": {
                                "kind": 198,
                                "left": {
                                    "kind": 208,
                                    "awaitKeyword": {
                                        "kind": 82196,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 439,
                                        "end": 445
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 445,
                                        "end": 447
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 439,
                                    "end": 447
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 447,
                                    "end": 449
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 449,
                                    "end": 451
                                },
                                "flags": 32,
                                "transformFlags": 1024,
                                "start": 439,
                                "end": 451
                            },
                            "flags": 288,
                            "transformFlags": 0,
                            "start": 423,
                            "end": 451
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 419,
                        "end": 451
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 419,
                "end": 451
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 415,
            "end": 452
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "transformFlags": 0,
                "start": 452,
                "end": 456
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 456,
                            "end": 458
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 460,
                                "end": 466
                            },
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 468,
                                        "end": 469
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 470,
                                        "end": 472
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 473,
                                        "end": 475
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "d",
                                        "rawText": "d",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 476,
                                        "end": 478
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "e",
                                        "rawText": "e",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 479,
                                        "end": 481
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 482,
                                        "end": 484
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "g",
                                        "rawText": "g",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 485,
                                        "end": 487
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 468,
                                "end": 488
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 488,
                                "end": 491
                            },
                            "contents": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 198,
                                                "left": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 208,
                                                        "awaitKeyword": {
                                                            "kind": 82196,
                                                            "flags": 64,
                                                            "transformFlags": 0,
                                                            "start": 491,
                                                            "end": 497
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 497,
                                                            "end": 499
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 491,
                                                        "end": 499
                                                    },
                                                    "operatorToken": {
                                                        "kind": 99634,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 499,
                                                        "end": 501
                                                    },
                                                    "right": {
                                                        "kind": 208,
                                                        "awaitKeyword": {
                                                            "kind": 82196,
                                                            "flags": 64,
                                                            "transformFlags": 0,
                                                            "start": 501,
                                                            "end": 507
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 507,
                                                            "end": 509
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 501,
                                                        "end": 509
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 1024,
                                                    "start": 491,
                                                    "end": 509
                                                },
                                                "operatorToken": {
                                                    "kind": 99634,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 509,
                                                    "end": 511
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "c",
                                                    "rawText": "c",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 511,
                                                    "end": 513
                                                },
                                                "flags": 32,
                                                "transformFlags": 1024,
                                                "start": 491,
                                                "end": 513
                                            },
                                            "operatorToken": {
                                                "kind": 99634,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 513,
                                                "end": 515
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "d",
                                                "rawText": "d",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 515,
                                                "end": 517
                                            },
                                            "flags": 32,
                                            "transformFlags": 1024,
                                            "start": 491,
                                            "end": 517
                                        },
                                        "operatorToken": {
                                            "kind": 99634,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 517,
                                            "end": 519
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "e",
                                            "rawText": "e",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 519,
                                            "end": 521
                                        },
                                        "flags": 32,
                                        "transformFlags": 1024,
                                        "start": 491,
                                        "end": 521
                                    },
                                    "operatorToken": {
                                        "kind": 99634,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 521,
                                        "end": 523
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 523,
                                        "end": 525
                                    },
                                    "flags": 32,
                                    "transformFlags": 1024,
                                    "start": 491,
                                    "end": 525
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 525,
                                    "end": 527
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 527,
                                    "end": 529
                                },
                                "flags": 32,
                                "transformFlags": 1024,
                                "start": 491,
                                "end": 529
                            },
                            "flags": 288,
                            "transformFlags": 0,
                            "start": 460,
                            "end": 529
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 456,
                        "end": 529
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 456,
                "end": 529
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 452,
            "end": 530
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 530,
                    "end": 532
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 533,
                            "end": 534
                        },
                        {
                            "kind": 271,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 535,
                                "end": 541
                            },
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 541,
                                "end": 543
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 543,
                                "end": 546
                            },
                            "contents": {
                                "kind": 208,
                                "awaitKeyword": {
                                    "kind": 82196,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 546,
                                    "end": 552
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 552,
                                    "end": 554
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 546,
                                "end": 554
                            },
                            "flags": 288,
                            "transformFlags": 0,
                            "start": 535,
                            "end": 554
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 533,
                    "end": 554
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 530,
                "end": 555
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 530,
            "end": 556
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 65,
                    "transformFlags": 0,
                    "start": 556,
                    "end": 562
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 562,
                    "end": 564
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 564,
                    "end": 567
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
                                    "kind": 208,
                                    "awaitKeyword": {
                                        "kind": 82196,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 569,
                                        "end": 575
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 575,
                                        "end": 577
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 569,
                                    "end": 577
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 569,
                                "end": 577
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 569,
                        "end": 577
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 567,
                    "end": 579
                },
                "flags": 288,
                "transformFlags": 0,
                "start": 556,
                "end": 579
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 556,
            "end": 580
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "transformFlags": 0,
                "start": 580,
                "end": 586
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 586,
                "end": 595
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 595,
                "end": 599
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 600,
                            "end": 601
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 271,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 603,
                                "end": 609
                            },
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 611,
                                "end": 611
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 612,
                                "end": 615
                            },
                            "contents": {
                                "kind": 208,
                                "awaitKeyword": {
                                    "kind": 82196,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 615,
                                    "end": 621
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 621,
                                    "end": 623
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 615,
                                "end": 623
                            },
                            "flags": 288,
                            "transformFlags": 0,
                            "start": 603,
                            "end": 623
                        },
                        "flags": 34,
                        "transformFlags": 0,
                        "start": 600,
                        "end": 623
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "transformFlags": 0,
                "start": 600,
                "end": 623
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 626,
                    "end": 626
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 624,
                "end": 627
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 580,
            "end": 627
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 627,
            "end": 628
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 65,
                    "transformFlags": 0,
                    "start": 628,
                    "end": 634
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 634,
                    "end": 636
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 636,
                    "end": 639
                },
                "contents": {
                    "kind": 208,
                    "awaitKeyword": {
                        "kind": 82196,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 639,
                        "end": 645
                    },
                    "expression": {
                        "kind": 201392130,
                        "text": 1,
                        "rawText": "1",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 645,
                        "end": 647
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 639,
                    "end": 647
                },
                "flags": 288,
                "transformFlags": 0,
                "start": 628,
                "end": 647
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 628,
            "end": 648
        }
    ],
    "isModule": false,
    "source": "\n(async, x) => {};\nasync ();\nasync (x);\nasync (...x);\nasync (...x, ...y);\nasync () => {};\nasync x => {};\nasync (x) => {};\nasync (...x) => {};\nasync x => await 0;\nasync () => await 0;\n\n(async x => y, z);\n(async x => (y, z));\n(async (x) => y), z;\n(async (x) => y, z);\n(async (x) => (y, z));\nasync x => y, z;\nasync x => (y, z);\nasync (x) => (y, z);\n\nasync (x) => y, z;\n\nfoo = async ({ async: bar }) => { await baz; };;\nvar x = async (a, b) => await a + b;\nvar x = async (a, b, c, d, e, f, g) => await a + await b + c + d + e + f + g;\nf(a, async b => await b);\nasync a => { await a };\nasync function foo(a = async () => await b) {};\nasync a => await 1;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 648
}
```

### Printed

```javascript
(async, x) => {};
async();

async(x);

async(...x);

async(...x, ...y);

async () => {};

async x => {};

async (x) => {};

async (...x) => {};

async x => await 0;

async () => await 0;

(async x => y, z);

(async x => (y, z));

(async (x) => y), z;

(async (x) => y, z);

(async (x) => (y, z));

async x => y, z;

async x => (y, z);

async (x) => (y, z);

async (x) => y, z;

foo = async ({ async: bar }) => {
  await baz;
};

var x = async (a, b) => await a + b;

var x = async (a, b, c, d, e, f, g) => await a + await b + c + d + e + f + g;

f(a, async b => await b);

async a => {
  await a;
};

async function foo(a = async () => await b) {}

async a => await 1;

```

### Diagnostics

```javascript
✔ No errors
```

