# Kataw parser test case

## Input

`````js
while (true) { continue /* Multiline\nComment */there; }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "expression": {
                "kind": 134,
                "text": true,
                "flags": 96,
                "start": 7,
                "end": 11
            },
            "statement": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [
                        {
                            "kind": 172,
                            "continueKeyword": {
                                "kind": 37757009,
                                "flags": 0,
                                "start": 14,
                                "end": 23
                            },
                            "label": {
                                "kind": 134299649,
                                "text": "there",
                                "rawText": "there",
                                "flags": 96,
                                "start": 23,
                                "end": 53
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 54
                        }
                    ],
                    "flags": 16,
                    "start": 14,
                    "end": 54
                },
                "flags": 16,
                "start": 12,
                "end": 56
            },
            "flags": 16,
            "start": 0,
            "end": 56
        }
    ],
    "isModule": false,
    "source": "while (true) { continue /* Multiline\\nComment */there; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 56
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

