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
                                            "kind": 67174403,
                                            "value": "string",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 6,
                                            "end": 14
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 4,
                                        "end": 15
                                    },
                                    "operatorToken": {
                                        "kind": 35640,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 15,
                                        "end": 17
                                    },
                                    "right": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 130,
                                            "member": {
                                                "kind": 81921,
                                                "value": "a",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 17,
                                                "end": 19
                                            },
                                            "expression": {
                                                "kind": 81921,
                                                "value": 3,
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 20,
                                                "end": 21
                                            },
                                            "autofix": 0,
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
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 26,
                                                                    "end": 44
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 26,
                                                                "end": 44
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 25,
                                                            "end": 44
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 24,
                                                        "end": 44
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 23,
                                                    "end": 44
                                                }
                                            ],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 23,
                                            "end": 44
                                        },
                                        "flags": 256,
                                        "start": 17,
                                        "end": 44
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 2,
                                    "end": 44
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "a",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 2,
                                    "end": 3
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 2,
                                "end": 44
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 2,
                        "end": 44
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 45
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 46
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 46
        },
        {
            "kind": 168,
            "autofix": 0,
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
                                            "kind": 67174403,
                                            "value": "string",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 61,
                                            "end": 69
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 59,
                                        "end": 70
                                    },
                                    "operatorToken": {
                                        "kind": 35640,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 70,
                                        "end": 72
                                    },
                                    "right": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 130,
                                            "member": {
                                                "kind": 81921,
                                                "value": "a",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 72,
                                                "end": 74
                                            },
                                            "expression": {
                                                "kind": 81921,
                                                "value": 3,
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 75,
                                                "end": 76
                                            },
                                            "autofix": 0,
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
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 81,
                                                                    "end": 99
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 81,
                                                                "end": 99
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 80,
                                                            "end": 99
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 79,
                                                        "end": 99
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 78,
                                                    "end": 99
                                                }
                                            ],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 78,
                                            "end": 99
                                        },
                                        "flags": 256,
                                        "start": 72,
                                        "end": 99
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 57,
                                    "end": 99
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "a",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 57,
                                    "end": 58
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 57,
                                "end": 99
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 57,
                        "end": 99
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 56,
                    "end": 100
                },
                "autofix": 0,
                "flags": 256,
                "start": 54,
                "end": 101
            },
            "autofix": 0,
            "flags": 128,
            "start": 54,
            "end": 101
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
            "start": 108,
            "end": 109
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    null
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": "a",
                    "autofix": 0,
                    "flags": 768,
                    "start": 162,
                    "end": 164
                },
                "autofix": 0,
                "flags": 256,
                "start": 109,
                "end": 164
            },
            "autofix": 0,
            "flags": 128,
            "start": 109,
            "end": 164
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
            "start": 173,
            "end": 174
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    null
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 253,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 232,
                    "end": 232
                },
                "autofix": 0,
                "flags": 256,
                "start": 174,
                "end": 232
            },
            "autofix": 0,
            "flags": 128,
            "start": 174,
            "end": 232
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
            "start": 236,
            "end": 237
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    null
                ],
                "asyncToken": false,
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
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 281,
                                            "end": 282
                                        },
                                        "operatorToken": {
                                            "kind": 35640,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 282,
                                            "end": 284
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": 2,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 284,
                                            "end": 286
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 281,
                                        "end": 286
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 281,
                                "end": 286
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 280,
                            "end": 287
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 288,
                            "end": 288
                        },
                        "flags": 256,
                        "start": 278,
                        "end": 289
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 278,
                    "end": 290
                },
                "autofix": 0,
                "flags": 256,
                "start": 237,
                "end": 290
            },
            "autofix": 0,
            "flags": 128,
            "start": 237,
            "end": 290
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
            "start": 298,
            "end": 299
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    null
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": "a",
                    "autofix": 0,
                    "flags": 768,
                    "start": 339,
                    "end": 341
                },
                "autofix": 0,
                "flags": 256,
                "start": 299,
                "end": 341
            },
            "autofix": 0,
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
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 347,
                                        "end": 348
                                    },
                                    "operatorToken": {
                                        "kind": 35640,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 348,
                                        "end": 350
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": 2,
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 350,
                                        "end": 352
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 347,
                                    "end": 352
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 347,
                            "end": 352
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 346,
                        "end": 353
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 354,
                        "end": 354
                    },
                    "flags": 256,
                    "start": 344,
                    "end": 355
                },
                "autofix": 0,
                "flags": 256,
                "start": 344,
                "end": 356
            },
            "autofix": 0,
            "flags": 128,
            "start": 344,
            "end": 356
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
            "start": 364,
            "end": 365
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    null
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": "a",
                    "autofix": 0,
                    "flags": 768,
                    "start": 407,
                    "end": 409
                },
                "autofix": 0,
                "flags": 256,
                "start": 365,
                "end": 409
            },
            "autofix": 0,
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
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 415,
                                        "end": 416
                                    },
                                    "operatorToken": {
                                        "kind": 35640,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 416,
                                        "end": 418
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": 2,
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 418,
                                        "end": 420
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 415,
                                    "end": 420
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 415,
                            "end": 420
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 414,
                        "end": 421
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 422,
                        "end": 422
                    },
                    "flags": 256,
                    "start": 412,
                    "end": 423
                },
                "autofix": 0,
                "flags": 256,
                "start": 412,
                "end": 424
            },
            "autofix": 0,
            "flags": 128,
            "start": 412,
            "end": 424
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
            "start": 432,
            "end": 433
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    null
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": "a",
                    "autofix": 0,
                    "flags": 768,
                    "start": 475,
                    "end": 477
                },
                "autofix": 0,
                "flags": 256,
                "start": 433,
                "end": 477
            },
            "autofix": 0,
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
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 483,
                                        "end": 484
                                    },
                                    "operatorToken": {
                                        "kind": 35640,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 484,
                                        "end": 486
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": 2,
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 486,
                                        "end": 488
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 483,
                                    "end": 488
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 483,
                            "end": 488
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 482,
                        "end": 489
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 490,
                        "end": 490
                    },
                    "flags": 256,
                    "start": 480,
                    "end": 491
                },
                "autofix": 0,
                "flags": 256,
                "start": 480,
                "end": 492
            },
            "autofix": 0,
            "flags": 128,
            "start": 480,
            "end": 492
        },
        {
            "kind": 168,
            "autofix": 0,
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
                                            "kind": 67174403,
                                            "value": "string",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 508,
                                            "end": 516
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 506,
                                        "end": 517
                                    },
                                    "operatorToken": {
                                        "kind": 35640,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 517,
                                        "end": 519
                                    },
                                    "right": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 130,
                                            "member": {
                                                "kind": 81921,
                                                "value": "a",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 519,
                                                "end": 521
                                            },
                                            "expression": {
                                                "kind": 81921,
                                                "value": 3,
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 522,
                                                "end": 523
                                            },
                                            "autofix": 0,
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
                                                                        "kind": 81921,
                                                                        "value": "a",
                                                                        "autofix": 0,
                                                                        "flags": 768,
                                                                        "start": 529,
                                                                        "end": 530
                                                                    },
                                                                    "operatorToken": {
                                                                        "kind": 336003091,
                                                                        "autofix": 0,
                                                                        "flags": 0,
                                                                        "start": 528,
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
                                                                                        "typeParameters": null,
                                                                                        "parameters": [
                                                                                            {
                                                                                                "kind": 81921,
                                                                                                "value": "c",
                                                                                                "autofix": 0,
                                                                                                "flags": 768,
                                                                                                "start": 536,
                                                                                                "end": 537
                                                                                            }
                                                                                        ],
                                                                                        "asyncToken": false,
                                                                                        "returnType": null,
                                                                                        "contents": {
                                                                                            "kind": 81921,
                                                                                            "value": "a",
                                                                                            "autofix": 0,
                                                                                            "flags": 768,
                                                                                            "start": 541,
                                                                                            "end": 543
                                                                                        },
                                                                                        "autofix": 0,
                                                                                        "flags": 256,
                                                                                        "start": 535,
                                                                                        "end": 543
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "autofix": 0,
                                                                                "flags": 256,
                                                                                "start": 535,
                                                                                "end": 543
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 256,
                                                                            "start": 533,
                                                                            "end": 544
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 4125,
                                                                            "autofix": 0,
                                                                            "flags": 0,
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
                                                                                                    "kind": 81921,
                                                                                                    "value": "x",
                                                                                                    "autofix": 0,
                                                                                                    "flags": 768,
                                                                                                    "start": 549,
                                                                                                    "end": 550
                                                                                                },
                                                                                                "operatorToken": {
                                                                                                    "kind": 35640,
                                                                                                    "autofix": 0,
                                                                                                    "flags": 0,
                                                                                                    "start": 550,
                                                                                                    "end": 552
                                                                                                },
                                                                                                "right": {
                                                                                                    "kind": 81921,
                                                                                                    "value": 2,
                                                                                                    "autofix": 0,
                                                                                                    "flags": 768,
                                                                                                    "start": 552,
                                                                                                    "end": 554
                                                                                                },
                                                                                                "autofix": 0,
                                                                                                "flags": 256,
                                                                                                "start": 549,
                                                                                                "end": 554
                                                                                            }
                                                                                        ],
                                                                                        "trailingComma": false,
                                                                                        "autofix": 0,
                                                                                        "flags": 256,
                                                                                        "start": 549,
                                                                                        "end": 554
                                                                                    },
                                                                                    "autofix": 0,
                                                                                    "flags": 256,
                                                                                    "start": 548,
                                                                                    "end": 555
                                                                                },
                                                                                "argumentList": {
                                                                                    "kind": 256,
                                                                                    "elements": [],
                                                                                    "trailingComma": false,
                                                                                    "autofix": 0,
                                                                                    "flags": 256,
                                                                                    "start": 556,
                                                                                    "end": 556
                                                                                },
                                                                                "flags": 256,
                                                                                "start": 546,
                                                                                "end": 557
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 256,
                                                                            "start": 546,
                                                                            "end": 558
                                                                        },
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 533,
                                                                        "end": 558
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 528,
                                                                    "end": 558
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 528,
                                                                "end": 559
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 527,
                                                            "end": 560
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 526,
                                                        "end": 561
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 525,
                                                    "end": 562
                                                }
                                            ],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 525,
                                            "end": 562
                                        },
                                        "flags": 256,
                                        "start": 519,
                                        "end": 563
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 504,
                                    "end": 563
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "a",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 504,
                                    "end": 505
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 504,
                                "end": 563
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 504,
                        "end": 563
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 503,
                    "end": 565
                },
                "autofix": 0,
                "flags": 256,
                "start": 501,
                "end": 566
            },
            "autofix": 0,
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
                                                "kind": 67174403,
                                                "value": "string",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 575,
                                                "end": 583
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 573,
                                            "end": 584
                                        },
                                        "operatorToken": {
                                            "kind": 35640,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 584,
                                            "end": 586
                                        },
                                        "right": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 130,
                                                "member": {
                                                    "kind": 81921,
                                                    "value": "a",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 586,
                                                    "end": 588
                                                },
                                                "expression": {
                                                    "kind": 81921,
                                                    "value": 3,
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 589,
                                                    "end": 590
                                                },
                                                "autofix": 0,
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
                                                                            "kind": 81921,
                                                                            "value": "a",
                                                                            "autofix": 0,
                                                                            "flags": 768,
                                                                            "start": 596,
                                                                            "end": 597
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 336003091,
                                                                            "autofix": 0,
                                                                            "flags": 0,
                                                                            "start": 595,
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
                                                                                                "kind": 81921,
                                                                                                "value": "b",
                                                                                                "autofix": 0,
                                                                                                "flags": 768,
                                                                                                "start": 602,
                                                                                                "end": 603
                                                                                            },
                                                                                            "expression": {
                                                                                                "kind": 81921,
                                                                                                "value": "c",
                                                                                                "autofix": 0,
                                                                                                "flags": 768,
                                                                                                "start": 604,
                                                                                                "end": 605
                                                                                            },
                                                                                            "autofix": 0,
                                                                                            "flags": 256,
                                                                                            "start": 602,
                                                                                            "end": 605
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "autofix": 0,
                                                                                    "flags": 256,
                                                                                    "start": 602,
                                                                                    "end": 605
                                                                                },
                                                                                "autofix": 0,
                                                                                "flags": 256,
                                                                                "start": 600,
                                                                                "end": 607
                                                                            },
                                                                            "operatorToken": {
                                                                                "kind": 4125,
                                                                                "autofix": 0,
                                                                                "flags": 0,
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
                                                                                                        "kind": 81921,
                                                                                                        "value": "x",
                                                                                                        "autofix": 0,
                                                                                                        "flags": 768,
                                                                                                        "start": 612,
                                                                                                        "end": 613
                                                                                                    },
                                                                                                    "operatorToken": {
                                                                                                        "kind": 35640,
                                                                                                        "autofix": 0,
                                                                                                        "flags": 0,
                                                                                                        "start": 613,
                                                                                                        "end": 615
                                                                                                    },
                                                                                                    "right": {
                                                                                                        "kind": 81921,
                                                                                                        "value": 2,
                                                                                                        "autofix": 0,
                                                                                                        "flags": 768,
                                                                                                        "start": 615,
                                                                                                        "end": 617
                                                                                                    },
                                                                                                    "autofix": 0,
                                                                                                    "flags": 256,
                                                                                                    "start": 612,
                                                                                                    "end": 617
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "autofix": 0,
                                                                                            "flags": 256,
                                                                                            "start": 612,
                                                                                            "end": 617
                                                                                        },
                                                                                        "autofix": 0,
                                                                                        "flags": 256,
                                                                                        "start": 611,
                                                                                        "end": 618
                                                                                    },
                                                                                    "argumentList": {
                                                                                        "kind": 256,
                                                                                        "elements": [],
                                                                                        "trailingComma": false,
                                                                                        "autofix": 0,
                                                                                        "flags": 256,
                                                                                        "start": 619,
                                                                                        "end": 619
                                                                                    },
                                                                                    "flags": 256,
                                                                                    "start": 609,
                                                                                    "end": 620
                                                                                },
                                                                                "autofix": 0,
                                                                                "flags": 256,
                                                                                "start": 609,
                                                                                "end": 621
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 256,
                                                                            "start": 600,
                                                                            "end": 621
                                                                        },
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 595,
                                                                        "end": 621
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 595,
                                                                    "end": 622
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 594,
                                                                "end": 623
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 593,
                                                            "end": 624
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 592,
                                                        "end": 625
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 592,
                                                "end": 625
                                            },
                                            "flags": 256,
                                            "start": 586,
                                            "end": 626
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 571,
                                        "end": 626
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "a",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 571,
                                        "end": 572
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 571,
                                    "end": 626
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 571,
                            "end": 626
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 570,
                        "end": 628
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 569,
                    "end": 629
                },
                "autofix": 0,
                "flags": 256,
                "start": 567,
                "end": 630
            },
            "autofix": 0,
            "flags": 128,
            "start": 567,
            "end": 630
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "a",
                "autofix": 0,
                "flags": 768,
                "start": 632,
                "end": 634
            },
            "autofix": 0,
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
                                                        "kind": 67174403,
                                                        "value": "string",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 644,
                                                        "end": 652
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 642,
                                                    "end": 653
                                                },
                                                "operatorToken": {
                                                    "kind": 35640,
                                                    "autofix": 0,
                                                    "flags": 0,
                                                    "start": 653,
                                                    "end": 655
                                                },
                                                "right": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 130,
                                                        "member": {
                                                            "kind": 81921,
                                                            "value": "a",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 655,
                                                            "end": 657
                                                        },
                                                        "expression": {
                                                            "kind": 81921,
                                                            "value": 3,
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 658,
                                                            "end": 659
                                                        },
                                                        "autofix": 0,
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
                                                                                    "kind": 81921,
                                                                                    "value": "a",
                                                                                    "autofix": 0,
                                                                                    "flags": 768,
                                                                                    "start": 665,
                                                                                    "end": 666
                                                                                },
                                                                                "operatorToken": {
                                                                                    "kind": 336003091,
                                                                                    "autofix": 0,
                                                                                    "flags": 0,
                                                                                    "start": 664,
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
                                                                                                        "kind": 81921,
                                                                                                        "value": "b",
                                                                                                        "autofix": 0,
                                                                                                        "flags": 768,
                                                                                                        "start": 671,
                                                                                                        "end": 672
                                                                                                    },
                                                                                                    "expression": {
                                                                                                        "kind": 81921,
                                                                                                        "value": "c",
                                                                                                        "autofix": 0,
                                                                                                        "flags": 768,
                                                                                                        "start": 673,
                                                                                                        "end": 674
                                                                                                    },
                                                                                                    "autofix": 0,
                                                                                                    "flags": 256,
                                                                                                    "start": 671,
                                                                                                    "end": 674
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "autofix": 0,
                                                                                            "flags": 256,
                                                                                            "start": 671,
                                                                                            "end": 674
                                                                                        },
                                                                                        "autofix": 0,
                                                                                        "flags": 256,
                                                                                        "start": 669,
                                                                                        "end": 676
                                                                                    },
                                                                                    "operatorToken": {
                                                                                        "kind": 4125,
                                                                                        "autofix": 0,
                                                                                        "flags": 0,
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
                                                                                                                "kind": 81921,
                                                                                                                "value": "x",
                                                                                                                "autofix": 0,
                                                                                                                "flags": 768,
                                                                                                                "start": 681,
                                                                                                                "end": 682
                                                                                                            },
                                                                                                            "operatorToken": {
                                                                                                                "kind": 35640,
                                                                                                                "autofix": 0,
                                                                                                                "flags": 0,
                                                                                                                "start": 682,
                                                                                                                "end": 684
                                                                                                            },
                                                                                                            "right": {
                                                                                                                "kind": 81921,
                                                                                                                "value": 2,
                                                                                                                "autofix": 0,
                                                                                                                "flags": 768,
                                                                                                                "start": 684,
                                                                                                                "end": 686
                                                                                                            },
                                                                                                            "autofix": 0,
                                                                                                            "flags": 256,
                                                                                                            "start": 681,
                                                                                                            "end": 686
                                                                                                        }
                                                                                                    ],
                                                                                                    "trailingComma": false,
                                                                                                    "autofix": 0,
                                                                                                    "flags": 256,
                                                                                                    "start": 681,
                                                                                                    "end": 686
                                                                                                },
                                                                                                "autofix": 0,
                                                                                                "flags": 256,
                                                                                                "start": 680,
                                                                                                "end": 687
                                                                                            },
                                                                                            "argumentList": {
                                                                                                "kind": 256,
                                                                                                "elements": [],
                                                                                                "trailingComma": false,
                                                                                                "autofix": 0,
                                                                                                "flags": 256,
                                                                                                "start": 688,
                                                                                                "end": 688
                                                                                            },
                                                                                            "flags": 256,
                                                                                            "start": 678,
                                                                                            "end": 689
                                                                                        },
                                                                                        "autofix": 0,
                                                                                        "flags": 256,
                                                                                        "start": 678,
                                                                                        "end": 690
                                                                                    },
                                                                                    "autofix": 0,
                                                                                    "flags": 256,
                                                                                    "start": 669,
                                                                                    "end": 690
                                                                                },
                                                                                "autofix": 0,
                                                                                "flags": 256,
                                                                                "start": 664,
                                                                                "end": 690
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 256,
                                                                            "start": 664,
                                                                            "end": 691
                                                                        },
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 663,
                                                                        "end": 692
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 662,
                                                                    "end": 693
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 661,
                                                                "end": 694
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 661,
                                                        "end": 694
                                                    },
                                                    "flags": 256,
                                                    "start": 655,
                                                    "end": 695
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 640,
                                                "end": 695
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "value": "a",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 640,
                                                "end": 641
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 640,
                                            "end": 695
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 640,
                                    "end": 695
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 639,
                                "end": 697
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 638,
                            "end": 698
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 637,
                        "end": 699
                    },
                    "operatorToken": {
                        "kind": 81921,
                        "autofix": 0,
                        "flags": 0,
                        "start": 637,
                        "end": 701
                    },
                    "right": {
                        "kind": 81921,
                        "value": "a",
                        "autofix": 0,
                        "flags": 768,
                        "start": 701,
                        "end": 703
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 637,
                    "end": 703
                },
                "autofix": 0,
                "flags": 256,
                "start": 635,
                "end": 703
            },
            "autofix": 0,
            "flags": 128,
            "start": 635,
            "end": 704
        }
    ],
    "isModule": false,
    "text": "({a: (\"string\") / a[3](((((a /= [b.c] = ({x)}))))) });\n({a: (\"string\") / a[3](((((a /= [b.c] = ({x)}))))) });\n({a: (\"string\") / a[3](((((a /= [b.c] = ([x / 2]()=> a)))))) });\n({a: (\"string\") / a[3](((((a /= [b.c] = ([x / 2]())))))=>) });\n({a: (\"string\") / a[3](((((a /= [b.c] => ([x / 2]())))))) });\n({a: (\"string\") / a[3](((((a /= [b.c => a] = ([x / 2]())))))) });\n({a: (\"string\") / a[3](((((a /= [b.(c) => a] = ([x / 2]())))))) });\n({a: (\"string\") / a[3](((((a /= [(b.c) => a] = ([x / 2]())))))) });\n({a: (\"string\") / a[3](((((a /= [(c) => a] = ([x / 2]())))))) });\n(({a: (\"string\") / a[3](((((a /= [b.c ] = ([x / 2]())))))) }))=> a;\n((({a: (\"string\") / a[3](((((a /= [b.c ] = ([x / 2]())))))) })) = a;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 43,
            "end": 44
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 43,
            "end": 44
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 44,
            "end": 45
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 44,
            "end": 45
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 44,
            "end": 45
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 44,
            "end": 45
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 44,
            "end": 45
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 44,
            "end": 45
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 46,
            "end": 47
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 46,
            "end": 47
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 47,
            "end": 48
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 48,
            "end": 49
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 49,
            "end": 50
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 50,
            "end": 52
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 52,
            "end": 53
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 98,
            "end": 99
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 98,
            "end": 99
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 99,
            "end": 100
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 99,
            "end": 100
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 99,
            "end": 100
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 99,
            "end": 100
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 99,
            "end": 100
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 99,
            "end": 100
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 101,
            "end": 102
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 101,
            "end": 102
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 102,
            "end": 103
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 103,
            "end": 104
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 104,
            "end": 105
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 105,
            "end": 107
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 107,
            "end": 108
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 160,
            "end": 162
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 160,
            "end": 162
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 160,
            "end": 162
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 160,
            "end": 162
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 160,
            "end": 162
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 160,
            "end": 162
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 160,
            "end": 162
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 160,
            "end": 162
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 160,
            "end": 162
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 160,
            "end": 162
        },
        {
            "kind": 2,
            "source": 2,
            "code": 31,
            "error": "The left hand side of the arrow is not destructible ",
            "start": 160,
            "end": 162
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 164,
            "end": 165
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 164,
            "end": 165
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 165,
            "end": 166
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 166,
            "end": 167
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 167,
            "end": 168
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 168,
            "end": 169
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 169,
            "end": 170
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 170,
            "end": 172
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 172,
            "end": 173
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 230,
            "end": 232
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 230,
            "end": 232
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 230,
            "end": 232
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 230,
            "end": 232
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 230,
            "end": 232
        },
        {
            "kind": 2,
            "source": 2,
            "code": 31,
            "error": "The left hand side of the arrow is not destructible ",
            "start": 230,
            "end": 232
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 232,
            "end": 233
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 232,
            "end": 233
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 232,
            "end": 233
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 233,
            "end": 235
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 235,
            "end": 236
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 275,
            "end": 278
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 275,
            "end": 278
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 275,
            "end": 278
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 275,
            "end": 278
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 275,
            "end": 278
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 275,
            "end": 278
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 275,
            "end": 278
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 275,
            "end": 278
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 275,
            "end": 278
        },
        {
            "kind": 2,
            "source": 2,
            "code": 31,
            "error": "The left hand side of the arrow is not destructible ",
            "start": 275,
            "end": 278
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 290,
            "end": 291
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 290,
            "end": 291
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 291,
            "end": 292
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 292,
            "end": 293
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 293,
            "end": 294
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 294,
            "end": 295
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 295,
            "end": 297
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 297,
            "end": 298
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 336,
            "end": 339
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 336,
            "end": 339
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 336,
            "end": 339
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 336,
            "end": 339
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 336,
            "end": 339
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 336,
            "end": 339
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 336,
            "end": 339
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 336,
            "end": 339
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 336,
            "end": 339
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 336,
            "end": 339
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 336,
            "end": 339
        },
        {
            "kind": 2,
            "source": 2,
            "code": 31,
            "error": "The left hand side of the arrow is not destructible ",
            "start": 336,
            "end": 339
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 341,
            "end": 342
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 341,
            "end": 342
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 342,
            "end": 344
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 356,
            "end": 357
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 356,
            "end": 357
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 357,
            "end": 358
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 358,
            "end": 359
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 359,
            "end": 360
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 360,
            "end": 361
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 361,
            "end": 363
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 363,
            "end": 364
        },
        {
            "kind": 2,
            "source": 2,
            "code": 68,
            "error": "Dot property must be an identifier",
            "start": 401,
            "end": 402
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 404,
            "end": 407
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 404,
            "end": 407
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 404,
            "end": 407
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 404,
            "end": 407
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 404,
            "end": 407
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 404,
            "end": 407
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 404,
            "end": 407
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 404,
            "end": 407
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 404,
            "end": 407
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 404,
            "end": 407
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 404,
            "end": 407
        },
        {
            "kind": 2,
            "source": 2,
            "code": 31,
            "error": "The left hand side of the arrow is not destructible ",
            "start": 404,
            "end": 407
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 409,
            "end": 410
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 409,
            "end": 410
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 410,
            "end": 412
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 424,
            "end": 425
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 424,
            "end": 425
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 425,
            "end": 426
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 426,
            "end": 427
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 427,
            "end": 428
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 428,
            "end": 429
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 429,
            "end": 431
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 431,
            "end": 432
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 472,
            "end": 475
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 472,
            "end": 475
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 472,
            "end": 475
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 472,
            "end": 475
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 472,
            "end": 475
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 472,
            "end": 475
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 472,
            "end": 475
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 472,
            "end": 475
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 472,
            "end": 475
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 472,
            "end": 475
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 472,
            "end": 475
        },
        {
            "kind": 2,
            "source": 2,
            "code": 31,
            "error": "The left hand side of the arrow is not destructible ",
            "start": 472,
            "end": 475
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 477,
            "end": 478
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 477,
            "end": 478
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 478,
            "end": 480
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 492,
            "end": 493
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 492,
            "end": 493
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 493,
            "end": 494
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 494,
            "end": 495
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 495,
            "end": 496
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 496,
            "end": 497
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 497,
            "end": 499
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 499,
            "end": 500
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 630,
            "end": 632
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 630,
            "end": 632
        },
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 699,
            "end": 701
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 703,
            "end": 704
        }
    ],
    "start": 0,
    "end": 704
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

