# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/destructuring-assignment-positive-tests/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/destructuring-assignment-positive-tests/gen/variable_in_for_in
> :: test: variable in for in
> :: case: { x: new.target = 1 }
## Options

`````js
{}
`````
## Input

`````js
var x, y, z; for (x in { x: new.target = 1 } = {});
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
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 12,
                "end": 16
            },
            "initializer": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 18,
                "end": 19
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "transformFlags": 8192,
                "start": 19,
                "end": 22
            },
            "expression": {
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
                                    "start": 24,
                                    "end": 26
                                },
                                "right": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 211,
                                        "newKeyword": {
                                            "kind": 138477661,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 27,
                                            "end": 31
                                        },
                                        "targetIdentifier": {
                                            "kind": 16594,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 38
                                        },
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 27,
                                        "end": 38
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 38,
                                        "end": 40
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 40,
                                        "end": 42
                                    },
                                    "flags": 0,
                                    "transformFlags": 128,
                                    "start": 24,
                                    "end": 42
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 24,
                                "end": 42
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 24,
                        "end": 42
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 22,
                    "end": 44
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 44,
                    "end": 46
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 48,
                        "end": 48
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 46,
                    "end": 49
                },
                "flags": 32,
                "transformFlags": 128,
                "start": 22,
                "end": 49
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "transformFlags": 0,
                "start": 50,
                "end": 51
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 12,
            "end": 51
        }
    ],
    "isModule": false,
    "source": "var x, y, z; for (x in { x: new.target = 1 } = {});",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 51
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'new.target' only allowed within functions - start: 27, end: 40
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 38, end: 40
✖ The left-hand side must be a variable or a property access. - start: 22, end: 46

```

