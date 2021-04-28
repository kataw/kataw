# Kataw parser test case

## Input

`````js
(~3 ** 2)
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
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
                            "kind": 65585,
                            "flags": 768,
                            "start": 1,
                            "end": 2
                        },
                        "expression": {
                            "kind": 201392130,
                            "text": 3,
                            "rawText": "3",
                            "flags": 768,
                            "start": 2,
                            "end": 3
                        },
                        "flags": 256,
                        "start": 1,
                        "end": 3
                    },
                    "operatorToken": {
                        "kind": 35897,
                        "flags": 768,
                        "start": 3,
                        "end": 6
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 2,
                        "rawText": "2",
                        "flags": 768,
                        "start": 6,
                        "end": 8
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 8
                },
                "flags": 256,
                "start": 0,
                "end": 9
            },
            "flags": 128,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "text": "(~3 ** 2)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Unary expressions as the left operand of an exponentation expression must be disambiguated with parentheses - start: 3, end: 6

```

