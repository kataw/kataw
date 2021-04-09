# Kataw parser test case

## Input

`````js
switch (x) { case y: break; default: return; }
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
                            "value": "y",
                            "autofix": 0,
                            "flags": 768,
                            "start": 17,
                            "end": 19
                        },
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
                        "start": 12,
                        "end": 27
                    },
                    {
                        "kind": 170,
                        "statements": [
                            {
                                "kind": 161,
                                "expression": null,
                                "autofix": 0,
                                "flags": 128,
                                "start": 0,
                                "end": 36
                            }
                        ],
                        "autofix": 0,
                        "flags": 128,
                        "start": 27,
                        "end": 44
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 10,
                "end": 46
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 46
        }
    ],
    "isModule": false,
    "text": "switch (x) { case y: break; default: return; }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 33,
            "error": "A return statement can only be used within a function_body",
            "start": 36,
            "end": 43
        }
    ],
    "start": 0,
    "end": 46
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

