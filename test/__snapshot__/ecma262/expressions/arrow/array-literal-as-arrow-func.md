# Kataw parser test case

## Input

`````js
[{x = y}] => z
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
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 301,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 2,
                                            "end": 3
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 5,
                                            "end": 7
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 2,
                                        "end": 7
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 7
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 1,
                            "end": 8
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 8
                },
                "flags": 32,
                "transformFlags": 8,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "z",
                "rawText": "z",
                "flags": 96,
                "transformFlags": 0,
                "start": 12,
                "end": 14
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 12,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "[{x = y}] => z",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 9, end: 12
✖ '=>' expected - start: 9, end: 12

```

