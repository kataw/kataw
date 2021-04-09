# Kataw parser test case

## Input

`````js
z(z(z(a&&=)));
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
                    "value": "z",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 131,
                            "expression": {
                                "kind": 81921,
                                "value": "z",
                                "autofix": 0,
                                "flags": 768,
                                "start": 2,
                                "end": 3
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 81921,
                                            "value": "z",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 4,
                                            "end": 5
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [
                                                {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 81921,
                                                        "value": "a",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 6,
                                                        "end": 7
                                                    },
                                                    "operatorToken": {
                                                        "kind": 16,
                                                        "autofix": 0,
                                                        "flags": 0,
                                                        "start": 6,
                                                        "end": 10
                                                    },
                                                    "right": {
                                                        "kind": 253,
                                                        "text": "",
                                                        "autofix": 0,
                                                        "flags": 12,
                                                        "start": 10,
                                                        "end": 10
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 6,
                                                    "end": 10
                                                }
                                            ],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 6,
                                            "end": 10
                                        },
                                        "flags": 256,
                                        "start": 4,
                                        "end": 11
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 4,
                                "end": 11
                            },
                            "flags": 256,
                            "start": 2,
                            "end": 12
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 2,
                    "end": 12
                },
                "flags": 256,
                "start": 0,
                "end": 13
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "text": "z(z(z(a&&=)));",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 10,
            "end": 11
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

