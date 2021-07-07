# Kataw parser test case

## Input

`````js
(~3 ** 2)
`````

## Output

### CST

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
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 2
                        },
                        "operand": {
                            "kind": 201392130,
                            "text": 3,
                            "rawText": "3",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 3
                        },
                        "flags": 32,
                        "transformFlags": 1024,
                        "start": 1,
                        "end": 3
                    },
                    "operatorToken": {
                        "kind": 35897,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 6
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 2,
                        "rawText": "2",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 8
                    },
                    "flags": 32,
                    "transformFlags": 5120,
                    "start": 1,
                    "end": 8
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 9
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "source": "(~3 ** 2)",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Unary expressions as the left operand of an exponentation expression must be disambiguated with parentheses - start: 3, end: 6

```

