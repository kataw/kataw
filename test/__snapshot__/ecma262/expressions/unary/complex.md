# Kataw parser test case

## Input

`````js
function x0(y: string): number {
  return +y; // ok, + exists solely for coercion
}

function x1(y: string): number {
  return -y; // error, we don't allow coercion here
}

function x3(y: string) {
  return ~y;  // error, we don't allow coercion here
}

function x4(y: string): boolean {
  return !y; // ok, coercion is allowed
}

function x5(a: A<false>): true {
  return !a; // ok
};

function x6(a: A<false>): false {
  return !a; // error, true ~> false
};

function x7(a: false & false): true {
  return !a; // ok
};

function x8(a: false & false): false {
  return !a; // error, true ~> false
};
`````

## Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "x0",
                "rawText": "x0",
                "flags": 96,
                "start": 8,
                "end": 11
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
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 12,
                            "end": 13
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234347,
                                "flags": 2097216,
                                "start": 14,
                                "end": 21
                            },
                            "flags": 2097152,
                            "start": 14,
                            "end": 21
                        },
                        "right": null,
                        "flags": 32,
                        "start": 12,
                        "end": 21
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 12,
                "end": 21
            },
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
                                "flags": 81,
                                "start": 32,
                                "end": 41
                            },
                            "expression": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "start": 41,
                                    "end": 43
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 43,
                                    "end": 44
                                },
                                "flags": 32,
                                "start": 41,
                                "end": 44
                            },
                            "flags": 81,
                            "start": 32,
                            "end": 45
                        }
                    ],
                    "flags": 33,
                    "start": 32,
                    "end": 45
                },
                "flags": 32,
                "start": 30,
                "end": 83
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234345,
                    "flags": 2097216,
                    "start": 23,
                    "end": 30
                },
                "flags": 2097152,
                "start": 23,
                "end": 30
            },
            "flags": 16,
            "start": 0,
            "end": 83
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 83,
                "end": 93
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "x1",
                "rawText": "x1",
                "flags": 96,
                "start": 93,
                "end": 96
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
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 97,
                            "end": 98
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234347,
                                "flags": 2097216,
                                "start": 99,
                                "end": 106
                            },
                            "flags": 2097152,
                            "start": 99,
                            "end": 106
                        },
                        "right": null,
                        "flags": 32,
                        "start": 97,
                        "end": 106
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 97,
                "end": 106
            },
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
                                "flags": 81,
                                "start": 117,
                                "end": 126
                            },
                            "expression": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 134318643,
                                    "flags": 96,
                                    "start": 126,
                                    "end": 128
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 128,
                                    "end": 129
                                },
                                "flags": 32,
                                "start": 126,
                                "end": 129
                            },
                            "flags": 81,
                            "start": 117,
                            "end": 130
                        }
                    ],
                    "flags": 33,
                    "start": 117,
                    "end": 130
                },
                "flags": 32,
                "start": 115,
                "end": 171
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234345,
                    "flags": 2097216,
                    "start": 108,
                    "end": 115
                },
                "flags": 2097152,
                "start": 108,
                "end": 115
            },
            "flags": 16,
            "start": 83,
            "end": 171
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 171,
                "end": 181
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "x3",
                "rawText": "x3",
                "flags": 96,
                "start": 181,
                "end": 184
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
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 185,
                            "end": 186
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234347,
                                "flags": 2097216,
                                "start": 187,
                                "end": 194
                            },
                            "flags": 2097152,
                            "start": 187,
                            "end": 194
                        },
                        "right": null,
                        "flags": 32,
                        "start": 185,
                        "end": 194
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 185,
                "end": 194
            },
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
                                "flags": 81,
                                "start": 197,
                                "end": 206
                            },
                            "expression": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 65585,
                                    "flags": 96,
                                    "start": 206,
                                    "end": 208
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 208,
                                    "end": 209
                                },
                                "flags": 32,
                                "start": 206,
                                "end": 209
                            },
                            "flags": 81,
                            "start": 197,
                            "end": 210
                        }
                    ],
                    "flags": 33,
                    "start": 197,
                    "end": 210
                },
                "flags": 32,
                "start": 195,
                "end": 252
            },
            "returnType": null,
            "flags": 16,
            "start": 171,
            "end": 252
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 252,
                "end": 262
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "x4",
                "rawText": "x4",
                "flags": 96,
                "start": 262,
                "end": 265
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
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 266,
                            "end": 267
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234347,
                                "flags": 2097216,
                                "start": 268,
                                "end": 275
                            },
                            "flags": 2097152,
                            "start": 268,
                            "end": 275
                        },
                        "right": null,
                        "flags": 32,
                        "start": 266,
                        "end": 275
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 266,
                "end": 275
            },
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
                                "flags": 81,
                                "start": 287,
                                "end": 296
                            },
                            "expression": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 65584,
                                    "flags": 96,
                                    "start": 296,
                                    "end": 298
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 298,
                                    "end": 299
                                },
                                "flags": 32,
                                "start": 296,
                                "end": 299
                            },
                            "flags": 81,
                            "start": 287,
                            "end": 300
                        }
                    ],
                    "flags": 33,
                    "start": 287,
                    "end": 300
                },
                "flags": 32,
                "start": 285,
                "end": 329
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234254,
                    "flags": 2097216,
                    "start": 277,
                    "end": 285
                },
                "flags": 2097152,
                "start": 277,
                "end": 285
            },
            "flags": 16,
            "start": 252,
            "end": 329
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 329,
                "end": 339
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "x5",
                "rawText": "x5",
                "flags": 96,
                "start": 339,
                "end": 342
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
                            "start": 343,
                            "end": 344
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 134299649,
                                    "text": "A",
                                    "rawText": "A",
                                    "flags": 96,
                                    "start": 345,
                                    "end": 347
                                },
                                "typeParameters": {
                                    "kind": 310,
                                    "typeInstantiations": {
                                        "kind": 309,
                                        "types": [
                                            {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 205586437,
                                                    "flags": 2097216,
                                                    "start": 348,
                                                    "end": 353
                                                },
                                                "flags": 2097152,
                                                "start": 348,
                                                "end": 353
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "start": 348,
                                        "end": 353
                                    },
                                    "flags": 2097152,
                                    "start": 347,
                                    "end": 354
                                },
                                "flags": 2097152,
                                "start": 345,
                                "end": 354
                            },
                            "flags": 2097152,
                            "start": 345,
                            "end": 354
                        },
                        "right": null,
                        "flags": 32,
                        "start": 343,
                        "end": 354
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 343,
                "end": 354
            },
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
                                "flags": 81,
                                "start": 363,
                                "end": 372
                            },
                            "expression": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 65584,
                                    "flags": 96,
                                    "start": 372,
                                    "end": 374
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 374,
                                    "end": 375
                                },
                                "flags": 32,
                                "start": 372,
                                "end": 375
                            },
                            "flags": 81,
                            "start": 363,
                            "end": 376
                        }
                    ],
                    "flags": 33,
                    "start": 363,
                    "end": 376
                },
                "flags": 32,
                "start": 361,
                "end": 384
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 24752947,
                    "flags": 2097216,
                    "start": 356,
                    "end": 361
                },
                "flags": 2097152,
                "start": 356,
                "end": 361
            },
            "flags": 16,
            "start": 329,
            "end": 384
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 384,
            "end": 385
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 385,
                "end": 395
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "x6",
                "rawText": "x6",
                "flags": 96,
                "start": 395,
                "end": 398
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
                            "start": 399,
                            "end": 400
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 134299649,
                                    "text": "A",
                                    "rawText": "A",
                                    "flags": 96,
                                    "start": 401,
                                    "end": 403
                                },
                                "typeParameters": {
                                    "kind": 310,
                                    "typeInstantiations": {
                                        "kind": 309,
                                        "types": [
                                            {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 205586437,
                                                    "flags": 2097216,
                                                    "start": 404,
                                                    "end": 409
                                                },
                                                "flags": 2097152,
                                                "start": 404,
                                                "end": 409
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "start": 404,
                                        "end": 409
                                    },
                                    "flags": 2097152,
                                    "start": 403,
                                    "end": 410
                                },
                                "flags": 2097152,
                                "start": 401,
                                "end": 410
                            },
                            "flags": 2097152,
                            "start": 401,
                            "end": 410
                        },
                        "right": null,
                        "flags": 32,
                        "start": 399,
                        "end": 410
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 399,
                "end": 410
            },
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
                                "flags": 81,
                                "start": 420,
                                "end": 429
                            },
                            "expression": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 65584,
                                    "flags": 96,
                                    "start": 429,
                                    "end": 431
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 431,
                                    "end": 432
                                },
                                "flags": 32,
                                "start": 429,
                                "end": 432
                            },
                            "flags": 81,
                            "start": 420,
                            "end": 433
                        }
                    ],
                    "flags": 33,
                    "start": 420,
                    "end": 433
                },
                "flags": 32,
                "start": 418,
                "end": 459
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 205586437,
                    "flags": 2097216,
                    "start": 412,
                    "end": 418
                },
                "flags": 2097152,
                "start": 412,
                "end": 418
            },
            "flags": 16,
            "start": 385,
            "end": 459
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 459,
            "end": 460
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 460,
                "end": 470
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "x7",
                "rawText": "x7",
                "flags": 96,
                "start": 470,
                "end": 473
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
                            "start": 474,
                            "end": 475
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 138,
                                "types": [
                                    {
                                        "kind": 205586437,
                                        "flags": 2097216,
                                        "start": 476,
                                        "end": 482
                                    },
                                    {
                                        "kind": 205586437,
                                        "flags": 2097216,
                                        "start": 484,
                                        "end": 490
                                    }
                                ],
                                "flags": 2097152,
                                "start": 482,
                                "end": 490
                            },
                            "flags": 2097152,
                            "start": 476,
                            "end": 490
                        },
                        "right": null,
                        "flags": 32,
                        "start": 474,
                        "end": 490
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 474,
                "end": 490
            },
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
                                "flags": 81,
                                "start": 499,
                                "end": 508
                            },
                            "expression": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 65584,
                                    "flags": 96,
                                    "start": 508,
                                    "end": 510
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 510,
                                    "end": 511
                                },
                                "flags": 32,
                                "start": 508,
                                "end": 511
                            },
                            "flags": 81,
                            "start": 499,
                            "end": 512
                        }
                    ],
                    "flags": 33,
                    "start": 499,
                    "end": 512
                },
                "flags": 32,
                "start": 497,
                "end": 520
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 24752947,
                    "flags": 2097216,
                    "start": 492,
                    "end": 497
                },
                "flags": 2097152,
                "start": 492,
                "end": 497
            },
            "flags": 16,
            "start": 460,
            "end": 520
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 520,
            "end": 521
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 521,
                "end": 531
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "x8",
                "rawText": "x8",
                "flags": 96,
                "start": 531,
                "end": 534
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
                            "start": 535,
                            "end": 536
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 138,
                                "types": [
                                    {
                                        "kind": 205586437,
                                        "flags": 2097216,
                                        "start": 537,
                                        "end": 543
                                    },
                                    {
                                        "kind": 205586437,
                                        "flags": 2097216,
                                        "start": 545,
                                        "end": 551
                                    }
                                ],
                                "flags": 2097152,
                                "start": 543,
                                "end": 551
                            },
                            "flags": 2097152,
                            "start": 537,
                            "end": 551
                        },
                        "right": null,
                        "flags": 32,
                        "start": 535,
                        "end": 551
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 535,
                "end": 551
            },
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
                                "flags": 81,
                                "start": 561,
                                "end": 570
                            },
                            "expression": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 65584,
                                    "flags": 96,
                                    "start": 570,
                                    "end": 572
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 572,
                                    "end": 573
                                },
                                "flags": 32,
                                "start": 570,
                                "end": 573
                            },
                            "flags": 81,
                            "start": 561,
                            "end": 574
                        }
                    ],
                    "flags": 33,
                    "start": 561,
                    "end": 574
                },
                "flags": 32,
                "start": 559,
                "end": 600
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 205586437,
                    "flags": 2097216,
                    "start": 553,
                    "end": 559
                },
                "flags": 2097152,
                "start": 553,
                "end": 559
            },
            "flags": 16,
            "start": 521,
            "end": 600
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 600,
            "end": 601
        }
    ],
    "isModule": false,
    "source": "function x0(y: string): number {\n  return +y; // ok, + exists solely for coercion\n}\n\nfunction x1(y: string): number {\n  return -y; // error, we don't allow coercion here\n}\n\nfunction x3(y: string) {\n  return ~y;  // error, we don't allow coercion here\n}\n\nfunction x4(y: string): boolean {\n  return !y; // ok, coercion is allowed\n}\n\nfunction x5(a: A<false>): true {\n  return !a; // ok\n};\n\nfunction x6(a: A<false>): false {\n  return !a; // error, true ~> false\n};\n\nfunction x7(a: false & false): true {\n  return !a; // ok\n};\n\nfunction x8(a: false & false): false {\n  return !a; // error, true ~> false\n};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 601
}
```

### Printed

```javascript

function x0( y: string ): number {
  return + y; // ok, + exists solely for coercion
}
function x1( y: string ): number {
  return - y; // error, we don't allow coercion here
}
function x3( y: string ) {
  return ~ y; // error, we don't allow coercion here
}
function x4( y: string ): boolean {
  return ! y; // ok, coercion is allowed
}
function x5( a: A< false > ): true {
  return ! a; // ok
}
;
function x6( a: A< false > ): false {
  return ! a; // error, true ~> false
}
;
function x7( a:  false & false  ): true {
  return ! a; // ok
}
;
function x8( a:  false & false  ): false {
  return ! a; // error, true ~> false
}
;

```

### Diagnostics

```javascript
✔ No errors
```

