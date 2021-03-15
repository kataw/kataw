# Kataw parser test case

## Input

`````js
var x: any;
var a = new x();
var b = new x('hello');
var c = new x(x);

// grammar allows this for constructors
var d = new x<any>(x); // no error

//// [anyAsConstructor.js]
// any is considered an untyped function call
// can be called except with type arguments which is an error
var x;
var a = new x();
var b = new x('hello');
var c = new x(x);
// grammar allows this for constructors
var d = new x(x); // no error
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "var x: any;\nvar a = new x();\nvar b = new x('hello');\nvar c = new x(x);\n\n// grammar allows this for constructors\nvar d = new x<any>(x); // no error\n\n//// [anyAsConstructor.js]\n// any is considered an untyped function call\n// can be called except with type arguments which is an error\nvar x;\nvar a = new x();\nvar b = new x('hello');\nvar c = new x(x);\n// grammar allows this for constructors\nvar d = new x(x); // no error",
    "filename": "",
    "statements": [
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 5
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 4202498,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 6,
                            "end": 10
                        },
                        "initializer": null,
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 10
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 10
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 11
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
                            "start": 15,
                            "end": 17
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 66204,
                            "expression": {
                                "kind": 196712,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 25
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 26,
                                "end": 26
                            },
                            "flags": 19,
                            "symbol": null,
                            "transformFlags": 32,
                            "start": 0,
                            "end": 27
                        },
                        "flags": 15,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 27
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 15,
                "end": 27
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 11,
            "end": 28
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
                            "start": 32,
                            "end": 34
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 66204,
                            "expression": {
                                "kind": 196712,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 40,
                                "end": 42
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [
                                    {
                                        "kind": 4261583,
                                        "text": "hello",
                                        "rawText": "hello",
                                        "flags": 33554432,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 43,
                                        "end": 50
                                    }
                                ],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 43,
                                "end": 50
                            },
                            "flags": 36,
                            "symbol": null,
                            "transformFlags": 32,
                            "start": 0,
                            "end": 51
                        },
                        "flags": 32,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 51
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 32,
                "end": 51
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 28,
            "end": 52
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
                            "start": 56,
                            "end": 58
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 66204,
                            "expression": {
                                "kind": 196712,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 64,
                                "end": 66
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [
                                    {
                                        "kind": 196712,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 67,
                                        "end": 68
                                    }
                                ],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 67,
                                "end": 68
                            },
                            "flags": 60,
                            "symbol": null,
                            "transformFlags": 32,
                            "start": 0,
                            "end": 69
                        },
                        "flags": 56,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 69
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 56,
                "end": 69
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 52,
            "end": 70
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
                            "start": 115,
                            "end": 117
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 66204,
                            "expression": {
                                "kind": 1073807915,
                                "expression": {
                                    "kind": 196712,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 123,
                                    "end": 125
                                },
                                "typeArguments": {
                                    "kind": 8419,
                                    "typeArgumentsList": [
                                        {
                                            "kind": 4202498,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 126,
                                            "end": 129
                                        }
                                    ],
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 126,
                                    "end": 130
                                },
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [
                                        {
                                            "kind": 196712,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 131,
                                            "end": 132
                                        }
                                    ],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "symbol": null,
                                    "start": 131,
                                    "end": 132
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 125,
                                "end": 133
                            },
                            "typeArguments": null,
                            "argumentList": null,
                            "flags": 119,
                            "symbol": null,
                            "transformFlags": 32,
                            "start": 0,
                            "end": 133
                        },
                        "flags": 115,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 133
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 115,
                "end": 133
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 70,
            "end": 134
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 286,
                            "end": 288
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "flags": 286,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 288
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 286,
                "end": 288
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 134,
            "end": 289
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
                            "start": 293,
                            "end": 295
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 66204,
                            "expression": {
                                "kind": 196712,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 301,
                                "end": 303
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 304,
                                "end": 304
                            },
                            "flags": 297,
                            "symbol": null,
                            "transformFlags": 32,
                            "start": 0,
                            "end": 305
                        },
                        "flags": 293,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 305
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 293,
                "end": 305
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 289,
            "end": 306
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
                            "start": 310,
                            "end": 312
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 66204,
                            "expression": {
                                "kind": 196712,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 318,
                                "end": 320
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [
                                    {
                                        "kind": 4261583,
                                        "text": "hello",
                                        "rawText": "hello",
                                        "flags": 33554432,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 321,
                                        "end": 328
                                    }
                                ],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 321,
                                "end": 328
                            },
                            "flags": 314,
                            "symbol": null,
                            "transformFlags": 32,
                            "start": 0,
                            "end": 329
                        },
                        "flags": 310,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 329
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 310,
                "end": 329
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 306,
            "end": 330
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
                            "start": 334,
                            "end": 336
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 66204,
                            "expression": {
                                "kind": 196712,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 342,
                                "end": 344
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [
                                    {
                                        "kind": 196712,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 345,
                                        "end": 346
                                    }
                                ],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 345,
                                "end": 346
                            },
                            "flags": 338,
                            "symbol": null,
                            "transformFlags": 32,
                            "start": 0,
                            "end": 347
                        },
                        "flags": 334,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 347
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 334,
                "end": 347
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 330,
            "end": 348
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
                            "start": 392,
                            "end": 394
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 66204,
                            "expression": {
                                "kind": 196712,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 400,
                                "end": 402
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [
                                    {
                                        "kind": 196712,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 403,
                                        "end": 404
                                    }
                                ],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 403,
                                "end": 404
                            },
                            "flags": 396,
                            "symbol": null,
                            "transformFlags": 32,
                            "start": 0,
                            "end": 405
                        },
                        "flags": 392,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 405
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 392,
                "end": 405
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 348,
            "end": 406
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 418
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

