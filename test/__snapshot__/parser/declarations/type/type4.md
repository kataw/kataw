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
                    "parameters": [],
                    "flags": 0,
                    "start": 21,
                    "end": 22
                },
                "flags": 0,
                "start": 10,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 24,
                    "end": 27
                },
                "typeParameters": null,
                "parameters": [],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "string",
                        "rawText": "string",
                        "flags": 96,
                        "start": 27,
                        "end": 34
                    },
                    "operatorToken": {
                        "kind": 34883,
                        "flags": 64,
                        "start": 34,
                        "end": 35
                    },
                    "right": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 35,
                        "end": 35
                    },
                    "flags": 32,
                    "start": 27,
                    "end": 35
                },
                "flags": 32,
                "start": 22,
                "end": 35
            },
            "flags": 16,
            "start": 22,
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
                    "parameters": [],
                    "flags": 0,
                    "start": 69,
                    "end": 70
                },
                "flags": 0,
                "start": 58,
                "end": 70
            },
            "flags": 16,
            "start": 36,
            "end": 70
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 81,
                    "end": 84
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "s",
                            "rawText": "s",
                            "flags": 96,
                            "start": 71,
                            "end": 72
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234347,
                                "flags": 64,
                                "start": 73,
                                "end": 80
                            },
                            "flags": 0,
                            "start": 72,
                            "end": 80
                        },
                        "right": null,
                        "flags": 32,
                        "start": 70,
                        "end": 80
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 198,
                    "left": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 138477615,
                            "flags": 64,
                            "start": 84,
                            "end": 89
                        },
                        "operand": {
                            "kind": 16637,
                            "text": "",
                            "flags": 64,
                            "start": 89,
                            "end": 89
                        },
                        "flags": 32,
                        "start": 84,
                        "end": 89
                    },
                    "operatorToken": {
                        "kind": 34883,
                        "flags": 64,
                        "start": 89,
                        "end": 90
                    },
                    "right": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 90,
                        "end": 90
                    },
                    "flags": 32,
                    "start": 84,
                    "end": 90
                },
                "flags": 32,
                "start": 70,
                "end": 90
            },
            "flags": 16,
            "start": 70,
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
                    "parameters": [],
                    "flags": 0,
                    "start": 122,
                    "end": 123
                },
                "flags": 0,
                "start": 111,
                "end": 123
            },
            "flags": 16,
            "start": 91,
            "end": 123
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 129,
                            "end": 132
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
                                    "flags": 0,
                                    "start": 125,
                                    "end": 126
                                }
                            ],
                            "flags": 0,
                            "start": 124,
                            "end": 127
                        },
                        "parameters": [],
                        "asyncKeyword": null,
                        "returnType": null,
                        "contents": {
                            "kind": 134299649,
                            "text": "T",
                            "rawText": "T",
                            "flags": 96,
                            "start": 132,
                            "end": 134
                        },
                        "flags": 32,
                        "start": 124,
                        "end": 134
                    },
                    "flags": 32,
                    "start": 123,
                    "end": 135
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 64,
                    "start": 135,
                    "end": 136
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 136,
                    "end": 136
                },
                "flags": 32,
                "start": 123,
                "end": 136
            },
            "flags": 16,
            "start": 123,
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
                                    "flags": 0,
                                    "start": 174,
                                    "end": 177
                                },
                                "flags": 0,
                                "start": 168,
                                "end": 177
                            },
                            "flags": 0,
                            "start": 168,
                            "end": 177
                        }
                    ],
                    "flags": 0,
                    "start": 167,
                    "end": 178
                },
                "flags": 0,
                "start": 156,
                "end": 178
            },
            "flags": 16,
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
                                    "flags": 0,
                                    "start": 238,
                                    "end": 240
                                },
                                "flags": 0,
                                "start": 232,
                                "end": 240
                            },
                            "flags": 0,
                            "start": 232,
                            "end": 240
                        }
                    ],
                    "flags": 0,
                    "start": 231,
                    "end": 241
                },
                "flags": 0,
                "start": 220,
                "end": 241
            },
            "flags": 16,
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
                            "flags": 0,
                            "start": 271,
                            "end": 274
                        }
                    ],
                    "flags": 0,
                    "start": 270,
                    "end": 275
                },
                "flags": 0,
                "start": 259,
                "end": 275
            },
            "flags": 16,
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
                            "flags": 0,
                            "start": 308,
                            "end": 313
                        }
                    ],
                    "flags": 0,
                    "start": 307,
                    "end": 314
                },
                "flags": 0,
                "start": 296,
                "end": 314
            },
            "flags": 16,
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
                            "flags": 0,
                            "start": 346,
                            "end": 352
                        }
                    ],
                    "flags": 0,
                    "start": 345,
                    "end": 353
                },
                "flags": 0,
                "start": 334,
                "end": 353
            },
            "flags": 16,
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
                                "flags": 0,
                                "start": 387,
                                "end": 395
                            },
                            "flags": 0,
                            "start": 387,
                            "end": 395
                        }
                    ],
                    "flags": 0,
                    "start": 386,
                    "end": 396
                },
                "flags": 0,
                "start": 375,
                "end": 396
            },
            "flags": 16,
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
                    "parameters": [],
                    "flags": 0,
                    "start": 430,
                    "end": 431
                },
                "flags": 0,
                "start": 417,
                "end": 431
            },
            "flags": 16,
            "start": 397,
            "end": 431
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 433,
                    "end": 436
                },
                "typeParameters": null,
                "parameters": [],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 198,
                    "left": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 138477615,
                            "flags": 64,
                            "start": 436,
                            "end": 441
                        },
                        "operand": {
                            "kind": 16637,
                            "text": "",
                            "flags": 64,
                            "start": 441,
                            "end": 441
                        },
                        "flags": 32,
                        "start": 436,
                        "end": 441
                    },
                    "operatorToken": {
                        "kind": 34883,
                        "flags": 64,
                        "start": 441,
                        "end": 442
                    },
                    "right": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 442,
                        "end": 442
                    },
                    "flags": 32,
                    "start": 436,
                    "end": 442
                },
                "flags": 32,
                "start": 431,
                "end": 442
            },
            "flags": 16,
            "start": 431,
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
                    "parameters": [],
                    "flags": 0,
                    "start": 477,
                    "end": 478
                },
                "flags": 0,
                "start": 464,
                "end": 478
            },
            "flags": 16,
            "start": 443,
            "end": 478
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 489,
                    "end": 492
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 479,
                            "end": 480
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234347,
                                "flags": 64,
                                "start": 481,
                                "end": 488
                            },
                            "flags": 0,
                            "start": 480,
                            "end": 488
                        },
                        "right": null,
                        "flags": 32,
                        "start": 478,
                        "end": 488
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "number",
                        "rawText": "number",
                        "flags": 96,
                        "start": 492,
                        "end": 499
                    },
                    "operatorToken": {
                        "kind": 34883,
                        "flags": 64,
                        "start": 499,
                        "end": 500
                    },
                    "right": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 500,
                        "end": 500
                    },
                    "flags": 32,
                    "start": 492,
                    "end": 500
                },
                "flags": 32,
                "start": 478,
                "end": 500
            },
            "flags": 16,
            "start": 478,
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
                    "parameters": [],
                    "flags": 0,
                    "start": 536,
                    "end": 537
                },
                "flags": 0,
                "start": 523,
                "end": 537
            },
            "flags": 16,
            "start": 501,
            "end": 537
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 549,
                    "end": 552
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
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
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234347,
                                "flags": 64,
                                "start": 541,
                                "end": 548
                            },
                            "flags": 0,
                            "start": 540,
                            "end": 548
                        },
                        "right": null,
                        "flags": 32,
                        "start": 537,
                        "end": 548
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "number",
                        "rawText": "number",
                        "flags": 96,
                        "start": 552,
                        "end": 559
                    },
                    "operatorToken": {
                        "kind": 34883,
                        "flags": 64,
                        "start": 559,
                        "end": 560
                    },
                    "right": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 560,
                        "end": 560
                    },
                    "flags": 32,
                    "start": 552,
                    "end": 560
                },
                "flags": 32,
                "start": 537,
                "end": 560
            },
            "flags": 16,
            "start": 537,
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
                    "parameters": [],
                    "flags": 0,
                    "start": 608,
                    "end": 609
                },
                "flags": 0,
                "start": 595,
                "end": 609
            },
            "flags": 16,
            "start": 561,
            "end": 609
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 628,
                    "end": 631
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 610,
                            "end": 613
                        },
                        "left": {
                            "kind": 134299649,
                            "text": "args",
                            "rawText": "args",
                            "flags": 96,
                            "start": 613,
                            "end": 617
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 136,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 64,
                                    "start": 618,
                                    "end": 625
                                },
                                "flags": 0,
                                "start": 626,
                                "end": 627
                            },
                            "flags": 0,
                            "start": 617,
                            "end": 627
                        },
                        "right": null,
                        "flags": 34,
                        "start": 610,
                        "end": 627
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "number",
                        "rawText": "number",
                        "flags": 96,
                        "start": 631,
                        "end": 638
                    },
                    "operatorToken": {
                        "kind": 34883,
                        "flags": 64,
                        "start": 638,
                        "end": 639
                    },
                    "right": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 639,
                        "end": 639
                    },
                    "flags": 32,
                    "start": 631,
                    "end": 639
                },
                "flags": 32,
                "start": 609,
                "end": 639
            },
            "flags": 16,
            "start": 609,
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
                                "flags": 0,
                                "start": 677,
                                "end": 685
                            },
                            "flags": 0,
                            "start": 677,
                            "end": 685
                        }
                    ],
                    "flags": 0,
                    "start": 676,
                    "end": 686
                },
                "flags": 0,
                "start": 663,
                "end": 686
            },
            "flags": 16,
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
                            "flags": 0,
                            "start": 722,
                            "end": 725
                        }
                    ],
                    "flags": 0,
                    "start": 721,
                    "end": 726
                },
                "flags": 0,
                "start": 708,
                "end": 726
            },
            "flags": 16,
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
                            "flags": 0,
                            "start": 760,
                            "end": 765
                        }
                    ],
                    "flags": 0,
                    "start": 759,
                    "end": 766
                },
                "flags": 0,
                "start": 746,
                "end": 766
            },
            "flags": 16,
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

```

### Diagnostics

```javascript
✖ Expected to find a '>' to match the '<' token here. - start: 22, end: 23
✖ Identifier expected - start: 35, end: 36
✖ Expected to find a '>' to match the '<' token here. - start: 70, end: 71
✖ Identifier expected - start: 89, end: 90
✖ Identifier expected - start: 90, end: 91
✖ Expected to find a '>' to match the '<' token here. - start: 123, end: 124
✖ Identifier expected - start: 136, end: 137
✖ Expected to find a '>' to match the '<' token here. - start: 431, end: 432
✖ Identifier expected - start: 441, end: 442
✖ Identifier expected - start: 442, end: 443
✖ Expected to find a '>' to match the '<' token here. - start: 478, end: 479
✖ Identifier expected - start: 500, end: 501
✖ Expected to find a '>' to match the '<' token here. - start: 537, end: 538
✖ Identifier expected - start: 560, end: 561
✖ Expected to find a '>' to match the '<' token here. - start: 609, end: 610
✖ Identifier expected - start: 639, end: 640

```

