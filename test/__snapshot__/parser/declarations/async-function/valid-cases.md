# Kataw parser test case

## Input

`````js
-async function foo() { await 0 }
-async function() { await 0 }
1 - async function foo() { await 0 }
1 - async function() { await 0 }
(async function foo() { await 0 })
(async function() { await 0 })
(x, async function foo() { await 0 })
(x, async function() { await 0 })
new async function() { await 0 }
new async function() { await 0 }.x
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
                "kind": 198,
                "left": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 100915,
                        "flags": 64,
                        "start": 0,
                        "end": 1
                    },
                    "operand": {
                        "kind": 177,
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 64,
                            "start": 1,
                            "end": 6
                        },
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "start": 6,
                            "end": 15
                        },
                        "generatorToken": null,
                        "name": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 15,
                            "end": 19
                        },
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 19,
                            "end": 21
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
                                                "start": 23,
                                                "end": 29
                                            },
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 96,
                                                "start": 29,
                                                "end": 31
                                            },
                                            "flags": 32,
                                            "start": 23,
                                            "end": 31
                                        },
                                        "flags": 16,
                                        "start": 23,
                                        "end": 31
                                    }
                                ],
                                "flags": 32,
                                "start": 23,
                                "end": 31
                            },
                            "flags": 32,
                            "start": 21,
                            "end": 33
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 160,
                        "start": 1,
                        "end": 33
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 33
                },
                "operatorToken": {
                    "kind": 100915,
                    "flags": 65,
                    "start": 33,
                    "end": 35
                },
                "right": {
                    "kind": 177,
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 35,
                        "end": 40
                    },
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "start": 40,
                        "end": 49
                    },
                    "generatorToken": null,
                    "name": null,
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 49,
                        "end": 51
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
                                            "start": 53,
                                            "end": 59
                                        },
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "start": 59,
                                            "end": 61
                                        },
                                        "flags": 32,
                                        "start": 53,
                                        "end": 61
                                    },
                                    "flags": 16,
                                    "start": 53,
                                    "end": 61
                                }
                            ],
                            "flags": 32,
                            "start": 53,
                            "end": 61
                        },
                        "flags": 32,
                        "start": 51,
                        "end": 63
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 160,
                    "start": 35,
                    "end": 63
                },
                "flags": 32,
                "start": 0,
                "end": 63
            },
            "flags": 16,
            "start": 0,
            "end": 63
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 97,
                    "start": 63,
                    "end": 65
                },
                "operatorToken": {
                    "kind": 100915,
                    "flags": 64,
                    "start": 65,
                    "end": 67
                },
                "right": {
                    "kind": 177,
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 67,
                        "end": 73
                    },
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "start": 73,
                        "end": 82
                    },
                    "generatorToken": null,
                    "name": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 82,
                        "end": 86
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 86,
                        "end": 88
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
                                            "start": 90,
                                            "end": 96
                                        },
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "start": 96,
                                            "end": 98
                                        },
                                        "flags": 32,
                                        "start": 90,
                                        "end": 98
                                    },
                                    "flags": 16,
                                    "start": 90,
                                    "end": 98
                                }
                            ],
                            "flags": 32,
                            "start": 90,
                            "end": 98
                        },
                        "flags": 32,
                        "start": 88,
                        "end": 100
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 160,
                    "start": 67,
                    "end": 100
                },
                "flags": 32,
                "start": 63,
                "end": 100
            },
            "flags": 16,
            "start": 63,
            "end": 100
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 97,
                    "start": 100,
                    "end": 102
                },
                "operatorToken": {
                    "kind": 100915,
                    "flags": 64,
                    "start": 102,
                    "end": 104
                },
                "right": {
                    "kind": 131,
                    "expression": {
                        "kind": 131,
                        "expression": {
                            "kind": 131,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 177,
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "start": 104,
                                        "end": 110
                                    },
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "start": 110,
                                        "end": 119
                                    },
                                    "generatorToken": null,
                                    "name": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 119,
                                        "end": 121
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
                                                            "start": 123,
                                                            "end": 129
                                                        },
                                                        "expression": {
                                                            "kind": 201392130,
                                                            "text": 0,
                                                            "rawText": "0",
                                                            "flags": 96,
                                                            "start": 129,
                                                            "end": 131
                                                        },
                                                        "flags": 32,
                                                        "start": 123,
                                                        "end": 131
                                                    },
                                                    "flags": 16,
                                                    "start": 123,
                                                    "end": 131
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 123,
                                            "end": 131
                                        },
                                        "flags": 32,
                                        "start": 121,
                                        "end": 133
                                    },
                                    "typeParameters": null,
                                    "returnType": null,
                                    "flags": 160,
                                    "start": 104,
                                    "end": 133
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 177,
                                            "asyncKeyword": {
                                                "kind": 82031,
                                                "flags": 64,
                                                "start": 135,
                                                "end": 140
                                            },
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 64,
                                                "start": 140,
                                                "end": 149
                                            },
                                            "generatorToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "start": 149,
                                                "end": 153
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 153,
                                                "end": 155
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
                                                                    "start": 157,
                                                                    "end": 163
                                                                },
                                                                "expression": {
                                                                    "kind": 201392130,
                                                                    "text": 0,
                                                                    "rawText": "0",
                                                                    "flags": 96,
                                                                    "start": 163,
                                                                    "end": 165
                                                                },
                                                                "flags": 32,
                                                                "start": 157,
                                                                "end": 165
                                                            },
                                                            "flags": 16,
                                                            "start": 157,
                                                            "end": 165
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 157,
                                                    "end": 165
                                                },
                                                "flags": 32,
                                                "start": 155,
                                                "end": 167
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 160,
                                            "start": 135,
                                            "end": 167
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 135,
                                    "end": 167
                                },
                                "flags": 268435488,
                                "start": 104,
                                "end": 168
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 177,
                                        "asyncKeyword": {
                                            "kind": 82031,
                                            "flags": 64,
                                            "start": 170,
                                            "end": 175
                                        },
                                        "functionKeyword": {
                                            "kind": 37822554,
                                            "flags": 64,
                                            "start": 175,
                                            "end": 184
                                        },
                                        "generatorToken": null,
                                        "name": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 184,
                                            "end": 186
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
                                                                "start": 188,
                                                                "end": 194
                                                            },
                                                            "expression": {
                                                                "kind": 201392130,
                                                                "text": 0,
                                                                "rawText": "0",
                                                                "flags": 96,
                                                                "start": 194,
                                                                "end": 196
                                                            },
                                                            "flags": 32,
                                                            "start": 188,
                                                            "end": 196
                                                        },
                                                        "flags": 16,
                                                        "start": 188,
                                                        "end": 196
                                                    }
                                                ],
                                                "flags": 32,
                                                "start": 188,
                                                "end": 196
                                            },
                                            "flags": 32,
                                            "start": 186,
                                            "end": 198
                                        },
                                        "typeParameters": null,
                                        "returnType": null,
                                        "flags": 160,
                                        "start": 170,
                                        "end": 198
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 170,
                                "end": 198
                            },
                            "flags": 268435488,
                            "start": 104,
                            "end": 199
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 201,
                                    "end": 202
                                },
                                {
                                    "kind": 177,
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "start": 203,
                                        "end": 209
                                    },
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "start": 209,
                                        "end": 218
                                    },
                                    "generatorToken": null,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 218,
                                        "end": 222
                                    },
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 222,
                                        "end": 224
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
                                                            "start": 226,
                                                            "end": 232
                                                        },
                                                        "expression": {
                                                            "kind": 201392130,
                                                            "text": 0,
                                                            "rawText": "0",
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
                                    "typeParameters": null,
                                    "returnType": null,
                                    "flags": 160,
                                    "start": 203,
                                    "end": 236
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 201,
                            "end": 236
                        },
                        "flags": 268435488,
                        "start": 104,
                        "end": 237
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 239,
                                "end": 240
                            },
                            {
                                "kind": 177,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "start": 241,
                                    "end": 247
                                },
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "start": 247,
                                    "end": 256
                                },
                                "generatorToken": null,
                                "name": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 256,
                                    "end": 258
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
                                                        "start": 260,
                                                        "end": 266
                                                    },
                                                    "expression": {
                                                        "kind": 201392130,
                                                        "text": 0,
                                                        "rawText": "0",
                                                        "flags": 96,
                                                        "start": 266,
                                                        "end": 268
                                                    },
                                                    "flags": 32,
                                                    "start": 260,
                                                    "end": 268
                                                },
                                                "flags": 16,
                                                "start": 260,
                                                "end": 268
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 260,
                                        "end": 268
                                    },
                                    "flags": 32,
                                    "start": 258,
                                    "end": 270
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 160,
                                "start": 241,
                                "end": 270
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 239,
                        "end": 270
                    },
                    "flags": 268435488,
                    "start": 104,
                    "end": 271
                },
                "flags": 32,
                "start": 100,
                "end": 271
            },
            "flags": 16,
            "start": 100,
            "end": 271
        },
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 97,
                    "start": 271,
                    "end": 275
                },
                "expression": {
                    "kind": 177,
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 275,
                        "end": 281
                    },
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "start": 281,
                        "end": 290
                    },
                    "generatorToken": null,
                    "name": null,
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 290,
                        "end": 292
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
                                            "start": 294,
                                            "end": 300
                                        },
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "start": 300,
                                            "end": 302
                                        },
                                        "flags": 32,
                                        "start": 294,
                                        "end": 302
                                    },
                                    "flags": 16,
                                    "start": 294,
                                    "end": 302
                                }
                            ],
                            "flags": 32,
                            "start": 294,
                            "end": 302
                        },
                        "flags": 32,
                        "start": 292,
                        "end": 304
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 160,
                    "start": 275,
                    "end": 304
                },
                "argumentList": null,
                "flags": 32,
                "start": 271,
                "end": 304
            },
            "flags": 16,
            "start": 271,
            "end": 304
        },
        {
            "kind": 120,
            "expression": {
                "kind": 129,
                "member": {
                    "kind": 210,
                    "newKeyword": {
                        "kind": 138477661,
                        "flags": 97,
                        "start": 304,
                        "end": 308
                    },
                    "expression": {
                        "kind": 177,
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 64,
                            "start": 308,
                            "end": 314
                        },
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "start": 314,
                            "end": 323
                        },
                        "generatorToken": null,
                        "name": null,
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 323,
                            "end": 325
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
                                                "start": 327,
                                                "end": 333
                                            },
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 96,
                                                "start": 333,
                                                "end": 335
                                            },
                                            "flags": 32,
                                            "start": 327,
                                            "end": 335
                                        },
                                        "flags": 16,
                                        "start": 327,
                                        "end": 335
                                    }
                                ],
                                "flags": 32,
                                "start": 327,
                                "end": 335
                            },
                            "flags": 32,
                            "start": 325,
                            "end": 337
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 160,
                        "start": 308,
                        "end": 337
                    },
                    "argumentList": null,
                    "flags": 32,
                    "start": 304,
                    "end": 337
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 338,
                    "end": 339
                },
                "flags": 536870944,
                "start": 304,
                "end": 339
            },
            "flags": 16,
            "start": 304,
            "end": 339
        }
    ],
    "isModule": false,
    "source": "-async function foo() { await 0 }\n-async function() { await 0 }\n1 - async function foo() { await 0 }\n1 - async function() { await 0 }\n(async function foo() { await 0 })\n(async function() { await 0 })\n(x, async function foo() { await 0 })\n(x, async function() { await 0 })\nnew async function() { await 0 }\nnew async function() { await 0 }.x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 339
}
```

### Printed

```javascript

-async function foo() {
  await 0;
} - async function () {
    await 0;
  };
1 - async function foo() {
    await 0;
  };
1 - async function () {
    await 0;
  }(async function foo() {
    await 0;
  })(async function () {
    await 0;
  })(x, async function foo() {
      await 0;
    })(x, async function () {
      await 0;
    });
new  async function () {
  await 0;
}();
new  async function () {
  await 0;
}().x;
```

### Diagnostics

```javascript
✔ No errors
```

