# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, next: true }
`````

## Input

`````js
let await;
class C {
  static {
    let await; // illegal, cannot declare a new binding for await
    let { await } = {}; // illegal, cannot declare a new binding for await
    let { await: other } = {}; // legal
    await; // illegal
    await(1); // illegal
    function await() {}; // illegal
    class await {}; // illegal
    ({ await }); // illegal short-hand property reference
    ({ [await]: 1 }); // illegal
    class D {
      await = 1; // legal
      x = await; // legal (initializers have an implicit function boundary)
      [await] = 1; // illegal (computed property names are evaluated outside of a class body
    };
    (function await() {}); // legal, 'await' in function expression name not bound inside of static block
    (class await {}); // legal, 'await' in class expression name not bound inside of static block
    (function () { return await; }); // legal, 'await' is inside of a new function boundary
    (() => await); // legal, 'await' is inside of a new function boundary
    await: // illegal, 'await' cannot be used as a label
      break await; // illegal, 'await' cannot be used as a label
  }
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
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "await",
                            "rawText": "await",
                            "flags": 96,
                            "start": 3,
                            "end": 9
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 9
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 9
            },
            "flags": 33554448,
            "start": 0,
            "end": 10
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 10,
                "end": 16
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 16,
                "end": 18
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 305,
                            "decorators": null,
                            "declaredKeyword": null,
                            "staticKeyword": null,
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 41951307,
                                                "flags": 81,
                                                "start": 31,
                                                "end": 39
                                            },
                                            "binding": {
                                                "kind": 151,
                                                "bindingList": [
                                                    {
                                                        "kind": 190,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "await",
                                                            "rawText": "await",
                                                            "flags": 96,
                                                            "start": 39,
                                                            "end": 45
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 16,
                                                        "start": 39,
                                                        "end": 45
                                                    }
                                                ],
                                                "flags": 17,
                                                "start": 39,
                                                "end": 45
                                            },
                                            "flags": 33554448,
                                            "start": 31,
                                            "end": 46
                                        },
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 41951307,
                                                "flags": 81,
                                                "start": 46,
                                                "end": 105
                                            },
                                            "binding": {
                                                "kind": 151,
                                                "bindingList": [
                                                    {
                                                        "kind": 190,
                                                        "binding": {
                                                            "kind": 212,
                                                            "propertyList": {
                                                                "kind": 213,
                                                                "properties": [
                                                                    {
                                                                        "kind": 134299649,
                                                                        "text": "await",
                                                                        "rawText": "await",
                                                                        "flags": 96,
                                                                        "start": 107,
                                                                        "end": 113
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "start": 107,
                                                                "end": 113
                                                            },
                                                            "flags": 32,
                                                            "start": 105,
                                                            "end": 115
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 220,
                                                            "propertyList": {
                                                                "kind": 218,
                                                                "properties": [],
                                                                "trailingComma": false,
                                                                "flags": 16,
                                                                "start": 119,
                                                                "end": 119
                                                            },
                                                            "flags": 48,
                                                            "start": 117,
                                                            "end": 120
                                                        },
                                                        "flags": 16,
                                                        "start": 105,
                                                        "end": 120
                                                    }
                                                ],
                                                "flags": 17,
                                                "start": 105,
                                                "end": 120
                                            },
                                            "flags": 33554448,
                                            "start": 46,
                                            "end": 121
                                        },
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 41951307,
                                                "flags": 81,
                                                "start": 121,
                                                "end": 180
                                            },
                                            "binding": {
                                                "kind": 151,
                                                "bindingList": [
                                                    {
                                                        "kind": 190,
                                                        "binding": {
                                                            "kind": 212,
                                                            "propertyList": {
                                                                "kind": 213,
                                                                "properties": [
                                                                    {
                                                                        "kind": 329,
                                                                        "ellipsisToken": null,
                                                                        "key": {
                                                                            "kind": 134299649,
                                                                            "text": "await",
                                                                            "rawText": "await",
                                                                            "flags": 96,
                                                                            "start": 182,
                                                                            "end": 188
                                                                        },
                                                                        "value": {
                                                                            "kind": 134299649,
                                                                            "text": "other",
                                                                            "rawText": "other",
                                                                            "flags": 96,
                                                                            "start": 189,
                                                                            "end": 195
                                                                        },
                                                                        "initializer": null,
                                                                        "flags": 32,
                                                                        "start": 182,
                                                                        "end": 195
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "start": 182,
                                                                "end": 195
                                                            },
                                                            "flags": 32,
                                                            "start": 180,
                                                            "end": 197
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 220,
                                                            "propertyList": {
                                                                "kind": 218,
                                                                "properties": [],
                                                                "trailingComma": false,
                                                                "flags": 16,
                                                                "start": 201,
                                                                "end": 201
                                                            },
                                                            "flags": 48,
                                                            "start": 199,
                                                            "end": 202
                                                        },
                                                        "flags": 16,
                                                        "start": 180,
                                                        "end": 202
                                                    }
                                                ],
                                                "flags": 17,
                                                "start": 180,
                                                "end": 202
                                            },
                                            "flags": 33554448,
                                            "start": 121,
                                            "end": 203
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "await",
                                                "rawText": "await",
                                                "flags": 96,
                                                "start": 203,
                                                "end": 222
                                            },
                                            "flags": 16,
                                            "start": 203,
                                            "end": 223
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "await",
                                                    "rawText": "await",
                                                    "flags": 96,
                                                    "start": 223,
                                                    "end": 244
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [
                                                        {
                                                            "kind": 201392130,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 96,
                                                            "start": 245,
                                                            "end": 246
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 245,
                                                    "end": 246
                                                },
                                                "flags": 268435488,
                                                "start": 223,
                                                "end": 247
                                            },
                                            "flags": 16,
                                            "start": 223,
                                            "end": 248
                                        },
                                        {
                                            "kind": 176,
                                            "declareKeyword": null,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 65,
                                                "start": 248,
                                                "end": 272
                                            },
                                            "generatorToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "await",
                                                "rawText": "await",
                                                "flags": 96,
                                                "start": 272,
                                                "end": 278
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 278,
                                                "end": 280
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 282,
                                                    "end": 282
                                                },
                                                "flags": 32,
                                                "start": 280,
                                                "end": 283
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 16,
                                            "start": 248,
                                            "end": 283
                                        },
                                        {
                                            "kind": 168,
                                            "flags": 16,
                                            "start": 283,
                                            "end": 284
                                        },
                                        {
                                            "kind": 178,
                                            "declareKeyword": null,
                                            "decorators": null,
                                            "classKeyword": {
                                                "kind": 37822544,
                                                "flags": 81,
                                                "start": 284,
                                                "end": 305
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "await",
                                                "rawText": "await",
                                                "flags": 96,
                                                "start": 305,
                                                "end": 311
                                            },
                                            "typeParameters": null,
                                            "tail": {
                                                "kind": 277,
                                                "classHeritage": null,
                                                "body": {
                                                    "kind": 303,
                                                    "elements": [],
                                                    "flags": 32,
                                                    "start": 313,
                                                    "end": 313
                                                },
                                                "flags": 311,
                                                "start": 32,
                                                "end": 314
                                            },
                                            "flags": 17,
                                            "start": 284,
                                            "end": 314
                                        },
                                        {
                                            "kind": 168,
                                            "flags": 16,
                                            "start": 314,
                                            "end": 315
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 220,
                                                    "propertyList": {
                                                        "kind": 218,
                                                        "properties": [
                                                            {
                                                                "kind": 134299649,
                                                                "text": "await",
                                                                "rawText": "await",
                                                                "flags": 96,
                                                                "start": 333,
                                                                "end": 339
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 16,
                                                        "start": 333,
                                                        "end": 339
                                                    },
                                                    "flags": 48,
                                                    "start": 332,
                                                    "end": 341
                                                },
                                                "flags": 32,
                                                "start": 315,
                                                "end": 342
                                            },
                                            "flags": 16,
                                            "start": 315,
                                            "end": 343
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 220,
                                                    "propertyList": {
                                                        "kind": 218,
                                                        "properties": [
                                                            {
                                                                "kind": 219,
                                                                "generatorToken": null,
                                                                "left": {
                                                                    "kind": 194,
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "text": "await",
                                                                        "rawText": "await",
                                                                        "flags": 96,
                                                                        "start": 393,
                                                                        "end": 398
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 391,
                                                                    "end": 399
                                                                },
                                                                "right": {
                                                                    "kind": 201392130,
                                                                    "text": 1,
                                                                    "rawText": "1",
                                                                    "flags": 96,
                                                                    "start": 400,
                                                                    "end": 402
                                                                },
                                                                "flags": 32,
                                                                "start": 391,
                                                                "end": 402
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 16,
                                                        "start": 391,
                                                        "end": 402
                                                    },
                                                    "flags": 48,
                                                    "start": 390,
                                                    "end": 404
                                                },
                                                "flags": 32,
                                                "start": 343,
                                                "end": 405
                                            },
                                            "flags": 16,
                                            "start": 343,
                                            "end": 406
                                        },
                                        {
                                            "kind": 178,
                                            "declareKeyword": null,
                                            "decorators": null,
                                            "classKeyword": {
                                                "kind": 37822544,
                                                "flags": 81,
                                                "start": 406,
                                                "end": 427
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "D",
                                                "rawText": "D",
                                                "flags": 96,
                                                "start": 427,
                                                "end": 429
                                            },
                                            "typeParameters": null,
                                            "tail": {
                                                "kind": 277,
                                                "classHeritage": null,
                                                "body": {
                                                    "kind": 303,
                                                    "elements": [
                                                        {
                                                            "kind": 280,
                                                            "decorators": null,
                                                            "declaredToken": null,
                                                            "staticToken": null,
                                                            "asyncKeyword": null,
                                                            "key": {
                                                                "kind": 134299649,
                                                                "text": "await",
                                                                "rawText": "await",
                                                                "flags": 96,
                                                                "start": 431,
                                                                "end": 443
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 201392130,
                                                                "text": 1,
                                                                "rawText": "1",
                                                                "flags": 96,
                                                                "start": 445,
                                                                "end": 447
                                                            },
                                                            "flags": 32,
                                                            "start": 431,
                                                            "end": 447
                                                        },
                                                        {
                                                            "kind": 317,
                                                            "flags": 96,
                                                            "start": 447,
                                                            "end": 448
                                                        },
                                                        {
                                                            "kind": 280,
                                                            "decorators": null,
                                                            "declaredToken": null,
                                                            "staticToken": null,
                                                            "asyncKeyword": null,
                                                            "key": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "start": 448,
                                                                "end": 465
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 134299649,
                                                                "text": "await",
                                                                "rawText": "await",
                                                                "flags": 96,
                                                                "start": 467,
                                                                "end": 473
                                                            },
                                                            "flags": 32,
                                                            "start": 448,
                                                            "end": 473
                                                        },
                                                        {
                                                            "kind": 317,
                                                            "flags": 96,
                                                            "start": 473,
                                                            "end": 474
                                                        },
                                                        {
                                                            "kind": 280,
                                                            "decorators": null,
                                                            "declaredToken": null,
                                                            "staticToken": null,
                                                            "asyncKeyword": null,
                                                            "key": {
                                                                "kind": 194,
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "await",
                                                                    "rawText": "await",
                                                                    "flags": 96,
                                                                    "start": 541,
                                                                    "end": 546
                                                                },
                                                                "flags": 32,
                                                                "start": 474,
                                                                "end": 547
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 201392130,
                                                                "text": 1,
                                                                "rawText": "1",
                                                                "flags": 96,
                                                                "start": 549,
                                                                "end": 551
                                                            },
                                                            "flags": 32,
                                                            "start": 474,
                                                            "end": 551
                                                        },
                                                        {
                                                            "kind": 317,
                                                            "flags": 96,
                                                            "start": 551,
                                                            "end": 552
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 431,
                                                    "end": 552
                                                },
                                                "flags": 429,
                                                "start": 32,
                                                "end": 632
                                            },
                                            "flags": 17,
                                            "start": 406,
                                            "end": 632
                                        },
                                        {
                                            "kind": 168,
                                            "flags": 16,
                                            "start": 632,
                                            "end": 633
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
                                                        "start": 639,
                                                        "end": 647
                                                    },
                                                    "generatorToken": null,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "await",
                                                        "rawText": "await",
                                                        "flags": 96,
                                                        "start": 647,
                                                        "end": 653
                                                    },
                                                    "formalParameters": {
                                                        "kind": 214,
                                                        "formalParameterList": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 653,
                                                        "end": 655
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [],
                                                            "flags": 32,
                                                            "start": 657,
                                                            "end": 657
                                                        },
                                                        "flags": 32,
                                                        "start": 655,
                                                        "end": 658
                                                    },
                                                    "typeParameters": null,
                                                    "returnType": null,
                                                    "flags": 32,
                                                    "start": 639,
                                                    "end": 658
                                                },
                                                "flags": 32,
                                                "start": 633,
                                                "end": 659
                                            },
                                            "flags": 16,
                                            "start": 633,
                                            "end": 660
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 189,
                                                    "decorators": null,
                                                    "classKeyword": {
                                                        "kind": 37822544,
                                                        "flags": 64,
                                                        "start": 745,
                                                        "end": 750
                                                    },
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "await",
                                                        "rawText": "await",
                                                        "flags": 96,
                                                        "start": 750,
                                                        "end": 756
                                                    },
                                                    "typeParameters": null,
                                                    "tail": {
                                                        "kind": 277,
                                                        "classHeritage": null,
                                                        "body": {
                                                            "kind": 303,
                                                            "elements": [],
                                                            "flags": 32,
                                                            "start": 758,
                                                            "end": 758
                                                        },
                                                        "flags": 756,
                                                        "start": 32,
                                                        "end": 759
                                                    },
                                                    "flags": 32,
                                                    "start": 745,
                                                    "end": 759
                                                },
                                                "flags": 32,
                                                "start": 660,
                                                "end": 760
                                            },
                                            "flags": 16,
                                            "start": 660,
                                            "end": 761
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
                                                        "start": 843,
                                                        "end": 851
                                                    },
                                                    "generatorToken": null,
                                                    "name": null,
                                                    "formalParameters": {
                                                        "kind": 214,
                                                        "formalParameterList": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 851,
                                                        "end": 854
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
                                                                        "start": 856,
                                                                        "end": 863
                                                                    },
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "text": "await",
                                                                        "rawText": "await",
                                                                        "flags": 96,
                                                                        "start": 863,
                                                                        "end": 869
                                                                    },
                                                                    "flags": 80,
                                                                    "start": 856,
                                                                    "end": 870
                                                                }
                                                            ],
                                                            "flags": 32,
                                                            "start": 856,
                                                            "end": 870
                                                        },
                                                        "flags": 32,
                                                        "start": 854,
                                                        "end": 872
                                                    },
                                                    "typeParameters": null,
                                                    "returnType": null,
                                                    "flags": 32,
                                                    "start": 843,
                                                    "end": 872
                                                },
                                                "flags": 32,
                                                "start": 761,
                                                "end": 873
                                            },
                                            "flags": 16,
                                            "start": 761,
                                            "end": 874
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 271,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 937,
                                                        "end": 940
                                                    },
                                                    "typeParameters": null,
                                                    "parameters": [],
                                                    "asyncKeyword": null,
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 134299649,
                                                        "text": "await",
                                                        "rawText": "await",
                                                        "flags": 96,
                                                        "start": 940,
                                                        "end": 946
                                                    },
                                                    "flags": 32,
                                                    "start": 935,
                                                    "end": 946
                                                },
                                                "flags": 32,
                                                "start": 874,
                                                "end": 947
                                            },
                                            "flags": 16,
                                            "start": 874,
                                            "end": 948
                                        },
                                        {
                                            "kind": 163,
                                            "label": {
                                                "kind": 134299649,
                                                "text": "await",
                                                "rawText": "await",
                                                "flags": 96,
                                                "start": 948,
                                                "end": 1013
                                            },
                                            "colonToken": {
                                                "kind": 21,
                                                "flags": 64,
                                                "start": 1013,
                                                "end": 1014
                                            },
                                            "statement": {
                                                "kind": 150,
                                                "breakKeyword": {
                                                    "kind": 37757005,
                                                    "flags": 81,
                                                    "start": 1014,
                                                    "end": 1072
                                                },
                                                "label": {
                                                    "kind": 134299649,
                                                    "text": "await",
                                                    "rawText": "await",
                                                    "flags": 96,
                                                    "start": 1072,
                                                    "end": 1078
                                                },
                                                "flags": 16,
                                                "start": 1014,
                                                "end": 1079
                                            },
                                            "flags": 17,
                                            "start": 948,
                                            "end": 1079
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 31,
                                    "end": 1079
                                },
                                "flags": 20,
                                "start": 0,
                                "end": 1129
                            },
                            "flags": 32,
                            "start": 20,
                            "end": 1129
                        }
                    ],
                    "flags": 32,
                    "start": 20,
                    "end": 1129
                },
                "flags": 18,
                "start": 32,
                "end": 1131
            },
            "flags": 17,
            "start": 10,
            "end": 1131
        }
    ],
    "isModule": false,
    "source": "let await;\nclass C {\n  static {\n    let await; // illegal, cannot declare a new binding for await\n    let { await } = {}; // illegal, cannot declare a new binding for await\n    let { await: other } = {}; // legal\n    await; // illegal\n    await(1); // illegal\n    function await() {}; // illegal\n    class await {}; // illegal\n    ({ await }); // illegal short-hand property reference\n    ({ [await]: 1 }); // illegal\n    class D {\n      await = 1; // legal\n      x = await; // legal (initializers have an implicit function boundary)\n      [await] = 1; // illegal (computed property names are evaluated outside of a class body\n    };\n    (function await() {}); // legal, 'await' in function expression name not bound inside of static block\n    (class await {}); // legal, 'await' in class expression name not bound inside of static block\n    (function () { return await; }); // legal, 'await' is inside of a new function boundary\n    (() => await); // legal, 'await' is inside of a new function boundary\n    await: // illegal, 'await' cannot be used as a label\n      break await; // illegal, 'await' cannot be used as a label\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 1131
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Await expression cannot be used inside class static block. - start: 39, end: 45
✖ Duplicate identifier - start: 113, end: 115
✖ Cannot redeclare block-scoped variable - start: 272, end: 278
✖ BindingIdentifier may not be `await` within class static blocks - start: 305, end: 311
✖ Await expression cannot be used inside class static block. - start: 305, end: 311
✖ Duplicate identifier - start: 305, end: 311

```

