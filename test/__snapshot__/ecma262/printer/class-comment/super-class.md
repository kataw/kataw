# Kataw parser test case

## Input

`````js
class A // comment 1
  // comment 2
  extends B {}

class A1 extends B // comment1
// comment2
// comment3
{}

class A2 /* a */ extends B {}
class A3 extends B /* a */ {}
class A4 extends /* a */ B {}

(class A5 // comment 1
  // comment 2
  extends B {});

(class A6 extends B // comment1
// comment2
// comment3
{});

(class A7 /* a */ extends B {});
(class A8 extends B /* a */ {});
(class A9 extends /* a */ B {});

class a extends b // comment
{
  constructor() {}
}

class c extends d
// comment2
{
  constructor() {}
}

class C2  // comment
extends Base
{  foo(){} }

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 81,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 45
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "B",
                        "rawText": "B",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 45,
                        "end": 47
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 45,
                    "end": 47
                },
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 49,
                    "end": 49
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 50
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 50
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 50,
                "end": 57
            },
            "name": {
                "kind": 134299649,
                "text": "A1",
                "rawText": "A1",
                "flags": 96,
                "transformFlags": 0,
                "start": 57,
                "end": 60
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 60,
                        "end": 68
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "B",
                        "rawText": "B",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 68,
                        "end": 70
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 68,
                    "end": 70
                },
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 108,
                    "end": 108
                },
                "flags": 60,
                "transformFlags": 0,
                "start": 32,
                "end": 109
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 50,
            "end": 109
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 109,
                "end": 116
            },
            "name": {
                "kind": 134299649,
                "text": "A2",
                "rawText": "A2",
                "flags": 96,
                "transformFlags": 0,
                "start": 116,
                "end": 119
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 119,
                        "end": 135
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "B",
                        "rawText": "B",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 135,
                        "end": 137
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 135,
                    "end": 137
                },
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 139,
                    "end": 139
                },
                "flags": 119,
                "transformFlags": 0,
                "start": 32,
                "end": 140
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 109,
            "end": 140
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 140,
                "end": 146
            },
            "name": {
                "kind": 134299649,
                "text": "A3",
                "rawText": "A3",
                "flags": 96,
                "transformFlags": 0,
                "start": 146,
                "end": 149
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 149,
                        "end": 157
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "B",
                        "rawText": "B",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 157,
                        "end": 159
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 157,
                    "end": 159
                },
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 169,
                    "end": 169
                },
                "flags": 149,
                "transformFlags": 0,
                "start": 32,
                "end": 170
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 140,
            "end": 170
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 170,
                "end": 176
            },
            "name": {
                "kind": 134299649,
                "text": "A4",
                "rawText": "A4",
                "flags": 96,
                "transformFlags": 0,
                "start": 176,
                "end": 179
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 179,
                        "end": 187
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "B",
                        "rawText": "B",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 187,
                        "end": 197
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 187,
                    "end": 197
                },
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 199,
                    "end": 199
                },
                "flags": 179,
                "transformFlags": 0,
                "start": 32,
                "end": 200
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 170,
            "end": 200
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
                        "transformFlags": 0,
                        "start": 203,
                        "end": 208
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "A5",
                        "rawText": "A5",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 208,
                        "end": 211
                    },
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": {
                            "kind": 279,
                            "extendsKeyword": {
                                "kind": 4194391,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 211,
                                "end": 249
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "B",
                                "rawText": "B",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 249,
                                "end": 251
                            },
                            "typeParameter": null,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 249,
                            "end": 251
                        },
                        "body": {
                            "kind": 303,
                            "elements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 253,
                            "end": 253
                        },
                        "flags": 211,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 254
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 203,
                    "end": 254
                },
                "flags": 200,
                "transformFlags": 0,
                "start": 33,
                "end": 255
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 200,
            "end": 256
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
                        "transformFlags": 0,
                        "start": 259,
                        "end": 264
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "A6",
                        "rawText": "A6",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 264,
                        "end": 267
                    },
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": {
                            "kind": 279,
                            "extendsKeyword": {
                                "kind": 4194391,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 267,
                                "end": 275
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "B",
                                "rawText": "B",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 275,
                                "end": 277
                            },
                            "typeParameter": null,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 275,
                            "end": 277
                        },
                        "body": {
                            "kind": 303,
                            "elements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 315,
                            "end": 315
                        },
                        "flags": 267,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 316
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 259,
                    "end": 316
                },
                "flags": 256,
                "transformFlags": 0,
                "start": 33,
                "end": 317
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 256,
            "end": 318
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
                        "transformFlags": 0,
                        "start": 321,
                        "end": 326
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "A7",
                        "rawText": "A7",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 326,
                        "end": 329
                    },
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": {
                            "kind": 279,
                            "extendsKeyword": {
                                "kind": 4194391,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 329,
                                "end": 345
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "B",
                                "rawText": "B",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 345,
                                "end": 347
                            },
                            "typeParameter": null,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 345,
                            "end": 347
                        },
                        "body": {
                            "kind": 303,
                            "elements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 349,
                            "end": 349
                        },
                        "flags": 329,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 350
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 321,
                    "end": 350
                },
                "flags": 318,
                "transformFlags": 0,
                "start": 33,
                "end": 351
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 318,
            "end": 352
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
                        "transformFlags": 0,
                        "start": 354,
                        "end": 359
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "A8",
                        "rawText": "A8",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 359,
                        "end": 362
                    },
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": {
                            "kind": 279,
                            "extendsKeyword": {
                                "kind": 4194391,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 362,
                                "end": 370
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "B",
                                "rawText": "B",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 370,
                                "end": 372
                            },
                            "typeParameter": null,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 370,
                            "end": 372
                        },
                        "body": {
                            "kind": 303,
                            "elements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 382,
                            "end": 382
                        },
                        "flags": 362,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 383
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 354,
                    "end": 383
                },
                "flags": 352,
                "transformFlags": 0,
                "start": 33,
                "end": 384
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 352,
            "end": 385
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
                        "transformFlags": 0,
                        "start": 387,
                        "end": 392
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "A9",
                        "rawText": "A9",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 392,
                        "end": 395
                    },
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": {
                            "kind": 279,
                            "extendsKeyword": {
                                "kind": 4194391,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 395,
                                "end": 403
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "B",
                                "rawText": "B",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 403,
                                "end": 413
                            },
                            "typeParameter": null,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 403,
                            "end": 413
                        },
                        "body": {
                            "kind": 303,
                            "elements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 415,
                            "end": 415
                        },
                        "flags": 395,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 416
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 387,
                    "end": 416
                },
                "flags": 385,
                "transformFlags": 0,
                "start": 33,
                "end": 417
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 385,
            "end": 418
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 418,
                "end": 425
            },
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "transformFlags": 0,
                "start": 425,
                "end": 427
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 427,
                        "end": 435
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 435,
                        "end": 437
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 435,
                    "end": 437
                },
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
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 450,
                                    "end": 464
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "transformFlags": 0,
                                    "start": 465,
                                    "end": 466
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 468,
                                        "end": 468
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 466,
                                    "end": 469
                                },
                                "flags": 2048,
                                "transformFlags": 0,
                                "start": 464,
                                "end": 469
                            },
                            "flags": 2048,
                            "transformFlags": 0,
                            "start": 450,
                            "end": 469
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 450,
                    "end": 469
                },
                "flags": 427,
                "transformFlags": 0,
                "start": 32,
                "end": 471
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 418,
            "end": 471
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 471,
                "end": 478
            },
            "name": {
                "kind": 134299649,
                "text": "c",
                "rawText": "c",
                "flags": 96,
                "transformFlags": 0,
                "start": 478,
                "end": 480
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 480,
                        "end": 488
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "d",
                        "rawText": "d",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 488,
                        "end": 490
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 488,
                    "end": 490
                },
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
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 504,
                                    "end": 518
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "transformFlags": 0,
                                    "start": 519,
                                    "end": 520
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 522,
                                        "end": 522
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 520,
                                    "end": 523
                                },
                                "flags": 2048,
                                "transformFlags": 0,
                                "start": 518,
                                "end": 523
                            },
                            "flags": 2048,
                            "transformFlags": 0,
                            "start": 504,
                            "end": 523
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 504,
                    "end": 523
                },
                "flags": 480,
                "transformFlags": 0,
                "start": 32,
                "end": 525
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 471,
            "end": 525
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 525,
                "end": 532
            },
            "name": {
                "kind": 134299649,
                "text": "C2",
                "rawText": "C2",
                "flags": 96,
                "transformFlags": 0,
                "start": 532,
                "end": 535
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 81,
                        "transformFlags": 0,
                        "start": 535,
                        "end": 555
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "Base",
                        "rawText": "Base",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 555,
                        "end": 560
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 555,
                    "end": 560
                },
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
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 562,
                                    "end": 567
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 568,
                                    "end": 569
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 570,
                                        "end": 570
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 569,
                                    "end": 571
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 567,
                                "end": 571
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 562,
                            "end": 571
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 562,
                    "end": 571
                },
                "flags": 535,
                "transformFlags": 0,
                "start": 32,
                "end": 573
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 525,
            "end": 573
        }
    ],
    "isModule": false,
    "source": "class A // comment 1\n  // comment 2\n  extends B {}\n\nclass A1 extends B // comment1\n// comment2\n// comment3\n{}\n\nclass A2 /* a */ extends B {}\nclass A3 extends B /* a */ {}\nclass A4 extends /* a */ B {}\n\n(class A5 // comment 1\n  // comment 2\n  extends B {});\n\n(class A6 extends B // comment1\n// comment2\n// comment3\n{});\n\n(class A7 /* a */ extends B {});\n(class A8 extends B /* a */ {});\n(class A9 extends /* a */ B {});\n\nclass a extends b // comment\n{\n  constructor() {}\n}\n\nclass c extends d\n// comment2\n{\n  constructor() {}\n}\n\nclass C2  // comment\nextends Base\n{  foo(){} }\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 574
}
```

### Printed

```javascript
class A extends B {}
class A1 extends B {}

class A2 extends B {}

class A3 extends B {}

class A4 extends B {}

(class A5 extends B {});

(class A6 extends B {});

(class A7 extends B {});

(class A8 extends B {});

(class A9 extends B {});

class a extends b {
  constructor() {}
}

class c extends d {
  constructor() {}
}

class C2 extends Base {
  foo() {}
}

```

### Diagnostics

```javascript
✔ No errors
```

