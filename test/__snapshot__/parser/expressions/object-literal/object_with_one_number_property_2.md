# Kataw parser test case

## Input

`````js
wrap({.9:a, 0x84:b, 0b1:c, 0o27:d, 1e234:e});
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
                                            "value": "a",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 9,
                                            "end": 10
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": 0.9,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 6,
                                            "end": 8
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 6,
                                        "end": 10
                                    },
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 81921,
                                            "value": "b",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 17,
                                            "end": 18
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": 132,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 11,
                                            "end": 16
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 11,
                                        "end": 18
                                    },
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 81921,
                                            "value": "c",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 24,
                                            "end": 25
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": 1,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 19,
                                            "end": 23
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 19,
                                        "end": 25
                                    },
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 81921,
                                            "value": "d",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 32,
                                            "end": 33
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": 23,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 26,
                                            "end": 31
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 26,
                                        "end": 33
                                    },
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 81921,
                                            "value": "e",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 41,
                                            "end": 42
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": 1e+234,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 34,
                                            "end": 40
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 34,
                                        "end": 42
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 6,
                                "end": 42
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 5,
                            "end": 43
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 5,
                    "end": 43
                },
                "flags": 256,
                "start": 0,
                "end": 44
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "text": "wrap({.9:a, 0x84:b, 0b1:c, 0o27:d, 1e234:e});",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 45
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

