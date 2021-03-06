# Kataw parser test case

## Input

`````js
type T10 = ReturnType<() => string>;  // string
type T11 = ReturnType<(s: string) => void>;  // void
type T12 = ReturnType<(<T>() => T)>;  // {}
type T13 = ReturnType<(<T extends U, U extends number[]>() => T)>;  // number[]
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
type T24 = ArgumentType<(x: string, y: string) => number>;  // Error
type T25 = ArgumentType<Function>;  // Error
type T26 = ArgumentType<any>;  // any
type T27 = ArgumentType<never>;  // any

type T00 = Unpacked<string>;  // string
type T01 = Unpacked<string[]>;  // string
type T02 = Unpacked<() => string>;  // string
type T03 = Unpacked<Promise<string>>;  // string
type T04 = Unpacked<Unpacked<Promise<string>[]>>;  // string
type T05 = Unpacked<any>;  // any
type T06 = Unpacked<never>;  // never
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "type T10 = ReturnType<() => string>;  // string\ntype T11 = ReturnType<(s: string) => void>;  // void\ntype T12 = ReturnType<(<T>() => T)>;  // {}\ntype T13 = ReturnType<(<T extends U, U extends number[]>() => T)>;  // number[]\ntype T14 = ReturnType<typeof f1>;  // { a: number, b: string }\ntype T15 = ReturnType<typeof C>;  // C\ntype T16 = ReturnType<any>;  // any\ntype T17 = ReturnType<never>;  // any\ntype T18 = ReturnType<string>;  // Error\ntype T19 = ReturnType<Function>;  // any\n\ntype T20 = ArgumentType<() => void>;  // never\ntype T21 = ArgumentType<(x: string) => number>;  // string\ntype T22 = ArgumentType<(x?: string) => number>;  // string | undefined\ntype T23 = ArgumentType<(...args: string[]) => number>;  // string\ntype T24 = ArgumentType<(x: string, y: string) => number>;  // Error\ntype T25 = ArgumentType<Function>;  // Error\ntype T26 = ArgumentType<any>;  // any\ntype T27 = ArgumentType<never>;  // any\n\ntype T00 = Unpacked<string>;  // string\ntype T01 = Unpacked<string[]>;  // string\ntype T02 = Unpacked<() => string>;  // string\ntype T03 = Unpacked<Promise<string>>;  // string\ntype T04 = Unpacked<Unpacked<Promise<string>[]>>;  // string\ntype T05 = Unpacked<any>;  // any\ntype T06 = Unpacked<never>;  // never",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "T10",
                    "rawText": "T10",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 8
                },
                "type": {
                    "kind": 8428,
                    "typeName": {
                        "kind": 196711,
                        "text": "ReturnType",
                        "rawText": "ReturnType",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 10,
                        "end": 21
                    },
                    "typeArguments": {
                        "kind": 8419,
                        "typeArgumentsList": [
                            {
                                "kind": 8287,
                                "typeParameters": null,
                                "parameters": {
                                    "kind": 8367,
                                    "parameterList": [],
                                    "trailingcomma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 23,
                                    "end": 23
                                },
                                "returnType": {
                                    "kind": 4202702,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 27,
                                    "end": 34
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 22,
                                "end": 34
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 22,
                        "end": 34
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 10,
                    "end": 36
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 0,
                "end": 36
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "T11",
                    "rawText": "T11",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 52,
                    "end": 56
                },
                "type": {
                    "kind": 8428,
                    "typeName": {
                        "kind": 196711,
                        "text": "ReturnType",
                        "rawText": "ReturnType",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 58,
                        "end": 69
                    },
                    "typeArguments": {
                        "kind": 8419,
                        "typeArgumentsList": [
                            {
                                "kind": 8287,
                                "typeParameters": null,
                                "parameters": {
                                    "kind": 8367,
                                    "parameterList": [
                                        {
                                            "kind": 8366,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "s",
                                                "rawText": "s",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 71,
                                                "end": 72
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 4202702,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 73,
                                                "end": 80
                                            },
                                            "initializer": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 71,
                                            "end": 80
                                        }
                                    ],
                                    "trailingcomma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 71,
                                    "end": 80
                                },
                                "returnType": {
                                    "kind": 4202742,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 84,
                                    "end": 89
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 70,
                                "end": 89
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 70,
                        "end": 89
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 58,
                    "end": 91
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 36,
                "end": 91
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "T12",
                    "rawText": "T12",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 105,
                    "end": 109
                },
                "type": {
                    "kind": 8428,
                    "typeName": {
                        "kind": 196711,
                        "text": "ReturnType",
                        "rawText": "ReturnType",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 111,
                        "end": 122
                    },
                    "typeArguments": {
                        "kind": 8419,
                        "typeArgumentsList": [
                            {
                                "kind": 8369,
                                "type": {
                                    "kind": 8287,
                                    "typeParameters": {
                                        "kind": 8425,
                                        "typeParameterList": [
                                            {
                                                "kind": 8424,
                                                "name": {
                                                    "kind": 196711,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 125,
                                                    "end": 126
                                                },
                                                "constraint": null,
                                                "defaultType": null,
                                                "expression": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 125,
                                                "end": 126
                                            }
                                        ],
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 125,
                                        "end": 126
                                    },
                                    "parameters": {
                                        "kind": 8367,
                                        "parameterList": [],
                                        "trailingcomma": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 128,
                                        "end": 128
                                    },
                                    "returnType": {
                                        "kind": 8428,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "T",
                                            "rawText": "T",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 132,
                                            "end": 134
                                        },
                                        "typeArguments": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 132,
                                        "end": 135
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 124,
                                    "end": 134
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 123,
                                "end": 135
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 123,
                        "end": 135
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 111,
                    "end": 137
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 91,
                "end": 137
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "T13",
                    "rawText": "T13",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 149,
                    "end": 153
                },
                "type": {
                    "kind": 8428,
                    "typeName": {
                        "kind": 196711,
                        "text": "ReturnType",
                        "rawText": "ReturnType",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 155,
                        "end": 166
                    },
                    "typeArguments": {
                        "kind": 8419,
                        "typeArgumentsList": [
                            {
                                "kind": 8369,
                                "type": {
                                    "kind": 8287,
                                    "typeParameters": {
                                        "kind": 8425,
                                        "typeParameterList": [
                                            {
                                                "kind": 8424,
                                                "name": {
                                                    "kind": 196711,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 169,
                                                    "end": 170
                                                },
                                                "constraint": {
                                                    "kind": 8428,
                                                    "typeName": {
                                                        "kind": 196711,
                                                        "text": "U",
                                                        "rawText": "U",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 178,
                                                        "end": 180
                                                    },
                                                    "typeArguments": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 178,
                                                    "end": 181
                                                },
                                                "defaultType": null,
                                                "expression": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 169,
                                                "end": 180
                                            },
                                            {
                                                "kind": 8424,
                                                "name": {
                                                    "kind": 196711,
                                                    "text": "U",
                                                    "rawText": "U",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 181,
                                                    "end": 183
                                                },
                                                "constraint": {
                                                    "kind": 8199,
                                                    "elementType": {
                                                        "kind": 4202657,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "start": 191,
                                                        "end": 198
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 191,
                                                    "end": 201
                                                },
                                                "defaultType": null,
                                                "expression": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 181,
                                                "end": 200
                                            }
                                        ],
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 169,
                                        "end": 200
                                    },
                                    "parameters": {
                                        "kind": 8367,
                                        "parameterList": [],
                                        "trailingcomma": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 202,
                                        "end": 202
                                    },
                                    "returnType": {
                                        "kind": 8428,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "T",
                                            "rawText": "T",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 206,
                                            "end": 208
                                        },
                                        "typeArguments": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 206,
                                        "end": 209
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 168,
                                    "end": 208
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 167,
                                "end": 209
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 167,
                        "end": 209
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 155,
                    "end": 211
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 137,
                "end": 211
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "T14",
                    "rawText": "T14",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 229,
                    "end": 233
                },
                "type": {
                    "kind": 8428,
                    "typeName": {
                        "kind": 196711,
                        "text": "ReturnType",
                        "rawText": "ReturnType",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 235,
                        "end": 246
                    },
                    "typeArguments": {
                        "kind": 8419,
                        "typeArgumentsList": [
                            {
                                "kind": 8427,
                                "exprName": {
                                    "kind": 196711,
                                    "text": "f1",
                                    "rawText": "f1",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 253,
                                    "end": 256
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 247,
                                "end": 256
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 247,
                        "end": 256
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 235,
                    "end": 258
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 211,
                "end": 258
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "T15",
                    "rawText": "T15",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 292,
                    "end": 296
                },
                "type": {
                    "kind": 8428,
                    "typeName": {
                        "kind": 196711,
                        "text": "ReturnType",
                        "rawText": "ReturnType",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 298,
                        "end": 309
                    },
                    "typeArguments": {
                        "kind": 8419,
                        "typeArgumentsList": [
                            {
                                "kind": 8427,
                                "exprName": {
                                    "kind": 196711,
                                    "text": "C",
                                    "rawText": "C",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 316,
                                    "end": 318
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 310,
                                "end": 318
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 310,
                        "end": 318
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 298,
                    "end": 320
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 258,
                "end": 320
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "T16",
                    "rawText": "T16",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 331,
                    "end": 335
                },
                "type": {
                    "kind": 8428,
                    "typeName": {
                        "kind": 196711,
                        "text": "ReturnType",
                        "rawText": "ReturnType",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 337,
                        "end": 348
                    },
                    "typeArguments": {
                        "kind": 8419,
                        "typeArgumentsList": [
                            {
                                "kind": 4202498,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 349,
                                "end": 352
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 349,
                        "end": 352
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 337,
                    "end": 354
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 320,
                "end": 354
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "T17",
                    "rawText": "T17",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 367,
                    "end": 371
                },
                "type": {
                    "kind": 8428,
                    "typeName": {
                        "kind": 196711,
                        "text": "ReturnType",
                        "rawText": "ReturnType",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 373,
                        "end": 384
                    },
                    "typeArguments": {
                        "kind": 8419,
                        "typeArgumentsList": [
                            {
                                "kind": 4202651,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 385,
                                "end": 390
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 385,
                        "end": 390
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 373,
                    "end": 392
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 354,
                "end": 392
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "T18",
                    "rawText": "T18",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 405,
                    "end": 409
                },
                "type": {
                    "kind": 8428,
                    "typeName": {
                        "kind": 196711,
                        "text": "ReturnType",
                        "rawText": "ReturnType",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 411,
                        "end": 422
                    },
                    "typeArguments": {
                        "kind": 8419,
                        "typeArgumentsList": [
                            {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 423,
                                "end": 429
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 423,
                        "end": 429
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 411,
                    "end": 431
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 392,
                "end": 431
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "T19",
                    "rawText": "T19",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 446,
                    "end": 450
                },
                "type": {
                    "kind": 8428,
                    "typeName": {
                        "kind": 196711,
                        "text": "ReturnType",
                        "rawText": "ReturnType",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 452,
                        "end": 463
                    },
                    "typeArguments": {
                        "kind": 8419,
                        "typeArgumentsList": [
                            {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "Function",
                                    "rawText": "Function",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 464,
                                    "end": 472
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 464,
                                "end": 473
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 464,
                        "end": 472
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 452,
                    "end": 474
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 431,
                "end": 474
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "T20",
                    "rawText": "T20",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 488,
                    "end": 492
                },
                "type": {
                    "kind": 8428,
                    "typeName": {
                        "kind": 196711,
                        "text": "ArgumentType",
                        "rawText": "ArgumentType",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 494,
                        "end": 507
                    },
                    "typeArguments": {
                        "kind": 8419,
                        "typeArgumentsList": [
                            {
                                "kind": 8287,
                                "typeParameters": null,
                                "parameters": {
                                    "kind": 8367,
                                    "parameterList": [],
                                    "trailingcomma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 509,
                                    "end": 509
                                },
                                "returnType": {
                                    "kind": 4202742,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 513,
                                    "end": 518
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 508,
                                "end": 518
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 508,
                        "end": 518
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 494,
                    "end": 520
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 474,
                "end": 520
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "T21",
                    "rawText": "T21",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 535,
                    "end": 539
                },
                "type": {
                    "kind": 8428,
                    "typeName": {
                        "kind": 196711,
                        "text": "ArgumentType",
                        "rawText": "ArgumentType",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 541,
                        "end": 554
                    },
                    "typeArguments": {
                        "kind": 8419,
                        "typeArgumentsList": [
                            {
                                "kind": 8287,
                                "typeParameters": null,
                                "parameters": {
                                    "kind": 8367,
                                    "parameterList": [
                                        {
                                            "kind": 8366,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 556,
                                                "end": 557
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 4202702,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 558,
                                                "end": 565
                                            },
                                            "initializer": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 556,
                                            "end": 565
                                        }
                                    ],
                                    "trailingcomma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 556,
                                    "end": 565
                                },
                                "returnType": {
                                    "kind": 4202657,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 569,
                                    "end": 576
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 555,
                                "end": 576
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 555,
                        "end": 576
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 541,
                    "end": 578
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 520,
                "end": 578
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "T22",
                    "rawText": "T22",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 594,
                    "end": 598
                },
                "type": {
                    "kind": 8428,
                    "typeName": {
                        "kind": 196711,
                        "text": "ArgumentType",
                        "rawText": "ArgumentType",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 600,
                        "end": 613
                    },
                    "typeArguments": {
                        "kind": 8419,
                        "typeArgumentsList": [
                            {
                                "kind": 8287,
                                "typeParameters": null,
                                "parameters": {
                                    "kind": 8367,
                                    "parameterList": [
                                        {
                                            "kind": 8366,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 615,
                                                "end": 616
                                            },
                                            "isOptional": true,
                                            "type": {
                                                "kind": 4202702,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 618,
                                                "end": 625
                                            },
                                            "initializer": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 615,
                                            "end": 625
                                        }
                                    ],
                                    "trailingcomma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 615,
                                    "end": 625
                                },
                                "returnType": {
                                    "kind": 4202657,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 629,
                                    "end": 636
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 614,
                                "end": 636
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 614,
                        "end": 636
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 600,
                    "end": 638
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 578,
                "end": 638
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "T23",
                    "rawText": "T23",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 666,
                    "end": 670
                },
                "type": {
                    "kind": 8428,
                    "typeName": {
                        "kind": 196711,
                        "text": "ArgumentType",
                        "rawText": "ArgumentType",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 672,
                        "end": 685
                    },
                    "typeArguments": {
                        "kind": 8419,
                        "typeArgumentsList": [
                            {
                                "kind": 8287,
                                "typeParameters": null,
                                "parameters": {
                                    "kind": 8367,
                                    "parameterList": [
                                        {
                                            "kind": 8366,
                                            "ellipsis": true,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "args",
                                                "rawText": "args",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 690,
                                                "end": 694
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 8199,
                                                "elementType": {
                                                    "kind": 4202702,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 695,
                                                    "end": 702
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 695,
                                                "end": 705
                                            },
                                            "initializer": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 4097,
                                            "start": 687,
                                            "end": 704
                                        }
                                    ],
                                    "trailingcomma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 687,
                                    "end": 704
                                },
                                "returnType": {
                                    "kind": 4202657,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 708,
                                    "end": 715
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 686,
                                "end": 715
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 686,
                        "end": 715
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 672,
                    "end": 717
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 638,
                "end": 717
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "T24",
                    "rawText": "T24",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 733,
                    "end": 737
                },
                "type": {
                    "kind": 8428,
                    "typeName": {
                        "kind": 196711,
                        "text": "ArgumentType",
                        "rawText": "ArgumentType",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 739,
                        "end": 752
                    },
                    "typeArguments": {
                        "kind": 8419,
                        "typeArgumentsList": [
                            {
                                "kind": 8287,
                                "typeParameters": null,
                                "parameters": {
                                    "kind": 8367,
                                    "parameterList": [
                                        {
                                            "kind": 8366,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 754,
                                                "end": 755
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 4202702,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 756,
                                                "end": 763
                                            },
                                            "initializer": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 754,
                                            "end": 763
                                        },
                                        {
                                            "kind": 8366,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 764,
                                                "end": 766
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 4202702,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 767,
                                                "end": 774
                                            },
                                            "initializer": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 764,
                                            "end": 774
                                        }
                                    ],
                                    "trailingcomma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 754,
                                    "end": 774
                                },
                                "returnType": {
                                    "kind": 4202657,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 778,
                                    "end": 785
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 753,
                                "end": 785
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 753,
                        "end": 785
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 739,
                    "end": 787
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 717,
                "end": 787
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "T25",
                    "rawText": "T25",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 802,
                    "end": 806
                },
                "type": {
                    "kind": 8428,
                    "typeName": {
                        "kind": 196711,
                        "text": "ArgumentType",
                        "rawText": "ArgumentType",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 808,
                        "end": 821
                    },
                    "typeArguments": {
                        "kind": 8419,
                        "typeArgumentsList": [
                            {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "Function",
                                    "rawText": "Function",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 822,
                                    "end": 830
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 822,
                                "end": 831
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 822,
                        "end": 830
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 808,
                    "end": 832
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 787,
                "end": 832
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "T26",
                    "rawText": "T26",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 847,
                    "end": 851
                },
                "type": {
                    "kind": 8428,
                    "typeName": {
                        "kind": 196711,
                        "text": "ArgumentType",
                        "rawText": "ArgumentType",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 853,
                        "end": 866
                    },
                    "typeArguments": {
                        "kind": 8419,
                        "typeArgumentsList": [
                            {
                                "kind": 4202498,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 867,
                                "end": 870
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 867,
                        "end": 870
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 853,
                    "end": 872
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 832,
                "end": 872
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "T27",
                    "rawText": "T27",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 885,
                    "end": 889
                },
                "type": {
                    "kind": 8428,
                    "typeName": {
                        "kind": 196711,
                        "text": "ArgumentType",
                        "rawText": "ArgumentType",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 891,
                        "end": 904
                    },
                    "typeArguments": {
                        "kind": 8419,
                        "typeArgumentsList": [
                            {
                                "kind": 4202651,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 905,
                                "end": 910
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 905,
                        "end": 910
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 891,
                    "end": 912
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 872,
                "end": 912
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "T00",
                    "rawText": "T00",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 926,
                    "end": 930
                },
                "type": {
                    "kind": 8428,
                    "typeName": {
                        "kind": 196711,
                        "text": "Unpacked",
                        "rawText": "Unpacked",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 932,
                        "end": 941
                    },
                    "typeArguments": {
                        "kind": 8419,
                        "typeArgumentsList": [
                            {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 942,
                                "end": 948
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 942,
                        "end": 948
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 932,
                    "end": 950
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 912,
                "end": 950
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "T01",
                    "rawText": "T01",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 966,
                    "end": 970
                },
                "type": {
                    "kind": 8428,
                    "typeName": {
                        "kind": 196711,
                        "text": "Unpacked",
                        "rawText": "Unpacked",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 972,
                        "end": 981
                    },
                    "typeArguments": {
                        "kind": 8419,
                        "typeArgumentsList": [
                            {
                                "kind": 8199,
                                "elementType": {
                                    "kind": 4202702,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 982,
                                    "end": 988
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 982,
                                "end": 991
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 982,
                        "end": 990
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 972,
                    "end": 992
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 950,
                "end": 992
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "T02",
                    "rawText": "T02",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 1008,
                    "end": 1012
                },
                "type": {
                    "kind": 8428,
                    "typeName": {
                        "kind": 196711,
                        "text": "Unpacked",
                        "rawText": "Unpacked",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 1014,
                        "end": 1023
                    },
                    "typeArguments": {
                        "kind": 8419,
                        "typeArgumentsList": [
                            {
                                "kind": 8287,
                                "typeParameters": null,
                                "parameters": {
                                    "kind": 8367,
                                    "parameterList": [],
                                    "trailingcomma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 1025,
                                    "end": 1025
                                },
                                "returnType": {
                                    "kind": 4202702,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 1029,
                                    "end": 1036
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 1024,
                                "end": 1036
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 1024,
                        "end": 1036
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 1014,
                    "end": 1038
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 992,
                "end": 1038
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "T03",
                    "rawText": "T03",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 1054,
                    "end": 1058
                },
                "type": {
                    "kind": 8428,
                    "typeName": {
                        "kind": 196711,
                        "text": "Unpacked",
                        "rawText": "Unpacked",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 1060,
                        "end": 1069
                    },
                    "typeArguments": {
                        "kind": 8419,
                        "typeArgumentsList": [
                            {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "Promise",
                                    "rawText": "Promise",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 1070,
                                    "end": 1077
                                },
                                "typeArguments": {
                                    "kind": 8419,
                                    "typeArgumentsList": [
                                        {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 1078,
                                            "end": 1084
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 1078,
                                    "end": 1084
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 1070,
                                "end": 1086
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 1070,
                        "end": 1085
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 1060,
                    "end": 1087
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 1038,
                "end": 1087
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "T04",
                    "rawText": "T04",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 1103,
                    "end": 1107
                },
                "type": {
                    "kind": 8428,
                    "typeName": {
                        "kind": 196711,
                        "text": "Unpacked",
                        "rawText": "Unpacked",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 1109,
                        "end": 1118
                    },
                    "typeArguments": {
                        "kind": 8419,
                        "typeArgumentsList": [
                            {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "Unpacked",
                                    "rawText": "Unpacked",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 1119,
                                    "end": 1127
                                },
                                "typeArguments": {
                                    "kind": 8419,
                                    "typeArgumentsList": [
                                        {
                                            "kind": 8199,
                                            "elementType": {
                                                "kind": 8428,
                                                "typeName": {
                                                    "kind": 196711,
                                                    "text": "Promise",
                                                    "rawText": "Promise",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 1128,
                                                    "end": 1135
                                                },
                                                "typeArguments": {
                                                    "kind": 8419,
                                                    "typeArgumentsList": [
                                                        {
                                                            "kind": 4202702,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 1136,
                                                            "end": 1142
                                                        }
                                                    ],
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 1136,
                                                    "end": 1142
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 1128,
                                                "end": 1144
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 1128,
                                            "end": 1146
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 1128,
                                    "end": 1145
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 1119,
                                "end": 1147
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 1119,
                        "end": 1146
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 1109,
                    "end": 1148
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 1087,
                "end": 1148
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "T05",
                    "rawText": "T05",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 1164,
                    "end": 1168
                },
                "type": {
                    "kind": 8428,
                    "typeName": {
                        "kind": 196711,
                        "text": "Unpacked",
                        "rawText": "Unpacked",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 1170,
                        "end": 1179
                    },
                    "typeArguments": {
                        "kind": 8419,
                        "typeArgumentsList": [
                            {
                                "kind": 4202498,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 1180,
                                "end": 1183
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 1180,
                        "end": 1183
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 1170,
                    "end": 1185
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 1148,
                "end": 1185
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "T06",
                    "rawText": "T06",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 1198,
                    "end": 1202
                },
                "type": {
                    "kind": 8428,
                    "typeName": {
                        "kind": 196711,
                        "text": "Unpacked",
                        "rawText": "Unpacked",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 1204,
                        "end": 1213
                    },
                    "typeArguments": {
                        "kind": 8419,
                        "typeArgumentsList": [
                            {
                                "kind": 4202651,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 1214,
                                "end": 1219
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 1214,
                        "end": 1219
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 1204,
                    "end": 1221
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 1185,
                "end": 1221
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 1221
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 1231
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

