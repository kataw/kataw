# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
"use strict"; function not_gen() { var foo, yield; }

"use strict"; function not_gen() { try { } catch (yield) { } }

"use strict"; function not_gen() { function yield() { } }
"use strict"; function not_gen() { (function yield() { }) }
"use strict"; function not_gen() { function foo(yield) { } }
"use strict"; function not_gen() { function foo(bar, yield) { } }
"use strict"; function not_gen() { function * yield() { } }
"use strict"; function not_gen() { (function * yield() { }) }
"use strict"; function not_gen() { yield = 1; }
"use strict"; function not_gen() { var foo = yield = 1; }
"use strict"; function not_gen() { ++yield; }

function not_gen() { "use strict"; yield++; }
function not_gen() { "use strict";  yield: 34; }

function * x() { "use strict"; yield++; }
function * x() { "use strict";  yield: 34; }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "\"use strict\"",
            "flags": 96,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 13,
                "end": 22
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 96,
                "start": 22,
                "end": 30
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 31,
                "end": 31
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 80,
                                "start": 34,
                                "end": 38
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 38,
                                            "end": 42
                                        },
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "start": 38,
                                        "end": 42
                                    },
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "yield",
                                            "rawText": "yield",
                                            "flags": 96,
                                            "start": 43,
                                            "end": 49
                                        },
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "start": 43,
                                        "end": 49
                                    }
                                ],
                                "flags": 16,
                                "start": 38,
                                "end": 49
                            },
                            "flags": 16,
                            "start": 34,
                            "end": 50
                        }
                    ],
                    "flags": 32,
                    "start": 34,
                    "end": 50
                },
                "flags": 32,
                "start": 32,
                "end": 52
            },
            "returnType": null,
            "flags": 16,
            "start": 13,
            "end": 52
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 52,
                "end": 66
            },
            "flags": 16,
            "start": 52,
            "end": 67
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 67,
                "end": 76
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 96,
                "start": 76,
                "end": 84
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 85,
                "end": 85
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 159,
                            "tryKeyword": {
                                "kind": 37757027,
                                "flags": 80,
                                "start": 88,
                                "end": 92
                            },
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 94,
                                    "end": 94
                                },
                                "flags": 16,
                                "start": 92,
                                "end": 96
                            },
                            "catchClause": {
                                "kind": 173,
                                "catchKeyword": {
                                    "kind": 4202575,
                                    "flags": 80,
                                    "start": 96,
                                    "end": 102
                                },
                                "catchParameter": {
                                    "kind": 134299649,
                                    "text": "yield",
                                    "rawText": "yield",
                                    "flags": 96,
                                    "start": 104,
                                    "end": 109
                                },
                                "block": {
                                    "kind": 124,
                                    "block": {
                                        "kind": 249,
                                        "statements": [],
                                        "flags": 16,
                                        "start": 112,
                                        "end": 112
                                    },
                                    "flags": 16,
                                    "start": 110,
                                    "end": 114
                                },
                                "flags": 80,
                                "start": 96,
                                "end": 114
                            },
                            "finallyKeyword": null,
                            "finallyBlock": null,
                            "flags": 16,
                            "start": 88,
                            "end": 114
                        }
                    ],
                    "flags": 32,
                    "start": 88,
                    "end": 114
                },
                "flags": 32,
                "start": 86,
                "end": 116
            },
            "returnType": null,
            "flags": 16,
            "start": 67,
            "end": 116
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 116,
                "end": 130
            },
            "flags": 16,
            "start": 116,
            "end": 131
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 131,
                "end": 140
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 96,
                "start": 140,
                "end": 148
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 149,
                "end": 149
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 152,
                                "end": 161
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "yield",
                                "rawText": "yield",
                                "flags": 96,
                                "start": 161,
                                "end": 167
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 168,
                                "end": 168
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 171,
                                    "end": 171
                                },
                                "flags": 32,
                                "start": 169,
                                "end": 173
                            },
                            "returnType": null,
                            "flags": 16,
                            "start": 152,
                            "end": 173
                        }
                    ],
                    "flags": 32,
                    "start": 152,
                    "end": 173
                },
                "flags": 32,
                "start": 150,
                "end": 175
            },
            "returnType": null,
            "flags": 16,
            "start": 131,
            "end": 175
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 175,
                "end": 188
            },
            "flags": 16,
            "start": 175,
            "end": 189
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 189,
                "end": 198
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 96,
                "start": 198,
                "end": 206
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 207,
                "end": 207
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
                                    "kind": 177,
                                    "asyncKeyword": null,
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "start": 212,
                                        "end": 220
                                    },
                                    "asteriskToken": null,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 96,
                                        "start": 220,
                                        "end": 226
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 227,
                                        "end": 227
                                    },
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
                                        "end": 232
                                    },
                                    "returnType": null,
                                    "flags": 32,
                                    "start": 212,
                                    "end": 232
                                },
                                "flags": 210,
                                "start": 32,
                                "end": 233
                            },
                            "flags": 16,
                            "start": 210,
                            "end": 233
                        }
                    ],
                    "flags": 32,
                    "start": 210,
                    "end": 233
                },
                "flags": 32,
                "start": 208,
                "end": 235
            },
            "returnType": null,
            "flags": 16,
            "start": 189,
            "end": 235
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 235,
                "end": 248
            },
            "flags": 16,
            "start": 235,
            "end": 249
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 249,
                "end": 258
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 96,
                "start": 258,
                "end": 266
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 267,
                "end": 267
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 270,
                                "end": 279
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 279,
                                "end": 283
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 96,
                                        "start": 284,
                                        "end": 289
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 284,
                                "end": 289
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 292,
                                    "end": 292
                                },
                                "flags": 32,
                                "start": 290,
                                "end": 294
                            },
                            "returnType": null,
                            "flags": 16,
                            "start": 270,
                            "end": 294
                        }
                    ],
                    "flags": 32,
                    "start": 270,
                    "end": 294
                },
                "flags": 32,
                "start": 268,
                "end": 296
            },
            "returnType": null,
            "flags": 16,
            "start": 249,
            "end": 296
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 296,
                "end": 309
            },
            "flags": 16,
            "start": 296,
            "end": 310
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 310,
                "end": 319
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 96,
                "start": 319,
                "end": 327
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 328,
                "end": 328
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 331,
                                "end": 340
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 340,
                                "end": 344
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "bar",
                                        "rawText": "bar",
                                        "flags": 96,
                                        "start": 345,
                                        "end": 348
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 96,
                                        "start": 349,
                                        "end": 355
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 345,
                                "end": 355
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 358,
                                    "end": 358
                                },
                                "flags": 32,
                                "start": 356,
                                "end": 360
                            },
                            "returnType": null,
                            "flags": 16,
                            "start": 331,
                            "end": 360
                        }
                    ],
                    "flags": 32,
                    "start": 331,
                    "end": 360
                },
                "flags": 32,
                "start": 329,
                "end": 362
            },
            "returnType": null,
            "flags": 16,
            "start": 310,
            "end": 362
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 362,
                "end": 375
            },
            "flags": 16,
            "start": 362,
            "end": 376
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 376,
                "end": 385
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 96,
                "start": 385,
                "end": 393
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 394,
                "end": 394
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 397,
                                "end": 406
                            },
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 406,
                                "end": 408
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "yield",
                                "rawText": "yield",
                                "flags": 96,
                                "start": 408,
                                "end": 414
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 415,
                                "end": 415
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 418,
                                    "end": 418
                                },
                                "flags": 32,
                                "start": 416,
                                "end": 420
                            },
                            "returnType": null,
                            "flags": 272,
                            "start": 397,
                            "end": 420
                        }
                    ],
                    "flags": 32,
                    "start": 397,
                    "end": 420
                },
                "flags": 32,
                "start": 395,
                "end": 422
            },
            "returnType": null,
            "flags": 16,
            "start": 376,
            "end": 422
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 422,
                "end": 435
            },
            "flags": 16,
            "start": 422,
            "end": 436
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 436,
                "end": 445
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 96,
                "start": 445,
                "end": 453
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 454,
                "end": 454
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
                                    "kind": 177,
                                    "asyncKeyword": null,
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "start": 459,
                                        "end": 467
                                    },
                                    "asteriskToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "start": 467,
                                        "end": 469
                                    },
                                    "name": {
                                        "kind": 134299649,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 96,
                                        "start": 469,
                                        "end": 475
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 476,
                                        "end": 476
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 479,
                                            "end": 479
                                        },
                                        "flags": 32,
                                        "start": 477,
                                        "end": 481
                                    },
                                    "returnType": null,
                                    "flags": 288,
                                    "start": 459,
                                    "end": 481
                                },
                                "flags": 457,
                                "start": 32,
                                "end": 482
                            },
                            "flags": 16,
                            "start": 457,
                            "end": 482
                        }
                    ],
                    "flags": 32,
                    "start": 457,
                    "end": 482
                },
                "flags": 32,
                "start": 455,
                "end": 484
            },
            "returnType": null,
            "flags": 16,
            "start": 436,
            "end": 484
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 484,
                "end": 497
            },
            "flags": 16,
            "start": 484,
            "end": 498
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 498,
                "end": 507
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 96,
                "start": 507,
                "end": 515
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 516,
                "end": 516
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
                                    "text": "yield",
                                    "rawText": "yield",
                                    "flags": 96,
                                    "start": 519,
                                    "end": 525
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 525,
                                    "end": 527
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 527,
                                    "end": 529
                                },
                                "flags": 0,
                                "start": 519,
                                "end": 529
                            },
                            "flags": 16,
                            "start": 519,
                            "end": 530
                        }
                    ],
                    "flags": 32,
                    "start": 519,
                    "end": 530
                },
                "flags": 32,
                "start": 517,
                "end": 532
            },
            "returnType": null,
            "flags": 16,
            "start": 498,
            "end": 532
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 532,
                "end": 545
            },
            "flags": 16,
            "start": 532,
            "end": 546
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 546,
                "end": 555
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 96,
                "start": 555,
                "end": 563
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 564,
                "end": 564
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 80,
                                "start": 567,
                                "end": 571
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 571,
                                            "end": 575
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 125,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "yield",
                                                "rawText": "yield",
                                                "flags": 96,
                                                "start": 577,
                                                "end": 583
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "flags": 96,
                                                "start": 583,
                                                "end": 585
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "start": 585,
                                                "end": 587
                                            },
                                            "flags": 0,
                                            "start": 577,
                                            "end": 587
                                        },
                                        "flags": 16,
                                        "start": 571,
                                        "end": 587
                                    }
                                ],
                                "flags": 16,
                                "start": 571,
                                "end": 587
                            },
                            "flags": 16,
                            "start": 567,
                            "end": 588
                        }
                    ],
                    "flags": 32,
                    "start": 567,
                    "end": 588
                },
                "flags": 32,
                "start": 565,
                "end": 590
            },
            "returnType": null,
            "flags": 16,
            "start": 546,
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
                "end": 603
            },
            "flags": 16,
            "start": 590,
            "end": 604
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 604,
                "end": 613
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 96,
                "start": 613,
                "end": 621
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 622,
                "end": 622
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
                                "kind": 128,
                                "operandToken": {
                                    "kind": 196635,
                                    "flags": 96,
                                    "start": 625,
                                    "end": 628
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "yield",
                                    "rawText": "yield",
                                    "flags": 96,
                                    "start": 628,
                                    "end": 633
                                },
                                "flags": 32,
                                "start": 625,
                                "end": 633
                            },
                            "flags": 16,
                            "start": 625,
                            "end": 634
                        }
                    ],
                    "flags": 32,
                    "start": 625,
                    "end": 634
                },
                "flags": 32,
                "start": 623,
                "end": 636
            },
            "returnType": null,
            "flags": 16,
            "start": 604,
            "end": 636
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 636,
                "end": 646
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 96,
                "start": 646,
                "end": 654
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 655,
                "end": 655
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [
                        {
                            "kind": 201392131,
                            "text": "use strict",
                            "rawText": "\"use strict\"",
                            "flags": 96,
                            "start": 658,
                            "end": 671
                        }
                    ],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 127,
                                "operandToken": {
                                    "kind": 196635,
                                    "flags": 96,
                                    "start": 678,
                                    "end": 680
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "yield",
                                    "rawText": "yield",
                                    "flags": 96,
                                    "start": 672,
                                    "end": 678
                                },
                                "flags": 32,
                                "start": 672,
                                "end": 680
                            },
                            "flags": 16,
                            "start": 672,
                            "end": 681
                        }
                    ],
                    "flags": 32,
                    "start": 658,
                    "end": 681
                },
                "flags": 32,
                "start": 656,
                "end": 683
            },
            "returnType": null,
            "flags": 16,
            "start": 636,
            "end": 683
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 683,
                "end": 692
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 96,
                "start": 692,
                "end": 700
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 701,
                "end": 701
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [
                        {
                            "kind": 201392131,
                            "text": "use strict",
                            "rawText": "\"use strict\"",
                            "flags": 96,
                            "start": 704,
                            "end": 717
                        }
                    ],
                    "statements": [
                        {
                            "kind": 163,
                            "label": {
                                "kind": 134299649,
                                "text": "yield",
                                "rawText": "yield",
                                "flags": 96,
                                "start": 718,
                                "end": 725
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 725,
                                "end": 726
                            },
                            "statement": {
                                "kind": 120,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 34,
                                    "rawText": "34",
                                    "flags": 96,
                                    "start": 726,
                                    "end": 729
                                },
                                "flags": 16,
                                "start": 726,
                                "end": 730
                            },
                            "flags": 16,
                            "start": 718,
                            "end": 730
                        }
                    ],
                    "flags": 32,
                    "start": 704,
                    "end": 730
                },
                "flags": 32,
                "start": 702,
                "end": 732
            },
            "returnType": null,
            "flags": 16,
            "start": 683,
            "end": 732
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 732,
                "end": 742
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 742,
                "end": 744
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 744,
                "end": 746
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 747,
                "end": 747
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [
                        {
                            "kind": 201392131,
                            "text": "use strict",
                            "rawText": "\"use strict\"",
                            "flags": 96,
                            "start": 750,
                            "end": 763
                        }
                    ],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 64,
                                    "start": 764,
                                    "end": 770
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 128,
                                    "operandToken": {
                                        "kind": 196635,
                                        "flags": 96,
                                        "start": 770,
                                        "end": 772
                                    },
                                    "operand": {
                                        "kind": 16637,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 64,
                                        "start": 772,
                                        "end": 772
                                    },
                                    "flags": 32,
                                    "start": 770,
                                    "end": 772
                                },
                                "flags": 32,
                                "start": 764,
                                "end": 772
                            },
                            "flags": 16,
                            "start": 764,
                            "end": 773
                        }
                    ],
                    "flags": 32,
                    "start": 750,
                    "end": 773
                },
                "flags": 32,
                "start": 748,
                "end": 775
            },
            "returnType": null,
            "flags": 272,
            "start": 732,
            "end": 775
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 775,
                "end": 784
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 784,
                "end": 786
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 786,
                "end": 788
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 789,
                "end": 789
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [
                        {
                            "kind": 201392131,
                            "text": "use strict",
                            "rawText": "\"use strict\"",
                            "flags": 96,
                            "start": 792,
                            "end": 805
                        }
                    ],
                    "statements": [
                        {
                            "kind": 163,
                            "label": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 64,
                                    "start": 806,
                                    "end": 813
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": null,
                                "flags": 32,
                                "start": 806,
                                "end": 813
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 813,
                                "end": 814
                            },
                            "statement": {
                                "kind": 120,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 34,
                                    "rawText": "34",
                                    "flags": 96,
                                    "start": 814,
                                    "end": 817
                                },
                                "flags": 16,
                                "start": 814,
                                "end": 818
                            },
                            "flags": 16,
                            "start": 806,
                            "end": 818
                        }
                    ],
                    "flags": 32,
                    "start": 792,
                    "end": 818
                },
                "flags": 32,
                "start": 790,
                "end": 820
            },
            "returnType": null,
            "flags": 272,
            "start": 775,
            "end": 820
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; function not_gen() { var foo, yield; }\n\n\"use strict\"; function not_gen() { try { } catch (yield) { } }\n\n\"use strict\"; function not_gen() { function yield() { } }\n\"use strict\"; function not_gen() { (function yield() { }) }\n\"use strict\"; function not_gen() { function foo(yield) { } }\n\"use strict\"; function not_gen() { function foo(bar, yield) { } }\n\"use strict\"; function not_gen() { function * yield() { } }\n\"use strict\"; function not_gen() { (function * yield() { }) }\n\"use strict\"; function not_gen() { yield = 1; }\n\"use strict\"; function not_gen() { var foo = yield = 1; }\n\"use strict\"; function not_gen() { ++yield; }\n\nfunction not_gen() { \"use strict\"; yield++; }\nfunction not_gen() { \"use strict\";  yield: 34; }\n\nfunction * x() { \"use strict\"; yield++; }\nfunction * x() { \"use strict\";  yield: 34; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 820
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected. 'yield' is a reserved word in strict mode - start: 43, end: 49
✖ Identifier expected. 'yield' is a reserved word in strict mode - start: 104, end: 109
✖ Cannot use 'yield' as a name on a async generator declaration - start: 161, end: 167
✖ `yield` expression cannot be used in function parameters - start: 284, end: 289
✖ `yield` expression cannot be used in function parameters - start: 349, end: 355
✖ Cannot use 'yield' as a name on a generator declaration - start: 408, end: 414
✖ Cannot use 'yield' as a name on a generator function expression - start: 469, end: 475
✖ Identifier expected. 'yield' is a reserved word in strict mode and cannot be used as an label - start: 718, end: 726
✖ Identifier expected - start: 772, end: 773
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 772, end: 773
✖ Identifier expected. 'yield' is a reserved word in strict mode and cannot be used as an label - start: 806, end: 814

```

