# Kataw parser test case

## Input

`````js
(
  aaaaaaaaaaaaaaaaaaaaaaaaa &&
  bbbbbbbbbbbbbbbbbbbbbbbbb &&
  ccccccccccccccccccccccccc &&
  ddddddddddddddddddddddddd &&
  eeeeeeeeeeeeeeeeeeeeeeeee
)();

(
  aa &&
  bb &&
  cc &&
  dd &&
  ee
)();

(
  aaaaaaaaaaaaaaaaaaaaaaaaa +
  bbbbbbbbbbbbbbbbbbbbbbbbb +
  ccccccccccccccccccccccccc +
  ddddddddddddddddddddddddd +
  eeeeeeeeeeeeeeeeeeeeeeeee
)();

(
  aa +
  bb +
  cc +
  dd +
  ee
)();

(
  aaaaaaaaaaaaaaaaaaaaaaaaa &&
  bbbbbbbbbbbbbbbbbbbbbbbbb &&
  ccccccccccccccccccccccccc &&
  ddddddddddddddddddddddddd &&
  eeeeeeeeeeeeeeeeeeeeeeeee
)()()();

(
  aaaaaaaaaaaaaaaaaaaaaaaaa &&
  bbbbbbbbbbbbbbbbbbbbbbbbb &&
  ccccccccccccccccccccccccc &&
  ddddddddddddddddddddddddd &&
  eeeeeeeeeeeeeeeeeeeeeeeee
)(
  aaaaaaaaaaaaaaaaaaaaaaaaa &&
    bbbbbbbbbbbbbbbbbbbbbbbbb &&
    ccccccccccccccccccccccccc &&
    ddddddddddddddddddddddddd &&
    eeeeeeeeeeeeeeeeeeeeeeeee
)(
  aaaaaaaaaaaaaaaaaaaaaaaaa &&
    bbbbbbbbbbbbbbbbbbbbbbbbb &&
    ccccccccccccccccccccccccc &&
    ddddddddddddddddddddddddd &&
    eeeeeeeeeeeeeeeeeeeeeeeee
)(
  aaaaaaaaaaaaaaaaaaaaaaaaa &&
    bbbbbbbbbbbbbbbbbbbbbbbbb &&
    ccccccccccccccccccccccccc &&
    ddddddddddddddddddddddddd &&
    eeeeeeeeeeeeeeeeeeeeeeeee
);
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
                "kind": 131,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "aaaaaaaaaaaaaaaaaaaaaaaaa",
                                        "rawText": "aaaaaaaaaaaaaaaaaaaaaaaaa",
                                        "flags": 97,
                                        "start": 1,
                                        "end": 29
                                    },
                                    "operatorToken": {
                                        "kind": 33594,
                                        "flags": 96,
                                        "start": 29,
                                        "end": 32
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "bbbbbbbbbbbbbbbbbbbbbbbbb",
                                        "rawText": "bbbbbbbbbbbbbbbbbbbbbbbbb",
                                        "flags": 97,
                                        "start": 32,
                                        "end": 60
                                    },
                                    "flags": 97,
                                    "start": 0,
                                    "end": 60
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "start": 60,
                                    "end": 63
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "ccccccccccccccccccccccccc",
                                    "rawText": "ccccccccccccccccccccccccc",
                                    "flags": 97,
                                    "start": 63,
                                    "end": 91
                                },
                                "flags": 97,
                                "start": 0,
                                "end": 91
                            },
                            "operatorToken": {
                                "kind": 33594,
                                "flags": 96,
                                "start": 91,
                                "end": 94
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "ddddddddddddddddddddddddd",
                                "rawText": "ddddddddddddddddddddddddd",
                                "flags": 97,
                                "start": 94,
                                "end": 122
                            },
                            "flags": 97,
                            "start": 0,
                            "end": 122
                        },
                        "operatorToken": {
                            "kind": 33594,
                            "flags": 96,
                            "start": 122,
                            "end": 125
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "eeeeeeeeeeeeeeeeeeeeeeeee",
                            "rawText": "eeeeeeeeeeeeeeeeeeeeeeeee",
                            "flags": 97,
                            "start": 125,
                            "end": 153
                        },
                        "flags": 97,
                        "start": 0,
                        "end": 153
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 155
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 156,
                    "end": 156
                },
                "flags": 268435488,
                "start": 0,
                "end": 157
            },
            "flags": 16,
            "start": 0,
            "end": 158
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "aa",
                                        "rawText": "aa",
                                        "flags": 97,
                                        "start": 161,
                                        "end": 166
                                    },
                                    "operatorToken": {
                                        "kind": 33594,
                                        "flags": 96,
                                        "start": 166,
                                        "end": 169
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "bb",
                                        "rawText": "bb",
                                        "flags": 97,
                                        "start": 169,
                                        "end": 174
                                    },
                                    "flags": 97,
                                    "start": 158,
                                    "end": 174
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "start": 174,
                                    "end": 177
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "cc",
                                    "rawText": "cc",
                                    "flags": 97,
                                    "start": 177,
                                    "end": 182
                                },
                                "flags": 97,
                                "start": 158,
                                "end": 182
                            },
                            "operatorToken": {
                                "kind": 33594,
                                "flags": 96,
                                "start": 182,
                                "end": 185
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "dd",
                                "rawText": "dd",
                                "flags": 97,
                                "start": 185,
                                "end": 190
                            },
                            "flags": 97,
                            "start": 158,
                            "end": 190
                        },
                        "operatorToken": {
                            "kind": 33594,
                            "flags": 96,
                            "start": 190,
                            "end": 193
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "ee",
                            "rawText": "ee",
                            "flags": 97,
                            "start": 193,
                            "end": 198
                        },
                        "flags": 97,
                        "start": 158,
                        "end": 198
                    },
                    "flags": 32,
                    "start": 158,
                    "end": 200
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 201,
                    "end": 201
                },
                "flags": 268435488,
                "start": 158,
                "end": 202
            },
            "flags": 16,
            "start": 158,
            "end": 203
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "aaaaaaaaaaaaaaaaaaaaaaaaa",
                                        "rawText": "aaaaaaaaaaaaaaaaaaaaaaaaa",
                                        "flags": 97,
                                        "start": 206,
                                        "end": 234
                                    },
                                    "operatorToken": {
                                        "kind": 99634,
                                        "flags": 96,
                                        "start": 234,
                                        "end": 236
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "bbbbbbbbbbbbbbbbbbbbbbbbb",
                                        "rawText": "bbbbbbbbbbbbbbbbbbbbbbbbb",
                                        "flags": 97,
                                        "start": 236,
                                        "end": 264
                                    },
                                    "flags": 97,
                                    "start": 203,
                                    "end": 264
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "start": 264,
                                    "end": 266
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "ccccccccccccccccccccccccc",
                                    "rawText": "ccccccccccccccccccccccccc",
                                    "flags": 97,
                                    "start": 266,
                                    "end": 294
                                },
                                "flags": 97,
                                "start": 203,
                                "end": 294
                            },
                            "operatorToken": {
                                "kind": 99634,
                                "flags": 96,
                                "start": 294,
                                "end": 296
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "ddddddddddddddddddddddddd",
                                "rawText": "ddddddddddddddddddddddddd",
                                "flags": 97,
                                "start": 296,
                                "end": 324
                            },
                            "flags": 97,
                            "start": 203,
                            "end": 324
                        },
                        "operatorToken": {
                            "kind": 99634,
                            "flags": 96,
                            "start": 324,
                            "end": 326
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "eeeeeeeeeeeeeeeeeeeeeeeee",
                            "rawText": "eeeeeeeeeeeeeeeeeeeeeeeee",
                            "flags": 97,
                            "start": 326,
                            "end": 354
                        },
                        "flags": 97,
                        "start": 203,
                        "end": 354
                    },
                    "flags": 32,
                    "start": 203,
                    "end": 356
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 357,
                    "end": 357
                },
                "flags": 268435488,
                "start": 203,
                "end": 358
            },
            "flags": 16,
            "start": 203,
            "end": 359
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "aa",
                                        "rawText": "aa",
                                        "flags": 97,
                                        "start": 362,
                                        "end": 367
                                    },
                                    "operatorToken": {
                                        "kind": 99634,
                                        "flags": 96,
                                        "start": 367,
                                        "end": 369
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "bb",
                                        "rawText": "bb",
                                        "flags": 97,
                                        "start": 369,
                                        "end": 374
                                    },
                                    "flags": 97,
                                    "start": 359,
                                    "end": 374
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "start": 374,
                                    "end": 376
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "cc",
                                    "rawText": "cc",
                                    "flags": 97,
                                    "start": 376,
                                    "end": 381
                                },
                                "flags": 97,
                                "start": 359,
                                "end": 381
                            },
                            "operatorToken": {
                                "kind": 99634,
                                "flags": 96,
                                "start": 381,
                                "end": 383
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "dd",
                                "rawText": "dd",
                                "flags": 97,
                                "start": 383,
                                "end": 388
                            },
                            "flags": 97,
                            "start": 359,
                            "end": 388
                        },
                        "operatorToken": {
                            "kind": 99634,
                            "flags": 96,
                            "start": 388,
                            "end": 390
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "ee",
                            "rawText": "ee",
                            "flags": 97,
                            "start": 390,
                            "end": 395
                        },
                        "flags": 97,
                        "start": 359,
                        "end": 395
                    },
                    "flags": 32,
                    "start": 359,
                    "end": 397
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 398,
                    "end": 398
                },
                "flags": 268435488,
                "start": 359,
                "end": 399
            },
            "flags": 16,
            "start": 359,
            "end": 400
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 131,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "aaaaaaaaaaaaaaaaaaaaaaaaa",
                                                "rawText": "aaaaaaaaaaaaaaaaaaaaaaaaa",
                                                "flags": 97,
                                                "start": 403,
                                                "end": 431
                                            },
                                            "operatorToken": {
                                                "kind": 33594,
                                                "flags": 96,
                                                "start": 431,
                                                "end": 434
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "bbbbbbbbbbbbbbbbbbbbbbbbb",
                                                "rawText": "bbbbbbbbbbbbbbbbbbbbbbbbb",
                                                "flags": 97,
                                                "start": 434,
                                                "end": 462
                                            },
                                            "flags": 97,
                                            "start": 400,
                                            "end": 462
                                        },
                                        "operatorToken": {
                                            "kind": 33594,
                                            "flags": 96,
                                            "start": 462,
                                            "end": 465
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "ccccccccccccccccccccccccc",
                                            "rawText": "ccccccccccccccccccccccccc",
                                            "flags": 97,
                                            "start": 465,
                                            "end": 493
                                        },
                                        "flags": 97,
                                        "start": 400,
                                        "end": 493
                                    },
                                    "operatorToken": {
                                        "kind": 33594,
                                        "flags": 96,
                                        "start": 493,
                                        "end": 496
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "ddddddddddddddddddddddddd",
                                        "rawText": "ddddddddddddddddddddddddd",
                                        "flags": 97,
                                        "start": 496,
                                        "end": 524
                                    },
                                    "flags": 97,
                                    "start": 400,
                                    "end": 524
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "start": 524,
                                    "end": 527
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "eeeeeeeeeeeeeeeeeeeeeeeee",
                                    "rawText": "eeeeeeeeeeeeeeeeeeeeeeeee",
                                    "flags": 97,
                                    "start": 527,
                                    "end": 555
                                },
                                "flags": 97,
                                "start": 400,
                                "end": 555
                            },
                            "flags": 32,
                            "start": 400,
                            "end": 557
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 558,
                            "end": 558
                        },
                        "flags": 268435488,
                        "start": 400,
                        "end": 559
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 560,
                        "end": 560
                    },
                    "flags": 268435488,
                    "start": 400,
                    "end": 561
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 562,
                    "end": 562
                },
                "flags": 268435488,
                "start": 400,
                "end": 563
            },
            "flags": 16,
            "start": 400,
            "end": 564
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 131,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "aaaaaaaaaaaaaaaaaaaaaaaaa",
                                                "rawText": "aaaaaaaaaaaaaaaaaaaaaaaaa",
                                                "flags": 97,
                                                "start": 567,
                                                "end": 595
                                            },
                                            "operatorToken": {
                                                "kind": 33594,
                                                "flags": 96,
                                                "start": 595,
                                                "end": 598
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "bbbbbbbbbbbbbbbbbbbbbbbbb",
                                                "rawText": "bbbbbbbbbbbbbbbbbbbbbbbbb",
                                                "flags": 97,
                                                "start": 598,
                                                "end": 626
                                            },
                                            "flags": 97,
                                            "start": 564,
                                            "end": 626
                                        },
                                        "operatorToken": {
                                            "kind": 33594,
                                            "flags": 96,
                                            "start": 626,
                                            "end": 629
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "ccccccccccccccccccccccccc",
                                            "rawText": "ccccccccccccccccccccccccc",
                                            "flags": 97,
                                            "start": 629,
                                            "end": 657
                                        },
                                        "flags": 97,
                                        "start": 564,
                                        "end": 657
                                    },
                                    "operatorToken": {
                                        "kind": 33594,
                                        "flags": 96,
                                        "start": 657,
                                        "end": 660
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "ddddddddddddddddddddddddd",
                                        "rawText": "ddddddddddddddddddddddddd",
                                        "flags": 97,
                                        "start": 660,
                                        "end": 688
                                    },
                                    "flags": 97,
                                    "start": 564,
                                    "end": 688
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "start": 688,
                                    "end": 691
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "eeeeeeeeeeeeeeeeeeeeeeeee",
                                    "rawText": "eeeeeeeeeeeeeeeeeeeeeeeee",
                                    "flags": 97,
                                    "start": 691,
                                    "end": 719
                                },
                                "flags": 97,
                                "start": 564,
                                "end": 719
                            },
                            "flags": 32,
                            "start": 564,
                            "end": 721
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 198,
                                    "left": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 198,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "aaaaaaaaaaaaaaaaaaaaaaaaa",
                                                    "rawText": "aaaaaaaaaaaaaaaaaaaaaaaaa",
                                                    "flags": 97,
                                                    "start": 722,
                                                    "end": 750
                                                },
                                                "operatorToken": {
                                                    "kind": 33594,
                                                    "flags": 96,
                                                    "start": 750,
                                                    "end": 753
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "bbbbbbbbbbbbbbbbbbbbbbbbb",
                                                    "rawText": "bbbbbbbbbbbbbbbbbbbbbbbbb",
                                                    "flags": 97,
                                                    "start": 753,
                                                    "end": 783
                                                },
                                                "flags": 97,
                                                "start": 722,
                                                "end": 783
                                            },
                                            "operatorToken": {
                                                "kind": 33594,
                                                "flags": 96,
                                                "start": 783,
                                                "end": 786
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "ccccccccccccccccccccccccc",
                                                "rawText": "ccccccccccccccccccccccccc",
                                                "flags": 97,
                                                "start": 786,
                                                "end": 816
                                            },
                                            "flags": 97,
                                            "start": 722,
                                            "end": 816
                                        },
                                        "operatorToken": {
                                            "kind": 33594,
                                            "flags": 96,
                                            "start": 816,
                                            "end": 819
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "ddddddddddddddddddddddddd",
                                            "rawText": "ddddddddddddddddddddddddd",
                                            "flags": 97,
                                            "start": 819,
                                            "end": 849
                                        },
                                        "flags": 97,
                                        "start": 722,
                                        "end": 849
                                    },
                                    "operatorToken": {
                                        "kind": 33594,
                                        "flags": 96,
                                        "start": 849,
                                        "end": 852
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "eeeeeeeeeeeeeeeeeeeeeeeee",
                                        "rawText": "eeeeeeeeeeeeeeeeeeeeeeeee",
                                        "flags": 97,
                                        "start": 852,
                                        "end": 882
                                    },
                                    "flags": 97,
                                    "start": 722,
                                    "end": 882
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 722,
                            "end": 882
                        },
                        "flags": 268435488,
                        "start": 564,
                        "end": 884
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "aaaaaaaaaaaaaaaaaaaaaaaaa",
                                                "rawText": "aaaaaaaaaaaaaaaaaaaaaaaaa",
                                                "flags": 97,
                                                "start": 885,
                                                "end": 913
                                            },
                                            "operatorToken": {
                                                "kind": 33594,
                                                "flags": 96,
                                                "start": 913,
                                                "end": 916
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "bbbbbbbbbbbbbbbbbbbbbbbbb",
                                                "rawText": "bbbbbbbbbbbbbbbbbbbbbbbbb",
                                                "flags": 97,
                                                "start": 916,
                                                "end": 946
                                            },
                                            "flags": 97,
                                            "start": 885,
                                            "end": 946
                                        },
                                        "operatorToken": {
                                            "kind": 33594,
                                            "flags": 96,
                                            "start": 946,
                                            "end": 949
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "ccccccccccccccccccccccccc",
                                            "rawText": "ccccccccccccccccccccccccc",
                                            "flags": 97,
                                            "start": 949,
                                            "end": 979
                                        },
                                        "flags": 97,
                                        "start": 885,
                                        "end": 979
                                    },
                                    "operatorToken": {
                                        "kind": 33594,
                                        "flags": 96,
                                        "start": 979,
                                        "end": 982
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "ddddddddddddddddddddddddd",
                                        "rawText": "ddddddddddddddddddddddddd",
                                        "flags": 97,
                                        "start": 982,
                                        "end": 1012
                                    },
                                    "flags": 97,
                                    "start": 885,
                                    "end": 1012
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "start": 1012,
                                    "end": 1015
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "eeeeeeeeeeeeeeeeeeeeeeeee",
                                    "rawText": "eeeeeeeeeeeeeeeeeeeeeeeee",
                                    "flags": 97,
                                    "start": 1015,
                                    "end": 1045
                                },
                                "flags": 97,
                                "start": 885,
                                "end": 1045
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 885,
                        "end": 1045
                    },
                    "flags": 268435488,
                    "start": 564,
                    "end": 1047
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "aaaaaaaaaaaaaaaaaaaaaaaaa",
                                            "rawText": "aaaaaaaaaaaaaaaaaaaaaaaaa",
                                            "flags": 97,
                                            "start": 1048,
                                            "end": 1076
                                        },
                                        "operatorToken": {
                                            "kind": 33594,
                                            "flags": 96,
                                            "start": 1076,
                                            "end": 1079
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "bbbbbbbbbbbbbbbbbbbbbbbbb",
                                            "rawText": "bbbbbbbbbbbbbbbbbbbbbbbbb",
                                            "flags": 97,
                                            "start": 1079,
                                            "end": 1109
                                        },
                                        "flags": 97,
                                        "start": 1048,
                                        "end": 1109
                                    },
                                    "operatorToken": {
                                        "kind": 33594,
                                        "flags": 96,
                                        "start": 1109,
                                        "end": 1112
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "ccccccccccccccccccccccccc",
                                        "rawText": "ccccccccccccccccccccccccc",
                                        "flags": 97,
                                        "start": 1112,
                                        "end": 1142
                                    },
                                    "flags": 97,
                                    "start": 1048,
                                    "end": 1142
                                },
                                "operatorToken": {
                                    "kind": 33594,
                                    "flags": 96,
                                    "start": 1142,
                                    "end": 1145
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "ddddddddddddddddddddddddd",
                                    "rawText": "ddddddddddddddddddddddddd",
                                    "flags": 97,
                                    "start": 1145,
                                    "end": 1175
                                },
                                "flags": 97,
                                "start": 1048,
                                "end": 1175
                            },
                            "operatorToken": {
                                "kind": 33594,
                                "flags": 96,
                                "start": 1175,
                                "end": 1178
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "eeeeeeeeeeeeeeeeeeeeeeeee",
                                "rawText": "eeeeeeeeeeeeeeeeeeeeeeeee",
                                "flags": 97,
                                "start": 1178,
                                "end": 1208
                            },
                            "flags": 97,
                            "start": 1048,
                            "end": 1208
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1048,
                    "end": 1208
                },
                "flags": 268435488,
                "start": 564,
                "end": 1210
            },
            "flags": 16,
            "start": 564,
            "end": 1211
        }
    ],
    "isModule": false,
    "source": "(\n  aaaaaaaaaaaaaaaaaaaaaaaaa &&\n  bbbbbbbbbbbbbbbbbbbbbbbbb &&\n  ccccccccccccccccccccccccc &&\n  ddddddddddddddddddddddddd &&\n  eeeeeeeeeeeeeeeeeeeeeeeee\n)();\n\n(\n  aa &&\n  bb &&\n  cc &&\n  dd &&\n  ee\n)();\n\n(\n  aaaaaaaaaaaaaaaaaaaaaaaaa +\n  bbbbbbbbbbbbbbbbbbbbbbbbb +\n  ccccccccccccccccccccccccc +\n  ddddddddddddddddddddddddd +\n  eeeeeeeeeeeeeeeeeeeeeeeee\n)();\n\n(\n  aa +\n  bb +\n  cc +\n  dd +\n  ee\n)();\n\n(\n  aaaaaaaaaaaaaaaaaaaaaaaaa &&\n  bbbbbbbbbbbbbbbbbbbbbbbbb &&\n  ccccccccccccccccccccccccc &&\n  ddddddddddddddddddddddddd &&\n  eeeeeeeeeeeeeeeeeeeeeeeee\n)()()();\n\n(\n  aaaaaaaaaaaaaaaaaaaaaaaaa &&\n  bbbbbbbbbbbbbbbbbbbbbbbbb &&\n  ccccccccccccccccccccccccc &&\n  ddddddddddddddddddddddddd &&\n  eeeeeeeeeeeeeeeeeeeeeeeee\n)(\n  aaaaaaaaaaaaaaaaaaaaaaaaa &&\n    bbbbbbbbbbbbbbbbbbbbbbbbb &&\n    ccccccccccccccccccccccccc &&\n    ddddddddddddddddddddddddd &&\n    eeeeeeeeeeeeeeeeeeeeeeeee\n)(\n  aaaaaaaaaaaaaaaaaaaaaaaaa &&\n    bbbbbbbbbbbbbbbbbbbbbbbbb &&\n    ccccccccccccccccccccccccc &&\n    ddddddddddddddddddddddddd &&\n    eeeeeeeeeeeeeeeeeeeeeeeee\n)(\n  aaaaaaaaaaaaaaaaaaaaaaaaa &&\n    bbbbbbbbbbbbbbbbbbbbbbbbb &&\n    ccccccccccccccccccccccccc &&\n    ddddddddddddddddddddddddd &&\n    eeeeeeeeeeeeeeeeeeeeeeeee\n);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 1211
}
```

### Printed

```javascript

  (aaaaaaaaaaaaaaaaaaaaaaaaa && bbbbbbbbbbbbbbbbbbbbbbbbb && ccccccccccccccccccccccccc && ddddddddddddddddddddddddd && eeeeeeeeeeeeeeeeeeeeeeeee)();
  (aa && bb && cc && dd && ee)();
  (aaaaaaaaaaaaaaaaaaaaaaaaa + bbbbbbbbbbbbbbbbbbbbbbbbb + ccccccccccccccccccccccccc + ddddddddddddddddddddddddd + eeeeeeeeeeeeeeeeeeeeeeeee)();
  (aa + bb + cc + dd + ee)();
  (aaaaaaaaaaaaaaaaaaaaaaaaa && bbbbbbbbbbbbbbbbbbbbbbbbb && ccccccccccccccccccccccccc && ddddddddddddddddddddddddd && eeeeeeeeeeeeeeeeeeeeeeeee)()()();
  (aaaaaaaaaaaaaaaaaaaaaaaaa && bbbbbbbbbbbbbbbbbbbbbbbbb && ccccccccccccccccccccccccc && ddddddddddddddddddddddddd && eeeeeeeeeeeeeeeeeeeeeeeee)(aaaaaaaaaaaaaaaaaaaaaaaaa && bbbbbbbbbbbbbbbbbbbbbbbbb && ccccccccccccccccccccccccc && ddddddddddddddddddddddddd && eeeeeeeeeeeeeeeeeeeeeeeee)(aaaaaaaaaaaaaaaaaaaaaaaaa && bbbbbbbbbbbbbbbbbbbbbbbbb && ccccccccccccccccccccccccc && ddddddddddddddddddddddddd && eeeeeeeeeeeeeeeeeeeeeeeee)(aaaaaaaaaaaaaaaaaaaaaaaaa && bbbbbbbbbbbbbbbbbbbbbbbbb && ccccccccccccccccccccccccc && ddddddddddddddddddddddddd && eeeeeeeeeeeeeeeeeeeeeeeee);

```

### Diagnostics

```javascript
✔ No errors
```

