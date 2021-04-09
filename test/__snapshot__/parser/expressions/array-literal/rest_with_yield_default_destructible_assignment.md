# Kataw parser test case

## Input

`````js
result = [...{ x = yield }] = y;
`````

## Options

### Parser Options

`````js
{}
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
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "result",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 336003091,
                    "autofix": 0,
                    "flags": 0,
                    "start": 0,
                    "end": 8
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 223,
                                    "argument": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 205,
                                                    "left": {
                                                        "kind": 81921,
                                                        "value": "x",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 14,
                                                        "end": 16
                                                    },
                                                    "right": {
                                                        "kind": 81921,
                                                        "value": "yield",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 18,
                                                        "end": 24
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 14,
                                                    "end": 24
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 14,
                                            "end": 24
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 13,
                                        "end": 26
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 10,
                                    "end": 26
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 10,
                            "end": 26
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 8,
                        "end": 27
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 27,
                        "end": 29
                    },
                    "right": {
                        "kind": 81921,
                        "value": "y",
                        "autofix": 0,
                        "flags": 768,
                        "start": 29,
                        "end": 31
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 8,
                    "end": 31
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 31
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "text": "result = [...{ x = yield }] = y;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

