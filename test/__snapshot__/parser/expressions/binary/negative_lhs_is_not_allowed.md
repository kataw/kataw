# Kataw parser test case

## Input

`````js
(-x ** 2)
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
                "kind": 121,
                "expression": {
                    "kind": 198,
                    "left": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 35379,
                            "autofix": 0,
                            "flags": 0,
                            "start": 1,
                            "end": 2
                        },
                        "expression": {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 2,
                            "end": 3
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 3
                    },
                    "operatorToken": {
                        "kind": 35897,
                        "autofix": 0,
                        "flags": 0,
                        "start": 3,
                        "end": 6
                    },
                    "right": {
                        "kind": 81921,
                        "value": 2,
                        "autofix": 0,
                        "flags": 768,
                        "start": 6,
                        "end": 8
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 8
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 9
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "text": "(-x ** 2)",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 14,
            "error": "Unary expressions as the left operand of an exponentation expression must be disambiguated with parentheses",
            "start": 3,
            "end": 6
        }
    ],
    "start": 0,
    "end": 9
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

