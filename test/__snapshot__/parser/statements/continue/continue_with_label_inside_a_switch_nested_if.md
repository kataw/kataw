# Kataw parser test case

## Input

`````js
switch (x) { case x: if (foo) continue foo; }
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
                                "kind": 164,
                                "expression": {
                                    "kind": 81921,
                                    "value": "foo",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 25,
                                    "end": 28
                                },
                                "consequent": {
                                    "kind": 172,
                                    "label": {
                                        "kind": 81921,
                                        "value": "foo",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 38,
                                        "end": 42
                                    },
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 29,
                                    "end": 43
                                },
                                "alternate": null,
                                "autofix": 0,
                                "flags": 128,
                                "start": 20,
                                "end": 43
                            }
                        ],
                        "autofix": 0,
                        "flags": 128,
                        "start": 12,
                        "end": 43
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 10,
                "end": 45
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "text": "switch (x) { case x: if (foo) continue foo; }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 45,
            "error": "A 'continue' statement can only be used within an enclosing iteration statement.",
            "start": 29,
            "end": 38
        }
    ],
    "start": 0,
    "end": 45
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

