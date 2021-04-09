# Kataw parser test case

## Input

`````js
wrap({1:b, 0:d});
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 81921,
                    "value": "wrap",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 4
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 81921,
                                            "value": "b",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 8,
                                            "end": 9
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": 1,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 6,
                                            "end": 7
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 6,
                                        "end": 9
                                    },
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 81921,
                                            "value": "d",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 13,
                                            "end": 14
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": 0,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 10,
                                            "end": 12
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 10,
                                        "end": 14
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 6,
                                "end": 14
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 5,
                            "end": 15
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 5,
                    "end": 15
                },
                "flags": 256,
                "start": 0,
                "end": 16
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "text": "wrap({1:b, 0:d});",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

