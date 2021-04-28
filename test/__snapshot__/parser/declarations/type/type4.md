# Kataw parser test case

## Input

`````js
type T10 = ReturnType<() => string>;  // string
type T11 = ReturnType<(s: string) => void>;  // void
type T12 = ReturnType<(<T>() => T)>;  // {}

//type T13 = ReturnType<(<T extends U, U extends number[]>() => T)>;  // number[]

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
//type T24 = ArgumentType<(x: string, y: string) => number>;  // Error
type T25 = ArgumentType<Function>;  // Error
type T26 = ArgumentType<any>;  // any
type T27 = ArgumentType<never>;  // any


`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

### Printer Options

`````js
{
  "tabWidth": 2,
  "printWidth": 80,
  "useTabs": false,
  "bracketSpacing": true
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 200,
            "declareToken": null,
            "opaqueToken": null,
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
            "opaqueType": null,
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
                    "kind": 146,
                    "types": [
                        {
                            "kind": 148,
                            "parameters": {
                                "kind": 208,
                                "functionTypeParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 23,
                                "end": 23
                            },
                            "returnType": {
                                "kind": 134234347,
                                "flags": 64,
                                "start": 27,
                                "end": 34
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 22,
                            "end": 34
                        }
                    ],
                    "flags": 0,
                    "start": 21,
                    "end": 35
                },
                "flags": 0,
                "start": 10,
                "end": 35
            },
            "flags": 16,
            "start": 0,
            "end": 36
        },
        {
            "kind": 200,
            "declareToken": null,
            "opaqueToken": null,
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
            "opaqueType": null,
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
                    "kind": 146,
                    "types": [
                        {
                            "kind": 148,
                            "parameters": {
                                "kind": 208,
                                "functionTypeParameterList": [
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
                                        "typeAnnotation": {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 73,
                                            "end": 80
                                        },
                                        "flags": 0,
                                        "start": 71,
                                        "end": 80
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 71,
                                "end": 80
                            },
                            "returnType": {
                                "kind": 138477615,
                                "flags": 64,
                                "start": 84,
                                "end": 89
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 70,
                            "end": 89
                        }
                    ],
                    "flags": 0,
                    "start": 69,
                    "end": 90
                },
                "flags": 0,
                "start": 58,
                "end": 90
            },
            "flags": 16,
            "start": 36,
            "end": 91
        },
        {
            "kind": 200,
            "declareToken": null,
            "opaqueToken": null,
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
            "opaqueType": null,
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
                    "kind": 146,
                    "types": [
                        {
                            "kind": 148,
                            "parameters": {
                                "kind": 208,
                                "functionTypeParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 128,
                                "end": 128
                            },
                            "returnType": {
                                "kind": 144,
                                "id": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 68,
                                    "start": 129,
                                    "end": 129
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 129,
                                "end": 129
                            },
                            "typeParameters": {
                                "kind": 146,
                                "types": [
                                    {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "T",
                                            "rawText": "T",
                                            "flags": 96,
                                            "start": 125,
                                            "end": 126
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 125,
                                        "end": 126
                                    }
                                ],
                                "flags": 0,
                                "start": 124,
                                "end": 127
                            },
                            "flags": 0,
                            "start": 124,
                            "end": 129
                        }
                    ],
                    "flags": 0,
                    "start": 122,
                    "end": 129
                },
                "flags": 0,
                "start": 111,
                "end": 129
            },
            "flags": 16,
            "start": 91,
            "end": 129
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 132,
                "end": 134
            },
            "flags": 16,
            "start": 132,
            "end": 134
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 135,
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
                    "flags": 68,
                    "start": 136,
                    "end": 136
                },
                "flags": 32,
                "start": 135,
                "end": 136
            },
            "flags": 16,
            "start": 135,
            "end": 137
        },
        {
            "kind": 200,
            "declareToken": null,
            "opaqueToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 137,
                "end": 237
            },
            "name": {
                "kind": 134299649,
                "text": "T14",
                "rawText": "T14",
                "flags": 96,
                "start": 233,
                "end": 237
            },
            "opaqueType": null,
            "typeParameters": null,
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "ReturnType",
                    "rawText": "ReturnType",
                    "flags": 96,
                    "start": 239,
                    "end": 250
                },
                "typeParameters": {
                    "kind": 146,
                    "types": [
                        {
                            "kind": 134299891,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "f1",
                                    "rawText": "f1",
                                    "flags": 96,
                                    "start": 257,
                                    "end": 260
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 257,
                                "end": 260
                            },
                            "flags": 0,
                            "start": 251,
                            "end": 260
                        }
                    ],
                    "flags": 0,
                    "start": 250,
                    "end": 261
                },
                "flags": 0,
                "start": 239,
                "end": 261
            },
            "flags": 16,
            "start": 137,
            "end": 262
        },
        {
            "kind": 200,
            "declareToken": null,
            "opaqueToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 262,
                "end": 301
            },
            "name": {
                "kind": 134299649,
                "text": "T15",
                "rawText": "T15",
                "flags": 96,
                "start": 297,
                "end": 301
            },
            "opaqueType": null,
            "typeParameters": null,
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "ReturnType",
                    "rawText": "ReturnType",
                    "flags": 96,
                    "start": 303,
                    "end": 314
                },
                "typeParameters": {
                    "kind": 146,
                    "types": [
                        {
                            "kind": 134299891,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "C",
                                    "rawText": "C",
                                    "flags": 96,
                                    "start": 321,
                                    "end": 323
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 321,
                                "end": 323
                            },
                            "flags": 0,
                            "start": 315,
                            "end": 323
                        }
                    ],
                    "flags": 0,
                    "start": 314,
                    "end": 324
                },
                "flags": 0,
                "start": 303,
                "end": 324
            },
            "flags": 16,
            "start": 262,
            "end": 325
        },
        {
            "kind": 200,
            "declareToken": null,
            "opaqueToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 325,
                "end": 340
            },
            "name": {
                "kind": 134299649,
                "text": "T16",
                "rawText": "T16",
                "flags": 96,
                "start": 336,
                "end": 340
            },
            "opaqueType": null,
            "typeParameters": null,
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "ReturnType",
                    "rawText": "ReturnType",
                    "flags": 96,
                    "start": 342,
                    "end": 353
                },
                "typeParameters": {
                    "kind": 146,
                    "types": [
                        {
                            "kind": 134234252,
                            "flags": 64,
                            "start": 354,
                            "end": 357
                        }
                    ],
                    "flags": 0,
                    "start": 353,
                    "end": 358
                },
                "flags": 0,
                "start": 342,
                "end": 358
            },
            "flags": 16,
            "start": 325,
            "end": 359
        },
        {
            "kind": 200,
            "declareToken": null,
            "opaqueToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 359,
                "end": 377
            },
            "name": {
                "kind": 134299649,
                "text": "T17",
                "rawText": "T17",
                "flags": 96,
                "start": 373,
                "end": 377
            },
            "opaqueType": null,
            "typeParameters": null,
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "ReturnType",
                    "rawText": "ReturnType",
                    "flags": 96,
                    "start": 379,
                    "end": 390
                },
                "typeParameters": {
                    "kind": 146,
                    "types": [
                        {
                            "kind": 134234349,
                            "flags": 64,
                            "start": 391,
                            "end": 396
                        }
                    ],
                    "flags": 0,
                    "start": 390,
                    "end": 397
                },
                "flags": 0,
                "start": 379,
                "end": 397
            },
            "flags": 16,
            "start": 359,
            "end": 398
        },
        {
            "kind": 200,
            "declareToken": null,
            "opaqueToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 398,
                "end": 415
            },
            "name": {
                "kind": 134299649,
                "text": "T18",
                "rawText": "T18",
                "flags": 96,
                "start": 411,
                "end": 415
            },
            "opaqueType": null,
            "typeParameters": null,
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "ReturnType",
                    "rawText": "ReturnType",
                    "flags": 96,
                    "start": 417,
                    "end": 428
                },
                "typeParameters": {
                    "kind": 146,
                    "types": [
                        {
                            "kind": 134234347,
                            "flags": 64,
                            "start": 429,
                            "end": 435
                        }
                    ],
                    "flags": 0,
                    "start": 428,
                    "end": 436
                },
                "flags": 0,
                "start": 417,
                "end": 436
            },
            "flags": 16,
            "start": 398,
            "end": 437
        },
        {
            "kind": 200,
            "declareToken": null,
            "opaqueToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 437,
                "end": 456
            },
            "name": {
                "kind": 134299649,
                "text": "T19",
                "rawText": "T19",
                "flags": 96,
                "start": 452,
                "end": 456
            },
            "opaqueType": null,
            "typeParameters": null,
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "ReturnType",
                    "rawText": "ReturnType",
                    "flags": 96,
                    "start": 458,
                    "end": 469
                },
                "typeParameters": {
                    "kind": 146,
                    "types": [
                        {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "Function",
                                "rawText": "Function",
                                "flags": 96,
                                "start": 470,
                                "end": 478
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 470,
                            "end": 478
                        }
                    ],
                    "flags": 0,
                    "start": 469,
                    "end": 479
                },
                "flags": 0,
                "start": 458,
                "end": 479
            },
            "flags": 16,
            "start": 437,
            "end": 480
        },
        {
            "kind": 200,
            "declareToken": null,
            "opaqueToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 480,
                "end": 498
            },
            "name": {
                "kind": 134299649,
                "text": "T20",
                "rawText": "T20",
                "flags": 96,
                "start": 494,
                "end": 498
            },
            "opaqueType": null,
            "typeParameters": null,
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "ArgumentType",
                    "rawText": "ArgumentType",
                    "flags": 96,
                    "start": 500,
                    "end": 513
                },
                "typeParameters": {
                    "kind": 146,
                    "types": [
                        {
                            "kind": 148,
                            "parameters": {
                                "kind": 208,
                                "functionTypeParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 515,
                                "end": 515
                            },
                            "returnType": {
                                "kind": 138477615,
                                "flags": 64,
                                "start": 519,
                                "end": 524
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 514,
                            "end": 524
                        }
                    ],
                    "flags": 0,
                    "start": 513,
                    "end": 525
                },
                "flags": 0,
                "start": 500,
                "end": 525
            },
            "flags": 16,
            "start": 480,
            "end": 526
        },
        {
            "kind": 200,
            "declareToken": null,
            "opaqueToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 526,
                "end": 545
            },
            "name": {
                "kind": 134299649,
                "text": "T21",
                "rawText": "T21",
                "flags": 96,
                "start": 541,
                "end": 545
            },
            "opaqueType": null,
            "typeParameters": null,
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "ArgumentType",
                    "rawText": "ArgumentType",
                    "flags": 96,
                    "start": 547,
                    "end": 560
                },
                "typeParameters": {
                    "kind": 146,
                    "types": [
                        {
                            "kind": 148,
                            "parameters": {
                                "kind": 208,
                                "functionTypeParameterList": [
                                    {
                                        "kind": 149,
                                        "ellipsisToken": null,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 562,
                                            "end": 563
                                        },
                                        "optionalToken": null,
                                        "typeAnnotation": {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 564,
                                            "end": 571
                                        },
                                        "flags": 0,
                                        "start": 562,
                                        "end": 571
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 562,
                                "end": 571
                            },
                            "returnType": {
                                "kind": 134234345,
                                "flags": 64,
                                "start": 575,
                                "end": 582
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 561,
                            "end": 582
                        }
                    ],
                    "flags": 0,
                    "start": 560,
                    "end": 583
                },
                "flags": 0,
                "start": 547,
                "end": 583
            },
            "flags": 16,
            "start": 526,
            "end": 584
        },
        {
            "kind": 200,
            "declareToken": null,
            "opaqueToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 584,
                "end": 604
            },
            "name": {
                "kind": 134299649,
                "text": "T22",
                "rawText": "T22",
                "flags": 96,
                "start": 600,
                "end": 604
            },
            "opaqueType": null,
            "typeParameters": null,
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "ArgumentType",
                    "rawText": "ArgumentType",
                    "flags": 96,
                    "start": 606,
                    "end": 619
                },
                "typeParameters": {
                    "kind": 146,
                    "types": [
                        {
                            "kind": 148,
                            "parameters": {
                                "kind": 208,
                                "functionTypeParameterList": [
                                    {
                                        "kind": 149,
                                        "ellipsisToken": null,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 621,
                                            "end": 622
                                        },
                                        "optionalToken": {
                                            "kind": 134217750,
                                            "flags": 64,
                                            "start": 622,
                                            "end": 623
                                        },
                                        "typeAnnotation": {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 624,
                                            "end": 631
                                        },
                                        "flags": 0,
                                        "start": 621,
                                        "end": 631
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 621,
                                "end": 631
                            },
                            "returnType": {
                                "kind": 134234345,
                                "flags": 64,
                                "start": 635,
                                "end": 642
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 620,
                            "end": 642
                        }
                    ],
                    "flags": 0,
                    "start": 619,
                    "end": 643
                },
                "flags": 0,
                "start": 606,
                "end": 643
            },
            "flags": 16,
            "start": 584,
            "end": 644
        },
        {
            "kind": 200,
            "declareToken": null,
            "opaqueToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 644,
                "end": 676
            },
            "name": {
                "kind": 134299649,
                "text": "T23",
                "rawText": "T23",
                "flags": 96,
                "start": 672,
                "end": 676
            },
            "opaqueType": null,
            "typeParameters": null,
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "ArgumentType",
                    "rawText": "ArgumentType",
                    "flags": 96,
                    "start": 678,
                    "end": 691
                },
                "typeParameters": {
                    "kind": 146,
                    "types": [
                        {
                            "kind": 148,
                            "parameters": {
                                "kind": 208,
                                "functionTypeParameterList": [
                                    {
                                        "kind": 149,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 693,
                                            "end": 696
                                        },
                                        "name": {
                                            "kind": 134299649,
                                            "text": "args",
                                            "rawText": "args",
                                            "flags": 96,
                                            "start": 696,
                                            "end": 700
                                        },
                                        "optionalToken": null,
                                        "typeAnnotation": {
                                            "kind": 136,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 64,
                                                "start": 701,
                                                "end": 708
                                            },
                                            "flags": 0,
                                            "start": 709,
                                            "end": 710
                                        },
                                        "flags": 0,
                                        "start": 693,
                                        "end": 710
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 693,
                                "end": 710
                            },
                            "returnType": {
                                "kind": 134234345,
                                "flags": 64,
                                "start": 714,
                                "end": 721
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 692,
                            "end": 721
                        }
                    ],
                    "flags": 0,
                    "start": 691,
                    "end": 722
                },
                "flags": 0,
                "start": 678,
                "end": 722
            },
            "flags": 16,
            "start": 644,
            "end": 723
        },
        {
            "kind": 200,
            "declareToken": null,
            "opaqueToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 723,
                "end": 814
            },
            "name": {
                "kind": 134299649,
                "text": "T25",
                "rawText": "T25",
                "flags": 96,
                "start": 810,
                "end": 814
            },
            "opaqueType": null,
            "typeParameters": null,
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "ArgumentType",
                    "rawText": "ArgumentType",
                    "flags": 96,
                    "start": 816,
                    "end": 829
                },
                "typeParameters": {
                    "kind": 146,
                    "types": [
                        {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "Function",
                                "rawText": "Function",
                                "flags": 96,
                                "start": 830,
                                "end": 838
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 830,
                            "end": 838
                        }
                    ],
                    "flags": 0,
                    "start": 829,
                    "end": 839
                },
                "flags": 0,
                "start": 816,
                "end": 839
            },
            "flags": 16,
            "start": 723,
            "end": 840
        },
        {
            "kind": 200,
            "declareToken": null,
            "opaqueToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 840,
                "end": 859
            },
            "name": {
                "kind": 134299649,
                "text": "T26",
                "rawText": "T26",
                "flags": 96,
                "start": 855,
                "end": 859
            },
            "opaqueType": null,
            "typeParameters": null,
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "ArgumentType",
                    "rawText": "ArgumentType",
                    "flags": 96,
                    "start": 861,
                    "end": 874
                },
                "typeParameters": {
                    "kind": 146,
                    "types": [
                        {
                            "kind": 134234252,
                            "flags": 64,
                            "start": 875,
                            "end": 878
                        }
                    ],
                    "flags": 0,
                    "start": 874,
                    "end": 879
                },
                "flags": 0,
                "start": 861,
                "end": 879
            },
            "flags": 16,
            "start": 840,
            "end": 880
        },
        {
            "kind": 200,
            "declareToken": null,
            "opaqueToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 880,
                "end": 897
            },
            "name": {
                "kind": 134299649,
                "text": "T27",
                "rawText": "T27",
                "flags": 96,
                "start": 893,
                "end": 897
            },
            "opaqueType": null,
            "typeParameters": null,
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "ArgumentType",
                    "rawText": "ArgumentType",
                    "flags": 96,
                    "start": 899,
                    "end": 912
                },
                "typeParameters": {
                    "kind": 146,
                    "types": [
                        {
                            "kind": 134234349,
                            "flags": 64,
                            "start": 913,
                            "end": 918
                        }
                    ],
                    "flags": 0,
                    "start": 912,
                    "end": 919
                },
                "flags": 0,
                "start": 899,
                "end": 919
            },
            "flags": 16,
            "start": 880,
            "end": 920
        }
    ],
    "isModule": false,
    "text": "type T10 = ReturnType<() => string>;  // string\ntype T11 = ReturnType<(s: string) => void>;  // void\ntype T12 = ReturnType<(<T>() => T)>;  // {}\n\n//type T13 = ReturnType<(<T extends U, U extends number[]>() => T)>;  // number[]\n\ntype T14 = ReturnType<typeof f1>;  // { a: number, b: string }\n\ntype T15 = ReturnType<typeof C>;  // C\ntype T16 = ReturnType<any>;  // any\n\ntype T17 = ReturnType<never>;  // any\ntype T18 = ReturnType<string>;  // Error\ntype T19 = ReturnType<Function>;  // any\n\ntype T20 = ArgumentType<() => void>;  // never\ntype T21 = ArgumentType<(x: string) => number>;  // string\ntype T22 = ArgumentType<(x?: string) => number>;  // string | undefined\ntype T23 = ArgumentType<(...args: string[]) => number>;  // string\n//type T24 = ArgumentType<(x: string, y: string) => number>;  // Error\ntype T25 = ArgumentType<Function>;  // Error\ntype T26 = ArgumentType<any>;  // any\ntype T27 = ArgumentType<never>;  // any\n\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 930
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Identifier expected - start: 129, end: 132
✖ Statement expected - start: 129, end: 132
✖ Statement expected - start: 134, end: 135
✖ Expression expected - start: 135, end: 136
✖ Expression expected - start: 136, end: 137

```

