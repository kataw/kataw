# Kataw parser test case

## Input

`````js
function excludeFirstFiveResults([first, second, third, fourth, fifth, ...rest]) {
  return rest;
}

function excludeFirstFiveResults2([first, second, third, fourth, fifth, ...rest] = DEFAULT_FIVE_RESULTS) {
  return rest;
}

function excludeFirstFiveResults3([firstResult, secondResult, thirdResult, fourthResult, fifthResult, ...rest] = [1, 2, 3, 4, 5]) {
  return rest;
}

const excludeFirstFiveResults5 = ([first, second, third, fourth, fifth, ...rest]) => {
  return rest;
}

class A {
  excludeFirstFiveResults([first, second, third, fourth, fifth, ...restOfResults]) {
    return restOfResults;
  }
}

promise.then(([firstResult, secondResult, thirdResult, fourthResult, fifthResult, ...rest]) => {
  return rest;
});
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
                "text": "excludeFirstFiveResults",
                "rawText": "excludeFirstFiveResults",
                "flags": 96,
                "start": 8,
                "end": 32
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 201,
                        "elementList": {
                            "kind": 324,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "first",
                                    "rawText": "first",
                                    "flags": 96,
                                    "start": 34,
                                    "end": 39
                                },
                                {
                                    "kind": 134299649,
                                    "text": "second",
                                    "rawText": "second",
                                    "flags": 96,
                                    "start": 40,
                                    "end": 47
                                },
                                {
                                    "kind": 134299649,
                                    "text": "third",
                                    "rawText": "third",
                                    "flags": 96,
                                    "start": 48,
                                    "end": 54
                                },
                                {
                                    "kind": 134299649,
                                    "text": "fourth",
                                    "rawText": "fourth",
                                    "flags": 96,
                                    "start": 55,
                                    "end": 62
                                },
                                {
                                    "kind": 134299649,
                                    "text": "fifth",
                                    "rawText": "fifth",
                                    "flags": 96,
                                    "start": 63,
                                    "end": 69
                                },
                                {
                                    "kind": 281,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "start": 70,
                                        "end": 74
                                    },
                                    "left": {
                                        "kind": 134299649,
                                        "text": "rest",
                                        "rawText": "rest",
                                        "flags": 96,
                                        "start": 74,
                                        "end": 78
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "right": null,
                                    "flags": 32,
                                    "start": 70,
                                    "end": 78
                                }
                            ],
                            "trailingComma": false,
                            "flags": 0,
                            "start": 34,
                            "end": 78
                        },
                        "flags": 32,
                        "start": 33,
                        "end": 79
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 33,
                "end": 79
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
                                "start": 82,
                                "end": 91
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "rest",
                                "rawText": "rest",
                                "flags": 96,
                                "start": 91,
                                "end": 96
                            },
                            "flags": 81,
                            "start": 82,
                            "end": 97
                        }
                    ],
                    "flags": 33,
                    "start": 82,
                    "end": 97
                },
                "flags": 32,
                "start": 80,
                "end": 99
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 99
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 99,
                "end": 109
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "excludeFirstFiveResults2",
                "rawText": "excludeFirstFiveResults2",
                "flags": 96,
                "start": 109,
                "end": 134
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 201,
                            "elementList": {
                                "kind": 324,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "first",
                                        "rawText": "first",
                                        "flags": 96,
                                        "start": 136,
                                        "end": 141
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "second",
                                        "rawText": "second",
                                        "flags": 96,
                                        "start": 142,
                                        "end": 149
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "third",
                                        "rawText": "third",
                                        "flags": 96,
                                        "start": 150,
                                        "end": 156
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "fourth",
                                        "rawText": "fourth",
                                        "flags": 96,
                                        "start": 157,
                                        "end": 164
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "fifth",
                                        "rawText": "fifth",
                                        "flags": 96,
                                        "start": 165,
                                        "end": 171
                                    },
                                    {
                                        "kind": 281,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 172,
                                            "end": 176
                                        },
                                        "left": {
                                            "kind": 134299649,
                                            "text": "rest",
                                            "rawText": "rest",
                                            "flags": 96,
                                            "start": 176,
                                            "end": 180
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 32,
                                        "start": 172,
                                        "end": 180
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 136,
                                "end": 180
                            },
                            "flags": 32,
                            "start": 135,
                            "end": 181
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 134299649,
                            "text": "DEFAULT_FIVE_RESULTS",
                            "rawText": "DEFAULT_FIVE_RESULTS",
                            "flags": 96,
                            "start": 183,
                            "end": 204
                        },
                        "flags": 34,
                        "start": 135,
                        "end": 204
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 135,
                "end": 204
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
                                "start": 207,
                                "end": 216
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "rest",
                                "rawText": "rest",
                                "flags": 96,
                                "start": 216,
                                "end": 221
                            },
                            "flags": 81,
                            "start": 207,
                            "end": 222
                        }
                    ],
                    "flags": 33,
                    "start": 207,
                    "end": 222
                },
                "flags": 32,
                "start": 205,
                "end": 224
            },
            "returnType": null,
            "flags": 16,
            "start": 99,
            "end": 224
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 224,
                "end": 234
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "excludeFirstFiveResults3",
                "rawText": "excludeFirstFiveResults3",
                "flags": 96,
                "start": 234,
                "end": 259
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 201,
                            "elementList": {
                                "kind": 324,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "firstResult",
                                        "rawText": "firstResult",
                                        "flags": 96,
                                        "start": 261,
                                        "end": 272
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "secondResult",
                                        "rawText": "secondResult",
                                        "flags": 96,
                                        "start": 273,
                                        "end": 286
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "thirdResult",
                                        "rawText": "thirdResult",
                                        "flags": 96,
                                        "start": 287,
                                        "end": 299
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "fourthResult",
                                        "rawText": "fourthResult",
                                        "flags": 96,
                                        "start": 300,
                                        "end": 313
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "fifthResult",
                                        "rawText": "fifthResult",
                                        "flags": 96,
                                        "start": 314,
                                        "end": 326
                                    },
                                    {
                                        "kind": 281,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 327,
                                            "end": 331
                                        },
                                        "left": {
                                            "kind": 134299649,
                                            "text": "rest",
                                            "rawText": "rest",
                                            "flags": 96,
                                            "start": 331,
                                            "end": 335
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 32,
                                        "start": 327,
                                        "end": 335
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 261,
                                "end": 335
                            },
                            "flags": 32,
                            "start": 260,
                            "end": 336
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "start": 340,
                                        "end": 341
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 96,
                                        "start": 342,
                                        "end": 344
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 3,
                                        "rawText": "3",
                                        "flags": 96,
                                        "start": 345,
                                        "end": 347
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 4,
                                        "rawText": "4",
                                        "flags": 96,
                                        "start": 348,
                                        "end": 350
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 5,
                                        "rawText": "5",
                                        "flags": 96,
                                        "start": 351,
                                        "end": 353
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 340,
                                "end": 353
                            },
                            "flags": 32,
                            "start": 338,
                            "end": 354
                        },
                        "flags": 34,
                        "start": 260,
                        "end": 354
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 260,
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
                                "start": 357,
                                "end": 366
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "rest",
                                "rawText": "rest",
                                "flags": 96,
                                "start": 366,
                                "end": 371
                            },
                            "flags": 81,
                            "start": 357,
                            "end": 372
                        }
                    ],
                    "flags": 33,
                    "start": 357,
                    "end": 372
                },
                "flags": 32,
                "start": 355,
                "end": 374
            },
            "returnType": null,
            "flags": 16,
            "start": 224,
            "end": 374
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 374,
                "end": 381
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "excludeFirstFiveResults5",
                            "rawText": "excludeFirstFiveResults5",
                            "flags": 96,
                            "start": 381,
                            "end": 406
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
                                        "kind": 201,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 281,
                                                    "ellipsisToken": {
                                                        "kind": 524302,
                                                        "flags": 64,
                                                        "start": 447,
                                                        "end": 451
                                                    },
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "rest",
                                                        "rawText": "rest",
                                                        "flags": 96,
                                                        "start": 451,
                                                        "end": 455
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "right": null,
                                                    "flags": 1073741856,
                                                    "start": 447,
                                                    "end": 455
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "fifth",
                                                    "rawText": "fifth",
                                                    "flags": 96,
                                                    "start": 440,
                                                    "end": 446
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "fourth",
                                                    "rawText": "fourth",
                                                    "flags": 96,
                                                    "start": 432,
                                                    "end": 439
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "third",
                                                    "rawText": "third",
                                                    "flags": 96,
                                                    "start": 425,
                                                    "end": 431
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "second",
                                                    "rawText": "second",
                                                    "flags": 96,
                                                    "start": 417,
                                                    "end": 424
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "first",
                                                    "rawText": "first",
                                                    "flags": 96,
                                                    "start": 411,
                                                    "end": 416
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 411,
                                            "end": 455
                                        },
                                        "flags": 32,
                                        "start": 410,
                                        "end": 456
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2,
                                "start": 410,
                                "end": 457
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 457,
                                "end": 460
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
                                                "start": 462,
                                                "end": 471
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "rest",
                                                "rawText": "rest",
                                                "flags": 96,
                                                "start": 471,
                                                "end": 476
                                            },
                                            "flags": 81,
                                            "start": 462,
                                            "end": 477
                                        }
                                    ],
                                    "flags": 33,
                                    "start": 462,
                                    "end": 477
                                },
                                "flags": 32,
                                "start": 460,
                                "end": 479
                            },
                            "flags": 34,
                            "start": 408,
                            "end": 479
                        },
                        "flags": 16,
                        "start": 381,
                        "end": 479
                    }
                ],
                "flags": 16777232,
                "start": 381,
                "end": 479
            },
            "flags": 33554448,
            "start": 374,
            "end": 479
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 479,
                "end": 486
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "start": 486,
                "end": 488
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "excludeFirstFiveResults",
                                    "rawText": "excludeFirstFiveResults",
                                    "flags": 96,
                                    "start": 490,
                                    "end": 516
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 201,
                                            "elementList": {
                                                "kind": 324,
                                                "elements": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "first",
                                                        "rawText": "first",
                                                        "flags": 96,
                                                        "start": 518,
                                                        "end": 523
                                                    },
                                                    {
                                                        "kind": 134299649,
                                                        "text": "second",
                                                        "rawText": "second",
                                                        "flags": 96,
                                                        "start": 524,
                                                        "end": 531
                                                    },
                                                    {
                                                        "kind": 134299649,
                                                        "text": "third",
                                                        "rawText": "third",
                                                        "flags": 96,
                                                        "start": 532,
                                                        "end": 538
                                                    },
                                                    {
                                                        "kind": 134299649,
                                                        "text": "fourth",
                                                        "rawText": "fourth",
                                                        "flags": 96,
                                                        "start": 539,
                                                        "end": 546
                                                    },
                                                    {
                                                        "kind": 134299649,
                                                        "text": "fifth",
                                                        "rawText": "fifth",
                                                        "flags": 96,
                                                        "start": 547,
                                                        "end": 553
                                                    },
                                                    {
                                                        "kind": 281,
                                                        "ellipsisToken": {
                                                            "kind": 524302,
                                                            "flags": 64,
                                                            "start": 554,
                                                            "end": 558
                                                        },
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "restOfResults",
                                                            "rawText": "restOfResults",
                                                            "flags": 96,
                                                            "start": 558,
                                                            "end": 571
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "right": null,
                                                        "flags": 32,
                                                        "start": 554,
                                                        "end": 571
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "start": 518,
                                                "end": 571
                                            },
                                            "flags": 32,
                                            "start": 517,
                                            "end": 572
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 517,
                                    "end": 573
                                },
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
                                                    "flags": 81,
                                                    "start": 575,
                                                    "end": 586
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "restOfResults",
                                                    "rawText": "restOfResults",
                                                    "flags": 96,
                                                    "start": 586,
                                                    "end": 600
                                                },
                                                "flags": 81,
                                                "start": 575,
                                                "end": 601
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 575,
                                        "end": 601
                                    },
                                    "flags": 32,
                                    "start": 573,
                                    "end": 605
                                },
                                "flags": 0,
                                "start": 516,
                                "end": 605
                            },
                            "flags": 0,
                            "start": 490,
                            "end": 605
                        }
                    ],
                    "flags": 32,
                    "start": 490,
                    "end": 605
                },
                "flags": 488,
                "start": 32,
                "end": 607
            },
            "flags": 17,
            "start": 479,
            "end": 607
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "promise",
                        "rawText": "promise",
                        "flags": 96,
                        "start": 607,
                        "end": 616
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "then",
                        "rawText": "then",
                        "flags": 96,
                        "start": 617,
                        "end": 621
                    },
                    "flags": 536870944,
                    "start": 607,
                    "end": 621
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 201,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 281,
                                                    "ellipsisToken": {
                                                        "kind": 524302,
                                                        "flags": 64,
                                                        "start": 690,
                                                        "end": 694
                                                    },
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "rest",
                                                        "rawText": "rest",
                                                        "flags": 96,
                                                        "start": 694,
                                                        "end": 698
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "right": null,
                                                    "flags": 1073741856,
                                                    "start": 690,
                                                    "end": 698
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "fifthResult",
                                                    "rawText": "fifthResult",
                                                    "flags": 96,
                                                    "start": 677,
                                                    "end": 689
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "fourthResult",
                                                    "rawText": "fourthResult",
                                                    "flags": 96,
                                                    "start": 663,
                                                    "end": 676
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "thirdResult",
                                                    "rawText": "thirdResult",
                                                    "flags": 96,
                                                    "start": 650,
                                                    "end": 662
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "secondResult",
                                                    "rawText": "secondResult",
                                                    "flags": 96,
                                                    "start": 636,
                                                    "end": 649
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "firstResult",
                                                    "rawText": "firstResult",
                                                    "flags": 96,
                                                    "start": 624,
                                                    "end": 635
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 624,
                                            "end": 698
                                        },
                                        "flags": 32,
                                        "start": 623,
                                        "end": 699
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2,
                                "start": 623,
                                "end": 700
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 700,
                                "end": 703
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
                                                "start": 705,
                                                "end": 714
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "rest",
                                                "rawText": "rest",
                                                "flags": 96,
                                                "start": 714,
                                                "end": 719
                                            },
                                            "flags": 81,
                                            "start": 705,
                                            "end": 720
                                        }
                                    ],
                                    "flags": 33,
                                    "start": 705,
                                    "end": 720
                                },
                                "flags": 32,
                                "start": 703,
                                "end": 722
                            },
                            "flags": 34,
                            "start": 622,
                            "end": 722
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 622,
                    "end": 722
                },
                "flags": 268435488,
                "start": 607,
                "end": 723
            },
            "flags": 16,
            "start": 607,
            "end": 724
        }
    ],
    "isModule": false,
    "source": "function excludeFirstFiveResults([first, second, third, fourth, fifth, ...rest]) {\n  return rest;\n}\n\nfunction excludeFirstFiveResults2([first, second, third, fourth, fifth, ...rest] = DEFAULT_FIVE_RESULTS) {\n  return rest;\n}\n\nfunction excludeFirstFiveResults3([firstResult, secondResult, thirdResult, fourthResult, fifthResult, ...rest] = [1, 2, 3, 4, 5]) {\n  return rest;\n}\n\nconst excludeFirstFiveResults5 = ([first, second, third, fourth, fifth, ...rest]) => {\n  return rest;\n}\n\nclass A {\n  excludeFirstFiveResults([first, second, third, fourth, fifth, ...restOfResults]) {\n    return restOfResults;\n  }\n}\n\npromise.then(([firstResult, secondResult, thirdResult, fourthResult, fifthResult, ...rest]) => {\n  return rest;\n});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 724
}
```

### Printed

```javascript

function excludeFirstFiveResults() {
  return  rest;
}
function excludeFirstFiveResults2() {
  return  rest;
}
function excludeFirstFiveResults3() {
  return  rest;
}
const excludeFirstFiveResults5 = () =>  {
  return  rest;
};
class A {
  excludeFirstFiveResults() {
    return  restOfResults;
  }
}
promise.then(() =>  {
  return  rest;
});
```

### Diagnostics

```javascript
✔ No errors
```

