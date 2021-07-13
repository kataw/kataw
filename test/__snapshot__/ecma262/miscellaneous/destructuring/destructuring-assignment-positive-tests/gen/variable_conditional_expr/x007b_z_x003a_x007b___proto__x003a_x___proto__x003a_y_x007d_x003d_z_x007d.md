# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/destructuring-assignment-positive-tests/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/destructuring-assignment-positive-tests/gen/variable_conditional_expr
> :: test: variable conditional expr
> :: case: { z : { __proto__: x, __proto__: y } = z }
## Options

`````js
{}
`````
## Input

`````js
var x, y, z; m(['b']) ? lhs : { z : { __proto__: x, __proto__: y } = z } = {}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 5
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 8
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 6,
                        "end": 8
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 11
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 9,
                        "end": 11
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 11
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "m",
                        "rawText": "m",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 14
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 201392131,
                                            "text": "b",
                                            "rawText": "'b'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 16,
                                            "end": 19
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 4194336,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 19
                                },
                                "flags": 32,
                                "transformFlags": 8,
                                "start": 15,
                                "end": 20
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 20
                    },
                    "flags": 268435488,
                    "transformFlags": 1,
                    "start": 12,
                    "end": 21
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 23
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "lhs",
                    "rawText": "lhs",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 27
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 27,
                    "end": 29
                },
                "alternate": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 31,
                                        "end": 33
                                    },
                                    "right": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "__proto__",
                                                            "rawText": "__proto__",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 37,
                                                            "end": 47
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 48,
                                                            "end": 50
                                                        },
                                                        "flags": 36,
                                                        "transformFlags": 128,
                                                        "start": 37,
                                                        "end": 50
                                                    },
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "__proto__",
                                                            "rawText": "__proto__",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 51,
                                                            "end": 61
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 62,
                                                            "end": 64
                                                        },
                                                        "flags": 36,
                                                        "transformFlags": 128,
                                                        "start": 51,
                                                        "end": 64
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 20,
                                                "transformFlags": 0,
                                                "start": 37,
                                                "end": 64
                                            },
                                            "flags": 52,
                                            "transformFlags": 8,
                                            "start": 35,
                                            "end": 66
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 66,
                                            "end": 68
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 68,
                                            "end": 70
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 35,
                                        "end": 70
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 31,
                                    "end": 70
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 31,
                            "end": 70
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 29,
                        "end": 72
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 72,
                        "end": 74
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 76,
                            "end": 76
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 74,
                        "end": 77
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 29,
                    "end": 77
                },
                "flags": 268435488,
                "transformFlags": 4096,
                "start": 12,
                "end": 77
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 12,
            "end": 77
        }
    ],
    "isModule": false,
    "source": "var x, y, z; m(['b']) ? lhs : { z : { __proto__: x, __proto__: y } = z } = {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 77
}
```

### Printed

```javascript
var x, y, z;
m(["'b'"]) ? lhs : { z: { __proto__: x, __proto__: y } = z } = {};

```

### Diagnostics

```javascript
✔ No errors
```

