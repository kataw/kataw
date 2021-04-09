# Kataw parser test case

## Input

`````js
switch(x) { case y: break; case z: break; default: default: }
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
                        "kind": 175,
                        "expression": {
                            "kind": 81921,
                            "value": "y",
                            "autofix": 0,
                            "flags": 768,
                            "start": 16,
                            "end": 18
                        },
                        "statements": [
                            {
                                "kind": 150,
                                "label": null,
                                "autofix": 0,
                                "flags": 128,
                                "start": 19,
                                "end": 26
                            }
                        ],
                        "autofix": 0,
                        "flags": 128,
                        "start": 11,
                        "end": 26
                    },
                    {
                        "kind": 175,
                        "expression": {
                            "kind": 81921,
                            "value": "z",
                            "autofix": 0,
                            "flags": 768,
                            "start": 31,
                            "end": 33
                        },
                        "statements": [
                            {
                                "kind": 150,
                                "label": null,
                                "autofix": 0,
                                "flags": 128,
                                "start": 34,
                                "end": 41
                            }
                        ],
                        "autofix": 0,
                        "flags": 128,
                        "start": 26,
                        "end": 41
                    },
                    {
                        "kind": 170,
                        "statements": [],
                        "autofix": 0,
                        "flags": 128,
                        "start": 41,
                        "end": 50
                    },
                    {
                        "kind": 170,
                        "statements": [],
                        "autofix": 0,
                        "flags": 128,
                        "start": 50,
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
    "text": "switch(x) { case y: break; case z: break; default: default: }",
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

