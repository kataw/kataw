# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
declare function tag(...x: any[]): any;

var a = `${123 + 456 as number}`;
var b = `leading ${123 + 456 as number}`;
var c = `${123 + 456 as number} trailing`;
var d = `Hello ${123} World` as string;
var e = `Hello` as string;
var f = 1 + `${1} end of string` as string;
var g = tag `Hello ${123} World` as string;
var h = tag `Hello` as string;

`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "declare function tag(...x: any[]): any;\n\nvar a = `${123 + 456 as number}`;\nvar b = `leading ${123 + 456 as number}`;\nvar c = `${123 + 456 as number} trailing`;\nvar d = `Hello ${123} World` as string;\nvar e = `Hello` as string;\nvar f = 1 + `${1} end of string` as string;\nvar g = tag `Hello ${123} World` as string;\nvar h = tag `Hello` as string;\n",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "tag",
                "rawText": "tag",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 16,
                "end": 20
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": true,
                        "binding": {
                            "kind": 131102,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 24,
                            "end": 25
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 8199,
                            "elementType": {
                                "kind": 4202498,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 26,
                                "end": 30
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 26,
                            "end": 33
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 4097,
                        "start": 21,
                        "end": 32
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 21,
                "end": 33
            },
            "type": {
                "kind": 4202498,
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 34,
                "end": 38
            },
            "contents": null,
            "typeParameters": null,
            "flags": 402685952,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 7,
            "end": 39
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 44,
                            "end": 46
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 66261,
                            "spans": [
                                {
                                    "kind": 66263,
                                    "rawText": "",
                                    "text": "",
                                    "expression": {
                                        "kind": 73738,
                                        "expression": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 4261540,
                                                "text": 123,
                                                "rawText": "123",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 52,
                                                "end": 55
                                            },
                                            "operator": "+",
                                            "right": {
                                                "kind": 4261540,
                                                "text": 456,
                                                "rawText": "456",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 57,
                                                "end": 61
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 52,
                                            "end": 61
                                        },
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 64,
                                            "end": 71
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 61,
                                        "end": 71
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1,
                                    "start": 48,
                                    "end": 71
                                }
                            ],
                            "tail": {
                                "kind": 4260568,
                                "rawText": "",
                                "text": "",
                                "literal": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 71,
                                "end": 73
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 48,
                            "end": 73
                        },
                        "flags": 44,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 73
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 44,
                "end": 73
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 39,
            "end": 74
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "b",
                            "rawText": "b",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 78,
                            "end": 80
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 66261,
                            "spans": [
                                {
                                    "kind": 66263,
                                    "rawText": "leading ",
                                    "text": "leading ",
                                    "expression": {
                                        "kind": 73738,
                                        "expression": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 4261540,
                                                "text": 123,
                                                "rawText": "123",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 94,
                                                "end": 97
                                            },
                                            "operator": "+",
                                            "right": {
                                                "kind": 4261540,
                                                "text": 456,
                                                "rawText": "456",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 99,
                                                "end": 103
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 94,
                                            "end": 103
                                        },
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 106,
                                            "end": 113
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 103,
                                        "end": 113
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1,
                                    "start": 82,
                                    "end": 113
                                }
                            ],
                            "tail": {
                                "kind": 4260568,
                                "rawText": "",
                                "text": "",
                                "literal": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 113,
                                "end": 115
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 82,
                            "end": 115
                        },
                        "flags": 78,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 115
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 78,
                "end": 115
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 74,
            "end": 116
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "c",
                            "rawText": "c",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 120,
                            "end": 122
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 66261,
                            "spans": [
                                {
                                    "kind": 66263,
                                    "rawText": "",
                                    "text": "",
                                    "expression": {
                                        "kind": 73738,
                                        "expression": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 4261540,
                                                "text": 123,
                                                "rawText": "123",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 128,
                                                "end": 131
                                            },
                                            "operator": "+",
                                            "right": {
                                                "kind": 4261540,
                                                "text": 456,
                                                "rawText": "456",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 133,
                                                "end": 137
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 128,
                                            "end": 137
                                        },
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 140,
                                            "end": 147
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 137,
                                        "end": 147
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1,
                                    "start": 124,
                                    "end": 147
                                }
                            ],
                            "tail": {
                                "kind": 4260568,
                                "rawText": " trailing",
                                "text": " trailing",
                                "literal": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 147,
                                "end": 158
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 124,
                            "end": 158
                        },
                        "flags": 120,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 158
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 120,
                "end": 158
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 116,
            "end": 159
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "d",
                            "rawText": "d",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 163,
                            "end": 165
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 73738,
                            "expression": {
                                "kind": 66261,
                                "spans": [
                                    {
                                        "kind": 66263,
                                        "rawText": "Hello ",
                                        "text": "Hello ",
                                        "expression": {
                                            "kind": 4261540,
                                            "text": 123,
                                            "rawText": "123",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 177,
                                            "end": 180
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 167,
                                        "end": 180
                                    }
                                ],
                                "tail": {
                                    "kind": 4260568,
                                    "rawText": " World",
                                    "text": " World",
                                    "literal": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1,
                                    "start": 180,
                                    "end": 188
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 167,
                                "end": 188
                            },
                            "type": {
                                "kind": 4202702,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 191,
                                "end": 198
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 188,
                            "end": 198
                        },
                        "flags": 163,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 198
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 163,
                "end": 198
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 159,
            "end": 199
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "e",
                            "rawText": "e",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 203,
                            "end": 205
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 73738,
                            "expression": {
                                "kind": 4260568,
                                "rawText": "Hello",
                                "text": "Hello",
                                "literal": true,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 207,
                                "end": 215
                            },
                            "type": {
                                "kind": 4202702,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 218,
                                "end": 225
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 215,
                            "end": 225
                        },
                        "flags": 203,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 225
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 203,
                "end": 225
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 199,
            "end": 226
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "f",
                            "rawText": "f",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 230,
                            "end": 232
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 73738,
                            "expression": {
                                "kind": 65563,
                                "left": {
                                    "kind": 4261540,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 234,
                                    "end": 236
                                },
                                "operator": "+",
                                "right": {
                                    "kind": 66261,
                                    "spans": [
                                        {
                                            "kind": 66263,
                                            "rawText": "",
                                            "text": "",
                                            "expression": {
                                                "kind": 4261540,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 242,
                                                "end": 243
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1,
                                            "start": 238,
                                            "end": 243
                                        }
                                    ],
                                    "tail": {
                                        "kind": 4260568,
                                        "rawText": " end of string",
                                        "text": " end of string",
                                        "literal": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 243,
                                        "end": 259
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1,
                                    "start": 238,
                                    "end": 259
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 234,
                                "end": 259
                            },
                            "type": {
                                "kind": 4202702,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 262,
                                "end": 269
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 259,
                            "end": 269
                        },
                        "flags": 230,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 269
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 230,
                "end": 269
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 226,
            "end": 270
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "g",
                            "rawText": "g",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 274,
                            "end": 276
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 73738,
                            "expression": {
                                "kind": 66260,
                                "member": {
                                    "kind": 196712,
                                    "text": "tag",
                                    "rawText": "tag",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 278,
                                    "end": 282
                                },
                                "typeArguments": null,
                                "template": {
                                    "kind": 66261,
                                    "spans": [
                                        {
                                            "kind": 66263,
                                            "rawText": "Hello ",
                                            "text": "Hello ",
                                            "expression": {
                                                "kind": 4261540,
                                                "text": 123,
                                                "rawText": "123",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 292,
                                                "end": 295
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1,
                                            "start": 282,
                                            "end": 295
                                        }
                                    ],
                                    "tail": {
                                        "kind": 4260568,
                                        "rawText": " World",
                                        "text": " World",
                                        "literal": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 295,
                                        "end": 303
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1,
                                    "start": 282,
                                    "end": 303
                                },
                                "optional": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 282,
                                "end": 303
                            },
                            "type": {
                                "kind": 4202702,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 306,
                                "end": 313
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 303,
                            "end": 313
                        },
                        "flags": 274,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 313
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 274,
                "end": 313
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 270,
            "end": 314
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "h",
                            "rawText": "h",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 318,
                            "end": 320
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 73738,
                            "expression": {
                                "kind": 66260,
                                "member": {
                                    "kind": 196712,
                                    "text": "tag",
                                    "rawText": "tag",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 322,
                                    "end": 326
                                },
                                "typeArguments": null,
                                "template": {
                                    "kind": 4260568,
                                    "rawText": "Hello",
                                    "text": "Hello",
                                    "literal": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1,
                                    "start": 326,
                                    "end": 334
                                },
                                "optional": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 326,
                                "end": 334
                            },
                            "type": {
                                "kind": 4202702,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 337,
                                "end": 344
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 334,
                            "end": 344
                        },
                        "flags": 318,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 344
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 318,
                "end": 344
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 314,
            "end": 345
        }
    ],
    "isModule": true,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 346
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

