# Kataw parser test case

## Input

`````js
foo: while(z) { while(z) continue foo }
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
                }
            ],
            "colonToken": {
                "kind": 21,
                "flags": 0,
                "start": 3,
                "end": 4
            },
            "statement": {
                "kind": 154,
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 0,
                    "start": 4,
                    "end": 10
                },
                "expression": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "start": 11,
                    "end": 12
                },
                "statement": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [
                            {
                                "kind": 154,
                                "whileKeyword": {
                                    "kind": 37757028,
                                    "flags": 0,
                                    "start": 15,
                                    "end": 21
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "z",
                                    "rawText": "z",
                                    "flags": 96,
                                    "start": 22,
                                    "end": 23
                                },
                                "statement": {
                                    "kind": 172,
                                    "continueKeyword": {
                                        "kind": 37757009,
                                        "flags": 0,
                                        "start": 24,
                                        "end": 33
                                    },
                                    "label": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 33,
                                        "end": 37
                                    },
                                    "flags": 16,
                                    "start": 24,
                                    "end": 37
                                },
                                "flags": 16,
                                "start": 15,
                                "end": 37
                            }
                        ],
                        "flags": 16,
                        "start": 15,
                        "end": 37
                    },
                    "flags": 16,
                    "start": 13,
                    "end": 39
                },
                "flags": 16,
                "start": 4,
                "end": 39
            },
            "flags": 16,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "foo: while(z) { while(z) continue foo }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
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

