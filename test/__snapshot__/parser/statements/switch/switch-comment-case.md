# Kataw parser test case

## Input

`````js
switch(x) /* comment */ { case y: foo }
`````

## Options

### Parser Options

`````js
{}
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
                            "start": 30,
                            "end": 32
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 81921,
                                    "value": "foo",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 33,
                                    "end": 37
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 33,
                                "end": 37
                            }
                        ],
                        "autofix": 0,
                        "flags": 128,
                        "start": 25,
                        "end": 37
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 9,
                "end": 39
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "text": "switch(x) /* comment */ { case y: foo }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

