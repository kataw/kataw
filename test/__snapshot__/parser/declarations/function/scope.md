# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true, allowTypes: true }
`````

## Input

`````js
function block_scope() {
  let a: number = 0;
  var b: number = 0;
  {
    let a = "";
    var b = "";
  }
}
function default_param_1() {
  // function binding in scope in default expr
  function f(
    x: () => string = f // error: number ~> string
  ): number {
    return 0;
  }
}

function default_param_2() {
  // fn body bindings not visible from param scope
  let a = "";
  function f0(x = () => a): number {
    let a = 0;
    return x(); // error: string ~> number
  }
  function f1(x = b /* error: cannot resolve b */): number {
    let b = 0;
    return x;
  }
}

function for_scope_let() {
  let a: number = 0;
  for (let a = "" /* ok: local to init */;;) {}
}

function for_scope_var() {
  var a: number = 0;
  for (var a = "" /* error: string ~> number */;;) {}
}

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
                "text": "block_scope",
                "rawText": "block_scope",
                "flags": 96,
                "start": 8,
                "end": 20
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 20,
                "end": 22
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 162,
                            "lexicalKeyword": {
                                "kind": 41951307,
                                "flags": 81,
                                "start": 24,
                                "end": 30
                            },
                            "binding": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 30,
                                            "end": 32
                                        },
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234345,
                                                "flags": 2097216,
                                                "start": 33,
                                                "end": 40
                                            },
                                            "flags": 2097152,
                                            "start": 33,
                                            "end": 40
                                        },
                                        "initializer": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "start": 42,
                                            "end": 44
                                        },
                                        "flags": 16,
                                        "start": 30,
                                        "end": 44
                                    }
                                ],
                                "flags": 17,
                                "start": 30,
                                "end": 44
                            },
                            "flags": 33554448,
                            "start": 24,
                            "end": 45
                        },
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 81,
                                "start": 45,
                                "end": 51
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
                                            "start": 51,
                                            "end": 53
                                        },
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234345,
                                                "flags": 2097216,
                                                "start": 54,
                                                "end": 61
                                            },
                                            "flags": 2097152,
                                            "start": 54,
                                            "end": 61
                                        },
                                        "initializer": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "start": 63,
                                            "end": 65
                                        },
                                        "flags": 16,
                                        "start": 51,
                                        "end": 65
                                    }
                                ],
                                "flags": 16,
                                "start": 51,
                                "end": 65
                            },
                            "flags": 16,
                            "start": 45,
                            "end": 66
                        },
                        {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [
                                    {
                                        "kind": 162,
                                        "lexicalKeyword": {
                                            "kind": 41951307,
                                            "flags": 81,
                                            "start": 70,
                                            "end": 78
                                        },
                                        "binding": {
                                            "kind": 151,
                                            "bindingList": [
                                                {
                                                    "kind": 190,
                                                    "binding": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 78,
                                                        "end": 80
                                                    },
                                                    "type": null,
                                                    "initializer": {
                                                        "kind": 201392131,
                                                        "text": "",
                                                        "rawText": "\"\"",
                                                        "flags": 96,
                                                        "start": 82,
                                                        "end": 85
                                                    },
                                                    "flags": 16,
                                                    "start": 78,
                                                    "end": 85
                                                }
                                            ],
                                            "flags": 17,
                                            "start": 78,
                                            "end": 85
                                        },
                                        "flags": 33554448,
                                        "start": 70,
                                        "end": 86
                                    },
                                    {
                                        "kind": 155,
                                        "declareKeyword": null,
                                        "varKeyword": {
                                            "kind": 37757002,
                                            "flags": 81,
                                            "start": 86,
                                            "end": 94
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
                                                        "start": 94,
                                                        "end": 96
                                                    },
                                                    "type": null,
                                                    "initializer": {
                                                        "kind": 201392131,
                                                        "text": "",
                                                        "rawText": "\"\"",
                                                        "flags": 96,
                                                        "start": 98,
                                                        "end": 101
                                                    },
                                                    "flags": 16,
                                                    "start": 94,
                                                    "end": 101
                                                }
                                            ],
                                            "flags": 16,
                                            "start": 94,
                                            "end": 101
                                        },
                                        "flags": 16,
                                        "start": 86,
                                        "end": 102
                                    }
                                ],
                                "flags": 17,
                                "start": 70,
                                "end": 102
                            },
                            "flags": 17,
                            "start": 66,
                            "end": 106
                        }
                    ],
                    "flags": 33,
                    "start": 24,
                    "end": 106
                },
                "flags": 32,
                "start": 22,
                "end": 108
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 108
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 108,
                "end": 117
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "default_param_1",
                "rawText": "default_param_1",
                "flags": 96,
                "start": 117,
                "end": 133
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 133,
                "end": 135
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
                                "flags": 65,
                                "start": 137,
                                "end": 195
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 195,
                                "end": 197
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
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 198,
                                            "end": 204
                                        },
                                        "optionalToken": null,
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 288,
                                                "arrowTypeParameterList": {
                                                    "kind": 292,
                                                    "parameters": [],
                                                    "trailingComma": false,
                                                    "flags": 2097152,
                                                    "start": 207,
                                                    "end": 207
                                                },
                                                "arrowToken": {
                                                    "kind": 10,
                                                    "flags": 64,
                                                    "start": 208,
                                                    "end": 211
                                                },
                                                "returnType": {
                                                    "kind": 139,
                                                    "bitwiseOrToken": null,
                                                    "bitwiseAndToken": null,
                                                    "type": {
                                                        "kind": 134234347,
                                                        "flags": 2097216,
                                                        "start": 211,
                                                        "end": 218
                                                    },
                                                    "flags": 2097152,
                                                    "start": 211,
                                                    "end": 218
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "start": 205,
                                                "end": 218
                                            },
                                            "flags": 2097152,
                                            "start": 205,
                                            "end": 218
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "f",
                                            "rawText": "f",
                                            "flags": 96,
                                            "start": 220,
                                            "end": 222
                                        },
                                        "flags": 32,
                                        "start": 198,
                                        "end": 222
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 197,
                                "end": 253
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
                                                "start": 263,
                                                "end": 274
                                            },
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 96,
                                                "start": 274,
                                                "end": 276
                                            },
                                            "flags": 81,
                                            "start": 263,
                                            "end": 277
                                        }
                                    ],
                                    "flags": 33,
                                    "start": 263,
                                    "end": 277
                                },
                                "flags": 32,
                                "start": 261,
                                "end": 281
                            },
                            "returnType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 2097216,
                                    "start": 254,
                                    "end": 261
                                },
                                "flags": 2097152,
                                "start": 254,
                                "end": 261
                            },
                            "flags": 16,
                            "start": 137,
                            "end": 281
                        }
                    ],
                    "flags": 33,
                    "start": 137,
                    "end": 281
                },
                "flags": 32,
                "start": 135,
                "end": 283
            },
            "returnType": null,
            "flags": 16,
            "start": 108,
            "end": 283
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 283,
                "end": 293
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "default_param_2",
                "rawText": "default_param_2",
                "flags": 96,
                "start": 293,
                "end": 309
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 309,
                "end": 311
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 162,
                            "lexicalKeyword": {
                                "kind": 41951307,
                                "flags": 81,
                                "start": 313,
                                "end": 370
                            },
                            "binding": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 370,
                                            "end": 372
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 201392131,
                                            "text": "",
                                            "rawText": "\"\"",
                                            "flags": 96,
                                            "start": 374,
                                            "end": 377
                                        },
                                        "flags": 16,
                                        "start": 370,
                                        "end": 377
                                    }
                                ],
                                "flags": 17,
                                "start": 370,
                                "end": 377
                            },
                            "flags": 33554448,
                            "start": 313,
                            "end": 378
                        },
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 65,
                                "start": 378,
                                "end": 389
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "f0",
                                "rawText": "f0",
                                "flags": 96,
                                "start": 389,
                                "end": 392
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
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 393,
                                            "end": 394
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 271,
                                            "asyncKeyword": null,
                                            "typeParameters": null,
                                            "parameters": [],
                                            "returnType": null,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "start": 399,
                                                "end": 402
                                            },
                                            "contents": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 402,
                                                "end": 404
                                            },
                                            "flags": 32,
                                            "start": 396,
                                            "end": 404
                                        },
                                        "flags": 34,
                                        "start": 393,
                                        "end": 404
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "start": 392,
                                "end": 405
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 41951307,
                                                "flags": 81,
                                                "start": 415,
                                                "end": 423
                                            },
                                            "binding": {
                                                "kind": 151,
                                                "bindingList": [
                                                    {
                                                        "kind": 190,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 423,
                                                            "end": 425
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 201392130,
                                                            "text": 0,
                                                            "rawText": "0",
                                                            "flags": 96,
                                                            "start": 427,
                                                            "end": 429
                                                        },
                                                        "flags": 16,
                                                        "start": 423,
                                                        "end": 429
                                                    }
                                                ],
                                                "flags": 17,
                                                "start": 423,
                                                "end": 429
                                            },
                                            "flags": 33554448,
                                            "start": 415,
                                            "end": 430
                                        },
                                        {
                                            "kind": 161,
                                            "returnKeyword": {
                                                "kind": 37757022,
                                                "flags": 81,
                                                "start": 430,
                                                "end": 441
                                            },
                                            "expression": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 441,
                                                    "end": 443
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 444,
                                                    "end": 444
                                                },
                                                "flags": 268435488,
                                                "start": 441,
                                                "end": 445
                                            },
                                            "flags": 81,
                                            "start": 430,
                                            "end": 446
                                        }
                                    ],
                                    "flags": 33,
                                    "start": 415,
                                    "end": 446
                                },
                                "flags": 32,
                                "start": 413,
                                "end": 477
                            },
                            "returnType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 2097216,
                                    "start": 406,
                                    "end": 413
                                },
                                "flags": 2097152,
                                "start": 406,
                                "end": 413
                            },
                            "flags": 16,
                            "start": 378,
                            "end": 477
                        },
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 65,
                                "start": 477,
                                "end": 488
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "f1",
                                "rawText": "f1",
                                "flags": 96,
                                "start": 488,
                                "end": 491
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
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 492,
                                            "end": 493
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 495,
                                            "end": 497
                                        },
                                        "flags": 34,
                                        "start": 492,
                                        "end": 497
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "start": 491,
                                "end": 528
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 41951307,
                                                "flags": 81,
                                                "start": 538,
                                                "end": 546
                                            },
                                            "binding": {
                                                "kind": 151,
                                                "bindingList": [
                                                    {
                                                        "kind": 190,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 96,
                                                            "start": 546,
                                                            "end": 548
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 201392130,
                                                            "text": 0,
                                                            "rawText": "0",
                                                            "flags": 96,
                                                            "start": 550,
                                                            "end": 552
                                                        },
                                                        "flags": 16,
                                                        "start": 546,
                                                        "end": 552
                                                    }
                                                ],
                                                "flags": 17,
                                                "start": 546,
                                                "end": 552
                                            },
                                            "flags": 33554448,
                                            "start": 538,
                                            "end": 553
                                        },
                                        {
                                            "kind": 161,
                                            "returnKeyword": {
                                                "kind": 37757022,
                                                "flags": 81,
                                                "start": 553,
                                                "end": 564
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 564,
                                                "end": 566
                                            },
                                            "flags": 81,
                                            "start": 553,
                                            "end": 567
                                        }
                                    ],
                                    "flags": 33,
                                    "start": 538,
                                    "end": 567
                                },
                                "flags": 32,
                                "start": 536,
                                "end": 571
                            },
                            "returnType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 2097216,
                                    "start": 529,
                                    "end": 536
                                },
                                "flags": 2097152,
                                "start": 529,
                                "end": 536
                            },
                            "flags": 16,
                            "start": 477,
                            "end": 571
                        }
                    ],
                    "flags": 33,
                    "start": 313,
                    "end": 571
                },
                "flags": 32,
                "start": 311,
                "end": 573
            },
            "returnType": null,
            "flags": 16,
            "start": 283,
            "end": 573
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 573,
                "end": 583
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "for_scope_let",
                "rawText": "for_scope_let",
                "flags": 96,
                "start": 583,
                "end": 597
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 597,
                "end": 599
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 162,
                            "lexicalKeyword": {
                                "kind": 41951307,
                                "flags": 81,
                                "start": 601,
                                "end": 607
                            },
                            "binding": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 607,
                                            "end": 609
                                        },
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234345,
                                                "flags": 2097216,
                                                "start": 610,
                                                "end": 617
                                            },
                                            "flags": 2097152,
                                            "start": 610,
                                            "end": 617
                                        },
                                        "initializer": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "start": 619,
                                            "end": 621
                                        },
                                        "flags": 16,
                                        "start": 607,
                                        "end": 621
                                    }
                                ],
                                "flags": 17,
                                "start": 607,
                                "end": 621
                            },
                            "flags": 33554448,
                            "start": 601,
                            "end": 622
                        },
                        {
                            "kind": 165,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 81,
                                "start": 622,
                                "end": 628
                            },
                            "initializer": {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 41951307,
                                    "flags": 64,
                                    "start": 622,
                                    "end": 633
                                },
                                "binding": {
                                    "kind": 151,
                                    "bindingList": [
                                        {
                                            "kind": 190,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 633,
                                                "end": 635
                                            },
                                            "type": null,
                                            "initializer": {
                                                "kind": 201392131,
                                                "text": "",
                                                "rawText": "\"\"",
                                                "flags": 96,
                                                "start": 637,
                                                "end": 640
                                            },
                                            "flags": 16,
                                            "start": 633,
                                            "end": 640
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 633,
                                    "end": 640
                                },
                                "flags": 33554448,
                                "start": 622,
                                "end": 640
                            },
                            "condition": null,
                            "incrementor": null,
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 669,
                                    "end": 669
                                },
                                "flags": 16,
                                "start": 667,
                                "end": 670
                            },
                            "flags": 81,
                            "start": 622,
                            "end": 670
                        }
                    ],
                    "flags": 33,
                    "start": 601,
                    "end": 670
                },
                "flags": 32,
                "start": 599,
                "end": 672
            },
            "returnType": null,
            "flags": 16,
            "start": 573,
            "end": 672
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 672,
                "end": 682
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "for_scope_var",
                "rawText": "for_scope_var",
                "flags": 96,
                "start": 682,
                "end": 696
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 696,
                "end": 698
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
                                "flags": 81,
                                "start": 700,
                                "end": 706
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
                                            "start": 706,
                                            "end": 708
                                        },
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234345,
                                                "flags": 2097216,
                                                "start": 709,
                                                "end": 716
                                            },
                                            "flags": 2097152,
                                            "start": 709,
                                            "end": 716
                                        },
                                        "initializer": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "start": 718,
                                            "end": 720
                                        },
                                        "flags": 16,
                                        "start": 706,
                                        "end": 720
                                    }
                                ],
                                "flags": 16,
                                "start": 706,
                                "end": 720
                            },
                            "flags": 16,
                            "start": 700,
                            "end": 721
                        },
                        {
                            "kind": 165,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 81,
                                "start": 721,
                                "end": 727
                            },
                            "initializer": {
                                "kind": 341,
                                "varKeyword": {
                                    "kind": 37757002,
                                    "flags": 64,
                                    "start": 729,
                                    "end": 732
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
                                                "start": 732,
                                                "end": 734
                                            },
                                            "type": null,
                                            "initializer": {
                                                "kind": 201392131,
                                                "text": "",
                                                "rawText": "\"\"",
                                                "flags": 96,
                                                "start": 736,
                                                "end": 739
                                            },
                                            "flags": 16,
                                            "start": 732,
                                            "end": 739
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 732,
                                    "end": 739
                                },
                                "flags": 16,
                                "start": 721,
                                "end": 770
                            },
                            "condition": null,
                            "incrementor": null,
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 774,
                                    "end": 774
                                },
                                "flags": 16,
                                "start": 772,
                                "end": 775
                            },
                            "flags": 81,
                            "start": 721,
                            "end": 775
                        }
                    ],
                    "flags": 33,
                    "start": 700,
                    "end": 775
                },
                "flags": 32,
                "start": 698,
                "end": 777
            },
            "returnType": null,
            "flags": 16,
            "start": 672,
            "end": 777
        }
    ],
    "isModule": true,
    "source": "function block_scope() {\n  let a: number = 0;\n  var b: number = 0;\n  {\n    let a = \"\";\n    var b = \"\";\n  }\n}\nfunction default_param_1() {\n  // function binding in scope in default expr\n  function f(\n    x: () => string = f // error: number ~> string\n  ): number {\n    return 0;\n  }\n}\n\nfunction default_param_2() {\n  // fn body bindings not visible from param scope\n  let a = \"\";\n  function f0(x = () => a): number {\n    let a = 0;\n    return x(); // error: string ~> number\n  }\n  function f1(x = b /* error: cannot resolve b */): number {\n    let b = 0;\n    return x;\n  }\n}\n\nfunction for_scope_let() {\n  let a: number = 0;\n  for (let a = \"\" /* ok: local to init */;;) {}\n}\n\nfunction for_scope_var() {\n  var a: number = 0;\n  for (var a = \"\" /* error: string ~> number */;;) {}\n}\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 778
}
```

### Printed

```javascript

 function block_scope() {
let a  = 0;,
var b  = 0;,
{ let a = "";, var b = ""; }
}, function default_param_1() {
function f(// error: number ~> string
): number {
return 0;
}
}, function default_param_2() {
let a = "";,
function f0(): number {
let a = 0;,
return ;// error: string ~> number
},
function f1(/* error: cannot resolve b */): number {
let b = 0;,
return x;
}
}, function for_scope_let() {
let a  = 0;,
for(let a = ""/* ok: local to init */;;){  }
}, function for_scope_var() {
var a  = 0;,
for(var a = ""/* error: string ~> number */;;){  }
} 
```

### Diagnostics

```javascript
✔ No errors
```

