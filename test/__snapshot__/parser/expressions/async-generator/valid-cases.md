# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
(function * gen() {yield 2;})
(function * gen() {yield * 2;});

(function * gen() {yield *
 2;});

(function * gen() {yield yield 1;});
(function * gen() {yield * yield * 1;});
(function * gen() {yield 3 + (yield 4);});
(function * gen() {yield * 3 + (yield * 4);});

(function * gen() {yield * 1; return});
(function * gen() {yield 1; return 37});
(function * gen() {yield * 1; return 37});
(function * gen() {yield 1; return 37; yield 'dead';});
(function * gen() {yield * 1; return 37; yield * 'dead';});

(function * gen() {yield;});
(function * gen() {yield});
(function * gen() {yield
});

(function * gen() {(yield)});
(function * gen() {[yield]});
(function * gen() {{yield}});
(function * gen() {yield, yield});
(function * gen() {yield; yield});
(function * gen() {(yield) ? yield : yield});
(function * gen() {(yield)
 ? yield : yield});
    // If there is a newline before the next token, we don't look for RHS.

(function * gen() {yield
for (;;) {}});

(function * gen() {x = class extends (yield) {}});
(function * gen() {x = class extends f(yield) {}});
(function * gen() {x = class extends (null, yield) { }});
(function * gen() {x = class extends (a ? null : yield) { }});
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
                    "kind": 121,
                    "expression": {
                        "kind": 177,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 1,
                            "start": 0,
                            "end": 9
                        },
                        "generatorToken": {
                            "kind": 67143222,
                            "flags": 9,
                            "start": 512,
                            "end": 11
                        },
                        "name": {
                            "kind": 134299649,
                            "text": "gen",
                            "rawText": "gen",
                            "flags": 768,
                            "start": 11,
                            "end": 15
                        },
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 15,
                            "end": 17
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
                                            "kind": 229,
                                            "yieldKeyword": {
                                                "kind": 8454253,
                                                "flags": 19,
                                                "start": 0,
                                                "end": 24
                                            },
                                            "delegate": false,
                                            "asteriskToken": null,
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 2,
                                                "rawText": "2",
                                                "flags": 768,
                                                "start": 24,
                                                "end": 26
                                            },
                                            "flags": 256,
                                            "start": 19,
                                            "end": 26
                                        },
                                        "flags": 128,
                                        "start": 19,
                                        "end": 27
                                    }
                                ],
                                "multiline": false,
                                "flags": 256,
                                "start": 19,
                                "end": 27
                            },
                            "flags": 256,
                            "start": 17,
                            "end": 28
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 2304,
                        "start": 1,
                        "end": 28
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 29
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 31,
                                "start": 0,
                                "end": 39
                            },
                            "generatorToken": {
                                "kind": 67143222,
                                "flags": 39,
                                "start": 512,
                                "end": 41
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "gen",
                                "rawText": "gen",
                                "flags": 768,
                                "start": 41,
                                "end": 45
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 45,
                                "end": 47
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
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 49,
                                                    "start": 0,
                                                    "end": 54
                                                },
                                                "delegate": true,
                                                "asteriskToken": {
                                                    "kind": 67143222,
                                                    "flags": 54,
                                                    "start": 512,
                                                    "end": 56
                                                },
                                                "expression": {
                                                    "kind": 201392130,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 56,
                                                    "end": 58
                                                },
                                                "flags": 256,
                                                "start": 49,
                                                "end": 58
                                            },
                                            "flags": 128,
                                            "start": 49,
                                            "end": 59
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 49,
                                    "end": 59
                                },
                                "flags": 256,
                                "start": 47,
                                "end": 60
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 2304,
                            "start": 31,
                            "end": 60
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 31,
                    "end": 60
                },
                "flags": 256,
                "start": 0,
                "end": 61
            },
            "flags": 128,
            "start": 0,
            "end": 62
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 65,
                        "start": 0,
                        "end": 73
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 73,
                        "start": 512,
                        "end": 75
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 768,
                        "start": 75,
                        "end": 79
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 79,
                        "end": 81
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
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 83,
                                            "start": 0,
                                            "end": 88
                                        },
                                        "delegate": true,
                                        "asteriskToken": {
                                            "kind": 67143222,
                                            "flags": 88,
                                            "start": 512,
                                            "end": 90
                                        },
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 769,
                                            "start": 90,
                                            "end": 93
                                        },
                                        "flags": 256,
                                        "start": 83,
                                        "end": 93
                                    },
                                    "flags": 128,
                                    "start": 83,
                                    "end": 94
                                }
                            ],
                            "multiline": false,
                            "flags": 256,
                            "start": 83,
                            "end": 94
                        },
                        "flags": 256,
                        "start": 81,
                        "end": 95
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 2304,
                    "start": 65,
                    "end": 95
                },
                "flags": 256,
                "start": 62,
                "end": 96
            },
            "flags": 128,
            "start": 62,
            "end": 97
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 100,
                        "start": 0,
                        "end": 108
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 108,
                        "start": 512,
                        "end": 110
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 768,
                        "start": 110,
                        "end": 114
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 114,
                        "end": 116
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
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 118,
                                            "start": 0,
                                            "end": 123
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": {
                                            "kind": 229,
                                            "yieldKeyword": {
                                                "kind": 8454253,
                                                "flags": 123,
                                                "start": 0,
                                                "end": 129
                                            },
                                            "delegate": false,
                                            "asteriskToken": null,
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 768,
                                                "start": 129,
                                                "end": 131
                                            },
                                            "flags": 256,
                                            "start": 123,
                                            "end": 131
                                        },
                                        "flags": 256,
                                        "start": 118,
                                        "end": 131
                                    },
                                    "flags": 128,
                                    "start": 118,
                                    "end": 132
                                }
                            ],
                            "multiline": false,
                            "flags": 256,
                            "start": 118,
                            "end": 132
                        },
                        "flags": 256,
                        "start": 116,
                        "end": 133
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 2304,
                    "start": 100,
                    "end": 133
                },
                "flags": 256,
                "start": 97,
                "end": 134
            },
            "flags": 128,
            "start": 97,
            "end": 135
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 137,
                        "start": 0,
                        "end": 145
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 145,
                        "start": 512,
                        "end": 147
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 768,
                        "start": 147,
                        "end": 151
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 151,
                        "end": 153
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
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 155,
                                            "start": 0,
                                            "end": 160
                                        },
                                        "delegate": true,
                                        "asteriskToken": {
                                            "kind": 67143222,
                                            "flags": 160,
                                            "start": 512,
                                            "end": 162
                                        },
                                        "expression": {
                                            "kind": 229,
                                            "yieldKeyword": {
                                                "kind": 8454253,
                                                "flags": 162,
                                                "start": 0,
                                                "end": 168
                                            },
                                            "delegate": true,
                                            "asteriskToken": {
                                                "kind": 67143222,
                                                "flags": 168,
                                                "start": 512,
                                                "end": 170
                                            },
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 768,
                                                "start": 170,
                                                "end": 172
                                            },
                                            "flags": 256,
                                            "start": 162,
                                            "end": 172
                                        },
                                        "flags": 256,
                                        "start": 155,
                                        "end": 172
                                    },
                                    "flags": 128,
                                    "start": 155,
                                    "end": 173
                                }
                            ],
                            "multiline": false,
                            "flags": 256,
                            "start": 155,
                            "end": 173
                        },
                        "flags": 256,
                        "start": 153,
                        "end": 174
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 2304,
                    "start": 137,
                    "end": 174
                },
                "flags": 256,
                "start": 135,
                "end": 175
            },
            "flags": 128,
            "start": 135,
            "end": 176
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 178,
                        "start": 0,
                        "end": 186
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 186,
                        "start": 512,
                        "end": 188
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 768,
                        "start": 188,
                        "end": 192
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 192,
                        "end": 194
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
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 196,
                                            "start": 0,
                                            "end": 201
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 201392130,
                                                "text": 3,
                                                "rawText": "3",
                                                "flags": 768,
                                                "start": 201,
                                                "end": 203
                                            },
                                            "operatorToken": {
                                                "kind": 34098,
                                                "flags": 512,
                                                "start": 203,
                                                "end": 205
                                            },
                                            "right": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 229,
                                                    "yieldKeyword": {
                                                        "kind": 8454253,
                                                        "flags": 207,
                                                        "start": 0,
                                                        "end": 212
                                                    },
                                                    "delegate": false,
                                                    "asteriskToken": null,
                                                    "expression": {
                                                        "kind": 201392130,
                                                        "text": 4,
                                                        "rawText": "4",
                                                        "flags": 768,
                                                        "start": 212,
                                                        "end": 214
                                                    },
                                                    "flags": 256,
                                                    "start": 207,
                                                    "end": 214
                                                },
                                                "flags": 256,
                                                "start": 205,
                                                "end": 215
                                            },
                                            "flags": 256,
                                            "start": 201,
                                            "end": 215
                                        },
                                        "flags": 256,
                                        "start": 196,
                                        "end": 215
                                    },
                                    "flags": 128,
                                    "start": 196,
                                    "end": 216
                                }
                            ],
                            "multiline": false,
                            "flags": 256,
                            "start": 196,
                            "end": 216
                        },
                        "flags": 256,
                        "start": 194,
                        "end": 217
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 2304,
                    "start": 178,
                    "end": 217
                },
                "flags": 256,
                "start": 176,
                "end": 218
            },
            "flags": 128,
            "start": 176,
            "end": 219
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 221,
                        "start": 0,
                        "end": 229
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 229,
                        "start": 512,
                        "end": 231
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 768,
                        "start": 231,
                        "end": 235
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 235,
                        "end": 237
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
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 239,
                                            "start": 0,
                                            "end": 244
                                        },
                                        "delegate": true,
                                        "asteriskToken": {
                                            "kind": 67143222,
                                            "flags": 244,
                                            "start": 512,
                                            "end": 246
                                        },
                                        "expression": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 201392130,
                                                "text": 3,
                                                "rawText": "3",
                                                "flags": 768,
                                                "start": 246,
                                                "end": 248
                                            },
                                            "operatorToken": {
                                                "kind": 34098,
                                                "flags": 512,
                                                "start": 248,
                                                "end": 250
                                            },
                                            "right": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 229,
                                                    "yieldKeyword": {
                                                        "kind": 8454253,
                                                        "flags": 252,
                                                        "start": 0,
                                                        "end": 257
                                                    },
                                                    "delegate": true,
                                                    "asteriskToken": {
                                                        "kind": 67143222,
                                                        "flags": 257,
                                                        "start": 512,
                                                        "end": 259
                                                    },
                                                    "expression": {
                                                        "kind": 201392130,
                                                        "text": 4,
                                                        "rawText": "4",
                                                        "flags": 768,
                                                        "start": 259,
                                                        "end": 261
                                                    },
                                                    "flags": 256,
                                                    "start": 252,
                                                    "end": 261
                                                },
                                                "flags": 256,
                                                "start": 250,
                                                "end": 262
                                            },
                                            "flags": 256,
                                            "start": 246,
                                            "end": 262
                                        },
                                        "flags": 256,
                                        "start": 239,
                                        "end": 262
                                    },
                                    "flags": 128,
                                    "start": 239,
                                    "end": 263
                                }
                            ],
                            "multiline": false,
                            "flags": 256,
                            "start": 239,
                            "end": 263
                        },
                        "flags": 256,
                        "start": 237,
                        "end": 264
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 2304,
                    "start": 221,
                    "end": 264
                },
                "flags": 256,
                "start": 219,
                "end": 265
            },
            "flags": 128,
            "start": 219,
            "end": 266
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 269,
                        "start": 0,
                        "end": 277
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 277,
                        "start": 512,
                        "end": 279
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 768,
                        "start": 279,
                        "end": 283
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 283,
                        "end": 285
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
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 287,
                                            "start": 0,
                                            "end": 292
                                        },
                                        "delegate": true,
                                        "asteriskToken": {
                                            "kind": 67143222,
                                            "flags": 292,
                                            "start": 512,
                                            "end": 294
                                        },
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 768,
                                            "start": 294,
                                            "end": 296
                                        },
                                        "flags": 256,
                                        "start": 287,
                                        "end": 296
                                    },
                                    "flags": 128,
                                    "start": 287,
                                    "end": 297
                                },
                                {
                                    "kind": 161,
                                    "returnKeyword": {
                                        "kind": 37757022,
                                        "flags": 297,
                                        "start": 0,
                                        "end": 304
                                    },
                                    "expression": null,
                                    "flags": 128,
                                    "start": 0,
                                    "end": 297
                                }
                            ],
                            "multiline": false,
                            "flags": 256,
                            "start": 287,
                            "end": 304
                        },
                        "flags": 256,
                        "start": 285,
                        "end": 305
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 2304,
                    "start": 269,
                    "end": 305
                },
                "flags": 256,
                "start": 266,
                "end": 306
            },
            "flags": 128,
            "start": 266,
            "end": 307
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 309,
                        "start": 0,
                        "end": 317
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 317,
                        "start": 512,
                        "end": 319
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 768,
                        "start": 319,
                        "end": 323
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
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
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 327,
                                            "start": 0,
                                            "end": 332
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 768,
                                            "start": 332,
                                            "end": 334
                                        },
                                        "flags": 256,
                                        "start": 327,
                                        "end": 334
                                    },
                                    "flags": 128,
                                    "start": 327,
                                    "end": 335
                                },
                                {
                                    "kind": 161,
                                    "returnKeyword": {
                                        "kind": 37757022,
                                        "flags": 335,
                                        "start": 0,
                                        "end": 342
                                    },
                                    "expression": {
                                        "kind": 201392130,
                                        "text": 37,
                                        "rawText": "37",
                                        "flags": 768,
                                        "start": 342,
                                        "end": 345
                                    },
                                    "flags": 128,
                                    "start": 0,
                                    "end": 335
                                }
                            ],
                            "multiline": false,
                            "flags": 256,
                            "start": 327,
                            "end": 345
                        },
                        "flags": 256,
                        "start": 325,
                        "end": 346
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 2304,
                    "start": 309,
                    "end": 346
                },
                "flags": 256,
                "start": 307,
                "end": 347
            },
            "flags": 128,
            "start": 307,
            "end": 348
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 350,
                        "start": 0,
                        "end": 358
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 358,
                        "start": 512,
                        "end": 360
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 768,
                        "start": 360,
                        "end": 364
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 364,
                        "end": 366
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
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 368,
                                            "start": 0,
                                            "end": 373
                                        },
                                        "delegate": true,
                                        "asteriskToken": {
                                            "kind": 67143222,
                                            "flags": 373,
                                            "start": 512,
                                            "end": 375
                                        },
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 768,
                                            "start": 375,
                                            "end": 377
                                        },
                                        "flags": 256,
                                        "start": 368,
                                        "end": 377
                                    },
                                    "flags": 128,
                                    "start": 368,
                                    "end": 378
                                },
                                {
                                    "kind": 161,
                                    "returnKeyword": {
                                        "kind": 37757022,
                                        "flags": 378,
                                        "start": 0,
                                        "end": 385
                                    },
                                    "expression": {
                                        "kind": 201392130,
                                        "text": 37,
                                        "rawText": "37",
                                        "flags": 768,
                                        "start": 385,
                                        "end": 388
                                    },
                                    "flags": 128,
                                    "start": 0,
                                    "end": 378
                                }
                            ],
                            "multiline": false,
                            "flags": 256,
                            "start": 368,
                            "end": 388
                        },
                        "flags": 256,
                        "start": 366,
                        "end": 389
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 2304,
                    "start": 350,
                    "end": 389
                },
                "flags": 256,
                "start": 348,
                "end": 390
            },
            "flags": 128,
            "start": 348,
            "end": 391
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 393,
                        "start": 0,
                        "end": 401
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 401,
                        "start": 512,
                        "end": 403
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 768,
                        "start": 403,
                        "end": 407
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 407,
                        "end": 409
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
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 411,
                                            "start": 0,
                                            "end": 416
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 768,
                                            "start": 416,
                                            "end": 418
                                        },
                                        "flags": 256,
                                        "start": 411,
                                        "end": 418
                                    },
                                    "flags": 128,
                                    "start": 411,
                                    "end": 419
                                },
                                {
                                    "kind": 161,
                                    "returnKeyword": {
                                        "kind": 37757022,
                                        "flags": 419,
                                        "start": 0,
                                        "end": 426
                                    },
                                    "expression": {
                                        "kind": 201392130,
                                        "text": 37,
                                        "rawText": "37",
                                        "flags": 768,
                                        "start": 426,
                                        "end": 429
                                    },
                                    "flags": 128,
                                    "start": 0,
                                    "end": 419
                                },
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 430,
                                            "start": 0,
                                            "end": 436
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "dead",
                                            "rawText": "dead",
                                            "flags": 67109632,
                                            "start": 436,
                                            "end": 443
                                        },
                                        "flags": 256,
                                        "start": 430,
                                        "end": 443
                                    },
                                    "flags": 128,
                                    "start": 430,
                                    "end": 444
                                }
                            ],
                            "multiline": false,
                            "flags": 256,
                            "start": 411,
                            "end": 444
                        },
                        "flags": 256,
                        "start": 409,
                        "end": 445
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 2304,
                    "start": 393,
                    "end": 445
                },
                "flags": 256,
                "start": 391,
                "end": 446
            },
            "flags": 128,
            "start": 391,
            "end": 447
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 449,
                        "start": 0,
                        "end": 457
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 457,
                        "start": 512,
                        "end": 459
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 768,
                        "start": 459,
                        "end": 463
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 463,
                        "end": 465
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
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 467,
                                            "start": 0,
                                            "end": 472
                                        },
                                        "delegate": true,
                                        "asteriskToken": {
                                            "kind": 67143222,
                                            "flags": 472,
                                            "start": 512,
                                            "end": 474
                                        },
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 768,
                                            "start": 474,
                                            "end": 476
                                        },
                                        "flags": 256,
                                        "start": 467,
                                        "end": 476
                                    },
                                    "flags": 128,
                                    "start": 467,
                                    "end": 477
                                },
                                {
                                    "kind": 161,
                                    "returnKeyword": {
                                        "kind": 37757022,
                                        "flags": 477,
                                        "start": 0,
                                        "end": 484
                                    },
                                    "expression": {
                                        "kind": 201392130,
                                        "text": 37,
                                        "rawText": "37",
                                        "flags": 768,
                                        "start": 484,
                                        "end": 487
                                    },
                                    "flags": 128,
                                    "start": 0,
                                    "end": 477
                                },
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 488,
                                            "start": 0,
                                            "end": 494
                                        },
                                        "delegate": true,
                                        "asteriskToken": {
                                            "kind": 67143222,
                                            "flags": 494,
                                            "start": 512,
                                            "end": 496
                                        },
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "dead",
                                            "rawText": "dead",
                                            "flags": 67109632,
                                            "start": 496,
                                            "end": 503
                                        },
                                        "flags": 256,
                                        "start": 488,
                                        "end": 503
                                    },
                                    "flags": 128,
                                    "start": 488,
                                    "end": 504
                                }
                            ],
                            "multiline": false,
                            "flags": 256,
                            "start": 467,
                            "end": 504
                        },
                        "flags": 256,
                        "start": 465,
                        "end": 505
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 2304,
                    "start": 449,
                    "end": 505
                },
                "flags": 256,
                "start": 447,
                "end": 506
            },
            "flags": 128,
            "start": 447,
            "end": 507
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 510,
                        "start": 0,
                        "end": 518
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 518,
                        "start": 512,
                        "end": 520
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 768,
                        "start": 520,
                        "end": 524
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 524,
                        "end": 526
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
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 528,
                                            "start": 0,
                                            "end": 533
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": null,
                                        "flags": 256,
                                        "start": 528,
                                        "end": 533
                                    },
                                    "flags": 128,
                                    "start": 528,
                                    "end": 534
                                }
                            ],
                            "multiline": false,
                            "flags": 256,
                            "start": 528,
                            "end": 534
                        },
                        "flags": 256,
                        "start": 526,
                        "end": 535
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 2304,
                    "start": 510,
                    "end": 535
                },
                "flags": 256,
                "start": 507,
                "end": 536
            },
            "flags": 128,
            "start": 507,
            "end": 537
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 539,
                        "start": 0,
                        "end": 547
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 547,
                        "start": 512,
                        "end": 549
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 768,
                        "start": 549,
                        "end": 553
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 553,
                        "end": 555
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
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 557,
                                            "start": 0,
                                            "end": 562
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": null,
                                        "flags": 256,
                                        "start": 557,
                                        "end": 562
                                    },
                                    "flags": 128,
                                    "start": 557,
                                    "end": 562
                                }
                            ],
                            "multiline": false,
                            "flags": 256,
                            "start": 557,
                            "end": 562
                        },
                        "flags": 256,
                        "start": 555,
                        "end": 563
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 2304,
                    "start": 539,
                    "end": 563
                },
                "flags": 256,
                "start": 537,
                "end": 564
            },
            "flags": 128,
            "start": 537,
            "end": 565
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 567,
                        "start": 0,
                        "end": 575
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 575,
                        "start": 512,
                        "end": 577
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 768,
                        "start": 577,
                        "end": 581
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 581,
                        "end": 583
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
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 585,
                                            "start": 0,
                                            "end": 590
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": null,
                                        "flags": 256,
                                        "start": 585,
                                        "end": 590
                                    },
                                    "flags": 128,
                                    "start": 585,
                                    "end": 590
                                }
                            ],
                            "multiline": false,
                            "flags": 256,
                            "start": 585,
                            "end": 590
                        },
                        "flags": 256,
                        "start": 583,
                        "end": 592
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 2304,
                    "start": 567,
                    "end": 592
                },
                "flags": 256,
                "start": 565,
                "end": 593
            },
            "flags": 128,
            "start": 565,
            "end": 594
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 597,
                        "start": 0,
                        "end": 605
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 605,
                        "start": 512,
                        "end": 607
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 768,
                        "start": 607,
                        "end": 611
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 611,
                        "end": 613
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
                                        "kind": 121,
                                        "expression": {
                                            "kind": 229,
                                            "yieldKeyword": {
                                                "kind": 8454253,
                                                "flags": 616,
                                                "start": 0,
                                                "end": 621
                                            },
                                            "delegate": false,
                                            "asteriskToken": null,
                                            "expression": null,
                                            "flags": 256,
                                            "start": 616,
                                            "end": 621
                                        },
                                        "flags": 256,
                                        "start": 615,
                                        "end": 622
                                    },
                                    "flags": 128,
                                    "start": 615,
                                    "end": 622
                                }
                            ],
                            "multiline": false,
                            "flags": 256,
                            "start": 615,
                            "end": 622
                        },
                        "flags": 256,
                        "start": 613,
                        "end": 623
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 2304,
                    "start": 597,
                    "end": 623
                },
                "flags": 256,
                "start": 594,
                "end": 624
            },
            "flags": 128,
            "start": 594,
            "end": 625
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 627,
                        "start": 0,
                        "end": 635
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 635,
                        "start": 512,
                        "end": 637
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 768,
                        "start": 637,
                        "end": 641
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 641,
                        "end": 643
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
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 229,
                                                    "yieldKeyword": {
                                                        "kind": 8454253,
                                                        "flags": 646,
                                                        "start": 0,
                                                        "end": 651
                                                    },
                                                    "delegate": false,
                                                    "asteriskToken": null,
                                                    "expression": null,
                                                    "flags": 256,
                                                    "start": 646,
                                                    "end": 651
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 646,
                                            "end": 651
                                        },
                                        "flags": 256,
                                        "start": 645,
                                        "end": 652
                                    },
                                    "flags": 128,
                                    "start": 645,
                                    "end": 652
                                }
                            ],
                            "multiline": false,
                            "flags": 256,
                            "start": 645,
                            "end": 652
                        },
                        "flags": 256,
                        "start": 643,
                        "end": 653
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 2304,
                    "start": 627,
                    "end": 653
                },
                "flags": 256,
                "start": 625,
                "end": 654
            },
            "flags": 128,
            "start": 625,
            "end": 655
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 657,
                        "start": 0,
                        "end": 665
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 665,
                        "start": 512,
                        "end": 667
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 768,
                        "start": 667,
                        "end": 671
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 671,
                        "end": 673
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [
                                {
                                    "kind": 249,
                                    "block": {
                                        "kind": 124,
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 229,
                                                    "yieldKeyword": {
                                                        "kind": 8454253,
                                                        "flags": 676,
                                                        "start": 0,
                                                        "end": 681
                                                    },
                                                    "delegate": false,
                                                    "asteriskToken": null,
                                                    "expression": null,
                                                    "flags": 256,
                                                    "start": 676,
                                                    "end": 681
                                                },
                                                "flags": 128,
                                                "start": 676,
                                                "end": 681
                                            }
                                        ],
                                        "multiLine": false,
                                        "flags": 128,
                                        "start": 676,
                                        "end": 681
                                    },
                                    "flags": 128,
                                    "start": 675,
                                    "end": 682
                                }
                            ],
                            "multiline": false,
                            "flags": 256,
                            "start": 675,
                            "end": 682
                        },
                        "flags": 256,
                        "start": 673,
                        "end": 683
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 2304,
                    "start": 657,
                    "end": 683
                },
                "flags": 256,
                "start": 655,
                "end": 684
            },
            "flags": 128,
            "start": 655,
            "end": 685
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 687,
                        "start": 0,
                        "end": 695
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 695,
                        "start": 512,
                        "end": 697
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 768,
                        "start": 697,
                        "end": 701
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 701,
                        "end": 703
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
                                        "kind": 132,
                                        "expressions": [
                                            {
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 705,
                                                    "start": 0,
                                                    "end": 710
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": null,
                                                "flags": 256,
                                                "start": 705,
                                                "end": 710
                                            },
                                            {
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 711,
                                                    "start": 0,
                                                    "end": 717
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": null,
                                                "flags": 256,
                                                "start": 711,
                                                "end": 717
                                            }
                                        ],
                                        "flags": 256,
                                        "start": 705,
                                        "end": 717
                                    },
                                    "flags": 128,
                                    "start": 705,
                                    "end": 717
                                }
                            ],
                            "multiline": false,
                            "flags": 256,
                            "start": 705,
                            "end": 717
                        },
                        "flags": 256,
                        "start": 703,
                        "end": 718
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 2304,
                    "start": 687,
                    "end": 718
                },
                "flags": 256,
                "start": 685,
                "end": 719
            },
            "flags": 128,
            "start": 685,
            "end": 720
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 722,
                        "start": 0,
                        "end": 730
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 730,
                        "start": 512,
                        "end": 732
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 768,
                        "start": 732,
                        "end": 736
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 736,
                        "end": 738
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
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 740,
                                            "start": 0,
                                            "end": 745
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": null,
                                        "flags": 256,
                                        "start": 740,
                                        "end": 745
                                    },
                                    "flags": 128,
                                    "start": 740,
                                    "end": 746
                                },
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 746,
                                            "start": 0,
                                            "end": 752
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": null,
                                        "flags": 256,
                                        "start": 746,
                                        "end": 752
                                    },
                                    "flags": 128,
                                    "start": 746,
                                    "end": 752
                                }
                            ],
                            "multiline": false,
                            "flags": 256,
                            "start": 740,
                            "end": 752
                        },
                        "flags": 256,
                        "start": 738,
                        "end": 753
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 2304,
                    "start": 722,
                    "end": 753
                },
                "flags": 256,
                "start": 720,
                "end": 754
            },
            "flags": 128,
            "start": 720,
            "end": 755
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 757,
                        "start": 0,
                        "end": 765
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 765,
                        "start": 512,
                        "end": 767
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 768,
                        "start": 767,
                        "end": 771
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 771,
                        "end": 773
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
                                        "kind": 197,
                                        "shortCircuit": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 776,
                                                    "start": 0,
                                                    "end": 781
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": null,
                                                "flags": 256,
                                                "start": 776,
                                                "end": 781
                                            },
                                            "flags": 256,
                                            "start": 775,
                                            "end": 782
                                        },
                                        "questionToken": {
                                            "kind": 134217750,
                                            "flags": 782,
                                            "start": 0,
                                            "end": 784
                                        },
                                        "consequent": {
                                            "kind": 229,
                                            "yieldKeyword": {
                                                "kind": 8454253,
                                                "flags": 784,
                                                "start": 0,
                                                "end": 790
                                            },
                                            "delegate": false,
                                            "asteriskToken": null,
                                            "expression": null,
                                            "flags": 256,
                                            "start": 784,
                                            "end": 790
                                        },
                                        "colonToken": {
                                            "kind": 21,
                                            "flags": 790,
                                            "start": 0,
                                            "end": 792
                                        },
                                        "alternate": {
                                            "kind": 229,
                                            "yieldKeyword": {
                                                "kind": 8454253,
                                                "flags": 792,
                                                "start": 0,
                                                "end": 798
                                            },
                                            "delegate": false,
                                            "asteriskToken": null,
                                            "expression": null,
                                            "flags": 256,
                                            "start": 792,
                                            "end": 798
                                        },
                                        "flags": 256,
                                        "start": 775,
                                        "end": 798
                                    },
                                    "flags": 128,
                                    "start": 775,
                                    "end": 798
                                }
                            ],
                            "multiline": false,
                            "flags": 256,
                            "start": 775,
                            "end": 798
                        },
                        "flags": 256,
                        "start": 773,
                        "end": 799
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 2304,
                    "start": 757,
                    "end": 799
                },
                "flags": 256,
                "start": 755,
                "end": 800
            },
            "flags": 128,
            "start": 755,
            "end": 801
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 803,
                        "start": 0,
                        "end": 811
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 811,
                        "start": 512,
                        "end": 813
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 768,
                        "start": 813,
                        "end": 817
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 817,
                        "end": 819
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
                                        "kind": 197,
                                        "shortCircuit": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 822,
                                                    "start": 0,
                                                    "end": 827
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": null,
                                                "flags": 256,
                                                "start": 822,
                                                "end": 827
                                            },
                                            "flags": 256,
                                            "start": 821,
                                            "end": 828
                                        },
                                        "questionToken": {
                                            "kind": 134217750,
                                            "flags": 828,
                                            "start": 1,
                                            "end": 831
                                        },
                                        "consequent": {
                                            "kind": 229,
                                            "yieldKeyword": {
                                                "kind": 8454253,
                                                "flags": 831,
                                                "start": 0,
                                                "end": 837
                                            },
                                            "delegate": false,
                                            "asteriskToken": null,
                                            "expression": null,
                                            "flags": 256,
                                            "start": 831,
                                            "end": 837
                                        },
                                        "colonToken": {
                                            "kind": 21,
                                            "flags": 837,
                                            "start": 0,
                                            "end": 839
                                        },
                                        "alternate": {
                                            "kind": 229,
                                            "yieldKeyword": {
                                                "kind": 8454253,
                                                "flags": 839,
                                                "start": 0,
                                                "end": 845
                                            },
                                            "delegate": false,
                                            "asteriskToken": null,
                                            "expression": null,
                                            "flags": 256,
                                            "start": 839,
                                            "end": 845
                                        },
                                        "flags": 256,
                                        "start": 821,
                                        "end": 845
                                    },
                                    "flags": 128,
                                    "start": 821,
                                    "end": 845
                                }
                            ],
                            "multiline": false,
                            "flags": 256,
                            "start": 821,
                            "end": 845
                        },
                        "flags": 256,
                        "start": 819,
                        "end": 846
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 2304,
                    "start": 803,
                    "end": 846
                },
                "flags": 256,
                "start": 801,
                "end": 847
            },
            "flags": 128,
            "start": 801,
            "end": 848
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 926,
                        "start": 0,
                        "end": 934
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 934,
                        "start": 512,
                        "end": 936
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 768,
                        "start": 936,
                        "end": 940
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 940,
                        "end": 942
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
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 944,
                                            "start": 0,
                                            "end": 949
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": null,
                                        "flags": 256,
                                        "start": 944,
                                        "end": 949
                                    },
                                    "flags": 128,
                                    "start": 944,
                                    "end": 949
                                },
                                {
                                    "kind": 165,
                                    "forKeyword": {
                                        "kind": 37757017,
                                        "flags": 949,
                                        "start": 1,
                                        "end": 953
                                    },
                                    "initializer": null,
                                    "condition": null,
                                    "incrementor": null,
                                    "statement": {
                                        "kind": 249,
                                        "block": {
                                            "kind": 124,
                                            "statements": [],
                                            "multiLine": false,
                                            "flags": 128,
                                            "start": 960,
                                            "end": 960
                                        },
                                        "flags": 128,
                                        "start": 958,
                                        "end": 961
                                    },
                                    "flags": 128,
                                    "start": 949,
                                    "end": 961
                                }
                            ],
                            "multiline": false,
                            "flags": 256,
                            "start": 944,
                            "end": 961
                        },
                        "flags": 256,
                        "start": 942,
                        "end": 962
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 2304,
                    "start": 926,
                    "end": 962
                },
                "flags": 256,
                "start": 848,
                "end": 963
            },
            "flags": 128,
            "start": 848,
            "end": 964
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 967,
                        "start": 0,
                        "end": 975
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 975,
                        "start": 512,
                        "end": 977
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 768,
                        "start": 977,
                        "end": 981
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 981,
                        "end": 983
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
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 985,
                                            "end": 986
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 512,
                                            "start": 986,
                                            "end": 988
                                        },
                                        "right": {
                                            "kind": 189,
                                            "decorators": null,
                                            "classKeyword": {
                                                "kind": 37822544,
                                                "flags": 988,
                                                "start": 0,
                                                "end": 994
                                            },
                                            "name": null,
                                            "typeParameters": null,
                                            "classHeritage": {
                                                "kind": 279,
                                                "extendsKeyword": {
                                                    "kind": 4194391,
                                                    "flags": 994,
                                                    "start": 0,
                                                    "end": 1002
                                                },
                                                "expression": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 229,
                                                        "yieldKeyword": {
                                                            "kind": 8454253,
                                                            "flags": 1004,
                                                            "start": 0,
                                                            "end": 1009
                                                        },
                                                        "delegate": false,
                                                        "asteriskToken": null,
                                                        "expression": null,
                                                        "flags": 256,
                                                        "start": 1004,
                                                        "end": 1009
                                                    },
                                                    "flags": 256,
                                                    "start": 1002,
                                                    "end": 1010
                                                },
                                                "typeParameter": null,
                                                "flags": 128,
                                                "start": 1002,
                                                "end": 1010
                                            },
                                            "members": {
                                                "kind": 277,
                                                "elements": [],
                                                "flags": 256,
                                                "start": 1012,
                                                "end": 1013
                                            },
                                            "flags": 256,
                                            "start": 988,
                                            "end": 1013
                                        },
                                        "flags": 256,
                                        "start": 985,
                                        "end": 1013
                                    },
                                    "flags": 128,
                                    "start": 985,
                                    "end": 1013
                                }
                            ],
                            "multiline": false,
                            "flags": 256,
                            "start": 985,
                            "end": 1013
                        },
                        "flags": 256,
                        "start": 983,
                        "end": 1014
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 2304,
                    "start": 967,
                    "end": 1014
                },
                "flags": 256,
                "start": 964,
                "end": 1015
            },
            "flags": 128,
            "start": 964,
            "end": 1016
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 1018,
                        "start": 0,
                        "end": 1026
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 1026,
                        "start": 512,
                        "end": 1028
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 768,
                        "start": 1028,
                        "end": 1032
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 1032,
                        "end": 1034
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
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 1036,
                                            "end": 1037
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 512,
                                            "start": 1037,
                                            "end": 1039
                                        },
                                        "right": {
                                            "kind": 189,
                                            "decorators": null,
                                            "classKeyword": {
                                                "kind": 37822544,
                                                "flags": 1039,
                                                "start": 0,
                                                "end": 1045
                                            },
                                            "name": null,
                                            "typeParameters": null,
                                            "classHeritage": {
                                                "kind": 279,
                                                "extendsKeyword": {
                                                    "kind": 4194391,
                                                    "flags": 1045,
                                                    "start": 0,
                                                    "end": 1053
                                                },
                                                "expression": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "f",
                                                        "rawText": "f",
                                                        "flags": 768,
                                                        "start": 1053,
                                                        "end": 1055
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 229,
                                                                "yieldKeyword": {
                                                                    "kind": 8454253,
                                                                    "flags": 1056,
                                                                    "start": 0,
                                                                    "end": 1061
                                                                },
                                                                "delegate": false,
                                                                "asteriskToken": null,
                                                                "expression": null,
                                                                "flags": 256,
                                                                "start": 1056,
                                                                "end": 1061
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 256,
                                                        "start": 1056,
                                                        "end": 1061
                                                    },
                                                    "flags": 256,
                                                    "start": 1053,
                                                    "end": 1062
                                                },
                                                "typeParameter": null,
                                                "flags": 128,
                                                "start": 1053,
                                                "end": 1062
                                            },
                                            "members": {
                                                "kind": 277,
                                                "elements": [],
                                                "flags": 256,
                                                "start": 1064,
                                                "end": 1065
                                            },
                                            "flags": 256,
                                            "start": 1039,
                                            "end": 1065
                                        },
                                        "flags": 256,
                                        "start": 1036,
                                        "end": 1065
                                    },
                                    "flags": 128,
                                    "start": 1036,
                                    "end": 1065
                                }
                            ],
                            "multiline": false,
                            "flags": 256,
                            "start": 1036,
                            "end": 1065
                        },
                        "flags": 256,
                        "start": 1034,
                        "end": 1066
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 2304,
                    "start": 1018,
                    "end": 1066
                },
                "flags": 256,
                "start": 1016,
                "end": 1067
            },
            "flags": 128,
            "start": 1016,
            "end": 1068
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 1070,
                        "start": 0,
                        "end": 1078
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 1078,
                        "start": 512,
                        "end": 1080
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 768,
                        "start": 1080,
                        "end": 1084
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 1084,
                        "end": 1086
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
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 1088,
                                            "end": 1089
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 512,
                                            "start": 1089,
                                            "end": 1091
                                        },
                                        "right": {
                                            "kind": 189,
                                            "decorators": null,
                                            "classKeyword": {
                                                "kind": 37822544,
                                                "flags": 1091,
                                                "start": 0,
                                                "end": 1097
                                            },
                                            "name": null,
                                            "typeParameters": null,
                                            "classHeritage": {
                                                "kind": 279,
                                                "extendsKeyword": {
                                                    "kind": 4194391,
                                                    "flags": 1097,
                                                    "start": 0,
                                                    "end": 1105
                                                },
                                                "expression": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 132,
                                                        "expressions": [
                                                            {
                                                                "kind": 269,
                                                                "text": null,
                                                                "flags": 768,
                                                                "start": 1107,
                                                                "end": 1111
                                                            },
                                                            {
                                                                "kind": 229,
                                                                "yieldKeyword": {
                                                                    "kind": 8454253,
                                                                    "flags": 1112,
                                                                    "start": 0,
                                                                    "end": 1118
                                                                },
                                                                "delegate": false,
                                                                "asteriskToken": null,
                                                                "expression": null,
                                                                "flags": 256,
                                                                "start": 1112,
                                                                "end": 1118
                                                            }
                                                        ],
                                                        "flags": 256,
                                                        "start": 1105,
                                                        "end": 1118
                                                    },
                                                    "flags": 256,
                                                    "start": 1105,
                                                    "end": 1119
                                                },
                                                "typeParameter": null,
                                                "flags": 128,
                                                "start": 1105,
                                                "end": 1119
                                            },
                                            "members": {
                                                "kind": 277,
                                                "elements": [],
                                                "flags": 256,
                                                "start": 1121,
                                                "end": 1123
                                            },
                                            "flags": 256,
                                            "start": 1091,
                                            "end": 1123
                                        },
                                        "flags": 256,
                                        "start": 1088,
                                        "end": 1123
                                    },
                                    "flags": 128,
                                    "start": 1088,
                                    "end": 1123
                                }
                            ],
                            "multiline": false,
                            "flags": 256,
                            "start": 1088,
                            "end": 1123
                        },
                        "flags": 256,
                        "start": 1086,
                        "end": 1124
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 2304,
                    "start": 1070,
                    "end": 1124
                },
                "flags": 256,
                "start": 1068,
                "end": 1125
            },
            "flags": 128,
            "start": 1068,
            "end": 1126
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 1128,
                        "start": 0,
                        "end": 1136
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 1136,
                        "start": 512,
                        "end": 1138
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 768,
                        "start": 1138,
                        "end": 1142
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 1142,
                        "end": 1144
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
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 1146,
                                            "end": 1147
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 512,
                                            "start": 1147,
                                            "end": 1149
                                        },
                                        "right": {
                                            "kind": 189,
                                            "decorators": null,
                                            "classKeyword": {
                                                "kind": 37822544,
                                                "flags": 1149,
                                                "start": 0,
                                                "end": 1155
                                            },
                                            "name": null,
                                            "typeParameters": null,
                                            "classHeritage": {
                                                "kind": 279,
                                                "extendsKeyword": {
                                                    "kind": 4194391,
                                                    "flags": 1155,
                                                    "start": 0,
                                                    "end": 1163
                                                },
                                                "expression": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 197,
                                                        "shortCircuit": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 768,
                                                            "start": 1165,
                                                            "end": 1166
                                                        },
                                                        "questionToken": {
                                                            "kind": 134217750,
                                                            "flags": 1166,
                                                            "start": 0,
                                                            "end": 1168
                                                        },
                                                        "consequent": {
                                                            "kind": 269,
                                                            "text": null,
                                                            "flags": 768,
                                                            "start": 1168,
                                                            "end": 1173
                                                        },
                                                        "colonToken": {
                                                            "kind": 21,
                                                            "flags": 1173,
                                                            "start": 0,
                                                            "end": 1175
                                                        },
                                                        "alternate": {
                                                            "kind": 229,
                                                            "yieldKeyword": {
                                                                "kind": 8454253,
                                                                "flags": 1175,
                                                                "start": 0,
                                                                "end": 1181
                                                            },
                                                            "delegate": false,
                                                            "asteriskToken": null,
                                                            "expression": null,
                                                            "flags": 256,
                                                            "start": 1175,
                                                            "end": 1181
                                                        },
                                                        "flags": 256,
                                                        "start": 1163,
                                                        "end": 1181
                                                    },
                                                    "flags": 256,
                                                    "start": 1163,
                                                    "end": 1182
                                                },
                                                "typeParameter": null,
                                                "flags": 128,
                                                "start": 1163,
                                                "end": 1182
                                            },
                                            "members": {
                                                "kind": 277,
                                                "elements": [],
                                                "flags": 256,
                                                "start": 1184,
                                                "end": 1186
                                            },
                                            "flags": 256,
                                            "start": 1149,
                                            "end": 1186
                                        },
                                        "flags": 256,
                                        "start": 1146,
                                        "end": 1186
                                    },
                                    "flags": 128,
                                    "start": 1146,
                                    "end": 1186
                                }
                            ],
                            "multiline": false,
                            "flags": 256,
                            "start": 1146,
                            "end": 1186
                        },
                        "flags": 256,
                        "start": 1144,
                        "end": 1187
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 2304,
                    "start": 1128,
                    "end": 1187
                },
                "flags": 256,
                "start": 1126,
                "end": 1188
            },
            "flags": 128,
            "start": 1126,
            "end": 1189
        }
    ],
    "isModule": false,
    "text": "(function * gen() {yield 2;})\n(function * gen() {yield * 2;});\n\n(function * gen() {yield *\n 2;});\n\n(function * gen() {yield yield 1;});\n(function * gen() {yield * yield * 1;});\n(function * gen() {yield 3 + (yield 4);});\n(function * gen() {yield * 3 + (yield * 4);});\n\n(function * gen() {yield * 1; return});\n(function * gen() {yield 1; return 37});\n(function * gen() {yield * 1; return 37});\n(function * gen() {yield 1; return 37; yield 'dead';});\n(function * gen() {yield * 1; return 37; yield * 'dead';});\n\n(function * gen() {yield;});\n(function * gen() {yield});\n(function * gen() {yield\n});\n\n(function * gen() {(yield)});\n(function * gen() {[yield]});\n(function * gen() {{yield}});\n(function * gen() {yield, yield});\n(function * gen() {yield; yield});\n(function * gen() {(yield) ? yield : yield});\n(function * gen() {(yield)\n ? yield : yield});\n    // If there is a newline before the next token, we don't look for RHS.\n\n(function * gen() {yield\nfor (;;) {}});\n\n(function * gen() {x = class extends (yield) {}});\n(function * gen() {x = class extends f(yield) {}});\n(function * gen() {x = class extends (null, yield) { }});\n(function * gen() {x = class extends (a ? null : yield) { }});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 1189
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

