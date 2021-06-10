# Kataw parser test case

## Input

`````js
foo: bar: do { do continue foo; while(z); } while(z)
`````

## Output

### CST

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
                "flags": 96,
                "start": 0,
                "end": 3
            },
            "colonToken": {
                "kind": 21,
                "flags": 64,
                "start": 3,
                "end": 4
            },
            "statement": {
                "kind": 163,
                "label": {
                    "kind": 134299649,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 96,
                    "start": 4,
                    "end": 8
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 8,
                    "end": 9
                },
                "statement": {
                    "kind": 169,
                    "doKeyword": {
                        "kind": 4202580,
                        "flags": 80,
                        "start": 9,
                        "end": 12
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "start": 50,
                        "end": 51
                    },
                    "whileKeyword": {
                        "kind": 37757028,
                        "flags": 64,
                        "start": 43,
                        "end": 49
                    },
                    "statement": {
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [
                                {
                                    "kind": 169,
                                    "doKeyword": {
                                        "kind": 4202580,
                                        "flags": 80,
                                        "start": 14,
                                        "end": 17
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "start": 38,
                                        "end": 39
                                    },
                                    "whileKeyword": {
                                        "kind": 37757028,
                                        "flags": 64,
                                        "start": 31,
                                        "end": 37
                                    },
                                    "statement": {
                                        "kind": 172,
                                        "continueKeyword": {
                                            "kind": 37757009,
                                            "flags": 80,
                                            "start": 17,
                                            "end": 26
                                        },
                                        "label": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 26,
                                            "end": 30
                                        },
                                        "flags": 16,
                                        "start": 17,
                                        "end": 31
                                    },
                                    "flags": 80,
                                    "start": 14,
                                    "end": 41
                                }
                            ],
                            "flags": 16,
                            "start": 14,
                            "end": 41
                        },
                        "flags": 16,
                        "start": 12,
                        "end": 43
                    },
                    "flags": 80,
                    "start": 9,
                    "end": 52
                },
                "flags": 16,
                "start": 4,
                "end": 52
            },
            "flags": 16,
            "start": 0,
            "end": 52
        }
    ],
    "isModule": false,
    "source": "foo: bar: do { do continue foo; while(z); } while(z)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 52
}
```

### Printed

```javascript

foo: bar: do {}
while (z);
```

### Diagnostics

```javascript
✔ No errors
```

