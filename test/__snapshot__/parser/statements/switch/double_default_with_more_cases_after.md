# Kataw parser test case

## Input

`````js
switch(x) { default: default: case y: break; case z: break; }
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
                        "statements": [],
                        "autofix": 0,
                        "flags": 128,
                        "start": 11,
                        "end": 20
                    },
                    {
                        "kind": 170,
                        "statements": [],
                        "autofix": 0,
                        "flags": 128,
                        "start": 20,
                        "end": 29
                    },
                    {
                        "kind": 175,
                        "expression": {
                            "kind": 81921,
                            "value": "y",
                            "autofix": 0,
                            "flags": 768,
                            "start": 34,
                            "end": 36
                        },
                        "statements": [
                            {
                                "kind": 150,
                                "label": null,
                                "autofix": 0,
                                "flags": 128,
                                "start": 37,
                                "end": 44
                            }
                        ],
                        "autofix": 0,
                        "flags": 128,
                        "start": 29,
                        "end": 44
                    },
                    {
                        "kind": 175,
                        "expression": {
                            "kind": 81921,
                            "value": "z",
                            "autofix": 0,
                            "flags": 768,
                            "start": 49,
                            "end": 51
                        },
                        "statements": [
                            {
                                "kind": 150,
                                "label": null,
                                "autofix": 0,
                                "flags": 128,
                                "start": 52,
                                "end": 59
                            }
                        ],
                        "autofix": 0,
                        "flags": 128,
                        "start": 44,
                        "end": 59
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 9,
                "end": 61
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 61
        }
    ],
    "isModule": false,
    "text": "switch(x) { default: default: case y: break; case z: break; }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 61
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

