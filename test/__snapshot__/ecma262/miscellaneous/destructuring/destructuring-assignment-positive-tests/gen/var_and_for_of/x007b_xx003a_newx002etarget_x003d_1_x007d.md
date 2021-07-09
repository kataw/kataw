# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/destructuring/destructuring-assignment-positive-tests/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/destructuring/destructuring-assignment-positive-tests/gen/var_and_for_of
> :: test: var and for of
> :: case: { x: new.target = 1 }
## Options

`````js
{}
`````
## Input

`````js
var x, y, z; for (x of x = { x: new.target = 1 } = z = {});
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
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 12,
                "end": 16
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 18,
                "end": 19
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "transformFlags": 0,
                "start": 19,
                "end": 22
            },
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 24
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 26
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
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 28,
                                        "end": 30
                                    },
                                    "right": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 211,
                                            "newKeyword": {
                                                "kind": 138477661,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 31,
                                                "end": 35
                                            },
                                            "targetIdentifier": {
                                                "kind": 16594,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 36,
                                                "end": 42
                                            },
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 31,
                                            "end": 42
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 42,
                                            "end": 44
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 44,
                                            "end": 46
                                        },
                                        "flags": 0,
                                        "transformFlags": 128,
                                        "start": 28,
                                        "end": 46
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 28,
                                    "end": 46
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 28,
                            "end": 46
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 26,
                        "end": 48
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 48,
                        "end": 50
                    },
                    "right": {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 50,
                            "end": 52
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 52,
                            "end": 54
                        },
                        "right": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 56,
                                "end": 56
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 54,
                            "end": 57
                        },
                        "flags": 0,
                        "transformFlags": 128,
                        "start": 50,
                        "end": 57
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 26,
                    "end": 57
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 22,
                "end": 57
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "transformFlags": 0,
                "start": 58,
                "end": 59
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 12,
            "end": 59
        }
    ],
    "isModule": false,
    "source": "var x, y, z; for (x of x = { x: new.target = 1 } = z = {});",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 59
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'new.target' only allowed within functions - start: 31, end: 44
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 42, end: 44
✖ The left-hand side must be a variable or a property access. - start: 26, end: 50

```

