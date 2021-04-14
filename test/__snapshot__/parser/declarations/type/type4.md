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
{}
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
            "typeToken": {
                "kind": 16583,
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "name": {
                "kind": 134299649,
                "text": "T10",
                "rawText": "T10",
                "flags": 768,
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
                    "flags": 768,
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
                                "flags": 256,
                                "start": 23,
                                "end": 23
                            },
                            "returnType": {
                                "kind": 134234347,
                                "flags": 768,
                                "start": 27,
                                "end": 34
                            },
                            "typeParameters": null,
                            "autofix": 0,
                            "flags": 0,
                            "start": 22,
                            "end": 34
                        }
                    ],
                    "autofix": 0,
                    "flags": 0,
                    "start": 21,
                    "end": 35
                },
                "autofix": 0,
                "flags": 0,
                "start": 10,
                "end": 35
            },
            "flags": 0,
            "start": 0,
            "end": 36
        },
        {
            "kind": 200,
            "typeToken": {
                "kind": 16583,
                "flags": 768,
                "start": 36,
                "end": 56
            },
            "name": {
                "kind": 134299649,
                "text": "T11",
                "rawText": "T11",
                "flags": 768,
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
                    "flags": 768,
                    "start": 58,
                    "end": 69
                },
                "typeParameters": {
                    "kind": 146,
                    "types": [
                        {
                            "kind": 148,
                            "parameters": [
                                {
                                    "kind": 149,
                                    "ellipsisToken": null,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "s",
                                        "rawText": "s",
                                        "flags": 768,
                                        "start": 71,
                                        "end": 72
                                    },
                                    "optionalToken": null,
                                    "typeAnnotation": {
                                        "kind": 134234347,
                                        "flags": 768,
                                        "start": 73,
                                        "end": 80
                                    },
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 71,
                                    "end": 80
                                }
                            ],
                            "returnType": {
                                "kind": 4259887,
                                "flags": 768,
                                "start": 84,
                                "end": 89
                            },
                            "typeParameters": null,
                            "autofix": 0,
                            "flags": 0,
                            "start": 71,
                            "end": 89
                        }
                    ],
                    "autofix": 0,
                    "flags": 0,
                    "start": 69,
                    "end": 90
                },
                "autofix": 0,
                "flags": 0,
                "start": 58,
                "end": 90
            },
            "flags": 0,
            "start": 36,
            "end": 91
        },
        {
            "kind": 200,
            "typeToken": {
                "kind": 16583,
                "flags": 768,
                "start": 91,
                "end": 109
            },
            "name": {
                "kind": 134299649,
                "text": "T12",
                "rawText": "T12",
                "flags": 768,
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
                    "flags": 768,
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
                                "flags": 256,
                                "start": 128,
                                "end": 128
                            },
                            "returnType": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 768,
                                    "start": 132,
                                    "end": 134
                                },
                                "typeParameters": null,
                                "autofix": 0,
                                "flags": 0,
                                "start": 132,
                                "end": 134
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
                                            "flags": 768,
                                            "start": 125,
                                            "end": 126
                                        },
                                        "typeParameters": null,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 125,
                                        "end": 126
                                    }
                                ],
                                "autofix": 0,
                                "flags": 0,
                                "start": 124,
                                "end": 127
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 124,
                            "end": 134
                        }
                    ],
                    "autofix": 0,
                    "flags": 0,
                    "start": 122,
                    "end": 136
                },
                "autofix": 0,
                "flags": 0,
                "start": 111,
                "end": 136
            },
            "flags": 0,
            "start": 91,
            "end": 137
        },
        {
            "kind": 200,
            "typeToken": {
                "kind": 16583,
                "flags": 768,
                "start": 137,
                "end": 237
            },
            "name": {
                "kind": 134299649,
                "text": "T14",
                "rawText": "T14",
                "flags": 768,
                "start": 233,
                "end": 237
            },
            "typeParameters": null,
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "ReturnType",
                    "rawText": "ReturnType",
                    "flags": 768,
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
                                    "flags": 768,
                                    "start": 257,
                                    "end": 260
                                },
                                "typeParameters": null,
                                "autofix": 0,
                                "flags": 0,
                                "start": 257,
                                "end": 260
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 251,
                            "end": 260
                        }
                    ],
                    "autofix": 0,
                    "flags": 0,
                    "start": 250,
                    "end": 261
                },
                "autofix": 0,
                "flags": 0,
                "start": 239,
                "end": 261
            },
            "flags": 0,
            "start": 137,
            "end": 262
        },
        {
            "kind": 200,
            "typeToken": {
                "kind": 16583,
                "flags": 768,
                "start": 262,
                "end": 301
            },
            "name": {
                "kind": 134299649,
                "text": "T15",
                "rawText": "T15",
                "flags": 768,
                "start": 297,
                "end": 301
            },
            "typeParameters": null,
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "ReturnType",
                    "rawText": "ReturnType",
                    "flags": 768,
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
                                    "flags": 768,
                                    "start": 321,
                                    "end": 323
                                },
                                "typeParameters": null,
                                "autofix": 0,
                                "flags": 0,
                                "start": 321,
                                "end": 323
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 315,
                            "end": 323
                        }
                    ],
                    "autofix": 0,
                    "flags": 0,
                    "start": 314,
                    "end": 324
                },
                "autofix": 0,
                "flags": 0,
                "start": 303,
                "end": 324
            },
            "flags": 0,
            "start": 262,
            "end": 325
        },
        {
            "kind": 200,
            "typeToken": {
                "kind": 16583,
                "flags": 768,
                "start": 325,
                "end": 340
            },
            "name": {
                "kind": 134299649,
                "text": "T16",
                "rawText": "T16",
                "flags": 768,
                "start": 336,
                "end": 340
            },
            "typeParameters": null,
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "ReturnType",
                    "rawText": "ReturnType",
                    "flags": 768,
                    "start": 342,
                    "end": 353
                },
                "typeParameters": {
                    "kind": 146,
                    "types": [
                        {
                            "kind": 134234252,
                            "flags": 768,
                            "start": 354,
                            "end": 357
                        }
                    ],
                    "autofix": 0,
                    "flags": 0,
                    "start": 353,
                    "end": 358
                },
                "autofix": 0,
                "flags": 0,
                "start": 342,
                "end": 358
            },
            "flags": 0,
            "start": 325,
            "end": 359
        },
        {
            "kind": 200,
            "typeToken": {
                "kind": 16583,
                "flags": 768,
                "start": 359,
                "end": 377
            },
            "name": {
                "kind": 134299649,
                "text": "T17",
                "rawText": "T17",
                "flags": 768,
                "start": 373,
                "end": 377
            },
            "typeParameters": null,
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "ReturnType",
                    "rawText": "ReturnType",
                    "flags": 768,
                    "start": 379,
                    "end": 390
                },
                "typeParameters": {
                    "kind": 146,
                    "types": [
                        {
                            "kind": 134234349,
                            "flags": 768,
                            "start": 391,
                            "end": 396
                        }
                    ],
                    "autofix": 0,
                    "flags": 0,
                    "start": 390,
                    "end": 397
                },
                "autofix": 0,
                "flags": 0,
                "start": 379,
                "end": 397
            },
            "flags": 0,
            "start": 359,
            "end": 398
        },
        {
            "kind": 200,
            "typeToken": {
                "kind": 16583,
                "flags": 768,
                "start": 398,
                "end": 415
            },
            "name": {
                "kind": 134299649,
                "text": "T18",
                "rawText": "T18",
                "flags": 768,
                "start": 411,
                "end": 415
            },
            "typeParameters": null,
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "ReturnType",
                    "rawText": "ReturnType",
                    "flags": 768,
                    "start": 417,
                    "end": 428
                },
                "typeParameters": {
                    "kind": 146,
                    "types": [
                        {
                            "kind": 134234347,
                            "flags": 768,
                            "start": 429,
                            "end": 435
                        }
                    ],
                    "autofix": 0,
                    "flags": 0,
                    "start": 428,
                    "end": 436
                },
                "autofix": 0,
                "flags": 0,
                "start": 417,
                "end": 436
            },
            "flags": 0,
            "start": 398,
            "end": 437
        },
        {
            "kind": 200,
            "typeToken": {
                "kind": 16583,
                "flags": 768,
                "start": 437,
                "end": 456
            },
            "name": {
                "kind": 134299649,
                "text": "T19",
                "rawText": "T19",
                "flags": 768,
                "start": 452,
                "end": 456
            },
            "typeParameters": null,
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "ReturnType",
                    "rawText": "ReturnType",
                    "flags": 768,
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
                                "flags": 768,
                                "start": 470,
                                "end": 478
                            },
                            "typeParameters": null,
                            "autofix": 0,
                            "flags": 0,
                            "start": 470,
                            "end": 478
                        }
                    ],
                    "autofix": 0,
                    "flags": 0,
                    "start": 469,
                    "end": 479
                },
                "autofix": 0,
                "flags": 0,
                "start": 458,
                "end": 479
            },
            "flags": 0,
            "start": 437,
            "end": 480
        },
        {
            "kind": 200,
            "typeToken": {
                "kind": 16583,
                "flags": 768,
                "start": 480,
                "end": 498
            },
            "name": {
                "kind": 134299649,
                "text": "T20",
                "rawText": "T20",
                "flags": 768,
                "start": 494,
                "end": 498
            },
            "typeParameters": null,
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "ArgumentType",
                    "rawText": "ArgumentType",
                    "flags": 768,
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
                                "flags": 256,
                                "start": 515,
                                "end": 515
                            },
                            "returnType": {
                                "kind": 4259887,
                                "flags": 768,
                                "start": 519,
                                "end": 524
                            },
                            "typeParameters": null,
                            "autofix": 0,
                            "flags": 0,
                            "start": 514,
                            "end": 524
                        }
                    ],
                    "autofix": 0,
                    "flags": 0,
                    "start": 513,
                    "end": 525
                },
                "autofix": 0,
                "flags": 0,
                "start": 500,
                "end": 525
            },
            "flags": 0,
            "start": 480,
            "end": 526
        },
        {
            "kind": 200,
            "typeToken": {
                "kind": 16583,
                "flags": 768,
                "start": 526,
                "end": 545
            },
            "name": {
                "kind": 134299649,
                "text": "T21",
                "rawText": "T21",
                "flags": 768,
                "start": 541,
                "end": 545
            },
            "typeParameters": null,
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "ArgumentType",
                    "rawText": "ArgumentType",
                    "flags": 768,
                    "start": 547,
                    "end": 560
                },
                "typeParameters": {
                    "kind": 146,
                    "types": [
                        {
                            "kind": 148,
                            "parameters": [
                                {
                                    "kind": 149,
                                    "ellipsisToken": null,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 562,
                                        "end": 563
                                    },
                                    "optionalToken": null,
                                    "typeAnnotation": {
                                        "kind": 134234347,
                                        "flags": 768,
                                        "start": 564,
                                        "end": 571
                                    },
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 562,
                                    "end": 571
                                }
                            ],
                            "returnType": {
                                "kind": 134234345,
                                "flags": 768,
                                "start": 575,
                                "end": 582
                            },
                            "typeParameters": null,
                            "autofix": 0,
                            "flags": 0,
                            "start": 562,
                            "end": 582
                        }
                    ],
                    "autofix": 0,
                    "flags": 0,
                    "start": 560,
                    "end": 583
                },
                "autofix": 0,
                "flags": 0,
                "start": 547,
                "end": 583
            },
            "flags": 0,
            "start": 526,
            "end": 584
        },
        {
            "kind": 200,
            "typeToken": {
                "kind": 16583,
                "flags": 768,
                "start": 584,
                "end": 604
            },
            "name": {
                "kind": 134299649,
                "text": "T22",
                "rawText": "T22",
                "flags": 768,
                "start": 600,
                "end": 604
            },
            "typeParameters": null,
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "ArgumentType",
                    "rawText": "ArgumentType",
                    "flags": 768,
                    "start": 606,
                    "end": 619
                },
                "typeParameters": {
                    "kind": 146,
                    "types": [
                        {
                            "kind": 148,
                            "parameters": [
                                {
                                    "kind": 149,
                                    "ellipsisToken": null,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 621,
                                        "end": 622
                                    },
                                    "optionalToken": {
                                        "kind": 22,
                                        "flags": 768,
                                        "start": 622,
                                        "end": 623
                                    },
                                    "typeAnnotation": {
                                        "kind": 134234347,
                                        "flags": 768,
                                        "start": 624,
                                        "end": 631
                                    },
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 621,
                                    "end": 631
                                }
                            ],
                            "returnType": {
                                "kind": 134234345,
                                "flags": 768,
                                "start": 635,
                                "end": 642
                            },
                            "typeParameters": null,
                            "autofix": 0,
                            "flags": 0,
                            "start": 621,
                            "end": 642
                        }
                    ],
                    "autofix": 0,
                    "flags": 0,
                    "start": 619,
                    "end": 643
                },
                "autofix": 0,
                "flags": 0,
                "start": 606,
                "end": 643
            },
            "flags": 0,
            "start": 584,
            "end": 644
        },
        {
            "kind": 200,
            "typeToken": {
                "kind": 16583,
                "flags": 768,
                "start": 644,
                "end": 676
            },
            "name": {
                "kind": 134299649,
                "text": "T23",
                "rawText": "T23",
                "flags": 768,
                "start": 672,
                "end": 676
            },
            "typeParameters": null,
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "ArgumentType",
                    "rawText": "ArgumentType",
                    "flags": 768,
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
                                            "flags": 768,
                                            "start": 693,
                                            "end": 696
                                        },
                                        "name": {
                                            "kind": 134299649,
                                            "text": "args",
                                            "rawText": "args",
                                            "flags": 768,
                                            "start": 696,
                                            "end": 700
                                        },
                                        "optionalToken": null,
                                        "typeAnnotation": {
                                            "kind": 136,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 768,
                                                "start": 701,
                                                "end": 708
                                            },
                                            "flags": 0,
                                            "start": 709,
                                            "end": 710
                                        },
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 693,
                                        "end": 710
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 693,
                                "end": 710
                            },
                            "returnType": {
                                "kind": 134234345,
                                "flags": 768,
                                "start": 714,
                                "end": 721
                            },
                            "typeParameters": null,
                            "autofix": 0,
                            "flags": 0,
                            "start": 692,
                            "end": 721
                        }
                    ],
                    "autofix": 0,
                    "flags": 0,
                    "start": 691,
                    "end": 722
                },
                "autofix": 0,
                "flags": 0,
                "start": 678,
                "end": 722
            },
            "flags": 0,
            "start": 644,
            "end": 723
        },
        {
            "kind": 200,
            "typeToken": {
                "kind": 16583,
                "flags": 768,
                "start": 723,
                "end": 814
            },
            "name": {
                "kind": 134299649,
                "text": "T25",
                "rawText": "T25",
                "flags": 768,
                "start": 810,
                "end": 814
            },
            "typeParameters": null,
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "ArgumentType",
                    "rawText": "ArgumentType",
                    "flags": 768,
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
                                "flags": 768,
                                "start": 830,
                                "end": 838
                            },
                            "typeParameters": null,
                            "autofix": 0,
                            "flags": 0,
                            "start": 830,
                            "end": 838
                        }
                    ],
                    "autofix": 0,
                    "flags": 0,
                    "start": 829,
                    "end": 839
                },
                "autofix": 0,
                "flags": 0,
                "start": 816,
                "end": 839
            },
            "flags": 0,
            "start": 723,
            "end": 840
        },
        {
            "kind": 200,
            "typeToken": {
                "kind": 16583,
                "flags": 768,
                "start": 840,
                "end": 859
            },
            "name": {
                "kind": 134299649,
                "text": "T26",
                "rawText": "T26",
                "flags": 768,
                "start": 855,
                "end": 859
            },
            "typeParameters": null,
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "ArgumentType",
                    "rawText": "ArgumentType",
                    "flags": 768,
                    "start": 861,
                    "end": 874
                },
                "typeParameters": {
                    "kind": 146,
                    "types": [
                        {
                            "kind": 134234252,
                            "flags": 768,
                            "start": 875,
                            "end": 878
                        }
                    ],
                    "autofix": 0,
                    "flags": 0,
                    "start": 874,
                    "end": 879
                },
                "autofix": 0,
                "flags": 0,
                "start": 861,
                "end": 879
            },
            "flags": 0,
            "start": 840,
            "end": 880
        },
        {
            "kind": 200,
            "typeToken": {
                "kind": 16583,
                "flags": 768,
                "start": 880,
                "end": 897
            },
            "name": {
                "kind": 134299649,
                "text": "T27",
                "rawText": "T27",
                "flags": 768,
                "start": 893,
                "end": 897
            },
            "typeParameters": null,
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "ArgumentType",
                    "rawText": "ArgumentType",
                    "flags": 768,
                    "start": 899,
                    "end": 912
                },
                "typeParameters": {
                    "kind": 146,
                    "types": [
                        {
                            "kind": 134234349,
                            "flags": 768,
                            "start": 913,
                            "end": 918
                        }
                    ],
                    "autofix": 0,
                    "flags": 0,
                    "start": 912,
                    "end": 919
                },
                "autofix": 0,
                "flags": 0,
                "start": 899,
                "end": 919
            },
            "flags": 0,
            "start": 880,
            "end": 920
        }
    ],
    "isModule": false,
    "text": "type T10 = ReturnType<() => string>;  // string\ntype T11 = ReturnType<(s: string) => void>;  // void\ntype T12 = ReturnType<(<T>() => T)>;  // {}\n\n//type T13 = ReturnType<(<T extends U, U extends number[]>() => T)>;  // number[]\n\ntype T14 = ReturnType<typeof f1>;  // { a: number, b: string }\n\ntype T15 = ReturnType<typeof C>;  // C\ntype T16 = ReturnType<any>;  // any\n\ntype T17 = ReturnType<never>;  // any\ntype T18 = ReturnType<string>;  // Error\ntype T19 = ReturnType<Function>;  // any\n\ntype T20 = ArgumentType<() => void>;  // never\ntype T21 = ArgumentType<(x: string) => number>;  // string\ntype T22 = ArgumentType<(x?: string) => number>;  // string | undefined\ntype T23 = ArgumentType<(...args: string[]) => number>;  // string\n//type T24 = ArgumentType<(x: string, y: string) => number>;  // Error\ntype T25 = ArgumentType<Function>;  // Error\ntype T26 = ArgumentType<any>;  // any\ntype T27 = ArgumentType<never>;  // any\n\n",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 930
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

