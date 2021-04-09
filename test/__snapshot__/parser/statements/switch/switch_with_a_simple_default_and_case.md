# Kataw parser test case

## Input

`````js
switch (A) {default: D; case B: C; }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 160,
            "expression": {
                "kind": 81921,
                "value": "A",
                "autofix": 0,
                "flags": 768,
                "start": 8,
                "end": 9
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 170,
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 81921,
                                    "value": "D",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 20,
                                    "end": 22
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 20,
                                "end": 23
                            }
                        ],
                        "autofix": 0,
                        "flags": 128,
                        "start": 12,
                        "end": 23
                    },
                    {
                        "kind": 175,
                        "expression": {
                            "kind": 81921,
                            "value": "B",
                            "autofix": 0,
                            "flags": 768,
                            "start": 28,
                            "end": 30
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 81921,
                                    "value": "C",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 31,
                                    "end": 33
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 31,
                                "end": 34
                            }
                        ],
                        "autofix": 0,
                        "flags": 128,
                        "start": 23,
                        "end": 34
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 10,
                "end": 36
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "text": "switch (A) {default: D; case B: C; }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 36
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

