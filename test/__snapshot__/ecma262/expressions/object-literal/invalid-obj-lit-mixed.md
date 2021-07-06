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

### CST

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
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 3
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "string",
                                            "rawText": "\"string\"",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 6,
                                            "end": 14
                                        },
                                        "flags": 4,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 15
                                    },
                                    "operatorToken": {
                                        "kind": 35640,
                                        "flags": 96,
                                        "transformFlags": 32,
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
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 17,
                                                "end": 19
                                            },
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 3,
                                                "rawText": "3",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 20,
                                                "end": 21
                                            },
                                            "flags": 536870944,
                                            "transformFlags": 4,
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
                                                                    "expressions": [],
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 26,
                                                                    "end": 44
                                                                },
                                                                "flags": 26,
                                                                "transformFlags": 0,
                                                                "start": 32,
                                                                "end": 44
                                                            },
                                                            "flags": 25,
                                                            "transformFlags": 0,
                                                            "start": 32,
                                                            "end": 44
                                                        },
                                                        "flags": 24,
                                                        "transformFlags": 0,
                                                        "start": 32,
                                                        "end": 44
                                                    },
                                                    "flags": 23,
                                                    "transformFlags": 0,
                                                    "start": 32,
                                                    "end": 44
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 23,
                                            "end": 44
                                        },
                                        "flags": 268435488,
                                        "transformFlags": 1,
                                        "start": 17,
                                        "end": 44
                                    },
                                    "flags": 36,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 44
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 2,
                                "end": 44
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 44
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 45
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 46
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 46
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
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
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 57,
                                    "end": 58
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "string",
                                            "rawText": "\"string\"",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 61,
                                            "end": 69
                                        },
                                        "flags": 59,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 70
                                    },
                                    "operatorToken": {
                                        "kind": 35640,
                                        "flags": 96,
                                        "transformFlags": 32,
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
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 72,
                                                "end": 74
                                            },
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 3,
                                                "rawText": "3",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 75,
                                                "end": 76
                                            },
                                            "flags": 536870944,
                                            "transformFlags": 4,
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
                                                                    "expressions": [],
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 81,
                                                                    "end": 99
                                                                },
                                                                "flags": 81,
                                                                "transformFlags": 0,
                                                                "start": 32,
                                                                "end": 99
                                                            },
                                                            "flags": 80,
                                                            "transformFlags": 0,
                                                            "start": 32,
                                                            "end": 99
                                                        },
                                                        "flags": 79,
                                                        "transformFlags": 0,
                                                        "start": 32,
                                                        "end": 99
                                                    },
                                                    "flags": 78,
                                                    "transformFlags": 0,
                                                    "start": 32,
                                                    "end": 99
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 78,
                                            "end": 99
                                        },
                                        "flags": 268435488,
                                        "transformFlags": 1,
                                        "start": 72,
                                        "end": 99
                                    },
                                    "flags": 59,
                                    "transformFlags": 0,
                                    "start": 57,
                                    "end": 99
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 57,
                                "end": 99
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 57,
                        "end": 99
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 56,
                    "end": 100
                },
                "flags": 54,
                "transformFlags": 0,
                "start": 35,
                "end": 101
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 54,
            "end": 101
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 108,
            "end": 109
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 111,
                    "end": 160
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 160,
                    "end": 162
                },
                "contents": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 162,
                    "end": 164
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 109,
                "end": 164
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 109,
            "end": 164
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 173,
            "end": 174
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 176,
                    "end": 230
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 230,
                    "end": 232
                },
                "contents": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 232,
                    "end": 232
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 174,
                "end": 232
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 174,
            "end": 232
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 236,
            "end": 237
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 239,
                    "end": 275
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 275,
                    "end": 278
                },
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
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 281,
                                            "end": 282
                                        },
                                        "operatorToken": {
                                            "kind": 35640,
                                            "flags": 96,
                                            "transformFlags": 32,
                                            "start": 282,
                                            "end": 284
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 284,
                                            "end": 286
                                        },
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 281,
                                        "end": 286
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 281,
                                "end": 286
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 280,
                            "end": 287
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 288,
                            "end": 288
                        },
                        "flags": 268435488,
                        "transformFlags": 1,
                        "start": 278,
                        "end": 289
                    },
                    "flags": 278,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 290
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 237,
                "end": 290
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 237,
            "end": 290
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 298,
            "end": 299
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 301,
                    "end": 336
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 336,
                    "end": 339
                },
                "contents": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 339,
                    "end": 341
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 299,
                "end": 341
            },
            "flags": 16,
            "transformFlags": 0,
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
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 347,
                                        "end": 348
                                    },
                                    "operatorToken": {
                                        "kind": 35640,
                                        "flags": 96,
                                        "transformFlags": 32,
                                        "start": 348,
                                        "end": 350
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 350,
                                        "end": 352
                                    },
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 347,
                                    "end": 352
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 347,
                            "end": 352
                        },
                        "flags": 32,
                        "transformFlags": 8,
                        "start": 346,
                        "end": 353
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 354,
                        "end": 354
                    },
                    "flags": 268435488,
                    "transformFlags": 1,
                    "start": 344,
                    "end": 355
                },
                "flags": 344,
                "transformFlags": 0,
                "start": 34,
                "end": 356
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 344,
            "end": 356
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 364,
            "end": 365
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 367,
                    "end": 404
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 404,
                    "end": 407
                },
                "contents": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 407,
                    "end": 409
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 365,
                "end": 409
            },
            "flags": 16,
            "transformFlags": 0,
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
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 415,
                                        "end": 416
                                    },
                                    "operatorToken": {
                                        "kind": 35640,
                                        "flags": 96,
                                        "transformFlags": 32,
                                        "start": 416,
                                        "end": 418
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 418,
                                        "end": 420
                                    },
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 415,
                                    "end": 420
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 415,
                            "end": 420
                        },
                        "flags": 32,
                        "transformFlags": 8,
                        "start": 414,
                        "end": 421
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 422,
                        "end": 422
                    },
                    "flags": 268435488,
                    "transformFlags": 1,
                    "start": 412,
                    "end": 423
                },
                "flags": 412,
                "transformFlags": 0,
                "start": 34,
                "end": 424
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 412,
            "end": 424
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 432,
            "end": 433
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 435,
                    "end": 472
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 472,
                    "end": 475
                },
                "contents": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 475,
                    "end": 477
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 433,
                "end": 477
            },
            "flags": 16,
            "transformFlags": 0,
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
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 483,
                                        "end": 484
                                    },
                                    "operatorToken": {
                                        "kind": 35640,
                                        "flags": 96,
                                        "transformFlags": 32,
                                        "start": 484,
                                        "end": 486
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 486,
                                        "end": 488
                                    },
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 483,
                                    "end": 488
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 483,
                            "end": 488
                        },
                        "flags": 32,
                        "transformFlags": 8,
                        "start": 482,
                        "end": 489
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 490,
                        "end": 490
                    },
                    "flags": 268435488,
                    "transformFlags": 1,
                    "start": 480,
                    "end": 491
                },
                "flags": 480,
                "transformFlags": 0,
                "start": 34,
                "end": 492
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 480,
            "end": 492
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
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
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 504,
                                    "end": 505
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "string",
                                            "rawText": "\"string\"",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 508,
                                            "end": 516
                                        },
                                        "flags": 506,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 517
                                    },
                                    "operatorToken": {
                                        "kind": 35640,
                                        "flags": 96,
                                        "transformFlags": 32,
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
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 519,
                                                "end": 521
                                            },
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 3,
                                                "rawText": "3",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 522,
                                                "end": 523
                                            },
                                            "flags": 536870944,
                                            "transformFlags": 4,
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
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 529,
                                                                        "end": 530
                                                                    },
                                                                    "operatorToken": {
                                                                        "kind": 4133,
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
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
                                                                                        "asyncKeyword": null,
                                                                                        "typeParameters": null,
                                                                                        "arrowPatameterList": {
                                                                                            "kind": 342,
                                                                                            "parameters": [
                                                                                                {
                                                                                                    "kind": 134299649,
                                                                                                    "text": "c",
                                                                                                    "rawText": "c",
                                                                                                    "flags": 96,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 536,
                                                                                                    "end": 537
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "flags": 32,
                                                                                            "transformFlags": 0,
                                                                                            "start": 536,
                                                                                            "end": 538
                                                                                        },
                                                                                        "returnType": null,
                                                                                        "arrowToken": {
                                                                                            "kind": 10,
                                                                                            "flags": 64,
                                                                                            "transformFlags": 0,
                                                                                            "start": 538,
                                                                                            "end": 541
                                                                                        },
                                                                                        "contents": {
                                                                                            "kind": 134299649,
                                                                                            "text": "a",
                                                                                            "rawText": "a",
                                                                                            "flags": 96,
                                                                                            "transformFlags": 0,
                                                                                            "start": 541,
                                                                                            "end": 543
                                                                                        },
                                                                                        "flags": 32,
                                                                                        "transformFlags": 0,
                                                                                        "start": 535,
                                                                                        "end": 543
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 32,
                                                                                "transformFlags": 0,
                                                                                "start": 535,
                                                                                "end": 543
                                                                            },
                                                                            "flags": 32,
                                                                            "transformFlags": 8,
                                                                            "start": 533,
                                                                            "end": 544
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 4125,
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
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
                                                                                                    "flags": 96,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 549,
                                                                                                    "end": 550
                                                                                                },
                                                                                                "operatorToken": {
                                                                                                    "kind": 35640,
                                                                                                    "flags": 96,
                                                                                                    "transformFlags": 32,
                                                                                                    "start": 550,
                                                                                                    "end": 552
                                                                                                },
                                                                                                "right": {
                                                                                                    "kind": 201392130,
                                                                                                    "text": 2,
                                                                                                    "rawText": "2",
                                                                                                    "flags": 96,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 552,
                                                                                                    "end": 554
                                                                                                },
                                                                                                "flags": 96,
                                                                                                "transformFlags": 0,
                                                                                                "start": 549,
                                                                                                "end": 554
                                                                                            }
                                                                                        ],
                                                                                        "trailingComma": false,
                                                                                        "flags": 32,
                                                                                        "transformFlags": 0,
                                                                                        "start": 549,
                                                                                        "end": 554
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "transformFlags": 8,
                                                                                    "start": 548,
                                                                                    "end": 555
                                                                                },
                                                                                "argumentList": {
                                                                                    "kind": 256,
                                                                                    "elements": [],
                                                                                    "trailingComma": false,
                                                                                    "flags": 32,
                                                                                    "transformFlags": 0,
                                                                                    "start": 556,
                                                                                    "end": 556
                                                                                },
                                                                                "flags": 268435488,
                                                                                "transformFlags": 1,
                                                                                "start": 546,
                                                                                "end": 557
                                                                            },
                                                                            "flags": 546,
                                                                            "transformFlags": 0,
                                                                            "start": 34,
                                                                            "end": 558
                                                                        },
                                                                        "flags": 32,
                                                                        "transformFlags": 128,
                                                                        "start": 533,
                                                                        "end": 558
                                                                    },
                                                                    "flags": 32,
                                                                    "transformFlags": 128,
                                                                    "start": 528,
                                                                    "end": 558
                                                                },
                                                                "flags": 528,
                                                                "transformFlags": 0,
                                                                "start": 32,
                                                                "end": 559
                                                            },
                                                            "flags": 527,
                                                            "transformFlags": 0,
                                                            "start": 32,
                                                            "end": 560
                                                        },
                                                        "flags": 526,
                                                        "transformFlags": 0,
                                                        "start": 32,
                                                        "end": 561
                                                    },
                                                    "flags": 525,
                                                    "transformFlags": 0,
                                                    "start": 32,
                                                    "end": 562
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 525,
                                            "end": 562
                                        },
                                        "flags": 268435488,
                                        "transformFlags": 1,
                                        "start": 519,
                                        "end": 563
                                    },
                                    "flags": 506,
                                    "transformFlags": 0,
                                    "start": 504,
                                    "end": 563
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 504,
                                "end": 563
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 504,
                        "end": 563
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 503,
                    "end": 565
                },
                "flags": 501,
                "transformFlags": 0,
                "start": 35,
                "end": 566
            },
            "flags": 16,
            "transformFlags": 0,
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
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 571,
                                        "end": 572
                                    },
                                    "right": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 201392131,
                                                "text": "string",
                                                "rawText": "\"string\"",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 575,
                                                "end": 583
                                            },
                                            "flags": 573,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 584
                                        },
                                        "operatorToken": {
                                            "kind": 35640,
                                            "flags": 96,
                                            "transformFlags": 32,
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
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 586,
                                                    "end": 588
                                                },
                                                "expression": {
                                                    "kind": 201392130,
                                                    "text": 3,
                                                    "rawText": "3",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 589,
                                                    "end": 590
                                                },
                                                "flags": 536870944,
                                                "transformFlags": 4,
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
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 596,
                                                                            "end": 597
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 4133,
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
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
                                                                                                "flags": 96,
                                                                                                "transformFlags": 0,
                                                                                                "start": 602,
                                                                                                "end": 603
                                                                                            },
                                                                                            "expression": {
                                                                                                "kind": 134299649,
                                                                                                "text": "c",
                                                                                                "rawText": "c",
                                                                                                "flags": 96,
                                                                                                "transformFlags": 0,
                                                                                                "start": 604,
                                                                                                "end": 605
                                                                                            },
                                                                                            "flags": 96,
                                                                                            "transformFlags": 2,
                                                                                            "start": 602,
                                                                                            "end": 605
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 32,
                                                                                    "transformFlags": 0,
                                                                                    "start": 602,
                                                                                    "end": 605
                                                                                },
                                                                                "flags": 32,
                                                                                "transformFlags": 8,
                                                                                "start": 600,
                                                                                "end": 607
                                                                            },
                                                                            "operatorToken": {
                                                                                "kind": 4125,
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
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
                                                                                                        "flags": 96,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 612,
                                                                                                        "end": 613
                                                                                                    },
                                                                                                    "operatorToken": {
                                                                                                        "kind": 35640,
                                                                                                        "flags": 96,
                                                                                                        "transformFlags": 32,
                                                                                                        "start": 613,
                                                                                                        "end": 615
                                                                                                    },
                                                                                                    "right": {
                                                                                                        "kind": 201392130,
                                                                                                        "text": 2,
                                                                                                        "rawText": "2",
                                                                                                        "flags": 96,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 615,
                                                                                                        "end": 617
                                                                                                    },
                                                                                                    "flags": 96,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 612,
                                                                                                    "end": 617
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "flags": 32,
                                                                                            "transformFlags": 0,
                                                                                            "start": 612,
                                                                                            "end": 617
                                                                                        },
                                                                                        "flags": 32,
                                                                                        "transformFlags": 8,
                                                                                        "start": 611,
                                                                                        "end": 618
                                                                                    },
                                                                                    "argumentList": {
                                                                                        "kind": 256,
                                                                                        "elements": [],
                                                                                        "trailingComma": false,
                                                                                        "flags": 32,
                                                                                        "transformFlags": 0,
                                                                                        "start": 619,
                                                                                        "end": 619
                                                                                    },
                                                                                    "flags": 268435488,
                                                                                    "transformFlags": 1,
                                                                                    "start": 609,
                                                                                    "end": 620
                                                                                },
                                                                                "flags": 609,
                                                                                "transformFlags": 0,
                                                                                "start": 34,
                                                                                "end": 621
                                                                            },
                                                                            "flags": 32,
                                                                            "transformFlags": 128,
                                                                            "start": 600,
                                                                            "end": 621
                                                                        },
                                                                        "flags": 32,
                                                                        "transformFlags": 128,
                                                                        "start": 595,
                                                                        "end": 621
                                                                    },
                                                                    "flags": 595,
                                                                    "transformFlags": 0,
                                                                    "start": 32,
                                                                    "end": 622
                                                                },
                                                                "flags": 594,
                                                                "transformFlags": 0,
                                                                "start": 32,
                                                                "end": 623
                                                            },
                                                            "flags": 593,
                                                            "transformFlags": 0,
                                                            "start": 32,
                                                            "end": 624
                                                        },
                                                        "flags": 592,
                                                        "transformFlags": 0,
                                                        "start": 32,
                                                        "end": 625
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 592,
                                                "end": 625
                                            },
                                            "flags": 268435488,
                                            "transformFlags": 1,
                                            "start": 586,
                                            "end": 626
                                        },
                                        "flags": 573,
                                        "transformFlags": 0,
                                        "start": 571,
                                        "end": 626
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 571,
                                    "end": 626
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 571,
                            "end": 626
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 570,
                        "end": 628
                    },
                    "flags": 569,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 629
                },
                "flags": 567,
                "transformFlags": 0,
                "start": 33,
                "end": 630
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 567,
            "end": 630
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "transformFlags": 0,
                "start": 632,
                "end": 634
            },
            "flags": 16,
            "transformFlags": 0,
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
                                            "asteriskToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 640,
                                                "end": 641
                                            },
                                            "right": {
                                                "kind": 198,
                                                "left": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 201392131,
                                                        "text": "string",
                                                        "rawText": "\"string\"",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 644,
                                                        "end": 652
                                                    },
                                                    "flags": 642,
                                                    "transformFlags": 0,
                                                    "start": 32,
                                                    "end": 653
                                                },
                                                "operatorToken": {
                                                    "kind": 35640,
                                                    "flags": 96,
                                                    "transformFlags": 32,
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
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 655,
                                                            "end": 657
                                                        },
                                                        "expression": {
                                                            "kind": 201392130,
                                                            "text": 3,
                                                            "rawText": "3",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 658,
                                                            "end": 659
                                                        },
                                                        "flags": 536870944,
                                                        "transformFlags": 4,
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
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
                                                                                    "start": 665,
                                                                                    "end": 666
                                                                                },
                                                                                "operatorToken": {
                                                                                    "kind": 4133,
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
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
                                                                                                        "flags": 96,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 671,
                                                                                                        "end": 672
                                                                                                    },
                                                                                                    "expression": {
                                                                                                        "kind": 134299649,
                                                                                                        "text": "c",
                                                                                                        "rawText": "c",
                                                                                                        "flags": 96,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 673,
                                                                                                        "end": 674
                                                                                                    },
                                                                                                    "flags": 96,
                                                                                                    "transformFlags": 2,
                                                                                                    "start": 671,
                                                                                                    "end": 674
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "flags": 32,
                                                                                            "transformFlags": 0,
                                                                                            "start": 671,
                                                                                            "end": 674
                                                                                        },
                                                                                        "flags": 32,
                                                                                        "transformFlags": 8,
                                                                                        "start": 669,
                                                                                        "end": 676
                                                                                    },
                                                                                    "operatorToken": {
                                                                                        "kind": 4125,
                                                                                        "flags": 96,
                                                                                        "transformFlags": 0,
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
                                                                                                                "flags": 96,
                                                                                                                "transformFlags": 0,
                                                                                                                "start": 681,
                                                                                                                "end": 682
                                                                                                            },
                                                                                                            "operatorToken": {
                                                                                                                "kind": 35640,
                                                                                                                "flags": 96,
                                                                                                                "transformFlags": 32,
                                                                                                                "start": 682,
                                                                                                                "end": 684
                                                                                                            },
                                                                                                            "right": {
                                                                                                                "kind": 201392130,
                                                                                                                "text": 2,
                                                                                                                "rawText": "2",
                                                                                                                "flags": 96,
                                                                                                                "transformFlags": 0,
                                                                                                                "start": 684,
                                                                                                                "end": 686
                                                                                                            },
                                                                                                            "flags": 96,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 681,
                                                                                                            "end": 686
                                                                                                        }
                                                                                                    ],
                                                                                                    "trailingComma": false,
                                                                                                    "flags": 32,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 681,
                                                                                                    "end": 686
                                                                                                },
                                                                                                "flags": 32,
                                                                                                "transformFlags": 8,
                                                                                                "start": 680,
                                                                                                "end": 687
                                                                                            },
                                                                                            "argumentList": {
                                                                                                "kind": 256,
                                                                                                "elements": [],
                                                                                                "trailingComma": false,
                                                                                                "flags": 32,
                                                                                                "transformFlags": 0,
                                                                                                "start": 688,
                                                                                                "end": 688
                                                                                            },
                                                                                            "flags": 268435488,
                                                                                            "transformFlags": 1,
                                                                                            "start": 678,
                                                                                            "end": 689
                                                                                        },
                                                                                        "flags": 678,
                                                                                        "transformFlags": 0,
                                                                                        "start": 34,
                                                                                        "end": 690
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "transformFlags": 128,
                                                                                    "start": 669,
                                                                                    "end": 690
                                                                                },
                                                                                "flags": 32,
                                                                                "transformFlags": 128,
                                                                                "start": 664,
                                                                                "end": 690
                                                                            },
                                                                            "flags": 664,
                                                                            "transformFlags": 0,
                                                                            "start": 32,
                                                                            "end": 691
                                                                        },
                                                                        "flags": 663,
                                                                        "transformFlags": 0,
                                                                        "start": 32,
                                                                        "end": 692
                                                                    },
                                                                    "flags": 662,
                                                                    "transformFlags": 0,
                                                                    "start": 32,
                                                                    "end": 693
                                                                },
                                                                "flags": 661,
                                                                "transformFlags": 0,
                                                                "start": 32,
                                                                "end": 694
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 661,
                                                        "end": 694
                                                    },
                                                    "flags": 268435488,
                                                    "transformFlags": 1,
                                                    "start": 655,
                                                    "end": 695
                                                },
                                                "flags": 674,
                                                "transformFlags": 0,
                                                "start": 640,
                                                "end": 695
                                            },
                                            "flags": 32,
                                            "transformFlags": 128,
                                            "start": 640,
                                            "end": 695
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 640,
                                    "end": 695
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 639,
                                "end": 697
                            },
                            "flags": 638,
                            "transformFlags": 0,
                            "start": 34,
                            "end": 698
                        },
                        "flags": 637,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 699
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 699,
                        "end": 701
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 701,
                        "end": 703
                    },
                    "flags": 0,
                    "transformFlags": 128,
                    "start": 637,
                    "end": 703
                },
                "flags": 635,
                "transformFlags": 0,
                "start": 33,
                "end": 703
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 635,
            "end": 704
        }
    ],
    "isModule": false,
    "source": "({a: (\"string\") / a[3](((((a /= [b.c] = ({x)}))))) });\n({a: (\"string\") / a[3](((((a /= [b.c] = ({x)}))))) });\n({a: (\"string\") / a[3](((((a /= [b.c] = ([x / 2]()=> a)))))) });\n({a: (\"string\") / a[3](((((a /= [b.c] = ([x / 2]())))))=>) });\n({a: (\"string\") / a[3](((((a /= [b.c] => ([x / 2]())))))) });\n({a: (\"string\") / a[3](((((a /= [b.c => a] = ([x / 2]())))))) });\n({a: (\"string\") / a[3](((((a /= [b.(c) => a] = ([x / 2]())))))) });\n({a: (\"string\") / a[3](((((a /= [(b.c) => a] = ([x / 2]())))))) });\n({a: (\"string\") / a[3](((((a /= [(c) => a] = ([x / 2]())))))) });\n(({a: (\"string\") / a[3](((((a /= [b.c ] = ([x / 2]())))))) }))=> a;\n((({a: (\"string\") / a[3](((((a /= [b.c ] = ([x / 2]())))))) })) = a;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 704
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Property definition expected. Did you mean to use a ':'? - start: 43, end: 44
✖ ',' expected - start: 43, end: 44
✖ Expected a ')' to match the '(' token here - start: 44, end: 45
✖ Expected a `;` - start: 46, end: 47
✖ Declaration or statement expected - start: 47, end: 48
✖ Declaration or statement expected - start: 48, end: 49
✖ Declaration or statement expected - start: 49, end: 50
✖ Declaration or statement expected - start: 50, end: 52
✖ Declaration or statement expected - start: 52, end: 53
✖ Property definition expected. Did you mean to use a ':'? - start: 98, end: 99
✖ ',' expected - start: 98, end: 99
✖ Expected a ')' to match the '(' token here - start: 99, end: 100
✖ Expected a `;` - start: 101, end: 102
✖ Declaration or statement expected - start: 102, end: 103
✖ Declaration or statement expected - start: 103, end: 104
✖ Declaration or statement expected - start: 104, end: 105
✖ Declaration or statement expected - start: 105, end: 107
✖ Declaration or statement expected - start: 107, end: 108
✖ Expected a ')' to match the '(' token here - start: 160, end: 162
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 135, end: 162
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 134, end: 162
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 133, end: 162
✖ The left hand side of the arrow is not destructible  - start: 160, end: 162
✖ Expected a `;` - start: 164, end: 165
✖ Declaration or statement expected - start: 165, end: 166
✖ Declaration or statement expected - start: 166, end: 167
✖ Declaration or statement expected - start: 167, end: 168
✖ Declaration or statement expected - start: 168, end: 169
✖ Declaration or statement expected - start: 169, end: 170
✖ Declaration or statement expected - start: 170, end: 172
✖ Declaration or statement expected - start: 172, end: 173
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 198, end: 232
✖ The left hand side of the arrow is not destructible  - start: 230, end: 232
✖ Identifier expected - start: 232, end: 233
✖ Declaration or statement expected - start: 233, end: 235
✖ Declaration or statement expected - start: 235, end: 236
✖ Expected a ')' to match the '(' token here - start: 276, end: 278
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 263, end: 278
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 262, end: 278
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 261, end: 278
✖ The left hand side of the arrow is not destructible  - start: 275, end: 278
✖ Expected a `;` - start: 290, end: 291
✖ Declaration or statement expected - start: 291, end: 292
✖ Declaration or statement expected - start: 292, end: 293
✖ Declaration or statement expected - start: 293, end: 294
✖ Declaration or statement expected - start: 294, end: 295
✖ Declaration or statement expected - start: 295, end: 297
✖ Declaration or statement expected - start: 297, end: 298
✖ ',' expected - start: 337, end: 339
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 325, end: 339
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 324, end: 339
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 323, end: 339
✖ The left hand side of the arrow is not destructible  - start: 336, end: 339
✖ Expected a `;` - start: 341, end: 342
✖ Declaration or statement expected - start: 342, end: 344
✖ Expected a `;` - start: 356, end: 357
✖ Declaration or statement expected - start: 357, end: 358
✖ Declaration or statement expected - start: 358, end: 359
✖ Declaration or statement expected - start: 359, end: 360
✖ Declaration or statement expected - start: 360, end: 361
✖ Declaration or statement expected - start: 361, end: 363
✖ Declaration or statement expected - start: 363, end: 364
✖ Dot property must be an identifier - start: 401, end: 402
✖ ',' expected - start: 405, end: 407
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 391, end: 407
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 390, end: 407
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 389, end: 407
✖ The left hand side of the arrow is not destructible  - start: 404, end: 407
✖ Expected a `;` - start: 409, end: 410
✖ Declaration or statement expected - start: 410, end: 412
✖ Expected a `;` - start: 424, end: 425
✖ Declaration or statement expected - start: 425, end: 426
✖ Declaration or statement expected - start: 426, end: 427
✖ Declaration or statement expected - start: 427, end: 428
✖ Declaration or statement expected - start: 428, end: 429
✖ Declaration or statement expected - start: 429, end: 431
✖ Declaration or statement expected - start: 431, end: 432
✖ ',' expected - start: 473, end: 475
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 459, end: 475
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 458, end: 475
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 457, end: 475
✖ The left hand side of the arrow is not destructible  - start: 472, end: 475
✖ Expected a `;` - start: 477, end: 478
✖ Declaration or statement expected - start: 478, end: 480
✖ Expected a `;` - start: 492, end: 493
✖ Declaration or statement expected - start: 493, end: 494
✖ Declaration or statement expected - start: 494, end: 495
✖ Declaration or statement expected - start: 495, end: 496
✖ Declaration or statement expected - start: 496, end: 497
✖ Declaration or statement expected - start: 497, end: 499
✖ Declaration or statement expected - start: 499, end: 500
✖ The left-hand side must be a variable or a property access. - start: 544, end: 546
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 567, end: 632
✖ Expected a ')' to match the '(' token here - start: 703, end: 704

```

