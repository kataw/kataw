# Kataw parser test case

## Input

`````js
[    /* element 1*/    1    /* end of element 1 */,    2    /* end of element 2 */];

const array = [,, /* comment */];

var array = [, , /* comment */];

[    , /* comment */];

var array = [
    ,
    , /* comment */
];

var array = [ /* comment */];

const array = [1 /* comment */];

const array = [/* comment */ 1 /* comment */];

const array = [
    // comment start
    1,
    2,
    // comment end
];

const array = [
    /* element 1 */
    1,
    /* end of element 1 */
];

const array = [
    /* element 1 */
    1,
    /* end of element 1 */
    /* extra comment */
];

const array = [
    1, /* comment */
];


const array = [
    // comment start
    1,
    2,
    // comment end
];

const array = [
    /* element 1 */
    1,
    /* end of element 1 */
    /* extra comment */
];const array = [
    /* element 1 */
    1,
    /* end of element 1 */
    /* extra comment */
];const array = [
    /* element 1 */
    1,
    /* end of element 1 */
    /* extra comment */
];const array = [
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
                            "start": 1,
                            "end": 24
                        },
                        {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "start": 51,
                            "end": 56
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1,
                    "end": 56
                },
                "flags": 32,
                "start": 0,
                "end": 83
            },
            "flags": 16,
            "start": 0,
            "end": 84
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
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
                            "text": "array",
                            "rawText": "array",
                            "flags": 96,
                            "start": 91,
                            "end": 97
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
                                        "start": 101,
                                        "end": 101
                                    },
                                    {
                                        "kind": 230,
                                        "flags": 96,
                                        "start": 102,
                                        "end": 102
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 32,
                                "start": 101,
                                "end": 103
                            },
                            "flags": 32,
                            "start": 99,
                            "end": 118
                        },
                        "flags": 16,
                        "start": 91,
                        "end": 118
                    }
                ],
                "flags": 16777232,
                "start": 91,
                "end": 118
            },
            "flags": 33554448,
            "start": 84,
            "end": 119
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 119,
                "end": 124
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "array",
                            "rawText": "array",
                            "flags": 96,
                            "start": 124,
                            "end": 130
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
                                        "start": 134,
                                        "end": 134
                                    },
                                    {
                                        "kind": 230,
                                        "flags": 96,
                                        "start": 135,
                                        "end": 135
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 32,
                                "start": 134,
                                "end": 137
                            },
                            "flags": 32,
                            "start": 132,
                            "end": 152
                        },
                        "flags": 16,
                        "start": 124,
                        "end": 152
                    }
                ],
                "flags": 16,
                "start": 124,
                "end": 152
            },
            "flags": 16,
            "start": 119,
            "end": 153
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
                            "start": 156,
                            "end": 156
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "start": 156,
                    "end": 161
                },
                "flags": 33,
                "start": 153,
                "end": 176
            },
            "flags": 16,
            "start": 153,
            "end": 177
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 177,
                "end": 182
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "array",
                            "rawText": "array",
                            "flags": 96,
                            "start": 182,
                            "end": 188
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
                                        "start": 192,
                                        "end": 192
                                    },
                                    {
                                        "kind": 230,
                                        "flags": 96,
                                        "start": 198,
                                        "end": 198
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 33,
                                "start": 192,
                                "end": 204
                            },
                            "flags": 32,
                            "start": 190,
                            "end": 220
                        },
                        "flags": 16,
                        "start": 182,
                        "end": 220
                    }
                ],
                "flags": 16,
                "start": 182,
                "end": 220
            },
            "flags": 16,
            "start": 177,
            "end": 221
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 221,
                "end": 226
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "array",
                            "rawText": "array",
                            "flags": 96,
                            "start": 226,
                            "end": 232
                        },
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 236,
                                "end": 236
                            },
                            "flags": 32,
                            "start": 234,
                            "end": 251
                        },
                        "flags": 16,
                        "start": 226,
                        "end": 251
                    }
                ],
                "flags": 16,
                "start": 226,
                "end": 251
            },
            "flags": 16,
            "start": 221,
            "end": 252
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 252,
                "end": 259
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "array",
                            "rawText": "array",
                            "flags": 96,
                            "start": 259,
                            "end": 265
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
                                        "start": 269,
                                        "end": 270
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 269,
                                "end": 270
                            },
                            "flags": 32,
                            "start": 267,
                            "end": 285
                        },
                        "flags": 16,
                        "start": 259,
                        "end": 285
                    }
                ],
                "flags": 16777232,
                "start": 259,
                "end": 285
            },
            "flags": 33554448,
            "start": 252,
            "end": 286
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 286,
                "end": 293
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "array",
                            "rawText": "array",
                            "flags": 96,
                            "start": 293,
                            "end": 299
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
                                        "start": 303,
                                        "end": 318
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 303,
                                "end": 318
                            },
                            "flags": 32,
                            "start": 301,
                            "end": 333
                        },
                        "flags": 16,
                        "start": 293,
                        "end": 333
                    }
                ],
                "flags": 16777232,
                "start": 293,
                "end": 333
            },
            "flags": 33554448,
            "start": 286,
            "end": 334
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 334,
                "end": 341
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "array",
                            "rawText": "array",
                            "flags": 96,
                            "start": 341,
                            "end": 347
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
                                        "start": 351,
                                        "end": 378
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 97,
                                        "start": 379,
                                        "end": 385
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 33,
                                "start": 351,
                                "end": 386
                            },
                            "flags": 32,
                            "start": 349,
                            "end": 407
                        },
                        "flags": 16,
                        "start": 341,
                        "end": 407
                    }
                ],
                "flags": 16777232,
                "start": 341,
                "end": 407
            },
            "flags": 33554448,
            "start": 334,
            "end": 408
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 408,
                "end": 415
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "array",
                            "rawText": "array",
                            "flags": 96,
                            "start": 415,
                            "end": 421
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
                                        "start": 425,
                                        "end": 451
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 33,
                                "start": 425,
                                "end": 452
                            },
                            "flags": 32,
                            "start": 423,
                            "end": 481
                        },
                        "flags": 16,
                        "start": 415,
                        "end": 481
                    }
                ],
                "flags": 16777232,
                "start": 415,
                "end": 481
            },
            "flags": 33554448,
            "start": 408,
            "end": 482
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 482,
                "end": 489
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "array",
                            "rawText": "array",
                            "flags": 96,
                            "start": 489,
                            "end": 495
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
                                        "start": 499,
                                        "end": 525
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 33,
                                "start": 499,
                                "end": 526
                            },
                            "flags": 32,
                            "start": 497,
                            "end": 579
                        },
                        "flags": 16,
                        "start": 489,
                        "end": 579
                    }
                ],
                "flags": 16777232,
                "start": 489,
                "end": 579
            },
            "flags": 33554448,
            "start": 482,
            "end": 580
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 580,
                "end": 587
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "array",
                            "rawText": "array",
                            "flags": 96,
                            "start": 587,
                            "end": 593
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
                                        "start": 597,
                                        "end": 603
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 33,
                                "start": 597,
                                "end": 604
                            },
                            "flags": 32,
                            "start": 595,
                            "end": 620
                        },
                        "flags": 16,
                        "start": 587,
                        "end": 620
                    }
                ],
                "flags": 16777232,
                "start": 587,
                "end": 620
            },
            "flags": 33554448,
            "start": 580,
            "end": 621
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 621,
                "end": 629
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "array",
                            "rawText": "array",
                            "flags": 96,
                            "start": 629,
                            "end": 635
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
                                        "start": 639,
                                        "end": 666
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 97,
                                        "start": 667,
                                        "end": 673
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 33,
                                "start": 639,
                                "end": 674
                            },
                            "flags": 32,
                            "start": 637,
                            "end": 695
                        },
                        "flags": 16,
                        "start": 629,
                        "end": 695
                    }
                ],
                "flags": 16777232,
                "start": 629,
                "end": 695
            },
            "flags": 33554448,
            "start": 621,
            "end": 696
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 696,
                "end": 703
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "array",
                            "rawText": "array",
                            "flags": 96,
                            "start": 703,
                            "end": 709
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
                                        "start": 713,
                                        "end": 739
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 33,
                                "start": 713,
                                "end": 740
                            },
                            "flags": 32,
                            "start": 711,
                            "end": 793
                        },
                        "flags": 16,
                        "start": 703,
                        "end": 793
                    }
                ],
                "flags": 16777232,
                "start": 703,
                "end": 793
            },
            "flags": 33554448,
            "start": 696,
            "end": 794
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "start": 794,
                "end": 799
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "array",
                            "rawText": "array",
                            "flags": 96,
                            "start": 799,
                            "end": 805
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
                                        "start": 809,
                                        "end": 835
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 33,
                                "start": 809,
                                "end": 836
                            },
                            "flags": 32,
                            "start": 807,
                            "end": 889
                        },
                        "flags": 16,
                        "start": 799,
                        "end": 889
                    }
                ],
                "flags": 16777232,
                "start": 799,
                "end": 889
            },
            "flags": 33554448,
            "start": 794,
            "end": 890
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "start": 890,
                "end": 895
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "array",
                            "rawText": "array",
                            "flags": 96,
                            "start": 895,
                            "end": 901
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
                                        "start": 905,
                                        "end": 931
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 33,
                                "start": 905,
                                "end": 932
                            },
                            "flags": 32,
                            "start": 903,
                            "end": 985
                        },
                        "flags": 16,
                        "start": 895,
                        "end": 985
                    }
                ],
                "flags": 16777232,
                "start": 895,
                "end": 985
            },
            "flags": 33554448,
            "start": 890,
            "end": 986
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "start": 986,
                "end": 991
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "array",
                            "rawText": "array",
                            "flags": 96,
                            "start": 991,
                            "end": 997
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
                                        "start": 1001,
                                        "end": 1027
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 33,
                                "start": 1001,
                                "end": 1028
                            },
                            "flags": 32,
                            "start": 999,
                            "end": 1081
                        },
                        "flags": 16,
                        "start": 991,
                        "end": 1081
                    }
                ],
                "flags": 16777232,
                "start": 991,
                "end": 1081
            },
            "flags": 33554448,
            "start": 986,
            "end": 1082
        }
    ],
    "isModule": false,
    "source": "[    /* element 1*/    1    /* end of element 1 */,    2    /* end of element 2 */];\n\nconst array = [,, /* comment */];\n\nvar array = [, , /* comment */];\n\n[    , /* comment */];\n\nvar array = [\n    ,\n    , /* comment */\n];\n\nvar array = [ /* comment */];\n\nconst array = [1 /* comment */];\n\nconst array = [/* comment */ 1 /* comment */];\n\nconst array = [\n    // comment start\n    1,\n    2,\n    // comment end\n];\n\nconst array = [\n    /* element 1 */\n    1,\n    /* end of element 1 */\n];\n\nconst array = [\n    /* element 1 */\n    1,\n    /* end of element 1 */\n    /* extra comment */\n];\n\nconst array = [\n    1, /* comment */\n];\n\n\nconst array = [\n    // comment start\n    1,\n    2,\n    // comment end\n];\n\nconst array = [\n    /* element 1 */\n    1,\n    /* end of element 1 */\n    /* extra comment */\n];const array = [\n    /* element 1 */\n    1,\n    /* end of element 1 */\n    /* extra comment */\n];const array = [\n    /* element 1 */\n    1,\n    /* end of element 1 */\n    /* extra comment */\n];const array = [\n    /* element 1 */\n    1,\n    /* end of element 1 */\n    /* extra comment */\n];\n\n\n\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 1086
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot redeclare block-scoped variable - start: 124, end: 130
✖ Duplicate identifier - start: 259, end: 265
✖ Duplicate identifier - start: 293, end: 299
✖ Duplicate identifier - start: 341, end: 347
✖ Duplicate identifier - start: 415, end: 421
✖ Duplicate identifier - start: 489, end: 495
✖ Duplicate identifier - start: 587, end: 593
✖ Duplicate identifier - start: 629, end: 635
✖ Duplicate identifier - start: 703, end: 709
✖ Duplicate identifier - start: 799, end: 805
✖ Duplicate identifier - start: 895, end: 901
✖ Duplicate identifier - start: 991, end: 997

```

