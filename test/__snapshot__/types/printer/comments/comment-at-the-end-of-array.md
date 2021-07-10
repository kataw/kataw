# Kataw parser test case

## Input

`````js
[    /* element 1*/    1    /* end of element 1 */,    2    /* end of element 2 */];

const ix = [,, /* comment */];

var iq = [, , /* comment */];

[    , /* comment */];

var aryuray = [
    ,
    , /* comment */
];

var ayiu = [ /* comment */];

const yuid = [1 /* comment */];

const yiyv = [/* comment */ 1 /* comment */];

const yig = [
    // comment start
    1,
    2,
    // comment end
];

const yius = [
    /* element 1 */
    1,
    /* end of element 1 */
];

const yuh = [
    /* element 1 */
    1,
    /* end of element 1 */
    /* extra comment */
];

const hsy = [
    1, /* comment */
];


const aiya = [
    // comment start
    1,
    2,
    // comment end
];

const hj = [
    /* element 1 */
    1,
    /* end of element 1 */
    /* extra comment */
];const ig = [
    /* element 1 */
    1,
    /* end of element 1 */
    /* extra comment */
];const yj = [
    /* element 1 */
    1,
    /* end of element 1 */
    /* extra comment */
];const ka = [
    /* element 1 */
    1,
    /* end of element 1 */
    /* extra comment */
];




`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 24
                        },
                        {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 51,
                            "end": 56
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 56
                },
                "flags": 32,
                "transformFlags": 8,
                "start": 0,
                "end": 83
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 84
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 84,
                "end": 91
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "ix",
                            "rawText": "ix",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 91,
                            "end": 94
                        },
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 230,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 98,
                                        "end": 98
                                    },
                                    {
                                        "kind": 230,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 99,
                                        "end": 99
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 98,
                                "end": 100
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 96,
                            "end": 115
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 91,
                        "end": 115
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 91,
                "end": 115
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 84,
            "end": 116
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "transformFlags": 0,
                "start": 116,
                "end": 121
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "iq",
                            "rawText": "iq",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 121,
                            "end": 124
                        },
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 230,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 128,
                                        "end": 128
                                    },
                                    {
                                        "kind": 230,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 129,
                                        "end": 129
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 128,
                                "end": 131
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 126,
                            "end": 146
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 121,
                        "end": 146
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 121,
                "end": 146
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 116,
            "end": 147
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 230,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 150,
                            "end": 150
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 150,
                    "end": 155
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 147,
                "end": 170
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 147,
            "end": 171
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "transformFlags": 0,
                "start": 171,
                "end": 176
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "aryuray",
                            "rawText": "aryuray",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 176,
                            "end": 184
                        },
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 230,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 188,
                                        "end": 188
                                    },
                                    {
                                        "kind": 230,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 194,
                                        "end": 194
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 33,
                                "transformFlags": 0,
                                "start": 188,
                                "end": 200
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 186,
                            "end": 216
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 176,
                        "end": 216
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 176,
                "end": 216
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 171,
            "end": 217
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "transformFlags": 0,
                "start": 217,
                "end": 222
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "ayiu",
                            "rawText": "ayiu",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 222,
                            "end": 227
                        },
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 231,
                                "end": 231
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 229,
                            "end": 246
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 222,
                        "end": 246
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 222,
                "end": 246
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 217,
            "end": 247
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 247,
                "end": 254
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "yuid",
                            "rawText": "yuid",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 254,
                            "end": 259
                        },
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 263,
                                        "end": 264
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 263,
                                "end": 264
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 261,
                            "end": 279
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 254,
                        "end": 279
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 254,
                "end": 279
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 247,
            "end": 280
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 280,
                "end": 287
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "yiyv",
                            "rawText": "yiyv",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 287,
                            "end": 292
                        },
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 296,
                                        "end": 311
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 296,
                                "end": 311
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 294,
                            "end": 326
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 287,
                        "end": 326
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 287,
                "end": 326
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 280,
            "end": 327
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 327,
                "end": 334
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "yig",
                            "rawText": "yig",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 334,
                            "end": 338
                        },
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 342,
                                        "end": 369
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 370,
                                        "end": 376
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 33,
                                "transformFlags": 0,
                                "start": 342,
                                "end": 377
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 340,
                            "end": 398
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 334,
                        "end": 398
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 334,
                "end": 398
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 327,
            "end": 399
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 399,
                "end": 406
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "yius",
                            "rawText": "yius",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 406,
                            "end": 411
                        },
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 415,
                                        "end": 441
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 33,
                                "transformFlags": 0,
                                "start": 415,
                                "end": 442
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 413,
                            "end": 471
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 406,
                        "end": 471
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 406,
                "end": 471
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 399,
            "end": 472
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 472,
                "end": 479
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "yuh",
                            "rawText": "yuh",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 479,
                            "end": 483
                        },
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 487,
                                        "end": 513
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 33,
                                "transformFlags": 0,
                                "start": 487,
                                "end": 514
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 485,
                            "end": 567
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 479,
                        "end": 567
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 479,
                "end": 567
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 472,
            "end": 568
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 568,
                "end": 575
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "hsy",
                            "rawText": "hsy",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 575,
                            "end": 579
                        },
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 583,
                                        "end": 589
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 33,
                                "transformFlags": 0,
                                "start": 583,
                                "end": 590
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 581,
                            "end": 606
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 575,
                        "end": 606
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 575,
                "end": 606
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 568,
            "end": 607
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 607,
                "end": 615
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "aiya",
                            "rawText": "aiya",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 615,
                            "end": 620
                        },
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 624,
                                        "end": 651
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 652,
                                        "end": 658
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 33,
                                "transformFlags": 0,
                                "start": 624,
                                "end": 659
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 622,
                            "end": 680
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 615,
                        "end": 680
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 615,
                "end": 680
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 607,
            "end": 681
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 681,
                "end": 688
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "hj",
                            "rawText": "hj",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 688,
                            "end": 691
                        },
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 695,
                                        "end": 721
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 33,
                                "transformFlags": 0,
                                "start": 695,
                                "end": 722
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 693,
                            "end": 775
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 688,
                        "end": 775
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 688,
                "end": 775
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 681,
            "end": 776
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "transformFlags": 0,
                "start": 776,
                "end": 781
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "ig",
                            "rawText": "ig",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 781,
                            "end": 784
                        },
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 788,
                                        "end": 814
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 33,
                                "transformFlags": 0,
                                "start": 788,
                                "end": 815
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 786,
                            "end": 868
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 781,
                        "end": 868
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 781,
                "end": 868
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 776,
            "end": 869
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "transformFlags": 0,
                "start": 869,
                "end": 874
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "yj",
                            "rawText": "yj",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 874,
                            "end": 877
                        },
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 881,
                                        "end": 907
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 33,
                                "transformFlags": 0,
                                "start": 881,
                                "end": 908
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 879,
                            "end": 961
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 874,
                        "end": 961
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 874,
                "end": 961
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 869,
            "end": 962
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "transformFlags": 0,
                "start": 962,
                "end": 967
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "ka",
                            "rawText": "ka",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 967,
                            "end": 970
                        },
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 974,
                                        "end": 1000
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 33,
                                "transformFlags": 0,
                                "start": 974,
                                "end": 1001
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 972,
                            "end": 1054
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 967,
                        "end": 1054
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 967,
                "end": 1054
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 962,
            "end": 1055
        }
    ],
    "isModule": false,
    "source": "[    /* element 1*/    1    /* end of element 1 */,    2    /* end of element 2 */];\n\nconst ix = [,, /* comment */];\n\nvar iq = [, , /* comment */];\n\n[    , /* comment */];\n\nvar aryuray = [\n    ,\n    , /* comment */\n];\n\nvar ayiu = [ /* comment */];\n\nconst yuid = [1 /* comment */];\n\nconst yiyv = [/* comment */ 1 /* comment */];\n\nconst yig = [\n    // comment start\n    1,\n    2,\n    // comment end\n];\n\nconst yius = [\n    /* element 1 */\n    1,\n    /* end of element 1 */\n];\n\nconst yuh = [\n    /* element 1 */\n    1,\n    /* end of element 1 */\n    /* extra comment */\n];\n\nconst hsy = [\n    1, /* comment */\n];\n\n\nconst aiya = [\n    // comment start\n    1,\n    2,\n    // comment end\n];\n\nconst hj = [\n    /* element 1 */\n    1,\n    /* end of element 1 */\n    /* extra comment */\n];const ig = [\n    /* element 1 */\n    1,\n    /* end of element 1 */\n    /* extra comment */\n];const yj = [\n    /* element 1 */\n    1,\n    /* end of element 1 */\n    /* extra comment */\n];const ka = [\n    /* element 1 */\n    1,\n    /* end of element 1 */\n    /* extra comment */\n];\n\n\n\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 1059
}
```

### Printed

```javascript
[1, 2];
const ix = [, ,];

var iq = [, ,];

[,];

var aryuray = [, ,];

var ayiu = [];

const yuid = [1];

const yiyv = [1];

const yig = [
    // comment start
    1, 2,];

const yius = [
    /* element 1 */
    1,];

const yuh = [
    /* element 1 */
    1,];

const hsy = [1,];

const aiya = [
    // comment start
    1, 2,];

const hj = [
    /* element 1 */
    1,];
const ig = [
    /* element 1 */
    1,];const yj = [
    /* element 1 */
    1,];const ka = [
    /* element 1 */
    1,];
```

### Diagnostics

```javascript
✔ No errors
```

