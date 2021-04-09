# Kataw parser test case

## Input

`````js
a * x ? b : c ? d : e
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
                    "kind": 198,
                    "left": {
                        "kind": 81921,
                        "value": "a",
                        "autofix": 0,
                        "flags": 768,
                        "start": 0,
                        "end": 1
                    },
                    "operatorToken": {
                        "kind": 67143222,
                        "autofix": 0,
                        "flags": 0,
                        "start": 1,
                        "end": 3
                    },
                    "right": {
                        "kind": 81921,
                        "value": "x",
                        "autofix": 0,
                        "flags": 768,
                        "start": 3,
                        "end": 5
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 5
                },
                "questionToken": {
                    "kind": 22,
                    "autofix": 0,
                    "flags": 0,
                    "start": 5,
                    "end": 7
                },
                "consequent": {
                    "kind": 81921,
                    "value": "b",
                    "autofix": 0,
                    "flags": 768,
                    "start": 7,
                    "end": 9
                },
                "colonToken": {
                    "kind": 21,
                    "autofix": 0,
                    "flags": 0,
                    "start": 9,
                    "end": 11
                },
                "alternate": {
                    "kind": 197,
                    "shortCircuit": {
                        "kind": 81921,
                        "value": "c",
                        "autofix": 0,
                        "flags": 768,
                        "start": 11,
                        "end": 13
                    },
                    "questionToken": {
                        "kind": 22,
                        "autofix": 0,
                        "flags": 0,
                        "start": 13,
                        "end": 15
                    },
                    "consequent": {
                        "kind": 81921,
                        "value": "d",
                        "autofix": 0,
                        "flags": 768,
                        "start": 15,
                        "end": 17
                    },
                    "colonToken": {
                        "kind": 21,
                        "autofix": 0,
                        "flags": 0,
                        "start": 17,
                        "end": 19
                    },
                    "alternate": {
                        "kind": 81921,
                        "value": "e",
                        "autofix": 0,
                        "flags": 768,
                        "start": 19,
                        "end": 21
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 11,
                    "end": 21
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 21
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "a * x ? b : c ? d : e",
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

