# Kataw parser test case

## Input

`````js
(({}) = {}) => {}
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
                        "kind": 121,
                        "expression": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 3,
                                "end": 3
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 2,
                            "end": 4
                        },
                        "flags": 34,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 5
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 7
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 9
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 7,
                        "end": 10
                    },
                    "flags": 0,
                    "transformFlags": 128,
                    "start": 1,
                    "end": 10
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 11
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 11
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 16,
                "end": 16
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 14,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "(({}) = {}) => {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 5, end: 7
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 0, end: 14

```

