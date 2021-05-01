# Kataw parser test case

## Input

`````js
do x, y; while (z)
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 134299649,
                "original": "z",
                "text": "z",
                "rawText": "z",
                "flags": 96,
                "start": 16,
                "end": 17
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 0,
                "start": 8,
                "end": 14
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "original": "x",
                            "text": "x",
                            "rawText": " x",
                            "flags": 96,
                            "start": 2,
                            "end": 4
                        },
                        {
                            "kind": 134299649,
                            "original": "y",
                            "text": "y",
                            "rawText": " y",
                            "flags": 96,
                            "start": 5,
                            "end": 7
                        }
                    ],
                    "flags": 32,
                    "start": 2,
                    "end": 7
                },
                "flags": 16,
                "start": 2,
                "end": 8
            },
            "flags": 16,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "do x, y; while (z)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
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

