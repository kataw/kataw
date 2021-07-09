# Kataw parser test case

## Input

`````js
{ (x = yield) = {}; }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 125,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 3,
                                        "end": 4
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 4,
                                        "end": 6
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 6,
                                        "end": 12
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 1,
                                    "end": 12
                                },
                                "flags": 1,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 13
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 15
                            },
                            "right": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 17,
                                    "end": 17
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 15,
                                "end": 18
                            },
                            "flags": 0,
                            "transformFlags": 128,
                            "start": 1,
                            "end": 18
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 1,
                        "end": 19
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 19
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "{ (x = yield) = {}; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 13, end: 15

```

