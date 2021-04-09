# Kataw parser test case

## Input

`````js
a?b:c=d
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
                "kind": 197,
                "shortCircuit": {
                    "kind": 81921,
                    "value": "a",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "questionToken": {
                    "kind": 22,
                    "autofix": 0,
                    "flags": 0,
                    "start": 1,
                    "end": 2
                },
                "consequent": {
                    "kind": 81921,
                    "value": "b",
                    "autofix": 0,
                    "flags": 768,
                    "start": 2,
                    "end": 3
                },
                "colonToken": {
                    "kind": 21,
                    "autofix": 0,
                    "flags": 0,
                    "start": 3,
                    "end": 4
                },
                "alternate": {
                    "kind": 125,
                    "left": {
                        "kind": 81921,
                        "value": "c",
                        "autofix": 0,
                        "flags": 768,
                        "start": 4,
                        "end": 5
                    },
                    "operatorToken": {
                        "kind": 81921,
                        "autofix": 0,
                        "flags": 0,
                        "start": 4,
                        "end": 6
                    },
                    "right": {
                        "kind": 81921,
                        "value": "d",
                        "autofix": 0,
                        "flags": 768,
                        "start": 6,
                        "end": 7
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 4,
                    "end": 7
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 7
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 7
        }
    ],
    "isModule": false,
    "text": "a?b:c=d",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 7
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

