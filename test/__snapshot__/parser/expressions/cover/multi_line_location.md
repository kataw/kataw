# Kataw parser test case

## Input

`````js
a = (
  b,
  c
)
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [
                            {
                                "kind": 81921,
                                "text": "b",
                                "rawText": "b",
                                "flags": 768,
                                "start": 5,
                                "end": 9
                            },
                            {
                                "kind": 81921,
                                "text": "c",
                                "rawText": "c",
                                "flags": 768,
                                "start": 10,
                                "end": 14
                            }
                        ],
                        "flags": 256,
                        "start": 3,
                        "end": 16
                    },
                    "flags": 256,
                    "start": 3,
                    "end": 16
                },
                "flags": 256,
                "start": 0,
                "end": 16
            },
            "flags": 128,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "a = (\n  b,\n  c\n)",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

