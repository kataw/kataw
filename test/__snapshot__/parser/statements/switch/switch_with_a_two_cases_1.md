# Kataw parser test case

## Input

`````js
switch (A) {case B: C; case D: E;}
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
                        "kind": 175,
                        "expression": {
                            "kind": 81921,
                            "value": "B",
                            "autofix": 0,
                            "flags": 768,
                            "start": 16,
                            "end": 18
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 81921,
                                    "value": "C",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 19,
                                    "end": 21
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 19,
                                "end": 22
                            }
                        ],
                        "autofix": 0,
                        "flags": 128,
                        "start": 12,
                        "end": 22
                    },
                    {
                        "kind": 175,
                        "expression": {
                            "kind": 81921,
                            "value": "D",
                            "autofix": 0,
                            "flags": 768,
                            "start": 27,
                            "end": 29
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 81921,
                                    "value": "E",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 30,
                                    "end": 32
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 30,
                                "end": 33
                            }
                        ],
                        "autofix": 0,
                        "flags": 128,
                        "start": 22,
                        "end": 33
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 10,
                "end": 34
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "text": "switch (A) {case B: C; case D: E;}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

