# Kataw parser test case

## Input

`````js
a = b || /** Comment */
c;

a = b /** Comment */ ||
c;

a = b || /** TODO this is a very very very very long comment that makes it go > 80 columns */
c;

a = b /** TODO this is a very very very very long comment that makes it go > 80 columns */ ||
c;

a = b || /** TODO this is a very very very very long comment that makes it go > 80 columns */ c;

a = b && /** Comment */
c;

a = b /** Comment */ &&
c;

a = b && /** TODO this is a very very very very long comment that makes it go > 80 columns */
c;

a = b /** TODO this is a very very very very long comment that makes it go > 80 columns */ &&
c;

a = b && /** TODO this is a very very very very long comment that makes it go > 80 columns */ c;

a = b + /** Comment */
c;

a = b /** Comment */ +
c;

a = b + /** TODO this is a very very very very long comment that makes it go > 80 columns */
c;

a = b /** TODO this is a very very very very long comment that makes it go > 80 columns */ +
c;

a = b + /** TODO this is a very very very very long comment that makes it go > 80 columns */ c;
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
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 3,
                        "end": 5
                    },
                    "operatorToken": {
                        "kind": 33339,
                        "flags": 96,
                        "start": 5,
                        "end": 8
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 8,
                        "end": 25
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 25
                },
                "flags": 32,
                "start": 0,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 26
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 26,
                    "end": 29
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 29,
                    "end": 31
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 31,
                        "end": 33
                    },
                    "operatorToken": {
                        "kind": 33339,
                        "flags": 96,
                        "start": 33,
                        "end": 51
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 51,
                        "end": 53
                    },
                    "flags": 32,
                    "start": 31,
                    "end": 53
                },
                "flags": 32,
                "start": 26,
                "end": 53
            },
            "flags": 16,
            "start": 26,
            "end": 54
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 54,
                    "end": 57
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 57,
                    "end": 59
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 59,
                        "end": 61
                    },
                    "operatorToken": {
                        "kind": 33339,
                        "flags": 96,
                        "start": 61,
                        "end": 64
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 64,
                        "end": 151
                    },
                    "flags": 32,
                    "start": 59,
                    "end": 151
                },
                "flags": 32,
                "start": 54,
                "end": 151
            },
            "flags": 16,
            "start": 54,
            "end": 152
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 152,
                    "end": 155
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 155,
                    "end": 157
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 157,
                        "end": 159
                    },
                    "operatorToken": {
                        "kind": 33339,
                        "flags": 96,
                        "start": 159,
                        "end": 247
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 247,
                        "end": 249
                    },
                    "flags": 32,
                    "start": 157,
                    "end": 249
                },
                "flags": 32,
                "start": 152,
                "end": 249
            },
            "flags": 16,
            "start": 152,
            "end": 250
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 250,
                    "end": 253
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 253,
                    "end": 255
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 255,
                        "end": 257
                    },
                    "operatorToken": {
                        "kind": 33339,
                        "flags": 96,
                        "start": 257,
                        "end": 260
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 260,
                        "end": 347
                    },
                    "flags": 32,
                    "start": 255,
                    "end": 347
                },
                "flags": 32,
                "start": 250,
                "end": 347
            },
            "flags": 16,
            "start": 250,
            "end": 348
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 348,
                    "end": 351
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 351,
                    "end": 353
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 353,
                        "end": 355
                    },
                    "operatorToken": {
                        "kind": 33594,
                        "flags": 96,
                        "start": 355,
                        "end": 358
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 358,
                        "end": 375
                    },
                    "flags": 32,
                    "start": 353,
                    "end": 375
                },
                "flags": 32,
                "start": 348,
                "end": 375
            },
            "flags": 16,
            "start": 348,
            "end": 376
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 376,
                    "end": 379
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 379,
                    "end": 381
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 381,
                        "end": 383
                    },
                    "operatorToken": {
                        "kind": 33594,
                        "flags": 96,
                        "start": 383,
                        "end": 401
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 401,
                        "end": 403
                    },
                    "flags": 32,
                    "start": 381,
                    "end": 403
                },
                "flags": 32,
                "start": 376,
                "end": 403
            },
            "flags": 16,
            "start": 376,
            "end": 404
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 404,
                    "end": 407
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 407,
                    "end": 409
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 409,
                        "end": 411
                    },
                    "operatorToken": {
                        "kind": 33594,
                        "flags": 96,
                        "start": 411,
                        "end": 414
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 414,
                        "end": 501
                    },
                    "flags": 32,
                    "start": 409,
                    "end": 501
                },
                "flags": 32,
                "start": 404,
                "end": 501
            },
            "flags": 16,
            "start": 404,
            "end": 502
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 502,
                    "end": 505
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 505,
                    "end": 507
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 507,
                        "end": 509
                    },
                    "operatorToken": {
                        "kind": 33594,
                        "flags": 96,
                        "start": 509,
                        "end": 597
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 597,
                        "end": 599
                    },
                    "flags": 32,
                    "start": 507,
                    "end": 599
                },
                "flags": 32,
                "start": 502,
                "end": 599
            },
            "flags": 16,
            "start": 502,
            "end": 600
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 600,
                    "end": 603
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 603,
                    "end": 605
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 605,
                        "end": 607
                    },
                    "operatorToken": {
                        "kind": 33594,
                        "flags": 96,
                        "start": 607,
                        "end": 610
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 610,
                        "end": 697
                    },
                    "flags": 32,
                    "start": 605,
                    "end": 697
                },
                "flags": 32,
                "start": 600,
                "end": 697
            },
            "flags": 16,
            "start": 600,
            "end": 698
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 698,
                    "end": 701
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 701,
                    "end": 703
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 703,
                        "end": 705
                    },
                    "operatorToken": {
                        "kind": 99634,
                        "flags": 96,
                        "start": 705,
                        "end": 707
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 707,
                        "end": 724
                    },
                    "flags": 32,
                    "start": 703,
                    "end": 724
                },
                "flags": 32,
                "start": 698,
                "end": 724
            },
            "flags": 16,
            "start": 698,
            "end": 725
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 725,
                    "end": 728
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 728,
                    "end": 730
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 730,
                        "end": 732
                    },
                    "operatorToken": {
                        "kind": 99634,
                        "flags": 96,
                        "start": 732,
                        "end": 749
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 749,
                        "end": 751
                    },
                    "flags": 32,
                    "start": 730,
                    "end": 751
                },
                "flags": 32,
                "start": 725,
                "end": 751
            },
            "flags": 16,
            "start": 725,
            "end": 752
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 752,
                    "end": 755
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 755,
                    "end": 757
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 757,
                        "end": 759
                    },
                    "operatorToken": {
                        "kind": 99634,
                        "flags": 96,
                        "start": 759,
                        "end": 761
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 761,
                        "end": 848
                    },
                    "flags": 32,
                    "start": 757,
                    "end": 848
                },
                "flags": 32,
                "start": 752,
                "end": 848
            },
            "flags": 16,
            "start": 752,
            "end": 849
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 849,
                    "end": 852
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 852,
                    "end": 854
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 854,
                        "end": 856
                    },
                    "operatorToken": {
                        "kind": 99634,
                        "flags": 96,
                        "start": 856,
                        "end": 943
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 943,
                        "end": 945
                    },
                    "flags": 32,
                    "start": 854,
                    "end": 945
                },
                "flags": 32,
                "start": 849,
                "end": 945
            },
            "flags": 16,
            "start": 849,
            "end": 946
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 946,
                    "end": 949
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 949,
                    "end": 951
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 951,
                        "end": 953
                    },
                    "operatorToken": {
                        "kind": 99634,
                        "flags": 96,
                        "start": 953,
                        "end": 955
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 955,
                        "end": 1042
                    },
                    "flags": 32,
                    "start": 951,
                    "end": 1042
                },
                "flags": 32,
                "start": 946,
                "end": 1042
            },
            "flags": 16,
            "start": 946,
            "end": 1043
        }
    ],
    "isModule": false,
    "source": "a = b || /** Comment */\nc;\n\na = b /** Comment */ ||\nc;\n\na = b || /** TODO this is a very very very very long comment that makes it go > 80 columns */\nc;\n\na = b /** TODO this is a very very very very long comment that makes it go > 80 columns */ ||\nc;\n\na = b || /** TODO this is a very very very very long comment that makes it go > 80 columns */ c;\n\na = b && /** Comment */\nc;\n\na = b /** Comment */ &&\nc;\n\na = b && /** TODO this is a very very very very long comment that makes it go > 80 columns */\nc;\n\na = b /** TODO this is a very very very very long comment that makes it go > 80 columns */ &&\nc;\n\na = b && /** TODO this is a very very very very long comment that makes it go > 80 columns */ c;\n\na = b + /** Comment */\nc;\n\na = b /** Comment */ +\nc;\n\na = b + /** TODO this is a very very very very long comment that makes it go > 80 columns */\nc;\n\na = b /** TODO this is a very very very very long comment that makes it go > 80 columns */ +\nc;\n\na = b + /** TODO this is a very very very very long comment that makes it go > 80 columns */ c;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 1043
}
```

### Printed

```javascript

a = b ||/** Comment */ c;
a = b/** Comment */ || c;
a = b ||/** TODO this is a very very very very long comment that makes it go > 80 columns */ c;
a = b/** TODO this is a very very very very long comment that makes it go > 80 columns */ || c;
a = b ||/** TODO this is a very very very very long comment that makes it go > 80 columns */ c;
a = b &&/** Comment */ c;
a = b/** Comment */ && c;
a = b &&/** TODO this is a very very very very long comment that makes it go > 80 columns */ c;
a = b/** TODO this is a very very very very long comment that makes it go > 80 columns */ && c;
a = b &&/** TODO this is a very very very very long comment that makes it go > 80 columns */ c;
a = b +/** Comment */ c;
a = b/** Comment */ + c;
a = b +/** TODO this is a very very very very long comment that makes it go > 80 columns */ c;
a = b/** TODO this is a very very very very long comment that makes it go > 80 columns */ + c;
a = b +/** TODO this is a very very very very long comment that makes it go > 80 columns */ c;

```

### Diagnostics

```javascript
✔ No errors
```

