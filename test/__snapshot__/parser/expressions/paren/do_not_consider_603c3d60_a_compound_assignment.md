# Kataw parser test case

## Input

`````js
(x + y) <= z
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
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 81921,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 1,
                            "end": 2
                        },
                        "operatorToken": {
                            "kind": 34098,
                            "flags": 768,
                            "start": 2,
                            "end": 4
                        },
                        "right": {
                            "kind": 81921,
                            "text": "y",
                            "rawText": "y",
                            "flags": 768,
                            "start": 4,
                            "end": 6
                        },
                        "flags": 256,
                        "start": 0,
                        "end": 6
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 7
                },
                "operatorToken": {
                    "kind": 34880,
                    "flags": 768,
                    "start": 7,
                    "end": 10
                },
                "right": {
                    "kind": 81921,
                    "text": "z",
                    "rawText": "z",
                    "flags": 768,
                    "start": 10,
                    "end": 12
                },
                "flags": 256,
                "start": 0,
                "end": 12
            },
            "flags": 128,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "text": "(x + y) <= z",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 12
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

