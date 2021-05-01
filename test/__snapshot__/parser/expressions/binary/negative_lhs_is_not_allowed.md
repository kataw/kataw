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
                            "kind": 35379,
                            "flags": 64,
                            "start": 1,
                            "end": 2
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 2,
                            "end": 3
                        },
                        "flags": 32,
                        "start": 1,
                        "end": 3
                    },
                    "operatorToken": {
                        "kind": 35897,
                        "flags": 64,
                        "start": 3,
                        "end": 6
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 2,
                        "rawText": "2",
                        "flags": 96,
                        "start": 6,
                        "end": 8
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 8
                },
                "flags": 32,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "source": "(-x ** 2)",
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

