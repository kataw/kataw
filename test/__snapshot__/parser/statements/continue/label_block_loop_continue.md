# Kataw parser test case

## Input

`````js
foo: { while(z) continue foo }
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
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [
                        {
                            "kind": 154,
                            "expression": {
                                "kind": 81921,
                                "value": "z",
                                "autofix": 0,
                                "flags": 768,
                                "start": 13,
                                "end": 14
                            },
                            "statement": {
                                "kind": 172,
                                "label": {
                                    "kind": 81921,
                                    "value": "foo",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 24,
                                    "end": 28
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 15,
                                "end": 28
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 6,
                            "end": 28
                        }
                    ],
                    "multiLine": false,
                    "autofix": 0,
                    "flags": 128,
                    "start": 6,
                    "end": 28
                },
                "autofix": 0,
                "flags": 128,
                "start": 4,
                "end": 30
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "foo: { while(z) continue foo }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

