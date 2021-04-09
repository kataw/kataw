# Kataw parser test case

## Input

`````js
foo: bar: do { do continue foo; while(z); } while(z)
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 163,
            "label": {
                "kind": 81921,
                "value": "foo",
                "autofix": 0,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "statement": {
                "kind": 163,
                "label": {
                    "kind": 81921,
                    "value": "bar",
                    "autofix": 0,
                    "flags": 768,
                    "start": 4,
                    "end": 8
                },
                "statement": {
                    "kind": 169,
                    "expression": {
                        "kind": 81921,
                        "value": "z",
                        "autofix": 0,
                        "flags": 768,
                        "start": 50,
                        "end": 51
                    },
                    "statement": {
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [
                                {
                                    "kind": 169,
                                    "expression": {
                                        "kind": 81921,
                                        "value": "z",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 38,
                                        "end": 39
                                    },
                                    "statement": {
                                        "kind": 172,
                                        "label": {
                                            "kind": 81921,
                                            "value": "foo",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 26,
                                            "end": 30
                                        },
                                        "autofix": 0,
                                        "flags": 128,
                                        "start": 17,
                                        "end": 31
                                    },
                                    "autofix": 0,
                                    "flags": 128,
                                    "start": 14,
                                    "end": 41
                                }
                            ],
                            "multiLine": false,
                            "autofix": 0,
                            "flags": 128,
                            "start": 14,
                            "end": 41
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 12,
                        "end": 43
                    },
                    "autofix": 0,
                    "flags": 128,
                    "start": 9,
                    "end": 52
                },
                "autofix": 0,
                "flags": 128,
                "start": 4,
                "end": 52
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 52
        }
    ],
    "isModule": false,
    "text": "foo: bar: do { do continue foo; while(z); } while(z)",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 52
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

