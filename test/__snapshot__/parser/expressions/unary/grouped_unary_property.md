# Kataw parser test case

## Input

`````js
(!t).y
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
                "kind": 129,
                "member": {
                    "kind": 121,
                    "expression": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 65584,
                            "autofix": 0,
                            "flags": 0,
                            "start": 1,
                            "end": 2
                        },
                        "expression": {
                            "kind": 81921,
                            "value": "t",
                            "autofix": 0,
                            "flags": 768,
                            "start": 2,
                            "end": 3
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 3
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 4
                },
                "expression": {
                    "kind": 81921,
                    "value": "y",
                    "autofix": 0,
                    "flags": 768,
                    "start": 5,
                    "end": 6
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 6
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 6
        }
    ],
    "isModule": false,
    "text": "(!t).y",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 6
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

