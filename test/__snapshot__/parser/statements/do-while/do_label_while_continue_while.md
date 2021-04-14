# Kataw parser test case

## Input

`````js
do wow: while (x) continue wow; while (x)
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 768,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 81921,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 39,
                "end": 40
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 768,
                "start": 31,
                "end": 37
            },
            "statement": {
                "kind": 163,
                "label": {
                    "kind": 81921,
                    "text": "wow",
                    "rawText": "wow",
                    "flags": 768,
                    "start": 2,
                    "end": 6
                },
                "statement": {
                    "kind": 154,
                    "whileKeyword": {
                        "kind": 37757028,
                        "flags": 768,
                        "start": 7,
                        "end": 13
                    },
                    "expression": {
                        "kind": 81921,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 15,
                        "end": 16
                    },
                    "statement": {
                        "kind": 172,
                        "continueKeyword": {
                            "kind": 37757009,
                            "flags": 768,
                            "start": 17,
                            "end": 26
                        },
                        "label": {
                            "kind": 81921,
                            "text": "wow",
                            "rawText": "wow",
                            "flags": 768,
                            "start": 26,
                            "end": 30
                        },
                        "flags": 128,
                        "start": 17,
                        "end": 31
                    },
                    "flags": 128,
                    "start": 7,
                    "end": 31
                },
                "flags": 128,
                "start": 2,
                "end": 31
            },
            "flags": 128,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "text": "do wow: while (x) continue wow; while (x)",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
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

