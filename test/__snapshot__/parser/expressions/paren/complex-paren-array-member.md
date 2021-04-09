# Kataw parser test case

## Input

`````js
([...[([...[].x] = x)].x] = x);
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
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 223,
                                    "argument": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 121,
                                                        "expression": {
                                                            "kind": 125,
                                                            "left": {
                                                                "kind": 119,
                                                                "elementList": {
                                                                    "kind": 270,
                                                                    "elements": [
                                                                        {
                                                                            "kind": 223,
                                                                            "argument": {
                                                                                "kind": 129,
                                                                                "member": {
                                                                                    "kind": 119,
                                                                                    "elementList": {
                                                                                        "kind": 270,
                                                                                        "elements": [],
                                                                                        "trailingComma": false,
                                                                                        "autofix": 0,
                                                                                        "flags": 256,
                                                                                        "start": 12,
                                                                                        "end": 12
                                                                                    },
                                                                                    "autofix": 0,
                                                                                    "flags": 256,
                                                                                    "start": 11,
                                                                                    "end": 13
                                                                                },
                                                                                "expression": {
                                                                                    "kind": 81921,
                                                                                    "value": "x",
                                                                                    "autofix": 0,
                                                                                    "flags": 768,
                                                                                    "start": 14,
                                                                                    "end": 15
                                                                                },
                                                                                "autofix": 0,
                                                                                "flags": 256,
                                                                                "start": 11,
                                                                                "end": 15
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 256,
                                                                            "start": 8,
                                                                            "end": 15
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 8,
                                                                    "end": 15
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 7,
                                                                "end": 16
                                                            },
                                                            "operatorToken": {
                                                                "kind": 4125,
                                                                "autofix": 0,
                                                                "flags": 0,
                                                                "start": 16,
                                                                "end": 18
                                                            },
                                                            "right": {
                                                                "kind": 81921,
                                                                "value": "x",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 18,
                                                                "end": 20
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 7,
                                                            "end": 20
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 6,
                                                        "end": 21
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 6,
                                                "end": 21
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 5,
                                            "end": 22
                                        },
                                        "expression": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 23,
                                            "end": 24
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 5,
                                        "end": 24
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 2,
                                    "end": 24
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 2,
                            "end": 24
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 25
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 25,
                        "end": 27
                    },
                    "right": {
                        "kind": 81921,
                        "value": "x",
                        "autofix": 0,
                        "flags": 768,
                        "start": 27,
                        "end": 29
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 29
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 30
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "([...[([...[].x] = x)].x] = x);",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

