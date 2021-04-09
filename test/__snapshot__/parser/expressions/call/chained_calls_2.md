# Kataw parser test case

## Input

`````js
foo(a)(b)(c)(d)(e)
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 131,
                        "expression": {
                            "kind": 131,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 81921,
                                    "value": "foo",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 0,
                                    "end": 3
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 81921,
                                            "value": "a",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 4,
                                            "end": 5
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 4,
                                    "end": 5
                                },
                                "flags": 256,
                                "start": 0,
                                "end": 6
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 81921,
                                        "value": "b",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 7,
                                        "end": 8
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 7,
                                "end": 8
                            },
                            "flags": 256,
                            "start": 0,
                            "end": 9
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 81921,
                                    "value": "c",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 10,
                                    "end": 11
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 10,
                            "end": 11
                        },
                        "flags": 256,
                        "start": 0,
                        "end": 12
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 81921,
                                "value": "d",
                                "autofix": 0,
                                "flags": 768,
                                "start": 13,
                                "end": 14
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 13,
                        "end": 14
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 15
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 81921,
                            "value": "e",
                            "autofix": 0,
                            "flags": 768,
                            "start": 16,
                            "end": 17
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 16,
                    "end": 17
                },
                "flags": 256,
                "start": 0,
                "end": 18
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "text": "foo(a)(b)(c)(d)(e)",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

