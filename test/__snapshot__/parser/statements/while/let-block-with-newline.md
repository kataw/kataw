# Kataw parser test case

## Input

`````js
while (false) let // ASI
{}
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
                "text": false,
                "flags": 96,
                "start": 7,
                "end": 12
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "let",
                    "rawText": " let",
                    "flags": 96,
                    "start": 13,
                    "end": 17
                },
                "flags": 16,
                "start": 13,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 17
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 26,
                "end": 26
            },
            "flags": 16,
            "start": 17,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "while (false) let // ASI\n{}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
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

