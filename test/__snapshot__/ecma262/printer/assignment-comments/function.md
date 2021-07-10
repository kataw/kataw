# Kataw parser test case

## Input

`````js
 f1 = (
  a =
  //comment
  b
) => {};

f2 = (
  a = //comment
  b
) => {};

f3 = (
  a =
  b //comment
) => {};

f4 = // Comment
  () => {};

f5 =

  // Comment

 () => {}

f6 = /* comment */

  // Comment

  () => {}

let f1 = (
  a =
  //comment
  b
) => {};

let f2 = (
  a = //comment
  b
) => {};

let f3 = (
  a =
  b //comment
) => {};

let f4 = // Comment
  () => {};

let f5 =

  // Comment

  () => {}

let f6 = /* comment */

  // Comment

  () => {}

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
                    "text": "f1",
                    "rawText": "f1",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 3
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 5
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [
                            {
                                "kind": 281,
                                "ellipsisToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 7,
                                    "end": 11
                                },
                                "optionalToken": null,
                                "type": null,
                                "right": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 29
                                },
                                "flags": 32,
                                "transformFlags": 4096,
                                "start": 5,
                                "end": 29
                            }
                        ],
                        "trailingComma": false,
                        "flags": 34,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 31
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 31,
                        "end": 34
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 36,
                            "end": 36
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 34,
                        "end": 37
                    },
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 37
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 37
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 38
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "f2",
                    "rawText": "f2",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 38,
                    "end": 42
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 42,
                    "end": 44
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [
                            {
                                "kind": 281,
                                "ellipsisToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 46,
                                    "end": 50
                                },
                                "optionalToken": null,
                                "type": null,
                                "right": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 52,
                                    "end": 66
                                },
                                "flags": 32,
                                "transformFlags": 4096,
                                "start": 44,
                                "end": 66
                            }
                        ],
                        "trailingComma": false,
                        "flags": 34,
                        "transformFlags": 0,
                        "start": 46,
                        "end": 68
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 68,
                        "end": 71
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 73,
                            "end": 73
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 71,
                        "end": 74
                    },
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 44,
                    "end": 74
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 38,
                "end": 74
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 38,
            "end": 75
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "f3",
                    "rawText": "f3",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 75,
                    "end": 79
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 79,
                    "end": 81
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [
                            {
                                "kind": 281,
                                "ellipsisToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 83,
                                    "end": 87
                                },
                                "optionalToken": null,
                                "type": null,
                                "right": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 89,
                                    "end": 93
                                },
                                "flags": 32,
                                "transformFlags": 4096,
                                "start": 81,
                                "end": 93
                            }
                        ],
                        "trailingComma": false,
                        "flags": 34,
                        "transformFlags": 0,
                        "start": 83,
                        "end": 105
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 105,
                        "end": 108
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 110,
                            "end": 110
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 108,
                        "end": 111
                    },
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 81,
                    "end": 111
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 75,
                "end": 111
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 75,
            "end": 112
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "f4",
                    "rawText": "f4",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 112,
                    "end": 116
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 116,
                    "end": 118
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [],
                        "trailingComma": false,
                        "flags": 33,
                        "transformFlags": 0,
                        "start": 133,
                        "end": 133
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
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 118,
                    "end": 140
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 112,
                "end": 140
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 112,
            "end": 141
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "f5",
                    "rawText": "f5",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 141,
                    "end": 145
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 145,
                    "end": 147
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [],
                        "trailingComma": false,
                        "flags": 33,
                        "transformFlags": 0,
                        "start": 165,
                        "end": 165
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 166,
                        "end": 169
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 171,
                            "end": 171
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 169,
                        "end": 172
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 147,
                    "end": 172
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 141,
                "end": 172
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 141,
            "end": 172
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "f6",
                    "rawText": "f6",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 172,
                    "end": 176
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 176,
                    "end": 178
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [],
                        "trailingComma": false,
                        "flags": 33,
                        "transformFlags": 0,
                        "start": 211,
                        "end": 211
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 212,
                        "end": 215
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 217,
                            "end": 217
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 215,
                        "end": 218
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 178,
                    "end": 218
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 172,
                "end": 218
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 172,
            "end": 218
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 218,
                "end": 223
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "f1",
                            "rawText": "f1",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 223,
                            "end": 226
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 230,
                                            "end": 234
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 236,
                                            "end": 252
                                        },
                                        "flags": 32,
                                        "transformFlags": 4096,
                                        "start": 228,
                                        "end": 252
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "transformFlags": 0,
                                "start": 230,
                                "end": 254
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 254,
                                "end": 257
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 259,
                                    "end": 259
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 257,
                                "end": 260
                            },
                            "flags": 34,
                            "transformFlags": 0,
                            "start": 228,
                            "end": 260
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 223,
                        "end": 260
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 223,
                "end": 260
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 218,
            "end": 261
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 261,
                "end": 266
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "f2",
                            "rawText": "f2",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 266,
                            "end": 269
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 273,
                                            "end": 277
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 279,
                                            "end": 293
                                        },
                                        "flags": 32,
                                        "transformFlags": 4096,
                                        "start": 271,
                                        "end": 293
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "transformFlags": 0,
                                "start": 273,
                                "end": 295
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 295,
                                "end": 298
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 300,
                                    "end": 300
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 298,
                                "end": 301
                            },
                            "flags": 34,
                            "transformFlags": 0,
                            "start": 271,
                            "end": 301
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 266,
                        "end": 301
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 266,
                "end": 301
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 261,
            "end": 302
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 302,
                "end": 307
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "f3",
                            "rawText": "f3",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 307,
                            "end": 310
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 314,
                                            "end": 318
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 320,
                                            "end": 324
                                        },
                                        "flags": 32,
                                        "transformFlags": 4096,
                                        "start": 312,
                                        "end": 324
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "transformFlags": 0,
                                "start": 314,
                                "end": 336
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 336,
                                "end": 339
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 341,
                                    "end": 341
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 339,
                                "end": 342
                            },
                            "flags": 34,
                            "transformFlags": 0,
                            "start": 312,
                            "end": 342
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 307,
                        "end": 342
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 307,
                "end": 342
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 302,
            "end": 343
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 343,
                "end": 348
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "f4",
                            "rawText": "f4",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 348,
                            "end": 351
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 33,
                                "transformFlags": 0,
                                "start": 368,
                                "end": 368
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 369,
                                "end": 372
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 374,
                                    "end": 374
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 372,
                                "end": 375
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 353,
                            "end": 375
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 348,
                        "end": 375
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 348,
                "end": 375
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 343,
            "end": 376
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 376,
                "end": 381
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "f5",
                            "rawText": "f5",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 381,
                            "end": 384
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 33,
                                "transformFlags": 0,
                                "start": 405,
                                "end": 405
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 406,
                                "end": 409
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 411,
                                    "end": 411
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 409,
                                "end": 412
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 386,
                            "end": 412
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 381,
                        "end": 412
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 381,
                "end": 412
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 376,
            "end": 412
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 412,
                "end": 417
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "f6",
                            "rawText": "f6",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 417,
                            "end": 420
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 33,
                                "transformFlags": 0,
                                "start": 455,
                                "end": 455
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 456,
                                "end": 459
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 461,
                                    "end": 461
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 459,
                                "end": 462
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 422,
                            "end": 462
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 417,
                        "end": 462
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 417,
                "end": 462
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 412,
            "end": 462
        }
    ],
    "isModule": false,
    "source": " f1 = (\n  a =\n  //comment\n  b\n) => {};\n\nf2 = (\n  a = //comment\n  b\n) => {};\n\nf3 = (\n  a =\n  b //comment\n) => {};\n\nf4 = // Comment\n  () => {};\n\nf5 =\n\n  // Comment\n\n () => {}\n\nf6 = /* comment */\n\n  // Comment\n\n  () => {}\n\nlet f1 = (\n  a =\n  //comment\n  b\n) => {};\n\nlet f2 = (\n  a = //comment\n  b\n) => {};\n\nlet f3 = (\n  a =\n  b //comment\n) => {};\n\nlet f4 = // Comment\n  () => {};\n\nlet f5 =\n\n  // Comment\n\n  () => {}\n\nlet f6 = /* comment */\n\n  // Comment\n\n  () => {}\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 463
}
```

### Printed

```javascript
f1 = (a =
//comment
b) => {};
f2 = (a = b) => {};

f3 = (a = b) => {};

f4 = () => {};

f5 =
// Comment
() => {};

f6 =
// Comment
() => {};

let f1 = (a =
  //comment
  b) => {};

let f2 = (a = b) => {};

let f3 = (a = b) => {};

let f4 = () => {};

let f5 =
  // Comment
  () => {};

let f6 =
  // Comment
  () => {};

```

### Diagnostics

```javascript
✔ No errors
```

