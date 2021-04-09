# Kataw parser test case

## Input

`````js
do x, y; while (z)
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 169,
            "expression": {
                "kind": 81921,
                "value": "z",
                "autofix": 0,
                "flags": 768,
                "start": 16,
                "end": 17
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 2,
                            "end": 4
                        },
                        {
                            "kind": 81921,
                            "value": "y",
                            "autofix": 0,
                            "flags": 768,
                            "start": 5,
                            "end": 7
                        }
                    ],
                    "autofix": 0,
                    "flags": 256,
                    "start": 2,
                    "end": 7
                },
                "autofix": 0,
                "flags": 128,
                "start": 2,
                "end": 8
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "text": "do x, y; while (z)",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

