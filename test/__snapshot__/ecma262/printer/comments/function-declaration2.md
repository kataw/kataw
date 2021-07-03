# Kataw parser test case

## Input

`````js
function x (/*1*/) {}

function x(/*2*/) {}

function/*1*/ x/*2*/(/*3*/)/*4*/ {}

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
                "text": "x",
                "rawText": "x",
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
                "start": 12,
                "end": 12
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 20,
                    "end": 20
                },
                "flags": 32,
                "start": 18,
                "end": 21
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 21
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 21,
                "end": 31
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 31,
                "end": 33
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 34,
                "end": 34
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 42,
                    "end": 42
                },
                "flags": 32,
                "start": 40,
                "end": 43
            },
            "returnType": null,
            "flags": 16,
            "start": 21,
            "end": 43
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 43,
                "end": 53
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 53,
                "end": 60
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 66,
                "end": 66
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 79,
                    "end": 79
                },
                "flags": 32,
                "start": 72,
                "end": 80
            },
            "returnType": null,
            "flags": 16,
            "start": 43,
            "end": 80
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 80,
                "end": 90
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 90,
                "end": 92
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 93,
                "end": 93
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 109,
                    "end": 109
                },
                "flags": 32,
                "start": 107,
                "end": 110
            },
            "returnType": null,
            "flags": 16,
            "start": 80,
            "end": 110
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 110,
                "end": 130
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 96,
                "start": 130,
                "end": 132
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 133,
                "end": 133
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 136,
                    "end": 136
                },
                "flags": 32,
                "start": 134,
                "end": 137
            },
            "returnType": null,
            "flags": 16,
            "start": 110,
            "end": 137
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 137,
                "end": 157
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "c",
                "rawText": "c",
                "flags": 96,
                "start": 157,
                "end": 159
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
                        "start": 160,
                        "end": 178
                    },
                    {
                        "kind": 134299649,
                        "text": "argB",
                        "rawText": "argB",
                        "flags": 96,
                        "start": 179,
                        "end": 184
                    },
                    {
                        "kind": 134299649,
                        "text": "argC",
                        "rawText": "argC",
                        "flags": 96,
                        "start": 185,
                        "end": 190
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 160,
                "end": 190
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 193,
                    "end": 193
                },
                "flags": 32,
                "start": 191,
                "end": 194
            },
            "returnType": null,
            "flags": 16,
            "start": 137,
            "end": 194
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "call",
                    "rawText": "call",
                    "flags": 97,
                    "start": 194,
                    "end": 210
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
                                        "kind": 134299649,
                                        "text": "row",
                                        "rawText": "row",
                                        "flags": 96,
                                        "start": 212,
                                        "end": 226
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 212,
                                "end": 227
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 227,
                                "end": 230
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 232,
                                    "end": 232
                                },
                                "flags": 32,
                                "start": 230,
                                "end": 233
                            },
                            "flags": 32,
                            "start": 211,
                            "end": 233
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 211,
                    "end": 233
                },
                "flags": 268435488,
                "start": 194,
                "end": 234
            },
            "flags": 16,
            "start": 194,
            "end": 235
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 235,
                "end": 245
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f1",
                "rawText": "f1",
                "flags": 96,
                "start": 245,
                "end": 248
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 257,
                "end": 257
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 260,
                    "end": 260
                },
                "flags": 32,
                "start": 258,
                "end": 261
            },
            "returnType": null,
            "flags": 16,
            "start": 235,
            "end": 261
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 261,
                "end": 270
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f2",
                "rawText": "f2",
                "flags": 96,
                "start": 270,
                "end": 273
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 275,
                "end": 275
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 288,
                    "end": 288
                },
                "flags": 32,
                "start": 286,
                "end": 289
            },
            "returnType": null,
            "flags": 16,
            "start": 261,
            "end": 289
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 289,
                "end": 298
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f3",
                "rawText": "f3",
                "flags": 96,
                "start": 298,
                "end": 301
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 303,
                "end": 303
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 320,
                    "end": 320
                },
                "flags": 32,
                "start": 304,
                "end": 321
            },
            "returnType": null,
            "flags": 16,
            "start": 289,
            "end": 321
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 321,
                "end": 330
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f4",
                "rawText": "f4",
                "flags": 96,
                "start": 330,
                "end": 333
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 342,
                "end": 342
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 369,
                    "end": 369
                },
                "flags": 32,
                "start": 353,
                "end": 370
            },
            "returnType": null,
            "flags": 16,
            "start": 321,
            "end": 370
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 370,
                "end": 380
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f5",
                "rawText": "f5",
                "flags": 96,
                "start": 380,
                "end": 383
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
                        "start": 392,
                        "end": 401
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 392,
                "end": 401
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
                "start": 402,
                "end": 405
            },
            "returnType": null,
            "flags": 16,
            "start": 370,
            "end": 405
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 405,
                "end": 414
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f6",
                "rawText": "f6",
                "flags": 96,
                "start": 414,
                "end": 417
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
                        "start": 426,
                        "end": 427
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 426,
                "end": 427
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 438,
                    "end": 438
                },
                "flags": 32,
                "start": 436,
                "end": 439
            },
            "returnType": null,
            "flags": 16,
            "start": 405,
            "end": 439
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 439,
                "end": 448
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f7",
                "rawText": "f7",
                "flags": 96,
                "start": 448,
                "end": 451
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
                        "start": 460,
                        "end": 469
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 460,
                "end": 469
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 486,
                    "end": 486
                },
                "flags": 32,
                "start": 470,
                "end": 487
            },
            "returnType": null,
            "flags": 16,
            "start": 439,
            "end": 487
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 487,
                "end": 494
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
                            "start": 494,
                            "end": 498
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
                                                "flags": 97,
                                                "start": 502,
                                                "end": 507
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 33,
                                                "start": 516,
                                                "end": 517
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 519,
                                                    "end": 519
                                                },
                                                "flags": 32,
                                                "start": 517,
                                                "end": 520
                                            },
                                            "flags": 33,
                                            "start": 507,
                                            "end": 520
                                        },
                                        "flags": 32,
                                        "start": 502,
                                        "end": 520
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
                                                "flags": 97,
                                                "start": 521,
                                                "end": 526
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 33,
                                                "start": 528,
                                                "end": 539
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 541,
                                                    "end": 541
                                                },
                                                "flags": 32,
                                                "start": 539,
                                                "end": 542
                                            },
                                            "flags": 33,
                                            "start": 526,
                                            "end": 542
                                        },
                                        "flags": 32,
                                        "start": 521,
                                        "end": 542
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
                                                "flags": 97,
                                                "start": 543,
                                                "end": 548
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 33,
                                                "start": 550,
                                                "end": 551
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 567,
                                                    "end": 567
                                                },
                                                "flags": 32,
                                                "start": 551,
                                                "end": 568
                                            },
                                            "flags": 33,
                                            "start": 548,
                                            "end": 568
                                        },
                                        "flags": 32,
                                        "start": 543,
                                        "end": 568
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
                                                "flags": 97,
                                                "start": 569,
                                                "end": 574
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 33,
                                                "start": 583,
                                                "end": 594
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 610,
                                                    "end": 610
                                                },
                                                "flags": 32,
                                                "start": 594,
                                                "end": 611
                                            },
                                            "flags": 33,
                                            "start": 574,
                                            "end": 611
                                        },
                                        "flags": 32,
                                        "start": 569,
                                        "end": 611
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 17,
                                "start": 502,
                                "end": 612
                            },
                            "flags": 49,
                            "start": 500,
                            "end": 614
                        },
                        "flags": 16,
                        "start": 494,
                        "end": 614
                    }
                ],
                "flags": 16777232,
                "start": 494,
                "end": 614
            },
            "flags": 33554448,
            "start": 487,
            "end": 615
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
                            "start": 618,
                            "end": 626
                        },
                        "asteriskToken": null,
                        "name": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 626,
                            "end": 628
                        },
                        "typeParameters": null,
                        "formalParameterList": {
                            "kind": 214,
                            "formalParameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 637,
                            "end": 637
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 640,
                                "end": 640
                            },
                            "flags": 32,
                            "start": 638,
                            "end": 641
                        },
                        "returnType": null,
                        "flags": 32,
                        "start": 618,
                        "end": 641
                    },
                    "flags": 615,
                    "start": 33,
                    "end": 642
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 643,
                    "end": 643
                },
                "flags": 268435488,
                "start": 615,
                "end": 644
            },
            "flags": 16,
            "start": 615,
            "end": 645
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
                            "start": 647,
                            "end": 655
                        },
                        "asteriskToken": null,
                        "name": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 655,
                            "end": 657
                        },
                        "typeParameters": null,
                        "formalParameterList": {
                            "kind": 214,
                            "formalParameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 659,
                            "end": 659
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 672,
                                "end": 672
                            },
                            "flags": 32,
                            "start": 670,
                            "end": 673
                        },
                        "returnType": null,
                        "flags": 32,
                        "start": 647,
                        "end": 673
                    },
                    "flags": 645,
                    "start": 33,
                    "end": 674
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 675,
                    "end": 675
                },
                "flags": 268435488,
                "start": 645,
                "end": 676
            },
            "flags": 16,
            "start": 645,
            "end": 677
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
                            "start": 679,
                            "end": 687
                        },
                        "asteriskToken": null,
                        "name": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 687,
                            "end": 689
                        },
                        "typeParameters": null,
                        "formalParameterList": {
                            "kind": 214,
                            "formalParameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 691,
                            "end": 691
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 708,
                                "end": 708
                            },
                            "flags": 32,
                            "start": 692,
                            "end": 709
                        },
                        "returnType": null,
                        "flags": 32,
                        "start": 679,
                        "end": 709
                    },
                    "flags": 677,
                    "start": 33,
                    "end": 710
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 711,
                    "end": 711
                },
                "flags": 268435488,
                "start": 677,
                "end": 712
            },
            "flags": 16,
            "start": 677,
            "end": 713
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
                            "start": 715,
                            "end": 723
                        },
                        "asteriskToken": null,
                        "name": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 723,
                            "end": 725
                        },
                        "typeParameters": null,
                        "formalParameterList": {
                            "kind": 214,
                            "formalParameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 734,
                            "end": 734
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 761,
                                "end": 761
                            },
                            "flags": 32,
                            "start": 745,
                            "end": 762
                        },
                        "returnType": null,
                        "flags": 32,
                        "start": 715,
                        "end": 762
                    },
                    "flags": 713,
                    "start": 33,
                    "end": 763
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 764,
                    "end": 764
                },
                "flags": 268435488,
                "start": 713,
                "end": 765
            },
            "flags": 16,
            "start": 713,
            "end": 766
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 766,
                "end": 773
            },
            "name": {
                "kind": 134299649,
                "text": "C1",
                "rawText": "C1",
                "flags": 96,
                "start": 773,
                "end": 776
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
                                    "flags": 97,
                                    "start": 778,
                                    "end": 782
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 790,
                                    "end": 791
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 793,
                                        "end": 793
                                    },
                                    "flags": 32,
                                    "start": 791,
                                    "end": 794
                                },
                                "flags": 0,
                                "start": 782,
                                "end": 794
                            },
                            "flags": 0,
                            "start": 778,
                            "end": 794
                        }
                    ],
                    "flags": 32,
                    "start": 778,
                    "end": 794
                },
                "flags": 776,
                "start": 32,
                "end": 796
            },
            "flags": 17,
            "start": 766,
            "end": 796
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 796,
                "end": 802
            },
            "name": {
                "kind": 134299649,
                "text": "C2",
                "rawText": "C2",
                "flags": 96,
                "start": 802,
                "end": 805
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
                                    "flags": 97,
                                    "start": 807,
                                    "end": 811
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 812,
                                    "end": 823
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 825,
                                        "end": 825
                                    },
                                    "flags": 32,
                                    "start": 823,
                                    "end": 826
                                },
                                "flags": 0,
                                "start": 811,
                                "end": 826
                            },
                            "flags": 0,
                            "start": 807,
                            "end": 826
                        }
                    ],
                    "flags": 32,
                    "start": 807,
                    "end": 826
                },
                "flags": 805,
                "start": 32,
                "end": 828
            },
            "flags": 17,
            "start": 796,
            "end": 828
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 828,
                "end": 834
            },
            "name": {
                "kind": 134299649,
                "text": "C3",
                "rawText": "C3",
                "flags": 96,
                "start": 834,
                "end": 837
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
                                    "flags": 97,
                                    "start": 839,
                                    "end": 843
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 844,
                                    "end": 845
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 861,
                                        "end": 861
                                    },
                                    "flags": 32,
                                    "start": 845,
                                    "end": 862
                                },
                                "flags": 0,
                                "start": 843,
                                "end": 862
                            },
                            "flags": 0,
                            "start": 839,
                            "end": 862
                        }
                    ],
                    "flags": 32,
                    "start": 839,
                    "end": 862
                },
                "flags": 837,
                "start": 32,
                "end": 864
            },
            "flags": 17,
            "start": 828,
            "end": 864
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 864,
                "end": 870
            },
            "name": {
                "kind": 134299649,
                "text": "C4",
                "rawText": "C4",
                "flags": 96,
                "start": 870,
                "end": 873
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
                                    "flags": 97,
                                    "start": 875,
                                    "end": 879
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 887,
                                    "end": 898
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 914,
                                        "end": 914
                                    },
                                    "flags": 32,
                                    "start": 898,
                                    "end": 915
                                },
                                "flags": 0,
                                "start": 879,
                                "end": 915
                            },
                            "flags": 0,
                            "start": 875,
                            "end": 915
                        }
                    ],
                    "flags": 32,
                    "start": 875,
                    "end": 915
                },
                "flags": 873,
                "start": 32,
                "end": 917
            },
            "flags": 17,
            "start": 864,
            "end": 917
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 917,
                "end": 927
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo1",
                "rawText": "foo1",
                "flags": 96,
                "start": 927,
                "end": 932
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 933,
                "end": 933
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
                                "start": 958,
                                "end": 967
                            },
                            "expression": {
                                "kind": 201392130,
                                "text": 42,
                                "rawText": "42",
                                "flags": 96,
                                "start": 967,
                                "end": 970
                            },
                            "flags": 81,
                            "start": 958,
                            "end": 970
                        }
                    ],
                    "flags": 33,
                    "start": 958,
                    "end": 970
                },
                "flags": 32,
                "start": 934,
                "end": 972
            },
            "returnType": null,
            "flags": 16,
            "start": 917,
            "end": 972
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 972,
                "end": 982
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo2",
                "rawText": "foo2",
                "flags": 96,
                "start": 982,
                "end": 987
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 988,
                "end": 988
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
                                "start": 1013,
                                "end": 1022
                            },
                            "expression": {
                                "kind": 201392130,
                                "text": 42,
                                "rawText": "42",
                                "flags": 96,
                                "start": 1022,
                                "end": 1025
                            },
                            "flags": 81,
                            "start": 1013,
                            "end": 1025
                        }
                    ],
                    "flags": 33,
                    "start": 1013,
                    "end": 1025
                },
                "flags": 32,
                "start": 989,
                "end": 1027
            },
            "returnType": null,
            "flags": 16,
            "start": 972,
            "end": 1027
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 1027,
                "end": 1037
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo3",
                "rawText": "foo3",
                "flags": 96,
                "start": 1037,
                "end": 1042
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 1043,
                "end": 1043
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
                                "start": 1046,
                                "end": 1077
                            },
                            "expression": {
                                "kind": 201392130,
                                "text": 42,
                                "rawText": "42",
                                "flags": 96,
                                "start": 1077,
                                "end": 1080
                            },
                            "flags": 81,
                            "start": 1046,
                            "end": 1080
                        }
                    ],
                    "flags": 33,
                    "start": 1046,
                    "end": 1080
                },
                "flags": 32,
                "start": 1044,
                "end": 1082
            },
            "returnType": null,
            "flags": 16,
            "start": 1027,
            "end": 1082
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 1082,
                "end": 1092
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo4",
                "rawText": "foo4",
                "flags": 96,
                "start": 1092,
                "end": 1097
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 1098,
                "end": 1098
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
                                "start": 1101,
                                "end": 1134
                            },
                            "expression": {
                                "kind": 201392130,
                                "text": 42,
                                "rawText": "42",
                                "flags": 96,
                                "start": 1134,
                                "end": 1137
                            },
                            "flags": 81,
                            "start": 1101,
                            "end": 1138
                        }
                    ],
                    "flags": 33,
                    "start": 1101,
                    "end": 1138
                },
                "flags": 32,
                "start": 1099,
                "end": 1140
            },
            "returnType": null,
            "flags": 16,
            "start": 1082,
            "end": 1140
        }
    ],
    "isModule": false,
    "source": "function x (/*1*/) {}\n\nfunction x(/*2*/) {}\n\nfunction/*1*/ x/*2*/(/*3*/)/*4*/ {}\n\nfunction a(/* comment */) {} // comment\nfunction b() {} // comment\nfunction c(/* comment */ argA, argB, argC) {} // comment\ncall((/*object*/ row) => {});\n\nfunction f1 /* f */() {}\nfunction f2 (/* args */) {}\nfunction f3 () /* returns */ {}\nfunction f4 /* f */(/* args */) /* returns */ {}\n\nfunction f5 /* f */(/* a */ a) {}\nfunction f6 /* f */(a /* a */) {}\nfunction f7 /* f */(/* a */ a) /* returns */ {}\n\nconst obj = {\n  f1 /* f */() {},\n  f2 (/* args */) {},\n  f3 () /* returns */ {},\n  f4 /* f */(/* args */) /* returns */ {},\n};\n\n(function f /* f */() {})();\n(function f (/* args */) {})();\n(function f () /* returns */ {})();\n(function f /* f */(/* args */) /* returns */ {})();\n\nclass C1 {\n  f/* f */() {}\n}\nclass C2 {\n  f(/* args */) {}\n}\nclass C3 {\n  f() /* returns */ {}\n}\nclass C4 {\n  f/* f */(/* args */) /* returns */ {}\n}\n\nfunction foo1()\n// this is a function\n{\n  return 42\n}\n\nfunction foo2() // this is a function\n{\n  return 42\n}\n\nfunction foo3() { // this is a function\n  return 42\n}\n\nfunction foo4() {\n  // this is a function\n  return 42;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 1140
}
```

### Printed

```javascript

function x(/*1*/) {}
function x(/*2*/) {}
function/*1*/ x/*2*/(/*3*/) {}
function a(/* comment */) {}// comment
function b() {}// comment
function c(/* comment */argA, argB, argC) {}// comment
call((/*object*/row) => {});
function f1/* f */() {}
function f2(/* args */) {}
function f3() {}
function f4/* f */(/* args */) {}
function f5/* f */(/* a */a) {}
function f6/* f */(a/* a */) {}
function f7/* f */(/* a */a) {}
const obj = {
  f1/* f */() {},
  f2(/* args */) {},
  f3() {},
  f4/* f */(/* args */) {},
};
(/*2*/function f/* f */() {})();
(/*2*/function f(/* args */) {})();
(/*2*/function f() {})();
(/*2*/function f/* f */(/* args */) {})();
class C1 {
  f/* f */() {}
}
class C2 {
  f(/* args */) {}
}
class C3 {
  f() {}
}
class C4 {
  f/* f */(/* args */) {}
}
function foo1() 
 // this is a function
{
  return 42;
  // this is a function
}
function foo2() {
  return 42;
}
function foo3() {// this is a function
  return 42;
}
function foo4() {
   // this is a function
  return 42;
}

```

### Diagnostics

```javascript
✔ No errors
```

