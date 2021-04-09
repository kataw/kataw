# Kataw parser test case

## Input

`````js
!3 ** 2;
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
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "autofix": 0,
                        "flags": 0,
                        "start": 0,
                        "end": 1
                    },
                    "expression": {
                        "kind": 81921,
                        "value": 3,
                        "autofix": 0,
                        "flags": 768,
                        "start": 1,
                        "end": 2
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 2
                },
                "operatorToken": {
                    "kind": 35897,
                    "autofix": 0,
                    "flags": 0,
                    "start": 2,
                    "end": 5
                },
                "right": {
                    "kind": 81921,
                    "value": 2,
                    "autofix": 0,
                    "flags": 768,
                    "start": 5,
                    "end": 7
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 7
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 8
        }
    ],
    "isModule": false,
    "text": "!3 ** 2;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 14,
            "error": "Unary expressions as the left operand of an exponentation expression must be disambiguated with parentheses",
            "start": 2,
            "end": 5
        }
    ],
    "start": 0,
    "end": 8
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

