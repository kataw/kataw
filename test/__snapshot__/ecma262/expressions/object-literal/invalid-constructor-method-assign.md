# Kataw parser test case

## Input

`````js
({3200: fail() = x} = x)
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
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
                                        "kind": 201392130,
                                        "text": 3200,
                                        "rawText": "3200",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2,
                                        "end": 6
                                    },
                                    "right": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "fail",
                                                "rawText": "fail",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 7,
                                                "end": 12
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 13,
                                                "end": 13
                                            },
                                            "flags": 32,
                                            "transformFlags": 1,
                                            "start": 2,
                                            "end": 14
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 14,
                                            "end": 16
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 16,
                                            "end": 18
                                        },
                                        "flags": 0,
                                        "transformFlags": 128,
                                        "start": 2,
                                        "end": 18
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 2,
                                    "end": 18
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 18
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 1,
                        "end": 19
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 19,
                        "end": 21
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 21,
                        "end": 23
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 1,
                    "end": 23
                },
                "flags": 34,
                "transformFlags": 0,
                "start": 0,
                "end": 24
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "({3200: fail() = x} = x)",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 14, end: 16
✖ The left-hand side must be a variable or a property access. - start: 1, end: 21

```

