# Kataw parser test case

## Input

`````js
do wow: while (x) continue wow; while (x)
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
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 39,
                "end": 40
            },
            "statement": {
                "kind": 163,
                "label": {
                    "kind": 81921,
                    "value": "wow",
                    "autofix": 0,
                    "flags": 768,
                    "start": 2,
                    "end": 6
                },
                "statement": {
                    "kind": 154,
                    "expression": {
                        "kind": 81921,
                        "value": "x",
                        "autofix": 0,
                        "flags": 768,
                        "start": 15,
                        "end": 16
                    },
                    "statement": {
                        "kind": 172,
                        "label": {
                            "kind": 81921,
                            "value": "wow",
                            "autofix": 0,
                            "flags": 768,
                            "start": 26,
                            "end": 30
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 17,
                        "end": 31
                    },
                    "autofix": 0,
                    "flags": 128,
                    "start": 7,
                    "end": 31
                },
                "autofix": 0,
                "flags": 128,
                "start": 2,
                "end": 31
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "text": "do wow: while (x) continue wow; while (x)",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 41
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

