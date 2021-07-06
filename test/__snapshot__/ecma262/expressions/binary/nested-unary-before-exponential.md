# Kataw parser test case

## Input

`````js
(-+5 ** 6);
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
                            "kind": 134318643,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 2
                        },
                        "operand": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 99634,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 3
                            },
                            "operand": {
                                "kind": 201392130,
                                "text": 5,
                                "rawText": "5",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 3,
                                "end": 4
                            },
                            "flags": 32,
                            "transformFlags": 1024,
                            "start": 2,
                            "end": 4
                        },
                        "flags": 32,
                        "transformFlags": 1024,
                        "start": 1,
                        "end": 4
                    },
                    "operatorToken": {
                        "kind": 35897,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 4,
                        "end": 7
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 6,
                        "rawText": "6",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 9
                    },
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 1,
                    "end": 9
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 10
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "source": "(-+5 ** 6);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Unary expressions as the left operand of an exponentation expression must be disambiguated with parentheses - start: 4, end: 7
✖ Unary expressions as the left operand of an exponentation expression must be disambiguated with parentheses - start: 4, end: 7

```

