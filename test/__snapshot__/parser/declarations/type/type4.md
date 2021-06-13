# Kataw parser test case

## Input

`````js
type T10 = ReturnType<() => string>;  // string
type T11 = ReturnType<(s: string) => void>;  // void
type T12 = ReturnType<(<T>() => T)>;  // {}

type T14 = ReturnType<typeof f1>;  // { a: number, b: string }

type T15 = ReturnType<typeof C>;  // C
type T16 = ReturnType<any>;  // any

type T17 = ReturnType<never>;  // any
type T18 = ReturnType<string>;  // Error
type T19 = ReturnType<Function>;  // any

type T20 = ArgumentType<() => void>;  // never
type T21 = ArgumentType<(x: string) => number>;  // string
type T22 = ArgumentType<(x?: string) => number>;  // string | undefined
type T23 = ArgumentType<(...args: string[]) => number>;  // string

type T25 = ArgumentType<Function>;  // Error
type T26 = ArgumentType<any>;  // any
type T27 = ArgumentType<never>;  // any


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
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "name": {
                "kind": 134299649,
                "text": "T10",
                "rawText": "T10",
                "flags": 96,
                "start": 4,
                "end": 8
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "ReturnType",
                    "rawText": "ReturnType",
                    "flags": 96,
                    "start": 10,
                    "end": 21
                },
                "typeParameters": {
                    "kind": 266,
                    "parameters": [
                        {
                            "kind": 267,
                            "type": {
                                "kind": 261,
                                "arrowTypeParameterList": {
                                    "kind": 279,
                                    "parameters": [],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 23,
                                    "end": 23
                                },
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 24,
                                    "end": 27
                                },
                                "returnType": {
                                    "kind": 134234347,
                                    "flags": 64,
                                    "start": 27,
                                    "end": 34
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 22,
                                "end": 34
                            },
                            "flags": 2097152,
                            "start": 22,
                            "end": 34
                        }
                    ],
                    "flags": 2097152,
                    "start": 21,
                    "end": 35
                },
                "flags": 2097152,
                "start": 10,
                "end": 35
            },
            "flags": 2097152,
            "start": 0,
            "end": 36
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 36,
                "end": 56
            },
            "name": {
                "kind": 134299649,
                "text": "T11",
                "rawText": "T11",
                "flags": 96,
                "start": 52,
                "end": 56
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 56,
                "end": 58
            },
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "ReturnType",
                    "rawText": "ReturnType",
                    "flags": 96,
                    "start": 58,
                    "end": 69
                },
                "typeParameters": {
                    "kind": 266,
                    "parameters": [
                        {
                            "kind": 267,
                            "type": {
                                "kind": 261,
                                "arrowTypeParameterList": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 81,
                                    "end": 84
                                },
                                "arrowToken": {
                                    "kind": 279,
                                    "parameters": [
                                        {
                                            "kind": 149,
                                            "ellipsisToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "s",
                                                "rawText": "s",
                                                "flags": 96,
                                                "start": 71,
                                                "end": 72
                                            },
                                            "optionalToken": null,
                                            "types": {
                                                "kind": 134234347,
                                                "flags": 64,
                                                "start": 73,
                                                "end": 80
                                            },
                                            "flags": 2097152,
                                            "start": 70,
                                            "end": 80
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 70,
                                    "end": 80
                                },
                                "returnType": {
                                    "kind": 138477615,
                                    "flags": 64,
                                    "start": 84,
                                    "end": 89
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 70,
                                "end": 89
                            },
                            "flags": 2097152,
                            "start": 70,
                            "end": 89
                        }
                    ],
                    "flags": 2097152,
                    "start": 69,
                    "end": 90
                },
                "flags": 2097152,
                "start": 58,
                "end": 90
            },
            "flags": 2097153,
            "start": 36,
            "end": 91
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 91,
                "end": 109
            },
            "name": {
                "kind": 134299649,
                "text": "T12",
                "rawText": "T12",
                "flags": 96,
                "start": 105,
                "end": 109
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 109,
                "end": 111
            },
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "ReturnType",
                    "rawText": "ReturnType",
                    "flags": 96,
                    "start": 111,
                    "end": 122
                },
                "typeParameters": {
                    "kind": 266,
                    "parameters": [
                        {
                            "kind": 267,
                            "type": {
                                "kind": 260,
                                "type": {
                                    "kind": 261,
                                    "arrowTypeParameterList": {
                                        "kind": 279,
                                        "parameters": [],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "start": 127,
                                        "end": 127
                                    },
                                    "arrowToken": null,
                                    "returnType": {
                                        "kind": 261,
                                        "arrowTypeParameterList": {
                                            "kind": 279,
                                            "parameters": [],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 128,
                                            "end": 128
                                        },
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "start": 129,
                                            "end": 132
                                        },
                                        "returnType": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 96,
                                                "start": 132,
                                                "end": 134
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 132,
                                            "end": 134
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 127,
                                        "end": 134
                                    },
                                    "typeParameters": {
                                        "kind": 265,
                                        "typeParameters": [
                                            {
                                                "kind": 146,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 96,
                                                    "start": 125,
                                                    "end": 126
                                                },
                                                "type": null,
                                                "defaultType": null,
                                                "flags": 2097152,
                                                "start": 125,
                                                "end": 126
                                            }
                                        ],
                                        "flags": 2097152,
                                        "start": 124,
                                        "end": 127
                                    },
                                    "flags": 2097152,
                                    "start": 124,
                                    "end": 134
                                },
                                "flags": 2097152,
                                "start": 123,
                                "end": 135
                            },
                            "flags": 2097152,
                            "start": 123,
                            "end": 135
                        }
                    ],
                    "flags": 2097152,
                    "start": 122,
                    "end": 136
                },
                "flags": 2097152,
                "start": 111,
                "end": 136
            },
            "flags": 2097153,
            "start": 91,
            "end": 137
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 137,
                "end": 154
            },
            "name": {
                "kind": 134299649,
                "text": "T14",
                "rawText": "T14",
                "flags": 96,
                "start": 150,
                "end": 154
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 154,
                "end": 156
            },
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "ReturnType",
                    "rawText": "ReturnType",
                    "flags": 96,
                    "start": 156,
                    "end": 167
                },
                "typeParameters": {
                    "kind": 266,
                    "parameters": [
                        {
                            "kind": 267,
                            "type": {
                                "kind": 134299891,
                                "typeOfKeyword": {
                                    "kind": 138477613,
                                    "flags": 64,
                                    "start": 168,
                                    "end": 174
                                },
                                "type": {
                                    "kind": 144,
                                    "id": {
                                        "kind": 134299649,
                                        "text": "f1",
                                        "rawText": "f1",
                                        "flags": 96,
                                        "start": 174,
                                        "end": 177
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "start": 174,
                                    "end": 177
                                },
                                "flags": 2097216,
                                "start": 168,
                                "end": 177
                            },
                            "flags": 2097152,
                            "start": 168,
                            "end": 177
                        }
                    ],
                    "flags": 2097152,
                    "start": 167,
                    "end": 178
                },
                "flags": 2097152,
                "start": 156,
                "end": 178
            },
            "flags": 2097153,
            "start": 137,
            "end": 179
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 179,
                "end": 218
            },
            "name": {
                "kind": 134299649,
                "text": "T15",
                "rawText": "T15",
                "flags": 96,
                "start": 214,
                "end": 218
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 218,
                "end": 220
            },
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "ReturnType",
                    "rawText": "ReturnType",
                    "flags": 96,
                    "start": 220,
                    "end": 231
                },
                "typeParameters": {
                    "kind": 266,
                    "parameters": [
                        {
                            "kind": 267,
                            "type": {
                                "kind": 134299891,
                                "typeOfKeyword": {
                                    "kind": 138477613,
                                    "flags": 64,
                                    "start": 232,
                                    "end": 238
                                },
                                "type": {
                                    "kind": 144,
                                    "id": {
                                        "kind": 134299649,
                                        "text": "C",
                                        "rawText": "C",
                                        "flags": 96,
                                        "start": 238,
                                        "end": 240
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "start": 238,
                                    "end": 240
                                },
                                "flags": 2097216,
                                "start": 232,
                                "end": 240
                            },
                            "flags": 2097152,
                            "start": 232,
                            "end": 240
                        }
                    ],
                    "flags": 2097152,
                    "start": 231,
                    "end": 241
                },
                "flags": 2097152,
                "start": 220,
                "end": 241
            },
            "flags": 2097153,
            "start": 179,
            "end": 242
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 242,
                "end": 257
            },
            "name": {
                "kind": 134299649,
                "text": "T16",
                "rawText": "T16",
                "flags": 96,
                "start": 253,
                "end": 257
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 257,
                "end": 259
            },
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "ReturnType",
                    "rawText": "ReturnType",
                    "flags": 96,
                    "start": 259,
                    "end": 270
                },
                "typeParameters": {
                    "kind": 266,
                    "parameters": [
                        {
                            "kind": 267,
                            "type": {
                                "kind": 134234252,
                                "flags": 64,
                                "start": 271,
                                "end": 274
                            },
                            "flags": 2097152,
                            "start": 271,
                            "end": 274
                        }
                    ],
                    "flags": 2097152,
                    "start": 270,
                    "end": 275
                },
                "flags": 2097152,
                "start": 259,
                "end": 275
            },
            "flags": 2097153,
            "start": 242,
            "end": 276
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 276,
                "end": 294
            },
            "name": {
                "kind": 134299649,
                "text": "T17",
                "rawText": "T17",
                "flags": 96,
                "start": 290,
                "end": 294
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 294,
                "end": 296
            },
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "ReturnType",
                    "rawText": "ReturnType",
                    "flags": 96,
                    "start": 296,
                    "end": 307
                },
                "typeParameters": {
                    "kind": 266,
                    "parameters": [
                        {
                            "kind": 267,
                            "type": {
                                "kind": 134234349,
                                "flags": 64,
                                "start": 308,
                                "end": 313
                            },
                            "flags": 2097152,
                            "start": 308,
                            "end": 313
                        }
                    ],
                    "flags": 2097152,
                    "start": 307,
                    "end": 314
                },
                "flags": 2097152,
                "start": 296,
                "end": 314
            },
            "flags": 2097153,
            "start": 276,
            "end": 315
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 315,
                "end": 332
            },
            "name": {
                "kind": 134299649,
                "text": "T18",
                "rawText": "T18",
                "flags": 96,
                "start": 328,
                "end": 332
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 332,
                "end": 334
            },
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "ReturnType",
                    "rawText": "ReturnType",
                    "flags": 96,
                    "start": 334,
                    "end": 345
                },
                "typeParameters": {
                    "kind": 266,
                    "parameters": [
                        {
                            "kind": 267,
                            "type": {
                                "kind": 134234347,
                                "flags": 64,
                                "start": 346,
                                "end": 352
                            },
                            "flags": 2097152,
                            "start": 346,
                            "end": 352
                        }
                    ],
                    "flags": 2097152,
                    "start": 345,
                    "end": 353
                },
                "flags": 2097152,
                "start": 334,
                "end": 353
            },
            "flags": 2097153,
            "start": 315,
            "end": 354
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 354,
                "end": 373
            },
            "name": {
                "kind": 134299649,
                "text": "T19",
                "rawText": "T19",
                "flags": 96,
                "start": 369,
                "end": 373
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 373,
                "end": 375
            },
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "ReturnType",
                    "rawText": "ReturnType",
                    "flags": 96,
                    "start": 375,
                    "end": 386
                },
                "typeParameters": {
                    "kind": 266,
                    "parameters": [
                        {
                            "kind": 267,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "Function",
                                    "rawText": "Function",
                                    "flags": 96,
                                    "start": 387,
                                    "end": 395
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 387,
                                "end": 395
                            },
                            "flags": 2097152,
                            "start": 387,
                            "end": 395
                        }
                    ],
                    "flags": 2097152,
                    "start": 386,
                    "end": 396
                },
                "flags": 2097152,
                "start": 375,
                "end": 396
            },
            "flags": 2097153,
            "start": 354,
            "end": 397
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 397,
                "end": 415
            },
            "name": {
                "kind": 134299649,
                "text": "T20",
                "rawText": "T20",
                "flags": 96,
                "start": 411,
                "end": 415
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 415,
                "end": 417
            },
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "ArgumentType",
                    "rawText": "ArgumentType",
                    "flags": 96,
                    "start": 417,
                    "end": 430
                },
                "typeParameters": {
                    "kind": 266,
                    "parameters": [
                        {
                            "kind": 267,
                            "type": {
                                "kind": 261,
                                "arrowTypeParameterList": {
                                    "kind": 279,
                                    "parameters": [],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 432,
                                    "end": 432
                                },
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 433,
                                    "end": 436
                                },
                                "returnType": {
                                    "kind": 138477615,
                                    "flags": 64,
                                    "start": 436,
                                    "end": 441
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 431,
                                "end": 441
                            },
                            "flags": 2097152,
                            "start": 431,
                            "end": 441
                        }
                    ],
                    "flags": 2097152,
                    "start": 430,
                    "end": 442
                },
                "flags": 2097152,
                "start": 417,
                "end": 442
            },
            "flags": 2097153,
            "start": 397,
            "end": 443
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 443,
                "end": 462
            },
            "name": {
                "kind": 134299649,
                "text": "T21",
                "rawText": "T21",
                "flags": 96,
                "start": 458,
                "end": 462
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 462,
                "end": 464
            },
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "ArgumentType",
                    "rawText": "ArgumentType",
                    "flags": 96,
                    "start": 464,
                    "end": 477
                },
                "typeParameters": {
                    "kind": 266,
                    "parameters": [
                        {
                            "kind": 267,
                            "type": {
                                "kind": 261,
                                "arrowTypeParameterList": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 489,
                                    "end": 492
                                },
                                "arrowToken": {
                                    "kind": 279,
                                    "parameters": [
                                        {
                                            "kind": 149,
                                            "ellipsisToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 479,
                                                "end": 480
                                            },
                                            "optionalToken": null,
                                            "types": {
                                                "kind": 134234347,
                                                "flags": 64,
                                                "start": 481,
                                                "end": 488
                                            },
                                            "flags": 2097152,
                                            "start": 478,
                                            "end": 488
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 478,
                                    "end": 488
                                },
                                "returnType": {
                                    "kind": 134234345,
                                    "flags": 64,
                                    "start": 492,
                                    "end": 499
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 478,
                                "end": 499
                            },
                            "flags": 2097152,
                            "start": 478,
                            "end": 499
                        }
                    ],
                    "flags": 2097152,
                    "start": 477,
                    "end": 500
                },
                "flags": 2097152,
                "start": 464,
                "end": 500
            },
            "flags": 2097153,
            "start": 443,
            "end": 501
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 501,
                "end": 521
            },
            "name": {
                "kind": 134299649,
                "text": "T22",
                "rawText": "T22",
                "flags": 96,
                "start": 517,
                "end": 521
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 521,
                "end": 523
            },
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "ArgumentType",
                    "rawText": "ArgumentType",
                    "flags": 96,
                    "start": 523,
                    "end": 536
                },
                "typeParameters": {
                    "kind": 266,
                    "parameters": [
                        {
                            "kind": 267,
                            "type": {
                                "kind": 261,
                                "arrowTypeParameterList": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 549,
                                    "end": 552
                                },
                                "arrowToken": {
                                    "kind": 279,
                                    "parameters": [
                                        {
                                            "kind": 149,
                                            "ellipsisToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 538,
                                                "end": 539
                                            },
                                            "optionalToken": {
                                                "kind": 134217750,
                                                "flags": 64,
                                                "start": 539,
                                                "end": 540
                                            },
                                            "types": {
                                                "kind": 134234347,
                                                "flags": 64,
                                                "start": 541,
                                                "end": 548
                                            },
                                            "flags": 2097152,
                                            "start": 537,
                                            "end": 548
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 537,
                                    "end": 548
                                },
                                "returnType": {
                                    "kind": 134234345,
                                    "flags": 64,
                                    "start": 552,
                                    "end": 559
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 537,
                                "end": 559
                            },
                            "flags": 2097152,
                            "start": 537,
                            "end": 559
                        }
                    ],
                    "flags": 2097152,
                    "start": 536,
                    "end": 560
                },
                "flags": 2097152,
                "start": 523,
                "end": 560
            },
            "flags": 2097153,
            "start": 501,
            "end": 561
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 561,
                "end": 593
            },
            "name": {
                "kind": 134299649,
                "text": "T23",
                "rawText": "T23",
                "flags": 96,
                "start": 589,
                "end": 593
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 593,
                "end": 595
            },
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "ArgumentType",
                    "rawText": "ArgumentType",
                    "flags": 96,
                    "start": 595,
                    "end": 608
                },
                "typeParameters": {
                    "kind": 266,
                    "parameters": [
                        {
                            "kind": 267,
                            "type": {
                                "kind": 261,
                                "arrowTypeParameterList": {
                                    "kind": 279,
                                    "parameters": [
                                        {
                                            "kind": 149,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 610,
                                                "end": 613
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "args",
                                                "rawText": "args",
                                                "flags": 96,
                                                "start": 613,
                                                "end": 617
                                            },
                                            "optionalToken": null,
                                            "types": {
                                                "kind": 136,
                                                "type": {
                                                    "kind": 134234347,
                                                    "flags": 64,
                                                    "start": 618,
                                                    "end": 625
                                                },
                                                "flags": 2097152,
                                                "start": 626,
                                                "end": 627
                                            },
                                            "flags": 2097152,
                                            "start": 610,
                                            "end": 627
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 610,
                                    "end": 627
                                },
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 628,
                                    "end": 631
                                },
                                "returnType": {
                                    "kind": 134234345,
                                    "flags": 64,
                                    "start": 631,
                                    "end": 638
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 609,
                                "end": 638
                            },
                            "flags": 2097152,
                            "start": 609,
                            "end": 638
                        }
                    ],
                    "flags": 2097152,
                    "start": 608,
                    "end": 639
                },
                "flags": 2097152,
                "start": 595,
                "end": 639
            },
            "flags": 2097153,
            "start": 561,
            "end": 640
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 640,
                "end": 661
            },
            "name": {
                "kind": 134299649,
                "text": "T25",
                "rawText": "T25",
                "flags": 96,
                "start": 657,
                "end": 661
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 661,
                "end": 663
            },
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "ArgumentType",
                    "rawText": "ArgumentType",
                    "flags": 96,
                    "start": 663,
                    "end": 676
                },
                "typeParameters": {
                    "kind": 266,
                    "parameters": [
                        {
                            "kind": 267,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "Function",
                                    "rawText": "Function",
                                    "flags": 96,
                                    "start": 677,
                                    "end": 685
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 677,
                                "end": 685
                            },
                            "flags": 2097152,
                            "start": 677,
                            "end": 685
                        }
                    ],
                    "flags": 2097152,
                    "start": 676,
                    "end": 686
                },
                "flags": 2097152,
                "start": 663,
                "end": 686
            },
            "flags": 2097153,
            "start": 640,
            "end": 687
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 687,
                "end": 706
            },
            "name": {
                "kind": 134299649,
                "text": "T26",
                "rawText": "T26",
                "flags": 96,
                "start": 702,
                "end": 706
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 706,
                "end": 708
            },
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "ArgumentType",
                    "rawText": "ArgumentType",
                    "flags": 96,
                    "start": 708,
                    "end": 721
                },
                "typeParameters": {
                    "kind": 266,
                    "parameters": [
                        {
                            "kind": 267,
                            "type": {
                                "kind": 134234252,
                                "flags": 64,
                                "start": 722,
                                "end": 725
                            },
                            "flags": 2097152,
                            "start": 722,
                            "end": 725
                        }
                    ],
                    "flags": 2097152,
                    "start": 721,
                    "end": 726
                },
                "flags": 2097152,
                "start": 708,
                "end": 726
            },
            "flags": 2097153,
            "start": 687,
            "end": 727
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 727,
                "end": 744
            },
            "name": {
                "kind": 134299649,
                "text": "T27",
                "rawText": "T27",
                "flags": 96,
                "start": 740,
                "end": 744
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 744,
                "end": 746
            },
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "ArgumentType",
                    "rawText": "ArgumentType",
                    "flags": 96,
                    "start": 746,
                    "end": 759
                },
                "typeParameters": {
                    "kind": 266,
                    "parameters": [
                        {
                            "kind": 267,
                            "type": {
                                "kind": 134234349,
                                "flags": 64,
                                "start": 760,
                                "end": 765
                            },
                            "flags": 2097152,
                            "start": 760,
                            "end": 765
                        }
                    ],
                    "flags": 2097152,
                    "start": 759,
                    "end": 766
                },
                "flags": 2097152,
                "start": 746,
                "end": 766
            },
            "flags": 2097153,
            "start": 727,
            "end": 767
        }
    ],
    "isModule": false,
    "source": "type T10 = ReturnType<() => string>;  // string\ntype T11 = ReturnType<(s: string) => void>;  // void\ntype T12 = ReturnType<(<T>() => T)>;  // {}\n\ntype T14 = ReturnType<typeof f1>;  // { a: number, b: string }\n\ntype T15 = ReturnType<typeof C>;  // C\ntype T16 = ReturnType<any>;  // any\n\ntype T17 = ReturnType<never>;  // any\ntype T18 = ReturnType<string>;  // Error\ntype T19 = ReturnType<Function>;  // any\n\ntype T20 = ArgumentType<() => void>;  // never\ntype T21 = ArgumentType<(x: string) => number>;  // string\ntype T22 = ArgumentType<(x?: string) => number>;  // string | undefined\ntype T23 = ArgumentType<(...args: string[]) => number>;  // string\n\ntype T25 = ArgumentType<Function>;  // Error\ntype T26 = ArgumentType<any>;  // any\ntype T27 = ArgumentType<never>;  // any\n\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 777
}
```

### Printed

```javascript

 // string

 // void

 // {}

 // { a: number, b: string }

 // C

 // any

 // any

 // Error

 // any

 // never

 // string

 // string | undefined

 // string

 // Error

 // any

 // any

```

### Diagnostics

```javascript
✔ No errors
```

