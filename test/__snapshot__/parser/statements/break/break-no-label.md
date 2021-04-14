# Kataw parser test case

## Input

`````js
 while (x) { break; }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 768,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 81921,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 8,
                "end": 9
            },
            "statement": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [
                        {
                            "kind": 150,
                            "breakKeyword": {
                                "kind": 37757005,
                                "flags": 768,
                                "start": 12,
                                "end": 18
                            },
                            "label": null,
                            "flags": 128,
                            "start": 12,
                            "end": 19
                        }
                    ],
                    "multiLine": false,
                    "flags": 128,
                    "start": 12,
                    "end": 19
                },
                "flags": 128,
                "start": 10,
                "end": 21
            },
            "flags": 128,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "text": " while (x) { break; }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

