# Kataw parser test case

## Input

`````js
// It should always break the highest precedence operators first, and
// break them all at the same time.

const x = longVariable + longVariable + longVariable;
const x1 = longVariable + longVariable + longVariable + longVariable - longVariable + longVariable;
const x2 = longVariable + longVariable * longVariable + longVariable - longVariable + longVariable;
const x3 = longVariable + longVariable * longVariable * longVariable / longVariable + longVariable;

const x4 = longVariable && longVariable && longVariable && longVariable && longVariable && longVariable;
const x5 = longVariable && longVariable || longVariable && longVariable || longVariable && longVariable;
const x6 = firstItemWithAVeryLongNameThatKeepsGoing || firstItemWithAVeryLongNameThatKeepsGoing || {};
const x7 = firstItemWithAVeryLongNameThatKeepsGoing || firstItemWithAVeryLongNameThatKeepsGoing || [];
const x8 = call(firstItemWithAVeryLongNameThatKeepsGoing, firstItemWithAVeryLongNameThatKeepsGoing) || [];

const x9 = longVariable * longint && longVariable >> 0 && longVariable + longVariable;

const x10 = longVariable > longint && longVariable === 0 + longVariable * longVariable;

foo(obj.property * new Class() && obj instanceof Class && longVariable ? number + 5 : false);

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
                "flags": 81,
                "transformFlags": 0,
                "start": 0,
                "end": 112
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 112,
                            "end": 114
                        },
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "longVariable",
                                    "rawText": "longVariable",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 116,
                                    "end": 129
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 129,
                                    "end": 131
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "longVariable",
                                    "rawText": "longVariable",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 131,
                                    "end": 144
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 116,
                                "end": 144
                            },
                            "operatorToken": {
                                "kind": 99634,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 144,
                                "end": 146
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "longVariable",
                                "rawText": "longVariable",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 146,
                                "end": 159
                            },
                            "flags": 96,
                            "transformFlags": 1024,
                            "start": 116,
                            "end": 159
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 112,
                        "end": 159
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 112,
                "end": 159
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 160
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 160,
                "end": 166
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x1",
                            "rawText": "x1",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 166,
                            "end": 169
                        },
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "longVariable",
                                            "rawText": "longVariable",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 171,
                                            "end": 184
                                        },
                                        "operatorToken": {
                                            "kind": 99634,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 184,
                                            "end": 186
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "longVariable",
                                            "rawText": "longVariable",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 186,
                                            "end": 199
                                        },
                                        "flags": 96,
                                        "transformFlags": 1024,
                                        "start": 171,
                                        "end": 199
                                    },
                                    "operatorToken": {
                                        "kind": 99634,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 199,
                                        "end": 201
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "longVariable",
                                        "rawText": "longVariable",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 201,
                                        "end": 214
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 171,
                                    "end": 214
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 214,
                                    "end": 216
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "longVariable",
                                        "rawText": "longVariable",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 216,
                                        "end": 229
                                    },
                                    "operatorToken": {
                                        "kind": 134318643,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 229,
                                        "end": 231
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "longVariable",
                                        "rawText": "longVariable",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 231,
                                        "end": 244
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 229,
                                    "end": 244
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 171,
                                "end": 244
                            },
                            "operatorToken": {
                                "kind": 99634,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 244,
                                "end": 246
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "longVariable",
                                "rawText": "longVariable",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 246,
                                "end": 259
                            },
                            "flags": 96,
                            "transformFlags": 1024,
                            "start": 171,
                            "end": 259
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 166,
                        "end": 259
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 166,
                "end": 259
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 160,
            "end": 260
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 260,
                "end": 266
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x2",
                            "rawText": "x2",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 266,
                            "end": 269
                        },
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "longVariable",
                                        "rawText": "longVariable",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 271,
                                        "end": 284
                                    },
                                    "operatorToken": {
                                        "kind": 99634,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 284,
                                        "end": 286
                                    },
                                    "right": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "longVariable",
                                            "rawText": "longVariable",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 286,
                                            "end": 299
                                        },
                                        "operatorToken": {
                                            "kind": 67143222,
                                            "flags": 96,
                                            "transformFlags": 32,
                                            "start": 299,
                                            "end": 301
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "longVariable",
                                            "rawText": "longVariable",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 301,
                                            "end": 314
                                        },
                                        "flags": 96,
                                        "transformFlags": 1024,
                                        "start": 299,
                                        "end": 314
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 271,
                                    "end": 314
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 314,
                                    "end": 316
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "longVariable",
                                        "rawText": "longVariable",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 316,
                                        "end": 329
                                    },
                                    "operatorToken": {
                                        "kind": 134318643,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 329,
                                        "end": 331
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "longVariable",
                                        "rawText": "longVariable",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 331,
                                        "end": 344
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 329,
                                    "end": 344
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 271,
                                "end": 344
                            },
                            "operatorToken": {
                                "kind": 99634,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 344,
                                "end": 346
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "longVariable",
                                "rawText": "longVariable",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 346,
                                "end": 359
                            },
                            "flags": 96,
                            "transformFlags": 1024,
                            "start": 271,
                            "end": 359
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 266,
                        "end": 359
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 266,
                "end": 359
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 260,
            "end": 360
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 360,
                "end": 366
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x3",
                            "rawText": "x3",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 366,
                            "end": 369
                        },
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "longVariable",
                                    "rawText": "longVariable",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 371,
                                    "end": 384
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 384,
                                    "end": 386
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "longVariable",
                                            "rawText": "longVariable",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 386,
                                            "end": 399
                                        },
                                        "operatorToken": {
                                            "kind": 67143222,
                                            "flags": 96,
                                            "transformFlags": 32,
                                            "start": 399,
                                            "end": 401
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "longVariable",
                                            "rawText": "longVariable",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 401,
                                            "end": 414
                                        },
                                        "flags": 96,
                                        "transformFlags": 1024,
                                        "start": 399,
                                        "end": 414
                                    },
                                    "operatorToken": {
                                        "kind": 67143222,
                                        "flags": 96,
                                        "transformFlags": 32,
                                        "start": 414,
                                        "end": 416
                                    },
                                    "right": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "longVariable",
                                            "rawText": "longVariable",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 416,
                                            "end": 429
                                        },
                                        "operatorToken": {
                                            "kind": 35640,
                                            "flags": 96,
                                            "transformFlags": 32,
                                            "start": 429,
                                            "end": 431
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "longVariable",
                                            "rawText": "longVariable",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 431,
                                            "end": 444
                                        },
                                        "flags": 96,
                                        "transformFlags": 1024,
                                        "start": 429,
                                        "end": 444
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 399,
                                    "end": 444
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 371,
                                "end": 444
                            },
                            "operatorToken": {
                                "kind": 99634,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 444,
                                "end": 446
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "longVariable",
                                "rawText": "longVariable",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 446,
                                "end": 459
                            },
                            "flags": 96,
                            "transformFlags": 1024,
                            "start": 371,
                            "end": 459
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 366,
                        "end": 459
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 366,
                "end": 459
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 360,
            "end": 460
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 460,
                "end": 467
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x4",
                            "rawText": "x4",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 467,
                            "end": 470
                        },
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "longVariable",
                                                "rawText": "longVariable",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 472,
                                                "end": 485
                                            },
                                            "operatorToken": {
                                                "kind": 33594,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 485,
                                                "end": 488
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "longVariable",
                                                "rawText": "longVariable",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 488,
                                                "end": 501
                                            },
                                            "flags": 96,
                                            "transformFlags": 1024,
                                            "start": 472,
                                            "end": 501
                                        },
                                        "operatorToken": {
                                            "kind": 33594,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 501,
                                            "end": 504
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "longVariable",
                                            "rawText": "longVariable",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 504,
                                            "end": 517
                                        },
                                        "flags": 96,
                                        "transformFlags": 1024,
                                        "start": 472,
                                        "end": 517
                                    },
                                    "operatorToken": {
                                        "kind": 33594,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 517,
                                        "end": 520
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "longVariable",
                                        "rawText": "longVariable",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 520,
                                        "end": 533
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 472,
                                    "end": 533
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 533,
                                    "end": 536
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "longVariable",
                                    "rawText": "longVariable",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 536,
                                    "end": 549
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 472,
                                "end": 549
                            },
                            "operatorToken": {
                                "kind": 33594,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 549,
                                "end": 552
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "longVariable",
                                "rawText": "longVariable",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 552,
                                "end": 565
                            },
                            "flags": 96,
                            "transformFlags": 1024,
                            "start": 472,
                            "end": 565
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 467,
                        "end": 565
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 467,
                "end": 565
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 460,
            "end": 566
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 566,
                "end": 572
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x5",
                            "rawText": "x5",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 572,
                            "end": 575
                        },
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "longVariable",
                                        "rawText": "longVariable",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 577,
                                        "end": 590
                                    },
                                    "operatorToken": {
                                        "kind": 33594,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 590,
                                        "end": 593
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "longVariable",
                                        "rawText": "longVariable",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 593,
                                        "end": 606
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 577,
                                    "end": 606
                                },
                                "operatorToken": {
                                    "kind": 33339,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 606,
                                    "end": 609
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "longVariable",
                                        "rawText": "longVariable",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 609,
                                        "end": 622
                                    },
                                    "operatorToken": {
                                        "kind": 33594,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 622,
                                        "end": 625
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "longVariable",
                                        "rawText": "longVariable",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 625,
                                        "end": 638
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 622,
                                    "end": 638
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 577,
                                "end": 638
                            },
                            "operatorToken": {
                                "kind": 33339,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 638,
                                "end": 641
                            },
                            "right": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "longVariable",
                                    "rawText": "longVariable",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 641,
                                    "end": 654
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 654,
                                    "end": 657
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "longVariable",
                                    "rawText": "longVariable",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 657,
                                    "end": 670
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 654,
                                "end": 670
                            },
                            "flags": 96,
                            "transformFlags": 1024,
                            "start": 577,
                            "end": 670
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 572,
                        "end": 670
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 572,
                "end": 670
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 566,
            "end": 671
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 671,
                "end": 677
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x6",
                            "rawText": "x6",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 677,
                            "end": 680
                        },
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "firstItemWithAVeryLongNameThatKeepsGoing",
                                    "rawText": "firstItemWithAVeryLongNameThatKeepsGoing",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 682,
                                    "end": 723
                                },
                                "operatorToken": {
                                    "kind": 33339,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 723,
                                    "end": 726
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "firstItemWithAVeryLongNameThatKeepsGoing",
                                    "rawText": "firstItemWithAVeryLongNameThatKeepsGoing",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 726,
                                    "end": 767
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 682,
                                "end": 767
                            },
                            "operatorToken": {
                                "kind": 33339,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 767,
                                "end": 770
                            },
                            "right": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 772,
                                    "end": 772
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 770,
                                "end": 773
                            },
                            "flags": 96,
                            "transformFlags": 1024,
                            "start": 682,
                            "end": 773
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 677,
                        "end": 773
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 677,
                "end": 773
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 671,
            "end": 774
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 774,
                "end": 780
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x7",
                            "rawText": "x7",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 780,
                            "end": 783
                        },
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "firstItemWithAVeryLongNameThatKeepsGoing",
                                    "rawText": "firstItemWithAVeryLongNameThatKeepsGoing",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 785,
                                    "end": 826
                                },
                                "operatorToken": {
                                    "kind": 33339,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 826,
                                    "end": 829
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "firstItemWithAVeryLongNameThatKeepsGoing",
                                    "rawText": "firstItemWithAVeryLongNameThatKeepsGoing",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 829,
                                    "end": 870
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 785,
                                "end": 870
                            },
                            "operatorToken": {
                                "kind": 33339,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 870,
                                "end": 873
                            },
                            "right": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 875,
                                    "end": 875
                                },
                                "flags": 32,
                                "transformFlags": 8,
                                "start": 873,
                                "end": 876
                            },
                            "flags": 96,
                            "transformFlags": 1024,
                            "start": 785,
                            "end": 876
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 780,
                        "end": 876
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 780,
                "end": 876
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 774,
            "end": 877
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 877,
                "end": 883
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x8",
                            "rawText": "x8",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 883,
                            "end": 886
                        },
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "call",
                                    "rawText": "call",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 888,
                                    "end": 893
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "firstItemWithAVeryLongNameThatKeepsGoing",
                                            "rawText": "firstItemWithAVeryLongNameThatKeepsGoing",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 894,
                                            "end": 934
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "firstItemWithAVeryLongNameThatKeepsGoing",
                                            "rawText": "firstItemWithAVeryLongNameThatKeepsGoing",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 935,
                                            "end": 976
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 894,
                                    "end": 976
                                },
                                "flags": 268435488,
                                "transformFlags": 1,
                                "start": 888,
                                "end": 977
                            },
                            "operatorToken": {
                                "kind": 33339,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 977,
                                "end": 980
                            },
                            "right": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 982,
                                    "end": 982
                                },
                                "flags": 32,
                                "transformFlags": 8,
                                "start": 980,
                                "end": 983
                            },
                            "flags": 268435488,
                            "transformFlags": 1024,
                            "start": 888,
                            "end": 983
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 883,
                        "end": 983
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 883,
                "end": 983
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 877,
            "end": 984
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 984,
                "end": 991
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x9",
                            "rawText": "x9",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 991,
                            "end": 994
                        },
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "longVariable",
                                        "rawText": "longVariable",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 996,
                                        "end": 1009
                                    },
                                    "operatorToken": {
                                        "kind": 67143222,
                                        "flags": 96,
                                        "transformFlags": 32,
                                        "start": 1009,
                                        "end": 1011
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "longint",
                                        "rawText": "longint",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 1011,
                                        "end": 1019
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 996,
                                    "end": 1019
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1019,
                                    "end": 1022
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "longVariable",
                                        "rawText": "longVariable",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 1022,
                                        "end": 1035
                                    },
                                    "operatorToken": {
                                        "kind": 35141,
                                        "flags": 96,
                                        "transformFlags": 64,
                                        "start": 1035,
                                        "end": 1038
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 1038,
                                        "end": 1040
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 1035,
                                    "end": 1040
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 996,
                                "end": 1040
                            },
                            "operatorToken": {
                                "kind": 33594,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1040,
                                "end": 1043
                            },
                            "right": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "longVariable",
                                    "rawText": "longVariable",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1043,
                                    "end": 1056
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1056,
                                    "end": 1058
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "longVariable",
                                    "rawText": "longVariable",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1058,
                                    "end": 1071
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 1056,
                                "end": 1071
                            },
                            "flags": 96,
                            "transformFlags": 1024,
                            "start": 996,
                            "end": 1071
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 991,
                        "end": 1071
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 991,
                "end": 1071
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 984,
            "end": 1072
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 1072,
                "end": 1079
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x10",
                            "rawText": "x10",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1079,
                            "end": 1083
                        },
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "longVariable",
                                    "rawText": "longVariable",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1085,
                                    "end": 1098
                                },
                                "operatorToken": {
                                    "kind": 34883,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1098,
                                    "end": 1100
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "longint",
                                    "rawText": "longint",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1100,
                                    "end": 1108
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 1085,
                                "end": 1108
                            },
                            "operatorToken": {
                                "kind": 33594,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1108,
                                "end": 1111
                            },
                            "right": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "longVariable",
                                        "rawText": "longVariable",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 1111,
                                        "end": 1124
                                    },
                                    "operatorToken": {
                                        "kind": 34620,
                                        "flags": 96,
                                        "transformFlags": 16,
                                        "start": 1124,
                                        "end": 1128
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 1128,
                                        "end": 1130
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 1124,
                                    "end": 1130
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1130,
                                    "end": 1132
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "longVariable",
                                        "rawText": "longVariable",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 1132,
                                        "end": 1145
                                    },
                                    "operatorToken": {
                                        "kind": 67143222,
                                        "flags": 96,
                                        "transformFlags": 32,
                                        "start": 1145,
                                        "end": 1147
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "longVariable",
                                        "rawText": "longVariable",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 1147,
                                        "end": 1160
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 1145,
                                    "end": 1160
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 1124,
                                "end": 1160
                            },
                            "flags": 96,
                            "transformFlags": 1024,
                            "start": 1085,
                            "end": 1160
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 1079,
                        "end": 1160
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 1079,
                "end": 1160
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 1072,
            "end": 1161
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 1161,
                    "end": 1166
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "obj",
                                                "rawText": "obj",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 1167,
                                                "end": 1170
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "property",
                                                "rawText": "property",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 1171,
                                                "end": 1179
                                            },
                                            "flags": 96,
                                            "transformFlags": 2,
                                            "start": 1167,
                                            "end": 1179
                                        },
                                        "operatorToken": {
                                            "kind": 67143222,
                                            "flags": 96,
                                            "transformFlags": 32,
                                            "start": 1179,
                                            "end": 1181
                                        },
                                        "right": {
                                            "kind": 210,
                                            "newKeyword": {
                                                "kind": 138477661,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 1181,
                                                "end": 1185
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "Class",
                                                "rawText": "Class",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 1185,
                                                "end": 1191
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 1192,
                                                "end": 1192
                                            },
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1181,
                                            "end": 1193
                                        },
                                        "flags": 96,
                                        "transformFlags": 1024,
                                        "start": 1167,
                                        "end": 1193
                                    },
                                    "operatorToken": {
                                        "kind": 33594,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 1193,
                                        "end": 1196
                                    },
                                    "right": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "obj",
                                            "rawText": "obj",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1196,
                                            "end": 1200
                                        },
                                        "operatorToken": {
                                            "kind": 4229173,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1200,
                                            "end": 1211
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "Class",
                                            "rawText": "Class",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1211,
                                            "end": 1217
                                        },
                                        "flags": 96,
                                        "transformFlags": 1024,
                                        "start": 1200,
                                        "end": 1217
                                    },
                                    "flags": 96,
                                    "transformFlags": 1024,
                                    "start": 1167,
                                    "end": 1217
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1217,
                                    "end": 1220
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "longVariable",
                                    "rawText": "longVariable",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1220,
                                    "end": 1233
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 1167,
                                "end": 1233
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 1233,
                                "end": 1235
                            },
                            "consequent": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "number",
                                    "rawText": "number",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1235,
                                    "end": 1242
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1242,
                                    "end": 1244
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 5,
                                    "rawText": "5",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1244,
                                    "end": 1246
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 1235,
                                "end": 1246
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 1246,
                                "end": 1248
                            },
                            "alternate": {
                                "kind": 205586437,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1248,
                                "end": 1254
                            },
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1167,
                            "end": 1254
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1167,
                    "end": 1254
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 1161,
                "end": 1255
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 1161,
            "end": 1256
        }
    ],
    "isModule": false,
    "source": "// It should always break the highest precedence operators first, and\n// break them all at the same time.\n\nconst x = longVariable + longVariable + longVariable;\nconst x1 = longVariable + longVariable + longVariable + longVariable - longVariable + longVariable;\nconst x2 = longVariable + longVariable * longVariable + longVariable - longVariable + longVariable;\nconst x3 = longVariable + longVariable * longVariable * longVariable / longVariable + longVariable;\n\nconst x4 = longVariable && longVariable && longVariable && longVariable && longVariable && longVariable;\nconst x5 = longVariable && longVariable || longVariable && longVariable || longVariable && longVariable;\nconst x6 = firstItemWithAVeryLongNameThatKeepsGoing || firstItemWithAVeryLongNameThatKeepsGoing || {};\nconst x7 = firstItemWithAVeryLongNameThatKeepsGoing || firstItemWithAVeryLongNameThatKeepsGoing || [];\nconst x8 = call(firstItemWithAVeryLongNameThatKeepsGoing, firstItemWithAVeryLongNameThatKeepsGoing) || [];\n\nconst x9 = longVariable * longint && longVariable >> 0 && longVariable + longVariable;\n\nconst x10 = longVariable > longint && longVariable === 0 + longVariable * longVariable;\n\nfoo(obj.property * new Class() && obj instanceof Class && longVariable ? number + 5 : false);\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 1257
}
```

### Printed

```javascript

const x = longVariable + longVariable + longVariable;
const x1 =

      longVariable +
      longVariable +
      longVariable +
      longVariable - longVariable +
      longVariable
    ;

const x2 =

      longVariable +
      longVariable * longVariable +
      longVariable - longVariable +
      longVariable
    ;

const x3 =

      longVariable +
      longVariable * longVariable * longVariable / longVariable +
      longVariable
    ;

const x4 =

      longVariable &&
      longVariable &&
      longVariable &&
      longVariable &&
      longVariable &&
      longVariable
    ;

const x5 =

      longVariable && longVariable ||
      longVariable && longVariable ||
      longVariable && longVariable
    ;

const x6 =

      firstItemWithAVeryLongNameThatKeepsGoing ||
      firstItemWithAVeryLongNameThatKeepsGoing ||
      {}
    ;

const x7 =

      firstItemWithAVeryLongNameThatKeepsGoing ||
      firstItemWithAVeryLongNameThatKeepsGoing ||
      []
    ;

const x8 =

      call(
        firstItemWithAVeryLongNameThatKeepsGoing,
        firstItemWithAVeryLongNameThatKeepsGoing
      ) || []
    ;

const x9 =
    longVariable * longint && longVariable >> 0 && longVariable + longVariable;

const x10 =
    longVariable > longint && longVariable === 0 + longVariable * longVariable;

foo(
  obj.property * new Class() && obj instanceof Class && longVariable
    ? number + 5
    : false
);

```

### Diagnostics

```javascript
✔ No errors
```

