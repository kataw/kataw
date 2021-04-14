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
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "statement": {
                "kind": 169,
                "doKeyword": {
                    "kind": 4202580,
                    "flags": 768,
                    "start": 4,
                    "end": 7
                },
                "expression": {
                    "kind": 81921,
                    "text": "z",
                    "rawText": "z",
                    "flags": 768,
                    "start": 48,
                    "end": 49
                },
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 768,
                    "start": 41,
                    "end": 47
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
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 768,
                                    "start": 9,
                                    "end": 13
                                },
                                "statement": {
                                    "kind": 169,
                                    "doKeyword": {
                                        "kind": 4202580,
                                        "flags": 768,
                                        "start": 14,
                                        "end": 17
                                    },
                                    "expression": {
                                        "kind": 81921,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 768,
                                        "start": 37,
                                        "end": 38
                                    },
                                    "whileKeyword": {
                                        "kind": 37757028,
                                        "flags": 768,
                                        "start": 31,
                                        "end": 36
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
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 768,
                                            "start": 26,
                                            "end": 30
                                        },
                                        "flags": 128,
                                        "start": 17,
                                        "end": 31
                                    },
                                    "flags": 128,
                                    "start": 14,
                                    "end": 39
                                },
                                "flags": 128,
                                "start": 9,
                                "end": 39
                            }
                        ],
                        "multiLine": false,
                        "flags": 128,
                        "start": 9,
                        "end": 39
                    },
                    "flags": 128,
                    "start": 7,
                    "end": 41
                },
                "flags": 128,
                "start": 4,
                "end": 50
            },
            "flags": 128,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "text": "foo: do { bar: do continue bar;while(z) } while(z)",
    "fileName": "__root__",
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

