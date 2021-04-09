# Kataw parser test case

## Input

`````js
a ? b : c ? d : e * x

typeof x;
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
                    "end": 3
                },
                "consequent": {
                    "kind": 81921,
                    "value": "b",
                    "autofix": 0,
                    "flags": 768,
                    "start": 3,
                    "end": 5
                },
                "colonToken": {
                    "kind": 21,
                    "autofix": 0,
                    "flags": 0,
                    "start": 5,
                    "end": 7
                },
                "alternate": {
                    "kind": 197,
                    "shortCircuit": {
                        "kind": 81921,
                        "value": "c",
                        "autofix": 0,
                        "flags": 768,
                        "start": 7,
                        "end": 9
                    },
                    "questionToken": {
                        "kind": 22,
                        "autofix": 0,
                        "flags": 0,
                        "start": 9,
                        "end": 11
                    },
                    "consequent": {
                        "kind": 81921,
                        "value": "d",
                        "autofix": 0,
                        "flags": 768,
                        "start": 11,
                        "end": 13
                    },
                    "colonToken": {
                        "kind": 21,
                        "autofix": 0,
                        "flags": 0,
                        "start": 13,
                        "end": 15
                    },
                    "alternate": {
                        "kind": 198,
                        "left": {
                            "kind": 81921,
                            "value": "e",
                            "autofix": 0,
                            "flags": 768,
                            "start": 15,
                            "end": 17
                        },
                        "operatorToken": {
                            "kind": 67143222,
                            "autofix": 0,
                            "flags": 0,
                            "start": 17,
                            "end": 19
                        },
                        "right": {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 19,
                            "end": 21
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 15,
                        "end": 21
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 7,
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
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 4259885,
                    "autofix": 0,
                    "flags": 0,
                    "start": 21,
                    "end": 29
                },
                "expression": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 29,
                    "end": 31
                },
                "autofix": 0,
                "flags": 256,
                "start": 21,
                "end": 31
            },
            "autofix": 0,
            "flags": 128,
            "start": 21,
            "end": 32
        }
    ],
    "isModule": false,
    "text": "a ? b : c ? d : e * x\n\ntypeof x;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

