# Kataw parser test case

## Input

`````js
function a(/* comment */) {} // comment
function b() {} // comment
function c(/* comment */ argA, argB, argC) {} // comment
call((/*object*/ row) => {});

function f1 /* f */() {}
function f2 (/* args */) {}
function f3 () /* returns */ {}
function f4 /* f */(/* args */) /* returns */ {}

function f5 /* f */(/* a */ a) {}
function f6 /* f */(a /* a */) {}
function f7 /* f */(/* a */ a) /* returns */ {}

const obj = {
  f1 /* f */() {},
  f2 (/* args */) {},
  f3 () /* returns */ {},
  f4 /* f */(/* args */) /* returns */ {},
};

(function f /* f */() {})();
(function f (/* args */) {})();
(function f () /* returns */ {})();
(function f /* f */(/* args */) /* returns */ {})();

class C1 {
  f/* f */() {}
}
class C2 {
  f(/* args */) {}
}
class C3 {
  f() /* returns */ {}
}
class C4 {
  f/* f */(/* args */) /* returns */ {}
}

function foo1()
// this is a function
{
  return 42
}

function foo2() // this is a function
{
  return 42
}

function foo3() { // this is a function
  return 42
}

function foo4() {
  // this is a function
  return 42;
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
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 10,
                "end": 25
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 27,
                    "end": 27
                },
                "flags": 32,
                "start": 25,
                "end": 28
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 28
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 28,
                "end": 48
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 96,
                "start": 48,
                "end": 50
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 50,
                "end": 52
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 54,
                    "end": 54
                },
                "flags": 32,
                "start": 52,
                "end": 55
            },
            "returnType": null,
            "flags": 16,
            "start": 28,
            "end": 55
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 55,
                "end": 75
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "c",
                "rawText": "c",
                "flags": 96,
                "start": 75,
                "end": 77
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "argA",
                        "rawText": "argA",
                        "flags": 96,
                        "start": 78,
                        "end": 96
                    },
                    {
                        "kind": 134299649,
                        "text": "argB",
                        "rawText": "argB",
                        "flags": 96,
                        "start": 97,
                        "end": 102
                    },
                    {
                        "kind": 134299649,
                        "text": "argC",
                        "rawText": "argC",
                        "flags": 96,
                        "start": 103,
                        "end": 108
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 77,
                "end": 109
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 111,
                    "end": 111
                },
                "flags": 32,
                "start": 109,
                "end": 112
            },
            "returnType": null,
            "flags": 16,
            "start": 55,
            "end": 112
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "call",
                    "rawText": "call",
                    "flags": 96,
                    "start": 112,
                    "end": 128
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "row",
                                    "rawText": "row",
                                    "flags": 96,
                                    "start": 130,
                                    "end": 144
                                }
                            ],
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 145,
                                "end": 148
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 150,
                                    "end": 150
                                },
                                "flags": 32,
                                "start": 148,
                                "end": 151
                            },
                            "flags": 32,
                            "start": 129,
                            "end": 151
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 129,
                    "end": 151
                },
                "flags": 268435488,
                "start": 112,
                "end": 152
            },
            "flags": 16,
            "start": 112,
            "end": 153
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 153,
                "end": 163
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f1",
                "rawText": "f1",
                "flags": 96,
                "start": 163,
                "end": 166
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 166,
                "end": 176
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 178,
                    "end": 178
                },
                "flags": 32,
                "start": 176,
                "end": 179
            },
            "returnType": null,
            "flags": 16,
            "start": 153,
            "end": 179
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 179,
                "end": 188
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f2",
                "rawText": "f2",
                "flags": 96,
                "start": 188,
                "end": 191
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 191,
                "end": 204
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 206,
                    "end": 206
                },
                "flags": 32,
                "start": 204,
                "end": 207
            },
            "returnType": null,
            "flags": 16,
            "start": 179,
            "end": 207
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 207,
                "end": 216
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f3",
                "rawText": "f3",
                "flags": 96,
                "start": 216,
                "end": 219
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 219,
                "end": 222
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 238,
                    "end": 238
                },
                "flags": 32,
                "start": 222,
                "end": 239
            },
            "returnType": null,
            "flags": 16,
            "start": 207,
            "end": 239
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 239,
                "end": 248
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f4",
                "rawText": "f4",
                "flags": 96,
                "start": 248,
                "end": 251
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 251,
                "end": 271
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 287,
                    "end": 287
                },
                "flags": 32,
                "start": 271,
                "end": 288
            },
            "returnType": null,
            "flags": 16,
            "start": 239,
            "end": 288
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 288,
                "end": 298
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f5",
                "rawText": "f5",
                "flags": 96,
                "start": 298,
                "end": 301
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 310,
                        "end": 319
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 301,
                "end": 320
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 322,
                    "end": 322
                },
                "flags": 32,
                "start": 320,
                "end": 323
            },
            "returnType": null,
            "flags": 16,
            "start": 288,
            "end": 323
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 323,
                "end": 332
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f6",
                "rawText": "f6",
                "flags": 96,
                "start": 332,
                "end": 335
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 344,
                        "end": 345
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 335,
                "end": 354
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 356,
                    "end": 356
                },
                "flags": 32,
                "start": 354,
                "end": 357
            },
            "returnType": null,
            "flags": 16,
            "start": 323,
            "end": 357
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 357,
                "end": 366
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f7",
                "rawText": "f7",
                "flags": 96,
                "start": 366,
                "end": 369
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 378,
                        "end": 387
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 369,
                "end": 388
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 404,
                    "end": 404
                },
                "flags": 32,
                "start": 388,
                "end": 405
            },
            "returnType": null,
            "flags": 16,
            "start": 357,
            "end": 405
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 405,
                "end": 412
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "start": 412,
                            "end": 416
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 351,
                                        "asyncKeyword": null,
                                        "asteriskToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "f1",
                                                "rawText": "f1",
                                                "flags": 96,
                                                "start": 420,
                                                "end": 425
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 33,
                                                "start": 434,
                                                "end": 435
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 437,
                                                    "end": 437
                                                },
                                                "flags": 32,
                                                "start": 435,
                                                "end": 438
                                            },
                                            "flags": 33,
                                            "start": 425,
                                            "end": 438
                                        },
                                        "flags": 32,
                                        "start": 420,
                                        "end": 438
                                    },
                                    {
                                        "kind": 351,
                                        "asyncKeyword": null,
                                        "asteriskToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "f2",
                                                "rawText": "f2",
                                                "flags": 96,
                                                "start": 439,
                                                "end": 444
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 33,
                                                "start": 446,
                                                "end": 457
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 459,
                                                    "end": 459
                                                },
                                                "flags": 32,
                                                "start": 457,
                                                "end": 460
                                            },
                                            "flags": 33,
                                            "start": 444,
                                            "end": 460
                                        },
                                        "flags": 32,
                                        "start": 439,
                                        "end": 460
                                    },
                                    {
                                        "kind": 351,
                                        "asyncKeyword": null,
                                        "asteriskToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "f3",
                                                "rawText": "f3",
                                                "flags": 96,
                                                "start": 461,
                                                "end": 466
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 33,
                                                "start": 468,
                                                "end": 469
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 485,
                                                    "end": 485
                                                },
                                                "flags": 32,
                                                "start": 469,
                                                "end": 486
                                            },
                                            "flags": 33,
                                            "start": 466,
                                            "end": 486
                                        },
                                        "flags": 32,
                                        "start": 461,
                                        "end": 486
                                    },
                                    {
                                        "kind": 351,
                                        "asyncKeyword": null,
                                        "asteriskToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "f4",
                                                "rawText": "f4",
                                                "flags": 96,
                                                "start": 487,
                                                "end": 492
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 33,
                                                "start": 501,
                                                "end": 512
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 528,
                                                    "end": 528
                                                },
                                                "flags": 32,
                                                "start": 512,
                                                "end": 529
                                            },
                                            "flags": 33,
                                            "start": 492,
                                            "end": 529
                                        },
                                        "flags": 32,
                                        "start": 487,
                                        "end": 529
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 17,
                                "start": 420,
                                "end": 530
                            },
                            "flags": 49,
                            "start": 418,
                            "end": 532
                        },
                        "flags": 16,
                        "start": 412,
                        "end": 532
                    }
                ],
                "flags": 16777232,
                "start": 412,
                "end": 532
            },
            "flags": 33554448,
            "start": 405,
            "end": 533
        },
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
                            "flags": 64,
                            "start": 536,
                            "end": 544
                        },
                        "asteriskToken": null,
                        "name": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 544,
                            "end": 546
                        },
                        "typeParameters": null,
                        "formalParameterList": {
                            "kind": 214,
                            "formalParameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 546,
                            "end": 556
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 558,
                                "end": 558
                            },
                            "flags": 32,
                            "start": 556,
                            "end": 559
                        },
                        "returnType": null,
                        "flags": 32,
                        "start": 536,
                        "end": 559
                    },
                    "flags": 32,
                    "start": 533,
                    "end": 560
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 561,
                    "end": 561
                },
                "flags": 268435488,
                "start": 533,
                "end": 562
            },
            "flags": 16,
            "start": 533,
            "end": 563
        },
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
                            "flags": 64,
                            "start": 565,
                            "end": 573
                        },
                        "asteriskToken": null,
                        "name": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 573,
                            "end": 575
                        },
                        "typeParameters": null,
                        "formalParameterList": {
                            "kind": 214,
                            "formalParameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 575,
                            "end": 588
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 590,
                                "end": 590
                            },
                            "flags": 32,
                            "start": 588,
                            "end": 591
                        },
                        "returnType": null,
                        "flags": 32,
                        "start": 565,
                        "end": 591
                    },
                    "flags": 32,
                    "start": 563,
                    "end": 592
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 593,
                    "end": 593
                },
                "flags": 268435488,
                "start": 563,
                "end": 594
            },
            "flags": 16,
            "start": 563,
            "end": 595
        },
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
                            "flags": 64,
                            "start": 597,
                            "end": 605
                        },
                        "asteriskToken": null,
                        "name": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 605,
                            "end": 607
                        },
                        "typeParameters": null,
                        "formalParameterList": {
                            "kind": 214,
                            "formalParameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 607,
                            "end": 610
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 626,
                                "end": 626
                            },
                            "flags": 32,
                            "start": 610,
                            "end": 627
                        },
                        "returnType": null,
                        "flags": 32,
                        "start": 597,
                        "end": 627
                    },
                    "flags": 32,
                    "start": 595,
                    "end": 628
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 629,
                    "end": 629
                },
                "flags": 268435488,
                "start": 595,
                "end": 630
            },
            "flags": 16,
            "start": 595,
            "end": 631
        },
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
                            "flags": 64,
                            "start": 633,
                            "end": 641
                        },
                        "asteriskToken": null,
                        "name": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 641,
                            "end": 643
                        },
                        "typeParameters": null,
                        "formalParameterList": {
                            "kind": 214,
                            "formalParameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 643,
                            "end": 663
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 679,
                                "end": 679
                            },
                            "flags": 32,
                            "start": 663,
                            "end": 680
                        },
                        "returnType": null,
                        "flags": 32,
                        "start": 633,
                        "end": 680
                    },
                    "flags": 32,
                    "start": 631,
                    "end": 681
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 682,
                    "end": 682
                },
                "flags": 268435488,
                "start": 631,
                "end": 683
            },
            "flags": 16,
            "start": 631,
            "end": 684
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 684,
                "end": 691
            },
            "name": {
                "kind": 134299649,
                "text": "C1",
                "rawText": "C1",
                "flags": 96,
                "start": 691,
                "end": 694
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
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 696,
                                    "end": 700
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 708,
                                    "end": 709
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 711,
                                        "end": 711
                                    },
                                    "flags": 32,
                                    "start": 709,
                                    "end": 712
                                },
                                "flags": 0,
                                "start": 700,
                                "end": 712
                            },
                            "flags": 0,
                            "start": 696,
                            "end": 712
                        }
                    ],
                    "flags": 32,
                    "start": 696,
                    "end": 712
                },
                "flags": 694,
                "start": 32,
                "end": 714
            },
            "flags": 17,
            "start": 684,
            "end": 714
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 714,
                "end": 720
            },
            "name": {
                "kind": 134299649,
                "text": "C2",
                "rawText": "C2",
                "flags": 96,
                "start": 720,
                "end": 723
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
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 725,
                                    "end": 729
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 730,
                                    "end": 741
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 743,
                                        "end": 743
                                    },
                                    "flags": 32,
                                    "start": 741,
                                    "end": 744
                                },
                                "flags": 0,
                                "start": 729,
                                "end": 744
                            },
                            "flags": 0,
                            "start": 725,
                            "end": 744
                        }
                    ],
                    "flags": 32,
                    "start": 725,
                    "end": 744
                },
                "flags": 723,
                "start": 32,
                "end": 746
            },
            "flags": 17,
            "start": 714,
            "end": 746
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 746,
                "end": 752
            },
            "name": {
                "kind": 134299649,
                "text": "C3",
                "rawText": "C3",
                "flags": 96,
                "start": 752,
                "end": 755
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
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 757,
                                    "end": 761
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 762,
                                    "end": 763
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 779,
                                        "end": 779
                                    },
                                    "flags": 32,
                                    "start": 763,
                                    "end": 780
                                },
                                "flags": 0,
                                "start": 761,
                                "end": 780
                            },
                            "flags": 0,
                            "start": 757,
                            "end": 780
                        }
                    ],
                    "flags": 32,
                    "start": 757,
                    "end": 780
                },
                "flags": 755,
                "start": 32,
                "end": 782
            },
            "flags": 17,
            "start": 746,
            "end": 782
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 782,
                "end": 788
            },
            "name": {
                "kind": 134299649,
                "text": "C4",
                "rawText": "C4",
                "flags": 96,
                "start": 788,
                "end": 791
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
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 793,
                                    "end": 797
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 805,
                                    "end": 816
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 832,
                                        "end": 832
                                    },
                                    "flags": 32,
                                    "start": 816,
                                    "end": 833
                                },
                                "flags": 0,
                                "start": 797,
                                "end": 833
                            },
                            "flags": 0,
                            "start": 793,
                            "end": 833
                        }
                    ],
                    "flags": 32,
                    "start": 793,
                    "end": 833
                },
                "flags": 791,
                "start": 32,
                "end": 835
            },
            "flags": 17,
            "start": 782,
            "end": 835
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 835,
                "end": 845
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo1",
                "rawText": "foo1",
                "flags": 96,
                "start": 845,
                "end": 850
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 850,
                "end": 852
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
                                "start": 876,
                                "end": 885
                            },
                            "expression": {
                                "kind": 201392130,
                                "text": 42,
                                "rawText": "42",
                                "flags": 96,
                                "start": 885,
                                "end": 888
                            },
                            "flags": 81,
                            "start": 876,
                            "end": 888
                        }
                    ],
                    "flags": 33,
                    "start": 876,
                    "end": 888
                },
                "flags": 32,
                "start": 852,
                "end": 890
            },
            "returnType": null,
            "flags": 16,
            "start": 835,
            "end": 890
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 890,
                "end": 900
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo2",
                "rawText": "foo2",
                "flags": 96,
                "start": 900,
                "end": 905
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 905,
                "end": 907
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
                                "start": 931,
                                "end": 940
                            },
                            "expression": {
                                "kind": 201392130,
                                "text": 42,
                                "rawText": "42",
                                "flags": 96,
                                "start": 940,
                                "end": 943
                            },
                            "flags": 81,
                            "start": 931,
                            "end": 943
                        }
                    ],
                    "flags": 33,
                    "start": 931,
                    "end": 943
                },
                "flags": 32,
                "start": 907,
                "end": 945
            },
            "returnType": null,
            "flags": 16,
            "start": 890,
            "end": 945
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 945,
                "end": 955
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo3",
                "rawText": "foo3",
                "flags": 96,
                "start": 955,
                "end": 960
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 960,
                "end": 962
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
                                "start": 964,
                                "end": 995
                            },
                            "expression": {
                                "kind": 201392130,
                                "text": 42,
                                "rawText": "42",
                                "flags": 96,
                                "start": 995,
                                "end": 998
                            },
                            "flags": 81,
                            "start": 964,
                            "end": 998
                        }
                    ],
                    "flags": 33,
                    "start": 964,
                    "end": 998
                },
                "flags": 32,
                "start": 962,
                "end": 1000
            },
            "returnType": null,
            "flags": 16,
            "start": 945,
            "end": 1000
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 1000,
                "end": 1010
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo4",
                "rawText": "foo4",
                "flags": 96,
                "start": 1010,
                "end": 1015
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 1015,
                "end": 1017
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
                                "start": 1019,
                                "end": 1052
                            },
                            "expression": {
                                "kind": 201392130,
                                "text": 42,
                                "rawText": "42",
                                "flags": 96,
                                "start": 1052,
                                "end": 1055
                            },
                            "flags": 81,
                            "start": 1019,
                            "end": 1056
                        }
                    ],
                    "flags": 33,
                    "start": 1019,
                    "end": 1056
                },
                "flags": 32,
                "start": 1017,
                "end": 1058
            },
            "returnType": null,
            "flags": 16,
            "start": 1000,
            "end": 1058
        }
    ],
    "isModule": false,
    "source": "function a(/* comment */) {} // comment\nfunction b() {} // comment\nfunction c(/* comment */ argA, argB, argC) {} // comment\ncall((/*object*/ row) => {});\n\nfunction f1 /* f */() {}\nfunction f2 (/* args */) {}\nfunction f3 () /* returns */ {}\nfunction f4 /* f */(/* args */) /* returns */ {}\n\nfunction f5 /* f */(/* a */ a) {}\nfunction f6 /* f */(a /* a */) {}\nfunction f7 /* f */(/* a */ a) /* returns */ {}\n\nconst obj = {\n  f1 /* f */() {},\n  f2 (/* args */) {},\n  f3 () /* returns */ {},\n  f4 /* f */(/* args */) /* returns */ {},\n};\n\n(function f /* f */() {})();\n(function f (/* args */) {})();\n(function f () /* returns */ {})();\n(function f /* f */(/* args */) /* returns */ {})();\n\nclass C1 {\n  f/* f */() {}\n}\nclass C2 {\n  f(/* args */) {}\n}\nclass C3 {\n  f() /* returns */ {}\n}\nclass C4 {\n  f/* f */(/* args */) /* returns */ {}\n}\n\nfunction foo1()\n// this is a function\n{\n  return 42\n}\n\nfunction foo2() // this is a function\n{\n  return 42\n}\n\nfunction foo3() { // this is a function\n  return 42\n}\n\nfunction foo4() {\n  // this is a function\n  return 42;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 1058
}
```

### Printed

```javascript

function a() {} // comment

function b() {} // comment

function c() {} // comment

call((/*object*/ row) =>  {});
function f1 /* f */() {}
function f2() {}
function f3() /* returns */ {}
function f4 /* f */() /* returns */ {}
function f5 /* f */() {}
function f6 /* f */() {}
function f7 /* f */() /* returns */ {}
const obj = {
  f1 /* f */() {},
  f2() {},
  f3() /* returns */ {},
  f4 /* f */() /* returns */ {}
};
(function f /* f */() {})();
(function f() {})();
(function f() /* returns */ {})();
(function f /* f */() /* returns */ {})();
class C1 {
  f /* f */() {}
}
class C2 {
  f() {}
}
class C3 {
  f() /* returns */ {}
}
class C4 {
  f /* f */() /* returns */ {}
}
function foo1() {
  return  42;
}
function foo2() // this is a function
 {
  return  42;
}
function foo3() {
  return  42;
}
function foo4() {
  // this is a function
  return  42;
}
```

### Diagnostics

```javascript
✔ No errors
```

