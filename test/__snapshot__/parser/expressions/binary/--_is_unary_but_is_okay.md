# Kataw parser test case

## Input

`````js
(--x ** a)
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
                    "kind": 128,
                    "operandToken": {
                        "kind": 196636,
                        "flags": 768,
                        "start": 1,
                        "end": 3
                    },
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 81921,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 3,
                            "end": 4
                        },
                        "operatorToken": {
                            "kind": 35897,
                            "flags": 768,
                            "start": 4,
                            "end": 7
                        },
                        "right": {
                            "kind": 81921,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 7,
                            "end": 9
                        },
                        "flags": 256,
                        "start": 3,
                        "end": 9
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 9
                },
                "flags": 256,
                "start": 0,
                "end": 10
            },
            "flags": 128,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "text": "(--x ** a)",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 25,
            "error": "The operand of an increment or decrement operator must be a variable or a property access",
            "start": 9,
            "end": 10
        }
    ],
    "start": 0,
    "end": 10
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

