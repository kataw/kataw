# Kataw parser test case

## Input

`````js
const f = (argument1, argument2, argument3) =>
  (doSomethingWithArgument(argument1), doSomethingWithArgument(argument2),argument1);
(function(){
	return aLongIdentifierName, aLongIdentifierName, aLongIdentifierName, aLongIdentifierName;
});
aLongIdentifierName, aLongIdentifierName, aLongIdentifierName, aLongIdentifierName;
a.then(() => (aLongIdentifierName, aLongIdentifierName, aLongIdentifierName, aLongIdentifierName));
for (aLongIdentifierName = 0, aLongIdentifierName = 0, aLongIdentifierName = 0, aLongIdentifierName = 0; test; update) {}
(a = b ? c : function() { return 0; }),
  (a = b ? c : function() { return 0; }),
  (a = b ? c : function() { return 0; }),
  (a = b ? c : function() { return 0; }),
  (a = b ? c : function() { return 0; });

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 7
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
                                        "kind": 134299649,
                                        "text": "argument1",
                                        "rawText": "argument1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 11,
                                        "end": 20
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "argument2",
                                        "rawText": "argument2",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 21,
                                        "end": 31
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "argument3",
                                        "rawText": "argument3",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 42
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 43
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 43,
                                "end": 46
                            },
                            "contents": {
                                "kind": 121,
                                "expression": {
                                    "kind": 132,
                                    "expressions": [
                                        {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "doSomethingWithArgument",
                                                "rawText": "doSomethingWithArgument",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 50,
                                                "end": 73
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "argument1",
                                                        "rawText": "argument1",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 74,
                                                        "end": 83
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 74,
                                                "end": 83
                                            },
                                            "flags": 268435488,
                                            "transformFlags": 1,
                                            "start": 46,
                                            "end": 84
                                        },
                                        {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "doSomethingWithArgument",
                                                "rawText": "doSomethingWithArgument",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 85,
                                                "end": 109
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "argument2",
                                                        "rawText": "argument2",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 110,
                                                        "end": 119
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 110,
                                                "end": 119
                                            },
                                            "flags": 268435488,
                                            "transformFlags": 1,
                                            "start": 46,
                                            "end": 120
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "argument1",
                                            "rawText": "argument1",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 121,
                                            "end": 130
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 1024,
                                    "start": 46,
                                    "end": 131
                                },
                                "flags": 46,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 131
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 131
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 5,
                        "end": 131
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 5,
                "end": 131
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 132
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
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 134,
                        "end": 142
                    },
                    "asteriskToken": null,
                    "name": null,
                    "typeParameters": null,
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 143,
                        "end": 143
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
                                        "transformFlags": 0,
                                        "start": 145,
                                        "end": 153
                                    },
                                    "expression": {
                                        "kind": 132,
                                        "expressions": [
                                            {
                                                "kind": 134299649,
                                                "text": "aLongIdentifierName",
                                                "rawText": "aLongIdentifierName",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 153,
                                                "end": 173
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "aLongIdentifierName",
                                                "rawText": "aLongIdentifierName",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 174,
                                                "end": 194
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "aLongIdentifierName",
                                                "rawText": "aLongIdentifierName",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 195,
                                                "end": 215
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "aLongIdentifierName",
                                                "rawText": "aLongIdentifierName",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 216,
                                                "end": 236
                                            }
                                        ],
                                        "flags": 32,
                                        "transformFlags": 1024,
                                        "start": 153,
                                        "end": 236
                                    },
                                    "flags": 81,
                                    "transformFlags": 256,
                                    "start": 145,
                                    "end": 237
                                }
                            ],
                            "flags": 33,
                            "transformFlags": 0,
                            "start": 145,
                            "end": 237
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 144,
                        "end": 239
                    },
                    "returnType": null,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 134,
                    "end": 239
                },
                "flags": 132,
                "transformFlags": 0,
                "start": 33,
                "end": 240
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 132,
            "end": 241
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "aLongIdentifierName",
                        "rawText": "aLongIdentifierName",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 241,
                        "end": 261
                    },
                    {
                        "kind": 134299649,
                        "text": "aLongIdentifierName",
                        "rawText": "aLongIdentifierName",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 262,
                        "end": 282
                    },
                    {
                        "kind": 134299649,
                        "text": "aLongIdentifierName",
                        "rawText": "aLongIdentifierName",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 283,
                        "end": 303
                    },
                    {
                        "kind": 134299649,
                        "text": "aLongIdentifierName",
                        "rawText": "aLongIdentifierName",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 304,
                        "end": 324
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 241,
                "end": 324
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 241,
            "end": 325
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 325,
                        "end": 327
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "then",
                        "rawText": "then",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 328,
                        "end": 332
                    },
                    "flags": 97,
                    "transformFlags": 2,
                    "start": 325,
                    "end": 332
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
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 334,
                                "end": 334
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 335,
                                "end": 338
                            },
                            "contents": {
                                "kind": 121,
                                "expression": {
                                    "kind": 132,
                                    "expressions": [
                                        {
                                            "kind": 134299649,
                                            "text": "aLongIdentifierName",
                                            "rawText": "aLongIdentifierName",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 340,
                                            "end": 359
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "aLongIdentifierName",
                                            "rawText": "aLongIdentifierName",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 360,
                                            "end": 380
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "aLongIdentifierName",
                                            "rawText": "aLongIdentifierName",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 381,
                                            "end": 401
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "aLongIdentifierName",
                                            "rawText": "aLongIdentifierName",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 402,
                                            "end": 422
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 1024,
                                    "start": 338,
                                    "end": 423
                                },
                                "flags": 338,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 423
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 333,
                            "end": 423
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 333,
                    "end": 423
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 325,
                "end": 424
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 325,
            "end": 425
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "transformFlags": 0,
                "start": 425,
                "end": 429
            },
            "initializer": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "aLongIdentifierName",
                            "rawText": "aLongIdentifierName",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 431,
                            "end": 450
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 450,
                            "end": 452
                        },
                        "right": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 452,
                            "end": 454
                        },
                        "flags": 0,
                        "transformFlags": 128,
                        "start": 425,
                        "end": 454
                    },
                    {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "aLongIdentifierName",
                            "rawText": "aLongIdentifierName",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 455,
                            "end": 475
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 475,
                            "end": 477
                        },
                        "right": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 477,
                            "end": 479
                        },
                        "flags": 0,
                        "transformFlags": 128,
                        "start": 455,
                        "end": 479
                    },
                    {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "aLongIdentifierName",
                            "rawText": "aLongIdentifierName",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 480,
                            "end": 500
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 500,
                            "end": 502
                        },
                        "right": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 502,
                            "end": 504
                        },
                        "flags": 0,
                        "transformFlags": 128,
                        "start": 480,
                        "end": 504
                    },
                    {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "aLongIdentifierName",
                            "rawText": "aLongIdentifierName",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 505,
                            "end": 525
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 525,
                            "end": 527
                        },
                        "right": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 527,
                            "end": 529
                        },
                        "flags": 0,
                        "transformFlags": 128,
                        "start": 505,
                        "end": 529
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 425,
                "end": 529
            },
            "condition": {
                "kind": 134299649,
                "text": "update",
                "rawText": "update",
                "flags": 96,
                "transformFlags": 0,
                "start": 536,
                "end": 543
            },
            "incrementor": {
                "kind": 134299649,
                "text": "test",
                "rawText": "test",
                "flags": 96,
                "transformFlags": 0,
                "start": 530,
                "end": 535
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 546,
                    "end": 546
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 544,
                "end": 547
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 425,
            "end": 547
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 121,
                        "expression": {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 549,
                                "end": 550
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 550,
                                "end": 552
                            },
                            "right": {
                                "kind": 197,
                                "shortCircuit": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 552,
                                    "end": 554
                                },
                                "questionToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 554,
                                    "end": 556
                                },
                                "consequent": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 556,
                                    "end": 558
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 558,
                                    "end": 560
                                },
                                "alternate": {
                                    "kind": 177,
                                    "asyncKeyword": null,
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 560,
                                        "end": 569
                                    },
                                    "asteriskToken": null,
                                    "name": null,
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 570,
                                        "end": 570
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
                                                        "flags": 80,
                                                        "transformFlags": 0,
                                                        "start": 573,
                                                        "end": 580
                                                    },
                                                    "expression": {
                                                        "kind": 201392130,
                                                        "text": 0,
                                                        "rawText": "0",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 580,
                                                        "end": 582
                                                    },
                                                    "flags": 80,
                                                    "transformFlags": 256,
                                                    "start": 573,
                                                    "end": 583
                                                }
                                            ],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 573,
                                            "end": 583
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 571,
                                        "end": 585
                                    },
                                    "returnType": null,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 560,
                                    "end": 585
                                },
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 552,
                                "end": 585
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 547,
                            "end": 585
                        },
                        "flags": 547,
                        "transformFlags": 0,
                        "start": 35,
                        "end": 586
                    },
                    {
                        "kind": 121,
                        "expression": {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 591,
                                "end": 592
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 592,
                                "end": 594
                            },
                            "right": {
                                "kind": 197,
                                "shortCircuit": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 594,
                                    "end": 596
                                },
                                "questionToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 596,
                                    "end": 598
                                },
                                "consequent": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 598,
                                    "end": 600
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 600,
                                    "end": 602
                                },
                                "alternate": {
                                    "kind": 177,
                                    "asyncKeyword": null,
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 602,
                                        "end": 611
                                    },
                                    "asteriskToken": null,
                                    "name": null,
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 612,
                                        "end": 612
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
                                                        "flags": 80,
                                                        "transformFlags": 0,
                                                        "start": 615,
                                                        "end": 622
                                                    },
                                                    "expression": {
                                                        "kind": 201392130,
                                                        "text": 0,
                                                        "rawText": "0",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 622,
                                                        "end": 624
                                                    },
                                                    "flags": 80,
                                                    "transformFlags": 256,
                                                    "start": 615,
                                                    "end": 625
                                                }
                                            ],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 615,
                                            "end": 625
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 613,
                                        "end": 627
                                    },
                                    "returnType": null,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 602,
                                    "end": 627
                                },
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 594,
                                "end": 627
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 587,
                            "end": 627
                        },
                        "flags": 587,
                        "transformFlags": 0,
                        "start": 35,
                        "end": 628
                    },
                    {
                        "kind": 121,
                        "expression": {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 633,
                                "end": 634
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 634,
                                "end": 636
                            },
                            "right": {
                                "kind": 197,
                                "shortCircuit": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 636,
                                    "end": 638
                                },
                                "questionToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 638,
                                    "end": 640
                                },
                                "consequent": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 640,
                                    "end": 642
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 642,
                                    "end": 644
                                },
                                "alternate": {
                                    "kind": 177,
                                    "asyncKeyword": null,
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 644,
                                        "end": 653
                                    },
                                    "asteriskToken": null,
                                    "name": null,
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 654,
                                        "end": 654
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
                                                        "flags": 80,
                                                        "transformFlags": 0,
                                                        "start": 657,
                                                        "end": 664
                                                    },
                                                    "expression": {
                                                        "kind": 201392130,
                                                        "text": 0,
                                                        "rawText": "0",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 664,
                                                        "end": 666
                                                    },
                                                    "flags": 80,
                                                    "transformFlags": 256,
                                                    "start": 657,
                                                    "end": 667
                                                }
                                            ],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 657,
                                            "end": 667
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 655,
                                        "end": 669
                                    },
                                    "returnType": null,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 644,
                                    "end": 669
                                },
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 636,
                                "end": 669
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 629,
                            "end": 669
                        },
                        "flags": 629,
                        "transformFlags": 0,
                        "start": 35,
                        "end": 670
                    },
                    {
                        "kind": 121,
                        "expression": {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 675,
                                "end": 676
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 676,
                                "end": 678
                            },
                            "right": {
                                "kind": 197,
                                "shortCircuit": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 678,
                                    "end": 680
                                },
                                "questionToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 680,
                                    "end": 682
                                },
                                "consequent": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 682,
                                    "end": 684
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 684,
                                    "end": 686
                                },
                                "alternate": {
                                    "kind": 177,
                                    "asyncKeyword": null,
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 686,
                                        "end": 695
                                    },
                                    "asteriskToken": null,
                                    "name": null,
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 696,
                                        "end": 696
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
                                                        "flags": 80,
                                                        "transformFlags": 0,
                                                        "start": 699,
                                                        "end": 706
                                                    },
                                                    "expression": {
                                                        "kind": 201392130,
                                                        "text": 0,
                                                        "rawText": "0",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 706,
                                                        "end": 708
                                                    },
                                                    "flags": 80,
                                                    "transformFlags": 256,
                                                    "start": 699,
                                                    "end": 709
                                                }
                                            ],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 699,
                                            "end": 709
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 697,
                                        "end": 711
                                    },
                                    "returnType": null,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 686,
                                    "end": 711
                                },
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 678,
                                "end": 711
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 671,
                            "end": 711
                        },
                        "flags": 671,
                        "transformFlags": 0,
                        "start": 35,
                        "end": 712
                    },
                    {
                        "kind": 121,
                        "expression": {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 717,
                                "end": 718
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 718,
                                "end": 720
                            },
                            "right": {
                                "kind": 197,
                                "shortCircuit": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 720,
                                    "end": 722
                                },
                                "questionToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 722,
                                    "end": 724
                                },
                                "consequent": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 724,
                                    "end": 726
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 726,
                                    "end": 728
                                },
                                "alternate": {
                                    "kind": 177,
                                    "asyncKeyword": null,
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 728,
                                        "end": 737
                                    },
                                    "asteriskToken": null,
                                    "name": null,
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 738,
                                        "end": 738
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
                                                        "flags": 80,
                                                        "transformFlags": 0,
                                                        "start": 741,
                                                        "end": 748
                                                    },
                                                    "expression": {
                                                        "kind": 201392130,
                                                        "text": 0,
                                                        "rawText": "0",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 748,
                                                        "end": 750
                                                    },
                                                    "flags": 80,
                                                    "transformFlags": 256,
                                                    "start": 741,
                                                    "end": 751
                                                }
                                            ],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 741,
                                            "end": 751
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 739,
                                        "end": 753
                                    },
                                    "returnType": null,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 728,
                                    "end": 753
                                },
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 720,
                                "end": 753
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 713,
                            "end": 753
                        },
                        "flags": 713,
                        "transformFlags": 0,
                        "start": 35,
                        "end": 754
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 547,
                "end": 754
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 547,
            "end": 755
        }
    ],
    "isModule": false,
    "source": "const f = (argument1, argument2, argument3) =>\n  (doSomethingWithArgument(argument1), doSomethingWithArgument(argument2),argument1);\n(function(){\n\treturn aLongIdentifierName, aLongIdentifierName, aLongIdentifierName, aLongIdentifierName;\n});\naLongIdentifierName, aLongIdentifierName, aLongIdentifierName, aLongIdentifierName;\na.then(() => (aLongIdentifierName, aLongIdentifierName, aLongIdentifierName, aLongIdentifierName));\nfor (aLongIdentifierName = 0, aLongIdentifierName = 0, aLongIdentifierName = 0, aLongIdentifierName = 0; test; update) {}\n(a = b ? c : function() { return 0; }),\n  (a = b ? c : function() { return 0; }),\n  (a = b ? c : function() { return 0; }),\n  (a = b ? c : function() { return 0; }),\n  (a = b ? c : function() { return 0; });\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 756
}
```

### Printed

```javascript
const f = (argument1, argument2, argument3) =>
    (
      doSomethingWithArgument(argument1),
      doSomethingWithArgument(argument2),
      argument1
    );
(function () {
    return aLongIdentifierName,
    aLongIdentifierName,
    aLongIdentifierName,
    aLongIdentifierName;
  });

aLongIdentifierName,
aLongIdentifierName,
aLongIdentifierName,
aLongIdentifierName;

a.then(() =>
  (
    aLongIdentifierName,
    aLongIdentifierName,
    aLongIdentifierName,
    aLongIdentifierName
  ));

for (
  aLongIdentifierName = 0,
    aLongIdentifierName = 0,
    aLongIdentifierName = 0,
    aLongIdentifierName = 0;
  update;
  test
)
  {}

(a = b ? c : function () {
        return 0;
      }), (a = b ? c : function () {
        return 0;
      }), (a = b ? c : function () {
        return 0;
      }), (a = b ? c : function () {
        return 0;
      }), (a = b ? c : function () {
        return 0;
      });

```

### Diagnostics

```javascript
✔ No errors
```

