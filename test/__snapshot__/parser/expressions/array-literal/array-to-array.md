# Kataw parser test case

## Input

`````js
[a, b] = [b, a];
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
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 81921,
                                "value": "a",
                                "autofix": 0,
                                "flags": 768,
                                "start": 1,
                                "end": 2
                            },
                            {
                                "kind": 81921,
                                "value": "b",
                                "autofix": 0,
                                "flags": 768,
                                "start": 3,
                                "end": 5
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 5
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 4125,
                    "autofix": 0,
                    "flags": 0,
                    "start": 6,
                    "end": 8
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 81921,
                                "value": "b",
                                "autofix": 0,
                                "flags": 768,
                                "start": 10,
                                "end": 11
                            },
                            {
                                "kind": 81921,
                                "value": "a",
                                "autofix": 0,
                                "flags": 768,
                                "start": 12,
                                "end": 14
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 10,
                        "end": 14
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 8,
                    "end": 15
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 15
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "[a, b] = [b, a];",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

