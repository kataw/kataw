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
    "directives": [],
    "statements": [
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 134299649,
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
                                "flags": 12,
                                "start": 0,
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
    "start": 0,
    "end": 21
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

