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
    "directives": [],
    "statements": [
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "original": "foo",
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 0,
                "end": 3
            },
            "labels": [
                {
                    "kind": 256,
                    "label": "foo",
                    "iterationStatement": false,
                    "flags": 16,
                    "start": 0,
                    "end": 3
                },
                {
                    "kind": 256,
                    "label": "bar",
                    "iterationStatement": false,
                    "flags": 16,
                    "start": 9,
                    "end": 13
                }
            ],
            "colonToken": {
                "kind": 21,
                "flags": 0,
                "start": 3,
                "end": 4
            },
            "statement": {
                "kind": 169,
                "doKeyword": {
                    "kind": 4202580,
                    "flags": 0,
                    "start": 4,
                    "end": 7
                },
                "expression": {
                    "kind": 134299649,
                    "original": "z",
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "start": 48,
                    "end": 49
                },
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 0,
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
                                    "kind": 134299649,
                                    "original": "bar",
                                    "text": "bar",
                                    "rawText": " bar",
                                    "flags": 96,
                                    "start": 9,
                                    "end": 13
                                },
                                "labels": [
                                    {
                                        "kind": 256,
                                        "label": "foo",
                                        "iterationStatement": false,
                                        "flags": 16,
                                        "start": 0,
                                        "end": 3
                                    },
                                    {
                                        "kind": 256,
                                        "label": "bar",
                                        "iterationStatement": false,
                                        "flags": 16,
                                        "start": 9,
                                        "end": 13
                                    }
                                ],
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 0,
                                    "start": 13,
                                    "end": 14
                                },
                                "statement": {
                                    "kind": 169,
                                    "doKeyword": {
                                        "kind": 4202580,
                                        "flags": 0,
                                        "start": 14,
                                        "end": 17
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "original": "z",
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "start": 37,
                                        "end": 38
                                    },
                                    "whileKeyword": {
                                        "kind": 37757028,
                                        "flags": 0,
                                        "start": 31,
                                        "end": 36
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
                                            "original": "bar",
                                            "text": "bar",
                                            "rawText": " bar",
                                            "flags": 96,
                                            "start": 26,
                                            "end": 30
                                        },
                                        "flags": 16,
                                        "start": 17,
                                        "end": 31
                                    },
                                    "flags": 16,
                                    "start": 14,
                                    "end": 39
                                },
                                "flags": 16,
                                "start": 9,
                                "end": 39
                            }
                        ],
                        "flags": 16,
                        "start": 9,
                        "end": 39
                    },
                    "flags": 16,
                    "start": 7,
                    "end": 41
                },
                "flags": 16,
                "start": 4,
                "end": 50
            },
            "flags": 16,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "foo: do { bar: do continue bar;while(z) } while(z)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 50
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

