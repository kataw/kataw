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
                            "flags": 0,
                            "start": 1,
                            "end": 9
                        },
                        "generatorToken": {
                            "kind": 67143222,
                            "flags": 64,
                            "start": 9,
                            "end": 11
                        },
                        "name": {
                            "kind": 134299649,
                            "text": "gen",
                            "rawText": "gen",
                            "flags": 96,
                            "start": 11,
                            "end": 15
                        },
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 32,
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
                                                "flags": 0,
                                                "start": 19,
                                                "end": 24
                                            },
                                            "delegate": false,
                                            "asteriskToken": null,
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 2,
                                                "rawText": "2",
                                                "flags": 96,
                                                "start": 24,
                                                "end": 26
                                            },
                                            "flags": 32,
                                            "start": 19,
                                            "end": 26
                                        },
                                        "flags": 16,
                                        "start": 19,
                                        "end": 27
                                    }
                                ],
                                "multiline": false,
                                "flags": 32,
                                "start": 19,
                                "end": 27
                            },
                            "flags": 32,
                            "start": 17,
                            "end": 28
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 288,
                        "start": 1,
                        "end": 28
                    },
                    "flags": 32,
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
                                "flags": 0,
                                "start": 31,
                                "end": 39
                            },
                            "generatorToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 39,
                                "end": 41
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "gen",
                                "rawText": "gen",
                                "flags": 96,
                                "start": 41,
                                "end": 45
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
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
                                                    "flags": 0,
                                                    "start": 49,
                                                    "end": 54
                                                },
                                                "delegate": true,
                                                "asteriskToken": {
                                                    "kind": 67143222,
                                                    "flags": 64,
                                                    "start": 54,
                                                    "end": 56
                                                },
                                                "expression": {
                                                    "kind": 201392130,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 96,
                                                    "start": 56,
                                                    "end": 58
                                                },
                                                "flags": 32,
                                                "start": 49,
                                                "end": 58
                                            },
                                            "flags": 16,
                                            "start": 49,
                                            "end": 59
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 32,
                                    "start": 49,
                                    "end": 59
                                },
                                "flags": 32,
                                "start": 47,
                                "end": 60
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 288,
                            "start": 31,
                            "end": 60
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 31,
                    "end": 60
                },
                "flags": 32,
                "start": 0,
                "end": 61
            },
            "flags": 16,
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
                        "flags": 0,
                        "start": 65,
                        "end": 73
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 73,
                        "end": 75
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 96,
                        "start": 75,
                        "end": 79
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
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
                                            "flags": 0,
                                            "start": 83,
                                            "end": 88
                                        },
                                        "delegate": true,
                                        "asteriskToken": {
                                            "kind": 67143222,
                                            "flags": 64,
                                            "start": 88,
                                            "end": 90
                                        },
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 97,
                                            "start": 90,
                                            "end": 93
                                        },
                                        "flags": 32,
                                        "start": 83,
                                        "end": 93
                                    },
                                    "flags": 16,
                                    "start": 83,
                                    "end": 94
                                }
                            ],
                            "multiline": false,
                            "flags": 32,
                            "start": 83,
                            "end": 94
                        },
                        "flags": 32,
                        "start": 81,
                        "end": 95
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 288,
                    "start": 65,
                    "end": 95
                },
                "flags": 32,
                "start": 62,
                "end": 96
            },
            "flags": 16,
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
                        "flags": 0,
                        "start": 100,
                        "end": 108
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 108,
                        "end": 110
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 96,
                        "start": 110,
                        "end": 114
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
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
                                            "flags": 0,
                                            "start": 118,
                                            "end": 123
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": {
                                            "kind": 229,
                                            "yieldKeyword": {
                                                "kind": 8454253,
                                                "flags": 0,
                                                "start": 123,
                                                "end": 129
                                            },
                                            "delegate": false,
                                            "asteriskToken": null,
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "start": 129,
                                                "end": 131
                                            },
                                            "flags": 32,
                                            "start": 123,
                                            "end": 131
                                        },
                                        "flags": 32,
                                        "start": 118,
                                        "end": 131
                                    },
                                    "flags": 16,
                                    "start": 118,
                                    "end": 132
                                }
                            ],
                            "multiline": false,
                            "flags": 32,
                            "start": 118,
                            "end": 132
                        },
                        "flags": 32,
                        "start": 116,
                        "end": 133
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 288,
                    "start": 100,
                    "end": 133
                },
                "flags": 32,
                "start": 97,
                "end": 134
            },
            "flags": 16,
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
                        "flags": 0,
                        "start": 137,
                        "end": 145
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 145,
                        "end": 147
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 96,
                        "start": 147,
                        "end": 151
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
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
                                            "flags": 0,
                                            "start": 155,
                                            "end": 160
                                        },
                                        "delegate": true,
                                        "asteriskToken": {
                                            "kind": 67143222,
                                            "flags": 64,
                                            "start": 160,
                                            "end": 162
                                        },
                                        "expression": {
                                            "kind": 229,
                                            "yieldKeyword": {
                                                "kind": 8454253,
                                                "flags": 0,
                                                "start": 162,
                                                "end": 168
                                            },
                                            "delegate": true,
                                            "asteriskToken": {
                                                "kind": 67143222,
                                                "flags": 64,
                                                "start": 168,
                                                "end": 170
                                            },
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "start": 170,
                                                "end": 172
                                            },
                                            "flags": 32,
                                            "start": 162,
                                            "end": 172
                                        },
                                        "flags": 32,
                                        "start": 155,
                                        "end": 172
                                    },
                                    "flags": 16,
                                    "start": 155,
                                    "end": 173
                                }
                            ],
                            "multiline": false,
                            "flags": 32,
                            "start": 155,
                            "end": 173
                        },
                        "flags": 32,
                        "start": 153,
                        "end": 174
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 288,
                    "start": 137,
                    "end": 174
                },
                "flags": 32,
                "start": 135,
                "end": 175
            },
            "flags": 16,
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
                        "flags": 0,
                        "start": 178,
                        "end": 186
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 186,
                        "end": 188
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 96,
                        "start": 188,
                        "end": 192
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
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
                                            "flags": 0,
                                            "start": 196,
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
                                                "flags": 96,
                                                "start": 201,
                                                "end": 203
                                            },
                                            "operatorToken": {
                                                "kind": 34098,
                                                "flags": 64,
                                                "start": 203,
                                                "end": 205
                                            },
                                            "right": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 229,
                                                    "yieldKeyword": {
                                                        "kind": 8454253,
                                                        "flags": 0,
                                                        "start": 207,
                                                        "end": 212
                                                    },
                                                    "delegate": false,
                                                    "asteriskToken": null,
                                                    "expression": {
                                                        "kind": 201392130,
                                                        "text": 4,
                                                        "rawText": "4",
                                                        "flags": 96,
                                                        "start": 212,
                                                        "end": 214
                                                    },
                                                    "flags": 32,
                                                    "start": 207,
                                                    "end": 214
                                                },
                                                "flags": 32,
                                                "start": 205,
                                                "end": 215
                                            },
                                            "flags": 32,
                                            "start": 201,
                                            "end": 215
                                        },
                                        "flags": 32,
                                        "start": 196,
                                        "end": 215
                                    },
                                    "flags": 16,
                                    "start": 196,
                                    "end": 216
                                }
                            ],
                            "multiline": false,
                            "flags": 32,
                            "start": 196,
                            "end": 216
                        },
                        "flags": 32,
                        "start": 194,
                        "end": 217
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 288,
                    "start": 178,
                    "end": 217
                },
                "flags": 32,
                "start": 176,
                "end": 218
            },
            "flags": 16,
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
                        "flags": 0,
                        "start": 221,
                        "end": 229
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 229,
                        "end": 231
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 96,
                        "start": 231,
                        "end": 235
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
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
                                            "flags": 0,
                                            "start": 239,
                                            "end": 244
                                        },
                                        "delegate": true,
                                        "asteriskToken": {
                                            "kind": 67143222,
                                            "flags": 64,
                                            "start": 244,
                                            "end": 246
                                        },
                                        "expression": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 201392130,
                                                "text": 3,
                                                "rawText": "3",
                                                "flags": 96,
                                                "start": 246,
                                                "end": 248
                                            },
                                            "operatorToken": {
                                                "kind": 34098,
                                                "flags": 64,
                                                "start": 248,
                                                "end": 250
                                            },
                                            "right": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 229,
                                                    "yieldKeyword": {
                                                        "kind": 8454253,
                                                        "flags": 0,
                                                        "start": 252,
                                                        "end": 257
                                                    },
                                                    "delegate": true,
                                                    "asteriskToken": {
                                                        "kind": 67143222,
                                                        "flags": 64,
                                                        "start": 257,
                                                        "end": 259
                                                    },
                                                    "expression": {
                                                        "kind": 201392130,
                                                        "text": 4,
                                                        "rawText": "4",
                                                        "flags": 96,
                                                        "start": 259,
                                                        "end": 261
                                                    },
                                                    "flags": 32,
                                                    "start": 252,
                                                    "end": 261
                                                },
                                                "flags": 32,
                                                "start": 250,
                                                "end": 262
                                            },
                                            "flags": 32,
                                            "start": 246,
                                            "end": 262
                                        },
                                        "flags": 32,
                                        "start": 239,
                                        "end": 262
                                    },
                                    "flags": 16,
                                    "start": 239,
                                    "end": 263
                                }
                            ],
                            "multiline": false,
                            "flags": 32,
                            "start": 239,
                            "end": 263
                        },
                        "flags": 32,
                        "start": 237,
                        "end": 264
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 288,
                    "start": 221,
                    "end": 264
                },
                "flags": 32,
                "start": 219,
                "end": 265
            },
            "flags": 16,
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
                        "flags": 0,
                        "start": 269,
                        "end": 277
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 277,
                        "end": 279
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 96,
                        "start": 279,
                        "end": 283
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
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
                                            "flags": 0,
                                            "start": 287,
                                            "end": 292
                                        },
                                        "delegate": true,
                                        "asteriskToken": {
                                            "kind": 67143222,
                                            "flags": 64,
                                            "start": 292,
                                            "end": 294
                                        },
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 294,
                                            "end": 296
                                        },
                                        "flags": 32,
                                        "start": 287,
                                        "end": 296
                                    },
                                    "flags": 16,
                                    "start": 287,
                                    "end": 297
                                },
                                {
                                    "kind": 161,
                                    "returnKeyword": {
                                        "kind": 37757022,
                                        "flags": 0,
                                        "start": 297,
                                        "end": 304
                                    },
                                    "expression": null,
                                    "flags": 16,
                                    "start": 0,
                                    "end": 297
                                }
                            ],
                            "multiline": false,
                            "flags": 32,
                            "start": 287,
                            "end": 304
                        },
                        "flags": 32,
                        "start": 285,
                        "end": 305
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 288,
                    "start": 269,
                    "end": 305
                },
                "flags": 32,
                "start": 266,
                "end": 306
            },
            "flags": 16,
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
                        "flags": 0,
                        "start": 309,
                        "end": 317
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 317,
                        "end": 319
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 96,
                        "start": 319,
                        "end": 323
                    },
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
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 0,
                                            "start": 327,
                                            "end": 332
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 332,
                                            "end": 334
                                        },
                                        "flags": 32,
                                        "start": 327,
                                        "end": 334
                                    },
                                    "flags": 16,
                                    "start": 327,
                                    "end": 335
                                },
                                {
                                    "kind": 161,
                                    "returnKeyword": {
                                        "kind": 37757022,
                                        "flags": 0,
                                        "start": 335,
                                        "end": 342
                                    },
                                    "expression": {
                                        "kind": 201392130,
                                        "text": 37,
                                        "rawText": "37",
                                        "flags": 96,
                                        "start": 342,
                                        "end": 345
                                    },
                                    "flags": 16,
                                    "start": 0,
                                    "end": 335
                                }
                            ],
                            "multiline": false,
                            "flags": 32,
                            "start": 327,
                            "end": 345
                        },
                        "flags": 32,
                        "start": 325,
                        "end": 346
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 288,
                    "start": 309,
                    "end": 346
                },
                "flags": 32,
                "start": 307,
                "end": 347
            },
            "flags": 16,
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
                        "flags": 0,
                        "start": 350,
                        "end": 358
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 358,
                        "end": 360
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 96,
                        "start": 360,
                        "end": 364
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
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
                                            "flags": 0,
                                            "start": 368,
                                            "end": 373
                                        },
                                        "delegate": true,
                                        "asteriskToken": {
                                            "kind": 67143222,
                                            "flags": 64,
                                            "start": 373,
                                            "end": 375
                                        },
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 375,
                                            "end": 377
                                        },
                                        "flags": 32,
                                        "start": 368,
                                        "end": 377
                                    },
                                    "flags": 16,
                                    "start": 368,
                                    "end": 378
                                },
                                {
                                    "kind": 161,
                                    "returnKeyword": {
                                        "kind": 37757022,
                                        "flags": 0,
                                        "start": 378,
                                        "end": 385
                                    },
                                    "expression": {
                                        "kind": 201392130,
                                        "text": 37,
                                        "rawText": "37",
                                        "flags": 96,
                                        "start": 385,
                                        "end": 388
                                    },
                                    "flags": 16,
                                    "start": 0,
                                    "end": 378
                                }
                            ],
                            "multiline": false,
                            "flags": 32,
                            "start": 368,
                            "end": 388
                        },
                        "flags": 32,
                        "start": 366,
                        "end": 389
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 288,
                    "start": 350,
                    "end": 389
                },
                "flags": 32,
                "start": 348,
                "end": 390
            },
            "flags": 16,
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
                        "flags": 0,
                        "start": 393,
                        "end": 401
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 401,
                        "end": 403
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 96,
                        "start": 403,
                        "end": 407
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
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
                                            "flags": 0,
                                            "start": 411,
                                            "end": 416
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 416,
                                            "end": 418
                                        },
                                        "flags": 32,
                                        "start": 411,
                                        "end": 418
                                    },
                                    "flags": 16,
                                    "start": 411,
                                    "end": 419
                                },
                                {
                                    "kind": 161,
                                    "returnKeyword": {
                                        "kind": 37757022,
                                        "flags": 0,
                                        "start": 419,
                                        "end": 426
                                    },
                                    "expression": {
                                        "kind": 201392130,
                                        "text": 37,
                                        "rawText": "37",
                                        "flags": 96,
                                        "start": 426,
                                        "end": 429
                                    },
                                    "flags": 16,
                                    "start": 0,
                                    "end": 419
                                },
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 0,
                                            "start": 430,
                                            "end": 436
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "dead",
                                            "rawText": "dead",
                                            "flags": 4194400,
                                            "start": 436,
                                            "end": 443
                                        },
                                        "flags": 32,
                                        "start": 430,
                                        "end": 443
                                    },
                                    "flags": 16,
                                    "start": 430,
                                    "end": 444
                                }
                            ],
                            "multiline": false,
                            "flags": 32,
                            "start": 411,
                            "end": 444
                        },
                        "flags": 32,
                        "start": 409,
                        "end": 445
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 288,
                    "start": 393,
                    "end": 445
                },
                "flags": 32,
                "start": 391,
                "end": 446
            },
            "flags": 16,
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
                        "flags": 0,
                        "start": 449,
                        "end": 457
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 457,
                        "end": 459
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 96,
                        "start": 459,
                        "end": 463
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
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
                                            "flags": 0,
                                            "start": 467,
                                            "end": 472
                                        },
                                        "delegate": true,
                                        "asteriskToken": {
                                            "kind": 67143222,
                                            "flags": 64,
                                            "start": 472,
                                            "end": 474
                                        },
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 474,
                                            "end": 476
                                        },
                                        "flags": 32,
                                        "start": 467,
                                        "end": 476
                                    },
                                    "flags": 16,
                                    "start": 467,
                                    "end": 477
                                },
                                {
                                    "kind": 161,
                                    "returnKeyword": {
                                        "kind": 37757022,
                                        "flags": 0,
                                        "start": 477,
                                        "end": 484
                                    },
                                    "expression": {
                                        "kind": 201392130,
                                        "text": 37,
                                        "rawText": "37",
                                        "flags": 96,
                                        "start": 484,
                                        "end": 487
                                    },
                                    "flags": 16,
                                    "start": 0,
                                    "end": 477
                                },
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 0,
                                            "start": 488,
                                            "end": 494
                                        },
                                        "delegate": true,
                                        "asteriskToken": {
                                            "kind": 67143222,
                                            "flags": 64,
                                            "start": 494,
                                            "end": 496
                                        },
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "dead",
                                            "rawText": "dead",
                                            "flags": 4194400,
                                            "start": 496,
                                            "end": 503
                                        },
                                        "flags": 32,
                                        "start": 488,
                                        "end": 503
                                    },
                                    "flags": 16,
                                    "start": 488,
                                    "end": 504
                                }
                            ],
                            "multiline": false,
                            "flags": 32,
                            "start": 467,
                            "end": 504
                        },
                        "flags": 32,
                        "start": 465,
                        "end": 505
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 288,
                    "start": 449,
                    "end": 505
                },
                "flags": 32,
                "start": 447,
                "end": 506
            },
            "flags": 16,
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
                        "flags": 0,
                        "start": 510,
                        "end": 518
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 518,
                        "end": 520
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 96,
                        "start": 520,
                        "end": 524
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
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
                                            "flags": 0,
                                            "start": 528,
                                            "end": 533
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": null,
                                        "flags": 32,
                                        "start": 528,
                                        "end": 533
                                    },
                                    "flags": 16,
                                    "start": 528,
                                    "end": 534
                                }
                            ],
                            "multiline": false,
                            "flags": 32,
                            "start": 528,
                            "end": 534
                        },
                        "flags": 32,
                        "start": 526,
                        "end": 535
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 288,
                    "start": 510,
                    "end": 535
                },
                "flags": 32,
                "start": 507,
                "end": 536
            },
            "flags": 16,
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
                        "flags": 0,
                        "start": 539,
                        "end": 547
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 547,
                        "end": 549
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 96,
                        "start": 549,
                        "end": 553
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
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
                                            "flags": 0,
                                            "start": 557,
                                            "end": 562
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": null,
                                        "flags": 32,
                                        "start": 557,
                                        "end": 562
                                    },
                                    "flags": 16,
                                    "start": 557,
                                    "end": 562
                                }
                            ],
                            "multiline": false,
                            "flags": 32,
                            "start": 557,
                            "end": 562
                        },
                        "flags": 32,
                        "start": 555,
                        "end": 563
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 288,
                    "start": 539,
                    "end": 563
                },
                "flags": 32,
                "start": 537,
                "end": 564
            },
            "flags": 16,
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
                        "flags": 0,
                        "start": 567,
                        "end": 575
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 575,
                        "end": 577
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 96,
                        "start": 577,
                        "end": 581
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
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
                                            "flags": 0,
                                            "start": 585,
                                            "end": 590
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": null,
                                        "flags": 32,
                                        "start": 585,
                                        "end": 590
                                    },
                                    "flags": 16,
                                    "start": 585,
                                    "end": 590
                                }
                            ],
                            "multiline": false,
                            "flags": 32,
                            "start": 585,
                            "end": 590
                        },
                        "flags": 32,
                        "start": 583,
                        "end": 592
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 288,
                    "start": 567,
                    "end": 592
                },
                "flags": 32,
                "start": 565,
                "end": 593
            },
            "flags": 16,
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
                        "flags": 0,
                        "start": 597,
                        "end": 605
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 605,
                        "end": 607
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 96,
                        "start": 607,
                        "end": 611
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
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
                                                "flags": 0,
                                                "start": 616,
                                                "end": 621
                                            },
                                            "delegate": false,
                                            "asteriskToken": null,
                                            "expression": null,
                                            "flags": 32,
                                            "start": 616,
                                            "end": 621
                                        },
                                        "flags": 32,
                                        "start": 615,
                                        "end": 622
                                    },
                                    "flags": 16,
                                    "start": 615,
                                    "end": 622
                                }
                            ],
                            "multiline": false,
                            "flags": 32,
                            "start": 615,
                            "end": 622
                        },
                        "flags": 32,
                        "start": 613,
                        "end": 623
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 288,
                    "start": 597,
                    "end": 623
                },
                "flags": 32,
                "start": 594,
                "end": 624
            },
            "flags": 16,
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
                        "flags": 0,
                        "start": 627,
                        "end": 635
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 635,
                        "end": 637
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 96,
                        "start": 637,
                        "end": 641
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
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
                                                        "flags": 0,
                                                        "start": 646,
                                                        "end": 651
                                                    },
                                                    "delegate": false,
                                                    "asteriskToken": null,
                                                    "expression": null,
                                                    "flags": 32,
                                                    "start": 646,
                                                    "end": 651
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 646,
                                            "end": 651
                                        },
                                        "flags": 32,
                                        "start": 645,
                                        "end": 652
                                    },
                                    "flags": 16,
                                    "start": 645,
                                    "end": 652
                                }
                            ],
                            "multiline": false,
                            "flags": 32,
                            "start": 645,
                            "end": 652
                        },
                        "flags": 32,
                        "start": 643,
                        "end": 653
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 288,
                    "start": 627,
                    "end": 653
                },
                "flags": 32,
                "start": 625,
                "end": 654
            },
            "flags": 16,
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
                        "flags": 0,
                        "start": 657,
                        "end": 665
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 665,
                        "end": 667
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 96,
                        "start": 667,
                        "end": 671
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
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
                                                        "flags": 0,
                                                        "start": 676,
                                                        "end": 681
                                                    },
                                                    "delegate": false,
                                                    "asteriskToken": null,
                                                    "expression": null,
                                                    "flags": 32,
                                                    "start": 676,
                                                    "end": 681
                                                },
                                                "flags": 16,
                                                "start": 676,
                                                "end": 681
                                            }
                                        ],
                                        "multiLine": false,
                                        "flags": 16,
                                        "start": 676,
                                        "end": 681
                                    },
                                    "flags": 16,
                                    "start": 675,
                                    "end": 682
                                }
                            ],
                            "multiline": false,
                            "flags": 32,
                            "start": 675,
                            "end": 682
                        },
                        "flags": 32,
                        "start": 673,
                        "end": 683
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 288,
                    "start": 657,
                    "end": 683
                },
                "flags": 32,
                "start": 655,
                "end": 684
            },
            "flags": 16,
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
                        "flags": 0,
                        "start": 687,
                        "end": 695
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 695,
                        "end": 697
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 96,
                        "start": 697,
                        "end": 701
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
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
                                                    "flags": 0,
                                                    "start": 705,
                                                    "end": 710
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": null,
                                                "flags": 32,
                                                "start": 705,
                                                "end": 710
                                            },
                                            {
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 0,
                                                    "start": 711,
                                                    "end": 717
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": null,
                                                "flags": 32,
                                                "start": 711,
                                                "end": 717
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 705,
                                        "end": 717
                                    },
                                    "flags": 16,
                                    "start": 705,
                                    "end": 717
                                }
                            ],
                            "multiline": false,
                            "flags": 32,
                            "start": 705,
                            "end": 717
                        },
                        "flags": 32,
                        "start": 703,
                        "end": 718
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 288,
                    "start": 687,
                    "end": 718
                },
                "flags": 32,
                "start": 685,
                "end": 719
            },
            "flags": 16,
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
                        "flags": 0,
                        "start": 722,
                        "end": 730
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 730,
                        "end": 732
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 96,
                        "start": 732,
                        "end": 736
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
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
                                            "flags": 0,
                                            "start": 740,
                                            "end": 745
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": null,
                                        "flags": 32,
                                        "start": 740,
                                        "end": 745
                                    },
                                    "flags": 16,
                                    "start": 740,
                                    "end": 746
                                },
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 0,
                                            "start": 746,
                                            "end": 752
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": null,
                                        "flags": 32,
                                        "start": 746,
                                        "end": 752
                                    },
                                    "flags": 16,
                                    "start": 746,
                                    "end": 752
                                }
                            ],
                            "multiline": false,
                            "flags": 32,
                            "start": 740,
                            "end": 752
                        },
                        "flags": 32,
                        "start": 738,
                        "end": 753
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 288,
                    "start": 722,
                    "end": 753
                },
                "flags": 32,
                "start": 720,
                "end": 754
            },
            "flags": 16,
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
                        "flags": 0,
                        "start": 757,
                        "end": 765
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 765,
                        "end": 767
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 96,
                        "start": 767,
                        "end": 771
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
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
                                                    "flags": 0,
                                                    "start": 776,
                                                    "end": 781
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": null,
                                                "flags": 32,
                                                "start": 776,
                                                "end": 781
                                            },
                                            "flags": 32,
                                            "start": 775,
                                            "end": 782
                                        },
                                        "questionToken": {
                                            "kind": 134217750,
                                            "flags": 0,
                                            "start": 782,
                                            "end": 784
                                        },
                                        "consequent": {
                                            "kind": 229,
                                            "yieldKeyword": {
                                                "kind": 8454253,
                                                "flags": 0,
                                                "start": 784,
                                                "end": 790
                                            },
                                            "delegate": false,
                                            "asteriskToken": null,
                                            "expression": null,
                                            "flags": 32,
                                            "start": 784,
                                            "end": 790
                                        },
                                        "colonToken": {
                                            "kind": 21,
                                            "flags": 0,
                                            "start": 790,
                                            "end": 792
                                        },
                                        "alternate": {
                                            "kind": 229,
                                            "yieldKeyword": {
                                                "kind": 8454253,
                                                "flags": 0,
                                                "start": 792,
                                                "end": 798
                                            },
                                            "delegate": false,
                                            "asteriskToken": null,
                                            "expression": null,
                                            "flags": 32,
                                            "start": 792,
                                            "end": 798
                                        },
                                        "flags": 32,
                                        "start": 775,
                                        "end": 798
                                    },
                                    "flags": 16,
                                    "start": 775,
                                    "end": 798
                                }
                            ],
                            "multiline": false,
                            "flags": 32,
                            "start": 775,
                            "end": 798
                        },
                        "flags": 32,
                        "start": 773,
                        "end": 799
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 288,
                    "start": 757,
                    "end": 799
                },
                "flags": 32,
                "start": 755,
                "end": 800
            },
            "flags": 16,
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
                        "flags": 0,
                        "start": 803,
                        "end": 811
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 811,
                        "end": 813
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 96,
                        "start": 813,
                        "end": 817
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
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
                                                    "flags": 0,
                                                    "start": 822,
                                                    "end": 827
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": null,
                                                "flags": 32,
                                                "start": 822,
                                                "end": 827
                                            },
                                            "flags": 32,
                                            "start": 821,
                                            "end": 828
                                        },
                                        "questionToken": {
                                            "kind": 134217750,
                                            "flags": 1,
                                            "start": 828,
                                            "end": 831
                                        },
                                        "consequent": {
                                            "kind": 229,
                                            "yieldKeyword": {
                                                "kind": 8454253,
                                                "flags": 0,
                                                "start": 831,
                                                "end": 837
                                            },
                                            "delegate": false,
                                            "asteriskToken": null,
                                            "expression": null,
                                            "flags": 32,
                                            "start": 831,
                                            "end": 837
                                        },
                                        "colonToken": {
                                            "kind": 21,
                                            "flags": 0,
                                            "start": 837,
                                            "end": 839
                                        },
                                        "alternate": {
                                            "kind": 229,
                                            "yieldKeyword": {
                                                "kind": 8454253,
                                                "flags": 0,
                                                "start": 839,
                                                "end": 845
                                            },
                                            "delegate": false,
                                            "asteriskToken": null,
                                            "expression": null,
                                            "flags": 32,
                                            "start": 839,
                                            "end": 845
                                        },
                                        "flags": 32,
                                        "start": 821,
                                        "end": 845
                                    },
                                    "flags": 16,
                                    "start": 821,
                                    "end": 845
                                }
                            ],
                            "multiline": false,
                            "flags": 32,
                            "start": 821,
                            "end": 845
                        },
                        "flags": 32,
                        "start": 819,
                        "end": 846
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 288,
                    "start": 803,
                    "end": 846
                },
                "flags": 32,
                "start": 801,
                "end": 847
            },
            "flags": 16,
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
                        "flags": 0,
                        "start": 926,
                        "end": 934
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 934,
                        "end": 936
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 96,
                        "start": 936,
                        "end": 940
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
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
                                            "flags": 0,
                                            "start": 944,
                                            "end": 949
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": null,
                                        "flags": 32,
                                        "start": 944,
                                        "end": 949
                                    },
                                    "flags": 16,
                                    "start": 944,
                                    "end": 949
                                },
                                {
                                    "kind": 165,
                                    "forKeyword": {
                                        "kind": 37757017,
                                        "flags": 1,
                                        "start": 949,
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
                                            "flags": 16,
                                            "start": 960,
                                            "end": 960
                                        },
                                        "flags": 16,
                                        "start": 958,
                                        "end": 961
                                    },
                                    "flags": 16,
                                    "start": 949,
                                    "end": 961
                                }
                            ],
                            "multiline": false,
                            "flags": 32,
                            "start": 944,
                            "end": 961
                        },
                        "flags": 32,
                        "start": 942,
                        "end": 962
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 288,
                    "start": 926,
                    "end": 962
                },
                "flags": 32,
                "start": 848,
                "end": 963
            },
            "flags": 16,
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
                        "flags": 0,
                        "start": 967,
                        "end": 975
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 975,
                        "end": 977
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 96,
                        "start": 977,
                        "end": 981
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
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
                                            "flags": 96,
                                            "start": 985,
                                            "end": 986
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 64,
                                            "start": 986,
                                            "end": 988
                                        },
                                        "right": {
                                            "kind": 189,
                                            "decorators": null,
                                            "classKeyword": {
                                                "kind": 37822544,
                                                "flags": 0,
                                                "start": 988,
                                                "end": 994
                                            },
                                            "name": null,
                                            "typeParameters": null,
                                            "classHeritage": {
                                                "kind": 279,
                                                "extendsKeyword": {
                                                    "kind": 4194391,
                                                    "flags": 0,
                                                    "start": 994,
                                                    "end": 1002
                                                },
                                                "expression": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 229,
                                                        "yieldKeyword": {
                                                            "kind": 8454253,
                                                            "flags": 0,
                                                            "start": 1004,
                                                            "end": 1009
                                                        },
                                                        "delegate": false,
                                                        "asteriskToken": null,
                                                        "expression": null,
                                                        "flags": 32,
                                                        "start": 1004,
                                                        "end": 1009
                                                    },
                                                    "flags": 32,
                                                    "start": 1002,
                                                    "end": 1010
                                                },
                                                "typeParameter": null,
                                                "flags": 16,
                                                "start": 1002,
                                                "end": 1010
                                            },
                                            "members": {
                                                "kind": 277,
                                                "elements": [],
                                                "flags": 32,
                                                "start": 1012,
                                                "end": 1013
                                            },
                                            "flags": 32,
                                            "start": 988,
                                            "end": 1013
                                        },
                                        "flags": 32,
                                        "start": 985,
                                        "end": 1013
                                    },
                                    "flags": 16,
                                    "start": 985,
                                    "end": 1013
                                }
                            ],
                            "multiline": false,
                            "flags": 32,
                            "start": 985,
                            "end": 1013
                        },
                        "flags": 32,
                        "start": 983,
                        "end": 1014
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 288,
                    "start": 967,
                    "end": 1014
                },
                "flags": 32,
                "start": 964,
                "end": 1015
            },
            "flags": 16,
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
                        "flags": 0,
                        "start": 1018,
                        "end": 1026
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 1026,
                        "end": 1028
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 96,
                        "start": 1028,
                        "end": 1032
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
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
                                            "flags": 96,
                                            "start": 1036,
                                            "end": 1037
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 64,
                                            "start": 1037,
                                            "end": 1039
                                        },
                                        "right": {
                                            "kind": 189,
                                            "decorators": null,
                                            "classKeyword": {
                                                "kind": 37822544,
                                                "flags": 0,
                                                "start": 1039,
                                                "end": 1045
                                            },
                                            "name": null,
                                            "typeParameters": null,
                                            "classHeritage": {
                                                "kind": 279,
                                                "extendsKeyword": {
                                                    "kind": 4194391,
                                                    "flags": 0,
                                                    "start": 1045,
                                                    "end": 1053
                                                },
                                                "expression": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "f",
                                                        "rawText": "f",
                                                        "flags": 96,
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
                                                                    "flags": 0,
                                                                    "start": 1056,
                                                                    "end": 1061
                                                                },
                                                                "delegate": false,
                                                                "asteriskToken": null,
                                                                "expression": null,
                                                                "flags": 32,
                                                                "start": 1056,
                                                                "end": 1061
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 1056,
                                                        "end": 1061
                                                    },
                                                    "flags": 32,
                                                    "start": 1053,
                                                    "end": 1062
                                                },
                                                "typeParameter": null,
                                                "flags": 16,
                                                "start": 1053,
                                                "end": 1062
                                            },
                                            "members": {
                                                "kind": 277,
                                                "elements": [],
                                                "flags": 32,
                                                "start": 1064,
                                                "end": 1065
                                            },
                                            "flags": 32,
                                            "start": 1039,
                                            "end": 1065
                                        },
                                        "flags": 32,
                                        "start": 1036,
                                        "end": 1065
                                    },
                                    "flags": 16,
                                    "start": 1036,
                                    "end": 1065
                                }
                            ],
                            "multiline": false,
                            "flags": 32,
                            "start": 1036,
                            "end": 1065
                        },
                        "flags": 32,
                        "start": 1034,
                        "end": 1066
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 288,
                    "start": 1018,
                    "end": 1066
                },
                "flags": 32,
                "start": 1016,
                "end": 1067
            },
            "flags": 16,
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
                        "flags": 0,
                        "start": 1070,
                        "end": 1078
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 1078,
                        "end": 1080
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 96,
                        "start": 1080,
                        "end": 1084
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
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
                                            "flags": 96,
                                            "start": 1088,
                                            "end": 1089
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 64,
                                            "start": 1089,
                                            "end": 1091
                                        },
                                        "right": {
                                            "kind": 189,
                                            "decorators": null,
                                            "classKeyword": {
                                                "kind": 37822544,
                                                "flags": 0,
                                                "start": 1091,
                                                "end": 1097
                                            },
                                            "name": null,
                                            "typeParameters": null,
                                            "classHeritage": {
                                                "kind": 279,
                                                "extendsKeyword": {
                                                    "kind": 4194391,
                                                    "flags": 0,
                                                    "start": 1097,
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
                                                                "flags": 96,
                                                                "start": 1107,
                                                                "end": 1111
                                                            },
                                                            {
                                                                "kind": 229,
                                                                "yieldKeyword": {
                                                                    "kind": 8454253,
                                                                    "flags": 0,
                                                                    "start": 1112,
                                                                    "end": 1118
                                                                },
                                                                "delegate": false,
                                                                "asteriskToken": null,
                                                                "expression": null,
                                                                "flags": 32,
                                                                "start": 1112,
                                                                "end": 1118
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "start": 1105,
                                                        "end": 1118
                                                    },
                                                    "flags": 32,
                                                    "start": 1105,
                                                    "end": 1119
                                                },
                                                "typeParameter": null,
                                                "flags": 16,
                                                "start": 1105,
                                                "end": 1119
                                            },
                                            "members": {
                                                "kind": 277,
                                                "elements": [],
                                                "flags": 32,
                                                "start": 1121,
                                                "end": 1123
                                            },
                                            "flags": 32,
                                            "start": 1091,
                                            "end": 1123
                                        },
                                        "flags": 32,
                                        "start": 1088,
                                        "end": 1123
                                    },
                                    "flags": 16,
                                    "start": 1088,
                                    "end": 1123
                                }
                            ],
                            "multiline": false,
                            "flags": 32,
                            "start": 1088,
                            "end": 1123
                        },
                        "flags": 32,
                        "start": 1086,
                        "end": 1124
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 288,
                    "start": 1070,
                    "end": 1124
                },
                "flags": 32,
                "start": 1068,
                "end": 1125
            },
            "flags": 16,
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
                        "flags": 0,
                        "start": 1128,
                        "end": 1136
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 1136,
                        "end": 1138
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "gen",
                        "rawText": "gen",
                        "flags": 96,
                        "start": 1138,
                        "end": 1142
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
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
                                            "flags": 96,
                                            "start": 1146,
                                            "end": 1147
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 64,
                                            "start": 1147,
                                            "end": 1149
                                        },
                                        "right": {
                                            "kind": 189,
                                            "decorators": null,
                                            "classKeyword": {
                                                "kind": 37822544,
                                                "flags": 0,
                                                "start": 1149,
                                                "end": 1155
                                            },
                                            "name": null,
                                            "typeParameters": null,
                                            "classHeritage": {
                                                "kind": 279,
                                                "extendsKeyword": {
                                                    "kind": 4194391,
                                                    "flags": 0,
                                                    "start": 1155,
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
                                                            "flags": 96,
                                                            "start": 1165,
                                                            "end": 1166
                                                        },
                                                        "questionToken": {
                                                            "kind": 134217750,
                                                            "flags": 0,
                                                            "start": 1166,
                                                            "end": 1168
                                                        },
                                                        "consequent": {
                                                            "kind": 269,
                                                            "text": null,
                                                            "flags": 96,
                                                            "start": 1168,
                                                            "end": 1173
                                                        },
                                                        "colonToken": {
                                                            "kind": 21,
                                                            "flags": 0,
                                                            "start": 1173,
                                                            "end": 1175
                                                        },
                                                        "alternate": {
                                                            "kind": 229,
                                                            "yieldKeyword": {
                                                                "kind": 8454253,
                                                                "flags": 0,
                                                                "start": 1175,
                                                                "end": 1181
                                                            },
                                                            "delegate": false,
                                                            "asteriskToken": null,
                                                            "expression": null,
                                                            "flags": 32,
                                                            "start": 1175,
                                                            "end": 1181
                                                        },
                                                        "flags": 32,
                                                        "start": 1163,
                                                        "end": 1181
                                                    },
                                                    "flags": 32,
                                                    "start": 1163,
                                                    "end": 1182
                                                },
                                                "typeParameter": null,
                                                "flags": 16,
                                                "start": 1163,
                                                "end": 1182
                                            },
                                            "members": {
                                                "kind": 277,
                                                "elements": [],
                                                "flags": 32,
                                                "start": 1184,
                                                "end": 1186
                                            },
                                            "flags": 32,
                                            "start": 1149,
                                            "end": 1186
                                        },
                                        "flags": 32,
                                        "start": 1146,
                                        "end": 1186
                                    },
                                    "flags": 16,
                                    "start": 1146,
                                    "end": 1186
                                }
                            ],
                            "multiline": false,
                            "flags": 32,
                            "start": 1146,
                            "end": 1186
                        },
                        "flags": 32,
                        "start": 1144,
                        "end": 1187
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 288,
                    "start": 1128,
                    "end": 1187
                },
                "flags": 32,
                "start": 1126,
                "end": 1188
            },
            "flags": 16,
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

