# Kataw parser test case

## Input

`````js
a === b ? c : d % e;
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
                        "kind": 34620,
                        "autofix": 0,
                        "flags": 0,
                        "start": 1,
                        "end": 5
                    },
                    "right": {
                        "kind": 81921,
                        "value": "b",
                        "autofix": 0,
                        "flags": 768,
                        "start": 5,
                        "end": 7
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
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
                    "value": "c",
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
                    "kind": 198,
                    "left": {
                        "kind": 81921,
                        "value": "d",
                        "autofix": 0,
                        "flags": 768,
                        "start": 13,
                        "end": 15
                    },
                    "operatorToken": {
                        "kind": 35639,
                        "autofix": 0,
                        "flags": 0,
                        "start": 15,
                        "end": 17
                    },
                    "right": {
                        "kind": 81921,
                        "value": "e",
                        "autofix": 0,
                        "flags": 768,
                        "start": 17,
                        "end": 19
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 13,
                    "end": 19
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 19
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "a === b ? c : d % e;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

