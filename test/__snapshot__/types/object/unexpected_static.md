# Kataw parser test case

## Input

`````js
// error: object types don't have static fields
type A = { static x: X }

// error: object types don't have static fields (including indexers)
type B = { static [K]: V }

// error: object types don't have static fields (including spread)
type C = { static ...X }

// ok: prop named static
type D = { static: X }

// error: static prop named static
type E = { static static: X }

// ok: parsed as a method named static
type F = { static(): R }

// ok: parsed as a poly method named static
type G = { static<X>(): R }

// error: static method named static
type H = { static static(): R }

// error: static poly method named static
type I = { static static<X>(): R }

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
                "flags": 65,
                "transformFlags": 0,
                "start": 0,
                "end": 52
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "transformFlags": 0,
                "start": 52,
                "end": 54
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 54,
                "end": 56
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "static",
                                "rawText": "static",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 58,
                                "end": 65
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 65,
                                        "end": 67
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 65,
                                    "end": 67
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 65,
                                "end": 67
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 58,
                            "end": 67
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 56,
                    "end": 67
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 56,
                "end": 67
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 0,
            "end": 67
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "X",
                "rawText": "X",
                "flags": 96,
                "transformFlags": 0,
                "start": 68,
                "end": 70
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 68,
            "end": 70
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 72,
                "end": 147
            },
            "name": {
                "kind": 134299649,
                "text": "B",
                "rawText": "B",
                "flags": 96,
                "transformFlags": 0,
                "start": 147,
                "end": 149
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 149,
                "end": 151
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "static",
                                "rawText": "static",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 153,
                                "end": 160
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 147,
                                    "elementTypes": [
                                        {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 144,
                                                "typeName": {
                                                    "kind": 134299649,
                                                    "text": "K",
                                                    "rawText": "K",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 162,
                                                    "end": 163
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 162,
                                                "end": 163
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 162,
                                            "end": 163
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 160,
                                    "end": 164
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 160,
                                "end": 164
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 153,
                            "end": 164
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 151,
                    "end": 164
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 151,
                "end": 164
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 72,
            "end": 164
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "V",
                "rawText": "V",
                "flags": 96,
                "transformFlags": 0,
                "start": 165,
                "end": 167
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 165,
            "end": 167
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 169,
                "end": 242
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "transformFlags": 0,
                "start": 242,
                "end": 244
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 244,
                "end": 246
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "static",
                                "rawText": "static",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 248,
                                "end": 255
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 16637,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 255,
                                        "end": 255
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 255,
                                    "end": 255
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 255,
                                "end": 255
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 248,
                            "end": 255
                        },
                        {
                            "kind": 247,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 255,
                                "end": 259
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "X",
                                        "rawText": "X",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 259,
                                        "end": 260
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 259,
                                    "end": 260
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 259,
                                "end": 260
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 255,
                            "end": 260
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 246,
                    "end": 262
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 246,
                "end": 262
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 169,
            "end": 262
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 262,
                "end": 293
            },
            "name": {
                "kind": 134299649,
                "text": "D",
                "rawText": "D",
                "flags": 96,
                "transformFlags": 0,
                "start": 293,
                "end": 295
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 295,
                "end": 297
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "static",
                                "rawText": "static",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 299,
                                "end": 306
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "X",
                                        "rawText": "X",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 307,
                                        "end": 309
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 307,
                                    "end": 309
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 307,
                                "end": 309
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 299,
                            "end": 309
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 297,
                    "end": 311
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 297,
                "end": 311
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 262,
            "end": 311
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 311,
                "end": 352
            },
            "name": {
                "kind": 134299649,
                "text": "E",
                "rawText": "E",
                "flags": 96,
                "transformFlags": 0,
                "start": 352,
                "end": 354
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 354,
                "end": 356
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "static",
                                "rawText": "static",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 358,
                                "end": 365
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "static",
                                        "rawText": "static",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 365,
                                        "end": 372
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 365,
                                    "end": 372
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 365,
                                "end": 372
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 358,
                            "end": 372
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 356,
                    "end": 372
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 356,
                "end": 372
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 311,
            "end": 372
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "X",
                "rawText": "X",
                "flags": 96,
                "transformFlags": 0,
                "start": 373,
                "end": 375
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 373,
            "end": 375
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 377,
                "end": 422
            },
            "name": {
                "kind": 134299649,
                "text": "F",
                "rawText": "F",
                "flags": 96,
                "transformFlags": 0,
                "start": 422,
                "end": 424
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 424,
                "end": 426
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "static",
                                "rawText": "static",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 428,
                                "end": 435
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 148,
                                "functionTypeParameterList": {
                                    "kind": 282,
                                    "parameters": [],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 436,
                                    "end": 436
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 144,
                                        "typeName": {
                                            "kind": 134299649,
                                            "text": "R",
                                            "rawText": "R",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 438,
                                            "end": 440
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 438,
                                        "end": 440
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 438,
                                    "end": 440
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 435,
                                "end": 440
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 428,
                            "end": 440
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 426,
                    "end": 442
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 426,
                "end": 442
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 377,
            "end": 442
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 442,
                "end": 492
            },
            "name": {
                "kind": 134299649,
                "text": "G",
                "rawText": "G",
                "flags": 96,
                "transformFlags": 0,
                "start": 492,
                "end": 494
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 494,
                "end": 496
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "static",
                                "rawText": "static",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 498,
                                "end": 505
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 148,
                                "functionTypeParameterList": {
                                    "kind": 282,
                                    "parameters": [],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 509,
                                    "end": 509
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 144,
                                        "typeName": {
                                            "kind": 134299649,
                                            "text": "R",
                                            "rawText": "R",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 511,
                                            "end": 513
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 511,
                                        "end": 513
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 511,
                                    "end": 513
                                },
                                "typeParameters": {
                                    "kind": 307,
                                    "declarations": [
                                        {
                                            "kind": 146,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "X",
                                                "rawText": "X",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 506,
                                                "end": 507
                                            },
                                            "type": null,
                                            "assignToken": null,
                                            "defaultType": null,
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 506,
                                            "end": 507
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "transformFlags": 512,
                                    "start": 506,
                                    "end": 507
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 505,
                                "end": 513
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 498,
                            "end": 513
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 496,
                    "end": 515
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 496,
                "end": 515
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 442,
            "end": 515
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 515,
                "end": 558
            },
            "name": {
                "kind": 134299649,
                "text": "H",
                "rawText": "H",
                "flags": 96,
                "transformFlags": 0,
                "start": 558,
                "end": 560
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 560,
                "end": 562
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "static",
                                "rawText": "static",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 564,
                                "end": 571
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "static",
                                        "rawText": "static",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 571,
                                        "end": 578
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 571,
                                    "end": 578
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 571,
                                "end": 578
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 564,
                            "end": 578
                        },
                        {
                            "kind": 196,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "typeParameter": null,
                            "value": {
                                "kind": 282,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 579,
                                "end": 579
                            },
                            "returnType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "R",
                                        "rawText": "R",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 581,
                                        "end": 583
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 581,
                                    "end": 583
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 581,
                                "end": 583
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 578,
                            "end": 583
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 562,
                    "end": 585
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 562,
                "end": 585
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 515,
            "end": 585
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 585,
                "end": 633
            },
            "name": {
                "kind": 134299649,
                "text": "I",
                "rawText": "I",
                "flags": 96,
                "transformFlags": 0,
                "start": 633,
                "end": 635
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 635,
                "end": 637
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "static",
                                "rawText": "static",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 639,
                                "end": 646
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "static",
                                        "rawText": "static",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 646,
                                        "end": 653
                                    },
                                    "typeParameters": {
                                        "kind": 310,
                                        "types": [
                                            {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 144,
                                                    "typeName": {
                                                        "kind": 134299649,
                                                        "text": "X",
                                                        "rawText": "X",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 654,
                                                        "end": 655
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 654,
                                                    "end": 655
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 654,
                                                "end": 655
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 512,
                                        "start": 654,
                                        "end": 655
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 646,
                                    "end": 656
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 646,
                                "end": 656
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 639,
                            "end": 656
                        },
                        {
                            "kind": 196,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "typeParameter": null,
                            "value": {
                                "kind": 282,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 657,
                                "end": 657
                            },
                            "returnType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "R",
                                        "rawText": "R",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 659,
                                        "end": 661
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 659,
                                    "end": 661
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 659,
                                "end": 661
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 656,
                            "end": 661
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 637,
                    "end": 663
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 637,
                "end": 663
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 585,
            "end": 663
        }
    ],
    "isModule": false,
    "source": "// error: object types don't have static fields\ntype A = { static x: X }\n\n// error: object types don't have static fields (including indexers)\ntype B = { static [K]: V }\n\n// error: object types don't have static fields (including spread)\ntype C = { static ...X }\n\n// ok: prop named static\ntype D = { static: X }\n\n// error: static prop named static\ntype E = { static static: X }\n\n// ok: parsed as a method named static\ntype F = { static(): R }\n\n// ok: parsed as a poly method named static\ntype G = { static<X>(): R }\n\n// error: static method named static\ntype H = { static static(): R }\n\n// error: static poly method named static\ntype I = { static static<X>(): R }\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 664
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ':' is not allowed here. Did you mean ';'? - start: 67, end: 68
✖ Declaration or statement expected - start: 70, end: 72
✖ ':' is not allowed here. Did you mean ';'? - start: 164, end: 165
✖ Declaration or statement expected - start: 167, end: 169
✖ Type expected - start: 255, end: 259
✖ ':' is not allowed here. Did you mean ';'? - start: 372, end: 373
✖ Declaration or statement expected - start: 375, end: 377
✖ '(' is not allowed here. Did you mean ';'? - start: 578, end: 579
✖ '(' is not allowed here. Did you mean ';'? - start: 656, end: 657

```

