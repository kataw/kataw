# Kataw parser test case

## Input

`````js
({a: ("string") / a[3](((((a /= [b.c] = ({x)}))))) });
({a: ("string") / a[3](((((a /= [b.c] = ({x)}))))) });
({a: ("string") / a[3](((((a /= [b.c] = ([x / 2]()=> a)))))) });
({a: ("string") / a[3](((((a /= [b.c] = ([x / 2]())))))=>) });
({a: ("string") / a[3](((((a /= [b.c] => ([x / 2]())))))) });
({a: ("string") / a[3](((((a /= [b.c => a] = ([x / 2]())))))) });
({a: ("string") / a[3](((((a /= [b.(c) => a] = ([x / 2]())))))) });
({a: ("string") / a[3](((((a /= [(b.c) => a] = ([x / 2]())))))) });
({a: ("string") / a[3](((((a /= [(c) => a] = ([x / 2]())))))) });
(({a: ("string") / a[3](((((a /= [b.c ] = ([x / 2]())))))) }))=> a;
((({a: ("string") / a[3](((((a /= [b.c ] = ([x / 2]())))))) })) = a;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
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
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "string",
                                            "rawText": "string",
                                            "flags": 768,
                                            "start": 6,
                                            "end": 14
                                        },
                                        "flags": 256,
                                        "start": 4,
                                        "end": 15
                                    },
                                    "operatorToken": {
                                        "kind": 35640,
                                        "flags": 768,
                                        "start": 15,
                                        "end": 17
                                    },
                                    "right": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 130,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 768,
                                                "start": 17,
                                                "end": 19
                                            },
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 3,
                                                "rawText": "3",
                                                "flags": 768,
                                                "start": 20,
                                                "end": 21
                                            },
                                            "flags": 256,
                                            "start": 17,
                                            "end": 22
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [
                                                {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 121,
                                                        "expression": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 121,
                                                                "expression": {
                                                                    "kind": 132,
                                                                    "flags": 256,
                                                                    "start": 26,
                                                                    "end": 44
                                                                },
                                                                "flags": 256,
                                                                "start": 26,
                                                                "end": 44
                                                            },
                                                            "flags": 256,
                                                            "start": 25,
                                                            "end": 44
                                                        },
                                                        "flags": 256,
                                                        "start": 24,
                                                        "end": 44
                                                    },
                                                    "flags": 256,
                                                    "start": 23,
                                                    "end": 44
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 23,
                                            "end": 44
                                        },
                                        "flags": 256,
                                        "start": 17,
                                        "end": 44
                                    },
                                    "flags": 256,
                                    "start": 2,
                                    "end": 44
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 2,
                                    "end": 3
                                },
                                "flags": 256,
                                "start": 2,
                                "end": 44
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 2,
                        "end": 44
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 45
                },
                "flags": 256,
                "start": 0,
                "end": 46
            },
            "flags": 128,
            "start": 0,
            "end": 46
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 53,
            "end": 54
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
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "string",
                                            "rawText": "string",
                                            "flags": 768,
                                            "start": 61,
                                            "end": 69
                                        },
                                        "flags": 256,
                                        "start": 59,
                                        "end": 70
                                    },
                                    "operatorToken": {
                                        "kind": 35640,
                                        "flags": 768,
                                        "start": 70,
                                        "end": 72
                                    },
                                    "right": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 130,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 768,
                                                "start": 72,
                                                "end": 74
                                            },
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 3,
                                                "rawText": "3",
                                                "flags": 768,
                                                "start": 75,
                                                "end": 76
                                            },
                                            "flags": 256,
                                            "start": 72,
                                            "end": 77
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [
                                                {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 121,
                                                        "expression": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 121,
                                                                "expression": {
                                                                    "kind": 132,
                                                                    "flags": 256,
                                                                    "start": 81,
                                                                    "end": 99
                                                                },
                                                                "flags": 256,
                                                                "start": 81,
                                                                "end": 99
                                                            },
                                                            "flags": 256,
                                                            "start": 80,
                                                            "end": 99
                                                        },
                                                        "flags": 256,
                                                        "start": 79,
                                                        "end": 99
                                                    },
                                                    "flags": 256,
                                                    "start": 78,
                                                    "end": 99
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 78,
                                            "end": 99
                                        },
                                        "flags": 256,
                                        "start": 72,
                                        "end": 99
                                    },
                                    "flags": 256,
                                    "start": 57,
                                    "end": 99
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 57,
                                    "end": 58
                                },
                                "flags": 256,
                                "start": 57,
                                "end": 99
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 57,
                        "end": 99
                    },
                    "flags": 256,
                    "start": 56,
                    "end": 100
                },
                "flags": 256,
                "start": 54,
                "end": 101
            },
            "flags": 128,
            "start": 54,
            "end": 101
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 108,
            "end": 109
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 160,
                    "end": 162
                },
                "typeParameters": null,
                "parameters": [
                    null
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 162,
                    "end": 164
                },
                "flags": 256,
                "start": 109,
                "end": 164
            },
            "flags": 128,
            "start": 109,
            "end": 164
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 173,
            "end": 174
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 230,
                    "end": 232
                },
                "typeParameters": null,
                "parameters": [
                    null
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 232,
                    "end": 232
                },
                "flags": 256,
                "start": 174,
                "end": 232
            },
            "flags": 128,
            "start": 174,
            "end": 232
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 236,
            "end": 237
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 275,
                    "end": 278
                },
                "typeParameters": null,
                "parameters": [
                    null
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 121,
                    "expression": {
                        "kind": 131,
                        "expression": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 281,
                                            "end": 282
                                        },
                                        "operatorToken": {
                                            "kind": 35640,
                                            "flags": 768,
                                            "start": 282,
                                            "end": 284
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 768,
                                            "start": 284,
                                            "end": 286
                                        },
                                        "flags": 256,
                                        "start": 281,
                                        "end": 286
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 281,
                                "end": 286
                            },
                            "flags": 256,
                            "start": 280,
                            "end": 287
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 288,
                            "end": 288
                        },
                        "flags": 256,
                        "start": 278,
                        "end": 289
                    },
                    "flags": 256,
                    "start": 278,
                    "end": 290
                },
                "flags": 256,
                "start": 237,
                "end": 290
            },
            "flags": 128,
            "start": 237,
            "end": 290
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 298,
            "end": 299
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 336,
                    "end": 339
                },
                "typeParameters": null,
                "parameters": [
                    null
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 339,
                    "end": 341
                },
                "flags": 256,
                "start": 299,
                "end": 341
            },
            "flags": 128,
            "start": 299,
            "end": 341
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 347,
                                        "end": 348
                                    },
                                    "operatorToken": {
                                        "kind": 35640,
                                        "flags": 768,
                                        "start": 348,
                                        "end": 350
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 768,
                                        "start": 350,
                                        "end": 352
                                    },
                                    "flags": 256,
                                    "start": 347,
                                    "end": 352
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 347,
                            "end": 352
                        },
                        "flags": 256,
                        "start": 346,
                        "end": 353
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 354,
                        "end": 354
                    },
                    "flags": 256,
                    "start": 344,
                    "end": 355
                },
                "flags": 256,
                "start": 344,
                "end": 356
            },
            "flags": 128,
            "start": 344,
            "end": 356
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 364,
            "end": 365
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 404,
                    "end": 407
                },
                "typeParameters": null,
                "parameters": [
                    null
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 407,
                    "end": 409
                },
                "flags": 256,
                "start": 365,
                "end": 409
            },
            "flags": 128,
            "start": 365,
            "end": 409
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 415,
                                        "end": 416
                                    },
                                    "operatorToken": {
                                        "kind": 35640,
                                        "flags": 768,
                                        "start": 416,
                                        "end": 418
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 768,
                                        "start": 418,
                                        "end": 420
                                    },
                                    "flags": 256,
                                    "start": 415,
                                    "end": 420
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 415,
                            "end": 420
                        },
                        "flags": 256,
                        "start": 414,
                        "end": 421
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 422,
                        "end": 422
                    },
                    "flags": 256,
                    "start": 412,
                    "end": 423
                },
                "flags": 256,
                "start": 412,
                "end": 424
            },
            "flags": 128,
            "start": 412,
            "end": 424
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 432,
            "end": 433
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 472,
                    "end": 475
                },
                "typeParameters": null,
                "parameters": [
                    null
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 475,
                    "end": 477
                },
                "flags": 256,
                "start": 433,
                "end": 477
            },
            "flags": 128,
            "start": 433,
            "end": 477
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 483,
                                        "end": 484
                                    },
                                    "operatorToken": {
                                        "kind": 35640,
                                        "flags": 768,
                                        "start": 484,
                                        "end": 486
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 768,
                                        "start": 486,
                                        "end": 488
                                    },
                                    "flags": 256,
                                    "start": 483,
                                    "end": 488
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 483,
                            "end": 488
                        },
                        "flags": 256,
                        "start": 482,
                        "end": 489
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 490,
                        "end": 490
                    },
                    "flags": 256,
                    "start": 480,
                    "end": 491
                },
                "flags": 256,
                "start": 480,
                "end": 492
            },
            "flags": 128,
            "start": 480,
            "end": 492
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 500,
            "end": 501
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
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "string",
                                            "rawText": "string",
                                            "flags": 768,
                                            "start": 508,
                                            "end": 516
                                        },
                                        "flags": 256,
                                        "start": 506,
                                        "end": 517
                                    },
                                    "operatorToken": {
                                        "kind": 35640,
                                        "flags": 768,
                                        "start": 517,
                                        "end": 519
                                    },
                                    "right": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 130,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 768,
                                                "start": 519,
                                                "end": 521
                                            },
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 3,
                                                "rawText": "3",
                                                "flags": 768,
                                                "start": 522,
                                                "end": 523
                                            },
                                            "flags": 256,
                                            "start": 519,
                                            "end": 524
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [
                                                {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 121,
                                                        "expression": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 121,
                                                                "expression": {
                                                                    "kind": 125,
                                                                    "left": {
                                                                        "kind": 134299649,
                                                                        "text": "a",
                                                                        "rawText": "a",
                                                                        "flags": 768,
                                                                        "start": 529,
                                                                        "end": 530
                                                                    },
                                                                    "operatorToken": {
                                                                        "kind": 4133,
                                                                        "flags": 768,
                                                                        "start": 530,
                                                                        "end": 533
                                                                    },
                                                                    "right": {
                                                                        "kind": 125,
                                                                        "left": {
                                                                            "kind": 119,
                                                                            "elementList": {
                                                                                "kind": 270,
                                                                                "elements": [
                                                                                    {
                                                                                        "kind": 271,
                                                                                        "arrowToken": {
                                                                                            "kind": 10,
                                                                                            "flags": 768,
                                                                                            "start": 538,
                                                                                            "end": 541
                                                                                        },
                                                                                        "typeParameters": null,
                                                                                        "parameters": [
                                                                                            {
                                                                                                "kind": 134299649,
                                                                                                "text": "c",
                                                                                                "rawText": "c",
                                                                                                "flags": 768,
                                                                                                "start": 536,
                                                                                                "end": 537
                                                                                            }
                                                                                        ],
                                                                                        "asyncToken": null,
                                                                                        "returnType": null,
                                                                                        "contents": {
                                                                                            "kind": 134299649,
                                                                                            "text": "a",
                                                                                            "rawText": "a",
                                                                                            "flags": 768,
                                                                                            "start": 541,
                                                                                            "end": 543
                                                                                        },
                                                                                        "flags": 256,
                                                                                        "start": 535,
                                                                                        "end": 543
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 256,
                                                                                "start": 535,
                                                                                "end": 543
                                                                            },
                                                                            "flags": 256,
                                                                            "start": 533,
                                                                            "end": 544
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 4125,
                                                                            "flags": 768,
                                                                            "start": 544,
                                                                            "end": 546
                                                                        },
                                                                        "right": {
                                                                            "kind": 121,
                                                                            "expression": {
                                                                                "kind": 131,
                                                                                "expression": {
                                                                                    "kind": 119,
                                                                                    "elementList": {
                                                                                        "kind": 270,
                                                                                        "elements": [
                                                                                            {
                                                                                                "kind": 198,
                                                                                                "left": {
                                                                                                    "kind": 134299649,
                                                                                                    "text": "x",
                                                                                                    "rawText": "x",
                                                                                                    "flags": 768,
                                                                                                    "start": 549,
                                                                                                    "end": 550
                                                                                                },
                                                                                                "operatorToken": {
                                                                                                    "kind": 35640,
                                                                                                    "flags": 768,
                                                                                                    "start": 550,
                                                                                                    "end": 552
                                                                                                },
                                                                                                "right": {
                                                                                                    "kind": 201392130,
                                                                                                    "text": 2,
                                                                                                    "rawText": "2",
                                                                                                    "flags": 768,
                                                                                                    "start": 552,
                                                                                                    "end": 554
                                                                                                },
                                                                                                "flags": 256,
                                                                                                "start": 549,
                                                                                                "end": 554
                                                                                            }
                                                                                        ],
                                                                                        "trailingComma": false,
                                                                                        "flags": 256,
                                                                                        "start": 549,
                                                                                        "end": 554
                                                                                    },
                                                                                    "flags": 256,
                                                                                    "start": 548,
                                                                                    "end": 555
                                                                                },
                                                                                "argumentList": {
                                                                                    "kind": 256,
                                                                                    "elements": [],
                                                                                    "trailingComma": false,
                                                                                    "flags": 256,
                                                                                    "start": 556,
                                                                                    "end": 556
                                                                                },
                                                                                "flags": 256,
                                                                                "start": 546,
                                                                                "end": 557
                                                                            },
                                                                            "flags": 256,
                                                                            "start": 546,
                                                                            "end": 558
                                                                        },
                                                                        "flags": 256,
                                                                        "start": 533,
                                                                        "end": 558
                                                                    },
                                                                    "flags": 256,
                                                                    "start": 528,
                                                                    "end": 558
                                                                },
                                                                "flags": 256,
                                                                "start": 528,
                                                                "end": 559
                                                            },
                                                            "flags": 256,
                                                            "start": 527,
                                                            "end": 560
                                                        },
                                                        "flags": 256,
                                                        "start": 526,
                                                        "end": 561
                                                    },
                                                    "flags": 256,
                                                    "start": 525,
                                                    "end": 562
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 525,
                                            "end": 562
                                        },
                                        "flags": 256,
                                        "start": 519,
                                        "end": 563
                                    },
                                    "flags": 256,
                                    "start": 504,
                                    "end": 563
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 504,
                                    "end": 505
                                },
                                "flags": 256,
                                "start": 504,
                                "end": 563
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 504,
                        "end": 563
                    },
                    "flags": 256,
                    "start": 503,
                    "end": 565
                },
                "flags": 256,
                "start": 501,
                "end": 566
            },
            "flags": 128,
            "start": 501,
            "end": 567
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 201392131,
                                                "text": "string",
                                                "rawText": "string",
                                                "flags": 768,
                                                "start": 575,
                                                "end": 583
                                            },
                                            "flags": 256,
                                            "start": 573,
                                            "end": 584
                                        },
                                        "operatorToken": {
                                            "kind": 35640,
                                            "flags": 768,
                                            "start": 584,
                                            "end": 586
                                        },
                                        "right": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 130,
                                                "member": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 768,
                                                    "start": 586,
                                                    "end": 588
                                                },
                                                "expression": {
                                                    "kind": 201392130,
                                                    "text": 3,
                                                    "rawText": "3",
                                                    "flags": 768,
                                                    "start": 589,
                                                    "end": 590
                                                },
                                                "flags": 256,
                                                "start": 586,
                                                "end": 591
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [
                                                    {
                                                        "kind": 121,
                                                        "expression": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 121,
                                                                "expression": {
                                                                    "kind": 121,
                                                                    "expression": {
                                                                        "kind": 125,
                                                                        "left": {
                                                                            "kind": 134299649,
                                                                            "text": "a",
                                                                            "rawText": "a",
                                                                            "flags": 768,
                                                                            "start": 596,
                                                                            "end": 597
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 4133,
                                                                            "flags": 768,
                                                                            "start": 597,
                                                                            "end": 600
                                                                        },
                                                                        "right": {
                                                                            "kind": 125,
                                                                            "left": {
                                                                                "kind": 119,
                                                                                "elementList": {
                                                                                    "kind": 270,
                                                                                    "elements": [
                                                                                        {
                                                                                            "kind": 129,
                                                                                            "member": {
                                                                                                "kind": 134299649,
                                                                                                "text": "b",
                                                                                                "rawText": "b",
                                                                                                "flags": 768,
                                                                                                "start": 602,
                                                                                                "end": 603
                                                                                            },
                                                                                            "expression": {
                                                                                                "kind": 134299649,
                                                                                                "text": "c",
                                                                                                "rawText": "c",
                                                                                                "flags": 768,
                                                                                                "start": 604,
                                                                                                "end": 605
                                                                                            },
                                                                                            "flags": 256,
                                                                                            "start": 602,
                                                                                            "end": 605
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 256,
                                                                                    "start": 602,
                                                                                    "end": 605
                                                                                },
                                                                                "flags": 256,
                                                                                "start": 600,
                                                                                "end": 607
                                                                            },
                                                                            "operatorToken": {
                                                                                "kind": 4125,
                                                                                "flags": 768,
                                                                                "start": 607,
                                                                                "end": 609
                                                                            },
                                                                            "right": {
                                                                                "kind": 121,
                                                                                "expression": {
                                                                                    "kind": 131,
                                                                                    "expression": {
                                                                                        "kind": 119,
                                                                                        "elementList": {
                                                                                            "kind": 270,
                                                                                            "elements": [
                                                                                                {
                                                                                                    "kind": 198,
                                                                                                    "left": {
                                                                                                        "kind": 134299649,
                                                                                                        "text": "x",
                                                                                                        "rawText": "x",
                                                                                                        "flags": 768,
                                                                                                        "start": 612,
                                                                                                        "end": 613
                                                                                                    },
                                                                                                    "operatorToken": {
                                                                                                        "kind": 35640,
                                                                                                        "flags": 768,
                                                                                                        "start": 613,
                                                                                                        "end": 615
                                                                                                    },
                                                                                                    "right": {
                                                                                                        "kind": 201392130,
                                                                                                        "text": 2,
                                                                                                        "rawText": "2",
                                                                                                        "flags": 768,
                                                                                                        "start": 615,
                                                                                                        "end": 617
                                                                                                    },
                                                                                                    "flags": 256,
                                                                                                    "start": 612,
                                                                                                    "end": 617
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "flags": 256,
                                                                                            "start": 612,
                                                                                            "end": 617
                                                                                        },
                                                                                        "flags": 256,
                                                                                        "start": 611,
                                                                                        "end": 618
                                                                                    },
                                                                                    "argumentList": {
                                                                                        "kind": 256,
                                                                                        "elements": [],
                                                                                        "trailingComma": false,
                                                                                        "flags": 256,
                                                                                        "start": 619,
                                                                                        "end": 619
                                                                                    },
                                                                                    "flags": 256,
                                                                                    "start": 609,
                                                                                    "end": 620
                                                                                },
                                                                                "flags": 256,
                                                                                "start": 609,
                                                                                "end": 621
                                                                            },
                                                                            "flags": 256,
                                                                            "start": 600,
                                                                            "end": 621
                                                                        },
                                                                        "flags": 256,
                                                                        "start": 595,
                                                                        "end": 621
                                                                    },
                                                                    "flags": 256,
                                                                    "start": 595,
                                                                    "end": 622
                                                                },
                                                                "flags": 256,
                                                                "start": 594,
                                                                "end": 623
                                                            },
                                                            "flags": 256,
                                                            "start": 593,
                                                            "end": 624
                                                        },
                                                        "flags": 256,
                                                        "start": 592,
                                                        "end": 625
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 592,
                                                "end": 625
                                            },
                                            "flags": 256,
                                            "start": 586,
                                            "end": 626
                                        },
                                        "flags": 256,
                                        "start": 571,
                                        "end": 626
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 571,
                                        "end": 572
                                    },
                                    "flags": 256,
                                    "start": 571,
                                    "end": 626
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 571,
                            "end": 626
                        },
                        "flags": 256,
                        "start": 570,
                        "end": 628
                    },
                    "flags": 256,
                    "start": 569,
                    "end": 629
                },
                "flags": 256,
                "start": 567,
                "end": 630
            },
            "flags": 128,
            "start": 567,
            "end": 630
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 768,
                "start": 632,
                "end": 634
            },
            "flags": 128,
            "start": 632,
            "end": 635
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 121,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "left": {
                                                "kind": 198,
                                                "left": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 201392131,
                                                        "text": "string",
                                                        "rawText": "string",
                                                        "flags": 768,
                                                        "start": 644,
                                                        "end": 652
                                                    },
                                                    "flags": 256,
                                                    "start": 642,
                                                    "end": 653
                                                },
                                                "operatorToken": {
                                                    "kind": 35640,
                                                    "flags": 768,
                                                    "start": 653,
                                                    "end": 655
                                                },
                                                "right": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 130,
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 768,
                                                            "start": 655,
                                                            "end": 657
                                                        },
                                                        "expression": {
                                                            "kind": 201392130,
                                                            "text": 3,
                                                            "rawText": "3",
                                                            "flags": 768,
                                                            "start": 658,
                                                            "end": 659
                                                        },
                                                        "flags": 256,
                                                        "start": 655,
                                                        "end": 660
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 121,
                                                                "expression": {
                                                                    "kind": 121,
                                                                    "expression": {
                                                                        "kind": 121,
                                                                        "expression": {
                                                                            "kind": 121,
                                                                            "expression": {
                                                                                "kind": 125,
                                                                                "left": {
                                                                                    "kind": 134299649,
                                                                                    "text": "a",
                                                                                    "rawText": "a",
                                                                                    "flags": 768,
                                                                                    "start": 665,
                                                                                    "end": 666
                                                                                },
                                                                                "operatorToken": {
                                                                                    "kind": 4133,
                                                                                    "flags": 768,
                                                                                    "start": 666,
                                                                                    "end": 669
                                                                                },
                                                                                "right": {
                                                                                    "kind": 125,
                                                                                    "left": {
                                                                                        "kind": 119,
                                                                                        "elementList": {
                                                                                            "kind": 270,
                                                                                            "elements": [
                                                                                                {
                                                                                                    "kind": 129,
                                                                                                    "member": {
                                                                                                        "kind": 134299649,
                                                                                                        "text": "b",
                                                                                                        "rawText": "b",
                                                                                                        "flags": 768,
                                                                                                        "start": 671,
                                                                                                        "end": 672
                                                                                                    },
                                                                                                    "expression": {
                                                                                                        "kind": 134299649,
                                                                                                        "text": "c",
                                                                                                        "rawText": "c",
                                                                                                        "flags": 768,
                                                                                                        "start": 673,
                                                                                                        "end": 674
                                                                                                    },
                                                                                                    "flags": 256,
                                                                                                    "start": 671,
                                                                                                    "end": 674
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "flags": 256,
                                                                                            "start": 671,
                                                                                            "end": 674
                                                                                        },
                                                                                        "flags": 256,
                                                                                        "start": 669,
                                                                                        "end": 676
                                                                                    },
                                                                                    "operatorToken": {
                                                                                        "kind": 4125,
                                                                                        "flags": 768,
                                                                                        "start": 676,
                                                                                        "end": 678
                                                                                    },
                                                                                    "right": {
                                                                                        "kind": 121,
                                                                                        "expression": {
                                                                                            "kind": 131,
                                                                                            "expression": {
                                                                                                "kind": 119,
                                                                                                "elementList": {
                                                                                                    "kind": 270,
                                                                                                    "elements": [
                                                                                                        {
                                                                                                            "kind": 198,
                                                                                                            "left": {
                                                                                                                "kind": 134299649,
                                                                                                                "text": "x",
                                                                                                                "rawText": "x",
                                                                                                                "flags": 768,
                                                                                                                "start": 681,
                                                                                                                "end": 682
                                                                                                            },
                                                                                                            "operatorToken": {
                                                                                                                "kind": 35640,
                                                                                                                "flags": 768,
                                                                                                                "start": 682,
                                                                                                                "end": 684
                                                                                                            },
                                                                                                            "right": {
                                                                                                                "kind": 201392130,
                                                                                                                "text": 2,
                                                                                                                "rawText": "2",
                                                                                                                "flags": 768,
                                                                                                                "start": 684,
                                                                                                                "end": 686
                                                                                                            },
                                                                                                            "flags": 256,
                                                                                                            "start": 681,
                                                                                                            "end": 686
                                                                                                        }
                                                                                                    ],
                                                                                                    "trailingComma": false,
                                                                                                    "flags": 256,
                                                                                                    "start": 681,
                                                                                                    "end": 686
                                                                                                },
                                                                                                "flags": 256,
                                                                                                "start": 680,
                                                                                                "end": 687
                                                                                            },
                                                                                            "argumentList": {
                                                                                                "kind": 256,
                                                                                                "elements": [],
                                                                                                "trailingComma": false,
                                                                                                "flags": 256,
                                                                                                "start": 688,
                                                                                                "end": 688
                                                                                            },
                                                                                            "flags": 256,
                                                                                            "start": 678,
                                                                                            "end": 689
                                                                                        },
                                                                                        "flags": 256,
                                                                                        "start": 678,
                                                                                        "end": 690
                                                                                    },
                                                                                    "flags": 256,
                                                                                    "start": 669,
                                                                                    "end": 690
                                                                                },
                                                                                "flags": 256,
                                                                                "start": 664,
                                                                                "end": 690
                                                                            },
                                                                            "flags": 256,
                                                                            "start": 664,
                                                                            "end": 691
                                                                        },
                                                                        "flags": 256,
                                                                        "start": 663,
                                                                        "end": 692
                                                                    },
                                                                    "flags": 256,
                                                                    "start": 662,
                                                                    "end": 693
                                                                },
                                                                "flags": 256,
                                                                "start": 661,
                                                                "end": 694
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 256,
                                                        "start": 661,
                                                        "end": 694
                                                    },
                                                    "flags": 256,
                                                    "start": 655,
                                                    "end": 695
                                                },
                                                "flags": 256,
                                                "start": 640,
                                                "end": 695
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 768,
                                                "start": 640,
                                                "end": 641
                                            },
                                            "flags": 256,
                                            "start": 640,
                                            "end": 695
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 640,
                                    "end": 695
                                },
                                "flags": 256,
                                "start": 639,
                                "end": 697
                            },
                            "flags": 256,
                            "start": 638,
                            "end": 698
                        },
                        "flags": 256,
                        "start": 637,
                        "end": 699
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 699,
                        "end": 701
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 768,
                        "start": 701,
                        "end": 703
                    },
                    "flags": 256,
                    "start": 637,
                    "end": 703
                },
                "flags": 256,
                "start": 635,
                "end": 703
            },
            "flags": 128,
            "start": 635,
            "end": 704
        }
    ],
    "isModule": false,
    "text": "({a: (\"string\") / a[3](((((a /= [b.c] = ({x)}))))) });\n({a: (\"string\") / a[3](((((a /= [b.c] = ({x)}))))) });\n({a: (\"string\") / a[3](((((a /= [b.c] = ([x / 2]()=> a)))))) });\n({a: (\"string\") / a[3](((((a /= [b.c] = ([x / 2]())))))=>) });\n({a: (\"string\") / a[3](((((a /= [b.c] => ([x / 2]())))))) });\n({a: (\"string\") / a[3](((((a /= [b.c => a] = ([x / 2]())))))) });\n({a: (\"string\") / a[3](((((a /= [b.(c) => a] = ([x / 2]())))))) });\n({a: (\"string\") / a[3](((((a /= [(b.c) => a] = ([x / 2]())))))) });\n({a: (\"string\") / a[3](((((a /= [(c) => a] = ([x / 2]())))))) });\n(({a: (\"string\") / a[3](((((a /= [b.c ] = ([x / 2]())))))) }))=> a;\n((({a: (\"string\") / a[3](((((a /= [b.c ] = ([x / 2]())))))) })) = a;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 704
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 43, end: 44
✖ ',' expected - start: 44, end: 45
✖ Statement expected - start: 46, end: 47
✖ Statement expected - start: 47, end: 48
✖ Statement expected - start: 48, end: 49
✖ Statement expected - start: 49, end: 50
✖ Statement expected - start: 50, end: 52
✖ Statement expected - start: 52, end: 53
✖ ',' expected - start: 98, end: 99
✖ ',' expected - start: 99, end: 100
✖ Statement expected - start: 101, end: 102
✖ Statement expected - start: 102, end: 103
✖ Statement expected - start: 103, end: 104
✖ Statement expected - start: 104, end: 105
✖ Statement expected - start: 105, end: 107
✖ Statement expected - start: 107, end: 108
✖ ',' expected - start: 160, end: 162
✖ ',' expected - start: 160, end: 162
✖ The left hand side of the arrow is not destructible  - start: 160, end: 162
✖ Statement expected - start: 164, end: 165
✖ Statement expected - start: 165, end: 166
✖ Statement expected - start: 166, end: 167
✖ Statement expected - start: 167, end: 168
✖ Statement expected - start: 168, end: 169
✖ Statement expected - start: 169, end: 170
✖ Statement expected - start: 170, end: 172
✖ Statement expected - start: 172, end: 173
✖ ',' expected - start: 230, end: 232
✖ ',' expected - start: 230, end: 232
✖ The left hand side of the arrow is not destructible  - start: 230, end: 232
✖ Expression expected - start: 232, end: 233
✖ Statement expected - start: 232, end: 233
✖ Statement expected - start: 233, end: 235
✖ Statement expected - start: 235, end: 236
✖ ',' expected - start: 275, end: 278
✖ ',' expected - start: 275, end: 278
✖ The left hand side of the arrow is not destructible  - start: 275, end: 278
✖ Statement expected - start: 290, end: 291
✖ Statement expected - start: 291, end: 292
✖ Statement expected - start: 292, end: 293
✖ Statement expected - start: 293, end: 294
✖ Statement expected - start: 294, end: 295
✖ Statement expected - start: 295, end: 297
✖ Statement expected - start: 297, end: 298
✖ ',' expected - start: 336, end: 339
✖ ',' expected - start: 336, end: 339
✖ ',' expected - start: 336, end: 339
✖ The left hand side of the arrow is not destructible  - start: 336, end: 339
✖ Statement expected - start: 341, end: 342
✖ Statement expected - start: 342, end: 344
✖ Statement expected - start: 356, end: 357
✖ Statement expected - start: 357, end: 358
✖ Statement expected - start: 358, end: 359
✖ Statement expected - start: 359, end: 360
✖ Statement expected - start: 360, end: 361
✖ Statement expected - start: 361, end: 363
✖ Statement expected - start: 363, end: 364
✖ Dot property must be an identifier - start: 401, end: 402
✖ ',' expected - start: 404, end: 407
✖ ',' expected - start: 404, end: 407
✖ ',' expected - start: 404, end: 407
✖ The left hand side of the arrow is not destructible  - start: 404, end: 407
✖ Statement expected - start: 409, end: 410
✖ Statement expected - start: 410, end: 412
✖ Statement expected - start: 424, end: 425
✖ Statement expected - start: 425, end: 426
✖ Statement expected - start: 426, end: 427
✖ Statement expected - start: 427, end: 428
✖ Statement expected - start: 428, end: 429
✖ Statement expected - start: 429, end: 431
✖ Statement expected - start: 431, end: 432
✖ ',' expected - start: 472, end: 475
✖ ',' expected - start: 472, end: 475
✖ ',' expected - start: 472, end: 475
✖ The left hand side of the arrow is not destructible  - start: 472, end: 475
✖ Statement expected - start: 477, end: 478
✖ Statement expected - start: 478, end: 480
✖ Statement expected - start: 492, end: 493
✖ Statement expected - start: 493, end: 494
✖ Statement expected - start: 494, end: 495
✖ Statement expected - start: 495, end: 496
✖ Statement expected - start: 496, end: 497
✖ Statement expected - start: 497, end: 499
✖ Statement expected - start: 499, end: 500
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 544, end: 546
✖ Statement expected - start: 630, end: 632
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 699, end: 701

```

