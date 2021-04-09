# Kataw parser test case

## Input

`````js
switch(x) { default: break; case y: break; case z: break; default: break; }
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
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 7,
                "end": 8
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 170,
                        "statements": [
                            {
                                "kind": 150,
                                "label": null,
                                "autofix": 0,
                                "flags": 128,
                                "start": 20,
                                "end": 27
                            }
                        ],
                        "autofix": 0,
                        "flags": 128,
                        "start": 11,
                        "end": 27
                    },
                    {
                        "kind": 175,
                        "expression": {
                            "kind": 81921,
                            "value": "y",
                            "autofix": 0,
                            "flags": 768,
                            "start": 32,
                            "end": 34
                        },
                        "statements": [
                            {
                                "kind": 150,
                                "label": null,
                                "autofix": 0,
                                "flags": 128,
                                "start": 35,
                                "end": 42
                            }
                        ],
                        "autofix": 0,
                        "flags": 128,
                        "start": 27,
                        "end": 42
                    },
                    {
                        "kind": 175,
                        "expression": {
                            "kind": 81921,
                            "value": "z",
                            "autofix": 0,
                            "flags": 768,
                            "start": 47,
                            "end": 49
                        },
                        "statements": [
                            {
                                "kind": 150,
                                "label": null,
                                "autofix": 0,
                                "flags": 128,
                                "start": 50,
                                "end": 57
                            }
                        ],
                        "autofix": 0,
                        "flags": 128,
                        "start": 42,
                        "end": 57
                    },
                    {
                        "kind": 170,
                        "statements": [
                            {
                                "kind": 150,
                                "label": null,
                                "autofix": 0,
                                "flags": 128,
                                "start": 66,
                                "end": 73
                            }
                        ],
                        "autofix": 0,
                        "flags": 128,
                        "start": 57,
                        "end": 73
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 9,
                "end": 75
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 75
        }
    ],
    "isModule": false,
    "text": "switch(x) { default: break; case y: break; case z: break; default: break; }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 75
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

