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
    "directives": [],
    "statements": [
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "statement": {
                "kind": 163,
                "label": {
                    "kind": 134299649,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 768,
                    "start": 4,
                    "end": 8
                },
                "statement": {
                    "kind": 169,
                    "doKeyword": {
                        "kind": 4202580,
                        "flags": 0,
                        "start": 9,
                        "end": 12
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 768,
                        "start": 50,
                        "end": 51
                    },
                    "whileKeyword": {
                        "kind": 37757028,
                        "flags": 0,
                        "start": 43,
                        "end": 49
                    },
                    "statement": {
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [
                                {
                                    "kind": 169,
                                    "doKeyword": {
                                        "kind": 4202580,
                                        "flags": 0,
                                        "start": 14,
                                        "end": 17
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 768,
                                        "start": 38,
                                        "end": 39
                                    },
                                    "whileKeyword": {
                                        "kind": 37757028,
                                        "flags": 0,
                                        "start": 31,
                                        "end": 37
                                    },
                                    "statement": {
                                        "kind": 172,
                                        "continueKeyword": {
                                            "kind": 37757009,
                                            "flags": 0,
                                            "start": 17,
                                            "end": 26
                                        },
                                        "label": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
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
                                    "end": 41
                                }
                            ],
                            "multiLine": false,
                            "flags": 128,
                            "start": 14,
                            "end": 41
                        },
                        "flags": 128,
                        "start": 12,
                        "end": 43
                    },
                    "flags": 128,
                    "start": 9,
                    "end": 52
                },
                "flags": 128,
                "start": 4,
                "end": 52
            },
            "flags": 128,
            "start": 0,
            "end": 52
        }
    ],
    "isModule": false,
    "text": "foo: bar: do { do continue foo; while(z); } while(z)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 52
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

