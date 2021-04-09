# Kataw parser test case

## Input

`````js
loop: while (x) { break loop; }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 163,
            "label": {
                "kind": 81921,
                "value": "loop",
                "autofix": 0,
                "flags": 768,
                "start": 0,
                "end": 4
            },
            "statement": {
                "kind": 154,
                "expression": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 13,
                    "end": 14
                },
                "statement": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [
                            {
                                "kind": 150,
                                "label": {
                                    "kind": 81921,
                                    "value": "loop",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 23,
                                    "end": 28
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 17,
                                "end": 29
                            }
                        ],
                        "multiLine": false,
                        "autofix": 0,
                        "flags": 128,
                        "start": 17,
                        "end": 29
                    },
                    "autofix": 0,
                    "flags": 128,
                    "start": 15,
                    "end": 31
                },
                "autofix": 0,
                "flags": 128,
                "start": 5,
                "end": 31
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "loop: while (x) { break loop; }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

