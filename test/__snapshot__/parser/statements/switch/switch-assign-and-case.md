# Kataw parser test case

## Input

`````js
switch([x = y]) { case y: foo }
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
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 125,
                            "left": {
                                "kind": 81921,
                                "value": "x",
                                "autofix": 0,
                                "flags": 768,
                                "start": 8,
                                "end": 9
                            },
                            "operatorToken": {
                                "kind": 81921,
                                "autofix": 0,
                                "flags": 0,
                                "start": 8,
                                "end": 11
                            },
                            "right": {
                                "kind": 81921,
                                "value": "y",
                                "autofix": 0,
                                "flags": 768,
                                "start": 11,
                                "end": 13
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 8,
                            "end": 13
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 8,
                    "end": 13
                },
                "autofix": 0,
                "flags": 256,
                "start": 7,
                "end": 14
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
                            "start": 22,
                            "end": 24
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 81921,
                                    "value": "foo",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 25,
                                    "end": 29
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 25,
                                "end": 29
                            }
                        ],
                        "autofix": 0,
                        "flags": 128,
                        "start": 17,
                        "end": 29
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 15,
                "end": 31
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "switch([x = y]) { case y: foo }",
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

