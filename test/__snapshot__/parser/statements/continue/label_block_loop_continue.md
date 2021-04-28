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
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [
                        {
                            "kind": 154,
                            "whileKeyword": {
                                "kind": 37757028,
                                "flags": 768,
                                "start": 6,
                                "end": 12
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "z",
                                "rawText": "z",
                                "flags": 768,
                                "start": 13,
                                "end": 14
                            },
                            "statement": {
                                "kind": 172,
                                "continueKeyword": {
                                    "kind": 37757009,
                                    "flags": 768,
                                    "start": 15,
                                    "end": 24
                                },
                                "label": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 768,
                                    "start": 24,
                                    "end": 28
                                },
                                "flags": 128,
                                "start": 15,
                                "end": 28
                            },
                            "flags": 128,
                            "start": 6,
                            "end": 28
                        }
                    ],
                    "multiLine": false,
                    "flags": 128,
                    "start": 6,
                    "end": 28
                },
                "flags": 128,
                "start": 4,
                "end": 30
            },
            "flags": 128,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "foo: { while(z) continue foo }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
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

