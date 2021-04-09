# Kataw parser test case

## Input

`````js
z(z(z(a ? b : c++)));
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
                                                    "kind": 197,
                                                    "shortCircuit": {
                                                        "kind": 81921,
                                                        "value": "a",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 6,
                                                        "end": 7
                                                    },
                                                    "questionToken": {
                                                        "kind": 22,
                                                        "autofix": 0,
                                                        "flags": 0,
                                                        "start": 7,
                                                        "end": 9
                                                    },
                                                    "consequent": {
                                                        "kind": 81921,
                                                        "value": "b",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 9,
                                                        "end": 11
                                                    },
                                                    "colonToken": {
                                                        "kind": 21,
                                                        "autofix": 0,
                                                        "flags": 0,
                                                        "start": 11,
                                                        "end": 13
                                                    },
                                                    "alternate": {
                                                        "kind": 127,
                                                        "operandToken": {
                                                            "kind": 196635,
                                                            "autofix": 0,
                                                            "flags": 0,
                                                            "start": 15,
                                                            "end": 17
                                                        },
                                                        "expression": {
                                                            "kind": 81921,
                                                            "value": "c",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 13,
                                                            "end": 15
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 13,
                                                        "end": 17
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 6,
                                                    "end": 17
                                                }
                                            ],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 6,
                                            "end": 17
                                        },
                                        "flags": 256,
                                        "start": 4,
                                        "end": 18
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 4,
                                "end": 18
                            },
                            "flags": 256,
                            "start": 2,
                            "end": 19
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 2,
                    "end": 19
                },
                "flags": 256,
                "start": 0,
                "end": 20
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "z(z(z(a ? b : c++)));",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

