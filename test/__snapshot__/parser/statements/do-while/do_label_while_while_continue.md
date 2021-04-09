# Kataw parser test case

## Input

`````js
do wow: while (x) while (x) continue wow;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 169,
            "expression": {
                "kind": 253,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 41,
                "end": 41
            },
            "statement": {
                "kind": 163,
                "label": {
                    "kind": 81921,
                    "value": "wow",
                    "autofix": 0,
                    "flags": 768,
                    "start": 2,
                    "end": 6
                },
                "statement": {
                    "kind": 154,
                    "expression": {
                        "kind": 81921,
                        "value": "x",
                        "autofix": 0,
                        "flags": 768,
                        "start": 15,
                        "end": 16
                    },
                    "statement": {
                        "kind": 154,
                        "expression": {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 25,
                            "end": 26
                        },
                        "statement": {
                            "kind": 172,
                            "label": {
                                "kind": 81921,
                                "value": "wow",
                                "autofix": 0,
                                "flags": 768,
                                "start": 36,
                                "end": 40
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 27,
                            "end": 41
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 17,
                        "end": 41
                    },
                    "autofix": 0,
                    "flags": 128,
                    "start": 7,
                    "end": 41
                },
                "autofix": 0,
                "flags": 128,
                "start": 2,
                "end": 41
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "text": "do wow: while (x) while (x) continue wow;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 41,
            "end": 41
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 41,
            "end": 41
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 41,
            "end": 41
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 41,
            "end": 41
        }
    ],
    "start": 0,
    "end": 41
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

