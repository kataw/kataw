# Kataw parser test case

## Input

`````js
a = (
  // Comment 1
  (Math.random() * (yRange * (1 - minVerticalFraction)))
  + (minVerticalFraction * yRange)
) - offset;

a +
 a +
 a + // comment
 a +
 a;

a &&
  longLongLongLongLongLongLongLongLong &&
  longLongLongLongLongLongLongLongLong &&  // comment
  longLongLongLongLongLongLongLongLong &&
  longLongLongLongLongLongLongLongLong

a ||
  longLongLongLongLongLongLongLongLong ||
  longLongLongLongLongLongLongLongLong ||  // comment
  longLongLongLongLongLongLongLongLong ||
  longLongLongLongLongLongLongLongLong

var a = x(abifornCringerMoshedPerplexSawder
+ kochabCooieGameOnOboleUnweave // f
+ glimseGlyphsHazardNoopsTieTie+bifornCringerMoshedPerplexSawder);

foo[
  a +
  a + // comment
  a +
  bar[
    b +
    b +
    b + // comment
    b +
    b
  ]
];

!(
  a +
  a + // comment
  a +
  !(
    b +
    b +
    b + // comment
    b +
    b
  )
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 121,
                        "expression": {
                            "kind": 198,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "Math",
                                                "rawText": "Math",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 24,
                                                "end": 28
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "random",
                                                "rawText": "random",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 29,
                                                "end": 35
                                            },
                                            "flags": 96,
                                            "transformFlags": 2,
                                            "start": 5,
                                            "end": 35
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 36,
                                            "end": 36
                                        },
                                        "flags": 268435488,
                                        "transformFlags": 1,
                                        "start": 5,
                                        "end": 37
                                    },
                                    "operatorToken": {
                                        "kind": 67143222,
                                        "flags": 96,
                                        "transformFlags": 32,
                                        "start": 37,
                                        "end": 39
                                    },
                                    "right": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "yRange",
                                                "rawText": "yRange",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 41,
                                                "end": 47
                                            },
                                            "operatorToken": {
                                                "kind": 67143222,
                                                "flags": 96,
                                                "transformFlags": 32,
                                                "start": 47,
                                                "end": 49
                                            },
                                            "right": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 51,
                                                        "end": 52
                                                    },
                                                    "operatorToken": {
                                                        "kind": 134318643,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 52,
                                                        "end": 54
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "minVerticalFraction",
                                                        "rawText": "minVerticalFraction",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 54,
                                                        "end": 74
                                                    },
                                                    "flags": 96,
                                                    "transformFlags": 5120,
                                                    "start": 51,
                                                    "end": 74
                                                },
                                                "flags": 49,
                                                "transformFlags": 0,
                                                "start": 32,
                                                "end": 75
                                            },
                                            "flags": 96,
                                            "transformFlags": 5120,
                                            "start": 39,
                                            "end": 75
                                        },
                                        "flags": 39,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 76
                                    },
                                    "flags": 268435488,
                                    "transformFlags": 5120,
                                    "start": 5,
                                    "end": 76
                                },
                                "flags": 5,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 77
                            },
                            "operatorToken": {
                                "kind": 99634,
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 77,
                                "end": 81
                            },
                            "right": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "minVerticalFraction",
                                        "rawText": "minVerticalFraction",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 83,
                                        "end": 102
                                    },
                                    "operatorToken": {
                                        "kind": 67143222,
                                        "flags": 96,
                                        "transformFlags": 32,
                                        "start": 102,
                                        "end": 104
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "yRange",
                                        "rawText": "yRange",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 104,
                                        "end": 111
                                    },
                                    "flags": 96,
                                    "transformFlags": 5120,
                                    "start": 81,
                                    "end": 111
                                },
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 112
                            },
                            "flags": 37,
                            "transformFlags": 5120,
                            "start": 5,
                            "end": 112
                        },
                        "flags": 3,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 114
                    },
                    "operatorToken": {
                        "kind": 134318643,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 114,
                        "end": 116
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "offset",
                        "rawText": "offset",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 116,
                        "end": 123
                    },
                    "flags": 35,
                    "transformFlags": 5120,
                    "start": 3,
                    "end": 123
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 123
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 124
        },
        {
            "kind": 120,
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
                                "text": "a",
                                "rawText": "a",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 124,
                                "end": 127
                            },
                            "operatorToken": {
                                "kind": 99634,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 127,
                                "end": 129
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 129,
                                "end": 132
                            },
                            "flags": 97,
                            "transformFlags": 5120,
                            "start": 124,
                            "end": 132
                        },
                        "operatorToken": {
                            "kind": 99634,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 132,
                            "end": 134
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 134,
                            "end": 137
                        },
                        "flags": 97,
                        "transformFlags": 5120,
                        "start": 124,
                        "end": 137
                    },
                    "operatorToken": {
                        "kind": 99634,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 137,
                        "end": 139
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 139,
                        "end": 153
                    },
                    "flags": 97,
                    "transformFlags": 5120,
                    "start": 124,
                    "end": 153
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 153,
                    "end": 155
                },
                "right": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 155,
                    "end": 158
                },
                "flags": 97,
                "transformFlags": 5120,
                "start": 124,
                "end": 158
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 124,
            "end": 159
        },
        {
            "kind": 120,
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
                                "text": "a",
                                "rawText": "a",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 159,
                                "end": 162
                            },
                            "operatorToken": {
                                "kind": 33594,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 162,
                                "end": 165
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "longLongLongLongLongLongLongLongLong",
                                "rawText": "longLongLongLongLongLongLongLongLong",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 165,
                                "end": 204
                            },
                            "flags": 97,
                            "transformFlags": 5120,
                            "start": 159,
                            "end": 204
                        },
                        "operatorToken": {
                            "kind": 33594,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 204,
                            "end": 207
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "longLongLongLongLongLongLongLongLong",
                            "rawText": "longLongLongLongLongLongLongLongLong",
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 207,
                            "end": 246
                        },
                        "flags": 97,
                        "transformFlags": 5120,
                        "start": 159,
                        "end": 246
                    },
                    "operatorToken": {
                        "kind": 33594,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 246,
                        "end": 249
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "longLongLongLongLongLongLongLongLong",
                        "rawText": "longLongLongLongLongLongLongLongLong",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 249,
                        "end": 300
                    },
                    "flags": 97,
                    "transformFlags": 5120,
                    "start": 159,
                    "end": 300
                },
                "operatorToken": {
                    "kind": 33594,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 300,
                    "end": 303
                },
                "right": {
                    "kind": 134299649,
                    "text": "longLongLongLongLongLongLongLongLong",
                    "rawText": "longLongLongLongLongLongLongLongLong",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 303,
                    "end": 342
                },
                "flags": 97,
                "transformFlags": 5120,
                "start": 159,
                "end": 342
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 159,
            "end": 342
        },
        {
            "kind": 120,
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
                                "text": "a",
                                "rawText": "a",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 342,
                                "end": 345
                            },
                            "operatorToken": {
                                "kind": 33339,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 345,
                                "end": 348
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "longLongLongLongLongLongLongLongLong",
                                "rawText": "longLongLongLongLongLongLongLongLong",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 348,
                                "end": 387
                            },
                            "flags": 97,
                            "transformFlags": 5120,
                            "start": 342,
                            "end": 387
                        },
                        "operatorToken": {
                            "kind": 33339,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 387,
                            "end": 390
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "longLongLongLongLongLongLongLongLong",
                            "rawText": "longLongLongLongLongLongLongLongLong",
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 390,
                            "end": 429
                        },
                        "flags": 97,
                        "transformFlags": 5120,
                        "start": 342,
                        "end": 429
                    },
                    "operatorToken": {
                        "kind": 33339,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 429,
                        "end": 432
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "longLongLongLongLongLongLongLongLong",
                        "rawText": "longLongLongLongLongLongLongLongLong",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 432,
                        "end": 483
                    },
                    "flags": 97,
                    "transformFlags": 5120,
                    "start": 342,
                    "end": 483
                },
                "operatorToken": {
                    "kind": 33339,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 483,
                    "end": 486
                },
                "right": {
                    "kind": 134299649,
                    "text": "longLongLongLongLongLongLongLongLong",
                    "rawText": "longLongLongLongLongLongLongLongLong",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 486,
                    "end": 525
                },
                "flags": 97,
                "transformFlags": 5120,
                "start": 342,
                "end": 525
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 342,
            "end": 525
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "transformFlags": 0,
                "start": 525,
                "end": 530
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
                            "transformFlags": 0,
                            "start": 530,
                            "end": 532
                        },
                        "type": null,
                        "initializer": {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 534,
                                "end": 536
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
                                                    "kind": 134299649,
                                                    "text": "abifornCringerMoshedPerplexSawder",
                                                    "rawText": "abifornCringerMoshedPerplexSawder",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 537,
                                                    "end": 570
                                                },
                                                "operatorToken": {
                                                    "kind": 99634,
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 570,
                                                    "end": 572
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "kochabCooieGameOnOboleUnweave",
                                                    "rawText": "kochabCooieGameOnOboleUnweave",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 572,
                                                    "end": 602
                                                },
                                                "flags": 97,
                                                "transformFlags": 5120,
                                                "start": 537,
                                                "end": 602
                                            },
                                            "operatorToken": {
                                                "kind": 99634,
                                                "flags": 97,
                                                "transformFlags": 0,
                                                "start": 602,
                                                "end": 609
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "glimseGlyphsHazardNoopsTieTie",
                                                "rawText": "glimseGlyphsHazardNoopsTieTie",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 609,
                                                "end": 639
                                            },
                                            "flags": 97,
                                            "transformFlags": 5120,
                                            "start": 537,
                                            "end": 639
                                        },
                                        "operatorToken": {
                                            "kind": 99634,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 639,
                                            "end": 640
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "bifornCringerMoshedPerplexSawder",
                                            "rawText": "bifornCringerMoshedPerplexSawder",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 640,
                                            "end": 672
                                        },
                                        "flags": 97,
                                        "transformFlags": 5120,
                                        "start": 537,
                                        "end": 672
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 537,
                                "end": 672
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 534,
                            "end": 673
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 530,
                        "end": 673
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 530,
                "end": 673
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 525,
            "end": 674
        },
        {
            "kind": 120,
            "expression": {
                "kind": 130,
                "member": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 674,
                    "end": 679
                },
                "expression": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 680,
                                "end": 684
                            },
                            "operatorToken": {
                                "kind": 99634,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 684,
                                "end": 686
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 686,
                                "end": 690
                            },
                            "flags": 97,
                            "transformFlags": 5120,
                            "start": 680,
                            "end": 690
                        },
                        "operatorToken": {
                            "kind": 99634,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 690,
                            "end": 692
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 692,
                            "end": 707
                        },
                        "flags": 97,
                        "transformFlags": 5120,
                        "start": 680,
                        "end": 707
                    },
                    "operatorToken": {
                        "kind": 99634,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 707,
                        "end": 709
                    },
                    "right": {
                        "kind": 130,
                        "member": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 709,
                            "end": 715
                        },
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
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 716,
                                            "end": 722
                                        },
                                        "operatorToken": {
                                            "kind": 99634,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 722,
                                            "end": 724
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 724,
                                            "end": 730
                                        },
                                        "flags": 97,
                                        "transformFlags": 5120,
                                        "start": 716,
                                        "end": 730
                                    },
                                    "operatorToken": {
                                        "kind": 99634,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 730,
                                        "end": 732
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 732,
                                        "end": 738
                                    },
                                    "flags": 97,
                                    "transformFlags": 5120,
                                    "start": 716,
                                    "end": 738
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 738,
                                    "end": 740
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 740,
                                    "end": 757
                                },
                                "flags": 97,
                                "transformFlags": 5120,
                                "start": 716,
                                "end": 757
                            },
                            "operatorToken": {
                                "kind": 99634,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 757,
                                "end": 759
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 759,
                                "end": 765
                            },
                            "flags": 97,
                            "transformFlags": 5120,
                            "start": 716,
                            "end": 765
                        },
                        "flags": 536870944,
                        "transformFlags": 4,
                        "start": 709,
                        "end": 769
                    },
                    "flags": 97,
                    "transformFlags": 5120,
                    "start": 680,
                    "end": 769
                },
                "flags": 536870944,
                "transformFlags": 4,
                "start": 674,
                "end": 771
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 674,
            "end": 772
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 772,
                    "end": 775
                },
                "operand": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 776,
                                    "end": 780
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 780,
                                    "end": 782
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 782,
                                    "end": 786
                                },
                                "flags": 97,
                                "transformFlags": 5120,
                                "start": 775,
                                "end": 786
                            },
                            "operatorToken": {
                                "kind": 99634,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 786,
                                "end": 788
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 788,
                                "end": 803
                            },
                            "flags": 97,
                            "transformFlags": 5120,
                            "start": 775,
                            "end": 803
                        },
                        "operatorToken": {
                            "kind": 99634,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 803,
                            "end": 805
                        },
                        "right": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 65584,
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 805,
                                "end": 809
                            },
                            "operand": {
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
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 810,
                                                    "end": 816
                                                },
                                                "operatorToken": {
                                                    "kind": 99634,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 816,
                                                    "end": 818
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 818,
                                                    "end": 824
                                                },
                                                "flags": 97,
                                                "transformFlags": 5120,
                                                "start": 809,
                                                "end": 824
                                            },
                                            "operatorToken": {
                                                "kind": 99634,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 824,
                                                "end": 826
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 97,
                                                "transformFlags": 0,
                                                "start": 826,
                                                "end": 832
                                            },
                                            "flags": 97,
                                            "transformFlags": 5120,
                                            "start": 809,
                                            "end": 832
                                        },
                                        "operatorToken": {
                                            "kind": 99634,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 832,
                                            "end": 834
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 834,
                                            "end": 851
                                        },
                                        "flags": 97,
                                        "transformFlags": 5120,
                                        "start": 809,
                                        "end": 851
                                    },
                                    "operatorToken": {
                                        "kind": 99634,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 851,
                                        "end": 853
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 853,
                                        "end": 859
                                    },
                                    "flags": 97,
                                    "transformFlags": 5120,
                                    "start": 809,
                                    "end": 859
                                },
                                "flags": 809,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 863
                            },
                            "flags": 32,
                            "transformFlags": 1024,
                            "start": 805,
                            "end": 863
                        },
                        "flags": 97,
                        "transformFlags": 5120,
                        "start": 775,
                        "end": 863
                    },
                    "flags": 775,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 865
                },
                "flags": 32,
                "transformFlags": 1024,
                "start": 772,
                "end": 865
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 772,
            "end": 866
        }
    ],
    "isModule": false,
    "source": "a = (\n  // Comment 1\n  (Math.random() * (yRange * (1 - minVerticalFraction)))\n  + (minVerticalFraction * yRange)\n) - offset;\n\na +\n a +\n a + // comment\n a +\n a;\n\na &&\n  longLongLongLongLongLongLongLongLong &&\n  longLongLongLongLongLongLongLongLong &&  // comment\n  longLongLongLongLongLongLongLongLong &&\n  longLongLongLongLongLongLongLongLong\n\na ||\n  longLongLongLongLongLongLongLongLong ||\n  longLongLongLongLongLongLongLongLong ||  // comment\n  longLongLongLongLongLongLongLongLong ||\n  longLongLongLongLongLongLongLongLong\n\nvar a = x(abifornCringerMoshedPerplexSawder\n+ kochabCooieGameOnOboleUnweave // f\n+ glimseGlyphsHazardNoopsTieTie+bifornCringerMoshedPerplexSawder);\n\nfoo[\n  a +\n  a + // comment\n  a +\n  bar[\n    b +\n    b +\n    b + // comment\n    b +\n    b\n  ]\n];\n\n!(\n  a +\n  a + // comment\n  a +\n  !(\n    b +\n    b +\n    b + // comment\n    b +\n    b\n  )\n);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 866
}
```

### Printed

```javascript
a =
  (
    (Math.random() * (yRange * (1 - minVerticalFraction))) +
    (minVerticalFraction * yRange)
  ) - offset
;
a + a + a + a + a;

a &&
  longLongLongLongLongLongLongLongLong &&
  longLongLongLongLongLongLongLongLong &&
  longLongLongLongLongLongLongLongLong &&
  longLongLongLongLongLongLongLongLong;

a ||
  longLongLongLongLongLongLongLongLong ||
  longLongLongLongLongLongLongLongLong ||
  longLongLongLongLongLongLongLongLong ||
  longLongLongLongLongLongLongLongLong;

var a = x(

      abifornCringerMoshedPerplexSawder +
      kochabCooieGameOnOboleUnweave +
      glimseGlyphsHazardNoopsTieTie +
      bifornCringerMoshedPerplexSawder
    
  );

foo[a + a + a + bar[b + b + b + b + b]];

!(a + a + a + !(b + b + b + b + b));

```

### Diagnostics

```javascript
✔ No errors
```

