# Kataw parser test case

## Input

`````js
foo: do { bar: do continue bar;while(z) } while(z)
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
                "kind": 169,
                "expression": {
                    "kind": 81921,
                    "value": "z",
                    "autofix": 0,
                    "flags": 768,
                    "start": 48,
                    "end": 49
                },
                "statement": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [
                            {
                                "kind": 163,
                                "label": {
                                    "kind": 81921,
                                    "value": "bar",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 9,
                                    "end": 13
                                },
                                "statement": {
                                    "kind": 169,
                                    "expression": {
                                        "kind": 81921,
                                        "value": "z",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 37,
                                        "end": 38
                                    },
                                    "statement": {
                                        "kind": 172,
                                        "label": {
                                            "kind": 81921,
                                            "value": "bar",
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
                                    "end": 39
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 9,
                                "end": 39
                            }
                        ],
                        "multiLine": false,
                        "autofix": 0,
                        "flags": 128,
                        "start": 9,
                        "end": 39
                    },
                    "autofix": 0,
                    "flags": 128,
                    "start": 7,
                    "end": 41
                },
                "autofix": 0,
                "flags": 128,
                "start": 4,
                "end": 50
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "text": "foo: do { bar: do continue bar;while(z) } while(z)",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 50
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

