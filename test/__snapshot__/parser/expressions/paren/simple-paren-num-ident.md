# Kataw parser test case

## Input

`````js
(0, a);

(0, (0, a));
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
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 81921,
                            "value": 0,
                            "autofix": 0,
                            "flags": 768,
                            "start": 1,
                            "end": 2
                        },
                        {
                            "kind": 81921,
                            "value": "a",
                            "autofix": 0,
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        }
                    ],
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 5
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 6
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 81921,
                            "value": 0,
                            "autofix": 0,
                            "flags": 768,
                            "start": 10,
                            "end": 11
                        },
                        {
                            "kind": 121,
                            "expression": {
                                "kind": 132,
                                "expressions": [
                                    {
                                        "kind": 81921,
                                        "value": 0,
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 14,
                                        "end": 15
                                    },
                                    {
                                        "kind": 81921,
                                        "value": "a",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 16,
                                        "end": 18
                                    }
                                ],
                                "autofix": 0,
                                "flags": 256,
                                "start": 12,
                                "end": 18
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 12,
                            "end": 19
                        }
                    ],
                    "autofix": 0,
                    "flags": 256,
                    "start": 7,
                    "end": 19
                },
                "autofix": 0,
                "flags": 256,
                "start": 7,
                "end": 20
            },
            "autofix": 0,
            "flags": 128,
            "start": 7,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "(0, a);\n\n(0, (0, a));",
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

