# Kataw parser test case

## Input

`````js
[...[x].map(y, z)];
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
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 223,
                            "argument": {
                                "kind": 131,
                                "expression": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 81921,
                                                    "value": "x",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 5,
                                                    "end": 6
                                                }
                                            ],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 5,
                                            "end": 6
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 4,
                                        "end": 7
                                    },
                                    "expression": {
                                        "kind": 81921,
                                        "value": "map",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 8,
                                        "end": 11
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 4,
                                    "end": 11
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 81921,
                                            "value": "y",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 12,
                                            "end": 13
                                        },
                                        {
                                            "kind": 81921,
                                            "value": "z",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 14,
                                            "end": 16
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 12,
                                    "end": 16
                                },
                                "flags": 256,
                                "start": 4,
                                "end": 17
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 1,
                            "end": 17
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 17
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 18
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "[...[x].map(y, z)];",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

