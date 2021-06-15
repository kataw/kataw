# Kataw parser test case

## Input

`````js
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 0,
                    "end": 7
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 7,
                    "end": 9
                },
                "right": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 32,
                        "end": 35
                    },
                    "typeParameters": null,
                    "parameters": [
                        {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 329,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "async",
                                            "rawText": "async",
                                            "flags": 96,
                                            "start": 18,
                                            "end": 24
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 96,
                                            "start": 25,
                                            "end": 29
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 18,
                                        "end": 29
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 18,
                                "end": 29
                            },
                            "flags": 48,
                            "start": 17,
                            "end": 31
                        }
                    ],
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 9,
                        "end": 15
                    },
                    "returnType": null,
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
                                            "start": 37,
                                            "end": 43
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "baz",
                                            "rawText": "baz",
                                            "flags": 96,
                                            "start": 43,
                                            "end": 47
                                        },
                                        "flags": 32,
                                        "start": 37,
                                        "end": 47
                                    },
                                    "flags": 16,
                                    "start": 37,
                                    "end": 48
                                }
                            ],
                            "flags": 32,
                            "start": 37,
                            "end": 48
                        },
                        "flags": 32,
                        "start": 35,
                        "end": 50
                    },
                    "flags": 290,
                    "start": 9,
                    "end": 50
                },
                "flags": 32,
                "start": 0,
                "end": 50
            },
            "flags": 16,
            "start": 0,
            "end": 51
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 51,
            "end": 52
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 52,
                "end": 61
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
                            "start": 61,
                            "end": 63
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 78,
                                "end": 81
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 73,
                                    "end": 74
                                },
                                {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 75,
                                    "end": 77
                                }
                            ],
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 65,
                                "end": 71
                            },
                            "returnType": null,
                            "contents": {
                                "kind": 198,
                                "left": {
                                    "kind": 208,
                                    "awaitKeyword": {
                                        "kind": 82196,
                                        "flags": 64,
                                        "start": 81,
                                        "end": 87
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 87,
                                        "end": 89
                                    },
                                    "flags": 32,
                                    "start": 81,
                                    "end": 89
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "start": 89,
                                    "end": 91
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 91,
                                    "end": 93
                                },
                                "flags": 32,
                                "start": 81,
                                "end": 93
                            },
                            "flags": 288,
                            "start": 65,
                            "end": 93
                        },
                        "flags": 16,
                        "start": 61,
                        "end": 93
                    }
                ],
                "flags": 16,
                "start": 61,
                "end": 93
            },
            "flags": 16,
            "start": 52,
            "end": 94
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 94,
                "end": 103
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
                            "start": 103,
                            "end": 105
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 135,
                                "end": 138
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 115,
                                    "end": 116
                                },
                                {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 117,
                                    "end": 119
                                },
                                {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 120,
                                    "end": 122
                                },
                                {
                                    "kind": 134299649,
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 96,
                                    "start": 123,
                                    "end": 125
                                },
                                {
                                    "kind": 134299649,
                                    "text": "e",
                                    "rawText": "e",
                                    "flags": 96,
                                    "start": 126,
                                    "end": 128
                                },
                                {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 129,
                                    "end": 131
                                },
                                {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 132,
                                    "end": 134
                                }
                            ],
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 107,
                                "end": 113
                            },
                            "returnType": null,
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
                                                            "start": 138,
                                                            "end": 144
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 144,
                                                            "end": 146
                                                        },
                                                        "flags": 32,
                                                        "start": 138,
                                                        "end": 146
                                                    },
                                                    "operatorToken": {
                                                        "kind": 99634,
                                                        "flags": 96,
                                                        "start": 146,
                                                        "end": 148
                                                    },
                                                    "right": {
                                                        "kind": 208,
                                                        "awaitKeyword": {
                                                            "kind": 82196,
                                                            "flags": 64,
                                                            "start": 148,
                                                            "end": 154
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 96,
                                                            "start": 154,
                                                            "end": 156
                                                        },
                                                        "flags": 32,
                                                        "start": 148,
                                                        "end": 156
                                                    },
                                                    "flags": 32,
                                                    "start": 138,
                                                    "end": 156
                                                },
                                                "operatorToken": {
                                                    "kind": 99634,
                                                    "flags": 96,
                                                    "start": 156,
                                                    "end": 158
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "c",
                                                    "rawText": "c",
                                                    "flags": 96,
                                                    "start": 158,
                                                    "end": 160
                                                },
                                                "flags": 32,
                                                "start": 138,
                                                "end": 160
                                            },
                                            "operatorToken": {
                                                "kind": 99634,
                                                "flags": 96,
                                                "start": 160,
                                                "end": 162
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "d",
                                                "rawText": "d",
                                                "flags": 96,
                                                "start": 162,
                                                "end": 164
                                            },
                                            "flags": 32,
                                            "start": 138,
                                            "end": 164
                                        },
                                        "operatorToken": {
                                            "kind": 99634,
                                            "flags": 96,
                                            "start": 164,
                                            "end": 166
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "e",
                                            "rawText": "e",
                                            "flags": 96,
                                            "start": 166,
                                            "end": 168
                                        },
                                        "flags": 32,
                                        "start": 138,
                                        "end": 168
                                    },
                                    "operatorToken": {
                                        "kind": 99634,
                                        "flags": 96,
                                        "start": 168,
                                        "end": 170
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "start": 170,
                                        "end": 172
                                    },
                                    "flags": 32,
                                    "start": 138,
                                    "end": 172
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "start": 172,
                                    "end": 174
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 174,
                                    "end": 176
                                },
                                "flags": 32,
                                "start": 138,
                                "end": 176
                            },
                            "flags": 288,
                            "start": 107,
                            "end": 176
                        },
                        "flags": 16,
                        "start": 103,
                        "end": 176
                    }
                ],
                "flags": 16,
                "start": 103,
                "end": 176
            },
            "flags": 16,
            "start": 94,
            "end": 177
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 177,
                    "end": 184
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 185,
                            "end": 186
                        },
                        {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 195,
                                "end": 198
                            },
                            "typeParameters": null,
                            "parameters": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 193,
                                "end": 195
                            },
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 187,
                                "end": 193
                            },
                            "returnType": null,
                            "contents": {
                                "kind": 208,
                                "awaitKeyword": {
                                    "kind": 82196,
                                    "flags": 64,
                                    "start": 198,
                                    "end": 204
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 204,
                                    "end": 206
                                },
                                "flags": 32,
                                "start": 198,
                                "end": 206
                            },
                            "flags": 288,
                            "start": 187,
                            "end": 206
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 185,
                    "end": 206
                },
                "flags": 268435488,
                "start": 177,
                "end": 207
            },
            "flags": 16,
            "start": 177,
            "end": 208
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 221,
                    "end": 224
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 219,
                    "end": 221
                },
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 65,
                    "start": 208,
                    "end": 219
                },
                "returnType": null,
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
                                        "start": 226,
                                        "end": 232
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 232,
                                        "end": 234
                                    },
                                    "flags": 32,
                                    "start": 226,
                                    "end": 234
                                },
                                "flags": 16,
                                "start": 226,
                                "end": 234
                            }
                        ],
                        "flags": 32,
                        "start": 226,
                        "end": 234
                    },
                    "flags": 32,
                    "start": 224,
                    "end": 236
                },
                "flags": 288,
                "start": 208,
                "end": 236
            },
            "flags": 16,
            "start": 208,
            "end": 237
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 237,
                "end": 248
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 248,
                "end": 257
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 257,
                "end": 261
            },
            "typeParameters": null,
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 262,
                            "end": 263
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 274,
                                "end": 277
                            },
                            "typeParameters": null,
                            "parameters": [],
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 265,
                                "end": 271
                            },
                            "returnType": null,
                            "contents": {
                                "kind": 208,
                                "awaitKeyword": {
                                    "kind": 82196,
                                    "flags": 64,
                                    "start": 277,
                                    "end": 283
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 283,
                                    "end": 285
                                },
                                "flags": 32,
                                "start": 277,
                                "end": 285
                            },
                            "flags": 288,
                            "start": 265,
                            "end": 285
                        },
                        "flags": 34,
                        "start": 262,
                        "end": 285
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 261,
                "end": 286
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 288,
                    "end": 288
                },
                "flags": 32,
                "start": 286,
                "end": 289
            },
            "returnType": null,
            "flags": 144,
            "start": 237,
            "end": 289
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 289,
            "end": 290
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 302,
                    "end": 305
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 300,
                    "end": 302
                },
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 65,
                    "start": 290,
                    "end": 300
                },
                "returnType": null,
                "contents": {
                    "kind": 208,
                    "awaitKeyword": {
                        "kind": 82196,
                        "flags": 64,
                        "start": 305,
                        "end": 311
                    },
                    "expression": {
                        "kind": 201392130,
                        "text": 1,
                        "rawText": "1",
                        "flags": 96,
                        "start": 311,
                        "end": 313
                    },
                    "flags": 32,
                    "start": 305,
                    "end": 313
                },
                "flags": 288,
                "start": 290,
                "end": 313
            },
            "flags": 16,
            "start": 290,
            "end": 314
        }
    ],
    "isModule": false,
    "source": "    foo = async ({ async: bar }) => { await baz; };;\n     var x = async (a, b) => await a + b;\n     var x = async (a, b, c, d, e, f, g) => await a + await b + c + d + e + f + g;\n     f(a, async b => await b);\n     async a => { await a };\n     async function foo(a = async () => await b) {};\n    async a => await 1;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 314
}
```

### Printed

```javascript

foo = async ({
  async: bar
}) =>  {
  await baz;
};
var x = async (a, b) =>  await a + b;
var x = async (a, b, c, d, e, f, g) =>  await a + await b + c + d + e + f + g;
f(a, async b =>  await b);
async a =>  {
  await a;
};
async function foo(a = async () =>  await b) {}
async a =>  await 1;
```

### Diagnostics

```javascript
✔ No errors
```

