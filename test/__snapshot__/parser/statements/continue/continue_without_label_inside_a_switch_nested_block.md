# Kataw parser test case

## Input

`````js
switch (x) { case x: {continue;} }
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
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 17,
                            "end": 19
                        },
                        "statements": [
                            {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [
                                        {
                                            "kind": 172,
                                            "label": null,
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 22,
                                            "end": 31
                                        }
                                    ],
                                    "multiLine": false,
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 22,
                                    "end": 31
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 20,
                                "end": 32
                            }
                        ],
                        "autofix": 0,
                        "flags": 128,
                        "start": 12,
                        "end": 32
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
    "text": "switch (x) { case x: {continue;} }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 45,
            "error": "A 'continue' statement can only be used within an enclosing iteration statement.",
            "start": 22,
            "end": 30
        }
    ],
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

