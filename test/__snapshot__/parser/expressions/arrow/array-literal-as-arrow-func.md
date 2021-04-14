# Kataw parser test case

## Input

`````js
[{x = y}] => z
`````

## Output

### Hybrid CST

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
                                        "kind": 205,
                                        "left": {
                                            "kind": 81921,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 2,
                                            "end": 3
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 768,
                                            "start": 5,
                                            "end": 7
                                        },
                                        "flags": 256,
                                        "start": 2,
                                        "end": 7
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 2,
                                "end": 7
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 8
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 1,
                    "end": 8
                },
                "flags": 256,
                "start": 0,
                "end": 9
            },
            "flags": 128,
            "start": 0,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": "z",
                "rawText": "z",
                "flags": 768,
                "start": 12,
                "end": 14
            },
            "flags": 128,
            "start": 12,
            "end": 14
        }
    ],
    "isModule": false,
    "text": "[{x = y}] => z",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 9,
            "end": 12
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 9,
            "end": 12
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 9,
            "end": 12
        }
    ],
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

